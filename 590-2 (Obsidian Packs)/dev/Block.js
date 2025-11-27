IDRegistry.genBlockID("OS");

Block.createBlock("OS", [{name: "Obsidian Block", texture: [["B1", 0]], inCreative: true}]);

ToolAPI.registerBlockMaterial(BlockID.OS, "stone");
Block.setDestroyTime(BlockID.OS, 15);
Block.setDestroyLevel(BlockID.OS, 3);

Recipes.addShaped({id: BlockID.OS, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.ObsidianIngot, 0]);