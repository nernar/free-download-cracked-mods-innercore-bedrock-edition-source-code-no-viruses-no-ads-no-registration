//BERRYS
IDRegistry.genItemID("foulBerries");
Item.createFoodItem("foulBerries", "Foul Berries", {name: "foul_berries"},{isTech:false,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.foulBerries){
Entity.addEffect(pl, 19, 0, 180, false, false);
}});

IDRegistry.genItemID("foulBerryPips");
Item.createFoodItem("foulBerryPips", "Foul Berry Pips", {name: "foul_berry_pips"},{isTech:false,food: 2});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.foulBerryPips){
Entity.addEffect(pl, 19, 1, 180, false, false);
}});

IDRegistry.genItemID("blueBerries");
Item.createFoodItem("blueBerries", "Blue Berries", {name: "blue_berries"},{isTech:false,food: 4});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.blueBerries){
Entity.addEffect(pl, 10, 0, 80, false, false);
}});

IDRegistry.genItemID("poisonedBerries");
Item.createFoodItem("poisonedBerries", "Poisoned Berries", {name: "poisoned_berries"},{isTech:false,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.poisonedBerries){
Entity.addEffect(pl, 19, 2, 360, false, false);
Entity.addEffect(pl, 9, 1, 180, false, false);
}});

IDRegistry.genItemID("pumpkinBread");
Item.createFoodItem("pumpkinBread", "Pumpkin Bread", {name: "pumpkin_bread"},{isTech:false,food: 12});
Callback.addCallback("PostLoaded", function (){
Recipes.addShaped({id: ItemID.pumpkinBread, count: 2, data: 0}, [
    "ab"
], ['a', 86, 0, 'b', 344, 0]);
});


//DRINK
IDRegistry.genItemID("sapBottle");
Item.createFoodItem("sapBottle", "Sap Bottle", {name: "sap_bottle"},{isTech:false,food: 11});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
var Region = BlockSource.getDefaultForActor(pl);
if(Entity.getCarriedItem(pl).id == ItemID.sapBottle){
var crf = Entity.getPosition(pl);
Region.spawnDroppedItem(crf.x, crf.y, crf.z, 374, 1, 0);
}});

IDRegistry.genItemID("foulSoup");
Item.createFoodItem("foulSoup", "Foul Soup", {name: "foul_soup"},{isTech:false,food: 9});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
var Region = BlockSource.getDefaultForActor(pl);
if(Entity.getCarriedItem(pl).id == ItemID.foulSoup){
var crf = Entity.getPosition(pl);
ntity.addEffect(pl, 19, 1, 200, false, false);
Region.spawnDroppedItem(crf.x, crf.y, crf.z, 281, 1, 0);
}});
Recipes.addShaped({id: ItemID.foulSoup, count: 1, data: 0}, [
    "aa",
    "ba",
], ['a', ItemID.foulBerries, 0, 'b', 281, 0]);

Item.addCreativeGroup("food", Translation.translate("Food"), [ItemID.foulBerries, ItemID.foulBerryPips, ItemID.sapBottle, ItemID.foulSoup, ItemID.foulSou]);
Item.setCategory(ItemID.foulBerries, 2);
Item.setCategory(ItemID.foulBerryPips, 2);
Item.setCategory(ItemID.sapBottle, 2);
Item.setCategory(ItemID.foulSoup, 2);
Item.setCategory(ItemID.sapBottle, 2);

Callback.addCallback("ItemUse",function(coords, item, block, caused, player) {   
    var crd = coords.relative;
 var Region = BlockSource.getDefaultForActor(player); 
  if (Region.getBlockId(crd.x, crd.y, crd.z) == BlockID.mapleWood) {
   for(var j in axes) {
    if (item.id == axes[j]) {     
    Region.destroyBlock(crd.x, crd.y, crd.z, false);
    if(Math.random() < 0.32){
    Region.setBlock(crd.x, crd.y, crd.z, BlockID.mapleWoodSapping, 0);  
    } else  {
    Region.setBlock(crd.x, crd.y, crd.z, BlockID.mapleWoodStriped, 0);  
                 }
            }
       }
  }
});

