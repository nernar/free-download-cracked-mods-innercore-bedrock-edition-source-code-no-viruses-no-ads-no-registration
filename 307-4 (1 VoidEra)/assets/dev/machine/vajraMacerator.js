IDRegistry.genBlockID("vajraMacerator");
Block.createBlockWithRotation("vajraMacerator", [
	{name: "vajraMacerator", texture: [["vajraMaceratorb", 0], ["vajraMaceratortop", 0], ["vajraMaceratorb", 0], ["vajraMacerators", 0], ["vajraMaceratorb", 0], ["vajraMaceratorb", 0]], inCreative: true}
], "opaque");
MachineRenderer.setStandartModel(BlockID.vajraMacerator, [["vajraMaceratorb", 0], ["vajraMaceratortop", 0], ["vajraMaceratorb", 0], ["vajraMacerators", 0], ["vajraMaceratorb", 0], ["vajraMaceratorb", 0]], true);
MachineRenderer.registerModelWithRotation(BlockID.vajraMacerator, [["vajraMaceratorb", 0], ["vajraMaceratortop", 0], ["vajraMaceratorb", 0], ["vajraMacerators", 0], ["vajraMaceratorb", 0], ["vajraMaceratorb", 0]]);

Block.registerDropFunction("vajraMacerator", function(coords, blockID, blockData, level){
	return MachineRegistry.getMachineDrop(coords, blockID, level, BlockID.machineMacerator);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.vajraMacerator, count: 1, data: 0}, [
		"xax",
		"dgd",
"xfx"
	], ['x', BlockID.voidblock, 0, 'g', BlockID.macerator, 0, 'd', ItemID.voidcristall, -1, 'a', ItemID.Vajra, -1, 'f', BlockID.machineBlockAdvanced, 0]);
});


var guiVajra = new UI.StandartWindow({
	standart: {
		header: {text: {text: "vajraMacerator"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
{type: "bitmap", x: 400, y: 50, bitmap: "1bg", scale: GUI_SCALE},
		{type: "scale", x: 407 + 33*GUI_SCALE, y: 51 + 58*GUI_SCALE, bitmap: "elbg", scale: GUI_SCALE}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 300 + 99*GUI_SCALE, y: 15 + 33*GUI_SCALE, direction: 0, value: 1, bitmap: "lr", scale: GUI_SCALE},
		"energyScale": {type: "scale", x: 407 + 33*GUI_SCALE, y: 51 + 58*GUI_SCALE, direction: 1, value: 1, bitmap: "el", scale: GUI_SCALE},
        "slotSource": {type: "slot", x: 400 + 33*GUI_SCALE, y: 50 + 13*GUI_SCALE},
"slotS": {type: "slot", x: 400 + 99*GUI_SCALE, y: 50 + 13*GUI_SCALE},
        "slotEnergy": {type: "slot", x: 399 + 33*GUI_SCALE, y: 0 + 58*GUI_SCALE},
        "slotResult": {type: "slot", x: 611, y: 184},
	}
});

MachineRegistry.registerPrototype(BlockID.vajraMacerator, {
	defaultValues: {
		power_tier: 4,
		energy_storage: 2000,
		energy_consumption: 150,
		work_time: 300,
		progress: 0,
		isActive: false
	},
	
	getGuiScreen: function(){
		return guiVajra;
	},
	
	getTransportSlots: function(){
		return {input: ["slotSource", "slotS"], output: ["slotResult"]};
	},
	
	setDefaultValues: function(){
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
		this.data.work_time = this.defaultValues.work_time;
	},
	
	tick: function(){
		this.setDefaultValues();
		UpgradeAPI.executeUpgrades(this);
		
		var sourceSlot = this.container.getSlot("slotSource");
var sSlot = this.container.getSlot("slotS");
        var resultSlot = this.container.getSlot("slotResult");

        var recipe = MachineRecipeRegistry.getRecipeResult("vajraMacerator", sourceSlot.id);
		if(recipe && sSlot.id == recipe.storage[0] && sSlot.count >= recipe.storage[1] && (resultSlot.id == recipe.result[0] && resultSlot.data == recipe.result[2] && resultSlot.count <= 64 - recipe.result[1] || resultSlot.id == 0)){
			if(this.data.energy >= this.data.energy_consumption){
				this.data.energy -= this.data.energy_consumption;
				this.data.progress += 1//this.data.work_time;
				this.activate();
			}
			else{
				this.deactivate();
			}
			if(this.data.progress >= this.data.work_time){
				sourceSlot.count--;
				sSlot.count -= recipe.storage[1];
				resultSlot.id = recipe.result[0];
				resultSlot.data = recipe.result[2];
				resultSlot.count += recipe.result[1];
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else {
			this.data.progress = 0;
			this.deactivate();
		}
        
        var energyStorage = this.getEnergyStorage();
		var tier = this.data.power_tier;
		this.data.energy = Math.min(this.data.energy, energyStorage);
		this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), "Eu", energyStorage - this.data.energy, transferByTier[tier], tier);
		
        this.container.setScale("progressScale", this.data.progress / this.data.work_time);
        this.container.setScale("energyScale", this.data.energy / energyStorage);
    },
    
    getEnergyStorage: function(){
        return this.data.energy_storage;
    },
    
    init: MachineRegistry.initModel,
	activate: MachineRegistry.activateMachine,
	deactivate: MachineRegistry.deactivateMachine,
	destroy: this.deactivate,
    energyTick: MachineRegistry.basicEnergyReceiveFunc
});
