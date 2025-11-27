var GRASS_LIGHT = Block.createSpecialType({
    lightlevel: 4,
    sound: "grass"
});

IDRegistry.genItemID("cinderfruit");
Item.createFoodItem("cinderfruit", "Cinderfruit", {name: "cinderfruit"},{isTech:false,food: 5});

IDRegistry.genItemID("cinderFruitSeed");
Item.createFoodItem("cinderFruitSeed", "Cinderfruit Seed", {name: "cinderfruit_seeds"},{isTech:false,food: 3});

Item.registerUseFunction("cinderFruitSeed", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.soilCharred){ 
        region.setBlock(place.x, place.y, place.z, BlockID.cinderFruits);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.cinderfruit){
Entity.addEffect(player, 11, 0, 400, true,true);
Entity.addEffect(player, 12, 0, 400, true,true);
}});

IDRegistry.genItemID("cinderfruitp");
Item.createFoodItem("cinderfruitp", "Powered Cinderfruit", {name: "cinderfruit"},{isTech:false,food: 3});
Item.setGlint(ItemID.cinderfruitp, true);
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.cinderfruitp){
Entity.addEffect(player, 11, 1, 600, true,true);
Entity.addEffect(player, 12, 1, 600, true,true);
Entity.addEffect(player, 5, 2, 600, true,true);
Entity.addEffect(player, 1, 2, 600, true,true);
}});

IDRegistry.genBlockID("cinderFruits");
Block.createBlock("cinderFruits", [
    {name: "Cinderfruit", texture: [["cinderfruit_empty_plant", 0], ["cinderfruit_empty_plant", 0], ["cinderfruit_empty_plant", 0]], inCreative: false}], GRASS_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.cinderFruits, "plant");
TileRenderer.setPlantModel(BlockID.cinderFruits, 0, "cinderfruit_empty_plant", 0);     

Block.registerDropFunction("cinderFruits", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.charcoalBit, 1, 0);
});

IDRegistry.genBlockID("cinderFruit");
Block.createBlock("cinderFruit", [
    {name: "Cinderfruit", texture: [["cinderfruit_full_plant", 0], ["cinderfruit_full_plant", 0], ["cinderfruit_full_plant", 0]], inCreative: false}], GRASS_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.cinderFruit, "plant");
TileRenderer.setPlantModel(BlockID.cinderFruit, 0, "cinderfruit_full_plant", 0);

Block.registerDropFunction("cinderFruit", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.cinderFruitSeed, 1, 0);
});

Callback.addCallback("ItemUse", function (coords,item,block, is, player) { 
pl= coords.relative; 
 var region = BlockSource.getDefaultForActor(player); 
if (region.getBlockId(coords.x, coords.y, coords.z)==BlockID.cinderFruit){ 
  region.drop(coords.x, coords.y+1, coords.z, ItemID.cinderfruit, 3); 
   region.setBlock(coords.x,coords.y,coords.z,BlockID.cinderFruits,0); 
      } 
});

Block.setAnimateTickCallback(BlockID.cinderFruits, function(x, y, z, id, data){
var coords = coords.relative; 
 var region = BlockSource.getCurrentWorldGenRegion();    
  if(region.getBlockId(coords.x, coords.y - 1, coords.z)==BlockID.soilCharred){
      region.destroyBlock(coords.x,coords.y,coords.z,false);   
       region.setBlock(coords.x, coords.y, coords.z, BlockID.cinderFruit);     
      }  
});
   
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 50) return;
   for(let i=0; i<randomInt(1, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.soilCharred){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.cinderFruits,0);
    }
}});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 50) return;
   for(let i=0; i<randomInt(1, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.soilCharred && random.nextFloat() < .5){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.cinderFruit,0);
    }
}});