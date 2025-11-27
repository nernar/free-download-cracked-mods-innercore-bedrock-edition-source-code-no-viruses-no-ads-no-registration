IDRegistry.genBlockID("oak_cradle");
Block.createBlock("oak_cradle", [
	{name: "Oak Cradle", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Cradle", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Cradle", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Cradle", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_cradle");
Item.createItem("oak_cradle", "Oak Cradle", {name: "oak_cradle", meta: 0}, {stack: 64});

var oak_cradleModel = ModelAPI.newArray();
oak_cradleModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5);
oak_cradleModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5);
oak_cradleModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35);
oak_cradleModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5);
oak_cradleModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5);
oak_cradleModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5);
oak_cradleModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5);
oak_cradleModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5);
oak_cradleModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5);
oak_cradleModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5);
oak_cradleModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5);
oak_cradleModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5);
oak_cradleModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5);
oak_cradleModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5);
oak_cradleModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5);
oak_cradleModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5);
oak_cradleModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5);
oak_cradleModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5);
oak_cradleModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5);
oak_cradleModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5);
oak_cradleModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5);
oak_cradleModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5);
oak_cradleModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5);
oak_cradleModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5);
oak_cradleModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5);
oak_cradleModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5);
oak_cradleModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5);
oak_cradleModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5);
oak_cradleModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5);
oak_cradleModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5);
oak_cradleModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5);
oak_cradleModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35);
oak_cradleModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5);
oak_cradleModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5);
oak_cradleModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5);
oak_cradleModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5);
oak_cradleModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5);
oak_cradleModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
oak_cradleModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
oak_cradleModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 3);
Furniture.addReplacementItem({id:"oak_cradle"},{id:"oak_cradle"}, Furniture.placeRotatableBlock(BlockID.oak_cradle, oak_cradleModel));

IDRegistry.genBlockID("spruce_cradle");
Block.createBlock("spruce_cradle", [
	{name: "Spruce Cradle", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Cradle", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Cradle", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Cradle", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_cradle");
Item.createItem("spruce_cradle", "Spruce Cradle", {name: "spruce_cradle", meta: 0}, {stack: 64});

var spruce_cradleModel = ModelAPI.newArray();
spruce_cradleModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 1);
spruce_cradleModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 1);
spruce_cradleModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 1);
spruce_cradleModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 1);
spruce_cradleModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 1);
spruce_cradleModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 1);
spruce_cradleModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 1);
spruce_cradleModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 1);
spruce_cradleModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 1);
spruce_cradleModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 1);
spruce_cradleModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 1);
spruce_cradleModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 1);
spruce_cradleModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 1);
spruce_cradleModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 1);
spruce_cradleModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 1);
spruce_cradleModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 1);
spruce_cradleModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 1);
spruce_cradleModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 1);
spruce_cradleModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 1);
spruce_cradleModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 1);
spruce_cradleModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 1);
spruce_cradleModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 1);
spruce_cradleModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 1);
spruce_cradleModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 1);
spruce_cradleModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 1);
spruce_cradleModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 1);
spruce_cradleModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 1);
spruce_cradleModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 1);
spruce_cradleModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 1);
spruce_cradleModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 1);
spruce_cradleModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 1);
spruce_cradleModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 1);
spruce_cradleModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 1);
spruce_cradleModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 1);
spruce_cradleModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 1);
spruce_cradleModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 1);
spruce_cradleModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 1);
spruce_cradleModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
spruce_cradleModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
spruce_cradleModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 3);
Furniture.addReplacementItem({id:"spruce_cradle"},{id:"spruce_cradle"}, Furniture.placeRotatableBlock(BlockID.spruce_cradle, spruce_cradleModel));

