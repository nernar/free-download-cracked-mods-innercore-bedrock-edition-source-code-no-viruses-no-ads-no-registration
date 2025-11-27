IDRegistry.genBlockID("soulOre");

Block.createBlock("soulOre", [{name:"Soul Stone Ore", texture: [["soul_ore", 0]], inCreative: true}]);

ToolAPI.registerBlockMaterial(BlockID.soulOre, "stone");
Block.setDestroyTime(BlockID.soulOre, 3);
Block.setDestroyLevel(BlockID.soulOre, 4);

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){ 
for(var i = 0; i < 38; i++){ 
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 150); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.soulOre, 0, randomInt(1, 6)); 
}});