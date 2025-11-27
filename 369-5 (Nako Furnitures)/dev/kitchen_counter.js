//oak kitchen
IDRegistry.genBlockID("oak_kitchen_counter");
Block.createBlockWithRotation("oak_kitchen_counter", [
	{name: "Oak Kitchen Counter", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Kitchen Counter", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Kitchen Counter", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Kitchen Counter", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_kitchen_counter");
Item.createItem("oak_kitchen_counter", "Oak Kitchen Counter", {name: "oak_kitchen_counter", meta: 0}, {stack: 64});

var oak_kitchen_counterModel = ModelAPI.newArray();
oak_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_oak", 0]]);
oak_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_oak", 0]]);
Furniture.addReplacementItem({id:"oak_kitchen_counter"},{id:"oak_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.oak_kitchen_counter, oak_kitchen_counterModel));

let oak_kitchen_counterModel = new BlockRenderer.Model();
oak_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['log_oak', 0]]);
oak_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_oak', 0]]);
ItemModel.getForWithFallback(ItemID.oak_kitchen_counter, 0).setModel(oak_kitchen_counterModel);

//spruce kitchen
IDRegistry.genBlockID("spruce_kitchen_counter");
Block.createBlockWithRotation("spruce_kitchen_counter", [
	{name: "Spruce Kitchen Counter", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Kitchen Counter", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Kitchen Counter", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Kitchen Counter", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_kitchen_counter");
Item.createItem("spruce_kitchen_counter", "Spruce Kitchen Counter", {name: "spruce_kitchen_counter", meta: 0}, {stack: 64});

var spruce_kitchen_counterModel = ModelAPI.newArray();
spruce_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_spruce", 0]]);
spruce_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_spruce", 0]]);
Furniture.addReplacementItem({id:"spruce_kitchen_counter"},{id:"spruce_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.spruce_kitchen_counter, spruce_kitchen_counterModel));

let spruce_kitchen_counterModel = new BlockRenderer.Model();
spruce_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['log_spruce', 0]]);
spruce_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_spruce', 0]]);
ItemModel.getForWithFallback(ItemID.spruce_kitchen_counter, 0).setModel(spruce_kitchen_counterModel);

//birch kitchen
IDRegistry.genBlockID("birch_kitchen_counter");
Block.createBlockWithRotation("birch_kitchen_counter", [
	{name: "Birch Kitchen Counter", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Kitchen Counter", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Kitchen Counter", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Kitchen Counter", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_kitchen_counter");
Item.createItem("birch_kitchen_counter", "Birch Kitchen Counter", {name: "birch_kitchen_counter", meta: 0}, {stack: 64});

var birch_kitchen_counterModel = ModelAPI.newArray();
birch_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_birch", 0]]);
birch_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_birch", 0]]);
Furniture.addReplacementItem({id:"birch_kitchen_counter"},{id:"birch_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.birch_kitchen_counter, birch_kitchen_counterModel));

let birch_kitchen_counterModel = new BlockRenderer.Model();
birch_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['log_birch', 0]]);
birch_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_birch', 0]]);
ItemModel.getForWithFallback(ItemID.birch_kitchen_counter, 0).setModel(birch_kitchen_counterModel);

//jungle kitchen
IDRegistry.genBlockID("jungle_kitchen_counter");
Block.createBlockWithRotation("jungle_kitchen_counter", [
	{name: "Jungle Kitchen Counter", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Kitchen Counter", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Kitchen Counter", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Kitchen Counter", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_kitchen_counter");
Item.createItem("jungle_kitchen_counter", "Jungle Kitchen Counter", {name: "jungle_kitchen_counter", meta: 0}, {stack: 64});

var jungle_kitchen_counterModel = ModelAPI.newArray();
jungle_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_jungle", 0]]);
jungle_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_jungle", 0]]);
Furniture.addReplacementItem({id:"jungle_kitchen_counter"},{id:"jungle_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.jungle_kitchen_counter, jungle_kitchen_counterModel));

let jungle_kitchen_counterModel = new BlockRenderer.Model();
jungle_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['log_jungle', 0]]);
jungle_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_jungle', 0]]);
ItemModel.getForWithFallback(ItemID.jungle_kitchen_counter, 0).setModel(jungle_kitchen_counterModel);

//acacia kitchen
IDRegistry.genBlockID("acacia_kitchen_counter");
Block.createBlockWithRotation("acacia_kitchen_counter", [
	{name: "Acacia Kitchen Counter", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Kitchen Counter", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Kitchen Counter", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Kitchen Counter", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_kitchen_counter");
Item.createItem("acacia_kitchen_counter", "Acacia Kitchen Counter", {name: "acacia_kitchen_counter", meta: 0}, {stack: 64});

var acacia_kitchen_counterModel = ModelAPI.newArray();
acacia_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_acacia", 0]]);
acacia_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_acacia", 0]]);
Furniture.addReplacementItem({id:"acacia_kitchen_counter"},{id:"acacia_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.acacia_kitchen_counter, acacia_kitchen_counterModel));

let acacia_kitchen_counterModel = new BlockRenderer.Model();
acacia_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['log_acacia', 0]]);
acacia_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_acacia', 0]]);
ItemModel.getForWithFallback(ItemID.acacia_kitchen_counter, 0).setModel(acacia_kitchen_counterModel);

//dark oak kitchen
IDRegistry.genBlockID("dark_oak_kitchen_counter");
Block.createBlockWithRotation("dark_oak_kitchen_counter", [
	{name: "Dark Oak Kitchen Counter", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Counter", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Counter", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Counter", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_kitchen_counter");
Item.createItem("dark_oak_kitchen_counter", "Dark Oak Kitchen Counter", {name: "dark_oak_kitchen_counter", meta: 0}, {stack: 64});

var dark_oak_kitchen_counterModel = ModelAPI.newArray();
dark_oak_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_big_oak", 0]]);
dark_oak_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_big_oak", 0]]);
Furniture.addReplacementItem({id:"dark_oak_kitchen_counter"},{id:"dark_oak_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.dark_oak_kitchen_counter, dark_oak_kitchen_counterModel));

let dark_oak_kitchen_counterModel = new BlockRenderer.Model();
dark_oak_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['log_big_oak', 0]]);
dark_oak_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_big_oak', 0]]);
ItemModel.getForWithFallback(ItemID.dark_oak_kitchen_counter, 0).setModel(dark_oak_kitchen_counterModel);

//crimson kitchen
IDRegistry.genBlockID("crimson_kitchen_counter");
Block.createBlockWithRotation("crimson_kitchen_counter", [
	{name: "Crimson Kitchen Counter", texture: [["crimson_log_side", 0]], inCreative: false},
	{name: "Crimson Kitchen Counter", texture: [["crimson_log_side", 0]], inCreative: false},
	{name: "Crimson Kitchen Counter", texture: [["crimson_log_side", 0]], inCreative: false},
	{name: "Crimson Kitchen Counter", texture: [["crimson_log_side", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("crimson_kitchen_counter");
Item.createItem("crimson_kitchen_counter", "Crimson Kitchen Counter", {name: "crimson_log_side", meta: 0}, {stack: 64});

var crimson_kitchen_counterModel = ModelAPI.newArray();
crimson_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["crimson_log_side", 0]]);
crimson_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["crimson_planks", 0]]);
Furniture.addReplacementItem({id:"crimson_kitchen_counter"},{id:"crimson_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.crimson_kitchen_counter, crimson_kitchen_counterModel));

let crimson_kitchen_counterModel = new BlockRenderer.Model();
crimson_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['crimson_log_side', 0]]);
crimson_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['crimson_planks', 0]]);
ItemModel.getForWithFallback(ItemID.crimson_kitchen_counter, 0).setModel(crimson_kitchen_counterModel);

//warped kitchen
IDRegistry.genBlockID("warped_kitchen_counter");
Block.createBlockWithRotation("warped_kitchen_counter", [
	{name: "Warped Kitchen Counter", texture: [["warped_stem_side", 0]], inCreative: false},
	{name: "Warped Kitchen Counter", texture: [["warped_stem_side", 0]], inCreative: false},
	{name: "Warped Kitchen Counter", texture: [["warped_stem_side", 0]], inCreative: false},
	{name: "Warped Kitchen Counter", texture: [["warped_stem_side", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("warped_kitchen_counter");
Item.createItem("warped_kitchen_counter", "Warped Kitchen Counter", {name: "warped_stem_side", meta: 0}, {stack: 64});

var warped_kitchen_counterModel = ModelAPI.newArray();
warped_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["warped_stem_side", 0]]);
warped_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["warped_planks", 0]]);
Furniture.addReplacementItem({id:"warped_kitchen_counter"},{id:"warped_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.warped_kitchen_counter, warped_kitchen_counterModel));

let warped_kitchen_counterModel = new BlockRenderer.Model();
warped_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['warped_stem_side', 0]]);
warped_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['warped_planks', 0]]);
ItemModel.getForWithFallback(ItemID.warped_kitchen_counter, 0).setModel(warped_kitchen_counterModel);

//translation kitchens
Translation.addTranslation("Oak Kitchen Counter", {ru: "Дубовая Кухонная Стойка"});
Translation.addTranslation("Spruce Kitchen Counter", {ru: "Еловая Кухонная Стойка"});
Translation.addTranslation("Birch Kitchen Counter", {ru: "Берёзовая Кухонная Стойка"});
Translation.addTranslation("Jungle Kitchen Counter", {ru: "Джунглевая Кухонная Стойка"});
Translation.addTranslation("Acacia Kitchen Counter", {ru: "Акациевая Кухонная Стойка"});
Translation.addTranslation("Dark Oak Kitchen Counter", {ru: "Тёмно Дубовая Кухонная Стойка"});
Translation.addTranslation("Crimson Kitchen Counter", {ru: "Искажённая Кухонная Стойка"});
Translation.addTranslation("Warped Kitchen Counter", {ru: "Багровая Кухонная Стойка"});

//recipes kithens
Recipes.addShaped({id: ItemID.oak_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 17, 0, 'x', 5, 0]);
Recipes.addShaped({id: ItemID.spruce_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 17, 1, 'x', 5, 1]);
Recipes.addShaped({id: ItemID.birch_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 17, 2, 'x', 5, 2]);
Recipes.addShaped({id: ItemID.jungle_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 17, 3, 'x', 5, 3]);
Recipes.addShaped({id: ItemID.acacia_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 162, 0, 'x', 5, 4]);
Recipes.addShaped({id: ItemID.dark_oak_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 162, 1, 'x', 5, 5]);
Recipes.addShaped({id: ItemID.crimson_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', VanillaBlockID.crimson_stem, 0, 'x', VanillaBlockID.crimson_planks, 0]);
Recipes.addShaped({id: ItemID.warped_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', VanillaBlockID.warped_stem, 0, 'x', VanillaBlockID.warped_planks, 0]);

//stripped oak kitchen
IDRegistry.genBlockID("stripped_oak_kitchen_counter");
Block.createBlockWithRotation("stripped_oak_kitchen_counter", [
	{name: "Stripped Oak Kitchen Counter", texture: [["stripped_oak_log", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Counter", texture: [["stripped_oak_log", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Counter", texture: [["stripped_oak_log", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Counter", texture: [["stripped_oak_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_oak_kitchen_counter");
Item.createItem("stripped_oak_kitchen_counter", "Stripped Oak Kitchen Counter", {name: "stripped_oak_log", meta: 0}, {stack: 64});

var stripped_oak_kitchen_counterModel = ModelAPI.newArray();
stripped_oak_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_oak_log", 0]]);
stripped_oak_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_oak_log", 0]]);
Furniture.addReplacementItem({id:"stripped_oak_kitchen_counter"},{id:"stripped_oak_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.stripped_oak_kitchen_counter, stripped_oak_kitchen_counterModel));

let stripped_oak_kitchen_counterModel = new BlockRenderer.Model();
stripped_oak_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['stripped_oak_log', 0]]);
stripped_oak_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_oak_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_oak_kitchen_counter, 0).setModel(stripped_oak_kitchen_counterModel);

//stripped spruce kitchen
IDRegistry.genBlockID("stripped_spruce_kitchen_counter");
Block.createBlockWithRotation("stripped_spruce_kitchen_counter", [
	{name: "Stripped Spruce Kitchen Counter", texture: [["stripped_spruce_log", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Counter", texture: [["stripped_spruce_log", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Counter", texture: [["stripped_spruce_log", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Counter", texture: [["stripped_spruce_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_spruce_kitchen_counter");
Item.createItem("stripped_spruce_kitchen_counter", "Stripped Spruce Kitchen Counter", {name: "stripped_spruce_log", meta: 0}, {stack: 64});

var stripped_spruce_kitchen_counterModel = ModelAPI.newArray();
stripped_spruce_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_spruce_log", 0]]);
stripped_spruce_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_spruce_log", 0]]);
Furniture.addReplacementItem({id:"stripped_spruce_kitchen_counter"},{id:"stripped_spruce_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.stripped_spruce_kitchen_counter, stripped_spruce_kitchen_counterModel));

let stripped_spruce_kitchen_counterModel = new BlockRenderer.Model();
stripped_spruce_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['stripped_spruce_log', 0]]);
stripped_spruce_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_spruce_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_spruce_kitchen_counter, 0).setModel(stripped_spruce_kitchen_counterModel);

//stripped birch kitchen
IDRegistry.genBlockID("stripped_birch_kitchen_counter");
Block.createBlockWithRotation("stripped_birch_kitchen_counter", [
	{name: "Stripped Birch Kitchen Counter", texture: [["stripped_birch_log", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Counter", texture: [["stripped_birch_log", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Counter", texture: [["stripped_birch_log", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Counter", texture: [["stripped_birch_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_birch_kitchen_counter");
Item.createItem("stripped_birch_kitchen_counter", "Stripped Birch Kitchen Counter", {name: "stripped_birch_log", meta: 0}, {stack: 64});

var stripped_birch_kitchen_counterModel = ModelAPI.newArray();
stripped_birch_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_birch_log", 0]]);
stripped_birch_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_birch_log", 0]]);
Furniture.addReplacementItem({id:"stripped_birch_kitchen_counter"},{id:"stripped_birch_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.stripped_birch_kitchen_counter, stripped_birch_kitchen_counterModel));

let stripped_birch_kitchen_counterModel = new BlockRenderer.Model();
stripped_birch_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['stripped_birch_log', 0]]);
stripped_birch_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_birch_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_birch_kitchen_counter, 0).setModel(stripped_birch_kitchen_counterModel);

//stripped jungle kitchen
IDRegistry.genBlockID("stripped_jungle_kitchen_counter");
Block.createBlockWithRotation("stripped_jungle_kitchen_counter", [
	{name: "Stripped Jungle Kitchen Counter", texture: [["stripped_jungle_log", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Counter", texture: [["stripped_jungle_log", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Counter", texture: [["stripped_jungle_log", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Counter", texture: [["stripped_jungle_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_jungle_kitchen_counter");
Item.createItem("stripped_jungle_kitchen_counter", "Stripped Jungle Kitchen Counter", {name: "stripped_jungle_log", meta: 0}, {stack: 64});

var stripped_jungle_kitchen_counterModel = ModelAPI.newArray();
stripped_jungle_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_jungle_log", 0]]);
stripped_jungle_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_jungle_log", 0]]);
Furniture.addReplacementItem({id:"stripped_jungle_kitchen_counter"},{id:"stripped_jungle_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.stripped_jungle_kitchen_counter, stripped_jungle_kitchen_counterModel));

let stripped_jungle_kitchen_counterModel = new BlockRenderer.Model();
stripped_jungle_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['stripped_jungle_log', 0]]);
stripped_jungle_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_jungle_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_jungle_kitchen_counter, 0).setModel(stripped_jungle_kitchen_counterModel);

//stripped acacia kitchen
IDRegistry.genBlockID("stripped_acacia_kitchen_counter");
Block.createBlockWithRotation("stripped_acacia_kitchen_counter", [
	{name: "Stripped Acacia Kitchen Counter", texture: [["stripped_acacia_log", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Counter", texture: [["stripped_acacia_log", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Counter", texture: [["stripped_acacia_log", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Counter", texture: [["stripped_acacia_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_acacia_kitchen_counter");
Item.createItem("stripped_acacia_kitchen_counter", "Stripped Acacia Kitchen Counter", {name: "stripped_acacia_log", meta: 0}, {stack: 64});

var stripped_acacia_kitchen_counterModel = ModelAPI.newArray();
stripped_acacia_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_acacia_log", 0]]);
stripped_acacia_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_acacia_log", 0]]);
Furniture.addReplacementItem({id:"stripped_acacia_kitchen_counter"},{id:"stripped_acacia_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.stripped_acacia_kitchen_counter, stripped_acacia_kitchen_counterModel));

let stripped_acacia_kitchen_counterModel = new BlockRenderer.Model();
stripped_acacia_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['stripped_acacia_log', 0]]);
stripped_acacia_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_acacia_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_acacia_kitchen_counter, 0).setModel(stripped_acacia_kitchen_counterModel);

//stripped dark oak kitchen
IDRegistry.genBlockID("stripped_dark_oak_kitchen_counter");
Block.createBlockWithRotation("stripped_dark_oak_kitchen_counter", [
	{name: "Stripped Dark Oak Kitchen Counter", texture: [["stripped_dark_oak_log", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Counter", texture: [["stripped_dark_oak_log", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Counter", texture: [["stripped_dark_oak_log", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Counter", texture: [["stripped_dark_oak_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_dark_oak_kitchen_counter");
Item.createItem("stripped_dark_oak_kitchen_counter", "Stripped Dark Oak Kitchen Counter", {name: "stripped_dark_oak_log", meta: 0}, {stack: 64});

var stripped_dark_oak_kitchen_counterModel = ModelAPI.newArray();
stripped_dark_oak_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_dark_oak_log", 0]]);
stripped_dark_oak_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_dark_oak_log", 0]]);
Furniture.addReplacementItem({id:"stripped_dark_oak_kitchen_counter"},{id:"stripped_dark_oak_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.stripped_dark_oak_kitchen_counter, stripped_dark_oak_kitchen_counterModel));

let stripped_dark_oak_kitchen_counterModel = new BlockRenderer.Model();
stripped_dark_oak_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['stripped_dark_oak_log', 0]]);
stripped_dark_oak_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_dark_oak_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_dark_oak_kitchen_counter, 0).setModel(stripped_dark_oak_kitchen_counterModel);

//stripped crimson kitchen
IDRegistry.genBlockID("stripped_crimson_kitchen_counter");
Block.createBlockWithRotation("stripped_crimson_kitchen_counter", [
	{name: "Stripped Crimson Kitchen Counter", texture: [["stripped_crimson_stem_side", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Counter", texture: [["stripped_crimson_stem_side", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Counter", texture: [["stripped_crimson_stem_side", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Counter", texture: [["stripped_crimson_stem_side", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_crimson_kitchen_counter");
Item.createItem("stripped_crimson_kitchen_counter", "Stripped Crimson Kitchen Counter", {name: "stripped_crimson_stem_side", meta: 0}, {stack: 64});

var stripped_crimson_kitchen_counterModel = ModelAPI.newArray();
stripped_crimson_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_crimson_stem_side", 0]]);
stripped_crimson_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_crimson_stem_side", 0]]);
Furniture.addReplacementItem({id:"stripped_crimson_kitchen_counter"},{id:"stripped_crimson_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.stripped_crimson_kitchen_counter, stripped_crimson_kitchen_counterModel));

let stripped_crimson_kitchen_counterModel = new BlockRenderer.Model();
stripped_crimson_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['stripped_crimson_stem_side', 0]]);
stripped_crimson_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_crimson_stem_side', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_crimson_kitchen_counter, 0).setModel(stripped_crimson_kitchen_counterModel);

//stripped warped kitchen
IDRegistry.genBlockID("stripped_warped_kitchen_counter");
Block.createBlockWithRotation("stripped_warped_kitchen_counter", [
	{name: "Stripped Warped Kitchen Counter", texture: [["stripped_warped_stem_side", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Counter", texture: [["stripped_warped_stem_side", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Counter", texture: [["stripped_warped_stem_side", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Counter", texture: [["stripped_warped_stem_side", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_warped_kitchen_counter");
Item.createItem("stripped_warped_kitchen_counter", "Stripped Warped Kitchen Counter", {name: "stripped_warped_stem_side", meta: 0}, {stack: 64});

var stripped_warped_kitchen_counterModel = ModelAPI.newArray();
stripped_warped_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_warped_stem_side", 0]]);
stripped_warped_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_warped_stem_side", 0]]);
Furniture.addReplacementItem({id:"stripped_warped_kitchen_counter"},{id:"stripped_warped_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.stripped_warped_kitchen_counter, stripped_warped_kitchen_counterModel));

let stripped_warped_kitchen_counterModel = new BlockRenderer.Model();
stripped_warped_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['stripped_warped_stem_side', 0]]);
stripped_warped_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_warped_stem_side', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_warped_kitchen_counter, 0).setModel(stripped_warped_kitchen_counterModel);

//translation kitchens
Translation.addTranslation("Stripped Oak Kitchen Counter", {ru: "Ободранная Дубовая Кухонная Стойка"});
Translation.addTranslation("Stripped Spruce Kitchen Counter", {ru: "Ободранная Еловая Кухонная Стойка"});
Translation.addTranslation("Stripped Birch Kitchen Counter", {ru: "Ободранная Берёзовая Кухонная Стойка"});
Translation.addTranslation("Stripped Jungle Kitchen Counter", {ru: "Ободранная Джунглевая Кухонная Стойка"});
Translation.addTranslation("Stripped Acacia Kitchen Counter", {ru: "Ободранная Акациевая Кухонная Стойка"});
Translation.addTranslation("Stripped Dark Oak Kitchen Counter", {ru: "Ободранная Тёмно Дубовая Кухонная Стойка"});
Translation.addTranslation("Stripped Crimson Kitchen Counter", {ru: "Ободранная Искажённая Кухонная Стойка"});
Translation.addTranslation("Stripped Warped Kitchen Counter", {ru: "Ободранная Багровая Кухонная Стойка"});

//recipes kithens
Recipes.addShaped({id: ItemID.stripped_oak_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 17, 0, 'x', VanillaBlockID.stripped_oak_log, 0]);
Recipes.addShaped({id: ItemID.stripped_spruce_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 17, 1, 'x', VanillaBlockID.stripped_spruce_log, 0]);
Recipes.addShaped({id: ItemID.stripped_birch_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 17, 2, 'x', VanillaBlockID.stripped_birch_log, 0]);
Recipes.addShaped({id: ItemID.stripped_jungle_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 17, 3, 'x', VanillaBlockID.stripped_jungle_log, 0]);
Recipes.addShaped({id: ItemID.stripped_acacia_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 162, 0, 'x', VanillaBlockID.stripped_acacia_log, 0]);
Recipes.addShaped({id: ItemID.stripped_dark_oak_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', 162, 1, 'x', VanillaBlockID.stripped_dark_oak_log, 0]);
Recipes.addShaped({id: ItemID.stripped_crimson_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', VanillaBlockID.crimson_stem, 0, 'x', VanillaBlockID.stripped_crimson_stem, 0]);
Recipes.addShaped({id: ItemID.stripped_warped_kitchen_counter, count: 8, data: 0}, ["aaa", "xxx", "xxx"], ['a', VanillaBlockID.warped_stem, 0, 'x', VanillaBlockID.stripped_warped_stem, 0]);

//white kitchen
IDRegistry.genBlockID("white_kitchen_counter");
Block.createBlockWithRotation("white_kitchen_counter", [
	{name: "White Kitchen Counter", texture: [["hardened_clay_stained_white", 0]], inCreative: false},
	{name: "White Kitchen Counter", texture: [["hardened_clay_stained_white", 0]], inCreative: false},
	{name: "White Kitchen Counter", texture: [["hardened_clay_stained_white", 0]], inCreative: false},
	{name: "White Kitchen Counter", texture: [["hardened_clay_stained_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("white_kitchen_counter");
Item.createItem("white_kitchen_counter", "White Kitchen Counter", {name: "hardened_clay_stained_white", meta: 0}, {stack: 64});

var white_kitchen_counterModel = ModelAPI.newArray();
white_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_white", 0]]);
white_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"white_kitchen_counter"},{id:"white_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.white_kitchen_counter, white_kitchen_counterModel));

let white_kitchen_counterModel = new BlockRenderer.Model();
white_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_white', 0]]);
white_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.white_kitchen_counter, 0).setModel(white_kitchen_counterModel);

//orange kitchen
IDRegistry.genBlockID("orange_kitchen_counter");
Block.createBlockWithRotation("orange_kitchen_counter", [
	{name: "Orange Kitchen Counter", texture: [["hardened_clay_stained_orange", 0]], inCreative: false},
	{name: "Orange Kitchen Counter", texture: [["hardened_clay_stained_orange", 0]], inCreative: false},
	{name: "Orange Kitchen Counter", texture: [["hardened_clay_stained_orange", 0]], inCreative: false},
	{name: "Orange Kitchen Counter", texture: [["hardened_clay_stained_orange", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("orange_kitchen_counter");
Item.createItem("orange_kitchen_counter", "Orange Kitchen Counter", {name: "hardened_clay_stained_orange", meta: 0}, {stack: 64});

var orange_kitchen_counterModel = ModelAPI.newArray();
orange_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"orange_kitchen_counter"},{id:"orange_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.orange_kitchen_counter, orange_kitchen_counterModel));

let orange_kitchen_counterModel = new BlockRenderer.Model();
orange_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_orange', 0]]);
orange_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.orange_kitchen_counter, 0).setModel(orange_kitchen_counterModel);

//magenta kitchen
IDRegistry.genBlockID("magenta_kitchen_counter");
Block.createBlockWithRotation("magenta_kitchen_counter", [
	{name: "Magenta Kitchen Counter", texture: [["hardened_clay_stained_magenta", 0]], inCreative: false},
	{name: "Magenta Kitchen Counter", texture: [["hardened_clay_stained_magenta", 0]], inCreative: false},
	{name: "Magenta Kitchen Counter", texture: [["hardened_clay_stained_magenta", 0]], inCreative: false},
	{name: "Magenta Kitchen Counter", texture: [["hardened_clay_stained_magenta", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("magenta_kitchen_counter");
Item.createItem("magenta_kitchen_counter", "Magenta Kitchen Counter", {name: "hardened_clay_stained_magenta", meta: 0}, {stack: 64});

var magenta_kitchen_counterModel = ModelAPI.newArray();
magenta_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"magenta_kitchen_counter"},{id:"magenta_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.magenta_kitchen_counter, magenta_kitchen_counterModel));

let magenta_kitchen_counterModel = new BlockRenderer.Model();
magenta_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_magenta', 0]]);
magenta_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.magenta_kitchen_counter, 0).setModel(magenta_kitchen_counterModel);

//light blue kitchen
IDRegistry.genBlockID("light_blue_kitchen_counter");
Block.createBlockWithRotation("light_blue_kitchen_counter", [
	{name: "Light Blue Kitchen Counter", texture: [["hardened_clay_stained_light_blue", 0]], inCreative: false},
	{name: "Light Blue Kitchen Counter", texture: [["hardened_clay_stained_light_blue", 0]], inCreative: false},
	{name: "Light Blue Kitchen Counter", texture: [["hardened_clay_stained_light_blue", 0]], inCreative: false},
	{name: "Light Blue Kitchen Counter", texture: [["hardened_clay_stained_light_blue", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("light_blue_kitchen_counter");
Item.createItem("light_blue_kitchen_counter", "Light Blue Kitchen Counter", {name: "hardened_clay_stained_light_blue", meta: 0}, {stack: 64});

var light_blue_kitchen_counterModel = ModelAPI.newArray();
light_blue_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"light_blue_kitchen_counter"},{id:"light_blue_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.light_blue_kitchen_counter, light_blue_kitchen_counterModel));

let light_blue_kitchen_counterModel = new BlockRenderer.Model();
light_blue_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_light_blue', 0]]);
light_blue_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.light_blue_kitchen_counter, 0).setModel(light_blue_kitchen_counterModel);

//yellow kitchen
IDRegistry.genBlockID("yellow_kitchen_counter");
Block.createBlockWithRotation("yellow_kitchen_counter", [
	{name: "Yellow Kitchen Counter", texture: [["hardened_clay_stained_yellow", 0]], inCreative: false},
	{name: "Yellow Kitchen Counter", texture: [["hardened_clay_stained_yellow", 0]], inCreative: false},
	{name: "Yellow Kitchen Counter", texture: [["hardened_clay_stained_yellow", 0]], inCreative: false},
	{name: "Yellow Kitchen Counter", texture: [["hardened_clay_stained_yellow", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("yellow_kitchen_counter");
Item.createItem("yellow_kitchen_counter", "Yellow Kitchen Counter", {name: "hardened_clay_stained_yellow", meta: 0}, {stack: 64});

var yellow_kitchen_counterModel = ModelAPI.newArray();
yellow_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"yellow_kitchen_counter"},{id:"yellow_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.yellow_kitchen_counter, yellow_kitchen_counterModel));

let yellow_kitchen_counterModel = new BlockRenderer.Model();
yellow_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_yellow', 0]]);
yellow_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.yellow_kitchen_counter, 0).setModel(yellow_kitchen_counterModel);

//lime kitchen
IDRegistry.genBlockID("lime_kitchen_counter");
Block.createBlockWithRotation("lime_kitchen_counter", [
	{name: "Lime Kitchen Counter", texture: [["hardened_clay_stained_lime", 0]], inCreative: false},
	{name: "Lime Kitchen Counter", texture: [["hardened_clay_stained_lime", 0]], inCreative: false},
	{name: "Lime Kitchen Counter", texture: [["hardened_clay_stained_lime", 0]], inCreative: false},
	{name: "Lime Kitchen Counter", texture: [["hardened_clay_stained_lime", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("lime_kitchen_counter");
Item.createItem("lime_kitchen_counter", "Lime Kitchen Counter", {name: "hardened_clay_stained_lime", meta: 0}, {stack: 64});

var lime_kitchen_counterModel = ModelAPI.newArray();
lime_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"lime_kitchen_counter"},{id:"lime_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.lime_kitchen_counter, lime_kitchen_counterModel));

let lime_kitchen_counterModel = new BlockRenderer.Model();
lime_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_lime', 0]]);
lime_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.lime_kitchen_counter, 0).setModel(lime_kitchen_counterModel);

//pink kitchen
IDRegistry.genBlockID("pink_kitchen_counter");
Block.createBlockWithRotation("pink_kitchen_counter", [
	{name: "Pink Kitchen Counter", texture: [["hardened_clay_stained_pink", 0]], inCreative: false},
	{name: "Pink Kitchen Counter", texture: [["hardened_clay_stained_pink", 0]], inCreative: false},
	{name: "Pink Kitchen Counter", texture: [["hardened_clay_stained_pink", 0]], inCreative: false},
	{name: "Pink Kitchen Counter", texture: [["hardened_clay_stained_pink", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("pink_kitchen_counter");
Item.createItem("pink_kitchen_counter", "Pink Kitchen Counter", {name: "hardened_clay_stained_pink", meta: 0}, {stack: 64});

var pink_kitchen_counterModel = ModelAPI.newArray();
pink_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"pink_kitchen_counter"},{id:"pink_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.pink_kitchen_counter, pink_kitchen_counterModel));

let pink_kitchen_counterModel = new BlockRenderer.Model();
pink_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_pink', 0]]);
pink_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.pink_kitchen_counter, 0).setModel(pink_kitchen_counterModel);

//gray kitchen
IDRegistry.genBlockID("gray_kitchen_counter");
Block.createBlockWithRotation("gray_kitchen_counter", [
	{name: "Gray Kitchen Counter", texture: [["hardened_clay_stained_gray", 0]], inCreative: false},
	{name: "Gray Kitchen Counter", texture: [["hardened_clay_stained_gray", 0]], inCreative: false},
	{name: "Gray Kitchen Counter", texture: [["hardened_clay_stained_gray", 0]], inCreative: false},
	{name: "Gray Kitchen Counter", texture: [["hardened_clay_stained_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("gray_kitchen_counter");
Item.createItem("gray_kitchen_counter", "Gray Kitchen Counter", {name: "hardened_clay_stained_gray", meta: 0}, {stack: 64});

var gray_kitchen_counterModel = ModelAPI.newArray();
gray_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"gray_kitchen_counter"},{id:"gray_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.gray_kitchen_counter, gray_kitchen_counterModel));

let gray_kitchen_counterModel = new BlockRenderer.Model();
gray_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_gray', 0]]);
gray_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.gray_kitchen_counter, 0).setModel(gray_kitchen_counterModel);

//light gray kitchen
IDRegistry.genBlockID("light_gray_kitchen_counter");
Block.createBlockWithRotation("light_gray_kitchen_counter", [
	{name: "Light Gray Kitchen Counter", texture: [["hardened_clay_stained_silver", 0]], inCreative: false},
	{name: "Light Gray Kitchen Counter", texture: [["hardened_clay_stained_silver", 0]], inCreative: false},
	{name: "Light Gray Kitchen Counter", texture: [["hardened_clay_stained_silver", 0]], inCreative: false},
	{name: "Light Gray Kitchen Counter", texture: [["hardened_clay_stained_silver", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("light_gray_kitchen_counter");
Item.createItem("light_gray_kitchen_counter", "Light Gray Kitchen Counter", {name: "hardened_clay_stained_silver", meta: 0}, {stack: 64});

var light_gray_kitchen_counterModel = ModelAPI.newArray();
light_gray_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"light_gray_kitchen_counter"},{id:"light_gray_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.light_gray_kitchen_counter, light_gray_kitchen_counterModel));

let light_gray_kitchen_counterModel = new BlockRenderer.Model();
light_gray_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_silver', 0]]);
light_gray_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.light_gray_kitchen_counter, 0).setModel(light_gray_kitchen_counterModel);

//cyan kitchen
IDRegistry.genBlockID("cyan_kitchen_counter");
Block.createBlockWithRotation("cyan_kitchen_counter", [
	{name: "Cyan Kitchen Counter", texture: [["hardened_clay_stained_cyan", 0]], inCreative: false},
	{name: "Cyan Kitchen Counter", texture: [["hardened_clay_stained_cyan", 0]], inCreative: false},
	{name: "Cyan Kitchen Counter", texture: [["hardened_clay_stained_cyan", 0]], inCreative: false},
	{name: "Cyan Kitchen Counter", texture: [["hardened_clay_stained_cyan", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("cyan_kitchen_counter");
Item.createItem("cyan_kitchen_counter", "Cyan Kitchen Counter", {name: "hardened_clay_stained_cyan", meta: 0}, {stack: 64});

var cyan_kitchen_counterModel = ModelAPI.newArray();
cyan_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"cyan_kitchen_counter"},{id:"cyan_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.cyan_kitchen_counter, cyan_kitchen_counterModel));

let cyan_kitchen_counterModel = new BlockRenderer.Model();
cyan_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_cyan', 0]]);
cyan_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.cyan_kitchen_counter, 0).setModel(cyan_kitchen_counterModel);

//purple kitchen
IDRegistry.genBlockID("purple_kitchen_counter");
Block.createBlockWithRotation("purple_kitchen_counter", [
	{name: "Purple Kitchen Counter", texture: [["hardened_clay_stained_purple", 0]], inCreative: false},
	{name: "Purple Kitchen Counter", texture: [["hardened_clay_stained_purple", 0]], inCreative: false},
	{name: "Purple Kitchen Counter", texture: [["hardened_clay_stained_purple", 0]], inCreative: false},
	{name: "Purple Kitchen Counter", texture: [["hardened_clay_stained_purple", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("purple_kitchen_counter");
Item.createItem("purple_kitchen_counter", "Purple Kitchen Counter", {name: "hardened_clay_stained_purple", meta: 0}, {stack: 64});

var purple_kitchen_counterModel = ModelAPI.newArray();
purple_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"purple_kitchen_counter"},{id:"purple_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.purple_kitchen_counter, purple_kitchen_counterModel));

let purple_kitchen_counterModel = new BlockRenderer.Model();
purple_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_purple', 0]]);
purple_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.purple_kitchen_counter, 0).setModel(purple_kitchen_counterModel);

//blue kitchen
IDRegistry.genBlockID("blue_kitchen_counter");
Block.createBlockWithRotation("blue_kitchen_counter", [
	{name: "Blue Kitchen Counter", texture: [["hardened_clay_stained_blue", 0]], inCreative: false},
	{name: "Blue Kitchen Counter", texture: [["hardened_clay_stained_blue", 0]], inCreative: false},
	{name: "Blue Kitchen Counter", texture: [["hardened_clay_stained_blue", 0]], inCreative: false},
	{name: "Blue Kitchen Counter", texture: [["hardened_clay_stained_blue", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("blue_kitchen_counter");
Item.createItem("blue_kitchen_counter", "Blue Kitchen Counter", {name: "hardened_clay_stained_blue", meta: 0}, {stack: 64});

var blue_kitchen_counterModel = ModelAPI.newArray();
blue_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"blue_kitchen_counter"},{id:"blue_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.blue_kitchen_counter, blue_kitchen_counterModel));

let blue_kitchen_counterModel = new BlockRenderer.Model();
blue_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_blue', 0]]);
blue_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.blue_kitchen_counter, 0).setModel(blue_kitchen_counterModel);

//brown kitchen
IDRegistry.genBlockID("brown_kitchen_counter");
Block.createBlockWithRotation("brown_kitchen_counter", [
	{name: "Brown Kitchen Counter", texture: [["hardened_clay_stained_brown", 0]], inCreative: false},
	{name: "Brown Kitchen Counter", texture: [["hardened_clay_stained_brown", 0]], inCreative: false},
	{name: "Brown Kitchen Counter", texture: [["hardened_clay_stained_brown", 0]], inCreative: false},
	{name: "Brown Kitchen Counter", texture: [["hardened_clay_stained_brown", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("brown_kitchen_counter");
Item.createItem("brown_kitchen_counter", "Brown Kitchen Counter", {name: "hardened_clay_stained_brown", meta: 0}, {stack: 64});

var brown_kitchen_counterModel = ModelAPI.newArray();
brown_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"brown_kitchen_counter"},{id:"brown_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.brown_kitchen_counter, brown_kitchen_counterModel));

let brown_kitchen_counterModel = new BlockRenderer.Model();
brown_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_brown', 0]]);
brown_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.brown_kitchen_counter, 0).setModel(brown_kitchen_counterModel);

//green kitchen
IDRegistry.genBlockID("green_kitchen_counter");
Block.createBlockWithRotation("green_kitchen_counter", [
	{name: "Green Kitchen Counter", texture: [["hardened_clay_stained_green", 0]], inCreative: false},
	{name: "Green Kitchen Counter", texture: [["hardened_clay_stained_green", 0]], inCreative: false},
	{name: "Green Kitchen Counter", texture: [["hardened_clay_stained_green", 0]], inCreative: false},
	{name: "Green Kitchen Counter", texture: [["hardened_clay_stained_green", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("green_kitchen_counter");
Item.createItem("green_kitchen_counter", "Green Kitchen Counter", {name: "hardened_clay_stained_green", meta: 0}, {stack: 64});

var green_kitchen_counterModel = ModelAPI.newArray();
green_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_green", 0]]);
green_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"green_kitchen_counter"},{id:"green_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.green_kitchen_counter, green_kitchen_counterModel));

let green_kitchen_counterModel = new BlockRenderer.Model();
green_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_green', 0]]);
green_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.green_kitchen_counter, 0).setModel(green_kitchen_counterModel);

//red kitchen
IDRegistry.genBlockID("red_kitchen_counter");
Block.createBlockWithRotation("red_kitchen_counter", [
	{name: "Red Kitchen Counter", texture: [["hardened_clay_stained_red", 0]], inCreative: false},
	{name: "Red Kitchen Counter", texture: [["hardened_clay_stained_red", 0]], inCreative: false},
	{name: "Red Kitchen Counter", texture: [["hardened_clay_stained_red", 0]], inCreative: false},
	{name: "Red Kitchen Counter", texture: [["hardened_clay_stained_red", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("red_kitchen_counter");
Item.createItem("red_kitchen_counter", "Red Kitchen Counter", {name: "hardened_clay_stained_red", meta: 0}, {stack: 64});

var red_kitchen_counterModel = ModelAPI.newArray();
red_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_red", 0]]);
red_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"red_kitchen_counter"},{id:"red_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.red_kitchen_counter, red_kitchen_counterModel));

let red_kitchen_counterModel = new BlockRenderer.Model();
red_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_red', 0]]);
red_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.red_kitchen_counter, 0).setModel(red_kitchen_counterModel);

//black kitchen
IDRegistry.genBlockID("black_kitchen_counter");
Block.createBlockWithRotation("black_kitchen_counter", [
	{name: "Black Kitchen Counter", texture: [["hardened_clay_stained_black", 0]], inCreative: false},
	{name: "Black Kitchen Counter", texture: [["hardened_clay_stained_black", 0]], inCreative: false},
	{name: "Black Kitchen Counter", texture: [["hardened_clay_stained_black", 0]], inCreative: false},
	{name: "Black Kitchen Counter", texture: [["hardened_clay_stained_black", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("black_kitchen_counter");
Item.createItem("black_kitchen_counter", "Black Kitchen Counter", {name: "hardened_clay_stained_black", meta: 0}, {stack: 64});

var black_kitchen_counterModel = ModelAPI.newArray();
black_kitchen_counterModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_black", 0]]);
black_kitchen_counterModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"black_kitchen_counter"},{id:"black_kitchen_counter"}, Furniture.placeRotatableBlock(BlockID.black_kitchen_counter, black_kitchen_counterModel));

let black_kitchen_counterModel = new BlockRenderer.Model();
black_kitchen_counterModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_black', 0]]);
black_kitchen_counterModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.black_kitchen_counter, 0).setModel(black_kitchen_counterModel);

//translation kitchens
Translation.addTranslation("White Kitchen Counter", {ru: "Белая Кухонная Стойка"});
Translation.addTranslation("Orange Kitchen Counter", {ru: "Оранжевая Кухонная Стойка"});
Translation.addTranslation("Magenta Kitchen Counter", {ru: "Пурпурная Кухонная Стойка"});
Translation.addTranslation("Light Blue Kitchen Counter", {ru: "Голубая Кухонная Стойка"});
Translation.addTranslation("Yellow Kitchen Counter", {ru: "Жёлтая Кухонная Стойка"});
Translation.addTranslation("Lime Kitchen Counter", {ru: "Лаймовая Кухонная Стойка"});
Translation.addTranslation("Pink Kitchen Counter", {ru: "Розовая Кухонная Стойка"});
Translation.addTranslation("Gray Kitchen Counter", {ru: "Серая Кухонная Стойка"});
Translation.addTranslation("Light Gray Kitchen Counter", {ru: "Светло Серая Кухонная Стойка"});
Translation.addTranslation("Cyan Kitchen Counter", {ru: "Бирюзовая Кухонная Стойка"});
Translation.addTranslation("Purple Kitchen Counter", {ru: "Фиолетвая Кухонная Стойка"});
Translation.addTranslation("Blue Kitchen Counter", {ru: "Синяя Кухонная Стойка"});
Translation.addTranslation("Brown Kitchen Counter", {ru: "Коричневая Кухонная Стойка"});
Translation.addTranslation("Green Kitchen Counter", {ru: "Зеленая Кухонная Стойка"});
Translation.addTranslation("Red Kitchen Counter", {ru: "Красная Кухонная Стойка"});
Translation.addTranslation("Black Kitchen Counter", {ru: "Черная Кухонная Стойка"});

//recipes
Recipes.addShaped({id: ItemID.white_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.white_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.orange_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.orange_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.magenta_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.magenta_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.light_blue_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.light_blue_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.yellow_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.yellow_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.lime_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.lime_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.pink_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.pink_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.gray_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.gray_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.light_gray_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.light_gray_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.cyan_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.cyan_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.purple_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.purple_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.blue_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.blue_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.brown_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.brown_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.green_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.green_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.red_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.red_dye, 0, 'x', VanillaBlockID.concrete, 0]);
Recipes.addShaped({id: ItemID.black_kitchen_counter, count: 8, data: 0}, ["ava", "xxx", "xxx"], ['a', 172, 0, 'v', VanillaItemID.black_dye, 0, 'x', VanillaBlockID.concrete, 0]);