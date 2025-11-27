IDRegistry.genBlockID("benchoak");
Block.createBlock("benchoak", [
	{name: "benchoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("benchoak");
Item.createItem("benchoak", "Bench", {name: "benchoak", meta: 0}, {stack: 64});

Translation.addTranslation("Bench", {ru: "Скамейка"});
Recipes.addShaped({id: ItemID.benchoak, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,0]);

var benchoakModel = ModelAPI.newArray();
benchoakModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
benchoakModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
benchoakModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
benchoakModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
benchoakModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
benchoakModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
benchoakModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
benchoakModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
benchoakModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
benchoakModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
benchoakModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5);
benchoakModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5);
benchoakModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5);
benchoakModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5);
benchoakModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5);
benchoakModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5);
benchoakModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5);
benchoakModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5);
benchoakModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
benchoakModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
benchoakModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
benchoakModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
benchoakModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5);
benchoakModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5);
benchoakModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5);
benchoakModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5);
Furniture.addReplacementItem({id:"benchoak"},{id:"benchoak"}, Furniture.placeRotatableBlock(BlockID.benchoak, benchoakModel));

IDRegistry.genBlockID("benchspruce");
Block.createBlock("benchspruce", [
	{name: "benchspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchspruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("benchspruce");
Item.createItem("benchspruce", "Bench", {name: "benchspruce", meta: 0}, {stack: 64});

Translation.addTranslation("Bench", {ru: "Скамейка"});
Recipes.addShaped({id: ItemID.benchspruce, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,1]);

var benchspruceModel = ModelAPI.newArray();
benchspruceModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
benchspruceModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
benchspruceModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
benchspruceModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
benchspruceModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
benchspruceModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
benchspruceModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
benchspruceModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
benchspruceModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
benchspruceModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
benchspruceModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 1);
benchspruceModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 1);
benchspruceModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 1);
benchspruceModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 1);
benchspruceModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 1);
benchspruceModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 1);
benchspruceModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 1);
benchspruceModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 1);
benchspruceModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
benchspruceModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
benchspruceModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
benchspruceModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
benchspruceModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 1);
benchspruceModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 1);
benchspruceModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 1);
benchspruceModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 1);
Furniture.addReplacementItem({id:"benchspruce"},{id:"benchspruce"}, Furniture.placeRotatableBlock(BlockID.benchspruce, benchspruceModel));

IDRegistry.genBlockID("benchbrich");
Block.createBlock("benchbrich", [
	{name: "benchbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchbrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("benchbrich");
Item.createItem("benchbrich", "Bench", {name: "benchbrich", meta: 0}, {stack: 64});

Translation.addTranslation("Bench", {ru: "Скамейка"});
Recipes.addShaped({id: ItemID.benchbrich, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,2]);

var benchbrichModel = ModelAPI.newArray();
benchbrichModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
benchbrichModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
benchbrichModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
benchbrichModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
benchbrichModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
benchbrichModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
benchbrichModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
benchbrichModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
benchbrichModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
benchbrichModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
benchbrichModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 2);
benchbrichModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 2);
benchbrichModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 2);
benchbrichModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 2);
benchbrichModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 2);
benchbrichModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 2);
benchbrichModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 2);
benchbrichModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 2);
benchbrichModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
benchbrichModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
benchbrichModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
benchbrichModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
benchbrichModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 2);
benchbrichModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 2);
benchbrichModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 2);
benchbrichModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 2);
Furniture.addReplacementItem({id:"benchbrich"},{id:"benchbrich"}, Furniture.placeRotatableBlock(BlockID.benchbrich, benchbrichModel));

