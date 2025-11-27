Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    var random = Math.random() * 200;
    if (random <= 1) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == 121) {
            if (World.getBlock(coords.x, coords.y + 1, coords.z).id == 0) {
                dungeon.cube3x3Empty({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 1, coordsZ: coords, plusZ: true, Z: 0, cubeID: 206, cubeData: 0});
                World.setBlock(coords.x, coords.y + 1, coords.z, 54, 0);
                World.setBlock(coords.x + 2, coords.y + 1, coords.z, 44, 1);
                World.setBlock(coords.x + 2, coords.y + 1, coords.z + 1, 44, 1);
                World.setBlock(coords.x + 2, coords.y + 1, coords.z - 1, 44, 1);
                World.setBlock(coords.x - 2, coords.y + 1, coords.z, 44, 1);
                World.setBlock(coords.x - 2, coords.y + 1, coords.z + 1, 44, 1);
                World.setBlock(coords.x - 2, coords.y + 1, coords.z - 1, 44, 1);
                World.setBlock(coords.x, coords.y + 1, coords.z + 2, 44, 1);
                World.setBlock(coords.x + 1, coords.y + 1, coords.z + 2, 44, 1);
                World.setBlock(coords.x - 1, coords.y + 1, coords.z + 2, 44, 1);
                World.setBlock(coords.x, coords.y + 1, coords.z - 2, 44, 1);
                World.setBlock(coords.x + 1, coords.y + 1, coords.z - 2, 44, 1);
                World.setBlock(coords.x - 1, coords.y + 1, coords.z - 2, 44, 1);
                World.setBlock(coords.x - 2, coords.y + 1, coords.z - 2, 139, 0);
                World.setBlock(coords.x + 2, coords.y + 1, coords.z - 2, 139, 0);
                World.setBlock(coords.x - 2, coords.y + 1, coords.z + 2, 139, 0);
                World.setBlock(coords.x + 2, coords.y + 1, coords.z + 2, 139, 0);
                World.setBlock(coords.x - 2, coords.y + 2, coords.z - 2, 139, 0);
                World.setBlock(coords.x + 2, coords.y + 2, coords.z - 2, 139, 0);
                World.setBlock(coords.x - 2, coords.y + 2, coords.z + 2, 139, 0);
                World.setBlock(coords.x + 2, coords.y + 2, coords.z + 2, 139, 0);
                World.setBlock(coords.x - 2, coords.y + 3, coords.z - 2, BlockID.kristalLight, 0);
                World.setBlock(coords.x + 2, coords.y + 3, coords.z - 2, BlockID.kristalLight, 0);
                World.setBlock(coords.x - 2, coords.y + 3, coords.z + 2, BlockID.kristalLight, 0);
                World.setBlock(coords.x + 2, coords.y + 3, coords.z + 2, BlockID.kristalLight, 0);
                World.setBlock(coords.x, coords.y + 2, coords.z, BlockID.runeAltarDungeon, 0);
                fillChest2(coords.x, coords.y + 1, coords.z);
            }
        }
    }
});

