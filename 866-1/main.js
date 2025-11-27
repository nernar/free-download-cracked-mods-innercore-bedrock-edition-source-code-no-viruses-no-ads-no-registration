/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 7
*/



// file: paxels.js

var Paxels = {
	addItem: function(id, material, i1, i2, i3, i4){
	
IDRegistry.genItemID(id + "Paxel");

Item.createItem(id + "Paxel", id + " Paxel", {name: id + "Paxel", meta: 0}, {stack: 1});

Item.setToolRender(ItemID[id + "Paxel"], true);

ToolAPI.registerTool(ItemID[id + "Paxel"], material, ["stone", "dirt", "wood"], {damage: 0});

Item.setEnchantType(ItemID[id + "Paxel"], Native.EnchantType.axe, 15);

Item.addCreativeGroup("Paxel", "Paxel",[
	ItemID[id + "Paxel"]
]);

Item.addRepairItemIds(ItemID[id + "Paxel"], [ItemID[id + "Paxel"],i1,i2,i3]);

Item.setAllowedInOffhand(ItemID[id + "Paxel"], true);

Item.setGlint(ItemID[id + "Paxel"], false);



Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "Paxel"], count: 1, data: 0}, [
	"abc",
	" d ",
	" d "
], ['a', i1, -1, 'b', i2, -1, 'c', i3,-1,'d', i4,-1]);});}}

ToolAPI.addToolMaterial("paxel1", {
      durability: 120, 
      level: 1, 
      efficiency: 4, 
      damage: 3, 
      enchantability: 15
});

ToolAPI.addToolMaterial("paxel2", {
      durability: 264, 
      level: 2, 
      efficiency: 6, 
      damage: 4, 
      enchantability: 15
});

ToolAPI.addToolMaterial("paxel3", {
      durability: 500, 
      level: 3, 
      efficiency: 8, 
      damage: 5, 
      enchantability: 15
});

ToolAPI.addToolMaterial("paxel4", {
      durability: 3030, 
      level: 4, 
      efficiency: 10, 
      damage: 6, 
      enchantability: 15
});

ToolAPI.addToolMaterial("paxel5", {
      durability: 2565, 
      level: 5, 
      efficiency: 12, 
      damage: 7, 
      enchantability: 15
});

Paxels.addItem("Wood", "paxel1", 269, 270, 271, 280);
Paxels.addItem("Stone", "paxel2", 273, 274, 275, 280);
Paxels.addItem("Iron", "paxel3", 256, 257, 258, 280);
Paxels.addItem("Diamond", "paxel4", 277, 278, 279, 280);
Paxels.addItem("Gold", "paxel5", 284, 285, 286, 280);

Translation.addTranslation("Wood Paxel", {ru: "Деревянный паксель"}, {en: "Wood Paxel"});
Translation.addTranslation("Stone Paxel", {ru: "Каменный паксель"}, {en: "Stone Paxel"});
Translation.addTranslation("Iron Paxel", {ru: "Железный паксель"}, {en: "Iron Paxel"});
Translation.addTranslation("Diamond Paxel", {ru: "Алмазный паксель"}, {en: "Diamond Paxel"});
Translation.addTranslation("Gold Paxel", {ru: "Золотой паксель"}, {en: "Gold Paxel"});







// file: hammer.js


var hammers = {
	addItem: function(id, material, i1, i2){
IDRegistry.genItemID(id + "hammer");
Item.createItem(id + "hammer", id + " hammer", {name: id + "hammer", meta: 0}, {stack: 1});

Item.setToolRender(ItemID[id + "hammer"], true);

ToolAPI.registerTool(ItemID[id + "hammer"], material, ["stone"], {damage: 2});


Item.setEnchantType(ItemID[id + "hammer"], Native.EnchantType.pickaxe, 15);

Item.addCreativeGroup("Hammer", Translation.translate("Hammer"), [
	ItemID[id + "hammer"]
]);


Item.addRepairItemIds(ItemID[id + "hammer"], [ItemID[id + "hammer"],i1]);

Item.setAllowedInOffhand(ItemID[id + "hammer"], true);

Item.setGlint(ItemID[id + "hammer"], false);

Callback.addCallback("DestroyBlock", function(coords, block, player){
var side = coords.side;
var X = 1;
var Y = 1;
var Z = 1;
if(side==4 || side==5){X = 0;}
if(side==1 || side==6){Y = 0;}
if(side==2 || side==3){Z = 0;}
for(var xx = coords.x - X; xx <= coords.x + X; xx++){
for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
item=Player.getCarriedItem(true);
if(World.getBlockID(xx, yy, zz) !== 7&&item.id==ItemID[id + "hammer"] ){
World.destroyBlock(xx, yy, zz, true);}}}};});



Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "hammer"], count: 1, data: 0}, [
	"aaa",
	"aba",
	" b "
], ['a', i1, 0, 'b', i2, -1]);});
	}
}

