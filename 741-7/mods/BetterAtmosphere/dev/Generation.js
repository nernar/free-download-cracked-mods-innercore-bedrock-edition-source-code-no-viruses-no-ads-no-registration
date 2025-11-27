//BIOMES

const biomes = [1, 4, 5, 27, 155, 19];

var Autumn = new CustomBiome("autumn")
.setGrassColor(0xFF8C00)
.setFoliageColor(0xFF8C00)
.setWaterColor(0x201C40)
//may be 0x201C38
.setCoverBlock(2, 0)
.setSurfaceBlock(3, 0)
.setFillingBlock(1, 0);

Callback.addCallback("GenerateBiomeMap", function (chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed) {
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
           if (noiseValue > .5)
             World.setBiomeMap(x, z, Autumn.id);
            }
        }
    }
});

var MapleWoods = new CustomBiome("maple_woods")
.setCoverBlock(2, 0)
.setSurfaceBlock(1, 0)
.setFillingBlock(3, 0);

Callback.addCallback("GenerateBiomeMap", function (chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed) {
if (dimensionId != 0) return;
 var X = Math.floor(chunkX) * 16;
  var Z = Math.floor(chunkZ) * 16;
   var biome = World.getBiomeMap(X + 8, Z + 8);
   for(var j in biomes){
    if (biome != biomes[j]) return;
     if (GenerationUtils.getPerlinNoise(X + 8, 0, Z + 8, dimensionSeed, 1 / 256, 2) < .58 - 4 / Math.pow(256, 2))
      return;
     for (var x = 0; x < 16; x++) {
      for (var z = 0; z < 16; z++) {
          var noiseValue = GenerationUtils.getPerlinNoise(X + 8, 0, Z + 8, dimensionSeed, 1 / 256, 2);
           if (noiseValue > .58)
             World.setBiomeMap(x, z, MapleWoods.id);
            }
        }
    }
});

//MAIN

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random) {
var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
 coords = GenerationUtils.findSurface(coords.x, 88, coords.z);
 var Biome = World.getBiome(coords.x, coords.z);
  var regi = BlockSource.getCurrentWorldGenRegion();
if(coords.y < 56) return;
for (var x = 0; x < randomInt(3, 5); x++) {
 for (var z = 0; z < randomInt(3, 5); z++) {
     
  if (Biome == MapleWoods.id || Biome == 4  && random.nextFloat() < .4) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0) 
      World.setBlock(coords.x + x, coords.y + 1, coords.z + z, BlockID.mapleLeavesC, 0); 
        }

  if (Biome == Autumn.id && random.nextFloat() < .45) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0)   
      World.setBlock(coords.x + x, coords.y + 1, coords.z + z, BlockID.mapleLeavesAuC, 0); 
        }

  if (Biome == Autumn.id && random.nextFloat() < .35) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0)   
      World.setBlock(coords.x + x, coords.y + 1, coords.z + z, BlockID.mapleLeavesAuRedC, 0); 
        }

  if (Biome == 30 || Biome == 31 || Biome == 34 && random.nextFloat() < .3) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0)   
      World.setBlock(coords.x + x, coords.y + 1, coords.z + z, BlockID.mapleLeavesWhinterC, 0); 
        }
  if (Biome == 30 || Biome == 31 || Biome == 34 && random.nextFloat() < .22) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0)   
      World.setBlock(coords.x + x, coords.y + 1, coords.z + z, BlockID.blueBush, 0); 
        }
    } 
}

  if (Biome == Autumn.id || Biome == MapleWoods.id && random.nextFloat() < .35) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0 && World.getBlockID(coords.x, coords.y + 2, coords.z) == 0) {
      World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.foulBerriedBush, 0); 
      World.setBlock(coords.x, coords.y + 2, coords.z, BlockID.foulBerriedBushTop, 0); 
        }
    }

  if (Biome == Autumn.id && random.nextFloat() < .5) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0 || BlockID.mapleLeavesAuC || BlockID.mapleLeavesAuRedC) {
      World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.autumnCrocus, 0); 
        }
    }

//NORMAL_TREES

  if (Biome == Autumn.id && random.nextFloat() < .55) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z-1) == 2) {
      mapleA.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
        }
    }

  if (Biome == Autumn.id && random.nextFloat() < .55) {
        if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z-1) == 2) {
      mapleR.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
        }
    }

  if (Biome == Autumn.id && random.nextFloat() < .28 || Biome == MapleWoods.id && random.nextFloat() < .5) {
        if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z-1) == 2) {
      mapleG.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
        }
    }
 
  if (Biome == 30 || Biome == 31 || Biome == 34 && random.nextFloat() < .35) {
        if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z-1) == 2) {
      mapleW.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
        }
    }

//BIG_TREES

  if (Biome == Autumn.id && random.nextFloat() < .16) {
        if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z-1) == 2) {
      mapleBA.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
        }
    }

  if (Biome == Autumn.id && random.nextFloat() < .12) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z-1) == 2) {
      mapleBR.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
        }
    }

  if (Biome == Autumn.id && random.nextFloat() < .2 || Biome == MapleWoods.id && random.nextFloat() < .02) {
        if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z-1) == 2) {
      mapleBG.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
        }
    }
 
  if (Biome == 30 || Biome == 31 || Biome == 34 && random.nextFloat() < .06) {
        if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z-1) == 2 
) {
      mapleBW.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
        }
    }
//BUSHES

generateStructureInBiomes([Autumn.id], {str: bushA, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal:.16}}, random);
generateStructureInBiomes([Autumn.id, MapleWoods.id], {str: bushR, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .2}}, random);
generateStructureInBiomes([MapleWoods.id, Autumn.id], {str: bushG, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .18}}, random);
generateStructureInBiomes([30, 31, 34], {str: bushW, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal:.14}}, random);
generateStructureInBiomes([4, 1, 29, 6], {str: bushVO, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .12}}, random);
generateStructureInBiomes([5, 160, 32], {str: bushVS, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .12}}, random);

//CAMP

generateStructureInBiomes([5, 160, 32, 30], {str: fireN, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .02}}, random);
generateStructureInBiomes([5, 160, 32, 30], {str: fireL, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .02}}, random);
generateStructureInBiomes([30, 31, 34], {str: thriveN, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .03}}, random);
generateStructureInBiomes([30, 31, 34], {str: thriveL, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .01}}, random);
});