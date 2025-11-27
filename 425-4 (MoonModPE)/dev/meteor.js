IDRegistry.genBlockID("meteorite");
Block.createBlockWithRotation("meteorite", [{name: "Fallen meteorite", texture: [["met_top", 0], ["met_top", 0], ["met_side", 0], ["met_side", 0], ["met_side", 0], ["met_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.meteorite, "stone", 2);
Block.setDestroyTime(BlockID.meteorite, 3);
Block.setDestroyLevel("meteorite", 2);
Block.setBlockShape(BlockID.meteorite, {x: 2 / 16, y: 0, z: 2 / 16}, {x: 14 / 16, y: 12 / 16, z: 14 / 16});
Block.registerDropFunctionForID(BlockID.meteorite, function (coords, blockID, blockData, level, enchant) {
    let drop = [[ItemID.rawMeteorIron, 1, 0]];
    if (enchant.silk) {
        return [[blockID, 1, 0]];
    }
    return drop;
});

