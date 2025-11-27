IDRegistry.genBlockID("whitesecurity");
Block.createBlock("whitesecurity", [
	{name: "whitesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whitesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whitesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whitesecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("whitesecurity");
Item.createItem("whitesecurity", "White Scarecrow", {name: "whitesecurity", meta: 0}, {stack: 64});

var whitesecurityModel = ModelAPI.newArray();
whitesecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
whitesecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
whitesecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
whitesecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
whitesecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
whitesecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
whitesecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
whitesecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
whitesecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
whitesecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
whitesecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35);
whitesecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35);
whitesecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35);
whitesecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35);
whitesecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35);
whitesecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35);
whitesecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35);
whitesecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35);
whitesecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
whitesecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35);
whitesecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35);
whitesecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35);
whitesecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
whitesecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
whitesecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
whitesecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
whitesecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
whitesecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35);
whitesecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35);
whitesecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35);
whitesecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35);
whitesecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35);
whitesecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35);
Furniture.addReplacementItem({id:"whitesecurity"},{id:"whitesecurity"}, Furniture.placeRotatableBlock(BlockID.whitesecurity, whitesecurityModel));

IDRegistry.genBlockID("lightgreysecurity");
Block.createBlock("lightgreysecurity", [
	{name: "lightgreysecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreysecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreysecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreysecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lightgreysecurity");
Item.createItem("lightgreysecurity", "Light Grey Scarecrow", {name: "lightgreysecurity", meta: 0}, {stack: 64});

var lightgreysecurityModel = ModelAPI.newArray();
lightgreysecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
lightgreysecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
lightgreysecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
lightgreysecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
lightgreysecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
lightgreysecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
lightgreysecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
lightgreysecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
lightgreysecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
lightgreysecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
lightgreysecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 8);
lightgreysecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 8);
lightgreysecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 8);
lightgreysecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 8);
lightgreysecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 8);
lightgreysecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 8);
lightgreysecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 8);
lightgreysecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 8);
lightgreysecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
lightgreysecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 8);
lightgreysecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 8);
lightgreysecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 8);
lightgreysecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
lightgreysecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
lightgreysecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
lightgreysecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
lightgreysecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
lightgreysecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 8);
lightgreysecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 8);
lightgreysecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 8);
lightgreysecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 8);
lightgreysecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 8);
lightgreysecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 8);
Furniture.addReplacementItem({id:"lightgreysecurity"},{id:"lightgreysecurity"}, Furniture.placeRotatableBlock(BlockID.lightgreysecurity, lightgreysecurityModel));

IDRegistry.genBlockID("greysecurity");
Block.createBlock("greysecurity", [
	{name: "greysecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greysecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greysecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greysecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("greysecurity");
Item.createItem("greysecurity", "Grey Scarecrow", {name: "greysecurity", meta: 0}, {stack: 64});

var greysecurityModel = ModelAPI.newArray();
greysecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
greysecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
greysecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
greysecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
greysecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
greysecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
greysecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
greysecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
greysecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
greysecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
greysecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 8);
greysecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 8);
greysecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 8);
greysecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 8);
greysecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 8);
greysecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 8);
greysecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 8);
greysecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 8);
greysecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
greysecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 8);
greysecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 8);
greysecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 8);
greysecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
greysecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
greysecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
greysecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
greysecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
greysecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 8);
greysecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 8);
greysecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 8);
greysecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 8);
greysecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 8);
greysecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 8);
Furniture.addReplacementItem({id:"greysecurity"},{id:"greysecurity"}, Furniture.placeRotatableBlock(BlockID.greysecurity, greysecurityModel));

IDRegistry.genBlockID("blacksecurity");
Block.createBlock("blacksecurity", [
	{name: "blacksecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blacksecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blacksecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blacksecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("blacksecurity");
Item.createItem("blacksecurity", "Black Scarecrow", {name: "blacksecurity", meta: 0}, {stack: 64});

var blacksecurityModel = ModelAPI.newArray();
blacksecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
blacksecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
blacksecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
blacksecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
blacksecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
blacksecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
blacksecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
blacksecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
blacksecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
blacksecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
blacksecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 15);
blacksecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 15);
blacksecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 15);
blacksecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 15);
blacksecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 15);
blacksecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 15);
blacksecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 15);
blacksecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 15);
blacksecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
blacksecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 15);
blacksecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 15);
blacksecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 15);
blacksecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
blacksecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
blacksecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
blacksecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
blacksecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
blacksecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 15);
blacksecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 15);
blacksecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 15);
blacksecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 15);
blacksecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 15);
blacksecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 15);
Furniture.addReplacementItem({id:"blacksecurity"},{id:"blacksecurity"}, Furniture.placeRotatableBlock(BlockID.blacksecurity, blacksecurityModel));

