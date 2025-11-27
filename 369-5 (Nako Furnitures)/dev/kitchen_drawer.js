//oak kitchen
IDRegistry.genBlockID("oak_kitchen_drawer");
Block.createBlockWithRotation("oak_kitchen_drawer", [
	{name: "Oak Kitchen Drawer", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Kitchen Drawer", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Kitchen Drawer", texture: [["planks_oak", 0]], inCreative: false},
	{name: "Oak Kitchen Drawer", texture: [["planks_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("oak_kitchen_drawer");
Item.createItem("oak_kitchen_drawer", "Oak Kitchen Drawer", {name: "oak_kitchen_drawer", meta: 0}, {stack: 64});

var oak_kitchen_drawerModel = ModelAPI.newArray();
oak_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_oak", 0]]);
oak_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_oak", 0]]);
oak_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["log_oak", 0]]);
oak_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["log_oak", 0]]);
oak_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_oak_log", 0]]);
oak_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_oak_log", 0]]);
Furniture.addReplacementItem({id:"oak_kitchen_drawer"},{id:"oak_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.oak_kitchen_drawer, oak_kitchen_drawerModel));

let oak_kitchen_drawerModel = new BlockRenderer.Model();
oak_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['log_oak', 0]]);
oak_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_oak', 0]]);
oak_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['log_oak', 0]]);
oak_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['log_oak', 0]]);
oak_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_oak_log', 0]]);
oak_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_oak_log', 0]]);
ItemModel.getForWithFallback(ItemID.oak_kitchen_drawer, 0).setModel(oak_kitchen_drawerModel);

//spruce kitchen
IDRegistry.genBlockID("spruce_kitchen_drawer");
Block.createBlockWithRotation("spruce_kitchen_drawer", [
	{name: "Spruce Kitchen Drawer", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Kitchen Drawer", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Kitchen Drawer", texture: [["planks_spruce", 0]], inCreative: false},
	{name: "Spruce Kitchen Drawer", texture: [["planks_spruce", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("spruce_kitchen_drawer");
Item.createItem("spruce_kitchen_drawer", "Spruce Kitchen Drawer", {name: "spruce_kitchen_drawer", meta: 0}, {stack: 64});

var spruce_kitchen_drawerModel = ModelAPI.newArray();
spruce_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_spruce", 0]]);
spruce_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_spruce", 0]]);
spruce_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["log_spruce", 0]]);
spruce_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["log_spruce", 0]]);
spruce_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_spruce_log", 0]]);
spruce_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_spruce_log", 0]]);
Furniture.addReplacementItem({id:"spruce_kitchen_drawer"},{id:"spruce_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.spruce_kitchen_drawer, spruce_kitchen_drawerModel));

let spruce_kitchen_drawerModel = new BlockRenderer.Model();
spruce_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['log_spruce', 0]]);
spruce_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_spruce', 0]]);
spruce_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['log_spruce', 0]]);
spruce_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['log_spruce', 0]]);
spruce_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_spruce_log', 0]]);
spruce_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_spruce_log', 0]]);
ItemModel.getForWithFallback(ItemID.spruce_kitchen_drawer, 0).setModel(spruce_kitchen_drawerModel);

//birch kitchen
IDRegistry.genBlockID("birch_kitchen_drawer");
Block.createBlockWithRotation("birch_kitchen_drawer", [
	{name: "Birch Kitchen Drawer", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Kitchen Drawer", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Kitchen Drawer", texture: [["planks_birch", 0]], inCreative: false},
	{name: "Birch Kitchen Drawer", texture: [["planks_birch", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("birch_kitchen_drawer");
Item.createItem("birch_kitchen_drawer", "Birch Kitchen Drawer", {name: "birch_kitchen_drawer", meta: 0}, {stack: 64});

var birch_kitchen_drawerModel = ModelAPI.newArray();
birch_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_birch", 0]]);
birch_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_birch", 0]]);
birch_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["log_birch", 0]]);
birch_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["log_birch", 0]]);
birch_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_birch_log", 0]]);
birch_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_birch_log", 0]]);
Furniture.addReplacementItem({id:"birch_kitchen_drawer"},{id:"birch_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.birch_kitchen_drawer, birch_kitchen_drawerModel));

let birch_kitchen_drawerModel = new BlockRenderer.Model();
birch_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['log_birch', 0]]);
birch_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_birch', 0]]);
birch_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['log_birch', 0]]);
birch_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['log_birch', 0]]);
birch_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_birch_log', 0]]);
birch_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_birch_log', 0]]);
ItemModel.getForWithFallback(ItemID.birch_kitchen_drawer, 0).setModel(birch_kitchen_drawerModel);

//jungle kitchen
IDRegistry.genBlockID("jungle_kitchen_drawer");
Block.createBlockWithRotation("jungle_kitchen_drawer", [
	{name: "Jungle Kitchen Drawer", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Kitchen Drawer", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Kitchen Drawer", texture: [["planks_jungle", 0]], inCreative: false},
	{name: "Jungle Kitchen Drawer", texture: [["planks_jungle", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("jungle_kitchen_drawer");
Item.createItem("jungle_kitchen_drawer", "Jungle Kitchen Drawer", {name: "jungle_kitchen_drawer", meta: 0}, {stack: 64});

var jungle_kitchen_drawerModel = ModelAPI.newArray();
jungle_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_jungle", 0]]);
jungle_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_jungle", 0]]);
jungle_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["log_jungle", 0]]);
jungle_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["log_jungle", 0]]);
jungle_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_jungle_log", 0]]);
jungle_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_jungle_log", 0]]);
Furniture.addReplacementItem({id:"jungle_kitchen_drawer"},{id:"jungle_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.jungle_kitchen_drawer, jungle_kitchen_drawerModel));

let jungle_kitchen_drawerModel = new BlockRenderer.Model();
jungle_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['log_jungle', 0]]);
jungle_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_jungle', 0]]);
jungle_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['log_jungle', 0]]);
jungle_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['log_jungle', 0]]);
jungle_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_jungle_log', 0]]);
jungle_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_jungle_log', 0]]);
ItemModel.getForWithFallback(ItemID.jungle_kitchen_drawer, 0).setModel(jungle_kitchen_drawerModel);

//acacia kitchen
IDRegistry.genBlockID("acacia_kitchen_drawer");
Block.createBlockWithRotation("acacia_kitchen_drawer", [
	{name: "Acacia Kitchen Drawer", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Kitchen Drawer", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Kitchen Drawer", texture: [["planks_acacia", 0]], inCreative: false},
	{name: "Acacia Kitchen Drawer", texture: [["planks_acacia", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("acacia_kitchen_drawer");
Item.createItem("acacia_kitchen_drawer", "Acacia Kitchen Drawer", {name: "acacia_kitchen_drawer", meta: 0}, {stack: 64});

var acacia_kitchen_drawerModel = ModelAPI.newArray();
acacia_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_acacia", 0]]);
acacia_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_acacia", 0]]);
acacia_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["log_acacia", 0]]);
acacia_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["log_acacia", 0]]);
acacia_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_acacia_log", 0]]);
acacia_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_acacia_log", 0]]);
Furniture.addReplacementItem({id:"acacia_kitchen_drawer"},{id:"acacia_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.acacia_kitchen_drawer, acacia_kitchen_drawerModel));

let acacia_kitchen_drawerModel = new BlockRenderer.Model();
acacia_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['log_acacia', 0]]);
acacia_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_acacia', 0]]);
acacia_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['log_acacia', 0]]);
acacia_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['log_acacia', 0]]);
acacia_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_acacia_log', 0]]);
acacia_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_acacia_log', 0]]);
ItemModel.getForWithFallback(ItemID.acacia_kitchen_drawer, 0).setModel(acacia_kitchen_drawerModel);

