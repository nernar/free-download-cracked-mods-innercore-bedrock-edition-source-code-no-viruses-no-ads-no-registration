IDRegistry.genBlockID("chestoak");
Block.createBlock("chestoak", [
	{name: "chestoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("chestoak");
Item.createItem("chestoak", "Big Chest", {name: "chestoak", meta: 0}, {stack: 64});

Translation.addTranslation("Big Chest", {ru: "Большой Сундук"});
Recipes.addShaped({id: ItemID.chestoak, count: 1, data: 0}, ["xxx", "aaa", "aaa"], ['a', 5,0, 'x', 158,0])

var chestoakModel = ModelAPI.newArray();
chestoakModel.addBoxByID("1", 1.8125,0.0625,0.125,1.875,0.8125,0.875, 5);
chestoakModel.addBoxByID("2", 0.125,0,0.125,1,0.0625,0.875, 5);
chestoakModel.addBoxByID("3", 1.875,0.0625,0.875,1.9375,1,0.9375, 159, 9);
chestoakModel.addBoxByID("4", 0.0625,0,0.0625,1,0.0625,0.125, 159, 9);
chestoakModel.addBoxByID("5", 1,0,0.0625,1.9375,0.0625,0.125, 159, 9);
chestoakModel.addBoxByID("6", 1,0,0.875,1.9375,0.0625,0.9375, 159, 9);
chestoakModel.addBoxByID("7", 0.125,0.8125,0.0625,1,0.875,0.125, 159, 9);
chestoakModel.addBoxByID("8", 0.0625,0,0.125,0.125,0.0625,0.875, 159, 9);
chestoakModel.addBoxByID("9", 1,0,0.125,1.875,0.0625,0.875, 5);
chestoakModel.addBoxByID("10", 1,0.0625,0.8125,1.875,0.8125,0.875, 5);
chestoakModel.addBoxByID("11", 0.125,0.0625,0.8125,1,0.8125,0.875, 5);
chestoakModel.addBoxByID("12", 0.125,0.0625,0.125,1,0.8125,0.1875, 5);
chestoakModel.addBoxByID("13", 1,0.0625,0.125,1.875,0.8125,0.1875, 5);
chestoakModel.addBoxByID("14", 0.125,0.0625,0.125,0.1875,0.8125,0.875, 5);
chestoakModel.addBoxByID("15", 0.0625,0,0.875,1,0.0625,0.9375, 159, 9);
chestoakModel.addBoxByID("16", 0.125,0.8125,0.875,1,0.875,0.9375, 159, 9);
chestoakModel.addBoxByID("17", 1,0.8125,0.875,1.875,0.875,0.9375, 159, 9);
chestoakModel.addBoxByID("18", 1,0.8125,0.0625,1.875,0.875,0.125, 159, 9);
chestoakModel.addBoxByID("19", 1.875,0,0.125,1.9375,0.0625,0.875, 159, 9);
chestoakModel.addBoxByID("20", 1.875,0.8125,0.125,1.9375,0.875,0.875, 159, 9);
chestoakModel.addBoxByID("21", 0.0625,0.8125,0.125,0.125,0.875,0.875, 159, 9);
chestoakModel.addBoxByID("22", 0.0625,0.0625,0.875,0.125,1,0.9375, 159, 9);
chestoakModel.addBoxByID("23", 0.0625,0.0625,0.0625,0.125,1,0.125, 159, 9);
chestoakModel.addBoxByID("24", 1.875,0.0625,0.0625,1.9375,1,0.125, 159, 9);
chestoakModel.addBoxByID("25", 1,0.875,0.875,1.875,1,0.9375, 5);
chestoakModel.addBoxByID("26", 1.8125,0.875,0.125,1.875,1,0.875, 5);
chestoakModel.addBoxByID("27", 0.125,0.875,0.875,1,1,0.9375, 5);
chestoakModel.addBoxByID("28", 0.125,0.875,0.0625,1,1,0.125, 5);
chestoakModel.addBoxByID("29", 1,0.875,0.0625,1.875,1,0.125, 5);
chestoakModel.addBoxByID("30", 0.125,0.875,0.125,0.1875,1,0.875, 5);
chestoakModel.addBoxByID("31", 1.875,1.1875,0.3125,1.9375,1.25,0.6875, 159, 9);
chestoakModel.addBoxByID("32", 0.0625,1,0.125,0.125,1.0625,0.1875, 159, 9);
chestoakModel.addBoxByID("33", 0.0625,1,0.8125,0.125,1.0625,0.875, 159, 9);
chestoakModel.addBoxByID("34", 0.0625,1.0625,0.75,0.125,1.125,0.8125, 159, 9);
chestoakModel.addBoxByID("35", 0.0625,1.125,0.6875,0.125,1.1875,0.75, 159, 9);
chestoakModel.addBoxByID("36", 0.0625,1.0625,0.1875,0.125,1.125,0.25, 159, 9);
chestoakModel.addBoxByID("37", 1.875,1.125,0.6875,1.9375,1.1875,0.75, 159, 9);
chestoakModel.addBoxByID("38", 0.0625,1.1875,0.3125,0.125,1.25,0.6875, 159, 9);
chestoakModel.addBoxByID("39", 0.0625,1.125,0.25,0.125,1.1875,0.3125, 159, 9);
chestoakModel.addBoxByID("40", 1.875,1.125,0.25,1.9375,1.1875,0.3125, 159, 9);
chestoakModel.addBoxByID("41", 1.875,1.0625,0.1875,1.9375,1.125,0.25, 159, 9);
chestoakModel.addBoxByID("43", 1.875,1,0.125,1.9375,1.0625,0.1875, 159, 9);
chestoakModel.addBoxByID("44", 1.875,1,0.8125,1.9375,1.0625,0.875, 159, 9);
chestoakModel.addBoxByID("45", 1.875,1.0625,0.75,1.9375,1.125,0.8125, 159, 9);
chestoakModel.addBoxByID("46", 1,1.1875,0.3125,1.875,1.25,0.6875, 5);
chestoakModel.addBoxByID("47", 1.8125,1.125,0.3125,1.875,1.1875,0.6875, 5);
chestoakModel.addBoxByID("48", 0.125,1.1875,0.3125,1,1.25,0.6875, 5);
chestoakModel.addBoxByID("49", 0.125,1.125,0.6875,1,1.1875,0.75, 5);
chestoakModel.addBoxByID("50", 0.125,1.0625,0.75,1,1.125,0.8125, 5);
chestoakModel.addBoxByID("51", 0.125,1,0.8125,1,1.0625,0.875, 5);
chestoakModel.addBoxByID("52", 1,1,0.8125,1.875,1.0625,0.875, 5);
chestoakModel.addBoxByID("53", 1,1.0625,0.75,1.875,1.125,0.8125, 5);
chestoakModel.addBoxByID("54", 1,1.125,0.6875,1.875,1.1875,0.75, 5);
chestoakModel.addBoxByID("55", 1,1.125,0.25,1.875,1.1875,0.3125, 5);
chestoakModel.addBoxByID("56", 0.125,1.125,0.25,1,1.1875,0.3125, 5);
chestoakModel.addBoxByID("57", 0.125,1.0625,0.1875,1,1.125,0.25, 5);
chestoakModel.addBoxByID("58", 1,1.0625,0.1875,1.875,1.125,0.25, 5);
chestoakModel.addBoxByID("59", 1,1,0.125,1.875,1.0625,0.1875, 5);
chestoakModel.addBoxByID("60", 0.125,1,0.125,1,1.0625,0.1875, 5);
chestoakModel.addBoxByID("61", 1.8125,1,0.1875,1.875,1.0625,0.8125, 5);
chestoakModel.addBoxByID("62", 1.8125,1.0625,0.25,1.875,1.125,0.75, 5);
chestoakModel.addBoxByID("63", 0.125,1.125,0.3125,0.1875,1.1875,0.6875, 5);
chestoakModel.addBoxByID("64", 0.125,1.0625,0.25,0.1875,1.125,0.75, 5);
chestoakModel.addBoxByID("65", 0.125,1,0.1875,0.1875,1.0625,0.8125, 5);
chestoakModel.addBoxByID("66", 1,0.75,0.9375,1.0625,0.9375,1, 159, 9);
chestoakModel.addBoxByID("67", 0.9375,0.75,0.9375,1,0.9375,1, 159, 9);
Furniture.addReplacementItem({id:"chestoak"},{id:"chestoak"}, Furniture.placeRotatableBlock(BlockID.chestoak, chestoakModel));

IDRegistry.genBlockID("chestspruce");
Block.createBlock("chestspruce", [
	{name: "chestspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestspruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("chestspruce");
Item.createItem("chestspruce", "Big Chest", {name: "chestspruce", meta: 0}, {stack: 64});

Translation.addTranslation("Big Chest", {ru: "Большой Сундук"});
Recipes.addShaped({id: ItemID.chestspruce, count: 1, data: 0}, ["xxx", "aaa", "aaa"], ['a', 5,1, 'x', 158,1])

var chestspruceModel = ModelAPI.newArray();
chestspruceModel.addBoxByID("1", 1.8125,0.0625,0.125,1.875,0.8125,0.875, 5, 1);
chestspruceModel.addBoxByID("2", 0.125,0,0.125,1,0.0625,0.875, 5, 1);
chestspruceModel.addBoxByID("3", 1.875,0.0625,0.875,1.9375,1,0.9375, 159, 9);
chestspruceModel.addBoxByID("4", 0.0625,0,0.0625,1,0.0625,0.125, 159, 9);
chestspruceModel.addBoxByID("5", 1,0,0.0625,1.9375,0.0625,0.125, 159, 9);
chestspruceModel.addBoxByID("6", 1,0,0.875,1.9375,0.0625,0.9375, 159, 9);
chestspruceModel.addBoxByID("7", 0.125,0.8125,0.0625,1,0.875,0.125, 159, 9);
chestspruceModel.addBoxByID("8", 0.0625,0,0.125,0.125,0.0625,0.875, 159, 9);
chestspruceModel.addBoxByID("9", 1,0,0.125,1.875,0.0625,0.875, 5, 1);
chestspruceModel.addBoxByID("10", 1,0.0625,0.8125,1.875,0.8125,0.875, 5, 1);
chestspruceModel.addBoxByID("11", 0.125,0.0625,0.8125,1,0.8125,0.875, 5, 1);
chestspruceModel.addBoxByID("12", 0.125,0.0625,0.125,1,0.8125,0.1875, 5, 1);
chestspruceModel.addBoxByID("13", 1,0.0625,0.125,1.875,0.8125,0.1875, 5, 1);
chestspruceModel.addBoxByID("14", 0.125,0.0625,0.125,0.1875,0.8125,0.875, 5, 1);
chestspruceModel.addBoxByID("15", 0.0625,0,0.875,1,0.0625,0.9375, 159, 9);
chestspruceModel.addBoxByID("16", 0.125,0.8125,0.875,1,0.875,0.9375, 159, 9);
chestspruceModel.addBoxByID("17", 1,0.8125,0.875,1.875,0.875,0.9375, 159, 9);
chestspruceModel.addBoxByID("18", 1,0.8125,0.0625,1.875,0.875,0.125, 159, 9);
chestspruceModel.addBoxByID("19", 1.875,0,0.125,1.9375,0.0625,0.875, 159, 9);
chestspruceModel.addBoxByID("20", 1.875,0.8125,0.125,1.9375,0.875,0.875, 159, 9);
chestspruceModel.addBoxByID("21", 0.0625,0.8125,0.125,0.125,0.875,0.875, 159, 9);
chestspruceModel.addBoxByID("22", 0.0625,0.0625,0.875,0.125,1,0.9375, 159, 9);
chestspruceModel.addBoxByID("23", 0.0625,0.0625,0.0625,0.125,1,0.125, 159, 9);
chestspruceModel.addBoxByID("24", 1.875,0.0625,0.0625,1.9375,1,0.125, 159, 9);
chestspruceModel.addBoxByID("25", 1,0.875,0.875,1.875,1,0.9375, 5, 1);
chestspruceModel.addBoxByID("26", 1.8125,0.875,0.125,1.875,1,0.875, 5, 1);
chestspruceModel.addBoxByID("27", 0.125,0.875,0.875,1,1,0.9375, 5, 1);
chestspruceModel.addBoxByID("28", 0.125,0.875,0.0625,1,1,0.125, 5, 1);
chestspruceModel.addBoxByID("29", 1,0.875,0.0625,1.875,1,0.125, 5, 1);
chestspruceModel.addBoxByID("30", 0.125,0.875,0.125,0.1875,1,0.875, 5, 1);
chestspruceModel.addBoxByID("31", 1.875,1.1875,0.3125,1.9375,1.25,0.6875, 159, 9);
chestspruceModel.addBoxByID("32", 0.0625,1,0.125,0.125,1.0625,0.1875, 159, 9);
chestspruceModel.addBoxByID("33", 0.0625,1,0.8125,0.125,1.0625,0.875, 159, 9);
chestspruceModel.addBoxByID("34", 0.0625,1.0625,0.75,0.125,1.125,0.8125, 159, 9);
chestspruceModel.addBoxByID("35", 0.0625,1.125,0.6875,0.125,1.1875,0.75, 159, 9);
chestspruceModel.addBoxByID("36", 0.0625,1.0625,0.1875,0.125,1.125,0.25, 159, 9);
chestspruceModel.addBoxByID("37", 1.875,1.125,0.6875,1.9375,1.1875,0.75, 159, 9);
chestspruceModel.addBoxByID("38", 0.0625,1.1875,0.3125,0.125,1.25,0.6875, 159, 9);
chestspruceModel.addBoxByID("39", 0.0625,1.125,0.25,0.125,1.1875,0.3125, 159, 9);
chestspruceModel.addBoxByID("40", 1.875,1.125,0.25,1.9375,1.1875,0.3125, 159, 9);
chestspruceModel.addBoxByID("41", 1.875,1.0625,0.1875,1.9375,1.125,0.25, 159, 9);
chestspruceModel.addBoxByID("43", 1.875,1,0.125,1.9375,1.0625,0.1875, 159, 9);
chestspruceModel.addBoxByID("44", 1.875,1,0.8125,1.9375,1.0625,0.875, 159, 9);
chestspruceModel.addBoxByID("45", 1.875,1.0625,0.75,1.9375,1.125,0.8125, 159, 9);
chestspruceModel.addBoxByID("46", 1,1.1875,0.3125,1.875,1.25,0.6875, 5, 1);
chestspruceModel.addBoxByID("47", 1.8125,1.125,0.3125,1.875,1.1875,0.6875, 5, 1);
chestspruceModel.addBoxByID("48", 0.125,1.1875,0.3125,1,1.25,0.6875, 5, 1);
chestspruceModel.addBoxByID("49", 0.125,1.125,0.6875,1,1.1875,0.75, 5, 1);
chestspruceModel.addBoxByID("50", 0.125,1.0625,0.75,1,1.125,0.8125, 5, 1);
chestspruceModel.addBoxByID("51", 0.125,1,0.8125,1,1.0625,0.875, 5, 1);
chestspruceModel.addBoxByID("52", 1,1,0.8125,1.875,1.0625,0.875, 5, 1);
chestspruceModel.addBoxByID("53", 1,1.0625,0.75,1.875,1.125,0.8125, 5, 1);
chestspruceModel.addBoxByID("54", 1,1.125,0.6875,1.875,1.1875,0.75, 5, 1);
chestspruceModel.addBoxByID("55", 1,1.125,0.25,1.875,1.1875,0.3125, 5, 1);
chestspruceModel.addBoxByID("56", 0.125,1.125,0.25,1,1.1875,0.3125, 5, 1);
chestspruceModel.addBoxByID("57", 0.125,1.0625,0.1875,1,1.125,0.25, 5, 1);
chestspruceModel.addBoxByID("58", 1,1.0625,0.1875,1.875,1.125,0.25, 5, 1);
chestspruceModel.addBoxByID("59", 1,1,0.125,1.875,1.0625,0.1875, 5, 1);
chestspruceModel.addBoxByID("60", 0.125,1,0.125,1,1.0625,0.1875, 5, 1);
chestspruceModel.addBoxByID("61", 1.8125,1,0.1875,1.875,1.0625,0.8125, 5, 1);
chestspruceModel.addBoxByID("62", 1.8125,1.0625,0.25,1.875,1.125,0.75, 5, 1);
chestspruceModel.addBoxByID("63", 0.125,1.125,0.3125,0.1875,1.1875,0.6875, 5, 1);
chestspruceModel.addBoxByID("64", 0.125,1.0625,0.25,0.1875,1.125,0.75, 5, 1);
chestspruceModel.addBoxByID("65", 0.125,1,0.1875,0.1875,1.0625,0.8125, 5, 1);
chestspruceModel.addBoxByID("66", 1,0.75,0.9375,1.0625,0.9375,1, 159, 9);
chestspruceModel.addBoxByID("67", 0.9375,0.75,0.9375,1,0.9375,1, 159, 9);
Furniture.addReplacementItem({id:"chestspruce"},{id:"chestspruce"}, Furniture.placeRotatableBlock(BlockID.chestspruce, chestspruceModel));

IDRegistry.genBlockID("chestbrich");
Block.createBlock("chestbrich", [
	{name: "chestbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestbrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("chestbrich");
Item.createItem("chestbrich", "Big Chest", {name: "chestbrich", meta: 0}, {stack: 64});

Translation.addTranslation("Big Chest", {ru: "Большой Сундук"});
Recipes.addShaped({id: ItemID.chestbrich, count: 1, data: 0}, ["xxx", "aaa", "aaa"], ['a', 5,1, 'x', 158,1])

var chestbrichModel = ModelAPI.newArray();
chestbrichModel.addBoxByID("1", 1.8125,0.0625,0.125,1.875,0.8125,0.875, 5, 2);
chestbrichModel.addBoxByID("2", 0.125,0,0.125,1,0.0625,0.875, 5, 2);
chestbrichModel.addBoxByID("3", 1.875,0.0625,0.875,1.9375,1,0.9375, 159, 9);
chestbrichModel.addBoxByID("4", 0.0625,0,0.0625,1,0.0625,0.125, 159, 9);
chestbrichModel.addBoxByID("5", 1,0,0.0625,1.9375,0.0625,0.125, 159, 9);
chestbrichModel.addBoxByID("6", 1,0,0.875,1.9375,0.0625,0.9375, 159, 9);
chestbrichModel.addBoxByID("7", 0.125,0.8125,0.0625,1,0.875,0.125, 159, 9);
chestbrichModel.addBoxByID("8", 0.0625,0,0.125,0.125,0.0625,0.875, 159, 9);
chestbrichModel.addBoxByID("9", 1,0,0.125,1.875,0.0625,0.875, 5, 2);
chestbrichModel.addBoxByID("10", 1,0.0625,0.8125,1.875,0.8125,0.875, 5, 2);
chestbrichModel.addBoxByID("11", 0.125,0.0625,0.8125,1,0.8125,0.875, 5, 2);
chestbrichModel.addBoxByID("12", 0.125,0.0625,0.125,1,0.8125,0.1875, 5, 2);
chestbrichModel.addBoxByID("13", 1,0.0625,0.125,1.875,0.8125,0.1875, 5, 2);
chestbrichModel.addBoxByID("14", 0.125,0.0625,0.125,0.1875,0.8125,0.875, 5, 2);
chestbrichModel.addBoxByID("15", 0.0625,0,0.875,1,0.0625,0.9375, 159, 9);
chestbrichModel.addBoxByID("16", 0.125,0.8125,0.875,1,0.875,0.9375, 159, 9);
chestbrichModel.addBoxByID("17", 1,0.8125,0.875,1.875,0.875,0.9375, 159, 9);
chestbrichModel.addBoxByID("18", 1,0.8125,0.0625,1.875,0.875,0.125, 159, 9);
chestbrichModel.addBoxByID("19", 1.875,0,0.125,1.9375,0.0625,0.875, 159, 9);
chestbrichModel.addBoxByID("20", 1.875,0.8125,0.125,1.9375,0.875,0.875, 159, 9);
chestbrichModel.addBoxByID("21", 0.0625,0.8125,0.125,0.125,0.875,0.875, 159, 9);
chestbrichModel.addBoxByID("22", 0.0625,0.0625,0.875,0.125,1,0.9375, 159, 9);
chestbrichModel.addBoxByID("23", 0.0625,0.0625,0.0625,0.125,1,0.125, 159, 9);
chestbrichModel.addBoxByID("24", 1.875,0.0625,0.0625,1.9375,1,0.125, 159, 9);
chestbrichModel.addBoxByID("25", 1,0.875,0.875,1.875,1,0.9375, 5, 2);
chestbrichModel.addBoxByID("26", 1.8125,0.875,0.125,1.875,1,0.875, 5, 2);
chestbrichModel.addBoxByID("27", 0.125,0.875,0.875,1,1,0.9375, 5, 2);
chestbrichModel.addBoxByID("28", 0.125,0.875,0.0625,1,1,0.125, 5, 2);
chestbrichModel.addBoxByID("29", 1,0.875,0.0625,1.875,1,0.125, 5, 2);
chestbrichModel.addBoxByID("30", 0.125,0.875,0.125,0.1875,1,0.875, 5, 2);
chestbrichModel.addBoxByID("31", 1.875,1.1875,0.3125,1.9375,1.25,0.6875, 159, 9);
chestbrichModel.addBoxByID("32", 0.0625,1,0.125,0.125,1.0625,0.1875, 159, 9);
chestbrichModel.addBoxByID("33", 0.0625,1,0.8125,0.125,1.0625,0.875, 159, 9);
chestbrichModel.addBoxByID("34", 0.0625,1.0625,0.75,0.125,1.125,0.8125, 159, 9);
chestbrichModel.addBoxByID("35", 0.0625,1.125,0.6875,0.125,1.1875,0.75, 159, 9);
chestbrichModel.addBoxByID("36", 0.0625,1.0625,0.1875,0.125,1.125,0.25, 159, 9);
chestbrichModel.addBoxByID("37", 1.875,1.125,0.6875,1.9375,1.1875,0.75, 159, 9);
chestbrichModel.addBoxByID("38", 0.0625,1.1875,0.3125,0.125,1.25,0.6875, 159, 9);
chestbrichModel.addBoxByID("39", 0.0625,1.125,0.25,0.125,1.1875,0.3125, 159, 9);
chestbrichModel.addBoxByID("40", 1.875,1.125,0.25,1.9375,1.1875,0.3125, 159, 9);
chestbrichModel.addBoxByID("41", 1.875,1.0625,0.1875,1.9375,1.125,0.25, 159, 9);
chestbrichModel.addBoxByID("43", 1.875,1,0.125,1.9375,1.0625,0.1875, 159, 9);
chestbrichModel.addBoxByID("44", 1.875,1,0.8125,1.9375,1.0625,0.875, 159, 9);
chestbrichModel.addBoxByID("45", 1.875,1.0625,0.75,1.9375,1.125,0.8125, 159, 9);
chestbrichModel.addBoxByID("46", 1,1.1875,0.3125,1.875,1.25,0.6875, 5, 2);
chestbrichModel.addBoxByID("47", 1.8125,1.125,0.3125,1.875,1.1875,0.6875, 5, 2);
chestbrichModel.addBoxByID("48", 0.125,1.1875,0.3125,1,1.25,0.6875, 5, 2);
chestbrichModel.addBoxByID("49", 0.125,1.125,0.6875,1,1.1875,0.75, 5, 2);
chestbrichModel.addBoxByID("50", 0.125,1.0625,0.75,1,1.125,0.8125, 5, 2);
chestbrichModel.addBoxByID("51", 0.125,1,0.8125,1,1.0625,0.875, 5, 2);
chestbrichModel.addBoxByID("52", 1,1,0.8125,1.875,1.0625,0.875, 5, 2);
chestbrichModel.addBoxByID("53", 1,1.0625,0.75,1.875,1.125,0.8125, 5, 2);
chestbrichModel.addBoxByID("54", 1,1.125,0.6875,1.875,1.1875,0.75, 5, 2);
chestbrichModel.addBoxByID("55", 1,1.125,0.25,1.875,1.1875,0.3125, 5, 2);
chestbrichModel.addBoxByID("56", 0.125,1.125,0.25,1,1.1875,0.3125, 5, 2);
chestbrichModel.addBoxByID("57", 0.125,1.0625,0.1875,1,1.125,0.25, 5, 2);
chestbrichModel.addBoxByID("58", 1,1.0625,0.1875,1.875,1.125,0.25, 5, 2);
chestbrichModel.addBoxByID("59", 1,1,0.125,1.875,1.0625,0.1875, 5, 2);
chestbrichModel.addBoxByID("60", 0.125,1,0.125,1,1.0625,0.1875, 5, 2);
chestbrichModel.addBoxByID("61", 1.8125,1,0.1875,1.875,1.0625,0.8125, 5, 2);
chestbrichModel.addBoxByID("62", 1.8125,1.0625,0.25,1.875,1.125,0.75, 5, 2);
chestbrichModel.addBoxByID("63", 0.125,1.125,0.3125,0.1875,1.1875,0.6875, 5, 2);
chestbrichModel.addBoxByID("64", 0.125,1.0625,0.25,0.1875,1.125,0.75, 5, 2);
chestbrichModel.addBoxByID("65", 0.125,1,0.1875,0.1875,1.0625,0.8125, 5, 2);
chestbrichModel.addBoxByID("66", 1,0.75,0.9375,1.0625,0.9375,1, 159, 9);
chestbrichModel.addBoxByID("67", 0.9375,0.75,0.9375,1,0.9375,1, 159, 9);
Furniture.addReplacementItem({id:"chestbrich"},{id:"chestbrich"}, Furniture.placeRotatableBlock(BlockID.chestbrich, chestbrichModel));

IDRegistry.genBlockID("chestjungle");
Block.createBlock("chestjungle", [
	{name: "chestjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestjungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("chestjungle");
Item.createItem("chestjungle", "Big Chest", {name: "chestjungle", meta: 0}, {stack: 64});

Translation.addTranslation("Big Chest", {ru: "Большой Сундук"});
Recipes.addShaped({id: ItemID.chestjungle, count: 1, data: 0}, ["xxx", "aaa", "aaa"], ['a', 5,1, 'x', 158,1])

var chestjungleModel = ModelAPI.newArray();
chestjungleModel.addBoxByID("1", 1.8125,0.0625,0.125,1.875,0.8125,0.875, 5, 3);
chestjungleModel.addBoxByID("2", 0.125,0,0.125,1,0.0625,0.875, 5, 3);
chestjungleModel.addBoxByID("3", 1.875,0.0625,0.875,1.9375,1,0.9375, 159, 9);
chestjungleModel.addBoxByID("4", 0.0625,0,0.0625,1,0.0625,0.125, 159, 9);
chestjungleModel.addBoxByID("5", 1,0,0.0625,1.9375,0.0625,0.125, 159, 9);
chestjungleModel.addBoxByID("6", 1,0,0.875,1.9375,0.0625,0.9375, 159, 9);
chestjungleModel.addBoxByID("7", 0.125,0.8125,0.0625,1,0.875,0.125, 159, 9);
chestjungleModel.addBoxByID("8", 0.0625,0,0.125,0.125,0.0625,0.875, 159, 9);
chestjungleModel.addBoxByID("9", 1,0,0.125,1.875,0.0625,0.875, 5, 3);
chestjungleModel.addBoxByID("10", 1,0.0625,0.8125,1.875,0.8125,0.875, 5, 3);
chestjungleModel.addBoxByID("11", 0.125,0.0625,0.8125,1,0.8125,0.875, 5, 3);
chestjungleModel.addBoxByID("12", 0.125,0.0625,0.125,1,0.8125,0.1875, 5, 3);
chestjungleModel.addBoxByID("13", 1,0.0625,0.125,1.875,0.8125,0.1875, 5, 3);
chestjungleModel.addBoxByID("14", 0.125,0.0625,0.125,0.1875,0.8125,0.875, 5, 3);
chestjungleModel.addBoxByID("15", 0.0625,0,0.875,1,0.0625,0.9375, 159, 9);
chestjungleModel.addBoxByID("16", 0.125,0.8125,0.875,1,0.875,0.9375, 159, 9);
chestjungleModel.addBoxByID("17", 1,0.8125,0.875,1.875,0.875,0.9375, 159, 9);
chestjungleModel.addBoxByID("18", 1,0.8125,0.0625,1.875,0.875,0.125, 159, 9);
chestjungleModel.addBoxByID("19", 1.875,0,0.125,1.9375,0.0625,0.875, 159, 9);
chestjungleModel.addBoxByID("20", 1.875,0.8125,0.125,1.9375,0.875,0.875, 159, 9);
chestjungleModel.addBoxByID("21", 0.0625,0.8125,0.125,0.125,0.875,0.875, 159, 9);
chestjungleModel.addBoxByID("22", 0.0625,0.0625,0.875,0.125,1,0.9375, 159, 9);
chestjungleModel.addBoxByID("23", 0.0625,0.0625,0.0625,0.125,1,0.125, 159, 9);
chestjungleModel.addBoxByID("24", 1.875,0.0625,0.0625,1.9375,1,0.125, 159, 9);
chestjungleModel.addBoxByID("25", 1,0.875,0.875,1.875,1,0.9375, 5, 3);
chestjungleModel.addBoxByID("26", 1.8125,0.875,0.125,1.875,1,0.875, 5, 3);
chestjungleModel.addBoxByID("27", 0.125,0.875,0.875,1,1,0.9375, 5, 3);
chestjungleModel.addBoxByID("28", 0.125,0.875,0.0625,1,1,0.125, 5, 3);
chestjungleModel.addBoxByID("29", 1,0.875,0.0625,1.875,1,0.125, 5, 3);
chestjungleModel.addBoxByID("30", 0.125,0.875,0.125,0.1875,1,0.875, 5, 3);
chestjungleModel.addBoxByID("31", 1.875,1.1875,0.3125,1.9375,1.25,0.6875, 159, 9);
chestjungleModel.addBoxByID("32", 0.0625,1,0.125,0.125,1.0625,0.1875, 159, 9);
chestjungleModel.addBoxByID("33", 0.0625,1,0.8125,0.125,1.0625,0.875, 159, 9);
chestjungleModel.addBoxByID("34", 0.0625,1.0625,0.75,0.125,1.125,0.8125, 159, 9);
chestjungleModel.addBoxByID("35", 0.0625,1.125,0.6875,0.125,1.1875,0.75, 159, 9);
chestjungleModel.addBoxByID("36", 0.0625,1.0625,0.1875,0.125,1.125,0.25, 159, 9);
chestjungleModel.addBoxByID("37", 1.875,1.125,0.6875,1.9375,1.1875,0.75, 159, 9);
chestjungleModel.addBoxByID("38", 0.0625,1.1875,0.3125,0.125,1.25,0.6875, 159, 9);
chestjungleModel.addBoxByID("39", 0.0625,1.125,0.25,0.125,1.1875,0.3125, 159, 9);
chestjungleModel.addBoxByID("40", 1.875,1.125,0.25,1.9375,1.1875,0.3125, 159, 9);
chestjungleModel.addBoxByID("41", 1.875,1.0625,0.1875,1.9375,1.125,0.25, 159, 9);
chestjungleModel.addBoxByID("43", 1.875,1,0.125,1.9375,1.0625,0.1875, 159, 9);
chestjungleModel.addBoxByID("44", 1.875,1,0.8125,1.9375,1.0625,0.875, 159, 9);
chestjungleModel.addBoxByID("45", 1.875,1.0625,0.75,1.9375,1.125,0.8125, 159, 9);
chestjungleModel.addBoxByID("46", 1,1.1875,0.3125,1.875,1.25,0.6875, 5, 3);
chestjungleModel.addBoxByID("47", 1.8125,1.125,0.3125,1.875,1.1875,0.6875, 5, 3);
chestjungleModel.addBoxByID("48", 0.125,1.1875,0.3125,1,1.25,0.6875, 5, 3);
chestjungleModel.addBoxByID("49", 0.125,1.125,0.6875,1,1.1875,0.75, 5, 3);
chestjungleModel.addBoxByID("50", 0.125,1.0625,0.75,1,1.125,0.8125, 5, 3);
chestjungleModel.addBoxByID("51", 0.125,1,0.8125,1,1.0625,0.875, 5, 3);
chestjungleModel.addBoxByID("52", 1,1,0.8125,1.875,1.0625,0.875, 5, 3);
chestjungleModel.addBoxByID("53", 1,1.0625,0.75,1.875,1.125,0.8125, 5, 3);
chestjungleModel.addBoxByID("54", 1,1.125,0.6875,1.875,1.1875,0.75, 5, 3);
chestjungleModel.addBoxByID("55", 1,1.125,0.25,1.875,1.1875,0.3125, 5, 3);
chestjungleModel.addBoxByID("56", 0.125,1.125,0.25,1,1.1875,0.3125, 5, 3);
chestjungleModel.addBoxByID("57", 0.125,1.0625,0.1875,1,1.125,0.25, 5, 3);
chestjungleModel.addBoxByID("58", 1,1.0625,0.1875,1.875,1.125,0.25, 5, 3);
chestjungleModel.addBoxByID("59", 1,1,0.125,1.875,1.0625,0.1875, 5, 3);
chestjungleModel.addBoxByID("60", 0.125,1,0.125,1,1.0625,0.1875, 5, 3);
chestjungleModel.addBoxByID("61", 1.8125,1,0.1875,1.875,1.0625,0.8125, 5, 3);
chestjungleModel.addBoxByID("62", 1.8125,1.0625,0.25,1.875,1.125,0.75, 5, 3);
chestjungleModel.addBoxByID("63", 0.125,1.125,0.3125,0.1875,1.1875,0.6875, 5, 3);
chestjungleModel.addBoxByID("64", 0.125,1.0625,0.25,0.1875,1.125,0.75, 5, 3);
chestjungleModel.addBoxByID("65", 0.125,1,0.1875,0.1875,1.0625,0.8125, 5, 3);
chestjungleModel.addBoxByID("66", 1,0.75,0.9375,1.0625,0.9375,1, 159, 9);
chestjungleModel.addBoxByID("67", 0.9375,0.75,0.9375,1,0.9375,1, 159, 9);
Furniture.addReplacementItem({id:"chestjungle"},{id:"chestjungle"}, Furniture.placeRotatableBlock(BlockID.chestjungle, chestjungleModel));

IDRegistry.genBlockID("chestacacia");
Block.createBlock("chestacacia", [
	{name: "chestacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("chestacacia");
Item.createItem("chestacacia", "Big Chest", {name: "chestacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Big Chest", {ru: "Большой Сундук"});
Recipes.addShaped({id: ItemID.chestacacia, count: 1, data: 0}, ["xxx", "aaa", "aaa"], ['a', 5,1, 'x', 158,1])

var chestacaciaModel = ModelAPI.newArray();
chestacaciaModel.addBoxByID("1", 1.8125,0.0625,0.125,1.875,0.8125,0.875, 5, 4);
chestacaciaModel.addBoxByID("2", 0.125,0,0.125,1,0.0625,0.875, 5, 4);
chestacaciaModel.addBoxByID("3", 1.875,0.0625,0.875,1.9375,1,0.9375, 159, 9);
chestacaciaModel.addBoxByID("4", 0.0625,0,0.0625,1,0.0625,0.125, 159, 9);
chestacaciaModel.addBoxByID("5", 1,0,0.0625,1.9375,0.0625,0.125, 159, 9);
chestacaciaModel.addBoxByID("6", 1,0,0.875,1.9375,0.0625,0.9375, 159, 9);
chestacaciaModel.addBoxByID("7", 0.125,0.8125,0.0625,1,0.875,0.125, 159, 9);
chestacaciaModel.addBoxByID("8", 0.0625,0,0.125,0.125,0.0625,0.875, 159, 9);
chestacaciaModel.addBoxByID("9", 1,0,0.125,1.875,0.0625,0.875, 5, 4);
chestacaciaModel.addBoxByID("10", 1,0.0625,0.8125,1.875,0.8125,0.875, 5, 4);
chestacaciaModel.addBoxByID("11", 0.125,0.0625,0.8125,1,0.8125,0.875, 5, 4);
chestacaciaModel.addBoxByID("12", 0.125,0.0625,0.125,1,0.8125,0.1875, 5, 4);
chestacaciaModel.addBoxByID("13", 1,0.0625,0.125,1.875,0.8125,0.1875, 5, 4);
chestacaciaModel.addBoxByID("14", 0.125,0.0625,0.125,0.1875,0.8125,0.875, 5, 4);
chestacaciaModel.addBoxByID("15", 0.0625,0,0.875,1,0.0625,0.9375, 159, 9);
chestacaciaModel.addBoxByID("16", 0.125,0.8125,0.875,1,0.875,0.9375, 159, 9);
chestacaciaModel.addBoxByID("17", 1,0.8125,0.875,1.875,0.875,0.9375, 159, 9);
chestacaciaModel.addBoxByID("18", 1,0.8125,0.0625,1.875,0.875,0.125, 159, 9);
chestacaciaModel.addBoxByID("19", 1.875,0,0.125,1.9375,0.0625,0.875, 159, 9);
chestacaciaModel.addBoxByID("20", 1.875,0.8125,0.125,1.9375,0.875,0.875, 159, 9);
chestacaciaModel.addBoxByID("21", 0.0625,0.8125,0.125,0.125,0.875,0.875, 159, 9);
chestacaciaModel.addBoxByID("22", 0.0625,0.0625,0.875,0.125,1,0.9375, 159, 9);
chestacaciaModel.addBoxByID("23", 0.0625,0.0625,0.0625,0.125,1,0.125, 159, 9);
chestacaciaModel.addBoxByID("24", 1.875,0.0625,0.0625,1.9375,1,0.125, 159, 9);
chestacaciaModel.addBoxByID("25", 1,0.875,0.875,1.875,1,0.9375, 5, 4);
chestacaciaModel.addBoxByID("26", 1.8125,0.875,0.125,1.875,1,0.875, 5, 4);
chestacaciaModel.addBoxByID("27", 0.125,0.875,0.875,1,1,0.9375, 5, 4);
chestacaciaModel.addBoxByID("28", 0.125,0.875,0.0625,1,1,0.125, 5, 4);
chestacaciaModel.addBoxByID("29", 1,0.875,0.0625,1.875,1,0.125, 5, 4);
chestacaciaModel.addBoxByID("30", 0.125,0.875,0.125,0.1875,1,0.875, 5, 4);
chestacaciaModel.addBoxByID("31", 1.875,1.1875,0.3125,1.9375,1.25,0.6875, 159, 9);
chestacaciaModel.addBoxByID("32", 0.0625,1,0.125,0.125,1.0625,0.1875, 159, 9);
chestacaciaModel.addBoxByID("33", 0.0625,1,0.8125,0.125,1.0625,0.875, 159, 9);
chestacaciaModel.addBoxByID("34", 0.0625,1.0625,0.75,0.125,1.125,0.8125, 159, 9);
chestacaciaModel.addBoxByID("35", 0.0625,1.125,0.6875,0.125,1.1875,0.75, 159, 9);
chestacaciaModel.addBoxByID("36", 0.0625,1.0625,0.1875,0.125,1.125,0.25, 159, 9);
chestacaciaModel.addBoxByID("37", 1.875,1.125,0.6875,1.9375,1.1875,0.75, 159, 9);
chestacaciaModel.addBoxByID("38", 0.0625,1.1875,0.3125,0.125,1.25,0.6875, 159, 9);
chestacaciaModel.addBoxByID("39", 0.0625,1.125,0.25,0.125,1.1875,0.3125, 159, 9);
chestacaciaModel.addBoxByID("40", 1.875,1.125,0.25,1.9375,1.1875,0.3125, 159, 9);
chestacaciaModel.addBoxByID("41", 1.875,1.0625,0.1875,1.9375,1.125,0.25, 159, 9);
chestacaciaModel.addBoxByID("43", 1.875,1,0.125,1.9375,1.0625,0.1875, 159, 9);
chestacaciaModel.addBoxByID("44", 1.875,1,0.8125,1.9375,1.0625,0.875, 159, 9);
chestacaciaModel.addBoxByID("45", 1.875,1.0625,0.75,1.9375,1.125,0.8125, 159, 9);
chestacaciaModel.addBoxByID("46", 1,1.1875,0.3125,1.875,1.25,0.6875, 5, 4);
chestacaciaModel.addBoxByID("47", 1.8125,1.125,0.3125,1.875,1.1875,0.6875, 5, 4);
chestacaciaModel.addBoxByID("48", 0.125,1.1875,0.3125,1,1.25,0.6875, 5, 4);
chestacaciaModel.addBoxByID("49", 0.125,1.125,0.6875,1,1.1875,0.75, 5, 4);
chestacaciaModel.addBoxByID("50", 0.125,1.0625,0.75,1,1.125,0.8125, 5, 4);
chestacaciaModel.addBoxByID("51", 0.125,1,0.8125,1,1.0625,0.875, 5, 4);
chestacaciaModel.addBoxByID("52", 1,1,0.8125,1.875,1.0625,0.875, 5, 4);
chestacaciaModel.addBoxByID("53", 1,1.0625,0.75,1.875,1.125,0.8125, 5, 4);
chestacaciaModel.addBoxByID("54", 1,1.125,0.6875,1.875,1.1875,0.75, 5, 4);
chestacaciaModel.addBoxByID("55", 1,1.125,0.25,1.875,1.1875,0.3125, 5, 4);
chestacaciaModel.addBoxByID("56", 0.125,1.125,0.25,1,1.1875,0.3125, 5, 4);
chestacaciaModel.addBoxByID("57", 0.125,1.0625,0.1875,1,1.125,0.25, 5, 4);
chestacaciaModel.addBoxByID("58", 1,1.0625,0.1875,1.875,1.125,0.25, 5, 4);
chestacaciaModel.addBoxByID("59", 1,1,0.125,1.875,1.0625,0.1875, 5, 4);
chestacaciaModel.addBoxByID("60", 0.125,1,0.125,1,1.0625,0.1875, 5, 4);
chestacaciaModel.addBoxByID("61", 1.8125,1,0.1875,1.875,1.0625,0.8125, 5, 4);
chestacaciaModel.addBoxByID("62", 1.8125,1.0625,0.25,1.875,1.125,0.75, 5, 4);
chestacaciaModel.addBoxByID("63", 0.125,1.125,0.3125,0.1875,1.1875,0.6875, 5, 4);
chestacaciaModel.addBoxByID("64", 0.125,1.0625,0.25,0.1875,1.125,0.75, 5, 4);
chestacaciaModel.addBoxByID("65", 0.125,1,0.1875,0.1875,1.0625,0.8125, 5, 4);
chestacaciaModel.addBoxByID("66", 1,0.75,0.9375,1.0625,0.9375,1, 159, 9);
chestacaciaModel.addBoxByID("67", 0.9375,0.75,0.9375,1,0.9375,1, 159, 9);
Furniture.addReplacementItem({id:"chestacacia"},{id:"chestacacia"}, Furniture.placeRotatableBlock(BlockID.chestacacia, chestacaciaModel));

IDRegistry.genBlockID("chestbigoak");
Block.createBlock("chestbigoak", [
	{name: "chestbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "chestbigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("chestbigoak");
Item.createItem("chestbigoak", "Big Chest", {name: "chestbigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Big Chest", {ru: "Большой Сундук"});
Recipes.addShaped({id: ItemID.chestbigoak, count: 1, data: 0}, ["xxx", "aaa", "aaa"], ['a', 5,1, 'x', 158,1])

var chestbigoakModel = ModelAPI.newArray();
chestbigoakModel.addBoxByID("1", 1.8125,0.0625,0.125,1.875,0.8125,0.875, 5, 5);
chestbigoakModel.addBoxByID("2", 0.125,0,0.125,1,0.0625,0.875, 5, 5);
chestbigoakModel.addBoxByID("3", 1.875,0.0625,0.875,1.9375,1,0.9375, 159, 9);
chestbigoakModel.addBoxByID("4", 0.0625,0,0.0625,1,0.0625,0.125, 159, 9);
chestbigoakModel.addBoxByID("5", 1,0,0.0625,1.9375,0.0625,0.125, 159, 9);
chestbigoakModel.addBoxByID("6", 1,0,0.875,1.9375,0.0625,0.9375, 159, 9);
chestbigoakModel.addBoxByID("7", 0.125,0.8125,0.0625,1,0.875,0.125, 159, 9);
chestbigoakModel.addBoxByID("8", 0.0625,0,0.125,0.125,0.0625,0.875, 159, 9);
chestbigoakModel.addBoxByID("9", 1,0,0.125,1.875,0.0625,0.875, 5, 5);
chestbigoakModel.addBoxByID("10", 1,0.0625,0.8125,1.875,0.8125,0.875, 5, 5);
chestbigoakModel.addBoxByID("11", 0.125,0.0625,0.8125,1,0.8125,0.875, 5, 5);
chestbigoakModel.addBoxByID("12", 0.125,0.0625,0.125,1,0.8125,0.1875, 5, 5);
chestbigoakModel.addBoxByID("13", 1,0.0625,0.125,1.875,0.8125,0.1875, 5, 5);
chestbigoakModel.addBoxByID("14", 0.125,0.0625,0.125,0.1875,0.8125,0.875, 5, 5);
chestbigoakModel.addBoxByID("15", 0.0625,0,0.875,1,0.0625,0.9375, 159, 9);
chestbigoakModel.addBoxByID("16", 0.125,0.8125,0.875,1,0.875,0.9375, 159, 9);
chestbigoakModel.addBoxByID("17", 1,0.8125,0.875,1.875,0.875,0.9375, 159, 9);
chestbigoakModel.addBoxByID("18", 1,0.8125,0.0625,1.875,0.875,0.125, 159, 9);
chestbigoakModel.addBoxByID("19", 1.875,0,0.125,1.9375,0.0625,0.875, 159, 9);
chestbigoakModel.addBoxByID("20", 1.875,0.8125,0.125,1.9375,0.875,0.875, 159, 9);
chestbigoakModel.addBoxByID("21", 0.0625,0.8125,0.125,0.125,0.875,0.875, 159, 9);
chestbigoakModel.addBoxByID("22", 0.0625,0.0625,0.875,0.125,1,0.9375, 159, 9);
chestbigoakModel.addBoxByID("23", 0.0625,0.0625,0.0625,0.125,1,0.125, 159, 9);
chestbigoakModel.addBoxByID("24", 1.875,0.0625,0.0625,1.9375,1,0.125, 159, 9);
chestbigoakModel.addBoxByID("25", 1,0.875,0.875,1.875,1,0.9375, 5, 5);
chestbigoakModel.addBoxByID("26", 1.8125,0.875,0.125,1.875,1,0.875, 5, 5);
chestbigoakModel.addBoxByID("27", 0.125,0.875,0.875,1,1,0.9375, 5, 5);
chestbigoakModel.addBoxByID("28", 0.125,0.875,0.0625,1,1,0.125, 5, 5);
chestbigoakModel.addBoxByID("29", 1,0.875,0.0625,1.875,1,0.125, 5, 5);
chestbigoakModel.addBoxByID("30", 0.125,0.875,0.125,0.1875,1,0.875, 5, 5);
chestbigoakModel.addBoxByID("31", 1.875,1.1875,0.3125,1.9375,1.25,0.6875, 159, 9);
chestbigoakModel.addBoxByID("32", 0.0625,1,0.125,0.125,1.0625,0.1875, 159, 9);
chestbigoakModel.addBoxByID("33", 0.0625,1,0.8125,0.125,1.0625,0.875, 159, 9);
chestbigoakModel.addBoxByID("34", 0.0625,1.0625,0.75,0.125,1.125,0.8125, 159, 9);
chestbigoakModel.addBoxByID("35", 0.0625,1.125,0.6875,0.125,1.1875,0.75, 159, 9);
chestbigoakModel.addBoxByID("36", 0.0625,1.0625,0.1875,0.125,1.125,0.25, 159, 9);
chestbigoakModel.addBoxByID("37", 1.875,1.125,0.6875,1.9375,1.1875,0.75, 159, 9);
chestbigoakModel.addBoxByID("38", 0.0625,1.1875,0.3125,0.125,1.25,0.6875, 159, 9);
chestbigoakModel.addBoxByID("39", 0.0625,1.125,0.25,0.125,1.1875,0.3125, 159, 9);
chestbigoakModel.addBoxByID("40", 1.875,1.125,0.25,1.9375,1.1875,0.3125, 159, 9);
chestbigoakModel.addBoxByID("41", 1.875,1.0625,0.1875,1.9375,1.125,0.25, 159, 9);
chestbigoakModel.addBoxByID("43", 1.875,1,0.125,1.9375,1.0625,0.1875, 159, 9);
chestbigoakModel.addBoxByID("44", 1.875,1,0.8125,1.9375,1.0625,0.875, 159, 9);
chestbigoakModel.addBoxByID("45", 1.875,1.0625,0.75,1.9375,1.125,0.8125, 159, 9);
chestbigoakModel.addBoxByID("46", 1,1.1875,0.3125,1.875,1.25,0.6875, 5, 5);
chestbigoakModel.addBoxByID("47", 1.8125,1.125,0.3125,1.875,1.1875,0.6875, 5, 5);
chestbigoakModel.addBoxByID("48", 0.125,1.1875,0.3125,1,1.25,0.6875, 5, 5);
chestbigoakModel.addBoxByID("49", 0.125,1.125,0.6875,1,1.1875,0.75, 5, 5);
chestbigoakModel.addBoxByID("50", 0.125,1.0625,0.75,1,1.125,0.8125, 5, 5);
chestbigoakModel.addBoxByID("51", 0.125,1,0.8125,1,1.0625,0.875, 5, 5);
chestbigoakModel.addBoxByID("52", 1,1,0.8125,1.875,1.0625,0.875, 5, 5);
chestbigoakModel.addBoxByID("53", 1,1.0625,0.75,1.875,1.125,0.8125, 5, 5);
chestbigoakModel.addBoxByID("54", 1,1.125,0.6875,1.875,1.1875,0.75, 5, 5);
chestbigoakModel.addBoxByID("55", 1,1.125,0.25,1.875,1.1875,0.3125, 5, 5);
chestbigoakModel.addBoxByID("56", 0.125,1.125,0.25,1,1.1875,0.3125, 5, 5);
chestbigoakModel.addBoxByID("57", 0.125,1.0625,0.1875,1,1.125,0.25, 5, 5);
chestbigoakModel.addBoxByID("58", 1,1.0625,0.1875,1.875,1.125,0.25, 5, 5);
chestbigoakModel.addBoxByID("59", 1,1,0.125,1.875,1.0625,0.1875, 5, 5);
chestbigoakModel.addBoxByID("60", 0.125,1,0.125,1,1.0625,0.1875, 5, 5);
chestbigoakModel.addBoxByID("61", 1.8125,1,0.1875,1.875,1.0625,0.8125, 5, 5);
chestbigoakModel.addBoxByID("62", 1.8125,1.0625,0.25,1.875,1.125,0.75, 5, 5);
chestbigoakModel.addBoxByID("63", 0.125,1.125,0.3125,0.1875,1.1875,0.6875, 5, 5);
chestbigoakModel.addBoxByID("64", 0.125,1.0625,0.25,0.1875,1.125,0.75, 5, 5);
chestbigoakModel.addBoxByID("65", 0.125,1,0.1875,0.1875,1.0625,0.8125, 5, 5);
chestbigoakModel.addBoxByID("66", 1,0.75,0.9375,1.0625,0.9375,1, 159, 9);
chestbigoakModel.addBoxByID("67", 0.9375,0.75,0.9375,1,0.9375,1, 159, 9);
Furniture.addReplacementItem({id:"chestbigoak"},{id:"chestbigoak"}, Furniture.placeRotatableBlock(BlockID.chestbigoak, chestbigoakModel));