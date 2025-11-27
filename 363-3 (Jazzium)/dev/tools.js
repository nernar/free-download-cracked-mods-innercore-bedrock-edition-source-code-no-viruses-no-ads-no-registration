importLib("TOOLTYype", "*");
IDRegistry.genItemID("flamed_jazzium_sword");
IDRegistry.genItemID("flamed_jazzium_shovel");
IDRegistry.genItemID("flamed_jazzium_pickaxe");
IDRegistry.genItemID("flamed_jazzium_axe");
IDRegistry.genItemID("flamed_jazzium_hoe");

Item.createItem("flamed_jazzium_sword", "Flamed Jazzium Sword", {name: "flamed_jazzium_sword", meta: 0}, {stack: 1});
Item.createItem("flamed_jazzium_shovel", "Flamed Jazzium Shovel", {name: "flamed_jazzium_shovel", meta: 0}, {stack: 1});
Item.createItem("flamed_jazzium_pickaxe", "Flamed Jazzium Pickaxe", {name: "flamed_jazzium_pickaxe", meta: 0}, {stack: 1});
Item.createItem("flamed_jazzium_axe", "Flamed Jazzium Axe", {name: "flamed_jazzium_axe", meta: 0}, {stack: 1});
Item.createItem("flamed_jazzium_hoe", "Flamed Jazzium Hoe", {name: "flamed_jazzium_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("jazzium", {durability: 2120, level: 4, efficiency: 6, damage: 9, enchantability: 14});
ToolAPI.setTool(ItemID.flamed_jazzium_sword, "jazzium", ToolType.sword);
ToolAPI.setTool(ItemID.flamed_jazzium_shovel, "jazzium", ToolType.shovel);
ToolAPI.setTool(ItemID.flamed_jazzium_pickaxe, "jazzium", ToolType.pickaxe);
ToolAPI.setTool(ItemID.flamed_jazzium_axe, "jazzium", ToolType.axe);
ToolAPI.setTool(ItemID.flamed_jazzium_hoe, "jazzium", ToolType.hoe);

Recipes.addShaped({id: ItemID.flamed_jazzium_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.flamed_jazzium_ingot, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.flamed_jazzium_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.flamed_jazzium_ingot, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.flamed_jazzium_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.flamed_jazzium_ingot, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.flamed_jazzium_axe, count: 1, data: 0}, [
	" aa",
	" ba",
	" b "
], ['a', ItemID.flamed_jazzium_ingot, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.flamed_jazzium_hoe, count: 1, data: 0}, [
	" aa",
	" b ",
	" b "
], ['a', ItemID.flamed_jazzium_ingot, 0, 'b', 369, 0]);