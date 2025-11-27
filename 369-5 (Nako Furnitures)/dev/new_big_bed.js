IDRegistry.genBlockID("white_big_bed");
Block.createBlock("white_big_bed", [
	{name: "White Big Bed", texture: [["wool_colored_white", 0]], inCreative: false},
	{name: "White Big Bed", texture: [["wool_colored_white", 0]], inCreative: false},
	{name: "White Big Bed", texture: [["wool_colored_white", 0]], inCreative: false},
	{name: "White Big Bed", texture: [["wool_colored_white", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("white_big_bed");
Item.createItem("white_big_bed", "White Big Bed", {name: "white_big_bed", meta: 0}, {stack: 64});

var white_big_bedModel = ModelAPI.newArray();
white_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
white_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
white_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
white_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
white_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
white_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
white_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
white_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
white_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35);
white_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
white_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
white_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
white_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
white_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35);
white_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35);
white_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
white_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
white_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35);
white_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35);
white_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35);
white_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35);
white_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35);
white_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
white_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
white_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35);
white_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35);
white_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
white_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
white_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35);
white_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
white_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
white_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
white_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
white_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35);
white_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35);
white_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
white_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
white_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35);
white_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35);
white_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35);
white_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35);
white_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
white_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35);
white_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
white_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
white_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"white_big_bed"},{id:"white_big_bed"}, Furniture.placeRotatableBlock(BlockID.white_big_bed, white_big_bedModel));

IDRegistry.genBlockID("silver_big_bed");
Block.createBlock("silver_big_bed", [
	{name: "Light Gray Big Bed", texture: [["wool_colored_silver", 0]], inCreative: false},
	{name: "Light Gray Big Bed", texture: [["wool_colored_silver", 0]], inCreative: false},
	{name: "Light Gray Big Bed", texture: [["wool_colored_silver", 0]], inCreative: false},
	{name: "Light Gray Big Bed", texture: [["wool_colored_silver", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("silver_big_bed");
Item.createItem("silver_big_bed", "Light Gray Big Bed", {name: "silver_big_bed", meta: 0}, {stack: 64});

var silver_big_bedModel = ModelAPI.newArray();
silver_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
silver_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
silver_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
silver_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
silver_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
silver_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
silver_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
silver_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
silver_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 8);
silver_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
silver_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
silver_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
silver_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
silver_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 8);
silver_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 8);
silver_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
silver_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
silver_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 8);
silver_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 8);
silver_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 8);
silver_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 8);
silver_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 8);
silver_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
silver_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
silver_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 8);
silver_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 8);
silver_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
silver_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
silver_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 8);
silver_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
silver_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
silver_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
silver_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
silver_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 8);
silver_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 8);
silver_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
silver_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
silver_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 8);
silver_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 8);
silver_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 8);
silver_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 8);
silver_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
silver_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 8);
silver_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
silver_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
silver_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"silver_big_bed"},{id:"silver_big_bed"}, Furniture.placeRotatableBlock(BlockID.silver_big_bed, silver_big_bedModel));

IDRegistry.genBlockID("gray_big_bed");
Block.createBlock("gray_big_bed", [
	{name: "Gray Big Bed", texture: [["wool_colored_gray", 0]], inCreative: false},
	{name: "Gray Big Bed", texture: [["wool_colored_gray", 0]], inCreative: false},
	{name: "Gray Big Bed", texture: [["wool_colored_gray", 0]], inCreative: false},
	{name: "Gray Big Bed", texture: [["wool_colored_gray", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("gray_big_bed");
Item.createItem("gray_big_bed", "Gray Big Bed", {name: "gray_big_bed", meta: 0}, {stack: 64});

var gray_big_bedModel = ModelAPI.newArray();
gray_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
gray_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
gray_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
gray_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
gray_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
gray_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
gray_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
gray_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
gray_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 7);
gray_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
gray_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
gray_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
gray_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
gray_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 7);
gray_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 7);
gray_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
gray_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
gray_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 7);
gray_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 7);
gray_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 7);
gray_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 7);
gray_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 7);
gray_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
gray_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
gray_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 7);
gray_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 7);
gray_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
gray_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
gray_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 7);
gray_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
gray_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
gray_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
gray_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
gray_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 7);
gray_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 7);
gray_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
gray_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
gray_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 7);
gray_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 7);
gray_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 7);
gray_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 7);
gray_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
gray_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 7);
gray_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
gray_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
gray_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"gray_big_bed"},{id:"gray_big_bed"}, Furniture.placeRotatableBlock(BlockID.gray_big_bed, gray_big_bedModel));

