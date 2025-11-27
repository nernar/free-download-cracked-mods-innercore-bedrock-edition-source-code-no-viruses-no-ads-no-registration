IDRegistry.genBlockID("DarkDirt");
Block.createBlock("DarkDirt", [{name: "Dark Dirt", texture: [["world_dirt_down", 0], ["world_dirt_top", 0], ["world_dirt_side", 0], ["world_dirt_side", 0], ["world_dirt_side", 0], ["world_dirt_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterialAsArray("dirt", [BlockID.MagicDirt]);

IDRegistry.genBlockID("DarkStone");
Block.createBlock("DarkStone", [{name: "Dark Stone", texture: [["world_stone", 0], ["world_stone", 0], ["world_stone", 0], ["world_stone", 0], ["world_stone", 0], ["world_stone", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterialAsArray("stone", [BlockID.MagicStone]);