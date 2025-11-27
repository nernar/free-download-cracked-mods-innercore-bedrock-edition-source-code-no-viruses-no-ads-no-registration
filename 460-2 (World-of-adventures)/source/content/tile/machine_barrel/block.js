IDRegistry.genBlockID("barrel");
Block.createBlockWithRotation("barrel", [
    {
        name: "Barrel",
        texture: [
            ["barrel_bottom", 0], ["barrel_top", 0],
            ["barrel_side", 0], ["barrel_side", 0],
            ["barrel_side", 0], ["barrel_side", 0]
        ],
        inCreative: true
    }
], "opaque");

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.barrel, count: 1, data: 0 }, [
        "aba",
        "a#a",
        "aaa"
    ], ['a', 5, -1, 'b', 158, -1]);
});