IDRegistry.genBlockID("black_big_bed");
Block.createBlock("black_big_bed", [
	{name: "Black Big Bed", texture: [["wool_colored_black", 0]], inCreative: false},
	{name: "Black Big Bed", texture: [["wool_colored_black", 0]], inCreative: false},
	{name: "Black Big Bed", texture: [["wool_colored_black", 0]], inCreative: false},
	{name: "Black Big Bed", texture: [["wool_colored_black", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("black_big_bed");
Item.createItem("black_big_bed", "Black Big Bed", {name: "black_big_bed", meta: 0}, {stack: 64});

var black_big_bedModel = ModelAPI.newArray();
black_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
black_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
black_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
black_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
black_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
black_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
black_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
black_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
black_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 15);
black_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
black_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
black_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
black_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
black_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 15);
black_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 15);
black_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
black_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
black_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 15);
black_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 15);
black_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 15);
black_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 15);
black_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 15);
black_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
black_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
black_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 15);
black_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 15);
black_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
black_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
black_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 15);
black_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
black_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
black_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
black_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
black_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 15);
black_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 15);
black_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
black_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
black_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 15);
black_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 15);
black_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 15);
black_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 15);
black_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
black_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 15);
black_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
black_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
black_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"black_big_bed"},{id:"black_big_bed"}, Furniture.placeRotatableBlock(BlockID.black_big_bed, black_big_bedModel));

IDRegistry.genBlockID("brown_big_bed");
Block.createBlock("brown_big_bed", [
	{name: "Brown Big Bed", texture: [["wool_colored_brown", 0]], inCreative: false},
	{name: "Brown Big Bed", texture: [["wool_colored_brown", 0]], inCreative: false},
	{name: "Brown Big Bed", texture: [["wool_colored_brown", 0]], inCreative: false},
	{name: "Brown Big Bed", texture: [["wool_colored_brown", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("brown_big_bed");
Item.createItem("brown_big_bed", "Brown Big Bed", {name: "brown_big_bed", meta: 0}, {stack: 64});

var brown_big_bedModel = ModelAPI.newArray();
brown_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
brown_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
brown_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
brown_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
brown_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
brown_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
brown_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
brown_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
brown_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 12);
brown_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
brown_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
brown_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
brown_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
brown_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 12);
brown_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 12);
brown_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
brown_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
brown_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 12);
brown_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 12);
brown_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 12);
brown_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 12);
brown_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 12);
brown_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
brown_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
brown_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 12);
brown_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 12);
brown_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
brown_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
brown_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 12);
brown_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
brown_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
brown_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
brown_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
brown_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 12);
brown_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 12);
brown_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
brown_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
brown_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 12);
brown_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 12);
brown_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 12);
brown_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 12);
brown_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
brown_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 12);
brown_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
brown_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
brown_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"brown_big_bed"},{id:"brown_big_bed"}, Furniture.placeRotatableBlock(BlockID.brown_big_bed, brown_big_bedModel));

IDRegistry.genBlockID("red_big_bed");
Block.createBlock("red_big_bed", [
	{name: "Red Big Bed", texture: [["wool_colored_red", 0]], inCreative: false},
	{name: "Red Big Bed", texture: [["wool_colored_red", 0]], inCreative: false},
	{name: "Red Big Bed", texture: [["wool_colored_red", 0]], inCreative: false},
	{name: "Red Big Bed", texture: [["wool_colored_red", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("red_big_bed");
Item.createItem("red_big_bed", "Red Big Bed", {name: "red_big_bed", meta: 0}, {stack: 64});

var red_big_bedModel = ModelAPI.newArray();
red_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
red_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
red_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
red_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
red_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
red_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
red_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
red_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
red_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 14);
red_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
red_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
red_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
red_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
red_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 14);
red_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 14);
red_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
red_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
red_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 14);
red_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 14);
red_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 14);
red_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 14);
red_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 14);
red_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
red_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
red_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 14);
red_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 14);
red_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
red_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
red_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 14);
red_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
red_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
red_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
red_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
red_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 14);
red_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 14);
red_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
red_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
red_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 14);
red_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 14);
red_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 14);
red_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 14);
red_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
red_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 14);
red_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
red_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
red_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"red_big_bed"},{id:"red_big_bed"}, Furniture.placeRotatableBlock(BlockID.red_big_bed, red_big_bedModel));

