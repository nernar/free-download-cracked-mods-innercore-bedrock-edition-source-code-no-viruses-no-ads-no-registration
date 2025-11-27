/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 17
*/



// file: importlib.js

IMPORT("ToolLib");




// file: api.js

ToolAPI.breakCarriedTool = function(damage){
	var item = Player.getCarriedItem(true);
	item.data += damage;
	if(item.data > Item.getMaxDamage(item.id)){
		item.id = 0;
	}
	Player.setCarriedItem(item.id, item.count, item.data, item.enchant);
}






// file: NEW_TOOL.js


//______________________________\\
IDRegistry.genItemID("bedbre");
Item.createItem("bedbre", "destroy bedrock", {name: "bedbre", meta: 0}, {stack: 1});
Item.setGlint(ItemID.bedbre, true);

Recipes.addShaped({id: ItemID.bedbre, count: 1, data: 0}, 
[ "aaa",
 "cbc",
 "fhf" ], ['a', 388, -1,'b',172,-1,'c',289,-1,'f',145,-1,'h',101,-1]);
 
Callback.addCallback("DestroyBlock", function(coords, block, player){
item=Player.getCarriedItem(true);
if(item.id==ItemID.bedbre&&block.id==7){
	World.destroyBlock(coords.x, coords.y, coords.z);
	World.drop(coords.x, coords.y, coords.z, 7, 1, 0)
	}});
	
	Callback.addCallback("tick", function () { 
	item=Player.getCarriedItem(true);
	if(item.id==ItemID.bedbre){
		Block.setDestroyTime(7, 0.1); 
	}
	else
	if(item.id!==ItemID.bedbre){
		Block.setDestroyTime(7, 99999*99999);
	}});
	
//_____________________________\\
IDRegistry.genItemID("nezHoe");
Item.createItem("nezHoe", "hoe \n 3*3", {name: "nezHoe", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.nezHoe, count: 1, data: 0}, 
[ "aba",
 "cbc",
 " b " ], ['a', 388, -1,'b',294,-1,'c',289,-1]);


Callback.addCallback("ItemUse", function (coords, item, block) { 
var getBlock = World.getBlockID(coords.x, coords.y, coords.z);
if(item.id==ItemID.nezHoe&&getBlock==2||item.id==ItemID.nezHoe&&getBlock==3){
	for(var xx = -1; xx <=1; xx++){
for(var yy = -1; yy <=1; yy++){
for(var zz = -1; zz <=1; zz++){
if(World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 2||World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 3) {
World.setBlock(coords.x+xx, coords.y+yy, coords.z+zz, 60);

}}}}}});
//_____________________________\\

//_____________________________\\
IDRegistry.genItemID("jackhammer");
Item.createItem("jackhammer", "jackhammer", {name: "jackhammer", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.jackhammer, count: 1, data: 0}, [
		"bcb",
		"axa",
		" x "
	], ['x', 265, -1, 'b', 280, -1, 'a', 331, -1,'c',145,-1]);

Callback.addCallback("DestroyBlockStart", function (coords, block, player) { 
item=Player.getCarriedItem(true);
if(item.id==ItemID.jackhammer&&block.id==49)
{
World.destroyBlock(coords.x, coords.y, coords.z, true);

}});
//_____________________________\\




// file: soul.js

Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 3,
	explosionres: 15,
	lightopacity: 15,
	renderlayer: 2,
	translucency: 0
}, "soul");



IDRegistry.genItemID("pili_soul");
Item.createItem("pili_soul", "soulirim", {name: "pili_soul", meta: 0}); 
Recipes.addShaped({id:
ItemID.pili_soul, count: 1, data: 0}, 
["aba",
 "bcb",
 "aba"], 
 ['a', 266, -1, 'b', 388, -1, 'c', 152, -1]); 
 
Callback.addCallback("PlayerAttack",function(player,victim){

var mobId = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118];
for(var i=0; i<120; i++)
{
item=Player.getCarriedItem(true);


if(item.id==ItemID.pili_soul&&Entity.getType(victim)==mobId[i])
{
var coords = Entity.getPosition(victim);
Entity.damageEntity(victim, 1000);
Player.decreaseCarriedItem(1);
World.drop(coords.x, coords.y, coords.z, 383, 1, mobId[i]);}}});


