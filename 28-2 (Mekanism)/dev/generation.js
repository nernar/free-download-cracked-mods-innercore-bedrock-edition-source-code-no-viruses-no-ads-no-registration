Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    GenerationUtils.lockInBlock(BlockID.OsmiumOre, 0, 1, false);
    for (var i = 0; i < 10; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
        OreGenerator.genOreNormal(coords.x, coords.y, coords.z);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    GenerationUtils.lockInBlock(BlockID.CopperOre, 0, 1, false);
    for (var i = 0; i < 10; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
        OreGenerator.genOreNormal(coords.x, coords.y, coords.z);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    GenerationUtils.lockInBlock(BlockID.TinOre, 0, 1, false);
    for (var i = 0; i < 10; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
        OreGenerator.genOreNormal(coords.x, coords.y, coords.z);
    }
});

