IDRegistry.genBlockID("oak_bedside_table");
Block.createBlockWithRotation("oak_bedside_table", [
	{name: "oak_bedside_table", texture: [["planks_oak", 0]], inCreative: false},
	{name: "oak_bedside_table", texture: [["planks_oak", 0]], inCreative: false},
	{name: "oak_bedside_table", texture: [["planks_oak", 0]], inCreative: false},
	{name: "oak_bedside_table", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_bedside_table");
Item.createItem("oak_bedside_table", "Oak Bedside Table", {name: "oak_bedside_table", meta: 0}, {stack: 64});

var oak_bedside_tableModel = ModelAPI.newArray();
oak_bedside_tableModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5);
oak_bedside_tableModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
oak_bedside_tableModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
oak_bedside_tableModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5);
oak_bedside_tableModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
oak_bedside_tableModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
oak_bedside_tableModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5);
oak_bedside_tableModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5);
oak_bedside_tableModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5);
oak_bedside_tableModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5);
oak_bedside_tableModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5);
oak_bedside_tableModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
oak_bedside_tableModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
oak_bedside_tableModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
oak_bedside_tableModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
oak_bedside_tableModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"oak_bedside_table"},{id:"oak_bedside_table"}, Furniture.placeRotatableBlock(BlockID.oak_bedside_table, oak_bedside_tableModel));

let oak_bedside_tableModel = new BlockRenderer.Model();
oak_bedside_tableModel.addBox(0,0,0.0625,0.0625,0.9375,1, 5, 0);
oak_bedside_tableModel.addBox(1,0.9375,0,1.0625,1,1, 159, 9);
oak_bedside_tableModel.addBox(0,0.9375,-0.0625,1,1,0, 159, 9);
oak_bedside_tableModel.addBox(0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 0);
oak_bedside_tableModel.addBox(0,0.9375,1,1,1,1.0625, 159, 9);
oak_bedside_tableModel.addBox(-0.0625,0.9375,0,0,1,1, 159, 9);
oak_bedside_tableModel.addBox(0,0.9375,0,1,1,1, 5, 0);
oak_bedside_tableModel.addBox(0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 0);
oak_bedside_tableModel.addBox(0.9375,0,0,1,0.9375,1, 5, 0);
oak_bedside_tableModel.addBox(0.125,0.375,1,0.875,0.5625,1.0625, 5, 0);
oak_bedside_tableModel.addBox(0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 0);
oak_bedside_tableModel.addBox(0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
oak_bedside_tableModel.addBox(0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
oak_bedside_tableModel.addBox(0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
oak_bedside_tableModel.addBox(0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
oak_bedside_tableModel.addBox(0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
ItemModel.getForWithFallback(ItemID.oak_bedside_table, 0).setModel(oak_bedside_tableModel);

IDRegistry.genBlockID("spruce_bedside_table");
Block.createBlock("spruce_bedside_table", [
	{name: "spruce_bedside_table", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "spruce_bedside_table", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "spruce_bedside_table", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "spruce_bedside_table", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_bedside_table");
Item.createItem("spruce_bedside_table", "Spruce Bedside Table", {name: "spruce_bedside_table", meta: 0}, {stack: 64});

var spruce_bedside_tableModel = ModelAPI.newArray();
spruce_bedside_tableModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 1);
spruce_bedside_tableModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
spruce_bedside_tableModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
spruce_bedside_tableModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 1);
spruce_bedside_tableModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
spruce_bedside_tableModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
spruce_bedside_tableModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 1);
spruce_bedside_tableModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 1);
spruce_bedside_tableModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 1);
spruce_bedside_tableModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 1);
spruce_bedside_tableModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 1);
spruce_bedside_tableModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
spruce_bedside_tableModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
spruce_bedside_tableModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
spruce_bedside_tableModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
spruce_bedside_tableModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"spruce_bedside_table"},{id:"spruce_bedside_table"}, Furniture.placeRotatableBlock(BlockID.spruce_bedside_table, spruce_bedside_tableModel));

