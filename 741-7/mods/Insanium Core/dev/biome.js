const biomes = [1, 4, 5, 27, 155, 19];

let GibleForest = new CustomBiome("gible_forest")
.setFillingBlock(1, 0)
.setSkyColor(32, 74, 105)
.setTemperatureAndDownfall(0, .4)
.setGrassColor(30, 61, 80);

Callback.addCallback("GenerateBiomeMap", function(chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed) {
    if (dimensionId != 0) return;
 var X = Math.floor(chunkX) * 16;
  var Z = Math.floor(chunkZ) * 16;
   var biome = World.getBiomeMap(X + 4, Z + 4);
   for(var j in biomes){
    if (biome != biomes[j]) return;
     if (GenerationUtils.getPerlinNoise(X + 4, 0, Z + 4, dimensionSeed, 1 / 256, 2) < .5 - 4 / Math.pow(256, 2))
      return;
     for (var x = 0; x < 16; x++) {
      for (var z = 0; z < 16; z++) {
          var noiseValue = GenerationUtils.getPerlinNoise(X + 4, 0, Z + 4, dimensionSeed, 1 / 256, 2);
           if (noiseValue > .87)
             World.setBiomeMap(x, z, GibleForest.id);
            }
        }
    }
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, randomCall){
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
    if(World.getBiome(coords.x, coords.z)==GibleForest.id){
        let random = randomCall.nextInt(100);
        if(random<=10){
            for(let i = 0;i<=randomCall.nextInt(3);i++){
                let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
                coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
                DungeonCore.setStructure("forest_1", coords.x, coords.y+1, coords.z);
            }
        }else if(random<=20){
            for(let i = 0;i<=randomCall.nextInt(6);i++){
                let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
                coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
                DungeonCore.setStructure("forest_2", coords.x, coords.y+1, coords.z);
            }
        }else if(random<=30){
            for(let i = 0;i<=randomCall.nextInt(6);i++){
                let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
                coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
                DungeonCore.setStructure("forest_3", coords.x, coords.y+1, coords.z);
            }
        }else if(random<=40){
            DungeonCore.setStructure("forest_4", coords.x, coords.y+1, coords.z);
        }else if(random2=50){
            DungeonCore.setStructure("forest_5", coords.x, coords.y+1, coords.z);
        }else if(random<=60){
            DungeonCore.setStructure("forest_6", coords.x, coords.y+1, coords.z);
        }else if(random<=70){
            DungeonCore.setStructure("forest_7", coords.x, coords.y+1, coords.z);
        }else if(random<=80){
            DungeonCore.setStructure("forest_8", coords.x, coords.y+1, coords.z);
        }else if(random<=98){
            DungeonCore.setStructure("forest_9", coords.x, coords.y, coords.z);
        }
    }
});