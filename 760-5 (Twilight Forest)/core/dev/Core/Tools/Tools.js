 IDRegistry.genItemID("steeleaf_sword");
IDRegistry.genItemID("steeleaf_shovel");
IDRegistry.genItemID("steeleaf_pickaxe");
IDRegistry.genItemID("steeleaf_axe");
Item.createItem("steeleaf_sword", "Steeleaf Sword", {name: "steeleaf_sword", meta: 0}, {stack: 1});
Item.createItem("steeleaf_shovel", "Steeleaf Shovel", {name: "steeleaf_shovel", meta: 0}, {stack: 1});
Item.createItem("steeleaf_pickaxe", "Steeleaf Pickaxe", {name: "steeleaf_pickaxe", meta: 0}, {stack: 1});
Item.createItem("steeleaf_axe", "Steeleaf Axe", {name: "steeleaf_axe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("steeleaf", {durability: 780, level: 3, efficiency: 6, damage: 3, enchantability: 14});

ToolAPI.setTool(ItemID.steeleaf_sword, "steeleaf", ToolType.sword);
ToolAPI.setTool(ItemID.steeleaf_shovel, "steeleaf", ToolType.shovel);
ToolAPI.setTool(ItemID.steeleaf_pickaxe, "steeleaf", ToolType.pickaxe);
ToolAPI.setTool(ItemID.steeleaf_axe, "steeleaf", ToolType.axe);

Item.setGlint("steeleaf_sword", true);
Item.setGlint("steeleaf_shovel", true);
Item.setGlint("steeleaf_pickaxe", true);
Item.setGlint("steeleaf_axe", true);

Recipes.addShaped({id: ItemID.steeleaf_sword, couant: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.steeleaf, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.steeleaf_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.steeleaf, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.steeleaf_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.steeleaf, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.steeleaf_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.steeleaf, 0, 'b', 280, 0]);

                             //2//
IDRegistry.genItemID("ironwood_sword");
IDRegistry.genItemID("ironwood_shovel");
IDRegistry.genItemID("ironwood_pickaxe");
IDRegistry.genItemID("ironwood_axe");
Item.createItem("ironwood_sword", "IronWood Sword", {name: "ironwood_sword", meta: 0}, {stack: 1});
Item.createItem("ironwood_shovel", "IronWood Shovel", {name: "ironwood_shovel", meta: 0}, {stack: 1});
Item.createItem("ironwood_pickaxe", "IronWood Pickaxe", {name: "ironwood_pickaxe", meta: 0}, {stack: 1});
Item.createItem("ironwood_axe", "IronWood Axe", {name: "ironwood_axe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ironwood", {durability: 780, level: 3, efficiency: 2, damage: 4, enchantability: 14});

ToolAPI.setTool(ItemID.ironwood_sword, "ironwood", ToolType.sword);
ToolAPI.setTool(ItemID.ironwood_shovel, "ironwood", ToolType.shovel);
ToolAPI.setTool(ItemID.ironwood_pickaxe, "ironwood", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ironwood_axe, "ironwood", ToolType.axe);

Recipes.addShaped({id: ItemID.ironwood_sword, couant: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.ironwood, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ironwood_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.ironwood, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ironwood_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.ironwood, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ironwood_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.ironwood, 0, 'b', 280, 0]);















IDRegistry.genItemID("ice_sword");
Item.createItem("ice_sword", " Ice Sword", {name: "ice_sword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ice_sword", {durability: 11, level: 2, efficiency: 14, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.ice_sword, "ice_sword", ToolType.sword);



IDRegistry.genItemID("mazebreaker_pickaxe");
Item.createItem("mazebreaker_pickaxe", " Mazebreaker Pickaxe", {name: "mazebreaker_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("mazebreaker_pickaxe", {durability: 1576, level: 4, efficiency: 50, damage: 3, enchantability: 14});
ToolAPI.setTool(ItemID.mazebreaker_pickaxe, "mazebreaker_pickaxe", ToolType.pickaxe);



IDRegistry.genItemID("minotaur_axe");
Item.createItem("minotaur_axe", "Minotaur Axe", {name: "minotaur_axe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("minotaur_axe", {durability: 1354, level: 4, efficiency: 24, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.minotaur_axe, "minotaur_axe", ToolType.axe);