IDRegistry.genBlockID("orange_big_bed");
Block.createBlock("orange_big_bed", [
	{name: "Orange Big Bed", texture: [["wool_colored_orange", 0]], inCreative: false},
	{name: "Orange Big Bed", texture: [["wool_colored_orange", 0]], inCreative: false},
	{name: "Orange Big Bed", texture: [["wool_colored_orange", 0]], inCreative: false},
	{name: "Orange Big Bed", texture: [["wool_colored_orange", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("orange_big_bed");
Item.createItem("orange_big_bed", "Orange Big Bed", {name: "orange_big_bed", meta: 0}, {stack: 64});

var orange_big_bedModel = ModelAPI.newArray();
orange_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
orange_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
orange_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
orange_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
orange_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
orange_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
orange_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
orange_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
orange_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 1);
orange_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
orange_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
orange_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
orange_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
orange_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 1);
orange_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 1);
orange_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
orange_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
orange_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 1);
orange_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 1);
orange_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 1);
orange_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 1);
orange_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 1);
orange_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
orange_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
orange_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 1);
orange_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 1);
orange_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
orange_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
orange_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 1);
orange_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
orange_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
orange_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
orange_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
orange_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 1);
orange_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 1);
orange_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
orange_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
orange_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 1);
orange_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 1);
orange_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 1);
orange_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 1);
orange_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
orange_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 1);
orange_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
orange_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
orange_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"orange_big_bed"},{id:"orange_big_bed"}, Furniture.placeRotatableBlock(BlockID.orange_big_bed, orange_big_bedModel));

IDRegistry.genBlockID("yellow_big_bed");
Block.createBlock("yellow_big_bed", [
	{name: "Yellow Big Bed", texture: [["wool_colored_yellow", 0]], inCreative: false},
	{name: "Yellow Big Bed", texture: [["wool_colored_yellow", 0]], inCreative: false},
	{name: "Yellow Big Bed", texture: [["wool_colored_yellow", 0]], inCreative: false},
	{name: "Yellow Big Bed", texture: [["wool_colored_yellow", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("yellow_big_bed");
Item.createItem("yellow_big_bed", "Yellow Big Bed", {name: "yellow_big_bed", meta: 0}, {stack: 64});

var yellow_big_bedModel = ModelAPI.newArray();
yellow_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
yellow_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
yellow_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
yellow_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
yellow_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
yellow_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
yellow_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
yellow_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
yellow_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 4);
yellow_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
yellow_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
yellow_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
yellow_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
yellow_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 4);
yellow_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 4);
yellow_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
yellow_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
yellow_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 4);
yellow_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 4);
yellow_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 4);
yellow_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 4);
yellow_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 4);
yellow_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
yellow_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
yellow_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 4);
yellow_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 4);
yellow_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
yellow_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
yellow_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 4);
yellow_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
yellow_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
yellow_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
yellow_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
yellow_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 4);
yellow_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 4);
yellow_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
yellow_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
yellow_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 4);
yellow_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 4);
yellow_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 4);
yellow_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 4);
yellow_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
yellow_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 4);
yellow_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
yellow_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
yellow_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"yellow_big_bed"},{id:"yellow_big_bed"}, Furniture.placeRotatableBlock(BlockID.yellow_big_bed, yellow_big_bedModel));

