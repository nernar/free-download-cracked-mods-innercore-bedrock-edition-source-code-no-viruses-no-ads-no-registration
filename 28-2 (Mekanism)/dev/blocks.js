Block.setPrototype("OsmiumOre", {type: Block.TYPE_BASE, getVariations: function () {
    return [{name: "Osmium Ore", texture: [["OsmiumOre", 0]], inCreative: true}];
}, getDrop: function () {
    return [[BlockID.OsmiumOre, 1, 0]];
}, getMaterial: function (a) {
    return "stone";
}, getDestroyLevel: function (a) {
    return 2;
}});
IDRegistry.genBlockID("OsmiumBlock");
Block.createBlock("OsmiumBlock", [{name: "Osmium Block", texture: [["OsmiumBlock", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.OsmiumBlock, count: 1, data: 0}, ["sss", "sss", "sss"], ["s", ItemID.ingotosmium, 0]);
});
IDRegistry.genBlockID("DynamicTank");
Block.createBlock("DynamicTank", [{name: "\u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0435\u0432\u0435\u0440\u0437\u0443\u0430\u0440", texture: [["DynamicTank", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.DynamicTank, count: 1, data: 0}, [" s ", "sws", " s "], ["s", ItemID.SteelIngot, 0, "w", 325, 0]);
});
Block.setPrototype("CopperOre", {type: Block.TYPE_BASE, getVariations: function () {
    return [{name: "Copper Ore", texture: [["CopperOre", 0]], inCreative: true}];
}, getDrop: function () {
    return [[BlockID.CopperOre, 1, 0]];
}, getMaterial: function (a) {
    return "stone";
}, getDestroyLevel: function (a) {
    return 2;
}});
IDRegistry.genBlockID("CopperBlock");
Block.createBlock("CopperBlock", [{name: "Copper Block", texture: [["CopperBlock", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.CopperBlock, count: 1, data: 0}, ["sss", "sss", "sss"], ["s", ItemID.copperingot, 0]);
});
Block.setPrototype("TinOre", {type: Block.TYPE_BASE, getVariations: function () {
    return [{name: "Tin Ore", texture: [["TinOre", 0]], inCreative: true}];
}, getDrop: function () {
    return [[BlockID.TinOre, 1, 0]];
}, getMaterial: function (a) {
    return "stone";
}, getDestroyLevel: function (a) {
    return 2;
}});
IDRegistry.genBlockID("TinBlock");
Block.createBlock("TinBlock", [{name: "Tin Block", texture: [["TinBlock", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.TinBlock, count: 1, data: 0}, ["sss", "sss", "sss"], ["s", ItemID.tiningot, 0]);
});
IDRegistry.genBlockID("RefinedObsidian");
Block.createBlock("RefinedObsidian", [{name: "Refined Obsidian", texture: [["RefinedObsidian", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.RefinedObsidian, count: 1, data: 0}, ["sss", "sss", "sss"], ["s", ItemID.OsdidianIngot, 0]);
});
IDRegistry.genBlockID("CoalBlock");
Block.createBlock("CoalBlock", [{name: "Coal Block", texture: [["CoalBlock", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.CoalBlock, count: 1, data: 0}, ["sss", "sss", "sss"], ["s", 263, 1]);
});
IDRegistry.genBlockID("SteelBlock");
Block.createBlock("SteelBlock", [{name: "Steel Block", texture: [["SteelBlock", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.SteelBlock, count: 1, data: 0}, ["sss", "sss", "sss"], ["s", ItemID.SteelIngot, 0]);
});
var BLOCK_TYPE_LIGHT = Block.createSpecialType({lightlevel: 15, lightopacity: 0});
IDRegistry.genBlockID("RefinedGlowstone");
Block.createBlock("RefinedGlowstone", [{name: "Refined Glowstone", texture: [["RefinedGlowstone", 0]], inCreative: true}], BLOCK_TYPE_LIGHT);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.RefinedGlowstone, count: 1, data: 0}, ["sss", "sss", "sss"], ["s", ItemID.GlowstoneIngot, 0]);
});
IDRegistry.genBlockID("PlasticBlack");
Block.createBlock("PlasticBlack", [{name: "\u0427\u0451\u0440\u043d\u044b\u0439 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a", texture: [["overlay_black", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.PlasticBlack, count: 1, data: 0}, ["sss", "sts", "sss"], ["s", ItemID.HDPESheet, 0, "t", 351, 0]);
});
IDRegistry.genBlockID("PlasticGreen");
Block.createBlock("PlasticGreen", [{name: "\u0417\u0435\u043b\u0451\u043d\u044b\u0439 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a", texture: [["overlay_darkGreen", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.PlasticGreen, count: 1, data: 0}, ["sss", "sts", "sss"], ["s", ItemID.HDPESheet, 0, "t", 351, 2]);
});
IDRegistry.genBlockID("PlasticBrown");
Block.createBlock("PlasticBrown", [{name: "\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a", texture: [["overlay_brown", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.PlasticBrown, count: 1, data: 0}, ["sss", "sts", "sss"], ["s", ItemID.HDPESheet, 0, "t", 351, 3]);
});
IDRegistry.genBlockID("PlasticBlue");
Block.createBlock("PlasticBlue", [{name: "\u0421\u0438\u043d\u0438\u0439 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a", texture: [["overlay_darkBlue", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.PlasticBlue, count: 1, data: 0}, ["sss", "sts", "sss"], ["s", ItemID.HDPESheet, 0, "t", 351, 4]);
});
IDRegistry.genBlockID("PlasticPurple");
Block.createBlock("PlasticPurple", [{name: "\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a", texture: [["overlay_purple", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.PlasticPurple, count: 1, data: 0}, ["sss", "sts", "sss"], ["s", ItemID.HDPESheet, 0, "t", 351, 5]);
});
IDRegistry.genBlockID("PlasticDarkG");
Block.createBlock("PlasticDarkG", [{name: "\u0422\u0451\u043c\u043d\u043e-\u0433\u043e\u043b\u0443\u0431\u043e\u0439 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a", texture: [["overlay_darkAqua", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.PlasticPurple, count: 1, data: 0}, ["sss", "sts", "sss"], ["s", ItemID.HDPESheet, 0, "t", 351, 6]);
});
IDRegistry.genBlockID("PlasticLGray");
Block.createBlock("PlasticLGray", [{name: "\u0421\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u044b\u0439 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a", texture: [["overlay_grey", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.PlasticLGray, count: 1, data: 0}, ["sss", "sts", "sss"], ["s", ItemID.HDPESheet, 0, "t", 351, 7]);
});
IDRegistry.genBlockID("PlasticGray");
Block.createBlock("PlasticGray", [{name: "\u0421\u0435\u0440\u044b\u0439 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a", texture: [["overlay_darkGrey", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.PlasticGray, count: 1, data: 0}, ["sss", "sts", "sss"], ["s", ItemID.HDPESheet, 0, "t", 351, 8]);
});
IDRegistry.genBlockID("PlasticPink");
Block.createBlock("PlasticPink", [{name: "\u0420\u043e\u0437\u043e\u0432\u044b\u0439 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a", texture: [["overlay_pink", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.PlasticPink, count: 1, data: 0}, ["sss", "sts", "sss"], ["s", ItemID.HDPESheet, 0, "t", 351, 9]);
});
IDRegistry.genBlockID("PlasticLGreen");
Block.createBlock("PlasticLGreen", [{name: "\u0421\u0432\u0435\u0442\u043b\u043e-\u0437\u0435\u043b\u0451\u043d\u044b\u0439 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a", texture: [["overlay_brightGreen", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.PlasticLGreen, count: 1, data: 0}, ["sss", "sts", "sss"], ["s", ItemID.HDPESheet, 0, "t", 351, 10]);
});
IDRegistry.genBlockID("PlasticYellow");
Block.createBlock("PlasticYellow", [{name: "\u0416\u0451\u043b\u0442\u044b\u0439 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a", texture: [["overlay_yellow", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.PlasticYellow, count: 1, data: 0}, ["sss", "sts", "sss"], ["s", ItemID.HDPESheet, 0, "t", 351, 11]);
});
IDRegistry.genBlockID("PlasticLAure");
Block.createBlock("PlasticLAure", [{name: "\u0421\u0432\u0435\u0442\u043b\u043e-\u0433\u043e\u043b\u0443\u0431\u043e\u0439 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a", texture: [["overlay_aqua", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.PlasticLAure, count: 1, data: 0}, ["sss", "sts", "sss"], ["s", ItemID.HDPESheet, 0, "t", 351, 12]);
});
IDRegistry.genBlockID("PlasticPurpure");
Block.createBlock("PlasticPurpure", [{name: "\u041f\u0443\u0440\u043f\u0443\u0440\u043d\u044b\u0439 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a", texture: [["overlay_indigo", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.PlasticPurpure, count: 1, data: 0}, ["sss", "sts", "sss"], ["s", ItemID.HDPESheet, 0, "t", 351, 13]);
});
IDRegistry.genBlockID("PlasticOrange");
Block.createBlock("PlasticOrange", [{name: "\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a", texture: [["overlay_orange", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.PlasticOrange, count: 1, data: 0}, ["sss", "sts", "sss"], ["s", ItemID.HDPESheet, 0, "t", 351, 14]);
});
IDRegistry.genBlockID("PlasticWhite");
Block.createBlock("PlasticWhite", [{name: "\u0411\u0435\u043b\u044b\u0439 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a", texture: [["overlay_white", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.PlasticWhite, count: 1, data: 0}, ["sss", "s s", "sss"], ["s", ItemID.HDPESheet, 0]);
});