Item.registerUseFunctionForID(374, function(coords, item, block, player) {
 var Region = BlockSource.getDefaultForActor(player); 
    if (block.id == BlockID.mapleWoodSapping) {  
        Region.destroyBlock(coords.x, coords.y, coords.z, false);
        Region.setBlock(coords.x, coords.y, coords.z, BlockID.mapleWoodStriped, block.data); 
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
       Region.spawnDroppedItem(coords.relative.x + 0.1, coords.relative.y, coords.relative.z + 0.1, ItemID.sapBottle, 1, 0);
    }
});

//BUSHES
IDRegistry.genBlockID("foulBushmicro");
Block.createBlock("foulBushmicro", [
    {name: "Foul Berry Pips", texture: [["foul_berry_bush_pips", 0], ["foul_berry_bush_pips", 0], ["foul_berry_bush_pips", 0]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBushmicro, "plant");
setPlantModel(BlockID.foulBushmicro, false);

Block.registerDropFunction("foulBushmicro", function(coords, blockID){ 
    return [[ItemID.foulBerryPips, randomInt(1, 3), 0]];
});

Block.setRandomTickCallback(BlockID.foulBushmicro, function(x, y, z, id, data){   
let regi = BlockSource.getCurrentWorldGenRegion();   
  if(regi.getBlockId(coords.x, coords.y - 1, coords.z) == 2){
      regi.destroyBlock(coords.x, coords.y, coords.z,false);                      
  regi.setBlock(coords.x, coords.y, coords.z, BlockID.foulBushmini, 0); 
     }
}); 

IDRegistry.genBlockID("foulBushmini");
Block.createBlock("foulBushmini", [
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 0], ["foul_berry_bush_stage", 0], ["foul_berry_bush_stage", 1]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBushmini, "plant");
setPlantModel(BlockID.foulBushmini, false);

Block.registerDropFunction("foulBushmini", function(){ 
  return [];
});

IDRegistry.genBlockID("foulBush");
Block.createBlock("foulBush", [
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 2], ["foul_berry_bush_stage", 2], ["foul_berry_bush_stage", 2]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBush, "plant");
setPlantModel(BlockID.foulBush, true);

Block.registerDropFunction("foulBush", function(){ 
  return [];
});

IDRegistry.genBlockID("foulBushTop");
Block.createBlock("foulBushTop", [
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 3], ["foul_berry_bush_stage", 3], ["foul_berry_bush_stage", 3]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBushTop, "plant");
setPlantModel(BlockID.foulBushTop, true);

Block.registerDropFunction("foulBushTop", function(){ 
  return [];
});

Block.registerEntityInsideFunction(BlockID.foulBushmini, function(coords, id, entity){
 var Region = BlockSource.getDefaultForActor(entity);    
  if(Region.getBlockId(coords.x, coords.y - 1, coords.z) == 2){
      Region.destroyBlock(coords.x, coords.y, coords.z,false);                      
  Region.setBlock(coords.x, coords.y, coords.z, BlockID.foulBush, 0); 
  Region.setBlock(coords.x, coords.y + 1, coords.z, BlockID.foulBushTop, 0); 
     }
});

IDRegistry.genBlockID("foulBerriedBush");
Block.createBlock("foulBerriedBush", [
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 4], ["foul_berry_bush_stage", 4], ["foul_berry_bush_stage", 4]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBerriedBush, "plant");
setPlantModel(BlockID.foulBerriedBush, true);

Block.registerDropFunction("foulBerriedBush", function(){ 
  return [[ItemID.foulBerries, randomInt(1, 3), 0]];
});

IDRegistry.genBlockID("foulBerriedBushTop");
Block.createBlock("foulBerriedBushTop", [
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 5], ["foul_berry_bush_stage", 5], ["foul_berry_bush_stage", 5]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBerriedBushTop, "plant");
setPlantModel(BlockID.foulBerriedBushTop, true);

Block.registerDropFunction("foulBerriedBush", function(){ 
  return [[ItemID.foulBerries, randomInt(1, 3), 0]];
});

Item.registerUseFunction(ItemID.foulBerryPips, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == 2) {
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.foulBushmicro, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
});

Block.setRandomTickCallback(BlockID.foulBush, function(x, y, z, id, data){   
var regi = BlockSource.getCurrentWorldGenRegion();   
  if(regi.getBlockId(coords.x, coords.y + 1, coords.z) == BlockID.foulBushTop){
      regi.destroyBlock(coords.x, coords.y, coords.z,false);   
      regi.destroyBlock(coords.x, coords.y + 1, coords.z,false);       
  regi.setBlock(coords.x, coords.y, coords.z, BlockID.foulBerriedBush, 0); 
  regi.setBlock(coords.x, coords.y + 1, coords.z, BlockID.foulBerriedBushTop, 0); 
     }
}); 

//bluberries
IDRegistry.genBlockID("blueBushmicro");
Block.createBlock("blueBushmicro", [
    {name: "Blue Berry Pips", texture: [["empty", 0], ["empty", 0], ["blue_berry_bush_stage", 0]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.blueBushmicro, "plant");
TileRenderer.setPlantModel(BlockID.blueBushmicro, 0, "blue_berry_bush_stage", 0);

Block.registerDropFunction("blueBushmicro", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.blueBerries, 1, 0);
});

Block.setRandomTickCallback(BlockID.blueBushmicro, function(x, y, z, id, data){   
let regi = BlockSource.getCurrentWorldGenRegion();   
  if(regi.getBlockId(coords.x, coords.y - 1, coords.z) == 2){
      regi.destroyBlock(coords.x, coords.y, coords.z,false);                      
  regi.setBlock(coords.x, coords.y, coords.z, BlockID.blueBushmini, 0); 
     }
}); 

IDRegistry.genBlockID("blueBushmini");
Block.createBlock("blueBushmini", [
    {name: "Blue Berry Bush", texture: [["empty", 0], ["empty", 0], ["blue_berry_bush_stage", 1]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.blueBushmini, "plant");
TileRenderer.setPlantModel(BlockID.blueBushmini, 0, "blue_berry_bush_stage", 1);

Block.registerDropFunction("blueBushmini", function(){ 
   return [];
});

Block.setRandomTickCallback(BlockID.blueBushmini, function(x, y, z, id, data){   
let regi = BlockSource.getCurrentWorldGenRegion();   
  if(regi.getBlockId(coords.x, coords.y - 1, coords.z) == 2){
      regi.destroyBlock(coords.x, coords.y, coords.z,false);                      
  regi.setBlock(coords.x, coords.y, coords.z, BlockID.blueBush, 0); 
     }
});

IDRegistry.genBlockID("blueBush");
Block.createBlock("blueBush", [
    {name: "Blue Berry Bush", texture: [["empty", 0], ["empty", 0], ["blue_berry_bush_stage", 2]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.blueBush, "plant");
TileRenderer.setPlantModel(BlockID.blueBush, 0, "blue_berry_bush_stage", 2);

Block.registerDropFunction("blueBush", function(){ 
   return [[ItemID.blueBerries, randomInt(1, 3), 0]];
});

Item.registerUseFunction(ItemID.blueBerries, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == 2) {
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.blueBushmicro, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
});


//poisonberries
IDRegistry.genItemID("poisonBushB");
Item.createItem("poisonBushB", "Poison Bush", {name: "poison_bottom", meta: 0}, {stack: 64});

Item.registerUseFunction(ItemID.poisonBushB, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == 2) {
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.poisonBushB, 0);
        region.setBlock(coords.relative.x, coords.relative.y + 1, coords.relative.z, BlockID.poisonBush, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
});

IDRegistry.genBlockID("poisonBushB");
Block.createBlock("poisonBushB", [
    {name: "Poison Bush", texture: [["poison_bottom", 0]], inCreative: true}
], BLOCK_TYPE_PLANT);
setPlantModel(BlockID.poisonBushB, true);

Block.registerDropFunction("poisonBushB", function(){ 
  return [[280, randomInt(1, 3), 0]];
});    

Callback.addCallback('DestroyBlock', function (coords, block, player) {
let region = BlockSource.getDefaultForActor(player);
if(block.id == BlockID.poisonBushB && region.getBlockId(coords.x, coords.y + 1, coords.z) == BlockID.poisonBush){
region.destroyBlock(coords.x, coords.y + 1, coords.z, true);             
     }
});

IDRegistry.genBlockID("poisonBush");
Block.createBlock("poisonBush", [
    {name: "Poison Bush", texture: [["poisoned_berry_leaves", 0]], inCreative: true}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.poisonBush, "plant");

Block.registerDropFunction("poisonBush", function(){ 
   return [[ItemID.poisonedBerries, randomInt(2, 5), 0]];
});

IDRegistry.genBlockID("poisonBushE");
Block.createBlock("poisonBushE", [
    {name: "Poison Bush", texture: [["poisoned_berry_leaves_e", 0]], inCreative: true}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.poisonBushE, "plant");

Block.registerDropFunction("poisonBushE", function(){ 
   return [];
});


Callback.addCallback("ItemUse",function(coords, item, block, caused, player) {
var regi = BlockSource.getCurrentWorldGenRegion();   
  if (regi.getBlockId(coords.x, coords.y, coords.z) == BlockID.foulBerriedBush) {
     regi.destroyBlock(coords.x, coords.y, coords.z,false);    
     regi.setBlock(coords.x, coords.y, coords.z, BlockID.foulBush, 0);     
     World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.foulBerries, randomInt(1, 4), 0);  
   }
  if (regi.getBlockId(coords.x, coords.y, coords.z) == BlockID.foulBerriedBushTop) {
     regi.destroyBlock(coords.x, coords.y, coords.z,false);     
     regi.setBlock(coords.x, coords.y, coords.z, BlockID.foulBushTop, 0);     
     World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.foulBerries, randomInt(1, 4), 0);   
   }
  if (regi.getBlockId(coords.x, coords.y, coords.z) == BlockID.blueBush) {
     regi.destroyBlock(coords.x, coords.y, coords.z,false);     
     regi.setBlock(coords.x, coords.y, coords.z, BlockID.blueBushmini, 0);     
     World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.blueBerries, randomInt(1, 4), 0);   
   }
  if (regi.getBlockId(coords.x, coords.y, coords.z) == BlockID.poisonBush) {
     regi.destroyBlock(coords.x, coords.y, coords.z,false);     
     regi.setBlock(coords.x, coords.y, coords.z, BlockID.poisonBushE, 0);     
     World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.poisonedBerries, randomInt(2, 5), 0);   
   }
});

ModAPI.addAPICallback("BetterFoliageLeaves", function(BetterFoliage) {
    BetterFoliage.setupLeavesModel(BlockID.mapleLeaves, -1, ["maple_leaves", 0]);
    BetterFoliage.setupLeavesModel(BlockID.mapleLeavesAu, -1, ["maple_leaves_autumn", 0]);
    BetterFoliage.setupLeavesModel(BlockID.mapleLeavesAuRed, -1, ["maple_leaves_red", 0]);
    BetterFoliage.setupLeavesModel(BlockID.mapleLeavesWhinter, -1, ["maple_leaves_whinter", 0]);
    BetterFoliage.setupLeavesModel(BlockID.mapleLeavesYellow, -1, ["maple_leaves_yellow", 0]);
    BetterFoliage.setupLeavesModel(BlockID.poisonBush, -1, ["poisoned_berry_leaves", 0]);
    BetterFoliage.setupLeavesModel(BlockID.poisonBushE, -1, ["poisoned_berry_leaves_e", 0]);
});