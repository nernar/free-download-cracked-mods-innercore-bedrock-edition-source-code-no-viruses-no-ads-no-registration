//BIOMES

const biomes = [1, 4, 5, 27, 155, 19];

var autumn = new CustomBiome("autumn")
.setGrassColor(0xFF8C00)
.setFoliageColor(0xFF8C00);
autumn.setServerJson(JSON.stringify({
"components": {
    "minecraft:climate": {
        "downfall": 0.0,
        "snow_accumulation": [
            0.0,
            0.0
        ],
        "temperature": 1.0,
        "blue_spores": 0,
        "red_spores": 0,
        "white_ash": 0,
        "ash": 0
    },
    "minecraft:overworld_height": {
        "noise_type": "lowlands"
    },
    "animal": {},
    "monster": {},
    "overworld": {},
    "autumn": {},
    "minecraft:surface_parameters": {
        "top_material": "minecraft:grass",
        "mid_material": "minecraft:dirt",
        "foundation_material": "minecraft:stone",
        "sea_floor_material": "minecraft:clay",
        "sea_material": "minecraft:water",
        "sea_floor_depth": 7
    },
    "minecraft:overworld_generation_rules": {
        "hills_transformation": "forest_hills",
        "river_transformation": "frozen_river",
        "generate_for_climates": [
            [
                "cold",
                35
            ],
            [
                "medium",
                32
            ],
            [
                "frozen",
                8
            ]
        ],
        "shore_transformation": "cold_beach"
    }
}
}));

autumn.setClientJson(JSON.stringify({
"water_surface_color": "#0b1662",
"water_fog_color": "#0e1c5e",
"water_surface_transparency": 0.7,
"water_fog_distance": 12,
"fog_identifier": "better_atmosphere:autumn"
}));



var maple_woods = new CustomBiome("maple_woods")
maple_woods.setServerJson(JSON.stringify({
"components": {
    "minecraft:climate": {
        "downfall": 0.0,
        "snow_accumulation": [
            0.0,
            0.0
        ],
        "temperature": 1.0,
        "blue_spores": 0,
        "red_spores": 0,
        "white_ash": 0,
        "ash": 0
    },
    "minecraft:overworld_height": {
        "noise_type": "lowlands"
    },
    "animal": {},
    "monster": {},
    "overworld": {},
    "autumn": {},
    "minecraft:surface_parameters": {
        "top_material": "minecraft:grass",
        "mid_material": "minecraft:dirt",
        "foundation_material": "minecraft:stone",
        "sea_floor_material": "minecraft:gravel",
        "sea_material": "minecraft:water",
        "sea_floor_depth": 7
    },
    "minecraft:overworld_generation_rules": {
        "hills_transformation": "forest_hills",  
        "generate_for_climates": [
            [
                "cold",
                8
            ],
            [
                "medium",
                38
            ],
            [
                "warm",
                34
            ]
        ]
    }
}
}));

maple_woods.setClientJson(JSON.stringify({
"water_surface_color": "#0b1662",
"water_fog_color": "#0e1c5e",
"water_surface_transparency": 0.7,
"water_fog_distance": 12,
"fog_identifier": "better_atmosphere:maple_woods"
}));

//MAIN

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random) {
var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
 coords = GenerationUtils.findSurface(coords.x, 88, coords.z);
 var Biome = World.getBiome(coords.x, coords.z);
  var regi = BlockSource.getCurrentWorldGenRegion();
if(coords.y < 56) return;
for (var xx = 0; xx < randomInt(3, 5); xx++) {
 for (var zz = 0; zz < randomInt(3, 5); zz++) {
     
  if (Biome == maple_woods.id || Biome == 4  && random.nextFloat() < .4) {
   coords = GenerationUtils.findSurface(coords.x + xx, 88, coords.z + zz); 
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0) 
      World.setBlock(coords.x + xx, coords.y + 1, coords.z + zz, BlockID.mapleLeavesC, 0); 
        }

  if (Biome == autumn.id && random.nextFloat() < .45) {
   coords = GenerationUtils.findSurface(coords.x + xx, 88, coords.z + zz);  
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0)   
      World.setBlock(coords.x + xx, coords.y + 1, coords.z + zz, BlockID.mapleLeavesAuC, 0); 
        }

  if (Biome == autumn.id && random.nextFloat() < .35) {
   coords = GenerationUtils.findSurface(coords.x + xx, 88, coords.z + zz);
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0)   
      World.setBlock(coords.x + xx, coords.y + 1, coords.z + zz, BlockID.mapleLeavesAuRedC, 0); 
        }

  if (Biome == 30 || Biome == 31 || Biome == 34 && random.nextFloat() < .3) {
   coords = GenerationUtils.findSurface(coords.x + xx, 88, coords.z + zz);
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0)   
      World.setBlock(coords.x + xx, coords.y + 1, coords.z + zz, BlockID.mapleLeavesWhinterC, 0); 
        }
    } 
}

