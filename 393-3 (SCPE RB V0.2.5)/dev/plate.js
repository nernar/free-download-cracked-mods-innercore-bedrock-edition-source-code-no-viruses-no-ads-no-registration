IDRegistry.genBlockID("plate");
Block.createBlock("plate", [{name: "plate", texture: [["13", 0]], inCreative: false}]);
function createPlatteRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(5 / 16, 0, 4 / 16, 11 / 16, 1 / 16, 12 / 16, "13", 0);
    model.addBox(4 / 16, 0, 5 / 16, 12 / 16, 1 / 16, 11 / 16, "13", 0);
    model.addBox(5 / 16, 1 / 16, 3 / 16, 11 / 16, 2 / 16, 4 / 16, "13", 0);
    model.addBox(5 / 16, 1 / 16, 12 / 16, 11 / 16, 2 / 16, 13 / 16, "13", 0);
    model.addBox(3 / 16, 1 / 16, 5 / 16, 4 / 16, 2 / 16, 11 / 16, "13", 0);
    model.addBox(12 / 16, 1 / 16, 5 / 16, 13 / 16, 2 / 16, 11 / 16, "13", 0);
    model.addBox(4 / 16, 1 / 16, 4 / 16, 5 / 16, 2 / 16, 5 / 16, "13", 0);
    model.addBox(11 / 16, 1 / 16, 4 / 16, 12 / 16, 2 / 16, 5 / 16, "13", 0);
    model.addBox(4 / 16, 1 / 16, 11 / 16, 5 / 16, 2 / 16, 12 / 16, "13", 0);
    model.addBox(11 / 16, 1 / 16, 11 / 16, 12 / 16, 2 / 16, 12 / 16, "13", 0);
    render.addEntry(model);
}
createPlatteRender(BlockID.plate, 49, 0);
Item.registerUseFunction(ItemID.plate, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.plate);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("plate", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.plate, 1, data]];
});
IDRegistry.genBlockID("plate1");
Block.createBlock("plate1", [{name: "plate", texture: [["18", 0]], inCreative: false}]);
function createPlateRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(5 / 16, 0, 4 / 16, 11 / 16, 1 / 16, 12 / 16, [["14", 0], ["14", 0], ["15", 0], ["15", 0], ["15", 0], ["15", 0]]);
    model.addBox(4 / 16, 0, 5 / 16, 12 / 16, 1 / 16, 11 / 16, [["14", 0], ["14", 0], ["15", 0], ["15", 0], ["15", 0], ["15", 0]]);
    model.addBox(5 / 16, 1 / 16, 3 / 16, 11 / 16, 2 / 16, 4 / 16, [["14", 0], ["14", 0], ["15", 0], ["15", 0], ["15", 0], ["15", 0]]);
    model.addBox(5 / 16, 1 / 16, 12 / 16, 11 / 16, 2 / 16, 13 / 16, [["14", 0], ["14", 0], ["15", 0], ["15", 0], ["15", 0], ["15", 0]]);
    model.addBox(3 / 16, 1 / 16, 5 / 16, 4 / 16, 2 / 16, 11 / 16, [["14", 0], ["14", 0], ["15", 0], ["15", 0], ["15", 0], ["15", 0]]);
    model.addBox(12 / 16, 1 / 16, 5 / 16, 13 / 16, 2 / 16, 11 / 16, [["14", 0], ["14", 0], ["15", 0], ["15", 0], ["15", 0], ["15", 0]]);
    model.addBox(4 / 16, 1 / 16, 4 / 16, 5 / 16, 2 / 16, 5 / 16, [["14", 0], ["14", 0], ["15", 0], ["15", 0], ["15", 0], ["15", 0]]);
    model.addBox(11 / 16, 1 / 16, 4 / 16, 12 / 16, 2 / 16, 5 / 16, [["14", 0], ["14", 0], ["15", 0], ["15", 0], ["15", 0], ["15", 0]]);
    model.addBox(4 / 16, 1 / 16, 11 / 16, 5 / 16, 2 / 16, 12 / 16, [["14", 0], ["14", 0], ["15", 0], ["15", 0], ["15", 0], ["15", 0]]);
    model.addBox(11 / 16, 1 / 16, 11 / 16, 12 / 16, 2 / 16, 12 / 16, [["14", 0], ["14", 0], ["15", 0], ["15", 0], ["15", 0], ["15", 0]]);
    render.addEntry(model);
}
createPlateRender(BlockID.plate1, 49, 0);
Item.registerUseFunction(ItemID.plate1, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.plate1);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("plate1", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.plate1, 1, data]];
});
IDRegistry.genBlockID("plate2");
Block.createBlock("plate2", [{name: "plate", texture: [["24", 0]], inCreative: false}]);
function createPlateeRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(5 / 16, 0, 4 / 16, 11 / 16, 1 / 16, 12 / 16, "24", 0);
    model.addBox(4 / 16, 0, 5 / 16, 12 / 16, 1 / 16, 11 / 16, "24", 0);
    model.addBox(5 / 16, 1 / 16, 3 / 16, 11 / 16, 2 / 16, 4 / 16, "24", 0);
    model.addBox(5 / 16, 1 / 16, 12 / 16, 11 / 16, 2 / 16, 13 / 16, "24", 0);
    model.addBox(3 / 16, 1 / 16, 5 / 16, 4 / 16, 2 / 16, 11 / 16, "24", 0);
    model.addBox(12 / 16, 1 / 16, 5 / 16, 13 / 16, 2 / 16, 11 / 16, "24", 0);
    model.addBox(4 / 16, 1 / 16, 4 / 16, 5 / 16, 2 / 16, 5 / 16, "24", 0);
    model.addBox(11 / 16, 1 / 16, 4 / 16, 12 / 16, 2 / 16, 5 / 16, "24", 0);
    model.addBox(4 / 16, 1 / 16, 11 / 16, 5 / 16, 2 / 16, 12 / 16, "24", 0);
    model.addBox(11 / 16, 1 / 16, 11 / 16, 12 / 16, 2 / 16, 12 / 16, "24", 0);
    render.addEntry(model);
}
createPlateeRender(BlockID.plate2, 49, 0);
Item.registerUseFunction(ItemID.plate2, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.plate2);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("plate2", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.plate2, 1, data]];
});

