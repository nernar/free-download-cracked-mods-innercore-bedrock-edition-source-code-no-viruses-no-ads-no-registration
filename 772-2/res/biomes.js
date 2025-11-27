let biome_giantTrees = new CustomBiome("giantTrees");
biome_giantTrees.setCoverBlock(9, 0);
biome_giantTrees.setSurfaceBlock(12, 0);
biome_giantTrees.setTemperatureAndDownfall(1, 0.5);
biome_giantTrees.setGrassColor(0.3, 1, 0.3);
function  createBiome(){
  
}
function generationBiome(){
Callback.addCallback("GenerateBiomeMap", function(chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed) {
  // Check if it is overworld
  if (dimensionId != 0) {
    return;
  }
  let cornerX = chunkX * 16;
  let cornerZ = chunkZ * 16;
  // Check if it is one of the deset biomes
  let biome = World.getBiomeMap(cornerX + 8, cornerZ + 8);
  if (biome != 2 && biome != 17 && biome != 130) {
    return;
  }
  // Check if the biome is likely to be generated inside this chunk
  if (GenerationUtils.getPerlinNoise(cornerX + 8, 0, cornerZ + 8, dimensionSeed, 1 / OCTAVE_SCALE, 2) <
    OASIS_GENERATION_THRESHOLD - 12 / OCTAVE_SCALE) {
    return;
  }
  // Biome map changes
  for (var x = cornerX; x < cornerX + 16; x++) {
    for (var z = cornerZ; z < cornerZ + 16; z++) {
      var noiseValue = GenerationUtils.getPerlinNoise(x, 0, z, dimensionSeed, 1 / OCTAVE_SCALE, 2);
      if (noiseValue > LAKE_GENERATION_THRESHOLD) {
        // Generate lakes
        World.setBiomeMap(x, z, biomeLake.id);
      }
      else if (noiseValue > OASIS_GENERATION_THRESHOLD) {
        // Generate surrounding landscape
        World.setBiomeMap(x, z, biomeOasis.id);
      }
    }
  }
});
}