Translation.addTranslation("Energy Reel", {ru: "Энергокатушка"});
Translation.addTranslation("Reactor Controller", {ru: "Контроллер реактора"});

IDRegistry.genBlockID("energy_reel");
IDRegistry.genBlockID("blockReactorController");

Block.createBlockWithRotation("energy_reel", [
	{name: "Energy Reel", texture: [
		["block_machine_iron",0],["block_machine_iron", 0],
		["block_energy_reel",0],["block_energy_reel",0],
		["block_energy_reel",1],["block_energy_reel",1]
	], inCreative: true}
]);
Block.createBlock("blockReactorController", [
	{name: "Reactor Controller", texture: [
		["block_machine_iron",0],["block_machine_iron", 0],
		["block_energy_reactor",0],["block_energy_reactor",0],
		["block_energy_reactor",0],["block_energy_reactor",0]
	], inCreative: true}
],"opaque");

Recipes.addShaped({id: BlockID.energy_reel, count: 1, data: 0}, [
	"bbb",
	"#a#",
	"bbb"
], ['a', BlockID.blockMachineIron,0,'b',265,0,'c',331,0]);

Recipes.addShaped({id: BlockID.blockReactorController, count: 1, data: 0}, [
	"bab",
	"b#b",
	"b#b"
], ['a', BlockID.blockMachineIron,0,'b',263,-1]);


Block.setBlockShape(BlockID.energy_reel, {
	x: 1/16,
	y: 1/16,
	z: 0
},{
	x: 15/16,
	y: 15/16,
	z: 1
},0);
Block.setBlockShape(BlockID.energy_reel, {
	x: 1/16,
	y: 1/16,
	z: 0
},{
	x: 15/16,
	y: 15/16,
	z: 1
},1);
Block.setBlockShape(BlockID.energy_reel, {
	x: 0/16,
	y: 1/16,
	z: 1/16
},{
	x: 16/16,
	y: 15/16,
	z: 15/16
},2);
Block.setBlockShape(BlockID.energy_reel, {
	x: 0/16,
	y: 1/16,
	z: 1/16
},{
	x: 16/16,
	y: 15/16,
	z: 15/16
},3);