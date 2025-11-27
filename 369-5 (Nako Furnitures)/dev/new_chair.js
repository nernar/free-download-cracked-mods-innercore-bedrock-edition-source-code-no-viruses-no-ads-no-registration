IDRegistry.genBlockID("white_chair");
Block.createBlock("white_chair", [
	{name: "White Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "White Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "White Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "White Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("white_chair");
Item.createItem("white_chair", "White Chair", {name: "white_chair", meta: 0}, {stack: 64});

var white_chairModel = ModelAPI.newArray();
white_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35);
white_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
white_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
white_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
white_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
white_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
white_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
white_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
white_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
white_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
white_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
white_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
white_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
white_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
white_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35);
white_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
white_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
white_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
white_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
white_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
white_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
white_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
white_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
white_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
white_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35);
Furniture.addReplacementItem({id:"white_chair"},{id:"white_chair"}, Furniture.placeRotatableBlock(BlockID.white_chair, white_chairModel));

IDRegistry.genBlockID("silver_chair");
Block.createBlock("silver_chair", [
	{name: "Light gray Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Light gray Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Light gray Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Light gray Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("silver_chair");
Item.createItem("silver_chair", "Light Gray Chair", {name: "silver_chair", meta: 0}, {stack: 64});

var silver_chairModel = ModelAPI.newArray();
silver_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 8);
silver_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
silver_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
silver_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
silver_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
silver_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
silver_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
silver_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
silver_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
silver_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
silver_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
silver_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
silver_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
silver_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
silver_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 8);
silver_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
silver_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
silver_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
silver_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
silver_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
silver_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
silver_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
silver_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
silver_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
silver_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 8);
Furniture.addReplacementItem({id:"silver_chair"},{id:"silver_chair"}, Furniture.placeRotatableBlock(BlockID.silver_chair, silver_chairModel));

IDRegistry.genBlockID("gray_chair");
Block.createBlock("gray_chair", [
	{name: "gray Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "gray Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "gray Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "gray Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("gray_chair");
Item.createItem("gray_chair", "Gray Chair", {name: "gray_chair", meta: 0}, {stack: 64});

var gray_chairModel = ModelAPI.newArray();
gray_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 7);
gray_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
gray_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
gray_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
gray_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
gray_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
gray_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
gray_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
gray_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
gray_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
gray_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
gray_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
gray_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
gray_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
gray_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 7);
gray_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
gray_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
gray_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
gray_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
gray_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
gray_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
gray_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
gray_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
gray_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
gray_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 7);
Furniture.addReplacementItem({id:"gray_chair"},{id:"gray_chair"}, Furniture.placeRotatableBlock(BlockID.gray_chair, gray_chairModel));

IDRegistry.genBlockID("black_chair");
Block.createBlock("black_chair", [
	{name: "Black Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Black Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Black Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Black Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("black_chair");
Item.createItem("black_chair", "Black Chair", {name: "black_chair", meta: 0}, {stack: 64});

var black_chairModel = ModelAPI.newArray();
black_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 15);
black_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
black_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
black_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
black_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
black_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
black_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
black_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
black_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
black_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
black_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
black_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
black_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
black_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
black_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 15);
black_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
black_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
black_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
black_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
black_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
black_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
black_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
black_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
black_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
black_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 15);
Furniture.addReplacementItem({id:"black_chair"},{id:"black_chair"}, Furniture.placeRotatableBlock(BlockID.black_chair, black_chairModel));

IDRegistry.genBlockID("brown_chair");
Block.createBlock("brown_chair", [
	{name: "Brown Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Brown Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Brown Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Brown Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("brown_chair");
Item.createItem("brown_chair", "Brown Chair", {name: "brown_chair", meta: 0}, {stack: 64});

var brown_chairModel = ModelAPI.newArray();
brown_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 12);
brown_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
brown_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
brown_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
brown_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
brown_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
brown_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
brown_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
brown_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
brown_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
brown_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
brown_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
brown_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
brown_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
brown_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 12);
brown_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
brown_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
brown_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
brown_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
brown_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
brown_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
brown_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
brown_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
brown_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
brown_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 12);
Furniture.addReplacementItem({id:"brown_chair"},{id:"brown_chair"}, Furniture.placeRotatableBlock(BlockID.brown_chair, brown_chairModel));

