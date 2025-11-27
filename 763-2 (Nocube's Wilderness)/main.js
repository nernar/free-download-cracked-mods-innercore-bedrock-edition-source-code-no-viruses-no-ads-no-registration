/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 7
*/



// file: food.js

function randomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
IMPORT("ToolLib");
IMPORT("TileRender");

ToolAPI.addToolMaterial("forester", {durability: 200, level: 2, efficiency: 1, damage: 4, enchantability: 4});
IDRegistry.genItemID("foresters");
Item.createItem("foresters", "Forester Knife", {name: "forester_knife", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.foresters, count: 1, data: 0}, [
 "oco",
 "odo"
], ["c", 268, 0, "d", 318, 0]);
ToolLib.setTool(ItemID.foresters, "forester", ToolType.sword);

//BERRIES
IDRegistry.genItemID("blueberries");
Item.createFoodItem("blueberries", "Blueberries", {name: "blueberry"},{isTech:false,food: 1});


IDRegistry.genItemID("blueberryPips");
Item.createFoodItem("blueberryPips", "Blueberry Pips", {name: "blueberry_pips"},{isTech:false,food: 1});

IDRegistry.genItemID("raspberry");
Item.createFoodItem("raspberry", "Raspberry", {name: "raspberry"},{isTech:false,food: 2});


IDRegistry.genItemID("raspberryPips");
Item.createFoodItem("raspberryPips", "Raspberry Pips", {name: "raspberry_pips"},{isTech:false,food: 1});

IDRegistry.genItemID("lingonberry");
Item.createFoodItem("lingonberry", "Lingonberry", {name: "lingonberry"},{isTech:false,food: 1});


IDRegistry.genItemID("lingonberryPips");
Item.createFoodItem("lingonberryPips", "Lingonberry Pips", {name: "lingonberry_pips"},{isTech:false,food: 1});

Recipes.addShapeless({id: ItemID.blueberryPips, count: 1, data: 0}, [{id: ItemID.blueberries, data: 0}]);
Recipes.addShapeless({id: ItemID.raspberryPips, count: 1, data: 0}, [{id: ItemID.raspberry, data: 0}]);
Recipes.addShapeless({id: ItemID.lingonberryPips, count: 1, data: 0}, [{id: ItemID.lingonberry, data: 0}]);





//JEMS
IDRegistry.genItemID("sweetJam");
Item.createFoodItem("sweetJam", "Sweet Berry Jam", {name: "sweet_berry_jam"},{isTech:false,food: 3});
Recipes.addFurnace(477, ItemID.sweetJam, 0);

IDRegistry.genItemID("blueberryJam");
Item.createFoodItem("blueberryJam", "Blueberries Jam", {name: "blueberry_jam"},{isTech:false,food: 3});
Recipes.addFurnace(ItemID.blueberries, ItemID.blueberryJam, 0);

IDRegistry.genItemID("raspberryJam");
Item.createFoodItem("raspberryJam", "Raspberry Jam", {name: "raspberry_jam"},{isTech:false,food: 3});
Recipes.addFurnace(ItemID.raspberry, ItemID.raspberryJam, 0);

IDRegistry.genItemID("lingonberryJam");
Item.createFoodItem("lingonberryJam", "Lingonberry Jam", {name: "lingonberry_jam"},{isTech:false,food: 3});
Recipes.addFurnace(ItemID.lingonberry, ItemID.lingonberryJam, 0);

IDRegistry.genItemID("mixedJam");
Item.createFoodItem("mixedJam", "Mixed Jam", {name: "mixed_berry_jam"},{isTech:false,food: 8});
Recipes.addShaped({id: ItemID.mixedJam, count: 1, data: 0}, [
 "acb",
 "odo"
], ["a", ItemID.sweetJam, 0, "c", ItemID.blueberryJam, 0, "b", ItemID.raspberryJam, 0, "d", ItemID.lingonberryJam, 0]);


//BREAD
IDRegistry.genItemID("sweetBread");
Item.createFoodItem("sweetBread", "Sweet Berry Bread", {name: "sweet_berry_bread"},{isTech:false,food: 8});
Recipes.addShapeless({id: ItemID.sweetBread, count: 1, data: 0}, [{id: ItemID.sweetJam, data: 0}, {id: 297, data: 0}]);

IDRegistry.genItemID("blueberryBread");
Item.createFoodItem("blueberryBread", "Blueberry Bread", {name: "blueberry_bread"},{isTech:false,food: 8});
Recipes.addShapeless({id: ItemID.blueberryBread, count: 1, data: 0}, [{id: ItemID.blueberryJam, data: 0}, {id: 297, data: 0}]);

IDRegistry.genItemID("raspberryBread");
Item.createFoodItem("raspberryBread", "Raspberry Bread", {name: "raspberry_bread"},{isTech:false,food: 8});
Recipes.addShapeless({id: ItemID.raspberryBread, count: 1, data: 0}, [{id: ItemID.raspberryJam, data: 0}, {id: 297, data: 0}]);

IDRegistry.genItemID("lingonberryBread");
Item.createFoodItem("lingonberryBread", "Lingonberry Bread", {name: "lingonberry_bread"},{isTech:false,food: 8});
Recipes.addShapeless({id: ItemID.lingonberryBread, count: 1, data: 0}, [{id: ItemID.lingonberryJam, data: 0}, {id: 297, data: 0}]);

IDRegistry.genItemID("mixedBread");
Item.createFoodItem("mixedBread", "Mixed Bread", {name: "mixed_berry_bread"},{isTech:false,food: 9});
Recipes.addShapeless({id: ItemID.mixedBread, count: 1, data: 0}, [{id: ItemID.mixedJam, data: 0}, {id: 297, data: 0}]);

//PANCKAKES
IDRegistry.genItemID("Panckakes");
Item.createFoodItem("Panckakes", "Honey Panckakes", {name: "pancakes"},{isTech:false,food: 8});
Recipes.addShapeless({id: ItemID.Panckakes, count: 1, data: 0}, [{id: 296, data: 0}, {id: 353, data: 0}]);

IDRegistry.genItemID("honeyPanckakes");
Item.createFoodItem("honeyPanckakes", "Honey Panckakes", {name: "honey_pancakes"},{isTech:false,food: 8});
Recipes.addShapeless({id: ItemID.honeyPanckakes, count: 3, data: 0}, [{id: ItemID.Panckakes, data: 0}, {id: ItemID.Panckakes, data: 0}, {id: ItemID.Panckakes, data: 0}, {id: 280, data: 0}]);

IDRegistry.genItemID("sweetPanckakes");
Item.createFoodItem("sweetPanckakes", "Berry Panckakes", {name: "berry_pancakes"},{isTech:false,food: 8});
Recipes.addShapeless({id: ItemID.sweetPanckakes, count: 3, data: 0}, [{id: ItemID.honeyPanckakes, data: 0}, {id: ItemID.honeyPanckakes, data: 0}, {id: ItemID.honeyPanckakes, data: 0}, {id: ItemID.mixedJam, data: 0}]);

//PIES 
IDRegistry.genItemID("sweetPie");
Item.createFoodItem("sweetPie", "Sweet Berry Panckakes", {name: "sweet_berry_pie"},{isTech:false,food: 10});
Recipes.addShapeless({id: ItemID.sweetPie, count: 1, data: 0}, [{id: ItemID.sweetJam, data: 0}, {id: 344, data: 0}, {id: 296, data: 0}, {id: 296, data: 0}]);

IDRegistry.genItemID("blueberryPie");
Item.createFoodItem("blueberryPie", "Blueberry Panckakes", {name: "blueberry_pie"},{isTech:false,food: 10});
Recipes.addShapeless({id: ItemID.blueberryPie, count: 3, data: 0}, [{id: ItemID.blueberryJam, data: 0}, {id: 344, data: 0}, {id: 296, data: 0}, {id: 296, data: 0}]);

IDRegistry.genItemID("raspberryPie");
Item.createFoodItem("raspberryPie", "Raspberry Panckakes", {name: "raspberry_pie"},{isTech:false,food: 10});
Recipes.addShapeless({id: ItemID.raspberryPie, count: 3, data: 0}, [{id: ItemID.raspberryJam, data: 0}, {id: 344, data: 0}, {id: 296, data: 0}, {id: 296, data: 0}]);

IDRegistry.genItemID("lingonberryPie");
Item.createFoodItem("lingonberryPie", "Lingonberry Panckakes", {name: "lingonberry_pie"},{isTech:false,food: 10});
Recipes.addShapeless({id: ItemID.lingonberryPie, count: 3, data: 0}, [{id: ItemID.lingonberryJam, data: 0}, {id: 344, data: 0}, {id: 296, data: 0}, {id: 296, data: 0}]);

//OTHER
IDRegistry.genItemID("meatSweeted");
Item.createFoodItem("meatSweeted", "Lingonberry Ham", {name: "lingonberry_glazed_ham"},{isTech:false,food: 16});
Recipes.addShapeless({id: ItemID.meatSweeted, count: 1, data: 0}, [{id: ItemID.lingonberry, data: 0}, {id: 320, data: 0}, {id: 296, data: 0}]);

IDRegistry.genItemID("blueberryMuffin");
Item.createFoodItem("blueberryMuffin", "Lingonberry Muffin", {name: "blueberry_muffin"},{isTech:false,food: 16});
Recipes.addShapeless({id: ItemID.blueberryMuffin, count: 1, data: 0}, [{id: ItemID.lingonberry, data: 0}, {id: 320, data: 0}, {id: 296, data: 0}]);

IDRegistry.genItemID("raspberryCookie");
Item.createFoodItem("raspberryCookie", "Raspberry Cookie", {name: "raspberry_cookie"},{isTech:false,food: 7});
Recipes.addShapeless({id: ItemID.raspberryCookie, count: 3, data: 0}, [{id: ItemID.raspberryJam, data: 0}, {id: 344, data: 0}, {id: 296, data: 0}]);

//SHROOMS
IDRegistry.genBlockID("boletus"); 
Block.createBlock("boletus", [
{name: "Boletus", texture: [["boletus", 0]],inCreative: true}]); 
TileRenderer.setPlantModel(BlockID.boletus, 0, "boletus", 0);

IDRegistry.genItemID("boletus");
Item.createItem("boletus", "Boletus", {name: "boletus", meta: 0}, {stack: 64});

IDRegistry.genItemID("boletusCooked");
Item.createFoodItem("boletusCooked", "Boletus Cooked", {name: "cooked_boletus"},{isTech:false,food: 6});
Recipes.addShapeless({id: ItemID.boletusCooked, count: 1, data: 0}, [{id: ItemID.boletus, data: 0}]);

IDRegistry.genItemID("boletusStew");
Item.createFoodItem("boletusStew", "Boletus Stew", {name: "boletus_stew"},{isTech:false,food: 8});
Recipes.addShapeless({id: ItemID.boletusStew, count: 3, data: 0}, [{id: 281, data: 0}, {id: ItemID.boletus, data: 0}, {id: ItemID.boletus, data: 0}]);
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
var coords = Entity.getPosition(player);
if(Entity.getCarriedItem(player).id==ItemID.boletusStew){
World.drop(coords.x + 0.5, coords.y + 0.1, coords.z + 0.5, 281, 1, 0)
}});