let spruce_bedside_tableModel = new BlockRenderer.Model();
spruce_bedside_tableModel.addBox(0,0,0.0625,0.0625,0.9375,1, 5, 1);
spruce_bedside_tableModel.addBox(1,0.9375,0,1.0625,1,1, 159, 9);
spruce_bedside_tableModel.addBox(0,0.9375,-0.0625,1,1,0, 159, 9);
spruce_bedside_tableModel.addBox(0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 1);
spruce_bedside_tableModel.addBox(0,0.9375,1,1,1,1.0625, 159, 9);
spruce_bedside_tableModel.addBox(-0.0625,0.9375,0,0,1,1, 159, 9);
spruce_bedside_tableModel.addBox(0,0.9375,0,1,1,1, 5, 1);
spruce_bedside_tableModel.addBox(0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 1);
spruce_bedside_tableModel.addBox(0.9375,0,0,1,0.9375,1, 5, 1);
spruce_bedside_tableModel.addBox(0.125,0.375,1,0.875,0.5625,1.0625, 5, 1);
spruce_bedside_tableModel.addBox(0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 1);
spruce_bedside_tableModel.addBox(0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
spruce_bedside_tableModel.addBox(0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
spruce_bedside_tableModel.addBox(0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
spruce_bedside_tableModel.addBox(0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
spruce_bedside_tableModel.addBox(0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
ItemModel.getForWithFallback(ItemID.spruce_bedside_table, 0).setModel(spruce_bedside_tableModel);

IDRegistry.genBlockID("birch_bedside_table");
Block.createBlock("birch_bedside_table", [
	{name: "birch_bedside_table", texture: [["planks_birch", 0]], inCreative: false},
	{name: "birch_bedside_table", texture: [["planks_birch", 0]], inCreative: false},
	{name: "birch_bedside_table", texture: [["planks_birch", 0]], inCreative: false},
	{name: "birch_bedside_table", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_bedside_table");
Item.createItem("birch_bedside_table", "Birch Bedside Table", {name: "birch_bedside_table", meta: 0}, {stack: 64});

var birch_bedside_tableModel = ModelAPI.newArray();
birch_bedside_tableModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 2);
birch_bedside_tableModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
birch_bedside_tableModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
birch_bedside_tableModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 2);
birch_bedside_tableModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
birch_bedside_tableModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
birch_bedside_tableModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 2);
birch_bedside_tableModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 2);
birch_bedside_tableModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 2);
birch_bedside_tableModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 2);
birch_bedside_tableModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 2);
birch_bedside_tableModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
birch_bedside_tableModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
birch_bedside_tableModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
birch_bedside_tableModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
birch_bedside_tableModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"birch_bedside_table"},{id:"birch_bedside_table"}, Furniture.placeRotatableBlock(BlockID.birch_bedside_table, birch_bedside_tableModel));

let birch_bedside_tableModel = new BlockRenderer.Model();
birch_bedside_tableModel.addBox(0,0,0.0625,0.0625,0.9375,1, 5, 2);
birch_bedside_tableModel.addBox(1,0.9375,0,1.0625,1,1, 159, 9);
birch_bedside_tableModel.addBox(0,0.9375,-0.0625,1,1,0, 159, 9);
birch_bedside_tableModel.addBox(0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 2);
birch_bedside_tableModel.addBox(0,0.9375,1,1,1,1.0625, 159, 9);
birch_bedside_tableModel.addBox(-0.0625,0.9375,0,0,1,1, 159, 9);
birch_bedside_tableModel.addBox(0,0.9375,0,1,1,1, 5, 2);
birch_bedside_tableModel.addBox(0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 2);
birch_bedside_tableModel.addBox(0.9375,0,0,1,0.9375,1, 5, 2);
birch_bedside_tableModel.addBox(0.125,0.375,1,0.875,0.5625,1.0625, 5, 2);
birch_bedside_tableModel.addBox(0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 2);
birch_bedside_tableModel.addBox(0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
birch_bedside_tableModel.addBox(0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
birch_bedside_tableModel.addBox(0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
birch_bedside_tableModel.addBox(0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
birch_bedside_tableModel.addBox(0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
ItemModel.getForWithFallback(ItemID.birch_bedside_table, 0).setModel(birch_bedside_tableModel);

IDRegistry.genBlockID("jungle_bedside_table");
Block.createBlock("jungle_bedside_table", [
	{name: "jungle_bedside_table", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "jungle_bedside_table", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "jungle_bedside_table", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "jungle_bedside_table", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_bedside_table");
Item.createItem("jungle_bedside_table", "Jungle Bedside Table", {name: "jungle_bedside_table", meta: 0}, {stack: 64});

var jungle_bedside_tableModel = ModelAPI.newArray();
jungle_bedside_tableModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 3);
jungle_bedside_tableModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
jungle_bedside_tableModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
jungle_bedside_tableModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 3);
jungle_bedside_tableModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
jungle_bedside_tableModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
jungle_bedside_tableModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 3);
jungle_bedside_tableModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 3);
jungle_bedside_tableModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 3);
jungle_bedside_tableModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 3);
jungle_bedside_tableModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 3);
jungle_bedside_tableModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
jungle_bedside_tableModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
jungle_bedside_tableModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
jungle_bedside_tableModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
jungle_bedside_tableModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"jungle_bedside_table"},{id:"jungle_bedside_table"}, Furniture.placeRotatableBlock(BlockID.jungle_bedside_table, jungle_bedside_tableModel));

