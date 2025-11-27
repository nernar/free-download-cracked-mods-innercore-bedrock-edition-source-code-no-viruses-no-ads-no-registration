IDRegistry.genBlockID("candle");
Block.createBlock("candle", [{name: "candle", texture: [["21", 0]], inCreative: false}], BLOCK_TYPE_LIGHT);
function createCandleRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(5 / 16, 0, 6 / 16, 11 / 16, 1 / 16, 10 / 16, "13", 0);
    model.addBox(6 / 16, 0, 5 / 16, 10 / 16, 1 / 16, 11 / 16, "13", 0);
    model.addBox(7 / 16, 1 / 16, 7 / 16, 9 / 16, 6 / 16, 9 / 16, "21", 0);
    model.addBox(6 / 16, 1 / 16, 7 / 16, 9 / 16, 2 / 16, 8 / 16, "21", 0);
    model.addBox(9 / 16, 1 / 16, 8 / 16, 10 / 16, 2 / 16, 10 / 16, "21", 0);
    model.addBox(8 / 16, 1 / 16, 5 / 16, 9 / 16, 2 / 16, 6 / 16, "21", 0);
    render.addEntry(model);
}
createCandleRender(BlockID.candle, 49, 0);
Item.registerUseFunction(ItemID.candle, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.candle);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("candle", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.candle, 1, data]];
});