ToolAPI.addToolMaterial("gold", {
      durability: 1360, 
      level: 10, 
      efficiency: 20, 
      damage: 15, 
      enchantability: 15
});



hammers.addItem("wood", "wood", 17, 280);
hammers.addItem("stone", "stone", 4, 280);
hammers.addItem("gold", "gold", 41, 280);
hammers.addItem("iron", "iron", 42, 280);
hammers.addItem("diamond", "diamond", 57, 280);



Translation.addTranslation("wood hammer", {ru: "Деревянный молот"});

Translation.addTranslation("stone hammer", {ru: "Каменный молот"});

Translation.addTranslation("iron hammer", {ru: "Железный молот"});

Translation.addTranslation("gold hammer", {ru: "Золотой молот"});

Translation.addTranslation("diamond hammer", {ru: "Алмазный молот"});




// file: battleaxe.js

var battleaxes = {
	addItem: function(id, material, i1, i2, i3, i4){
IDRegistry.genItemID(id + "battleaxe");

Item.createItem(id + "battleaxe", id + " battle axe", {name: id + "battleaxe", meta: 0}, {stack: 1});

Item.setToolRender(ItemID[id + "battleaxe"], true);

ToolAPI.registerTool(ItemID[id + "battleaxe"], material, ["wood"], {damage: 0});

Item.setEnchantType(ItemID[id + "battleaxe"], Native.EnchantType.axe, 15);

Item.addCreativeGroup("battleaxe", Translation.translate("battleaxe"), [
	ItemID[id + "battleaxe"]
]);


Item.addRepairItemIds(ItemID[id + "battleaxe"], [ItemID[id + "battleaxe"],i1,i2]);

Item.setAllowedInOffhand(ItemID[id + "battleaxe"], true);

Item.setGlint(ItemID[id + "battleaxe"], false);







Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "battleaxe"], count: 1, data: 0}, [
	"aba",
	" b ",
	" b "
], ['a', i1, -1, 'b', i2, -1]);});
	}
	}



ToolAPI.addToolMaterial("woodBA", {
      durability: 60, 
      level: 5, 
      efficiency: 2, 
      damage: 6, 
      enchantability: 15
});


ToolAPI.addToolMaterial("stoneBA", {
      durability: 132, 
      level: 5, 
      efficiency: 4, 
      damage: 7, 
      enchantability: 15
});

ToolAPI.addToolMaterial("ironBA", {
      durability: 251, 
      level: 5, 
      efficiency: 6, 
      damage: 8, 
      enchantability: 15
});

ToolAPI.addToolMaterial("goldBA", {

      durability: 33, 
      level: 5, 
      efficiency: 18, 
      damage: 9, 
      enchantability: 15
});

ToolAPI.addToolMaterial("diamondBA", {
      durability: 1562, 
      level: 5, 
      efficiency: 10, 
      damage: 10, 
      enchantability: 15
});

battleaxes.addItem("wood", "woodBA", 271, 280);
battleaxes.addItem("stone", "stoneBA", 275, 280);
battleaxes.addItem("gold", "goldBA", 286, 280);
battleaxes.addItem("iron", "ironBA", 258, 280);
battleaxes.addItem("diamond", "diamondBA", 279, 280);




Translation.addTranslation("wood battle axe", {ru: "Деревянный боевой топор"+"\n"+"§9урон +6"});

Translation.addTranslation("stone battle axe", {ru: "Каменный боевой топор"+"\n"+"§9урон +7"});

Translation.addTranslation("iron battle axe", {ru: "Железный боевой топор"+"\n"+"§9урон +8"});


Translation.addTranslation("diamond battle axe", {ru: "Алмазный боевой топор"+"\n"+"§9урон +10"});

Translation.addTranslation("gold battle axe", {ru: "Золотой боевой топор"+"\n"+"§9урон +9"});











