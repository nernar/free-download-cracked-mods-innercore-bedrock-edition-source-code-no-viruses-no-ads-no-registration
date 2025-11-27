IDRegistry.genBlockID("SteelCasing");
Block.createBlock("SteelCasing", [{name: "Steel Casing", texture: [["SteelCasing", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.SteelCasing, count: 1, data: 0}, ["sgs", "gog", "sgs"], ["s", ItemID.SteelIngot, 0, "o", ItemID.ingotosmium, 0, "g", 20, 0]);
});

