//trough wheat
IDRegistry.genBlockID("oak_trough_wheat");
Block.createBlock("oak_trough_wheat", [
	{name: "Trough Wheat", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_trough_wheat");
Item.createItem("oak_trough_wheat", "Trough Wheat", {name: "oak_trough_wheat", meta: 0}, {stack: 64});

var oak_trough_wheatModel = ModelAPI.newArray();
oak_trough_wheatModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5);
oak_trough_wheatModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5);
oak_trough_wheatModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
oak_trough_wheatModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5);
oak_trough_wheatModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5);
oak_trough_wheatModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5);
oak_trough_wheatModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5);
oak_trough_wheatModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5);
oak_trough_wheatModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5);
oak_trough_wheatModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"oak_trough_wheat"},{id:"oak_trough_wheat"}, Furniture.placeRotatableBlock(BlockID.oak_trough_wheat, oak_trough_wheatModel));

IDRegistry.genBlockID("spruce_trough_wheat");
Block.createBlock("spruce_trough_wheat", [
	{name: "Trough Wheat", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_trough_wheat");
Item.createItem("spruce_trough_wheat", "Trough Wheat", {name: "spruce_trough_wheat", meta: 0}, {stack: 64});

var spruce_trough_wheatModel = ModelAPI.newArray();
spruce_trough_wheatModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 1);
spruce_trough_wheatModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 1);
spruce_trough_wheatModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
spruce_trough_wheatModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 1);
spruce_trough_wheatModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 1);
spruce_trough_wheatModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 1);
spruce_trough_wheatModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 1);
spruce_trough_wheatModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 1);
spruce_trough_wheatModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 1);
spruce_trough_wheatModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"spruce_trough_wheat"},{id:"spruce_trough_wheat"}, Furniture.placeRotatableBlock(BlockID.spruce_trough_wheat, spruce_trough_wheatModel));

IDRegistry.genBlockID("birch_trough_wheat");
Block.createBlock("birch_trough_wheat", [
	{name: "Trough Wheat", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_trough_wheat");
Item.createItem("birch_trough_wheat", "Trough Wheat", {name: "birch_trough_wheat", meta: 0}, {stack: 64});

var birch_trough_wheatModel = ModelAPI.newArray();
birch_trough_wheatModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 2);
birch_trough_wheatModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 2);
birch_trough_wheatModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
birch_trough_wheatModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 2);
birch_trough_wheatModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 2);
birch_trough_wheatModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 2);
birch_trough_wheatModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 2);
birch_trough_wheatModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 2);
birch_trough_wheatModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 2);
birch_trough_wheatModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"birch_trough_wheat"},{id:"birch_trough_wheat"}, Furniture.placeRotatableBlock(BlockID.birch_trough_wheat, birch_trough_wheatModel));

IDRegistry.genBlockID("jungle_trough_wheat");
Block.createBlock("jungle_trough_wheat", [
	{name: "Trough Wheat", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_trough_wheat");
Item.createItem("jungle_trough_wheat", "Trough Wheat", {name: "jungle_trough_wheat", meta: 0}, {stack: 64});

var jungle_trough_wheatModel = ModelAPI.newArray();
jungle_trough_wheatModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 3);
jungle_trough_wheatModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 3);
jungle_trough_wheatModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
jungle_trough_wheatModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 3);
jungle_trough_wheatModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 3);
jungle_trough_wheatModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 3);
jungle_trough_wheatModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 3);
jungle_trough_wheatModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 3);
jungle_trough_wheatModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 3);
jungle_trough_wheatModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"jungle_trough_wheat"},{id:"jungle_trough_wheat"}, Furniture.placeRotatableBlock(BlockID.jungle_trough_wheat, jungle_trough_wheatModel));

IDRegistry.genBlockID("acacia_trough_wheat");
Block.createBlock("acacia_trough_wheat", [
	{name: "Trough Wheat", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_trough_wheat");
Item.createItem("acacia_trough_wheat", "Trough Wheat", {name: "acacia_trough_wheat", meta: 0}, {stack: 64});

var acacia_trough_wheatModel = ModelAPI.newArray();
acacia_trough_wheatModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 4);
acacia_trough_wheatModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 4);
acacia_trough_wheatModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
acacia_trough_wheatModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 4);
acacia_trough_wheatModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 4);
acacia_trough_wheatModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 4);
acacia_trough_wheatModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 4);
acacia_trough_wheatModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 4);
acacia_trough_wheatModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 4);
acacia_trough_wheatModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"acacia_trough_wheat"},{id:"acacia_trough_wheat"}, Furniture.placeRotatableBlock(BlockID.acacia_trough_wheat, acacia_trough_wheatModel));

