IDRegistry.genBlockID("rediumOre");
Block.createBlock("rediumOre", [
    {name: "Redium Ore", texture: [["redium_ore", 0]], inCreative: true}]); 
IDRegistry.genBlockID("blueOre");
Block.createBlock("blueOre", [
{name: "Blutonium Ore", texture: [["blue_ore", 0]], inCreative: true}]);    
IDRegistry.genBlockID("purpOre");
Block.createBlock("purpOre", [
{name: "Ferom Ore", texture: [["purp_ore", 0]], inCreative: true}]);   
    
    
    
    
    
    
 Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 20);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.rediumOre ,
   data: 0,
   size: 6,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});


Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 15);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.blueOre ,
   data: 0,
   size: 4,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});



Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 10);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.purpOre ,
   data: 0,
   size: 2,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});
