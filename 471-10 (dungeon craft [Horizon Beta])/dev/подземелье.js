Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var random = Math.random() * 2000;
    if (random <= 100) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 1);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlockID(coords.x, coords.y + 5, coords.z) == 1) {
            if (World.getBlockID(coords.x, coords.y - 5, coords.z) == 1) {
                dungeon.cube5x5({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 0, coordsZ: coords, plusZ: true, Z: 0, cubeID: 4, cubeData: 0});
                dungeon.cube5x5Empty({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 1, coordsZ: coords, plusZ: true, Z: 0, cubeID: 98, cubeData: 0});
                dungeon.cube5x5Empty({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: true, Z: 0, cubeID: 98, cubeData: 0});
                dungeon.cube5x5Empty({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 3, coordsZ: coords, plusZ: true, Z: 0, cubeID: 98, cubeData: 0});
                dungeon.cube5x5({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 4, coordsZ: coords, plusZ: true, Z: 0, cubeID: 4, cubeData: 0});
                dungeon.cube3x3({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 1, coordsZ: coords, plusZ: true, Z: 0, cubeID: 0, cubeData: 0});
                dungeon.cube3x3({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: true, Z: 0, cubeID: 0, cubeData: 0});
                dungeon.cube3x3({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 3, coordsZ: coords, plusZ: true, Z: 0, cubeID: 0, cubeData: 0});
                World.setBlock(coords.x, coords.y + 1, coords.z, 54, 0);
                World.setBlock(coords.x, coords.y + 2, coords.z, 52, 1);
                fillChest3(coords.x, coords.y + 1, coords.z);
                Entity.spawn(coords.x + 1, coords.y + 1, coords.z, 23);
                Entity.spawn(coords.x - 1, coords.y + 1, coords.z, 23);
            }
        }
    }
});