IDRegistry.genBlockID("chanterelle"); 
Block.createBlock("chanterelle", [
{name: "Chanterelle", texture: [["chanterelle", 0]],inCreative: true}]); 
TileRenderer.setPlantModel(BlockID.chanterelle, 0, "chanterelle", 0);

IDRegistry.genItemID("chanterelle");
Item.createItem("chanterelle", "Chanterelle", {name: "chanterelle", meta: 0}, {stack: 64});

IDRegistry.genItemID("chanterelleCooked");
Item.createFoodItem("chanterelleCooked", "Chanterelle Cooked", {name: "cooked_chanterelle"},{isTech:false,food: 6});
Recipes.addShapeless({id: ItemID.chanterelleCooked, count: 1, data: 0}, [{id: ItemID.chanterelle, data: 0}]);

IDRegistry.genItemID("chanterelleStew");
Item.createFoodItem("chanterelleStew", "Boletus Stew", {name: "chanterelle_stew"},{isTech:false,food: 8});
Recipes.addShapeless({id: ItemID.chanterelleStew, count: 3, data: 0}, [{id: 281, data: 0}, {id: ItemID.chanterelle, data: 0}, {id: ItemID.chanterelle, data: 0}]);
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
var coords = Entity.getPosition(player);
if(Entity.getCarriedItem(player).id==ItemID.chanterelleStew){
World.drop(coords.x + 0.5, coords.y + 0.1, coords.z + 0.5, 281, 1, 0)
}});

