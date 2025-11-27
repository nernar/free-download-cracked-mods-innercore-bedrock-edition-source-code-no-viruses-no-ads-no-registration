Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
    if (Math.random() < __config__.access("generation.numbers.other.salt")) {
        for (var idd in SaltBiomes) {
            var id = SaltBiomes[idd];
            if ((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16) == id)) {
                World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.salt, 0);
                if (Math.random() < 0.5) {
                    World.setBlock(coords.x, coords.y + 2, coords.z, BlockID.salt, 0);
                }
                if (Math.random() < 0.5) {
                    World.setBlock(coords.x + 1, coords.y + 1, coords.z, BlockID.salt, 0);
                }
                if (Math.random() < 0.5) {
                    World.setBlock(coords.x - 1, coords.y + 1, coords.z, BlockID.salt, 0);
                }
                if (Math.random() < 0.5) {
                    World.setBlock(coords.x, coords.y + 1, coords.z + 1, BlockID.salt, 0);
                }
                if (Math.random() < 0.5) {
                    World.setBlock(coords.x, coords.y + 1, coords.z - 1, BlockID.salt, 0);
                }
            }
        }
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if (Math.random() < __config__.access("generation.numbers.other.salt")) {
        if (World.getBlockID(coords.x, coords.y, coords.z) != 0) {
            World.setBlock(coords.x, coords.y, coords.z, BlockID.salt, 0);
        }
    }
});

