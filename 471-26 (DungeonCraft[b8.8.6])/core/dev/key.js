IDRegistry.genBlockID("brickkey");
Block.createBlock("brickkey", [{name: "brickkey", texture: [["brickBlock", 1], ["brickBlock", 1], ["keyBlock", 0], ["keyBlock", 0], ["brickBlock", 0]], inCreative: false}]);
Translation.addTranslation("brickkey", {ru: "\u0431\u043b\u043e\u043a \u0441 \u0432\u0445\u043e\u0434\u043e\u043c \u043f\u043e\u0434 \u043a\u043b\u044e\u0447"});
Block.setDestroyTime(BlockID.brickkey, 9999999999999);
IDRegistry.genBlockID("brick3");
Block.createBlock("brick3", [{name: "brickkey2", texture: [["brickBlock", 1], ["brickBlock", 1], ["brick2", 0], ["brick2", 0], ["brickBlock", 0]], inCreative: false}]);
Block.setDestroyTime(BlockID.brick3, 9999999999999);
Translation.addTranslation("brickkey2", {ru: "\u0442\u043e\u043d\u043a\u0430\u044f \u0441\u0442\u0435\u043d\u0430"});
(function () {
    var renderChest = new ICRender.Model();
    BlockRenderer.setStaticICRender(BlockID.brickkey, -1, renderChest);
    var modelChest = BlockRenderer.createModel();
    renderChest.addEntry(modelChest);
    modelChest.addBox(0 / 16, 0, 6 / 16, 16 / 16, 1, 10 / 16, BlockID.brickkey, 0);
})();
(function () {
    var renderChest2 = new ICRender.Model();
    BlockRenderer.setStaticICRender(BlockID.brick3, -1, renderChest2);
    var modelChest2 = BlockRenderer.createModel();
    renderChest2.addEntry(modelChest2);
    modelChest2.addBox(0 / 16, 0, 6 / 16, 16 / 16, 1, 10 / 16, BlockID.brick3, 0);
})();