//dark oak kitchen
IDRegistry.genBlockID("dark_oak_kitchen_drawer");
Block.createBlockWithRotation("dark_oak_kitchen_drawer", [
	{name: "Dark Oak Kitchen Drawer", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Drawer", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Drawer", texture: [["planks_big_oak", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Drawer", texture: [["planks_big_oak", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("dark_oak_kitchen_drawer");
Item.createItem("dark_oak_kitchen_drawer", "Dark Oak Kitchen Drawer", {name: "planks_big_oak", meta: 0}, {stack: 64});

var dark_oak_kitchen_drawerModel = ModelAPI.newArray();
dark_oak_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["log_big_oak", 0]]);
dark_oak_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["planks_big_oak", 0]]);
dark_oak_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["log_big_oak", 0]]);
dark_oak_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["log_big_oak", 0]]);
dark_oak_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_dark_oak_log", 0]]);
dark_oak_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_dark_oak_log", 0]]);
Furniture.addReplacementItem({id:"dark_oak_kitchen_drawer"},{id:"dark_oak_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.dark_oak_kitchen_drawer, dark_oak_kitchen_drawerModel));

let dark_oak_kitchen_drawerModel = new BlockRenderer.Model();
dark_oak_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['log_big_oak', 0]]);
dark_oak_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['planks_big_oak', 0]]);
dark_oak_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['log_big_oak', 0]]);
dark_oak_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['log_big_oak', 0]]);
dark_oak_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_dark_oak_log', 0]]);
dark_oak_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_dark_oak_log', 0]]);
ItemModel.getForWithFallback(ItemID.dark_oak_kitchen_drawer, 0).setModel(dark_oak_kitchen_drawerModel);

//crimson kitchen
IDRegistry.genBlockID("crimson_kitchen_drawer");
Block.createBlockWithRotation("crimson_kitchen_drawer", [
	{name: "Crimson Kitchen Drawer", texture: [["crimson_log_side", 0]], inCreative: false},
	{name: "Crimson Kitchen Drawer", texture: [["crimson_log_side", 0]], inCreative: false},
	{name: "Crimson Kitchen Drawer", texture: [["crimson_log_side", 0]], inCreative: false},
	{name: "Crimson Kitchen Drawer", texture: [["crimson_log_side", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("crimson_kitchen_drawer");
Item.createItem("crimson_kitchen_drawer", "Crimson Kitchen Drawer", {name: "crimson_log_side", meta: 0}, {stack: 64});

var crimson_kitchen_drawerModel = ModelAPI.newArray();
crimson_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["crimson_log_side", 0]]);
crimson_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["crimson_planks", 0]]);
crimson_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["crimson_log_side", 0]]);
crimson_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["crimson_log_side", 0]]);
crimson_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_crimson_stem_side", 0]]);
crimson_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_crimson_stem_side", 0]]);
Furniture.addReplacementItem({id:"crimson_kitchen_drawer"},{id:"crimson_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.crimson_kitchen_drawer, crimson_kitchen_drawerModel));

let crimson_kitchen_drawerModel = new BlockRenderer.Model();
crimson_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['crimson_log_side', 0]]);
crimson_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['crimson_planks', 0]]);
crimson_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['crimson_log_side', 0]]);
crimson_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['crimson_log_side', 0]]);
crimson_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_crimson_stem_side', 0]]);
crimson_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_crimson_stem_side', 0]]);
ItemModel.getForWithFallback(ItemID.crimson_kitchen_drawer, 0).setModel(crimson_kitchen_drawerModel);

//warped kitchen
IDRegistry.genBlockID("warped_kitchen_drawer");
Block.createBlockWithRotation("warped_kitchen_drawer", [
	{name: "Warped Kitchen Drawer", texture: [["warped_stem_side", 0]], inCreative: false},
	{name: "Warped Kitchen Drawer", texture: [["warped_stem_side", 0]], inCreative: false},
	{name: "Warped Kitchen Drawer", texture: [["warped_stem_side", 0]], inCreative: false},
	{name: "Warped Kitchen Drawer", texture: [["warped_stem_side", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("warped_kitchen_drawer");
Item.createItem("warped_kitchen_drawer", "Warped Kitchen Drawer", {name: "warped_stem_side", meta: 0}, {stack: 64});

var warped_kitchen_drawerModel = ModelAPI.newArray();
warped_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["warped_stem_side", 0]]);
warped_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["warped_planks", 0]]);
warped_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["warped_stem_side", 0]]);
warped_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["warped_stem_side", 0]]);
warped_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_warped_stem_side", 0]]);
warped_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_warped_stem_side", 0]]);
Furniture.addReplacementItem({id:"warped_kitchen_drawer"},{id:"warped_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.warped_kitchen_drawer, warped_kitchen_drawerModel));

let warped_kitchen_drawerModel = new BlockRenderer.Model();
warped_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['warped_stem_side', 0]]);
warped_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['warped_planks', 0]]);
warped_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['warped_stem_side', 0]]);
warped_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['warped_stem_side', 0]]);
warped_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_warped_stem_side', 0]]);
warped_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_warped_stem_side', 0]]);
ItemModel.getForWithFallback(ItemID.warped_kitchen_drawer, 0).setModel(warped_kitchen_drawerModel);

//translation
Translation.addTranslation("Oak Kitchen Drawer", {ru: "Дубовая Кухонная Ящик"});
Translation.addTranslation("Spruce Kitchen Drawer", {ru: "Еловая Кухонная Ящик"});
Translation.addTranslation("Birch Kitchen Drawer", {ru: "Берёзовая Кухонная Ящик"});
Translation.addTranslation("Jungle Kitchen Drawer", {ru: "Джунглевая Кухонная Ящик"});
Translation.addTranslation("Acacia Kitchen Drawer", {ru: "Акациевая Кухонная Ящик"});
Translation.addTranslation("Dark Oak Kitchen Drawer", {ru: "Тёмно Дубовая Кухонная Ящик"});
Translation.addTranslation("Crimson Kitchen Drawer", {ru: "Искажённая Кухонная Ящик"});
Translation.addTranslation("Warped Kitchen Drawer", {ru: "Багровая Кухонная Ящик"});

Recipes.addShaped({id: ItemID.oak_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 17, 0, 'x', 5, 0, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.spruce_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 17, 1, 'x', 5, 1, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.birch_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 17, 2, 'x', 5, 2, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.jungle_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 17, 3, 'x', 5, 3, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.acacia_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 162, 0, 'x', 5, 4, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.dark_oak_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 162, 1, 'x', 5, 5, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.crimson_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', VanillaBlockID.crimson_stem, 0, 'x', VanillaBlockID.crimson_planks, 0, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.warped_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', VanillaBlockID.warped_stem, 0, 'x', VanillaBlockID.warped_planks, 0, 'v', 54, 0]);

