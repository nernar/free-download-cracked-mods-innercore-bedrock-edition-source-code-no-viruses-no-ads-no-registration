IDRegistry.genBlockID("white_scarecrow");
Block.createBlock("white_scarecrow", [
	{name: "white_scarecrow", texture: [["wool_colored_white", 0]], inCreative: false},
	{name: "white_scarecrow", texture: [["wool_colored_white", 0]], inCreative: false},
	{name: "white_scarecrow", texture: [["wool_colored_white", 0]], inCreative: false},
	{name: "white_scarecrow", texture: [["wool_colored_white", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("white_scarecrow");
Item.createItem("white_scarecrow", "White Scarecrow", {name: "white_scarecrow", meta: 0}, {stack: 64});

var white_scarecrowModel = ModelAPI.newArray();
white_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
white_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
white_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
white_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
white_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
white_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
white_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
white_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
white_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
white_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
white_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35);
white_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35);
white_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35);
white_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35);
white_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35);
white_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35);
white_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35);
white_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35);
white_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
white_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35);
white_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35);
white_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35);
white_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
white_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
white_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
white_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
white_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
white_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35);
white_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35);
white_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35);
white_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35);
white_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35);
white_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35);
Furniture.addReplacementItem({id:"white_scarecrow"},{id:"white_scarecrow"}, Furniture.placeRotatableBlock(BlockID.white_scarecrow, white_scarecrowModel));

IDRegistry.genBlockID("silver_scarecrow");
Block.createBlock("silver_scarecrow", [
	{name: "silver_scarecrow", texture: [["wool_colored_silver", 0]], inCreative: false},
	{name: "silver_scarecrow", texture: [["wool_colored_silver", 0]], inCreative: false},
	{name: "silver_scarecrow", texture: [["wool_colored_silver", 0]], inCreative: false},
	{name: "silver_scarecrow", texture: [["wool_colored_silver", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("silver_scarecrow");
Item.createItem("silver_scarecrow", "Light Gray Scarecrow", {name: "silver_scarecrow", meta: 0}, {stack: 64});

var silver_scarecrowModel = ModelAPI.newArray();
silver_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
silver_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
silver_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
silver_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
silver_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
silver_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
silver_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
silver_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
silver_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
silver_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
silver_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 8);
silver_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 8);
silver_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 8);
silver_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 8);
silver_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 8);
silver_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 8);
silver_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 8);
silver_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 8);
silver_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
silver_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 8);
silver_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 8);
silver_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 8);
silver_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
silver_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
silver_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
silver_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
silver_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
silver_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 8);
silver_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 8);
silver_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 8);
silver_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 8);
silver_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 8);
silver_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 8);
Furniture.addReplacementItem({id:"silver_scarecrow"},{id:"silver_scarecrow"}, Furniture.placeRotatableBlock(BlockID.silver_scarecrow, silver_scarecrowModel));

IDRegistry.genBlockID("gray_scarecrow");
Block.createBlock("gray_scarecrow", [
	{name: "gray_scarecrow", texture: [["wool_colored_gray", 0]], inCreative: false},
	{name: "gray_scarecrow", texture: [["wool_colored_gray", 0]], inCreative: false},
	{name: "gray_scarecrow", texture: [["wool_colored_gray", 0]], inCreative: false},
	{name: "gray_scarecrow", texture: [["wool_colored_gray", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("gray_scarecrow");
Item.createItem("gray_scarecrow", "Gray Scarecrow", {name: "gray_scarecrow", meta: 0}, {stack: 64});

var gray_scarecrowModel = ModelAPI.newArray();
gray_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
gray_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
gray_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
gray_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
gray_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
gray_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
gray_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
gray_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
gray_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
gray_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
gray_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 8);
gray_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 8);
gray_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 8);
gray_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 8);
gray_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 8);
gray_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 8);
gray_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 8);
gray_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 8);
gray_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
gray_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 8);
gray_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 8);
gray_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 8);
gray_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
gray_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
gray_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
gray_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
gray_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
gray_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 8);
gray_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 8);
gray_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 8);
gray_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 8);
gray_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 8);
gray_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 8);
Furniture.addReplacementItem({id:"gray_scarecrow"},{id:"gray_scarecrow"}, Furniture.placeRotatableBlock(BlockID.gray_scarecrow, gray_scarecrowModel));

