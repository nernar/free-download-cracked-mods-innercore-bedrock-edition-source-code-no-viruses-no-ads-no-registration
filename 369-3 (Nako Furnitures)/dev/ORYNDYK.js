IDRegistry.genBlockID("whiteor");
Block.createBlock("whiteor", [
	{name: "whiteor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whiteor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whiteor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "whiteor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("whiteor");
Item.createItem("whiteor", "White Chair", {name: "whiteor", meta: 0}, {stack: 64});

Translation.addTranslation("White Chair", {ru: "Белая Стуля"});
Recipes.addShaped({id: ItemID.whiteor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,0]);

var whiteorModel = ModelAPI.newArray();
whiteorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35);
whiteorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
whiteorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
whiteorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
whiteorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
whiteorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
whiteorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
whiteorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
whiteorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
whiteorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
whiteorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
whiteorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
whiteorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
whiteorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
whiteorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35);
whiteorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
whiteorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
whiteorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
whiteorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
whiteorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
whiteorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
whiteorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
whiteorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
whiteorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
whiteorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35);
Furniture.addReplacementItem({id:"whiteor"},{id:"whiteor"}, Furniture.placeRotatableBlock(BlockID.whiteor, whiteorModel));

IDRegistry.genBlockID("lightgreyor");
Block.createBlock("lightgreyor", [
	{name: "lightgreyor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreyor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreyor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightgreyor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lightgreyor");
Item.createItem("lightgreyor", "Light Grey Chair", {name: "lightgreyor", meta: 0}, {stack: 64});

Translation.addTranslation("Light Grey Chair", {ru: "Светло-серая Стуля"});
Recipes.addShaped({id: ItemID.lightgreyor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,8]);

var lightgreyorModel = ModelAPI.newArray();
lightgreyorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 8);
lightgreyorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
lightgreyorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
lightgreyorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
lightgreyorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
lightgreyorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
lightgreyorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
lightgreyorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
lightgreyorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
lightgreyorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
lightgreyorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
lightgreyorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
lightgreyorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
lightgreyorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
lightgreyorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 8);
lightgreyorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
lightgreyorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
lightgreyorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
lightgreyorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
lightgreyorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
lightgreyorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
lightgreyorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
lightgreyorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
lightgreyorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
lightgreyorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 8);
Furniture.addReplacementItem({id:"lightgreyor"},{id:"lightgreyor"}, Furniture.placeRotatableBlock(BlockID.lightgreyor, lightgreyorModel));

IDRegistry.genBlockID("greyor");
Block.createBlock("greyor", [
	{name: "greyor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greyor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greyor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greyor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("greyor");
Item.createItem("greyor", "Grey Chair", {name: "greyor", meta: 0}, {stack: 64});

Translation.addTranslation("Grey Chair", {ru: "Серая Стуля"});
Recipes.addShaped({id: ItemID.greyor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,7]);

var greyorModel = ModelAPI.newArray();
greyorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 7);
greyorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
greyorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
greyorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
greyorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
greyorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
greyorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
greyorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
greyorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
greyorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
greyorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
greyorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
greyorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
greyorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
greyorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 7);
greyorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
greyorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
greyorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
greyorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
greyorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
greyorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
greyorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
greyorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
greyorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
greyorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 7);
Furniture.addReplacementItem({id:"greyor"},{id:"greyor"}, Furniture.placeRotatableBlock(BlockID.greyor, greyorModel));

IDRegistry.genBlockID("blackor");
Block.createBlock("blackor", [
	{name: "blackor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blackor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blackor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blackor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("blackor");
Item.createItem("blackor", "Black Chair", {name: "blackor", meta: 0}, {stack: 64});

Translation.addTranslation("Black Chair", {ru: "Черная Стуля"});
Recipes.addShaped({id: ItemID.blackor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,15]);

var blackorModel = ModelAPI.newArray();
blackorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 15);
blackorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
blackorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
blackorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
blackorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
blackorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
blackorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
blackorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
blackorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
blackorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
blackorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
blackorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
blackorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
blackorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
blackorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 15);
blackorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
blackorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
blackorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
blackorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
blackorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
blackorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
blackorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
blackorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
blackorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
blackorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 15);
Furniture.addReplacementItem({id:"blackor"},{id:"blackor"}, Furniture.placeRotatableBlock(BlockID.blackor, blackorModel));

