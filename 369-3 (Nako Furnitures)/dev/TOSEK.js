IDRegistry.genBlockID("whitebigbed");
Block.createBlock("whitebigbed", [
	{name: "whitebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whitebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whitebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whitebigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("whitebigbed");
Item.createItem("whitebigbed", "White Big Bed", {name: "whitebigbed", meta: 0}, {stack: 64});

Translation.addTranslation("White Big Bed", {ru: "Белая Большая Кровать"});
Recipes.addShaped({id: ItemID.whitebigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,0]);

var whitebigbedModel = ModelAPI.newArray();
whitebigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
whitebigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
whitebigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
whitebigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
whitebigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
whitebigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
whitebigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
whitebigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
whitebigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35);
whitebigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
whitebigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
whitebigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
whitebigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
whitebigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35);
whitebigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35);
whitebigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
whitebigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
whitebigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35);
whitebigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35);
whitebigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35);
whitebigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35);
whitebigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35);
whitebigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
whitebigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
whitebigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35);
whitebigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35);
whitebigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
whitebigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
whitebigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35);
whitebigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
whitebigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
whitebigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
whitebigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
whitebigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35);
whitebigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35);
whitebigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
whitebigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
whitebigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35);
whitebigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35);
whitebigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35);
whitebigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35);
whitebigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
whitebigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35);
whitebigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
whitebigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
whitebigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"whitebigbed"},{id:"whitebigbed"}, Furniture.placeRotatableBlock(BlockID.whitebigbed, whitebigbedModel));

IDRegistry.genBlockID("lightgreybigbed");
Block.createBlock("lightgreybigbed", [
	{name: "lightgreybigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreybigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreybigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreybigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lightgreybigbed");
Item.createItem("lightgreybigbed", "Light Grey Big Bed", {name: "lightgreybigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Light Grey Big Bed", {ru: "Светло-серая Большая Кровать"});
Recipes.addShaped({id: ItemID.lightgreybigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,8]);

var lightgreybigbedModel = ModelAPI.newArray();
lightgreybigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
lightgreybigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
lightgreybigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
lightgreybigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
lightgreybigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
lightgreybigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
lightgreybigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
lightgreybigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
lightgreybigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 8);
lightgreybigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
lightgreybigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
lightgreybigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
lightgreybigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
lightgreybigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 8);
lightgreybigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 8);
lightgreybigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
lightgreybigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
lightgreybigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 8);
lightgreybigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 8);
lightgreybigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 8);
lightgreybigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 8);
lightgreybigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 8);
lightgreybigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
lightgreybigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
lightgreybigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 8);
lightgreybigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 8);
lightgreybigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
lightgreybigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
lightgreybigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 8);
lightgreybigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
lightgreybigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
lightgreybigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
lightgreybigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
lightgreybigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 8);
lightgreybigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 8);
lightgreybigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
lightgreybigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
lightgreybigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 8);
lightgreybigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 8);
lightgreybigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 8);
lightgreybigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 8);
lightgreybigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
lightgreybigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 8);
lightgreybigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
lightgreybigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
lightgreybigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"lightgreybigbed"},{id:"lightgreybigbed"}, Furniture.placeRotatableBlock(BlockID.lightgreybigbed, lightgreybigbedModel));

IDRegistry.genBlockID("greybigbed");
Block.createBlock("greybigbed", [
	{name: "greybigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greybigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greybigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greybigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("greybigbed");
Item.createItem("greybigbed", "Grey Big Bed", {name: "greybigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Grey Big Bed", {ru: "Серая Большая Кровать"});
Recipes.addShaped({id: ItemID.greybigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,7]);

var greybigbedModel = ModelAPI.newArray();
greybigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
greybigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
greybigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
greybigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
greybigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
greybigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
greybigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
greybigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
greybigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 7);
greybigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
greybigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
greybigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
greybigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
greybigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 7);
greybigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 7);
greybigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
greybigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
greybigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 7);
greybigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 7);
greybigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 7);
greybigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 7);
greybigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 7);
greybigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
greybigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
greybigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 7);
greybigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 7);
greybigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
greybigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
greybigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 7);
greybigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
greybigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
greybigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
greybigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
greybigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 7);
greybigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 7);
greybigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
greybigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
greybigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 7);
greybigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 7);
greybigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 7);
greybigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 7);
greybigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
greybigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 7);
greybigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
greybigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
greybigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"greybigbed"},{id:"greybigbed"}, Furniture.placeRotatableBlock(BlockID.greybigbed, greybigbedModel));

