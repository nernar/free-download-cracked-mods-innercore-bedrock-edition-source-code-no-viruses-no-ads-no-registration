IDRegistry.genBlockID("hbrsolar");
Block.createBlock("hbrsolar", [
	{name: "Hybrid Solar Panel", texture: [["hbrtop", 0], ["hbrs", 0], ["hbrtop", 0], ["hbrtop", 0], ["hbrtop", 0], ["hbrtop", 0]], inCreative: true}
], "opaque");

Block.registerDropFunction("hbrsolar", function(coords, blockID, blockData, level){
	return MachineRegistry.getMachineDrop(coords, blockID, level, BlockID.machineBlockBasic);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.hbrsolar, count: 1, data: 0}, [
		"awa",
		"dxd",
		"ese"
	], ['a', ItemID.carbonPlate, 0, 'x', BlockID.advsolar, 0, 'd', ItemID.plateReinforcedIridium, 0, 'e', ItemID.circuitAdvanced, 0, 'w', 22, 0, 's', ItemID.sunnarium, 0]);
});

var HBR = {
	gen_day: 64,
	gen_night: 8,
	output: 128,
	energy_storage: 100000
};

var guiHbrsolar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Hybrid Solar Panel"}},
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
		"textInfo1": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 520, y: 190, width: 300, height: 50, text: "/100000"},
		"textOutput": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 247, width: 300, height: 20, text: "Max Output: " + HBR.output + " EU/t"},
		"textGen": {font: {color: android.graphics.Color.WHITE, shadow: 0.6, size: 18}, type: "text", x: 420, y: 280, width: 300, height: 39, text: "Generating:"},
		"light": {type: "image", x: 425, y: 135, bitmap: "soff", scale: 2.1}
	}
});


ICore.Machine.registerPrototype(BlockID.hbrsolar, {
	getEnergyStorage: function(){
		return HBR.energy_storage;
	},
	
	getGuiScreen: function(){
		return guiHbrsolar;
	},
	
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot1"), this.data.energy, HBR.output, 0);
		
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		this.container.setText("textInfo1", parseInt(this.data.energy) + "/" + energyStorage);
	},
	
	isGenerator: function() {
		return true;
	},
	
	energyTick: function(type, src){
		var content = this.container.getGuiContent();
			if(World.getLightLevel(this.x, this.y+1, this.z) == 15){
				this.data.energy = Math.min(this.data.energy + HBR.gen_day, this.getEnergyStorage());
				this.container.setText("textGen", "Generating: " + HBR.gen_day + " EU/t"); 
				if(content){ 
				content.elements["light"].bitmap = "son";}
	
			else{
				this.data.energy = Math.min(this.data.energy + HBR.gen_night, this.getEnergyStorage());
				this.container.setText("textGen", "Generating: " + HBR.gen_night + " EU/t");
				if(content){
				content.elements["light"].bitmap = "mon";}
			}
      }
		else{
			this.container.setText("textGen", "Generating: 0 EU/t");
			if(content){
			content.elements["light"].bitmap = "soff";}
}
		var output = Math.min(HBR.output, this.data.energy);
		this.data.energy += src.add(output) - output;
	}
});

