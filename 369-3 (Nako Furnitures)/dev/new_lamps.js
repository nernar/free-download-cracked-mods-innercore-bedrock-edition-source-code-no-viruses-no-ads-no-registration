IDRegistry.genBlockID("whitelamp");
Block.createBlock("whitelamp", [
	{name: "White Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var whitelampModel = ModelAPI.newArray();
whitelampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
whitelampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
whitelampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35);
whitelampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
whitelampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35);
whitelampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35);
whitelampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35);
whitelampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35);
whitelampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.whitelamp, whitelampModel);

IDRegistry.genBlockID("lightgreylamp");
Block.createBlock("lightgreylamp", [
	{name: "Light Grey Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var lightgreylampModel = ModelAPI.newArray();
lightgreylampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
lightgreylampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
lightgreylampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 8);
lightgreylampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
lightgreylampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 8);
lightgreylampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 8);
lightgreylampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 8);
lightgreylampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 8);
lightgreylampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.lightgreylamp, lightgreylampModel);

IDRegistry.genBlockID("greylamp");
Block.createBlock("greylamp", [
	{name: "Grey Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var greylampModel = ModelAPI.newArray();
greylampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
greylampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
greylampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 7);
greylampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
greylampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 7);
greylampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 7);
greylampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 7);
greylampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 7);
greylampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.greylamp, greylampModel);

IDRegistry.genBlockID("blacklamp");
Block.createBlock("blacklamp", [
	{name: "Black Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var blacklampModel = ModelAPI.newArray();
blacklampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
blacklampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
blacklampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 15);
blacklampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
blacklampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 15);
blacklampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 15);
blacklampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 15);
blacklampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 15);
blacklampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.blacklamp, blacklampModel);

IDRegistry.genBlockID("brownlamp");
Block.createBlock("brownlamp", [
	{name: "Brown Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var brownlampModel = ModelAPI.newArray();
brownlampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
brownlampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
brownlampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 12);
brownlampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
brownlampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 12);
brownlampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 12);
brownlampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 12);
brownlampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 12);
brownlampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.brownlamp, brownlampModel);

IDRegistry.genBlockID("redlamp");
Block.createBlock("redlamp", [
	{name: "Red Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var redlampModel = ModelAPI.newArray();
redlampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
redlampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
redlampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 14);
redlampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
redlampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 14);
redlampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 14);
redlampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 14);
redlampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 14);
redlampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.redlamp, redlampModel);

IDRegistry.genBlockID("orangelamp");
Block.createBlock("orangelamp", [
	{name: "Orange Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var orangelampModel = ModelAPI.newArray();
orangelampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
orangelampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
orangelampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 1);
orangelampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
orangelampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 1);
orangelampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 1);
orangelampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 1);
orangelampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 1);
orangelampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.orangelamp, orangelampModel);

IDRegistry.genBlockID("yellowlamp");
Block.createBlock("yellowlamp", [
	{name: "Yellow Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var yellowlampModel = ModelAPI.newArray();
yellowlampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
yellowlampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
yellowlampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 4);
yellowlampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
yellowlampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 4);
yellowlampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 4);
yellowlampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 4);
yellowlampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 4);
yellowlampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.yellowlamp, yellowlampModel);

IDRegistry.genBlockID("limelamp");
Block.createBlock("limelamp", [
	{name: "Lime Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var limelampModel = ModelAPI.newArray();
limelampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
limelampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
limelampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 5);
limelampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
limelampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 5);
limelampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 5);
limelampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 5);
limelampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 5);
limelampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.limelamp, limelampModel);

IDRegistry.genBlockID("greenlamp");
Block.createBlock("greenlamp", [
	{name: "Green Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var greenlampModel = ModelAPI.newArray();
greenlampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
greenlampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
greenlampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 13);
greenlampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
greenlampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 13);
greenlampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 13);
greenlampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 13);
greenlampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 13);
greenlampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.greenlamp, greenlampModel);

IDRegistry.genBlockID("cyanlamp");
Block.createBlock("cyanlamp", [
	{name: "Cyan Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var cyanlampModel = ModelAPI.newArray();
cyanlampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
cyanlampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
cyanlampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 9);
cyanlampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
cyanlampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 9);
cyanlampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 9);
cyanlampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 9);
cyanlampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 9);
cyanlampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.cyanlamp, cyanlampModel);