IDRegistry.genBlockID("red_chair");
Block.createBlock("red_chair", [
	{name: "Red Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Red Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Red Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Red Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("red_chair");
Item.createItem("red_chair", "Red Chair", {name: "red_chair", meta: 0}, {stack: 64});

var red_chairModel = ModelAPI.newArray();
red_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 14);
red_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
red_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
red_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
red_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
red_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
red_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
red_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
red_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
red_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
red_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
red_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
red_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
red_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
red_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 14);
red_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
red_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
red_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
red_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
red_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
red_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
red_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
red_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
red_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
red_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 14);
Furniture.addReplacementItem({id:"red_chair"},{id:"red_chair"}, Furniture.placeRotatableBlock(BlockID.red_chair, red_chairModel));

IDRegistry.genBlockID("orange_chair");
Block.createBlock("orange_chair", [
	{name: "Orange Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Orange Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Orange Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Orange Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("orange_chair");
Item.createItem("orange_chair", "Orange Chair", {name: "orange_chair", meta: 0}, {stack: 64});

var orange_chairModel = ModelAPI.newArray();
orange_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 1);
orange_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
orange_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
orange_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
orange_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
orange_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
orange_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
orange_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
orange_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
orange_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
orange_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
orange_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
orange_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
orange_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
orange_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 1);
orange_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
orange_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
orange_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
orange_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
orange_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
orange_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
orange_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
orange_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
orange_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
orange_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 1);
Furniture.addReplacementItem({id:"orange_chair"},{id:"orange_chair"}, Furniture.placeRotatableBlock(BlockID.orange_chair, orange_chairModel));

IDRegistry.genBlockID("yellow_chair");
Block.createBlock("yellow_chair", [
	{name: "Yellow Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Yellow Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Yellow Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Yellow Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("yellow_chair");
Item.createItem("yellow_chair", "Yellow Chair", {name: "yellow_chair", meta: 0}, {stack: 64});

var yellow_chairModel = ModelAPI.newArray();
yellow_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 4);
yellow_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
yellow_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
yellow_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
yellow_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
yellow_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
yellow_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
yellow_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
yellow_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
yellow_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
yellow_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
yellow_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
yellow_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
yellow_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
yellow_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 4);
yellow_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
yellow_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
yellow_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
yellow_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
yellow_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
yellow_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
yellow_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
yellow_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
yellow_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
yellow_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 4);
Furniture.addReplacementItem({id:"yellow_chair"},{id:"yellow_chair"}, Furniture.placeRotatableBlock(BlockID.yellow_chair, yellow_chairModel));

IDRegistry.genBlockID("lime_chair");
Block.createBlock("lime_chair", [
	{name: "Lime Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Lime Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Lime Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Lime Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lime_chair");
Item.createItem("lime_chair", "Lime Chair", {name: "lime_chair", meta: 0}, {stack: 64});

var lime_chairModel = ModelAPI.newArray();
lime_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 5);
lime_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
lime_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
lime_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
lime_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
lime_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
lime_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
lime_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
lime_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
lime_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
lime_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
lime_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
lime_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
lime_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
lime_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 5);
lime_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
lime_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
lime_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
lime_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
lime_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
lime_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
lime_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
lime_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
lime_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
lime_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 5);
Furniture.addReplacementItem({id:"lime_chair"},{id:"lime_chair"}, Furniture.placeRotatableBlock(BlockID.lime_chair, lime_chairModel));

IDRegistry.genBlockID("green_chair");
Block.createBlock("green_chair", [
	{name: "Green Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Green Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Green Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Green Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("green_chair");
Item.createItem("green_chair", "Green Chair", {name: "green_chair", meta: 0}, {stack: 64});

var green_chairModel = ModelAPI.newArray();
green_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 13);
green_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
green_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
green_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
green_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
green_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
green_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
green_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
green_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
green_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
green_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
green_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
green_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
green_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
green_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 13);
green_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
green_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
green_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
green_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
green_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
green_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
green_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
green_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
green_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
green_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 13);
Furniture.addReplacementItem({id:"green_chair"},{id:"green_chair"}, Furniture.placeRotatableBlock(BlockID.green_chair, green_chairModel));

