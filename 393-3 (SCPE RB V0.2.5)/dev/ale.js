IDRegistry.genBlockID("ale");
Block.createBlock("ale", [{name: "ale", texture: [["3", 0]], inCreative: false}]);
function createAlelRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(5 / 16, 0, 5 / 16, 11 / 16, 8 / 16, 11 / 16, [["4", 0], ["4", 0], ["3", 0], ["3", 0], ["3", 0], ["3", 0]]);
    model.addBox(6 / 16, 8 / 16, 6 / 16, 10 / 16, 11 / 16, 10 / 16, [["4", 0], ["4", 0], ["3", 0], ["3", 0], ["3", 0], ["3", 0]]);
    model.addBox(7 / 16, 11 / 16, 7 / 16, 9 / 16, 13 / 16, 9 / 16, [["4", 0], ["4", 0], ["3", 0], ["3", 0], ["3", 0], ["3", 0]]);
    model.addBox(6 / 16, 13 / 16, 6 / 16, 10 / 16, 14 / 16, 10 / 16, [["4", 0], ["4", 0], ["3", 0], ["3", 0], ["3", 0], ["3", 0]]);
    model.addBox(7 / 16, 14 / 16, 7 / 16, 9 / 16, 1, 9 / 16, [["4", 0], ["4", 0], ["3", 0], ["3", 0], ["3", 0], ["3", 0]]);
    render.addEntry(model);
}
createAlelRender(BlockID.ale, 49, 0);
Item.registerUseFunction(ItemID.ale, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.ale);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("ale", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.ale, 1, data]];
});