IDRegistry.genBlockID("mobSpawners");
Block.createBlock("mobSpawners", [{name: "mob spawner", texture: [["mspawner", 0], ["mspawner", 0], ["mspawner", 0], ["mspawner", 0], ["mspawner", 0], ["mspawner", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.mobSpawners, count: 1, data: 0}, [
"xxx","xax","xxx"], ['x', 101, -1, 'a', 383, -1]);

var guiSpawn = new UI.StandartWindow({
	standart: {
		header: {text: {text: "mob spawner"}},
		inventory: {standart: true},
		background: {standart: true}},
drawing: [{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2}],
elements: {"slotGlass": {type: "slot", x: 441, y: 75},
"textInfo4": {type: "text", x: 441, y: 50, width: 300, height: 28, text: "spawn egg"},
"textInfo5": {type: "text", x: 800, y: 230, width: 300, height: 30, text: "redstoune:"},
		"textInfo7": {type: "text", x: 930, y: 230, width: 300, height: 30}
}});
TileEntity.registerPrototype(BlockID.mobSpawners,{
	defaultValues:{
	work:0
	},
	getGuiScreen: function(){return guiSpawn;},
	redstone: function(params){ 
if(this.data.work == 1&&params.power >1)
{
this.data.work = 0;
}
else{
if(this.data.work == 0&&params.power >1)
{
this.data.work = 1;
}}},
tick: function(){
this.container.setText("textInfo7", parseInt(this.data.work));
var glassId = this.container.getSlot("slotGlass");
var crisId = this.container.getSlot("slotCris");
if(World.getThreadTime()%100== 0&&this.data.work==1){
if(glassId.id == 383&&glassId.data==glassId.data&&this.data.work==1){

Entity.spawn(this.x+0.5, this.y+2, this.z+0.5, glassId.data)}}}});



 
 IDRegistry.genBlockID("piligrinder");
Block.createBlock("piligrinder", [{name: "grinder", texture: [["weapon_box_top", 0]], inCreative: true}], "soul");

Recipes.addShaped({id: BlockID.piligrinder, count: 1, data: 0}, [
"cxc",
"xax",
"bxb"], 
['x', 331, -1, 'a', 41, -1, 'c', 267, -1, 'b', 318, -1]);





var evilMobs = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118];

TileEntity.registerPrototype(BlockID.piligrinder,{
	defaultValues: {
  damage: 100,
  range: 5
  },
redstone: function(params){ 
if(params.power >1){
for(let i in evilMobs){
let ent = Entity.findNearest({x: this.x, y: this.y, z: this.z}, evilMobs[i], this.data.range);
if(ent){
Entity.damageEntity(ent, 100);
}}}}});


 




// file: tapcrop.js

Callback.addCallback("ItemUse", function (coords, item, block) {
var cropId = [59, 141, 142, 244];
var dropId = [296, 391, 392, 457];
var seedId = [295, 0, 0, 458];
var countId = [2, 3, 4, 2];
var counsId = [1, 0, 0, 1];
for(var i=0; i<6; i++)
if(block.id == cropId[i] && block.data == 7 ){
World.setBlock(coords.x, coords.y, coords.z, 0);
World.setBlock(coords.x, coords.y, coords.z, cropId[i], 0);
World.drop(coords.x, coords.y, coords.z, dropId[i], countId[i], 0);
World.drop(coords.x, coords.y, coords.z, seedId[i], counsId[i], 0);
Player.addExperience(1);
}}); 




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





// file: magnit.js

/*
IDRegistry.genItemID("magnet"); Item.createItem("magnet", "магнит", {name: "magnet", meta: 0}, {stack: 1}); 
	Recipes.addShaped({id: ItemID.magnet, count: 1, data: 0}, [
	"a b",
	"x x",
	"xxx"
], ['x', 265, -1,'b',266,-1,'a',331,-1]);
	
	
	var drop = [64];
	
Callback.addCallback("tick", function () { 
var pos = Entity.getPosition(Player.get());
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
if(slot.id==ItemID.magnet){

	
	for(let i in evilMobs){
let ent = Entity.findNearest({x: pos.x, y: pos.y, z: pos.z}, drop[i], 6);
if(ent){
Entity.setPosition(ent,pos.x,pos.y,pos.z);
}
}
}}});	

*/




// file: minitol.js



IDRegistry.genItemID("manure");
Item.createItem("manure", "manure", {name: "pupMeale", meta: 0},{stack: 1}, {damage: 30});
Item.setMaxDamage(ItemID.manure, 30);
;
Recipes.addShaped({id: ItemID.manure, count: 1, data: 0}, ["aba","bcb","aba"], ["a", 351, 15, "b", 6, -1, "c", 3, -1]);
Recipes.addShaped({id: ItemID.manure, count: 1, data: 0}, ["aba","bcb","aba"], ["a", 351, 15, "b", 18, -1, "c", 3, -1]);


Callback.addCallback("ItemUse", function (coords, item, block) {
var cropId = [59, 141, 142, 244];
for(var i=0; i<6; i++)
if(item.id==ItemID.manure&&block.id == cropId[i] && block.data !== 7 ){
block.data++;
World.setBlock(coords.x, coords.y, coords.z, cropId[i], 7);
ToolAPI.breakCarriedTool(1);
}}); 



Recipes.addShaped({id: 81, count: 1, data: 0},[" a "," a "," a "],['a', 18, 0]);
Recipes.addShaped({id: 388, count: 1, data: 0},[" a ","aba"," a "],['a', 351, 2, 'b', 20, 0]);
Recipes.addShaped({id: 351, count: 1, data: 2},[" a ","   ","   "],['a', 81, 0]);
//serp listva


//портал в энд

IDRegistry.genItemID("endPortal");
Item.createItem("endPortal", "Ender Portal", {name: "endPortal", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.endPortal, count: 1, data: 0}, [
		"bab",
		"axa",
		"bab"
	], ['x', 264, 0, 'a', 381, 0, 'b', 49, 0]);



Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.endPortal&&block.id !==0){
Player.setCarriedItem(item.id, item.count - 1, 0);
World.setBlock(coords.x, coords.y+1, coords.z, 119, 0); 
World.setBlock(coords.x+1, coords.y+1, coords.z, 7, 0); 
World.setBlock(coords.x-1, coords.y+1, coords.z, 7, 0);
World.setBlock(coords.x, coords.y+1, coords.z+1, 7, 0);
World.setBlock(coords.x, coords.y+1, coords.z-1, 7, 0);
Entity.spawn(coords.x+1, coords.y+1, coords.z, 93); 
}}); 


//хп
IDRegistry.genItemID("hp");
Item.createItem("hp", "гы :3", {name: "hp", meta: 0});
Recipes.addShaped({id: ItemID.hp, count: 1, data: 0}, [
		" a ",
		"aba",
		" a "], ['a', 152, -1, 'b', 322, -1]);

Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.hp&&block.id !==0&&hp <=40){
Player.setCarriedItem(item.id, item.count - 1, 0);
Entity.setMaxHealth(Player.get(), hp+1)}}); 




