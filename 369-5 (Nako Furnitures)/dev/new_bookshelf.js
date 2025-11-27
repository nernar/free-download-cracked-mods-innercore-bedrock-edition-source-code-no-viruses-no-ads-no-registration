IDRegistry.genBlockID("oak_bookshelf");
Block.createBlock("oak_bookshelf", [
	{name: "Oak Bookshelf", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Bookshelf", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Bookshelf", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Bookshelf", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_bookshelf");
Item.createItem("oak_bookshelf", "Oak Bookshelf", {name: "oak_bookshelf", meta: 0}, {stack: 64});

var oak_bookshelfModel = ModelAPI.newArray();
oak_bookshelfModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5);
oak_bookshelfModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5);
oak_bookshelfModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5);
oak_bookshelfModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5);
oak_bookshelfModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
oak_bookshelfModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
oak_bookshelfModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
oak_bookshelfModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
oak_bookshelfModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
oak_bookshelfModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5);
oak_bookshelfModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5);
oak_bookshelfModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5);
oak_bookshelfModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5);
oak_bookshelfModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5);
oak_bookshelfModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5);
oak_bookshelfModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5);
oak_bookshelfModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5);
oak_bookshelfModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5);
oak_bookshelfModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5);
oak_bookshelfModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5);
oak_bookshelfModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5);
oak_bookshelfModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5);
oak_bookshelfModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5);
oak_bookshelfModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
oak_bookshelfModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
oak_bookshelfModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
oak_bookshelfModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"oak_bookshelf"},{id:"oak_bookshelf"}, Furniture.placeRotatableBlock(BlockID.oak_bookshelf, oak_bookshelfModel));

IDRegistry.genBlockID("spruce_bookshelf");
Block.createBlock("spruce_bookshelf", [
	{name: "Spruce Bookshelf", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Bookshelf", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Bookshelf", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Bookshelf", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_bookshelf");
Item.createItem("spruce_bookshelf", "Spruce Bookshelf", {name: "spruce_bookshelf", meta: 0}, {stack: 64});

var spruce_bookshelfModel = ModelAPI.newArray();
spruce_bookshelfModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 1);
spruce_bookshelfModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 1);
spruce_bookshelfModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 1);
spruce_bookshelfModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 1);
spruce_bookshelfModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
spruce_bookshelfModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
spruce_bookshelfModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
spruce_bookshelfModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
spruce_bookshelfModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
spruce_bookshelfModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 1);
spruce_bookshelfModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 1);
spruce_bookshelfModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 1);
spruce_bookshelfModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 1);
spruce_bookshelfModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 1);
spruce_bookshelfModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 1);
spruce_bookshelfModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 1);
spruce_bookshelfModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 1);
spruce_bookshelfModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 1);
spruce_bookshelfModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 1);
spruce_bookshelfModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 1);
spruce_bookshelfModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 1);
spruce_bookshelfModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 1);
spruce_bookshelfModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 1);
spruce_bookshelfModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
spruce_bookshelfModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
spruce_bookshelfModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
spruce_bookshelfModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"spruce_bookshelf"},{id:"spruce_bookshelf"}, Furniture.placeRotatableBlock(BlockID.spruce_bookshelf, spruce_bookshelfModel));

IDRegistry.genBlockID("birch_bookshelf");
Block.createBlock("birch_bookshelf", [
	{name: "Birch Bookshelf", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Bookshelf", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Bookshelf", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Bookshelf", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_bookshelf");
Item.createItem("birch_bookshelf", "Birch Bookshelf", {name: "birch_bookshelf", meta: 0}, {stack: 64});

var birch_bookshelfModel = ModelAPI.newArray();
birch_bookshelfModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 2);
birch_bookshelfModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 2);
birch_bookshelfModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 2);
birch_bookshelfModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 2);
birch_bookshelfModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
birch_bookshelfModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
birch_bookshelfModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
birch_bookshelfModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
birch_bookshelfModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
birch_bookshelfModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 2);
birch_bookshelfModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 2);
birch_bookshelfModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 2);
birch_bookshelfModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 2);
birch_bookshelfModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 2);
birch_bookshelfModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 2);
birch_bookshelfModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 2);
birch_bookshelfModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 2);
birch_bookshelfModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 2);
birch_bookshelfModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 2);
birch_bookshelfModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 2);
birch_bookshelfModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 2);
birch_bookshelfModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 2);
birch_bookshelfModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 2);
birch_bookshelfModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
birch_bookshelfModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
birch_bookshelfModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
birch_bookshelfModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"birch_bookshelf"},{id:"birch_bookshelf"}, Furniture.placeRotatableBlock(BlockID.birch_bookshelf, birch_bookshelfModel));