Block.registerDropFunction("boletus", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.boletus, 1, 0);
});
Block.registerDropFunction("chanterelle", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.chanterelle, 1, 0);
});




// file: Translation.js





// file: blocks/plants.js

var BLOCK_TYPE_PLANT = Block.createSpecialType({
    base: 18,
    solid: false,
    destroytime: 0.1,
    explosionres: 1,
    renderlayer: 1,
    lightopacity: 1,
    translucency: 0.5,
    sound: "grass"
});

//WICKER
IDRegistry.genBlockID("wickerBlock"); 
Block.createBlock("wickerBlock", [
{name: "Wicker Block", texture: [["wicker_block", 0]],inCreative: true}]); 

Callback.addCallback('PostLoaded', function () {
Recipes.addShaped({id: BlockID.wickerBlock, count: 2, data: 0}, [
 "ccc",
 "coc",
 "ccc"
], ["c", ItemID.brichBark, 0]);
});

//SEDGE
IDRegistry.genBlockID("sedgeBlock"); 
Block.createBlock("sedgeBlock", [
{name: "Sedge Block", texture: [["sedge", 0]],inCreative: true}]); 
TileRenderer.setPlantModel(BlockID.sedgeBlock, 0, "sedge", 0);

IDRegistry.genBlockID("sedgeBlockSafe"); 
Block.createBlock("sedgeBlockSafe", [
{name: "Sedge Block", texture: [["sedge", 0]],inCreative: true}]); 
TileRenderer.setPlantModel(BlockID.sedgeBlockSafe, 0, "sedge", 0);

IDRegistry.genItemID("sedgeBlock");
Item.createItem("sedgeBlock", "Sedge", {name: "sedge", meta: 0}, {stack: 64});

IDRegistry.genItemID("sedgeBlockSafe");
Item.createItem("sedgeBlockSafe", "Sedge", {name: "sedge_safe", meta: 0}, {stack: 64});

Block.registerEntityInsideFunction(BlockID.sedgeBlock, function(blockCoords, id, entity){   
  if(Entity.getPosition(entity) == blockCoords){
   Game.message("working");
     Entity.damageEntity(entity, 1);
     }
}); 

