IDRegistry.genBlockID("ore_crystal");
Block.createBlock("ore_crystal", [{name: "Crystal ore", texture: [["crystal_ore", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.ore_crystal, "stone");
Block.setDestroyLevel("ore_crystal", 1);
Block.registerDropFunctionForID(BlockID.ore_crystal, function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.magic_crystal, 1, 0]];
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 10; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ore_crystal, 0, 6);
    }
});