IDRegistry.genBlockID("lime_big_bed");
Block.createBlock("lime_big_bed", [
	{name: "Lime Big Bed", texture: [["wool_colored_lime", 0]], inCreative: false},
	{name: "Lime Big Bed", texture: [["wool_colored_lime", 0]], inCreative: false},
	{name: "Lime Big Bed", texture: [["wool_colored_lime", 0]], inCreative: false},
	{name: "Lime Big Bed", texture: [["wool_colored_lime", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lime_big_bed");
Item.createItem("lime_big_bed", "Lime Big Bed", {name: "lime_big_bed", meta: 0}, {stack: 64});

var lime_big_bedModel = ModelAPI.newArray();
lime_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
lime_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
lime_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
lime_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
lime_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
lime_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
lime_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
lime_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
lime_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 5);
lime_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
lime_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
lime_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
lime_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
lime_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 5);
lime_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 5);
lime_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
lime_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
lime_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 5);
lime_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 5);
lime_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 5);
lime_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 5);
lime_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 5);
lime_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
lime_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
lime_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 5);
lime_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 5);
lime_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
lime_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
lime_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 5);
lime_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
lime_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
lime_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
lime_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
lime_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 5);
lime_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 5);
lime_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
lime_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
lime_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 5);
lime_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 5);
lime_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 5);
lime_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 5);
lime_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
lime_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 5);
lime_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
lime_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
lime_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"lime_big_bed"},{id:"lime_big_bed"}, Furniture.placeRotatableBlock(BlockID.lime_big_bed, lime_big_bedModel));

IDRegistry.genBlockID("green_big_bed");
Block.createBlock("green_big_bed", [
	{name: "Green Big Bed", texture: [["wool_colored_green", 0]], inCreative: false},
	{name: "Green Big Bed", texture: [["wool_colored_green", 0]], inCreative: false},
	{name: "Green Big Bed", texture: [["wool_colored_green", 0]], inCreative: false},
	{name: "Green Big Bed", texture: [["wool_colored_green", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("green_big_bed");
Item.createItem("green_big_bed", "Green Big Bed", {name: "green_big_bed", meta: 0}, {stack: 64});

var green_big_bedModel = ModelAPI.newArray();
green_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
green_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
green_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
green_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
green_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
green_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
green_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
green_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
green_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 13);
green_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
green_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
green_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
green_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
green_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 13);
green_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 13);
green_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
green_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
green_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 13);
green_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 13);
green_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 13);
green_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 13);
green_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 13);
green_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
green_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
green_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 13);
green_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 13);
green_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
green_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
green_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 13);
green_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
green_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
green_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
green_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
green_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 13);
green_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 13);
green_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
green_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
green_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 13);
green_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 13);
green_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 13);
green_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 13);
green_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
green_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 13);
green_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
green_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
green_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"green_big_bed"},{id:"green_big_bed"}, Furniture.placeRotatableBlock(BlockID.green_big_bed, green_big_bedModel));

IDRegistry.genBlockID("cyan_big_bed");
Block.createBlock("cyan_big_bed", [
	{name: "Cyan Big Bed", texture: [["wool_colored_cyan", 0]], inCreative: false},
	{name: "Cyan Big Bed", texture: [["wool_colored_cyan", 0]], inCreative: false},
	{name: "Cyan Big Bed", texture: [["wool_colored_cyan", 0]], inCreative: false},
	{name: "Cyan Big Bed", texture: [["wool_colored_cyan", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cyan_big_bed");
Item.createItem("cyan_big_bed", "Cyan Big Bed", {name: "cyan_big_bed", meta: 0}, {stack: 64});

var cyan_big_bedModel = ModelAPI.newArray();
cyan_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
cyan_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
cyan_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
cyan_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
cyan_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
cyan_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
cyan_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
cyan_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
cyan_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 9);
cyan_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
cyan_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
cyan_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
cyan_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
cyan_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 9);
cyan_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 9);
cyan_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
cyan_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
cyan_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 9);
cyan_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 9);
cyan_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 9);
cyan_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 9);
cyan_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 9);
cyan_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
cyan_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
cyan_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 9);
cyan_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 9);
cyan_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
cyan_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
cyan_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 9);
cyan_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
cyan_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
cyan_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
cyan_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
cyan_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 9);
cyan_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 9);
cyan_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
cyan_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
cyan_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 9);
cyan_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 9);
cyan_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 9);
cyan_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 9);
cyan_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
cyan_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 9);
cyan_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
cyan_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
cyan_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"cyan_big_bed"},{id:"cyan_big_bed"}, Furniture.placeRotatableBlock(BlockID.cyan_big_bed, cyan_big_bedModel));

