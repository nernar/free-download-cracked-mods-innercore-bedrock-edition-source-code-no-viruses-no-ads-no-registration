IDRegistry.genBlockID("white_sofa");
Block.createBlock("white_sofa", [
	{name: "White Sofa", texture: [["wool_colored_white", 0]], inCreative: false},
	{name: "White Sofa", texture: [["wool_colored_white", 0]], inCreative: false},
	{name: "White Sofa", texture: [["wool_colored_white", 0]], inCreative: false},
	{name: "White Sofa", texture: [["wool_colored_white", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("white_sofa");
Item.createItem("white_sofa", "White Sofa", {name: "white_sofa", meta: 0}, {stack: 64});

var white_sofaModel = ModelAPI.newArray();
white_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
white_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
white_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
white_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
white_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35);
white_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35);
white_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35);
white_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35);
white_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35);
white_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35);
Furniture.addReplacementItem({id:"white_sofa"},{id:"white_sofa"}, Furniture.placeRotatableBlock(BlockID.white_sofa, white_sofaModel));

IDRegistry.genBlockID("silver_sofa");
Block.createBlock("silver_sofa", [
	{name: "Light Gray Sofa", texture: [["wool_colored_silver", 0]], inCreative: false},
	{name: "Light Gray Sofa", texture: [["wool_colored_silver", 0]], inCreative: false},
	{name: "Light Gray Sofa", texture: [["wool_colored_silver", 0]], inCreative: false},
	{name: "Light Gray Sofa", texture: [["wool_colored_silver", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("silver_sofa");
Item.createItem("silver_sofa", "Light Gray Sofa", {name: "silver_sofa", meta: 0}, {stack: 64});

var silver_sofaModel = ModelAPI.newArray();
silver_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
silver_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
silver_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
silver_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
silver_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 8);
silver_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 8);
silver_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 8);
silver_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 8);
silver_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 8);
silver_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 8);
Furniture.addReplacementItem({id:"silver_sofa"},{id:"silver_sofa"}, Furniture.placeRotatableBlock(BlockID.silver_sofa, silver_sofaModel));

IDRegistry.genBlockID("gray_sofa");
Block.createBlock("gray_sofa", [
	{name: "Gray Sofa", texture: [["wool_colored_gray", 0]], inCreative: false},
	{name: "Gray Sofa", texture: [["wool_colored_gray", 0]], inCreative: false},
	{name: "Gray Sofa", texture: [["wool_colored_gray", 0]], inCreative: false},
	{name: "Gray Sofa", texture: [["wool_colored_gray", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("gray_sofa");
Item.createItem("gray_sofa", "Gray Sofa", {name: "gray_sofa", meta: 0}, {stack: 64});

var gray_sofaModel = ModelAPI.newArray();
gray_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
gray_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
gray_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
gray_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
gray_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 7);
gray_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 7);
gray_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 7);
gray_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 7);
gray_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 7);
gray_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 7);
Furniture.addReplacementItem({id:"gray_sofa"},{id:"gray_sofa"}, Furniture.placeRotatableBlock(BlockID.gray_sofa, gray_sofaModel));

IDRegistry.genBlockID("black_sofa");
Block.createBlock("black_sofa", [
	{name: "Black Sofa", texture: [["wool_colored_black", 0]], inCreative: false},
	{name: "Black Sofa", texture: [["wool_colored_black", 0]], inCreative: false},
	{name: "Black Sofa", texture: [["wool_colored_black", 0]], inCreative: false},
	{name: "Black Sofa", texture: [["wool_colored_black", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("black_sofa");
Item.createItem("black_sofa", "Black Sofa", {name: "black_sofa", meta: 0}, {stack: 64});

var black_sofaModel = ModelAPI.newArray();
black_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
black_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
black_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
black_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
black_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 15);
black_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 15);
black_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 15);
black_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 15);
black_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 15);
black_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 15);
Furniture.addReplacementItem({id:"black_sofa"},{id:"black_sofa"}, Furniture.placeRotatableBlock(BlockID.black_sofa, black_sofaModel));

IDRegistry.genBlockID("brown_sofa");
Block.createBlock("brown_sofa", [
	{name: "Brown Sofa", texture: [["wool_colored_brown", 0]], inCreative: false},
	{name: "Brown Sofa", texture: [["wool_colored_brown", 0]], inCreative: false},
	{name: "Brown Sofa", texture: [["wool_colored_brown", 0]], inCreative: false},
	{name: "Brown Sofa", texture: [["wool_colored_brown", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("brown_sofa");
Item.createItem("brown_sofa", "Brown Sofa", {name: "brown_sofa", meta: 0}, {stack: 64});

var brown_sofaModel = ModelAPI.newArray();
brown_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
brown_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
brown_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
brown_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
brown_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 12);
brown_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 12);
brown_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 12);
brown_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 12);
brown_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 12);
brown_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 12);
Furniture.addReplacementItem({id:"brown_sofa"},{id:"brown_sofa"}, Furniture.placeRotatableBlock(BlockID.brown_sofa, brown_sofaModel));