IDRegistry.genBlockID("blackbigbed");
Block.createBlock("blackbigbed", [
	{name: "blackbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blackbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blackbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blackbigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("blackbigbed");
Item.createItem("blackbigbed", "Black Big Bed", {name: "blackbigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Black Big Bed", {ru: "Черная Большая Кровать"});
Recipes.addShaped({id: ItemID.blackbigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,15]);

var blackbigbedModel = ModelAPI.newArray();
blackbigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
blackbigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
blackbigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
blackbigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
blackbigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
blackbigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
blackbigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
blackbigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
blackbigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 15);
blackbigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
blackbigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
blackbigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
blackbigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
blackbigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 15);
blackbigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 15);
blackbigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
blackbigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
blackbigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 15);
blackbigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 15);
blackbigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 15);
blackbigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 15);
blackbigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 15);
blackbigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
blackbigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
blackbigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 15);
blackbigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 15);
blackbigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
blackbigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
blackbigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 15);
blackbigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
blackbigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
blackbigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
blackbigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
blackbigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 15);
blackbigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 15);
blackbigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
blackbigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
blackbigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 15);
blackbigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 15);
blackbigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 15);
blackbigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 15);
blackbigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
blackbigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 15);
blackbigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
blackbigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
blackbigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"blackbigbed"},{id:"blackbigbed"}, Furniture.placeRotatableBlock(BlockID.blackbigbed, blackbigbedModel));

IDRegistry.genBlockID("brownbigbed");
Block.createBlock("brownbigbed", [
	{name: "brownbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownbigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("brownbigbed");
Item.createItem("brownbigbed", "Brown Big Bed", {name: "brownbigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Brown Big Bed", {ru: "Коричневая Большая Кровать"});
Recipes.addShaped({id: ItemID.brownbigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,12]);

var brownbigbedModel = ModelAPI.newArray();
brownbigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
brownbigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
brownbigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
brownbigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
brownbigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
brownbigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
brownbigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
brownbigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
brownbigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 12);
brownbigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
brownbigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
brownbigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
brownbigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
brownbigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 12);
brownbigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 12);
brownbigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
brownbigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
brownbigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 12);
brownbigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 12);
brownbigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 12);
brownbigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 12);
brownbigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 12);
brownbigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
brownbigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
brownbigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 12);
brownbigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 12);
brownbigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
brownbigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
brownbigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 12);
brownbigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
brownbigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
brownbigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
brownbigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
brownbigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 12);
brownbigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 12);
brownbigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
brownbigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
brownbigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 12);
brownbigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 12);
brownbigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 12);
brownbigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 12);
brownbigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
brownbigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 12);
brownbigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
brownbigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
brownbigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"brownbigbed"},{id:"brownbigbed"}, Furniture.placeRotatableBlock(BlockID.brownbigbed, brownbigbedModel));

IDRegistry.genBlockID("redbigbed");
Block.createBlock("redbigbed", [
	{name: "redbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redbigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("redbigbed");
Item.createItem("redbigbed", "Red Big Bed", {name: "redbigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Red Big Bed", {ru: "Красная Большая Кровать"});
Recipes.addShaped({id: ItemID.redbigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,14]);

var redbigbedModel = ModelAPI.newArray();
redbigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
redbigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
redbigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
redbigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
redbigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
redbigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
redbigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
redbigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
redbigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 14);
redbigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
redbigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
redbigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
redbigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
redbigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 14);
redbigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 14);
redbigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
redbigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
redbigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 14);
redbigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 14);
redbigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 14);
redbigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 14);
redbigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 14);
redbigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
redbigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
redbigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 14);
redbigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 14);
redbigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
redbigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
redbigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 14);
redbigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
redbigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
redbigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
redbigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
redbigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 14);
redbigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 14);
redbigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
redbigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
redbigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 14);
redbigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 14);
redbigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 14);
redbigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 14);
redbigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
redbigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 14);
redbigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
redbigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
redbigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"redbigbed"},{id:"redbigbed"}, Furniture.placeRotatableBlock(BlockID.redbigbed, redbigbedModel));

