IDRegistry.genBlockID("worktopoak");
Block.createBlock("worktopoak", [
	{name: "worktopoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("worktopoak");
Item.createItem("worktopoak", "Worktop", {name: "worktopoak", meta: 0}, {stack: 64});

Translation.addTranslation("Worktop", {ru: "Рабочий Стол"});
Recipes.addShaped({id: ItemID.worktopoak, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,0, 'z', 158,0])

var worktopoakModel = ModelAPI.newArray();
worktopoakModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5);
worktopoakModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
worktopoakModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
worktopoakModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
worktopoakModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5);
worktopoakModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5);
worktopoakModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
worktopoakModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
worktopoakModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
worktopoakModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5);
worktopoakModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5);
worktopoakModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5);
worktopoakModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5);
worktopoakModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5);
worktopoakModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5);
worktopoakModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5);
worktopoakModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
worktopoakModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
worktopoakModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
worktopoakModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
worktopoakModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"worktopoak"},{id:"worktopoak"}, Furniture.placeRotatableBlock(BlockID.worktopoak, worktopoakModel));

IDRegistry.genBlockID("worktopspruce");
Block.createBlock("worktopspruce", [
	{name: "worktopspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopspruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("worktopspruce");
Item.createItem("worktopspruce", "Worktop", {name: "worktopspruce", meta: 0}, {stack: 64});

Translation.addTranslation("Worktop", {ru: "Рабочий Стол"});
Recipes.addShaped({id: ItemID.worktopspruce, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,1, 'z', 158,1])

var worktopspruceModel = ModelAPI.newArray();
worktopspruceModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 1);
worktopspruceModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
worktopspruceModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
worktopspruceModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
worktopspruceModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 1);
worktopspruceModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 1);
worktopspruceModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
worktopspruceModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
worktopspruceModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
worktopspruceModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 1);
worktopspruceModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 1);
worktopspruceModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 1);
worktopspruceModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 1);
worktopspruceModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 1);
worktopspruceModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 1);
worktopspruceModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 1);
worktopspruceModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
worktopspruceModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
worktopspruceModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
worktopspruceModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
worktopspruceModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"worktopspruce"},{id:"worktopspruce"}, Furniture.placeRotatableBlock(BlockID.worktopspruce, worktopspruceModel));

IDRegistry.genBlockID("worktopbrich");
Block.createBlock("worktopbrich", [
	{name: "worktopbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopbrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("worktopbrich");
Item.createItem("worktopbrich", "Worktop", {name: "worktopbrich", meta: 0}, {stack: 64});

Translation.addTranslation("Worktop", {ru: "Рабочий Стол"});
Recipes.addShaped({id: ItemID.worktopbrich, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,2, 'z', 158,2])

var worktopbrichModel = ModelAPI.newArray();
worktopbrichModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 2);
worktopbrichModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
worktopbrichModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
worktopbrichModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
worktopbrichModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 2);
worktopbrichModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 2);
worktopbrichModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
worktopbrichModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
worktopbrichModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
worktopbrichModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 2);
worktopbrichModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 2);
worktopbrichModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 2);
worktopbrichModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 2);
worktopbrichModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 2);
worktopbrichModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 2);
worktopbrichModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 2);
worktopbrichModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
worktopbrichModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
worktopbrichModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
worktopbrichModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
worktopbrichModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"worktopbrich"},{id:"worktopbrich"}, Furniture.placeRotatableBlock(BlockID.worktopbrich, worktopbrichModel));

IDRegistry.genBlockID("worktopjungle");
Block.createBlock("worktopjungle", [
	{name: "worktopjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopjungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("worktopjungle");
Item.createItem("worktopjungle", "Worktop", {name: "worktopjungle", meta: 0}, {stack: 64});

Translation.addTranslation("Worktop", {ru: "Рабочий Стол"});
Recipes.addShaped({id: ItemID.worktopjungle, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,3, 'z', 158,3])

var worktopjungleModel = ModelAPI.newArray();
worktopjungleModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 3);
worktopjungleModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
worktopjungleModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
worktopjungleModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
worktopjungleModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 3);
worktopjungleModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 3);
worktopjungleModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
worktopjungleModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
worktopjungleModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
worktopjungleModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 3);
worktopjungleModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 3);
worktopjungleModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 3);
worktopjungleModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 3);
worktopjungleModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 3);
worktopjungleModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 3);
worktopjungleModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 3);
worktopjungleModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
worktopjungleModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
worktopjungleModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
worktopjungleModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
worktopjungleModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"worktopjungle"},{id:"worktopjungle"}, Furniture.placeRotatableBlock(BlockID.worktopjungle, worktopjungleModel));

