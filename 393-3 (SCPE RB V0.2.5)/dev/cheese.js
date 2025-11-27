IDRegistry.genBlockID("cheese");
Block.createBlock("cheese", [{name: "cheese", texture: [["30", 0]], inCreative: false}]);
function createCheRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(3 / 16, 0, 5 / 16, 13 / 16, 5 / 16, 11 / 16, [["29", 0], ["29", 0], ["30", 0], ["30", 0], ["30", 0], ["30", 0]]);
    model.addBox(5 / 16, 0, 3 / 16, 11 / 16, 5 / 16, 13 / 16, [["29", 0], ["29", 0], ["30", 0], ["30", 0], ["30", 0], ["30", 0]]);
    model.addBox(4 / 16, 0, 4 / 16, 12 / 16, 5 / 16, 12 / 16, [["29", 0], ["29", 0], ["30", 0], ["30", 0], ["30", 0], ["30", 0]]);
    render.addEntry(model);
}
createCheRender(BlockID.cheese, 49, 0);
Item.registerUseFunction(ItemID.cheese, function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cheese);
    Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("cheese", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.cheese, 1, data]];
});

