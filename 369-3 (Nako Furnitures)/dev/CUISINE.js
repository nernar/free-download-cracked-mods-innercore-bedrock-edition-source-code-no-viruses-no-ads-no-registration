IDRegistry.genBlockID("cuisineoak");
Block.createBlock("cuisineoak", [
	{name: "cuisineoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisineoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisineoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisineoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cuisineoak");
Item.createItem("cuisineoak", "Cuisine", {name: "cuisineoak", meta: 0}, {stack: 64});

Translation.addTranslation("Cuisine", {ru: "Большой Стол"});
Recipes.addShaped({id: ItemID.cuisineoak, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,0, 'x', 158,0])

var cuisineoakModel = ModelAPI.newArray();
cuisineoakModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5);
cuisineoakModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5);
cuisineoakModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
cuisineoakModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
cuisineoakModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5);
cuisineoakModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5);
cuisineoakModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5);
cuisineoakModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
cuisineoakModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
cuisineoakModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
cuisineoakModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
cuisineoakModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
cuisineoakModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
cuisineoakModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5);
cuisineoakModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5);
cuisineoakModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5);
Furniture.addReplacementItem({id:"cuisineoak"},{id:"cuisineoak"}, Furniture.placeRotatableBlock(BlockID.cuisineoak, cuisineoakModel));

IDRegistry.genBlockID("cuisinespruce");
Block.createBlock("cuisinespruce", [
	{name: "cuisinespruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinespruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinespruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinespruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cuisinespruce");
Item.createItem("cuisinespruce", "Cuisine", {name: "cuisinespruce", meta: 0}, {stack: 64});

Translation.addTranslation("Cuisine", {ru: "Большой Стол"});
Recipes.addShaped({id: ItemID.cuisinespruce, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,1, 'x', 158,1])

var cuisinespruceModel = ModelAPI.newArray();
cuisinespruceModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 1);
cuisinespruceModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 1);
cuisinespruceModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
cuisinespruceModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
cuisinespruceModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 1);
cuisinespruceModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 1);
cuisinespruceModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 1);
cuisinespruceModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
cuisinespruceModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
cuisinespruceModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
cuisinespruceModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
cuisinespruceModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
cuisinespruceModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
cuisinespruceModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 1);
cuisinespruceModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 1);
cuisinespruceModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 1);
Furniture.addReplacementItem({id:"cuisinespruce"},{id:"cuisinespruce"}, Furniture.placeRotatableBlock(BlockID.cuisinespruce, cuisinespruceModel));

IDRegistry.genBlockID("cuisinebrich");
Block.createBlock("cuisinebrich", [
	{name: "cuisinebrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinebrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinebrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinebrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cuisinebrich");
Item.createItem("cuisinebrich", "Cuisine", {name: "cuisinebrich", meta: 0}, {stack: 64});

Translation.addTranslation("Cuisine", {ru: "Большой Стол"});
Recipes.addShaped({id: ItemID.cuisinebrich, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,2, 'x', 158,2])

var cuisinebrichModel = ModelAPI.newArray();
cuisinebrichModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 2);
cuisinebrichModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 2);
cuisinebrichModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
cuisinebrichModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
cuisinebrichModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 2);
cuisinebrichModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 2);
cuisinebrichModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 2);
cuisinebrichModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
cuisinebrichModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
cuisinebrichModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
cuisinebrichModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
cuisinebrichModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
cuisinebrichModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
cuisinebrichModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 2);
cuisinebrichModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 2);
cuisinebrichModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 2);
Furniture.addReplacementItem({id:"cuisinebrich"},{id:"cuisinebrich"}, Furniture.placeRotatableBlock(BlockID.cuisinebrich, cuisinebrichModel));

IDRegistry.genBlockID("cuisinejungle");
Block.createBlock("cuisinejungle", [
	{name: "cuisinejungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinejungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinejungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinejungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cuisinejungle");
Item.createItem("cuisinejungle", "Cuisine", {name: "cuisinejungle", meta: 0}, {stack: 64});

Translation.addTranslation("Cuisine", {ru: "Большой Стол"});
Recipes.addShaped({id: ItemID.cuisinejungle, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,3, 'x', 158,3])

var cuisinejungleModel = ModelAPI.newArray();
cuisinejungleModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 3);
cuisinejungleModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 3);
cuisinejungleModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
cuisinejungleModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
cuisinejungleModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 3);
cuisinejungleModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 3);
cuisinejungleModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 3);
cuisinejungleModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
cuisinejungleModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
cuisinejungleModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
cuisinejungleModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
cuisinejungleModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
cuisinejungleModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
cuisinejungleModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 3);
cuisinejungleModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 3);
cuisinejungleModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 3);
Furniture.addReplacementItem({id:"cuisinejungle"},{id:"cuisinejungle"}, Furniture.placeRotatableBlock(BlockID.cuisinejungle, cuisinejungleModel));

