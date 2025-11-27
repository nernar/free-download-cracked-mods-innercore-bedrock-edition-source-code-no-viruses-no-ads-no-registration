IDRegistry.genBlockID("skooma");
Block.createBlock("skooma", [{name: "skooma", texture: [["11", 0]], inCreative: false}]);
function createSkoomaRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(7 / 16, 0, 7 / 16, 9 / 16, 1 / 16, 9 / 16, [["12", 0], ["12", 0], ["11", 0], ["11", 0], ["11", 0], ["11", 0]]);
    model.addBox(6 / 16, 1 / 16, 6 / 16, 10 / 16, 2 / 16, 10 / 16, [["12", 0], ["12", 0], ["11", 0], ["11", 0], ["11", 0], ["11", 0]]);
    model.addBox(5 / 16, 2 / 16, 5 / 16, 11 / 16, 10 / 16, 11 / 16, [["12", 0], ["12", 0], ["11", 0], ["11", 0], ["11", 0], ["11", 0]]);
    model.addBox(6 / 16, 10 / 16, 6 / 16, 10 / 16, 11 / 16, 10 / 16, [["12", 0], ["12", 0], ["11", 0], ["11", 0], ["11", 0], ["11", 0]]);
    model.addBox(7 / 16, 11 / 16, 7 / 16, 9 / 16, 16 / 16, 9 / 16, [["12", 0], ["12", 0], ["11", 0], ["11", 0], ["11", 0], ["11", 0]]);
    model.addBox(6 / 16, 13 / 16, 6 / 16, 10 / 16, 14 / 16, 10 / 16, [["12", 0], ["12", 0], ["11", 0], ["11", 0], ["11", 0], ["11", 0]]);
    render.addEntry(model);
}
createSkoomaRender(BlockID.skooma, 49, 0);
Item.registerUseFunction(ItemID.skooma, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.skooma);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("skooma", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.skooma, 1, data]];
});