IDRegistry.genBlockID("jungle_bookshelf");
Block.createBlock("jungle_bookshelf", [
	{name: "Jungle Bookshelf", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Bookshelf", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Bookshelf", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Bookshelf", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_bookshelf");
Item.createItem("jungle_bookshelf", "Jungle Bookshelf", {name: "jungle_bookshelf", meta: 0}, {stack: 64});

var jungle_bookshelfModel = ModelAPI.newArray();
jungle_bookshelfModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 3);
jungle_bookshelfModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 3);
jungle_bookshelfModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 3);
jungle_bookshelfModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 3);
jungle_bookshelfModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
jungle_bookshelfModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
jungle_bookshelfModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
jungle_bookshelfModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
jungle_bookshelfModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
jungle_bookshelfModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 3);
jungle_bookshelfModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 3);
jungle_bookshelfModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 3);
jungle_bookshelfModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 3);
jungle_bookshelfModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 3);
jungle_bookshelfModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 3);
jungle_bookshelfModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 3);
jungle_bookshelfModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 3);
jungle_bookshelfModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 3);
jungle_bookshelfModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 3);
jungle_bookshelfModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 3);
jungle_bookshelfModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 3);
jungle_bookshelfModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 3);
jungle_bookshelfModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 3);
jungle_bookshelfModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
jungle_bookshelfModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
jungle_bookshelfModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
jungle_bookshelfModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"jungle_bookshelf"},{id:"jungle_bookshelf"}, Furniture.placeRotatableBlock(BlockID.jungle_bookshelf, jungle_bookshelfModel));

IDRegistry.genBlockID("acacia_bookshelf");
Block.createBlock("acacia_bookshelf", [
	{name: "Acacia Bookshelf", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Bookshelf", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Bookshelf", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Bookshelf", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_bookshelf");
Item.createItem("acacia_bookshelf", "Acacia Bookshelf", {name: "acacia_bookshelf", meta: 0}, {stack: 64});

var acacia_bookshelfModel = ModelAPI.newArray();
acacia_bookshelfModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 4);
acacia_bookshelfModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 4);
acacia_bookshelfModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 4);
acacia_bookshelfModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 4);
acacia_bookshelfModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
acacia_bookshelfModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
acacia_bookshelfModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
acacia_bookshelfModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
acacia_bookshelfModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
acacia_bookshelfModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 4);
acacia_bookshelfModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 4);
acacia_bookshelfModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 4);
acacia_bookshelfModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 4);
acacia_bookshelfModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 4);
acacia_bookshelfModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 4);
acacia_bookshelfModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 4);
acacia_bookshelfModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 4);
acacia_bookshelfModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 4);
acacia_bookshelfModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 4);
acacia_bookshelfModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 4);
acacia_bookshelfModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 4);
acacia_bookshelfModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 4);
acacia_bookshelfModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 4);
acacia_bookshelfModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
acacia_bookshelfModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
acacia_bookshelfModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
acacia_bookshelfModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"acacia_bookshelf"},{id:"acacia_bookshelf"}, Furniture.placeRotatableBlock(BlockID.acacia_bookshelf, acacia_bookshelfModel));

