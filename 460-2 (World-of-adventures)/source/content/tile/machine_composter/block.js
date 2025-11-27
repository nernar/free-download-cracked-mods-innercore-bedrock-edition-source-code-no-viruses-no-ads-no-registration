IDRegistry.genBlockID("composter");
Block.createBlockWithRotation("composter", [
    {
        name: "Composter",
        texture: [
            ["composter_bottom", 0], ["composter_top", 0],
            ["composter_side", 0], ["composter_side", 0],
            ["composter_side", 0], ["composter_side", 0]
        ],
        inCreative: true
    }
], __OBJECT_BLOCK_TYPE);

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.composter, count: 1, data: 0 }, [
        "b#b",
        "b#b",
        "aaa"
    ], ['a', 5, -1, 'b', 85, -1]);
});