Callback.addCallback("PostLoaded", function () {
    Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 35, 120);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.copper_ore, 0, 8);
        }
    });
    Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 30);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.deep_iron_ore, 0, 5);
        }
    });
    Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 25, 48);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.tin_ore, 0, 10);
        }
    });
    Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.prometheum_ore, 0, 6);
        }
    });
    Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 128);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.manganese_ore, 0, 9);
        }
    });
    Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 128);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oureclase_ore, 0, 5);
        }
    });
    Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 72);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.infuscolium_ore, 0, 7);
        }
    });
    Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 40);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.adamantine_ore, 0, 6);
        }
    });
    Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 30);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.rubracium_ore, 0, 3);
        }
    });
    Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.atlarus_ore, 0, 3);
        }
    });
    Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 32, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.carmot_ore, 0, 6);
        }
    });
    Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 32, 128);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.mithril_ore, 0, 5);
        }
    });
    Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 128);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.zinc_ore, 0, 8);
        }
    });
    Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 128);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.orichalcum_ore, 0, 6);
        }
    });
    Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 24, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.astral_silver_ore, 0, 6);
        }
    });
    Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 128);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.silver_ore, 0, 8);
        }
    });
    Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 80);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.platinum_ore, 0, 4);
        }
    });
    Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 255);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ignatius_ore, 0, 10);
        }
    });
    Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 16, 124);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.shadow_iron_ore, 0, 6);
        }
    });
    Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.lemurite_ore, 0, 7);
        }
    });
    Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 32, 255);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.midasium_ore, 0, 6);
        }
    });
    Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 120);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.vyroxeres_ore, 0, 5);
        }
    });
    Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 128);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ceruclase_ore, 0, 5);
        }
    });
    Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 128);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.alduorite_ore, 0, 4);
        }
    });
    Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 27, 120);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.kalendrite_ore, 0, 5);
        }
    });
    Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 128);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.vulcanite_ore, 0, 5);
        }
    });
    Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 128);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.sanguinite_ore, 0, 4);
        }
    });
    Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 128);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.meutoite_ore, 0, 7);
        }
    });
    Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
        for (var i = 0; i < 1; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 128);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.eximite_ore, 0, 7);
        }
    });
});