IDRegistry.genBlockID("birch_cradle");
Block.createBlock("birch_cradle", [
	{name: "Birch Cradle", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Cradle", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Cradle", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Cradle", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_cradle");
Item.createItem("birch_cradle", "Birch Cradle", {name: "birch_cradle", meta: 0}, {stack: 64});

var birch_cradleModel = ModelAPI.newArray();
birch_cradleModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 2);
birch_cradleModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 2);
birch_cradleModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 2);
birch_cradleModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 2);
birch_cradleModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 2);
birch_cradleModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 2);
birch_cradleModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 2);
birch_cradleModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 2);
birch_cradleModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 2);
birch_cradleModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 2);
birch_cradleModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 2);
birch_cradleModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 2);
birch_cradleModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 2);
birch_cradleModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 2);
birch_cradleModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 2);
birch_cradleModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 2);
birch_cradleModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 2);
birch_cradleModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 2);
birch_cradleModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 2);
birch_cradleModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 2);
birch_cradleModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 2);
birch_cradleModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 2);
birch_cradleModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 2);
birch_cradleModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 2);
birch_cradleModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 2);
birch_cradleModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 2);
birch_cradleModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 2);
birch_cradleModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 2);
birch_cradleModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 2);
birch_cradleModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 2);
birch_cradleModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 2);
birch_cradleModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 2);
birch_cradleModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 2);
birch_cradleModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 2);
birch_cradleModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 2);
birch_cradleModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 2);
birch_cradleModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 2);
birch_cradleModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
birch_cradleModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
birch_cradleModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 3);
Furniture.addReplacementItem({id:"birch_cradle"},{id:"birch_cradle"}, Furniture.placeRotatableBlock(BlockID.birch_cradle, birch_cradleModel));

IDRegistry.genBlockID("jungle_cradle");
Block.createBlock("jungle_cradle", [
	{name: "Jungle Cradle", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Cradle", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Cradle", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Cradle", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_cradle");
Item.createItem("jungle_cradle", "Jungle Cradle", {name: "jungle_cradle", meta: 0}, {stack: 64});

var jungle_cradleModel = ModelAPI.newArray();
jungle_cradleModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 3);
jungle_cradleModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 3);
jungle_cradleModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 3);
jungle_cradleModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 3);
jungle_cradleModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 3);
jungle_cradleModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 3);
jungle_cradleModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 3);
jungle_cradleModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 3);
jungle_cradleModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 3);
jungle_cradleModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 3);
jungle_cradleModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 3);
jungle_cradleModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 3);
jungle_cradleModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 3);
jungle_cradleModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 3);
jungle_cradleModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 3);
jungle_cradleModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 3);
jungle_cradleModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 3);
jungle_cradleModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 3);
jungle_cradleModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 3);
jungle_cradleModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 3);
jungle_cradleModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 3);
jungle_cradleModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 3);
jungle_cradleModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 3);
jungle_cradleModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 3);
jungle_cradleModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 3);
jungle_cradleModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 3);
jungle_cradleModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 3);
jungle_cradleModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 3);
jungle_cradleModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 3);
jungle_cradleModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 3);
jungle_cradleModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 3);
jungle_cradleModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 3);
jungle_cradleModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 3);
jungle_cradleModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 3);
jungle_cradleModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 3);
jungle_cradleModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 3);
jungle_cradleModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 3);
jungle_cradleModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
jungle_cradleModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
jungle_cradleModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 3);
Furniture.addReplacementItem({id:"jungle_cradle"},{id:"jungle_cradle"}, Furniture.placeRotatableBlock(BlockID.jungle_cradle, jungle_cradleModel));

IDRegistry.genBlockID("acacia_cradle");
Block.createBlock("acacia_cradle", [
	{name: "Acacia Cradle", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Cradle", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Cradle", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Cradle", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_cradle");
Item.createItem("acacia_cradle", "Acacia Cradle", {name: "acacia_cradle", meta: 0}, {stack: 64});

var acacia_cradleModel = ModelAPI.newArray();
acacia_cradleModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 4);
acacia_cradleModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 4);
acacia_cradleModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 4);
acacia_cradleModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 4);
acacia_cradleModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 4);
acacia_cradleModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 4);
acacia_cradleModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 4);
acacia_cradleModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 4);
acacia_cradleModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 4);
acacia_cradleModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 4);
acacia_cradleModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 4);
acacia_cradleModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 4);
acacia_cradleModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 4);
acacia_cradleModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 4);
acacia_cradleModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 4);
acacia_cradleModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 4);
acacia_cradleModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 4);
acacia_cradleModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 4);
acacia_cradleModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 4);
acacia_cradleModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 4);
acacia_cradleModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 4);
acacia_cradleModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 4);
acacia_cradleModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 4);
acacia_cradleModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 4);
acacia_cradleModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 4);
acacia_cradleModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 4);
acacia_cradleModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 4);
acacia_cradleModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 4);
acacia_cradleModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 4);
acacia_cradleModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 4);
acacia_cradleModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 4);
acacia_cradleModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 4);
acacia_cradleModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 4);
acacia_cradleModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 4);
acacia_cradleModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 4);
acacia_cradleModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 4);
acacia_cradleModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 4);
acacia_cradleModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
acacia_cradleModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 5);
acacia_cradleModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 14);
Furniture.addReplacementItem({id:"acacia_cradle"},{id:"acacia_cradle"}, Furniture.placeRotatableBlock(BlockID.acacia_cradle, acacia_cradleModel));

