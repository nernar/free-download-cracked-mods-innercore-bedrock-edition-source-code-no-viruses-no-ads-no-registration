IDRegistry.genBlockID("jalousieoak");
Block.createBlock("jalousieoak", [
	{name: "jalousieoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousieoak1", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousieoak2", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousieoak3", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jalousieoak");
Item.createItem("jalousieoak", "Jalousie", {name: "jalousieoak", meta: 0}, {stack: 64});

Translation.addTranslation("Jalousie", {ru: "Жалюзи"});
Recipes.addShaped({id: ItemID.jalousieoak, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 17,0]);

var jalousieoakModel = ModelAPI.newArray();
jalousieoakModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["treeoak", 0]]);
jalousieoakModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_oak_log", 0]]);
jalousieoakModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
jalousieoakModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"jalousieoak"},{id:"jalousieoak"}, Furniture.placeRotatableBlock(BlockID.jalousieoak, jalousieoakModel));

IDRegistry.genBlockID("jalousiespruce");
Block.createBlock("jalousiespruce", [
	{name: "jalousiespruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiespruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiespruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiespruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jalousiespruce");
Item.createItem("jalousiespruce", "Jalousie", {name: "jalousiespruce", meta: 0}, {stack: 64});

Translation.addTranslation("Jalousie", {ru: "Жалюзи"});
Recipes.addShaped({id: ItemID.jalousiespruce, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 17,1]);

var jalousiespruceModel = ModelAPI.newArray();
jalousiespruceModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["treespruce", 0]]);
jalousiespruceModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_spruce_log", 0]]);
jalousiespruceModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
jalousiespruceModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"jalousiespruce"},{id:"jalousiespruce"}, Furniture.placeRotatableBlock(BlockID.jalousiespruce, jalousiespruceModel));

IDRegistry.genBlockID("jalousiebrich");
Block.createBlock("jalousiebrich", [
	{name: "jalousiebrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiebrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiebrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiebrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jalousiebrich");
Item.createItem("jalousiebrich", "Jalousie", {name: "jalousiebrich", meta: 0}, {stack: 64});

Translation.addTranslation("Jalousie", {ru: "Жалюзи"});
Recipes.addShaped({id: ItemID.jalousiebrich, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 17,2]);

var jalousiebrichModel = ModelAPI.newArray();
jalousiebrichModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["treebrich", 0]]);
jalousiebrichModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_brich_log", 0]]);
jalousiebrichModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
jalousiebrichModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"jalousiebrich"},{id:"jalousiebrich"}, Furniture.placeRotatableBlock(BlockID.jalousiebrich, jalousiebrichModel));

IDRegistry.genBlockID("jalousiejungle");
Block.createBlock("jalousiejungle", [
	{name: "jalousiejungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiejungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiejungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiejungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jalousiejungle");
Item.createItem("jalousiejungle", "Jalousie", {name: "jalousiejungle", meta: 0}, {stack: 64});

Translation.addTranslation("Jalousie", {ru: "Жалюзи"});
Recipes.addShaped({id: ItemID.jalousiejungle, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 17,3]);

var jalousiejungleModel = ModelAPI.newArray();
jalousiejungleModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["treejungle", 0]]);
jalousiejungleModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_jungle_log", 0]]);
jalousiejungleModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
jalousiejungleModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"jalousiejungle"},{id:"jalousiejungle"}, Furniture.placeRotatableBlock(BlockID.jalousiejungle, jalousiejungleModel));

IDRegistry.genBlockID("jalousieacacia");
Block.createBlock("jalousieacacia", [
	{name: "jalousieacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousieacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousieacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousieacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jalousieacacia");
Item.createItem("jalousieacacia", "Jalousie", {name: "jalousieacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Jalousie", {ru: "Жалюзи"});
Recipes.addShaped({id: ItemID.jalousieacacia, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 162,0]);

var jalousieacaciaModel = ModelAPI.newArray();
jalousieacaciaModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["treeacacia", 0]]);
jalousieacaciaModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_acacia_log", 0]]);
jalousieacaciaModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
jalousieacaciaModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"jalousieacacia"},{id:"jalousieacacia"}, Furniture.placeRotatableBlock(BlockID.jalousieacacia, jalousieacaciaModel));

IDRegistry.genBlockID("jalousiebigoak");
Block.createBlock("jalousiebigoak", [
	{name: "jalousiebigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiebigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiebigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "jalousiebigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jalousiebigoak");
Item.createItem("jalousiebigoak", "Jalousie", {name: "jalousiebigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Jalousie", {ru: "Жалюзи"});
Recipes.addShaped({id: ItemID.jalousiebigoak, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 162,1]);

var jalousiebigoakModel = ModelAPI.newArray();
jalousiebigoakModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["treebigoak", 0]]);
jalousiebigoakModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_dark_oak_log", 0]]);
jalousiebigoakModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
jalousiebigoakModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"jalousiebigoak"},{id:"jalousiebigoak"}, Furniture.placeRotatableBlock(BlockID.jalousiebigoak, jalousiebigoakModel));

Block.setShape(BlockID.jalousieoak,0,0,1,1,1,1);
Block.setShape(BlockID.jalousiespruce,0,0,1,1,1,1);
Block.setShape(BlockID.jalousiebrich,0,0,1,1,1,1);
Block.setShape(BlockID.jalousiejungle,0,0,1,1,1,1);
Block.setShape(BlockID.jalousieacacia,0,0,1,1,1,1);
Block.setShape(BlockID.jalousiebigoak,0,0,1,1,1,1);