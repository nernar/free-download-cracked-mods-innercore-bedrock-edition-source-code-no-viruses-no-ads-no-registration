IDRegistry.genBlockID("whitesofa");
Block.createBlock("whitesofa", [
	{name: "whitesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whitesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whitesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whitesofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("whitesofa");
Item.createItem("whitesofa", "White Sofa", {name: "whitesofa", meta: 0}, {stack: 64});

Translation.addTranslation("White Sofa", {ru: "Белая Софа"});
Recipes.addShaped({id: ItemID.whitesofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,0]);

var whitesofaModel = ModelAPI.newArray();
whitesofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
whitesofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
whitesofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
whitesofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
whitesofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35);
whitesofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35);
whitesofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35);
whitesofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35);
whitesofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35);
whitesofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35);
Furniture.addReplacementItem({id:"whitesofa"},{id:"whitesofa"}, Furniture.placeRotatableBlock(BlockID.whitesofa, whitesofaModel));

IDRegistry.genBlockID("lightgreysofa");
Block.createBlock("lightgreysofa", [
	{name: "lightgreysofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreysofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreysofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreysofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lightgreysofa");
Item.createItem("lightgreysofa", "Light Grey Sofa", {name: "lightgreysofa", meta: 0}, {stack: 64});

Translation.addTranslation("Light Grey Sofa", {ru: "Светло-серая Софа"});
Recipes.addShaped({id: ItemID.lightgreysofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,8]);

var lightgreysofaModel = ModelAPI.newArray();
lightgreysofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
lightgreysofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
lightgreysofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
lightgreysofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
lightgreysofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 8);
lightgreysofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 8);
lightgreysofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 8);
lightgreysofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 8);
lightgreysofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 8);
lightgreysofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 8);
Furniture.addReplacementItem({id:"lightgreysofa"},{id:"lightgreysofa"}, Furniture.placeRotatableBlock(BlockID.lightgreysofa, lightgreysofaModel));

IDRegistry.genBlockID("greysofa");
Block.createBlock("greysofa", [
	{name: "greysofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greysofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greysofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greysofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("greysofa");
Item.createItem("greysofa", "Grey Sofa", {name: "greysofa", meta: 0}, {stack: 64});

Translation.addTranslation("Grey Sofa", {ru: "Серая Софа"});
Recipes.addShaped({id: ItemID.greysofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,7]);

var greysofaModel = ModelAPI.newArray();
greysofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
greysofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
greysofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
greysofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
greysofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 7);
greysofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 7);
greysofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 7);
greysofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 7);
greysofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 7);
greysofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 7);
Furniture.addReplacementItem({id:"greysofa"},{id:"greysofa"}, Furniture.placeRotatableBlock(BlockID.greysofa, greysofaModel));

IDRegistry.genBlockID("blacksofa");
Block.createBlock("blacksofa", [
	{name: "blacksofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blacksofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blacksofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blacksofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("blacksofa");
Item.createItem("blacksofa", "Black Sofa", {name: "blacksofa", meta: 0}, {stack: 64});

Translation.addTranslation("Black Sofa", {ru: "Черная Софа"});
Recipes.addShaped({id: ItemID.blacksofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,15]);

var blacksofaModel = ModelAPI.newArray();
blacksofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
blacksofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
blacksofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
blacksofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
blacksofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 15);
blacksofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 15);
blacksofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 15);
blacksofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 15);
blacksofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 15);
blacksofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 15);
Furniture.addReplacementItem({id:"blacksofa"},{id:"blacksofa"}, Furniture.placeRotatableBlock(BlockID.blacksofa, blacksofaModel));

IDRegistry.genBlockID("brownsofa");
Block.createBlock("brownsofa", [
	{name: "brownsofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownsofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownsofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownsofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("brownsofa");
Item.createItem("brownsofa", "Brown Sofa", {name: "brownsofa", meta: 0}, {stack: 64});

Translation.addTranslation("Brown Sofa", {ru: "Коричневая Софа"});
Recipes.addShaped({id: ItemID.brownsofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,12]);

var brownsofaModel = ModelAPI.newArray();
brownsofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
brownsofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
brownsofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
brownsofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
brownsofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 12);
brownsofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 12);
brownsofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 12);
brownsofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 12);
brownsofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 12);
brownsofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 12);
Furniture.addReplacementItem({id:"brownsofa"},{id:"brownsofa"}, Furniture.placeRotatableBlock(BlockID.brownsofa, brownsofaModel));

IDRegistry.genBlockID("redsofa");
Block.createBlock("redsofa", [
	{name: "redsofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redsofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redsofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redsofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("redsofa");
Item.createItem("redsofa", "Red Sofa", {name: "redsofa", meta: 0}, {stack: 64});

Translation.addTranslation("Red Sofa", {ru: "Красная Софа"});
Recipes.addShaped({id: ItemID.redsofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,14]);

var redsofaModel = ModelAPI.newArray();
redsofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
redsofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
redsofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
redsofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
redsofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 14);
redsofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 14);
redsofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 14);
redsofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 14);
redsofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 14);
redsofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 14);
Furniture.addReplacementItem({id:"redsofa"},{id:"redsofa"}, Furniture.placeRotatableBlock(BlockID.redsofa, redsofaModel));