IDRegistry.genBlockID("black_scarecrow");
Block.createBlock("black_scarecrow", [
	{name: "black_scarecrow", texture: [["wool_colored_black", 0]], inCreative: false},
	{name: "black_scarecrow", texture: [["wool_colored_black", 0]], inCreative: false},
	{name: "black_scarecrow", texture: [["wool_colored_black", 0]], inCreative: false},
	{name: "black_scarecrow", texture: [["wool_colored_black", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("black_scarecrow");
Item.createItem("black_scarecrow", "Black Scarecrow", {name: "black_scarecrow", meta: 0}, {stack: 64});

var black_scarecrowModel = ModelAPI.newArray();
black_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
black_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
black_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
black_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
black_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
black_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
black_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
black_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
black_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
black_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
black_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 15);
black_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 15);
black_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 15);
black_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 15);
black_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 15);
black_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 15);
black_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 15);
black_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 15);
black_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
black_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 15);
black_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 15);
black_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 15);
black_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
black_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
black_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
black_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
black_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
black_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 15);
black_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 15);
black_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 15);
black_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 15);
black_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 15);
black_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 15);
Furniture.addReplacementItem({id:"black_scarecrow"},{id:"black_scarecrow"}, Furniture.placeRotatableBlock(BlockID.black_scarecrow, black_scarecrowModel));

IDRegistry.genBlockID("brown_scarecrow");
Block.createBlock("brown_scarecrow", [
	{name: "brown_scarecrow", texture: [["wool_colored_brown", 0]], inCreative: false},
	{name: "brown_scarecrow", texture: [["wool_colored_brown", 0]], inCreative: false},
	{name: "brown_scarecrow", texture: [["wool_colored_brown", 0]], inCreative: false},
	{name: "brown_scarecrow", texture: [["wool_colored_brown", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("brown_scarecrow");
Item.createItem("brown_scarecrow", "Brown Scarecrow", {name: "brown_scarecrow", meta: 0}, {stack: 64});

var brown_scarecrowModel = ModelAPI.newArray();
brown_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
brown_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
brown_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
brown_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
brown_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
brown_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
brown_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
brown_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
brown_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
brown_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
brown_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 12);
brown_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 12);
brown_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 12);
brown_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 12);
brown_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 12);
brown_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 12);
brown_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 12);
brown_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 12);
brown_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
brown_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 12);
brown_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 12);
brown_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 12);
brown_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
brown_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
brown_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
brown_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
brown_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
brown_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 12);
brown_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 12);
brown_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 12);
brown_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 12);
brown_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 12);
brown_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 12);
Furniture.addReplacementItem({id:"brown_scarecrow"},{id:"brown_scarecrow"}, Furniture.placeRotatableBlock(BlockID.brown_scarecrow, brown_scarecrowModel));

IDRegistry.genBlockID("red_scarecrow");
Block.createBlock("red_scarecrow", [
	{name: "red_scarecrow", texture: [["wool_colored_red", 0]], inCreative: false},
	{name: "red_scarecrow", texture: [["wool_colored_red", 0]], inCreative: false},
	{name: "red_scarecrow", texture: [["wool_colored_red", 0]], inCreative: false},
	{name: "red_scarecrow", texture: [["wool_colored_red", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("red_scarecrow");
Item.createItem("red_scarecrow", "Red Scarecrow", {name: "red_scarecrow", meta: 0}, {stack: 64});

var red_scarecrowModel = ModelAPI.newArray();
red_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
red_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
red_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
red_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
red_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
red_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
red_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
red_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
red_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
red_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
red_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 14);
red_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 14);
red_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 14);
red_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 14);
red_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 14);
red_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 14);
red_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 14);
red_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 14);
red_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
red_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 14);
red_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 14);
red_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 14);
red_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
red_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
red_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
red_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
red_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
red_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 14);
red_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 14);
red_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 14);
red_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 14);
red_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 14);
red_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 14);
Furniture.addReplacementItem({id:"red_scarecrow"},{id:"red_scarecrow"}, Furniture.placeRotatableBlock(BlockID.red_scarecrow, red_scarecrowModel));

