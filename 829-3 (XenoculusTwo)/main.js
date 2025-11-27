/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 14
*/



// file: header.js

IMPORT("ToolLib");
IMPORT("TileRender");
IMPORT("BaseBlocks");
IMPORT("Structures");
//IMPORT("StructuresAPI");
IMPORT("PortalUtils");

let Flowers = WRAP_NATIVE("FlowerModule");

function randomInt(min, max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function addShapedRecipe(id, count, data, mask, keys){
    Recipes.addShaped({id: id, count: count, data: data}, mask, keys);
}

function addShapelessRecipe(id, count, data, items){
    let ingredients = [];
    for(let item in items){
        ingredients.push({id: item[0], data: item[1]});
    }
    Recipes.addShapeless({id: id, count: count, data: data}, ingredients);
}

function setPlantModel(id, isDouble) {
var shape = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(id, 0, shape);    
Flowers.registerFlower(id, isDouble); 
}

const UniqueGen = { 
    randomCoords: function(random, chunkX, chunkZ, minHeight, maxHeight){
        minHeight = minHeight || 0;
        maxHeight = maxHeight || 128;
        return {
            x: chunkX * 16 + random.nextInt(16),
            y: random.nextInt(maxHeight - minHeight + 1) - minHeight,
            z: z = chunkZ * 16 + random.nextInt(16)
        }
    }, 
    generateOre: function(id, data, chunkX, chunkZ, random, params){
        for(let i=0; i<params.veinCounts; i++){
            let coords = this.randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, id, data, params.size, false, random.nextInt());
        }
    }, 
    generateOreInDimension: function(id, data, chunkX, chunkZ, random, params){
        for(let i=0; i<params.veinCounts; i++){
            let coords = this.randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOreCustom(coords.x, coords.y, coords.z, id, data, params.size, params.mode, params.check);
        }
    }
}




// file: items/crafts_loot.js

IDRegistry.genItemID("AncientDust");
Item.createItem("AncientDust", "Ancient Dust", {name: "ancientdust"});

IDRegistry.genItemID("frostspineRod");
Item.createItem("frostspineRod", "Spince Stem", {name: "frostspinerod"});

IDRegistry.genItemID("NeciceSh");
Item.createItem("NeciceSh", "Necice Shard", {name: "neiceshard"});

IDRegistry.genItemID("PolusSh");
Item.createItem("PolusSh", "Polus Shard", {name: "magishard"});

IDRegistry.genItemID("coldiciteSh");
Item.createItem("coldiciteSh", "Coldicite Shard", {name: "coldiciteshard"});

IDRegistry.genItemID("coldiciteSh");
Item.createItem("coldiciteSh", "Coldicite Shard", {name: "coldiciteshard"});

IDRegistry.genItemID("manuartzGw");
Item.createItem("manuartzGw", "Manuartz Growth", {name: "manuartzitem"});

IDRegistry.genItemID("manuartzSh");
Item.createItem("manuartzSh", "Manuartz Shard", {name: "manuartzshard"});
Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.manuartzSh, count: 1, data: 0}, [
    "ooa",
    "oao"
], ['a', ItemID.manuartzGw, 0]);

Recipes.addShaped({id: ItemID.manuartzGw, count: 1, data: 0}, [
    "ooa",
    "oao"
], ['a', ItemID.manuartzSpikesS, 0]);

Recipes.addShaped({id: ItemID.manuartzSh, count: 1, data: 0}, [
    "ooa",
    "oao"
], ['a', ItemID.manuartzSpikesM, 0]);

Recipes.addShaped({id: ItemID.manuartzSh, count: 5, data: 0}, [
    "ooa",
    "oao"
], ['a', ItemID.manuartzSpikesB, 0]);

});

IDRegistry.genItemID("southiveSc");
Item.createItem("southiveSc", "Southive Scrap", {name: "southivescrap"});

IDRegistry.genItemID("northositLp");
Item.createItem("northositLp", "Northosit Lump", {name: "northositlump"});

IDRegistry.genItemID("magnemiveIngot");
Item.createItem("magnemiveIngot", "Magnemive Ingot", {name: "magnemiveingot"});

Recipes.addShaped({id: ItemID.magnemiveIngot, count: 1, data: 0}, [
    "b",
    "a"
], ['a', ItemID.southiveSc, 0, 'b', ItemID.northositLp, 0]);

IDRegistry.genItemID("northositLp");
Item.createItem("northositLp", "Northosit Lump", {name: "northositlump"});

IDRegistry.genItemID("fluroomiteIngot");
Item.createItem("fluroomiteIngot", "Fluroomite Ingot", {name: "fluroomiteingot"});

Callback.addCallback("PostLoaded", function(){
Recipes.addFurnace(BlockID.oreFluroomiteAutumn, 0, ItemID.fluroomiteIngot, 0);
});


IDRegistry.genItemID("mantrLeather");
Item.createItem("mantrLeather", "Mantr Leather", {name: "mantrleather"});

IDRegistry.genItemID("fruskGel");
Item.createItem("fruskGel", "Frusk Gel", {name: "fruskgel"});

IDRegistry.genItemID("faithEye");
Item.createItem("faithEye", "Faith Eye", {name: "fraitheye"});


IDRegistry.genItemID("ironkey");
Item.createItem("ironkey", "Iron Key", {name: "ironkey"});

Recipes.addShaped({id: ItemID.ironkey, count: 1, data: 0}, [
    "a",
    "a"
], ['a', 265, 0]);

IDRegistry.genItemID("goldenkey");
Item.createItem("goldenkey", "Golden Key", {name: "goldenkey"});

Recipes.addShaped({id: ItemID.goldenkey, count: 1, data: 0}, [
    "a",
    "a"
], ['a', 266, 0]);

IDRegistry.genItemID("magnemivekey");
Item.createItem("magnemivekey", "Magnemive Key", {name: "magnemivekey"});

Recipes.addShaped({id: ItemID.magnemivekey, count: 1, data: 0}, [
    "a",
    "b"
], ['a', ItemID.PolusSh, 0, 'b', ItemID.magnemiveIngot, 0 ]);




// file: items/food.js


IDRegistry.genItemID("rawReptile");
Item.createFoodItem("rawReptile", "Raw Reptile", {name: "rawreptile"},{isTech:false,food: 3});

IDRegistry.genItemID("cookedReptile");
Item.createFoodItem("cookedReptile", "Cooked Reptile", {name: "cookedreptile"},{isTech:false,food: 9});

Recipes.addFurnace(ItemID.rawReptile, ItemID.cookedReptile, 0); 

IDRegistry.genItemID("golberries");
Item.createFoodItem("golberries", "Goldberries", {name: "golberries"},{isTech:false,food: 4});

IDRegistry.genItemID("golberryPie");
Item.createFoodItem("golberryPie", "Golberry Pie", {name: "golberrypie"},{isTech:false,food: 12});

Recipes.addShaped({id: ItemID.golberryPie, count: 1, data: 0}, [
    "aaa",
    "aba",
    "c"
], ['a', ItemID.golberries, 0, 'b', 353, 0, 'c', 344, 0]);

IDRegistry.genItemID("vanillaIcecream");
Item.createFoodItem("vanillaIcecream", "Vanilla Icecream", {name: "vanillaicecream"},{isTech:false,food: 12});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.vanillaIcecream){
Entity.addEffect(pl, 28, 1, 180, true, true);
}});
Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.vanillaIcecream, count: 1, data: 0}, [
    "aca",
    "aba",
    "aaa"
], ['a', ItemID.NeciceSh, 0, 'b', 281, 0, 'c', ItemID.vanilla, 0]);

});

IDRegistry.genItemID("golberryIcecream");
Item.createFoodItem("golberryIcecream", "Golberry Icecream", {name: "golberryicecream"},{isTech:false,food: 12});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.golberryIcecream){
Entity.addEffect(pl, 3, 1, 280, true, true);
}});

Recipes.addShaped({id: ItemID.golberryIcecream, count: 1, data: 0}, [
    "aca",
    "aba",
    "aaa"
], ['a', ItemID.NeciceSh, 0, 'b', 281, 0, 'c', ItemID.golberries, 0]);

IDRegistry.genItemID("sweetberryIcecream");
Item.createFoodItem("sweetberryIcecream", "Sweetberry Icecream", {name: "sweetberryicecream"},{isTech:false,food: 12});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.sweetberryIcecream){
Entity.addEffect(pl, 8, 1, 160, true, true);
}});

Recipes.addShaped({id: ItemID.sweetberryIcecream, count: 1, data: 0}, [
    "aca",
    "aba",
    "aaa"
], ['a', ItemID.NeciceSh, 0, 'b', 281, 0, 'c', 477, 0]);

IDRegistry.genItemID("chocolateIcecream");
Item.createFoodItem("chocolateIcecream", "Chocolate Icecream", {name: "chocolateicecream"},{isTech:false,food: 12});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.chocolateIcecream){
Entity.addEffect(pl, 8, 1, 160, true, true);
}});

Recipes.addShaped({id: ItemID.chocolateIcecream, count: 1, data: 0}, [
    "aca",
    "aba",
    "aaa"
], ['a', ItemID.NeciceSh, 0, 'b', 281, 0, 'c', 280, 0]);

IDRegistry.genItemID("fraithCookie");
Item.createFoodItem("fraithCookie", "Gingerbread Fraith", {name: "fraithcookie"},{isTech:false,food: 7});

IDRegistry.genItemID("fulngusStew");
Item.createFoodItem("fulngusStew", "Fulngus Stew", {name: "fulngusstew"},{isTech:false,food: 8});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.fulngusStew){
Entity.addEffect(pl, 8, 1, 160, true, true);
}});

Recipes.addShaped({id: ItemID.fulngusStew, count: 1, data: 0}, [
    "bc",
    "a"
], ['a', ItemID.NeciceSh, 0, 'b', 281, 0, 'c', 280, 0]);




// file: items/tools.js

IMPORT("ToolLib");

IDRegistry.genItemID("ThistleBrush");
Item.createItem("ThistleBrush", "Icestone", {name: "thistlebrush"});

var ICY = [BlockID.grassblockGryss];

Item.registerUseFunction("ThistleBrush", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
 for(let i in ICY) {
     var ICYB = ICY[i];
    if(region.getBlockId(coords.x, coords.y, coords.z) == ICYB) 
   Game.message(ICYB);  
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.NeciceSh, 1, drop.data); 
     }  
});


