IDRegistry.genBlockID("oak_barrel");
Block.createBlock("oak_barrel", [
	{name: "Oak Barrel", texture: [["planks_oak", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var oak_barrelModel = ModelAPI.newArray();
oak_barrelModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5);
oak_barrelModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5);
oak_barrelModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5);
oak_barrelModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5);
oak_barrelModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5);
oak_barrelModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5);
oak_barrelModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5);
oak_barrelModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5);
oak_barrelModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5);
oak_barrelModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
oak_barrelModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
oak_barrelModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
oak_barrelModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
oak_barrelModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
oak_barrelModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
oak_barrelModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
oak_barrelModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
oak_barrelModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
oak_barrelModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
oak_barrelModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
oak_barrelModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
oak_barrelModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
oak_barrelModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
oak_barrelModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
oak_barrelModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
oak_barrelModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
oak_barrelModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
oak_barrelModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
oak_barrelModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
oak_barrelModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
oak_barrelModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
oak_barrelModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
oak_barrelModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
oak_barrelModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
oak_barrelModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
oak_barrelModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
oak_barrelModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
oak_barrelModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
oak_barrelModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
oak_barrelModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
oak_barrelModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
oak_barrelModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.oak_barrel, oak_barrelModel);

IDRegistry.genBlockID("spruce_barrel");
Block.createBlock("spruce_barrel", [
	{name: "Spruce Barrel", texture: [["planks_spruce", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var spruce_barrelModel = ModelAPI.newArray();
spruce_barrelModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 1);
spruce_barrelModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 1);
spruce_barrelModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 1);
spruce_barrelModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 1);
spruce_barrelModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 1);
spruce_barrelModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 1);
spruce_barrelModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 1);
spruce_barrelModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 1);
spruce_barrelModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 1);
spruce_barrelModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
spruce_barrelModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
spruce_barrelModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
spruce_barrelModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
spruce_barrelModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
spruce_barrelModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
spruce_barrelModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
spruce_barrelModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
spruce_barrelModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
spruce_barrelModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
spruce_barrelModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
spruce_barrelModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
spruce_barrelModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
spruce_barrelModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
spruce_barrelModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
spruce_barrelModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
spruce_barrelModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
spruce_barrelModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
spruce_barrelModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
spruce_barrelModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
spruce_barrelModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
spruce_barrelModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
spruce_barrelModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
spruce_barrelModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
spruce_barrelModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
spruce_barrelModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
spruce_barrelModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
spruce_barrelModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
spruce_barrelModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
spruce_barrelModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
spruce_barrelModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
spruce_barrelModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
spruce_barrelModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.spruce_barrel, spruce_barrelModel);

IDRegistry.genBlockID("birch_barrel");
Block.createBlock("birch_barrel", [
	{name: "Birch Barrel", texture: [["planks_birch", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var birch_barrelModel = ModelAPI.newArray();
birch_barrelModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 2);
birch_barrelModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 2);
birch_barrelModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 2);
birch_barrelModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 2);
birch_barrelModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 2);
birch_barrelModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 2);
birch_barrelModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 2);
birch_barrelModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 2);
birch_barrelModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 2);
birch_barrelModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
birch_barrelModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
birch_barrelModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
birch_barrelModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
birch_barrelModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
birch_barrelModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
birch_barrelModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
birch_barrelModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
birch_barrelModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
birch_barrelModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
birch_barrelModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
birch_barrelModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
birch_barrelModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
birch_barrelModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
birch_barrelModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
birch_barrelModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
birch_barrelModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
birch_barrelModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
birch_barrelModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
birch_barrelModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
birch_barrelModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
birch_barrelModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
birch_barrelModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
birch_barrelModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
birch_barrelModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
birch_barrelModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
birch_barrelModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
birch_barrelModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
birch_barrelModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
birch_barrelModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
birch_barrelModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
birch_barrelModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
birch_barrelModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.birch_barrel, birch_barrelModel);

IDRegistry.genBlockID("jungle_barrel");
Block.createBlock("jungle_barrel", [
	{name: "Jungle Barrel", texture: [["planks_jungle", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var jungle_barrelModel = ModelAPI.newArray();
jungle_barrelModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 3);
jungle_barrelModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 3);
jungle_barrelModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 3);
jungle_barrelModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 3);
jungle_barrelModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 3);
jungle_barrelModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 3);
jungle_barrelModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 3);
jungle_barrelModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 3);
jungle_barrelModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 3);
jungle_barrelModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
jungle_barrelModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
jungle_barrelModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
jungle_barrelModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
jungle_barrelModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
jungle_barrelModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
jungle_barrelModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
jungle_barrelModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
jungle_barrelModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
jungle_barrelModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
jungle_barrelModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
jungle_barrelModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
jungle_barrelModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
jungle_barrelModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
jungle_barrelModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
jungle_barrelModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
jungle_barrelModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
jungle_barrelModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
jungle_barrelModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
jungle_barrelModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
jungle_barrelModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
jungle_barrelModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
jungle_barrelModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
jungle_barrelModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
jungle_barrelModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
jungle_barrelModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
jungle_barrelModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
jungle_barrelModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
jungle_barrelModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
jungle_barrelModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
jungle_barrelModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
jungle_barrelModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
jungle_barrelModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.jungle_barrel, jungle_barrelModel);

