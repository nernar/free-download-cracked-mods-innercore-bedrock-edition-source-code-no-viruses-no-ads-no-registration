var BLOCK_TYPE_MAGIC_LIGHT = Block.createSpecialType({
	lightlevel: 3.5
});

IDRegistry.genBlockID("LightDarkDirt");
Block.createBlock("LightDarkDirt", [{name: "Light dark dirt", texture: [["world_dirt_down", 0], ["light_world_dirt_top", 0], ["light_world_dirt_side", 0], ["light_world_dirt_side", 0], ["light_world_dirt_side", 0], ["light_world_dirt_side", 0]], inCreative: true}], BLOCK_TYPE_MAGIC_LIGHT);
ToolAPI.registerBlockMaterialAsArray("dirt", [BlockID.LightDarkDirt]);

IDRegistry.genBlockID("LightDarkStone");
Block.createBlock("LightDarkStone", [{name: "Light dark stone", texture: [["light_world_stone", 0], ["light_world_stone", 0], ["light_world_stone", 0], ["light_world_stone", 0], ["light_world_stone", 0], ["light_world_stone", 0]], inCreative: true}], BLOCK_TYPE_MAGIC_LIGHT);
ToolAPI.registerBlockMaterialAsArray("stone", [BlockID.LightDarkStone]);