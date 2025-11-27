IDRegistry.genBlockID("oak_large_table");
Block.createBlock("oak_large_table", [
	{name: "Oak Large Table", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Large Table", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Large Table", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Large Table", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_large_table");
Item.createItem("oak_large_table", "Oak Large Table", {name: "oak_large_table", meta: 0}, {stack: 64});

var oak_large_tableModel = ModelAPI.newArray();
oak_large_tableModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5);
oak_large_tableModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5);
oak_large_tableModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
oak_large_tableModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
oak_large_tableModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5);
oak_large_tableModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5);
oak_large_tableModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5);
oak_large_tableModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
oak_large_tableModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
oak_large_tableModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
oak_large_tableModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
oak_large_tableModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
oak_large_tableModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
oak_large_tableModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5);
oak_large_tableModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5);
oak_large_tableModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5);
Furniture.addReplacementItem({id:"oak_large_table"},{id:"oak_large_table"}, Furniture.placeRotatableBlock(BlockID.oak_large_table, oak_large_tableModel));

IDRegistry.genBlockID("spruce_large_table");
Block.createBlock("spruce_large_table", [
	{name: "Spruce Large Table", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Large Table", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Large Table", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Large Table", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_large_table");
Item.createItem("spruce_large_table", "Spruce Large Table", {name: "spruce_large_table", meta: 0}, {stack: 64});

var spruce_large_tableModel = ModelAPI.newArray();
spruce_large_tableModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 1);
spruce_large_tableModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 1);
spruce_large_tableModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
spruce_large_tableModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
spruce_large_tableModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 1);
spruce_large_tableModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 1);
spruce_large_tableModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 1);
spruce_large_tableModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
spruce_large_tableModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
spruce_large_tableModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
spruce_large_tableModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
spruce_large_tableModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
spruce_large_tableModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
spruce_large_tableModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 1);
spruce_large_tableModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 1);
spruce_large_tableModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 1);
Furniture.addReplacementItem({id:"spruce_large_table"},{id:"spruce_large_table"}, Furniture.placeRotatableBlock(BlockID.spruce_large_table, spruce_large_tableModel));

IDRegistry.genBlockID("birch_large_table");
Block.createBlock("birch_large_table", [
	{name: "Birch Large Table", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Large Table", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Large Table", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Large Table", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_large_table");
Item.createItem("birch_large_table", "Birch Large Table", {name: "birch_large_table", meta: 0}, {stack: 64});

var birch_large_tableModel = ModelAPI.newArray();
birch_large_tableModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 2);
birch_large_tableModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 2);
birch_large_tableModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
birch_large_tableModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
birch_large_tableModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 2);
birch_large_tableModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 2);
birch_large_tableModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 2);
birch_large_tableModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
birch_large_tableModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
birch_large_tableModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
birch_large_tableModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
birch_large_tableModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
birch_large_tableModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
birch_large_tableModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 2);
birch_large_tableModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 2);
birch_large_tableModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 2);
Furniture.addReplacementItem({id:"birch_large_table"},{id:"birch_large_table"}, Furniture.placeRotatableBlock(BlockID.birch_large_table, birch_large_tableModel));

IDRegistry.genBlockID("jungle_large_table");
Block.createBlock("jungle_large_table", [
	{name: "Jungle Large Table", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Large Table", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Large Table", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Large Table", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_large_table");
Item.createItem("jungle_large_table", "Jungle Large Table", {name: "jungle_large_table", meta: 0}, {stack: 64});

var jungle_large_tableModel = ModelAPI.newArray();
jungle_large_tableModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 3);
jungle_large_tableModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 3);
jungle_large_tableModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
jungle_large_tableModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
jungle_large_tableModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 3);
jungle_large_tableModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 3);
jungle_large_tableModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 3);
jungle_large_tableModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
jungle_large_tableModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
jungle_large_tableModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
jungle_large_tableModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
jungle_large_tableModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
jungle_large_tableModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
jungle_large_tableModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 3);
jungle_large_tableModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 3);
jungle_large_tableModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 3);
Furniture.addReplacementItem({id:"jungle_large_table"},{id:"jungle_large_table"}, Furniture.placeRotatableBlock(BlockID.jungle_large_table, jungle_large_tableModel));