IDRegistry.genBlockID("dark_oak_bookshelf");
Block.createBlock("dark_oak_bookshelf", [
	{name: "Dark Oak Bookshelf", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Bookshelf", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Bookshelf", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Bookshelf", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_bookshelf");
Item.createItem("dark_oak_bookshelf", "Dark Oak Bookshelf", {name: "dark_oak_bookshelf", meta: 0}, {stack: 64});

var dark_oak_bookshelfModel = ModelAPI.newArray();
dark_oak_bookshelfModel.addBoxByID("1", 0,2,0,1,3,0.0625, 5, 5);
dark_oak_bookshelfModel.addBoxByID("2", 1.9375,1,0,2,2,0.9375, 5, 5);
dark_oak_bookshelfModel.addBoxByID("3", 1,3,0,2,3.0625,1, 5, 5);
dark_oak_bookshelfModel.addBoxByID("4", 1,2,0.0625,1.9375,2.0625,1, 5, 5);
dark_oak_bookshelfModel.addBoxByID("5", 1.375,2.0625,0.0625,1.625,2.9375,0.875, 35, 4);
dark_oak_bookshelfModel.addBoxByID("6", 0.125,0.0625,0.0625,0.375,0.9375,0.875, 35);
dark_oak_bookshelfModel.addBoxByID("7", 0.375,0.0625,0.0625,0.625,0.8125,0.875, 159, 5);
dark_oak_bookshelfModel.addBoxByID("8", 1.125,2.0625,0.0625,1.375,2.6875,0.875, 35, 14);
dark_oak_bookshelfModel.addBoxByID("9", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
dark_oak_bookshelfModel.addBoxByID("10", 0.0625,0,0.0625,1,0.0625,1, 5, 5);
dark_oak_bookshelfModel.addBoxByID("11", 1,0,0.0625,1.9375,0.0625,1, 5, 5);
dark_oak_bookshelfModel.addBoxByID("12", 1,0.9375,0.0625,1.9375,1,1, 5, 5);
dark_oak_bookshelfModel.addBoxByID("13", 0.0625,0.9375,0.0625,1,1,1, 5, 5);
dark_oak_bookshelfModel.addBoxByID("14", 0.0625,2,0.0625,1,2.0625,1, 5, 5);
dark_oak_bookshelfModel.addBoxByID("15", 0,0,0,1,1,0.0625, 5, 5);
dark_oak_bookshelfModel.addBoxByID("16", 1,0,0,2,1,0.0625, 5, 5);
dark_oak_bookshelfModel.addBoxByID("17", 1,2,0,2,3,0.0625, 5, 5);
dark_oak_bookshelfModel.addBoxByID("18", 0,3,0,1,3.0625,1, 5, 5);
dark_oak_bookshelfModel.addBoxByID("19", 0,0,0.0625,0.0625,1,0.9375, 5, 5);
dark_oak_bookshelfModel.addBoxByID("20", 1.9375,0,0.0625,2,1,0.9375, 5, 5);
dark_oak_bookshelfModel.addBoxByID("21", 0,1,0,0.0625,2,0.9375, 5, 5);
dark_oak_bookshelfModel.addBoxByID("22", 0,2,0.0625,0.0625,3,0.9375, 5, 5);
dark_oak_bookshelfModel.addBoxByID("23", 1.9375,2,0.0625,2,3,0.9375, 5, 5);
dark_oak_bookshelfModel.addBoxByID("24", 1.0625,0.0625,0.0625,1.9375,0.3125,0.875, 35, 14);
dark_oak_bookshelfModel.addBoxByID("25", 1.4375,1.25,0.4375,1.6875,1.75,0.6875, 81);
dark_oak_bookshelfModel.addBoxByID("26", 1.3125,1,0.3125,1.8125,1.25,0.8125, 159, 12);
dark_oak_bookshelfModel.addBoxByID("27", 1.625,2.0625,0.0625,1.875,2.9375,0.875, 35, 3);
Furniture.addReplacementItem({id:"dark_oak_bookshelf"},{id:"dark_oak_bookshelf"}, Furniture.placeRotatableBlock(BlockID.dark_oak_bookshelf, dark_oak_bookshelfModel));

Block.setShape(BlockID.oak_bookshelf,0,0,0,1,3,1);
Block.setShape(BlockID.spruce_bookshelf,0,0,0,1,3,1);
Block.setShape(BlockID.birch_bookshelf,0,0,0,1,3,1);
Block.setShape(BlockID.jungle_bookshelf,0,0,0,1,3,1);
Block.setShape(BlockID.acacia_bookshelf,0,0,0,1,3,1);
Block.setShape(BlockID.dark_oak_bookshelf,0,0,0,1,3,1);

Translation.addTranslation("Oak Bookshelf", {ru: "Дубовая Книжная Полка"});
Translation.addTranslation("Spruce Bookshelf", {ru: "Еловая Книжная Полка"});
Translation.addTranslation("Birch Bookshelf", {ru: "Берёзовая Книжная Полка"});
Translation.addTranslation("Jungle Bookshelf", {ru: "ДжунглеваяКнижная Полка"});
Translation.addTranslation("Acacia Bookshelf", {ru: "Акациевая Книжная Полка"});
Translation.addTranslation("Dark Oak Bookshelf", {ru: "Тёмно Дубовая Книжная Полка"});

Recipes.addShaped({id: ItemID.oak_bookshelf, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,0, 'x', 340,0, 's', 81,0]);
Recipes.addShaped({id: ItemID.spruce_bookshelf, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,1, 'x', 340,0, 's', 81,0]);
Recipes.addShaped({id: ItemID.birch_bookshelf, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,2, 'x', 340,0, 's', 81,0]);
Recipes.addShaped({id: ItemID.jungle_bookshelf, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,3, 'x', 340,0, 's', 81,0]);
Recipes.addShaped({id: ItemID.acacia_bookshelf, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,4, 'x', 340,0, 's', 81,0]);
Recipes.addShaped({id: ItemID.dark_oak_bookshelf, count: 1, data: 0}, ["aaa", "xxs", "aaa"], ['a', 158,5, 'x', 340,0, 's', 81,0]);