IDRegistry.genBlockID("brownor");
Block.createBlock("brownor", [
	{name: "brownor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "brownor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("brownor");
Item.createItem("brownor", "Brown Chair", {name: "brownor", meta: 0}, {stack: 64});

Translation.addTranslation("Brown Chair", {ru: "Коричневая Стуля"});
Recipes.addShaped({id: ItemID.brownor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,12]);

var brownorModel = ModelAPI.newArray();
brownorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 12);
brownorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
brownorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
brownorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
brownorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
brownorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
brownorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
brownorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
brownorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
brownorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
brownorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
brownorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
brownorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
brownorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
brownorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 12);
brownorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
brownorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
brownorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
brownorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
brownorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
brownorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
brownorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
brownorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
brownorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
brownorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 12);
Furniture.addReplacementItem({id:"brownor"},{id:"brownor"}, Furniture.placeRotatableBlock(BlockID.brownor, brownorModel));

IDRegistry.genBlockID("redor");
Block.createBlock("redor", [
	{name: "redor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "redor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("redor");
Item.createItem("redor", "Red Chair", {name: "redor", meta: 0}, {stack: 64});

Translation.addTranslation("Red Chair", {ru: "Красная Стуля"});
Recipes.addShaped({id: ItemID.redor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,14]);

var redorModel = ModelAPI.newArray();
redorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 14);
redorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
redorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
redorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
redorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
redorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
redorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
redorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
redorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
redorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
redorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
redorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
redorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
redorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
redorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 14);
redorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
redorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
redorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
redorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
redorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
redorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
redorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
redorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
redorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
redorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 14);
Furniture.addReplacementItem({id:"redor"},{id:"redor"}, Furniture.placeRotatableBlock(BlockID.redor, redorModel));

IDRegistry.genBlockID("orangeor");
Block.createBlock("orangeor", [
	{name: "orangeor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangeor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangeor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "orangeor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("orangeor");
Item.createItem("orangeor", "Orange Chair", {name: "orangeor", meta: 0}, {stack: 64});

Translation.addTranslation("Orange Chair", {ru: "Оранжевая Стуля"});
Recipes.addShaped({id: ItemID.orangeor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,1]);

var orangeorModel = ModelAPI.newArray();
orangeorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 1);
orangeorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
orangeorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
orangeorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
orangeorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
orangeorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
orangeorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
orangeorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
orangeorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
orangeorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
orangeorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
orangeorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
orangeorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
orangeorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
orangeorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 1);
orangeorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
orangeorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
orangeorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
orangeorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
orangeorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
orangeorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
orangeorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
orangeorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
orangeorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
orangeorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 1);
Furniture.addReplacementItem({id:"orangeor"},{id:"orangeor"}, Furniture.placeRotatableBlock(BlockID.orangeor, orangeorModel));

IDRegistry.genBlockID("yellowor");
Block.createBlock("yellowor", [
	{name: "yellowor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "yellowor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("yellowor");
Item.createItem("yellowor", "Yellow Chair", {name: "yellowor", meta: 0}, {stack: 64});

Translation.addTranslation("Yellow Chair", {ru: "Желтая Стуля"});
Recipes.addShaped({id: ItemID.yellowor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,4]);

var yelloworModel = ModelAPI.newArray();
yelloworModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 4);
yelloworModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
yelloworModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
yelloworModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
yelloworModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
yelloworModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
yelloworModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
yelloworModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
yelloworModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
yelloworModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
yelloworModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
yelloworModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
yelloworModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
yelloworModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
yelloworModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 4);
yelloworModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
yelloworModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
yelloworModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
yelloworModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
yelloworModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
yelloworModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
yelloworModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
yelloworModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
yelloworModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
yelloworModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 4);
Furniture.addReplacementItem({id:"yellowor"},{id:"yellowor"}, Furniture.placeRotatableBlock(BlockID.yellowor, yelloworModel));

