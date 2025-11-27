IDRegistry.genBlockID("oak_blinds");
Block.createBlock("oak_blinds", [
	{name: "Oak Blinds", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Blinds", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Blinds", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Blinds", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_blinds");
Item.createItem("oak_blinds", "Oak Blinds", {name: "oak_blinds", meta: 0}, {stack: 64});

var oak_blindsModel = ModelAPI.newArray();
oak_blindsModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["log_oak", 0]]);
oak_blindsModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_oak_log", 0]]);
oak_blindsModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
oak_blindsModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"oak_blinds"},{id:"oak_blinds"}, Furniture.placeRotatableBlock(BlockID.oak_blinds, oak_blindsModel));

IDRegistry.genBlockID("spruce_blinds");
Block.createBlock("spruce_blinds", [
	{name: "Spruce Blinds", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Blinds", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Blinds", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Blinds", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_blinds");
Item.createItem("spruce_blinds", "Spruce Blinds", {name: "spruce_blinds", meta: 0}, {stack: 64});

var spruce_blindsModel = ModelAPI.newArray();
spruce_blindsModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["log_spruce", 0]]);
spruce_blindsModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_spruce_log", 0]]);
spruce_blindsModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
spruce_blindsModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"spruce_blinds"},{id:"spruce_blinds"}, Furniture.placeRotatableBlock(BlockID.spruce_blinds, spruce_blindsModel));

IDRegistry.genBlockID("birch_blinds");
Block.createBlock("birch_blinds", [
	{name: "Birch Blinds", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Blinds", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Blinds", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Blinds", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_blinds");
Item.createItem("birch_blinds", "Birch Blinds", {name: "birch_blinds", meta: 0}, {stack: 64});

var birch_blindsModel = ModelAPI.newArray();
birch_blindsModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["log_birch", 0]]);
birch_blindsModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_birch_log", 0]]);
birch_blindsModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
birch_blindsModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"birch_blinds"},{id:"birch_blinds"}, Furniture.placeRotatableBlock(BlockID.birch_blinds, birch_blindsModel));

IDRegistry.genBlockID("jungle_blinds");
Block.createBlock("jungle_blinds", [
	{name: "Jungle Blinds", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Blinds", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Blinds", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Blinds", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_blinds");
Item.createItem("jungle_blinds", "Jungle Blinds", {name: "jungle_blinds", meta: 0}, {stack: 64});

var jungle_blindsModel = ModelAPI.newArray();
jungle_blindsModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["log_jungle", 0]]);
jungle_blindsModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_jungle_log", 0]]);
jungle_blindsModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
jungle_blindsModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"jungle_blinds"},{id:"jungle_blinds"}, Furniture.placeRotatableBlock(BlockID.jungle_blinds, jungle_blindsModel));

IDRegistry.genBlockID("acacia_blinds");
Block.createBlock("acacia_blinds", [
	{name: "Acacia Blinds", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Blinds", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Blinds", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Blinds", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_blinds");
Item.createItem("acacia_blinds", "Acacia Blinds", {name: "acacia_blinds", meta: 0}, {stack: 64});

var acacia_blindsModel = ModelAPI.newArray();
acacia_blindsModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["log_acacia", 0]]);
acacia_blindsModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_acacia_log", 0]]);
acacia_blindsModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
acacia_blindsModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"acacia_blinds"},{id:"acacia_blinds"}, Furniture.placeRotatableBlock(BlockID.acacia_blinds, acacia_blindsModel));

