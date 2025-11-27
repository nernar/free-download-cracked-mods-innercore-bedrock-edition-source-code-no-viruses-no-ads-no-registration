Callback.addCallback("GenerateChunk", function (chunx, chunz, random, dimension, chunhSeed, worldSeed, dimensionSeed) {
    let coords = {x: chunx * 16, y: 1, z: chunz * 16};
    for (let x = 0; x < 16; x++) {
        for (let z = 0; z < 16; z++) {
            for (let y = 0; y < 16; y++) {
                if (World.getBlockID(coords.x + x, coords.y + y, coords.z + z) == 7) {
                    World.setBlock(coords.x + x, coords.y + y, coords.z + z, 1);
                }
            }
        }
    }
});

