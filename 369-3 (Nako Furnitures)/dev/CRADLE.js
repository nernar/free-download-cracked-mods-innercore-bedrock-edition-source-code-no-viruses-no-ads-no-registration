IDRegistry.genBlockID("cradleoak");
Block.createBlock("cradleoak", [
	{name: "cradleoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradleoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradleoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradleoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cradleoak");
Item.createItem("cradleoak", "Cradle", {name: "cradleoak", meta: 0}, {stack: 64});

Translation.addTranslation("Cradle", {ru: "Колыбель"});
Recipes.addShaped({id: ItemID.cradleoak, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,0, 'x', 158,0])

var cradleoakModel = ModelAPI.newArray();
cradleoakModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5);
cradleoakModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5);
cradleoakModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35);
cradleoakModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5);
cradleoakModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5);
cradleoakModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5);
cradleoakModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5);
cradleoakModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5);
cradleoakModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5);
cradleoakModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5);
cradleoakModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5);
cradleoakModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5);
cradleoakModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5);
cradleoakModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5);
cradleoakModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5);
cradleoakModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5);
cradleoakModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5);
cradleoakModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5);
cradleoakModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5);
cradleoakModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5);
cradleoakModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5);
cradleoakModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5);
cradleoakModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5);
cradleoakModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5);
cradleoakModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5);
cradleoakModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5);
cradleoakModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5);
cradleoakModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5);
cradleoakModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5);
cradleoakModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5);
cradleoakModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5);
cradleoakModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35);
cradleoakModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5);
cradleoakModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5);
cradleoakModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5);
cradleoakModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5);
cradleoakModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5);
cradleoakModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
cradleoakModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
cradleoakModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 3);
Furniture.addReplacementItem({id:"cradleoak"},{id:"cradleoak"}, Furniture.placeRotatableBlock(BlockID.cradleoak, cradleoakModel));

IDRegistry.genBlockID("cradlespruce");
Block.createBlock("cradlespruce", [
	{name: "cradlespruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlespruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlespruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlespruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cradlespruce");
Item.createItem("cradlespruce", "Cradle", {name: "cradlespruce", meta: 0}, {stack: 64});

Translation.addTranslation("Cradle", {ru: "Колыбель"});
Recipes.addShaped({id: ItemID.cradlespruce, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,1, 'x', 158,1])

var cradlespruceModel = ModelAPI.newArray();
cradlespruceModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 1);
cradlespruceModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 1);
cradlespruceModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 1);
cradlespruceModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 1);
cradlespruceModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 1);
cradlespruceModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 1);
cradlespruceModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 1);
cradlespruceModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 1);
cradlespruceModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 1);
cradlespruceModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 1);
cradlespruceModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 1);
cradlespruceModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 1);
cradlespruceModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 1);
cradlespruceModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 1);
cradlespruceModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 1);
cradlespruceModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 1);
cradlespruceModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 1);
cradlespruceModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 1);
cradlespruceModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 1);
cradlespruceModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 1);
cradlespruceModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 1);
cradlespruceModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 1);
cradlespruceModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 1);
cradlespruceModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 1);
cradlespruceModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 1);
cradlespruceModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 1);
cradlespruceModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 1);
cradlespruceModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 1);
cradlespruceModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 1);
cradlespruceModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 1);
cradlespruceModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 1);
cradlespruceModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 1);
cradlespruceModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 1);
cradlespruceModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 1);
cradlespruceModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 1);
cradlespruceModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 1);
cradlespruceModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 1);
cradlespruceModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
cradlespruceModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
cradlespruceModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 3);
Furniture.addReplacementItem({id:"cradlespruce"},{id:"cradlespruce"}, Furniture.placeRotatableBlock(BlockID.cradlespruce, cradlespruceModel));