IDRegistry.genBlockID("orangebigbed");
Block.createBlock("orangebigbed", [
	{name: "orangebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangebigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("orangebigbed");
Item.createItem("orangebigbed", "Orange Big Bed", {name: "orangebigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Orange Big Bed", {ru: "Оранжевая Большая Кровать"});
Recipes.addShaped({id: ItemID.orangebigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,1]);

var orangebigbedModel = ModelAPI.newArray();
orangebigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
orangebigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
orangebigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
orangebigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
orangebigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
orangebigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
orangebigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
orangebigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
orangebigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 1);
orangebigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
orangebigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
orangebigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
orangebigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
orangebigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 1);
orangebigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 1);
orangebigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
orangebigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
orangebigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 1);
orangebigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 1);
orangebigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 1);
orangebigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 1);
orangebigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 1);
orangebigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
orangebigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
orangebigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 1);
orangebigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 1);
orangebigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
orangebigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
orangebigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 1);
orangebigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
orangebigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
orangebigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
orangebigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
orangebigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 1);
orangebigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 1);
orangebigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
orangebigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
orangebigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 1);
orangebigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 1);
orangebigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 1);
orangebigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 1);
orangebigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
orangebigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 1);
orangebigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
orangebigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
orangebigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"orangebigbed"},{id:"orangebigbed"}, Furniture.placeRotatableBlock(BlockID.orangebigbed, orangebigbedModel));

IDRegistry.genBlockID("yellowbigbed");
Block.createBlock("yellowbigbed", [
	{name: "yellowbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowbigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("yellowbigbed");
Item.createItem("yellowbigbed", "Yellow Big Bed", {name: "yellowbigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Yellow Big Bed", {ru: "Желтая Большая Кровать"});
Recipes.addShaped({id: ItemID.yellowbigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,4]);

var yellowbigbedModel = ModelAPI.newArray();
yellowbigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
yellowbigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
yellowbigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
yellowbigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
yellowbigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
yellowbigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
yellowbigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
yellowbigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
yellowbigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 4);
yellowbigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
yellowbigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
yellowbigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
yellowbigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
yellowbigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 4);
yellowbigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 4);
yellowbigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
yellowbigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
yellowbigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 4);
yellowbigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 4);
yellowbigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 4);
yellowbigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 4);
yellowbigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 4);
yellowbigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
yellowbigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
yellowbigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 4);
yellowbigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 4);
yellowbigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
yellowbigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
yellowbigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 4);
yellowbigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
yellowbigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
yellowbigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
yellowbigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
yellowbigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 4);
yellowbigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 4);
yellowbigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
yellowbigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
yellowbigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 4);
yellowbigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 4);
yellowbigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 4);
yellowbigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 4);
yellowbigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
yellowbigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 4);
yellowbigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
yellowbigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
yellowbigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"yellowbigbed"},{id:"yellowbigbed"}, Furniture.placeRotatableBlock(BlockID.yellowbigbed, yellowbigbedModel));