IDRegistry.genBlockID("orangesofa");
Block.createBlock("orangesofa", [
	{name: "orangesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangesofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("orangesofa");
Item.createItem("orangesofa", "Orange Sofa", {name: "orangesofa", meta: 0}, {stack: 64});

Translation.addTranslation("Orange Sofa", {ru: "Оранжевая Софа"});
Recipes.addShaped({id: ItemID.orangesofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,1]);

var orangesofaModel = ModelAPI.newArray();
orangesofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
orangesofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
orangesofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
orangesofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
orangesofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 1);
orangesofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 1);
orangesofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 1);
orangesofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 1);
orangesofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 1);
orangesofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 1);
Furniture.addReplacementItem({id:"orangesofa"},{id:"orangesofa"}, Furniture.placeRotatableBlock(BlockID.orangesofa, orangesofaModel));

IDRegistry.genBlockID("yellowsofa");
Block.createBlock("yellowsofa", [
	{name: "yellowsofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowsofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowsofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowsofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("yellowsofa");
Item.createItem("yellowsofa", "Yellow Sofa", {name: "yellowsofa", meta: 0}, {stack: 64});

Translation.addTranslation("Yellow Sofa", {ru: "Желтая Софа"});
Recipes.addShaped({id: ItemID.yellowsofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,4]);

var yellowsofaModel = ModelAPI.newArray();
yellowsofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
yellowsofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
yellowsofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
yellowsofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
yellowsofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 4);
yellowsofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 4);
yellowsofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 4);
yellowsofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 4);
yellowsofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 4);
yellowsofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 4);
Furniture.addReplacementItem({id:"yellowsofa"},{id:"yellowsofa"}, Furniture.placeRotatableBlock(BlockID.yellowsofa, yellowsofaModel));

IDRegistry.genBlockID("limesofa");
Block.createBlock("limesofa", [
	{name: "limesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limesofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("limesofa");
Item.createItem("limesofa", "Lime Sofa", {name: "limesofa", meta: 0}, {stack: 64});

Translation.addTranslation("Lime Sofa", {ru: "Лаймовая Софа"});
Recipes.addShaped({id: ItemID.limesofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,5]);

var limesofaModel = ModelAPI.newArray();
limesofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
limesofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
limesofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
limesofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
limesofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 5);
limesofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 5);
limesofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 5);
limesofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 5);
limesofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 5);
limesofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 5);
Furniture.addReplacementItem({id:"limesofa"},{id:"limesofa"}, Furniture.placeRotatableBlock(BlockID.limesofa, limesofaModel));

IDRegistry.genBlockID("greensofa");
Block.createBlock("greensofa", [
	{name: "greensofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greensofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greensofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greensofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("greensofa");
Item.createItem("greensofa", "Green Sofa", {name: "greensofa", meta: 0}, {stack: 64});

Translation.addTranslation("Green Sofa", {ru: "Зеленая Софа"});
Recipes.addShaped({id: ItemID.greensofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,13]);

var greensofaModel = ModelAPI.newArray();
greensofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
greensofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
greensofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
greensofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
greensofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 13);
greensofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 13);
greensofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 13);
greensofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 13);
greensofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 13);
greensofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 13);
Furniture.addReplacementItem({id:"greensofa"},{id:"greensofa"}, Furniture.placeRotatableBlock(BlockID.greensofa, greensofaModel));

IDRegistry.genBlockID("cyansofa");
Block.createBlock("cyansofa", [
	{name: "cyansofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyansofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyansofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyansofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cyansofa");
Item.createItem("cyansofa", "Cyan Sofa", {name: "cyansofa", meta: 0}, {stack: 64});

Translation.addTranslation("Cyan Sofa", {ru: "Бирюзовая Софа"});
Recipes.addShaped({id: ItemID.cyansofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,9]);

var cyansofaModel = ModelAPI.newArray();
cyansofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
cyansofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
cyansofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
cyansofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
cyansofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 9);
cyansofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 9);
cyansofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 9);
cyansofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 9);
cyansofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 9);
cyansofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 9);
Furniture.addReplacementItem({id:"cyansofa"},{id:"cyansofa"}, Furniture.placeRotatableBlock(BlockID.cyansofa, cyansofaModel));

IDRegistry.genBlockID("lightbluesofa");
Block.createBlock("lightbluesofa", [
	{name: "lightbluesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightbluesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightbluesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightbluesofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lightbluesofa");
Item.createItem("lightbluesofa", "Light Blue Sofa", {name: "lightbluesofa", meta: 0}, {stack: 64});

Translation.addTranslation("Light Blue Sofa", {ru: "Голубая Софа"});
Recipes.addShaped({id: ItemID.lightbluesofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,3]);

var lightbluesofaModel = ModelAPI.newArray();
lightbluesofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
lightbluesofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
lightbluesofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
lightbluesofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
lightbluesofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 3);
lightbluesofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 3);
lightbluesofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 3);
lightbluesofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 3);
lightbluesofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 3);
lightbluesofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 3);
Furniture.addReplacementItem({id:"lightbluesofa"},{id:"lightbluesofa"}, Furniture.placeRotatableBlock(BlockID.lightbluesofa, lightbluesofaModel));

