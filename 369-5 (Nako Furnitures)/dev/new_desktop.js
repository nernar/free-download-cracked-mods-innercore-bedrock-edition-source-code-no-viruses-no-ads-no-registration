IDRegistry.genBlockID("oak_desktop");
Block.createBlock("oak_desktop", [
	{name: "Oak Desktop", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Desktop", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Desktop", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Desktop", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_desktop");
Item.createItem("oak_desktop", "Oak Desktop", {name: "oak_desktop", meta: 0}, {stack: 64});

var oak_desktopModel = ModelAPI.newArray();
oak_desktopModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5);
oak_desktopModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
oak_desktopModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
oak_desktopModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
oak_desktopModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5);
oak_desktopModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5);
oak_desktopModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
oak_desktopModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
oak_desktopModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
oak_desktopModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5);
oak_desktopModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5);
oak_desktopModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5);
oak_desktopModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5);
oak_desktopModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5);
oak_desktopModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5);
oak_desktopModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5);
oak_desktopModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
oak_desktopModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
oak_desktopModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
oak_desktopModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
oak_desktopModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"oak_desktop"},{id:"oak_desktop"}, Furniture.placeRotatableBlock(BlockID.oak_desktop, oak_desktopModel));

IDRegistry.genBlockID("spruce_desktop");
Block.createBlock("spruce_desktop", [
	{name: "Spruce Desktop", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Desktop", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Desktop", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Desktop", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_desktop");
Item.createItem("spruce_desktop", "Spruce Desktop", {name: "spruce_desktop", meta: 0}, {stack: 64});

var spruce_desktopModel = ModelAPI.newArray();
spruce_desktopModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 1);
spruce_desktopModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
spruce_desktopModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
spruce_desktopModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
spruce_desktopModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 1);
spruce_desktopModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 1);
spruce_desktopModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
spruce_desktopModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
spruce_desktopModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
spruce_desktopModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 1);
spruce_desktopModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 1);
spruce_desktopModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 1);
spruce_desktopModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 1);
spruce_desktopModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 1);
spruce_desktopModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 1);
spruce_desktopModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 1);
spruce_desktopModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
spruce_desktopModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
spruce_desktopModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
spruce_desktopModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
spruce_desktopModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"spruce_desktop"},{id:"spruce_desktop"}, Furniture.placeRotatableBlock(BlockID.spruce_desktop, spruce_desktopModel));

IDRegistry.genBlockID("birch_desktop");
Block.createBlock("birch_desktop", [
	{name: "Birch Desktop", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Desktop", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Desktop", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Desktop", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_desktop");
Item.createItem("birch_desktop", "Birch Desktop", {name: "birch_desktop", meta: 0}, {stack: 64});

var birch_desktopModel = ModelAPI.newArray();
birch_desktopModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 2);
birch_desktopModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
birch_desktopModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
birch_desktopModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
birch_desktopModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 2);
birch_desktopModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 2);
birch_desktopModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
birch_desktopModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
birch_desktopModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
birch_desktopModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 2);
birch_desktopModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 2);
birch_desktopModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 2);
birch_desktopModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 2);
birch_desktopModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 2);
birch_desktopModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 2);
birch_desktopModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 2);
birch_desktopModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
birch_desktopModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
birch_desktopModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
birch_desktopModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
birch_desktopModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"birch_desktop"},{id:"birch_desktop"}, Furniture.placeRotatableBlock(BlockID.birch_desktop, birch_desktopModel));

IDRegistry.genBlockID("jungle_desktop");
Block.createBlock("jungle_desktop", [
	{name: "Jungle Desktop", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Desktop", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Desktop", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Desktop", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_desktop");
Item.createItem("jungle_desktop", "Jungle Desktop", {name: "jungle_desktop", meta: 0}, {stack: 64});

var jungle_desktopModel = ModelAPI.newArray();
jungle_desktopModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 3);
jungle_desktopModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
jungle_desktopModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
jungle_desktopModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
jungle_desktopModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 3);
jungle_desktopModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 3);
jungle_desktopModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
jungle_desktopModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
jungle_desktopModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
jungle_desktopModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 3);
jungle_desktopModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 3);
jungle_desktopModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 3);
jungle_desktopModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 3);
jungle_desktopModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 3);
jungle_desktopModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 3);
jungle_desktopModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 3);
jungle_desktopModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
jungle_desktopModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
jungle_desktopModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
jungle_desktopModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
jungle_desktopModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"jungle_desktop"},{id:"jungle_desktop"}, Furniture.placeRotatableBlock(BlockID.jungle_desktop, jungle_desktopModel));