IDRegistry.genBlockID("limeor");
Block.createBlock("limeor", [
	{name: "limeor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limeor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limeor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "limeor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("limeor");
Item.createItem("limeor", "Lime Chair", {name: "limeor", meta: 0}, {stack: 64});

Translation.addTranslation("Lime Chair", {ru: "Лаймовая Стуля"});
Recipes.addShaped({id: ItemID.limeor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,5]);

var limeorModel = ModelAPI.newArray();
limeorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 5);
limeorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
limeorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
limeorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
limeorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
limeorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
limeorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
limeorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
limeorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
limeorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
limeorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
limeorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
limeorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
limeorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
limeorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 5);
limeorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
limeorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
limeorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
limeorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
limeorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
limeorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
limeorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
limeorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
limeorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
limeorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 5);
Furniture.addReplacementItem({id:"limeor"},{id:"limeor"}, Furniture.placeRotatableBlock(BlockID.limeor, limeorModel));

IDRegistry.genBlockID("greenor");
Block.createBlock("greenor", [
	{name: "greenor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greenor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greenor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "greenor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("greenor");
Item.createItem("greenor", "Green Chair", {name: "greenor", meta: 0}, {stack: 64});

Translation.addTranslation("Green Chair", {ru: "Зеленая Стуля"});
Recipes.addShaped({id: ItemID.greenor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,13]);

var greenorModel = ModelAPI.newArray();
greenorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 13);
greenorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
greenorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
greenorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
greenorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
greenorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
greenorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
greenorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
greenorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
greenorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
greenorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
greenorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
greenorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
greenorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
greenorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 13);
greenorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
greenorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
greenorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
greenorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
greenorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
greenorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
greenorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
greenorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
greenorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
greenorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 13);
Furniture.addReplacementItem({id:"greenor"},{id:"greenor"}, Furniture.placeRotatableBlock(BlockID.greenor, greenorModel));

IDRegistry.genBlockID("cyanor");
Block.createBlock("cyanor", [
	{name: "cyanor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyanor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyanor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "cyanor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cyanor");
Item.createItem("cyanor", "Cyan Chair", {name: "cyanor", meta: 0}, {stack: 64});

Translation.addTranslation("Cyan Chair", {ru: "Бирюзовая Стуля"});
Recipes.addShaped({id: ItemID.cyanor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,9]);

var cyanorModel = ModelAPI.newArray();
cyanorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 9);
cyanorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
cyanorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
cyanorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
cyanorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
cyanorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
cyanorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
cyanorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
cyanorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
cyanorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
cyanorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
cyanorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
cyanorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
cyanorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
cyanorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 9);
cyanorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
cyanorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
cyanorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
cyanorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
cyanorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
cyanorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
cyanorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
cyanorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
cyanorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
cyanorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 9);
Furniture.addReplacementItem({id:"cyanor"},{id:"cyanor"}, Furniture.placeRotatableBlock(BlockID.cyanor, cyanorModel));

IDRegistry.genBlockID("lightblueor");
Block.createBlock("lightblueor", [
	{name: "lightblueor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightblueor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightblueor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "lightblueor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("lightblueor");
Item.createItem("lightblueor", "Light Blue Chair", {name: "lightblueor", meta: 0}, {stack: 64});

Translation.addTranslation("Light Blue Chair", {ru: "Голубая Стуля"});
Recipes.addShaped({id: ItemID.lightblueor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,3]);

var lightblueorModel = ModelAPI.newArray();
lightblueorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 3);
lightblueorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
lightblueorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
lightblueorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
lightblueorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
lightblueorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
lightblueorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
lightblueorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
lightblueorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
lightblueorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
lightblueorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
lightblueorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
lightblueorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
lightblueorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
lightblueorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 3);
lightblueorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
lightblueorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
lightblueorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
lightblueorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
lightblueorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
lightblueorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
lightblueorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
lightblueorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
lightblueorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
lightblueorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 3);
Furniture.addReplacementItem({id:"lightblueor"},{id:"lightblueor"}, Furniture.placeRotatableBlock(BlockID.lightblueor, lightblueorModel));

