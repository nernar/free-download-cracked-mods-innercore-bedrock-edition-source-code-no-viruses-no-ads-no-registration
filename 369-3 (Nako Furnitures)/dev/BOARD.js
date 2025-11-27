IDRegistry.genBlockID("boardoak");
Block.createBlock("boardoak", [
	{name: "boardoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("boardoak");
Item.createItem("boardoak", "Board", {name: "boardoak", meta: 0}, {stack: 64});

Translation.addTranslation("Board", {ru: "Доска"});
Recipes.addShaped({id: ItemID.boardoak, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,0, 'x', 85,0, 's', 351,2])

var boardoakModel = ModelAPI.newArray();
boardoakModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5);
boardoakModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5);
boardoakModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5);
boardoakModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5);
boardoakModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5);
boardoakModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
boardoakModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5);
boardoakModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5);
boardoakModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5);
boardoakModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5);
boardoakModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5);
boardoakModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5);
boardoakModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5);
boardoakModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5);
boardoakModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5);
boardoakModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5);
boardoakModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5);
Furniture.addReplacementItem({id:"boardoak"},{id:"boardoak"}, Furniture.placeRotatableBlock(BlockID.boardoak, boardoakModel));

IDRegistry.genBlockID("boardspruce");
Block.createBlock("boardspruce", [
	{name: "boardspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardspruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("boardspruce");
Item.createItem("boardspruce", "Board", {name: "boardspruce", meta: 0}, {stack: 64});

Translation.addTranslation("Board", {ru: "Доска"});
Recipes.addShaped({id: ItemID.boardspruce, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,1, 'x', 85,1, 's', 351,2])

var boardspruceModel = ModelAPI.newArray();
boardspruceModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 1);
boardspruceModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 1);
boardspruceModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 1);
boardspruceModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 1);
boardspruceModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 1);
boardspruceModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
boardspruceModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 1);
boardspruceModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 1);
boardspruceModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 1);
boardspruceModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 1);
boardspruceModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 1);
boardspruceModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 1);
boardspruceModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 1);
boardspruceModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 1);
boardspruceModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 1);
boardspruceModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 1);
boardspruceModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 1);
Furniture.addReplacementItem({id:"boardspruce"},{id:"boardspruce"}, Furniture.placeRotatableBlock(BlockID.boardspruce, boardspruceModel));

IDRegistry.genBlockID("boardbrich");
Block.createBlock("boardbrich", [
	{name: "boardbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardbrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("boardbrich");
Item.createItem("boardbrich", "Board", {name: "boardbrich", meta: 0}, {stack: 64});

Translation.addTranslation("Board", {ru: "Доска"});
Recipes.addShaped({id: ItemID.boardbrich, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,2, 'x', 85,2, 's', 351,2])

var boardbrichModel = ModelAPI.newArray();
boardbrichModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 2);
boardbrichModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 2);
boardbrichModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 2);
boardbrichModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 2);
boardbrichModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 2);
boardbrichModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
boardbrichModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 2);
boardbrichModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 2);
boardbrichModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 2);
boardbrichModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 2);
boardbrichModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 2);
boardbrichModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 2);
boardbrichModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 2);
boardbrichModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 2);
boardbrichModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 2);
boardbrichModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 2);
boardbrichModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 2);
Furniture.addReplacementItem({id:"boardbrich"},{id:"boardbrich"}, Furniture.placeRotatableBlock(BlockID.boardbrich, boardbrichModel));

IDRegistry.genBlockID("boardjungle");
Block.createBlock("boardjungle", [
	{name: "boardjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardjungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("boardjungle");
Item.createItem("boardjungle", "Board", {name: "boardjungle", meta: 0}, {stack: 64});

Translation.addTranslation("Board", {ru: "Доска"});
Recipes.addShaped({id: ItemID.boardjungle, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,3, 'x', 85,3, 's', 351,2])

var boardjungleModel = ModelAPI.newArray();
boardjungleModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 3);
boardjungleModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 3);
boardjungleModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 3);
boardjungleModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 3);
boardjungleModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 3);
boardjungleModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
boardjungleModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 3);
boardjungleModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 3);
boardjungleModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 3);
boardjungleModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 3);
boardjungleModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 3);
boardjungleModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 3);
boardjungleModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 3);
boardjungleModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 3);
boardjungleModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 3);
boardjungleModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 3);
boardjungleModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 3);
Furniture.addReplacementItem({id:"boardjungle"},{id:"boardjungle"}, Furniture.placeRotatableBlock(BlockID.boardjungle, boardjungleModel));

