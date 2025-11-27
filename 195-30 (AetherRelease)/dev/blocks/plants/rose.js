IDRegistry.genBlockID("roseWhite");
Block.createBlock("roseWhite", [
    {name: "White Rose", texture: [["white_rosen", 0], ["white_rosen", 0], ["white_rosen", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);

IDRegistry.genItemID("roseWhite");
Item.createItem("roseWhite", "White Rose", {name: "white_rosen"});

Item.registerUseFunction("roseWhite", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.roseWhite);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.roseWhite, false);

Block.registerDropFunction("roseWhite", function(coords, blockID){ 
     [[ItemID.roseWhite, 1, 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(0, 4); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){ 
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.roseWhite,0);     
    }
}});


IDRegistry.genBlockID("roseWhiteForgoten");
Block.createBlock("roseWhiteForgoten", [
    {name: "White Rose", texture: [["forgotten_rose", 0], ["forgotten_rose", 0], ["forgotten_rose", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);

IDRegistry.genItemID("roseWhiteForgoten");
Item.createItem("roseWhiteForgoten", "White Rose", {name: "forgotten_rose"});

Item.registerUseFunction("roseWhiteForgoten", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.roseWhiteForgoten);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.roseWhiteForgoten, false);

Block.registerDropFunction("roseWhiteForgoten", function(coords, blockID){
    [[ItemID.roseWhiteForgoten, 1, 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(0, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){ 
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.roseWhiteForgoten,0);     
    }
}});