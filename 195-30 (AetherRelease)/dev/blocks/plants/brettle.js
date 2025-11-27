IDRegistry.genItemID("brettleC");
Item.createItem("brettleC", "Brettl Cane", {name: "brettl_cane", meta: 0},{stack: 8});

IDRegistry.genItemID("brettleGrass");
Item.createItem("brettleGrass", "Brettl Grass", {name: "brettl_grass", meta: 0},{stack: 64});

IDRegistry.genItemID("brettleRope");
Item.createItem("brettleRope", "Brettl Rope", {name: "brettl_rope", meta: 0},{stack: 16});

Recipes.addShaped({id: ItemID.brettleRope, count: 1, data: 0}, [
    "oox",
    "oxo"
], ['x', ItemID.brettleGrass, 0]);


IDRegistry.genBlockID("brettleCB");
Block.createBlock("brettleCB", [
    {name: "Brettle plant", texture: [["brettl_plant_base", 0], ["brettl_plant_base", 0], ["brettl_plant_base", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.brettleCB, "plant");
setPlantModel(BlockID.brettleCB, true);     

Block.registerDropFunction("brettleCB", function(){
    if(Math.random() < .5){
        return [[ItemID.brettleC, 1, 0]]
    }
    else {
        return [];
    }
});

IDRegistry.genBlockID("brettleCBf");
Block.createBlock("brettleCBf", [
    {name: "Brettle plant", texture: [["brettl_plant_base_g", 0], ["brettl_plant_base_g", 0], ["brettl_plant_base_g", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.brettleCBf, "plant");
setPlantModel(BlockID.brettleCBf, true);

Block.registerDropFunction("brettleCB", function(){
    if(Math.random() < .65){
        return [[ItemID.brettleGrass, 1, 0]]
    }
    else {
        return [[ItemID.brettleC, 1, 0]];
    }
});

IDRegistry.genBlockID("brettleM");
Block.createBlock("brettleM", [
    {name: "Brettle plant", texture: [["brettl_plant_mid", 0], ["brettl_plant_mid", 0], ["brettl_plant_mid", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.brettleM, "plant");
setPlantModel(BlockID.brettleM, true);

Block.registerDropFunction("brettleM", function(){ 
  return [];
});

IDRegistry.genBlockID("brettleMf");
Block.createBlock("brettleMf", [
    {name: "Brettle plant", texture: [["brettl_plant_mid_g", 0], ["brettl_plant_mid_g", 0], ["brettl_plant_mid_g", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.brettleMf, "plant");
setPlantModel(BlockID.brettleMf, true);

Block.registerDropFunction("brettleMf", function(){ 
  return [];
});

IDRegistry.genBlockID("brettleCT");
Block.createBlock("brettleCT", [
    {name: "Brettle plant", texture: [["brettl_plant_top", 0], ["brettl_plant_top", 0], ["brettl_plant_top", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.brettleCT, "plant");
setPlantModel(BlockID.brettleCT, true);

Block.registerDropFunction("brettleCT", function(){ 
  return [];
});

IDRegistry.genBlockID("brettleCTf");
Block.createBlock("brettleCTf", [
    {name: "Brettle plant", texture: [["brettl_plant_top_g", 0], ["brettl_plant_top_g", 0], ["brettl_plant_top_g", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.brettleCTf, "plant");
setPlantModel(BlockID.brettleCTf, true);

Block.registerDropFunction("brettleCTf", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.brettleCB, randomInt(1,3), 0);
});

IDRegistry.genItemID("brettleCB");
Item.createItem("brettleCB", "Brettle Plant Flower", {name: "brettl_plant_top_g", meta:1});

Item.registerUseFunction("brettleCB", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.quickSkyroot){ 
        region.setBlock(place.x, place.y, place.z, BlockID.brettleCB);
         region.setBlock(place.x, place.y+1, place.z, BlockID.brettleM);
          region.setBlock(place.x, place.y+2, place.z, BlockID.brettleCT);
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

 
 
Block.setRandomTickCallback(BlockID.brettleCB, function(x, y, z, id, data){
var coords = coords.relative; 
 var region = BlockSource.getCurrentWorldGenRegion();    
  if(region.getBlockId(coords.x, coords.y - 3, coords.z)==BlockID.quickSkyroot){
      region.destroyBlock(coords.x,coords.y,coords.z,false);  
       region.destroyBlock(coords.x,coords.y - 1,coords.z,false);
        region.destroyBlock(coords.x,coords.y - 2,coords.z,false);
         region.setBlock(coords.x, coords.y, coords.z, BlockID.brettleCBf);
          region.setBlock(coords.x, coords.y-1, coords.z, BlockID.brettleMf);
           region.setBlock(coords.x, coords.y-2, coords.z, BlockID.brettleCTf);
     }
});
Block.registerEntityInsideFunction(BlockID.brettleMf, function(coords, id, entity){
if(World.getThreadTime() % 30) 
 Entity.addEffect(entity, 20, 2, 200, false,false);   
});
  
Block.registerEntityInsideFunction(BlockID.brettleCBf, function(coords, id, entity){
if(World.getThreadTime() % 30) 
 Entity.addEffect(entity, 20, 2, 200, false,false);   
});
//FOR SAND-CLIFFS BIOME.

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
 let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
   if(coords.y < 33) return;
   if(World.getBlockID(coords.x, coords.y, coords.z) == BlockID.quickSkyroot && Math.random() < .55){ 
       for(let i=0; i<randomInt(1, 4); i++){
         World.setBlock(coords.x, coords.y+1, coords.z, BlockID.brettleCBf);
          World.setBlock(coords.x, coords.y+2, coords.z, BlockID.brettleMf);
           World.setBlock(coords.x, coords.y+3, coords.z, BlockID.brettleCTf);    
         } 
     }      
});
       