IDRegistry.genBlockID("brownsecurity");
Block.createBlock("brownsecurity", [
	{name: "brownsecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownsecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownsecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownsecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("brownsecurity");
Item.createItem("brownsecurity", "Brown Scarecrow", {name: "brownsecurity", meta: 0}, {stack: 64});

var brownsecurityModel = ModelAPI.newArray();
brownsecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
brownsecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
brownsecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
brownsecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
brownsecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
brownsecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
brownsecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
brownsecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
brownsecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
brownsecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
brownsecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 12);
brownsecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 12);
brownsecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 12);
brownsecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 12);
brownsecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 12);
brownsecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 12);
brownsecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 12);
brownsecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 12);
brownsecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
brownsecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 12);
brownsecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 12);
brownsecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 12);
brownsecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
brownsecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
brownsecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
brownsecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
brownsecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
brownsecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 12);
brownsecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 12);
brownsecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 12);
brownsecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 12);
brownsecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 12);
brownsecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 12);
Furniture.addReplacementItem({id:"brownsecurity"},{id:"brownsecurity"}, Furniture.placeRotatableBlock(BlockID.brownsecurity, brownsecurityModel));

IDRegistry.genBlockID("redsecurity");
Block.createBlock("redsecurity", [
	{name: "redsecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redsecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redsecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redsecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("redsecurity");
Item.createItem("redsecurity", "Red Scarecrow", {name: "redsecurity", meta: 0}, {stack: 64});

var redsecurityModel = ModelAPI.newArray();
redsecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
redsecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
redsecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
redsecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
redsecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
redsecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
redsecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
redsecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
redsecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
redsecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
redsecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 14);
redsecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 14);
redsecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 14);
redsecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 14);
redsecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 14);
redsecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 14);
redsecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 14);
redsecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 14);
redsecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
redsecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 14);
redsecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 14);
redsecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 14);
redsecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
redsecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
redsecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
redsecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
redsecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
redsecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 14);
redsecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 14);
redsecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 14);
redsecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 14);
redsecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 14);
redsecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 14);
Furniture.addReplacementItem({id:"redsecurity"},{id:"redsecurity"}, Furniture.placeRotatableBlock(BlockID.redsecurity, redsecurityModel));

IDRegistry.genBlockID("orangesecurity");
Block.createBlock("orangesecurity", [
	{name: "orangesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangesecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("orangesecurity");
Item.createItem("orangesecurity", "Orange Scarecrow", {name: "orangesecurity", meta: 0}, {stack: 64});

var orangesecurityModel = ModelAPI.newArray();
orangesecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
orangesecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
orangesecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
orangesecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
orangesecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
orangesecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
orangesecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
orangesecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
orangesecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
orangesecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
orangesecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 1);
orangesecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 1);
orangesecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 1);
orangesecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 1);
orangesecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 1);
orangesecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 1);
orangesecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 1);
orangesecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 1);
orangesecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
orangesecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 1);
orangesecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 1);
orangesecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 1);
orangesecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
orangesecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
orangesecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
orangesecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
orangesecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
orangesecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 1);
orangesecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 1);
orangesecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 1);
orangesecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 1);
orangesecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 1);
orangesecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 1);
Furniture.addReplacementItem({id:"orangesecurity"},{id:"orangesecurity"}, Furniture.placeRotatableBlock(BlockID.orangesecurity, orangesecurityModel));

IDRegistry.genBlockID("yellowsecurity");
Block.createBlock("yellowsecurity", [
	{name: "yellowsecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowsecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowsecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowsecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("yellowsecurity");
Item.createItem("yellowsecurity", "Yellow Scarecrow", {name: "yellowsecurity", meta: 0}, {stack: 64});

var yellowsecurityModel = ModelAPI.newArray();
yellowsecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
yellowsecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
yellowsecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
yellowsecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
yellowsecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
yellowsecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
yellowsecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
yellowsecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
yellowsecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
yellowsecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
yellowsecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 4);
yellowsecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 4);
yellowsecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 4);
yellowsecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 4);
yellowsecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 4);
yellowsecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 4);
yellowsecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 4);
yellowsecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 4);
yellowsecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
yellowsecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 4);
yellowsecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 4);
yellowsecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 4);
yellowsecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
yellowsecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
yellowsecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
yellowsecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
yellowsecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
yellowsecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 4);
yellowsecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 4);
yellowsecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 4);
yellowsecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 4);
yellowsecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 4);
yellowsecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 4);
Furniture.addReplacementItem({id:"yellowsecurity"},{id:"yellowsecurity"}, Furniture.placeRotatableBlock(BlockID.yellowsecurity, yellowsecurityModel));