// file: backpack.js

IMPORT("BackpackAPI");

IDRegistry.genItemID("leather_backpack");
Item.createItem("leather_backpack", "Leather Backpack", {name: "leather_backpack", meta: 0}, {stack: 1});


Translation.addTranslation("Leather Backpack", {ru: "Кожаный рюкзак"}, {en: "Leather Backpack"});

BackpackRegistry.register(ItemID.leather_backpack, {
    title: "Leather Backpack",
    slots: 9,
    slotsCenter: true,
    inRow: 9
   
});



IDRegistry.genItemID("iron_backpack");
Item.createItem("iron_backpack", "Iron Backpack", {name: "iron_backpack", meta: 0}, {stack: 1});

Translation.addTranslation("Iron Backpack", {ru: "Железный рюкзак"}, {en: "Iron Backpack"});

BackpackRegistry.register(ItemID.iron_backpack, {
    title: "Iron Backpack",
    slots: 18,
    slotsCenter: true,
    inRow: 9
   
});


IDRegistry.genItemID("gold_backpack");
Item.createItem("gold_backpack", "Golden Backpack", {name: "gold_backpack", meta: 0}, {stack: 1});

Translation.addTranslation("Golden Backpack", {ru: "Золотой рюкзак"}, {en: "Golden Backpack"});

BackpackRegistry.register(ItemID.gold_backpack, {
    title: "Golden Backpack",
    slots: 27,
    slotsCenter: true,
    inRow: 9
   
});


IDRegistry.genItemID("diamond_backpack");
Item.createItem("diamond_backpack", "Diamond Backpack", {name: "diamond_backpack", meta: 0}, {stack: 1});

Translation.addTranslation("Diamond Backpack", {ru: "Алмазный рюкзак"}, {en: "Diamond Backpack"});

BackpackRegistry.register(ItemID.diamond_backpack, {
    title: "Diamond Backpack",
    slots: 36,
    slotsCenter: true,
    inRow: 9
   
});


Item.addCreativeGroup("backpack", Translation.translate("backpack"), [
	ItemID.leather_backpack,
	ItemID.iron_backpack,
	ItemID.gold_backpack,
	ItemID.diamond_backpack
]);






Recipes.addShaped({id: ItemID.leather_backpack, count: 1, data: 0}, [
	"aba",
	"bcb",
	"aba"
], ['a', 334, -1, 'b', 35, -1, 'c', 54, -1]);

Recipes.addShaped({id: ItemID.iron_backpack, count: 1, data: 0}, [
	"aaa",
	"aba",
	"aaa"
], ['a', 265, -1, 'b', ItemID.leather_backpack, -1]);


Recipes.addShaped({id: ItemID.gold_backpack, count: 1, data: 0}, [
	"aaa",
	"aba",
	"aaa"
], ['a', 266, -1, 'b', ItemID.iron_backpack, -1]);




Recipes.addShaped({id: ItemID.diamond_backpack, count: 1, data: 0}, [
	"aaa",
	"aba",
	"aaa"
], ['a', 264, -1, 'b', ItemID.gold_backpack, -1]);




// file: weapon/heavy.js

var HeavySwords = {
	addItem: function(id, material, i1, i2, i3, i4){
IDRegistry.genItemID(id + "HeavySword");

Item.createItem(id + "HeavySword", id + " Heavy Sword", {name: id + "HeavySword", meta: 0}, {stack: 1});

Item.setToolRender(ItemID[id + "HeavySword"], true);

ToolAPI.registerTool(ItemID[id + "HeavySword"], material, ["plant"], {damage: 0});

Item.setEnchantType(ItemID[id + "HeavySword"], Native.EnchantType.weapon, 15);

Item.addCreativeGroup("HeavySword", Translation.translate("HeavySword"), [
	ItemID[id + "HeavySword"]
]);


Item.addRepairItemIds(ItemID[id + "HeavySword"], [ItemID[id + "HeavySword"],i1,i2]);

Item.setAllowedInOffhand(ItemID[id + "HeavySword"], true);

Item.setGlint(ItemID[id + "HeavySword"], false);


Callback.addCallback("tick", function () { 
item=Player.getCarriedItem(true);
if(item.id==ItemID[id + "HeavySword"]){
Entity.addEffect(Player.get(), 2, 1, 2*20, true);
}});










Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "HeavySword"], count: 1, data: 0}, [
	" aa",
	"aaa",
	"ba "
], ['a', i1, -1, 'b', i2, -1]);});
	}
	}




