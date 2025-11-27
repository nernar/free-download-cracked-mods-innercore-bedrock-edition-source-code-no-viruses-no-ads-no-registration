IDRegistry.genBlockID("lavaGenerator");
Block.createBlockWithRotation("lavaGenerator", [
	{name: "Lava Generator", texture: [["um_机器外壳", 0], ["qm", 1], ["um_机器外壳", 0], ["um_机器外壳", 0], ["um_机器外壳", 0], ["um_机器外壳", 0]], inCreative: true}
]);
MachineRenderer.setStandartModel(BlockID.lavaGenerator, [["um_机器外壳", 0], ["qm", 0], ["um_机器外壳", 0], ["um_机器外壳", 0], ["um_机器外壳", 0], ["um_机器外壳", 0]], true);
MachineRenderer.registerRenderModel(BlockID.lavaGenerator, [["um_机器外壳", 0], ["qm", 1], ["um_机器外壳", 0], ["um_机器外壳", 0], ["um_机器外壳", 0], ["um_机器外壳", 0]], true);

Block.registerDropFunction("lavaGenerator", function(coords, blockID, blockData, level){
	return MachineRegistry.getMachineDrop(coords, blockID, level, BlockID.lavaGenerator);
});

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.lavaGenerator, count: 1, data: 0}, [
		"xxx",
		"xax",
		"x#x"
	], ['#',325, -1, 'a',61, -1, 'x',265, -1]);
});

var guilavaGenerator = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Lava Generator"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 600, y: 170, bitmap: "1"},
		{type: "bitmap", x: 675, y: 230, bitmap: "3"}
	],
	
	elements: {
		"energyScale": {type: "scale", x: 675, y: 230, direction: 0, value: 0.5, bitmap: "4"},
		"liquidScale": {type: "scale", x: 600 , y: 170, direction: 1, value: 0.5, bitmap: "1"},
		"slot1": {type: "slot", x: 450, y: 163},
		"slot2": {type: "slot", x: 450, y: 300},
		
		"textInfo1": {type: "text", x: 520, y: 100, width: 300, height: 30, text: "0/"},
		"textInfo2": {type: "text", x: 585, y: 100, width: 300, height: 30, text: "8000 mB"}
	}
});




MachineRegistry.registerPrototype(BlockID.lavaGenerator, {
	defaultValues: {
		isActive: false
	},
	
	getGuiScreen: function(){
		return guilavaGenerator;
	},
	
	getTransportSlots: function(){
		return {input: ["slot1"], output: ["slot2"]};
	},
	
	init: function(){
		this.liquidStorage.setLimit("lava", 8);
		if(this.data.isActive){
			var block = World.getBlock(this.x, this.y, this.z);
			MachineRenderer.mapAtCoords(this.x, this.y, this.z, block.id, block.data);
		}
	},
	
	destroy: this.deactivate,
	
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		var slot1 = this.container.getSlot("slot1");
		var slot2 = this.container.getSlot("slot2");
		var empty = LiquidRegistry.getEmptyItem(slot1.id, slot1.data);
		if(empty && empty.liquid == "lava"){
			if(this.liquidStorage.getAmount("lava") <= 7 && (slot2.id == empty.id && slot2.data == empty.data && slot2.count < Item.getMaxStack(empty.id) || slot2.id == 0)){
				this.liquidStorage.addLiquid("lava", 1);
				slot1.count--;
				slot2.id = empty.id;
				slot2.data = empty.data;
				slot2.count++;
				this.container.validateAll();
			}
		}
		if(this.liquidStorage.getAmount("lava") >= 0.001){
			if(this.data.energy <= energyStorage - 20){
				this.data.energy += 20;
				this.liquidStorage.getLiquid("lava", 0.001);
				this.activate();
			}else{
				this.deactivate();
			}
		}
		else{
			this.deactivate();
		}
		
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", this.data.energy, 32, 0);
		
		this.container.setText("textInfo1", parseInt(this.liquidStorage.getAmount("lava") * 1000) + "/");
		this.liquidStorage.updateUiScale("liquidScale", "lava");
		this.container.setScale("energyScale", this.data.energy / energyStorage);
	},
	
	islavaGenerator: function() {
		return true;
	},
	
	getEnergyStorage: function(){
		return 10000;
	},
	
	energyTick: function(type, src){
		var output = Math.min(32, this.data.energy);
		this.data.energy += src.add(output) - output;
	},
	
	activate: MachineRegistry.activateMachine,
	deactivate: MachineRegistry.deactivateMachine,
});