IDRegistry.genBlockID("acacia_desktop");
Block.createBlock("acacia_desktop", [
	{name: "Acacia Desktop", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Desktop", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Desktop", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Desktop", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_desktop");
Item.createItem("acacia_desktop", "Acacia Desktop", {name: "acacia_desktop", meta: 0}, {stack: 64});

var acacia_desktopModel = ModelAPI.newArray();
acacia_desktopModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 4);
acacia_desktopModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
acacia_desktopModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
acacia_desktopModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
acacia_desktopModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 4);
acacia_desktopModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 4);
acacia_desktopModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
acacia_desktopModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
acacia_desktopModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
acacia_desktopModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 4);
acacia_desktopModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 4);
acacia_desktopModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 4);
acacia_desktopModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 4);
acacia_desktopModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 4);
acacia_desktopModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 4);
acacia_desktopModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 4);
acacia_desktopModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
acacia_desktopModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
acacia_desktopModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
acacia_desktopModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
acacia_desktopModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"acacia_desktop"},{id:"acacia_desktop"}, Furniture.placeRotatableBlock(BlockID.acacia_desktop, acacia_desktopModel));

IDRegistry.genBlockID("dark_oak_desktop");
Block.createBlock("dark_oak_desktop", [
	{name: "Dark Oak Desktop", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Desktop", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Desktop", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Desktop", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_desktop");
Item.createItem("dark_oak_desktop", "Dark Oak Desktop", {name: "dark_oak_desktop", meta: 0}, {stack: 64});

var dark_oak_desktopModel = ModelAPI.newArray();
dark_oak_desktopModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 5);
dark_oak_desktopModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
dark_oak_desktopModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
dark_oak_desktopModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
dark_oak_desktopModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 5);
dark_oak_desktopModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 5);
dark_oak_desktopModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
dark_oak_desktopModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
dark_oak_desktopModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
dark_oak_desktopModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 5);
dark_oak_desktopModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 5);
dark_oak_desktopModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 5);
dark_oak_desktopModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 5);
dark_oak_desktopModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 5);
dark_oak_desktopModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 5);
dark_oak_desktopModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 5);
dark_oak_desktopModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
dark_oak_desktopModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
dark_oak_desktopModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
dark_oak_desktopModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
dark_oak_desktopModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"dark_oak_desktop"},{id:"dark_oak_desktop"}, Furniture.placeRotatableBlock(BlockID.dark_oak_desktop, dark_oak_desktopModel));

Translation.addTranslation("Oak Desktop", {ru: "Дубовая Рабочий Стол"});
Translation.addTranslation("Spruce Desktop", {ru: "Еловая Рабочий Стол"});
Translation.addTranslation("Birch Desktop", {ru: "Берёзовая Рабочий Стол"});
Translation.addTranslation("Jungle Desktop", {ru: "Джунглевая Рабочий Стол"});
Translation.addTranslation("Acacia Desktop", {ru: "Акациевая Рабочий Стол"});
Translation.addTranslation("Dark Oak Desktop", {ru: "Тёмно Дубовая Рабочий Стол"});

Recipes.addShaped({id: ItemID.oak_desktop, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,0, 'z', 158,0])
Recipes.addShaped({id: ItemID.spruce_desktop, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,1, 'z', 158,1])
Recipes.addShaped({id: ItemID.birch_desktop, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,2, 'z', 158,2])
Recipes.addShaped({id: ItemID.jungle_desktop, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,3, 'z', 158,3])
Recipes.addShaped({id: ItemID.acacia_desktop, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,4, 'z', 158,4])
Recipes.addShaped({id: ItemID.dark_oak_desktop, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,5, 'z', 158,5])