IDRegistry.genBlockID("sedgeBlockp");
Block.createBlock("sedgeBlockp", [
    {name: "Sedge Block", texture: [["sedge_tall_bottom", 0], ["sedge_tall_bottom", 0], ["sedge_tall_bottom", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.sedgeBlockp, "plant");

IDRegistry.genBlockID("sedgeBlockpSafe");
Block.createBlock("sedgeBlockpSafe", [
    {name: "Sedge Block", texture: [["sedge_tall_bottom", 0], ["sedge_tall_bottom", 0], ["sedge_tall_bottom", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.sedgeBlockpSafe, "plant");

IDRegistry.genItemID("sedgeBlockp");
Item.createItem("sedgeBlockp", "Sedge Block", {name: "sedge_tall_bottom"});

Item.registerUseFunction("sedgeBlockp", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==2){ 
        region.setBlock(place.x, place.y, place.z, BlockID.sedgeBlockp);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
TileRenderer.setPlantModel(BlockID.sedgeBlockp, 0, "sedge_tall_bottom", 0);
TileRenderer.setPlantModel(BlockID.sedgeBlockpSafe, 0, "sedge_tall_bottom", 0);

IDRegistry.genBlockID("sedgeBlockt");
Block.createBlock("sedgeBlockt", [
    {name: "Sedge Block", texture: [["sedge_tall_top", 0], ["sedge_tall_top", 0], ["sedge_tall_top", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.sedgeBlockt, "plant");

IDRegistry.genBlockID("sedgeBlocktSafe");
Block.createBlock("sedgeBlocktSafe", [
    {name: "Sedge Block", texture: [["sedge_tall_top", 0], ["sedge_tall_top", 0], ["sedge_tall_top", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.sedgeBlocktSafe, "plant");

IDRegistry.genItemID("sedgeBlockt");
Item.createItem("sedgeBlockt", "Sedge Block", {name: "sedge_tall_top"});

IDRegistry.genItemID("sedgeBlocktSafe");
Item.createItem("sedgeBlocktSafe", "Sedge Block", {name: "sedge_tall_safe"});

Item.registerUseFunction("sedgeBlockt", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)== BlockID.sedgeBlockp){ 
        region.setBlock(place.x, place.y, place.z, BlockID.sedgeBlockt);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
   if(region.getBlockId(place.x,place.y-1,place.z)== 2){ 
        region.setBlock(place.x, place.y + 1, place.z, BlockID.sedgeBlockt);  
        region.setBlock(place.x, place.y, place.z, BlockID.sedgeBlockp);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    }  
});
 
Item.registerUseFunction("sedgeBlocktSafe", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)== BlockID.sedgeBlockpSafe){ 
        region.setBlock(place.x, place.y, place.z, BlockID.sedgeBlocktSafe);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
   if(region.getBlockId(place.x,place.y-1,place.z)== 2){ 
        region.setBlock(place.x, place.y + 1, place.z, BlockID.sedgeBlocktSafe);  
        region.setBlock(place.x, place.y, place.z, BlockID.sedgeBlockpSafe);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    }  
});
TileRenderer.setPlantModel(BlockID.sedgeBlockt, 0, "sedge_tall_top", 0);
TileRenderer.setPlantModel(BlockID.sedgeBlocktSafe, 0, "sedge_tall_bottom", 0);

Block.registerEntityInsideFunction(BlockID.sedgeBlockt, function(blockCoords, id, entity){   
  if(Entity.getPosition(entity) == blockCoords){
     Entity.damageEntity(entity, 1);
     }
});

Block.registerEntityInsideFunction(BlockID.sedgeBlockp, function(blockCoords, id, entity){   
  if(Entity.getPosition(entity) == blockCoords){
     Entity.damageEntity(entity, 1);
     }
});

Block.registerDropFunction("sedgeBlockp", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.sedgeBlockp, 1, 0);
});
Block.registerDropFunction("sedgeBlockt", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.sedgeBlockt, 1, 0);
});
Block.registerDropFunction("sedgeBlock", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.sedgeBlock, 1, 0);
});

Callback.addCallback("ItemUse",function(coords, item, block, caused, player) {
var regi = BlockSource.getCurrentWorldGenRegion();   
  if (regi.getBlockId(coords.x, coords.y, coords.z) == BlockID.sedgeBlock && Entity.getCarriedItem(player).id == 341) {
     regi.destroyBlock(coords.x, coords.y, coords.z,false);    
     regi.setBlock(coords.x, coords.y, coords.z, BlockID.sedgeBlockSafe, 0);     
   }
  if (regi.getBlockId(coords.x, coords.y, coords.z) == BlockID.sedgeBlockp && Entity.getCarriedItem(player).id == 341) {
     regi.destroyBlock(coords.x, coords.y, coords.z,false);     
     regi.setBlock(coords.x, coords.y, coords.z, BlockID.sedgeBlockpSafe, 0);     
   
   }
  if (regi.getBlockId(coords.x, coords.y, coords.z) == BlockID.sedgeBlockt && Entity.getCarriedItem(player).id == 341) {
     regi.destroyBlock(coords.x, coords.y, coords.z,false);     
     regi.setBlock(coords.x, coords.y, coords.z, BlockID.sedgeBlocktSafe, 0);     
   }
});

//BUSHES
IDRegistry.genBlockID("blueberryBushmicro");
Block.createBlock("blueberryBushmicro", [
    {name: "Blueberry Pips", texture: [["blueberry_bush", 1], ["blueberry_bush", 1], ["blueberry_bush", 1]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.blueberryBushmicro, "plant");
TileRenderer.setPlantModel(BlockID.blueberryBushmicro, 0, "blueberry_bush", 1);

Block.registerDropFunction("blueberryBushmicro", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.foulBerryPips, 1, 0);
});

Block.setRandomTickCallback(BlockID.blueberryBushmicro, function(x, y, z, id, data){   
let regi = BlockSource.getCurrentWorldGenRegion();   
  if(regi.getBlockId(coords.x, coords.y - 1, coords.z) == 2){
      regi.destroyBlock(coords.x, coords.y, coords.z,false);                      
  regi.setBlock(coords.x, coords.y, coords.z, BlockID.blueberryBushmini, 0); 
     }
}); 

IDRegistry.genBlockID("blueberryBushmini");
Block.createBlock("blueberryBushmini", [
    {name: "Blueberry Pips", texture: [["blueberry_bush", 2], ["blueberry_bush", 2], ["blueberry_bush", 2]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.blueberryBushmini, "plant");
TileRenderer.setPlantModel(BlockID.blueberryBushmini, 0, "blueberry_bush", 2);

Block.registerDropFunction("blueberryBushmini", function(){ 
  return [];
});

Block.setRandomTickCallback(BlockID.blueberryBushmini, function(x, y, z, id, data){   
let regi = BlockSource.getCurrentWorldGenRegion();   
  if(regi.getBlockId(coords.x, coords.y - 1, coords.z) == 2){
      regi.destroyBlock(coords.x, coords.y, coords.z,false);                      
  regi.setBlock(coords.x, coords.y, coords.z, BlockID.blueberryBush, 0); 
     }
}); 

IDRegistry.genBlockID("blueberryBush");
Block.createBlock("blueberryBush", [
    {name: "Blueberry Pips", texture: [["foul_berry_bush_stage", 3], ["foul_berry_bush_stage", 3], ["foul_berry_bush_stage", 3]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.blueberryBush, "plant");
TileRenderer.setPlantModel(BlockID.blueberryBush, 0, "blueberry_bush", 3);

Block.registerDropFunction("blueberryBush", function(){ 
  return [];
});

Block.setRandomTickCallback(BlockID.blueberryBush, function(x, y, z, id, data){   
let regi = BlockSource.getCurrentWorldGenRegion();   
  if(regi.getBlockId(coords.x, coords.y - 1, coords.z) == 2){
      regi.destroyBlock(coords.x, coords.y, coords.z,false);                      
  regi.setBlock(coords.x, coords.y, coords.z, BlockID.blueberryBushBerried, 0); 
     }
}); 

IDRegistry.genBlockID("blueberryBushBerried");
Block.createBlock("blueberryBushBerried", [
    {name: "Blueberry Pips", texture: [["blueberry_bush", 4], ["blueberry_bush", 4], ["blueberry_bush", 4]], inCreative: true}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.blueberryBushBerried, "plant");
TileRenderer.setPlantModel(BlockID.blueberryBushBerried, 0, "blueberry_bush", 4);

Block.registerDropFunction("blueberryBushBerried", function(){ 
  return [[ItemID.blueberries, randomInt(1, 3), 0]];
});

Item.registerUseFunction(ItemID.blueberryPips, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == 2) {
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.blueberryBushmicro, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
});

IDRegistry.genBlockID("sweetberryGiant");
Block.createBlock("sweetberryGiant", [
    {name: "Sweetberry Giant", texture: [["giant_sweet_berry_bottom", 0], ["giant_sweet_berry_top", 0], ["giant_sweet_berry_side", 0]], inCreative: true}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.sweetberryGiant, "plant");
Callback.addCallback('PostLoaded', function () {
Recipes.addShaped({id: BlockID.sweetberryGiant, count: 1, data: 0}, [
 "ccc",
 "cac",
 "ccc"
], ["c", 477, 0, "a", 858, 0]);
Recipes.addShapeless({id: 477, count: 9, data: 0}, [{id: BlockID.sweetberryGiant, data: 0}]);
});

IDRegistry.genBlockID("blueberryGiant");
Block.createBlock("blueberryGiant", [
    {name: "Raspberry Giant", texture: [["giant_blueberry_bottom", 0], ["giant_blueberry_top", 0], ["giant_blueberry_side", 0]], inCreative: true}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.blueberryGiant, "plant");
Callback.addCallback('PostLoaded', function () {
Recipes.addShaped({id: BlockID.blueberryGiant, count: 1, data: 0}, [
 "ccc",
 "cac",
 "ccc"
], ["c", ItemID.blueberries, 0, "a", 858, 0]);
Recipes.addShapeless({id: ItemID.blueberries, count: 9, data: 0}, [{id: BlockID.blueberryGiant, data: 0}]);
});


//RASPBERRY
IDRegistry.genBlockID("raspberryBushmicro");
Block.createBlock("raspberryBushmicro", [
    {name: "Raspberry Pips", texture: [["raspberry_bush", 1], ["raspberry_bush", 1], ["raspberry_bush", 1]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.raspberryBushmicro, "plant");
TileRenderer.setPlantModel(BlockID.raspberryBushmicro, 0, "raspberry_bush", 1);

Block.registerDropFunction("raspberryBushmicro", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.foulBerryPips, 1, 0);
});

Block.setRandomTickCallback(BlockID.raspberryBushmicro, function(x, y, z, id, data){   
let regi = BlockSource.getCurrentWorldGenRegion();   
  if(regi.getBlockId(coords.x, coords.y - 1, coords.z) == 2){
      regi.destroyBlock(coords.x, coords.y, coords.z,false);                      
  regi.setBlock(coords.x, coords.y, coords.z, BlockID.raspberryBushmini, 0); 
     }
}); 

IDRegistry.genBlockID("raspberryBushmini");
Block.createBlock("raspberryBushmini", [
    {name: "Raspberry Bush", texture: [["raspberry_bush", 2], ["raspberry_bush", 2], ["raspberry_bush", 2]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.raspberryBushmini, "plant");
TileRenderer.setPlantModel(BlockID.raspberryBushmini, 0, "raspberry_bush", 2);

Block.registerDropFunction("raspberryBushmini", function(){ 
  return [];
});

Block.setRandomTickCallback(BlockID.raspberryBushmini, function(x, y, z, id, data){   
let regi = BlockSource.getCurrentWorldGenRegion();   
  if(regi.getBlockId(coords.x, coords.y - 1, coords.z) == 2){
      regi.destroyBlock(coords.x, coords.y, coords.z,false);                      
  regi.setBlock(coords.x, coords.y, coords.z, BlockID.raspberryBush, 0); 
     }
}); 

IDRegistry.genBlockID("raspberryBush");
Block.createBlock("raspberryBush", [
    {name: "Raspberry Bush", texture: [["raspberry_bush", 3], ["raspberry_bush", 3], ["raspberry_bush", 3]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.raspberryBush, "plant");
TileRenderer.setPlantModel(BlockID.raspberryBush, 0, "raspberry_bush", 3);

Block.registerDropFunction("raspberryBush", function(){ 
  return [];
});

Block.setRandomTickCallback(BlockID.raspberryBush, function(x, y, z, id, data){   
let regi = BlockSource.getCurrentWorldGenRegion();   
  if(regi.getBlockId(coords.x, coords.y - 1, coords.z) == 2){
      regi.destroyBlock(coords.x, coords.y, coords.z,false);                      
  regi.setBlock(coords.x, coords.y, coords.z, BlockID.raspberryBushBerried, 0); 
     }
}); 

IDRegistry.genBlockID("raspberryBushBerried");
Block.createBlock("raspberryBushBerried", [
    {name: "Raspberry Bush", texture: [["raspberry_bush", 4], ["raspberry_bush", 4], ["raspberry_bush", 4]], inCreative: true}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.raspberryBushBerried, "plant");
TileRenderer.setPlantModel(BlockID.raspberryBushBerried, 0, "raspberry_bush", 4);

Block.registerDropFunction("raspberryBushBerried", function(){ 
  return [[ItemID.raspberry, randomInt(1, 3), 0]];
});

Item.registerUseFunction(ItemID.raspberryPips, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == 2) {
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.raspberryBushmicro, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
});

IDRegistry.genBlockID("raspberryGiant");
Block.createBlock("raspberryGiant", [
    {name: "Raspberry Giant", texture: [["giant_raspberry_bottom", 0], ["giant_raspberry_top", 0], ["giant_raspberry_side", 0]], inCreative: true}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.raspberryGiant, "plant");
Callback.addCallback('PostLoaded', function () {
Recipes.addShaped({id: BlockID.raspberryGiant, count: 1, data: 0}, [
 "ccc",
 "cac",
 "ccc"
], ["c", ItemID.raspberry, 0, "a", 858, 0]);
Recipes.addShapeless({id: ItemID.raspberry, count: 9, data: 0}, [{id: BlockID.raspberryGiant, data: 0}]);
});


//LINGONBERRY
IDRegistry.genBlockID("lingonberryBushmicro");
Block.createBlock("lingonberryBushmicro", [
    {name: "Lingonberry Pips", texture: [["lingonberry_bush", 1], ["lingonberry_bush", 1], ["lingonberry_bush", 1]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.lingonberryBushmicro, "plant");
TileRenderer.setPlantModel(BlockID.lingonberryBushmicro, 0, "lingonberry_bush", 1);

Block.registerDropFunction("lingonberryBushmicro", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.foulBerryPips, 1, 0);
});

Block.setRandomTickCallback(BlockID.lingonberryBushmicro, function(x, y, z, id, data){   
let regi = BlockSource.getCurrentWorldGenRegion();   
  if(regi.getBlockId(coords.x, coords.y - 1, coords.z) == 2){
      regi.destroyBlock(coords.x, coords.y, coords.z,false);                      
  regi.setBlock(coords.x, coords.y, coords.z, BlockID.lingonberryBushmini, 0); 
     }
}); 

IDRegistry.genBlockID("lingonberryBushmini");
Block.createBlock("lingonberryBushmini", [
    {name: "Lingonberry Bush", texture: [["lingonberry_bush", 2], ["lingonberry_bush", 2], ["lingonberry_bush", 2]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.lingonberryBushmini, "plant");
TileRenderer.setPlantModel(BlockID.lingonberryBushmini, 0, "lingonberry_bush", 2);

Block.registerDropFunction("lingonberryBushmini", function(){ 
  return [];
});

Block.setRandomTickCallback(BlockID.lingonberryBushmini, function(x, y, z, id, data){   
let regi = BlockSource.getCurrentWorldGenRegion();   
  if(regi.getBlockId(coords.x, coords.y - 1, coords.z) == 2){
      regi.destroyBlock(coords.x, coords.y, coords.z,false);                      
  regi.setBlock(coords.x, coords.y, coords.z, BlockID.lingonberryBush, 0); 
     }
}); 

IDRegistry.genBlockID("lingonberryBush");
Block.createBlock("lingonberryBush", [
    {name: "Lingonberry Bush", texture: [["lingonberry_bush", 3], ["lingonberry_bush", 3], ["lingonberry_bush", 3]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.lingonberryBush, "plant");
TileRenderer.setPlantModel(BlockID.lingonberryBush, 0, "lingonberry_bush", 3);

Block.registerDropFunction("lingonberryBush", function(){ 
  return [];
});

Block.setRandomTickCallback(BlockID.lingonberryBush, function(x, y, z, id, data){   
let regi = BlockSource.getCurrentWorldGenRegion();   
  if(regi.getBlockId(coords.x, coords.y - 1, coords.z) == 2){
      regi.destroyBlock(coords.x, coords.y, coords.z,false);                      
  regi.setBlock(coords.x, coords.y, coords.z, BlockID.lingonberryBushBerried, 0); 
     }
}); 

IDRegistry.genBlockID("lingonberryBushBerried");
Block.createBlock("lingonberryBushBerried", [
    {name: "Lingonberry Bush", texture: [["lingonberry_bush", 4], ["lingonberry_bush", 4], ["lingonberry_bush", 4]], inCreative: true}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.lingonberryBushBerried, "plant");
TileRenderer.setPlantModel(BlockID.lingonberryBushBerried, 0, "lingonberry_bush", 4);

Block.registerDropFunction("lingonberryBushBerried", function(){ 
  return [[ItemID.lingonberry, randomInt(1, 3), 0]];
});

Item.registerUseFunction(ItemID.lingonberryPips, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == 2) {
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.lingonberryBushmicro, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
});

IDRegistry.genBlockID("lingonberryGiant");
Block.createBlock("lingonberryGiant", [
    {name: "Lingonberry Giant", texture: [["giant_lingonberry_bottom", 0], ["giant_lingonberry_top", 0], ["giant_lingonberry_side", 0]], inCreative: true}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.lingonberryGiant, "plant");
Callback.addCallback('PostLoaded', function () {
Recipes.addShaped({id: BlockID.lingonberryGiant, count: 1, data: 0}, [
 "ccc",
 "cac",
 "ccc"
], ["c", ItemID.lingonberry, 0, "a", 858, 0]);
Recipes.addShapeless({id: ItemID.lingonberry, count: 9, data: 0}, [{id: BlockID.lingonberryGiant, data: 0}]);
});


//CLICK_ON_BUSHES
Callback.addCallback("ItemUse",function(coords, item, block, caused, player) {
var regi = BlockSource.getCurrentWorldGenRegion();   
  if (regi.getBlockId(coords.x, coords.y, coords.z) == BlockID.blueberryBushBerried) {
     regi.destroyBlock(coords.x, coords.y, coords.z,false);    
     regi.setBlock(coords.x, coords.y, coords.z, BlockID.blueberryBush, 0);     
     World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.blueberries, randomInt(1, 4), 0);  
   }
  if (regi.getBlockId(coords.x, coords.y, coords.z) == BlockID.raspberryBushBerried) {
     regi.destroyBlock(coords.x, coords.y, coords.z,false);     
     regi.setBlock(coords.x, coords.y, coords.z, BlockID.raspberryBush, 0);     
     World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.raspberry, randomInt(1, 4), 0);   
   }
  if (regi.getBlockId(coords.x, coords.y, coords.z) == BlockID.lingonberryBushBerried) {
     regi.destroyBlock(coords.x, coords.y, coords.z,false);     
     regi.setBlock(coords.x, coords.y, coords.z, BlockID.lingonberryBush, 0);     
     World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.lingonberry, randomInt(1, 4), 0);   
   }
});

ToolAPI.addToolMaterial("grasssw", {durability: 99, level: 2, efficiency: 3, damage: 5, enchantability: 14});
IDRegistry.genItemID("grassSword");
Item.createItem("grassSword", "Grass Sword", {name: "grass_sword", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.grassSword, count: 1, data: 0}, [
 "oco",
 "oco",
 "odo"
], ["c", ItemID.sedgeBlock, 0, "d", 280, 0]);
ToolLib.setTool(ItemID.grassSword, "grasssw", ToolType.sword);

Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
 if(Entity.getCarriedItem(attacker).id == ItemID.grassSword && Math.random() < .35){
    Entity.addEffect(victim, 19, 1, 60, true, true);    
    Entity.damageEntity(victim, 4);
     }
});




// file: blocks/shrooms.js

IMPORT("Structures");
IMPORT("StructuresAPI");

var BLOCK_TYPE_SHROOM = Block.createSpecialType({
    base: 99,
    solid: true,
    destroytime: 0.1,
    explosionres: 7,
    renderlayer: 2,
    translucency: 1,
    sound: "wood"
});

//BOLETUS
IDRegistry.genBlockID("boletusGiant");
Block.createBlock("boletusGiant", [
    {name: "Boletus Giant", texture: [["boletus_stem", 0], ["boletus_block", 0], ["boletus_block", 0]], inCreative: true}, BLOCK_TYPE_SHROOM]);
ToolAPI.registerBlockMaterial(BlockID.boletusGiant, "plant");

IDRegistry.genBlockID("boletusGiantStem");
Block.createBlock("boletusGiantStem", [
    {name: "Boletus Giant", texture: [["boletus_stem_inside", 0], ["boletus_stem_inside", 0], ["boletus_stem", 0]], inCreative: true}, BLOCK_TYPE_SHROOM]);
ToolAPI.registerBlockMaterial(BlockID.boletusGiantStem, "plant");

//CHANTERELLE
IDRegistry.genBlockID("chanterelleGiant");
Block.createBlock("chanterelleGiant", [
    {name: "Chanterelle Giant", texture: [["chanterelle_block", 0], ["chanterelle_hymenophore", 0], ["chanterelle_hymenophore", 0]], inCreative: true}, BLOCK_TYPE_SHROOM]);
ToolAPI.registerBlockMaterial(BlockID.chanterelleGiant, "plant");

IDRegistry.genBlockID("chanterelleGiantStem");
Block.createBlock("chanterelleGiantStem", [
    {name: "Chanterelle Giant", texture: [["chanterelle_block", 0], ["chanterelle_block", 0], ["chanterelle_hymenophore", 0]], inCreative: true}, BLOCK_TYPE_SHROOM]);
ToolAPI.registerBlockMaterial(BlockID.chanterelleGiantStem, "plant");

Callback.addCallback('PostLoaded', function () {
Recipes.addShaped({id: BlockID.boletusGiant, count: 1, data: 0}, [
 "ccc",
 "ccc",
 "ccc"
], ["c", ItemID.boletus, 0]);
Recipes.addShapeless({id: ItemID.boletus, count: 9, data: 0}, [{id: BlockID.boletusGiant, data: 0}]);

Recipes.addShaped({id: BlockID.chanterelleGiant, count: 1, data: 0}, [
 "ccc",
 "ccc",
 "ccc"
], ["c", ItemID.chanterelle, 0]);
Recipes.addShapeless({id: ItemID.chanterelle, count: 9, data: 0}, [{id: BlockID.chanterelleGiant, data: 0}]);
});

var GiantBoletus = new Structure("GiantBoletus");
var GiantChanterelle = new Structure("GiantChanterelle");


Callback.addCallback("ItemUse",function(coords, item, block, caused, player) {
var regi = BlockSource.getCurrentWorldGenRegion();   
 var rnd = new java.util.Random(); 
  if (regi.getBlockId(coords.x, coords.y, coords.z) == BlockID.boletus && Entity.getCarriedItem(player).id == 858) {
     regi.destroyBlock(coords.x, coords.y, coords.z,false);    
       GiantBoletus.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, rnd);    
   }
  if (regi.getBlockId(coords.x, coords.y, coords.z) == BlockID.chanterelle && Entity.getCarriedItem(player).id == 858) {
     regi.destroyBlock(coords.x, coords.y, coords.z,false);     
       GiantChanterelle.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, rnd);  
   }
});




// file: blocks/generation.js

//SHROOMS
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 74, coords.z);
  if (coords.y < 59 || World.getBiome(coords.x, coords.z) != 18 ) return;
   for(let i=0; i<randomInt(1, 5); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==2)
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.boletus,0); 
}});   

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 74, coords.z);
  if (coords.y < 59 || World.getBiome(coords.x, coords.z) != 27 ) return;
   for(let i=0; i<randomInt(1, 5); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==2)
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.chanterelle,0); 
}});   

//SEDGE
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 74, coords.z);
  if (coords.y < 59 || World.getBiome(coords.x, coords.z) != 1 ) return;
   for(let i=0; i<randomInt(1, 5); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==2)
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.sedgeBlock,0); 
}});  

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 74, coords.z);
  if (coords.y < 59 || World.getBiome(coords.x, coords.z) != 6 ) return;
   for(let i=0; i<randomInt(1, 5); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==2){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.sedgeBlockp,0);
World.setBlock(coords.x,coords.y+2,coords.z,BlockID.sedgeBlockt,0);
    }
}});

//BUSHES
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 74, coords.z);
  if (coords.y < 59 || World.getBiome(coords.x, coords.z) != 18 ) return;
   for(let i=0; i<randomInt(1, 4); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==2)
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.blueberryBushBerried,0); 
}});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 74, coords.z);
  if (coords.y < 59 || World.getBiome(coords.x, coords.z) != 6 ) return;
   for(let i=0; i<randomInt(1, 5); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==2)
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.blueberryBushBerried,0); 
}});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 74, coords.z);
  if (coords.y < 59 || World.getBiome(coords.x, coords.z) != 18 ) return;
   for(let i=0; i<randomInt(1, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==2)
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.raspberryBushBerried,0); 
}});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 74, coords.z);
  if (coords.y < 59 || World.getBiome(coords.x, coords.z) != 6 ) return;
   for(let i=0; i<randomInt(1, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==2)
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.lingonberryBushBerried,0); 
}});

