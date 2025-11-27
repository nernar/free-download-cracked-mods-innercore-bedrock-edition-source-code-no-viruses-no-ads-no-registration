IDRegistry.genBlockID("oak_bench");
Block.createBlock("oak_bench", [
	{name: "Oak Bench", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Bench", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Bench", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Bench", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_bench");
Item.createItem("oak_bench", "Oak Bench", {name: "oak_bench", meta: 0}, {stack: 64});

var oak_benchModel = ModelAPI.newArray();
oak_benchModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
oak_benchModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
oak_benchModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
oak_benchModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
oak_benchModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
oak_benchModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
oak_benchModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
oak_benchModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
oak_benchModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
oak_benchModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
oak_benchModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5);
oak_benchModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5);
oak_benchModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5);
oak_benchModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5);
oak_benchModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5);
oak_benchModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5);
oak_benchModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5);
oak_benchModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5);
oak_benchModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
oak_benchModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
oak_benchModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
oak_benchModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
oak_benchModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5);
oak_benchModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5);
oak_benchModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5);
oak_benchModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5);
Furniture.addReplacementItem({id:"oak_bench"},{id:"oak_bench"}, Furniture.placeRotatableBlock(BlockID.oak_bench, oak_benchModel));

IDRegistry.genBlockID("spruce_bench");
Block.createBlock("spruce_bench", [
	{name: "Spruce Bench", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Bench", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Bench", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Bench", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_bench");
Item.createItem("spruce_bench", "Spruce Bench", {name: "spruce_bench", meta: 0}, {stack: 64});

var spruce_benchModel = ModelAPI.newArray();
spruce_benchModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
spruce_benchModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
spruce_benchModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
spruce_benchModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
spruce_benchModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
spruce_benchModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
spruce_benchModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
spruce_benchModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
spruce_benchModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
spruce_benchModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
spruce_benchModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 1);
spruce_benchModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 1);
spruce_benchModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 1);
spruce_benchModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 1);
spruce_benchModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 1);
spruce_benchModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 1);
spruce_benchModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 1);
spruce_benchModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 1);
spruce_benchModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
spruce_benchModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
spruce_benchModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
spruce_benchModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
spruce_benchModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 1);
spruce_benchModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 1);
spruce_benchModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 1);
spruce_benchModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 1);
Furniture.addReplacementItem({id:"spruce_bench"},{id:"spruce_bench"}, Furniture.placeRotatableBlock(BlockID.spruce_bench, spruce_benchModel));

IDRegistry.genBlockID("birch_bench");
Block.createBlock("birch_bench", [
	{name: "Birch Bench", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Bench", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Bench", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Bench", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_bench");
Item.createItem("birch_bench", "Birch Bench", {name: "birch_bench", meta: 0}, {stack: 64});

var birch_benchModel = ModelAPI.newArray();
birch_benchModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
birch_benchModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
birch_benchModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
birch_benchModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
birch_benchModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
birch_benchModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
birch_benchModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
birch_benchModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
birch_benchModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
birch_benchModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
birch_benchModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 2);
birch_benchModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 2);
birch_benchModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 2);
birch_benchModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 2);
birch_benchModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 2);
birch_benchModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 2);
birch_benchModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 2);
birch_benchModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 2);
birch_benchModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
birch_benchModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
birch_benchModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
birch_benchModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
birch_benchModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 2);
birch_benchModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 2);
birch_benchModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 2);
birch_benchModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 2);
Furniture.addReplacementItem({id:"birch_bench"},{id:"birch_bench"}, Furniture.placeRotatableBlock(BlockID.birch_bench, birch_benchModel));

