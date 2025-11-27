IDRegistry.genBlockID("cup");
Block.createBlock("cup", [{name: "cup", texture: [["13", 0]], inCreative: false}]);
function createCupRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(5 / 16, 0, 6 / 16, 11 / 16, 1 / 16, 10 / 16, "13", 0);
    model.addBox(6 / 16, 0, 5 / 16, 10 / 16, 1 / 16, 11 / 16, "13", 0);
    model.addBox(5 / 16, 1 / 16, 6 / 16, 6 / 16, 7 / 16, 10 / 16, "13", 0);
    model.addBox(10 / 16, 1 / 16, 6 / 16, 11 / 16, 7 / 16, 10 / 16, "13", 0);
    model.addBox(6 / 16, 1 / 16, 5 / 16, 10 / 16, 7 / 16, 6 / 16, "13", 0);
    model.addBox(6 / 16, 1 / 16, 10 / 16, 10 / 16, 7 / 16, 11 / 16, "13", 0);
    model.addBox(11 / 16, 1 / 16, 7 / 16, 12 / 16, 2 / 16, 9 / 16, "13", 0);
    model.addBox(11 / 16, 5 / 16, 7 / 16, 13 / 16, 6 / 16, 9 / 16, "13", 0);
    model.addBox(12 / 16, 2 / 16, 7 / 16, 13 / 16, 6 / 16, 9 / 16, "13", 0);
    render.addEntry(model);
}
createCupRender(BlockID.cup, 49, 0);
Item.registerUseFunction(ItemID.cup, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cup);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("cup", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.cup, 1, data]];
});
IDRegistry.genBlockID("cup1");
Block.createBlock("cup1", [{name: "cup1", texture: [["18", 0]], inCreative: false}]);
function createCuupRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(5 / 16, 0, 6 / 16, 11 / 16, 1 / 16, 10 / 16, [["19", 0], ["19", 0], ["18", 0], ["18", 0], ["18", 0], ["18", 0]]);
    model.addBox(6 / 16, 0, 5 / 16, 10 / 16, 1 / 16, 11 / 16, [["19", 0], ["19", 0], ["18", 0], ["18", 0], ["18", 0], ["18", 0]]);
    model.addBox(5 / 16, 1 / 16, 6 / 16, 6 / 16, 7 / 16, 10 / 16, [["19", 0], ["19", 0], ["18", 0], ["18", 0], ["18", 0], ["18", 0]]);
    model.addBox(10 / 16, 1 / 16, 6 / 16, 11 / 16, 7 / 16, 10 / 16, [["19", 0], ["19", 0], ["18", 0], ["18", 0], ["18", 0], ["18", 0]]);
    model.addBox(6 / 16, 1 / 16, 5 / 16, 10 / 16, 7 / 16, 6 / 16, [["19", 0], ["19", 0], ["18", 0], ["18", 0], ["18", 0], ["18", 0]]);
    model.addBox(6 / 16, 1 / 16, 10 / 16, 10 / 16, 7 / 16, 11 / 16, [["19", 0], ["19", 0], ["18", 0], ["18", 0], ["18", 0], ["18", 0]]);
    model.addBox(11 / 16, 1 / 16, 7 / 16, 12 / 16, 2 / 16, 9 / 16, [["19", 0], ["19", 0], ["18", 0], ["18", 0], ["18", 0], ["18", 0]]);
    model.addBox(11 / 16, 5 / 16, 7 / 16, 13 / 16, 6 / 16, 9 / 16, [["19", 0], ["19", 0], ["18", 0], ["18", 0], ["18", 0], ["18", 0]]);
    model.addBox(12 / 16, 2 / 16, 7 / 16, 13 / 16, 6 / 16, 9 / 16, [["19", 0], ["19", 0], ["18", 0], ["18", 0], ["18", 0], ["18", 0]]);
    render.addEntry(model);
}
createCuupRender(BlockID.cup1, 49, 0);
Item.registerUseFunction(ItemID.cup1, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cup1);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("cup1", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.cup1, 1, data]];
});
IDRegistry.genBlockID("cup2");
Block.createBlock("cup2", [{name: "cup2", texture: [["24", 0]], inCreative: false}]);
function createCuuupRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(5 / 16, 0, 6 / 16, 11 / 16, 1 / 16, 10 / 16, "24", 0);
    model.addBox(6 / 16, 0, 5 / 16, 10 / 16, 1 / 16, 11 / 16, "24", 0);
    model.addBox(5 / 16, 1 / 16, 6 / 16, 6 / 16, 7 / 16, 10 / 16, "24", 0);
    model.addBox(10 / 16, 1 / 16, 6 / 16, 11 / 16, 7 / 16, 10 / 16, "24", 0);
    model.addBox(6 / 16, 1 / 16, 5 / 16, 10 / 16, 7 / 16, 6 / 16, "24", 0);
    model.addBox(6 / 16, 1 / 16, 10 / 16, 10 / 16, 7 / 16, 11 / 16, "24", 0);
    model.addBox(11 / 16, 1 / 16, 7 / 16, 12 / 16, 2 / 16, 9 / 16, "24", 0);
    model.addBox(11 / 16, 5 / 16, 7 / 16, 13 / 16, 6 / 16, 9 / 16, "24", 0);
    model.addBox(12 / 16, 2 / 16, 7 / 16, 13 / 16, 6 / 16, 9 / 16, "24", 0);
    render.addEntry(model);
}
createCuuupRender(BlockID.cup2, 49, 0);
Item.registerUseFunction(ItemID.cup2, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cup2);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("cup2", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.cup2, 1, data]];
});