IDRegistry.genBlockID("orange_scarecrow");
Block.createBlock("orange_scarecrow", [
	{name: "orange_scarecrow", texture: [["wool_colored_orange", 0]], inCreative: false},
	{name: "orange_scarecrow", texture: [["wool_colored_orange", 0]], inCreative: false},
	{name: "orange_scarecrow", texture: [["wool_colored_orange", 0]], inCreative: false},
	{name: "orange_scarecrow", texture: [["wool_colored_orange", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("orange_scarecrow");
Item.createItem("orange_scarecrow", "Orange Scarecrow", {name: "orange_scarecrow", meta: 0}, {stack: 64});

var orange_scarecrowModel = ModelAPI.newArray();
orange_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
orange_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
orange_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
orange_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
orange_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
orange_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
orange_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
orange_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
orange_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
orange_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
orange_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 1);
orange_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 1);
orange_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 1);
orange_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 1);
orange_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 1);
orange_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 1);
orange_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 1);
orange_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 1);
orange_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
orange_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 1);
orange_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 1);
orange_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 1);
orange_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
orange_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
orange_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
orange_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
orange_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
orange_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 1);
orange_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 1);
orange_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 1);
orange_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 1);
orange_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 1);
orange_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 1);
Furniture.addReplacementItem({id:"orange_scarecrow"},{id:"orange_scarecrow"}, Furniture.placeRotatableBlock(BlockID.orange_scarecrow, orange_scarecrowModel));

IDRegistry.genBlockID("yellow_scarecrow");
Block.createBlock("yellow_scarecrow", [
	{name: "yellow_scarecrow", texture: [["wool_colored_yellow", 0]], inCreative: false},
	{name: "yellow_scarecrow", texture: [["wool_colored_yellow", 0]], inCreative: false},
	{name: "yellow_scarecrow", texture: [["wool_colored_yellow", 0]], inCreative: false},
	{name: "yellow_scarecrow", texture: [["wool_colored_yellow", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("yellow_scarecrow");
Item.createItem("yellow_scarecrow", "Yellow Scarecrow", {name: "yellow_scarecrow", meta: 0}, {stack: 64});

var yellow_scarecrowModel = ModelAPI.newArray();
yellow_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
yellow_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
yellow_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
yellow_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
yellow_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
yellow_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
yellow_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
yellow_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
yellow_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
yellow_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
yellow_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 4);
yellow_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 4);
yellow_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 4);
yellow_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 4);
yellow_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 4);
yellow_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 4);
yellow_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 4);
yellow_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 4);
yellow_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
yellow_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 4);
yellow_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 4);
yellow_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 4);
yellow_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
yellow_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
yellow_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
yellow_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
yellow_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
yellow_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 4);
yellow_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 4);
yellow_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 4);
yellow_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 4);
yellow_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 4);
yellow_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 4);
Furniture.addReplacementItem({id:"yellow_scarecrow"},{id:"yellow_scarecrow"}, Furniture.placeRotatableBlock(BlockID.yellow_scarecrow, yellow_scarecrowModel));

IDRegistry.genBlockID("lime_scarecrow");
Block.createBlock("lime_scarecrow", [
	{name: "lime_scarecrow", texture: [["wool_colored_lime", 0]], inCreative: false},
	{name: "lime_scarecrow", texture: [["wool_colored_lime", 0]], inCreative: false},
	{name: "lime_scarecrow", texture: [["wool_colored_lime", 0]], inCreative: false},
	{name: "lime_scarecrow", texture: [["wool_colored_lime", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lime_scarecrow");
Item.createItem("lime_scarecrow", "Lime Scarecrow", {name: "lime_scarecrow", meta: 0}, {stack: 64});

var lime_scarecrowModel = ModelAPI.newArray();
lime_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
lime_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
lime_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
lime_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
lime_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
lime_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
lime_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
lime_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
lime_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
lime_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
lime_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 5);
lime_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 5);
lime_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 5);
lime_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 5);
lime_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 5);
lime_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 5);
lime_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 5);
lime_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 5);
lime_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
lime_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 5);
lime_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 5);
lime_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 5);
lime_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
lime_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
lime_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
lime_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
lime_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
lime_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 5);
lime_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 5);
lime_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 5);
lime_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 5);
lime_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 5);
lime_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 5);
Furniture.addReplacementItem({id:"lime_scarecrow"},{id:"lime_scarecrow"}, Furniture.placeRotatableBlock(BlockID.lime_scarecrow, lime_scarecrowModel));

