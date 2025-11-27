IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper", [
    { name: "Copper Ore", texture: [["ore_copper", 0]], inCreative: true }
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreCopper, "stone");
Block.setDestroyLevel(BlockID.oreCopper, 1);

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastLiquidRecipe(BlockID.oreCopper, { type: "copper", count: 1 });
});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    for (var i = 0; i < 15; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 64);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreCopper, 0, 15);
    }
});

IDRegistry.genBlockID("oreSalt");
Block.createBlock("oreSalt", [
    { name: "Salt Ore", texture: [["ore_salt", 0]], inCreative: true }
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSalt, "stone");
Block.registerDropFunction(BlockID.oreSalt, function (coords, blockID, blockData, level, enchant) {
    if (level >= 1) {
        return [[ItemID.salt, 1, 0]];
    }
    return [];
}, 1);

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    for (var i = 0; i < 15; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 64);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreSalt, 0, 15);
    }
});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    for (var i = 0; i < 15; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 64);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, 82, 0, 15);
    }
});