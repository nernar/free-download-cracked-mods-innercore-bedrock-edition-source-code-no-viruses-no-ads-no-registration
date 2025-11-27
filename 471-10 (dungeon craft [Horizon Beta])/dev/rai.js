var rai = new CustomBiome("rai");
rai.setSkyColor(6750207);
rai.setGrassColor(6750207);
rai.setFoliageColor(6750207);
rai.setCoverBlock(BlockID.grass2, 0);
rai.setSurfaceBlock(BlockID.dirt2, 0);
rai.setFillingBlock(BlockID.stone2, 0);
Callback.addCallback("GenerateBiomeMap", function (x, z, rand, dimensionId, chunkSeed, worldSeed) {
    (x *= 16, z *= 16);
    for (var xs = x; xs < x + 16; xs++) {
        for (var zs = z; zs < z + 16; zs++) {
            if (GenerationUtils.getPerlinNoise(xs, 0, zs, worldSeed, 0.025, 3) < 0.3) {
                World.setBiomeMap(xs, zs, rai.id);
            }
        }
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var random = Math.random() * 2;
    if (random <= 1) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 70, 200);
            if (World.getBiome(coords.x, coords.z) == rai.id) {
                if (World.getBlockID(coords.x, coords.y, coords.z) == 0) {
                    GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.stone2, 10, 100, true);
                }
            }
        }
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var random = Math.random() * 4;
    if (random <= 5) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 0, 40);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlockID(coords.x, coords.y, coords.z) == BlockID.stone2) {
            if (World.getBlockID(coords.x, coords.y + 1, coords.z) == 0) {
                World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kristalLight, 0);
            }
        }
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var random = Math.random() * 4;
    if (random <= 2) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 0, 40);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grass2) {
            if (World.getBlockID(coords.x, coords.y + 1, coords.z) == 0) {
                World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.a0, 0);
            }
        }
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    var random = Math.random() * 5;
    if (random <= 3) {
        for (var i = 0; i < 4; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 40);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ore, 0, 10, true);
        }
    }
});