IDRegistry.genBlockID("acacia_barrel");
Block.createBlock("acacia_barrel", [
	{name: "Acacia Barrel", texture: [["planks_acacia", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var acacia_barrelModel = ModelAPI.newArray();
acacia_barrelModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 4);
acacia_barrelModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 4);
acacia_barrelModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 4);
acacia_barrelModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 4);
acacia_barrelModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 4);
acacia_barrelModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 4);
acacia_barrelModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 4);
acacia_barrelModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 4);
acacia_barrelModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 4);
acacia_barrelModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
acacia_barrelModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
acacia_barrelModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
acacia_barrelModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
acacia_barrelModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
acacia_barrelModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
acacia_barrelModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
acacia_barrelModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
acacia_barrelModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
acacia_barrelModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
acacia_barrelModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
acacia_barrelModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
acacia_barrelModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
acacia_barrelModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
acacia_barrelModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
acacia_barrelModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
acacia_barrelModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
acacia_barrelModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
acacia_barrelModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
acacia_barrelModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
acacia_barrelModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
acacia_barrelModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
acacia_barrelModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
acacia_barrelModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
acacia_barrelModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
acacia_barrelModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
acacia_barrelModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
acacia_barrelModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
acacia_barrelModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
acacia_barrelModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
acacia_barrelModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
acacia_barrelModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
acacia_barrelModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.acacia_barrel, acacia_barrelModel);

IDRegistry.genBlockID("dark_oak_barrel");
Block.createBlock("dark_oak_barrel", [
	{name: "Dark Oak Barrel", texture: [["planks_big_oak", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var dark_oak_barrelModel = ModelAPI.newArray();
dark_oak_barrelModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 5);
dark_oak_barrelModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 5);
dark_oak_barrelModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 5);
dark_oak_barrelModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 5);
dark_oak_barrelModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 5);
dark_oak_barrelModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 5);
dark_oak_barrelModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 5);
dark_oak_barrelModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 5);
dark_oak_barrelModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 5);
dark_oak_barrelModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
dark_oak_barrelModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
dark_oak_barrelModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
dark_oak_barrelModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
dark_oak_barrelModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
dark_oak_barrelModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
dark_oak_barrelModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
dark_oak_barrelModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
dark_oak_barrelModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
dark_oak_barrelModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
dark_oak_barrelModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
dark_oak_barrelModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
dark_oak_barrelModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
dark_oak_barrelModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
dark_oak_barrelModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
dark_oak_barrelModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
dark_oak_barrelModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
dark_oak_barrelModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
dark_oak_barrelModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
dark_oak_barrelModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
dark_oak_barrelModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
dark_oak_barrelModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
dark_oak_barrelModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
dark_oak_barrelModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
dark_oak_barrelModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
dark_oak_barrelModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
dark_oak_barrelModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
dark_oak_barrelModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
dark_oak_barrelModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
dark_oak_barrelModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
dark_oak_barrelModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
dark_oak_barrelModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
dark_oak_barrelModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.dark_oak_barrel, dark_oak_barrelModel);

//translation barrels
Translation.addTranslation("Oak Barrel", {ru: "Дубовая Бочка"});
Translation.addTranslation("Spruce Barrel", {ru: "Еловая Бочка"});
Translation.addTranslation("Birch Barrel", {ru: "Берёзовая Бочка"});
Translation.addTranslation("Jungle Barrel", {ru: "Джунглевая Бочка"});
Translation.addTranslation("Acacia Barrel", {ru: "Акациевая Бочка"});
Translation.addTranslation("Dark Oak Barrel", {ru: "Тёмно Дубовая Бочка"});

//recipes barrels
Recipes.addShaped({id: BlockID.oak_barrel, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,0, 'x', 158,0])
Recipes.addShaped({id: BlockID.spruce_barrel, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,1, 'x', 158,1])
Recipes.addShaped({id: BlockID.birch_barrel, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,2, 'x', 158,2])
Recipes.addShaped({id: BlockID.jungle_barrel, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,3, 'x', 158,3])
Recipes.addShaped({id: BlockID.acacia_barrel, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,4, 'x', 158,4])
Recipes.addShaped({id: BlockID.dark_oak_barrel, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,5, 'x', 158,5])