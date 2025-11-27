IDRegistry.genBlockID("minicioOre");
Block.createBlock("minicioOre", [{name: "Minicio Ore", texture: [["minicioOre", 0]], inCreative: true}], stone_type);
ToolAPI.registerBlockMaterial(BlockID.minicioOre, "stone", 2, true);
IDRegistry.genBlockID("minicioOreNether");
Block.createBlock("minicioOreNether", [{name: "Nether Minicio Ore", texture: [["minicioOreNether", 0]], inCreative: true}], stone_type);
ToolAPI.registerBlockMaterial(BlockID.minicioOreNether, "stone", 2, true);
IDRegistry.genBlockID("minicioOreEnd");
Block.createBlock("minicioOreEnd", [{name: "End Minicio Ore", texture: [["minicioOreEnd", 0]], inCreative: true}], stone_type);
ToolAPI.registerBlockMaterial(BlockID.minicioOreEnd, "stone", 2, true);
Block.registerDropFunction("minicioOre", function (coords, blockID, blockData, toolLevel, enchant) {
    if (toolLevel > 1) {
        ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
        return [[ItemID.minicioEssence, 1 + parseInt(Math.random() * 5), 0]];
    }
    return [];
});
ToolAPI.registerBlockMaterial(BlockID.EssenceOreNether, "stone", 2, true);
Block.registerDropFunction("minicioOreNether", function (coords, blockID, blockData, toolLevel, enchant) {
    if (toolLevel > 1) {
        ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
        return [[ItemID.minicioEssence, 1 + parseInt(Math.random() * 5), 0]];
    }
    return [];
});
Block.registerDropFunction("minicioOreEnd", function (coords, blockID, blockData, toolLevel, enchant) {
    if (toolLevel > 1) {
        ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
        return [[ItemID.minicioEssence, 1 + parseInt(Math.random() * 5), 0]];
    }
    return [];
});
Callback.addCallback("PostLoaded", function () {
    if (config.generate_overworld) {
        Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
            for (var i = 0; i < 20; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 107);
                GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.minicioOre, 0, 6);
            }
        });
    }
    if (config.generate_nether) {
        Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
            GenerationUtils.lockInBlock(BlockID.minicioOreNether, 0, 87, false);
            for (var i = 0; i < 18; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 123);
                GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.minicioOreNether, 0, 6);
            }
        });
    }
    if (config.generate_end) {
        Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
            GenerationUtils.lockInBlock(BlockID.minicioOreEnd, 0, 121, false);
            for (var i = 0; i < 18; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 123);
                GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.minicioOreEnd, 0, 8);
            }
        });
    }
});