//STRUCTURES
var MeadWalley = new Structure("MeadWalley");

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 74, coords.z);
  if (coords.y < 59 || World.getBiome(coords.x, coords.z) != 1 ) return;
 if(World.getBlockID(coords.x,coords.y,coords.z)==2 && random.nextFloat() < .03)
MeadWalley.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random);  
});




// file: blocks/pouch.js

IDRegistry.genBlockID("swetPouch");
Block.createBlockWithRotation("swetPouch",[{name:"Sweet Berry Pouch",texture:[["berry_pouch_closed",0],["sweetberry_pouch",0],["berry_pouch_side",0],["sweet_berry_pouch_side",0], ["berry_pouch_side", 0], ["berry_pouch_side", 0]],inCreative:true}]);

IDRegistry.genBlockID("blueberryPouch");
Block.createBlockWithRotation("blueberryPouch",[{name:"Blueberry Pouch",texture:[["berry_pouch_closed",0],["blueberry_pouch",0],["berry_pouch_side",0],["blueberry_pouch_side",0], ["berry_pouch_side", 0], ["berry_pouch_side", 0]],inCreative:true}]);

IDRegistry.genBlockID("raspberryPouch");
Block.createBlockWithRotation("raspberryPouch",[{name:"Raspberry Pouch",texture:[["berry_pouch_closed",0],["raspberry_pouch",0],["berry_pouch_side",0],["raspberry_pouch_side",0], ["berry_pouch_side", 0], ["berry_pouch_side", 0]],inCreative:true}]);

