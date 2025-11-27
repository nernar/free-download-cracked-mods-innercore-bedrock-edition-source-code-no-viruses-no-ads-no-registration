IDRegistry.genBlockID("flowerPurple");
Block.createBlock("flowerPurple", [
    {name: "Purple Flower", texture: [["purple_flowern", 0], ["purple_flowern", 0], ["purple_flowern", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.flowerPurple, "plant");

IDRegistry.genItemID("flowerPurple");
Item.createItem("flowerPurple", "Purple Flower", {name: "purple_flowern"});

Item.registerUseFunction("flowerPurple", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.flowerPurple);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.flowerPurple, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 33) return;
   for(let i=0; i<randomInt(2, 7); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.flowerPurple,0);
    }
}});

Block.registerDropFunction("flowerPurple", function(coords, blockID){ 
    [[ItemID.flowerPurple, 1, 0]];
});


IDRegistry.genBlockID("flowerAechor");
Block.createBlock("flowerAechor", [
    {name: "Aechor Flower", texture: [["aechor_sprout", 0], ["aechor_sprout", 0], ["aechor_sprout", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.flowerPurple, "plant");

IDRegistry.genItemID("flowerAechor");
Item.createItem("flowerAechor", "Aechor Flower", {name: "aechor_sprout"});

Item.registerUseFunction("flowerAechor", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.flowerAechor);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.flowerAechor, false);

Block.registerDropFunction("flowerAechor", function(coords, blockID){ 
    [[ItemID.flowerAechor, 1, 0]];
});

//NEW
IDRegistry.genBlockID("swingtipGreen");
Block.createBlock("swingtipGreen", [
    {name: "Swingtip Green", texture: [["green_swingtip", 0], ["green_swingtip", 0], ["green_swingtip", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.swingtipGreen, "plant");

IDRegistry.genItemID("swingtipGreen");
Item.createItem("swingtipGreen", "Swingtip Green", {name: "green_swingtip"});

Item.registerUseFunction("swingtipGreen", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.swingtipGreen);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.swingtipGreen, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 33) return;
   for(let i=0; i<randomInt(1, 4); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.swingtipGreen,0);
    }
}});

Block.registerDropFunction("swingtipGreen", function(coords, blockID){
    [[ItemID.swingtipGreen, 1, 0]];
});


IDRegistry.genBlockID("swingtipBlue");
Block.createBlock("swingtipBlue", [
    {name: "Swingtip Blue", texture: [["blue_swingtip", 0], ["blue_swingtip", 0], ["blue_swingtip", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.swingtipBlue, "plant");

IDRegistry.genItemID("swingtipBlue");
Item.createItem("swingtipBlue", "Swingtip Blue", {name: "blue_swingtip"});

Item.registerUseFunction("swingtipBlue", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.swingtipBlue);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.swingtipBlue, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 33) return;
   for(let i=0; i<randomInt(0, 2); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.swingtipBlue,0);
    }
}});

Block.registerDropFunction("swingtipBlue", function(coords, blockID){
    [[ItemID.swingtipBlue, 1, 0]];
});


IDRegistry.genBlockID("swingtipPink");
Block.createBlock("swingtipPink", [
    {name: "Swingtip Pink", texture: [["pink_swingtip", 0], ["pink_swingtip", 0], ["pink_swingtip", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.swingtipPink, "plant");

IDRegistry.genItemID("swingtipPink");
Item.createItem("swingtipPink", "Swingtip Pink", {name: "pink_swingtip"});

Item.registerUseFunction("swingtipPink", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.swingtipPink);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.swingtipPink, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 33) return;
   for(let i=0; i<randomInt(0, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.swingtipPink,0);
    }
}});

Block.registerDropFunction("swingtipPink", function(coords, blockID){
    [[ItemID.swingtipPink, 1, 0]];
});


IDRegistry.genBlockID("burstblossom");
Block.createBlock("burstblossom", [
    {name: "Burstblossom", texture: [["burstblossom", 0], ["burstblossom", 0], ["burstblossom", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.burstblossom, "plant");

IDRegistry.genItemID("burstblossom");
Item.createItem("burstblossom", "Burstblossom", {name: "burstblossom"});

Item.registerUseFunction("burstblossom", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.burstblossom);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.burstblossom, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 33) return;
   for(let i=0; i<randomInt(0, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.burstblossom,0);
    }
}});

Block.registerDropFunction("burstblossom", function(coords, blockID){
    [[ItemID.burstblossom, 1, 0]];
});


IDRegistry.genBlockID("HighlandsTulips");
Block.createBlock("HighlandsTulips", [
    {name: "Highlands Tulips", texture: [["highlands_tulips", 0], ["highlands_tulips", 0], ["highlands_tulips", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.HighlandsTulips, "plant");

IDRegistry.genItemID("HighlandsTulips");
Item.createItem("HighlandsTulips", "Highlands Tulips", {name: "highlands_tulips"});

Item.registerUseFunction("HighlandsTulips", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.HighlandsTulips);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.HighlandsTulips, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 33) return;
   for(let i=0; i<randomInt(0, 4); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.HighlandsTulips,0);
    }
}});

