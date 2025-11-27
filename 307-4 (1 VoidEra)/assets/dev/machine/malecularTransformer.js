IDRegistry.genBlockID("malecularTransformer"); 
  Block.createBlock("malecularTransformer", [{name: "malecularTransformer", texture: [["malecularTransformer3", 0], ["malecularTransformer3", 0], ["malecularTransformer3", 0], ["malecularTransformer3", 0], ["malecularTransformer3", 0], ["malecularTransformer3", 0]], inCreative: true}]);
  ToolAPI.registerBlockMaterial(BlockID.malecularTransformer, "stone");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(0/16, 0/16, 0/16, 4/16, 15.99/16, 4/16, "malecularTransformer1", 0);

model.addBox(12/16, 0/16, 0/16, 16/16, 15.99/16, 4/16, "malecularTransformer1", 0);

model.addBox(0/16, 0/16, 12/16, 4/16, 15.99/16, 16/16, "malecularTransformer1", 0);

model.addBox(12/16, 0/16, 12/16, 16/16, 15.99/16, 16/16, "malecularTransformer1", 0);


model.addBox(0/16, 16/16, 0/16, 16/16, 16/16, 16/16, "malecularTransformer2", 0);


model.addBox(2/16, 0/16, 2/16, 14/16, 8.99/16, 14/16, "malecularTransformer3", 0);

model.addBox(2/16, 9/16, 2/16, 14/16, 9.1/16, 14/16, "malecularTransformer4", 0);


model.addBox(7.999/16, 2/16, 0/16, 8.005/16, 18/16, 16/16, "malecular", 0);
model.addBox(0/16, 2/16, 7.999/16, 16/16, 18/16, 8.005/16, "malecular", 0);



render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.malecularTransformer, -1, render);
Block.setBlockShape(BlockID.malecularTransformer, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.malecularTransformer, count: 1, data: 0}, [
		"xax",
		"dgd",
"xfx"
	], ['x', BlockID.voidglass, 0, 'g', ItemID.ulthbrcore, -1, 'd', ItemID.voidcristall, -1, 'a', ItemID.voidcristallarmoured, -1, 'f', BlockID.machineBlockAdvanced, 0]);
});


var guiMalecularTransformer = new UI.StandartWindow({
	standart: {
		header: {text: {text: "malecularTransformer"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 155, bitmap: "arrow_bar_background", scale: GUI_SCALE},
		{type: "bitmap", x: 450, y: 155, bitmap: "energy_small_background", scale: GUI_SCALE}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 530, y: 155, direction: 0, value: 0.5, bitmap: "arrow_bar_scale", scale: GUI_SCALE},
		"energyScale": {type: "scale", x: 450, y: 155, direction: 1, value: 0.5, bitmap: "energy_small_scale", scale: GUI_SCALE},
        "slotSource": {type: "slot", x: 441, y: 79},
        "slotResult": {type: "slot", x: 625, y: 148},
	}
});

MachineRegistry.registerPrototype(BlockID.malecularTransformer, {
	defaultValues: {
		power_tier: 4,
		energy_storage: 10000,
		energy_consumption: 250,
		work_time: 100,
		progress: 0,
		isActive: false
	},
	
	getGuiScreen: function(){
		return guiMalecularTransformer;
	},
	
	getTransportSlots: function(){
		return {input: ["slotSource"], output: ["slotResult"]};
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
		var resultSlot = this.container.getSlot("slotResult");
		var result = MachineRecipeRegistry.getRecipeResult("malecularTransformer", sourceSlot.id, sourceSlot.data);
        if(result && (resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count <= 64 - result.count || resultSlot.id == 0)){
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
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count += result.count;
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
