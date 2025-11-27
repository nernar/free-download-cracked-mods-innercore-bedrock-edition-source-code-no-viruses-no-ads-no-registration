IDRegistry.genBlockID("bushBerry");
Block.createBlock("bushBerry", [
    {name: "Blueberry Bush", texture: [["berrybush", 0]], inCreative: true}], {solid: false,  destroytime: 0.1, explosionres: 1, lightopacity: 5,  translucency: 0.5, sound: "grass"});
ToolAPI.registerBlockMaterial(BlockID.bushBerry, "plant");

IDRegistry.genBlockID("bush");
Block.createBlock("bush", [
    {name: "Bush", texture: [["highlands_bush_outer", 0]], inCreative: false}], {solid: false,  destroytime: 0.1, explosionres: 1, lightopacity: 5,  translucency: 0.5, sound: "grass"});
ToolAPI.registerBlockMaterial(BlockID.bush, "plant");


Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
 if(Math.random() < 0.2){
for(var i = 0; i < 5; i++){
  for(var k = 0; k < randomInt(0,5); k++){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
 if (coords.y < 33) return;
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether && World.getBlockID(coords.x + k,coords.y, coords.z + k) == BlockID.grassblockAether){ 
World.setBlock(coords.x + k,coords.y+1,coords.z + k,BlockID.bushBerry,0);
          }
       }    
    }
}});

Callback.addCallback("ItemUse", function (coords,item,block, is, player) {
pl= coords.relative;
  var region = BlockSource.getDefaultForActor(player);
if (region.getBlockId(coords.x, coords.y, coords.z)==BlockID.bushBerry){
region.spawnDroppedItem(coords.x, coords.y+1, coords.z, ItemID.blueBerry, randomInt(2,5), 0);
region.setBlock(coords.x,coords.y,coords.z,BlockID.bush,0); 
}
});

Block.setRandomTickCallback(BlockID.bush, function(x, y, z, id, data){
var coords = coords.relative; 
 var region = BlockSource.getCurrentWorldGenRegion();
  if (region.getBlockId(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
    region.destroyBlock(coords.x,coords.y,coords.z,false);                      
    region.setBlock(coords.x,coords.y,coords.z,BlockID.bushBerry,0);  
    }
});     
//FROSTY

IDRegistry.genBlockID("bushBerryf");
Block.createBlock("bushBerryf", [
    {name: "Frosty Blueberry Bush", texture: [["berrybush", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.bushBerryf, "plant");

IDRegistry.genBlockID("bushf");
Block.createBlock("bushf", [
    {name: "Frosty Bush", texture: [["green_skyrootleaves", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.bushf, "plant");


/*Callback.addCallback("GenerateChunk", function (chunkX, chunkZ){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 200, coords.z);
 if (coords.y < 87) return;
  if(Math.random() < 6){
   for(var i = 0; i < 7; i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.bushBerryf,0);
 World.setBlock(coords.x,coords.y+2,coords.z,BlockID.bushBerryf,0);
  World.setBlock(coords.x-1,coords.y+1,coords.z,BlockID.bushBerryf,0);   
       }    
    }
}});*/

Callback.addCallback("ItemUse", function (coords,item,block, is, player) {
pl=coords.relative;
  var region = BlockSource.getDefaultForActor(player);
if (region.getBlockId(coords.x, coords.y, coords.z)==BlockID.bushBerryf){
region.spawnDroppedItem(coords.x, coords.y+1, coords.z, ItemID.whidBerry, randomInt(1, 5), 0);
region.setBlock(coords.x,coords.y,coords.z,BlockID.bushf,0); 
}
});

Block.setRandomTickCallback(BlockID.bushf, function(x, y, z, id, data){
var coords = coords.relative; 
 var region = BlockSource.getCurrentWorldGenRegion();
  if (region.getBlockId(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
    region.destroyBlock(coords.x,coords.y,coords.z,false);                      
    region.setBlock(coords.x,coords.y,coords.z,BlockID.bushBerryf,0);  
    }
});   

//Enchanted
IDRegistry.genBlockID("enbushBerry");
Block.createBlock("enbushBerry", [
    {name: "Blueberry Bush Enchanted", texture: [["enchanted_blueberrybush", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.enbushBerry, "plant");

IDRegistry.genBlockID("enbush");
Block.createBlock("enbush", [
{name: "Bush Enchanted", texture: [["earthshifter_leaves", 0]],inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.enbush, "plant");

/*Callback.addCallback("GenerateChunk", function (chunkX, chunkZ){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 200, coords.z);
 if (coords.y < 87) return;
  if(Math.random() < 6){
   for(var i = 0; i < 7; i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){ 
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.enbushBerry,0);
 World.setBlock(coords.x,coords.y+2,coords.z,BlockID.enbushBerry,0);
  World.setBlock(coords.x+1,coords.y+1,coords.z,BlockID.enbushBerry,0);   
       }    
    }
}});*/

Callback.addCallback("ItemUse", function (coords,item,block, is, player) {
pl=coords.relative;
  var region = BlockSource.getDefaultForActor(player);
if (region.getBlockId(coords.x, coords.y, coords.z)==BlockID.enbushBerry){
region.spawnDroppedItem(coords.x, coords.y+1, coords.z, ItemID.enwhidBerry, randomInt(2, 3), 0);
region.setBlock(coords.x,coords.y,coords.z,BlockID.enbush,0); 
}
});

Block.setRandomTickCallback(BlockID.enbush, function(x, y, z, id, data){
var coords = coords.relative; 
 var region = BlockSource.getCurrentWorldGenRegion();
  if (region.getBlockId(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
    region.destroyBlock(coords.x,coords.y,coords.z,false);                      
    region.setBlock(coords.x,coords.y,coords.z,BlockID.enbushBerry,0);  
    }
});   