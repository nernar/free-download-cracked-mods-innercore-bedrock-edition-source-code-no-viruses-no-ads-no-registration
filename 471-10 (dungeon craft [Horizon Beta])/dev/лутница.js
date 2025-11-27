Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var random = Math.random() * 10000;
    if (random <= 100) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == 2) {
            dungeon.cube5x5({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 0, coordsZ: coords, plusZ: true, Z: 0, cubeID: 5, cubeData: 2});
            World.setBlock(coords.x - 2, coords.y + 1, coords.z, 139, 0);
            World.setBlock(coords.x - 2, coords.y + 1, coords.z + 1, 139, 0);
            World.setBlock(coords.x - 2, coords.y + 1, coords.z + 2, 139, 0);
            World.setBlock(coords.x - 2, coords.y + 1, coords.z - 1, 139, 0);
            World.setBlock(coords.x - 2, coords.y + 1, coords.z - 2, 139, 0);
            World.setBlock(coords.x + 2, coords.y + 1, coords.z, 139, 0);
            World.setBlock(coords.x + 2, coords.y + 1, coords.z + 1, 139, 0);
            World.setBlock(coords.x + 2, coords.y + 1, coords.z + 2, 139, 0);
            World.setBlock(coords.x + 2, coords.y + 1, coords.z - 1, 139, 0);
            World.setBlock(coords.x + 2, coords.y + 1, coords.z - 2, 139, 0);
            World.setBlock(coords.x, coords.y + 1, coords.z + 2, 139, 0);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z + 2, 139, 0);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z + 2, 139, 0);
            World.setBlock(coords.x, coords.y + 1, coords.z - 2, 139, 0);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z - 2, 139, 0);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z - 2, 139, 0);
            World.setBlock(coords.x, coords.y + 1, coords.z, 54, 0);
            fillChest5(coords.x, coords.y + 1, coords.z);
        }
    }
});

