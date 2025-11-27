ToolAPI.addToolMaterial("copper", {durability: 100, level: 1, efficiency: 3 , damage: 2, enchantability: 6});

IDRegistry.genItemID("stone_knife");
Item.createItem("stone_knife", "Stone Knife", {name: "stone_knife", meta: 0}, {stack: 1}); 

ToolAPI.registerTool(ItemID.stone_knife, {level: 3, durability: 30, damage: 1}, ["stone"]);

IDRegistry.genItemID("stone_sharpened_knife");
Item.createItem("stone_sharpened_knife", "Stone Sharpened Knife", {name: "stone_sharpened_knife", meta: 0}, {stack: 1});

ToolAPI.registerTool(ItemID.stone_sharpened_knife, {level: 3, durability: 120, damage: 3}, ["stone"]);

IDRegistry.genItemID ("copperAxe");
Item.createItem("copperAxe", "Copper Axe", {name: "copperaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.copperAxe, "copper", ToolType.axe);
Recipes.addShaped({id: ItemID.copperAxe, count: 1, data: 0}, [
	"aa",
	"ay",
	" b"
], ['a', ItemID.copper_ingot, 0, 'b', 280, 0, 'y', ItemID.axe_template, 0]);

IDRegistry.genItemID ("copperPick");
Item.createItem("copperPick", "Copper Pickaxe", {name: "copperpick", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.copperPick, "copper", ToolType.pickaxe);
Recipes.addShaped({id: ItemID.copperPick, count: 1, data: 0}, [
	"aaa",
	" y ",
	" b "
], ['a', ItemID.copper_ingot, 0, 'b', 280, 0, 'y', ItemID.pick_template, 0]);

