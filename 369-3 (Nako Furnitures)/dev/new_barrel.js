IDRegistry.genBlockID("barreloak");
Block.createBlock("barreloak", [
	{name: "Oak Barrel", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var barreloakModel = ModelAPI.newArray();
barreloakModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5);
barreloakModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5);
barreloakModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5);
barreloakModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5);
barreloakModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5);
barreloakModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5);
barreloakModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5);
barreloakModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5);
barreloakModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5);
barreloakModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
barreloakModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
barreloakModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
barreloakModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
barreloakModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
barreloakModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
barreloakModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
barreloakModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
barreloakModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
barreloakModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
barreloakModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
barreloakModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
barreloakModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
barreloakModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
barreloakModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
barreloakModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
barreloakModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
barreloakModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
barreloakModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
barreloakModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
barreloakModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
barreloakModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
barreloakModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
barreloakModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
barreloakModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
barreloakModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
barreloakModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
barreloakModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
barreloakModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
barreloakModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
barreloakModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
barreloakModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
barreloakModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.barreloak, barreloakModel);

IDRegistry.genBlockID("barrelspruce");
Block.createBlock("barrelspruce", [
	{name: "Spruce Barrel", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var barrelspruceModel = ModelAPI.newArray();
barrelspruceModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 1);
barrelspruceModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 1);
barrelspruceModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 1);
barrelspruceModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 1);
barrelspruceModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 1);
barrelspruceModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 1);
barrelspruceModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 1);
barrelspruceModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 1);
barrelspruceModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 1);
barrelspruceModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
barrelspruceModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
barrelspruceModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
barrelspruceModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
barrelspruceModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
barrelspruceModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
barrelspruceModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
barrelspruceModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
barrelspruceModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
barrelspruceModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
barrelspruceModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
barrelspruceModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
barrelspruceModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
barrelspruceModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
barrelspruceModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
barrelspruceModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
barrelspruceModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
barrelspruceModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
barrelspruceModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
barrelspruceModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
barrelspruceModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
barrelspruceModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
barrelspruceModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
barrelspruceModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
barrelspruceModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
barrelspruceModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
barrelspruceModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
barrelspruceModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
barrelspruceModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
barrelspruceModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
barrelspruceModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
barrelspruceModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
barrelspruceModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.barrelspruce, barrelspruceModel);

IDRegistry.genBlockID("barrelbrich");
Block.createBlock("barrelbrich", [
	{name: "Birch Barrel", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var barrelbrichModel = ModelAPI.newArray();
barrelbrichModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 2);
barrelbrichModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 2);
barrelbrichModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 2);
barrelbrichModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 2);
barrelbrichModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 2);
barrelbrichModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 2);
barrelbrichModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 2);
barrelbrichModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 2);
barrelbrichModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 2);
barrelbrichModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
barrelbrichModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
barrelbrichModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
barrelbrichModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
barrelbrichModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
barrelbrichModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
barrelbrichModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
barrelbrichModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
barrelbrichModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
barrelbrichModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
barrelbrichModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
barrelbrichModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
barrelbrichModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
barrelbrichModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
barrelbrichModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
barrelbrichModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
barrelbrichModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
barrelbrichModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
barrelbrichModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
barrelbrichModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
barrelbrichModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
barrelbrichModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
barrelbrichModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
barrelbrichModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
barrelbrichModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
barrelbrichModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
barrelbrichModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
barrelbrichModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
barrelbrichModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
barrelbrichModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
barrelbrichModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
barrelbrichModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
barrelbrichModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.barrelbrich, barrelbrichModel);

IDRegistry.genBlockID("barreljungle");
Block.createBlock("barreljungle", [
	{name: "Jungle Barrel", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var barreljungleModel = ModelAPI.newArray();
barreljungleModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 3);
barreljungleModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 3);
barreljungleModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 3);
barreljungleModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 3);
barreljungleModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 3);
barreljungleModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 3);
barreljungleModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 3);
barreljungleModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 3);
barreljungleModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 3);
barreljungleModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
barreljungleModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
barreljungleModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
barreljungleModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
barreljungleModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
barreljungleModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
barreljungleModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
barreljungleModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
barreljungleModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
barreljungleModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
barreljungleModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
barreljungleModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
barreljungleModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
barreljungleModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
barreljungleModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
barreljungleModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
barreljungleModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
barreljungleModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
barreljungleModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
barreljungleModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
barreljungleModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
barreljungleModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
barreljungleModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
barreljungleModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
barreljungleModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
barreljungleModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
barreljungleModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
barreljungleModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
barreljungleModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
barreljungleModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
barreljungleModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
barreljungleModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
barreljungleModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.barreljungle, barreljungleModel);