IDRegistry.genBlockID("worktopacacia");
Block.createBlock("worktopacacia", [
	{name: "worktopacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("worktopacacia");
Item.createItem("worktopacacia", "Worktop", {name: "worktopacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Worktop", {ru: "Рабочий Стол"});
Recipes.addShaped({id: ItemID.worktopacacia, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,4, 'z', 158,4])

var worktopacaciaModel = ModelAPI.newArray();
worktopacaciaModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 4);
worktopacaciaModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
worktopacaciaModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
worktopacaciaModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
worktopacaciaModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 4);
worktopacaciaModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 4);
worktopacaciaModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
worktopacaciaModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
worktopacaciaModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
worktopacaciaModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 4);
worktopacaciaModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 4);
worktopacaciaModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 4);
worktopacaciaModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 4);
worktopacaciaModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 4);
worktopacaciaModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 4);
worktopacaciaModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 4);
worktopacaciaModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
worktopacaciaModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
worktopacaciaModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
worktopacaciaModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
worktopacaciaModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"worktopacacia"},{id:"worktopacacia"}, Furniture.placeRotatableBlock(BlockID.worktopacacia, worktopacaciaModel));

IDRegistry.genBlockID("worktopbigoak");
Block.createBlock("worktopbigoak", [
	{name: "worktopbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "worktopbigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("worktopbigoak");
Item.createItem("worktopbigoak", "Worktop", {name: "worktopbigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Worktop", {ru: "Рабочий Стол"});
Recipes.addShaped({id: ItemID.worktopbigoak, count: 1, data: 0}, ["aaa", "x a"], ['a', 54,0, 'x', 85,5, 'z', 158,5])

var worktopbigoakModel = ModelAPI.newArray();
worktopbigoakModel.addBoxByID("1", 1,0.3125,0.0625,1.0625,0.9375,1, 5, 5);
worktopbigoakModel.addBoxByID("2", 1.9375,0.9375,0.0625,2,1,0.9375, 159, 9);
worktopbigoakModel.addBoxByID("3", 0,0.9375,0,1,1,0.0625, 159, 9);
worktopbigoakModel.addBoxByID("4", 1,0.9375,0,2,1,0.0625, 159, 9);
worktopbigoakModel.addBoxByID("5", 1.0625,0.625,0.0625,1.875,0.6875,1, 5, 5);
worktopbigoakModel.addBoxByID("6", 0.0625,0,0,0.125,0.9375,1, 5, 5);
worktopbigoakModel.addBoxByID("7", 0,0.9375,0.9375,1,1,1, 159, 9);
worktopbigoakModel.addBoxByID("8", 1,0.9375,0.9375,2,1,1, 159, 9);
worktopbigoakModel.addBoxByID("9", 0,0.9375,0.0625,0.0625,1,0.9375, 159, 9);
worktopbigoakModel.addBoxByID("10", 1,0.9375,0.0625,1.9375,1,0.9375, 5, 5);
worktopbigoakModel.addBoxByID("11", 1,0.3125,0,1.875,0.9375,0.0625, 5, 5);
worktopbigoakModel.addBoxByID("12", 0.0625,0.9375,0.0625,1,1,0.9375, 5, 5);
worktopbigoakModel.addBoxByID("13", 0.125,0.5625,0,1,0.9375,0.0625, 5, 5);
worktopbigoakModel.addBoxByID("14", 1.875,0,0,1.9375,0.9375,1, 5, 5);
worktopbigoakModel.addBoxByID("15", 1.125,0.375,1,1.8125,0.5625,1.0625, 5, 5);
worktopbigoakModel.addBoxByID("16", 1.0625,0.25,0.0625,1.875,0.3125,1, 5, 5);
worktopbigoakModel.addBoxByID("17", 1.375,0.4375,1.0625,1.5625,0.5,1.125, 159, 9);
worktopbigoakModel.addBoxByID("18", 1.8125,0.375,1,1.875,0.5625,1.0625, 159, 9);
worktopbigoakModel.addBoxByID("19", 1.0625,0.5625,1,1.875,0.625,1.0625, 159, 9);
worktopbigoakModel.addBoxByID("20", 1.0625,0.3125,1,1.875,0.375,1.0625, 159, 9);
worktopbigoakModel.addBoxByID("21", 1.0625,0.375,1,1.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"worktopbigoak"},{id:"worktopbigoak"}, Furniture.placeRotatableBlock(BlockID.worktopbigoak, worktopbigoakModel));