IDRegistry.genBlockID("green_scarecrow");
Block.createBlock("green_scarecrow", [
	{name: "green_scarecrow", texture: [["wool_colored_green", 0]], inCreative: false},
	{name: "green_scarecrow", texture: [["wool_colored_green", 0]], inCreative: false},
	{name: "green_scarecrow", texture: [["wool_colored_green", 0]], inCreative: false},
	{name: "green_scarecrow", texture: [["wool_colored_green", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("green_scarecrow");
Item.createItem("green_scarecrow", "Green Scarecrow", {name: "green_scarecrow", meta: 0}, {stack: 64});

var green_scarecrowModel = ModelAPI.newArray();
green_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
green_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
green_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
green_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
green_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
green_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
green_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
green_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
green_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
green_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
green_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 13);
green_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 13);
green_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 13);
green_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 13);
green_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 13);
green_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 13);
green_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 13);
green_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 13);
green_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
green_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 13);
green_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 13);
green_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 13);
green_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
green_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
green_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
green_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
green_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
green_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 13);
green_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 13);
green_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 13);
green_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 13);
green_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 13);
green_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 13);
Furniture.addReplacementItem({id:"green_scarecrow"},{id:"green_scarecrow"}, Furniture.placeRotatableBlock(BlockID.green_scarecrow, green_scarecrowModel));

IDRegistry.genBlockID("cyan_scarecrow");
Block.createBlock("cyan_scarecrow", [
	{name: "cyan_scarecrow", texture: [["wool_colored_cyan", 0]], inCreative: false},
	{name: "cyan_scarecrow", texture: [["wool_colored_cyan", 0]], inCreative: false},
	{name: "cyan_scarecrow", texture: [["wool_colored_cyan", 0]], inCreative: false},
	{name: "cyan_scarecrow", texture: [["wool_colored_cyan", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cyan_scarecrow");
Item.createItem("cyan_scarecrow", "Cyan Scarecrow", {name: "cyan_scarecrow", meta: 0}, {stack: 64});

var cyan_scarecrowModel = ModelAPI.newArray();
cyan_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
cyan_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
cyan_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
cyan_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
cyan_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
cyan_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
cyan_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
cyan_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
cyan_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
cyan_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
cyan_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 9);
cyan_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 9);
cyan_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 9);
cyan_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 9);
cyan_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 9);
cyan_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 9);
cyan_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 9);
cyan_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 9);
cyan_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
cyan_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 9);
cyan_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 9);
cyan_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 9);
cyan_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
cyan_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
cyan_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
cyan_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
cyan_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
cyan_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 9);
cyan_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 9);
cyan_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 9);
cyan_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 9);
cyan_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 9);
cyan_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 9);
Furniture.addReplacementItem({id:"cyan_scarecrow"},{id:"cyan_scarecrow"}, Furniture.placeRotatableBlock(BlockID.cyan_scarecrow, cyan_scarecrowModel));