IDRegistry.genBlockID("jungle_bench");
Block.createBlock("jungle_bench", [
	{name: "Jungle Bench", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Bench", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Bench", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Bench", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_bench");
Item.createItem("jungle_bench", "Jungle Bench", {name: "jungle_bench", meta: 0}, {stack: 64});

var jungle_benchModel = ModelAPI.newArray();
jungle_benchModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
jungle_benchModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
jungle_benchModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
jungle_benchModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
jungle_benchModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
jungle_benchModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
jungle_benchModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
jungle_benchModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
jungle_benchModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
jungle_benchModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
jungle_benchModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 3);
jungle_benchModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 3);
jungle_benchModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 3);
jungle_benchModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 3);
jungle_benchModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 3);
jungle_benchModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 3);
jungle_benchModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 3);
jungle_benchModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 3);
jungle_benchModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
jungle_benchModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
jungle_benchModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
jungle_benchModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
jungle_benchModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 3);
jungle_benchModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 3);
jungle_benchModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 3);
jungle_benchModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 3);
Furniture.addReplacementItem({id:"jungle_bench"},{id:"jungle_bench"}, Furniture.placeRotatableBlock(BlockID.jungle_bench, jungle_benchModel));

IDRegistry.genBlockID("acacia_bench");
Block.createBlock("acacia_bench", [
	{name: "Acacia Bench", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Bench", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Bench", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Bench", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_bench");
Item.createItem("acacia_bench", "Acacia Bench", {name: "acacia_bench", meta: 0}, {stack: 64});

var acacia_benchModel = ModelAPI.newArray();
acacia_benchModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
acacia_benchModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
acacia_benchModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
acacia_benchModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
acacia_benchModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
acacia_benchModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
acacia_benchModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
acacia_benchModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
acacia_benchModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
acacia_benchModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
acacia_benchModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 4);
acacia_benchModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 4);
acacia_benchModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 4);
acacia_benchModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 4);
acacia_benchModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 4);
acacia_benchModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 4);
acacia_benchModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 4);
acacia_benchModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 4);
acacia_benchModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
acacia_benchModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
acacia_benchModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
acacia_benchModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
acacia_benchModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 4);
acacia_benchModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 4);
acacia_benchModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 4);
acacia_benchModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 4);
Furniture.addReplacementItem({id:"acacia_bench"},{id:"acacia_bench"}, Furniture.placeRotatableBlock(BlockID.acacia_bench, acacia_benchModel));