IDRegistry.genBlockID("barrelacacia");
Block.createBlock("barrelacacia", [
	{name: "Acacia Barrel", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var barrelacaciaModel = ModelAPI.newArray();
barrelacaciaModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 4);
barrelacaciaModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 4);
barrelacaciaModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 4);
barrelacaciaModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 4);
barrelacaciaModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 4);
barrelacaciaModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 4);
barrelacaciaModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 4);
barrelacaciaModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 4);
barrelacaciaModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 4);
barrelacaciaModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
barrelacaciaModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
barrelacaciaModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
barrelacaciaModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
barrelacaciaModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
barrelacaciaModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
barrelacaciaModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
barrelacaciaModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
barrelacaciaModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
barrelacaciaModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
barrelacaciaModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
barrelacaciaModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
barrelacaciaModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
barrelacaciaModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
barrelacaciaModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
barrelacaciaModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
barrelacaciaModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
barrelacaciaModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
barrelacaciaModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
barrelacaciaModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
barrelacaciaModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
barrelacaciaModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
barrelacaciaModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
barrelacaciaModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
barrelacaciaModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
barrelacaciaModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
barrelacaciaModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
barrelacaciaModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
barrelacaciaModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
barrelacaciaModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
barrelacaciaModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
barrelacaciaModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
barrelacaciaModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.barrelacacia, barrelacaciaModel);

