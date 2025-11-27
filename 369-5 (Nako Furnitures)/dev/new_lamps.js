IDRegistry.genBlockID("white_lamp");
Block.createBlock("white_lamp", [
	{name: "White Lamp", texture: [["wool_colored_white", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var white_lampModel = ModelAPI.newArray();
white_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
white_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
white_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35);
white_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
white_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35);
white_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35);
white_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35);
white_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35);
white_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.white_lamp, white_lampModel);

IDRegistry.genBlockID("silver_lamp");
Block.createBlock("silver_lamp", [
	{name: "Light Gray Lamp", texture: [["wool_colored_silver", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var silver_lampModel = ModelAPI.newArray();
silver_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
silver_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
silver_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 8);
silver_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
silver_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 8);
silver_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 8);
silver_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 8);
silver_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 8);
silver_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.silver_lamp, silver_lampModel);

IDRegistry.genBlockID("gray_lamp");
Block.createBlock("gray_lamp", [
	{name: "Gray Lamp", texture: [["wool_colored_gray", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var gray_lampModel = ModelAPI.newArray();
gray_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
gray_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
gray_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 7);
gray_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
gray_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 7);
gray_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 7);
gray_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 7);
gray_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 7);
gray_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.gray_lamp, gray_lampModel);

IDRegistry.genBlockID("black_lamp");
Block.createBlock("black_lamp", [
	{name: "Black Lamp", texture: [["wool_colored_black", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var black_lampModel = ModelAPI.newArray();
black_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
black_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
black_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 15);
black_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
black_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 15);
black_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 15);
black_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 15);
black_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 15);
black_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.black_lamp, black_lampModel);

IDRegistry.genBlockID("brown_lamp");
Block.createBlock("brown_lamp", [
	{name: "Brown Lamp", texture: [["wool_colored_brown", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var brown_lampModel = ModelAPI.newArray();
brown_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
brown_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
brown_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 12);
brown_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
brown_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 12);
brown_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 12);
brown_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 12);
brown_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 12);
brown_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.brown_lamp, brown_lampModel);

IDRegistry.genBlockID("red_lamp");
Block.createBlock("red_lamp", [
	{name: "Red Lamp", texture: [["wool_colored_red", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var red_lampModel = ModelAPI.newArray();
red_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
red_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
red_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 14);
red_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
red_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 14);
red_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 14);
red_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 14);
red_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 14);
red_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.red_lamp, red_lampModel);

IDRegistry.genBlockID("orange_lamp");
Block.createBlock("orange_lamp", [
	{name: "Orange Lamp", texture: [["wool_colored_orange", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var orange_lampModel = ModelAPI.newArray();
orange_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
orange_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
orange_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 1);
orange_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
orange_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 1);
orange_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 1);
orange_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 1);
orange_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 1);
orange_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.orange_lamp, orange_lampModel);

IDRegistry.genBlockID("yellow_lamp");
Block.createBlock("yellow_lamp", [
	{name: "Yellow Lamp", texture: [["wool_colored_yellow", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var yellow_lampModel = ModelAPI.newArray();
yellow_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
yellow_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
yellow_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 4);
yellow_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
yellow_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 4);
yellow_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 4);
yellow_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 4);
yellow_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 4);
yellow_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.yellow_lamp, yellow_lampModel);

IDRegistry.genBlockID("lime_lamp");
Block.createBlock("lime_lamp", [
	{name: "Lime Lamp", texture: [["wool_colored_lime", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var lime_lampModel = ModelAPI.newArray();
lime_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
lime_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
lime_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 5);
lime_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
lime_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 5);
lime_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 5);
lime_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 5);
lime_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 5);
lime_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.lime_lamp, lime_lampModel);

IDRegistry.genBlockID("green_lamp");
Block.createBlock("green_lamp", [
	{name: "Green Lamp", texture: [["wool_colored_green", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var green_lampModel = ModelAPI.newArray();
green_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
green_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
green_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 13);
green_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
green_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 13);
green_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 13);
green_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 13);
green_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 13);
green_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.green_lamp, green_lampModel);

IDRegistry.genBlockID("cyan_lamp");
Block.createBlock("cyan_lamp", [
	{name: "Cyan Lamp", texture: [["wool_colored_cyan", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var cyan_lampModel = ModelAPI.newArray();
cyan_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
cyan_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
cyan_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 9);
cyan_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
cyan_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 9);
cyan_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 9);
cyan_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 9);
cyan_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 9);
cyan_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.cyan_lamp, cyan_lampModel);

IDRegistry.genBlockID("light_blue_lamp");
Block.createBlock("light_blue_lamp", [
	{name: "Light Blue Lamp", texture: [["wool_colored_light_blue", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var light_blue_lampModel = ModelAPI.newArray();
light_blue_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
light_blue_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
light_blue_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 3);
light_blue_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
light_blue_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 3);
light_blue_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 3);
light_blue_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 3);
light_blue_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 3);
light_blue_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.light_blue_lamp, light_blue_lampModel);

