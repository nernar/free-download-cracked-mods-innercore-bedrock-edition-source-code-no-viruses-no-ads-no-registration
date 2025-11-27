/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 9
*/



// file: header.js

function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
} 




// file: item.js

IDRegistry.genItemID("devilIngot");

Item.createItem("devilIngot", "Devil Ingot", {name: "devil_ingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("netherInk");

Item.createItem("netherInk", "Nether Ink", {name: "nether_ink", meta: 0}, {stack: 64});

IDRegistry.genItemID("soulStone");

Item.createItem("soulStone", "Soul Stone", {name: "soul_stone", meta: 0}, {stack: 64});

IDRegistry.genItemID("satanicStone");

Item.createItem("satanicStone", "Satanic Stone", {name: "satanic_stone", meta: 0}, {stack: 64});
Item.setGlint(ItemID.satanicStone, true);

IDRegistry.genItemID("runeCutter");

Item.createItem("runeCutter", "Rune Cutter", {name: "rune_cutter", meta: 0}, {stack: 16});
Item.setGlint(ItemID.runeCutter, true);

IDRegistry.genItemID("starOfNether");

Item.createItem("starOfNether", "Star Of Nether", {name: "star_of_nether", meta: 0}, {stack: 64});
Item.setGlint(ItemID.starOfNether, true);

IDRegistry.genItemID("soulIngot");

Item.createItem("soulIngot", "Soul Ingot", {name: "soul_ingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("blazeSpine");
Item.createFoodItem("blazeSpine", "Blaze Spine", {name: "blaze_spine", meta: 0}, {
isTech: false,
stack: 64,
food: 1
});

IDRegistry.genItemID("friedBlazeSpine");
Item.createFoodItem("friedBlazeSpine", "Fried Blaze Spine", {name: "fried_blaze_spine", meta: 0}, {
isTech: false,
stack: 64,
food: 20
});

Callback.addCallback("FoodEaten",function(heal, satRatio){ 
if(Player.getCarriedItem().id==ItemID.friedBlazeSpine){ 
Entity.addEffect(Player.get(), 10, 4, 5000, false,false); 
}});
Callback.addCallback("FoodEaten",function(heal, satRatio){ 
if(Player.getCarriedItem().id==ItemID.friedBlazeSpine){ 
Entity.addEffect(Player.get(), 5, 2, 5000, false,false); 
}});
Callback.addCallback("FoodEaten",function(heal, satRatio){ 
if(Player.getCarriedItem().id==ItemID.friedBlazeSpine){ 
Entity.addEffect(Player.get(), 1, 1, 5000, false,false); 
}});
Callback.addCallback("FoodEaten",function(heal, satRatio){ 
if(Player.getCarriedItem().id==ItemID.friedBlazeSpine){ 
Entity.addEffect(Player.get(), 11, 2, 5000, false,false); 
}});
Callback.addCallback("FoodEaten",function(heal, satRatio){ 
if(Player.getCarriedItem().id==ItemID.friedBlazeSpine){ 
Entity.addEffect(Player.get(), 12, 2, 5000, false,false); 
}});
Callback.addCallback("FoodEaten",function(heal, satRatio){ 
if(Player.getCarriedItem().id==ItemID.friedBlazeSpine){ 
Entity.addEffect(Player.get(), 21, 3, 5000, false,false); 
}});
Callback.addCallback("FoodEaten",function(heal, satRatio){ 
if(Player.getCarriedItem().id==ItemID.friedBlazeSpine){ 
Entity.addEffect(Player.get(), 22, 2, 5000, false,false); 
}});
Callback.addCallback("FoodEaten",function(heal, satRatio){ 
if(Player.getCarriedItem().id==ItemID.friedBlazeSpine){ 
Entity.addEffect(Player.get(), 16, 0, 5000, false,false); 
}});

IDRegistry.genItemID("devolin");

Item.createItem("devolin", "Devolin", {name: "devolin", meta: 0}, {stack: 64});

IDRegistry.genItemID("theBreathOfHell");

Item.createItem("theBreathOfHell", "The breath of hell", {name: "the_breath_of_hell", meta: 0}, {stack: 64});
Item.setGlint(ItemID.theBreathOfHell, true);




// file: block.js

IDRegistry.genBlockID("devilBlock");

Block.createBlock("devilBlock", [{name:"Devil Block", texture: [ 
["devil_block1", 0],  
["devil_block1", 0],  
["devil_block2", 0],  
["devil_block2", 0],  
["devil_block3", 0],  
["devil_block3", 0]   
], 
inCreative: true}]);

ToolAPI.registerBlockMaterial(BlockID.devilBlock, "stone");
Block.setDestroyTime(BlockID.devilBlock, 3);
Block.setDestroyLevel(BlockID.devilBlock, 4);




// file: craft/shaped.js

Recipes.addShaped({id: BlockID.devilBlock, count: 1, data: 0}, [
    "dad",
    "ada",
    "dad"
], ['a', ItemID.satanicStone, 0, 'd', 399, 0]);

Recipes.addShaped({id: ItemID.netherInk, count: 1, data: 0}, [
    "aba",
    "ada",
    "aaa"
], ['b', 372, 0, 'd', 351, 0]);

Recipes.addShaped({id: ItemID.runeCutter, count: 1, data: 0}, [
    "ava",
    "ada",
    "ava"
], ['d', ItemID.devilIngot, 0, 'v',ItemID.netherInk, 0]);

Recipes.addShaped({id: ItemID.satanicStone, count: 1, data: 0}, [
    "ava",
    "vdv",
    "ava"
], ['d', ItemID.soulStone, 0, 'v',ItemID.runeCutter, 0]);

Recipes.addShaped({id: ItemID.theBreathOfHell, count: 1, data: 0}, [
    "bdb",
    "dsd",
    "bdb"
], ['b', 372, 0, 'd',ItemID.netherInk, 0, 's', 437, 0]);

Recipes.addShaped({id: ItemID.soulIngot, count: 1, data: 0}, [
    "bdb",
    "dsd",
    "bdb"
], ['b',ItemID.starOfNether , 0, 'd',ItemID.netherInk, 0, 's', 265, 0]);

Recipes.addShaped({id: ItemID.starOfNether, count: 1, data: 0}, [
    "bdb",
    "dsd",
    "bdb"
], ['b',ItemID.theBreathOfHell, 0, 'd',ItemID.netherInk, 0, 's', 399, 0]);

Recipes.addShaped({id: ItemID.devilIngot, count: 1, data: 0}, [
    "bsb",
    "sds",
    "bsb"
], ['b',ItemID.starOfNether, 0, 'd',ItemID.soulIngot, 0, 's', 399, 0]);




// file: craft/furnace.js

Callback.addCallback('PostLoaded', function () { 
Recipes.addFurnace(BlockID.soulOre, ItemID.soulStone, 0);
Recipes.addFurnace(ItemID.blazeSpine, ItemID.friedBlazeSpine, 0);
});




// file: tools.js

IMPORT("ToolType");

IDRegistry.genItemID("devilSword");
IDRegistry.genItemID("devilAxe");
IDRegistry.genItemID("devilPickaxe");
IDRegistry.genItemID("devilShovel");
IDRegistry.genItemID("devilHoe");

Item.createItem("devilSword", "Devil Sword", {name: "devil_sword", meta: 0}, {stack: 1});
Item.createItem("devilAxe", "Devil Axe", {name: "devil_axe", meta: 0}, {stack: 1});
Item.createItem("devilPickaxe", "Devil Pickaxe", {name: "devil_pickaxe", meta: 0}, {stack: 1});
Item.createItem("devilShovel", "Devil Shovel", {name: "devil_shovel", meta: 0}, {stack: 1});
Item.createItem("devilHoe", "Devil Hoe", {name: "devil_hoe", meta: 0}, {stack: 1});

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.devilSword, count: 1, data: 0}, [
    " v ",
    "dvd",
    " a "
], ['d',ItemID.devilIngot, 0, 'v',BlockID.devilBlock, 0, 'a' , 280, 0]);
Recipes.addShaped({id: ItemID.devilAxe, count: 1, data: 0}, [
    "vvd",
    "va ",
    " a "
], ['d',ItemID.devilIngot, 0, 'v',BlockID.devilBlock, 0, 'a' , 280, 0]);
Recipes.addShaped({id: ItemID.devilPickaxe, count: 1, data: 0}, [
    "vvd",
    "da ",
    " a "
], ['d',ItemID.devilIngot, 0, 'v',BlockID.devilBlock, 0, 'a' , 280, 0]);
Recipes.addShaped({id: ItemID.devilShovel, count: 1, data: 0}, [
    " v ",
    "dad",
    " a "
], ['d',ItemID.devilIngot, 0, 'v',BlockID.devilBlock, 0, 'a' , 280, 0]);
Recipes.addShaped({id: ItemID.devilHoe, count: 1, data: 0}, [
    "vvd",
    " a",
    " a "
], ['d',ItemID.devilIngot, 0, 'v',BlockID.devilBlock, 0, 'a' , 280, 0]);
});

