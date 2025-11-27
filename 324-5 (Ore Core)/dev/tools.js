importLib("TOOLTYype", "*");
IDRegistry.genItemID("EmeraldSword");
IDRegistry.genItemID("EmeraldShovel");
IDRegistry.genItemID("EmeraldPickaxe");
IDRegistry.genItemID("EmeraldAxe");
IDRegistry.genItemID("EmeraldHoe");

Item.createItem("EmeraldSword", "Emerald Sword", {name: "emerald_sword", meta: 0}, {stack: 1});
Item.createItem("EmeraldShovel", "Emerald Shovel", {name: "emerald_shovel", meta: 0}, {stack: 1});
Item.createItem("EmeraldPickaxe", "Emerald Pickaxe", {name: "emerald_pickaxe", meta: 0}, {stack: 1});
Item.createItem("EmeraldAxe", "Emerald Axe", {name: "emerald_axe", meta: 0}, {stack: 1});
Item.createItem("EmeraldHoe", "Emerald Hoe", {name: "emerald_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("emerald", {durability: 500, level: 3, efficiency: 6, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.EmeraldSword, "emerald", ToolType.sword);
ToolAPI.setTool(ItemID.EmeraldShovel, "emerald", ToolType.shovel);
ToolAPI.setTool(ItemID.EmeraldPickaxe, "emerald", ToolType.pickaxe);
ToolAPI.setTool(ItemID.EmeraldAxe, "emerald", ToolType.axe);
ToolAPI.setTool(ItemID.EmeraldHoe, "emerald", ToolType.hoe);

Recipes.addShaped({id: ItemID.EmeraldSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 388, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.EmeraldShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 388, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.EmeraldPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 388, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.EmeraldAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 388, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.EmeraldHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 388, 0, 'b', 280, 0]);

///////

IDRegistry.genItemID("LavacrystalSword");
IDRegistry.genItemID("LavacrystalShovel");
IDRegistry.genItemID("LavacrystalPickaxe");
IDRegistry.genItemID("LavacrystalAxe");
IDRegistry.genItemID("LavacrystalHoe");

Item.createItem("LavacrystalSword", "Lava Crystal Sword", {name: "lavacrystal_sword", meta: 0}, {stack: 1});
Item.createItem("LavacrystalShovel", "Lava Crystal Shovel", {name: "lavacrystal_shovel", meta: 0}, {stack: 1});
Item.createItem("LavacrystalPickaxe", "Lava Crystal Pickaxe", {name: "lavacrystal_pickaxe", meta: 0}, {stack: 1});
Item.createItem("LavacrystalAxe", "Lava Crystal Axe", {name: "lavacrystal_axe", meta: 0}, {stack: 1});
Item.createItem("LavacrystalHoe", "Lava Crystal Hoe", {name: "lavacrystal_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("LavaCrystal", {durability: 1000, level: 4, efficiency: 15, damage: 9, enchantability: 18});
ToolAPI.setTool(ItemID.LavacrystalSword, "LavaCrystal", ToolType.sword);
ToolAPI.setTool(ItemID.LavacrystalShovel, "LavaCrystal", ToolType.shovel);
ToolAPI.setTool(ItemID.LavacrystalPickaxe, "LavaCrystal", ToolType.pickaxe);
ToolAPI.setTool(ItemID.LavacrystalAxe, "LavaCrystal", ToolType.axe);
ToolAPI.setTool(ItemID.LavacrystalHoe, "LavaCrystal", ToolType.hoe);

Recipes.addShaped({id: ItemID.LavacrystalSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.lava_crystal, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.LavacrystalShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.lava_crystal, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.LavacrystalPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.lava_crystal, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.LavacrystalAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.lava_crystal, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.LavacrystalHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.lava_crystal, 0, 'b', 369, 0]);