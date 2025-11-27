IDRegistry.genItemID("ObsidianShard");

Item.createItem("ObsidianShard", "Obsidian Shard", {name: "O2", meta: 0}, {stack: 64});
Recipes.addFurnace(49, ItemID.ObsidianShard, 0);

IDRegistry.genItemID("ObsidianIngot");

Item.createItem("ObsidianIngot", "Obsidian Ingot", {name: "O1", meta: 0}, {stack: 64});

	Recipes.addShaped({id: ItemID.ObsidianIngot, count: 8, data: 0}, [
		"xxx",
		"xxx",
		"xxa"
	], ['x', ItemID.ObsidianShard, 0, 'a', 325, 10]);

IDRegistry.genItemID("ObsidianStick");

Item.createItem("ObsidianStick", "Obsidian Stick", {name: "O3", meta: 0}, {stack: 64});

	Recipes.addShaped({id: ItemID.ObsidianStick, count: 1, data: 0}, [
		"xa ",
		"   ",
		"   "
	], ['x', ItemID.ObsidianIngot, 0, 'a', 280, 0]);