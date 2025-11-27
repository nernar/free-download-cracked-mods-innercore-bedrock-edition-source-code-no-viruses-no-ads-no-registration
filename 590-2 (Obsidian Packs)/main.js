/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 4
*/



// file: Tool.js

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




// file: Item.js

IDRegistry.genItemID("ObsidianShard");

Item.createItem("ObsidianShard", "Obsidian Shard", {name: "O2", meta: 0}, {stack: 64});
Recipes.addFurnace(49, ItemID.ObsidianShard, 0);

IDRegistry.genItemID("ObsidianIngot");

Item.createItem("ObsidianIngot", "Obsidian Ingot", {name: "O1", meta: 0}, {stack: 64});

	Recipes.addShaped({id: ItemID.ObsidianIngot, count: 8, data: 0}, [
		"xxx",
		"xxx",
		"xxa"
	], ['x', ItemID.ObsidianShard, 0, 'a', 325, 10]);

IDRegistry.genItemID("ObsidianStick");

Item.createItem("ObsidianStick", "Obsidian Stick", {name: "O3", meta: 0}, {stack: 64});

	Recipes.addShaped({id: ItemID.ObsidianStick, count: 1, data: 0}, [
		"xa ",
		"   ",
		"   "
	], ['x', ItemID.ObsidianIngot, 0, 'a', 280, 0]);




// file: Block.js

IDRegistry.genBlockID("OS");

Block.createBlock("OS", [{name: "Obsidian Block", texture: [["B1", 0]], inCreative: true}]);

ToolAPI.registerBlockMaterial(BlockID.OS, "stone");
Block.setDestroyTime(BlockID.OS, 15);
Block.setDestroyLevel(BlockID.OS, 3);

Recipes.addShaped({id: BlockID.OS, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.ObsidianIngot, 0]);




// file: Armor.js

IDRegistry.genItemID("ObsidianHelmet");
 
Item.createArmorItem("ObsidianHelmet", "Apatite Helmet", {name: "O111"}, {type: "helmet", armor: 3, durability: 330, texture: "armor/D_1.png", isTech:false}); 

IDRegistry.genItemID("ObsidianChestplate");

Item.createArmorItem("ObsidianChestplate", "Obsidian Chestplate", {name: "O222"}, {type: "chestplate", armor: 9, durability: 480, texture: "armor/D_1.png", isTech:false}); 

IDRegistry.genItemID("OB");

Item.createArmorItem("OB", "Obsidian Leggings", {name: "O333"}, {type: "leggings", armor: 4, durability: 450, texture: "armor/D_2.png", isTech:false}); 

IDRegistry.genItemID("ObsidianBoots");

Item.createArmorItem("ObsidianBoots", "Obsidian Boots", {name: "O444"}, {type: "boots", armor: 4, durability: 390, texture: "armor/D_1.png", isTech:false}); 

Recipes.addShaped({id: ItemID.ObsidianHelmet, count: 1, data: 0}, [
		"xxx",
		"xax",
		"   "
	], ['x', ItemID.ObsidianIngot, 0, 'a', 310, 0]);

Recipes.addShaped({id: ItemID.ObsidianChestplate, count: 1, data: 0}, [
		"xax",
		"xxx",
		"xxx"
	], ['x', ItemID.ObsidianIngot, 0, 'a', 311, 0]);

Recipes.addShaped({id: ItemID.OB, count: 1, data: 0}, [
		"xxx",
		"xax",
		"x x"
	], ['x', ItemID.ObsidianIngot, 0, 'a', 312, 0]);

Recipes.addShaped({id: ItemID.ObsidianBoots, count: 1, data: 0}, [
		"xax",
		"x x",
		"   "
	], ['x', ItemID.ObsidianIngot, 0, 'a', 313, 0]);




