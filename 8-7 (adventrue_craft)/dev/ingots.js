var BLOCK_TYPE_ORE = Block.createSpecialType({base: 15, solid: true, destroytime: 4, explosionres: 3}, "stone");
IDRegistry.genBlockID("xeon_ore");
Block.createBlock("xeon_ore", [{name: "Xeon ore", texture: [["xeon_ore", 0], ["xeon_ore", 0], ["xeon_ore", 0], ["xeon_ore", 0], ["xeon_ore", 0], ["xeon_ore", 0]], inCreative: true}], BLOCK_TYPE_ORE);
ToolAPI.registerBlockMaterial(BlockID.xeon_ore, "stone", 2, true);
Block.setDestroyLevel("xeon_ore", 3);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 10; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 48);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.xeon_ore, 1, 6);
    }
});
IDRegistry.genBlockID("axel_ore");
Block.createBlock("axel_ore", [{name: "Axel ore", texture: [["axel_ore", 0], ["axel_ore", 0], ["axel_ore", 0], ["axel_ore", 0], ["axel_ore", 0], ["axel_ore", 0]], inCreative: true}], BLOCK_TYPE_ORE);
ToolAPI.registerBlockMaterial(BlockID.axel_ore, "stone", 2, true);
Block.setDestroyLevel("axel_ore", 2);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 10; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 30);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.axel_ore, 2, 6);
    }
});
Recipes.addFurnace(BlockID.xeon_ore, ItemID.xeonIngot);
Recipes.addFurnace(BlockID.axel_ore, ItemID.axelIngot, 0);
var lol = __config__.access("old_recepis_ingots");
Callback.addCallback("PostLoaded", function () {
    if (lol == true) {
        Recipes.addFurnace(22, ItemID.xeonIngot);
        Recipes.addFurnace(173, ItemID.axelIngot);
    }
});