//смерть
Callback.addCallback("EntityDeath", function(entity){
	
	
	var pos = Player.getPosition();	
		if(Entity.getType(entity) == 63){
			var pos = Entity.getPosition(entity); 		Game.message("X: "+Math.round(pos.x)+" Y: "+Math.round(pos.y)+" Z: "+Math.round(pos.z));
}});
//ore




IDRegistry.genItemID("tinyCoal");
Item.createItem("tinyCoal","Tiny Coal",{name:"tiny_coal"});
Recipes.addFurnaceFuel(ItemID.tinyCoal,0,200);

IDRegistry.genItemID("tinyCharcoal");
Item.createItem("tinyCharcoal","Tiny Charcoal",{name:"tiny_charcoal"});
Recipes.addFurnaceFuel(ItemID.tinyCharcoal,0,200);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShapeless({id:ItemID.tinyCoal,count:9,data:0},[{id:263,data:0}]);
    Recipes.addShapeless({id:263,count:1,data:0},[{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0}]);

    Recipes.addShapeless({id:ItemID.tinyCharcoal,count:9,data:0},[{id:263,data:1}]);
    Recipes.addShapeless({id:263,count:1,data:1},[{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0}]);
});







// file: wand.js


//______padenie_______\\



//_____________________\\
//посохи