IDRegistry.genBlockID("cradlebrich");
Block.createBlock("cradlebrich", [
	{name: "cradlebrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlebrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlebrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlebrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cradlebrich");
Item.createItem("cradlebrich", "Cradle", {name: "cradlebrich", meta: 0}, {stack: 64});

Translation.addTranslation("Cradle", {ru: "Колыбель"});
Recipes.addShaped({id: ItemID.cradlebrich, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,2, 'x', 158,2])

var cradlebrichModel = ModelAPI.newArray();
cradlebrichModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 2);
cradlebrichModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 2);
cradlebrichModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 2);
cradlebrichModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 2);
cradlebrichModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 2);
cradlebrichModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 2);
cradlebrichModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 2);
cradlebrichModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 2);
cradlebrichModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 2);
cradlebrichModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 2);
cradlebrichModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 2);
cradlebrichModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 2);
cradlebrichModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 2);
cradlebrichModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 2);
cradlebrichModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 2);
cradlebrichModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 2);
cradlebrichModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 2);
cradlebrichModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 2);
cradlebrichModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 2);
cradlebrichModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 2);
cradlebrichModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 2);
cradlebrichModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 2);
cradlebrichModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 2);
cradlebrichModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 2);
cradlebrichModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 2);
cradlebrichModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 2);
cradlebrichModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 2);
cradlebrichModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 2);
cradlebrichModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 2);
cradlebrichModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 2);
cradlebrichModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 2);
cradlebrichModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 2);
cradlebrichModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 2);
cradlebrichModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 2);
cradlebrichModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 2);
cradlebrichModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 2);
cradlebrichModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 2);
cradlebrichModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
cradlebrichModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
cradlebrichModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 3);
Furniture.addReplacementItem({id:"cradlebrich"},{id:"cradlebrich"}, Furniture.placeRotatableBlock(BlockID.cradlebrich, cradlebrichModel));

IDRegistry.genBlockID("cradlejungle");
Block.createBlock("cradlejungle", [
	{name: "cradlejungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlejungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlejungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlejungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cradlejungle");
Item.createItem("cradlejungle", "Cradle", {name: "cradlejungle", meta: 0}, {stack: 64});

Translation.addTranslation("Cradle", {ru: "Колыбель"});
Recipes.addShaped({id: ItemID.cradlejungle, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,3, 'x', 158,3])

var cradlejungleModel = ModelAPI.newArray();
cradlejungleModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 3);
cradlejungleModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 3);
cradlejungleModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 3);
cradlejungleModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 3);
cradlejungleModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 3);
cradlejungleModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 3);
cradlejungleModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 3);
cradlejungleModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 3);
cradlejungleModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 3);
cradlejungleModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 3);
cradlejungleModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 3);
cradlejungleModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 3);
cradlejungleModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 3);
cradlejungleModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 3);
cradlejungleModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 3);
cradlejungleModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 3);
cradlejungleModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 3);
cradlejungleModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 3);
cradlejungleModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 3);
cradlejungleModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 3);
cradlejungleModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 3);
cradlejungleModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 3);
cradlejungleModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 3);
cradlejungleModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 3);
cradlejungleModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 3);
cradlejungleModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 3);
cradlejungleModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 3);
cradlejungleModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 3);
cradlejungleModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 3);
cradlejungleModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 3);
cradlejungleModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 3);
cradlejungleModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 3);
cradlejungleModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 3);
cradlejungleModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 3);
cradlejungleModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 3);
cradlejungleModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 3);
cradlejungleModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 3);
cradlejungleModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
cradlejungleModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
cradlejungleModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 3);
Furniture.addReplacementItem({id:"cradlejungle"},{id:"cradlejungle"}, Furniture.placeRotatableBlock(BlockID.cradlejungle, cradlejungleModel));