IDRegistry.genBlockID("blueor");
Block.createBlock("blueor", [
	{name: "blueor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blueor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blueor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "blueor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("blueor");
Item.createItem("blueor", "Blue Chair", {name: "blueor", meta: 0}, {stack: 64});

Translation.addTranslation("Blue Chair", {ru: "Синяя Стуля"});
Recipes.addShaped({id: ItemID.blueor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,11]);

var blueorModel = ModelAPI.newArray();
blueorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 11);
blueorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
blueorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
blueorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
blueorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
blueorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
blueorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
blueorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
blueorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
blueorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
blueorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
blueorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
blueorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
blueorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
blueorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 11);
blueorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
blueorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
blueorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
blueorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
blueorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
blueorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
blueorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
blueorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
blueorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
blueorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 11);
Furniture.addReplacementItem({id:"blueor"},{id:"blueor"}, Furniture.placeRotatableBlock(BlockID.blueor, blueorModel));

IDRegistry.genBlockID("purpleor");
Block.createBlock("purpleor", [
	{name: "purpleor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purpleor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purpleor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "purpleor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("purpleor");
Item.createItem("purpleor", "Purple Chair", {name: "purpleor", meta: 0}, {stack: 64});

Translation.addTranslation("Purple Chair", {ru: "Фиолетвая Стуля"});
Recipes.addShaped({id: ItemID.purpleor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,10]);

var purpleorModel = ModelAPI.newArray();
purpleorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 10);
purpleorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
purpleorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
purpleorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
purpleorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
purpleorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
purpleorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
purpleorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
purpleorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
purpleorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
purpleorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
purpleorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
purpleorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
purpleorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
purpleorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 10);
purpleorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
purpleorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
purpleorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
purpleorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
purpleorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
purpleorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
purpleorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
purpleorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
purpleorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
purpleorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 10);
Furniture.addReplacementItem({id:"purpleor"},{id:"purpleor"}, Furniture.placeRotatableBlock(BlockID.purpleor, purpleorModel));

IDRegistry.genBlockID("magentaor");
Block.createBlock("magentaor", [
	{name: "magentaor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentaor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentaor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "magentaor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("magentaor");
Item.createItem("magentaor", "Magenta Chair", {name: "magentaor", meta: 0}, {stack: 64});

Translation.addTranslation("Magenta Chair", {ru: "Пурпурная Стуля"});
Recipes.addShaped({id: ItemID.magentaor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,2]);

var magentaorModel = ModelAPI.newArray();
magentaorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 2);
magentaorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
magentaorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
magentaorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
magentaorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
magentaorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
magentaorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
magentaorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
magentaorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
magentaorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
magentaorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
magentaorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
magentaorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
magentaorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
magentaorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 2);
magentaorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
magentaorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
magentaorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
magentaorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
magentaorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
magentaorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
magentaorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
magentaorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
magentaorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
magentaorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 2);
Furniture.addReplacementItem({id:"magentaor"},{id:"magentaor"}, Furniture.placeRotatableBlock(BlockID.magentaor, magentaorModel));

