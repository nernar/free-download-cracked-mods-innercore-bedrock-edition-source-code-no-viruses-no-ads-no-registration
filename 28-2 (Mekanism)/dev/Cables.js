Translation.addTranslation("Universal Cable Elite", {ru: "\u042d\u043b\u0438\u0442\u043d\u044b\u0439 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u043e\u0432\u043e\u0434"});
IDRegistry.genBlockID("UCE");
Block.createBlock("UCE", [{name: "Universal Cable Elite", texture: [["UniversalCableElite", 0]], inCreative: true}]);
setupBlockAsWire(BlockID.UCE);
setupWireRender(BlockID.UCE, 3 / 8, "ic-wire");
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.UCE, count: 8, data: 0}, ["sss", "srs", "sss"], ["r", ItemID.ReinforcedAlloy, 0, "s", BlockID.UCA, 0]);
});

