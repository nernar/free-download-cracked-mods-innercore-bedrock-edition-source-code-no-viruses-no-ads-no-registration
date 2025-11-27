IDRegistry.genBlockID("xp_ore");
Block.createBlock("xp_ore", [
	{name: "Xp ore", texture: [["xp_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.xp_ore, "stone", 3, true);

Block.registerDropFunction("xp_ore", function(coords, blockID, blockData, level, enchant){
 if(level > 2){
  if(enchant.silk){
   return [[BlockID.xp_ore, 1, 0]];
  }
  ToolAPI.dropOreExp(coords, 3, 5, enchant.experience);
  return [[0, 0, 0]]
 }
 return [];
}, 3);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.xp_ore, 0, 6);
    }
}
)

IDRegistry.genBlockID("nether_xp_ore");
Block.createBlock("nether_xp_ore", [
	{name: "Nether xp ore", texture: [["nether_xp_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_xp_ore, "stone", 3, true);

Block.registerDropFunction("nether_xp_ore", function(coords, blockID, blockData, level, enchant){
 if(level > 2){
  if(enchant.silk){
   return [[BlockID.nether_xp_ore, 1, 0]];
  }
  ToolAPI.dropOreExp(coords, 3, 5, enchant.experience);
  return [[0, 0, 0]]
 }
 return [];
}, 3);

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 121);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_xp_ore, 0, 6);
    }
}
)

IDRegistry.genBlockID("end_xp_ore");
Block.createBlock("end_xp_ore", [
	{name: "End xp ore", texture: [["end_xp_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_xp_ore, "stone", 3, true);

Block.registerDropFunction("end_xp_ore", function(coords, blockID, blockData, level, enchant){
 if(level > 2){
  if(enchant.silk){
   return [[BlockID.end_xp_ore, 1, 0]];
  }
  ToolAPI.dropOreExp(coords, 3, 5, enchant.experience);
  return [[0, 0, 0]]
 }
 return [];
}, 3);

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 14, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_xp_ore, 0, 6);
    }
}
)