IDRegistry.genBlockID("cradleacacia");
Block.createBlock("cradleacacia", [
	{name: "cradleacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradleacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradleacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradleacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cradleacacia");
Item.createItem("cradleacacia", "Cradle", {name: "cradleacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Cradle", {ru: "Колыбель"});
Recipes.addShaped({id: ItemID.cradleacacia, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,4, 'x', 158,4])

var cradleacaciaModel = ModelAPI.newArray();
cradleacaciaModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 4);
cradleacaciaModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 4);
cradleacaciaModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 4);
cradleacaciaModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 4);
cradleacaciaModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 4);
cradleacaciaModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 4);
cradleacaciaModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 4);
cradleacaciaModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 4);
cradleacaciaModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 4);
cradleacaciaModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 4);
cradleacaciaModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 4);
cradleacaciaModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 4);
cradleacaciaModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 4);
cradleacaciaModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 4);
cradleacaciaModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 4);
cradleacaciaModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 4);
cradleacaciaModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 4);
cradleacaciaModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 4);
cradleacaciaModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 4);
cradleacaciaModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 4);
cradleacaciaModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 4);
cradleacaciaModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 4);
cradleacaciaModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 4);
cradleacaciaModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 4);
cradleacaciaModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 4);
cradleacaciaModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 4);
cradleacaciaModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 4);
cradleacaciaModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 4);
cradleacaciaModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 4);
cradleacaciaModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 4);
cradleacaciaModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 4);
cradleacaciaModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 4);
cradleacaciaModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 4);
cradleacaciaModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 4);
cradleacaciaModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 4);
cradleacaciaModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 4);
cradleacaciaModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 4);
cradleacaciaModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 4);
cradleacaciaModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 5);
cradleacaciaModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 14);
Furniture.addReplacementItem({id:"cradleacacia"},{id:"cradleacacia"}, Furniture.placeRotatableBlock(BlockID.cradleacacia, cradleacaciaModel));