IDRegistry.genBlockID("bluesofa");
Block.createBlock("bluesofa", [
	{name: "bluesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bluesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bluesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bluesofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bluesofa");
Item.createItem("bluesofa", "Blue Sofa", {name: "bluesofa", meta: 0}, {stack: 64});

Translation.addTranslation("Blue Sofa", {ru: "Синяя Софа"});
Recipes.addShaped({id: ItemID.bluesofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,11]);

var bluesofaModel = ModelAPI.newArray();
bluesofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
bluesofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
bluesofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
bluesofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
bluesofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 11);
bluesofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 11);
bluesofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 11);
bluesofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 11);
bluesofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 11);
bluesofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 11);
Furniture.addReplacementItem({id:"bluesofa"},{id:"bluesofa"}, Furniture.placeRotatableBlock(BlockID.bluesofa, bluesofaModel));

IDRegistry.genBlockID("purplesofa");
Block.createBlock("purplesofa", [
	{name: "purplesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purplesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purplesofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purplesofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("purplesofa");
Item.createItem("purplesofa", "Purple Sofa", {name: "purplesofa", meta: 0}, {stack: 64});

Translation.addTranslation("Purple Sofa", {ru: "Фиолетвая Софа"});
Recipes.addShaped({id: ItemID.purplesofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,10]);

var purplesofaModel = ModelAPI.newArray();
purplesofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
purplesofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
purplesofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
purplesofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
purplesofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 10);
purplesofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 10);
purplesofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 10);
purplesofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 10);
purplesofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 10);
purplesofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 10);
Furniture.addReplacementItem({id:"purplesofa"},{id:"purplesofa"}, Furniture.placeRotatableBlock(BlockID.purplesofa, purplesofaModel));

IDRegistry.genBlockID("magentasofa");
Block.createBlock("magentasofa", [
	{name: "magentasofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentasofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentasofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentasofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("magentasofa");
Item.createItem("magentasofa", "Magenta Sofa", {name: "magentasofa", meta: 0}, {stack: 64});

Translation.addTranslation("Magenta Sofa", {ru: "Пурпурная Софа"});
Recipes.addShaped({id: ItemID.magentasofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,2]);

var magentasofaModel = ModelAPI.newArray();
magentasofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
magentasofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
magentasofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
magentasofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
magentasofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 2);
magentasofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 2);
magentasofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 2);
magentasofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 2);
magentasofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 2);
magentasofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 2);
Furniture.addReplacementItem({id:"magentasofa"},{id:"magentasofa"}, Furniture.placeRotatableBlock(BlockID.magentasofa, magentasofaModel));

IDRegistry.genBlockID("pinksofa");
Block.createBlock("pinksofa", [
	{name: "pinksofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinksofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinksofa", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinksofa", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("pinksofa");
Item.createItem("pinksofa", "Pink Sofa", {name: "pinksofa", meta: 0}, {stack: 64});

Translation.addTranslation("Pink Sofa", {ru: "Розовая Софа"});
Recipes.addShaped({id: ItemID.pinksofa, count: 1, data: 0}, ["a a", "aaa", "x x"], ["x",5,0, "a", 35,6]);

var pinksofaModel = ModelAPI.newArray();
pinksofaModel.addBoxByID("1", 1.6875,0,0.0625,1.9375,0.25,0.3125, 5);
pinksofaModel.addBoxByID("2", 0.0625,0,0.0625,0.3125,0.25,0.3125, 5);
pinksofaModel.addBoxByID("3", 0.0625,0,0.625,0.3125,0.25,0.875, 5);
pinksofaModel.addBoxByID("4", 1.6875,0,0.625,1.9375,0.25,0.875, 5);
pinksofaModel.addBoxByID("5", 1,0.375,0,2,1,0.1875, 35, 6);
pinksofaModel.addBoxByID("6", 1,0.125,0,2,0.375,1, 35, 6);
pinksofaModel.addBoxByID("7", 1.8125,0.375,0.1875,2,0.625,1, 35, 6);
pinksofaModel.addBoxByID("8", 0,0.375,0.1875,0.1875,0.625,1, 35, 6);
pinksofaModel.addBoxByID("9", 0,0.125,0,1,0.375,1, 35, 6);
pinksofaModel.addBoxByID("10", 0,0.375,0,1,1,0.1875, 35, 6);
Furniture.addReplacementItem({id:"pinksofa"},{id:"pinksofa"}, Furniture.placeRotatableBlock(BlockID.pinksofa, pinksofaModel));

Block.setShape(BlockID.whitesofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.lightgreysofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.greysofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.blacksofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.brownsofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.redsofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.orangesofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.yellowsofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.limesofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.greensofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.cyansofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.lightbluesofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.bluesofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.purplesofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.magentasofa,0,0,0,1,0.36,1);
Block.setShape(BlockID.pinksofa,0,0,0,1,0.36,1);