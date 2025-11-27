IDRegistry.genBlockID("oak_desk");
Block.createBlock("oak_desk", [
	{name: "Oak Desk", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Desk", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Desk", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Desk", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_desk");
Item.createItem("oak_desk", "Oak Desk", {name: "oak_desk", meta: 0}, {stack: 64});

var oak_deskModel = ModelAPI.newArray();
oak_deskModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
oak_deskModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5);
oak_deskModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
oak_deskModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
oak_deskModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
oak_deskModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
oak_deskModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
oak_deskModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
oak_deskModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
oak_deskModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5);
oak_deskModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
oak_deskModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
oak_deskModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
oak_deskModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
oak_deskModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
oak_deskModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
oak_deskModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
oak_deskModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"oak_desk"},{id:"oak_desk"}, Furniture.placeRotatableBlock(BlockID.oak_desk, oak_deskModel));

IDRegistry.genBlockID("spruce_desk");
Block.createBlock("spruce_desk", [
	{name: "Spruce Desk", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Desk", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Desk", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Desk", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_desk");
Item.createItem("spruce_desk", "Spruce Desk", {name: "spruce_desk", meta: 0}, {stack: 64});

var spruce_deskModel = ModelAPI.newArray();
spruce_deskModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
spruce_deskModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 1);
spruce_deskModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
spruce_deskModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
spruce_deskModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
spruce_deskModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
spruce_deskModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
spruce_deskModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
spruce_deskModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
spruce_deskModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 1);
spruce_deskModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
spruce_deskModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
spruce_deskModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
spruce_deskModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
spruce_deskModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
spruce_deskModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
spruce_deskModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
spruce_deskModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"spruce_desk"},{id:"spruce_desk"}, Furniture.placeRotatableBlock(BlockID.spruce_desk, spruce_deskModel));

IDRegistry.genBlockID("birch_desk");
Block.createBlock("birch_desk", [
	{name: "Birch Desk", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Desk", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Desk", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Desk", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_desk");
Item.createItem("birch_desk", "Birch Desk", {name: "birch_desk", meta: 0}, {stack: 64});

var birch_deskModel = ModelAPI.newArray();
birch_deskModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
birch_deskModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 2);
birch_deskModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
birch_deskModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
birch_deskModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
birch_deskModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
birch_deskModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
birch_deskModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
birch_deskModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
birch_deskModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 2);
birch_deskModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
birch_deskModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
birch_deskModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
birch_deskModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
birch_deskModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
birch_deskModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
birch_deskModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
birch_deskModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"birch_desk"},{id:"birch_desk"}, Furniture.placeRotatableBlock(BlockID.birch_desk, birch_deskModel));

IDRegistry.genBlockID("jungle_desk");
Block.createBlock("jungle_desk", [
	{name: "Jungle Desk", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Desk", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Desk", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Desk", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_desk");
Item.createItem("jungle_desk", "Jungle Desk", {name: "jungle_desk", meta: 0}, {stack: 64});

var jungle_deskModel = ModelAPI.newArray();
jungle_deskModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
jungle_deskModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 3);
jungle_deskModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
jungle_deskModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
jungle_deskModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
jungle_deskModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
jungle_deskModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
jungle_deskModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
jungle_deskModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
jungle_deskModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 3);
jungle_deskModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
jungle_deskModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
jungle_deskModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
jungle_deskModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
jungle_deskModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
jungle_deskModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
jungle_deskModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
jungle_deskModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"jungle_desk"},{id:"jungle_desk"}, Furniture.placeRotatableBlock(BlockID.jungle_desk, jungle_deskModel));

IDRegistry.genBlockID("acacia_desk");
Block.createBlock("acacia_desk", [
	{name: "Acacia Desk", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Desk", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Desk", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Desk", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_desk");
Item.createItem("acacia_desk", "Acacia Desk", {name: "acacia_desk", meta: 0}, {stack: 64});

var acacia_deskModel = ModelAPI.newArray();
acacia_deskModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
acacia_deskModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 4);
acacia_deskModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
acacia_deskModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
acacia_deskModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
acacia_deskModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
acacia_deskModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
acacia_deskModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
acacia_deskModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
acacia_deskModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 4);
acacia_deskModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
acacia_deskModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
acacia_deskModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
acacia_deskModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
acacia_deskModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
acacia_deskModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
acacia_deskModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
acacia_deskModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"acacia_desk"},{id:"acacia_desk"}, Furniture.placeRotatableBlock(BlockID.acacia_desk, acacia_deskModel));

IDRegistry.genBlockID("dark_oak_desk");
Block.createBlock("dark_oak_desk", [
	{name: "Dark Oak Desk", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Desk", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Desk", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Desk", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_desk");
Item.createItem("dark_oak_desk", "Dark Oak Desk", {name: "dark_oak_desk", meta: 0}, {stack: 64});

var dark_oak_deskModel = ModelAPI.newArray();
dark_oak_deskModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
dark_oak_deskModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 5);
dark_oak_deskModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
dark_oak_deskModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
dark_oak_deskModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
dark_oak_deskModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
dark_oak_deskModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
dark_oak_deskModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
dark_oak_deskModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
dark_oak_deskModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 5);
dark_oak_deskModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
dark_oak_deskModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
dark_oak_deskModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
dark_oak_deskModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
dark_oak_deskModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
dark_oak_deskModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
dark_oak_deskModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
dark_oak_deskModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"dark_oak_desk"},{id:"dark_oak_desk"}, Furniture.placeRotatableBlock(BlockID.dark_oak_desk, dark_oak_deskModel));

Translation.addTranslation("Oak Desk", {ru: "Дубовая Парта"});
Translation.addTranslation("Spruce Desk", {ru: "Еловая Парта"});
Translation.addTranslation("Birch Desk", {ru: "Берёзовая Парта"});
Translation.addTranslation("Jungle Desk", {ru: "Джунглевая Парта"});
Translation.addTranslation("Acacia Desk", {ru: "Акациевая Парта"});
Translation.addTranslation("Dark Oak Desk", {ru: "Тёмно Дубовая Парта"});

Recipes.addShaped({id: ItemID.oak_desk, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 0, 'c', 85, 0]);
Recipes.addShaped({id: ItemID.spruce_desk, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 1, 'c', 85, 1]);
Recipes.addShaped({id: ItemID.birch_desk, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 2, 'c', 85, 2]);
Recipes.addShaped({id: ItemID.jungle_desk, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 3, 'c', 85, 3]);
Recipes.addShaped({id: ItemID.acacia_desk, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 4, 'c', 85, 4]);
Recipes.addShaped({id: ItemID.dark_oak_desk, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 5, 'c', 85, 5]);