IDRegistry.genBlockID("light_blue_big_bed");
Block.createBlock("light_blue_big_bed", [
	{name: "Light Blue Big Bed", texture: [["wool_colored_light_blue", 0]], inCreative: false},
	{name: "Light Blue Big Bed", texture: [["wool_colored_light_blue", 0]], inCreative: false},
	{name: "Light Blue Big Bed", texture: [["wool_colored_light_blue", 0]], inCreative: false},
	{name: "Light Blue Big Bed", texture: [["wool_colored_light_blue", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("light_blue_big_bed");
Item.createItem("light_blue_big_bed", "Light Blue Big Bed", {name: "light_blue_big_bed", meta: 0}, {stack: 64});

var light_blue_big_bedModel = ModelAPI.newArray();
light_blue_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
light_blue_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
light_blue_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
light_blue_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
light_blue_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
light_blue_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
light_blue_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
light_blue_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
light_blue_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 3);
light_blue_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
light_blue_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
light_blue_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
light_blue_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
light_blue_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 3);
light_blue_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 3);
light_blue_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
light_blue_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
light_blue_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 3);
light_blue_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 3);
light_blue_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 3);
light_blue_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 3);
light_blue_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 3);
light_blue_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
light_blue_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
light_blue_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 3);
light_blue_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 3);
light_blue_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
light_blue_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
light_blue_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 3);
light_blue_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
light_blue_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
light_blue_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
light_blue_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
light_blue_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 3);
light_blue_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 3);
light_blue_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
light_blue_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
light_blue_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 3);
light_blue_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 3);
light_blue_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 3);
light_blue_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 3);
light_blue_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
light_blue_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 3);
light_blue_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
light_blue_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
light_blue_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"light_blue_big_bed"},{id:"light_blue_big_bed"}, Furniture.placeRotatableBlock(BlockID.light_blue_big_bed, light_blue_big_bedModel));

IDRegistry.genBlockID("blue_big_bed");
Block.createBlock("blue_big_bed", [
	{name: "Blue Big Bed", texture: [["wool_colored_blue", 0]], inCreative: false},
	{name: "Blue Big Bed", texture: [["wool_colored_blue", 0]], inCreative: false},
	{name: "Blue Big Bed", texture: [["wool_colored_blue", 0]], inCreative: false},
	{name: "Blue Big Bed", texture: [["wool_colored_blue", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("blue_big_bed");
Item.createItem("blue_big_bed", "Blue Big Bed", {name: "blue_big_bed", meta: 0}, {stack: 64});

var blue_big_bedModel = ModelAPI.newArray();
blue_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
blue_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
blue_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
blue_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
blue_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
blue_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
blue_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
blue_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
blue_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 11);
blue_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
blue_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
blue_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
blue_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
blue_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 11);
blue_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 11);
blue_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
blue_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
blue_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 11);
blue_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 11);
blue_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 11);
blue_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 11);
blue_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 11);
blue_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
blue_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
blue_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 11);
blue_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 11);
blue_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
blue_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
blue_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 11);
blue_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
blue_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
blue_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
blue_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
blue_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 11);
blue_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 11);
blue_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
blue_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
blue_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 11);
blue_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 11);
blue_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 11);
blue_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 11);
blue_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
blue_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 11);
blue_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
blue_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
blue_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"blue_big_bed"},{id:"blue_big_bed"}, Furniture.placeRotatableBlock(BlockID.blue_big_bed, blue_big_bedModel));

