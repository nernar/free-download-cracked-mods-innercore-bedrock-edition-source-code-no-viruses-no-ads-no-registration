
IDRegistry.genItemID("obsidian_ingot");

Item.createItem("obsidian_ingot", "obsidian ingot", {name: "obsidian_ingot", meta: 0}, {stack: 64});


Recipes.addShaped({id: ItemID.obsidian_ingot, count: 1, data: 0}, [
	"aaa",
	"aba",
	"aaa"
], ['a', 49, -1, 'b', 266, -1]);




IDRegistry.genItemID("obsidianHelmet");
IDRegistry.genItemID("obsidianChestplate");
IDRegistry.genItemID("obsidianLeggings");
IDRegistry.genItemID("obsidianBoots");

Item.createArmorItem("obsidianHelmet", "obsidian Helmet", {name: "obsidian_helmet"}, {type: "helmet", armor: 3, durability: 1330, texture: "armor/obsidian_1.png"});
Item.createArmorItem("obsidianChestplate", "obsidian Chestplate", {name: "obsidian_chestplate"}, {type: "chestplate", armor: 8, durability: 1480, texture: "armor/obsidian_1.png"});
Item.createArmorItem("obsidianLeggings", "obsidian Leggings", {name: "obsidian_leggings"}, {type: "leggings", armor: 6, durability: 1450, texture: "armor/obsidian_2.png"});
Item.createArmorItem("obsidianBoots", "obsidian Boots", {name: "obsidian_boots"}, {type: "boots", armor: 3, durability: 1390, texture: "armor/obsidian_1.png"});



Item.addRepairItemIds(ItemID.obsidianHelmet, [ItemID.obsidian_ingot]);
Item.addRepairItemIds(ItemID.obsidianChestplate, [ItemID.obsidian_ingot]);
Item.addRepairItemIds(ItemID.obsidianLeggings, [ItemID.obsidian_ingot]);
Item.addRepairItemIds(ItemID.obsidianBoots, [ItemID.obsidian_ingot]);




Callback.addCallback("tick", function () { 
var helmet = Player.getArmorSlot(0);
var chestplate = Player.getArmorSlot(1);
var leggings = Player.getArmorSlot(2);
var boots = Player.getArmorSlot(3);


if(helmet.id==ItemID.obsidianHelmet&&chestplate.id==ItemID.obsidianChestplate&&leggings.id==ItemID.obsidianLeggings&&boots.id==ItemID.obsidianBoots){
	Entity.addEffect(Player.get(), 12, 20, 100, false)
}});
 



Recipes.addShaped({id: ItemID.obsidianHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.obsidian_ingot, -1]);

Recipes.addShaped({id: ItemID.obsidianChestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.obsidian_ingot, -1]);

Recipes.addShaped({id: ItemID.obsidianLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.obsidian_ingot, -1]);

Recipes.addShaped({id: ItemID.obsidianBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.obsidian_ingot, -1]);



IDRegistry.genItemID("obsidianSword");
IDRegistry.genItemID("obsidianShovel");
IDRegistry.genItemID("obsidianPickaxe");
IDRegistry.genItemID("obsidianAxe");
IDRegistry.genItemID("obsidianHoe");
Item.createItem("obsidianSword", "obsidian Sword", {name: "obsidian_sword", meta: 0}, {stack: 1});
Item.createItem("obsidianShovel", "obsidian Shovel", {name: "obsidian_shovel", meta: 0}, {stack: 1});
Item.createItem("obsidianPickaxe", "obsidian Pickaxe", {name: "obsidian_pickaxe", meta: 0}, {stack: 1});
Item.createItem("obsidianAxe", "obsidian Axe", {name: "obsidian_axe", meta: 0}, {stack: 1});
Item.createItem("obsidianHoe", "obsidian Hoe", {name: "obsidian_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("obsidian", {durability: 1525, level: 5, efficiency: 8, damage: 12, enchantability: 20});
ToolLib.setTool(ItemID.obsidianSword, "obsidian", ToolType.sword);
ToolLib.setTool(ItemID.obsidianShovel, "obsidian", ToolType.shovel);
ToolLib.setTool(ItemID.obsidianPickaxe, "obsidian", ToolType.pickaxe);
ToolLib.setTool(ItemID.obsidianAxe, "obsidian", ToolType.axe);
ToolLib.setTool(ItemID.obsidianHoe, "obsidian", ToolType.hoe);

Item.addRepairItemIds(ItemID.obsidianSword, [ItemID.obsidian_ingot]);
Item.addRepairItemIds(ItemID.obsidianShovel, [ItemID.obsidian_ingot]);
Item.addRepairItemIds(ItemID.obsidianPickaxe, [ItemID.obsidian_ingot]);
Item.addRepairItemIds(ItemID.obsidianAxe, [ItemID.obsidian_ingot]);
Item.addRepairItemIds(ItemID.obsidianHoe, [ItemID.obsidian_ingot]);

Recipes.addShaped({id: ItemID.obsidianSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.obsidian_ingot, -1, 'b', 369, -1]);

Recipes.addShaped({id: ItemID.obsidianShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.obsidian_ingot, -1, 'b', 369, -1]);

Recipes.addShaped({id: ItemID.obsidianPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.obsidian_ingot, -1, 'b', 369, -1]);

Recipes.addShaped({id: ItemID.obsidianAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.obsidian_ingot, -1, 'b', 369, -1]);

Recipes.addShaped({id: ItemID.obsidianHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.obsidian_ingot, -1, 'b', 369, -1]);

