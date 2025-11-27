IDRegistry.genBlockID("scarecrow");
Block.createBlock("scarecrow", [{name: "scarecrow", texture: [["", 0]], inCreative: false}]);
function createScarecrowRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(7 / 16, 0, 7 / 16, 9 / 16, 15 / 16, 9 / 16, "13", 0);
    model.addBox(5 / 16, 10 / 16, 5 / 16, 11 / 16, 1, 11 / 16, [["scarecrow2", 0], ["scarecrow2", 0], ["scarecrow2", 0], ["scarecrow1", 0], ["scarecrow2", 0], ["scarecrow2", 0]]);
    model.addBox(5 / 16, 2 / 16, 6 / 16, 11 / 16, 9 / 16, 10 / 16, [["scarecrow2", 0], ["scarecrow2", 0], ["scarecrow2", 0], ["scarecrow1", 0], ["scarecrow2", 0], ["scarecrow2", 0]]);
    model.addBox(4 / 16, 7 / 16, 7 / 16, 5 / 16, 9 / 16, 9 / 16, "13", 0);
    model.addBox(11 / 16, 7 / 16, 7 / 16, 12 / 16, 9 / 16, 9 / 16, "13", 0);
    model.addBox(1 / 16, 5 / 16, 6 / 16, 4 / 16, 9 / 16, 10 / 16, [["scarecrow2", 0], ["scarecrow2", 0], ["scarecrow2", 0], ["scarecrow1", 0], ["scarecrow2", 0], ["scarecrow2", 0]]);
    model.addBox(12 / 16, 5 / 16, 6 / 16, 15 / 16, 9 / 16, 10 / 16, [["scarecrow2", 0], ["scarecrow2", 0], ["scarecrow2", 0], ["scarecrow1", 0], ["scarecrow2", 0], ["scarecrow2", 0]]);
    render.addEntry(model);
}
createScarecrowRender(BlockID.scarecrow, 49, 0);
Item.registerUseFunction(ItemID.scarecrow1, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.scarecrow);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("scarecrow", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.scarecrow1, 1, data]];
});
IDRegistry.genBlockID("scarecrow1");
Block.createBlock("scarecrow1", [{name: "scarecrow1", texture: [["", 0]], inCreative: false}]);
function createScarecrow1Render(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(7 / 16, 0, 7 / 16, 9 / 16, 15 / 16, 9 / 16, "13", 0);
    model.addBox(5 / 16, 10 / 16, 5 / 16, 11 / 16, 1, 11 / 16, [["scarecrow2", 0], ["scarecrow4", 0], ["scarecrow3", 0], ["scarecrow4", 0], ["scarecrow4", 0], ["scarecrow2", 0]]);
    model.addBox(5 / 16, 9 / 16, 5 / 16, 11 / 16, 10 / 16, 11 / 16, [["scarecrow2", 0], ["scarecrow4", 0], ["scarecrow3", 0], ["scarecrow4", 0], ["scarecrow4", 0], ["scarecrow2", 0]]);
    model.addBox(5 / 16, 2 / 16, 6 / 16, 11 / 16, 9 / 16, 10 / 16, [["scarecrow2", 0], ["scarecrow2", 0], ["scarecrow2", 0], ["scarecrow", 0], ["scarecrow2", 0], ["scarecrow2", 0]]);
    model.addBox(4 / 16, 7 / 16, 7 / 16, 5 / 16, 9 / 16, 9 / 16, "13", 0);
    model.addBox(11 / 16, 7 / 16, 7 / 16, 12 / 16, 9 / 16, 9 / 16, "13", 0);
    model.addBox(1 / 16, 5 / 16, 6 / 16, 4 / 16, 9 / 16, 10 / 16, [["scarecrow2", 0], ["scarecrow2", 0], ["scarecrow2", 0], ["scarecrow", 0], ["scarecrow2", 0], ["scarecrow2", 0]]);
    model.addBox(12 / 16, 5 / 16, 6 / 16, 15 / 16, 9 / 16, 10 / 16, [["scarecrow2", 0], ["scarecrow2", 0], ["scarecrow2", 0], ["scarecrow", 0], ["scarecrow2", 0], ["scarecrow2", 0]]);
    render.addEntry(model);
}
createScarecrow1Render(BlockID.scarecrow1, 49, 0);
Item.registerUseFunction(ItemID.scarecrow, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.scarecrow1);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("scarecrow1", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.scarecrow, 1, data]];
});

