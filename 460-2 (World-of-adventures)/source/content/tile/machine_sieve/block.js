IDRegistry.genBlockID("sieve");
Block.createBlockWithRotation("sieve", [
    {
        name: "Sieve",
        texture: [
            ["barrel_bottom", 0], ["sieve_top", 0],
            ["barrel_side", 0], ["barrel_side", 0],
            ["barrel_side", 0], ["barrel_side", 0]
        ],
        inCreative: true
    }
], __OBJECT_BLOCK_TYPE);

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.sieve, count: 1, data: 0 }, [
        "ccc",
        "a#a",
        "aaa"
    ], ['a', 5, -1, 'c', ItemID.rope, -1]);
});