IDRegistry.genItemID("magnemiveSword");
Item.createItem("magnemiveSword", "Magnemive Sword", {name: "magnemivesworde"}, {stack: 1});
 
IDRegistry.genItemID("magnemiveShovel");
Item.createItem("magnemiveShovel", "Magnemive Shovel", {name: "magnemiveshovel"}, {stack: 1});

IDRegistry.genItemID("magnemivePickaxe");
Item.createItem("magnemivePickaxe", "Magnemive Pickaxe", {name: "magnemivepick"}, {stack: 1});

IDRegistry.genItemID("magnemiveAxe");
Item.createItem("magnemiveAxe", "Magnemive Axe", {name: "magnemiveaxe"}, {stack: 1});

IDRegistry.genItemID("magnemiveHoe");
Item.createItem("magnemiveHoe", "Magnemive Hoe", {name: "magnemivehoe"}, {stack: 1});

ToolAPI.addToolMaterial("magnemivesw", {durability: 2048, level: 5, efficiency: 4, damage: 11, enchantability: 8});
ToolAPI.addToolMaterial("magnemivesh", {durability: 2000, level: 5, efficiency: 4, damage: 7, enchantability: 8});
ToolAPI.addToolMaterial("magnemivepi", {durability: 2200, level: 5, efficiency: 5, damage: 7, enchantability: 8});
ToolAPI.addToolMaterial("magnemiveaxe", {durability: 2128, level: 5, efficiency: 4, damage: 11, enchantability: 8});
ToolAPI.addToolMaterial("magnemiveh", {durability: 2048, level: 5, efficiency: 4, damage: 4, enchantability: 8});

ToolLib.setTool(ItemID.magnemiveSword, "magnemivesw", ToolType.sword);

ToolLib.setTool(ItemID.magnemiveShovel, "magnemivesh", ToolType.shovel);

ToolLib.setTool(ItemID.magnemivePickaxe, "magnemivepi", ToolType.pickaxe);

ToolLib.setTool(ItemID.magnemiveAxe, "magnemiveaxe", ToolType.axe);

ToolLib.setTool(ItemID.magnemiveHoe, "magnemiveh", ToolType.hoe);


Callback.addCallback("PostLoaded", function (){

Item.addRepairItemIds(ItemID.magnemiveSword, [ItemID.magnemiveIngot, ItemID.magnemiveSword]);
Item.addRepairItemIds(ItemID.magnemiveShovel, [ItemID.magnemiveIngot, ItemID.magnemiveShovel]);
Item.addRepairItemIds(ItemID.magnemivePickaxe, [ItemID.magnemiveIngot, ItemID.magnemivePickaxe]);
Item.addRepairItemIds(ItemID.magnemiveAxe, [ItemID.magnemiveIngot, ItemID.magnemiveAxe]);
Item.addRepairItemIds(ItemID.magnemiveHoe, [ItemID.magnemiveIngot, ItemID.magnemiveHoe]);

Recipes.addShaped({id: ItemID.magnemiveSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.magnemiveIngot, 0, 'b', ItemID.frostspineRod, 0]);
Recipes.addShaped({id: ItemID.magnemiveShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.magnemiveIngot, 0, 'b', ItemID.frostspineRod, 0]);
Recipes.addShaped({id: ItemID.magnemivePickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.magnemiveIngot, 0, 'b', ItemID.frostspineRod, 0]);
Recipes.addShaped({id: ItemID.magnemiveAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.magnemiveIngot, 0, 'b', ItemID.frostspineRod, 0]);
Recipes.addShaped({id: ItemID.magnemiveHoe, count: 1, data: 0}, [
    "aa ",
    " a ",
    " b "
], ['a', ItemID.magnemiveIngot, 0, 'b', ItemID.frostspineRod, 0]);

});


IDRegistry.genItemID("fluroomiteSword");
Item.createItem("fluroomiteSword", "Fluroomite Sword", {name: "fluroomitesword"}, {stack: 1});
 
IDRegistry.genItemID("fluroomiteShovel");
Item.createItem("fluroomiteShovel", "Fluroomite Shovel", {name: "fluroomiteshovel"}, {stack: 1});

IDRegistry.genItemID("fluroomitePickaxe");
Item.createItem("fluroomitePickaxe", "Fluroomite Pickaxe", {name: "fluroomitepickaxe"}, {stack: 1});

IDRegistry.genItemID("fluroomiteAxe");
Item.createItem("fluroomiteAxe", "Fluroomite Axe", {name: "fluroomiteaxe"}, {stack: 1});

IDRegistry.genItemID("fluroomiteHoe");
Item.createItem("fluroomiteHoe", "Fluroomite Hoe", {name: "fluroomitehoe"}, {stack: 1});

ToolAPI.addToolMaterial("fluroomitesw", {durability: 2548, level: 5, efficiency: 5, damage: 12, enchantability: 8});
ToolAPI.addToolMaterial("fluroomitesh", {durability: 2500, level: 5, efficiency: 5, damage: 7, enchantability: 8});
ToolAPI.addToolMaterial("fluroomitepi", {durability: 2700, level: 5, efficiency: 5, damage: 7, enchantability: 8});
ToolAPI.addToolMaterial("fluroomiteaxe", {durability: 2628, level: 5, efficiency: 5, damage: 11, enchantability: 8});
ToolAPI.addToolMaterial("fluroomiteh", {durability: 2548, level: 5, efficiency: 5, damage: 4, enchantability: 8});

ToolLib.setTool(ItemID.fluroomiteSword, "fluroomitesw", ToolType.sword);

ToolLib.setTool(ItemID.fluroomiteShovel, "fluroomitesh", ToolType.shovel);

ToolLib.setTool(ItemID.fluroomitePickaxe, "fluroomitepi", ToolType.pickaxe);

ToolLib.setTool(ItemID.fluroomiteAxe, "fluroomiteaxe", ToolType.axe);

ToolLib.setTool(ItemID.fluroomiteHoe, "fluroomiteh", ToolType.hoe);


Callback.addCallback("PostLoaded", function (){

Item.addRepairItemIds(ItemID.fluroomiteSword, [ItemID.fluroomiteIngot, ItemID.fluroomiteSword]);
Item.addRepairItemIds(ItemID.fluroomiteShovel, [ItemID.fluroomiteIngot, ItemID.fluroomiteShovel]);
Item.addRepairItemIds(ItemID.fluroomitePickaxe, [ItemID.fluroomiteIngot, ItemID.fluroomitePickaxe]);
Item.addRepairItemIds(ItemID.fluroomiteAxe, [ItemID.fluroomiteIngot, ItemID.fluroomiteAxe]);
Item.addRepairItemIds(ItemID.fluroomiteHoe, [ItemID.fluroomiteIngot, ItemID.fluroomiteHoe]);

Recipes.addShaped({id: ItemID.fluroomiteSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.fluroomiteIngot, 0, 'b', ItemID.frostspineRod, 0]);
Recipes.addShaped({id: ItemID.fluroomiteShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.fluroomiteIngot, 0, 'b', ItemID.frostspineRod, 0]);
Recipes.addShaped({id: ItemID.fluroomitePickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.fluroomiteIngot, 0, 'b', ItemID.frostspineRod, 0]);
Recipes.addShaped({id: ItemID.fluroomiteAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.fluroomiteIngot, 0, 'b', ItemID.frostspineRod, 0]);
Recipes.addShaped({id: ItemID.fluroomiteHoe, count: 1, data: 0}, [
    "aa ",
    " a ",
    " b "
], ['a', ItemID.fluroomiteIngot, 0, 'b', ItemID.frostspineRod, 0]);

});

//STAFFS

IDRegistry.genItemID("manuartzStaff");
Item.createItem("manuartzStaff", "Manuartz Staff", {name: "magnemivesworde"}, {stack: 1});

ToolAPI.addToolMaterial("manuartzst", {durability: 900, level: 5, efficiency: 4, damage: 6, enchantability: 8});

ToolLib.setTool(ItemID.manuartzStaff, "manuartzst", ToolType.sword);

Recipes.addShaped({id: ItemID.manuartzStaff, count: 1, data: 0}, [
    "aca",
    " a ",
    " b "
], ['a', ItemID.manuartzSh, 0, 'b', ItemID.frostspineRod, 0, 'c', ItemID.manuartzGw, 0]);




// file: items/armor.js

IDRegistry.genItemID("magnemiveHelmet");
Item.createArmorItem("magnemiveHelmet", "Magnemive Helmet", {name: "magnemivehelmet"}, {type: "helmet", armor: 4, durability: 2300, texture: "armor/magnemive_layer_1.png"});

IDRegistry.genItemID("magnemiveChestplate");
Item.createArmorItem("magnemiveChestplate", "Magnemive Chestplate", {name: "magnemivechestplate"}, {type: "chestplate", armor: 9, durability: 2520, texture: "armor/magnemive_layer_1.png"});

IDRegistry.genItemID("magnemiveLeggings");
Item.createArmorItem("magnemiveLeggings", "Magnemive Leggings", {name: "magnemiveleggins"}, {type: "leggings", armor: 7, durability: 2250, texture: "armor/magnemive_layer_2.png"});

IDRegistry.genItemID("magnemiveBoots");
Item.createArmorItem("magnemiveBoots", "Magnemive Boots", {name: "magnemiveboots"}, {type: "boots", armor: 4, durability: 2150, texture: "armor/magnemive_layer_1.png"});

Item.addRepairItemIds(ItemID.magnemiveHelmet, [ItemID.magnemiveIngot, ItemID.magnemiveHelmet]);
Item.addRepairItemIds(ItemID.magnemiveChestplate, [ItemID.magnemiveIngot, ItemID.magnemiveChestplate]);
Item.addRepairItemIds(ItemID.magnemiveLeggings, [ItemID.magnemiveIngot, ItemID.magnemiveLeggings]);
Item.addRepairItemIds(ItemID.magnemiveBoots, [ItemID.magnemiveIngot, ItemID.magnemiveBoots]);

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.magnemiveHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.magnemiveIngot, 0]);

Recipes.addShaped({id: ItemID.magnemiveChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.magnemiveIngot, 0]);

Recipes.addShaped({id: ItemID.magnemiveLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.magnemiveIngot, 0]);

