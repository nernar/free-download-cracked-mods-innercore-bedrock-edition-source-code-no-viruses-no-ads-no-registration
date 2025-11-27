IDRegistry.genBlockID("blockCopper");
Block.createBlock("blockCopper", [
    { name: "Copper Block", texture: [["block_copper", 0]], inCreative: true }
], "opaque");

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastLiquidRecipe(BlockID.blockCopper, { type: "copper", count: 9 });
    Recipes.addShaped({ id: BlockID.blockCopper, count: 1, data: 0 }, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.ingotCopper, -1]);
    Recipes.addShaped({ id: ItemID.ingotCopper, count: 9, data: 0 }, [
        "a"
    ], ['a', BlockID.blockCopper, -1]);
});

IDRegistry.genBlockID("blockSalt");
Block.createBlock("blockSalt", [
    { name: "Salt Block", texture: [["block_salt", 0]], inCreative: true }
], "opaque");

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastLiquidRecipe(BlockID.blockSalt, { type: "copper", count: 9 });
    Recipes.addShaped({ id: BlockID.blockSalt, count: 1, data: 0 }, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.salt, -1]);
    Recipes.addShaped({ id: ItemID.salt, count: 9, data: 0 }, [
        "a"
    ], ['a', BlockID.blockSalt, -1]);
});