IDRegistry.genBlockID("cyan_chair");
Block.createBlock("cyan_chair", [
	{name: "Cyan Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Cyan Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Cyan Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Cyan Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cyan_chair");
Item.createItem("cyan_chair", "Cyan Chair", {name: "cyan_chair", meta: 0}, {stack: 64});

var cyan_chairModel = ModelAPI.newArray();
cyan_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 9);
cyan_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
cyan_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
cyan_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
cyan_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
cyan_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
cyan_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
cyan_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
cyan_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
cyan_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
cyan_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
cyan_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
cyan_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
cyan_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
cyan_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 9);
cyan_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
cyan_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
cyan_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
cyan_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
cyan_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
cyan_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
cyan_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
cyan_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
cyan_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
cyan_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 9);
Furniture.addReplacementItem({id:"cyan_chair"},{id:"cyan_chair"}, Furniture.placeRotatableBlock(BlockID.cyan_chair, cyan_chairModel));

IDRegistry.genBlockID("light_blue_chair");
Block.createBlock("light_blue_chair", [
	{name: "Light Blue Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Light Blue Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Light Blue Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Light Blue Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("light_blue_chair");
Item.createItem("light_blue_chair", "Light Blue Chair", {name: "light_blue_chair", meta: 0}, {stack: 64});

var light_blue_chairModel = ModelAPI.newArray();
light_blue_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 3);
light_blue_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
light_blue_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
light_blue_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
light_blue_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
light_blue_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
light_blue_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
light_blue_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
light_blue_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
light_blue_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
light_blue_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
light_blue_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
light_blue_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
light_blue_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
light_blue_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 3);
light_blue_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
light_blue_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
light_blue_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
light_blue_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
light_blue_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
light_blue_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
light_blue_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
light_blue_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
light_blue_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
light_blue_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 3);
Furniture.addReplacementItem({id:"light_blue_chair"},{id:"light_blue_chair"}, Furniture.placeRotatableBlock(BlockID.light_blue_chair, light_blue_chairModel));

IDRegistry.genBlockID("blue_chair");
Block.createBlock("blue_chair", [
	{name: "Blue Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Blue Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Blue Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Blue Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("blue_chair");
Item.createItem("blue_chair", "Blue Chair", {name: "blue_chair", meta: 0}, {stack: 64});

var blue_chairModel = ModelAPI.newArray();
blue_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 11);
blue_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
blue_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
blue_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
blue_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
blue_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
blue_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
blue_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
blue_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
blue_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
blue_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
blue_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
blue_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
blue_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
blue_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 11);
blue_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
blue_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
blue_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
blue_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
blue_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
blue_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
blue_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
blue_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
blue_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
blue_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 11);
Furniture.addReplacementItem({id:"blue_chair"},{id:"blue_chair"}, Furniture.placeRotatableBlock(BlockID.blue_chair, blue_chairModel));

IDRegistry.genBlockID("purple_chair");
Block.createBlock("purple_chair", [
	{name: "Purple Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Purple Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Purple Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Purple Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("purple_chair");
Item.createItem("purple_chair", "Purple Chair", {name: "purple_chair", meta: 0}, {stack: 64});

var purple_chairModel = ModelAPI.newArray();
purple_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 10);
purple_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
purple_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
purple_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
purple_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
purple_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
purple_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
purple_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
purple_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
purple_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
purple_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
purple_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
purple_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
purple_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
purple_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 10);
purple_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
purple_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
purple_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
purple_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
purple_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
purple_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
purple_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
purple_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
purple_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
purple_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 10);
Furniture.addReplacementItem({id:"purple_chair"},{id:"purple_chair"}, Furniture.placeRotatableBlock(BlockID.purple_chair, purple_chairModel));

IDRegistry.genBlockID("magenta_chair");
Block.createBlock("magenta_chair", [
	{name: "Magenta Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Magenta Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Magenta Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Magenta Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("magenta_chair");
Item.createItem("magenta_chair", "Magenta Chair", {name: "magenta_chair", meta: 0}, {stack: 64});

var magenta_chairModel = ModelAPI.newArray();
magenta_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 2);
magenta_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
magenta_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
magenta_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
magenta_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
magenta_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
magenta_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
magenta_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
magenta_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
magenta_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
magenta_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
magenta_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
magenta_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
magenta_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
magenta_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 2);
magenta_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
magenta_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
magenta_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
magenta_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
magenta_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
magenta_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
magenta_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
magenta_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
magenta_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
magenta_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 2);
Furniture.addReplacementItem({id:"magenta_chair"},{id:"magenta_chair"}, Furniture.placeRotatableBlock(BlockID.magenta_chair, magenta_chairModel));

