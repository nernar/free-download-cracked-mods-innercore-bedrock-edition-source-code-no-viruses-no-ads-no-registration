IDRegistry.genBlockID("bookshelfoak");
Block.createBlock("bookshelfoak", [
	{name: "bookshelfoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bookshelfoak");
Item.createItem("bookshelfoak", "Bookshelf", {name: "bookshelfoak", meta: 0}, {stack: 64});

Translation.addTranslation("Bookshelf", {ru: "Книжный Полка"});
Recipes.addShaped({id: ItemID.bookshelfoak, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,0, 'x', 340,0, 's', 81,0])

var bookshelfoakModel = ModelAPI.newArray();
bookshelfoakModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5);
bookshelfoakModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5);
bookshelfoakModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5);
bookshelfoakModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5);
bookshelfoakModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
bookshelfoakModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
bookshelfoakModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
bookshelfoakModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
bookshelfoakModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfoakModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5);
bookshelfoakModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5);
bookshelfoakModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5);
bookshelfoakModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5);
bookshelfoakModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5);
bookshelfoakModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5);
bookshelfoakModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5);
bookshelfoakModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5);
bookshelfoakModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5);
bookshelfoakModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5);
bookshelfoakModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5);
bookshelfoakModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5);
bookshelfoakModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5);
bookshelfoakModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5);
bookshelfoakModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfoakModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
bookshelfoakModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
bookshelfoakModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"bookshelfoak"},{id:"bookshelfoak"}, Furniture.placeRotatableBlock(BlockID.bookshelfoak, bookshelfoakModel));

IDRegistry.genBlockID("bookshelfspruce");
Block.createBlock("bookshelfspruce", [
	{name: "bookshelfspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfspruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bookshelfspruce");
Item.createItem("bookshelfspruce", "Bookshelf", {name: "bookshelfspruce", meta: 0}, {stack: 64});

Translation.addTranslation("Bookshelf", {ru: "Книжный Полка"});
Recipes.addShaped({id: ItemID.bookshelfspruce, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,1, 'x', 340,0, 's', 81,0])

var bookshelfspruceModel = ModelAPI.newArray();
bookshelfspruceModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 1);
bookshelfspruceModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 1);
bookshelfspruceModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 1);
bookshelfspruceModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 1);
bookshelfspruceModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
bookshelfspruceModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
bookshelfspruceModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
bookshelfspruceModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
bookshelfspruceModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfspruceModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 1);
bookshelfspruceModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 1);
bookshelfspruceModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 1);
bookshelfspruceModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 1);
bookshelfspruceModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 1);
bookshelfspruceModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 1);
bookshelfspruceModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 1);
bookshelfspruceModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 1);
bookshelfspruceModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 1);
bookshelfspruceModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 1);
bookshelfspruceModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 1);
bookshelfspruceModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 1);
bookshelfspruceModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 1);
bookshelfspruceModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 1);
bookshelfspruceModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfspruceModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
bookshelfspruceModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
bookshelfspruceModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"bookshelfspruce"},{id:"bookshelfspruce"}, Furniture.placeRotatableBlock(BlockID.bookshelfspruce, bookshelfspruceModel));

IDRegistry.genBlockID("bookshelfbrich");
Block.createBlock("bookshelfbrich", [
	{name: "bookshelfbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfbrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bookshelfbrich");
Item.createItem("bookshelfbrich", "Bookshelf", {name: "bookshelfbrich", meta: 0}, {stack: 64});

Translation.addTranslation("Bookshelf", {ru: "Книжный Полка"});
Recipes.addShaped({id: ItemID.bookshelfbrich, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,2, 'x', 340,0, 's', 81,0])

var bookshelfbrichModel = ModelAPI.newArray();
bookshelfbrichModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 2);
bookshelfbrichModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 2);
bookshelfbrichModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 2);
bookshelfbrichModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 2);
bookshelfbrichModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
bookshelfbrichModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
bookshelfbrichModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
bookshelfbrichModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
bookshelfbrichModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfbrichModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 2);
bookshelfbrichModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 2);
bookshelfbrichModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 2);
bookshelfbrichModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 2);
bookshelfbrichModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 2);
bookshelfbrichModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 2);
bookshelfbrichModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 2);
bookshelfbrichModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 2);
bookshelfbrichModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 2);
bookshelfbrichModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 2);
bookshelfbrichModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 2);
bookshelfbrichModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 2);
bookshelfbrichModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 2);
bookshelfbrichModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 2);
bookshelfbrichModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfbrichModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
bookshelfbrichModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
bookshelfbrichModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"bookshelfbrich"},{id:"bookshelfbrich"}, Furniture.placeRotatableBlock(BlockID.bookshelfbrich, bookshelfbrichModel));