IDRegistry.genBlockID("dark_oak_trough_wheat");
Block.createBlock("dark_oak_trough_wheat", [
	{name: "Trough Wheat", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Trough Wheat", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_trough_wheat");
Item.createItem("dark_oak_trough_wheat", "Trough Wheat", {name: "dark_oak_trough_wheat", meta: 0}, {stack: 64});

var dark_oak_trough_wheatModel = ModelAPI.newArray();
dark_oak_trough_wheatModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 5);
dark_oak_trough_wheatModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 5);
dark_oak_trough_wheatModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
dark_oak_trough_wheatModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 5);
dark_oak_trough_wheatModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 5);
dark_oak_trough_wheatModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 5);
dark_oak_trough_wheatModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 5);
dark_oak_trough_wheatModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 5);
dark_oak_trough_wheatModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 5);
dark_oak_trough_wheatModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"dark_oak_trough_wheat"},{id:"dark_oak_trough_wheat"}, Furniture.placeRotatableBlock(BlockID.dark_oak_trough_wheat, dark_oak_trough_wheatModel));

Translation.addTranslation("Trough Wheat", {ru: "Корыто с Пшеницей"});

Recipes.addShaped({id: ItemID.oak_trough_wheat, count: 1, data: 0}, ["aaa", "xxx"], ['a', 296,0, 'x', 5,0])
Recipes.addShaped({id: ItemID.spruce_trough_wheat, count: 1, data: 0}, ["aaa", "xxx"], ['a', 296,0, 'x', 5,1])
Recipes.addShaped({id: ItemID.birch_trough_wheat, count: 1, data: 0}, ["aaa", "xxx"], ['a', 296,0, 'x', 5,2])
Recipes.addShaped({id: ItemID.jungle_trough_wheat, count: 1, data: 0}, ["aaa", "xxx"], ['a', 296,0, 'x', 5,3])
Recipes.addShaped({id: ItemID.acacia_trough_wheat, count: 1, data: 0}, ["aaa", "xxx"], ['a', 296,0, 'x', 5,4])
Recipes.addShaped({id: ItemID.dark_oak_trough_wheat, count: 1, data: 0}, ["aaa", "xxx"], ['a', 296,0, 'x', 5,5])

Block.setShape(BlockID.oak_trough_wheat,0,0,0,1,1/2,1);
Block.setShape(BlockID.spruce_trough_wheat,0,0,0,1,1/2,1);
Block.setShape(BlockID.birch_trough_wheat,0,0,0,1,1/2,1);
Block.setShape(BlockID.jungle_trough_wheat,0,0,0,1,1/2,1);
Block.setShape(BlockID.acacia_trough_wheat,0,0,0,1,1/2,1);
Block.setShape(BlockID.dark_oak_trough_wheat,0,0,0,1,1/2,1);

//trough water
IDRegistry.genBlockID("oak_trough_water");
Block.createBlock("oak_trough_water", [
	{name: "Trough Water", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_trough_water");
Item.createItem("oak_trough_water", "Trough Water", {name: "oak_trough_water", meta: 0}, {stack: 64});

var oak_trough_waterModel = ModelAPI.newArray();
oak_trough_waterModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5);
oak_trough_waterModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5);
oak_trough_waterModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
oak_trough_waterModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5);
oak_trough_waterModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5);
oak_trough_waterModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5);
oak_trough_waterModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5);
oak_trough_waterModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5);
oak_trough_waterModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5);
oak_trough_waterModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"oak_trough_water"},{id:"oak_trough_water"}, Furniture.placeRotatableBlock(BlockID.oak_trough_water, oak_trough_waterModel));

IDRegistry.genBlockID("spruce_trough_water");
Block.createBlock("spruce_trough_water", [
	{name: "Trough Water", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_trough_water");
Item.createItem("spruce_trough_water", "Trough Water", {name: "spruce_trough_water", meta: 0}, {stack: 64});

var spruce_trough_waterModel = ModelAPI.newArray();
spruce_trough_waterModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 1);
spruce_trough_waterModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 1);
spruce_trough_waterModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
spruce_trough_waterModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 1);
spruce_trough_waterModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 1);
spruce_trough_waterModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 1);
spruce_trough_waterModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 1);
spruce_trough_waterModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 1);
spruce_trough_waterModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 1);
spruce_trough_waterModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"spruce_trough_water"},{id:"spruce_trough_water"}, Furniture.placeRotatableBlock(BlockID.spruce_trough_water, spruce_trough_waterModel));

