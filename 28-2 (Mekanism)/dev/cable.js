IDRegistry.genBlockID("UCB");
Block.createBlock("UCB", [{name: "U CB", texture: [["UniversalCableBasic", 0]], inCreative: true}]);
setupBlockAsWire(BlockID.UCB);
setupWireRender(BlockID.UCB, 3 / 8, "ic-wire");
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.UCB, count: 8, data: 0}, ["srs"], ["r", 331, 0, "s", ItemID.SteelIngot, 0]);
});
IDRegistry.genBlockID("UCA");
Block.createBlock("UCA", [{name: "U CA", texture: [["UniversalCableAdvanced", 0]], inCreative: true}]);
setupBlockAsWire(BlockID.UCA);
setupWireRender(BlockID.UCA, 3 / 8, "ic-wire");
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.UCA, count: 8, data: 0}, ["ppp", "psp", "ppp"], ["p", BlockID.UCB, 0, "s", ItemID.EnrichedAlloy, 0]);
});

