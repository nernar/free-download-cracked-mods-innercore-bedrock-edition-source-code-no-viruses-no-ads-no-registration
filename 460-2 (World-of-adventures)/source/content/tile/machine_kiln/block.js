IDRegistry.genBlockID("kiln");
Block.createBlockWithRotation("kiln", [
    {
        name: "Kiln",
        texture: [
            ["furnace_ceramic_side", 0], ["furnace_ceramic_side", 0],
            ["furnace_ceramic_side", 0], ["furnace_ceramic_front", 0],
            ["furnace_ceramic_side", 0], ["furnace_ceramic_side", 0]
        ],
        inCreative: true
    }
], __OBJECT_BLOCK_TYPE);

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.kiln, count: 1, data: 0 }, [
        "aaa",
        "a#a",
        "aaa"
    ], ['a', 336, -1]);
 });