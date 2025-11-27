IDRegistry.genBlockID("chandelier");
Block.createBlock("chandelier", [{name: "chandelier", texture: [["13", 0]], inCreative: false}], BLOCK_TYPE_LIGHT);
function createChanRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(4 / 16, 1 / 16, 0, 12 / 16, 2 / 16, 1 / 16, "13", 0);
    model.addBox(4 / 16, 1 / 16, 15 / 16, 12 / 16, 2 / 16, 1, "13", 0);
    model.addBox(0, 1 / 16, 4 / 16, 1 / 16, 2 / 16, 12 / 16, "13", 0);
    model.addBox(0, 1 / 16, 4 / 16, 1 / 16, 2 / 16, 12 / 16, "13", 0);
    model.addBox(15 / 16, 1 / 16, 4 / 16, 1, 2 / 16, 12 / 16, "13", 0);
    model.addBox(3 / 16, 1 / 16, 1 / 16, 4 / 16, 2 / 16, 2 / 16, "13", 0);
    model.addBox(2 / 16, 1 / 16, 2 / 16, 3 / 16, 2 / 16, 3 / 16, "13", 0);
    model.addBox(1 / 16, 1 / 16, 3 / 16, 2 / 16, 2 / 16, 4 / 16, "13", 0);
    model.addBox(12 / 16, 1 / 16, 1 / 16, 13 / 16, 2 / 16, 2 / 16, "13", 0);
    model.addBox(13 / 16, 1 / 16, 2 / 16, 14 / 16, 2 / 16, 3 / 16, "13", 0);
    model.addBox(14 / 16, 1 / 16, 3 / 16, 15 / 16, 2 / 16, 4 / 16, "13", 0);
    model.addBox(3 / 16, 1 / 16, 14 / 16, 4 / 16, 2 / 16, 15 / 16, "13", 0);
    model.addBox(2 / 16, 1 / 16, 13 / 16, 3 / 16, 2 / 16, 14 / 16, "13", 0);
    model.addBox(1 / 16, 1 / 16, 12 / 16, 2 / 16, 2 / 16, 13 / 16, "13", 0);
    model.addBox(12 / 16, 1 / 16, 14 / 16, 13 / 16, 2 / 16, 15 / 16, "13", 0);
    model.addBox(13 / 16, 1 / 16, 13 / 16, 14 / 16, 2 / 16, 14 / 16, "13", 0);
    model.addBox(14 / 16, 1 / 16, 12 / 16, 15 / 16, 2 / 16, 13 / 16, "13", 0);
    model.addBox(2 / 16, 2 / 16, 2 / 16, 3 / 16, 5 / 16, 3 / 16, "21", 0);
    model.addBox(13 / 16, 2 / 16, 2 / 16, 14 / 16, 6 / 16, 3 / 16, "21", 0);
    model.addBox(2 / 16, 2 / 16, 13 / 16, 3 / 16, 5 / 16, 14 / 16, "21", 0);
    model.addBox(13 / 16, 2 / 16, 13 / 16, 14 / 16, 4 / 16, 14 / 16, "21", 0);
    model.addBox(7 / 16, 2 / 16, 0, 8 / 16, 6 / 16, 1 / 16, "21", 0);
    model.addBox(9 / 16, 2 / 16, 15 / 16, 10 / 16, 3 / 16, 1, "21", 0);
    model.addBox(0, 2 / 16, 8 / 16, 1 / 16, 5 / 16, 9 / 16, "21", 0);
    model.addBox(0, 2 / 16, 5 / 16, 1 / 16, 6 / 16, 6 / 16, "21", 0);
    model.addBox(7 / 16, 0, 1 / 16, 9 / 16, 1 / 16, 4 / 16, "13", 0);
    model.addBox(7 / 16, 0, 12 / 16, 9 / 16, 1 / 16, 15 / 16, "13", 0);
    model.addBox(1 / 16, 0, 7 / 16, 4 / 16, 1 / 16, 9 / 16, "13", 0);
    model.addBox(12 / 16, 0, 7 / 16, 15 / 16, 1 / 16, 9 / 16, "13", 0);
    model.addBox(7 / 16, 1 / 16, 4 / 16, 9 / 16, 4 / 16, 5 / 16, "13", 0);
    model.addBox(7 / 16, 1 / 16, 11 / 16, 9 / 16, 4 / 16, 12 / 16, "13", 0);
    model.addBox(4 / 16, 1 / 16, 7 / 16, 5 / 16, 4 / 16, 9 / 16, "13", 0);
    model.addBox(11 / 16, 1 / 16, 7 / 16, 12 / 16, 4 / 16, 9 / 16, "13", 0);
    model.addBox(7 / 16, 4 / 16, 5 / 16, 9 / 16, 8 / 16, 6 / 16, "13", 0);
    model.addBox(7 / 16, 4 / 16, 10 / 16, 9 / 16, 8 / 16, 11 / 16, "13", 0);
    model.addBox(5 / 16, 4 / 16, 7 / 16, 6 / 16, 8 / 16, 9 / 16, "13", 0);
    model.addBox(10 / 16, 4 / 16, 7 / 16, 11 / 16, 8 / 16, 9 / 16, "13", 0);
    model.addBox(7 / 16, 8 / 16, 6 / 16, 9 / 16, 13 / 16, 7 / 16, "13", 0);
    model.addBox(7 / 16, 8 / 16, 9 / 16, 9 / 16, 13 / 16, 10 / 16, "13", 0);
    model.addBox(6 / 16, 8 / 16, 7 / 16, 7 / 16, 13 / 16, 9 / 16, "13", 0);
    model.addBox(9 / 16, 8 / 16, 7 / 16, 10 / 16, 13 / 16, 9 / 16, "13", 0);
    model.addBox(7 / 16, 13 / 16, 7 / 16, 9 / 16, 1, 9 / 16, "13", 0);
    render.addEntry(model);
}
createChanRender(BlockID.chandelier, 49, 0);
Item.registerUseFunction(ItemID.chandelier, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.chandelier);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("chandelier", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.chandelier, 1, data]];
});