IDRegistry.genBlockID("bookshelfjungle");
Block.createBlock("bookshelfjungle", [
	{name: "bookshelfjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfjungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bookshelfjungle");
Item.createItem("bookshelfjungle", "Bookshelf", {name: "bookshelfjungle", meta: 0}, {stack: 64});

Translation.addTranslation("Bookshelf", {ru: "Книжный Полка"});
Recipes.addShaped({id: ItemID.bookshelfjungle, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,3, 'x', 340,0, 's', 81,0])

var bookshelfjungleModel = ModelAPI.newArray();
bookshelfjungleModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 3);
bookshelfjungleModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 3);
bookshelfjungleModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 3);
bookshelfjungleModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 3);
bookshelfjungleModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
bookshelfjungleModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
bookshelfjungleModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
bookshelfjungleModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
bookshelfjungleModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfjungleModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 3);
bookshelfjungleModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 3);
bookshelfjungleModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 3);
bookshelfjungleModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 3);
bookshelfjungleModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 3);
bookshelfjungleModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 3);
bookshelfjungleModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 3);
bookshelfjungleModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 3);
bookshelfjungleModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 3);
bookshelfjungleModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 3);
bookshelfjungleModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 3);
bookshelfjungleModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 3);
bookshelfjungleModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 3);
bookshelfjungleModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 3);
bookshelfjungleModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfjungleModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
bookshelfjungleModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
bookshelfjungleModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"bookshelfjungle"},{id:"bookshelfjungle"}, Furniture.placeRotatableBlock(BlockID.bookshelfjungle, bookshelfjungleModel));

IDRegistry.genBlockID("bookshelfacacia");
Block.createBlock("bookshelfacacia", [
	{name: "bookshelfacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bookshelfacacia");
Item.createItem("bookshelfacacia", "Bookshelf", {name: "bookshelfacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Bookshelf", {ru: "Книжный Полка"});
Recipes.addShaped({id: ItemID.bookshelfacacia, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,4, 'x', 340,0, 's', 81,0])

var bookshelfacaciaModel = ModelAPI.newArray();
bookshelfacaciaModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 4);
bookshelfacaciaModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 4);
bookshelfacaciaModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 4);
bookshelfacaciaModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 4);
bookshelfacaciaModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
bookshelfacaciaModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
bookshelfacaciaModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
bookshelfacaciaModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
bookshelfacaciaModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfacaciaModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 4);
bookshelfacaciaModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 4);
bookshelfacaciaModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 4);
bookshelfacaciaModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 4);
bookshelfacaciaModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 4);
bookshelfacaciaModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 4);
bookshelfacaciaModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 4);
bookshelfacaciaModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 4);
bookshelfacaciaModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 4);
bookshelfacaciaModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 4);
bookshelfacaciaModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 4);
bookshelfacaciaModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 4);
bookshelfacaciaModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 4);
bookshelfacaciaModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 4);
bookshelfacaciaModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfacaciaModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
bookshelfacaciaModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
bookshelfacaciaModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"bookshelfacacia"},{id:"bookshelfacacia"}, Furniture.placeRotatableBlock(BlockID.bookshelfacacia, bookshelfacaciaModel));

IDRegistry.genBlockID("bookshelfbigoak");
Block.createBlock("bookshelfbigoak", [
	{name: "bookshelfbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "bookshelfbigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bookshelfbigoak");
Item.createItem("bookshelfbigoak", "Bookshelf", {name: "bookshelfbigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Bookshelf", {ru: "Книжный Полка"});
Recipes.addShaped({id: ItemID.bookshelfbigoak, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,5, 'x', 340,0, 's', 81,0])

var bookshelfbigoakModel = ModelAPI.newArray();
bookshelfbigoakModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 5);
bookshelfbigoakModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 5);
bookshelfbigoakModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 5);
bookshelfbigoakModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 5);
bookshelfbigoakModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
bookshelfbigoakModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
bookshelfbigoakModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
bookshelfbigoakModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
bookshelfbigoakModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfbigoakModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 5);
bookshelfbigoakModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 5);
bookshelfbigoakModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 5);
bookshelfbigoakModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 5);
bookshelfbigoakModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 5);
bookshelfbigoakModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 5);
bookshelfbigoakModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 5);
bookshelfbigoakModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 5);
bookshelfbigoakModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 5);
bookshelfbigoakModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 5);
bookshelfbigoakModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 5);
bookshelfbigoakModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 5);
bookshelfbigoakModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 5);
bookshelfbigoakModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 5);
bookshelfbigoakModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
bookshelfbigoakModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
bookshelfbigoakModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
bookshelfbigoakModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"bookshelfbigoak"},{id:"bookshelfbigoak"}, Furniture.placeRotatableBlock(BlockID.bookshelfbigoak, bookshelfbigoakModel));

Block.setShape(BlockID.bookshelfoak,0,0,0,1,3,1);
Block.setShape(BlockID.bookshelfspruce,0,0,0,1,3,1);
Block.setShape(BlockID.bookshelfbrich,0,0,0,1,3,1);
Block.setShape(BlockID.bookshelfjungle,0,0,0,1,3,1);
Block.setShape(BlockID.bookshelfacacia,0,0,0,1,3,1);
Block.setShape(BlockID.bookshelfbigoak,0,0,0,1,3,1);