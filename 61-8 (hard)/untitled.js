IDRegistry.genBlockID("sBlock"); Block.createBlock("sBlock", [ {name: "steel block", texture: [["sBlock", 0], ["sBlock", 0], ["sBlock", 0], ["sBlock", 0], ["sBlock", 0], ["sBlock", 0]], inCreative: true} ])
Recipes.addShaped({id: BlockID.sBlock, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.sIngot, -1]);
Recipes.addShaped({id: ItemID.sIngot, count: 9, data: 0}, [
	"a",
	"",
	""
], ['a', BlockID.sBlock, -1]);

IDRegistry.genItemID("CIron");
Item.createItem("CIron", "coal & iron", {name: "CIron", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.CIron, count: 1, data: 0}, [
	"ba",
	"",
	""
], ['a', 265, -1, 'b', 263, 0]);

IDRegistry.genItemID("sIngot");
Item.createItem("sIngot", "steel ingot", {name: "sIngot", meta: 0}, {stack: 64});
Recipes.addFurnace(ItemID.CIron, ItemID.sIngot, 0);

importLib("ENV", "*");

IDRegistry.genItemID("sSword");
Item.createItem("sSword", "steel Sword", {name: "sSword", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.sSword, count: 1, data: 0}, [
	"  a",
	"ca ",
	"bc "
], ['a', BlockID.sBlock, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);

IDRegistry.genItemID("sSpade");
Item.createItem("sSpade", "steel Shovel", {name: "sSpade", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.sSpade, count: 1, data: 0}, [
	" ca",
	" bc",
	"b  "
], ['a', BlockID.sBlock, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);

IDRegistry.genItemID("sPick");
Item.createItem("sPick", "steel Pickaxe", {name: "sPick", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.sPick, count: 1, data: 0}, [
	"aac",
	" ba",
	"b a"
], ['a', BlockID.sBlock, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);

IDRegistry.genItemID("sAxe");
Item.createItem("sAxe", "steel Axe", {name: "sAxe", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.sAxe, count: 1, data: 0}, [
	"aac",
	"ab ",
	"b  "
], ['a', BlockID.sBlock, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);

ToolAPI.addToolMaterial("steel", {durability: 666666, level: 6, efficiency: 8, damage: 12, enchantability: 14});
ToolAPI.setTool(ItemID.sSword, "steel", ToolType.sword);
ToolAPI.setTool(ItemID.sSpade, "steel", ToolType.shovel);
ToolAPI.setTool(ItemID.sPick, "steel", ToolType.pickaxe);
ToolAPI.setTool(ItemID.sAxe, "steel", ToolType.axe);


IDRegistry.genItemID("sHelmet");
Item.createArmorItem("sHelmet", "steel Helmet", {name: "sHelmet"}, {type: "helmet", armor: 5, durability: 666666, texture: "armor/sa_1.png"});
Recipes.addShaped({id: ItemID.sHelmet, count: 1, data: 0}, [
	" x ",
	"xax",
	" x "
], ['x', ItemID.sIngot, -1, "a", 310, -1]);

IDRegistry.genItemID("sChest");
Item.createArmorItem("sChest", "steel Chestplate", {name: "sChest"}, {type: "chestplate", armor: 6, durability: 666666, texture: "armor/sa_1.png"});
Recipes.addShaped({id: ItemID.sChest, count: 1, data: 0}, [
	" x ",
	"xax",
	" x "
], ['x', ItemID.sIngot, -1, "a", 311, -1]);

IDRegistry.genItemID("sPants");
Item.createArmorItem("sPants", "steel Leggings", {name: "sPants"}, {type: "leggings", armor: 5, durability: 666666, texture: "armor/sa_2.png"});
Recipes.addShaped({id: ItemID.sPants, count: 1, data: 0}, [
	" x ",
	"xax",
	" x "
], ['x', ItemID.sIngot, -1, "a", 312, -1]);

IDRegistry.genItemID("sBoots");
Item.createArmorItem("sBoots", "steel Boots", {name: "sBoots"}, {type: "boots", armor: 5, durability: 666666, texture: "armor/sa_2.png"});
Recipes.addShaped({id: ItemID.sBoots, count: 1, data: 0}, [
	" x ",
	"xax",
	" x "
], ['x', ItemID.sIngot, -1, "a", 313, -1]);



IDRegistry.genItemID("dsSword");
Item.createItem("dsSword", "ds Sword", {name: "dsSword", meta: 0}, {stack: 1});


IDRegistry.genItemID("dsShovel");
Item.createItem("dsShovel", "ds Shovel", {name: "dsShovel", meta: 0}, {stack: 1});


IDRegistry.genItemID("dsPickaxe");
Item.createItem("dsPickaxe", "ds Pickaxe", {name: "dsPickaxe", meta: 0}, {stack: 1});


IDRegistry.genItemID("dsAxe");
Item.createItem("dsAxe", "ds Axe", {name: "dsAxe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("ds", {durability: 7776777, level: 7, efficiency: 9, damage: 20, enchantability: 14});
ToolAPI.setTool(ItemID.dsSword, "ds", ToolType.sword);
ToolAPI.setTool(ItemID.dsShovel, "ds", ToolType.shovel);
ToolAPI.setTool(ItemID.dsPickaxe, "ds", ToolType.pickaxe);
ToolAPI.setTool(ItemID.dsAxe, "ds", ToolType.axe);