let jungle_bedside_tableModel = new BlockRenderer.Model();
jungle_bedside_tableModel.addBox(0,0,0.0625,0.0625,0.9375,1, 5, 3);
jungle_bedside_tableModel.addBox(1,0.9375,0,1.0625,1,1, 159, 9);
jungle_bedside_tableModel.addBox(0,0.9375,-0.0625,1,1,0, 159, 9);
jungle_bedside_tableModel.addBox(0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 3);
jungle_bedside_tableModel.addBox(0,0.9375,1,1,1,1.0625, 159, 9);
jungle_bedside_tableModel.addBox(-0.0625,0.9375,0,0,1,1, 159, 9);
jungle_bedside_tableModel.addBox(0,0.9375,0,1,1,1, 5, 3);
jungle_bedside_tableModel.addBox(0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 3);
jungle_bedside_tableModel.addBox(0.9375,0,0,1,0.9375,1, 5, 3);
jungle_bedside_tableModel.addBox(0.125,0.375,1,0.875,0.5625,1.0625, 5, 3);
jungle_bedside_tableModel.addBox(0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 3);
jungle_bedside_tableModel.addBox(0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
jungle_bedside_tableModel.addBox(0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
jungle_bedside_tableModel.addBox(0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
jungle_bedside_tableModel.addBox(0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
jungle_bedside_tableModel.addBox(0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
ItemModel.getForWithFallback(ItemID.jungle_bedside_table, 0).setModel(jungle_bedside_tableModel);

IDRegistry.genBlockID("acacia_bedside_table");
Block.createBlock("acacia_bedside_table", [
	{name: "acacia_bedside_table", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "acacia_bedside_table", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "acacia_bedside_table", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "acacia_bedside_table", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_bedside_table");
Item.createItem("acacia_bedside_table", "Acacia Bedside Table", {name: "acacia_bedside_table", meta: 0}, {stack: 64});

var acacia_bedside_tableModel = ModelAPI.newArray();
acacia_bedside_tableModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 4);
acacia_bedside_tableModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
acacia_bedside_tableModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
acacia_bedside_tableModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 4);
acacia_bedside_tableModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
acacia_bedside_tableModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
acacia_bedside_tableModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 4);
acacia_bedside_tableModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 4);
acacia_bedside_tableModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 4);
acacia_bedside_tableModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 4);
acacia_bedside_tableModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 4);
acacia_bedside_tableModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
acacia_bedside_tableModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
acacia_bedside_tableModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
acacia_bedside_tableModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
acacia_bedside_tableModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"acacia_bedside_table"},{id:"acacia_bedside_table"}, Furniture.placeRotatableBlock(BlockID.acacia_bedside_table, acacia_bedside_tableModel));