IDRegistry.genBlockID("pinkor");
Block.createBlock("pinkor", [
	{name: "pinkor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinkor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinkor", texture: [["quartz_block", 0]], inCreative: false},
	{name: "pinkor", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("pinkor");
Item.createItem("pinkor", "Pink Chair", {name: "pinkor", meta: 0}, {stack: 64});

Translation.addTranslation("Pink Chair", {ru: "Розовая Стуля"});
Recipes.addShaped({id: ItemID.pinkor, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x",85,0, "a", 35,6]);

var pinkorModel = ModelAPI.newArray();
pinkorModel.addBoxByID("1", 0.125,1,0.125,0.875,1.375,0.1875, 35, 6);
pinkorModel.addBoxByID("2", 0.875,0,0.8125,0.9375,0.625,0.875, 5);
pinkorModel.addBoxByID("3", 0.875,1,0.125,0.9375,1.375,0.1875, 5);
pinkorModel.addBoxByID("4", 0.875,0.6875,0.8125,0.9375,0.8125,0.875, 5);
pinkorModel.addBoxByID("5", 0.875,0.8125,0.1875,0.9375,0.875,0.8125, 5);
pinkorModel.addBoxByID("6", 0.0625,0.8125,0.1875,0.125,0.875,0.8125, 5);
pinkorModel.addBoxByID("7", 0.875,0.8125,0.8125,0.96875,0.90625,0.90625, 5);
pinkorModel.addBoxByID("8", 0.125,0.25,0.8125,0.875,0.3125,0.875, 5);
pinkorModel.addBoxByID("9", 0.0625,0,0.8125,0.125,0.625,0.875, 5);
pinkorModel.addBoxByID("10", 0.0625,0.6875,0.8125,0.125,0.8125,0.875, 5);
pinkorModel.addBoxByID("11", 0.0625,0.25,0.1875,0.125,0.3125,0.8125, 5);
pinkorModel.addBoxByID("12", 0.875,0.25,0.1875,0.9375,0.3125,0.8125, 5);
pinkorModel.addBoxByID("13", 0.125,0.25,0.125,0.875,0.3125,0.1875, 5);
pinkorModel.addBoxByID("14", 0.0625,0.625,0.125,0.9375,0.6875,0.875, 5);
pinkorModel.addBoxByID("15", 0.125,0.6875,0.1875,0.875,0.75,0.8125, 35, 6);
pinkorModel.addBoxByID("16", 0.125,1.375,0.125,0.875,1.4375,0.1875, 5);
pinkorModel.addBoxByID("17", 0.3125,1.4375,0.125,0.6875,1.5,0.1875, 5);
pinkorModel.addBoxByID("18", 0.375,1.5,0.125,0.625,1.5625,0.1875, 5);
pinkorModel.addBoxByID("19", 0.0625,0.8125,0.8125,0.15625,0.90625,0.9, 5);
pinkorModel.addBoxByID("20", 0.875,0,0.125,0.9375,0.625,0.1875, 5);
pinkorModel.addBoxByID("21", 0.875,0.6875,0.125,0.9375,1,0.1875, 5);
pinkorModel.addBoxByID("22", 0.0625,1,0.125,0.125,1.375,0.1875, 5);
pinkorModel.addBoxByID("23", 0.0625,0.6875,0.125,0.125,1,0.1875, 5);
pinkorModel.addBoxByID("24", 0.0625,0,0.125,0.125,0.625,0.1875, 5);
pinkorModel.addBoxByID("25", 0.125,0.6875,0.125,0.875,1,0.1875, 35, 6);
Furniture.addReplacementItem({id:"pinkor"},{id:"pinkor"}, Furniture.placeRotatableBlock(BlockID.pinkor, pinkorModel));

Block.setShape(BlockID.whiteor,0,0,0,1,1/2,1);
Block.setShape(BlockID.lightgreyor,0,0,0,1,1/2,1);
Block.setShape(BlockID.greyor,0,0,0,1,1/2,1);
Block.setShape(BlockID.blackor,0,0,0,1,1/2,1);
Block.setShape(BlockID.brownor,0,0,0,1,1/2,1);
Block.setShape(BlockID.redor,0,0,0,1,1/2,1);
Block.setShape(BlockID.orangeor,0,0,0,1,1/2,1);
Block.setShape(BlockID.yellowor,0,0,0,1,1/2,1);
Block.setShape(BlockID.limeor,0,0,0,1,1/2,1);
Block.setShape(BlockID.greenor,0,0,0,1,1/2,1);
Block.setShape(BlockID.cyanor,0,0,0,1,1/2,1);
Block.setShape(BlockID.lightblueor,0,0,0,1,1/2,1);
Block.setShape(BlockID.blueor,0,0,0,1,1/2,1);
Block.setShape(BlockID.purpleor,0,0,0,1,1/2,1);
Block.setShape(BlockID.magentaor,0,0,0,1,1/2,1);
Block.setShape(BlockID.pinkor,0,0,0,1,1/2,1);