IDRegistry.genBlockID("furnaceBlast");
Block.createBlockWithRotation("furnaceBlast", [
    {
        name: "Blast Furnace",
        texture: [
            ["blast_furnace_top", 0], ["blast_furnace_top", 0],
            ["blast_furnace_side", 0], ["blast_furnace_front_off", 0],
            ["blast_furnace_side", 0], ["blast_furnace_side", 0]
        ],
        inCreative: true
    }
], "opaque");

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.furnaceBlast, count: 1, data: 0 }, [
        "aaa",
        "aba",
        "ccc"
    ], ['a', ItemID.chunkStone, 0, 'b', 61, 0, 'c', 4, -1]);
});