IDRegistry.genBlockID("limebigbed");
Block.createBlock("limebigbed", [
	{name: "limebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limebigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("limebigbed");
Item.createItem("limebigbed", "Lime Big Bed", {name: "limebigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Lime Big Bed", {ru: "Лаймовая Большая Кровать"});
Recipes.addShaped({id: ItemID.limebigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,5]);

var limebigbedModel = ModelAPI.newArray();
limebigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
limebigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
limebigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
limebigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
limebigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
limebigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
limebigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
limebigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
limebigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 5);
limebigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
limebigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
limebigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
limebigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
limebigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 5);
limebigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 5);
limebigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
limebigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
limebigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 5);
limebigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 5);
limebigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 5);
limebigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 5);
limebigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 5);
limebigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
limebigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
limebigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 5);
limebigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 5);
limebigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
limebigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
limebigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 5);
limebigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
limebigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
limebigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
limebigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
limebigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 5);
limebigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 5);
limebigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
limebigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
limebigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 5);
limebigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 5);
limebigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 5);
limebigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 5);
limebigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
limebigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 5);
limebigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
limebigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
limebigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"limebigbed"},{id:"limebigbed"}, Furniture.placeRotatableBlock(BlockID.limebigbed, limebigbedModel));

IDRegistry.genBlockID("greenbigbed");
Block.createBlock("greenbigbed", [
	{name: "greenbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greenbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greenbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greenbigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("greenbigbed");
Item.createItem("greenbigbed", "Green Big Bed", {name: "greenbigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Green Big Bed", {ru: "Зеленая Большая Кровать"});
Recipes.addShaped({id: ItemID.greenbigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,13]);

var greenbigbedModel = ModelAPI.newArray();
greenbigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
greenbigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
greenbigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
greenbigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
greenbigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
greenbigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
greenbigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
greenbigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
greenbigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 13);
greenbigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
greenbigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
greenbigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
greenbigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
greenbigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 13);
greenbigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 13);
greenbigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
greenbigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
greenbigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 13);
greenbigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 13);
greenbigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 13);
greenbigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 13);
greenbigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 13);
greenbigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
greenbigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
greenbigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 13);
greenbigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 13);
greenbigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
greenbigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
greenbigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 13);
greenbigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
greenbigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
greenbigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
greenbigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
greenbigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 13);
greenbigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 13);
greenbigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
greenbigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
greenbigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 13);
greenbigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 13);
greenbigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 13);
greenbigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 13);
greenbigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
greenbigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 13);
greenbigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
greenbigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
greenbigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"greenbigbed"},{id:"greenbigbed"}, Furniture.placeRotatableBlock(BlockID.greenbigbed, greenbigbedModel));

IDRegistry.genBlockID("cyanbigbed");
Block.createBlock("cyanbigbed", [
	{name: "cyanbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyanbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyanbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyanbigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cyanbigbed");
Item.createItem("cyanbigbed", "Cyan Big Bed", {name: "cyanbigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Cyan Big Bed", {ru: "Бирюзовая Большая Кровать"});
Recipes.addShaped({id: ItemID.cyanbigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,9]);

var cyanbigbedModel = ModelAPI.newArray();
cyanbigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
cyanbigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
cyanbigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
cyanbigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
cyanbigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
cyanbigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
cyanbigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
cyanbigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
cyanbigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 9);
cyanbigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
cyanbigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
cyanbigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
cyanbigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
cyanbigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 9);
cyanbigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 9);
cyanbigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
cyanbigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
cyanbigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 9);
cyanbigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 9);
cyanbigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 9);
cyanbigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 9);
cyanbigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 9);
cyanbigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
cyanbigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
cyanbigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 9);
cyanbigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 9);
cyanbigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
cyanbigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
cyanbigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 9);
cyanbigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
cyanbigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
cyanbigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
cyanbigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
cyanbigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 9);
cyanbigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 9);
cyanbigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
cyanbigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
cyanbigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 9);
cyanbigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 9);
cyanbigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 9);
cyanbigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 9);
cyanbigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
cyanbigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 9);
cyanbigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
cyanbigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
cyanbigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"cyanbigbed"},{id:"cyanbigbed"}, Furniture.placeRotatableBlock(BlockID.cyanbigbed, cyanbigbedModel));