IDRegistry.genBlockID("lingonberryPouch");
Block.createBlockWithRotation("lingonberryPouch",[{name:"Lingonberry Pouch",texture:[["berry_pouch_closed",0],["lingonberry_pouch",0],["berry_pouch_side",0],["lingonberry_pouch_side",0], ["berry_pouch_side", 0], ["berry_pouch_side", 0]],inCreative:true}]);

Callback.addCallback('PostLoaded', function () {
Recipes.addShaped({id: BlockID.swetPouch, count: 1, data: 0}, [
 "ccc",
 "ccc",
 "ccc"
], ["c", 477, 0]);

Recipes.addShaped({id: BlockID.blueberryPouch, count: 1, data: 0}, [
 "ccc",
 "ccc",
 "ccc"
], ["c", ItemID.blueberries, 0]);

Recipes.addShaped({id: BlockID.raspberryPouch, count: 1, data: 0}, [
 "ccc",
 "ccc",
 "ccc"
], ["c", ItemID.raspberry, 0]);

Recipes.addShaped({id: BlockID.lingonberryPouch, count: 1, data: 0}, [
 "ccc",
 "ccc",
 "ccc"
], ["c", ItemID.lingonberry, 0]);
});




// file: armor.js

IDRegistry.genItemID("brichBark");
Item.createItem("brichBark", "Brich Bark", {name: "birch_bark", meta: 0}, {stack: 16});