IDRegistry.genBlockID("dark_oak_cradle");
Block.createBlock("dark_oak_cradle", [
	{name: "Dark Oak Cradle", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Cradle", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Cradle", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Cradle", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_cradle");
Item.createItem("dark_oak_cradle", "Dark Oak Cradle", {name: "dark_oak_cradle", meta: 0}, {stack: 64});

var dark_oak_cradleModel = ModelAPI.newArray();
dark_oak_cradleModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 5);
dark_oak_cradleModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 5);
dark_oak_cradleModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 5);
dark_oak_cradleModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 5);
dark_oak_cradleModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 5);
dark_oak_cradleModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 5);
dark_oak_cradleModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 5);
dark_oak_cradleModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 5);
dark_oak_cradleModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 5);
dark_oak_cradleModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 5);
dark_oak_cradleModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 5);
dark_oak_cradleModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 5);
dark_oak_cradleModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 5);
dark_oak_cradleModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 5);
dark_oak_cradleModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 5);
dark_oak_cradleModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 5);
dark_oak_cradleModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 5);
dark_oak_cradleModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 5);
dark_oak_cradleModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 5);
dark_oak_cradleModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 5);
dark_oak_cradleModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 5);
dark_oak_cradleModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 5);
dark_oak_cradleModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 5);
dark_oak_cradleModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 5);
dark_oak_cradleModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 5);
dark_oak_cradleModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 5);
dark_oak_cradleModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 5);
dark_oak_cradleModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 5);
dark_oak_cradleModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 5);
dark_oak_cradleModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 5);
dark_oak_cradleModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 5);
dark_oak_cradleModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 5);
dark_oak_cradleModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 5);
dark_oak_cradleModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 5);
dark_oak_cradleModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 5);
dark_oak_cradleModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 5);
dark_oak_cradleModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 5);
dark_oak_cradleModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 5);
dark_oak_cradleModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
dark_oak_cradleModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 5);
Furniture.addReplacementItem({id:"dark_oak_cradle"},{id:"dark_oak_cradle"}, Furniture.placeRotatableBlock(BlockID.dark_oak_cradle, dark_oak_cradleModel));

Block.setShape(BlockID.oak_cradle,0,0,0,1,0.20,1);
Block.setShape(BlockID.spruce_cradle,0,0,0,1,0.20,1);
Block.setShape(BlockID.birch_cradle,0,0,0,1,0.20,1);
Block.setShape(BlockID.jungle_cradle,0,0,0,1,0.20,1);
Block.setShape(BlockID.acacia_cradle,0,0,0,1,0.20,1);
Block.setShape(BlockID.dark_oak_cradle,0,0,0,1,0.20,1);

Translation.addTranslation("Oak Cradle", {ru: "Дубовая Колыбель"});
Translation.addTranslation("Spruce Cradle", {ru: "Еловая Колыбель"});
Translation.addTranslation("Birch Cradle", {ru: "Берёзовая Колыбель"});
Translation.addTranslation("Jungle Cradle", {ru: "Джунглевая  Колыбель"});
Translation.addTranslation("Acacia Cradle", {ru: "Акациевая Колыбель"});
Translation.addTranslation("Dark Oak Cradle", {ru: "Тёмно Дубовая Колыбель"});

Recipes.addShaped({id: ItemID.oak_cradle, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,0, 'x', 158,0])
Recipes.addShaped({id: ItemID.spruce_cradle, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,1, 'x', 158,1])
Recipes.addShaped({id: ItemID.birch_cradle, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,2, 'x', 158,2])
Recipes.addShaped({id: ItemID.jungle_cradle, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,3, 'x', 158,3])
Recipes.addShaped({id: ItemID.acacia_cradle, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,4, 'x', 158,4])
Recipes.addShaped({id: ItemID.dark_oak_cradle, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,5, 'x', 158,5])