//stripped oak kitchen
IDRegistry.genBlockID("stripped_oak_kitchen_drawer");
Block.createBlockWithRotation("stripped_oak_kitchen_drawer", [
	{name: "Stripped Oak Kitchen Drawer", texture: [["stripped_oak_log", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Drawer", texture: [["stripped_oak_log", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Drawer", texture: [["stripped_oak_log", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Drawer", texture: [["stripped_oak_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_oak_kitchen_drawer");
Item.createItem("stripped_oak_kitchen_drawer", "Stripped Oak Kitchen Drawer", {name: "stripped_oak_kitchen_drawer", meta: 0}, {stack: 64});

var stripped_oak_kitchen_drawerModel = ModelAPI.newArray();
stripped_oak_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_oak_log", 0]]);
stripped_oak_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_oak_log", 0]]);
stripped_oak_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["stripped_oak_log", 0]]);
stripped_oak_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["stripped_oak_log", 0]]);
stripped_oak_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_oak_log", 0]]);
stripped_oak_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_oak_log", 0]]);
Furniture.addReplacementItem({id:"stripped_oak_kitchen_drawer"},{id:"stripped_oak_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.stripped_oak_kitchen_drawer, stripped_oak_kitchen_drawerModel));

let stripped_oak_kitchen_drawerModel = new BlockRenderer.Model();
stripped_oak_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['stripped_oak_log', 0]]);
stripped_oak_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_oak_log', 0]]);
stripped_oak_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['stripped_oak_log', 0]]);
stripped_oak_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['stripped_oak_log', 0]]);
stripped_oak_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_oak_log', 0]]);
stripped_oak_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_oak_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_oak_kitchen_drawer, 0).setModel(stripped_oak_kitchen_drawerModel);

//stripped spruce kitchen
IDRegistry.genBlockID("stripped_spruce_kitchen_drawer");
Block.createBlockWithRotation("stripped_spruce_kitchen_drawer", [
	{name: "Stripped Spruce Kitchen Drawer", texture: [["stripped_spruce_log", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Drawer", texture: [["stripped_spruce_log", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Drawer", texture: [["stripped_spruce_log", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Drawer", texture: [["stripped_spruce_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_spruce_kitchen_drawer");
Item.createItem("stripped_spruce_kitchen_drawer", "Stripped Spruce Kitchen Drawer", {name: "stripped_spruce_log", meta: 0}, {stack: 64});

var stripped_spruce_kitchen_drawerModel = ModelAPI.newArray();
stripped_spruce_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_spruce_log", 0]]);
stripped_spruce_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_spruce_log", 0]]);
stripped_spruce_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["stripped_spruce_log", 0]]);
stripped_spruce_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["stripped_spruce_log", 0]]);
stripped_spruce_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_spruce_log", 0]]);
stripped_spruce_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_spruce_log", 0]]);
Furniture.addReplacementItem({id:"stripped_spruce_kitchen_drawer"},{id:"stripped_spruce_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.stripped_spruce_kitchen_drawer, stripped_spruce_kitchen_drawerModel));

let stripped_spruce_kitchen_drawerModel = new BlockRenderer.Model();
stripped_spruce_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['stripped_spruce_log', 0]]);
stripped_spruce_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_spruce_log', 0]]);
stripped_spruce_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['stripped_spruce_log', 0]]);
stripped_spruce_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['stripped_spruce_log', 0]]);
stripped_spruce_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_spruce_log', 0]]);
stripped_spruce_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_spruce_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_spruce_kitchen_drawer, 0).setModel(stripped_spruce_kitchen_drawerModel);

//stripped birch kitchen
IDRegistry.genBlockID("stripped_birch_kitchen_drawer");
Block.createBlockWithRotation("stripped_birch_kitchen_drawer", [
	{name: "Stripped Birch Kitchen Drawer", texture: [["stripped_birch_log", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Drawer", texture: [["stripped_birch_log", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Drawer", texture: [["stripped_birch_log", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Drawer", texture: [["stripped_birch_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_birch_kitchen_drawer");
Item.createItem("stripped_birch_kitchen_drawer", "Stripped Birch Kitchen Drawer", {name: "stripped_birch_log", meta: 0}, {stack: 64});

var stripped_birch_kitchen_drawerModel = ModelAPI.newArray();
stripped_birch_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_birch_log", 0]]);
stripped_birch_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_birch_log", 0]]);
stripped_birch_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["stripped_birch_log", 0]]);
stripped_birch_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["stripped_birch_log", 0]]);
stripped_birch_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_birch_log", 0]]);
stripped_birch_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_birch_log", 0]]);
Furniture.addReplacementItem({id:"stripped_birch_kitchen_drawer"},{id:"stripped_birch_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.stripped_birch_kitchen_drawer, stripped_birch_kitchen_drawerModel));

let stripped_birch_kitchen_drawerModel = new BlockRenderer.Model();
stripped_birch_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['stripped_birch_log', 0]]);
stripped_birch_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_birch_log', 0]]);
stripped_birch_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['stripped_birch_log', 0]]);
stripped_birch_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['stripped_birch_log', 0]]);
stripped_birch_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_birch_log', 0]]);
stripped_birch_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_birch_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_birch_kitchen_drawer, 0).setModel(stripped_birch_kitchen_drawerModel);

//stripped jungle kitchen
IDRegistry.genBlockID("stripped_jungle_kitchen_drawer");
Block.createBlockWithRotation("stripped_jungle_kitchen_drawer", [
	{name: "Stripped Jungle Kitchen Drawer", texture: [["stripped_jungle_log", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Drawer", texture: [["stripped_jungle_log", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Drawer", texture: [["stripped_jungle_log", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Drawer", texture: [["stripped_jungle_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_jungle_kitchen_drawer");
Item.createItem("stripped_jungle_kitchen_drawer", "Stripped Jungle Kitchen Drawer", {name: "stripped_jungle_log", meta: 0}, {stack: 64});

var stripped_jungle_kitchen_drawerModel = ModelAPI.newArray();
stripped_jungle_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_jungle_log", 0]]);
stripped_jungle_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_jungle_log", 0]]);
stripped_jungle_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["stripped_jungle_log", 0]]);
stripped_jungle_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["stripped_jungle_log", 0]]);
stripped_jungle_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_jungle_log", 0]]);
stripped_jungle_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_jungle_log", 0]]);
Furniture.addReplacementItem({id:"stripped_jungle_kitchen_drawer"},{id:"stripped_jungle_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.stripped_jungle_kitchen_drawer, stripped_jungle_kitchen_drawerModel));

let stripped_jungle_kitchen_drawerModel = new BlockRenderer.Model();
stripped_jungle_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['stripped_jungle_log', 0]]);
stripped_jungle_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_jungle_log', 0]]);
stripped_jungle_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['stripped_jungle_log', 0]]);
stripped_jungle_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['stripped_jungle_log', 0]]);
stripped_jungle_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_jungle_log', 0]]);
stripped_jungle_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_jungle_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_jungle_kitchen_drawer, 0).setModel(stripped_jungle_kitchen_drawerModel);

