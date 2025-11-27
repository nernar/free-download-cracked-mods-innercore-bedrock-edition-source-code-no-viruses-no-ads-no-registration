var BLOCK_TYPE_PLANT = Block.createSpecialType({
    base: 38,
    solid: false,
    destroytime: 0.1,
    explosionres: 1,
    //renderlayer: 1,
    rendertype: 91,
    lightopacity: 0,
    translucency: 0.5,
    sound: "grass"
});

var BLOCK_TYPE_PLANT_DOUBLE = Block.createSpecialType({
    base: 38,
    solid: false,
    destroytime: 0.1,
    explosionres: 1,
    //renderlayer: 1,
    rendertype: 91,
    lightopacity: 0,
    translucency: 0.5,
    sound: "grass"
});


//FLAKE
IDRegistry.genBlockID("fernFlake");
Block.createBlock("fernFlake", [
    {name: "Flake Fern", texture: [["flakefern", 0], ["flakefern", 0], ["flakefern", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.fernFlake, "plant");
setPlantModel(BlockID.fernFlake, false);

IDRegistry.genItemID("fernFlake");
Item.createItem("fernFlake", "Flake Fern", {name: "flakefern"});

Item.registerUseFunction("fernFlake", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockGryss || region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockGryssIcy){ 
        region.setBlock(place.x, place.y, place.z, BlockID.fernFlake);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 225, coords.z);
  if (coords.y < 38) return;
  if(random.nextFloat() < .65)
   for(let i=0; i<randomInt(3, 9); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockGryss || World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockGryssIcy){ 
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.fernFlake,0);     
    }
}});

IDRegistry.genBlockID("shortgrassFlake");
Block.createBlock("shortgrassFlake", [
    {name: "Gryss Grass", texture: [["tallgryss", 0], ["tallgryss", 0], ["tallgryss", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.shortgrassFlake, "plant");

IDRegistry.genItemID("shortgrassFlake");
Item.createItem("shortgrassFlake", "Gryss Grass", {name: "tallgryss"});

Item.registerUseFunction("shortgrassFlake", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockGryss){ 
        region.setBlock(place.x, place.y, place.z, BlockID.shortgrassFlake);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.shortgrassFlake, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 184, coords.z);
  if (coords.y < 35) return;
   for(let i=0; i<randomInt(4, 12); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockGryss){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.shortgrassFlake,0);   
    }
}});

IDRegistry.genBlockID("longgrassFlakeb");
Block.createBlock("longgrassFlakeb", [
    {name: "Flake Fern", texture: [["tallflakefernbottom", 0], ["tallflakefernbottom", 0], ["tallflakefernbottom", 0]], inCreative: false}
], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.longgrassFlakeb, "plant");

IDRegistry.genBlockID("longgrassFlaket");
Block.createBlock("longgrassFlaket", [
    {name: "Flake Fern", texture: [["tallflakeferntop", 0], ["tallflakeferntop", 0], ["tallflakeferntop", 0]], inCreative: false}
], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.longgrassFlaket, "plant");

IDRegistry.genItemID("longgrassFlaket");
Item.createItem("longgrassFlaket", "Flake Fern", {name: "tallflakeferntop"});

Item.registerUseFunction("longgrassFlaket", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
       region.setBlock(place.x,place.y+1,place.z,BlockID.longgrassFlakeb, 0);   
        region.setBlock(place.x, place.y+2, place.z, BlockID.longgrassFlaket, 0);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.longgrassFlakeb, true);
setPlantModel(BlockID.longgrassFlaket, true);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 225, coords.z);
  if (coords.y < 35) return;
   for(let i=0; i<randomInt(0, 5); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){  
       World.setBlock(coords.x,coords.y+1,coords.z,BlockID.longgrassFlakeb, 0);   
       World.setBlock(coords.x, coords.y+2, coords.z, BlockID.longgrassFlaket, 0);  
    }
}});

Block.registerDropFunction("fernFlake", function(coords, blockID){
    return [[ItemID.fernFlake, 1, 0]];
});
Block.registerDropFunction("shortgrassFlake", function(coords, blockID){
    return [[ItemID.shortgrassFlake, 1, 0]];
});
Block.registerDropFunction("longgrassFlakeb", function(coords, blockID){
    return [];
});
Block.registerDropFunction("longgrassFlaket", function(coords, blockID){
    return [[ItemID.fernFlake, 1, 0]];
});


IDRegistry.genBlockID("coalstem");
Block.createBlock("coalstem", [
    {name: "Coalstem", texture: [["coalstem", 0], ["coalstem", 0], ["coalstem", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.coalstem, "plant");

IDRegistry.genItemID("coalstem");
Item.createItem("coalstem", "Coalstem", {name: "coalstem"});

Item.registerUseFunction("coalstem", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockGryss){ 
        region.setBlock(place.x, place.y, place.z, BlockID.coalstem);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.coalstem, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 184, coords.z);
  if (coords.y < 35) return;
   for(let i=0; i<randomInt(4, 12); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockGryss){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.coalstem,0);   
    }
}});

Block.registerDropFunction("coalstem", function(coords, blockID){
     return [[ItemID.coalstem, 1, 0]];
});

IDRegistry.genBlockID("vanilla");
Block.createBlock("vanilla", [
    {name: "Vanilla", texture: [["vanillaflower", 0], ["vanillaflower", 0], ["vanillaflower", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.vanilla, "plant");

IDRegistry.genItemID("vanilla");
Item.createItem("vanilla", "Vanilla", {name: "vanillaflower"});

Item.registerUseFunction("vanilla", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockGryss){ 
        region.setBlock(place.x, place.y, place.z, BlockID.vanilla);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.vanilla, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 184, coords.z);
  if (coords.y < 35) return;
   for(let i=0; i<3; i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockGryss){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.vanilla,0);   
    }
}});

Block.registerDropFunction("vanilla", function(coords, blockID){
    return [[ItemID.vanilla, 1, 0]];
});


IDRegistry.genBlockID("goldberryBush");
Block.createBlock("goldberryBush", [
    {name: "Goldberry Bush", texture: [["golberryvine", 0], ["golberryvine", 0], ["golberryvine", 0]], inCreative: false}
], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.goldberryBush, "plant");

IDRegistry.genItemID("goldberryBush");
Item.createItem("goldberryBush", "Goldberry Bush", {name: "golberryvine"});

Callback.addCallback("ItemUse", function (coords,item,block, is, player) {
pl= coords.relative;
  var region = BlockSource.getDefaultForActor(player);
if (region.getBlockId(coords.x, coords.y, coords.z)==BlockID.goldberryBush){
region.spawnDroppedItem(coords.x, coords.y+1, coords.z, ItemID.golberries, randomInt(2,3), 0);
 region.destroyBlock(coords.x,coords.y,coords.z,false);     
}
});
setPlantModel(BlockID.goldberryBush, true);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
if(Math.random() < 0.1){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 184, coords.z);
  if (coords.y < 35) return;
   for(let i=0; i<3; i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockGryss){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.goldberryBush,0);
World.setBlock(coords.x,coords.y+2,coords.z,BlockID.goldberryBush,0);    
    }
}
}});

Block.registerDropFunction("goldberryBush", function(coords, blockID){
    return [[ItemID.golberries, randomInt(1, 2), 0]];
});