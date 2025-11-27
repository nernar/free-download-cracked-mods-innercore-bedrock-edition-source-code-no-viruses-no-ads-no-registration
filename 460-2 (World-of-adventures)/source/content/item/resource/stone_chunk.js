IDRegistry.genItemID("chunkStone");
Item.createItem("chunkStone", "Stone", { name: "chunk_stone" });

Block.registerDropFunction(1, function (coords, blockID, blockData, lvl, enchant) {
    if (lvl >= 1) {
        return [[ItemID.chunkStone, Random.integer(0, 5), 0]];
    }
    return [];
}, 1);

Item.registerUseFunction("chunkStone", function (coords, item, block) {
    if (item.count >= 2) {
        new UI.Container().openAs(Graphics.createStoneProcessingUI());
    }
});

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 4, count: 1, data: 0 }, [
        "aa",
        "aa"
    ], ['a', ItemID.chunkStone, -1]);
});