//stripped acacia kitchen
IDRegistry.genBlockID("stripped_acacia_kitchen_drawer");
Block.createBlockWithRotation("stripped_acacia_kitchen_drawer", [
	{name: "Stripped Acacia Kitchen Drawer", texture: [["stripped_acacia_log", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Drawer", texture: [["stripped_acacia_log", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Drawer", texture: [["stripped_acacia_log", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Drawer", texture: [["stripped_acacia_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_acacia_kitchen_drawer");
Item.createItem("stripped_acacia_kitchen_drawer", "Stripped Acacia Kitchen Drawer", {name: "stripped_acacia_log", meta: 0}, {stack: 64});

var stripped_acacia_kitchen_drawerModel = ModelAPI.newArray();
stripped_acacia_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_acacia_log", 0]]);
stripped_acacia_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_acacia_log", 0]]);
stripped_acacia_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["stripped_acacia_log", 0]]);
stripped_acacia_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["stripped_acacia_log", 0]]);
stripped_acacia_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_acacia_log", 0]]);
stripped_acacia_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_acacia_log", 0]]);
Furniture.addReplacementItem({id:"stripped_acacia_kitchen_drawer"},{id:"stripped_acacia_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.stripped_acacia_kitchen_drawer, stripped_acacia_kitchen_drawerModel));

let stripped_acacia_kitchen_drawerModel = new BlockRenderer.Model();
stripped_acacia_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['stripped_acacia_log', 0]]);
stripped_acacia_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_acacia_log', 0]]);
stripped_acacia_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['stripped_acacia_log', 0]]);
stripped_acacia_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['stripped_acacia_log', 0]]);
stripped_acacia_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_acacia_log', 0]]);
stripped_acacia_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_acacia_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_acacia_kitchen_drawer, 0).setModel(stripped_acacia_kitchen_drawerModel);

//dark oak kitchen
IDRegistry.genBlockID("stripped_dark_oak_kitchen_drawer");
Block.createBlockWithRotation("stripped_dark_oak_kitchen_drawer", [
	{name: "Stripped Dark Oak Kitchen Drawer", texture: [["stripped_dark_oak_log", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Drawer", texture: [["stripped_dark_oak_log", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Drawer", texture: [["stripped_dark_oak_log", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Drawer", texture: [["stripped_dark_oak_log", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_dark_oak_kitchen_drawer");
Item.createItem("stripped_dark_oak_kitchen_drawer", "Stripped Dark Oak Kitchen Drawer", {name: "stripped_dark_oak_log", meta: 0}, {stack: 64});

var stripped_dark_oak_kitchen_drawerModel = ModelAPI.newArray();
stripped_dark_oak_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_dark_oak_log", 0]]);
stripped_dark_oak_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_dark_oak_log", 0]]);
stripped_dark_oak_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["stripped_dark_oak_log", 0]]);
stripped_dark_oak_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["stripped_dark_oak_log", 0]]);
stripped_dark_oak_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_dark_oak_log", 0]]);
stripped_dark_oak_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_dark_oak_log", 0]]);
Furniture.addReplacementItem({id:"stripped_dark_oak_kitchen_drawer"},{id:"stripped_dark_oak_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.stripped_dark_oak_kitchen_drawer, stripped_dark_oak_kitchen_drawerModel));

let stripped_dark_oak_kitchen_drawerModel = new BlockRenderer.Model();
stripped_dark_oak_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['stripped_dark_oak_log', 0]]);
stripped_dark_oak_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_dark_oak_log', 0]]);
stripped_dark_oak_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['stripped_dark_oak_log', 0]]);
stripped_dark_oak_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['stripped_dark_oak_log', 0]]);
stripped_dark_oak_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_dark_oak_log', 0]]);
stripped_dark_oak_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_dark_oak_log', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_dark_oak_kitchen_drawer, 0).setModel(stripped_dark_oak_kitchen_drawerModel);

//stripped crimson kitchen
IDRegistry.genBlockID("stripped_crimson_kitchen_drawer");
Block.createBlockWithRotation("stripped_crimson_kitchen_drawer", [
	{name: "Stripped Crimson Kitchen Drawer", texture: [["stripped_crimson_stem_side", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Drawer", texture: [["stripped_crimson_stem_side", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Drawer", texture: [["stripped_crimson_stem_side", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Drawer", texture: [["stripped_crimson_stem_side", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_crimson_kitchen_drawer");
Item.createItem("stripped_crimson_kitchen_drawer", "Stripped Crimson Kitchen Drawer", {name: "stripped_crimson_stem_side", meta: 0}, {stack: 64});

var stripped_crimson_kitchen_drawerModel = ModelAPI.newArray();
stripped_crimson_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_crimson_stem_side", 0]]);
stripped_crimson_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_crimson_stem_side", 0]]);
stripped_crimson_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["stripped_crimson_stem_side", 0]]);
stripped_crimson_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["stripped_crimson_stem_side", 0]]);
stripped_crimson_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_crimson_stem_side", 0]]);
stripped_crimson_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_crimson_stem_side", 0]]);
Furniture.addReplacementItem({id:"stripped_crimson_kitchen_drawer"},{id:"stripped_crimson_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.stripped_crimson_kitchen_drawer, stripped_crimson_kitchen_drawerModel));

let stripped_crimson_kitchen_drawerModel = new BlockRenderer.Model();
stripped_crimson_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['stripped_crimson_stem_side', 0]]);
stripped_crimson_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_crimson_stem_side', 0]]);
stripped_crimson_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['stripped_crimson_stem_side', 0]]);
stripped_crimson_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['stripped_crimson_stem_side', 0]]);
stripped_crimson_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_crimson_stem_side', 0]]);
stripped_crimson_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_crimson_stem_side', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_crimson_kitchen_drawer, 0).setModel(stripped_crimson_kitchen_drawerModel);

//stripped warped kitchen
IDRegistry.genBlockID("stripped_warped_kitchen_drawer");
Block.createBlockWithRotation("stripped_warped_kitchen_drawer", [
	{name: "Stripped Warped Kitchen Drawer", texture: [["stripped_warped_stem_side", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Drawer", texture: [["stripped_warped_stem_side", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Drawer", texture: [["stripped_warped_stem_side", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Drawer", texture: [["stripped_warped_stem_side", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("stripped_warped_kitchen_drawer");
Item.createItem("stripped_warped_kitchen_drawer", "Stripped Warped Kitchen Drawer", {name: "stripped_warped_stem_side", meta: 0}, {stack: 64});

var stripped_warped_kitchen_drawerModel = ModelAPI.newArray();
stripped_warped_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["stripped_warped_stem_side", 0]]);
stripped_warped_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["stripped_warped_stem_side", 0]]);
stripped_warped_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["stripped_warped_stem_side", 0]]);
stripped_warped_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["stripped_warped_stem_side", 0]]);
stripped_warped_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["stripped_warped_stem_side", 0]]);
stripped_warped_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["stripped_warped_stem_side", 0]]);
Furniture.addReplacementItem({id:"stripped_warped_kitchen_drawer"},{id:"stripped_warped_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.stripped_warped_kitchen_drawer, stripped_warped_kitchen_drawerModel));

let stripped_warped_kitchen_drawerModel = new BlockRenderer.Model();
stripped_warped_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['stripped_warped_stem_side', 0]]);
stripped_warped_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['stripped_warped_stem_side', 0]]);
stripped_warped_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['stripped_warped_stem_side', 0]]);
stripped_warped_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['stripped_warped_stem_side', 0]]);
stripped_warped_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['stripped_warped_stem_side', 0]]);
stripped_warped_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['stripped_warped_stem_side', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_warped_kitchen_drawer, 0).setModel(stripped_warped_kitchen_drawerModel);

