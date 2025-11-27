function setupWireRender(id, groupName, width, preventSelfAdd) {
    let render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    let boxes = [{side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]}, {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}, {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]}];
    let group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }
    for (let i in boxes) {
        let box = boxes[i];
        let model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }
    let modelOwn = BlockRenderer.createModel();
    modelOwn.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(modelOwn);
}
IDRegistry.genItemID("civWire");
Item.createItem("civWire", "Wire", {name: "wire", meta: 0}, {stack: 64});
Item.registerUseFunction("civWire", function (coords) {
    let crd = coords.relative;
    if (World.getBlockID(crd.x, crd.y, crd.z) == 0) {
        World.setBlock(crd.x, crd.y, crd.z, BlockID.civCopperWire);
        Player.decreaseCarriedItem();
    }
});
IDRegistry.genBlockID("civCopperWire");
Block.createBlock("civCopperWire", [{name: "Wire", texture: [["wire", 0]], inCreative: false}]);
Block.registerDropFunction(BlockID.civCopperWire, function (coords, blockID, data, level, enchant) {
    return [[ItemID.civWire, 1, 0]];
});
Block.registerPlaceFunction(BlockID.civCopperWire, function (coords, blockID, data, level, enchant) {
    Game.prevent();
    Player.decreaseCarriedItem();
    Player.addItemToInventory(ItemID.civWire, 1, 0);
});
CU.registerWire(BlockID.civCopperWire);
setupWireRender(BlockID.civCopperWire, "ic-wire", 0.38);
Callback.addCallback("PostLoaded", function () {
    RecipeSystem.addRecipeToWorkbench(ItemID.civWire, 6, 0, [[0, 0], [0, 0], [0, 0], [ItemID.ingotCopper, 0], [ItemID.ingotCopper, 0], [ItemID.ingotCopper, 0], [0, 0], [0, 0], [0, 0]], 0);
});

