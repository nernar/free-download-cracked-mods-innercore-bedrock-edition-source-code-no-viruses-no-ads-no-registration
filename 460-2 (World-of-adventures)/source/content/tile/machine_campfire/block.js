IDRegistry.genBlockID("furnaceCampfireBlock");
Block.createBlockWithRotation("furnaceCampfireBlock", [
    {
        name: "Campfire",
        texture: [["empty", 0]],
        inCreative: false
    }
]);

Block.registerDropFunction(BlockID.furnaceCampfireBlock, function (coords, blockID, blockData, lvl, enchant) {
    return [[280, Random.randomInteger(0, 3), 0], [263, Random.randomInteger(0, 3)]];
});

Block.setShape(BlockID.furnaceCampfireBlock, 0, 0, 0, 1, 0.5, 1);