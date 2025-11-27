importLib("ToolType", "*");
ToolAPI.addToolMaterial("gryaz", {durability: 30, level: 1, efficiency: 3 , damage: 2, enchantability: 6});
IDRegistry.genItemID ("dirtSword");
Item.createItem("dirtSword", "Меч из грязи", {name: "dirtSword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.dirtSword, "gryaz", ToolType.sword);
Recipes.addShaped({id: ItemID.dirtSword, count: 1, data: 0}, [
	" a",
	" a",
	" b"
], ['a', 3, 0, 'b', 280, 0]);
IDRegistry.genItemID ("dirtPickaxe");
Item.createItem("dirtPickaxe", "Кирка из грязи", {name: "dirtPickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.dirtPickaxe, "gryaz", ToolType.pickaxe);
Recipes.addShaped({id: ItemID.dirtPickaxe, count: 1, data: 0}, [
	"aaa",
	" b",
	" b"
], ['a', 3, 0, 'b', 280, 0]);
IDRegistry.genItemID ("dirtAxe");
Item.createItem("dirtAxe", "Топор из грязи", {name: "dirtAxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.dirtAxe, "gryaz", ToolType.axe);
Recipes.addShaped({id: ItemID.dirtAxe, count: 1, data: 0}, [
	" aa",
	" ba",
	" b"
], ['a', 3, 0, 'b', 280, 0]);
IDRegistry.genItemID ("dirtHoe");
Item.createItem("dirtHoe", "Мотыга из грязи", {name: "dirtHoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.dirtHoe, "gryaz", ToolType.hoe);
Recipes.addShaped({id: ItemID.dirtHoe, count: 1, data: 0}, [
	" aa",
	" b",
	" b"
], ['a', 3, 0, 'b', 280, 0]);
IDRegistry.genItemID ("dirtShovel");
Item.createItem("dirtShovel", "Лопата из грязи", {name: "dirtShovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.dirtShovel, "gryaz", ToolType.shovel);
Recipes.addShaped({id: ItemID.dirtShovel, count: 1, data: 0}, [
	" a",
	" b",
	" b"
], ['a', 3, 0, 'b', 280, 0]);
IDRegistry.genItemID("dirt_helmet");
Item.createArmorItem("dirt_helmet", "Шлем из грязи", {name: "dirt_helmet"}, {type: "helmet", armor: 1, durability: 20, texture: "armor/dirt_layer_0.png"});
Recipes.addShaped({id: ItemID.dirt_helmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', 3, 0]);
IDRegistry.genItemID("dirt_chestplate");
Item.createArmorItem("dirt_chestplate", "Нагрудник из грязи", {name: "dirt_chestplate"}, {type: "chestplate", armor: 2, durability: 35, texture: "armor/dirt_layer_0.png"});
Recipes.addShaped({id: ItemID.dirt_chestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', 3, 0]);
IDRegistry.genItemID("dirt_leggings");
Item.createArmorItem("dirt_leggings", "Поножи из грязи", {name: "dirt_leggings"}, {type: "leggings", armor: 2, durability: 30, texture: "armor/dirt_layer_1.png"});
Recipes.addShaped({id: ItemID.dirt_leggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', 3, 0]);
IDRegistry.genItemID("dirt_boots");
Item.createArmorItem("dirt_boots", "Ботинки из грязи", {name: "dirt_boots"}, {type: "boots", armor: 1, durability: 25, texture: "armor/dirt_layer_0.png"});
Recipes.addShaped({id: ItemID.dirt_boots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', 3, 0]);