IDRegistry.genBlockID("acacia_large_table");
Block.createBlock("acacia_large_table", [
	{name: "Acacia Large Table", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Large Table", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Large Table", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Large Table", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_large_table");
Item.createItem("acacia_large_table", "Acacia Large Table", {name: "acacia_large_table", meta: 0}, {stack: 64});

var acacia_large_tableModel = ModelAPI.newArray();
acacia_large_tableModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 4);
acacia_large_tableModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 4);
acacia_large_tableModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
acacia_large_tableModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
acacia_large_tableModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 4);
acacia_large_tableModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 4);
acacia_large_tableModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 4);
acacia_large_tableModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
acacia_large_tableModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
acacia_large_tableModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
acacia_large_tableModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
acacia_large_tableModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
acacia_large_tableModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
acacia_large_tableModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 4);
acacia_large_tableModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 4);
acacia_large_tableModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 4);
Furniture.addReplacementItem({id:"acacia_large_table"},{id:"acacia_large_table"}, Furniture.placeRotatableBlock(BlockID.acacia_large_table, acacia_large_tableModel));

IDRegistry.genBlockID("dark_oak_large_table");
Block.createBlock("dark_oak_large_table", [
	{name: "Dark Oak Large Table", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Large Table", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Large Table", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Large Table", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_large_table");
Item.createItem("dark_oak_large_table", "Dark Oak Large Table", {name: "dark_oak_large_table", meta: 0}, {stack: 64});

var dark_oak_large_tableModel = ModelAPI.newArray();
dark_oak_large_tableModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 5);
dark_oak_large_tableModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 5);
dark_oak_large_tableModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
dark_oak_large_tableModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
dark_oak_large_tableModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 5);
dark_oak_large_tableModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 5);
dark_oak_large_tableModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 5);
dark_oak_large_tableModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
dark_oak_large_tableModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
dark_oak_large_tableModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
dark_oak_large_tableModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
dark_oak_large_tableModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
dark_oak_large_tableModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
dark_oak_large_tableModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 5);
dark_oak_large_tableModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 5);
dark_oak_large_tableModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 5);
Furniture.addReplacementItem({id:"dark_oak_large_table"},{id:"dark_oak_large_table"}, Furniture.placeRotatableBlock(BlockID.dark_oak_large_table, dark_oak_large_tableModel));

Translation.addTranslation("Oak Large Table", {ru: "Дубовая Большая Стол"});
Translation.addTranslation("Spruce Large Table", {ru: "Еловая Большая Стол"});
Translation.addTranslation("Birch Large Table", {ru: "Берёзовая Большая Стол"});
Translation.addTranslation("Jungle Large Table", {ru: "Джунглевая Большая Стол"});
Translation.addTranslation("Acacia Large Table", {ru: "Акациевая Большая Стол"});
Translation.addTranslation("Dark Oak Large Table", {ru: "Тёмно Дубовая Большая Стол"});

Recipes.addShaped({id: ItemID.oak_large_table, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,0, 'x', 158,0]);
Recipes.addShaped({id: ItemID.spruce_large_table, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,1, 'x', 158,1]);
Recipes.addShaped({id: ItemID.birch_large_table, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,2, 'x', 158,2]);
Recipes.addShaped({id: ItemID.jungle_large_table, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,3, 'x', 158,3]);
Recipes.addShaped({id: ItemID.acacia_large_table, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,4, 'x', 158,4]);
Recipes.addShaped({id: ItemID.dark_oak_large_table, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,5, 'x', 158,5]);