IDRegistry.genBlockID("cuisineacacia");
Block.createBlock("cuisineacacia", [
	{name: "cuisineacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisineacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisineacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisineacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cuisineacacia");
Item.createItem("cuisineacacia", "Cuisine", {name: "cuisineacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Cuisine", {ru: "Большой Стол"});
Recipes.addShaped({id: ItemID.cuisineacacia, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,4, 'x', 158,4])

var cuisineacaciaModel = ModelAPI.newArray();
cuisineacaciaModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 4);
cuisineacaciaModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 4);
cuisineacaciaModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
cuisineacaciaModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
cuisineacaciaModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 4);
cuisineacaciaModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 4);
cuisineacaciaModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 4);
cuisineacaciaModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
cuisineacaciaModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
cuisineacaciaModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
cuisineacaciaModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
cuisineacaciaModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
cuisineacaciaModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
cuisineacaciaModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 4);
cuisineacaciaModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 4);
cuisineacaciaModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 4);
Furniture.addReplacementItem({id:"cuisineacacia"},{id:"cuisineacacia"}, Furniture.placeRotatableBlock(BlockID.cuisineacacia, cuisineacaciaModel));

IDRegistry.genBlockID("cuisinebigoak");
Block.createBlock("cuisinebigoak", [
	{name: "cuisinebigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinebigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinebigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cuisinebigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cuisinebigoak");
Item.createItem("cuisinebigoak", "Cuisine", {name: "cuisinebigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Cuisine", {ru: "Большой Стол"});
Recipes.addShaped({id: ItemID.cuisinebigoak, count: 1, data: 0}, ["aaa", "x x"], ['a', 5,5, 'x', 158,5])

var cuisinebigoakModel = ModelAPI.newArray();
cuisinebigoakModel.addBoxByID("1", 0.125,0,1.75,0.25,0.875,1.875, 5, 5);
cuisinebigoakModel.addBoxByID("2", 0.0625,0.875,1,1,1,1.9375, 5, 5);
cuisinebigoakModel.addBoxByID("3", 1,0.875,0,2,1,0.0625, 159, 9);
cuisinebigoakModel.addBoxByID("4", 0,0.875,1,0.0625,1,2, 159, 9);
cuisinebigoakModel.addBoxByID("5", 0.0625,0.875,0.0625,1,1,1, 5, 5);
cuisinebigoakModel.addBoxByID("6", 1,0.875,0.0625,1.9375,1,1, 5, 5);
cuisinebigoakModel.addBoxByID("7", 1,0.875,1,1.9375,1,1.9375, 5, 5);
cuisinebigoakModel.addBoxByID("8", 0,0.875,0,1,1,0.0625, 159, 9);
cuisinebigoakModel.addBoxByID("9", 0,0.875,1.9375,1,1,2, 159, 9);
cuisinebigoakModel.addBoxByID("10", 1,0.875,1.9375,2,1,2, 159, 9);
cuisinebigoakModel.addBoxByID("11", 1.9375,0.875,1,2,1,2, 159, 9);
cuisinebigoakModel.addBoxByID("12", 1.9375,0.875,0,2,1,1, 159, 9);
cuisinebigoakModel.addBoxByID("13", 0,0.875,0,0.0625,1,1, 159, 9);
cuisinebigoakModel.addBoxByID("14", 0.125,0,0.125,0.25,0.875,0.25, 5, 5);
cuisinebigoakModel.addBoxByID("15", 1.75,0,0.125,1.875,0.875,0.25, 5, 5);
cuisinebigoakModel.addBoxByID("16", 1.75,0,1.75,1.875,0.875,1.875, 5, 5);
Furniture.addReplacementItem({id:"cuisinebigoak"},{id:"cuisinebigoak"}, Furniture.placeRotatableBlock(BlockID.cuisinebigoak, cuisinebigoakModel));