Recipes.addShaped({id: ItemID.magnemiveBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.magnemiveIngot, 0]);

IDRegistry.genItemID("spikewalkerBoots");
Item.createArmorItem("spikewalkerBoots", "Spikewalker Boots", {name: "magnemiveboots"}, {type: "boots", armor: 4, durability: 1000, texture: "armor/spikewalkerboots_layer_1.png"});

Recipes.addShaped({id: ItemID.spikewalkerBoots, count: 1, data: 0}, [
    "x x",
    "y y",
    "z z"
], ['x', ItemID.magnemiveIngot, 0, 'y', ItemID.mantrLeather, 0, 'z', ItemID.fruskGel, 0]);
});



IDRegistry.genItemID("fluroomiteHelmet");
Item.createArmorItem("fluroomiteHelmet", "Fluroomite Helmet", {name: "fluroomitehelmet"}, {type: "helmet", armor: 5, durability: 2400, texture: "armor/fluroomite__layer_1.png"});

IDRegistry.genItemID("fluroomiteChestplate");
Item.createArmorItem("fluroomiteChestplate", "Fluroomite Chestplate", {name: "fluroomitechestplate"}, {type: "chestplate", armor: 9, durability: 2620, texture: "armor/fluroomite__layer_1.png"});

IDRegistry.genItemID("fluroomiteLeggings");
Item.createArmorItem("fluroomiteLeggings", "Fluroomite Leggings", {name: "fluroomiteleggins"}, {type: "leggings", armor: 8, durability: 2350, texture: "armor/fluroomite__layer_2.png"});

IDRegistry.genItemID("fluroomiteBoots");
Item.createArmorItem("fluroomiteBoots", "Fluroomite Boots", {name: "fluroomiteboots"}, {type: "boots", armor: 5, durability: 2250, texture: "armor/fluroomite__layer_1.png"});

Item.addRepairItemIds(ItemID.fluroomiteHelmet, [ItemID.fluroomiteIngot, ItemID.fluroomiteHelmet]);
Item.addRepairItemIds(ItemID.fluroomiteChestplate, [ItemID.fluroomiteIngot, ItemID.fluroomiteChestplate]);
Item.addRepairItemIds(ItemID.fluroomiteLeggings, [ItemID.fluroomiteIngot, ItemID.fluroomiteLeggings]);
Item.addRepairItemIds(ItemID.fluroomiteBoots, [ItemID.fluroomiteIngot, ItemID.fluroomiteBoots]);

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.fluroomiteHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.fluroomiteIngot, 0]);

Recipes.addShaped({id: ItemID.fluroomiteChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.fluroomiteIngot, 0]);

Recipes.addShaped({id: ItemID.fluroomiteLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.fluroomiteIngot, 0]);

Recipes.addShaped({id: ItemID.fluroomiteBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.fluroomiteIngot, 0]);
});




// file: blocks/flake.js

const BLOCK_TYPE_XDIRT = Block.createSpecialType({
    lightopacity: 0,
    destroytime: 3,
    renderlayer: 3,
    sond: "grass"
});

const BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
    explosionres: 1,
    renderallfaces: true,
    renderlayer: 1,
    lightopacity: 1,
    translucency: 0.5,
    sound: "grass"
});

const BLOCK_TYPE_SPIKE_ICE = Block.createSpecialType({
    solid: false,
    destroytime: 0.4,
    explosionres: 2,
    renderallfaces: true,
    lightopacity: 4,
    translucency: 0.5,
    sound: "glass"
});

const BLOCK_TYPE_WOOD = Block.createSpecialType({
    solid: true,
    renderlayer: 3,
    explosionres: 16,
    translucency: 0,
    sound: "wood"
});

var BLOCK_TYPE_STONE = Block.createSpecialType({
    solid: true,
    renderlayer: 3,
    explosionres: 15,
    lightopacity: 15,
    translucency: 0
});

var BLOCK_TYPE_STONE_TR = Block.createSpecialType({
    solid: true,
    renderlayer: 1,
    explosionres: 15,
    lightopacity: 1,
    translucency: 0
});

const BLOCK_TYPE_WALL = Block.createSpecialType({
    destroytime: 3,
    lightopacity: 1,
    renderlayer: 2,
    rendertype: 32,
    translucency: 0.5
});

const BLOCK_TYPE_SLAB_WOOD = Block.createSpecialType({
    solid: false,
    renderlayer: 2,
    explosionres: 16,
    lightopacity: 1,
    translucency: 0,
    sound: "wood"
});

const BLOCK_TYPE_SLAB = Block.createSpecialType({
    solid: false,
    renderlayer: 2,
    explosionres: 16,
    lightopacity: 1,
    translucency: 0
});

