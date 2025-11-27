Callback.addCallback("GenerateChunkUnderground", function (cx, cz) {
    for (let x = 0; x <= 16; x++) {
        for (let y = 1; y <= 4; y++) {
            for (let z = 0; z <= 16; z++) {
                if (World.getBlockID(cx * 16 + x, y, cz * 16 + z) === 7) {
                    World.setBlock(cx * 16 + x, y, cz * 16 + z, 1, 0);
                }
            }
        }
    }
});
Callback.addCallback("GenerateNetherChunk", function (cx, cz) {
    for (let x = 0; x <= 16; x++) {
        for (let y = 1; y <= 4; y++) {
            for (let z = 0; z <= 16; z++) {
                if (World.getBlockID(cx * 16 + x, y, cz * 16 + z) === 7) {
                    World.setBlock(cx * 16 + x, y, cz * 16 + z, 87);
                }
                if (World.getBlockID(cx * 16 + x, 127 - y, cz * 16 + z) === 7) {
                    World.setBlock(cx * 16 + x, 127 - y, cz * 16 + z, 87);
                }
            }
        }
    }
});