ToolAPI.addToolMaterial("woodHS", {
      durability: 120, 
      level: 5, 
      efficiency: 2, 
      damage: 10, 
      enchantability: 15
});


ToolAPI.addToolMaterial("stoneHS", {
      durability: 262, 
      level: 5, 
      efficiency: 2, 
      damage: 12, 
      enchantability: 15
});

ToolAPI.addToolMaterial("ironHS", {
      durability: 510, 
      level: 5, 
      efficiency: 2, 
      damage: 14, 
      enchantability: 15
});

ToolAPI.addToolMaterial("goldHS", {

      durability: 5670, 
      level: 5, 
      efficiency: 20, 
      damage: 16, 
      enchantability: 15
});

ToolAPI.addToolMaterial("diamondHS", {
      durability: 3000, 
      level: 5, 
      efficiency: 2, 
      damage: 18, 
      enchantability: 15
});

HeavySwords.addItem("Wood", "woodHS", 17, 280);
HeavySwords.addItem("Stone", "stoneHS", 4, 280);
HeavySwords.addItem("Gold", "goldHS", 266, 280);
HeavySwords.addItem("Iron", "ironHS", 265, 280);
HeavySwords.addItem("Diamond", "diamondHS", 264, 280);


Translation.addTranslation("Wood Heavy Sword", {ru: "Деревянный большой меч"+"\n"+"§9урон +10"});

Translation.addTranslation("Stone Heavy Sword", {ru: "Каменный большой меч"+"\n"+"§9урон +12"});

Translation.addTranslation("Iron Heavy Sword", {ru: "Железный большой меч"+"\n"+"§9урон +14"});

Translation.addTranslation("Diamond Heavy Sword", {ru: "Алмазный большой меч"+"\n"+"§9урон +18"});

Translation.addTranslation("Gold Heavy Sword", {ru: "Золотой большой меч"+"\n"+"§9урон +16"});













// file: weapon/katana.js

var katanas = {
	addItem: function(id, material, i1, i2, i3, i4){
IDRegistry.genItemID(id + "katana");

Item.createItem(id + "katana", id + " katana", {name: id + "katana", meta: 0}, {stack: 1});

Item.setToolRender(ItemID[id + "katana"], true);

ToolAPI.registerTool(ItemID[id + "katana"], material, ["plant"], {damage: 0});

Item.setEnchantType(ItemID[id + "katana"], Native.EnchantType.weapon, 15);

Item.addCreativeGroup("katana", Translation.translate("katana"), [
	ItemID[id + "katana"]
]);


Item.addRepairItemIds(ItemID[id + "katana"], [ItemID[id + "katana"],i1,i2]);

Item.setAllowedInOffhand(ItemID[id + "katana"], true);

Item.setGlint(ItemID[id + "katana"], false);


Callback.addCallback("tick", function () { 
item=Player.getCarriedItem(true);
if(item.id==ItemID[id + "katana"]){
Entity.addEffect(Player.get(), 1, 1, 2*20, true);
}});





Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "katana"], count: 1, data: 0}, [
	"  a",
	" a ",
	"b  "
], ['a', i1, -1, 'b', i2, -1]);});
	}
	}



ToolAPI.addToolMaterial("woodKT", {
      durability: 90, 
      level: 5, 
      efficiency: 2, 
      damage: 6, 
      enchantability: 15
});


ToolAPI.addToolMaterial("stoneKT", {
      durability: 213, 
      level: 5, 
      efficiency: 2, 
      damage: 7, 
      enchantability: 15
});

ToolAPI.addToolMaterial("ironKT", {
      durability: 310, 
      level: 5, 
      efficiency: 2, 
      damage: 8, 
      enchantability: 15
});

ToolAPI.addToolMaterial("goldKT", {

      durability: 570, 
      level: 5, 
      efficiency: 20, 
      damage: 9, 
      enchantability: 15
});

ToolAPI.addToolMaterial("diamondKT", {
      durability: 1900, 
      level: 5, 
      efficiency: 2, 
      damage: 10, 
      enchantability: 15
});