IDRegistry.genBlockID("light_blue_scarecrow");
Block.createBlock("light_blue_scarecrow", [
	{name: "light_blue_scarecrow", texture: [["wool_colored_light_blue", 0]], inCreative: false},
	{name: "light_blue_scarecrow", texture: [["wool_colored_light_blue", 0]], inCreative: false},
	{name: "light_blue_scarecrow", texture: [["wool_colored_light_blue", 0]], inCreative: false},
	{name: "light_blue_scarecrow", texture: [["wool_colored_light_blue", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("light_blue_scarecrow");
Item.createItem("light_blue_scarecrow", "Light Blue Scarecrow", {name: "light_blue_scarecrow", meta: 0}, {stack: 64});

var light_blue_scarecrowModel = ModelAPI.newArray();
light_blue_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
light_blue_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
light_blue_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
light_blue_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
light_blue_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
light_blue_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
light_blue_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
light_blue_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
light_blue_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
light_blue_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
light_blue_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 3);
light_blue_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 3);
light_blue_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 3);
light_blue_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 3);
light_blue_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 3);
light_blue_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 3);
light_blue_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 3);
light_blue_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 3);
light_blue_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
light_blue_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 3);
light_blue_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 3);
light_blue_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 3);
light_blue_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
light_blue_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
light_blue_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
light_blue_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
light_blue_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
light_blue_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 3);
light_blue_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 3);
light_blue_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 3);
light_blue_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 3);
light_blue_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 3);
light_blue_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 3);
Furniture.addReplacementItem({id:"light_blue_scarecrow"},{id:"light_blue_scarecrow"}, Furniture.placeRotatableBlock(BlockID.light_blue_scarecrow, light_blue_scarecrowModel));

IDRegistry.genBlockID("blue_scarecrow");
Block.createBlock("blue_scarecrow", [
	{name: "blue_scarecrow", texture: [["wool_colored_blue", 0]], inCreative: false},
	{name: "blue_scarecrow", texture: [["wool_colored_blue", 0]], inCreative: false},
	{name: "blue_scarecrow", texture: [["wool_colored_blue", 0]], inCreative: false},
	{name: "blue_scarecrow", texture: [["wool_colored_blue", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("blue_scarecrow");
Item.createItem("blue_scarecrow", "Blue Scarecrow", {name: "blue_scarecrow", meta: 0}, {stack: 64});

var blue_scarecrowModel = ModelAPI.newArray();
blue_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
blue_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
blue_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
blue_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
blue_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
blue_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
blue_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
blue_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
blue_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
blue_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
blue_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 11);
blue_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 11);
blue_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 11);
blue_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 11);
blue_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 11);
blue_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 11);
blue_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 11);
blue_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 11);
blue_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
blue_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 11);
blue_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 11);
blue_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 11);
blue_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
blue_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
blue_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
blue_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
blue_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
blue_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 11);
blue_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 11);
blue_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 11);
blue_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 11);
blue_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 11);
blue_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 11);
Furniture.addReplacementItem({id:"blue_scarecrow"},{id:"blue_scarecrow"}, Furniture.placeRotatableBlock(BlockID.blue_scarecrow, blue_scarecrowModel));

IDRegistry.genBlockID("purple_scarecrow");
Block.createBlock("purple_scarecrow", [
	{name: "purple_scarecrow", texture: [["wool_colored_purple", 0]], inCreative: false},
	{name: "purple_scarecrow", texture: [["wool_colored_purple", 0]], inCreative: false},
	{name: "purple_scarecrow", texture: [["wool_colored_purple", 0]], inCreative: false},
	{name: "purple_scarecrow", texture: [["wool_colored_purple", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("purple_scarecrow");
Item.createItem("purple_scarecrow", "Purple Scarecrow", {name: "purple_scarecrow", meta: 0}, {stack: 64});

var purple_scarecrowModel = ModelAPI.newArray();
purple_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
purple_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
purple_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
purple_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
purple_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
purple_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
purple_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
purple_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
purple_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
purple_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
purple_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 10);
purple_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 10);
purple_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 10);
purple_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 10);
purple_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 10);
purple_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 10);
purple_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 10);
purple_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 10);
purple_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
purple_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 10);
purple_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 10);
purple_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 10);
purple_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
purple_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
purple_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
purple_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
purple_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
purple_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 10);
purple_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 10);
purple_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 10);
purple_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 10);
purple_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 10);
purple_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 10);
Furniture.addReplacementItem({id:"purple_scarecrow"},{id:"purple_scarecrow"}, Furniture.placeRotatableBlock(BlockID.purple_scarecrow, purple_scarecrowModel));