Block.registerDropFunction("HighlandsTulips", function(coords, blockID){ 
    [[ItemID.HighlandsTulips, 1, 0]];
});


IDRegistry.genBlockID("quickshoot");
Block.createBlock("quickshoot", [
    {name: "Quickshoot", texture: [["quickshoot", 0], ["quickshoot", 0], ["quickshoot", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.quickshoot, "plant");

IDRegistry.genItemID("quickshoot");
Item.createItem("quickshoot", "Quickshoot", {name: "quickshoot"});

Item.registerUseFunction("quickshoot", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.quickshoot);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.quickshoot, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 33) return;
   for(let i=0; i<randomInt(0, 6); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.quickshoot,0);
    }
}});

Block.registerDropFunction("quickshoot", function(coords, blockID){
    [[ItemID.HighlandsTulips, 1, 0]];
});


IDRegistry.genBlockID("neverbloom");
Block.createBlock("neverbloom", [
    {name: "Neverbloom", texture: [["neverbloom", 0], ["neverbloom", 0], ["neverbloom", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.neverbloom, "plant");

IDRegistry.genItemID("neverbloom");
Item.createItem("neverbloom", "Neverbloom", {name: "neverbloom"});

Item.registerUseFunction("neverbloom", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.neverbloom);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.neverbloom, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 70) return;
   for(let i=0; i<randomInt(0, 7); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.neverbloom,0);
    }
}});

Block.registerDropFunction("neverbloom", function(coords, blockID){ 
    [[ItemID.neverbloom, 1, 0]];
});


IDRegistry.genBlockID("arcticSpkikespring");
Block.createBlock("arcticSpkikespring", [
    {name: "Arctic spikespring", texture: [["arctic_spikespring", 0], ["arctic_spikespring", 0], ["arctic_spikespring", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.arcticSpkikespring, "plant");

IDRegistry.genItemID("arcticSpkikespring");
Item.createItem("arcticSpkikespring", "Arctic spikespring", {name: "arctic_spikespring"});

Item.registerUseFunction("arcticSpkikespring", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.arcticSpkikespring);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.arcticSpkikespring, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 70) return;
   for(let i=0; i<randomInt(0, 9); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.arcticSpkikespring,0);
    }
}});

Block.registerDropFunction("arcticSpkikespring", function(coords, blockID){ 
    [[ItemID.arcticSpkikespring, 1, 0]];
});


IDRegistry.genBlockID("irradiated");
Block.createBlock("irradiated", [
    {name: "Irradiated", texture: [["irradiated_flower", 0], ["irradiated_flower", 0], ["irradiated_flower", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.irradiated, "plant");

IDRegistry.genItemID("irradiated");
Item.createItem("irradiated", "Irradiated", {name: "irradiated_flower"});

Item.registerUseFunction("irradiated", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.irradiated);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.irradiated, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 100, coords.z);
  if (coords.y < 60) return;
   for(let i=0; i<randomInt(0, 1); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.irradiated,0);
    }
}});

Block.registerDropFunction("irradiated", function(coords, blockID){ 
    [[ItemID.irradiated, 1, 0]];
});