IDRegistry.genBlockID("benchjungle");
Block.createBlock("benchjungle", [
	{name: "benchjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchjungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("benchjungle");
Item.createItem("benchjungle", "Bench", {name: "benchjungle", meta: 0}, {stack: 64});

Translation.addTranslation("Bench", {ru: "Скамейка"});
Recipes.addShaped({id: ItemID.benchjungle, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,3]);

var benchjungleModel = ModelAPI.newArray();
benchjungleModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
benchjungleModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
benchjungleModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
benchjungleModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
benchjungleModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
benchjungleModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
benchjungleModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
benchjungleModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
benchjungleModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
benchjungleModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
benchjungleModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 3);
benchjungleModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 3);
benchjungleModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 3);
benchjungleModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 3);
benchjungleModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 3);
benchjungleModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 3);
benchjungleModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 3);
benchjungleModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 3);
benchjungleModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
benchjungleModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
benchjungleModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
benchjungleModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
benchjungleModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 3);
benchjungleModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 3);
benchjungleModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 3);
benchjungleModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 3);
Furniture.addReplacementItem({id:"benchjungle"},{id:"benchjungle"}, Furniture.placeRotatableBlock(BlockID.benchjungle, benchjungleModel));

IDRegistry.genBlockID("benchacacia");
Block.createBlock("benchacacia", [
	{name: "benchacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("benchacacia");
Item.createItem("benchacacia", "Bench", {name: "benchacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Bench", {ru: "Скамейка"});
Recipes.addShaped({id: ItemID.benchacacia, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,4]);

var benchacaciaModel = ModelAPI.newArray();
benchacaciaModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
benchacaciaModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
benchacaciaModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
benchacaciaModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
benchacaciaModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
benchacaciaModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
benchacaciaModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
benchacaciaModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
benchacaciaModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
benchacaciaModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
benchacaciaModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 4);
benchacaciaModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 4);
benchacaciaModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 4);
benchacaciaModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 4);
benchacaciaModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 4);
benchacaciaModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 4);
benchacaciaModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 4);
benchacaciaModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 4);
benchacaciaModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
benchacaciaModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
benchacaciaModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
benchacaciaModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
benchacaciaModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 4);
benchacaciaModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 4);
benchacaciaModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 4);
benchacaciaModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 4);
Furniture.addReplacementItem({id:"benchacacia"},{id:"benchacacia"}, Furniture.placeRotatableBlock(BlockID.benchacacia, benchacaciaModel));

IDRegistry.genBlockID("benchbigoak");
Block.createBlock("benchbigoak", [
	{name: "benchbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "benchbigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("benchbigoak");
Item.createItem("benchbigoak", "Bench", {name: "benchbigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Bench", {ru: "Скамейка"});
Recipes.addShaped({id: ItemID.benchbigoak, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,5]);

var benchbigoakModel = ModelAPI.newArray();
benchbigoakModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
benchbigoakModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
benchbigoakModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
benchbigoakModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
benchbigoakModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
benchbigoakModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
benchbigoakModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
benchbigoakModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
benchbigoakModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
benchbigoakModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
benchbigoakModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 5);
benchbigoakModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 5);
benchbigoakModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 5);
benchbigoakModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 5);
benchbigoakModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 5);
benchbigoakModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 5);
benchbigoakModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 5);
benchbigoakModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 5);
benchbigoakModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
benchbigoakModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
benchbigoakModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
benchbigoakModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
benchbigoakModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 5);
benchbigoakModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 5);
benchbigoakModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 5);
benchbigoakModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 5);
Furniture.addReplacementItem({id:"benchbigoak"},{id:"benchbigoak"}, Furniture.placeRotatableBlock(BlockID.benchbigoak, benchbigoakModel));

Block.setShape(BlockID.benchoak,0,0,0,1,0.36,1);
Block.setShape(BlockID.benchspruce,0,0,0,1,0.36,1);
Block.setShape(BlockID.benchbrich,0,0,0,1,0.36,1);
Block.setShape(BlockID.benchjungle,0,0,0,1,0.36,1);
Block.setShape(BlockID.benchacacia,0,0,0,1,0.36,1);
Block.setShape(BlockID.benchbigoak,0,0,0,1,0.36,1);