IMPORT("ToolType");

ToolAPI.addToolMaterial("devil", {
    durability: 15896,
    level: 4,
    efficiency: 50,
    damage: 40,
    enchantability: 14
});

ToolAPI.setTool(ItemID.devilSword, "devil", ToolType.sword);
ToolAPI.setTool(ItemID.devilAxe, "devil", ToolType.axe);
ToolAPI.setTool(ItemID.devilPickaxe, "devil", ToolType.pickaxe);
ToolAPI.setTool(ItemID.devilShovel, "devil", ToolType.shovel);
ToolAPI.setTool(ItemID.devilHoe, "devil", ToolType.hoe);





// file: ore.js

IDRegistry.genBlockID("soulOre");

Block.createBlock("soulOre", [{name:"Soul Stone Ore", texture: [["soul_ore", 0]], inCreative: true}]);

ToolAPI.registerBlockMaterial(BlockID.soulOre, "stone");
Block.setDestroyTime(BlockID.soulOre, 3);
Block.setDestroyLevel(BlockID.soulOre, 4);

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){ 
for(var i = 0; i < 38; i++){ 
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 150); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.soulOre, 0, randomInt(1, 6)); 
}});




// file: drop.js

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 43){
   var coords = Entity.getPosition(entity);
      var rad  = parseInt(Math.random() * 4);
      World.drop(coords.x, coords.y, coords.z, ItemID.blazeSpine, rad);
 }
});