IDRegistry.genBlockID("lightbluebigbed");
Block.createBlock("lightbluebigbed", [
	{name: "lightbluebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightbluebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightbluebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightbluebigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lightbluebigbed");
Item.createItem("lightbluebigbed", "Light Blue Big Bed", {name: "lightbluebigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Light Blue Big Bed", {ru: "Голубая Большая Кровать"});
Recipes.addShaped({id: ItemID.lightbluebigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,3]);

var lightbluebigbedModel = ModelAPI.newArray();
lightbluebigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
lightbluebigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
lightbluebigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
lightbluebigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
lightbluebigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
lightbluebigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
lightbluebigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
lightbluebigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
lightbluebigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 3);
lightbluebigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
lightbluebigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
lightbluebigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
lightbluebigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
lightbluebigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 3);
lightbluebigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 3);
lightbluebigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
lightbluebigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
lightbluebigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 3);
lightbluebigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 3);
lightbluebigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 3);
lightbluebigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 3);
lightbluebigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 3);
lightbluebigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
lightbluebigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
lightbluebigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 3);
lightbluebigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 3);
lightbluebigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
lightbluebigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
lightbluebigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 3);
lightbluebigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
lightbluebigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
lightbluebigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
lightbluebigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
lightbluebigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 3);
lightbluebigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 3);
lightbluebigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
lightbluebigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
lightbluebigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 3);
lightbluebigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 3);
lightbluebigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 3);
lightbluebigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 3);
lightbluebigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
lightbluebigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 3);
lightbluebigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
lightbluebigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
lightbluebigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"lightbluebigbed"},{id:"lightbluebigbed"}, Furniture.placeRotatableBlock(BlockID.lightbluebigbed, lightbluebigbedModel));

IDRegistry.genBlockID("bluebigbed");
Block.createBlock("bluebigbed", [
	{name: "bluebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bluebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bluebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bluebigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bluebigbed");
Item.createItem("bluebigbed", "Blue Big Bed", {name: "bluebigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Blue Big Bed", {ru: "Синяя Большая Кровать"});
Recipes.addShaped({id: ItemID.bluebigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,11]);

var bluebigbedModel = ModelAPI.newArray();
bluebigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
bluebigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
bluebigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
bluebigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
bluebigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
bluebigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
bluebigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
bluebigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
bluebigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 11);
bluebigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
bluebigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
bluebigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
bluebigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
bluebigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 11);
bluebigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 11);
bluebigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
bluebigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
bluebigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 11);
bluebigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 11);
bluebigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 11);
bluebigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 11);
bluebigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 11);
bluebigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
bluebigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
bluebigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 11);
bluebigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 11);
bluebigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
bluebigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
bluebigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 11);
bluebigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
bluebigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
bluebigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
bluebigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
bluebigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 11);
bluebigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 11);
bluebigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
bluebigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
bluebigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 11);
bluebigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 11);
bluebigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 11);
bluebigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 11);
bluebigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
bluebigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 11);
bluebigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
bluebigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
bluebigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"bluebigbed"},{id:"bluebigbed"}, Furniture.placeRotatableBlock(BlockID.bluebigbed, bluebigbedModel));

IDRegistry.genBlockID("purplebigbed");
Block.createBlock("purplebigbed", [
	{name: "purplebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purplebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purplebigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purplebigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("purplebigbed");
Item.createItem("purplebigbed", "Purple Big Bed", {name: "purplebigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Purple Big Bed", {ru: "Фиолетвая Большая Кровать"});
Recipes.addShaped({id: ItemID.purplebigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,10]);

var purplebigbedModel = ModelAPI.newArray();
purplebigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
purplebigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
purplebigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
purplebigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
purplebigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
purplebigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
purplebigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
purplebigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
purplebigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 10);
purplebigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
purplebigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
purplebigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
purplebigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
purplebigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 10);
purplebigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 10);
purplebigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
purplebigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
purplebigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 10);
purplebigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 10);
purplebigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 10);
purplebigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 10);
purplebigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 10);
purplebigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
purplebigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
purplebigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 10);
purplebigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 10);
purplebigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
purplebigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
purplebigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 10);
purplebigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
purplebigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
purplebigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
purplebigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
purplebigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 10);
purplebigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 10);
purplebigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
purplebigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
purplebigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 10);
purplebigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 10);
purplebigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 10);
purplebigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 10);
purplebigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
purplebigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 10);
purplebigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
purplebigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
purplebigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"purplebigbed"},{id:"purplebigbed"}, Furniture.placeRotatableBlock(BlockID.purplebigbed, purplebigbedModel));