//translation
Translation.addTranslation("Stripped Oak Kitchen Drawer", {ru: "Ободранная Дубовая Кухонная Ящик"});
Translation.addTranslation("Stripped Spruce Kitchen Drawer", {ru: "Ободранная Еловая Кухонная Ящик"});
Translation.addTranslation("Stripped Birch Kitchen Drawer", {ru: "Ободранная Берёзовая Кухонная Ящик"});
Translation.addTranslation("Stripped Jungle Kitchen Drawer", {ru: "Ободранная Джунглевая Кухонная Ящик"});
Translation.addTranslation("Stripped Acacia Kitchen Drawer", {ru: "Ободранная Акациевая Кухонная Ящик"});
Translation.addTranslation("Stripped Dark Oak Kitchen Drawer", {ru: "Ободранная Тёмно Дубовая Кухонная Ящик"});
Translation.addTranslation("Stripped Crimson Kitchen Drawer", {ru: "Ободранная Искажённая Кухонная Ящик"});
Translation.addTranslation("Stripped Warped Kitchen Drawer", {ru: "Ободранная Багровая Кухонная Ящик"});

//recipes
Recipes.addShaped({id: ItemID.stripped_oak_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 17, 0, 'x', VanillaBlockID.stripped_oak_log, 0, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.stripped_spruce_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 17, 1, 'x', VanillaBlockID.stripped_spruce_log, 0, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.stripped_birch_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 17, 2, 'x', VanillaBlockID.stripped_birch_log, 0, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.stripped_jungle_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 17, 3, 'x', VanillaBlockID.stripped_jungle_log, 0, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.stripped_acacia_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 162, 0, 'x', VanillaBlockID.stripped_acacia_log, 0, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.stripped_dark_oak_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', 162, 1, 'x', VanillaBlockID.stripped_dark_oak_log, 0, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.stripped_crimson_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', VanillaBlockID.crimson_stem, 0, 'x', VanillaBlockID.stripped_crimson_stem, 0, 'v', 54, 0]);
Recipes.addShaped({id: ItemID.stripped_warped_kitchen_drawer, count: 4, data: 0}, ["aaa", "xvx", "xxx"], ['a', VanillaBlockID.warped_stem, 0, 'x', VanillaBlockID.stripped_warped_stem, 0, 'v', 54, 0]);