katanas.addItem("Wood", "woodKT", 17, 268);
katanas.addItem("Stone", "stoneKT", 4, 272);
katanas.addItem("Gold", "goldKT", 266, 283);
katanas.addItem("Iron", "ironKT", 265, 267);
katanas.addItem("Diamond", "diamondKT", 276, 280);






Translation.addTranslation("Wood katana", {ru: "Деревянная катана"+"\n"+"§9урон +6"});

Translation.addTranslation("Stone katana", {ru: "Каменная катана"+"\n"+"§9урон +7"});

Translation.addTranslation("Iron katana", {ru: "Железная катана"+"\n"+"§9урон +8"});


Translation.addTranslation("Diamond katana", {ru: "Алмазная катана"+"\n"+"§9урон +10"});

Translation.addTranslation("Gold katana", {ru: "Золотая катана"+"\n"+"§9урон +9"});











// file: armor/obsidian.js

IDRegistry.genItemID("obsidian_helmet");
Item.createArmorItem("obsidian_helmet", 
"Obsidian helmet", {
name: "obsidian_helmet"
},{
type: "helmet", 
armor: 3, 
durability: 1530, 
knockbackresist: 1,
texture: "armor/obsidian_1.png"
});

Item.setEnchantType(ItemID.obsidian_helmet, Native.EnchantType.helmet, 25);

Item.addRepairItemIds(ItemID.obsidian_helmet, [ItemID.obsidian_helmet, 49]);


Translation.addTranslation("Obsidian helmet", {ru: "Обсидиановый шлем"});

Recipes.addShaped({id:ItemID.obsidian_helmet, count: 1, data: 0}, 
["aaa",
 "a a", 
 "   "],
 ['a', 49, -1]);






IDRegistry.genItemID("obsidian_chestplate");
Item.createArmorItem("obsidian_chestplate", "Obsidian chestplate", {
name: "obsidian_chestplate"
},{
type: "chestplate", 
armor: 8, 
durability: 1780, 
knockbackresist: 1,
texture: "armor/obsidian_1.png"
});

Item.setEnchantType(ItemID.obsidian_chestplate, Native.EnchantType.chestplate, 25);

Item.addRepairItemIds(ItemID.obsidian_chestplate, [ItemID.obsidian_chestplate, 49]);

Translation.addTranslation("Obsidian chestplate", {ru: "Обсидиановый нагрудник"});

Recipes.addShaped({id:
ItemID.obsidian_chestplate, count: 1, data: 0}, 
["a a",
 "aaa", 
 "aaa"],
 ['a', 49, -1]);

IDRegistry.genItemID("obsidian_leggings");
Item.createArmorItem("obsidian_leggings", 
"Obsidian leggings", {
name: "obsidian_leggings"
}, {
type: "leggings", 
armor: 6, 
durability: 1650, 
knockbackresist: 1,
texture: "armor/obsidian_2.png"
});

Item.setEnchantType(ItemID.obsidian_leggings, Native.EnchantType.leggings, 25);

Item.addRepairItemIds(ItemID.obsidian_leggings, [ItemID.obsidian_leggings, 49]);

Translation.addTranslation("Obsidian leggings", {ru: "Обсидиановые поножи"});


Recipes.addShaped({id:
ItemID.obsidian_leggings, count: 1, data: 0}, 
["aaa",
 "a a", 
 "a a"],
 ['a', 49, -1]);


IDRegistry.genItemID("obsidian_boots");
Item.createArmorItem("obsidian_boots", 
"Obsidian boots", {
name: "obsidian_boots"
}, {
type: "boots", 
armor: 3, 
durability: 1590, 
knockbackresist: 1,
texture: "armor/obsidian_1.png"
});

Item.setEnchantType(ItemID.obsidian_boots, Native.EnchantType.boots, 25);

Item.addRepairItemIds(ItemID.obsidian_boots, [ItemID.obsidian_boots, 49]);

Translation.addTranslation("Obsidian boots", {ru: "Обсидиановые ботинки"});

Recipes.addShaped({id:ItemID.obsidian_boots, count: 1, data: 0}, 
["a a",
 "a a", 
 "   "],
 ['a', 49, -1]);




Callback.addCallback("tick", function () { 
var helmet = Player.getArmorSlot(0);
var chestplate = Player.getArmorSlot(1);
var leggings = Player.getArmorSlot(2);
var boots = Player.getArmorSlot(3);

if(helmet.id==ItemID.obsidian_helmet&&
chestplate.id==ItemID.obsidian_chestplate&&
leggings.id==ItemID.obsidian_leggings&&
boots.id==ItemID.obsidian_boots){
	
Entity.addEffect(Player.get(), 12, 1, 2*20, true);

}});