//PLANTS
   if(Biome == maple_woods.id || Biome == 4  && random.nextFloat() < .12) {
for(var i = 0; i < 5; i++) {
  for(var k = 0; k < randomInt(0,3); k++){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 88, coords.z);
  if (coords.y < 45) return;
    if(World.getBlockID(coords.x + k, coords.y, coords.z + k) == 2 && World.getBlockID(coords.x + k, coords.y + 1, coords.z + k) == 0 || BlockID.mapleLeavesC){ 
        World.setBlock(coords.x + k,coords.y+1,coords.z + k,BlockID.poisonBushB, 0);
         World.setBlock(coords.x + k,coords.y+2,coords.z + k,BlockID.poisonBush, 0);
            }
        }    
    }
} 
   
   if(Biome == 30 || Biome == 31 || Biome == 34 && random.nextFloat() < .24) {
for(var i = 0; i < 5; i++) {
  for(var k = 0; k < randomInt(0,5); k++){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 88, coords.z);
  if (coords.y < 45) return;
    if(World.getBlockID(coords.x + k, coords.y, coords.z + k) == 2 && World.getBlockID(coords.x + k, coords.y + 1, coords.z + k) == 0 || BlockID.mapleLeavesC || BlockID.mapleLeavesWhinterC){ 
        World.setBlock(coords.x + k,coords.y+1,coords.z + k,BlockID.blueBush, 0);
            }
        }    
    }
} 

   if(Biome == autumn.id && random.nextFloat() < .36) {
for(var i = 0; i < 5; i++) {
  for(var k = 0; k < randomInt(0,3); k++){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 88, coords.z);
  if (coords.y < 45) return;
    if(World.getBlockID(coords.x + k, coords.y, coords.z + k) == 2 && World.getBlockID(coords.x + k, coords.y + 1, coords.z + k) == 0 || BlockID.mapleLeavesAuC || BlockID.mapleLeavesAuRedC){ 
        World.setBlock(coords.x + k,coords.y+1,coords.z + k,BlockID.foulBerriedBush, 0);
         World.setBlock(coords.x + k,coords.y+2,coords.z + k,BlockID.foulBerriedBushTop, 0);
            }
        }    
    }
} 

   if(Biome == autumn.id && random.nextFloat() < .55) {
for(var i = 0; i < 5; i++) {
  for(var k = 0; k < randomInt(0,6); k++){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 88, coords.z);
  if (coords.y < 45) return;
    if(World.getBlockID(coords.x + k, coords.y, coords.z + k) == 2 && World.getBlockID(coords.x + k, coords.y + 1, coords.z + k) == 0 || BlockID.mapleLeavesAuC || BlockID.mapleLeavesAuRedC){ 
        World.setBlock(coords.x + k,coords.y+1,coords.z + k,BlockID.autumnCrocus, 0);  
            }
        }    
    }
} 

//NORMAL_TREES
for (var i = 0; i < randomInt(1, 4); i++) {
  if (Biome == autumn.id && random.nextFloat() < .6) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleA.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      generateTree(AutumnPool, "mapleA", coords.x, coords.y + 1, coords.z, regi);
        }
    }

  if (Biome == autumn.id && random.nextFloat() < .6) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleR.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      generateTree(AutumnPool, "mapleR", coords.x, coords.y + 1, coords.z, regi);
        }
    }

  if (Biome == autumn.id && random.nextFloat() < .38 || Biome == maple_woods.id && random.nextFloat() < .5) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleG.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      generateTree(AutumnPool, "mapleG", coords.x, coords.y + 1, coords.z, regi);
        }
    }
  if (Biome == 30 || Biome == 31 || Biome == 34 && random.nextFloat() < .5) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleW.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      //generateTree(AutumnPool, "mapleY", coords.x, coords.y + 1, coords.z, regi);
        }
    }

}
  if (Biome == 30 || Biome == 31 || Biome == 34 && random.nextFloat() < .4) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleW.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      generateTree(AutumnPool, "mapleW", coords.x, coords.y + 1, coords.z, regi);
        }
    }