//white kitchen
IDRegistry.genBlockID("white_kitchen_drawer");
Block.createBlockWithRotation("white_kitchen_drawer", [
	{name: "White Kitchen Drawer", texture: [["hardened_clay_stained_white", 0]], inCreative: false},
	{name: "White Kitchen Drawer", texture: [["hardened_clay_stained_white", 0]], inCreative: false},
	{name: "White Kitchen Drawer", texture: [["hardened_clay_stained_white", 0]], inCreative: false},
	{name: "White Kitchen Drawer", texture: [["hardened_clay_stained_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("white_kitchen_drawer");
Item.createItem("white_kitchen_drawer", "White Kitchen Drawer", {name: "hardened_clay_stained_white", meta: 0}, {stack: 64});

var white_kitchen_drawerModel = ModelAPI.newArray();
white_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_white", 0]]);
white_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
white_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_white", 0]]);
white_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_white", 0]]);
white_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
white_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"white_kitchen_drawer"},{id:"white_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.white_kitchen_drawer, white_kitchen_drawerModel));

let white_kitchen_drawerModel = new BlockRenderer.Model();
white_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_white', 0]]);
white_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
white_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_white', 0]]);
white_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_white', 0]]);
white_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
white_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white ', 0]]);
ItemModel.getForWithFallback(ItemID.white_kitchen_drawer, 0).setModel(white_kitchen_drawerModel);

//orange kitchen
IDRegistry.genBlockID("orange_kitchen_drawer");
Block.createBlockWithRotation("orange_kitchen_drawer", [
	{name: "Orange Kitchen Drawer", texture: [["hardened_clay_stained_orange", 0]], inCreative: false},
	{name: "Orange Kitchen Drawer", texture: [["hardened_clay_stained_orange", 0]], inCreative: false},
	{name: "Orange Kitchen Drawer", texture: [["hardened_clay_stained_orange", 0]], inCreative: false},
	{name: "Orange Kitchen Drawer", texture: [["hardened_clay_stained_orange", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("orange_kitchen_drawer");
Item.createItem("orange_kitchen_drawer", "Orange Kitchen Drawer", {name: "hardened_clay_stained_orange", meta: 0}, {stack: 64});

var orange_kitchen_drawerModel = ModelAPI.newArray();
orange_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
orange_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
orange_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"orange_kitchen_drawer"},{id:"orange_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.orange_kitchen_drawer, orange_kitchen_drawerModel));

let orange_kitchen_drawerModel = new BlockRenderer.Model();
orange_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_orange', 0]]);
orange_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
orange_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_orange', 0]]);
orange_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_orange', 0]]);
orange_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
orange_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white ', 0]]);
ItemModel.getForWithFallback(ItemID.orange_kitchen_drawer, 0).setModel(orange_kitchen_drawerModel);

//magenta kitchen
IDRegistry.genBlockID("magenta_kitchen_drawer");
Block.createBlockWithRotation("magenta_kitchen_drawer", [
	{name: "Magenta Kitchen Drawer", texture: [["hardened_clay_stained_magenta", 0]], inCreative: false},
	{name: "Magenta Kitchen Drawer", texture: [["hardened_clay_stained_magenta", 0]], inCreative: false},
	{name: "Magenta Kitchen Drawer", texture: [["hardened_clay_stained_magenta", 0]], inCreative: false},
	{name: "Magenta Kitchen Drawer", texture: [["hardened_clay_stained_magenta", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("magenta_kitchen_drawer");
Item.createItem("magenta_kitchen_drawer", "Magenta Kitchen Drawer", {name: "hardened_clay_stained_magenta", meta: 0}, {stack: 64});

var magenta_kitchen_drawerModel = ModelAPI.newArray();
magenta_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
magenta_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
magenta_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"magenta_kitchen_drawer"},{id:"magenta_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.magenta_kitchen_drawer, magenta_kitchen_drawerModel));

let magenta_kitchen_drawerModel = new BlockRenderer.Model();
magenta_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_magenta', 0]]);
magenta_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
magenta_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_magenta', 0]]);
magenta_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_magenta', 0]]);
magenta_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
magenta_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.magenta_kitchen_drawer, 0).setModel(magenta_kitchen_drawerModel);

//light blue kitchen
IDRegistry.genBlockID("light_blue_kitchen_drawer");
Block.createBlockWithRotation("light_blue_kitchen_drawer", [
	{name: "Light Blue Kitchen Drawer", texture: [["hardened_clay_stained_light_blue", 0]], inCreative: false},
	{name: "Light Blue Kitchen Drawer", texture: [["hardened_clay_stained_light_blue", 0]], inCreative: false},
	{name: "Light Blue Kitchen Drawer", texture: [["hardened_clay_stained_light_blue", 0]], inCreative: false},
	{name: "Light Blue Kitchen Drawer", texture: [["hardened_clay_stained_light_blue", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("light_blue_kitchen_drawer");
Item.createItem("light_blue_kitchen_drawer", "Light Blue Kitchen Drawer", {name: "hardened_clay_stained_light_blue", meta: 0}, {stack: 64});

var light_blue_kitchen_drawerModel = ModelAPI.newArray();
light_blue_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
light_blue_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"light_blue_kitchen_drawer"},{id:"light_blue_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.light_blue_kitchen_drawer, light_blue_kitchen_drawerModel));

let light_blue_kitchen_drawerModel = new BlockRenderer.Model();
light_blue_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_light_blue', 0]]);
light_blue_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
light_blue_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_light_blue', 0]]);
light_blue_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_light_blue', 0]]);
light_blue_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
light_blue_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.light_blue_kitchen_drawer, 0).setModel(light_blue_kitchen_drawerModel);

//yellow kitchen
IDRegistry.genBlockID("yellow_kitchen_drawer");
Block.createBlockWithRotation("yellow_kitchen_drawer", [
	{name: "Yellow Kitchen Drawer", texture: [["hardened_clay_stained_yellow", 0]], inCreative: false},
	{name: "Yellow Kitchen Drawer", texture: [["hardened_clay_stained_yellow", 0]], inCreative: false},
	{name: "Yellow Kitchen Drawer", texture: [["hardened_clay_stained_yellow", 0]], inCreative: false},
	{name: "Yellow Kitchen Drawer", texture: [["hardened_clay_stained_yellow", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("yellow_kitchen_drawer");
Item.createItem("yellow_kitchen_drawer", "Yellow Kitchen Drawer", {name: "hardened_clay_stained_yellow", meta: 0}, {stack: 64});

var yellow_kitchen_drawerModel = ModelAPI.newArray();
yellow_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
yellow_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
yellow_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"yellow_kitchen_drawer"},{id:"yellow_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.yellow_kitchen_drawer, yellow_kitchen_drawerModel));

let yellow_kitchen_drawerModel = new BlockRenderer.Model();
yellow_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_yellow', 0]]);
yellow_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
yellow_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_yellow', 0]]);
yellow_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_yellow', 0]]);
yellow_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
yellow_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.yellow_kitchen_drawer, 0).setModel(yellow_kitchen_drawerModel);

//lime kitchen
IDRegistry.genBlockID("lime_kitchen_drawer");
Block.createBlockWithRotation("lime_kitchen_drawer", [
	{name: "Lime Kitchen Drawer", texture: [["hardened_clay_stained_lime", 0]], inCreative: false},
	{name: "Lime Kitchen Drawer", texture: [["hardened_clay_stained_lime", 0]], inCreative: false},
	{name: "Lime Kitchen Drawer", texture: [["hardened_clay_stained_lime", 0]], inCreative: false},
	{name: "Lime Kitchen Drawer", texture: [["hardened_clay_stained_lime", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("lime_kitchen_drawer");
Item.createItem("lime_kitchen_drawer", "Lime Kitchen Drawer", {name: "hardened_clay_stained_lime", meta: 0}, {stack: 64});

var lime_kitchen_drawerModel = ModelAPI.newArray();
lime_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
lime_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
lime_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"lime_kitchen_drawer"},{id:"lime_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.lime_kitchen_drawer, lime_kitchen_drawerModel));

let lime_kitchen_drawerModel = new BlockRenderer.Model();
lime_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_lime', 0]]);
lime_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
lime_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_lime', 0]]);
lime_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_lime', 0]]);
lime_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
lime_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.lime_kitchen_drawer, 0).setModel(lime_kitchen_drawerModel);

//pink kitchen
IDRegistry.genBlockID("pink_kitchen_drawer");
Block.createBlockWithRotation("pink_kitchen_drawer", [
	{name: "Pink Kitchen Drawer", texture: [["hardened_clay_stained_pink", 0]], inCreative: false},
	{name: "Pink Kitchen Drawer", texture: [["hardened_clay_stained_pink", 0]], inCreative: false},
	{name: "Pink Kitchen Drawer", texture: [["hardened_clay_stained_pink", 0]], inCreative: false},
	{name: "Pink Kitchen Drawer", texture: [["hardened_clay_stained_pink", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("pink_kitchen_drawer");
Item.createItem("pink_kitchen_drawer", "Pink Kitchen Drawer", {name: "hardened_clay_stained_pink", meta: 0}, {stack: 64});

var pink_kitchen_drawerModel = ModelAPI.newArray();
pink_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
pink_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
pink_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"pink_kitchen_drawer"},{id:"pink_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.pink_kitchen_drawer, pink_kitchen_drawerModel));

let pink_kitchen_drawerModel = new BlockRenderer.Model();
pink_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_pink', 0]]);
pink_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
pink_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_pink', 0]]);
pink_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_pink', 0]]);
pink_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
pink_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.pink_kitchen_drawer, 0).setModel(pink_kitchen_drawerModel);

//gray kitchen
IDRegistry.genBlockID("gray_kitchen_drawer");
Block.createBlockWithRotation("gray_kitchen_drawer", [
	{name: "Gray Kitchen Drawer", texture: [["hardened_clay_stained_gray", 0]], inCreative: false},
	{name: "Gray Kitchen Drawer", texture: [["hardened_clay_stained_gray", 0]], inCreative: false},
	{name: "Gray Kitchen Drawer", texture: [["hardened_clay_stained_gray", 0]], inCreative: false},
	{name: "Gray Kitchen Drawer", texture: [["hardened_clay_stained_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("gray_kitchen_drawer");
Item.createItem("gray_kitchen_drawer", "Gray Kitchen Drawer", {name: "hardened_clay_stained_gray", meta: 0}, {stack: 64});

var gray_kitchen_drawerModel = ModelAPI.newArray();
gray_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
gray_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
gray_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"gray_kitchen_drawer"},{id:"gray_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.gray_kitchen_drawer, gray_kitchen_drawerModel));

let gray_kitchen_drawerModel = new BlockRenderer.Model();
gray_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_gray', 0]]);
gray_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
gray_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_gray', 0]]);
gray_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_gray', 0]]);
gray_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
gray_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.gray_kitchen_drawer, 0).setModel(gray_kitchen_drawerModel);

//light gray kitchen
IDRegistry.genBlockID("light_gray_kitchen_drawer");
Block.createBlockWithRotation("light_gray_kitchen_drawer", [
	{name: "Light Gray Kitchen Drawer", texture: [["hardened_clay_stained_silver", 0]], inCreative: false},
	{name: "Light Gray Kitchen Drawer", texture: [["hardened_clay_stained_silver", 0]], inCreative: false},
	{name: "Light Gray Kitchen Drawer", texture: [["hardened_clay_stained_silver", 0]], inCreative: false},
	{name: "Light Gray Kitchen Drawer", texture: [["hardened_clay_stained_silver", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("light_gray_kitchen_drawer");
Item.createItem("light_gray_kitchen_drawer", "Light Gray Kitchen Drawer", {name: "hardened_clay_stained_silver", meta: 0}, {stack: 64});

var light_gray_kitchen_drawerModel = ModelAPI.newArray();
light_gray_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
light_gray_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"light_gray_kitchen_drawer"},{id:"light_gray_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.light_gray_kitchen_drawer, light_gray_kitchen_drawerModel));

let light_gray_kitchen_drawerModel = new BlockRenderer.Model();
light_gray_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_silver', 0]]);
light_gray_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
light_gray_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_silver', 0]]);
light_gray_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_silver', 0]]);
light_gray_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
light_gray_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.light_gray_kitchen_drawer, 0).setModel(light_gray_kitchen_drawerModel);

//cyan kitchen
IDRegistry.genBlockID("cyan_kitchen_drawer");
Block.createBlockWithRotation("cyan_kitchen_drawer", [
	{name: "Cyan Kitchen Drawer", texture: [["hardened_clay_stained_cyan", 0]], inCreative: false},
	{name: "Cyan Kitchen Drawer", texture: [["hardened_clay_stained_cyan", 0]], inCreative: false},
	{name: "Cyan Kitchen Drawer", texture: [["hardened_clay_stained_cyan", 0]], inCreative: false},
	{name: "Cyan Kitchen Drawer", texture: [["hardened_clay_stained_cyan", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("cyan_kitchen_drawer");
Item.createItem("cyan_kitchen_drawer", "Cyan Kitchen Drawer", {name: "hardened_clay_stained_cyan", meta: 0}, {stack: 64});

var cyan_kitchen_drawerModel = ModelAPI.newArray();
cyan_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
cyan_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
cyan_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"cyan_kitchen_drawer"},{id:"cyan_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.cyan_kitchen_drawer, cyan_kitchen_drawerModel));

let cyan_kitchen_drawerModel = new BlockRenderer.Model();
cyan_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_cyan', 0]]);
cyan_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
cyan_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_cyan', 0]]);
cyan_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_cyan', 0]]);
cyan_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
cyan_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.cyan_kitchen_drawer, 0).setModel(cyan_kitchen_drawerModel);

//purple kitchen
IDRegistry.genBlockID("purple_kitchen_drawer");
Block.createBlockWithRotation("purple_kitchen_drawer", [
	{name: "Purple Kitchen Drawer", texture: [["hardened_clay_stained_purple", 0]], inCreative: false},
	{name: "Purple Kitchen Drawer", texture: [["hardened_clay_stained_purple", 0]], inCreative: false},
	{name: "Purple Kitchen Drawer", texture: [["hardened_clay_stained_purple", 0]], inCreative: false},
	{name: "Purple Kitchen Drawer", texture: [["hardened_clay_stained_purple", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("purple_kitchen_drawer");
Item.createItem("purple_kitchen_drawer", "Purple Kitchen Drawer", {name: "hardened_clay_stained_purple", meta: 0}, {stack: 64});

var purple_kitchen_drawerModel = ModelAPI.newArray();
purple_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
purple_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
purple_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"purple_kitchen_drawer"},{id:"purple_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.purple_kitchen_drawer, purple_kitchen_drawerModel));

let purple_kitchen_drawerModel = new BlockRenderer.Model();
purple_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_purple', 0]]);
purple_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
purple_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_purple', 0]]);
purple_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_purple', 0]]);
purple_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
purple_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.purple_kitchen_drawer, 0).setModel(purple_kitchen_drawerModel);

//blue kitchen
IDRegistry.genBlockID("blue_kitchen_drawer");
Block.createBlockWithRotation("blue_kitchen_drawer", [
	{name: "Blue Kitchen Drawer", texture: [["hardened_clay_stained_blue", 0]], inCreative: false},
	{name: "Blue Kitchen Drawer", texture: [["hardened_clay_stained_blue", 0]], inCreative: false},
	{name: "Blue Kitchen Drawer", texture: [["hardened_clay_stained_blue", 0]], inCreative: false},
	{name: "Blue Kitchen Drawer", texture: [["hardened_clay_stained_blue", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("blue_kitchen_drawer");
Item.createItem("blue_kitchen_drawer", "Blue Kitchen Drawer", {name: "hardened_clay_stained_blue", meta: 0}, {stack: 64});

var blue_kitchen_drawerModel = ModelAPI.newArray();
blue_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
blue_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
blue_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"blue_kitchen_drawer"},{id:"blue_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.blue_kitchen_drawer, blue_kitchen_drawerModel));

let blue_kitchen_drawerModel = new BlockRenderer.Model();
blue_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_blue', 0]]);
blue_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
blue_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_blue', 0]]);
blue_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_blue', 0]]);
blue_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
blue_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.blue_kitchen_drawer, 0).setModel(blue_kitchen_drawerModel);

//brown kitchen
IDRegistry.genBlockID("brown_kitchen_drawer");
Block.createBlockWithRotation("brown_kitchen_drawer", [
	{name: "Brown Kitchen Drawer", texture: [["hardened_clay_stained_brown", 0]], inCreative: false},
	{name: "Brown Kitchen Drawer", texture: [["hardened_clay_stained_brown", 0]], inCreative: false},
	{name: "Brown Kitchen Drawer", texture: [["hardened_clay_stained_brown", 0]], inCreative: false},
	{name: "Brown Kitchen Drawer", texture: [["hardened_clay_stained_brown", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("brown_kitchen_drawer");
Item.createItem("brown_kitchen_drawer", "Brown Kitchen Drawer", {name: "hardened_clay_stained_brown", meta: 0}, {stack: 64});

var brown_kitchen_drawerModel = ModelAPI.newArray();
brown_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
brown_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
brown_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"brown_kitchen_drawer"},{id:"brown_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.brown_kitchen_drawer, brown_kitchen_drawerModel));

let brown_kitchen_drawerModel = new BlockRenderer.Model();
brown_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_brown', 0]]);
brown_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
brown_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_brown', 0]]);
brown_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_brown', 0]]);
brown_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
brown_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.brown_kitchen_drawer, 0).setModel(brown_kitchen_drawerModel);

//green kitchen
IDRegistry.genBlockID("green_kitchen_drawer");
Block.createBlockWithRotation("green_kitchen_drawer", [
	{name: "Green Kitchen Drawer", texture: [["hardened_clay_stained_green", 0]], inCreative: false},
	{name: "Green Kitchen Drawer", texture: [["hardened_clay_stained_green", 0]], inCreative: false},
	{name: "Green Kitchen Drawer", texture: [["hardened_clay_stained_green", 0]], inCreative: false},
	{name: "Green Kitchen Drawer", texture: [["hardened_clay_stained_green", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("green_kitchen_drawer");
Item.createItem("green_kitchen_drawer", "Green Kitchen Drawer", {name: "hardened_clay_stained_green", meta: 0}, {stack: 64});

var green_kitchen_drawerModel = ModelAPI.newArray();
green_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_green", 0]]);
green_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
green_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_green", 0]]);
green_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_green", 0]]);
green_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
green_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"green_kitchen_drawer"},{id:"green_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.green_kitchen_drawer, green_kitchen_drawerModel));

let green_kitchen_drawerModel = new BlockRenderer.Model();
green_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_green', 0]]);
green_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
green_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_green', 0]]);
green_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_green', 0]]);
green_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
green_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.green_kitchen_drawer, 0).setModel(green_kitchen_drawerModel);

//red kitchen
IDRegistry.genBlockID("red_kitchen_drawer");
Block.createBlockWithRotation("red_kitchen_drawer", [
	{name: "Red Kitchen Drawer", texture: [["hardened_clay_stained_red", 0]], inCreative: false},
	{name: "Red Kitchen Drawer", texture: [["hardened_clay_stained_red", 0]], inCreative: false},
	{name: "Red Kitchen Drawer", texture: [["hardened_clay_stained_red", 0]], inCreative: false},
	{name: "Red Kitchen Drawer", texture: [["hardened_clay_stained_red", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("red_kitchen_drawer");
Item.createItem("red_kitchen_drawer", "Red Kitchen Drawer", {name: "hardened_clay_stained_red", meta: 0}, {stack: 64});

var red_kitchen_drawerModel = ModelAPI.newArray();
red_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_red", 0]]);
red_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
red_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_red", 0]]);
red_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_red", 0]]);
red_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
red_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"red_kitchen_drawer"},{id:"red_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.red_kitchen_drawer, red_kitchen_drawerModel));

let red_kitchen_drawerModel = new BlockRenderer.Model();
red_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_red', 0]]);
red_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
red_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_red', 0]]);
red_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_red', 0]]);
red_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
red_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.red_kitchen_drawer, 0).setModel(red_kitchen_drawerModel);

//black kitchen
IDRegistry.genBlockID("black_kitchen_drawer");
Block.createBlockWithRotation("black_kitchen_drawer", [
	{name: "Black Kitchen Drawer", texture: [["hardened_clay_stained_black", 0]], inCreative: false},
	{name: "Black Kitchen Drawer", texture: [["hardened_clay_stained_black", 0]], inCreative: false},
	{name: "Black Kitchen Drawer", texture: [["hardened_clay_stained_black", 0]], inCreative: false},
	{name: "Black Kitchen Drawer", texture: [["hardened_clay_stained_black", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("black_kitchen_drawer");
Item.createItem("black_kitchen_drawer", "Black Kitchen Drawer", {name: "hardened_clay_stained_black", meta: 0}, {stack: 64});

var black_kitchen_drawerModel = ModelAPI.newArray();
black_kitchen_drawerModel.addBoxByTextures("1", 0,0.8125,0,1,1,1, [["hardened_clay_stained_black", 0]]);
black_kitchen_drawerModel.addBoxByTextures("2", 0,0,0,1,0.8125,0.9375, [["concrete_white", 0]]);
black_kitchen_drawerModel.addBoxByTextures("3", 0.0625,0.0625,0.9375,0.9375,0.375,1, [["hardened_clay_stained_black", 0]]);
black_kitchen_drawerModel.addBoxByTextures("4", 0.0625,0.4375,0.9375,0.9375,0.75,1, [["hardened_clay_stained_black", 0]]);
black_kitchen_drawerModel.addBoxByTextures("5", 0.4375,0.5625,1,0.5625,0.6875,1.0625, [["concrete_white", 0]]);
black_kitchen_drawerModel.addBoxByTextures("6", 0.4375,0.1875,1,0.5625,0.3125,1.0625, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"black_kitchen_drawer"},{id:"black_kitchen_drawer"}, Furniture.placeRotatableBlock(BlockID.black_kitchen_drawer, black_kitchen_drawerModel));

let black_kitchen_drawerModel = new BlockRenderer.Model();
black_kitchen_drawerModel.addBox(0,0.8125,0,1,1,1,[['hardened_clay_stained_black', 0]]);
black_kitchen_drawerModel.addBox(0,0,0,1,0.8125,0.9375,[['concrete_white', 0]]);
black_kitchen_drawerModel.addBox(0.0625,0.0625,0.9375,0.9375,0.375,1,[['hardened_clay_stained_black', 0]]);
black_kitchen_drawerModel.addBox(0.0625,0.4375,0.9375,0.9375,0.75,1,[['hardened_clay_stained_black', 0]]);
black_kitchen_drawerModel.addBox(0.4375,0.5625,1,0.5625,0.6875,1.0625,[['concrete_white', 0]]);
black_kitchen_drawerModel.addBox(0.4375,0.1875,1,0.5625,0.3125,1.0625,[['concrete_white', 0]]);
ItemModel.getForWithFallback(ItemID.black_kitchen_drawer, 0).setModel(black_kitchen_drawerModel);

//translation
Translation.addTranslation("White Kitchen Drawer", {ru: "Белая Кухонная Ящик"});
Translation.addTranslation("Orange Kitchen Drawer", {ru: "Оранжевая Кухонная Ящик"});
Translation.addTranslation("Magenta Kitchen Drawer", {ru: "Пурпурная Кухонная Ящик"});
Translation.addTranslation("Light Blue Kitchen Drawer", {ru: "Голубая Кухонная Ящик"});
Translation.addTranslation("Yellow Kitchen Drawer", {ru: "Жёлтая Кухонная Ящик"});
Translation.addTranslation("Lime Kitchen Drawer", {ru: "Лаймовая Кухонная Ящик"});
Translation.addTranslation("Pink Kitchen Drawer", {ru: "Розовая Кухонная Ящик"});
Translation.addTranslation("Gray Kitchen Drawer", {ru: "Серая Кухонная Ящик"});
Translation.addTranslation("Light Gray Kitchen Drawer", {ru: "Светло Серая Кухонная Ящик"});
Translation.addTranslation("Cyan Kitchen Drawer", {ru: "Бирюзовая Кухонная Ящик"});
Translation.addTranslation("Purple Kitchen Drawer", {ru: "Фиолетвая Кухонная Ящик"});
Translation.addTranslation("Blue Kitchen Drawer", {ru: "Синяя Кухонная Ящик"});
Translation.addTranslation("Brown Kitchen Drawer", {ru: "Коричневая Кухонная Ящик"});
Translation.addTranslation("Green Kitchen Drawer", {ru: "Зеленая Кухонная Ящик"});
Translation.addTranslation("Red Kitchen Drawer", {ru: "Красная Кухонная Ящик"});
Translation.addTranslation("Black Kitchen Drawer", {ru: "Черная Кухонная Ящик"});

//recipes
Recipes.addShaped({id: ItemID.white_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.white_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.orange_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.orange_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.magenta_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.magenta_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.light_blue_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.light_blue_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.yellow_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.yellow_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.lime_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.lime_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.pink_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.pink_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.gray_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.gray_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.light_gray_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.light_gray_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.cyan_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.cyan_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.purple_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.purple_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.blue_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.blue_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.brown_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.brown_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.green_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.green_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.red_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.red_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);
Recipes.addShaped({id: ItemID.black_kitchen_drawer, count: 4, data: 0}, ["ava", "xox", "xxx"], ['a', 172, 0, 'v', VanillaItemID.black_dye, 0, 'x', VanillaBlockID.concrete, 0, 'o', 54, 0]);