IDRegistry.genBlockID("red_sofa");
Block.createBlock("red_sofa", [
	{name: "Red Sofa", texture: [["wool_colored_red", 0]], inCreative: false},
	{name: "Red Sofa", texture: [["wool_colored_red", 0]], inCreative: false},
	{name: "Red Sofa", texture: [["wool_colored_red", 0]], inCreative: false},
	{name: "Red Sofa", texture: [["wool_colored_red", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("red_sofa");
Item.createItem("red_sofa", "Red Sofa", {name: "red_sofa", meta: 0}, {stack: 64});

var red_sofaModel = ModelAPI.newArray();
red_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
red_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
red_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
red_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
red_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 14);
red_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 14);
red_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 14);
red_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 14);
red_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 14);
red_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 14);
Furniture.addReplacementItem({id:"red_sofa"},{id:"red_sofa"}, Furniture.placeRotatableBlock(BlockID.red_sofa, red_sofaModel));

IDRegistry.genBlockID("orange_sofa");
Block.createBlock("orange_sofa", [
	{name: "Orange Sofa", texture: [["wool_colored_orange", 0]], inCreative: false},
	{name: "Orange Sofa", texture: [["wool_colored_orange", 0]], inCreative: false},
	{name: "Orange Sofa", texture: [["wool_colored_orange", 0]], inCreative: false},
	{name: "Orange Sofa", texture: [["wool_colored_orange", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("orange_sofa");
Item.createItem("orange_sofa", "Orange Sofa", {name: "orange_sofa", meta: 0}, {stack: 64});

var orange_sofaModel = ModelAPI.newArray();
orange_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
orange_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
orange_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
orange_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
orange_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 1);
orange_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 1);
orange_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 1);
orange_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 1);
orange_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 1);
orange_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 1);
Furniture.addReplacementItem({id:"orange_sofa"},{id:"orange_sofa"}, Furniture.placeRotatableBlock(BlockID.orange_sofa, orange_sofaModel));

IDRegistry.genBlockID("yellow_sofa");
Block.createBlock("yellow_sofa", [
	{name: "Yellow Sofa", texture: [["wool_colored_yellow", 0]], inCreative: false},
	{name: "Yellow Sofa", texture: [["wool_colored_yellow", 0]], inCreative: false},
	{name: "Yellow Sofa", texture: [["wool_colored_yellow", 0]], inCreative: false},
	{name: "Yellow Sofa", texture: [["wool_colored_yellow", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("yellow_sofa");
Item.createItem("yellow_sofa", "Yellow Sofa", {name: "yellow_sofa", meta: 0}, {stack: 64});

var yellow_sofaModel = ModelAPI.newArray();
yellow_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
yellow_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
yellow_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
yellow_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
yellow_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 4);
yellow_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 4);
yellow_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 4);
yellow_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 4);
yellow_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 4);
yellow_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 4);
Furniture.addReplacementItem({id:"yellow_sofa"},{id:"yellow_sofa"}, Furniture.placeRotatableBlock(BlockID.yellow_sofa, yellow_sofaModel));

IDRegistry.genBlockID("lime_sofa");
Block.createBlock("lime_sofa", [
	{name: "Lime Sofa", texture: [["wool_colored_lime", 0]], inCreative: false},
	{name: "Lime Sofa", texture: [["wool_colored_lime", 0]], inCreative: false},
	{name: "Lime Sofa", texture: [["wool_colored_lime", 0]], inCreative: false},
	{name: "Lime Sofa", texture: [["wool_colored_lime", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lime_sofa");
Item.createItem("lime_sofa", "Lime Sofa", {name: "lime_sofa", meta: 0}, {stack: 64});

var lime_sofaModel = ModelAPI.newArray();
lime_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
lime_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
lime_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
lime_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
lime_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 5);
lime_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 5);
lime_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 5);
lime_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 5);
lime_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 5);
lime_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 5);
Furniture.addReplacementItem({id:"lime_sofa"},{id:"lime_sofa"}, Furniture.placeRotatableBlock(BlockID.lime_sofa, lime_sofaModel));

IDRegistry.genBlockID("green_sofa");
Block.createBlock("green_sofa", [
	{name: "Green Sofa", texture: [["wool_colored_green", 0]], inCreative: false},
	{name: "Green Sofa", texture: [["wool_colored_green", 0]], inCreative: false},
	{name: "Green Sofa", texture: [["wool_colored_green", 0]], inCreative: false},
	{name: "Green Sofa", texture: [["wool_colored_green", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("green_sofa");
Item.createItem("green_sofa", "Green Sofa", {name: "green_sofa", meta: 0}, {stack: 64});

var green_sofaModel = ModelAPI.newArray();
green_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
green_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
green_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
green_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
green_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 13);
green_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 13);
green_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 13);
green_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 13);
green_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 13);
green_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 13);
Furniture.addReplacementItem({id:"green_sofa"},{id:"green_sofa"}, Furniture.placeRotatableBlock(BlockID.green_sofa, green_sofaModel));