IDRegistry.genItemID("tntStuff");
Item.createItem("tntStuff", "staff of tnt", {name: "tntWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.tntStuff, 234);

IDRegistry.genItemID("regStuff");
Item.createItem("regStuff", "sraff of regeneration", {name: "regenWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.regStuff, 234);

IDRegistry.genItemID("shuStuff");
Item.createItem("shuStuff", "staff of shulker", {name: "shulkerWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.shuStuff, 234);

IDRegistry.genItemID("arrStuff");
Item.createItem("arrStuff", "staff of arrow",{name: "arrowWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.arrStuff, 234);

IDRegistry.genItemID("fiStuff");
Item.createItem("fiStuff", "staff of fire", {name: "fireWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.fiStuff, 234);

IDRegistry.genItemID("wiStuff");
Item.createItem("wiStuff", "staff of wither", {name: "witherWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.wiStuff, 234);


//крафт посохов
IDRegistry.genItemID("goldStickL");
Item.createItem("goldStickL", "gold stick", {name: "blaze_rod", meta:0}, {stack: 64});

Recipes.addShaped({id: ItemID.goldStickL, count: 1, data: 0}, [
	"aba",
	"bcb",
	"aba "
], ['a', 348, -1, 'b', 266, -1,'c',280,-1]);

//



Recipes.addShaped({id: ItemID.tntStuff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 46, -1]);

Recipes.addShaped({id: ItemID.regStuff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 322, -1]);

Recipes.addShaped({id: ItemID.arrStuff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 262, -1]);

Recipes.addShaped({id: ItemID.shuStuff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 445, -1]);

Recipes.addShaped({id: ItemID.fiStuff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 259, -1]);

Recipes.addShaped({id: ItemID.wiStuff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 288, -1]);


//функции 




Item.registerNoTargetUseFunction("tntStuff", function(item){
  if(item.id == ItemID.tntStuff){
    let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
var mob = Entity.spawn(pos.x+0.5, pos.y+1, pos.z+0.5, 65); 
{
Entity.setVelocity(mob, 3*vec.x, 3*vec.y, 3*vec.z);   
ToolAPI.breakCarriedTool(1);       
}}}); 


Item.registerNoTargetUseFunction("regStuff", function(item){
  if(item.id == ItemID.regStuff){
  Entity.addEffect(Player.get(), 10, 2, 234, false);
  ToolAPI.breakCarriedTool(1);
  }});
 
 
 Item.registerNoTargetUseFunction("arrStuff", function(item){
if(item.id == ItemID.arrStuff){
let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
var mob = Entity.spawn(pos.x+0.5, pos.y+1, pos.z+0.5, 80); 
{
Entity.setVelocity(mob, 3*vec.x, 3*vec.y, 3*vec.z);    
ToolAPI.breakCarriedTool(1);     
}}}); 


 Item.registerNoTargetUseFunction("shuStuff", function(item){
if(item.id == ItemID.shuStuff){
let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
var mob = Entity.spawn(pos.x, pos.y+1, pos.z, 76); 
{
Entity.setVelocity(mob, 3*vec.x, 3*vec.y, 3*vec.z);
ToolAPI.breakCarriedTool(1);          
}}}); 


 Item.registerNoTargetUseFunction("fiStuff", function(item){
if(item.id == ItemID.fiStuff){
let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
var mob = Entity.spawn(pos.x, pos.y+1, pos.z, 85); 
{
Entity.setVelocity(mob, 3*vec.x, 3*vec.y, 3*vec.z);
ToolAPI.breakCarriedTool(1);          
}}}); 


 Item.registerNoTargetUseFunction("wiStuff", function(item){
if(item.id == ItemID.wiStuff){
let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
var mob = Entity.spawn(pos.x, pos.y+1, pos.z, 89); 
{
Entity.setVelocity(mob, 3*vec.x, 3*vec.y, 3*vec.z);   
ToolAPI.breakCarriedTool(1);       
}}}); 






// file: paxels.js

var Paxels = {
	addItem: function(id, material, i1, i2, i3, i4){
IDRegistry.genItemID(id + "Paxel");
Item.createItem(id + "Paxel", id + " Paxel", {name: id + "Paxel", meta: 0}, {stack: 1});
Item.setToolRender(ItemID[id + "Paxel"], true);
ToolAPI.registerTool(ItemID[id + "Paxel"], material, ["stone", "dirt", "wood"], {damage: 5});
Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "Paxel"], count: 1, data: 0}, [
	"ab",
	"cd"
], ['a', i1, -1, 'b', i2, -1, 'c', i3,-1,'d', i4,-1]);});
	}
	}

ToolAPI.addToolMaterial("gold", {

      durability: 36, 
      level: 2, 
      efficiency: 20, 
      damage: 0, 
      enchantability: 15
});

Paxels.addItem("Wood", "wood", 268, 269, 270, 271);
Item.setEnchantType(ItemID.WoodPaxel, Native.EnchantType.pickaxe, 140);

Paxels.addItem("Stone", "stone", 272, 273, 274, 275);
Item.setEnchantType(ItemID.StonePaxel, Native.EnchantType.pickaxe, 14);

Paxels.addItem("Gold", "gold", 283, 284, 285, 286);
Item.setEnchantType(ItemID.GoldPaxel, Native.EnchantType.pickaxe, 50);

Paxels.addItem("Iron", "iron", 267, 256, 257, 258);
Item.setEnchantType(ItemID.IronPaxel, Native.EnchantType.pickaxe, 14);

Paxels.addItem("Diamond", "diamond", 276, 277, 278, 279);
Item.setEnchantType(ItemID.DiamondPaxel, Native.EnchantType.pickaxe, 14);



Item.addRepairItemIds(ItemID.WoodPaxel, [17]);
Item.addRepairItemIds(ItemID.StonePaxel, [1]);
Item.addRepairItemIds(ItemID.GoldPaxel, [266]);
Item.addRepairItemIds(ItemID.IronPaxel, [265]);
Item.addRepairItemIds(ItemID.DiamondPaxel, [264]);


//Native.EnchantType.pickaxe




// file: hammer.js


var hammers = {
	addItem: function(id, material, i1, i2){
IDRegistry.genItemID(id + "hammer");
Item.createItem(id + "hammer", id + " hammer", {name: id + "hammer", meta: 0}, {stack: 1});
Item.setToolRender(ItemID[id + "hammer"], true);
ToolAPI.registerTool(ItemID[id + "hammer"], material, ["stone"], {damage: 5});
Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "hammer"], count: 1, data: 0}, [
	"aaa",
	"aba",
	" b "
], ['a', i1, -1, 'b', i2, -1]);});
	}
}

ToolAPI.addToolMaterial("gold", {
      durability: 360, 
      level: 2, 
      efficiency: 20, 
      damage: 0, 
      enchantability: 15
});

/*ToolAPI.addToolMaterial("obsidian", {
      durability: 3600, 
      level: 20, 
      efficiency: 20, 
      damage: 0, 
      enchantability: 15
});
*/


hammers.addItem("wood", "wood", 17, 5);
hammers.addItem("stone", "stone", 4, 5);
hammers.addItem("gold", "gold", 266, 5);
hammers.addItem("iron", "iron", 265, 5);
hammers.addItem("diamond", "diamond", 264, 5);
//hammers.addItem("obsidian", "obsidian", 49, 5);



Item.setEnchantType(ItemID.woodhammer, Native.EnchantType.pickaxe, 140);
Item.setEnchantType(ItemID.stonehammer, Native.EnchantType.pickaxe, 14);
Item.setEnchantType(ItemID.goldhammer, Native.EnchantType.pickaxe, 50);
Item.setEnchantType(ItemID.ironhammer, Native.EnchantType.pickaxe, 14);
Item.setEnchantType(ItemID.diamondhammer, Native.EnchantType.pickaxe, 14);


Item.addRepairItemIds(ItemID.woodhammer, [17]);
Item.addRepairItemIds(ItemID.stonehammer, [1]);
Item.addRepairItemIds(ItemID.goldhammer, [266]);
Item.addRepairItemIds(ItemID.ironhammer, [265]);
Item.addRepairItemIds(ItemID.diamondhammer, [264]);

Callback.addCallback("DestroyBlock", function(coords, block, player){

var side = coords.side;

var X = 1;
var Y = 1;
var Z = 1;

if(side==4 || side==5){
            X = 0;}
            if(side==1 || side==6){
            Y = 0;}
            if(side==2 || side==3){
            Z = 0;}
for(var xx = coords.x - X; xx <= coords.x + X; xx++){
                for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
                    for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
item=Player.getCarriedItem(true);
if(World.getBlockID(xx, yy, zz) !== 7&&item.id==ItemID.woodhammer||World.getBlockID(xx, yy, zz) !== 7&&item.id==ItemID.stonehammer||World.getBlockID(xx, yy, zz) !== 7&&item.id==ItemID.goldhammer||World.getBlockID(xx, yy, zz) !== 7&&item.id==ItemID.ironhammer||World.getBlockID(xx, yy, zz) !== 7&&item.id==ItemID.diamondhammer||World.getBlockID(xx, yy, zz) !== 7&&item.id==ItemID.obsidianhammer){
World.destroyBlock(xx, yy, zz, true);}}}};});











// file: bigsword.js

IDRegistry.genItemID("big_wood_sword");
IDRegistry.genItemID("big_stone_sword");
IDRegistry.genItemID("big_iron_sword");
IDRegistry.genItemID("big_gold_sword");
IDRegistry.genItemID("big_diamond_sword");


Item.createItem("big_wood_sword", "big wooden sword \n +10 dmg", {name: "big_wood_sword", meta: 0},{stack: 1});