IDRegistry.genBlockID("cradlebigoak");
Block.createBlock("cradlebigoak", [
	{name: "cradlebigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlebigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlebigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cradlebigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cradlebigoak");
Item.createItem("cradlebigoak", "Cradle", {name: "cradlebigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Cradle", {ru: "Колыбель"});
Recipes.addShaped({id: ItemID.cradlebigoak, count: 1, data: 0}, ["aaa", "xxx"], ['a', 85,5, 'x', 158,5])

var cradlebigoakModel = ModelAPI.newArray();
cradlebigoakModel.addBoxByID("1", 1.75,0,0.125,1.875,0.125,0.25, 5, 5);
cradlebigoakModel.addBoxByID("2", 0.125,0,0.125,0.25,0.125,0.25, 5, 5);
cradlebigoakModel.addBoxByID("3", 0.0625,0.1875,0.0625,1,0.25,0.9375, 35, 5);
cradlebigoakModel.addBoxByID("4", 0.125,0,0.75,0.25,0.125,0.875, 5, 5);
cradlebigoakModel.addBoxByID("5", 1.75,0,0.75,1.875,0.125,0.875, 5, 5);
cradlebigoakModel.addBoxByID("6", 0,0.1875,0,0.0625,1,0.0625, 5, 5);
cradlebigoakModel.addBoxByID("7", 0,0.125,0,1,0.1875,1, 5, 5);
cradlebigoakModel.addBoxByID("8", 1,0.125,0,2,0.1875,1, 5, 5);
cradlebigoakModel.addBoxByID("9", 1.9375,0.1875,0,2,1,0.0625, 5, 5);
cradlebigoakModel.addBoxByID("10", 1.625,0.1875,0,1.6875,1,0.0625, 5, 5);
cradlebigoakModel.addBoxByID("11", 1.3125,0.1875,0,1.375,1,0.0625, 5, 5);
cradlebigoakModel.addBoxByID("12", 2,1,0.4375,2.0625,1.625,0.5, 5, 5);
cradlebigoakModel.addBoxByID("13", 0.625,0.1875,0,0.6875,1,0.0625, 5, 5);
cradlebigoakModel.addBoxByID("14", 0.3125,0.1875,0.9375,0.375,1,1, 5, 5);
cradlebigoakModel.addBoxByID("15", 0.9375,0.1875,0,1,1,0.0625, 5, 5);
cradlebigoakModel.addBoxByID("16", 0.625,0.1875,0.9375,0.6875,1,1, 5, 5);
cradlebigoakModel.addBoxByID("17", 0,0.1875,0.9375,0.0625,1,1, 5, 5);
cradlebigoakModel.addBoxByID("18", 0.3125,0.1875,0,0.375,1,0.0625, 5, 5);
cradlebigoakModel.addBoxByID("19", 0,0.1875,0.3125,0.0625,1,0.375, 5, 5);
cradlebigoakModel.addBoxByID("20", 0,0.1875,0.625,0.0625,1,0.6875, 5, 5);
cradlebigoakModel.addBoxByID("21", 0.9375,0.1875,0.9375,1,1,1, 5, 5);
cradlebigoakModel.addBoxByID("22", 1.3125,0.1875,0.9375,1.375,1,1, 5, 5);
cradlebigoakModel.addBoxByID("23", 1.625,0.1875,0.9375,1.6875,1,1, 5, 5);
cradlebigoakModel.addBoxByID("24", 1.9375,0.1875,0.9375,2,1,1, 5, 5);
cradlebigoakModel.addBoxByID("25", 1.4375,1.1875,0.4375,1.5,1.75,0.5, 5, 5);
cradlebigoakModel.addBoxByID("26", 0,0.9375,-0.0625,1,1,0, 5, 5);
cradlebigoakModel.addBoxByID("27", -0.0625,0.9375,0,0,1,1, 5, 5);
cradlebigoakModel.addBoxByID("28", 2,0.9375,0,2.0625,1,1, 5, 5);
cradlebigoakModel.addBoxByID("29", 0,0.9375,1,1,1,1.0625, 5, 5);
cradlebigoakModel.addBoxByID("30", 1.4375,1.125,0.1875,1.5,1.1875,0.75, 5, 5);
cradlebigoakModel.addBoxByID("31", 1,0.9375,-0.0625,2,1,0, 5, 5);
cradlebigoakModel.addBoxByID("32", 1,0.1875,0.0625,1.9375,0.25,0.9375, 35, 5);
cradlebigoakModel.addBoxByID("33", 1.9375,0.1875,0.625,2,1,0.6875, 5, 5);
cradlebigoakModel.addBoxByID("34", 1,0.9375,1,2,1,1.0625, 5, 5);
cradlebigoakModel.addBoxByID("35", 1.9375,0.1875,0.3125,2,1,0.375, 5, 5);
cradlebigoakModel.addBoxByID("36", 1.375,1.625,0.4375,2,1.6875,0.5, 5, 5);
cradlebigoakModel.addBoxByID("37", 1.1875,1.125,0.4375,1.75,1.1875,0.5, 5, 5);
cradlebigoakModel.addBoxByID("38", 1.4375,0.9375,0.6875,1.5,1,0.75, 35, 5);
cradlebigoakModel.addBoxByID("39", 1.0625,0.75,0.3125,1.3125,1,0.5625, 35, 14);
cradlebigoakModel.addBoxByID("40", 1.625,0.75,0.3125,1.8125,0.9375,0.5, 35, 5);
Furniture.addReplacementItem({id:"cradlebigoak"},{id:"cradlebigoak"}, Furniture.placeRotatableBlock(BlockID.cradlebigoak, cradlebigoakModel));

Block.setShape(BlockID.cradleoak,0,0,0,1,0.20,1);
Block.setShape(BlockID.cradlespruce,0,0,0,1,0.20,1);
Block.setShape(BlockID.cradlebrich,0,0,0,1,0.20,1);
Block.setShape(BlockID.cradlejungle,0,0,0,1,0.20,1);
Block.setShape(BlockID.cradleacacia,0,0,0,1,0.20,1);
Block.setShape(BlockID.cradlebigoak,0,0,0,1,0.20,1);