IDRegistry.genBlockID("magentabigbed");
Block.createBlock("magentabigbed", [
	{name: "magentabigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentabigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentabigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentabigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("magentabigbed");
Item.createItem("magentabigbed", "Magenta Big Bed", {name: "magentabigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Magenta Big Bed", {ru: "Пурпурная Большая Кровать"});
Recipes.addShaped({id: ItemID.magentabigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,2]);

var magentabigbedModel = ModelAPI.newArray();
magentabigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
magentabigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
magentabigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
magentabigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
magentabigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
magentabigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
magentabigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
magentabigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
magentabigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 2);
magentabigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
magentabigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
magentabigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
magentabigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
magentabigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 2);
magentabigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 2);
magentabigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
magentabigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
magentabigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 2);
magentabigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 2);
magentabigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 2);
magentabigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 2);
magentabigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 2);
magentabigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
magentabigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
magentabigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 2);
magentabigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 2);
magentabigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
magentabigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
magentabigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 2);
magentabigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
magentabigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
magentabigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
magentabigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
magentabigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 2);
magentabigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 2);
magentabigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
magentabigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
magentabigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 2);
magentabigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 2);
magentabigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 2);
magentabigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 2);
magentabigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
magentabigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 2);
magentabigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
magentabigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
magentabigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"magentabigbed"},{id:"magentabigbed"}, Furniture.placeRotatableBlock(BlockID.magentabigbed, magentabigbedModel));

IDRegistry.genBlockID("pinkbigbed");
Block.createBlock("pinkbigbed", [
	{name: "pinkbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinkbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinkbigbed", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinkbigbed", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("pinkbigbed");
Item.createItem("pinkbigbed", "Pink Big Bed", {name: "pinkbigbed", meta: 0}, {stack: 64});

Translation.addTranslation("Pink Big Bed", {ru: "Розовая Большая Кровать"});
Recipes.addShaped({id: ItemID.pinkbigbed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,6]);

var pinkbigbedModel = ModelAPI.newArray();
pinkbigbedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
pinkbigbedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
pinkbigbedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
pinkbigbedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
pinkbigbedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
pinkbigbedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
pinkbigbedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
pinkbigbedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
pinkbigbedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 6);
pinkbigbedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
pinkbigbedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
pinkbigbedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
pinkbigbedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
pinkbigbedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 6);
pinkbigbedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 6);
pinkbigbedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
pinkbigbedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
pinkbigbedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 6);
pinkbigbedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 6);
pinkbigbedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 6);
pinkbigbedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 6);
pinkbigbedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 6);
pinkbigbedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
pinkbigbedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
pinkbigbedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 6);
pinkbigbedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 6);
pinkbigbedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
pinkbigbedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
pinkbigbedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 6);
pinkbigbedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
pinkbigbedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
pinkbigbedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
pinkbigbedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
pinkbigbedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 6);
pinkbigbedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 6);
pinkbigbedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
pinkbigbedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
pinkbigbedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 6);
pinkbigbedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 6);
pinkbigbedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 6);
pinkbigbedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 6);
pinkbigbedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
pinkbigbedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 6);
pinkbigbedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
pinkbigbedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
pinkbigbedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"pinkbigbed"},{id:"pinkbigbed"}, Furniture.placeRotatableBlock(BlockID.pinkbigbed, pinkbigbedModel));

Block.setShape(BlockID.whitebigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.lightgreybigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.greybigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.blackbigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.brownbigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.redbigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.orangebigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.yellowbigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.limebigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.greenbigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.cyanbigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.lightbluebigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.bluebigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.purplebigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.magentabigbed,0,0,0,1,0.36,1);
Block.setShape(BlockID.pinkbigbed,0,0,0,1,0.36,1);