IDRegistry.genBlockID("lapadin_ore");
Block.createBlock("lapadin_ore", [{name: "Lapadin ore", texture: [["lapadin_ore", 0], ["lapadin_ore", 0], ["lapadin_ore", 0], ["lapadin_ore", 0], ["lapadin_ore", 0], ["lapadin_ore", 0]], inCreative: true}], BLOCK_TYPE_ORE);
ToolAPI.registerBlockMaterial(BlockID.lapadin_ore, "stone", 4, true);
Block.registerDropFunction("lapadin_ore", function (coords, blockID, blockData, level, enchant) {
    if (level > 3) {
        if (enchant.silk) {
            return [[blockID, 1, 0]];
        }
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return [[ItemID.lapadinCrystal, 1, 0]];
    }
    return [];
}, 3);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 10; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.lapadin_ore, 1, 3);
    }
});

