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