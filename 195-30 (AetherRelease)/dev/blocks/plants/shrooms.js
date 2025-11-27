IDRegistry.genBlockID("shroomStone");
Block.createBlock("shroomStone", [
    {name: "Stone Shroom", texture: [["stoneshroom", 0], ["stoneshroom", 0], ["stoneshroom", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);

IDRegistry.genItemID("shroomStone");
Item.createItem("shroomStone", "Stone Shroom", {name: "stoneshroom"});

Item.registerUseFunction("shroomStone", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.Holystone){ 
        region.setBlock(place.x, place.y, place.z, BlockID.shroomStone);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.shroomStone, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 95) return;
   for(let i=0; i<randomInt(0, 7); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.Holystone){ 
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.shroomStone,0);     
    }
}});


IDRegistry.genBlockID("shroomBark");
Block.createBlock("shroomBark", [
    {name: "Bark Shroom", texture: [["barkshroom", 0], ["barkshroom", 0], ["barkshroom", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);

IDRegistry.genItemID("shroomBark");
Item.createItem("shroomBark", "Bark Shroom", {name: "barkshroom"});

Item.registerUseFunction("shroomBark", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.skyrootBark){ 
        region.setBlock(place.x, place.y, place.z, BlockID.shroomBark);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.shroomBark, false);

Callback.addCallback("GenerateChunkUniversal", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 50) return;
   for(let i=0; i<randomInt(0, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z) == BlockID.skyrootBark){ 
World.setBlock(coords.x,coords.y+1,coords.z, BlockID.shroomBark,0);     
    }
}});


IDRegistry.genBlockID("shroomMagnetic");
Block.createBlock("shroomMagnetic", [
    {name: "Magnetic Shroom", texture: [["magnetic_shroom", 0], ["magnetic_shroom", 0], ["magnetic_shroom", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);

IDRegistry.genItemID("shroomMagnetic");
Item.createItem("shroomMagnetic", "Magnetic Shroom", {name: "magnetic_shroom"});

Item.registerUseFunction("shroomMagnetic", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.Holystone){ 
        region.setBlock(place.x, place.y, place.z, BlockID.shroomMagnetic);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.shroomMagnetic, false);
/*
Callback.addCallback("GenerateChunkUniversal", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 225, coords.z);
  if (coords.y < 95) return;
   for(let i=0; i<randomInt(0, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z) == BlockID.Holystone){ 
World.setBlock(coords.x,coords.y+1,coords.z, BlockID.shroomMagnetic,0);     
    }
}});*/