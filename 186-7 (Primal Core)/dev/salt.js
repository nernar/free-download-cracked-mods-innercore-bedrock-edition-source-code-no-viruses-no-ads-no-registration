Generator.setItem("salt_rock", {name: "Salt", texture: "salt_dust_rock", stack: 64});
IDRegistry.genBlockID("salt_rock");
Block.createBlock("salt_rock", [{name: "Salt rock", texture: [["salt_rock", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.salt_rock, "stone", 1, true);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShapeless({id: ItemID.salt_rock, count: 9, data: 0}, [{id: BlockID.salt_rock, data: 0}]);
    Recipes.addShaped({id: BlockID.salt_rock, count: 1, data: 0}, ["sss", "sss", "sss"], ["s", ItemID.salt_rock, 0]);
    Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        if (Math.random() < 0.5) {
            for (let i = 0; i < 24; i++) {
                let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 6, 64);
                if (World.getBlockID(coords.x, coords.y, coords.z) === 1) {
                    GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.salt_rock, 0, 7, true);
                }
            }
        }
    });
});