IDRegistry.genBlockID("blue_lamp");
Block.createBlock("blue_lamp", [
	{name: "Blue Lamp", texture: [["wool_colored_blue", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var blue_lampModel = ModelAPI.newArray();
blue_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
blue_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
blue_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 11);
blue_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
blue_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 11);
blue_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 11);
blue_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 11);
blue_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 11);
blue_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.blue_lamp, blue_lampModel);

IDRegistry.genBlockID("purple_lamp");
Block.createBlock("purple_lamp", [
	{name: "Purple Lamp", texture: [["wool_colored_purple", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var purple_lampModel = ModelAPI.newArray();
purple_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
purple_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
purple_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 10);
purple_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
purple_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 10);
purple_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 10);
purple_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 10);
purple_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 10);
purple_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.purple_lamp, purple_lampModel);

IDRegistry.genBlockID("magenta_lamp");
Block.createBlock("magenta_lamp", [
	{name: "Magenta Lamp", texture: [["wool_colored_magenta", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var magenta_lampModel = ModelAPI.newArray();
magenta_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
magenta_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
magenta_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 2);
magenta_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
magenta_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 2);
magenta_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 2);
magenta_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 2);
magenta_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 2);
magenta_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.magenta_lamp, magenta_lampModel);

IDRegistry.genBlockID("pink_lamp");
Block.createBlock("pink_lamp", [
	{name: "Pink Lamp", texture: [["wool_colored_pink", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var pink_lampModel = ModelAPI.newArray();
pink_lampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
pink_lampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
pink_lampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 6);
pink_lampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
pink_lampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 6);
pink_lampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 6);
pink_lampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 6);
pink_lampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 6);
pink_lampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.pink_lamp, pink_lampModel);

//translation lamps
Translation.addTranslation("White Lamp", {ru: "Белая Лампа"});
Translation.addTranslation("Light Gray Lamp", {ru: "Светло-серая Лампа"});
Translation.addTranslation("Gray Lamp", {ru: "Серая Лампа"});
Translation.addTranslation("Black Lamp", {ru: "Черная Лампа"});
Translation.addTranslation("Brown Lamp", {ru: "Коричневая Лампа"});
Translation.addTranslation("Red Lamp", {ru: "Красная Лампа"});
Translation.addTranslation("Orange Lamp", {ru: "Оранжевый Лампа"});
Translation.addTranslation("Yellow Lamp", {ru: "Желтая Лампа"});
Translation.addTranslation("Lime Lamp", {ru: "Лаймовая Лампа"});
Translation.addTranslation("Green Lamp", {ru: "Зеленая Лампа"});
Translation.addTranslation("Cyan Lamp", {ru: "Бирюзовая Лампа"});
Translation.addTranslation("Light Blue Lamp", {ru: "Голубая Лампа"});
Translation.addTranslation("Blue Lamp", {ru: "Синяя Лампа"});
Translation.addTranslation("Purple Lamp", {ru: "Фиолетвая Лампа"});
Translation.addTranslation("Magenta Lamp", {ru: "Пурпурная Лампа"});
Translation.addTranslation("Pink Lamp", {ru: "Розовая Лампа"});

//recipes lamps
Recipes.addShaped({id: BlockID.white_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,0, 'c', 85,0])
Recipes.addShaped({id: BlockID.silver_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,8, 'c', 85,0])
Recipes.addShaped({id: BlockID.gray_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,7, 'c', 85,0])
Recipes.addShaped({id: BlockID.black_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,15, 'c', 85,0])
Recipes.addShaped({id: BlockID.brown_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,12, 'c', 85,0])
Recipes.addShaped({id: BlockID.red_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,14, 'c', 85,0])
Recipes.addShaped({id: BlockID.orange_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,1, 'c', 85,0])
Recipes.addShaped({id: BlockID.yellow_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,4, 'c', 85,0])
Recipes.addShaped({id: BlockID.lime_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,5, 'c', 85,0])
Recipes.addShaped({id: BlockID.green_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,13, 'c', 85,0])
Recipes.addShaped({id: BlockID.cyan_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,9, 'c', 85,0])
Recipes.addShaped({id: BlockID.light_blue_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,3, 'c', 85,0])
Recipes.addShaped({id: BlockID.blue_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,11, 'c', 85,0])
Recipes.addShaped({id: BlockID.purple_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,10, 'c', 85,0])
Recipes.addShaped({id: BlockID.magenta_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,2, 'c', 85,0])
Recipes.addShaped({id: BlockID.pink_lamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,6, 'c', 85,0])