IDRegistry.genBlockID("dark_oak_blinds");
Block.createBlock("dark_oak_blinds", [
	{name: "Dark Oak Blinds", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Blinds", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Blinds", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Blinds", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_blinds");
Item.createItem("dark_oak_blinds", "Dark Oak Blinds", {name: "dark_oak_blinds", meta: 0}, {stack: 64});

var dark_oak_blindsModel = ModelAPI.newArray();
dark_oak_blindsModel.addBoxByTextures("1", 0,1.8125,0,1,2,0.1875, [["log_big_oak", 0]]);
dark_oak_blindsModel.addBoxByTextures("2", 0,0.0625,0,1,0.125,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("3", 0,1.6875,0,1,1.75,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("4", 0,1.5625,0,1,1.625,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("5", 0,1.4375,0,1,1.5,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("6", 0,1.3125,0,1,1.375,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("7", 0,1.1875,0,1,1.25,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("8", 0,1.0625,0,1,1.125,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("9", 0,0.9375,0,1,1,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("10", 0,0.8125,0,1,0.875,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("11", 0,0.6875,0,1,0.75,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("12", 0,0.5625,0,1,0.625,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("13", 0,0.4375,0,1,0.5,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("14", 0,0.3125,0,1,0.375,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("15", 0,0.1875,0,1,0.25,0.1875, [["stripped_dark_oak_log", 0]]);
dark_oak_blindsModel.addBoxByTextures("16", 0.875,0.25,0.0625,0.9375,0.3125,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("17", 0.0625,1.75,0.0625,0.125,1.8125,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("18", 0.0625,1.625,0.0625,0.125,1.6875,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("19", 0.0625,1.5,0.0625,0.125,1.5625,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("20", 0.0625,1.375,0.0625,0.125,1.4375,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("21", 0.0625,1.25,0.0625,0.125,1.3125,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("22", 0.0625,1.125,0.0625,0.125,1.1875,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("23", 0.0625,1,0.0625,0.125,1.0625,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("24", 0.0625,0.875,0.0625,0.125,0.9375,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("25", 0.0625,0.75,0.0625,0.125,0.8125,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("26", 0.0625,0.625,0.0625,0.125,0.6875,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("27", 0.0625,0.5,0.0625,0.125,0.5625,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("28", 0.0625,0.375,0.0625,0.125,0.4375,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("29", 0.0625,0.25,0.0625,0.125,0.3125,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("30", 0.0625,0.125,0.0625,0.125,0.1875,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("31", 0.875,1.75,0.0625,0.9375,1.8125,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("32", 0.875,0.125,0.0625,0.9375,0.1875,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("33", 0.875,0.375,0.0625,0.9375,0.4375,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("34", 0.875,0.5,0.0625,0.9375,0.5625,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("35", 0.875,0.625,0.0625,0.9375,0.6875,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("36", 0.875,0.75,0.0625,0.9375,0.8125,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("37", 0.875,0.875,0.0625,0.9375,0.9375,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("38", 0.875,1,0.0625,0.9375,1.0625,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("39", 0.875,1.125,0.0625,0.9375,1.1875,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("40", 0.875,1.25,0.0625,0.9375,1.3125,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("41", 0.875,1.375,0.0625,0.9375,1.4375,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("42", 0.875,1.5,0.0625,0.9375,1.5625,0.125, [["concrete_white", 0]]);
dark_oak_blindsModel.addBoxByTextures("43", 0.875,1.625,0.0625,0.9375,1.6875,0.125, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"dark_oak_blinds"},{id:"dark_oak_blinds"}, Furniture.placeRotatableBlock(BlockID.dark_oak_blinds, dark_oak_blindsModel));

Block.setShape(BlockID.oak_blinds,0,0,1,1,1,1);
Block.setShape(BlockID.spruce_blinds,0,0,1,1,1,1);
Block.setShape(BlockID.birch_blinds,0,0,1,1,1,1);
Block.setShape(BlockID.jungle_blinds,0,0,1,1,1,1);
Block.setShape(BlockID.acacia_blinds,0,0,1,1,1,1);
Block.setShape(BlockID.dark_oak_blinds,0,0,1,1,1,1);

Translation.addTranslation("Oak Blinds", {ru: "Дубовая Жалюзи"});
Translation.addTranslation("Spruce Blinds", {ru: "Еловая Жалюзи"});
Translation.addTranslation("Birch Blinds", {ru: "Берёзовая Жалюзи"});
Translation.addTranslation("Jungle Blinds", {ru: "Джунглевая Жалюзи"});
Translation.addTranslation("Acacia Blinds", {ru: "Акацивая Жалюзи"});
Translation.addTranslation("Dark Oak Blinds", {ru: "Тёмно Дубовая Жалюзи"});

Recipes.addShaped({id: ItemID.oak_blinds, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 17,0]);
Recipes.addShaped({id: ItemID.spruce_blinds, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 17,1]);
Recipes.addShaped({id: ItemID.birch_blinds, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 17,2]);
Recipes.addShaped({id: ItemID.jungle_blinds, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 17,3]);
Recipes.addShaped({id: ItemID.acacia_blinds, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 162,0]);
Recipes.addShaped({id: ItemID.dark_oak_blinds, count: 1, data: 0}, ["aaa", "xxx", "xxx"], ["x",280,0, "a", 162,1]);