IDRegistry.genBlockID("birch_trough_water");
Block.createBlock("birch_trough_water", [
	{name: "Trough Water", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_trough_water");
Item.createItem("birch_trough_water", "Trough Water", {name: "birch_trough_water", meta: 0}, {stack: 64});

var birch_trough_waterModel = ModelAPI.newArray();
birch_trough_waterModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 2);
birch_trough_waterModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 2);
birch_trough_waterModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
birch_trough_waterModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 2);
birch_trough_waterModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 2);
birch_trough_waterModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 2);
birch_trough_waterModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 2);
birch_trough_waterModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 2);
birch_trough_waterModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 2);
birch_trough_waterModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"birch_trough_water"},{id:"birch_trough_water"}, Furniture.placeRotatableBlock(BlockID.birch_trough_water, birch_trough_waterModel));

IDRegistry.genBlockID("jungle_trough_water");
Block.createBlock("jungle_trough_water", [
	{name: "Trough Water", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_trough_water");
Item.createItem("jungle_trough_water", "Trough Water", {name: "jungle_trough_water", meta: 0}, {stack: 64});

var jungle_trough_waterModel = ModelAPI.newArray();
jungle_trough_waterModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 3);
jungle_trough_waterModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 3);
jungle_trough_waterModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
jungle_trough_waterModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 3);
jungle_trough_waterModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 3);
jungle_trough_waterModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 3);
jungle_trough_waterModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 3);
jungle_trough_waterModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 3);
jungle_trough_waterModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 3);
jungle_trough_waterModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"jungle_trough_water"},{id:"jungle_trough_water"}, Furniture.placeRotatableBlock(BlockID.jungle_trough_water, jungle_trough_waterModel));

IDRegistry.genBlockID("acacia_trough_water");
Block.createBlock("acacia_trough_water", [
	{name: "Trough Water", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_trough_water");
Item.createItem("acacia_trough_water", "Trough Water", {name: "acacia_trough_water", meta: 0}, {stack: 64});

var acacia_trough_waterModel = ModelAPI.newArray();
acacia_trough_waterModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 4);
acacia_trough_waterModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 4);
acacia_trough_waterModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
acacia_trough_waterModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 4);
acacia_trough_waterModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 4);
acacia_trough_waterModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 4);
acacia_trough_waterModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 4);
acacia_trough_waterModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 4);
acacia_trough_waterModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 4);
acacia_trough_waterModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"acacia_trough_water"},{id:"acacia_trough_water"}, Furniture.placeRotatableBlock(BlockID.acacia_trough_water, acacia_trough_waterModel));

IDRegistry.genBlockID("dark_oak_trough_water");
Block.createBlock("dark_oak_trough_water", [
	{name: "Trough Water", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Trough Water", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_trough_water");
Item.createItem("dark_oak_trough_water", "Trough Water", {name: "dark_oak_trough_water", meta: 0}, {stack: 64});

var dark_oak_trough_waterModel = ModelAPI.newArray();
dark_oak_trough_waterModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 5);
dark_oak_trough_waterModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 5);
dark_oak_trough_waterModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
dark_oak_trough_waterModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 5);
dark_oak_trough_waterModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 5);
dark_oak_trough_waterModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 5);
dark_oak_trough_waterModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 5);
dark_oak_trough_waterModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 5);
dark_oak_trough_waterModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 5);
dark_oak_trough_waterModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"dark_oak_trough_water"},{id:"dark_oak_trough_water"}, Furniture.placeRotatableBlock(BlockID.dark_oak_trough_water, dark_oak_trough_waterModel));

Translation.addTranslation("Trough Water", {ru: "Корыта с Водой"});

Recipes.addShapeless(
	{id: ItemID.oak_trough_water, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 0}, {id: 5, data: 0}, {id: 5, data: 0}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.spruce_trough_water, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 1}, {id: 5, data: 1}, {id: 5, data: 1}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.birch_trough_water, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 2}, {id: 5, data: 2}, {id: 5, data: 2}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.jungle_trough_water, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 3}, {id: 5, data: 3}, {id: 5, data: 3}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.acacia_trough_water, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 4}, {id: 5, data: 4}, {id: 5, data: 4}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.dark_oak_trough_water, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 5}, {id: 5, data: 5}, {id: 5, data: 5}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Block.setShape(BlockID.oak_trough_water,0,0,0,1,1/2,1);
Block.setShape(BlockID.spruce_trough_water,0,0,0,1,1/2,1);
Block.setShape(BlockID.birch_trough_water,0,0,0,1,1/2,1);
Block.setShape(BlockID.jungle_trough_water,0,0,0,1,1/2,1);
Block.setShape(BlockID.acacia_trough_water,0,0,0,1,1/2,1);
Block.setShape(BlockID.dark_oak_trough_water,0,0,0,1,1/2,1);