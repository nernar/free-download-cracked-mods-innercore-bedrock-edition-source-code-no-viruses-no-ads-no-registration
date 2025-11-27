IDRegistry.genBlockID("ulthbrsolar");
Block.createBlock("ulthbrsolar", [
	{name: "Ultimate Hybrid Solar Panel", texture: [["ulthbrtop", 0], ["ulthbrs", 0], ["ulthbrtop", 0], ["ulthbrtop", 0], ["ulthbrtop", 0], ["ulthbrtop", 0]], inCreative: true}
], "opaque");

Block.registerDropFunction("ulthbrsolar", function(coords, blockID, blockData, level){
	return MachineRegistry.getMachineDrop(coords, blockID, level, BlockID.machineBlockBasic);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.ulthbrsolar, count: 1, data: 0}, [
		"aaa",
		"xxx",
		"b#b"
	], ['x', BlockID.ultsolar, 0, 'a', ItemID.irradiantglasspane, 0, 'b', ItemID.irradiantreinforceplate, 0, '#', ItemID.enrichedsunnariumalloy, 0]);
});

var ULTHBR = {
	gen_day: 4096,
	gen_night: 2048,
	output: 8192,
	energy_storage: 10000000
};

var guiUlthbrsolar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Ultimate Hybrid Solar Panel"}},
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
		"textOutput": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 247, width: 300, height: 20, text: "Max Output: " + ULTHBR.output + " EU/t"},
		"textGen": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 280, width: 300, height: 39, text: "Generating:"},
		"light": {type: "image", x: 425, y: 135, bitmap: "soff", scale: 2.1}
	}
});


ICore.Machine.registerPrototype(BlockID.ulthbrsolar, {
	getEnergyStorage: function(){
		return ULTHBR.energy_storage;
	},
	
	getGuiScreen: function(){
		return guiUlthbrsolar;
	},
	
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot1"), this.data.energy, ULTHBR.output, 0);
		
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		this.container.setText("textInfo1", parseInt(this.data.energy) + "/" + energyStorage);
	},
	
	isGenerator: function() {
		return true;
	},
	
	energyTick: function(type, src){
		var content = this.container.getGuiContent();
			if(World.getLightLevel(this.x, this.y+1, this.z) == 15){
				this.data.energy = Math.min(this.data.energy + ULTHBR.gen_day, this.getEnergyStorage());
				this.container.setText("textGen", "Generating: " + ULTHBR.gen_day + " EU/t"); 
				if(content){ 
				content.elements["light"].bitmap = "son";}
	
			else{
				this.data.energy = Math.min(this.data.energy + ULTHBR.gen_night, this.getEnergyStorage());
				this.container.setText("textGen", "Generating: " + ULTHBR.gen_night + " EU/t");
				if(content){
				content.elements["light"].bitmap = "mon";}
			}
      }
		else{
			this.container.setText("textGen", "Generating: 0 EU/t");
			if(content){
			content.elements["light"].bitmap = "soff";}
}
		var output = Math.min(ULTHBR.output, this.data.energy);
		this.data.energy += src.add(output) - output;
	}
});

