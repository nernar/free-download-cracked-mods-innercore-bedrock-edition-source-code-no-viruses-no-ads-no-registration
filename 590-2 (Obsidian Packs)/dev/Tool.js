IMPORT("ToolType");

IDRegistry.genItemID("ObPickaxe");
IDRegistry.genItemID("ObSword");
IDRegistry.genItemID("ObAxe");
IDRegistry.genItemID("ObShovel");
IDRegistry.genItemID("ObHoe");

Item.createItem("ObPickaxe", "Obsidian Pickaxe", {name: "O22", meta: 0}, {stack: 1});

Item.createItem("ObSword", "Obsidian Sword", {name: "O11", meta: 0}, {stack: 1});

Item.createItem("ObAxe", "Obsidian Axe", {name: "O33", meta: 0}, {stack: 1});

Item.createItem("ObShovel", "Obsidian Shovel", {name: "O44", meta: 0}, {stack: 1});

Item.createItem("ObHoe", "Obsidian Hoe", {name: "O55", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ob", {
    durability: 2790,
    level: 4,
    efficiency: 10,
    damage: 6,
    enchantability: 14
});

ToolAPI.setTool(ItemID.ObSword, "ob", ToolType.sword);
ToolAPI.setTool(ItemID.ObShovel, "ob", ToolType.shovel);
ToolAPI.setTool(ItemID.ObPickaxe, "ob", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ObAxe, "ob", ToolType.axe);
ToolAPI.setTool(ItemID.ObHoe, "ob", ToolType.hoe);

Recipes.addShaped({id: ItemID.ObSword, count: 1, data: 0}, [
		"xox",
		"xox",
		" a "
	], ['x', ItemID.ObsidianIngot, 0, 'a', ItemID.ObsidianStick, 0, 'o', 264, 0]);

Recipes.addShaped({id: ItemID.ObPickaxe, count: 1, data: 0}, [
		"ooo",
		"xax",
		" a "
	], ['x', ItemID.ObsidianIngot, 0, 'a', ItemID.ObsidianStick, 0, 'o', 264, 0]);

Recipes.addShaped({id: ItemID.ObAxe, count: 1, data: 0}, [
		"xoo",
		"xao",
		" a "
	], ['x', ItemID.ObsidianIngot, 0, 'a', ItemID.ObsidianStick, 0, 'o', 264, 0]);

Recipes.addShaped({id: ItemID.ObShovel, count: 1, data: 0}, [
		"xox",
		"xax",
		" a "
	], ['x', ItemID.ObsidianIngot, 0, 'a', ItemID.ObsidianStick, 0, 'o', 264, 0]);

Recipes.addShaped({id: ItemID.ObHoe, count: 1, data: 0}, [
		"oox",
		" ax",
		" a "
	], ['x', ItemID.ObsidianIngot, 0, 'a', ItemID.ObsidianStick, 0, 'o', 264, 0]);