// file: armor.js

IMPORT("HelperMod");

IDRegistry.genItemID("devilHelmet");
IDRegistry.genItemID("devilChestplate");
IDRegistry.genItemID("devilLeggings");
IDRegistry.genItemID("devilBoots");

ARMOR.setMode({
	id: ItemID.devilChestplate,
	type: [1],
	tick: function(){
       Player.setFlyingEnabled(true);
	}
});
Callback.addCallback("tick",function() {
    if(Player.getArmorSlot(1).id ==! ItemID.devilChestplate && !Game.getGameMode()){
	    Player.setFlyingEnabled(false);
    }
});

Item.createArmorItem("devilHelmet", "Devil Helmet", {name: "devil_helmet"}, {type: "helmet", armor: 4, durability: 2500, texture: "armor/devil_1.png"});
Item.createArmorItem("devilChestplate", "Devil Chestplate", {name: "devil_chestplate"}, {type: "chestplate", armor: 7, durability: 2500, texture: "armor/devil_1.png"});
Item.createArmorItem("devilLeggings", "Devil Leggings", {name: "devil_leggings"}, {type: "leggings", armor: 6, durability: 2500, texture: "armor/devil_2.png"});
Item.createArmorItem("devilBoots", "Devil Boots", {name: "devil_boots"}, {type: "boots", armor: 2, durability: 2500, texture: "armor/devil_1.png"});

Recipes.addShaped({id: ItemID.devilHelmet, count: 1, data: 0}, [
    "ddd",
    "x x"
], ['x', ItemID.devilIngot, 0, 'd', BlockID.devilBlock, 0]);

Recipes.addShaped({id: ItemID.devilChestplate, count: 1, data: 0}, [
    "d d",
    "dxd",
    "ddd"
], ['x', ItemID.devilIngot, 0, 'd', BlockID.devilBlock, 0]);

Recipes.addShaped({id: ItemID.devilLeggings, count: 1, data: 0}, [
    "dxd",
    "d d",
    "d d"
], ['x', ItemID.devilIngot, 0, 'd', BlockID.devilBlock, 0]);

Recipes.addShaped({id: ItemID.devilBoots, count: 1, data: 0}, [
    "d d",
    "x x"
], ['x', ItemID.devilIngot, 0, 'd', BlockID.devilBlock, 0]);




