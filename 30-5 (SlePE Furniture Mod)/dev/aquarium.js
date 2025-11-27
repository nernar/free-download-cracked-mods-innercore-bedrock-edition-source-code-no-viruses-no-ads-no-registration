var BLOCK_TYPE_AQUARIUM_BLOCK = Block.createSpecialType({
	base: 5,
	opaque: false,
	explosionres: 1,
	renderlayer:2
});

IDRegistry.genBlockID("aquarium");
Block.createBlock("aquarium", [
	{name: "Phantom Block", texture: [["water_still",0]],inCreative: true}
],BLOCK_TYPE_AQUARIUM_BLOCK);

