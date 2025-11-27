Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var random = Math.random() * 1;
    if (random <= 100) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.grass2) {
            setWood(coords);
        }
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var random = Math.random() * 1;
    if (random <= 100) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.grass2) {
            setWood(coords);
        }
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var random = Math.random() * 1;
    if (random <= 100) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.grass2) {
            setWood(coords);
        }
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var random = Math.random() * 1;
    if (random <= 100) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.grass2) {
            setWood(coords);
        }
    }
});