IDRegistry.genBlockID("boardacacia");
Block.createBlock("boardacacia", [
	{name: "boardacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("boardacacia");
Item.createItem("boardacacia", "Board", {name: "boardacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Board", {ru: "Доска"});
Recipes.addShaped({id: ItemID.boardacacia, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,4, 'x', 85,4, 's', 351,2])

var boardacaciaModel = ModelAPI.newArray();
boardacaciaModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 4);
boardacaciaModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 4);
boardacaciaModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 4);
boardacaciaModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 4);
boardacaciaModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 4);
boardacaciaModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
boardacaciaModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 4);
boardacaciaModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 4);
boardacaciaModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 4);
boardacaciaModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 4);
boardacaciaModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 4);
boardacaciaModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 4);
boardacaciaModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 4);
boardacaciaModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 4);
boardacaciaModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 4);
boardacaciaModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 4);
boardacaciaModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 4);
Furniture.addReplacementItem({id:"boardacacia"},{id:"boardacacia"}, Furniture.placeRotatableBlock(BlockID.boardacacia, boardacaciaModel));

IDRegistry.genBlockID("boardbigoak");
Block.createBlock("boardbigoak", [
	{name: "boardbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "boardbigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("boardbigoak");
Item.createItem("boardbigoak", "Board", {name: "boardbigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Board", {ru: "Доска"});
Recipes.addShaped({id: ItemID.boardbigoak, count: 1, data: 0}, ["aaa", "xsx", "aaa"], ['a', 158,5, 'x', 85,5, 's', 351,2])

var boardbigoakModel = ModelAPI.newArray();
boardbigoakModel.addBoxByID("1", 1,0,0.125,1.875,0.125,0.375, 5, 5);
boardbigoakModel.addBoxByID("2", -1,1,0,0,2,0.125, 159, 5, 5);
boardbigoakModel.addBoxByID("3", 1.875,1,0.125,2,2,0.1875, 5, 5);
boardbigoakModel.addBoxByID("4", 0,1.875,0.125,1,2,0.1875, 5, 5);
boardbigoakModel.addBoxByID("5", -1,1,0.125,-0.875,2,0.1875, 5, 5);
boardbigoakModel.addBoxByID("6", 1.4375,0.125,0.1875,1.6875,0.1875,0.25, 35);
boardbigoakModel.addBoxByID("7", -1,0,0.125,-0.875,1,0.1875, 5, 5);
boardbigoakModel.addBoxByID("8", 1.875,0,0.125,2,1,0.1875, 5, 5);
boardbigoakModel.addBoxByID("9", -0.875,1.875,0.125,0,2,0.1875, 5, 5);
boardbigoakModel.addBoxByID("10", 1,1.875,0.125,1.875,2,0.1875, 5, 5);
boardbigoakModel.addBoxByID("11", 0,0,0.125,1,0.125,0.375, 5, 5);
boardbigoakModel.addBoxByID("12", -0.875,0,0.125,0,0.125,0.375, 5, 5);
boardbigoakModel.addBoxByID("13", -1,0,0,0,1,0.125, 159, 5, 5);
boardbigoakModel.addBoxByID("14", 0,0,0,1,1,0.125, 159, 5, 5);
boardbigoakModel.addBoxByID("15", 1,0,0,2,1,0.125, 159, 5, 5);
boardbigoakModel.addBoxByID("16", 1,1,0,2,2,0.125, 159, 5, 5);
boardbigoakModel.addBoxByID("17", 0,1,0,1,2,0.125, 159, 5, 5);
Furniture.addReplacementItem({id:"boardbigoak"},{id:"boardbigoak"}, Furniture.placeRotatableBlock(BlockID.boardbigoak, boardbigoakModel));

Block.setShape(BlockID.boardoak,0,0,1,1,1,1);
Block.setShape(BlockID.boardspruce,0,0,1,1,1,1);
Block.setShape(BlockID.boardbrich,0,0,1,1,1,1);
Block.setShape(BlockID.boardjungle,0,0,1,1,1,1);
Block.setShape(BlockID.boardacacia,0,0,1,1,1,1);
Block.setShape(BlockID.boardbigoak,0,0,1,1,1,1);