IDRegistry.genBlockID("dark_oak_bench");
Block.createBlock("dark_oak_bench", [
	{name: "Dark Oak Bench", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Bench", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Bench", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Bench", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_bench");
Item.createItem("dark_oak_bench", "Dark Oak Bench", {name: "dark_oak_bench", meta: 0}, {stack: 64});

var dark_oak_benchModel = ModelAPI.newArray();
dark_oak_benchModel.addBoxByID("1", 1.875,0,0.0625,1.9375,0.5625,0.125, 159, 9);
dark_oak_benchModel.addBoxByID("2", 1.875,1,0,1.9375,1.3125,0.0625, 159, 9);
dark_oak_benchModel.addBoxByID("3", 0.0625,0,0.875,0.125,0.5625,0.9375, 159, 9);
dark_oak_benchModel.addBoxByID("4", 1.875,0,0.875,1.9375,0.5625,0.9375, 159, 9);
dark_oak_benchModel.addBoxByID("5", 1.875,0.5,0.125,1.9375,0.5625,0.875, 159, 9);
dark_oak_benchModel.addBoxByID("6", 0.125,0.5,0.0625,1,0.5625,0.125, 159, 9);
dark_oak_benchModel.addBoxByID("7", 1,0.5,0.0625,1.875,0.5625,0.125, 159, 9);
dark_oak_benchModel.addBoxByID("8", 1,0.5,0.875,1.875,0.5625,0.9375, 159, 9);
dark_oak_benchModel.addBoxByID("9", 0.125,0.5,0.875,1,0.5625,0.9375, 159, 9);
dark_oak_benchModel.addBoxByID("10", 0.0625,0.5,0.125,0.125,0.5625,0.875, 159, 9);
dark_oak_benchModel.addBoxByID("11", 0,1.125,0.0625,1,1.25,0.1875, 5, 5);
dark_oak_benchModel.addBoxByID("12", 0,0.5625,0.3125,1,0.6875,0.4375, 5, 5);
dark_oak_benchModel.addBoxByID("13", 0,0.5625,0.5625,1,0.6875,0.6875, 5, 5);
dark_oak_benchModel.addBoxByID("14", 1,0.5625,0.0625,2,0.6875,0.1875, 5, 5);
dark_oak_benchModel.addBoxByID("15", 0,0.5625,0.8125,1,0.6875,0.9375, 5, 5);
dark_oak_benchModel.addBoxByID("16", 1,0.5625,0.8125,2,0.6875,0.9375, 5, 5);
dark_oak_benchModel.addBoxByID("17", 1,0.5625,0.5625,2,0.6875,0.6875, 5, 5);
dark_oak_benchModel.addBoxByID("18", 1,0.5625,0.3125,2,0.6875,0.4375, 5, 5);
dark_oak_benchModel.addBoxByID("19", 0.0625,0,0.0625,0.125,0.5625,0.125, 159, 9);
dark_oak_benchModel.addBoxByID("20", 1.875,0.4375,0,1.9375,1,0.0625, 159, 9);
dark_oak_benchModel.addBoxByID("21", 0.0625,0.4375,0,0.125,1,0.0625, 159, 9);
dark_oak_benchModel.addBoxByID("22", 0.0625,1,0,0.125,1.3125,0.0625, 159, 9);
dark_oak_benchModel.addBoxByID("23", 0,0.5625,0.0625,1,0.6875,0.1875, 5, 5);
dark_oak_benchModel.addBoxByID("24", 1,1.125,0.0625,2,1.25,0.1875, 5, 5);
dark_oak_benchModel.addBoxByID("25", 0,0.875,0.0625,1,1,0.1875, 5, 5);
dark_oak_benchModel.addBoxByID("26", 1,0.875,0.0625,2,1,0.1875, 5, 5);
Furniture.addReplacementItem({id:"dark_oak_bench"},{id:"dark_oak_bench"}, Furniture.placeRotatableBlock(BlockID.dark_oak_bench, dark_oak_benchModel));

Block.setShape(BlockID.oak_bench,0,0,0,1,0.36,1);
Block.setShape(BlockID.spruce_bench,0,0,0,1,0.36,1);
Block.setShape(BlockID.birch_bench,0,0,0,1,0.36,1);
Block.setShape(BlockID.jungle_bench,0,0,0,1,0.36,1);
Block.setShape(BlockID.acacia_bench,0,0,0,1,0.36,1);
Block.setShape(BlockID.dark_oak_bench,0,0,0,1,0.36,1);


Recipes.addShaped({id: ItemID.oak_bench, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,0]);
Recipes.addShaped({id: ItemID.spruce_bench, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,1]);
Recipes.addShaped({id: ItemID.birch_bench, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,2]);
Recipes.addShaped({id: ItemID.jungle_bench, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,3]);
Recipes.addShaped({id: ItemID.acacia_bench, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,4]);
Recipes.addShaped({id: ItemID.dark_oak_bench, count: 1, data: 0}, ["x x", "aaa", "x x"], ["x", 101,0, "a", 5,5]);

Translation.addTranslation("Oak Bench", {ru: "Дубовая Скамейка"});
Translation.addTranslation("Spruce Bench", {ru: "Еловая Скамейка"});
Translation.addTranslation("Birch Bench", {ru: "Берёзовая Скамейка"});
Translation.addTranslation("Jungle Bench", {ru: "Джунглевая Скамейка"});
Translation.addTranslation("Acacia Bench", {ru: "Акациевая Скамейка"});
Translation.addTranslation("Dark Oak Bench", {ru: "Тёмно Дубовая Скамейка"});