IDRegistry.genBlockID("magenta_scarecrow");
Block.createBlock("magenta_scarecrow", [
	{name: "magenta_scarecrow", texture: [["wool_colored_magenta", 0]], inCreative: false},
	{name: "magenta_scarecrow", texture: [["wool_colored_magenta", 0]], inCreative: false},
	{name: "magenta_scarecrow", texture: [["wool_colored_magenta", 0]], inCreative: false},
	{name: "magenta_scarecrow", texture: [["wool_colored_magenta", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("magenta_scarecrow");
Item.createItem("magenta_scarecrow", "Magenta Scarecrow", {name: "magenta_scarecrow", meta: 0}, {stack: 64});

var magenta_scarecrowModel = ModelAPI.newArray();
magenta_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
magenta_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
magenta_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
magenta_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
magenta_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
magenta_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
magenta_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
magenta_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
magenta_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
magenta_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
magenta_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 2);
magenta_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 2);
magenta_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 2);
magenta_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 2);
magenta_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 2);
magenta_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 2);
magenta_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 2);
magenta_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 2);
magenta_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
magenta_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 2);
magenta_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 2);
magenta_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 2);
magenta_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
magenta_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
magenta_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
magenta_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
magenta_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
magenta_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 2);
magenta_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 2);
magenta_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 2);
magenta_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 2);
magenta_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 2);
magenta_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 2);
Furniture.addReplacementItem({id:"magenta_scarecrow"},{id:"magenta_scarecrow"}, Furniture.placeRotatableBlock(BlockID.magenta_scarecrow, magenta_scarecrowModel));

