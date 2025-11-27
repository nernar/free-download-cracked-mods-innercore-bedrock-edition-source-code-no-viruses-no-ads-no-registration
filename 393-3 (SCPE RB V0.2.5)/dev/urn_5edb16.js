IDRegistry.genBlockID("urn");
Block.createBlock("urn", [{name: "urn", texture: [["22", 0]], inCreative: false}]);
function createUrnRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(6 / 16, 0, 5 / 16, 10 / 16, 3 / 16, 11 / 16, [["23", 0], ["23", 0], ["22", 0], ["22", 0], ["22", 0], ["22", 0]]);
    model.addBox(5 / 16, 0, 6 / 16, 11 / 16, 3 / 16, 10 / 16, [["23", 0], ["23", 0], ["22", 0], ["22", 0], ["22", 0], ["22", 0]]);
    model.addBox(5 / 16, 3 / 16, 4 / 16, 11 / 16, 9 / 16, 12 / 16, [["23", 0], ["23", 0], ["22", 0], ["22", 0], ["22", 0], ["22", 0]]);
    model.addBox(4 / 16, 3 / 16, 5 / 16, 12 / 16, 9 / 16, 11 / 16, [["23", 0], ["23", 0], ["22", 0], ["22", 0], ["22", 0], ["22", 0]]);
    model.addBox(6 / 16, 9 / 16, 5 / 16, 10 / 16, 12 / 16, 11 / 16, [["23", 0], ["23", 0], ["22", 0], ["22", 0], ["22", 0], ["22", 0]]);
    model.addBox(5 / 16, 9 / 16, 6 / 16, 11 / 16, 12 / 16, 10 / 16, [["23", 0], ["23", 0], ["22", 0], ["22", 0], ["22", 0], ["22", 0]]);
    model.addBox(7 / 16, 12 / 16, 6 / 16, 9 / 16, 14 / 16, 10 / 16, [["23", 0], ["23", 0], ["22", 0], ["22", 0], ["22", 0], ["22", 0]]);
    model.addBox(6 / 16, 12 / 16, 7 / 16, 10 / 16, 14 / 16, 9 / 16, [["23", 0], ["23", 0], ["22", 0], ["22", 0], ["22", 0], ["22", 0]]);
    model.addBox(7 / 16, 14 / 16, 7 / 16, 9 / 16, 15 / 16, 9 / 16, [["23", 0], ["23", 0], ["22", 0], ["22", 0], ["22", 0], ["22", 0]]);
    render.addEntry(model);
}
createUrnRender(BlockID.urn, 49, 0);
Item.registerUseFunction(ItemID.urn, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.urn);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("urn", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.urn, 1, data]];
});

