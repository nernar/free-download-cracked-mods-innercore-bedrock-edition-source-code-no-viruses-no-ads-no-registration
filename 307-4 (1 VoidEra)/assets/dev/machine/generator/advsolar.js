IDRegistry.genBlockID("advsolar");
Block.createBlock("advsolar", [
	{name: "Advanced Solar Panel", texture: [["advtop", 0], ["advs", 0], ["advtop", 0], ["advtop", 0], ["advtop", 0], ["advtop", 0]], inCreative: true}
], "opaque");

Block.registerDropFunction("advsolar", function(coords, blockID, blockData, level){
	return MachineRegistry.getMachineDrop(coords, blockID, level, BlockID.machineBlockBasic);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.advsolar, count: 1, data: 0}, [
		"aaa",
		"bxb",
		"wsw"
	], ['a', BlockID.reinforcedGlass, 0, 'x', BlockID.solarPanel, 0, 'b', ItemID.plateAlloy, 0, 'w', ItemID.circuitAdvanced, 0, 's', ItemID.irradiantreinforceplate, 0]);
});

var ADV = {
	gen_day: 8,
	gen_night: 1,
	output: 32,
	energy_storage: 32000
};

var guiAdvsolar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Advanced Solar Panel"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "background", color: android.graphics.Color.rgb(53, 53, 53)},
		{type: "bitmap", x: 360, y: 40, bitmap: "advgui", scale: 2.1},
	],
	
	elements: {
		"energyScale": {type: "scale", x: 398, y: 90, direction: 0, value: 0.5, bitmap: "adven", scale: 2.1},
		"slot1": {type: "slot", x: 800, y: 70, bitmap: "sbg", size: 50, isValid: MachineRegistry.isValidEUItem},
		"slot2": {type: "slot", x: 800, y: 125, bitmap: "sbg", size: 50},
		"slot3": {type: "slot", x: 800, y: 185, bitmap: "sbg", size: 50},
		"slot4": {type: "slot", x: 800, y: 245, bitmap: "sbg", size: 50},
		"textStorage": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 190, width: 300, height: 50, text: "Storage:"},
		"textInfo1": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 520, y: 190, width: 300, height: 50, text: "/32000"},
		"textOutput": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 247, width: 300, height: 20, text: "Max Output: " + ADV.output + " EU/t"},
		"textGen": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 280, width: 300, height: 39, text: "Generating:"},
		"light": {type: "image", x: 425, y: 135, bitmap: "soff", scale: 2.1}
	}
});


ICore.Machine.registerPrototype(BlockID.advsolar, {
	getEnergyStorage: function(){
		return ADV.energy_storage;
	},
	
	getGuiScreen: function(){
		return guiAdvsolar;
	},
	
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot1"), this.data.energy, ADV.output, 0);
		
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		this.container.setText("textInfo1", parseInt(this.data.energy) + "/" + energyStorage);
	},
	
	isGenerator: function() {
		return true;
	},
	
	energyTick: function(type, src){
		var content = this.container.getGuiContent();
			if(World.getLightLevel(this.x, this.y+1, this.z) == 15){
				this.data.energy = Math.min(this.data.energy + ADV.gen_day, this.getEnergyStorage());
				this.container.setText("textGen", "Generating: " + ADV.gen_day + " EU/t"); 
				if(content){ 
				content.elements["light"].bitmap = "son";}
	
			else{
				this.data.energy = Math.min(this.data.energy + ADV.gen_night, this.getEnergyStorage());
				this.container.setText("textGen", "Generating: " + ADV.gen_night + " EU/t");
				if(content){
				content.elements["light"].bitmap = "mon";}
			}
      }
		else{
			this.container.setText("textGen", "Generating: 0 EU/t");
			if(content){
			content.elements["light"].bitmap = "soff";}
}
		var output = Math.min(ADV.output, this.data.energy);
		this.data.energy += src.add(output) - output;
	}
});