Callback.addCallback("ItemUse",function(coords, item, block, caused, player) {
var regi = BlockSource.getCurrentWorldGenRegion();   
  if (regi.getBlockId(coords.x, coords.y, coords.z) == 17 && regi.getBlockData(coords.x, coords.y, coords.z) == 2) {
     if (Entity.getCarriedItem(player).id == ItemID.foresters) {
     //regi.destroyBlock(coords.x, coords.y, coords.z,false);    
     //regi.setBlock(coords.x, coords.y, coords.z, BlockID.blueberryBush, 0);     
     World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.brichBark, randomInt(1, 4), 0);  
       }
    }
});

IDRegistry.genItemID("bastShoes");
Item.createArmorItem("bastShoes", "Bast Shoes", {name: "bast_shoes"}, {type: "boots", armor: 1, durability: 340, texture: "armor/birch_layer_1.png", isTech: false});
Item.addRepairItemIds(ItemID.bastShoes, [ItemID.brichBark]);

Recipes.addShaped({id: ItemID.bastShoes, count: 1, data: 0}, [
 "coc",
 "coc"
], ["c", ItemID.brichBark, 0]);

IDRegistry.genItemID("toughTrousers");
Item.createArmorItem("toughTrousers", "Tough Trousers", {name: "tough_trousers"}, {type: "leggings", armor: 5, durability: 128, texture: "armor/grass_2.png", isTech: false});
Item.addRepairItemIds(ItemID.toughTrousers, [ItemID.sedgeBlock]);