IDRegistry.genBlockID("cyan_sofa");
Block.createBlock("cyan_sofa", [
	{name: "Cyan Sofa", texture: [["wool_colored_cyan", 0]], inCreative: false},
	{name: "Cyan Sofa", texture: [["wool_colored_cyan", 0]], inCreative: false},
	{name: "Cyan Sofa", texture: [["wool_colored_cyan", 0]], inCreative: false},
	{name: "Cyan Sofa", texture: [["wool_colored_cyan", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cyan_sofa");
Item.createItem("cyan_sofa", "Cyan Sofa", {name: "cyan_sofa", meta: 0}, {stack: 64});

var cyan_sofaModel = ModelAPI.newArray();
cyan_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
cyan_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
cyan_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
cyan_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
cyan_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 9);
cyan_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 9);
cyan_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 9);
cyan_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 9);
cyan_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 9);
cyan_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 9);
Furniture.addReplacementItem({id:"cyan_sofa"},{id:"cyan_sofa"}, Furniture.placeRotatableBlock(BlockID.cyan_sofa, cyan_sofaModel));

IDRegistry.genBlockID("light_blue_sofa");
Block.createBlock("light_blue_sofa", [
	{name: "Light Blue Sofa", texture: [["wool_colored_light_blue", 0]], inCreative: false},
	{name: "Light Blue Sofa", texture: [["wool_colored_light_blue", 0]], inCreative: false},
	{name: "Light Blue Sofa", texture: [["wool_colored_light_blue", 0]], inCreative: false},
	{name: "Light Blue Sofa", texture: [["wool_colored_light_blue", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("light_blue_sofa");
Item.createItem("light_blue_sofa", "Light Blue Sofa", {name: "light_blue_sofa", meta: 0}, {stack: 64});

var light_blue_sofaModel = ModelAPI.newArray();
light_blue_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
light_blue_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
light_blue_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
light_blue_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
light_blue_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 3);
light_blue_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 3);
light_blue_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 3);
light_blue_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 3);
light_blue_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 3);
light_blue_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 3);
Furniture.addReplacementItem({id:"light_blue_sofa"},{id:"light_blue_sofa"}, Furniture.placeRotatableBlock(BlockID.light_blue_sofa, light_blue_sofaModel));

IDRegistry.genBlockID("blue_sofa");
Block.createBlock("blue_sofa", [
	{name: "Blue Sofa", texture: [["wool_colored_blue", 0]], inCreative: false},
	{name: "Blue Sofa", texture: [["wool_colored_blue", 0]], inCreative: false},
	{name: "Blue Sofa", texture: [["wool_colored_blue", 0]], inCreative: false},
	{name: "Blue Sofa", texture: [["wool_colored_blue", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("blue_sofa");
Item.createItem("blue_sofa", "Blue Sofa", {name: "blue_sofa", meta: 0}, {stack: 64});

var blue_sofaModel = ModelAPI.newArray();
blue_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
blue_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
blue_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
blue_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
blue_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 11);
blue_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 11);
blue_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 11);
blue_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 11);
blue_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 11);
blue_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 11);
Furniture.addReplacementItem({id:"blue_sofa"},{id:"blue_sofa"}, Furniture.placeRotatableBlock(BlockID.blue_sofa, blue_sofaModel));

IDRegistry.genBlockID("purple_sofa");
Block.createBlock("purple_sofa", [
	{name: "Purple Sofa", texture: [["wool_colored_purple", 0]], inCreative: false},
	{name: "Purple Sofa", texture: [["wool_colored_purple", 0]], inCreative: false},
	{name: "Purple Sofa", texture: [["wool_colored_purple", 0]], inCreative: false},
	{name: "Purple Sofa", texture: [["wool_colored_purple", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("purple_sofa");
Item.createItem("purple_sofa", "Purple Sofa", {name: "purple_sofa", meta: 0}, {stack: 64});

var purple_sofaModel = ModelAPI.newArray();
purple_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
purple_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
purple_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
purple_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
purple_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 10);
purple_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 10);
purple_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 10);
purple_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 10);
purple_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 10);
purple_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 10);
Furniture.addReplacementItem({id:"purple_sofa"},{id:"purple_sofa"}, Furniture.placeRotatableBlock(BlockID.purple_sofa, purple_sofaModel));

