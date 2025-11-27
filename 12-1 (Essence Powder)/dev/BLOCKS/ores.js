var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 2
}, "stone");



IDRegistry.genBlockID("coalpowderblock");
Block.createBlock("coalpowderblock", [
	{name: "Coal Powder Block", texture: [["coal_powder_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.coalpowderblock, "stone", 2, true);
Block.setDestroyLevel("coalpowderblock", 2);



IDRegistry.genBlockID("diamondpowderblock");
Block.createBlock("diamondpowderblock", [
	{name: "Diamond Powder Block", texture: [["diamond_powder_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.diamondpowderblock, "stone", 2, true);
Block.setDestroyLevel("diamondpowderblock", 2);



IDRegistry.genBlockID("emeraldpowderblock");
Block.createBlock("emeraldpowderblock", [
	{name: "Emerald Powder Block", texture: [["emerald_powder_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.emeraldpowderblock, "stone", 2, true);
Block.setDestroyLevel("emeraldpowderblock", 2);



IDRegistry.genBlockID("goldpowderblock");
Block.createBlock("goldpowderblock", [
	{name: "Gold Powder Block", texture: [["gold_powder_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.goldpowderblock, "stone", 2, true);
Block.setDestroyLevel("goldpowderblock", 2);



IDRegistry.genBlockID("ironpowderblock");
Block.createBlock("ironpowderblock", [
	{name: "Iron Powder Block", texture: [["iron_powder_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.ironpowderblock, "stone", 2, true);
Block.setDestroyLevel("ironpowderblock", 2);



IDRegistry.genBlockID("lapislazulipowderblock");
Block.createBlock("lapislazulipowderblock", [
	{name: "Lapis Lazuli Powder Block", texture: [["lapis_lazuli_powder_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.lapislazulipowderblock, "stone", 2, true);
Block.setDestroyLevel("lapislazulipowderblock", 2);



IDRegistry.genBlockID("netherquartzpowderblock");
Block.createBlock("netherquartzpowderblock", [
	{name: "Nether Quartz Powder Block", texture: [["nether_quartz_powder_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.netherquartzpowderblock, "stone", 2, true);
Block.setDestroyLevel("netherquartzpowderblock", 2);



IDRegistry.genBlockID("redstonepowderblock");
Block.createBlock("redstonepowderblock", [
	{name: "Redstone Powder Block", texture: [["redstone_powder_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.redstonepowderblock, "stone", 2, true);
Block.setDestroyLevel("redstonepowderblock", 2);