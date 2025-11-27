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

//DRINK
IDRegistry.genItemID("sapBottle");
Item.createFoodItem("sapBottle", "Sap Bottle", {name: "sap_bottle"},{isTech:false,food: 11});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.sapBottle){
var crf = Entity.getPosition(pl);
World.drop(crf.x, crf.y, crf.z, 374, 1, 0);
}});
Item.addCreativeGroup("food", Translation.translate("Food"), [ItemID.foulBerries, ItemID.foulBerryPips, ItemID.sapBottle]);
Item.setCategory(ItemID.foulBerries, 2);
Item.setCategory(ItemID.foulBerryPips, 2);
Item.setCategory(ItemID.sapBottle, 2);

Callback.addCallback("ItemUse",function(coords, item, block, caused, player) {   
    var crd = coords.relative;
  if (World.getBlockID(crd.x, crd.y, crd.z) == BlockID.mapleWood) {
   for(var j in axes) {
    if (item.id == axes[j]) {     
    World.destroyBlock(crd.x, crd.y, crd.z, false);
    if(Math.random() < 0.32){
    World.setBlock(crd.x, crd.y, crd.z, BlockID.mapleWoodSapping, 0);  
    } else  {
    World.setBlock(crd.x, crd.y, crd.z, BlockID.mapleWoodStriped, 0);  
                 }
            }
       }
  }
});

Item.registerUseFunctionForID(374, function(coords, item, block, player) {
    if (block.id == BlockID.mapleWoodSapping) {
        World.destroyBlock(coords.x, coords.y, coords.z, false);
        World.setBlock(coords.x, coords.y, coords.z, BlockID.mapleWoodStriped, 0); 
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
       World.drop(coords.relative.x + 0.1, coords.relative.y, coords.relative.z + 0.1, ItemID.sapBottle, 1, 0);
    }
});

//BUSHES
IDRegistry.genBlockID("foulBushmicro");
Block.createBlock("foulBushmicro", [
    {name: "Foul Berry Pips", texture: [["foul_berry_bush_pips", 0]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBushmicro, "plant");
TileRenderer.setPlantModel(BlockID.foulBushmicro, 0, "foul_berry_bush_pips", 0);

Block.registerDropFunction("foulBushmicro", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.foulBerryPips, 1, 0);
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
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 1]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBushmini, "plant");
TileRenderer.setPlantModel(BlockID.foulBushmini, 0, "foul_berry_bush_stage", 1);

Block.registerDropFunction("foulBushmini", function(){ 
  return [];
});

IDRegistry.genBlockID("foulBush");
Block.createBlock("foulBush", [
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 2]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBush, "plant");
TileRenderer.setPlantModel(BlockID.foulBush, 0, "foul_berry_bush_stage", 2);

Block.registerDropFunction("foulBush", function(){ 
  return [];
});

IDRegistry.genBlockID("foulBushTop");
Block.createBlock("foulBushTop", [
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 3]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBushTop, "plant");
TileRenderer.setPlantModel(BlockID.foulBushTop, 0, "foul_berry_bush_stage", 3);

Block.registerDropFunction("foulBushTop", function(){ 
  return [];
});

Block.setRandomTickCallback(BlockID.foulBushmini, function(x, y, z, id, data){   
  if(World.getBlockI(coords.x, coords.y - 1, coords.z) == 2){
      World.destroyBlock(coords.x, coords.y, coords.z,false);                      
  World.setBlock(coords.x, coords.y, coords.z, BlockID.foulBush, 0); 
  World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.foulBushTop, 0); 
     }
});

IDRegistry.genBlockID("foulBerriedBush");
Block.createBlock("foulBerriedBush", [
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 4]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBerriedBush, "plant");
TileRenderer.setPlantModel(BlockID.foulBerriedBush, 0, "foul_berry_bush_stage", 4);

Block.registerDropFunction("foulBerriedBush", function(){ 
  return [[ItemID.foulBerries, randomInt(1, 3), 0]];
});

IDRegistry.genBlockID("foulBerriedBushTop");
Block.createBlock("foulBerriedBushTop", [
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 5]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBerriedBushTop, "plant");
TileRenderer.setPlantModel(BlockID.foulBerriedBushTop, 0, "foul_berry_bush_stage", 5);

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

IDRegistry.genBlockID("blueBushmicro");
Block.createBlock("blueBushmicro", [
    {name: "Blue Berry Pips", texture: [["blue_berry_bush_stage", 0]], inCreative: false}, BLOCK_TYPE_PLANT]);
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
    {name: "Blue Berry Bush", texture: [["blue_berry_bush_stage", 1]], inCreative: false}, BLOCK_TYPE_PLANT]);
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
    {name: "Blue Berry Bush", texture: [["blue_berry_bush_stage", 2]], inCreative: false}, BLOCK_TYPE_PLANT]);
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
});