IDRegistry.genBlockID("pink_chair");
Block.createBlock("pink_chair", [
	{name: "Pink Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Pink Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Pink Chair", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Pink Chair", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("pink_chair");
Item.createItem("pink_chair", "Pink Chair", {name: "pink_chair", meta: 0}, {stack: 64});

var pink_chairModel = ModelAPI.newArray();
pink_chairModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 6);
pink_chairModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
pink_chairModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
pink_chairModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
pink_chairModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
pink_chairModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
pink_chairModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
pink_chairModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
pink_chairModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
pink_chairModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
pink_chairModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
pink_chairModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
pink_chairModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
pink_chairModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
pink_chairModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 6);
pink_chairModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
pink_chairModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
pink_chairModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
pink_chairModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
pink_chairModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
pink_chairModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
pink_chairModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
pink_chairModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
pink_chairModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
pink_chairModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 6);
Furniture.addReplacementItem({id:"pink_chair"},{id:"pink_chair"}, Furniture.placeRotatableBlock(BlockID.pink_chair, pink_chairModel));

Block.setShape(BlockID.white_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.silver_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.gray_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.black_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.brown_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.red_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.orange_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.yellow_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.lime_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.green_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.cyan_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.light_blue_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.blue_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.purple_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.magenta_chair,0,0,0,1,1/2,1);
Block.setShape(BlockID.pink_chair,0,0,0,1,1/2,1);

Translation.addTranslation("White Chair", {ru: "Белая Стуля"});
Translation.addTranslation("Light Gray Chair", {ru: "Светло-серая Стуля"});
Translation.addTranslation("Gray Chair", {ru: "Серая Стуля"});
Translation.addTranslation("Black Chair", {ru: "Черная Стуля"});
Translation.addTranslation("Brown Chair", {ru: "Коричневая Стуля"});
Translation.addTranslation("Red Chair", {ru: "Красная Стуля"});
Translation.addTranslation("Orange Chair", {ru: "Оранжевая Стуля"});
Translation.addTranslation("Yellow Chair", {ru: "Желтая Стуля"});
Translation.addTranslation("Lime Chair", {ru: "Лаймовая Стуля"});
Translation.addTranslation("Green Chair", {ru: "Зеленая Стуля"});
Translation.addTranslation("Cyan Chair", {ru: "Бирюзовая Стуля"});
Translation.addTranslation("Light Blue Chair", {ru: "Голубая Стуля"});
Translation.addTranslation("Blue Chair", {ru: "Синяя Стуля"});
Translation.addTranslation("Purple Chair", {ru: "Фиолетвая Стуля"});
Translation.addTranslation("Magenta Chair", {ru: "Пурпурная Стуля"});
Translation.addTranslation("Pink Chair", {ru: "Розовая Стуля"});

Recipes.addShaped({id: ItemID.white_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,0]);
Recipes.addShaped({id: ItemID.silver_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,8]);
Recipes.addShaped({id: ItemID.gray_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,7]);
Recipes.addShaped({id: ItemID.black_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,15]);
Recipes.addShaped({id: ItemID.brown_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,12]);
Recipes.addShaped({id: ItemID.red_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,14]);
Recipes.addShaped({id: ItemID.orange_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,1]);
Recipes.addShaped({id: ItemID.yellow_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,4]);
Recipes.addShaped({id: ItemID.lime_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,5]);
Recipes.addShaped({id: ItemID.green_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,13]);
Recipes.addShaped({id: ItemID.cyan_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,9]);
Recipes.addShaped({id: ItemID.light_blue_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,3]);
Recipes.addShaped({id: ItemID.blue_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,11]);
Recipes.addShaped({id: ItemID.purple_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,10]);
Recipes.addShaped({id: ItemID.magenta_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,2]);
Recipes.addShaped({id: ItemID.pink_chair, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,6]);