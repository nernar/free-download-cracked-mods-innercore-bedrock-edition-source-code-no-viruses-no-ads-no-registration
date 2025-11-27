IDRegistry.genBlockID("bellows");
Block.createBlockWithRotation("bellows", [
    {
        name: "Bellows",
        texture: [
            ["bellows_top", 0], ["bellows_top", 0],
            ["bellows_side", 0], ["bellows_side", 0],
            ["bellows_side", 0], ["bellows_side", 0]
        ],
        inCreative: true
    }
], __OBJECT_BLOCK_TYPE);

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.bellows, count: 1, data: 0 }, [
        "ccc",
        "b#b",
        "dad"
    ], ['a', 33, 0, 'b', 334, 0, 'c', 5, -1, 'd', ItemID.gearWooden, -1]);
});