Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var random = Math.random() * 10;
    if (random <= 1) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 1);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.grass2) {
            dungeon1.cube5x5({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: false, Y: 0, coordsZ: coords, plusZ: true, Z: 0, cubeID: BlockID.stone2, cubeData: 0});
            dungeon1.cube5x5Empty({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 1, coordsZ: coords, plusZ: true, Z: 0, cubeID: BlockID.Breastya, cubeData: 0});
            dungeon1.cube5x5Empty({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 1, coordsZ: coords, plusZ: true, Z: 0, cubeID: BlockID.Breastya, cubeData: 0});
            dungeon1.cube5x5Empty({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 1, coordsZ: coords, plusZ: true, Z: 0, cubeID: BlockID.Breastya, cubeData: 0});
            dungeon1.cube3x3WallZ({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: false, Y: 1, coordsZ: coords, plusZ: true, Z: 2, cubeID: BlockID.board, cubeData: 0});
            dungeon1.cube3x3WallZ({coordsX: coords, plusX: false, X: 0, coordsY: coords, plusY: false, Y: 0, coordsZ: coords, plusZ: false, Z: 4, cubeID: BlockID.board, cubeData: 0});
            dungeon1.cube3x3WallX({coordsX: coords, plusX: true, X: 2, coordsY: coords, plusY: true, Y: 0, coordsZ: coords, plusZ: true, Z: 2, cubeID: BlockID.board, cubeData: 0});
            dungeon1.cube3x3WallX({coordsX: coords, plusX: false, X: 4, coordsY: coords, plusY: true, Y: 0, coordsZ: coords, plusZ: true, Z: 0, cubeID: BlockID.board, cubeData: 0});
            dungeon1.cube5x5Empty({coordsX: coords, plusX: true, X: 2, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: true, Z: 0, cubeID: BlockID.Breastya, cubeData: 0});
            dungeon1.cube3x3({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 0, coordsZ: coords, plusZ: true, Z: 0, cubeID: BlockID.board, cubeData: 0});
            dungeon1.cube3x3({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 1, coordsZ: coords, plusZ: true, Z: 0, cubeID: BlockID.Breastya, cubeData: 0});
            World.setBlock(coords.x, coords.y - 3, coords.z + 2, BlockID.glass2, 0);
            World.setBlock(coords.x, coords.y - 3, coords.z - 2, BlockID.glass2, 0);
            World.setBlock(coords.x + 2, coords.y - 3, coords.z, BlockID.glass2, 0);
            World.setBlock(coords.x - 2, coords.y - 3, coords.z, 0, 0);
            World.setBlock(coords.x - 2, coords.y - 4, coords.z, 0, 0);
            dungeon1.cube3x3({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: false, Y: 4, coordsZ: coords, plusZ: true, Z: 0, cubeID: 0, cubeData: 0});
            dungeon1.cube3x3({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 1, coordsZ: coords, plusZ: true, Z: 0, cubeID: 0, cubeData: 0});
            dungeon1.cube3x3({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 1, coordsZ: coords, plusZ: true, Z: 0, cubeID: 0, cubeData: 0});
        }
    }
});

