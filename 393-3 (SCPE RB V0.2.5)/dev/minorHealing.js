IDRegistry.genBlockID("minorHealing");
Block.createBlock("minorHealing", [{name: "minorHealing", texture: [["8", 0]], inCreative: false}]);
function createHillRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(4 / 16, 0, 4 / 16, 12 / 16, 1 / 16, 12 / 16, [["8", 0], ["8", 0], ["7", 0], ["7", 0], ["7", 0], ["7", 0]]);
    model.addBox(4 / 16, 1 / 16, 3 / 16, 12 / 16, 6 / 16, 13 / 16, [["8", 0], ["8", 0], ["7", 0], ["7", 0], ["7", 0], ["7", 0]]);
    model.addBox(3 / 16, 1 / 16, 4 / 16, 13 / 16, 6 / 16, 12 / 16, [["8", 0], ["8", 0], ["7", 0], ["7", 0], ["7", 0], ["7", 0]]);
    model.addBox(4 / 16, 6 / 16, 4 / 16, 12 / 16, 8 / 16, 12 / 16, [["8", 0], ["8", 0], ["7", 0], ["7", 0], ["7", 0], ["7", 0]]);
    model.addBox(5 / 16, 8 / 16, 5 / 16, 11 / 16, 9 / 16, 11 / 16, [["8", 0], ["8", 0], ["7", 0], ["7", 0], ["7", 0], ["7", 0]]);
    model.addBox(6 / 16, 9 / 16, 6 / 16, 10 / 16, 13 / 16, 10 / 16, [["8", 0], ["8", 0], ["7", 0], ["7", 0], ["7", 0], ["7", 0]]);
    model.addBox(7 / 16, 13 / 16, 7 / 16, 9 / 16, 15 / 16, 9 / 16, [["8", 0], ["8", 0], ["7", 0], ["7", 0], ["7", 0], ["7", 0]]);
    render.addEntry(model);
}
createHillRender(BlockID.minorHealing, 49, 0);
Item.registerUseFunction(ItemID.minorHealing, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.minorHealing);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("minorHealing", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.minorHealing, 1, data]];
});

