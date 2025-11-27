var desolation = new CustomBiome("desolation")
desolation.setServerJson(JSON.stringify({
"minecraft:climate": {
        "downfall": 0.0,
        "snow_accumulation": [
          0.0,
          0.0
        ],
        "temperature": 1.5,
        "blue_spores": 0,
        "red_spores": 0,
        "white_ash": 2,
        "ash": 1
      },
      "minecraft:overworld_height": {
        "noise_type": "default"
      },
      "animal": {},
      "monster": {},
      "overworld": {},
      "desolation": {},
      "minecraft:surface_parameters": {
        "top_material": "minecraft:block_soil_charred",
        "mid_material": "minecraft:block_soil_charred",
        "foundation_material": "minecraft:stone",
        "sea_floor_material": "minecraft:block_soil_charred",
        "sea_material": "minecraft:water",
        "sea_floor_depth": 7
      },
      "minecraft:overworld_generation_rules": {
        "hills_transformation": "forest_hills",  
        "generate_for_climates": [
          [
            "cold",
            25
          ],
          [
            "medium",
            32
          ]  
        ],
        "mutate_transformation": "birch_forest"  
      } 
}));

desolation.setClientJson(JSON.stringify({
      "water_surface_color": "#3f515d",
      "water_fog_color": "#294252",
      "water_surface_transparency": 0.3,
      "water_fog_distance": 10,
      "fog_identifier": "desolation:desolation"
}));
 
ModAPI.addAPICallback("BetterFoliageLeaves", function(BetterFoliage) {
    BetterFoliage.setupLeavesModel(BlockID.burnedLeavesNS, -1, ["charred_branches", 0]);
    BetterFoliage.setupLeavesModel(BlockID.burnedLeaves, -1, ["ash_bramble", 0]);
}); 
  
//TREES
var DesolationPool = new StructurePool("Desolation_Trees");  
DesolationPool.load(DIR+"CharredN.struct", "CharredN", "Structures");
DesolationPool.load(DIR+"CharredS.struct", "CharredS", "Structures");
DesolationPool.load(DIR+"CharredSM.struct", "CharredSM", "Structures");
DesolationPool.load(DIR+"CharredG.struct", "CharredG", "Structures");
DesolationPool.load(DIR+"CharredGM.struct", "CharredGM", "Structures");

Callback.addCallback("GenerateChunkUniversal", function(chunkX, chunkZ, random){
if(World.getBiome(chunkX * 16, chunkZ * 16) != desolation.id) return;
var region = BlockSource.getCurrentWorldGenRegion();
var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 72, coords.z);
  if (coords.y > 55 && random.nextFloat() < .45 && World.nativeGetBlockID(coords.x, coords.y, coords.z) == BlockID.soilCharred) {
generateTree(DesolationPool, "CharredN", coords.x, coords.y + 1, coords.z, region);
  }
  if (coords.y > 55 && random.nextFloat() < .7 && World.nativeGetBlockID(coords.x, coords.y, coords.z) == BlockID.soilCharred) {
generateTree(DesolationPool, "CharredS", coords.x, coords.y + 1, coords.z, region);
  }
  if (coords.y > 55 && random.nextFloat() < .3 && World.nativeGetBlockID(coords.x, coords.y, coords.z) == BlockID.soilCharred) {
generateTree(DesolationPool, "CharredSM", coords.x, coords.y + 1, coords.z, region);
  }
  if (coords.y > 55 && random.nextFloat() < .5 && World.nativeGetBlockID(coords.x, coords.y, coords.z) == BlockID.soilCharred) {
generateTree(DesolationPool, "CharredG", coords.x, coords.y + 1, coords.z, region);
  }
  if (coords.y > 55 && random.nextFloat() < .25 && World.nativeGetBlockID(coords.x, coords.y, coords.z) == BlockID.soilCharred) {
generateTree(DesolationPool, "CharredGM", coords.x, coords.y + 1, coords.z, region);
  }
  if (random.nextFloat() < .35) {  
   for (var xx = 0; xx < randomInt(3, 5); xx++) {
 for (var zz = 0; zz < randomInt(3, 5); zz++) { 
     coords = GenerationUtils.findSurface(coords.x + xx, 70, coords.z + zz);
    if(World.getBlockID(coords.x, coords.y, coords.z) == BlockID.soilCharred && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0) 
      World.setBlock(coords.x + xx, coords.y + 1, coords.z + zz, BlockID.burnedLeavesNS, 0);
          }    
      }  
  }
  if (random.nextFloat() < .16) {  
   for (var xx = 0; xx < randomInt(1, 2); xx++) {
 for (var zz = 0; zz < randomInt(1, 3); zz++) { 
     coords = GenerationUtils.findSurface(coords.x + xx, 70, coords.z + zz);
    if(World.getBlockID(coords.x, coords.y, coords.z) == BlockID.soilCharred && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0) 
      World.setBlock(coords.x + xx, coords.y, coords.z + zz, BlockID.emberBlock, 0);
          }    
      }  
  }
});