IDRegistry.genBlockID("barrelbigoak");
Block.createBlock("barrelbigoak", [
	{name: "Dark Oak Barrel", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var barrelbigoakModel = ModelAPI.newArray();
barrelbigoakModel.addBoxByID("1", 0.125,0,0.125,0.875,1,0.875, 5, 5);
barrelbigoakModel.addBoxByID("2", 0.875,0.0625,0.0625,0.9375,0.9375,0.9375, 5, 5);
barrelbigoakModel.addBoxByID("3", 0.0625,0.0625,0.0625,0.125,0.9375,0.9375, 5, 5);
barrelbigoakModel.addBoxByID("4", 0.125,0.0625,0.0625,0.875,0.9375,0.125, 5, 5);
barrelbigoakModel.addBoxByID("5", 0.125,0.0625,0.875,0.875,0.9375,0.9375, 5, 5);
barrelbigoakModel.addBoxByID("6", 0.9375,0.1875,0.1875,1,0.8125,0.8125, 5, 5);
barrelbigoakModel.addBoxByID("7", 0.1875,0.1875,0.9375,0.8125,0.8125,1, 5, 5);
barrelbigoakModel.addBoxByID("8", 0.1875,0.1875,0,0.8125,0.8125,0.0625, 5, 5);
barrelbigoakModel.addBoxByID("9", 0,0.1875,0.1875,0.0625,0.8125,0.8125, 5, 5);
barrelbigoakModel.addBoxByID("10", 0.625,1,0.25,0.75,1.0625,0.375, 159, 9);
barrelbigoakModel.addBoxByID("11", 0.0625,0.9375,0.125,0.125,1,0.875, 159, 9);
barrelbigoakModel.addBoxByID("12", 0.1875,0.625,1,0.8125,0.6875,1.0625, 159, 9);
barrelbigoakModel.addBoxByID("13", 0.1875,0,0.875,0.8125,0.0625,0.9375, 159, 9);
barrelbigoakModel.addBoxByID("14", 1,0.625,0.1875,1.0625,0.6875,0.8125, 159, 9);
barrelbigoakModel.addBoxByID("15", 0.125,0.9375,0.0625,0.875,1,0.125, 159, 9);
barrelbigoakModel.addBoxByID("16", 0.875,0.9375,0.125,0.9375,1,0.875, 159, 9);
barrelbigoakModel.addBoxByID("17", 0.125,0.9375,0.875,0.875,1,0.9375, 159, 9);
barrelbigoakModel.addBoxByID("18", 0.1875,0.3125,1,0.8125,0.375,1.0625, 159, 9);
barrelbigoakModel.addBoxByID("19", 0.1875,0.3125,-0.0625,0.8125,0.375,0, 159, 9);
barrelbigoakModel.addBoxByID("20", 0.1875,0,0.0625,0.8125,0.0625,0.125, 159, 9);
barrelbigoakModel.addBoxByID("21", 0.1875,0.625,-0.0625,0.8125,0.6875,0, 159, 9);
barrelbigoakModel.addBoxByID("22", -0.0625,0.625,0.1875,0,0.6875,0.8125, 159, 9);
barrelbigoakModel.addBoxByID("23", -0.0625,0.3125,0.1875,0,0.375,0.8125, 159, 9);
barrelbigoakModel.addBoxByID("24", 0.0625,0,0.1875,0.125,0.0625,0.8125, 159, 9);
barrelbigoakModel.addBoxByID("25", 0.875,0,0.1875,0.9375,0.0625,0.8125, 159, 9);
barrelbigoakModel.addBoxByID("26", 1,0.3125,0.1875,1.0625,0.375,0.8125, 159, 9);
barrelbigoakModel.addBoxByID("27", 0.9375,0.625,0.8125,1,0.6875,0.9375, 159, 9);
barrelbigoakModel.addBoxByID("28", 0.8125,0.625,0.9375,0.9375,0.6875,1, 159, 9);
barrelbigoakModel.addBoxByID("29", 0.8125,0.3125,0.9375,0.9375,0.375,1, 159, 9);
barrelbigoakModel.addBoxByID("30", 0.0625,0.3125,0.9375,0.1875,0.375,1, 159, 9);
barrelbigoakModel.addBoxByID("31", 0.0625,0.625,0.9375,0.1875,0.6875,1, 159, 9);
barrelbigoakModel.addBoxByID("32", 0.0625,0.625,0,0.1875,0.6875,0.0625, 159, 9);
barrelbigoakModel.addBoxByID("33", 0.0625,0.3125,0,0.1875,0.375,0.0625, 159, 9);
barrelbigoakModel.addBoxByID("34", 0.8125,0.3125,0,0.9375,0.375,0.0625, 159, 9);
barrelbigoakModel.addBoxByID("35", 0.8125,0.625,0,0.9375,0.6875,0.0625, 159, 9);
barrelbigoakModel.addBoxByID("36", 0,0.625,0.8125,0.0625,0.6875,0.9375, 159, 9);
barrelbigoakModel.addBoxByID("37", 0,0.3125,0.8125,0.0625,0.375,0.9375, 159, 9);
barrelbigoakModel.addBoxByID("38", 0,0.3125,0.0625,0.0625,0.375,0.1875, 159, 9);
barrelbigoakModel.addBoxByID("39", 0,0.625,0.0625,0.0625,0.6875,0.1875, 159, 9);
barrelbigoakModel.addBoxByID("40", 0.9375,0.625,0.0625,1,0.6875,0.1875, 159, 9);
barrelbigoakModel.addBoxByID("41", 0.9375,0.3125,0.0625,1,0.375,0.1875, 159, 9);
barrelbigoakModel.addBoxByID("42", 0.9375,0.3125,0.8125,1,0.375,0.9375, 159, 9);
Furniture.placeRotatableBlock(BlockID.barrelbigoak, barrelbigoakModel);

//translation barrels
Translation.addTranslation("Oak Barrel", {ru: "Дубовая Бочка"});
Translation.addTranslation("Spruce Barrel", {ru: "Еловая Бочка"});
Translation.addTranslation("Birch Barrel", {ru: "Берёзовая Бочка"});
Translation.addTranslation("Jungle Barrel", {ru: "Джунглевая Бочка"});
Translation.addTranslation("Acacia Barrel", {ru: "Акациевая Бочка"});
Translation.addTranslation("Dark Oak Barrel", {ru: "Тёмно дубовая Бочка"});

//recipes barrels
Recipes.addShaped({id: BlockID.barreloak, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,0, 'x', 158,0])
Recipes.addShaped({id: BlockID.barrelspruce, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,1, 'x', 158,1])
Recipes.addShaped({id: BlockID.barrelbrich, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,2, 'x', 158,2])
Recipes.addShaped({id: BlockID.barreljungle, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,3, 'x', 158,3])
Recipes.addShaped({id: BlockID.barrelacacia, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,4, 'x', 158,4])
Recipes.addShaped({id: BlockID.barrelbigoak, count: 1, data: 0}, ["xxx", "a a", "xxx"], ['a', 5,5, 'x', 158,5])