IDRegistry.genBlockID("limesecurity");
Block.createBlock("limesecurity", [
	{name: "limesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limesecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("limesecurity");
Item.createItem("limesecurity", "Lime Scarecrow", {name: "limesecurity", meta: 0}, {stack: 64});

var limesecurityModel = ModelAPI.newArray();
limesecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
limesecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
limesecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
limesecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
limesecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
limesecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
limesecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
limesecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
limesecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
limesecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
limesecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 5);
limesecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 5);
limesecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 5);
limesecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 5);
limesecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 5);
limesecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 5);
limesecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 5);
limesecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 5);
limesecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
limesecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 5);
limesecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 5);
limesecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 5);
limesecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
limesecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
limesecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
limesecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
limesecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
limesecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 5);
limesecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 5);
limesecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 5);
limesecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 5);
limesecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 5);
limesecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 5);
Furniture.addReplacementItem({id:"limesecurity"},{id:"limesecurity"}, Furniture.placeRotatableBlock(BlockID.limesecurity, limesecurityModel));

IDRegistry.genBlockID("greensecurity");
Block.createBlock("greensecurity", [
	{name: "greensecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greensecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greensecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greensecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("greensecurity");
Item.createItem("greensecurity", "Green Scarecrow", {name: "greensecurity", meta: 0}, {stack: 64});

var greensecurityModel = ModelAPI.newArray();
greensecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
greensecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
greensecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
greensecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
greensecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
greensecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
greensecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
greensecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
greensecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
greensecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
greensecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 13);
greensecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 13);
greensecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 13);
greensecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 13);
greensecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 13);
greensecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 13);
greensecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 13);
greensecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 13);
greensecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
greensecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 13);
greensecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 13);
greensecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 13);
greensecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
greensecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
greensecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
greensecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
greensecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
greensecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 13);
greensecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 13);
greensecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 13);
greensecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 13);
greensecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 13);
greensecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 13);
Furniture.addReplacementItem({id:"greensecurity"},{id:"greensecurity"}, Furniture.placeRotatableBlock(BlockID.greensecurity, greensecurityModel));

IDRegistry.genBlockID("cyansecurity");
Block.createBlock("cyansecurity", [
	{name: "cyansecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyansecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyansecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyansecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cyansecurity");
Item.createItem("cyansecurity", "Cyan Scarecrow", {name: "cyansecurity", meta: 0}, {stack: 64});

var cyansecurityModel = ModelAPI.newArray();
cyansecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
cyansecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
cyansecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
cyansecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
cyansecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
cyansecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
cyansecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
cyansecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
cyansecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
cyansecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
cyansecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 9);
cyansecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 9);
cyansecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 9);
cyansecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 9);
cyansecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 9);
cyansecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 9);
cyansecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 9);
cyansecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 9);
cyansecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
cyansecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 9);
cyansecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 9);
cyansecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 9);
cyansecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
cyansecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
cyansecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
cyansecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
cyansecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
cyansecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 9);
cyansecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 9);
cyansecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 9);
cyansecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 9);
cyansecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 9);
cyansecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 9);
Furniture.addReplacementItem({id:"cyansecurity"},{id:"cyansecurity"}, Furniture.placeRotatableBlock(BlockID.cyansecurity, cyansecurityModel));

IDRegistry.genBlockID("lightbluesecurity");
Block.createBlock("lightbluesecurity", [
	{name: "lightbluesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightbluesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightbluesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightbluesecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lightbluesecurity");
Item.createItem("lightbluesecurity", "Light Blue Scarecrow", {name: "lightbluesecurity", meta: 0}, {stack: 64});

var lightbluesecurityModel = ModelAPI.newArray();
lightbluesecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
lightbluesecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
lightbluesecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
lightbluesecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
lightbluesecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
lightbluesecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
lightbluesecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
lightbluesecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
lightbluesecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
lightbluesecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
lightbluesecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 3);
lightbluesecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 3);
lightbluesecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 3);
lightbluesecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 3);
lightbluesecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 3);
lightbluesecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 3);
lightbluesecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 3);
lightbluesecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 3);
lightbluesecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
lightbluesecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 3);
lightbluesecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 3);
lightbluesecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 3);
lightbluesecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
lightbluesecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
lightbluesecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
lightbluesecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
lightbluesecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
lightbluesecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 3);
lightbluesecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 3);
lightbluesecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 3);
lightbluesecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 3);
lightbluesecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 3);
lightbluesecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 3);
Furniture.addReplacementItem({id:"lightbluesecurity"},{id:"lightbluesecurity"}, Furniture.placeRotatableBlock(BlockID.lightbluesecurity, lightbluesecurityModel));

