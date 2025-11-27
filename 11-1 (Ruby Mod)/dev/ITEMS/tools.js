importLib("ToolType", "*");

IDRegistry.genItemID("rubySword");
IDRegistry.genItemID("rubyShovel");
IDRegistry.genItemID("rubyPickaxe");
IDRegistry.genItemID("rubyAxe");
IDRegistry.genItemID("rubyHoe");
Item.createItem("rubySword", "Ruby Sword", {name: "rubysword", meta: 0}, {stack: 1});
Item.createItem("rubyShovel", "Ruby Shovel", {name: "rubyshovel", meta: 0}, {stack: 1});
Item.createItem("rubyPickaxe", "Ruby Pickaxe", {name: "rubypickaxe", meta: 0}, {stack: 1});
Item.createItem("rubyAxe", "Ruby Axe", {name: "rubyaxe", meta: 0}, {stack: 1});
Item.createItem("rubyHoe", "Ruby Hoe", {name: "rubyhoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ruby", {durability: 1100, level: 2, efficiency: 6, damage: 10, enchantability: 14});

ToolAPI.setTool(ItemID.rubySword, "ruby", ToolType.sword);
ToolAPI.setTool(ItemID.rubyShovel, "ruby", ToolType.shovel);
ToolAPI.setTool(ItemID.rubyPickaxe, "ruby", ToolType.pickaxe);
ToolAPI.setTool(ItemID.rubyAxe, "ruby", ToolType.axe);
ToolAPI.setTool(ItemID.rubyHoe, "ruby", ToolType.hoe);



IDRegistry.genItemID("ulrubySword");
IDRegistry.genItemID("ulrubyShovel");
IDRegistry.genItemID("ulrubyPickaxe");
IDRegistry.genItemID("ulrubyAxe");
IDRegistry.genItemID("ulrubyHoe");
Item.createItem("ulrubySword", "Ultimate Ruby Sword", {name: "urubysword", meta: 0}, {stack: 1});
Item.createItem("ulrubyShovel", "Ultimate Ruby Shovel", {name: "urubyshovel", meta: 0}, {stack: 1});
Item.createItem("ulrubyPickaxe", "Ultimate Ruby Pickaxe", {name: "urubypickaxe", meta: 0}, {stack: 1});
Item.createItem("ulrubyAxe", "Ultimate Ruby Axe", {name: "urubyaxe", meta: 0}, {stack: 1});
Item.createItem("ulrubyHoe", "Ultimate Ruby Hoe", {name: "urubyhoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ulruby", {durability: 2000, level: 3, efficiency: 10, damage: 30, enchantability: 20});

ToolAPI.setTool(ItemID.ulrubySword, "ulruby", ToolType.sword);
ToolAPI.setTool(ItemID.ulrubyShovel, "ulruby", ToolType.shovel);
ToolAPI.setTool(ItemID.ulrubyPickaxe, "ulruby", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ulrubyAxe, "ulruby", ToolType.axe);
ToolAPI.setTool(ItemID.ulrubyHoe, "ulruby", ToolType.hoe);



Recipes.addShaped({id: ItemID.rubySword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.ruby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.rubyShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.ruby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.rubyPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.ruby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.rubyAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.ruby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.rubyHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.ruby, 0, 'b', 280, 0]);


Recipes.addShaped({id: ItemID.urubySword, count: 1, data: 0}, [
	" a ",
	"aaa",
	" b "
], ['a', ItemID.ulruby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.urubyShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.ulruby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.urubyPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.ulruby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.urubyAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.ulruby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.urubyHoe, count: 1, data: 0}, [
	"ab",
	" b",
	" b"
], ['a', ItemID.ulruby, 0, 'b', 280, 0]);