IDRegistry.genBlockID("pink_scarecrow");
Block.createBlock("pink_scarecrow", [
	{name: "pink_scarecrow", texture: [["wool_colored_pink", 0]], inCreative: false},
	{name: "pink_scarecrow", texture: [["wool_colored_pink", 0]], inCreative: false},
	{name: "pink_scarecrow", texture: [["wool_colored_pink", 0]], inCreative: false},
	{name: "pink_scarecrow", texture: [["wool_colored_pink", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("pink_scarecrow");
Item.createItem("pink_scarecrow", "Pink Scarecrow", {name: "pink_scarecrow", meta: 0}, {stack: 64});

var pink_scarecrowModel = ModelAPI.newArray();
pink_scarecrowModel.addBoxByID("1", 0.375,1,0.375,0.625,2,0.625, 5);
pink_scarecrowModel.addBoxByID("2", 0.375,0,0.375,0.625,1,0.625, 5);
pink_scarecrowModel.addBoxByTextures("3", 0.0625,2,0.0625,0.9375,2.9375,0.125, [["pumpkin_side", 0]]);
pink_scarecrowModel.addBoxByTextures("4", 0.9375,2,0.0625,1,3,0.9375, [["pumpkin_side", 0]]);
pink_scarecrowModel.addBoxByTextures("5", 0,2,0.0625,0.0625,3,0.9375, [["pumpkin_side", 0]]);
pink_scarecrowModel.addBoxByTextures("6", 0,2,0.9375,1,3,1, [["pumpkin_front", 0]]);
pink_scarecrowModel.addBoxByID("7", -0.625,1.5,0.375,0,1.75,0.625, 5);
pink_scarecrowModel.addBoxByID("8", 0,1.5,0.375,0.375,1.75,0.625, 5);
pink_scarecrowModel.addBoxByID("9", 0.625,1.5,0.375,1,1.75,0.625, 5);
pink_scarecrowModel.addBoxByID("10", 1,1.5,0.375,1.625,1.75,0.625, 5);
pink_scarecrowModel.addBoxByID("11", 0,0.6875,0.25,1,1,0.3125, 35, 6);
pink_scarecrowModel.addBoxByID("12", 0.375,1.625,0.6875,0.625,1.75,0.75, 35, 6);
pink_scarecrowModel.addBoxByID("13", 0,1.625,0.6875,0.125,2,0.75, 35, 6);
pink_scarecrowModel.addBoxByID("14", 0.875,1.625,0.6875,1,2,0.75, 35, 6);
pink_scarecrowModel.addBoxByID("15", 0.75,1.625,0.6875,0.875,1.9375,0.75, 35, 6);
pink_scarecrowModel.addBoxByID("16", 0.125,1.625,0.6875,0.25,1.9375,0.75, 35, 6);
pink_scarecrowModel.addBoxByID("17", 0.25,1.625,0.6875,0.375,1.875,0.75, 35, 6);
pink_scarecrowModel.addBoxByID("18", 0,1,0.3125,1,2,0.375, 35, 6);
pink_scarecrowModel.addBoxByID("19", 0.0625,2.9375,0.0625,0.9375,3,0.9375, 170);
pink_scarecrowModel.addBoxByID("20", 0,1,0.6875,1,1.625,0.75, 35, 6);
pink_scarecrowModel.addBoxByID("21", 0.625,1.625,0.6875,0.75,1.875,0.75, 35, 6);
pink_scarecrowModel.addBoxByID("22", 0,0.6875,0.75,1,1,0.8125, 35, 6);
pink_scarecrowModel.addBoxByID("23", 0,3,0,1,3.3125,1, 170);
pink_scarecrowModel.addBoxByID("24", 1,3,0,1.5625,3.0625,1, 170);
pink_scarecrowModel.addBoxByID("25", 0,3,1,1,3.0625,1.5625, 170);
pink_scarecrowModel.addBoxByID("26", 0,3,-0.5625,1,3.0625,0, 170);
pink_scarecrowModel.addBoxByID("27", -0.5625,3,0,0,3.0625,1, 170);
pink_scarecrowModel.addBoxByID("28", -0.0625,0.6875,0.3125,0,1,0.75, 35, 6);
pink_scarecrowModel.addBoxByID("29", 1,1.75,0.375,1.0625,2,0.6875, 35, 6);
pink_scarecrowModel.addBoxByID("30", -0.0625,1.75,0.375,0,2,0.6875, 35, 6);
pink_scarecrowModel.addBoxByID("31", -0.0625,1,0.375,0,1.5,0.6875, 35, 6);
pink_scarecrowModel.addBoxByID("32", 1,1,0.375,1.0625,1.5,0.6875, 35, 6);
pink_scarecrowModel.addBoxByID("33", 1,0.6875,0.3125,1.0625,1,0.75, 35, 6);
Furniture.addReplacementItem({id:"pink_scarecrow"},{id:"pink_scarecrow"}, Furniture.placeRotatableBlock(BlockID.pink_scarecrow, pink_scarecrowModel));

//shapes
Block.setShape(BlockID.white_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.silver_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.gray_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.black_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.brown_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.red_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.orange_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.yellow_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.lime_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.green_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.cyan_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.light_blue_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.blue_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.purple_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.magenta_scarecrow,0,0,0,1,3,1);
Block.setShape(BlockID.pink_scarecrow,0,0,0,1,3,1);

//recipes
Recipes.addShaped({id: ItemID.white_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,0]);
Recipes.addShaped({id: ItemID.silver_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,8]);
Recipes.addShaped({id: ItemID.gray_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,7]);
Recipes.addShaped({id: ItemID.black_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,15]);
Recipes.addShaped({id: ItemID.brown_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,12]);
Recipes.addShaped({id: ItemID.red_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,14]);
Recipes.addShaped({id: ItemID.orange_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,1]);
Recipes.addShaped({id: ItemID.yellow_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,4]);
Recipes.addShaped({id: ItemID.lime_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,5]);
Recipes.addShaped({id: ItemID.green_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,13]);
Recipes.addShaped({id: ItemID.cyan_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,9]);
Recipes.addShaped({id: ItemID.light_blue_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,3]);
Recipes.addShaped({id: ItemID.blue_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,11]);
Recipes.addShaped({id: ItemID.purple_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,10]);
Recipes.addShaped({id: ItemID.magenta_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,2]);
Recipes.addShaped({id: ItemID.pink_scarecrow, count: 1, data: 0}, ["cac", "sxs", " s "], ['c', 296,0, 'a', 86,0, 's', 85,0, 'x', 35,6]);

//translation
Translation.addTranslation("White Scarecrow", {ru: "Белая Пугало"});
Translation.addTranslation("Light Gray Scarecrow", {ru: "Светло-серая Пугало"});
Translation.addTranslation("Gray Scarecrow", {ru: "Серая Пугало"});
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