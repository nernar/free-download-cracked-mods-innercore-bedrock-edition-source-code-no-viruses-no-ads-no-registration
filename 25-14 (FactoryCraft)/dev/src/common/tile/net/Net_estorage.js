Translation.addTranslation("Energy Storage", {
	ru: "Энергоячейка"
});

var Energy_texture={
	side:"block_machine_iron",
	front:"block_net_energy"
}

if(Options.theme){
	Energy_texture.side="light_iron_machine";
	Energy_texture.front="light_me_energy";
}

IDRegistry.genBlockID("machineNetEnergy");
Block.createBlock("machineNetEnergy", [
	{
		name: "Energy Storage",
		texture: [
			[Energy_texture.side, 0],
			[Energy_texture.side, 0],
			[Energy_texture.front, 0],
			[Energy_texture.front, 0],
			[Energy_texture.front, 0],
			[Energy_texture.front, 0]
		],
		inCreative: true
	}
],"opaque");

Recipes.addShaped({
	id: BlockID.machineNetEnergy, 
	count: 1, 
	data: 0
}, [
	"bcb",
	"cac",
	"bcb"
], [
	'a', BlockID.blockMachineIron,0,
	'c', ItemID.factoryBattery,0,
	'b', ItemID.crystalFluix,0
]);

FactAPI.machine.registerNetTile(BlockID.machineNetEnergy,{
	getEnergyStorage: function(){
		return 200000
	},
	tick:function(){
		this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
	},
	energyTick:function(type,src){
		this.data.energy += src.storage(Math.min(800, this.getEnergyStorage() - this.data.energy), Math.min(800, this.data.energy));
	}
});

var ui_energy= new UI.StandartWindow({
	standart: {
		header: {text: {text: "Energy Cell/Энергоячейка"}},
		inventory: {standart: true},
		background: {standart: true}, 
	},
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6},
	],
	elements: {
		"energyScale": {type: "scale", x: 350, y: 50, direction: 1, value: 0.5, bitmap: "energybar.me_scale", scale: 2.6},
	},
	params: { 
	slot: "slotFactory", 
	invSlot: "slotFactory", 	
	selectionFactoryon: "selectionFactory"
	} 
});