function setPlantModel(id, isDouble) {
var shape = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(id, 0, shape);    
Flowers.registerFlower(id, isDouble); 
}

IDRegistry.genBlockID("grassAether");
Block.createBlock("grassAether", [
    {name: "Aether Grass", texture: [["normal_aether", 0], ["normal_aether", 0], ["normal_aether", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.grassAether, "plant");
setPlantModel(BlockID.grassAether, false);

IDRegistry.genItemID("grassAether");
Item.createItem("grassAether", "Aether Grass", {name: "normal_aether"});

Item.registerUseFunction("grassAether", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.grassAether);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 33) return;
   for(let i=0; i<randomInt(5, 9); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){ 
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.grassAether,0);     
    }
}});

IDRegistry.genBlockID("shortgrassAether");
Block.createBlock("shortgrassAether", [
    {name: "Aether Grass", texture: [["short_aether", 0], ["short_aether", 0], ["short_aether", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.shortgrassAether, "plant");

IDRegistry.genItemID("shortgrassAether");
Item.createItem("shortgrassAether", "Aether Grass", {name: "short_aether"});

Item.registerUseFunction("shortgrassAether", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.shortgrassAether);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.shortgrassAether, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(5, 12); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.shortgrassAether,0);   
    }
}});

IDRegistry.genBlockID("longgrassAether");
Block.createBlock("longgrassAether", [
    {name: "Aether Grass", texture: [["long_aether", 0], ["long_aether", 0], ["long_aether", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.longgrassAether, "plant");

IDRegistry.genItemID("longgrassAether");
Item.createItem("longgrassAether", "Aether Grass", {name: "long_aether"});

Item.registerUseFunction("longgrassAether", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
       region.setBlock(place.x,place.y+1,place.z,BlockID.grassAether,0);   
        region.setBlock(place.x, place.y+2, place.z, BlockID.longgrassAether);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.longgrassAether, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 34) return;
   for(let i=0; i<randomInt(0, 5); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){  
       //World.setBlock(coords.x,coords.y+1,coords.z,BlockID.grassAether,0);   
       World.setBlock(coords.x, coords.y+1, coords.z, BlockID.longgrassAether);  
    }
}});

Block.registerDropFunction("grassAether", function(coords, blockID){ 
    [[ItemID.grassAether, 1, 0]];
});
Block.registerDropFunction("shortgrassAether", function(coords, blockID){ 
    [[ItemID.shortgrassAether, 1, 0]];
});
Block.registerDropFunction("longgrassAether", function(coords, blockID){ 
    [[ItemID.shortgrassAether, 1, 0]];
});