Recipes.addShaped({id: ItemID.bastShoes, count: 1, data: 0}, [
 "aaa",
 "coc",
 "coc"
], ["a", ItemID.sedgeBlock, 0, "b", 334, 0]);

IDRegistry.genItemID("beekeeperHat");
Item.createArmorItem("beekeeperHat", "Barrel Helmet", {name: "beekeeper_hat"}, {type: "helmet", armor: 5, durability: 390, texture: "armor/beekeeper_layer_1.png", isTech: false});
Item.addRepairItemIds(ItemID.beekeeperHat, [287]);

/*Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
Game.message(Entity.getType(attacker));
});*/

Armor.registerOnHurtListener(ItemID.beekeeperHat, function(item, slot, player, value, type, attacker, bool1, bool2){
 if (Entity.getType(attacker) == 122) {
   Entity.clearEffect(player, 19);         
}});

Recipes.addShaped({id: ItemID.beekeeperHat, count: 1, data: 0}, [
 "oco",
 "cbc"
], ["c", 266, 0, "b", 287, 0]);

/*
IDRegistry.genItemID("barrelHelmet");
Item.createArmorItem("barrelHelmet", "Barrel Helmet", {name: "abyssalnite_helmet"}, {type: "helmet", armor: 3, durability: 385, texture: "armor/abyssalnite_1.png", isTech: false});
//Item.addRepairItemIds(ItemID.barrelHelmet, [ItemID.brichBark]);

IDRegistry.genItemID("barrelChestplate");
Item.createArmorItem("barrelChestplate", "Barrel Chestplate", {name: "abyssalnite_chestplate"}, {type: "chestplate", armor: 8, durability: 560, texture: "armor/abyssalnite_1.png", isTech: false});
//Item.addRepairItemIds(ItemID.barrelChestplate, [ItemID.sedgeBlock]);

Callback.addCallback('ItemUse', function (coords, item, block) {
Game.message("ID: " + item.id + " DATA: " + item.data);
});


Callback.addCallback('PostLoaded', function () {
Recipes.addShaped({id: ItemID.barrelHelmet, count: 1, data: 0}, [
 "aaa",
 "coc",
 "coc"
], ["a", ItemID.sedgeBlock, 0, "b", 334, 0]);


});*/