IDRegistry.genBlockID("cloudPulsen");
Block.createBlock("cloudPulsen", [
    {name: "Pulsen Cloud", texture: [["snowcloudt", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);

const cloudCrender = new ICRender.CollisionShape();
cloudCrender.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.cloudPulsen, 0, cloudCrender);
Block.setShape(BlockID.cloudPulsen, 0, 0, 0, 1, 1, 1, 0);

IDRegistry.genBlockID("cloudFlowing");
Block.createBlock("cloudFlowing", [
    {name: "Flowing Cloud", texture: [["flowcloudt", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);

IDRegistry.genBlockID("dirtGryss"); 
Block.createBlock("dirtGryss", [
    {name: "Ivorak", texture: [["ivorack", 0]],inCreative: true}], BLOCK_TYPE_XDIRT);
Block.setDestroyTime(BlockID.dirtGryss, 2);
ToolAPI.registerBlockMaterial(BlockID.dirtGryss, "dirt", 2, true);

IDRegistry.genBlockID("grassblockGryss");
Block.createBlock("grassblockGryss", [
    {name: "Ivorak Grass", texture: [["ivorack", 0], ["grysstop", 0], ["grysssidenew", 0]],inCreative: true}], BLOCK_TYPE_XDIRT);
ToolAPI.registerBlockMaterial(BlockID.grassblockGryss, "dirt", 2, true);
Block.registerDropFunction("grassblockGryss", function(){
return [[BlockID.dirtGryss, 1, 0]];});

IDRegistry.genBlockID("grassblockGryssIcy");
Block.createBlock("grassblockGryssIcy", [
    {name: "Ivorak Grass", texture: [["icyivorack", 0], ["icygrysstopnew", 0], ["icygrysssidenew", 0]],inCreative: true}], BLOCK_TYPE_XDIRT);
ToolAPI.registerBlockMaterial(BlockID.grassblockGryssIcy, "dirt", 2, true);
Block.registerDropFunction("grassblockGryssIcy", function(){
return [[BlockID.dirtGryss, 1, 0]];});

IDRegistry.genBlockID("Frone"); 
Block.createBlock("Frone", [
    {name: "Frone", texture: [["frone", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Block.setDestroyTime(BlockID.Frone, 3);
ToolAPI.registerBlockMaterial(BlockID.Frone, "stone", 2, true);

IDRegistry.genBlockID("Necice"); 
Block.createBlock("Necice", [
    {name: "Necice", texture: [["necice", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Block.setDestroyTime(BlockID.Necice, 3);
ToolAPI.registerBlockMaterial(BlockID.Necice, "stone", 2, true);

IDRegistry.genBlockID("NeciceTh"); 
Block.createBlock("NeciceTh", [
    {name: "Necice Thin", texture: [["thinnecicet", 0]],inCreative: true}], BLOCK_TYPE_STONE_TR);
Block.setDestroyTime(BlockID.NeciceTh, 3);
ToolAPI.registerBlockMaterial(BlockID.NeciceTh, "stone", 2, true);

IDRegistry.genBlockID("NeciceSh"); 
Block.createBlock("NeciceSh", [
    {name: "NeciceSh", texture: [["necicesharp", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Block.setDestroyTime(BlockID.NeciceSh, 3);
ToolAPI.registerBlockMaterial(BlockID.NeciceSh, "stone", 3, true);

IDRegistry.genBlockID("NeciceD"); 
Block.createBlock("NeciceD", [
    {name: "Dark Necice", texture: [["darkestnecice", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Block.setDestroyTime(BlockID.NeciceD, 3);
ToolAPI.registerBlockMaterial(BlockID.NeciceD, "stone", 2, true);

IDRegistry.genBlockID("Coldicite"); 
Block.createBlock("Coldicite", [
    {name: "Coldicite", texture: [["coldiciteblock", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Block.setDestroyTime(BlockID.Coldicite, 3);
ToolAPI.registerBlockMaterial(BlockID.Coldicite, "stone", 2, true);

IDRegistry.genBlockID("ColdiciteTh"); 
Block.createBlock("ColdiciteTh", [
    {name: "Coldicite Thin", texture: [["coldictethint", 0]],inCreative: true}], BLOCK_TYPE_STONE_TR);
Block.setDestroyTime(BlockID.ColdiciteTh, 3);
ToolAPI.registerBlockMaterial(BlockID.ColdiciteTh, "stone", 2, true);











// file: blocks/vanilla.js

IDRegistry.genBlockID("Boulder"); 
Block.createBlock("Boulder", [
    {name: "Boulder", texture: [["boulder", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Block.setDestroyTime(BlockID.Boulder, 3);
ToolAPI.registerBlockMaterial(BlockID.Boulder, "stone", 2, true);

IDRegistry.genBlockID("BoulderEnd"); 
Block.createBlock("BoulderEnd", [
    {name: "Ender Boulder", texture: [["enderboulder", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Block.setDestroyTime(BlockID.Boulder, 3);
ToolAPI.registerBlockMaterial(BlockID.Boulder, "stone", 2, true);

Callback.addCallback("PostLoaded", function (){
Recipes.addShaped({id: BlockID.Boulder, count: 1, data: 0}, [
    "oaa",
    "oaa"
], ['a', 4, 0]);

Recipes.addShaped({id: BlockID.BoulderEnd, count: 1, data: 0}, [
    "oaa",
    "oaa"
], ['a', 121, 0]);

});




// file: blocks/ores.js

IDRegistry.genBlockID("oreIronFrone"); 
Block.createBlock("oreIronFrone", [
    {name: "Iron Frone Ore", texture:[["ironfroneore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreIronFrone, 2);
Block.registerDropFunction("oreIronFrone", function(coords, blockID, blockData, level, enchant){ 
    return [[265, randomInt(1,3), 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
UniqueGen.generateOreInDimension(BlockID.oreIronFrone, 0, chunkX, chunkZ, random, { 
 veinCounts: 26,
 minY: 32,
 maxY: 230,
 size: randomInt(2, 7),
 mode: true,
 check: [BlockID.Frone]
}); 
});


IDRegistry.genBlockID("oreRedstoneFrone"); 
Block.createBlock("oreRedstoneFrone", [
    {name: "Redstone Frone Ore", texture:[["redstonefroneore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreRedstoneFrone, 2);
Block.registerDropFunction("oreRedstoneFrone", function(coords, blockID, blockData, level, enchant){ 
    return [[331, randomInt(2,6), 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
UniqueGen.generateOreInDimension(BlockID.oreRedstoneFrone, 0, chunkX, chunkZ, random, { 
 veinCounts: 20,
 minY: 32,
 maxY: 230,
 size: randomInt(2, 7),
 mode: true,
 check: [BlockID.Frone]
}); 
});


IDRegistry.genBlockID("oreDiamondFrone"); 
Block.createBlock("oreDiamondFrone", [
    {name: "Diamond Frone Ore", texture:[["diamondfroneore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreDiamondFrone, 2);
Block.registerDropFunction("oreDiamondFrone", function(coords, blockID, blockData, level, enchant){ 
    return [[264, randomInt(1,2), 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
UniqueGen.generateOreInDimension(BlockID.oreDiamondFrone, 0, chunkX, chunkZ, random, { 
 veinCounts: 17,
 minY: 32,
 maxY: 230,
 size: randomInt(2, 7),
 mode: true,
 check: [BlockID.Frone]
}); 
});


IDRegistry.genBlockID("oreNorthositFrone"); 
Block.createBlock("oreNorthositFrone", [
    {name: "Northosit Frone Ore", texture:[["northositorefrone", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreNorthositFrone, 2);
Block.registerDropFunction("oreNorthositFrone", function(coords, blockID, blockData, level, enchant){ 
    return [[ItemID.northositLp, randomInt(1,3), 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
UniqueGen.generateOreInDimension(BlockID.oreNorthositFrone, 0, chunkX, chunkZ, random, { 
 veinCounts: 21,
 minY: 32,
 maxY: 230,
 size: randomInt(2, 7),
 mode: true,
 check: [BlockID.Frone]
}); 
});

//UNUSED
IDRegistry.genBlockID("oreFluroomiteAutumn"); 
Block.createBlock("oreFluroomiteAutumn", [
    {name: "Fluroomite Autumn Ore", texture:[["fluroomiteorenew", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreFluroomiteAutumn, 2);

/*Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
UniqueGen.generateOreInDimension(BlockID.oreFluroomiteAutumn, 0, chunkX, chunkZ, random, { 
 veinCounts: 21,
 minY: 32,
 maxY: 230,
 size: randomInt(2, 7),
 mode: true,
 check: [BlockID.Frone]
}); 
});*/




// file: blocks/plants.js

var BLOCK_TYPE_PLANT = Block.createSpecialType({
    base: 38,
    solid: false,
    destroytime: 0.1,
    explosionres: 1,
    //renderlayer: 1,
    rendertype: 91,
    lightopacity: 0,
    translucency: 0.5,
    sound: "grass"
});

var BLOCK_TYPE_PLANT_DOUBLE = Block.createSpecialType({
    base: 38,
    solid: false,
    destroytime: 0.1,
    explosionres: 1,
    //renderlayer: 1,
    rendertype: 91,
    lightopacity: 0,
    translucency: 0.5,
    sound: "grass"
});


//FLAKE
IDRegistry.genBlockID("fernFlake");
Block.createBlock("fernFlake", [
    {name: "Flake Fern", texture: [["flakefern", 0], ["flakefern", 0], ["flakefern", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.fernFlake, "plant");
setPlantModel(BlockID.fernFlake, false);

IDRegistry.genItemID("fernFlake");
Item.createItem("fernFlake", "Flake Fern", {name: "flakefern"});

Item.registerUseFunction("fernFlake", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockGryss || region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockGryssIcy){ 
        region.setBlock(place.x, place.y, place.z, BlockID.fernFlake);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 225, coords.z);
  if (coords.y < 38) return;
  if(random.nextFloat() < .65)
   for(let i=0; i<randomInt(3, 9); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockGryss || World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockGryssIcy){ 
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.fernFlake,0);     
    }
}});

IDRegistry.genBlockID("shortgrassFlake");
Block.createBlock("shortgrassFlake", [
    {name: "Gryss Grass", texture: [["tallgryss", 0], ["tallgryss", 0], ["tallgryss", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.shortgrassFlake, "plant");

IDRegistry.genItemID("shortgrassFlake");
Item.createItem("shortgrassFlake", "Gryss Grass", {name: "tallgryss"});

Item.registerUseFunction("shortgrassFlake", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockGryss){ 
        region.setBlock(place.x, place.y, place.z, BlockID.shortgrassFlake);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.shortgrassFlake, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 184, coords.z);
  if (coords.y < 35) return;
   for(let i=0; i<randomInt(4, 12); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockGryss){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.shortgrassFlake,0);   
    }
}});

IDRegistry.genBlockID("longgrassFlakeb");
Block.createBlock("longgrassFlakeb", [
    {name: "Flake Fern", texture: [["tallflakefernbottom", 0], ["tallflakefernbottom", 0], ["tallflakefernbottom", 0]], inCreative: false}
], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.longgrassFlakeb, "plant");

IDRegistry.genBlockID("longgrassFlaket");
Block.createBlock("longgrassFlaket", [
    {name: "Flake Fern", texture: [["tallflakeferntop", 0], ["tallflakeferntop", 0], ["tallflakeferntop", 0]], inCreative: false}
], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.longgrassFlaket, "plant");

IDRegistry.genItemID("longgrassFlaket");
Item.createItem("longgrassFlaket", "Flake Fern", {name: "tallflakeferntop"});

Item.registerUseFunction("longgrassFlaket", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
       region.setBlock(place.x,place.y+1,place.z,BlockID.longgrassFlakeb, 0);   
        region.setBlock(place.x, place.y+2, place.z, BlockID.longgrassFlaket, 0);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.longgrassFlakeb, true);
setPlantModel(BlockID.longgrassFlaket, true);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 225, coords.z);
  if (coords.y < 35) return;
   for(let i=0; i<randomInt(0, 5); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){  
       World.setBlock(coords.x,coords.y+1,coords.z,BlockID.longgrassFlakeb, 0);   
       World.setBlock(coords.x, coords.y+2, coords.z, BlockID.longgrassFlaket, 0);  
    }
}});

Block.registerDropFunction("fernFlake", function(coords, blockID){
    return [[ItemID.fernFlake, 1, 0]];
});
Block.registerDropFunction("shortgrassFlake", function(coords, blockID){
    return [[ItemID.shortgrassFlake, 1, 0]];
});
Block.registerDropFunction("longgrassFlakeb", function(coords, blockID){
    return [];
});
Block.registerDropFunction("longgrassFlaket", function(coords, blockID){
    return [[ItemID.fernFlake, 1, 0]];
});


IDRegistry.genBlockID("coalstem");
Block.createBlock("coalstem", [
    {name: "Coalstem", texture: [["coalstem", 0], ["coalstem", 0], ["coalstem", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.coalstem, "plant");

IDRegistry.genItemID("coalstem");
Item.createItem("coalstem", "Coalstem", {name: "coalstem"});

Item.registerUseFunction("coalstem", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockGryss){ 
        region.setBlock(place.x, place.y, place.z, BlockID.coalstem);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.coalstem, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 184, coords.z);
  if (coords.y < 35) return;
   for(let i=0; i<randomInt(4, 12); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockGryss){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.coalstem,0);   
    }
}});

Block.registerDropFunction("coalstem", function(coords, blockID){
     return [[ItemID.coalstem, 1, 0]];
});

IDRegistry.genBlockID("vanilla");
Block.createBlock("vanilla", [
    {name: "Vanilla", texture: [["vanillaflower", 0], ["vanillaflower", 0], ["vanillaflower", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.vanilla, "plant");

IDRegistry.genItemID("vanilla");
Item.createItem("vanilla", "Vanilla", {name: "vanillaflower"});

Item.registerUseFunction("vanilla", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockGryss){ 
        region.setBlock(place.x, place.y, place.z, BlockID.vanilla);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.vanilla, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 184, coords.z);
  if (coords.y < 35) return;
   for(let i=0; i<3; i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockGryss){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.vanilla,0);   
    }
}});

Block.registerDropFunction("vanilla", function(coords, blockID){
    return [[ItemID.vanilla, 1, 0]];
});


IDRegistry.genBlockID("goldberryBush");
Block.createBlock("goldberryBush", [
    {name: "Goldberry Bush", texture: [["golberryvine", 0], ["golberryvine", 0], ["golberryvine", 0]], inCreative: false}
], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.goldberryBush, "plant");

IDRegistry.genItemID("goldberryBush");
Item.createItem("goldberryBush", "Goldberry Bush", {name: "golberryvine"});

Callback.addCallback("ItemUse", function (coords,item,block, is, player) {
pl= coords.relative;
  var region = BlockSource.getDefaultForActor(player);
if (region.getBlockId(coords.x, coords.y, coords.z)==BlockID.goldberryBush){
region.spawnDroppedItem(coords.x, coords.y+1, coords.z, ItemID.golberries, randomInt(2,3), 0);
 region.destroyBlock(coords.x,coords.y,coords.z,false);     
}
});
setPlantModel(BlockID.goldberryBush, true);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
if(Math.random() < 0.1){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 184, coords.z);
  if (coords.y < 35) return;
   for(let i=0; i<3; i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockGryss){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.goldberryBush,0);
World.setBlock(coords.x,coords.y+2,coords.z,BlockID.goldberryBush,0);    
    }
}
}});

Block.registerDropFunction("goldberryBush", function(coords, blockID){
    return [[ItemID.golberries, randomInt(1, 2), 0]];
});




// file: blocks/trees.js

(function(){
    let constructVariationsSet = function(name, top, side){
        return [
            {name: name, texture: [[top, 0], [top, 0], [side, 0]], inCreative: true},
            {name: name, texture: [[side, 0], [side, 0], [top, 0], [top, 0], [side, 1]], inCreative: false},
            {name: name, texture: [[side, 1], [side, 1], [side, 1], [side, 1], [top, 0]], inCreative: false}
        ]
    }
    let makeDropFunction = function(id){
        Block.registerDropFunction(id, function(coords, blockID, blockData, level, enchant, item, region){
            return [[blockID, 1, 0]];
        });
    }
    let makePlaceFunction = function(id){
        Block.registerPlaceFunction(id, function(coords, item, block, player, region){
            let r = coords.relative;
            switch(coords.side){
                case 0: case 1:
                    region.setBlock(r.x, r.y, r.z, id, 0); break;
                case 2: case 3:
                    region.setBlock(r.x, r.y, r.z, id, 1); break;
                case 4: case 5:
                    region.setBlock(r.x, r.y, r.z, id, 2); break;
            }
        });
    };
    (function(ids){
        for(let i in ids){
            let block = ids[i];
            let bid = block[0], 
                name = block[1], 
                topt = block[2], 
                sidet = block[3];
            IDRegistry.genBlockID(bid);
            Block.createBlock(bid, constructVariationsSet(name, topt, sidet), BLOCK_TYPE_WOOD);
            ToolAPI.registerBlockMaterial(BlockID[bid], "wood", 0, false);
            makeDropFunction(BlockID[bid]);
            makePlaceFunction(BlockID[bid]);
        }
    })([
        ["flurostLog", "Flurost Log", "fulrostlogtop", "fulrostlogside"],
        ["glaciLog", "Glacilog", "glacilogtop", "glacilogside"],
        ["weepingTreeDry", "Weeping Tree Log", "weepingtreelogtop", "weepingtreelogsidedry"],
        ["weepingTree", "Weeping Tree Log", "weepingtreelogtop", "weepingtreelogside"]
    ]);
})();

//PLANKS

IDRegistry.genBlockID("flurostPlanks");
IDRegistry.genBlockID("glaciPlanks");
IDRegistry.genBlockID("weepingTreeDryPlanks");

Block.createBlock("flurostPlanks", [
    {name: "Flurost Log Planks", texture: [["fulrostplanks", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);
Block.createBlock("glaciPlanks", [
    {name: "Glacilog Planks", texture: [["glasinplanks", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);
Block.createBlock("weepingTreeDryPlanks", [
    {name: "Weeping Tree Log Planks", texture: [["weepingplanls", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

ToolAPI.registerBlockMaterial(BlockID.flurostPlanks, "wood", 0, false);
ToolAPI.registerBlockMaterial(BlockID.glaciPlanks, "wood", 0, false);
ToolAPI.registerBlockMaterial(BlockID.weepingTreeDryPlanks, "wood", 0, false);

//LEAVES

IDRegistry.genBlockID("flurostLeaves");
IDRegistry.genBlockID("glaciLeaves");
IDRegistry.genBlockID("weepingTreeLeaves");

Block.createBlock("flurostLeaves", [
    {name: "Flurost Log Leaves", texture: [["fulrostleaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.createBlock("glaciLeaves", [
    {name: "Glacilog Leaves", texture: [["glacileaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.createBlock("weepingTreeLeaves", [
    {name: "Weeping Tree Log Leaves", texture: [["paletreeleaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);

ToolAPI.registerBlockMaterial(BlockID.flurostLeaves, "plant", 0, false);
ToolAPI.registerBlockMaterial(BlockID.glaciLeaves, "plant", 0, false);
ToolAPI.registerBlockMaterial(BlockID.weepingTreeDryLeaves, "plant", 0, false);

ModAPI.addAPICallback("BetterFoliageLeaves", function(BetterFoliage) {
    BetterFoliage.setupLeavesModel(BlockID.darklandsOakLeaves, -1, ["fulrostleaves", 0]);
    BetterFoliage.setupLeavesModel(BlockID.dreadlandsWoodLeaves, -1, ["glacileaves", 0]);
    BetterFoliage.setupLeavesModel(BlockID.dreadlandsWoodLeaves, -1, ["paletreeleaves", 0]);
});

Block.registerDropFunction(BlockID.flurostLeaves, function(coords, blockID, blockData, level, enchant, item, region){
    //if(Math.random() < .095) return [[ItemID.flurostSapling, 1, 0]];
    return [];
});
Block.registerDropFunction(BlockID.glaciLeaves, function(coords, blockID, blockData, level, enchant, item, region){
    //if(Math.random() < .095) return [[ItemID.glaciSapling, 1, 0]];
    return [];
});
Block.registerDropFunction(BlockID.weepingTreeDryLeaves, function(coords, blockID, blockData, level, enchant, item, region){
    //if(Math.random() < .095) return [[ItemID.weepingTreeDrySapling, 1, 0]];
    return [];
});

IDRegistry.genBlockID("glacingVine");
Block.createBlock("glacingVine", [
    {name: "Glacing Vine", texture: [["glacinvine", 0], ["glacinvine", 0], ["glacinvine", 0]], inCreative: false}
], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.glacingVine, "plant");

IDRegistry.genItemID("glacingVine");
Item.createItem("glacingVine", "Vanilla", {name: "glacinvine"});
setPlantModel(BlockID.glacingVine, true);

Item.registerUseFunction("glacingVine", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
    if (region.getBlockId(place.x, place.y + 1, place.z)==BlockID.glaciLeaves){  
  region.setBlock(place.x, place.y + 1, place.z, BlockID.glacingVine);      
      }
});


IDRegistry.genBlockID("glacingVineEnd");
Block.createBlock("glacingVineEnd", [
    {name: "Glacing Vine", texture: [["glacivineend", 0], ["glacivineend", 0], ["glacivineend", 0]], inCreative: false}
], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.glacingVineEnd, "plant");

IDRegistry.genItemID("glacingVineEnd");
Item.createItem("glacingVineEnd", "Vanilla", {name: "glacivineend"});
setPlantModel(BlockID.glacingVineEnd, true);

Item.registerUseFunction("glacingVineEnd", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
    if (region.getBlockId(place.x, place.y + 1, place.z)==BlockID.glaciLeaves || region.getBlockId(place.x, place.y + 1, place.z)==BlockID.glacingVine){  
  region.setBlock(place.x, place.y + 1, place.z, BlockID.glacingVineEnd);      
      }
});


//Trees
 flurostS = new Structure("FlurostS");
 flurostB = new Structure("FlurostB");
 //glaciL = new Structure("Tower");
 //glaciS = new Structure("Tower");
 //weepingB = new Structure("Tower");
 //weepingM = new Structure("Tower");

//Structures
 cloud = new Structure("Cloud");
 snow = new Structure("Snow");
 
   //Towers
 TowerF = new Structure("FroneS");
 TowerFM = new Structure("FroneM");
 TowerFG = new Structure("FroneB");
 TowerFGF = new Structure("FroneBF");

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimeID){
if(dimeID != Xenoculus.id) return; 
var region = BlockSource.getCurrentWorldGenRegion();
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
        coords = GenerationUtils.findSurface(coords.x, 245, coords.z);
        if(coords.y < 37) return;
 if(random.nextFloat() < .54 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) flurostS.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
 if(random.nextFloat() < .48 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) flurostB.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 //if(random.nextFloat() < .48 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) glaciL.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 //if(random.nextFloat() < .48 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) glaciS.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 //if(random.nextFloat() < .48 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) weepingB.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 //if(random.nextFloat() < .48 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) weepingM.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 //if(random.nextFloat() < .48 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) greenN.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 
 if(random.nextFloat() < .016 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) TowerF.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 if(random.nextFloat() < .02 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) TowerFM.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 if(random.nextFloat() < .009 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) TowerFG.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 if(random.nextFloat() < .007 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) TowerFGF.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 
 if(random.nextFloat() < .01 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) cloud.build(coords.x, coords.y + randomInt(19, 379), coords.z, Structure.ROTATE_Y, random, region);  
 if(random.nextFloat() < .01 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) snow.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
});





// file: blocks/shrooms.js

IDRegistry.genBlockID("voidFungus");
Block.createBlock("voidFungus", [
    {name: "Void Fungus", texture: [["voidfungus", 0], ["voidfungus", 0], ["voidfungus", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.voidFungus, "plant");

IDRegistry.genItemID("voidFungus");
Item.createItem("voidFungus", "Vanilla", {name: "voidfungus"});

Item.registerUseFunction("voidFungus", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.Frone){ 
        region.setBlock(place.x, place.y, place.z, BlockID.voidFungus);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.voidFungus, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 184, coords.z);
  if (coords.y < 87) return;
   for(let i=0; i<3; i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.Frone){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.voidFungus,0);   
    }
}});

Block.registerDropFunction("voidFungus", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.voidFungus, 1, 0);
});


IDRegistry.genBlockID("enchFungus");
Block.createBlock("enchFungus", [
    {name: "Enchanted Fungus", texture: [["enchfungus", 0], ["enchfungus", 0], ["enchfungus", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.enchFungus, "plant");

IDRegistry.genItemID("enchFungus");
Item.createItem("enchFungus", "Vanilla", {name: "enchfungus"});

Item.registerUseFunction("enchFungus", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.Frone){ 
        region.setBlock(place.x, place.y, place.z, BlockID.enchFungus);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.enchFungus, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 184, coords.z);
  if (coords.y < 80) return;
   for(let i=0; i<3; i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.Frone){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.enchFungus,0);   
    }
}});

Block.registerDropFunction("enchFungus", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.enchFungus, 1, 0);
});

//VoidSh = new Structure("VoidSh");
//EnchantedSh = new Structure("EnchantedSh");

Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
let tsu = BlockSource.getDefaultForActor(player);
  var coords = coords.relative;
 if(item.id == 280 && World.getBlockID(coords.x,coords.y,coords.z)==BlockID.voidFungus){  
//VoidSh.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, tsu);
Game.message("ID: " + item.id + " Data: " + item.data);    
}});

Block.setRandomTickCallback(BlockID.voidFungus, function(x, y, z, id, data) {      
    let tsu = BlockSource.getDefaultForDimension(Xenoculus.id);
  var coords = coords.relative;
   if (tsu != null && tsu.getBlockId(coords.x, coords.y - 1, coords.z) == BlockID.Frone) {
  tsu.destroyBlock(coords.x,coords.y,coords.z,false);                      
//VoidSh.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, tsu);    
      }
 }); 

/*
Callback.addCallback('ItemUse', function (coords, item, block) {
let tsu = BlockSource.getDefaultForDimension(Xenoculus.id);
  var coords = coords.relative;
 if(item.id == 280 && World.getBlockID(coords.x,coords.y,coords.z)==BlockID.enchFungus){  
//EnchantedSh.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, tsu);
Game.message("ID: " + item.id + " Data: " + item.data);    
}});*/

Block.setRandomTickCallback(BlockID.enchFungus, function(x, y, z, id, data) {      
    let tsu = BlockSource.getDefaultForDimension(Xenoculus.id);
  var coords = coords.relative;
   if (tsu != null && tsu.getBlockId(coords.x, coords.y - 1, coords.z) == BlockID.Frone) {
  tsu.destroyBlock(coords.x,coords.y,coords.z,false);                      
//EnchantedSh.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, tsu);    
      }
 });

IDRegistry.genBlockID("froneFylim"); 
Block.createBlock("froneFylim", [
    {name: "Stone Fylim", texture: [["frone", 0], ["fyliumtop", 0], ["fyliumside", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Block.setDestroyTime(BlockID.froneFylim, 3);
ToolAPI.registerBlockMaterial(BlockID.froneFylim, "stone", 2, true);

IDRegistry.genBlockID("FungusStem"); 
Block.createBlock("FungusStem", [
    {name: "Fungus Stem", texture: [["fulngusblock", 0], ["fulngusblock", 0], ["fulngusstem", 0]],inCreative: true}], BLOCK_TYPE_WOOD);
Block.setDestroyTime(BlockID.FungusStem, 3);
ToolAPI.registerBlockMaterial(BlockID.FungusStem, "wood", 2, true);


IDRegistry.genBlockID("voidFungusCap"); 
Block.createBlock("voidFungusCap", [
    {name: "Void Fungus Cap", texture: [["fulngusblock", 0], ["voidfungusblock", 0], ["voidfungusblock", 0]],inCreative: true}], BLOCK_TYPE_WOOD);
Block.setDestroyTime(BlockID.voidFungusCap, 3);
ToolAPI.registerBlockMaterial(BlockID.voidFungusCap, "wood", 2, true);

IDRegistry.genBlockID("enchantedFungusCap"); 
Block.createBlock("enchantedFungusCap", [
    {name: "Enchanted Fungus Cap", texture: [["fulngusblock", 0], ["enchfungusblock", 0], ["enchfungusblock", 0]],inCreative: true}], BLOCK_TYPE_WOOD);
Block.setDestroyTime(BlockID.enchantedFungusCap, 3);
ToolAPI.registerBlockMaterial(BlockID.enchantedFungusCap, "wood", 2, true);




// file: blocks/dungeons.js

var BLOCK_TYPE_PLANE = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 1,
    rendertype: 87,
    translucency: 1,
    sound: "glass"
});

//LOOT

var NORMAL_RANDOM_DROP = [
    {chance: 45, id: ItemID.manuartzSh, data: 0},
    {chance: 25, id: ItemID.manuartzGw, data: 0},
    {chance: 15, id: ItemID.southiveSc, data: 0},
    {chance: 15, id: ItemID.NeciceSh, data: 0} 
];

var AIR_RANDOM_DROP = [
    {chance: 45, id: ItemID.manuartzSh, data: 0},
    {chance: 25, id: ItemID.manuartzGw, data: 0},
    {chance: 15, id: ItemID.southiveSc, data: 0},
    {chance: 5, id: 322, data: 0},
    {chance: 20, id: ItemID.magnemiveIngot, data: 0},
    {chance: 15, id: ItemID.PolusSh, data: 0} 
];

var DUSKEN_RANDOM_DROP = [
    {chance: 45, id: ItemID.manuartzSh, data: 0},
    {chance: 25, id: ItemID.manuartzGw, data: 0},
    {chance: 15, id: ItemID.southiveSc, data: 0},
    {chance: 5, id: 322, data: 0},
    {chance: 2, id: ItemID.manuartzStaff, data: 0},
    {chance: 8, id: ItemID.northositLp, data: 0},,
    {chance: 35, id: ItemID.magnemiveIngot, data: 0},
    {chance: 15, id: ItemID.PolusSh, data: 0} 
];

function getDropItem(drops){
    var total = 0;
    for (var i in drops){
        total += drops[i].chance;
    }
    var random = Math.random() * total * 1.4;
    var current = 0;
    for (var i in drops){
        var drop = drops[i];
        if (current < random && current + drop.chance > random){
            return drop;
        }
        current += drop.chance;
    }    
    return {id: ItemID.NeciceSh, data: 0};
}


//NORMAL
var NORMALCHESTmesh = new RenderMesh();
NORMALCHESTmesh.setBlockTexture("treasurechestnormal",0);
NORMALCHESTmesh.importFromFile(__dir__+"models/treasurechest.obj","obj",null);
IDRegistry.genBlockID("normalchest");
Block.createBlock("normalchest", [
    {name: "Normal Chest", texture: [["treasurechestnormal", 0]], inCreative: true}
]);
var NORMALCHESTrender = new ICRender.Model();
NORMALCHESTrender.addEntry(new BlockRenderer.Model(NORMALCHESTmesh));
BlockRenderer.setStaticICRender(BlockID.normalchest,0,NORMALCHESTrender);

Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
let tsu = BlockSource.getDefaultForActor(player);
  var coords = coords.relative;
 if(item.id == 0 && tsu.getBlockId(coords.x,coords.y,coords.z)==BlockID.normalchest){  
  tsu.destroyBlock(coords.x,coords.y,coords.z);  
   tsu.setBlock(coords.x,coords.y,coords.z,BlockID.normalchestOpen,0);      
}});

var NORMALCHESTOmesh = new RenderMesh();
NORMALCHESTOmesh.setBlockTexture("normalchestunlocked",0);
NORMALCHESTOmesh.importFromFile(__dir__+"models/treasurechest_opened.obj","obj",null);
IDRegistry.genBlockID("normalchestOpen");
Block.createBlock("normalchestOpen", [
    {name: "Normal Chest", texture: [["normalchestunlocked", 0]], inCreative: true}
]);
var NORMALCHESTOrender = new ICRender.Model();
NORMALCHESTOrender.addEntry(new BlockRenderer.Model(NORMALCHESTOmesh));
BlockRenderer.setStaticICRender(BlockID.normalchestOpen,0,NORMALCHESTOrender);

Block.registerDropFunction("normalchestOpen", function(coords,item, block){
var region = BlockSource.getCurrentWorldGenRegion();
 for(var i = 0; i <= randomInt(3, 6); i ++) {
 var drop = getDropItem(NORMAL_RANDOM_DROP);
    region.spawnDroppedItem(coords.relative.x + Math.random(), coords.relative.y + 0.3, coords.relative.z + Math.random(), drop.id, 1, drop.data);
    item.id--;
    if(!item.count){item.id = 0;}
        return drop;    
     } 
});

//AIR
var AIRCHESTmesh = new RenderMesh();
AIRCHESTmesh.setBlockTexture("airchest",0);
AIRCHESTmesh.importFromFile(__dir__+"models/treasurechest.obj","obj",null);
IDRegistry.genBlockID("airchest");
Block.createBlock("airchest", [
    {name: "Air Chest", texture: [["airchest", 0]], inCreative: true}
]);
var AIRCHESTrender = new ICRender.Model();
AIRCHESTrender.addEntry(new BlockRenderer.Model(AIRCHESTmesh));
BlockRenderer.setStaticICRender(BlockID.airchest,0,AIRCHESTrender);

Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
let tsu = BlockSource.getDefaultForActor(player);
  var coords = coords.relative;
 if(item.id == 0 && tsu.getBlockId(coords.x,coords.y,coords.z)==BlockID.airchest){ 
  tsu.destroyBlock(coords.x,coords.y,coords.z);
   tsu.setBlock(coords.x,coords.y,coords.z,BlockID.airchestOpen,0);      
}});

var AIRCHESTOmesh = new RenderMesh();
AIRCHESTOmesh.setBlockTexture("airchestunlocked",0);
AIRCHESTOmesh.importFromFile(__dir__+"models/treasurechest_opened.obj","obj",null);
IDRegistry.genBlockID("airchestOpen");
Block.createBlock("airchestOpen", [
    {name: "Air Chest", texture: [["airchestunlocked", 0]], inCreative: true}
]);
var AIRCHESTOrender = new ICRender.Model();
AIRCHESTOrender.addEntry(new BlockRenderer.Model(AIRCHESTOmesh));
BlockRenderer.setStaticICRender(BlockID.airchestOpen,0,AIRCHESTOrender);

Block.registerDropFunction("airchestOpen", function(coords,item, block){
var region = BlockSource.getCurrentWorldGenRegion();
for(var i = 0; i <= randomInt(3, 6); i ++) {
 var drop = getDropItem(AIR_RANDOM_DROP);
    region.spawnDroppedItem(coords.relative.x + Math.random(), coords.relative.y + 0.3, coords.relative.z + Math.random(), drop.id, 1, drop.data);
    item.id--;
    if(!item.count){item.id = 0;}
        return drop;    
     } 
});

//DUSKEN

var DUSKENCHESTmesh = new RenderMesh();
DUSKENCHESTmesh.setBlockTexture("duskenchest",0);
DUSKENCHESTmesh.importFromFile(__dir__+"models/treasurechest.obj","obj",null);
IDRegistry.genBlockID("duskenchest");
Block.createBlock("duskenchest", [
    {name: "Dusken Chest", texture: [["duskenchest", 0]], inCreative: true}
]);
var DUSKENCHESTrender = new ICRender.Model();
DUSKENCHESTrender.addEntry(new BlockRenderer.Model(DUSKENCHESTmesh));
BlockRenderer.setStaticICRender(BlockID.airchest,0,DUSKENCHESTrender);

Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
let tsu = BlockSource.getDefaultForActor(player);
  var coords = coords.relative;
 if(item.id == 0 && tsu.getBlockId(coords.x,coords.y,coords.z)==BlockID.duskenchest){ 
  tsu.destroyBlock(coords.x,coords.y,coords.z);
   tsu.setBlock(coords.x,coords.y,coords.z,BlockID.duskenchestOpen,0);      
}});

var DUSKENCHESTOmesh = new RenderMesh();
DUSKENCHESTOmesh.setBlockTexture("duskenchestunlocked",0);
DUSKENCHESTOmesh.importFromFile(__dir__+"models/treasurechest_opened.obj","obj",null);
IDRegistry.genBlockID("duskenchestOpen");
Block.createBlock("duskenchestOpen", [
    {name: "Dusken Chest", texture: [["duskenchestunlocked", 0]], inCreative: true}
]);
var DUSKENCHESTOrender = new ICRender.Model();
DUSKENCHESTOrender.addEntry(new BlockRenderer.Model(DUSKENCHESTOmesh));
BlockRenderer.setStaticICRender(BlockID.duskenchestOpen,0,DUSKENCHESTOrender);

Block.registerDropFunction("duskenchestOpen", function(coords,item, block){
var region = BlockSource.getCurrentWorldGenRegion();
 for(var i = 0; i <= randomInt(3, 6); i ++) {
 var drop = getDropItem(DUSKEN_RANDOM_DROP);
    region.spawnDroppedItem(coords.relative.x + Math.random(), coords.relative.y + 0.3, coords.relative.z + Math.random(), drop.id, 1, drop.data);
    item.id--;
    if(!item.count){item.id = 0;}
        return drop;    
     }  
}); 


//IVORACK
IDRegistry.genBlockID("IvorakBricks");
IDRegistry.genBlockID("IvorakBricksFrozen");
IDRegistry.genBlockID("chiseledIvorakBricks");
IDRegistry.genBlockID("IvorakWall");
IDRegistry.genBlockID("IvorakWallFrozen");

Block.createBlock("IvorakBricks", [
    {name: "Ivorak Bricks", texture: [["ivorackbricks", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
Block.createBlock("IvorakBricksFrozen", [
    {name: "Ivorak Bricks Frozen", texture: [["ivorackbricksicy", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
Block.createBlock("chiseledIvorakBricks", [
    {name: "Chiseled Ivorak Bricks", texture: [["chiseledivorack", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
Block.createBlock("IvorakWall", [
    {name: "Ivorak Wall", texture: [["ivorackbricks", 0]], inCreative: true}
], BLOCK_TYPE_WALL);
Block.createBlock("IvorakWallFrozen", [
    {name: "Ivorak Wall Frozen", texture: [["ivorackbricksicy", 0]], inCreative: true}
], BLOCK_TYPE_WALL);

ToolAPI.registerBlockMaterial(BlockID.IvorakBricks, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.IvorakBricksFrozen, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.chiseledIvorakBricks, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.IvorakWall, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.IvorakWallFrozen, "stone", 2, true);

IDRegistry.genBlockID("IvorakBricksSlab");
IDRegistry.genBlockID("IvorakBricksSlabDouble");
IDRegistry.genBlockID("IvorakBricksFrozenSlab");
IDRegistry.genBlockID("IvorakBricksFrozenSlabDouble");

BaseBlocks.createSlab("IvorakBricksSlab", [
    {name: "Ivorak Bricks Slab", texture: [
        ["ivorackbricks", 0], ["ivorackbricks", 0], ["ivorackbricks", 0]
    ], inCreative: true}
], BLOCK_TYPE_SLAB, BlockID.IvorakBricksSlabDouble);
BaseBlocks.createSlab("IvorakBricksFrozenSlab", [
    {name: "Ivorak Bricks Slab", texture: [
        ["ivorackbricks", 0], ["ivorackbricks", 0], ["ivorackbricks", 0]
    ], inCreative: true}
], BLOCK_TYPE_SLAB, BlockID.IvorakBricksFrozenSlabDouble);
BaseBlocks.createSlab("IvorakBricksSlabDouble", [
    {name: "Ivorak Bricks Slab", texture: [["ivorackbricks", 0]], inCreative: true}
], BLOCK_TYPE_SLAB, BlockID.IvorakBricksSlabDouble);
BaseBlocks.createSlab("IvorakBricksFrozenSlabDouble", [
    {name: "Ivorak Bricks Slab", texture: [["ivorackbricks", 0]], inCreative: true}
], BLOCK_TYPE_SLAB, BlockID.IvorakBricksFrozenSlabDouble);

Block.createBlock("IvorakBricksSlabDouble", [
    {name: "Ivorak Brick Slab", texture: [
        ["ivorackbricks", 0], ["ivorackbricks", 0], ["ivorackbricks", 0]
    ], inCreative: false}
], BLOCK_TYPE_SLAB);
Block.createBlock("IvorakBricksFrozenSlabDouble", [
    {name: "Ivorak Cobblestone Slab", texture: [["ivorackbricks", 0]], inCreative: false}
], BLOCK_TYPE_SLAB);

ToolAPI.registerBlockMaterial(BlockID.IvorakBricksSlab, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.IvorakBricksSlabDouble, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.IvorakBricksFrozenSlab, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.IvorakBricksFrozenSlabDouble, "stone", 2, true);

//FRONE

IDRegistry.genBlockID("FroneBricks");
IDRegistry.genBlockID("chiseledFroneBricks");
IDRegistry.genBlockID("FroneBricksWall");

Block.createBlock("FroneBricks", [
    {name: "Frone Bricks", texture: [["fronebricks", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
Block.createBlock("chiseledFroneBricks", [
    {name: "Chiseled Frone Bricks", texture: [["chiseledfrone", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
Block.createBlock("FroneBricksWall", [
    {name: "Frone Wall", texture: [["fronebricks", 0]], inCreative: true}
], BLOCK_TYPE_WALL);

ToolAPI.registerBlockMaterial(BlockID.FroneBricks, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.chiseledFroneBricks, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.FroneBricksWall, "stone", 2, true);

IDRegistry.genBlockID("FroneBricksSlab");
IDRegistry.genBlockID("FroneBricksSlabDouble");

BaseBlocks.createSlab("FroneBricksSlab", [
    {name: "Frone Bricks Slab", texture: [
        ["fronebricks", 0], ["fronebricks", 0], ["fronebricks", 0]
    ], inCreative: true}
], BLOCK_TYPE_SLAB, BlockID.FroneBricksSlabDouble);
BaseBlocks.createSlab("FroneBricksSlabDouble", [
    {name: "Frone Bricks Slab", texture: [["fronebricks", 0]], inCreative: true}
], BLOCK_TYPE_SLAB, BlockID.FroneBricksSlabDouble);

Block.createBlock("FroneBricksSlabDouble", [
    {name: "Frone Brick Slab", texture: [
        ["fronebricks", 0], ["fronebricks", 0], ["fronebricks", 0]
    ], inCreative: false}
], BLOCK_TYPE_SLAB);

ToolAPI.registerBlockMaterial(BlockID.FroneBricksSlab, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.FroneBricksSlabDouble, "stone", 2, true);

IDRegistry.genBlockID("NecicePlane");
Block.createBlock("NecicePlane", [{name: "Necice Plane", texture: [["coldictethint", 0]],inCreative: false}], BLOCK_TYPE_PLANE);

IDRegistry.genItemID("NecicePlane");
Item.createItem("NecicePlane", "Necice Plane", {name: "coldictethint"});

Item.registerUseFunction("NecicePlane", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.NecicePlane);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
});  
     

IDRegistry.genBlockID("CageDeco");
Block.createBlock("CageDeco", [{name: "Cage Decorative", texture: [["cage", 0]],inCreative: true}], {sound: "metal"});

/*Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimeID) {
if(dimeID != Xenoculus.id) return; 
var region = BlockSource.getCurrentWorldGenRegion();
var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 72, coords.z);
if (World.getBiome(chunkX * 16, chunkZ * 16) == BIOME_CORALSWAMP.id) { 
  if (coords.y > 80 && random.nextFloat() < .01 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.dirtGryss) {
smallIv.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
  }
  if (coords.y > 80 && random.nextFloat() < .01 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.dirtGryss) {
mediuIv.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
  }
  if (coords.y > 80 && random.nextFloat() < .005 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.dirtGryss) {
TowerIv.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
  }   
  if (coords.y > 80 && random.nextFloat() < .005 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.dirtGryss) {
smallFr.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
  }   
}});*/


Callback.addCallback("PostLoaded", function(){
    //ivorack
    //Recipes.addFurnace(BlockID.darklandsStoneCobblestone, BlockID.darklandsStone, 0);
    addShapedRecipe(BlockID.IvorakBricksSlab, 6, 0, ["sss"], ['s', BlockID.dirtGryss, 0]);
    addShapedRecipe(BlockID.IvorakBricksSlabDouble, 4, 0, ["ss", "ss"], ['s', BlockID.dirtGryss, 0]);
    //Recipes.addFurnace(BlockID.darklandsStoneBricks, 0, BlockID.crackedDarklandsStoneBricks, 0);
    addShapedRecipe(BlockID.IvorakBricksFrozenSlab, 6, 0, ["sss"], ['s', BlockID.dirtGryss, 0]);
    addShapedRecipe(BlockID.IvorakBricksFrozenSlabDouble, 4, 0, ["ss", "ss"], ['s', BlockID.dirtGryss, 0]);
    addShapedRecipe(BlockID.chiseledIvorakBricks, 1, 0, ["s", "s"], ['s', BlockID.dirtGryss, 0]);
    addShapedRecipe(BlockID.IvorakWall, 6, 0, ["sss", "sss"], ['s', BlockID.dirtGryss, 0]); 
    addShapedRecipe(BlockID.IvorakWallFrozen, 6, 0, ["sss", "sss"], ['s', BlockID.dirtGryss, 0]); 
    //frone
    addShapedRecipe(BlockID.FroneBricksSlab, 6, 0, ["sss"], ['s', BlockID.Frone, 0]);
    addShapedRecipe(BlockID.FroneBricksSlabDouble, 4, 0, ["ss", "ss"], ['s', BlockID.Frone, 0]);
    addShapedRecipe(BlockID.chiseledFroneBricks, 1, 0, ["s", "s"], ['s', BlockID.Frone, 0]);
    addShapedRecipe(BlockID.FroneBricksWall, 6, 0, ["sss", "sss"], ['s', BlockID.Frone, 0]); 
});




// file: blocks/generation.js

//SPIKES

//NECICE

IDRegistry.genBlockID("xeiceSpikesS");
Block.createBlock("xeiceSpikesS", [
    {name: "Ice Spikes", texture: [["icespikesmsall", 0]], inCreative: false}], BLOCK_TYPE_SPIKE_ICE);
ToolAPI.registerBlockMaterial(BlockID.xeiceSpikesS, "plant");

IDRegistry.genItemID("xeiceSpikesS");
Item.createItem("xeiceSpikesS", "Ice Spikes", {name: "icespikesmsall"});

Item.registerUseFunction("xeiceSpikesS", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.xeiceSpikesS);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
});
TileRenderer.setCropModel(BlockID.xeiceSpikesS, 0, 6);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 34) return;
  if(random.nextFloat() < .6)
   for(let i=0; i<randomInt(2, 7); i++){
  World.setBlock(coords.x,coords.y+1,coords.z,BlockID.xeiceSpikesS,0); 
}});

Block.registerDropFunction("xeiceSpikesS", function(coords, blockID){
     return [[ItemID.NeciceSh, 1, 0]];
});


IDRegistry.genBlockID("xeiceSpikesM");
Block.createBlock("xeiceSpikesM", [
    {name: "Ice Spikes", texture: [["icespikesmedium", 0]], inCreative: false}], BLOCK_TYPE_SPIKE_ICE);
ToolAPI.registerBlockMaterial(BlockID.xeiceSpikesM, "plant");

IDRegistry.genItemID("xeiceSpikesM");
Item.createItem("xeiceSpikesM", "Ice Spikes", {name: "icespikesmedium"});

Item.registerUseFunction("xeiceSpikesM", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.xeiceSpikesM);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
});
TileRenderer.setCropModel(BlockID.xeiceSpikesM, 0, 12);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 45) return;
  if(random.nextFloat() < .3){
   for(let i=0; i<randomInt(2, 7); i++){
  World.setBlock(coords.x,coords.y+1,coords.z,BlockID.xeiceSpikesM,0); 
  }
}});

Block.registerDropFunction("xeiceSpikesM", function(coords, blockID){
     return [[ItemID.NeciceSh, randomInt(1, 3), 0]];
});


IDRegistry.genBlockID("xeiceSpikesB");
Block.createBlock("xeiceSpikesB", [
    {name: "Ice Spikes", texture: [["icespikeslarge", 0]], inCreative: false}], BLOCK_TYPE_SPIKE_ICE);
ToolAPI.registerBlockMaterial(BlockID.xeiceSpikesB, "plant");

IDRegistry.genItemID("xeiceSpikesB");
Item.createItem("xeiceSpikesB", "Ice Spikes", {name: "icespikeslarge"});

Item.registerUseFunction("xeiceSpikesB", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.xeiceSpikesB);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
});
TileRenderer.setCropModel(BlockID.xeiceSpikesB, 0, 16);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 45) return;
  if(random.nextFloat() < .3){
   for(let i=0; i<randomInt(2, 7); i++){
  World.setBlock(coords.x,coords.y+1,coords.z,BlockID.xeiceSpikesB,0); 
  }
}});

Block.registerDropFunction("xeiceSpikesB", function(coords, blockID){ 
     return [[ItemID.NeciceSh, randomInt(1, 5), 0]];
});


IDRegistry.genBlockID("xeiceSpikesGb");
Block.createBlock("xeiceSpikesGb", [
    {name: "Ice Spikes", texture: [["gianticespikebottom", 0]], inCreative: false}], BLOCK_TYPE_SPIKE_ICE);
ToolAPI.registerBlockMaterial(BlockID.xeiceSpikesGb, "plant");

IDRegistry.genBlockID("xeiceSpikesGt");
Block.createBlock("xeiceSpikesGt", [
    {name: "Ice Spikes", texture: [["gianticespiketop", 0]], inCreative: false}], BLOCK_TYPE_SPIKE_ICE);
ToolAPI.registerBlockMaterial(BlockID.xeiceSpikesGt, "plant");

IDRegistry.genItemID("xeiceSpikesGb");
Item.createItem("xeiceSpikesGb", "Ice Spikes", {name: "gianticespiketop"});

Item.registerUseFunction("xeiceSpikesGb", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.xeiceSpikesGb);  
        region.setBlock(place.x, place.y + 1, place.z, BlockID.xeiceSpikesGt);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
});
TileRenderer.setCropModel(BlockID.xeiceSpikesGb, 0, 16);
TileRenderer.setCropModel(BlockID.xeiceSpikesGt, 0, 16);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 38) return;
  if(random.nextFloat() < .25){
   for(let i=0; i<randomInt(1, 2); i++){
  World.setBlock(coords.x,coords.y+1,coords.z,BlockID.xeiceSpikesGb,0); 
   World.setBlock(coords.x,coords.y+2,coords.z,BlockID.xeiceSpikesGt,0); 
   }
}});

Block.registerDropFunction("xeiceSpikesGb", function(coords, blockID){ 
    return [[ItemID.NeciceSh, randomInt(3, 5), 0]];
});

Block.registerDropFunction("xeiceSpikesGt", function(coords, blockID){
    return [[ItemID.NeciceSh, randomInt(3, 5), 0]];
});

//MANUARTZ

IDRegistry.genBlockID("Manuartz"); 
Block.createBlock("Manuartz", [
    {name: "Manuartz", texture: [["manuartzblock", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Block.setDestroyTime(BlockID.Manuartz, 3);
ToolAPI.registerBlockMaterial(BlockID.Manuartz, "stone", 2, true);


IDRegistry.genBlockID("manuartzSpikesS");
Block.createBlock("manuartzSpikesS", [
    {name: "Manuartz Spikes", texture: [["manuartzstage", 1]], inCreative: false}], BLOCK_TYPE_SPIKE_ICE);
ToolAPI.registerBlockMaterial(BlockID.manuartzSpikesS, "plant");

IDRegistry.genItemID("manuartzSpikesS");
Item.createItem("manuartzSpikesS", "Manuartz Spikes", {name: "manuartzstage", meta: 1});

Item.registerUseFunction("manuartzSpikesS", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.manuartzSpikesS);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
});
TileRenderer.setPlantModel(BlockID.enchFungus, 0, "manuartzstage", 1);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 35) return;
  if(random.nextFloat() < .6 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.Frone)
   for(let i=0; i<randomInt(1, 4); i++){
  World.setBlock(coords.x,coords.y+1,coords.z,BlockID.manuartzSpikesS,0); 
}});

Block.registerDropFunction("manuartzSpikesS", function(coords, blockID){
    return [[ItemID.manuartzSpikesS, 1, 0]];
});


IDRegistry.genBlockID("manuartzSpikesM");
Block.createBlock("manuartzSpikesM", [
    {name: "Manuartz Spikes", texture: [["manuartzstage", 2]], inCreative: false}], BLOCK_TYPE_SPIKE_ICE);
ToolAPI.registerBlockMaterial(BlockID.manuartzSpikesM, "plant");

IDRegistry.genItemID("manuartzSpikesM");
Item.createItem("manuartzSpikesM", "Manuartz Spikes", {name: "manuartzstage", meta: 2});

Item.registerUseFunction("manuartzSpikesM", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.manuartzSpikesM);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
});
TileRenderer.setPlantModel(BlockID.manuartzSpikesM, 0, "manuartzstage", 2);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 35) return;
  if(random.nextFloat() < .3 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.Frone){
   for(let i=0; i < 3; i++){
  World.setBlock(coords.x,coords.y+1,coords.z,BlockID.manuartzSpikesM,0); 
  }
}});

Block.registerDropFunction("manuartzSpikesM", function(coords, blockID){ 
  return [[ItemID.manuartzSpikesM, randomInt(1, 2), 0]];
});


IDRegistry.genBlockID("manuartzSpikesB");
Block.createBlock("manuartzSpikesB", [
    {name: "Manuartz Spikes", texture: [["manuartzstage", 3]], inCreative: false}], BLOCK_TYPE_SPIKE_ICE);
ToolAPI.registerBlockMaterial(BlockID.manuartzSpikesB, "plant");

IDRegistry.genItemID("manuartzSpikesB");
Item.createItem("manuartzSpikesB", "Manuartz Spikes", {name: "manuartzstage", meta: 3});

Item.registerUseFunction("manuartzSpikesB", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.manuartzSpikesB);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
});
TileRenderer.setPlantModel(BlockID.manuartzSpikesB, 0, "manuartzstage", 3);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 35) return;
  if(random.nextFloat() < .3 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.Frone){
   for(let i=0; i < 1; i++){
  World.setBlock(coords.x,coords.y+1,coords.z,BlockID.manuartzSpikesB,0); 
  }
}});

Block.registerDropFunction("manuartzSpikesB", function(coords, blockID){ 
    return [[ItemID.manuartzSpikesB, randomInt(1, 2), 0]];
});




// file: dimension/xenoculus.js

var Xenoculus = new Dimensions.CustomDimension("Xenoculus", 1899);
Xenoculus.setSkyColor(.25, .25, 1.12);
Xenoculus.setFogColor(.25, .3, 1.15);

Xenoculus.setGenerator(Dimensions.newGenerator({
    layers: [{
        minY: 0,
        maxY: 256,
        yConversion: [
              [0, -.5], [.3, -.245], [.245, -.1], [.234, -.1], [1, -.6]
        ],
        material: {
            base: BlockID.Frone,
            surface: {
                id: BlockID.dirtGryss,
                data: 0,
                width: 4
            },
            cover: BlockID.grassblockGryss
        },
        noise: {
            octaves: {
                count: 4,
                scale: [128, 40],
                weight_factor: 3,
                weight: 1.2
            }
        }
    }]
}));

/*const XEBlock = new PortalUtils.PortalBlock("xenoculusPortal", ["fulsportal", 0], {type: "v-plane", frameId: 174}, {to: Xenoculus.id}, false);

const XEShape = new PortalShape()
    .setPortalId(BlockID.xenoculusPortal)
    .setFrameIds(174)
    .setMinSize(2, 3)
    .makeNormalTransfer(0, Xenoculus.id)
    .makeDestroyEvent();
    

Callback.addCallback("tick", function(){
Logger.Flush();    
});  
*/
Item.registerUseFunction(ItemID.AncientDust, function(coords, item, block, player){
Dimensions.transfer(player, Xenoculus.id);     
});

Callback.addCallback("PostLoaded", function(){
    Recipes.addFurnace(BlockID.oreIronFrone, 265, 0); 
    Recipes.addFurnace(BlockID.oreNorthositFrone, ItemID.northositLp, 0); 
});