Item.createItem("big_stone_sword", "big stone sword \n +12 dmg", {name: "big_stone_sword", meta: 0},{stack: 1});

Item.createItem("big_iron_sword", "big iron sword \n +14 dmg", {name: "big_iron_sword", meta: 0},{stack: 1});

Item.createItem("big_gold_sword", "big golden sword \n +10 dmg", {name: "big_gold_sword", meta: 0},{stack: 1});

Item.createItem("big_diamond_sword", "big diamond sword \n +16dmg", {name: "big_diamond_sword", meta: 0},{stack: 1});



Item.setMaxDamage(ItemID.big_wood_sword, 60);
Item.setMaxDamage(ItemID.big_stone_sword, 140);
Item.setMaxDamage(ItemID.big_iron_sword, 250);
Item.setMaxDamage(ItemID.big_gold_sword, 600);
Item.setMaxDamage(ItemID.big_diamond_sword, 1700);



Item.setEnchantType(ItemID.big_wood_sword, Native.EnchantType.weapon, 140);
Item.setEnchantType(ItemID.big_stone_sword, Native.EnchantType.weapon, 14);
Item.setEnchantType(ItemID.big_gold_sword, Native.EnchantType.weapon, 50);
Item.setEnchantType(ItemID.big_iron_sword, Native.EnchantType.weapon, 14);
Item.setEnchantType(ItemID.big_diamond_sword, Native.EnchantType.weapon, 14);


Item.addRepairItemIds(ItemID.big_wood_sword, [17]);
Item.addRepairItemIds(ItemID.big_stone_sword, [1]);
Item.addRepairItemIds(ItemID.big_gold_sword, [266]);
Item.addRepairItemIds(ItemID.big_iron_sword, [265]);
Item.addRepairItemIds(ItemID.big_diamond_sword, [264]);



Recipes.addShaped({id: ItemID.big_wood_sword, count: 1, data: 0}, 
["a",
"a",
"b"], 
["b", 5, -1, "a", 17, -1]);

Recipes.addShaped({id: ItemID.big_stone_sword, count: 1, data: 0}, 
["a",
"a",
"b"], 
["b", 5, -1, "a", 61, -1]);

Recipes.addShaped({id: ItemID.big_iron_sword, count: 1, data: 0}, 
["a",
"a",
"b"], 
["b", 5, -1, "a", 42, -1]);

Recipes.addShaped({id: ItemID.big_gold_sword, count: 1, data: 0}, 
["a",
"a",
"b"], 
["b", 5, -1, "a", 41, -1]);

Recipes.addShaped({id: ItemID.big_diamond_sword, count: 1, data: 0}, 
["a",
"a",
"b"], 
["b", 5, -1, "a", 57, -1]);




Callback.addCallback("PlayerAttack", function (player, victim) {
item=Player.getCarriedItem(true);
for(var i=0; i<8; i++)
if(item.id==ItemID.big_wood_sword&&Entity.getMaxHealth(victim)>4){
Entity.damageEntity(victim, 20);
//ToolAPI.breakCarriedTool(1);
}});

Callback.addCallback("PlayerAttack", function (player, victim) {
item=Player.getCarriedItem(true);
if(item.id==ItemID.big_stone_sword&&Entity.getMaxHealth(victim)>4){
Entity.damageEntity(victim, 24);
//ToolAPI.breakCarriedTool(1);
}});

Callback.addCallback("PlayerAttack", function (player, victim) {
item=Player.getCarriedItem(true);
if(item.id==ItemID.big_gold_sword&&Entity.getMaxHealth(victim)>4){
Entity.damageEntity(victim, 20);
//ToolAPI.breakCarriedTool(1);
}});

Callback.addCallback("PlayerAttack", function (player, victim) {
item=Player.getCarriedItem(true);
if(item.id==ItemID.big_iron_sword&&Entity.getMaxHealth(victim)>4){
Entity.damageEntity(victim, 28);
//ToolAPI.breakCarriedTool(1);
}});

Callback.addCallback("PlayerAttack", function (player, victim) {
item=Player.getCarriedItem(true);
if(item.id==ItemID.big_diamond_sword&&Entity.getMaxHealth(victim)>4){
Entity.damageEntity(victim, 32);
//ToolAPI.breakCarriedTool(1);
}});


/*
var sw = [, , , , ];
var dmg = [20,24,20,28,32];

*/




// file: pblock.js

IDRegistry.genBlockID("bigChest");
Block.createBlockWithRotation("bigChest", [{name: "big chest", texture: [["sss", 0], ["sss", 0], ["sss", 0], ["ppp", 0], ["sss", 0], ["sss", 0]], inCreative: true}], "opaque");

Recipes.addShaped({id: BlockID.bigChest, count: 1, data: 0}, [
"xxx","xax","xxx"], ['x', 17, -1, 'a', 54, 0]);

const regChest = function(id, count, data, max){
Game.prevent();
item=Player.getCarriedItem(true);
if(!Entity.getSneaking(Player.get())){
if(this.data.id){
if(this.data.id == id && this.data.data == data){
this.data.count += count;
Player.setCarriedItem(0);}else{let slot;for(let i = 36; i--;){
slot = Player.getInventorySlot(i+9);
this.data.id == slot.id && this.data.data == slot.data && (this.data.count += slot.count)&Player.setInventorySlot(i+9, 0);}Game.message(Item.getName(this.data.id, this.data.data)+" "+this.data.count)}}
else if(id){
      this.data.id = id;
      this.data.count = count;
      this.data.data = data;
      Player.setCarriedItem(0);}
this.data.count > max && World.drop(this.x+.5, this.y+1, this.z+.5, this.data.id, max-this.data.count, this.data.data);
}else if(this.data.id){
const get = Math.min(64, this.data.count);
World.drop(this.x+.5, this.y+1, this.z+.5, this.data.id, get, this.data.data);
this.data.count -= get;
!this.data.count && (this.data.id = this.data.data = 0);}};


