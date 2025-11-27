var texture_glass = [["glassQuadrants", 0]];
IDRegistry.genBlockID("glassQuadrants");
Block.createBlock("glassQuadrants", [{name: "Glass Quadrants", texture: texture_glass, inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.glassQuadrants, count: 1, data: 0}, ["aa", "aa"], ["a", 20, -1]);
});
var texture_sanded = [["sandedGlass", 0]];
IDRegistry.genBlockID("sandedGlass");
Block.createBlock("sandedGlass", [{name: "Sanded Glass", texture: texture_sanded, inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.sandedGlass, count: 1, data: 0}, ["aa", "ab"], ["a", 24, 2, "b", 20, -1]);
});
var texture_obsi = [["glass6_corners", 0]];
IDRegistry.genBlockID("glassObsidian");
Block.createBlock("glassObsidian", [{name: "Glass Obsiadian", texture: texture_obsi, inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.glassObsidian, count: 1, data: 0}, ["aa", "ab"], ["a", 29, -1, "b", 20, -1]);
});
var texture_zolo = [["glass8_corners", 0]];
IDRegistry.genBlockID("goldenGlass");
Block.createBlock("goldenGlass", [{name: "Golden Glass", texture: texture_zolo, inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.goldenGlass, count: 1, data: 0}, ["aa", "ab"], ["a", 266, 0, "b", 20, -1]);
});