//изумрудная броня
IDRegistry.genItemID("emerald_helmet");
Item.createArmorItem("emerald_helmet", 
"Emerald helmet", {
name: "emerald_helmet"
},{
type: "helmet", 
armor: 2, 
durability: 1230, 
knockbackresist: 1,
texture: "armor/emerald_1.png"
});

Item.setEnchantType(ItemID.emerald_helmet, Native.EnchantType.helmet, 25);

Item.addRepairItemIds(ItemID.emerald_helmet, [ItemID.emerald_helmet, 388]);


Translation.addTranslation("Emerald helmet", {ru: "Изумрудный шлем"});

Recipes.addShaped({id:ItemID.emerald_helmet, count: 1, data: 0}, 
["aaa",
 "a a", 
 "   "],
 ['a', 388, -1]);






IDRegistry.genItemID("emerald_chestplate");
Item.createArmorItem("emerald_chestplate", "Emerald chestplate", {
name: "emerald_chestplate"
},{
type: "chestplate", 
armor: 6, 
durability: 1480, 
knockbackresist: 1,
texture: "armor/emerald_1.png"
});

Item.setEnchantType(ItemID.emerald_chestplate, Native.EnchantType.chestplate, 25);

Item.addRepairItemIds(ItemID.emerald_chestplate, [ItemID.emerald_chestplate, 388]);

Translation.addTranslation("Emerald chestplate", {ru: "Изумрудный нагрудник"});

Recipes.addShaped({id:
ItemID.emerald_chestplate, count: 1, data: 0}, 
["a a",
 "aaa", 
 "aaa"],
 ['a', 388, -1]);

IDRegistry.genItemID("emerald_leggings");
Item.createArmorItem("emerald_leggings", 
"Emerald leggings", {
name: "emerald_leggings"
}, {
type: "leggings", 
armor: 4, 
durability: 1250, 
knockbackresist: 1,
texture: "armor/emerald_2.png"
});

Item.setEnchantType(ItemID.emerald_leggings, Native.EnchantType.leggings, 25);

Item.addRepairItemIds(ItemID.emerald_leggings, [ItemID.emerald_leggings, 388]);

Translation.addTranslation("Emerald leggings", {ru: "Изумрудные поножи"});


Recipes.addShaped({id:
ItemID.emerald_leggings, count: 1, data: 0}, 
["aaa",
 "a a", 
 "a a"],
 ['a', 388, -1]);


IDRegistry.genItemID("emerald_boots");
Item.createArmorItem("emerald_boots", 
"Emerald boots", {
name: "emerald_boots"
}, {
type: "boots", 
armor: 2, 
durability: 1190, 
knockbackresist: 1,
texture: "armor/emerald_1.png"
});

Item.setEnchantType(ItemID.emerald_boots, Native.EnchantType.boots, 25);

Item.addRepairItemIds(ItemID.emerald_boots, [ItemID.emerald_boots, 388]);

Translation.addTranslation("Emerald boots", {ru: "Изумрудные ботинки"});

Recipes.addShaped({id:ItemID.emerald_boots, count: 1, data: 0}, 
["a a",
 "a a", 
 "   "],
 ['a', 388, -1]);






Callback.addCallback("tick", function () { 
var helmet = Player.getArmorSlot(0);
var chestplate = Player.getArmorSlot(1);
var leggings = Player.getArmorSlot(2);
var boots = Player.getArmorSlot(3);

if(helmet.id==ItemID.emerald_helmet&&
chestplate.id==ItemID.emerald_chestplate&&
leggings.id==ItemID.emerald_leggings&&
boots.id==ItemID.emerald_boots){
	
Entity.addEffect(Player.get(), 29, 1, 2*20, true);

}});


Item.addCreativeGroup("armor", Translation.translate("armor"), [
	ItemID.obsidian_helmet,
	ItemID.obsidian_chestplate,
	ItemID.obsidian_leggings,
	ItemID.obsidian_boots,
	ItemID.emerald_helmet,
	ItemID.emerald_chestplate,
	ItemID.emerald_leggings,
	ItemID.emerald_boots
]);