TileEntity.registerPrototype(BlockID.bigChest, {
  defaultValues: {
    id: 0,
    data: 0,
    count: 0},
click: function(id, count, data){this.run(id, count, data, 2e9);},
run: regChest});



IDRegistry.genBlockID("tpBlockA");
Block.createBlockWithRotation("tpBlockA", [
{name: "Teleporter", texture: [["teleporter", 1], ["teleporter", 1], ["teleporter", 1],["teleporter", 1], ["teleporter", 1], ["teleporter", 1]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.tpBlockA, "stone");

Recipes.addShaped({id: BlockID.tpBlockA, count: 2, data: 0}, ["aaa","aba","aaa"], ['a', 35, -1, 'b', 368, 0]);
 

TileEntity.registerPrototype(BlockID.tpBlockA, {
defaultValues: {},
click: function(id, count, data, coords){ 
if(!Entity.getSneaking(Player.get()))
{
for(var yy = 2; yy <= 20; yy++){			

if(World.getBlockID(this.x,this.y+yy,this.z)==BlockID.tpBlockA){
Game.prevent();
Player.setPosition(this.x+0.5, this.y+yy+3, this.z+0.5)}}}
else
if(Entity.getSneaking(Player.get()))
{
for(var yy = -20; yy <= -2; yy++){			

if(World.getBlockID(this.x,this.y+yy,this.z)==BlockID.tpBlockA){
Game.prevent();
Player.setPosition(this.x+0.5, this.y+yy+3, this.z+0.5)}}}}});



//


IDRegistry.genBlockID("pgrinder");
Block.createBlockWithRotation("pgrinder", [
{name: "stone crusher", texture: [["crusher_top", 0], ["crusher_top", 0], ["crusher_bottom", 0],["crusher_bottom", 0], ["crusher_bottom", 0], ["crusher_bottom", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.pgrinder, "stone");

Recipes.addShaped({id: BlockID.pgrinder, count: 1, data: 0}, ["aca","aba","aaa"], ['a', 1, 0, 'b', 61, 0, 'c', ItemID.stonehammer, -1]);

Callback.addCallback('ItemUse', function (coords, item, block) { 
var inp = [1,4,13];
var oup = [4,13,12];
for(var i=0; i<5; i++)
if(item.id==inp[i]&&block.id==BlockID.pgrinder){

Game.prevent(); 
World.drop(coords.x+0.5, coords.y+1, coords.z+0.5, oup[i], 1, 0);
Player.decreaseCarriedItem(1);
Game.prevent(); 
}});





// file: cusarm.js

IDRegistry.genItemID("trvb");

Item.createArmorItem("trvb", "Piligrim Boots", {name: "travelling_bogots"}, {type: "boots", armor: 3, durability: 390, texture: "armor/traveling_boots_1.png"});

Recipes.addShaped({id: ItemID.trvb, count: 1, data: 0}, 
["bkc",
"xax",
"dkf"], 
["a", 317, -1, "b", 353, -1, "c", 348, -1, "d", 289, -1, "f", 331, -1, "x", 341, -1, "k", 288, -1]);

Item.addRepairItemIds(ItemID.trvb, [266]);


Item.setEnchantType(ItemID.trvb, Native.EnchantType.boots, 14);



Callback.addCallback("tick", function () { 

var boots = Player.getArmorSlot(3);


if(boots.id==ItemID.trvb){
	Entity.addEffect(Player.get(), 1, 1, 100, false);
	Entity.addEffect(Player.get(), 8, 1, 100, false)
}});



//шляпа ночного


IDRegistry.genItemID("plhl");

Item.createArmorItem("plhl", "Piligrim helmet", {name: "pili_helmet"}, {type: "helmet", armor: 3, durability: 390, texture: "armor/traveling_boots_1.png"});

Recipes.addShaped({id: ItemID.plhl, count: 1, data: 0}, 
["xbx",
"cac",
"xbx"], 
["a", 314, -1, "x", 396, -1, "b", 381, -1, "c", 89, -1]);

Item.addRepairItemIds(ItemID.plhl, [266]);


Item.setEnchantType(ItemID.plhl, Native.EnchantType.helmet, 14);



Callback.addCallback("tick", function () { 

var helmet = Player.getArmorSlot(0);


if(helmet.id==ItemID.plhl){
	Entity.addEffect(Player.get(), 16, 1, 100, false);
}});




// file: ores.js

/*

var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 2
}, "stone");


IDRegistry.genBlockID("end_coal_ore");
Block.createBlock("end_coal_ore", [
	{name: "Угольная руда края", texture: [["end_coal_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_coal_ore, "stone", 3, true);


Block.registerDropFunction("end_coal_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		if(enchant.fortune){
		return [[263, 6, 0]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[263, 2, 0]]
	}
	return [];
}, 3);





IDRegistry.genBlockID("end_diamond_ore");
Block.createBlock("end_diamond_ore", [
	{name: "Алмазная руда края", texture: [["end_diamond_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_diamond_ore, "stone", 3, true);

Block.registerDropFunction("end_diamond_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		if(enchant.fortune){
		return [[264, 6, 0]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[264, 2, 0]]
	}
	return [];
}, 3);


IDRegistry.genBlockID("end_emerald_ore");
Block.createBlock("end_emerald_ore", [
	{name: "Изумрудная руда края", texture: [["end_emerald_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_emerald_ore, "stone", 3, true);

Block.registerDropFunction("end_emerald_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		if(enchant.fortune){
		return [[388, 6, 0]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[388, 2, 0]]
	}
	return [];
}, 3);




IDRegistry.genBlockID("end_gold_ore");
Block.createBlock("end_gold_ore", [
	{name: "Золотая руда края", texture: [["end_gold_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_gold_ore, "stone", 3, true);

Block.registerDropFunction("end_gold_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		if(enchant.fortune){
		return [[14, 4, 0]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[14, 2, 0]]
	}
	return [];
}, 3);


IDRegistry.genBlockID("end_iron_ore");
Block.createBlock("end_iron_ore", [
	{name: "Железная руда края", texture: [["end_iron_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_iron_ore, "stone", 3, true);

Block.registerDropFunction("end_iron_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		if(enchant.fortune){
		return [[15, 4, 0]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[15, 2, 0]]
	}
	return [];
}, 3);



IDRegistry.genBlockID("end_lapis_ore");
Block.createBlock("end_lapis_ore", [
	{name: "Лазуритовая руда края", texture: [["end_lapis_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_lapis_ore, "stone", 3, true);

Block.registerDropFunction("end_lapis_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		if(enchant.fortune){
		return [[351, 14, 4]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[351, 7, 4]]
	}
	return [];
}, 3);


IDRegistry.genBlockID("end_redstone_ore");
Block.createBlock("end_redstone_ore", [
	{name: "Руда красной пыли края", texture: [["end_redstone_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_redstone_ore, "stone", 3, true);

Block.registerDropFunction("end_redstone_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		if(enchant.fortune){
		return [[331, 14, 0]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[331, 7, 0]]
	}
	return [];
}, 3);




IDRegistry.genBlockID("nether_coal_ore");
Block.createBlock("nether_coal_ore", [
	{name: "Адская Угольная Руда", texture: [["nether_coal_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_coal_ore, "stone", 3, true);

Block.registerDropFunction("nether_coal_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		if(enchant.fortune){
		return [[263, 6, 0]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[263, 2, 0]]
	}
	return [];
}, 3);



IDRegistry.genBlockID("nether_diamond_ore");
Block.createBlock("nether_diamond_ore", [
	{name: "Адская Алмазная Руда", texture: [["nether_diamond_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_diamond_ore, "stone", 3, true);

Block.registerDropFunction("nether_diamond_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		if(enchant.fortune){
		return [[264, 6, 0]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[264, 2, 0]]
	}
	return [];
}, 3);



IDRegistry.genBlockID("nether_emerald_ore");
Block.createBlock("nether_emerald_ore", [
	{name: "Адская Изумрудная Руда", texture: [["nether_emerald_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_emerald_ore, "stone", 3, true);

Block.registerDropFunction("nether_emerald_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		if(enchant.fortune){
		return [[338, 6, 0]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[338, 2, 0]]
	}
	return [];
}, 3);




IDRegistry.genBlockID("nether_gold_ore");
Block.createBlock("nether_gold_ore", [
	{name: "Адская Золотая Руда", texture: [["nether_gold_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_gold_ore, "stone", 3, true);

Block.registerDropFunction("nether_gold_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		if(enchant.fortune){
		return [[14, 4, 0]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[14, 2, 0]]
	}
	return [];
}, 3);



IDRegistry.genBlockID("nether_iron_ore");
Block.createBlock("nether_iron_ore", [
	{name: "Адская Железная Руда", texture: [["nether_iron_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_iron_ore, "stone", 3, true);

Block.registerDropFunction("nether_iron_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
	if(enchant.fortune){
		return [[15, 4, 0]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[15, 2, 0]]
	}
	return [];
}, 3);



IDRegistry.genBlockID("nether_lapis_ore");
Block.createBlock("nether_lapis_ore", [
	{name: "Адская Лазуритовая Руда", texture: [["nether_lapis_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_lapis_ore, "stone", 3, true);

Block.registerDropFunction("nether_lapis_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
			}
	if(enchant.fortune){
		return [[351, 14, 4]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[351, 7, 4]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_redstone_ore");
Block.createBlock("nether_redstone_ore", [
	{name: "Адская руда Красной пыли", texture: [["nether_redstone_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_redstone_ore, "stone", 3, true);

Block.registerDropFunction("nether_redstone_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
			}
	if(enchant.fortune){
		return [[331, 15, 0]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[331, 8, 0]]
	}
	return [];
}, 3);





Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_coal_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_diamond_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_emerald_ore, 0, 3);
    }
}
)


Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_gold_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_iron_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_lapis_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_redstone_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.fossil_ore, 0, 3);
    }
}
)


Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_coal_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_diamond_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_emerald_ore, 0, 3);
    }
}
)


Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_gold_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_iron_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_lapis_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_redstone_ore, 0, 3);
    }
}
)


*/




// file: relict.js

IDRegistry.genItemID("endStaff");
Item.createItem("endStaff", "sraff of ender", {name: "ender_staff", meta:0}, {stack: 1}, {damage: 500});
Item.setMaxDamage(ItemID.endStaff, 500);


Recipes.addShaped({id: ItemID.endStaff, count: 1, data: 0}, [
	" bc",
	" ab",
	"a  "
], ['a', 369, -1, 'b', 381, -1, 'c', ItemID.endPortal, -1]);


Item.registerNoTargetUseFunction("endStaff", function(item){
  if(item.id == ItemID.endStaff){
    let pos = Player.getPosition();
    let vec = Entity.getLookVector(Player.get());
    let crd = {};
    for(let t = 0; t <= 64; t++){
      crd.x = pos.x + vec.x * t;
      crd.y = pos.y + vec.y * t;
      crd.z = pos.z + vec.z * t;
        if(!GenerationUtils.isTransparentBlock(World.getBlockID(crd.x, crd.y, crd.z))){
          Game.tipMessage("X: "+Math.round(crd.x)+" Y: "+Math.round(crd.y+2)+" Z: "+Math.round(crd.z));
          Entity.setPosition(Player.get(), crd.x, crd.y+2, crd.z);
ToolAPI.breakCarriedTool(1);          
        break;
      }
    }
  }
});

//_______________\\

IDRegistry.genItemID("airWand");
Item.createItem("airWand", "rending gale", {name: "rending_gale", meta:0}, {stack: 1}, {damage: 500});
Item.setMaxDamage(ItemID.airWand, 500);

Recipes.addShaped({id: ItemID.airWand, count: 1, data: 0}, [
	" bc",
	" ab",
	"a  "
], ['a', 369, -1, 'b', 288, -1, 'c', 41, -1]);


Item.registerNoTargetUseFunction("airWand", function(item){
  if(item.id == ItemID.airWand){
    let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
{
Entity.setVelocity(Player.get(), 5*vec.x, 5*vec.y, 5*vec.z);   
ToolAPI.breakCarriedTool(1);       
}}}); 


//_______\\

IDRegistry.genItemID("witherless_rose"); Item.createItem("witherless_rose", "witherless rose", {name: "witherless_rose", meta: 0}, {stack: 1}); 
	Recipes.addShaped({id: ItemID.witherless_rose, count: 1, data: 0}, [
	"aba",
	"bcb",
	"aba"
], ['a', 399, -1,'b',266,-1,'c',175,4]);


Callback.addCallback("tick", function () { 
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
if(slot.id==ItemID.witherless_rose){
Entity.clearEffect(Player.get(), 20);
Entity.clearEffect(Player.get(), 19);
Entity.clearEffect(Player.get(), 2);

}}});


//________$_________\\


/*
Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {

var vertical = Entity.getVelocity(Player.get()).y;
if(Entity.getType(victim)==63&&vertical<-0.5){

Game.prevent();
}});

*/

IDRegistry.genItemID("angelic_feather"); Item.createItem("angelic_feather", "angelic feather", {name: "angelic_feather", meta: 0}, {stack: 1}); 
	Recipes.addShaped({id: ItemID.angelic_feather, count: 1, data: 0}, [
	"aba",
	"bcb",
	"aba"
], ['a', 41, -1,'b',89,-1,'c',288,-1]);


var rrr = 0;
Callback.addCallback("tick", function () { 
var coords = Entity.getPosition(Player.get());
var vertical = Entity.getVelocity(Player.get()).y;
var pl = Player.get();
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
if(vertical<-0.5&&World.getBlockID(coords.x, coords.y-5, coords.z) !== 0&&rrr==0&&slot.id==ItemID.angelic_feather){
	rrr=1;
	
var sss =	Entity.spawn(coords.x, coords.y-1, coords.z, 10);
	Entity.rideAnimal(pl, sss);
	}
	}
	if(rrr==1){
		Entity.remove(sss);
		Entity.setVelocity(pl, 0, 0.1, 0);   
		rrr=0
		
		
	}});
	
	
	
	//____________
	
	
	IDRegistry.genItemID("glowing_bread");
Item.createFoodItem("glowing_bread", "glowing bread", {name:"glowing_bread"}, {food:30});

	Recipes.addShaped({id: ItemID.glowing_bread, count: 1, data: 0},["aba","bcb","aba"],['a', 348, -1, 'b', 371, -1, 'c', ItemID.fbread, -1]);
	
	
	Callback.addCallback('FoodEaten', function (food, satRatio) {
	
	item=Player.getCarriedItem(true);
if(item.id==ItemID.glowing_bread){
	Entity.addEffect(Player.get(), 29, 2, 3000, false);
	Entity.addEffect(Player.get(), 10, 1, 100, false);
	}});
	
	
	//____________
	
	
	IDRegistry.genItemID("mercy_cross"); Item.createItem("mercy_cross", "mercy cross", {name: "mercy_cross", meta: 0}, {stack: 1}); 
	Recipes.addShaped({id: ItemID.mercy_cross, count: 1, data: 0}, [
	" a ",
	"aba",
	" a "
], ['a', 41, -1,'b',399,-1]);
	
	
	
	Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
var rnd = Math.floor((Math.random()*100)+1)
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
if(slot.id==ItemID.mercy_cross&&Entity.getType(attacker)!==63&&Entity.getType(victim)==63&&rnd<=101){
Game.prevent();
}}});

	
	




// file: food.js

IDRegistry.genItemID("fcarrot");
Item.createFoodItem("fcarrot", "baked carrot", {name:"baked_carrot"}, {food:7});
Recipes.addFurnace(391, ItemID.fcarrot, 0);

IDRegistry.genItemID("fbread");
Item.createFoodItem("fbread", "baked bread", {name:"baked_bread"}, {food:10});
Recipes.addFurnace(297, ItemID.fbread, 0);

Recipes.addShaped({id: 81, count: 1, data: 0},[" a "," a "," a "],['a', 18, 0]);
Recipes.addShaped({id: 388, count: 1, data: 0},[" a ","aba"," a "],['a', 351, 2, 'b', 20, 0]);
Recipes.addShaped({id: 351, count: 1, data: 2},[" a ","   ","   "],['a', 81, 0]);