IDRegistry.genBlockID("bluesecurity");
Block.createBlock("bluesecurity", [
	{name: "bluesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bluesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bluesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bluesecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bluesecurity");
Item.createItem("bluesecurity", "Blue Scarecrow", {name: "bluesecurity", meta: 0}, {stack: 64});

var bluesecurityModel = ModelAPI.newArray();
bluesecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
bluesecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
bluesecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
bluesecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
bluesecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
bluesecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
bluesecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
bluesecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
bluesecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
bluesecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
bluesecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 11);
bluesecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 11);
bluesecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 11);
bluesecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 11);
bluesecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 11);
bluesecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 11);
bluesecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 11);
bluesecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 11);
bluesecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
bluesecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 11);
bluesecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 11);
bluesecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 11);
bluesecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
bluesecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
bluesecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
bluesecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
bluesecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
bluesecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 11);
bluesecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 11);
bluesecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 11);
bluesecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 11);
bluesecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 11);
bluesecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 11);
Furniture.addReplacementItem({id:"bluesecurity"},{id:"bluesecurity"}, Furniture.placeRotatableBlock(BlockID.bluesecurity, bluesecurityModel));

IDRegistry.genBlockID("purplesecurity");
Block.createBlock("purplesecurity", [
	{name: "purplesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purplesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purplesecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purplesecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("purplesecurity");
Item.createItem("purplesecurity", "Purple Scarecrow", {name: "purplesecurity", meta: 0}, {stack: 64});

var purplesecurityModel = ModelAPI.newArray();
purplesecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
purplesecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
purplesecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
purplesecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
purplesecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
purplesecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
purplesecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
purplesecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
purplesecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
purplesecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
purplesecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 10);
purplesecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 10);
purplesecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 10);
purplesecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 10);
purplesecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 10);
purplesecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 10);
purplesecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 10);
purplesecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 10);
purplesecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
purplesecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 10);
purplesecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 10);
purplesecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 10);
purplesecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
purplesecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
purplesecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
purplesecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
purplesecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
purplesecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 10);
purplesecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 10);
purplesecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 10);
purplesecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 10);
purplesecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 10);
purplesecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 10);
Furniture.addReplacementItem({id:"purplesecurity"},{id:"purplesecurity"}, Furniture.placeRotatableBlock(BlockID.purplesecurity, purplesecurityModel));

IDRegistry.genBlockID("magentasecurity");
Block.createBlock("magentasecurity", [
	{name: "magentasecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentasecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentasecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentasecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("magentasecurity");
Item.createItem("magentasecurity", "Magenta Scarecrow", {name: "magentasecurity", meta: 0}, {stack: 64});

var magentasecurityModel = ModelAPI.newArray();
magentasecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
magentasecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
magentasecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
magentasecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
magentasecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
magentasecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
magentasecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
magentasecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
magentasecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
magentasecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
magentasecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 2);
magentasecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 2);
magentasecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 2);
magentasecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 2);
magentasecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 2);
magentasecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 2);
magentasecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 2);
magentasecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 2);
magentasecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
magentasecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 2);
magentasecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 2);
magentasecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 2);
magentasecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
magentasecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
magentasecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
magentasecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
magentasecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
magentasecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 2);
magentasecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 2);
magentasecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 2);
magentasecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 2);
magentasecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 2);
magentasecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 2);
Furniture.addReplacementItem({id:"magentasecurity"},{id:"magentasecurity"}, Furniture.placeRotatableBlock(BlockID.magentasecurity, magentasecurityModel));

IDRegistry.genBlockID("pinksecurity");
Block.createBlock("pinksecurity", [
	{name: "pinksecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinksecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinksecurity", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinksecurity", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("pinksecurity");
Item.createItem("pinksecurity", "Pink Scarecrow", {name: "pinksecurity", meta: 0}, {stack: 64});

var pinksecurityModel = ModelAPI.newArray();
pinksecurityModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
pinksecurityModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
pinksecurityModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["side", 0]]);
pinksecurityModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["side", 0]]);
pinksecurityModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["side", 0]]);
pinksecurityModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["beti", 0]]);
pinksecurityModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
pinksecurityModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
pinksecurityModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
pinksecurityModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
pinksecurityModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 6);
pinksecurityModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 6);
pinksecurityModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 6);
pinksecurityModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 6);
pinksecurityModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 6);
pinksecurityModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 6);
pinksecurityModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 6);
pinksecurityModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 6);
pinksecurityModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
pinksecurityModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 6);
pinksecurityModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 6);
pinksecurityModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 6);
pinksecurityModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
pinksecurityModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
pinksecurityModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
pinksecurityModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
pinksecurityModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
pinksecurityModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 6);
pinksecurityModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 6);
pinksecurityModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 6);
pinksecurityModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 6);
pinksecurityModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 6);
pinksecurityModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 6);
Furniture.addReplacementItem({id:"pinksecurity"},{id:"pinksecurity"}, Furniture.placeRotatableBlock(BlockID.pinksecurity, pinksecurityModel));