//BIG_TREES

  if (Biome == autumn.id && random.nextFloat() < .2) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleBA.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      generateTree(AutumnPool, "mapleBW", coords.x, coords.y + 1, coords.z, regi);
        }
    }

  if (Biome == autumn.id && random.nextFloat() < .2) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleBR.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      generateTree(AutumnPool, "mapleBW", coords.x, coords.y + 1, coords.z, regi);     
        }
    }

  if (Biome == autumn.id && random.nextFloat() < .2 || Biome == maple_woods.id && random.nextFloat() < .1) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleBG.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      generateTree(AutumnPool, "mapleBW", coords.x, coords.y + 1, coords.z, regi);                  
        }
    }
 
  if (Biome == autumn.id && random.nextFloat() < .2 || Biome == maple_woods.id && random.nextFloat() < .1) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleBG.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      //generateTree(AutumnPool, "mapleBY", coords.x, coords.y + 1, coords.z, regi);                  
        }
    }
 
  if (Biome == 30 || Biome == 31 || Biome == 34 && random.nextFloat() < .08) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleBW.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      generateTree(AutumnPool, "mapleBW", coords.x, coords.y + 1, coords.z, regi);
        }
    }
//BUSHES

//generateStructureInBiomes([autumn.id], {str: bushA, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal:.1}}, random);
generateBuilds([autumn.id], "AutumnBushesPool", "bushA", {offset: {x:0, y:1, z:0}, chance: 1, distance: 19, check:2});
//generateStructureInBiomes([autumn.id, maple_woods.id], {str: bushR, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .15}}, random);
generateBuilds([autumn.id, maple_woods.id], "AutumnBushesPool", "bushR", {offset: {x:0, y:1, z:0}, chance: 2, distance: 19, check:2});
//generateStructureInBiomes([maple_woods.id, autumn.id], {str: bushG, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .1}}, random);
generateBuilds([autumn.id, maple_woods.id], "AutumnBushesPool", "bushG", {offset: {x:0, y:1, z:0}, chance: 2, distance: 19, check:2});
//generateStructureInBiomes([30, 31, 34], {str: bushW, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal:.1}}, random);
generateBuilds([30, 31, 34], "AutumnBushesPool", "bushW", {offset: {x:0, y:1, z:0}, chance: 4, distance: 21, check:2});
//generateStructureInBiomes([4, 1, 29, 6], {str: bushVO, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .08}}, random);
generateBuilds([4, 1, 29, 6], "AutumnBushesPool", "bushVO", {offset: {x:0, y:1, z:0}, chance: 5, distance: 18, check:2});
//generateStructureInBiomes([5, 160, 32], {str: bushVS, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .09}}, random);
generateBuilds([5, 160, 32], "AutumnBushesPool", "bushVS", {offset: {x:0, y:1, z:0}, chance: 5, distance: 18, check:2});
//CAMP

//generateStructureInBiomes([5, 160, 32, 30], {str: fireN, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .002}}, random);
generateBuilds([5, 160, 32, 30], "AutumnBushesPool", "fireN", {offset: {x:0, y:1, z:0}, chance: 1, distance: 55, check:2});
//generateStructureInBiomes([5, 160, 32, 30], {str: fireL, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .002}}, random);
generateBuilds([5, 160, 32], "AutumnBushesPool", "fireL", {offset: {x:0, y:1, z:0}, chance: 1, distance: 55, check:2});
//generateStructureInBiomes([30, 31, 34], {str: thriveN, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .003}}, random);
generateBuilds([5, 160, 32], "AutumnBushesPool", "thriveN", {offset: {x:0, y:1, z:0}, chance: 1, distance: 55, check:2});
//generateStructureInBiomes([30, 31, 34], {str: thriveL, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .001}}, random);
generateBuilds([5, 160, 32], "AutumnBushesPool", "thriveL", {offset: {x:0, y:1, z:0}, chance: 1, distance: 60, check:2});
});