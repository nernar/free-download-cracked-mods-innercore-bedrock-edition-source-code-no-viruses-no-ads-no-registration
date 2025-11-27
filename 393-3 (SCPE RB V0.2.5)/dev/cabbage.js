IDRegistry.genBlockID("cabbage");
Block.createBlock("cabbage", [{name: "cabbage", texture: [["6", 0]], inCreative: false}]);
function createCabbageRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(5 / 16, 0, 5 / 16, 11 / 16, 10 / 16, 11 / 16, [["6", 0], ["6", 0], ["5", 0], ["5", 0], ["5", 0], ["5", 0]]);
    model.addBox(4 / 16, 1 / 16, 4 / 16, 12 / 16, 9 / 16, 12 / 16, [["6", 0], ["6", 0], ["5", 0], ["5", 0], ["5", 0], ["5", 0]]);
    model.addBox(3 / 16, 2 / 16, 5 / 16, 13 / 16, 8 / 16, 11 / 16, [["6", 0], ["6", 0], ["5", 0], ["5", 0], ["5", 0], ["5", 0]]);
    model.addBox(5 / 16, 2 / 16, 3 / 16, 11 / 16, 8 / 16, 13 / 16, [["6", 0], ["6", 0], ["5", 0], ["5", 0], ["5", 0], ["5", 0]]);
    render.addEntry(model);
}
createCabbageRender(BlockID.cabbage, 49, 0);
Item.registerUseFunction(ItemID.cabbage, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cabbage);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("cabbage", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.cabbage, 1, data]];
});

