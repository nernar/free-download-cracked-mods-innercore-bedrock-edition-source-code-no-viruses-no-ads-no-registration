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