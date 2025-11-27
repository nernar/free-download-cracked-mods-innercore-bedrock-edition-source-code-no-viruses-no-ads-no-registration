IDRegistry.genBlockID("lampa");
Block.createBlock("lampa", [{name: "lampa", texture: [["13", 0]], inCreative: false}], BLOCK_TYPE_LIGHT);
function createLampRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(5 / 16, 0, 4 / 16, 11 / 16, 1 / 16, 12 / 16, "13", 0);
    model.addBox(4 / 16, 0, 5 / 16, 12 / 16, 1 / 16, 11 / 16, "13", 0);
    model.addBox(5 / 16, 7 / 16, 4 / 16, 11 / 16, 8 / 16, 12 / 16, "13", 0);
    model.addBox(4 / 16, 7 / 16, 5 / 16, 12 / 16, 8 / 16, 11 / 16, "13", 0);
    model.addBox(5 / 16, 1 / 16, 4 / 16, 6 / 16, 7 / 16, 5 / 16, "13", 0);
    model.addBox(10 / 16, 1 / 16, 4 / 16, 11 / 16, 7 / 16, 5 / 16, "13", 0);
    model.addBox(10 / 16, 1 / 16, 11 / 16, 11 / 16, 7 / 16, 12 / 16, "13", 0);
    model.addBox(4 / 16, 1 / 16, 10 / 16, 5 / 16, 7 / 16, 11 / 16, "13", 0);
    model.addBox(5 / 16, 1 / 16, 11 / 16, 6 / 16, 7 / 16, 12 / 16, "13", 0);
    model.addBox(11 / 16, 1 / 16, 10 / 16, 12 / 16, 7 / 16, 11 / 16, "13", 0);
    model.addBox(4 / 16, 1 / 16, 5 / 16, 5 / 16, 7 / 16, 6 / 16, "13", 0);
    model.addBox(11 / 16, 1 / 16, 5 / 16, 12 / 16, 7 / 16, 6 / 16, "13", 0);
    model.addBox(5 / 16, 1 / 16, 5 / 16, 11 / 16, 7 / 16, 11 / 16, "21", 0);
    model.addBox(7 / 16, 8 / 16, 7 / 16, 9 / 16, 9 / 16, 9 / 16, "13", 0);
    model.addBox(7 / 16, 11 / 16, 7 / 16, 9 / 16, 12 / 16, 9 / 16, "13", 0);
    model.addBox(6 / 16, 9 / 16, 7 / 16, 7 / 16, 11 / 16, 9 / 16, "13", 0);
    model.addBox(9 / 16, 9 / 16, 7 / 16, 10 / 16, 11 / 16, 9 / 16, "13", 0);
    render.addEntry(model);
}
createLampRender(BlockID.lampa, 49, 0);
Item.registerUseFunction(ItemID.lampa, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.lampa);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("lampa", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.lampa, 1, data]];
});

