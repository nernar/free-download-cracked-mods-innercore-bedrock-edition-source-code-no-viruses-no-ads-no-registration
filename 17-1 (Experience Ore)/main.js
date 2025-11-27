var BLOCK_TYPE_STONE = Block.createSpecialType({
 base: 1,
 solid: true,
 destroytime: 2,
 explosionres: 2
}, "stone");

IDRegistry.genBlockID("experienceOre");
Block.createBlock("experienceOre", [
 {name: "Experience Ore", texture: [["experienceOre", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.experienceOre, "stone", 3, true);

Block.registerDropFunction("experienceOre", function(coords, blockID, blockData, level, enchant){
 if(level > 2){
  if(enchant.silk){
   return [[BlockID.experienceOre, 1, 0]];
  }
  ToolAPI.dropOreExp(coords, 3, 5, enchant.experience);
  return [[0, 0, 0]]
 }
 return [];
}, 3);





Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.experienceOre, 0, 6);
    }
}
)