IDRegistry.genBlockID("purple_big_bed");
Block.createBlock("purple_big_bed", [
	{name: "Purple Big Bed", texture: [["wool_colored_purple", 0]], inCreative: false},
	{name: "Purple Big Bed", texture: [["wool_colored_purple", 0]], inCreative: false},
	{name: "Purple Big Bed", texture: [["wool_colored_purple", 0]], inCreative: false},
	{name: "Purple Big Bed", texture: [["wool_colored_purple", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("purple_big_bed");
Item.createItem("purple_big_bed", "Purple Big Bed", {name: "purple_big_bed", meta: 0}, {stack: 64});

var purple_big_bedModel = ModelAPI.newArray();
purple_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
purple_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
purple_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
purple_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
purple_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
purple_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
purple_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
purple_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
purple_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 10);
purple_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
purple_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
purple_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
purple_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
purple_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 10);
purple_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 10);
purple_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
purple_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
purple_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 10);
purple_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 10);
purple_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 10);
purple_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 10);
purple_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 10);
purple_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
purple_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
purple_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 10);
purple_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 10);
purple_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
purple_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
purple_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 10);
purple_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
purple_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
purple_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
purple_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
purple_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 10);
purple_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 10);
purple_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
purple_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
purple_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 10);
purple_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 10);
purple_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 10);
purple_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 10);
purple_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
purple_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 10);
purple_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
purple_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
purple_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"purple_big_bed"},{id:"purple_big_bed"}, Furniture.placeRotatableBlock(BlockID.purple_big_bed, purple_big_bedModel));

IDRegistry.genBlockID("magenta_big_bed");
Block.createBlock("magenta_big_bed", [
	{name: "Magenta Big Bed", texture: [["wool_colored_magenta", 0]], inCreative: false},
	{name: "Magenta Big Bed", texture: [["wool_colored_magenta", 0]], inCreative: false},
	{name: "Magenta Big Bed", texture: [["wool_colored_magenta", 0]], inCreative: false},
	{name: "Magenta Big Bed", texture: [["wool_colored_magenta", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("magenta_big_bed");
Item.createItem("magenta_big_bed", "Magenta Big Bed", {name: "magenta_big_bed", meta: 0}, {stack: 64});

var magenta_big_bedModel = ModelAPI.newArray();
magenta_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
magenta_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
magenta_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
magenta_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
magenta_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
magenta_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
magenta_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
magenta_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
magenta_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 2);
magenta_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
magenta_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
magenta_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
magenta_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
magenta_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 2);
magenta_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 2);
magenta_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
magenta_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
magenta_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 2);
magenta_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 2);
magenta_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 2);
magenta_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 2);
magenta_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 2);
magenta_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
magenta_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
magenta_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 2);
magenta_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 2);
magenta_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
magenta_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
magenta_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 2);
magenta_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
magenta_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
magenta_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
magenta_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
magenta_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 2);
magenta_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 2);
magenta_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
magenta_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
magenta_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 2);
magenta_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 2);
magenta_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 2);
magenta_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 2);
magenta_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
magenta_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 2);
magenta_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
magenta_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
magenta_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"magenta_big_bed"},{id:"magenta_big_bed"}, Furniture.placeRotatableBlock(BlockID.magenta_big_bed, magenta_big_bedModel));

