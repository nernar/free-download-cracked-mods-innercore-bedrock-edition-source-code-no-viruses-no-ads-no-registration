IDRegistry.genBlockID("quantgenerator");
Block.createBlock("quantgenerator", [
	{name: "Quantum Generator", texture: [["qgtop", 0], ["qg", 0], ["qgtop", 0], ["qgtop", 0], ["qgtop", 0], ["qgtop", 0]], inCreative: true}
], "opaque");

Block.registerDropFunction("quantgenerator", function(coords, blockID, blockData, level){
	return MachineRegistry.getMachineDrop(coords, blockID, level, BlockID.machineBlockBasic);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.quantgenerator, count: 1, data: 0}, [
		"aba",
		"x#x",
		"aba"
	], ['#', ItemID.quantumcore, -1, 'x', BlockID.ulthbrsolar, 0, 'a', ItemID.enrichedsunnariumalloy, -1, 'b', ItemID.irradiantreinforceplate, 0]);
});


var guiQuantgenerator = new UI.StandartWindow({
	standart: {
		header: {text: {text: "quantgenerator"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	params: {       
		slot: "default_slot",
		invSlot: "default_slot"              
	},
	
	drawing: [
		{type: "background", color: android.graphics.Color.rgb(53, 53, 53)},
		{type: "bitmap", x: 360, y: 40, bitmap: "qg", scale: 2.1},
	],
	
	elements: {
		"slotEnergy": {type: "slot", x: 600, y: 117, isValid: function(id){return ChargeItemRegistry.isValidItem(id, "Eu", 500);}},
		"sun": {type: "image", x: 665, y: 83, bitmap: "sl", scale: 2}
	}
});

MachineRegistry.registerPrototype(BlockID.quantgenerator, {
	isGenerator: function() {
		return true;
	},
	
	getGuiScreen: function(){
		return guiQuantgenerator;
	},
	
	tick: function(){
		var content = this.container.getGuiContent();
		if(World.getBlockID(this.x, this.y + 1, this.z) != BlockID.luminator){
			this.data.energy = 1;
			this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", 64, 32, 0);
			if(content){ 
				content.elements["sun"].bitmap = "lon";
			}
		}
		else if(content){ 
			content.elements["sun"].bitmap = "sl";
		}
	},
	
	getEnergyStorage: function(){
		return 1000;
	},
	
	energyTick: function(type, src){
		if(this.data.energy){
			src.add(8000);
			this.data.energy = 1;
		}
else src.add(1000);
	}
});
