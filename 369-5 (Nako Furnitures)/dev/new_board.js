IDRegistry.genBlockID("oak_board");
Block.createBlock("oak_board", [
	{name: "Oak Board", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Board", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Board", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Board", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_board");
Item.createItem("oak_board", "Oak Board", {name: "oak_board", meta: 0}, {stack: 64});

var oak_boardModel = ModelAPI.newArray();
oak_boardModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5);
oak_boardModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5);
oak_boardModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5);
oak_boardModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5);
oak_boardModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5);
oak_boardModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
oak_boardModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5);
oak_boardModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5);
oak_boardModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5);
oak_boardModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5);
oak_boardModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5);
oak_boardModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5);
oak_boardModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5);
oak_boardModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5);
oak_boardModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5);
oak_boardModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5);
oak_boardModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5);
Furniture.addReplacementItem({id:"oak_board"},{id:"oak_board"}, Furniture.placeRotatableBlock(BlockID.oak_board, oak_boardModel));

IDRegistry.genBlockID("spruce_board");
Block.createBlock("spruce_board", [
	{name: "Spruce Board", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Board", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Board", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Board", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_board");
Item.createItem("spruce_board", "Spruce Board", {name: "spruce_board", meta: 0}, {stack: 64});

var spruce_boardModel = ModelAPI.newArray();
spruce_boardModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 1);
spruce_boardModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 1);
spruce_boardModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 1);
spruce_boardModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 1);
spruce_boardModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 1);
spruce_boardModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
spruce_boardModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 1);
spruce_boardModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 1);
spruce_boardModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 1);
spruce_boardModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 1);
spruce_boardModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 1);
spruce_boardModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 1);
spruce_boardModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 1);
spruce_boardModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 1);
spruce_boardModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 1);
spruce_boardModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 1);
spruce_boardModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 1);
Furniture.addReplacementItem({id:"spruce_board"},{id:"spruce_board"}, Furniture.placeRotatableBlock(BlockID.spruce_board, spruce_boardModel));

IDRegistry.genBlockID("birch_board");
Block.createBlock("birch_board", [
	{name: "Birch Board", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Board", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Board", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Board", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_board");
Item.createItem("birch_board", "Birch Board", {name: "birch_board", meta: 0}, {stack: 64});

var birch_boardModel = ModelAPI.newArray();
birch_boardModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 2);
birch_boardModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 2);
birch_boardModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 2);
birch_boardModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 2);
birch_boardModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 2);
birch_boardModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
birch_boardModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 2);
birch_boardModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 2);
birch_boardModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 2);
birch_boardModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 2);
birch_boardModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 2);
birch_boardModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 2);
birch_boardModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 2);
birch_boardModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 2);
birch_boardModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 2);
birch_boardModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 2);
birch_boardModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 2);
Furniture.addReplacementItem({id:"birch_board"},{id:"birch_board"}, Furniture.placeRotatableBlock(BlockID.birch_board, birch_boardModel));

IDRegistry.genBlockID("jungle_board");
Block.createBlock("jungle_board", [
	{name: "Jungle Board", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Board", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Board", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Board", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_board");
Item.createItem("jungle_board", "Jungle Board", {name: "jungle_board", meta: 0}, {stack: 64});

var jungle_boardModel = ModelAPI.newArray();
jungle_boardModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 3);
jungle_boardModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 3);
jungle_boardModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 3);
jungle_boardModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 3);
jungle_boardModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 3);
jungle_boardModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
jungle_boardModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 3);
jungle_boardModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 3);
jungle_boardModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 3);
jungle_boardModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 3);
jungle_boardModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 3);
jungle_boardModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 3);
jungle_boardModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 3);
jungle_boardModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 3);
jungle_boardModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 3);
jungle_boardModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 3);
jungle_boardModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 3);
Furniture.addReplacementItem({id:"jungle_board"},{id:"jungle_board"}, Furniture.placeRotatableBlock(BlockID.jungle_board, jungle_boardModel));