let acacia_bedside_tableModel = new BlockRenderer.Model();
acacia_bedside_tableModel.addBox(0,0,0.0625,0.0625,0.9375,1, 5, 4);
acacia_bedside_tableModel.addBox(1,0.9375,0,1.0625,1,1, 159, 9);
acacia_bedside_tableModel.addBox(0,0.9375,-0.0625,1,1,0, 159, 9);
acacia_bedside_tableModel.addBox(0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 4);
acacia_bedside_tableModel.addBox(0,0.9375,1,1,1,1.0625, 159, 9);
acacia_bedside_tableModel.addBox(-0.0625,0.9375,0,0,1,1, 159, 9);
acacia_bedside_tableModel.addBox(0,0.9375,0,1,1,1, 5, 4);
acacia_bedside_tableModel.addBox(0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 4);
acacia_bedside_tableModel.addBox(0.9375,0,0,1,0.9375,1, 5, 4);
acacia_bedside_tableModel.addBox(0.125,0.375,1,0.875,0.5625,1.0625, 5, 4);
acacia_bedside_tableModel.addBox(0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 4);
acacia_bedside_tableModel.addBox(0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
acacia_bedside_tableModel.addBox(0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
acacia_bedside_tableModel.addBox(0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
acacia_bedside_tableModel.addBox(0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
acacia_bedside_tableModel.addBox(0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
ItemModel.getForWithFallback(ItemID.acacia_bedside_table, 0).setModel(acacia_bedside_tableModel);

IDRegistry.genBlockID("dark_oak_bedside_table");
Block.createBlock("dark_oak_bedside_table", [
	{name: "dark_oak_bedside_table", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "dark_oak_bedside_table", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "dark_oak_bedside_table", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "dark_oak_bedside_table", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_bedside_table");
Item.createItem("dark_oak_bedside_table", "Dark Oak Bedside Table", {name: "dark_oak_bedside_table", meta: 0}, {stack: 64});

var dark_oak_bedside_tableModel = ModelAPI.newArray();
dark_oak_bedside_tableModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 5);
dark_oak_bedside_tableModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
dark_oak_bedside_tableModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
dark_oak_bedside_tableModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 5);
dark_oak_bedside_tableModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
dark_oak_bedside_tableModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
dark_oak_bedside_tableModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 5);
dark_oak_bedside_tableModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 5);
dark_oak_bedside_tableModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 5);
dark_oak_bedside_tableModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 5);
dark_oak_bedside_tableModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 5);
dark_oak_bedside_tableModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
dark_oak_bedside_tableModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
dark_oak_bedside_tableModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
dark_oak_bedside_tableModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
dark_oak_bedside_tableModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"dark_oak_bedside_table"},{id:"dark_oak_bedside_table"}, Furniture.placeRotatableBlock(BlockID.dark_oak_bedside_table, dark_oak_bedside_tableModel));

let dark_oak_bedside_tableModel = new BlockRenderer.Model();
dark_oak_bedside_tableModel.addBox(0,0,0.0625,0.0625,0.9375,1, 5, 5);
dark_oak_bedside_tableModel.addBox(1,0.9375,0,1.0625,1,1, 159, 9);
dark_oak_bedside_tableModel.addBox(0,0.9375,-0.0625,1,1,0, 159, 9);
dark_oak_bedside_tableModel.addBox(0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 5);
dark_oak_bedside_tableModel.addBox(0,0.9375,1,1,1,1.0625, 159, 9);
dark_oak_bedside_tableModel.addBox(-0.0625,0.9375,0,0,1,1, 159, 9);
dark_oak_bedside_tableModel.addBox(0,0.9375,0,1,1,1, 5, 5);
dark_oak_bedside_tableModel.addBox(0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 5);
dark_oak_bedside_tableModel.addBox(0.9375,0,0,1,0.9375,1, 5, 5);
dark_oak_bedside_tableModel.addBox(0.125,0.375,1,0.875,0.5625,1.0625, 5, 5);
dark_oak_bedside_tableModel.addBox(0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 5);
dark_oak_bedside_tableModel.addBox(0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
dark_oak_bedside_tableModel.addBox(0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
dark_oak_bedside_tableModel.addBox(0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
dark_oak_bedside_tableModel.addBox(0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
dark_oak_bedside_tableModel.addBox(0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
ItemModel.getForWithFallback(ItemID.dark_oak_bedside_table, 0).setModel(dark_oak_bedside_tableModel);

//translation night stands
Translation.addTranslation("Oak Bedside Table", {ru: "Дубовая Прикроватная Тумбочка"});
Translation.addTranslation("Spruce Bedside Table", {ru: "Еловая Прикроватная Тумбочка"});
Translation.addTranslation("Birch Bedside Table", {ru: "Берёзовая Прикроватная Тумбочка "});
Translation.addTranslation("Jungle Bedside Table", {ru: "Джунглевая Прикроватная Тумбочка"});
Translation.addTranslation("Acacia Bedside Table", {ru: "Акациевая Прикроватная Тумбочка"});
Translation.addTranslation("Dark Oak Bedside Table", {ru: "Тёмно Дубовая Прикроватная Тумбочка"});

//recipes night stands
Recipes.addShaped({id: ItemID.oak_bedside_table, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,0, 'x', 85,0, 'c', 54,0]);
Recipes.addShaped({id: ItemID.spruce_bedside_table, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,1, 'x', 85,1, 'c', 54,0]);
Recipes.addShaped({id: ItemID.birch_bedside_table, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,2, 'x', 85,2, 'c', 54,0]);
Recipes.addShaped({id: ItemID.jungle_bedside_table, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,3, 'x', 85,3, 'c', 54,0]);
Recipes.addShaped({id: ItemID.acacia_bedside_table, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,4, 'x', 85,4, 'c', 54,0]);
Recipes.addShaped({id: ItemID.dark_oak_bedside_table, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,5, 'x', 85,5, 'c', 54,0]);