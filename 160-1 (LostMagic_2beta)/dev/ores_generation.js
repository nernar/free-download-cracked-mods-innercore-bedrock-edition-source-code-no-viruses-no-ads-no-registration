Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 34);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.respherite_ore, 0, 7);
    }
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 34);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.hellite_ore, 0, 7);
    }
}
)
Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<3;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 130);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.mishril_ore, 0, 8);
    }
}
)
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<1;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 34);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ruby_ore, 0, 4);
    }
}
)