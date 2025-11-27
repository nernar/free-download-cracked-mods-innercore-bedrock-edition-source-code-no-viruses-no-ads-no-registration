IDRegistry.genBlockID("ultsolar");
Block.createBlock("ultsolar", [
	{name: "Ultimate Solar Panel", texture: [["ulttop", 0], ["ults", 0], ["ulttop", 0], ["ulttop", 0], ["ulttop", 0], ["ulttop", 0]], inCreative: true}
], "opaque");

Block.registerDropFunction("ultsolar", function(coords, blockID, blockData, level){
	return MachineRegistry.getMachineDrop(coords, blockID, level, BlockID.machineBlockBasic);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.ultsolar, count: 1, data: 0}, [
		" w ",
		"dxd",
		"ede"
	], ['d', ItemID.coalChunk, 0, 'x', BlockID.hbrsolar, 0, 'e', ItemID.sunnariumalloy, 0, 'w', 22, 0]);
});

var ULT = {
	gen_day: 512,
	gen_night: 64,
	output: 512,
	energy_storage: 1000000
};

var guiUltsolar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Ultimate Solar Panel"}},
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
		"textOutput": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 247, width: 300, height: 20, text: "Max Output: " + ULT.output + " EU/t"},
		"textGen": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 280, width: 300, height: 39, text: "Generating:"},
		"light": {type: "image", x: 425, y: 135, bitmap: "soff", scale: 2.1}
	}
});


ICore.Machine.registerPrototype(BlockID.ultsolar, {
	getEnergyStorage: function(){
		return ULT.energy_storage;
	},
	
	getGuiScreen: function(){
		return guiUltsolar;
	},
	
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot1"), this.data.energy, ULT.output, 0);
		
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		this.container.setText("textInfo1", parseInt(this.data.energy) + "/" + energyStorage);
	},
	
	isGenerator: function() {
		return true;
	},
	
	energyTick: function(type, src){
		var content = this.container.getGuiContent();
			if(World.getLightLevel(this.x, this.y+1, this.z) == 15){
				this.data.energy = Math.min(this.data.energy + ULT.gen_day, this.getEnergyStorage());
				this.container.setText("textGen", "Generating: " + ULT.gen_day + " EU/t"); 
				if(content){ 
				content.elements["light"].bitmap = "son";}
	
			else{
				this.data.energy = Math.min(this.data.energy + ULT.gen_night, this.getEnergyStorage());
				this.container.setText("textGen", "Generating: " + ULT.gen_night + " EU/t");
				if(content){
				content.elements["light"].bitmap = "mon";}
			}
      }
		else{
			this.container.setText("textGen", "Generating: 0 EU/t");
			if(content){
			content.elements["light"].bitmap = "soff";}
}
		var output = Math.min(ULT.output, this.data.energy);
		this.data.energy += src.add(output) - output;
	}
});

