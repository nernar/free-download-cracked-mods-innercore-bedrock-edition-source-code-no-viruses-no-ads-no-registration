


	 IDRegistry.genItemID("steeleaf_sword");
IDRegistry.genItemID("steeleaf_shovel");
IDRegistry.genItemID("steeleaf_pickaxe");
IDRegistry.genItemID("steeleaf_axe");
Item.createItem("steeleaf_sword", "steeleaf Sword", {name: "cr5", meta: 0}, {stack: 1});
Item.createItem("steeleaf_shovel", "steeleaf Shovel", {name: "cr6", meta: 0}, {stack: 1});
Item.createItem("steeleaf_pickaxe", "steeleaf Pickaxe", {name: "cr7", meta: 0}, {stack: 1});
Item.createItem("steeleaf_axe", "steeleaf Axe", {name: "cr8", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("steeleaf", {durability: 1100, level: 2, efficiency: 6, damage: 7, enchantability: 14});

ToolAPI.setTool(ItemID.steeleaf_sword, "steeleaf", ToolType.sword);
ToolAPI.setTool(ItemID.steeleaf_shovel, "steeleaf", ToolType.shovel);
ToolAPI.setTool(ItemID.steeleaf_pickaxe, "steeleaf", ToolType.pickaxe);
ToolAPI.setTool(ItemID.steeleaf_axe, "steeleaf", ToolType.axe);




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


IDRegistry.genItemID("ironwood_sword");
IDRegistry.genItemID("ironwood_shovel");
IDRegistry.genItemID("ironwood_pickaxe");
IDRegistry.genItemID("ironwood_axe");
Item.createItem("ironwood_sword", "steeleaf Sword", {name: "cr5", meta: 0}, {stack: 1});
Item.createItem("ironwood_shovel", "steeleaf Shovel", {name: "cr6", meta: 0}, {stack: 1});
Item.createItem("ironwood_pickaxe", "steeleaf Pickaxe", {name: "cr7", meta: 0}, {stack: 1});
Item.createItem("ironwood_axe", "steeleaf Axe", {name: "cr8", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("steeleaf", {durability: 1100, level: 2, efficiency: 6, damage: 7, enchantability: 14});

ToolAPI.setTool(ItemID.ironwood_sword, "steeleaf", ToolType.sword);
ToolAPI.setTool(ItemID.ironwood_shovel, "steeleaf", ToolType.shovel);
ToolAPI.setTool(ItemID.ironwoodpickaxe, "steeleaf", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ironwood_axe, "steeleaf", ToolType.axe);




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


IDRegistry.genItemID("mazebreaker_pickaxe");
Item.createItem("mazebreaker_pickaxe", " mazebreaker pickaxe", {name: "maypick", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("steeleaf", {durability: 3000, level: 4, efficiency: 30, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.pick, "steeleaf", ToolType.pickaxe);



IDRegistry.genItemID("minotaur_axe");
Item.createItem("minotaur_axe", "Minotaur Axe", {name: "minotauraxe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("steeleaf", {durability: 436, level: 4, efficiency: 24, damage: 12, enchantability: 14});
ToolAPI.setTool(ItemID.minotauraxe, "steeleaf", ToolType.axe);

//var sword 