IDRegistry.genBlockID("acacia_board");
Block.createBlock("acacia_board", [
	{name: "Acacia Board", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Board", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Board", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Board", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_board");
Item.createItem("acacia_board", "Acacia Board", {name: "acacia_board", meta: 0}, {stack: 64});

var acacia_boardModel = ModelAPI.newArray();
acacia_boardModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 4);
acacia_boardModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 4);
acacia_boardModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 4);
acacia_boardModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 4);
acacia_boardModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 4);
acacia_boardModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
acacia_boardModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 4);
acacia_boardModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 4);
acacia_boardModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 4);
acacia_boardModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 4);
acacia_boardModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 4);
acacia_boardModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 4);
acacia_boardModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 4);
acacia_boardModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 4);
acacia_boardModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 4);
acacia_boardModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 4);
acacia_boardModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 4);
Furniture.addReplacementItem({id:"acacia_board"},{id:"acacia_board"}, Furniture.placeRotatableBlock(BlockID.acacia_board, acacia_boardModel));

IDRegistry.genBlockID("dark_oak_board");
Block.createBlock("dark_oak_board", [
	{name: "Dark Oak Board", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Board", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Board", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Board", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_board");
Item.createItem("dark_oak_board", "Dark Oak Board", {name: "dark_oak_board", meta: 0}, {stack: 64});

var dark_oak_boardModel = ModelAPI.newArray();
dark_oak_boardModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 5);
dark_oak_boardModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 5);
dark_oak_boardModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 5);
dark_oak_boardModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 5);
dark_oak_boardModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 5);
dark_oak_boardModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
dark_oak_boardModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 5);
dark_oak_boardModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 5);
dark_oak_boardModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 5);
dark_oak_boardModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 5);
dark_oak_boardModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 5);
dark_oak_boardModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 5);
dark_oak_boardModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 5);
dark_oak_boardModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 5);
dark_oak_boardModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 5);
dark_oak_boardModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 5);
dark_oak_boardModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 5);
Furniture.addReplacementItem({id:"dark_oak_board"},{id:"dark_oak_board"}, Furniture.placeRotatableBlock(BlockID.dark_oak_board, dark_oak_boardModel));

Block.setShape(BlockID.oak_board,0,0,1,1,1,1);
Block.setShape(BlockID.spruce_board,0,0,1,1,1,1);
Block.setShape(BlockID.birch_board,0,0,1,1,1,1);
Block.setShape(BlockID.jungle_board,0,0,1,1,1,1);
Block.setShape(BlockID.acacia_board,0,0,1,1,1,1);
Block.setShape(BlockID.dark_oak_board,0,0,1,1,1,1);

Translation.addTranslation("Oak Board", {ru: "Дубовая Доска"});
Translation.addTranslation("Spruce Board", {ru: "Еловая Доска"});
Translation.addTranslation("Birch Board", {ru: "Берёзовая Доска"});
Translation.addTranslation("Jungle Board", {ru: "ДжунглеваяДоска"});
Translation.addTranslation("Acacia Board", {ru: "Акациевая Доска"});
Translation.addTranslation("Dark Oak Board", {ru: "Тёмно Дубовая Доска"});

Recipes.addShaped({id: ItemID.oak_board, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,0, 'x', 85,0, 's', 351,2])
Recipes.addShaped({id: ItemID.spruce_board, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,1, 'x', 85,1, 's', 351,2])
Recipes.addShaped({id: ItemID.birch_board, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,2, 'x', 85,2, 's', 351,2])
Recipes.addShaped({id: ItemID.jungle_board, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,3, 'x', 85,3, 's', 351,2])
Recipes.addShaped({id: ItemID.acacia_board, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,4, 'x', 85,4, 's', 351,2])
Recipes.addShaped({id: ItemID.dark_oak_board, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,5, 'x', 85,5, 's', 351,2])