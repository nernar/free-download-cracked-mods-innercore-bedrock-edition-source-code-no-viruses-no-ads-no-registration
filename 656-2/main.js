/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 2
*/



// file: importlib.js

IMPORT("ToolLib");




// file: obsidian.js


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

Item.createArmorItem("obsidianHelmet", "obsidian Helmet", {name: "obsidian_helmet"}, {type: "helmet", armor: 3, durability: 1530, texture: "armor/obsidian_1.png"});
Item.createArmorItem("obsidianChestplate", "obsidian Chestplate", {name: "obsidian_chestplate"}, {type: "chestplate", armor: 8, durability: 1780, texture: "armor/obsidian_1.png"});
Item.createArmorItem("obsidianLeggings", "obsidian Leggings", {name: "obsidian_leggings"}, {type: "leggings", armor: 6, durability: 1650, texture: "armor/obsidian_2.png"});
Item.createArmorItem("obsidianBoots", "obsidian Boots", {name: "obsidian_boots"}, {type: "boots", armor: 3, durability: 1590, texture: "armor/obsidian_1.png"});



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

ToolAPI.addToolMaterial("obsidian", {durability: 1925, level: 10, efficiency: 9, damage: 12, enchantability: 20});
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


Callback.addCallback("DestroyBlock", function(coords, block, player){
item=Player.getCarriedItem(true);
if(item.id==ItemID.obsidianPickaxe&&block.id==7){
	World.destroyBlock(coords.x, coords.y, coords.z, true);
	}});
	
	Callback.addCallback("tick", function () { 
	item=Player.getCarriedItem(true);
	if(item.id==ItemID.obsidianPickaxe){
		Block.setDestroyTime(7, 0.1); 
	}
	else
	if(item.id!==ItemID.obsidianPickaxe){
		Block.setDestroyTime(7, 99999*99999);
	}});

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

//________________\\

var FURNACE_FUEL_MAP = { 	5: 300, 	6: 100, 	17: 300, 	263: 1600, 	280: 100, 	268: 200, 	269: 200, 	270: 200, 	271: 200, 	85: 300, 	107: 300, 	134: 300, 	135: 300, 	158: 150, 	162: 300, 	163: 300, 	164: 300, 	184: 300, 	185: 300, 	186: 300, 	187: 300, 	53: 300, 	54: 300, 	58: 300 };

var guiTnyFurnace = new UI.StandartWindow({
	standart: {
		header: {text: {text: "obsidian Furnace"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire_scale", scale: 3.2}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
		"slotSource": {type: "slot", x: 441, y: 75},
		"slotResult": {type: "slot", x: 625, y: 142},
	}
});



IDRegistry.genBlockID("piliObsidianFurnace");
Block.createBlockWithRotation("piliObsidianFurnace", [
	{name: "Obsidian Furnace", texture: [["piliObsidianFurnace", 0], ["piliObsidianFurnace", 0], ["piliObsidianFurnace", 0], ["piliObsidianFurnace", 1], ["piliObsidianFurnace", 0], ["piliObsidianFurnace", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.piliObsidianFurnace, "stone");

	Recipes.addShaped({id: BlockID.piliObsidianFurnace, count: 1, data: 0}, [
		"xxx",
		"xax",
		"xxx"
	], ['x', ItemID.obsidian_ingot, -1, 'a', 61, -1]);

TileEntity.registerPrototype(BlockID.piliObsidianFurnace, {
	defaultValues: {
		progress: 0
	},
	
	getGuiScreen: function(){
		return guiTnyFurnace;
	},
	
	tick: function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
		if(result){
			var resultSlot = this.container.getSlot("slotResult");
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 30){
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else {
			this.data.progress = 0;
		}
		this.container.setScale("progressScale", this.data.progress / 30);
	}
});



//________grinder________\\


IDRegistry.genBlockID("piliObsidianGrinder");
Block.createBlockWithRotation("piliObsidianGrinder", [
	{name: "Obsidian Grinder", texture: [["piliObsidianFurnace", 0], ["piliObsidianFurnace", 0], ["piliObsidianFurnace", 0], ["piliObsidianGrinder", 0], ["piliObsidianFurnace", 0], ["piliObsidianFurnace", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.piliObsidianGrinder, "stone");

	Recipes.addShaped({id: BlockID.piliObsidianFurnace, count: 1, data: 0}, [
		"bcb",
		"xax",
		"ddd"
	], ['x', ItemID.obsidian_ingot, -1, 'a', BlockID.piliObsidianFurnace, -1, 'b', 267, -1, 'c', 397, -1, 'd', 152, -1]);


var evilMobs = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62, 103,104,105,106,107,108,109,110,111,112,113,114,115,116,118];

TileEntity.registerPrototype(BlockID.piliObsidianGrinder,{
	defaultValues: {
  damage: 100,
  range: 5,
  kill:0
  },
redstone: function(params){ 
if(params.power >3){
for(let i in evilMobs){
let ent = Entity.findNearest({x: this.x, y: this.y, z: this.z}, evilMobs[i], this.data.range);
if(ent){
Entity.damageEntity(ent, 100);
}}}}});


 






