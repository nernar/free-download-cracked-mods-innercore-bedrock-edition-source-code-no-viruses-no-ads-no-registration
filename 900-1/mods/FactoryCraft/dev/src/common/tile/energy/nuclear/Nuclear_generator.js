Translation.addTranslation("Nuclear Generator", {
	ru: "Ядерный генератор"
});

var genNuclear_texture={
	side:"block_machine_iron",
	front:"block_nuclear_generator"
}

if(Options.theme){
	genNuclear_texture.front="light_nuclear_generator";
	genNuclear_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("machineEnergyGeneratorNuclear");
Block.createBlockWithRotation("machineEnergyGeneratorNuclear", [
	{
		name: "Nuclear Generator",
		texture: [
			[genNuclear_texture.side,0],
			[genNuclear_texture.side, 0],
			[genNuclear_texture.side,0],
			[genNuclear_texture.front,0],
			[genNuclear_texture.side,0],
			[genNuclear_texture.side,0]
		],
		inCreative: true
	}
],"opaque");

Recipes.addShaped({
	id: BlockID.machineEnergyGeneratorNuclear, 
	count: 1, 
	data: 0
}, [
	"ebe",
	"eae",
	"ece"
], [
	'a', BlockID.blockMachineIron,0,
	'b', 61,0,
	'c', ItemID.factoryBattery,0,
	'e',263,-1
]);

var ui_generatorNuclear = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Nuclear Generator/Ядерный генератор"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	params: { 
	slot: "slotFactory", 
	invSlot: "slotFactory", 	
	selection: "selectionFactory"
	},
	
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire.ground", scale: 4.5},
	],
	
	elements: {
		"energyScale": {type: "scale", x: 350 , y: 50, direction: 1, bitmap: "energybar.scale", scale: 2.6},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, bitmap: "fire.scale", scale: 4.5},
		"slotNuclear": {type: "slot", x: 450, y: 210},
	}
});

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorNuclear, {
	defaultValues: {
		burn: 0,
		burnMax: 0
	},
	getGuiScreen: function(){
		return ui_generatorNuclear;
	},
	
	getTransportSlots: function(){
		return {input: ["slotNuclear"]};
	},
	
	getNuclear: function(slotName){
		var NuclearSlot = this.container.getSlot(slotName);
		if (NuclearSlot.id > 0){
			var burn = FactAPI.Reactor.getNuclearBurn(NuclearSlot.id, NuclearSlot.data);
			if (burn){
				NuclearSlot.count--;
				this.container.validateSlot(slotName);
				return burn;
			}
		}
		return 0;
	},
	
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		if(this.data.burn <= 0){
			this.data.burn = this.data.burnMax = this.getNuclear("slotNuclear");
		}
		if(this.data.burn > 0 && this.data.energy < energyStorage){
			this.data.energy = Math.min(this.data.energy + 16, energyStorage);
			this.data.burn--;
		}
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("energyScale", this.data.energy / energyStorage);
	},
	
	isGenerator: function() {
		return true;
	},
	
	getEnergyStorage: function(){
		return 10000;
	},
	
	energyTick: function(type, src){
		var output = Math.min(16, this.data.energy);
		this.data.energy += src.add(output) - output;
	},
},{
	item:true
});