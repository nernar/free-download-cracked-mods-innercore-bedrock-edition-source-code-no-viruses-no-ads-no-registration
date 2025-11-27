var BLOCK_TYPE_LIGHT = Block.createSpecialType({
	destroytime: 2,
	explosionres: 0.5,
	opaque: false,
	lightopacity: 0,
	renderlayer: 3,
	lightlevel: 15
});

var BLOCK_TYPE_STONE = Block.createSpecialType({
 base: 1,
 solid: true,
 destroytime: 4,
 explosionres: 3
}, "stone");

var BLOCK_TYPE_GLASS = Block.createSpecialType({
	base: 1,
	solid: false,
	destroytime: 2,
	explosionres: 2
	});

IDRegistry.genBlockID("cland");
Block.createBlock("cland", [
    {name: "Sandy Clay", texture: [["cland", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.cland, "stone");

IDRegistry.genBlockID("clavel");
Block.createBlock("clavel", [
    {name: "Gravely Clay", texture: [["clavel", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.clavel, "stone");

IDRegistry.genBlockID("kakkatzhan");
Block.createBlock("kakkatzhan", [
    {name: "Nether Turf", texture: [["kakkatzhan", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.kakkatzhan, "stone");

IDRegistry.genBlockID("nethercobble");
Block.createBlock("nethercobble", [
    {name: "Nether Cobblestone", texture: [["new_nethercobble", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nethercobble, "stone");

IDRegistry.genBlockID("netherstone");
Block.createBlock("netherstone", [
    {name: "Nether Stone", texture: [["new_netherstone", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.netherstone, "stone");

IDRegistry.genBlockID("netherstonebrick");
Block.createBlock("netherstonebrick", [
    {name: "Nether Stone Brick", texture: [["new_netherstonebrick", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.netherstonebrick, "stone");

IDRegistry.genBlockID("netherstonebrickglow");
Block.createBlock("netherstonebrickglow", [
    {name: "Glowing Nether Stone Brick", texture: [["new_netherstonebrickglow", 0]], inCreative: true}
], BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.netherstonebrickglow, "stone");

IDRegistry.genBlockID("soulnetherrack");
Block.createBlock("soulnetherrack", [
    {name: "Soul Netherrack", texture: [["soulnetherrack", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.soulnetherrack, "stone");

IDRegistry.genBlockID("bricglass");
Block.createBlock("bricglass", [
    {name: "Lattice Glass", texture: [["new_bricglass", 0]], inCreative: true}
], BLOCK_TYPE_GLASS);
ToolAPI.registerBlockMaterial(BlockID.bricglass, "stone");