//Grass
IDRegistry.genBlockID("scorchedTuftm");
Block.createBlock("scorchedTuftm", [
    {name: "Scorched Tuft", texture: [["scorched_tuft_medium", 0], ["scorched_tuft_medium", 0], ["scorched_tuft_medium", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.scorchedTuftm, "plant");

IDRegistry.genItemID("scorchedTuftm");
Item.createItem("scorchedTuftm", "Scorched Tuft", {name: "scorched_tuft_medium"});

Item.registerUseFunction("scorchedTuftm", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.soilCharred){ 
        region.setBlock(place.x, place.y, place.z, BlockID.scorchedTuftm);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.scorchedTuftm, false);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 50) return;
   for(let i=0; i<randomInt(2, 7); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.soilCharred && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.scorchedTuftm,0);
    }
}});

Block.registerDropFunction("scorchedTuftm", function(coords, blockID){
    return [];
});


IDRegistry.genBlockID("scorchedTuftl");
Block.createBlock("scorchedTuftl", [
    {name: "Scorched Tuft", texture: [["scorched_tuft_large", 0], ["scorched_tuft_large", 0], ["scorched_tuft_large", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.scorchedTuftl, "plant");

IDRegistry.genItemID("scorchedTuftl");
Item.createItem("scorchedTuftl", "Scorched Tuft", {name: "scorched_tuft_large"});

Item.registerUseFunction("scorchedTuftl", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.soilCharred){ 
        region.setBlock(place.x, place.y, place.z, BlockID.scorchedTuftl);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.scorchedTuftl, false);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 50) return;
   for(let i=0; i<randomInt(1, 4); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.soilCharred && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.scorchedTuftl,0);
    }
}});

Block.registerDropFunction("scorchedTuftl", function(coords, blockID){
    return [];
});


IDRegistry.genBlockID("scorchedTuftlg");
Block.createBlock("scorchedTuftlg", [
    {name: "Scorched Tuft", texture: [["scorched_tuft_large", 0], ["scorched_tuft_large", 0], ["scorched_tuft_large", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.scorchedTuftlg, "plant");

IDRegistry.genItemID("scorchedTuftlg");
Item.createItem("scorchedTuftlg", "Scorched Tuft", {name: "scorched_tuft_large"});

Item.registerUseFunction("scorchedTuftlg", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.soilCharred){ 
        region.setBlock(place.x, place.y, place.z, BlockID.scorchedTuftlg);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.scorchedTuftlg, false);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 50) return;
   for(let i=0; i<randomInt(2, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.soilCharred && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.scorchedTuftlg,0);
    }
}});

Block.registerDropFunction("scorchedTuftlg", function(coords, blockID){
    return [];
});

IDRegistry.genBlockID("saplingCharred");
Block.createBlock("saplingCharred", [
    {name: "Charred Sapling", texture: [["charred_sapling", 0], ["charred_sapling", 0], ["charred_sapling", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.scorchedTuftl, "plant");

IDRegistry.genItemID("saplingCharred");
Item.createItem("saplingCharred", "Charred Sapling", {name: "charred_sapling"});

Item.registerUseFunction("saplingCharred", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.soilCharred){ 
        region.setBlock(place.x, place.y, place.z, BlockID.saplingCharred);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.saplingCharred, false);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 50) return;
   for(let i=0; i<randomInt(1, 2); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.soilCharred && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.saplingCharred,0);
    }
}});

Block.registerDropFunction("saplingCharred", function(coords, blockID){
    if(Math.random() < .09){
        return [[280, 1, 0]]
    }
    else {
        return [];
    }
});