IDRegistry.genBlockID("pink_big_bed");
Block.createBlock("pink_big_bed", [
	{name: "Pink Big Bed", texture: [["wool_colored_pink", 0]], inCreative: false},
	{name: "Pink Big Bed", texture: [["wool_colored_pink", 0]], inCreative: false},
	{name: "Pink Big Bed", texture: [["wool_colored_pink", 0]], inCreative: false},
	{name: "Pink Big Bed", texture: [["wool_colored_pink", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("pink_big_bed");
Item.createItem("pink_big_bed", "Pink Big Bed", {name: "pink_big_bed", meta: 0}, {stack: 64});

var pink_big_bedModel = ModelAPI.newArray();
pink_big_bedModel.addBoxByID("1", 0.1875,0,2.625,0.4375,0.1875,2.875, 5);
pink_big_bedModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,1,0.3125, 5);
pink_big_bedModel.addBoxByID("3", 2,0.1875,0.0625,2.6875,0.3125,0.3125, 5);
pink_big_bedModel.addBoxByID("4", 0.1875,0.1875,0.3125,1,0.3125,1, 5);
pink_big_bedModel.addBoxByID("5", 0.1875,0.1875,2,1,0.3125,2.875, 5);
pink_big_bedModel.addBoxByID("6", 1,0.1875,2,2,0.3125,2.875, 5);
pink_big_bedModel.addBoxByID("7", 2,0.1875,0.3125,2.8125,0.3125,1, 5);
pink_big_bedModel.addBoxByID("8", 1,0.1875,0.0625,2,0.3125,0.3125, 5);
pink_big_bedModel.addBoxByID("9", 1,0.3125,2,2,0.4375,2.875, 35, 6);
pink_big_bedModel.addBoxByID("10", 0.3125,0.1875,0.0625,1,0.3125,0.3125, 5);
pink_big_bedModel.addBoxByID("11", 1,0.8125,0.0625,2,0.9375,0.3125, 5);
pink_big_bedModel.addBoxByID("12", 0.3125,0.5625,0.0625,1,0.6875,0.3125, 5);
pink_big_bedModel.addBoxByID("13", 1,0.5625,0.0625,2,0.6875,0.3125, 5);
pink_big_bedModel.addBoxByID("14", 0.1875,0.3125,0.8125,1,0.4375,1, 35, 6);
pink_big_bedModel.addBoxByID("15", 0.1875,0.3125,2,1,0.4375,2.875, 35, 6);
pink_big_bedModel.addBoxByID("16", 2,0.3125,0.3125,2.8125,0.4375,0.8125, 35);
pink_big_bedModel.addBoxByID("17", 2.0625,0.4375,0.375,2.75,0.5,0.75, 35);
pink_big_bedModel.addBoxByID("18", 2,0.3125,0.8125,2.8125,0.4375,1, 35, 6);
pink_big_bedModel.addBoxByID("19", 0.125,0.0625,2,0.1875,0.375,2.875, 35, 6);
pink_big_bedModel.addBoxByID("20", 0.125,0.0625,0.8125,0.1875,0.375,1, 35, 6);
pink_big_bedModel.addBoxByID("21", 2.8125,0.0625,0.8125,2.875,0.375,1, 35, 6);
pink_big_bedModel.addBoxByID("22", 2,0.0625,2.875,2.8125,0.375,2.9375, 35, 6);
pink_big_bedModel.addBoxByID("23", 1,0.3125,0.3125,2,0.4375,0.8125, 35);
pink_big_bedModel.addBoxByID("24", 1.0625,0.4375,0.375,1.9375,0.5,0.75, 35);
pink_big_bedModel.addBoxByID("25", 2.8125,0.0625,2,2.875,0.375,2.875, 35, 6);
pink_big_bedModel.addBoxByID("26", 1,0.0625,2.875,2,0.375,2.9375, 35, 6);
pink_big_bedModel.addBoxByID("27", 2.6875,0,0.0625,2.9375,1,0.3125, 5);
pink_big_bedModel.addBoxByID("28", 2.5625,0,2.5625,2.8125,0.1875,2.8125, 5);
pink_big_bedModel.addBoxByID("29", 0.1875,0.0625,2.875,1,0.375,2.9375, 35, 6);
pink_big_bedModel.addBoxByID("30", 2,0.1875,2,2.8125,0.3125,2.875, 5);
pink_big_bedModel.addBoxByID("31", 0.3125,0.8125,0.0625,1,0.9375,0.3125, 5);
pink_big_bedModel.addBoxByID("32", 2,0.8125,0.0625,2.6875,0.9375,0.3125, 5);
pink_big_bedModel.addBoxByID("33", 2,0.5625,0.0625,2.6875,0.6875,0.3125, 5);
pink_big_bedModel.addBoxByID("34", 0.125,0.0625,1,0.1875,0.375,2, 35, 6);
pink_big_bedModel.addBoxByID("35", 2.8125,0.0625,1,2.875,0.375,2, 35, 6);
pink_big_bedModel.addBoxByID("36", 0.1875,0.1875,1,1,0.3125,2, 5);
pink_big_bedModel.addBoxByID("37", 2,0.1875,1,2.8125,0.3125,2, 5);
pink_big_bedModel.addBoxByID("38", 1,0.3125,0.8125,2,0.4375,1, 35, 6);
pink_big_bedModel.addBoxByID("39", 0.1875,0.3125,1,1,0.4375,2, 35, 6);
pink_big_bedModel.addBoxByID("40", 2,0.3125,1,2.8125,0.4375,2, 35, 6);
pink_big_bedModel.addBoxByID("41", 2,0.3125,2,2.8125,0.4375,2.875, 35, 6);
pink_big_bedModel.addBoxByID("42", 1,0.1875,1,2,0.3125,2, 5);
pink_big_bedModel.addBoxByID("43", 1,0.3125,1,2,0.4375,2, 35, 6);
pink_big_bedModel.addBoxByID("44", 1,0.1875,0.3125,2,0.3125,1, 5);
pink_big_bedModel.addBoxByID("45", 0.1875,0.3125,0.3125,1,0.4375,0.8125, 35);
pink_big_bedModel.addBoxByID("46", 0.3125,0.4375,0.375,1,0.5,0.75, 35);
Furniture.addReplacementItem({id:"pink_big_bed"},{id:"pink_big_bed"}, Furniture.placeRotatableBlock(BlockID.pink_big_bed, pink_big_bedModel));

Block.setShape(BlockID.white_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.silver_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.gray_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.black_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.brown_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.red_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.orange_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.yellow_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.lime_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.green_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.cyan_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.light_blue_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.blue_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.purple_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.magenta_big_bed,0,0,0,1,0.36,1);
Block.setShape(BlockID.pink_big_bed,0,0,0,1,0.36,1);

Translation.addTranslation("White Big Bed", {ru: "Белая Большая Кровать"});
Translation.addTranslation("Light Gray Big Bed", {ru: "Светло-серая Большая Кровать"});
Translation.addTranslation("Gray Big Bed", {ru: "Серая Большая Кровать"});
Translation.addTranslation("Black Big Bed", {ru: "Черная Большая Кровать"});
Translation.addTranslation("Brown Big Bed", {ru: "Коричневая Большая Кровать"});
Translation.addTranslation("Red Big Bed", {ru: "Красная Большая Кровать"});
Translation.addTranslation("Orange Big Bed", {ru: "Оранжевая Большая Кровать"});
Translation.addTranslation("Yellow Big Bed", {ru: "Желтая Большая Кровать"});
Translation.addTranslation("Lime Big Bed", {ru: "Лаймовая Большая Кровать"});
Translation.addTranslation("Green Big Bed", {ru: "Зеленая Большая Кровать"});
Translation.addTranslation("Cyan Big Bed", {ru: "Бирюзовая Большая Кровать"});
Translation.addTranslation("Light Blue Big Bed", {ru: "Голубая Большая Кровать"});
Translation.addTranslation("Blue Big Bed", {ru: "Синяя Большая Кровать"});
Translation.addTranslation("Purple Big Bed", {ru: "Фиолетвая Большая Кровать"});
Translation.addTranslation("Magenta Big Bed", {ru: "Пурпурная Большая Кровать"});
Translation.addTranslation("Pink Big Bed", {ru: "Розовая Большая Кровать"});

Recipes.addShaped({id: ItemID.white_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,0]);
Recipes.addShaped({id: ItemID.silver_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,8]);
Recipes.addShaped({id: ItemID.gray_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,7]);
Recipes.addShaped({id: ItemID.black_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,15]);
Recipes.addShaped({id: ItemID.brown_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,12]);
Recipes.addShaped({id: ItemID.red_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,14]);
Recipes.addShaped({id: ItemID.orange_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,1]);
Recipes.addShaped({id: ItemID.yellow_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,4]);
Recipes.addShaped({id: ItemID.lime_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,5]);
Recipes.addShaped({id: ItemID.green_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,13]);
Recipes.addShaped({id: ItemID.cyan_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,9]);
Recipes.addShaped({id: ItemID.light_blue_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,3]);
Recipes.addShaped({id: ItemID.blue_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,11]);
Recipes.addShaped({id: ItemID.purple_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,10]);
Recipes.addShaped({id: ItemID.magenta_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,2]);
Recipes.addShaped({id: ItemID.pink_big_bed, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,6]);