IDRegistry.genBlockID("lightbluelamp");
Block.createBlock("lightbluelamp", [
	{name: "Light Blue Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var lightbluelampModel = ModelAPI.newArray();
lightbluelampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
lightbluelampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
lightbluelampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 3);
lightbluelampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
lightbluelampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 3);
lightbluelampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 3);
lightbluelampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 3);
lightbluelampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 3);
lightbluelampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.lightbluelamp, lightbluelampModel);

IDRegistry.genBlockID("bluelamp");
Block.createBlock("bluelamp", [
	{name: "Blue Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var bluelampModel = ModelAPI.newArray();
bluelampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
bluelampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
bluelampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 11);
bluelampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
bluelampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 11);
bluelampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 11);
bluelampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 11);
bluelampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 11);
bluelampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.bluelamp, bluelampModel);

IDRegistry.genBlockID("purplelamp");
Block.createBlock("purplelamp", [
	{name: "Purple Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var purplelampModel = ModelAPI.newArray();
purplelampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
purplelampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
purplelampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 10);
purplelampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
purplelampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 10);
purplelampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 10);
purplelampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 10);
purplelampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 10);
purplelampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.purplelamp, purplelampModel);

IDRegistry.genBlockID("magentalamp");
Block.createBlock("magentalamp", [
	{name: "Magenta Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var magentalampModel = ModelAPI.newArray();
magentalampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
magentalampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
magentalampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 2);
magentalampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
magentalampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 2);
magentalampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 2);
magentalampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 2);
magentalampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 2);
magentalampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.magentalamp, magentalampModel);

IDRegistry.genBlockID("pinklamp");
Block.createBlock("pinklamp", [
	{name: "Pink Lamp", texture: [["quartz_block", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var pinklampModel = ModelAPI.newArray();
pinklampModel.addBoxByID("1", 0.4375,0.1875,0.4375,0.5625,0.8125,0.5625, 159, 9);
pinklampModel.addBoxByID("2", 0.125,0,0.125,0.875,0.125,0.875, 159, 9);
pinklampModel.addBoxByID("3", 0.8125,0.8125,0.1875,0.875,1.125,0.8125, 35, 6);
pinklampModel.addBoxByID("4", 0.1875,0.0625,0.1875,0.8125,0.1875,0.8125, 159, 9);
pinklampModel.addBoxByID("5", 0.1875,1.0625,0.1875,0.8125,1.1875,0.8125, 35, 6);
pinklampModel.addBoxByID("6", 0.1875,0.8125,0.8125,0.8125,1.125,0.875, 35, 6);
pinklampModel.addBoxByID("7", 0.125,0.8125,0.1875,0.1875,1.125,0.8125, 35, 6);
pinklampModel.addBoxByID("8", 0.1875,0.8125,0.125,0.8125,1.125,0.1875, 35, 6);
pinklampModel.addBoxByID("9", 0.4375,0.8125,0.4375,0.5625,0.9375,0.5625, 35, 4);
Furniture.placeRotatableBlock(BlockID.pinklamp, pinklampModel);

//translation lamps
Translation.addTranslation("White Lamp", {ru: "Белая Лампа"});
Translation.addTranslation("Light Grey Lamp", {ru: "Светло-серая Лампа"});
Translation.addTranslation("Grey Lamp", {ru: "Серая Лампа"});
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
Recipes.addShaped({id: BlockID.whitelamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,0, 'c', 85,0])
Recipes.addShaped({id: BlockID.lightgreylamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,8, 'c', 85,0])
Recipes.addShaped({id: BlockID.greylamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,7, 'c', 85,0])
Recipes.addShaped({id: BlockID.blacklamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,15, 'c', 85,0])
Recipes.addShaped({id: BlockID.brownlamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,12, 'c', 85,0])
Recipes.addShaped({id: BlockID.redlamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,14, 'c', 85,0])
Recipes.addShaped({id: BlockID.orangelamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,1, 'c', 85,0])
Recipes.addShaped({id: BlockID.yellowlamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,4, 'c', 85,0])
Recipes.addShaped({id: BlockID.limelamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,5, 'c', 85,0])
Recipes.addShaped({id: BlockID.greenlamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,13, 'c', 85,0])
Recipes.addShaped({id: BlockID.cyanlamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,9, 'c', 85,0])
Recipes.addShaped({id: BlockID.lightbluelamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,3, 'c', 85,0])
Recipes.addShaped({id: BlockID.bluelamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,11, 'c', 85,0])
Recipes.addShaped({id: BlockID.purplelamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,10, 'c', 85,0])
Recipes.addShaped({id: BlockID.magentalamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,2, 'c', 85,0])
Recipes.addShaped({id: BlockID.pinklamp, count: 1, data: 0}, [" x ", "xax", " c "], ['a', 348,0, 'x', 35,6, 'c', 85,0])