IDRegistry.genBlockID("magenta_sofa");
Block.createBlock("magenta_sofa", [
	{name: "Magenta Sofa", texture: [["wool_colored_magenta", 0]], inCreative: false},
	{name: "Magenta Sofa", texture: [["wool_colored_magenta", 0]], inCreative: false},
	{name: "Magenta Sofa", texture: [["wool_colored_magenta", 0]], inCreative: false},
	{name: "Magenta Sofa", texture: [["wool_colored_magenta", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("magenta_sofa");
Item.createItem("magenta_sofa", "Magenta Sofa", {name: "magenta_sofa", meta: 0}, {stack: 64});

var magenta_sofaModel = ModelAPI.newArray();
magenta_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
magenta_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
magenta_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
magenta_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
magenta_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 2);
magenta_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 2);
magenta_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 2);
magenta_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 2);
magenta_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 2);
magenta_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 2);
Furniture.addReplacementItem({id:"magenta_sofa"},{id:"magenta_sofa"}, Furniture.placeRotatableBlock(BlockID.magenta_sofa, magenta_sofaModel));

IDRegistry.genBlockID("pink_sofa");
Block.createBlock("pink_sofa", [
	{name: "Pink Sofa", texture: [["wool_colored_pink", 0]], inCreative: false},
	{name: "Pink Sofa", texture: [["wool_colored_pink", 0]], inCreative: false},
	{name: "Pink Sofa", texture: [["wool_colored_pink", 0]], inCreative: false},
	{name: "Pink Sofa", texture: [["wool_colored_pink", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("pink_sofa");
Item.createItem("pink_sofa", "Pink Sofa", {name: "pink_sofa", meta: 0}, {stack: 64});

var pink_sofaModel = ModelAPI.newArray();
pink_sofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
pink_sofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
pink_sofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
pink_sofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
pink_sofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 6);
pink_sofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 6);
pink_sofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 6);
pink_sofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 6);
pink_sofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 6);
pink_sofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 6);
Furniture.addReplacementItem({id:"pink_sofa"},{id:"pink_sofa"}, Furniture.placeRotatableBlock(BlockID.pink_sofa, pink_sofaModel));

Block.setShape(BlockID.white_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.silver_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.gray_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.black_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.brown_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.red_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.orange_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.yellow_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.lime_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.green_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.cyan_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.light_blue_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.blue_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.purple_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.magenta_sofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.pink_sofa,0,0,0,1,0.36,1);

Translation.addTranslation("White Sofa", {ru: "Белая Диван"});
Translation.addTranslation("Light Gray Sofa", {ru: "Светло-серая Диван"});
Translation.addTranslation("Gray Sofa", {ru: "Серая Диван"});
Translation.addTranslation("Black Sofa", {ru: "Черная Диван"});
Translation.addTranslation("Brown Sofa", {ru: "Коричневая Диван"});
Translation.addTranslation("Red Sofa", {ru: "Красная Диван"});
Translation.addTranslation("Orange Sofa", {ru: "Оранжевая Диван"});
Translation.addTranslation("Yellow Sofa", {ru: "Желтая Диван"});
Translation.addTranslation("Lime Sofa", {ru: "Лаймовая Диван"});
Translation.addTranslation("Green Sofa", {ru: "Зеленая Диван"});
Translation.addTranslation("Cyan Sofa", {ru: "Бирюзовая Диван"});
Translation.addTranslation("Light Blue Sofa", {ru: "Голубая Диван"});
Translation.addTranslation("Blue Sofa", {ru: "Синяя Диван"});
Translation.addTranslation("Purple Sofa", {ru: "Фиолетвая Диван"});
Translation.addTranslation("Magenta Sofa", {ru: "Пурпурная Диван"});
Translation.addTranslation("Pink Sofa", {ru: "Розовая Диван"});

Recipes.addShaped({id: ItemID.white_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,0]);
Recipes.addShaped({id: ItemID.silver_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,8]);
Recipes.addShaped({id: ItemID.gray_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,7]);
Recipes.addShaped({id: ItemID.black_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,15]);
Recipes.addShaped({id: ItemID.brown_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,12]);
Recipes.addShaped({id: ItemID.red_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,14]);
Recipes.addShaped({id: ItemID.orange_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,1]);
Recipes.addShaped({id: ItemID.yellow_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,4]);
Recipes.addShaped({id: ItemID.lime_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,5]);
Recipes.addShaped({id: ItemID.green_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,13]);
Recipes.addShaped({id: ItemID.cyan_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,9]);
Recipes.addShaped({id: ItemID.light_blue_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,3]);
Recipes.addShaped({id: ItemID.blue_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,11]);
Recipes.addShaped({id: ItemID.purple_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,10]);
Recipes.addShaped({id: ItemID.magenta_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,2]);
Recipes.addShaped({id: ItemID.pink_sofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,6]);