//shapes
Block.setShape(BlockID.whitesecurity,0,0,0,1,3,1);
Block.setShape(BlockID.lightgreysecurity,0,0,0,1,3,1);
Block.setShape(BlockID.greysecurity,0,0,0,1,3,1);
Block.setShape(BlockID.blacksecurity,0,0,0,1,3,1);
Block.setShape(BlockID.brownsecurity,0,0,0,1,3,1);
Block.setShape(BlockID.redsecurity,0,0,0,1,3,1);
Block.setShape(BlockID.orangesecurity,0,0,0,1,3,1);
Block.setShape(BlockID.yellowsecurity,0,0,0,1,3,1);
Block.setShape(BlockID.limesecurity,0,0,0,1,3,1);
Block.setShape(BlockID.greensecurity,0,0,0,1,3,1);
Block.setShape(BlockID.cyansecurity,0,0,0,1,3,1);
Block.setShape(BlockID.lightbluesecurity,0,0,0,1,3,1);
Block.setShape(BlockID.bluesecurity,0,0,0,1,3,1);
Block.setShape(BlockID.purplesecurity,0,0,0,1,3,1);
Block.setShape(BlockID.magentasecurity,0,0,0,1,3,1);
Block.setShape(BlockID.pinksecurity,0,0,0,1,3,1);

//recipes
Recipes.addShaped({id: ItemID.whitesecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,0]);
Recipes.addShaped({id: ItemID.lightgreysecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,8]);
Recipes.addShaped({id: ItemID.greysecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,7]);
Recipes.addShaped({id: ItemID.blacksecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,15]);
Recipes.addShaped({id: ItemID.brownsecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,12]);
Recipes.addShaped({id: ItemID.redsecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,14]);
Recipes.addShaped({id: ItemID.orangesecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,1]);
Recipes.addShaped({id: ItemID.yellowsecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,4]);
Recipes.addShaped({id: ItemID.limesecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,5]);
Recipes.addShaped({id: ItemID.greensecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,13]);
Recipes.addShaped({id: ItemID.cyansecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,9]);
Recipes.addShaped({id: ItemID.lightbluesecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,3]);
Recipes.addShaped({id: ItemID.bluesecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,11]);
Recipes.addShaped({id: ItemID.purplesecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,10]);
Recipes.addShaped({id: ItemID.magentasecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,2]);
Recipes.addShaped({id: ItemID.pinksecurity, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,6]);

//translation
Translation.addTranslation("White Scarecrow", {ru: "Белая Пугало"});
Translation.addTranslation("Light Grey Scarecrow", {ru: "Светло-серая Пугало"});
Translation.addTranslation("Grey Scarecrow", {ru: "Серая Пугало"});
Translation.addTranslation("Black Scarecrow", {ru: "Черная Пугало"});
Translation.addTranslation("Brown Scarecrow", {ru: "Коричневая Пугало"});
Translation.addTranslation("Red Scarecrow", {ru: "Красная Пугало"});
Translation.addTranslation("Orange Scarecrow", {ru: "Оранжевая Пугало"});
Translation.addTranslation("Yellow Scarecrow", {ru: "Желтая Пугало"});
Translation.addTranslation("Lime Scarecrow", {ru: "Лаймовая Пугало"});
Translation.addTranslation("Green Scarecrow", {ru: "Зеленая Пугало"});
Translation.addTranslation("Cyan Scarecrow", {ru: "Бирюзовая Пугало"});
Translation.addTranslation("Light Blue Scarecrow", {ru: "Голубая Пугало"});
Translation.addTranslation("Blue Scarecrow", {ru: "Синяя Пугало"});
Translation.addTranslation("Purple Scarecrow", {ru: "Фиолетвая Пугало"});
Translation.addTranslation("Magenta Scarecrow", {ru: "Пурпурная Пугало"});
Translation.addTranslation("Pink Scarecrow", {ru: "Розовая Пугало"});