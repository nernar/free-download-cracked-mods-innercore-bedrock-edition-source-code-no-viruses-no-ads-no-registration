//oak kitchen
IDRegistry.genBlockID("oak_kitchen_sink_light");
Block.createBlockWithRotation("oak_kitchen_sink_light", [
	{name: "Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("oak_kitchen_sink_light");
Item.createItem("oak_kitchen_sink_light", "Oak Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var oak_kitchen_sink_lightModel = ModelAPI.newArray();
oak_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_oak',0],['concrete_white',0],['planks_oak',0],['planks_oak',0],['planks_oak',0],['planks_oak',0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
oak_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"oak_kitchen_sink_light"},{id:"oak_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.oak_kitchen_sink_light, oak_kitchen_sink_lightModel));

let oak_kitchen_sink_lightModel = new BlockRenderer.Model();
oak_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_oak',0],['concrete_white',0],['planks_oak',0],['planks_oak',0],['planks_oak',0],['planks_oak',0]]);
oak_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
oak_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
oak_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
oak_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
oak_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
oak_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
oak_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
oak_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
oak_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
oak_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.oak_kitchen_sink_light, 0).setModel(oak_kitchen_sink_lightModel);

//spruce kitchen
IDRegistry.genBlockID("spruce_kitchen_sink_light");
Block.createBlockWithRotation("spruce_kitchen_sink_light", [
	{name: "Spruce Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Spruce Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Spruce Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Spruce Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("spruce_kitchen_sink_light");
Item.createItem("spruce_kitchen_sink_light", "Spruce Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var spruce_kitchen_sink_lightModel = ModelAPI.newArray();
spruce_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_spruce',0],['concrete_white',0],['planks_spruce',0],['planks_spruce',0],['planks_spruce',0],['planks_spruce',0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
spruce_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"spruce_kitchen_sink_light"},{id:"spruce_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.spruce_kitchen_sink_light, spruce_kitchen_sink_lightModel));

let spruce_kitchen_sink_lightModel = new BlockRenderer.Model();
spruce_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_spruce',0],['concrete_white',0],['planks_spruce',0],['planks_spruce',0],['planks_spruce',0],['planks_spruce',0]]);
spruce_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
spruce_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
spruce_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
spruce_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
spruce_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
spruce_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
spruce_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
spruce_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
spruce_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
spruce_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.spruce_kitchen_sink_light, 0).setModel(spruce_kitchen_sink_lightModel);

//birch kitchen
IDRegistry.genBlockID("birch_kitchen_sink_light");
Block.createBlockWithRotation("birch_kitchen_sink_light", [
	{name: "Birch Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Birch Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Birch Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Birch Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("birch_kitchen_sink_light");
Item.createItem("birch_kitchen_sink_light", "Birch Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var birch_kitchen_sink_lightModel = ModelAPI.newArray();
birch_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_birch',0],['concrete_white',0],['planks_birch',0],['planks_birch',0],['planks_birch',0],['planks_birch',0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
birch_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"birch_kitchen_sink_light"},{id:"birch_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.birch_kitchen_sink_light, birch_kitchen_sink_lightModel));

let birch_kitchen_sink_lightModel = new BlockRenderer.Model();
birch_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_birch',0],['concrete_white',0],['planks_birch',0],['planks_birch',0],['planks_birch',0],['planks_birch',0]]);
birch_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
birch_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
birch_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
birch_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
birch_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
birch_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
birch_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
birch_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
birch_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
birch_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.birch_kitchen_sink_light, 0).setModel(birch_kitchen_sink_lightModel);

//jungle kitchen
IDRegistry.genBlockID("jungle_kitchen_sink_light");
Block.createBlockWithRotation("jungle_kitchen_sink_light", [
	{name: "Jungle Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Jungle Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Jungle Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Jungle Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("jungle_kitchen_sink_light");
Item.createItem("jungle_kitchen_sink_light", "Jungle Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var jungle_kitchen_sink_lightModel = ModelAPI.newArray();
jungle_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_jungle',0],['concrete_white',0],['planks_jungle',0],['planks_jungle',0],['planks_jungle',0],['planks_jungle',0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
jungle_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"jungle_kitchen_sink_light"},{id:"jungle_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.jungle_kitchen_sink_light, jungle_kitchen_sink_lightModel));

let jungle_kitchen_sink_lightModel = new BlockRenderer.Model();
jungle_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_jungle',0],['concrete_white',0],['planks_jungle',0],['planks_jungle',0],['planks_jungle',0],['planks_jungle',0]]);
jungle_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
jungle_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
jungle_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
jungle_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
jungle_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
jungle_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
jungle_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
jungle_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
jungle_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
jungle_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.jungle_kitchen_sink_light, 0).setModel(jungle_kitchen_sink_lightModel);

//acacia kitchen
IDRegistry.genBlockID("acacia_kitchen_sink_light");
Block.createBlockWithRotation("acacia_kitchen_sink_light", [
	{name: "Acacia Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Acacia Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Acacia Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Acacia Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("acacia_kitchen_sink_light");
Item.createItem("acacia_kitchen_sink_light", "Acacia Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var acacia_kitchen_sink_lightModel = ModelAPI.newArray();
acacia_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_acacia',0],['concrete_white',0],['planks_acacia',0],['planks_acacia',0],['planks_acacia',0],['planks_acacia',0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
acacia_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"acacia_kitchen_sink_light"},{id:"acacia_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.acacia_kitchen_sink_light, acacia_kitchen_sink_lightModel));

let acacia_kitchen_sink_lightModel = new BlockRenderer.Model();
acacia_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_acacia',0],['concrete_white',0],['planks_acacia',0],['planks_acacia',0],['planks_acacia',0],['planks_acacia',0]]);
acacia_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
acacia_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
acacia_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
acacia_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
acacia_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
acacia_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
acacia_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
acacia_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
acacia_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
acacia_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.acacia_kitchen_sink_light, 0).setModel(acacia_kitchen_sink_lightModel);

//dark_oak kitchen
IDRegistry.genBlockID("dark_oak_kitchen_sink_light");
Block.createBlockWithRotation("dark_oak_kitchen_sink_light", [
	{name: "Dark Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("dark_oak_kitchen_sink_light");
Item.createItem("dark_oak_kitchen_sink_light", "Dark Oak Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var dark_oak_kitchen_sink_lightModel = ModelAPI.newArray();
dark_oak_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_big_oak',0],['concrete_white',0],['planks_big_oak',0],['planks_big_oak',0],['planks_big_oak',0],['planks_big_oak',0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"dark_oak_kitchen_sink_light"},{id:"dark_oak_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.dark_oak_kitchen_sink_light, dark_oak_kitchen_sink_lightModel));

let dark_oak_kitchen_sink_lightModel = new BlockRenderer.Model();
dark_oak_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_big_oak',0],['concrete_white',0],['planks_big_oak',0],['planks_big_oak',0],['planks_big_oak',0],['planks_big_oak',0]]);
dark_oak_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
dark_oak_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
dark_oak_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
dark_oak_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
dark_oak_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.dark_oak_kitchen_sink_light, 0).setModel(dark_oak_kitchen_sink_lightModel);

//crimson kitchen
IDRegistry.genBlockID("crimson_kitchen_sink_light");
Block.createBlockWithRotation("crimson_kitchen_sink_light", [
	{name: "Crimson Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Crimson Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Crimson Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Crimson Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("crimson_kitchen_sink_light");
Item.createItem("crimson_kitchen_sink_light", "Crimson Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var crimson_kitchen_sink_lightModel = ModelAPI.newArray();
crimson_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['crimson_planks',0],['concrete_white',0],['crimson_planks',0],['crimson_planks',0],['crimson_planks',0],['crimson_planks',0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
crimson_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"crimson_kitchen_sink_light"},{id:"crimson_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.crimson_kitchen_sink_light, crimson_kitchen_sink_lightModel));

let crimson_kitchen_sink_lightModel = new BlockRenderer.Model();
crimson_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['crimson_planks',0],['concrete_white',0],['crimson_planks',0],['crimson_planks',0],['crimson_planks',0],['crimson_planks',0]]);
crimson_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
crimson_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
crimson_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
crimson_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
crimson_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
crimson_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
crimson_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
crimson_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
crimson_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
crimson_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.crimson_kitchen_sink_light, 0).setModel(crimson_kitchen_sink_lightModel);

//warped kitchen
IDRegistry.genBlockID("warped_kitchen_sink_light");
Block.createBlockWithRotation("warped_kitchen_sink_light", [
	{name: "Warped Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Warped Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Warped Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Warped Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("warped_kitchen_sink_light");
Item.createItem("warped_kitchen_sink_light", "Warped Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var warped_kitchen_sink_lightModel = ModelAPI.newArray();
warped_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['warped_planks',0],['concrete_white',0],['warped_planks',0],['warped_planks',0],['warped_planks',0],['warped_planks',0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
warped_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"warped_kitchen_sink_light"},{id:"warped_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.warped_kitchen_sink_light, warped_kitchen_sink_lightModel));

let warped_kitchen_sink_lightModel = new BlockRenderer.Model();
warped_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['warped_planks',0],['concrete_white',0],['warped_planks',0],['warped_planks',0],['warped_planks',0],['warped_planks',0]]);
warped_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
warped_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
warped_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
warped_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
warped_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
warped_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
warped_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
warped_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
warped_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
warped_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.warped_kitchen_sink_light, 0).setModel(warped_kitchen_sink_lightModel);

//translation
Translation.addTranslation("Oak Kitchen Sink (Light)", {ru: "Дубовая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Spruce Kitchen Sink (Light)", {ru: "Еловая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Birch Kitchen Sink (Light)", {ru: "Берёзовая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Jungle Kitchen Sink (Light)", {ru: "Джунглевая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Acacia Kitchen Sink (Light)", {ru: "Акациевая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Dark Oak Kitchen Sink (Light)", {ru: "Тёмно Дубовая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Crimson Kitchen Sink (Light)", {ru: "Искажённая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Warped Kitchen Sink (Light)", {ru: "Багровая Кухонная Раковина (Светлая)"});

//recipes
Recipes.addShaped({id: ItemID.oak_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', 5, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.spruce_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', 5, 1, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.birch_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', 5, 2, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.jungle_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', 5, 3, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.acacia_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', 5, 4, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.dark_oak_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', 5, 5, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.crimson_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.crimson_planks, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.warped_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.warped_planks, 0, 'v', 325, 0, 'o', 265, 0]);

//oak kitchen
IDRegistry.genBlockID("oak_kitchen_sink_dark");
Block.createBlockWithRotation("oak_kitchen_sink_dark", [
	{name: "Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("oak_kitchen_sink_dark");
Item.createItem("oak_kitchen_sink_dark", "Oak Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var oak_kitchen_sink_darkModel = ModelAPI.newArray();
oak_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_oak',0],['concrete_gray',0],['planks_oak',0],['planks_oak',0],['planks_oak',0],['planks_oak',0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
oak_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"oak_kitchen_sink_dark"},{id:"oak_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.oak_kitchen_sink_dark, oak_kitchen_sink_darkModel));

let oak_kitchen_sink_darkModel = new BlockRenderer.Model();
oak_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_oak',0],['concrete_gray',0],['planks_oak',0],['planks_oak',0],['planks_oak',0],['planks_oak',0]]);
oak_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
oak_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
oak_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
oak_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
oak_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
oak_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
oak_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
oak_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
oak_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
oak_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.oak_kitchen_sink_dark, 0).setModel(oak_kitchen_sink_darkModel);

//spruce kitchen
IDRegistry.genBlockID("spruce_kitchen_sink_dark");
Block.createBlockWithRotation("spruce_kitchen_sink_dark", [
	{name: "Spruce Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Spruce Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Spruce Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Spruce Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("spruce_kitchen_sink_dark");
Item.createItem("spruce_kitchen_sink_dark", "Spruce Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var spruce_kitchen_sink_darkModel = ModelAPI.newArray();
spruce_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_spruce',0],['concrete_gray',0],['planks_spruce',0],['planks_spruce',0],['planks_spruce',0],['planks_spruce',0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
spruce_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"spruce_kitchen_sink_dark"},{id:"spruce_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.spruce_kitchen_sink_dark, spruce_kitchen_sink_darkModel));

let spruce_kitchen_sink_darkModel = new BlockRenderer.Model();
spruce_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_spruce',0],['concrete_gray',0],['planks_spruce',0],['planks_spruce',0],['planks_spruce',0],['planks_spruce',0]]);
spruce_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
spruce_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
spruce_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
spruce_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
spruce_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
spruce_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
spruce_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
spruce_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
spruce_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
spruce_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.spruce_kitchen_sink_dark, 0).setModel(spruce_kitchen_sink_darkModel);

//birch kitchen
IDRegistry.genBlockID("birch_kitchen_sink_dark");
Block.createBlockWithRotation("birch_kitchen_sink_dark", [
	{name: "Birch Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Birch Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Birch Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Birch Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("birch_kitchen_sink_dark");
Item.createItem("birch_kitchen_sink_dark", "Birch Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var birch_kitchen_sink_darkModel = ModelAPI.newArray();
birch_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_birch',0],['concrete_gray',0],['planks_birch',0],['planks_birch',0],['planks_birch',0],['planks_birch',0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
birch_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"birch_kitchen_sink_dark"},{id:"birch_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.birch_kitchen_sink_dark, birch_kitchen_sink_darkModel));

let birch_kitchen_sink_darkModel = new BlockRenderer.Model();
birch_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_birch',0],['concrete_gray',0],['planks_birch',0],['planks_birch',0],['planks_birch',0],['planks_birch',0]]);
birch_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
birch_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
birch_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
birch_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
birch_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
birch_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
birch_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
birch_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
birch_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
birch_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.birch_kitchen_sink_dark, 0).setModel(birch_kitchen_sink_darkModel);

//jungle kitchen
IDRegistry.genBlockID("jungle_kitchen_sink_dark");
Block.createBlockWithRotation("jungle_kitchen_sink_dark", [
	{name: "Jungle Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Jungle Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Jungle Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Jungle Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("jungle_kitchen_sink_dark");
Item.createItem("jungle_kitchen_sink_dark", "Jungle Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var jungle_kitchen_sink_darkModel = ModelAPI.newArray();
jungle_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_jungle',0],['concrete_gray',0],['planks_jungle',0],['planks_jungle',0],['planks_jungle',0],['planks_jungle',0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
jungle_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"jungle_kitchen_sink_dark"},{id:"jungle_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.jungle_kitchen_sink_dark, jungle_kitchen_sink_darkModel));

let jungle_kitchen_sink_darkModel = new BlockRenderer.Model();
jungle_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_jungle',0],['concrete_gray',0],['planks_jungle',0],['planks_jungle',0],['planks_jungle',0],['planks_jungle',0]]);
jungle_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
jungle_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
jungle_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
jungle_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
jungle_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
jungle_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
jungle_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
jungle_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
jungle_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
jungle_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.jungle_kitchen_sink_dark, 0).setModel(jungle_kitchen_sink_darkModel);

//acacia kitchen
IDRegistry.genBlockID("acacia_kitchen_sink_dark");
Block.createBlockWithRotation("acacia_kitchen_sink_dark", [
	{name: "Acacia Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Acacia Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Acacia Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Acacia Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("acacia_kitchen_sink_dark");
Item.createItem("acacia_kitchen_sink_dark", "Acacia Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var acacia_kitchen_sink_darkModel = ModelAPI.newArray();
acacia_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_acacia',0],['concrete_gray',0],['planks_acacia',0],['planks_acacia',0],['planks_acacia',0],['planks_acacia',0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
acacia_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"acacia_kitchen_sink_dark"},{id:"acacia_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.acacia_kitchen_sink_dark, acacia_kitchen_sink_darkModel));

let acacia_kitchen_sink_darkModel = new BlockRenderer.Model();
acacia_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_acacia',0],['concrete_gray',0],['planks_acacia',0],['planks_acacia',0],['planks_acacia',0],['planks_acacia',0]]);
acacia_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
acacia_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
acacia_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
acacia_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
acacia_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
acacia_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
acacia_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
acacia_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
acacia_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
acacia_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.acacia_kitchen_sink_dark, 0).setModel(acacia_kitchen_sink_darkModel);

//dark_oak kitchen
IDRegistry.genBlockID("dark_oak_kitchen_sink_dark");
Block.createBlockWithRotation("dark_oak_kitchen_sink_dark", [
	{name: "Dark Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Dark Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("dark_oak_kitchen_sink_dark");
Item.createItem("dark_oak_kitchen_sink_dark", "Dark Oak Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var dark_oak_kitchen_sink_darkModel = ModelAPI.newArray();
dark_oak_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['planks_big_oak',0],['concrete_gray',0],['planks_big_oak',0],['planks_big_oak',0],['planks_big_oak',0],['planks_big_oak',0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
dark_oak_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"dark_oak_kitchen_sink_dark"},{id:"dark_oak_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.dark_oak_kitchen_sink_dark, dark_oak_kitchen_sink_darkModel));

let dark_oak_kitchen_sink_darkModel = new BlockRenderer.Model();
dark_oak_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['planks_big_oak',0],['concrete_gray',0],['planks_big_oak',0],['planks_big_oak',0],['planks_big_oak',0],['planks_big_oak',0]]);
dark_oak_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
dark_oak_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
dark_oak_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
dark_oak_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
dark_oak_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
dark_oak_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.dark_oak_kitchen_sink_dark, 0).setModel(dark_oak_kitchen_sink_darkModel);

//crimson kitchen
IDRegistry.genBlockID("crimson_kitchen_sink_dark");
Block.createBlockWithRotation("crimson_kitchen_sink_dark", [
	{name: "Crimson Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Crimson Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Crimson Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Crimson Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("crimson_kitchen_sink_dark");
Item.createItem("crimson_kitchen_sink_dark", "Crimson Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var crimson_kitchen_sink_darkModel = ModelAPI.newArray();
crimson_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['crimson_planks',0],['concrete_gray',0],['crimson_planks',0],['crimson_planks',0],['crimson_planks',0],['crimson_planks',0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
crimson_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"crimson_kitchen_sink_dark"},{id:"crimson_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.crimson_kitchen_sink_dark, crimson_kitchen_sink_darkModel));

let crimson_kitchen_sink_darkModel = new BlockRenderer.Model();
crimson_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['crimson_planks',0],['concrete_gray',0],['crimson_planks',0],['crimson_planks',0],['crimson_planks',0],['crimson_planks',0]]);
crimson_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
crimson_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
crimson_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
crimson_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
crimson_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
crimson_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
crimson_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
crimson_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
crimson_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
crimson_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.crimson_kitchen_sink_dark, 0).setModel(crimson_kitchen_sink_darkModel);

//warped kitchen
IDRegistry.genBlockID("warped_kitchen_sink_dark");
Block.createBlockWithRotation("warped_kitchen_sink_dark", [
	{name: "Warped Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Warped Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Warped Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Warped Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("warped_kitchen_sink_dark");
Item.createItem("warped_kitchen_sink_dark", "Warped Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var warped_kitchen_sink_darkModel = ModelAPI.newArray();
warped_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['warped_planks',0],['concrete_gray',0],['warped_planks',0],['warped_planks',0],['warped_planks',0],['warped_planks',0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
warped_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"warped_kitchen_sink_dark"},{id:"warped_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.warped_kitchen_sink_dark, warped_kitchen_sink_darkModel));

let warped_kitchen_sink_darkModel = new BlockRenderer.Model();
warped_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['warped_planks',0],['concrete_gray',0],['warped_planks',0],['warped_planks',0],['warped_planks',0],['warped_planks',0]]);
warped_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
warped_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
warped_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
warped_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
warped_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
warped_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
warped_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
warped_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
warped_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
warped_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.warped_kitchen_sink_dark, 0).setModel(warped_kitchen_sink_darkModel);

//translation
Translation.addTranslation("Oak Kitchen Sink (Dark)", {ru: "Дубовая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Spruce Kitchen Sink (Dark)", {ru: "Еловая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Birch Kitchen Sink (Dark)", {ru: "Берёзовая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Jungle Kitchen Sink (Dark)", {ru: "Джунглевая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Acacia Kitchen Sink (Dark)", {ru: "Акациевая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Dark Oak Kitchen Sink (Dark)", {ru: "Тёмно Дубовая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Crimson Kitchen Sink (Dark)", {ru: "Искажённая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Warped Kitchen Sink (Dark)", {ru: "Багровая Кухонная Раковина (Тёмная)"});

//recipes
Recipes.addShaped({id: ItemID.oak_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', 5, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.spruce_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', 5, 1, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.birch_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', 5, 2, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.jungle_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', 5, 3, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.acacia_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', 5, 4, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.dark_oak_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', 5, 5, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.crimson_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.crimson_planks, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.warped_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.warped_planks, 0, 'v', 325, 0, 'o', 265, 0]);

//stripped oak kitchen
IDRegistry.genBlockID("stripped_oak_kitchen_sink_light");
Block.createBlockWithRotation("stripped_oak_kitchen_sink_light", [
	{name: "Stripped Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_oak_kitchen_sink_light");
Item.createItem("stripped_oak_kitchen_sink_light", "Stripped Oak Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var stripped_oak_kitchen_sink_lightModel = ModelAPI.newArray();
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_oak_log',0],['concrete_white',0],['stripped_oak_log',0],['stripped_oak_log',0],['stripped_oak_log',0],['stripped_oak_log',0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_oak_kitchen_sink_light"},{id:"stripped_oak_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.stripped_oak_kitchen_sink_light, stripped_oak_kitchen_sink_lightModel));

let stripped_oak_kitchen_sink_lightModel = new BlockRenderer.Model();
stripped_oak_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_oak_log',0],['concrete_white',0],['stripped_oak_log',0],['stripped_oak_log',0],['stripped_oak_log',0],['stripped_oak_log',0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_oak_kitchen_sink_light, 0).setModel(stripped_oak_kitchen_sink_lightModel);

//stripped spruce kitchen
IDRegistry.genBlockID("stripped_spruce_kitchen_sink_light");
Block.createBlockWithRotation("stripped_spruce_kitchen_sink_light", [
	{name: "Stripped Spruce Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_spruce_kitchen_sink_light");
Item.createItem("stripped_spruce_kitchen_sink_light", "Stripped Spruce Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var stripped_spruce_kitchen_sink_lightModel = ModelAPI.newArray();
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_spruce_log',0],['concrete_white',0],['stripped_spruce_log',0],['stripped_spruce_log',0],['stripped_spruce_log',0],['stripped_spruce_log',0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_spruce_kitchen_sink_light"},{id:"stripped_spruce_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.stripped_spruce_kitchen_sink_light, stripped_spruce_kitchen_sink_lightModel));

let stripped_spruce_kitchen_sink_lightModel = new BlockRenderer.Model();
stripped_spruce_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_spruce_log',0],['concrete_white',0],['stripped_spruce_log',0],['stripped_spruce_log',0],['stripped_spruce_log',0],['stripped_spruce_log',0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_spruce_kitchen_sink_light, 0).setModel(stripped_spruce_kitchen_sink_lightModel);

//stripped birch kitchen
IDRegistry.genBlockID("stripped_birch_kitchen_sink_light");
Block.createBlockWithRotation("stripped_birch_kitchen_sink_light", [
	{name: "Stripped Birch Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_birch_kitchen_sink_light");
Item.createItem("stripped_birch_kitchen_sink_light", "Stripped Birch Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var stripped_birch_kitchen_sink_lightModel = ModelAPI.newArray();
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_birch_log',0],['concrete_white',0],['stripped_birch_log',0],['stripped_birch_log',0],['stripped_birch_log',0],['stripped_birch_log',0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_birch_kitchen_sink_light"},{id:"stripped_birch_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.stripped_birch_kitchen_sink_light, stripped_birch_kitchen_sink_lightModel));

let stripped_birch_kitchen_sink_lightModel = new BlockRenderer.Model();
stripped_birch_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_birch_log',0],['concrete_white',0],['stripped_birch_log',0],['stripped_birch_log',0],['stripped_birch_log',0],['stripped_birch_log',0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_birch_kitchen_sink_light, 0).setModel(stripped_birch_kitchen_sink_lightModel);

//stripped jungle kitchen
IDRegistry.genBlockID("stripped_jungle_kitchen_sink_light");
Block.createBlockWithRotation("stripped_jungle_kitchen_sink_light", [
	{name: "Stripped Jungle Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_jungle_kitchen_sink_light");
Item.createItem("stripped_jungle_kitchen_sink_light", "Stripped Jungle Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var stripped_jungle_kitchen_sink_lightModel = ModelAPI.newArray();
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_jungle_log',0],['concrete_white',0],['stripped_jungle_log',0],['stripped_jungle_log',0],['stripped_jungle_log',0],['stripped_jungle_log',0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_jungle_kitchen_sink_light"},{id:"stripped_jungle_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.stripped_jungle_kitchen_sink_light, stripped_jungle_kitchen_sink_lightModel));

let stripped_jungle_kitchen_sink_lightModel = new BlockRenderer.Model();
stripped_jungle_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_jungle_log',0],['concrete_white',0],['stripped_jungle_log',0],['stripped_jungle_log',0],['stripped_jungle_log',0],['stripped_jungle_log',0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_jungle_kitchen_sink_light, 0).setModel(stripped_jungle_kitchen_sink_lightModel);

//stripped acacia kitchen
IDRegistry.genBlockID("stripped_acacia_kitchen_sink_light");
Block.createBlockWithRotation("stripped_acacia_kitchen_sink_light", [
	{name: "Stripped Acacia Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_acacia_kitchen_sink_light");
Item.createItem("stripped_acacia_kitchen_sink_light", "Stripped Acacia Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var stripped_acacia_kitchen_sink_lightModel = ModelAPI.newArray();
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_acacia_log',0],['concrete_white',0],['stripped_acacia_log',0],['stripped_acacia_log',0],['stripped_acacia_log',0],['stripped_acacia_log',0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_acacia_kitchen_sink_light"},{id:"stripped_acacia_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.stripped_acacia_kitchen_sink_light, stripped_acacia_kitchen_sink_lightModel));

let stripped_acacia_kitchen_sink_lightModel = new BlockRenderer.Model();
stripped_acacia_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_acacia_log',0],['concrete_white',0],['stripped_acacia_log',0],['stripped_acacia_log',0],['stripped_acacia_log',0],['stripped_acacia_log',0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_acacia_kitchen_sink_light, 0).setModel(stripped_acacia_kitchen_sink_lightModel);

//stripped dark oak kitchen
IDRegistry.genBlockID("stripped_dark_oak_kitchen_sink_light");
Block.createBlockWithRotation("stripped_dark_oak_kitchen_sink_light", [
	{name: "Stripped Dark Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_dark_oak_kitchen_sink_light");
Item.createItem("stripped_dark_oak_kitchen_sink_light", "Stripped Dark Oak Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var stripped_dark_oak_kitchen_sink_lightModel = ModelAPI.newArray();
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_dark_oak_log',0],['concrete_white',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_dark_oak_kitchen_sink_light"},{id:"stripped_dark_oak_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.stripped_dark_oak_kitchen_sink_light, stripped_dark_oak_kitchen_sink_lightModel));

let stripped_dark_oak_kitchen_sink_lightModel = new BlockRenderer.Model();
stripped_dark_oak_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_dark_oak_log',0],['concrete_white',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_dark_oak_kitchen_sink_light, 0).setModel(stripped_dark_oak_kitchen_sink_lightModel);

//stripped crimson kitchen
IDRegistry.genBlockID("stripped_crimson_kitchen_sink_light");
Block.createBlockWithRotation("stripped_crimson_kitchen_sink_light", [
	{name: "Stripped Crimson Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_crimson_kitchen_sink_light");
Item.createItem("stripped_crimson_kitchen_sink_light", "stripped_crimson Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var stripped_crimson_kitchen_sink_lightModel = ModelAPI.newArray();
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_crimson_stem_side',0],['concrete_white',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_crimson_kitchen_sink_light"},{id:"stripped_crimson_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.stripped_crimson_kitchen_sink_light, stripped_crimson_kitchen_sink_lightModel));

let stripped_crimson_kitchen_sink_lightModel = new BlockRenderer.Model();
stripped_crimson_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_crimson_stem_side',0],['concrete_white',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_crimson_kitchen_sink_light, 0).setModel(stripped_crimson_kitchen_sink_lightModel);

//stripped warped kitchen
IDRegistry.genBlockID("stripped_warped_kitchen_sink_light");
Block.createBlockWithRotation("stripped_warped_kitchen_sink_light", [
	{name: "Stripped Warped Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Sink (Light)", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_warped_kitchen_sink_light");
Item.createItem("stripped_warped_kitchen_sink_light", "Stripped Warped Kitchen Sink (Light)", {name: "concrete_white", meta: 0}, {stack: 64});

var stripped_warped_kitchen_sink_lightModel = ModelAPI.newArray();
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_warped_stem_side',0],['concrete_white',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_white", 0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_white", 0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_white", 0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_white", 0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_lightModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_warped_kitchen_sink_light"},{id:"stripped_warped_kitchen_sink_light"}, Furniture.placeRotatableBlock(BlockID.stripped_warped_kitchen_sink_light, stripped_warped_kitchen_sink_lightModel));

let stripped_warped_kitchen_sink_lightModel = new BlockRenderer.Model();
stripped_warped_kitchen_sink_lightModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_warped_stem_side',0],['concrete_white',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_white', 0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_white', 0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_white', 0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_white', 0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_lightModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_warped_kitchen_sink_light, 0).setModel(stripped_warped_kitchen_sink_lightModel);

//translation
Translation.addTranslation("Stripped Oak Kitchen Sink (Light)", {ru: "Ободранная Дубовая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Stripped Spruce Kitchen Sink (Light)", {ru: "Ободранная Еловая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Stripped Birch Kitchen Sink (Light)", {ru: "Ободранная Берёзовая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Stripped Jungle Kitchen Sink (Light)", {ru: "Ободранная Джунглевая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Stripped Acacia Kitchen Sink (Light)", {ru: "Ободранная Акациевая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Stripped Dark Oak Kitchen Sink (Light)", {ru: "Ободранная Тёмно Дубовая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Stripped Crimson Kitchen Sink (Light)", {ru: "Ободранная Искажённая Кухонная Раковина (Светлая)"});
Translation.addTranslation("Stripped Warped Kitchen Sink (Light)", {ru: "Ободранная Багровая Кухонная Раковина (Светлая)"});

//recipes
Recipes.addShaped({id: ItemID.stripped_oak_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.stripped_oak_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_spruce_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.stripped_spruce_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_birch_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.stripped_birch_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_jungle_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.stripped_jungle_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_acacia_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.stripped_acacia_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_dark_oak_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.stripped_dark_oak_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_crimson_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.stripped_crimson_stem, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_warped_kitchen_sink_light, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 0, 'x', VanillaBlockID.stripped_warped_stem, 0, 'v', 325, 0, 'o', 265, 0]);

//stripped oak kitchen
IDRegistry.genBlockID("stripped_oak_kitchen_sink_dark");
Block.createBlockWithRotation("stripped_oak_kitchen_sink_dark", [
	{name: "Stripped Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_oak_kitchen_sink_dark");
Item.createItem("stripped_oak_kitchen_sink_dark", "Stripped Oak Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var stripped_oak_kitchen_sink_darkModel = ModelAPI.newArray();
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_oak_log',0],['concrete_gray',0],['stripped_oak_log',0],['stripped_oak_log',0],['stripped_oak_log',0],['stripped_oak_log',0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_oak_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_oak_kitchen_sink_dark"},{id:"stripped_oak_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.stripped_oak_kitchen_sink_dark, stripped_oak_kitchen_sink_darkModel));

let stripped_oak_kitchen_sink_darkModel = new BlockRenderer.Model();
stripped_oak_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_oak_log',0],['concrete_gray',0],['stripped_oak_log',0],['stripped_oak_log',0],['stripped_oak_log',0],['stripped_oak_log',0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_oak_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_oak_kitchen_sink_dark, 0).setModel(stripped_oak_kitchen_sink_darkModel);

//stripped spruce kitchen
IDRegistry.genBlockID("stripped_spruce_kitchen_sink_dark");
Block.createBlockWithRotation("stripped_spruce_kitchen_sink_dark", [
	{name: "Stripped Spruce Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Spruce Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_spruce_kitchen_sink_dark");
Item.createItem("stripped_spruce_kitchen_sink_dark", "Stripped Spruce Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var stripped_spruce_kitchen_sink_darkModel = ModelAPI.newArray();
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_spruce_log',0],['concrete_gray',0],['stripped_spruce_log',0],['stripped_spruce_log',0],['stripped_spruce_log',0],['stripped_spruce_log',0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_spruce_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_spruce_kitchen_sink_dark"},{id:"stripped_spruce_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.stripped_spruce_kitchen_sink_dark, stripped_spruce_kitchen_sink_darkModel));

let stripped_spruce_kitchen_sink_darkModel = new BlockRenderer.Model();
stripped_spruce_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_spruce_log',0],['concrete_gray',0],['stripped_spruce_log',0],['stripped_spruce_log',0],['stripped_spruce_log',0],['stripped_spruce_log',0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_spruce_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_spruce_kitchen_sink_dark, 0).setModel(stripped_spruce_kitchen_sink_darkModel);

//stripped birch kitchen
IDRegistry.genBlockID("stripped_birch_kitchen_sink_dark");
Block.createBlockWithRotation("stripped_birch_kitchen_sink_dark", [
	{name: "Stripped Birch Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Birch Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_birch_kitchen_sink_dark");
Item.createItem("stripped_birch_kitchen_sink_dark", "Stripped Birch Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var stripped_birch_kitchen_sink_darkModel = ModelAPI.newArray();
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_birch_log',0],['concrete_gray',0],['stripped_birch_log',0],['stripped_birch_log',0],['stripped_birch_log',0],['stripped_birch_log',0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_birch_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_birch_kitchen_sink_dark"},{id:"stripped_birch_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.stripped_birch_kitchen_sink_dark, stripped_birch_kitchen_sink_darkModel));

let stripped_birch_kitchen_sink_darkModel = new BlockRenderer.Model();
stripped_birch_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_birch_log',0],['concrete_gray',0],['stripped_birch_log',0],['stripped_birch_log',0],['stripped_birch_log',0],['stripped_birch_log',0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_birch_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_birch_kitchen_sink_dark, 0).setModel(stripped_birch_kitchen_sink_darkModel);

//stripped jungle kitchen
IDRegistry.genBlockID("stripped_jungle_kitchen_sink_dark");
Block.createBlockWithRotation("stripped_jungle_kitchen_sink_dark", [
	{name: "Stripped Jungle Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Jungle Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_jungle_kitchen_sink_dark");
Item.createItem("stripped_jungle_kitchen_sink_dark", "Stripped Jungle Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var stripped_jungle_kitchen_sink_darkModel = ModelAPI.newArray();
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_jungle_log',0],['concrete_gray',0],['stripped_jungle_log',0],['stripped_jungle_log',0],['stripped_jungle_log',0],['stripped_jungle_log',0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_jungle_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_jungle_kitchen_sink_dark"},{id:"stripped_jungle_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.stripped_jungle_kitchen_sink_dark, stripped_jungle_kitchen_sink_darkModel));

let stripped_jungle_kitchen_sink_darkModel = new BlockRenderer.Model();
stripped_jungle_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_jungle_log',0],['concrete_gray',0],['stripped_jungle_log',0],['stripped_jungle_log',0],['stripped_jungle_log',0],['stripped_jungle_log',0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_jungle_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_jungle_kitchen_sink_dark, 0).setModel(stripped_jungle_kitchen_sink_darkModel);

//stripped acacia kitchen
IDRegistry.genBlockID("stripped_acacia_kitchen_sink_dark");
Block.createBlockWithRotation("stripped_acacia_kitchen_sink_dark", [
	{name: "Stripped Acacia Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Acacia Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_acacia_kitchen_sink_dark");
Item.createItem("stripped_acacia_kitchen_sink_dark", "Stripped Acacia Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var stripped_acacia_kitchen_sink_darkModel = ModelAPI.newArray();
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_acacia_log',0],['concrete_gray',0],['stripped_acacia_log',0],['stripped_acacia_log',0],['stripped_acacia_log',0],['stripped_acacia_log',0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_acacia_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_acacia_kitchen_sink_dark"},{id:"stripped_acacia_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.stripped_acacia_kitchen_sink_dark, stripped_acacia_kitchen_sink_darkModel));

let stripped_acacia_kitchen_sink_darkModel = new BlockRenderer.Model();
stripped_acacia_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_acacia_log',0],['concrete_gray',0],['stripped_acacia_log',0],['stripped_acacia_log',0],['stripped_acacia_log',0],['stripped_acacia_log',0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_acacia_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_acacia_kitchen_sink_dark, 0).setModel(stripped_acacia_kitchen_sink_darkModel);

//stripped dark oak kitchen
IDRegistry.genBlockID("stripped_dark_oak_kitchen_sink_dark");
Block.createBlockWithRotation("stripped_dark_oak_kitchen_sink_dark", [
	{name: "Stripped Dark Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Dark Oak Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_dark_oak_kitchen_sink_dark");
Item.createItem("stripped_dark_oak_kitchen_sink_dark", "Stripped Dark Oak Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var stripped_dark_oak_kitchen_sink_darkModel = ModelAPI.newArray();
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_dark_oak_log',0],['concrete_gray',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_dark_oak_kitchen_sink_dark"},{id:"stripped_dark_oak_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.stripped_dark_oak_kitchen_sink_dark, stripped_dark_oak_kitchen_sink_darkModel));

let stripped_dark_oak_kitchen_sink_darkModel = new BlockRenderer.Model();
stripped_dark_oak_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_dark_oak_log',0],['concrete_gray',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0],['stripped_dark_oak_log',0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_dark_oak_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_dark_oak_kitchen_sink_dark, 0).setModel(stripped_dark_oak_kitchen_sink_darkModel);

//stripped crimson kitchen
IDRegistry.genBlockID("stripped_crimson_kitchen_sink_dark");
Block.createBlockWithRotation("stripped_crimson_kitchen_sink_dark", [
	{name: "Stripped Crimson Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Crimson Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_crimson_kitchen_sink_dark");
Item.createItem("stripped_crimson_kitchen_sink_dark", "stripped_crimson Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var stripped_crimson_kitchen_sink_darkModel = ModelAPI.newArray();
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_crimson_stem_side',0],['concrete_gray',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_crimson_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_crimson_kitchen_sink_dark"},{id:"stripped_crimson_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.stripped_crimson_kitchen_sink_dark, stripped_crimson_kitchen_sink_darkModel));

let stripped_crimson_kitchen_sink_darkModel = new BlockRenderer.Model();
stripped_crimson_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_crimson_stem_side',0],['concrete_gray',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0],['stripped_crimson_stem_side',0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_crimson_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_crimson_kitchen_sink_dark, 0).setModel(stripped_crimson_kitchen_sink_darkModel);

//stripped warped kitchen
IDRegistry.genBlockID("stripped_warped_kitchen_sink_dark");
Block.createBlockWithRotation("stripped_warped_kitchen_sink_dark", [
	{name: "Stripped Warped Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false},
	{name: "Stripped Warped Kitchen Sink (Dark)", texture: [["concrete_gray", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("stripped_warped_kitchen_sink_dark");
Item.createItem("stripped_warped_kitchen_sink_dark", "Stripped Warped Kitchen Sink (Dark)", {name: "concrete_gray", meta: 0}, {stack: 64});

var stripped_warped_kitchen_sink_darkModel = ModelAPI.newArray();
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [['stripped_warped_stem_side',0],['concrete_gray',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("2", 0,0.5625,0,1,1,0.25, [["concrete_gray", 0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("3", 0,0.5625,0.875,1,1,1, [["concrete_gray", 0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("4", 0,0.5625,0.25,0.125,1,0.875, [["concrete_gray", 0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("5", 0.875,0.5625,0.25,1,1,0.875, [["concrete_gray", 0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
stripped_warped_kitchen_sink_darkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
Furniture.addReplacementItem({id:"stripped_warped_kitchen_sink_dark"},{id:"stripped_warped_kitchen_sink_dark"}, Furniture.placeRotatableBlock(BlockID.stripped_warped_kitchen_sink_dark, stripped_warped_kitchen_sink_darkModel));

let stripped_warped_kitchen_sink_darkModel = new BlockRenderer.Model();
stripped_warped_kitchen_sink_darkModel.addBox(0,0,0,1,0.5625,0.9375,[['stripped_warped_stem_side',0],['concrete_gray',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0],['stripped_warped_stem_side',0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0,0.5625,0,1,1,0.25,[['concrete_gray', 0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0,0.5625,0.875,1,1,1,[['concrete_gray', 0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0,0.5625,0.25,0.125,1,0.875,[['concrete_gray', 0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0.875,0.5625,0.25,1,1,0.875,[['concrete_gray', 0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875,[['concrete_silver', 0]]);
stripped_warped_kitchen_sink_darkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875,[['concrete_silver', 0]]);
ItemModel.getForWithFallback(ItemID.stripped_warped_kitchen_sink_dark, 0).setModel(stripped_warped_kitchen_sink_darkModel);

//translation
Translation.addTranslation("Stripped Oak Kitchen Sink (Dark)", {ru: "Ободранная Дубовая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Stripped Spruce Kitchen Sink (Dark)", {ru: "Ободранная Еловая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Stripped Birch Kitchen Sink (Dark)", {ru: "Ободранная Берёзовая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Stripped Jungle Kitchen Sink (Dark)", {ru: "Ободранная Джунглевая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Stripped Acacia Kitchen Sink (Dark)", {ru: "Ободранная Акациевая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Stripped Dark Oak Kitchen Sink (Dark)", {ru: "Ободранная Тёмно Дубовая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Stripped Crimson Kitchen Sink (Dark)", {ru: "Ободранная Искажённая Кухонная Раковина (Тёмная)"});
Translation.addTranslation("Stripped Warped Kitchen Sink (Dark)", {ru: "Ободранная Багровая Кухонная Раковина (Тёмная)"});

//recipes
Recipes.addShaped({id: ItemID.stripped_oak_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.stripped_oak_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_spruce_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.stripped_spruce_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_birch_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.stripped_birch_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_jungle_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.stripped_jungle_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_acacia_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.stripped_acacia_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_dark_oak_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.stripped_dark_oak_log, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_crimson_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.stripped_crimson_stem, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.stripped_warped_kitchen_sink_dark, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', VanillaBlockID.concrete, 7, 'x', VanillaBlockID.stripped_warped_stem, 0, 'v', 325, 0, 'o', 265, 0]);

//white kitchen
IDRegistry.genBlockID("white_kitchen_sink");
Block.createBlockWithRotation("white_kitchen_sink", [
	{name: "White Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "White Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "White Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "White Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("white_kitchen_sink");
Item.createItem("white_kitchen_sink", "White Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var white_kitchen_sinkModel = ModelAPI.newArray();
white_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_white", 0]]);
white_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_white", 0]]);
white_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_white", 0]]);
white_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"white_kitchen_sink"},{id:"white_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.white_kitchen_sink, white_kitchen_sinkModel));

let white_kitchen_sinkModel = new BlockRenderer.Model();
white_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_white", 0]]);
white_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_white", 0]]);
white_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_white", 0]]);
white_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
white_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
white_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.white_kitchen_sink, 0).setModel(white_kitchen_sinkModel);

//orange kitchen
IDRegistry.genBlockID("orange_kitchen_sink");
Block.createBlockWithRotation("orange_kitchen_sink", [
	{name: "Orange Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Orange Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Orange Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Orange Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("orange_kitchen_sink");
Item.createItem("orange_kitchen_sink", "Orange Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var orange_kitchen_sinkModel = ModelAPI.newArray();
orange_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"orange_kitchen_sink"},{id:"orange_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.orange_kitchen_sink, orange_kitchen_sinkModel));

let orange_kitchen_sinkModel = new BlockRenderer.Model();
orange_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_orange", 0]]);
orange_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
orange_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
orange_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.orange_kitchen_sink, 0).setModel(orange_kitchen_sinkModel);

//magenta kitchen
IDRegistry.genBlockID("magenta_kitchen_sink");
Block.createBlockWithRotation("magenta_kitchen_sink", [
	{name: "Magenta Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Magenta Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Magenta Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Magenta Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("magenta_kitchen_sink");
Item.createItem("magenta_kitchen_sink", "Magenta Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var magenta_kitchen_sinkModel = ModelAPI.newArray();
magenta_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"magenta_kitchen_sink"},{id:"magenta_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.magenta_kitchen_sink, magenta_kitchen_sinkModel));

let magenta_kitchen_sinkModel = new BlockRenderer.Model();
magenta_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_magenta", 0]]);
magenta_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
magenta_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
magenta_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.magenta_kitchen_sink, 0).setModel(magenta_kitchen_sinkModel);

//light_blue kitchen
IDRegistry.genBlockID("light_blue_kitchen_sink");
Block.createBlockWithRotation("light_blue_kitchen_sink", [
	{name: "Light Blue Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Light Blue Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Light Blue Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Light Blue Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("light_blue_kitchen_sink");
Item.createItem("light_blue_kitchen_sink", "Light Blue Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var light_blue_kitchen_sinkModel = ModelAPI.newArray();
light_blue_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"light_blue_kitchen_sink"},{id:"light_blue_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.light_blue_kitchen_sink, light_blue_kitchen_sinkModel));

let light_blue_kitchen_sinkModel = new BlockRenderer.Model();
light_blue_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_light_blue", 0]]);
light_blue_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
light_blue_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
light_blue_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.light_blue_kitchen_sink, 0).setModel(light_blue_kitchen_sinkModel);

//yellow kitchen
IDRegistry.genBlockID("yellow_kitchen_sink");
Block.createBlockWithRotation("yellow_kitchen_sink", [
	{name: "Yellow Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Yellow Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Yellow Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Yellow Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("yellow_kitchen_sink");
Item.createItem("yellow_kitchen_sink", "Yellow Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var yellow_kitchen_sinkModel = ModelAPI.newArray();
yellow_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"yellow_kitchen_sink"},{id:"yellow_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.yellow_kitchen_sink, yellow_kitchen_sinkModel));

let yellow_kitchen_sinkModel = new BlockRenderer.Model();
yellow_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_yellow", 0]]);
yellow_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
yellow_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
yellow_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.yellow_kitchen_sink, 0).setModel(yellow_kitchen_sinkModel);

//lime kitchen
IDRegistry.genBlockID("lime_kitchen_sink");
Block.createBlockWithRotation("lime_kitchen_sink", [
	{name: "Lime Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Lime Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Lime Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Lime Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("lime_kitchen_sink");
Item.createItem("lime_kitchen_sink", "Lime Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var lime_kitchen_sinkModel = ModelAPI.newArray();
lime_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"lime_kitchen_sink"},{id:"lime_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.lime_kitchen_sink, lime_kitchen_sinkModel));

let lime_kitchen_sinkModel = new BlockRenderer.Model();
lime_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_lime", 0]]);
lime_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
lime_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
lime_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.lime_kitchen_sink, 0).setModel(lime_kitchen_sinkModel);

//pink kitchen
IDRegistry.genBlockID("pink_kitchen_sink");
Block.createBlockWithRotation("pink_kitchen_sink", [
	{name: "Pink Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Pink Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Pink Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Pink Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("pink_kitchen_sink");
Item.createItem("pink_kitchen_sink", "Pink Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var pink_kitchen_sinkModel = ModelAPI.newArray();
pink_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"pink_kitchen_sink"},{id:"pink_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.pink_kitchen_sink, pink_kitchen_sinkModel));

let pink_kitchen_sinkModel = new BlockRenderer.Model();
pink_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_pink", 0]]);
pink_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
pink_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
pink_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.pink_kitchen_sink, 0).setModel(pink_kitchen_sinkModel);

//gray kitchen
IDRegistry.genBlockID("gray_kitchen_sink");
Block.createBlockWithRotation("gray_kitchen_sink", [
	{name: "Gray Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Gray Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Gray Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Gray Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("gray_kitchen_sink");
Item.createItem("gray_kitchen_sink", "Gray Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var gray_kitchen_sinkModel = ModelAPI.newArray();
gray_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"gray_kitchen_sink"},{id:"gray_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.gray_kitchen_sink, gray_kitchen_sinkModel));

let gray_kitchen_sinkModel = new BlockRenderer.Model();
gray_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_gray", 0]]);
gray_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
gray_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
gray_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.gray_kitchen_sink, 0).setModel(gray_kitchen_sinkModel);

//light_gray kitchen
IDRegistry.genBlockID("light_gray_kitchen_sink");
Block.createBlockWithRotation("light_gray_kitchen_sink", [
	{name: "Light Gray Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Light Gray Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Light Gray Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Light Gray Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("light_gray_kitchen_sink");
Item.createItem("light_gray_kitchen_sink", "Light Gray Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var light_gray_kitchen_sinkModel = ModelAPI.newArray();
light_gray_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"light_gray_kitchen_sink"},{id:"light_gray_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.light_gray_kitchen_sink, light_gray_kitchen_sinkModel));

let light_gray_kitchen_sinkModel = new BlockRenderer.Model();
light_gray_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_silver", 0]]);
light_gray_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
light_gray_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
light_gray_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.light_gray_kitchen_sink, 0).setModel(light_gray_kitchen_sinkModel);

//cyan kitchen
IDRegistry.genBlockID("cyan_kitchen_sink");
Block.createBlockWithRotation("cyan_kitchen_sink", [
	{name: "Cyan Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Cyan Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Cyan Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Cyan Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("cyan_kitchen_sink");
Item.createItem("cyan_kitchen_sink", "Cyan Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var cyan_kitchen_sinkModel = ModelAPI.newArray();
cyan_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"cyan_kitchen_sink"},{id:"cyan_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.cyan_kitchen_sink, cyan_kitchen_sinkModel));

let cyan_kitchen_sinkModel = new BlockRenderer.Model();
cyan_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_cyan", 0]]);
cyan_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
cyan_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
cyan_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.cyan_kitchen_sink, 0).setModel(cyan_kitchen_sinkModel);

//purple kitchen
IDRegistry.genBlockID("purple_kitchen_sink");
Block.createBlockWithRotation("purple_kitchen_sink", [
	{name: "Purple Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Purple Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Purple Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Purple Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("purple_kitchen_sink");
Item.createItem("purple_kitchen_sink", "Purple Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var purple_kitchen_sinkModel = ModelAPI.newArray();
purple_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"purple_kitchen_sink"},{id:"purple_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.purple_kitchen_sink, purple_kitchen_sinkModel));

let purple_kitchen_sinkModel = new BlockRenderer.Model();
purple_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_purple", 0]]);
purple_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
purple_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
purple_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.purple_kitchen_sink, 0).setModel(purple_kitchen_sinkModel);

//blue kitchen
IDRegistry.genBlockID("blue_kitchen_sink");
Block.createBlockWithRotation("blue_kitchen_sink", [
	{name: "Blue Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Blue Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Blue Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Blue Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("blue_kitchen_sink");
Item.createItem("blue_kitchen_sink", "Blue Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var blue_kitchen_sinkModel = ModelAPI.newArray();
blue_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"blue_kitchen_sink"},{id:"blue_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.blue_kitchen_sink, blue_kitchen_sinkModel));

let blue_kitchen_sinkModel = new BlockRenderer.Model();
blue_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_blue", 0]]);
blue_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
blue_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
blue_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.blue_kitchen_sink, 0).setModel(blue_kitchen_sinkModel);

//brown kitchen
IDRegistry.genBlockID("brown_kitchen_sink");
Block.createBlockWithRotation("brown_kitchen_sink", [
	{name: "Brown Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Brown Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Brown Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Brown Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("brown_kitchen_sink");
Item.createItem("brown_kitchen_sink", "Brown Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var brown_kitchen_sinkModel = ModelAPI.newArray();
brown_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"brown_kitchen_sink"},{id:"brown_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.brown_kitchen_sink, brown_kitchen_sinkModel));

let brown_kitchen_sinkModel = new BlockRenderer.Model();
brown_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_brown", 0]]);
brown_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
brown_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
brown_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.brown_kitchen_sink, 0).setModel(brown_kitchen_sinkModel);

//green kitchen
IDRegistry.genBlockID("green_kitchen_sink");
Block.createBlockWithRotation("green_kitchen_sink", [
	{name: "Green Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Green Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Green Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Green Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("green_kitchen_sink");
Item.createItem("green_kitchen_sink", "Green Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var green_kitchen_sinkModel = ModelAPI.newArray();
green_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_green", 0]]);
green_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_green", 0]]);
green_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_green", 0]]);
green_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"green_kitchen_sink"},{id:"green_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.green_kitchen_sink, green_kitchen_sinkModel));

let green_kitchen_sinkModel = new BlockRenderer.Model();
green_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_green", 0]]);
green_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_green", 0]]);
green_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_green", 0]]);
green_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
green_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
green_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.green_kitchen_sink, 0).setModel(green_kitchen_sinkModel);

//red kitchen
IDRegistry.genBlockID("red_kitchen_sink");
Block.createBlockWithRotation("red_kitchen_sink", [
	{name: "Red Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Red Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Red Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Red Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("red_kitchen_sink");
Item.createItem("red_kitchen_sink", "Red Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var red_kitchen_sinkModel = ModelAPI.newArray();
red_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_red", 0]]);
red_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_red", 0]]);
red_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_red", 0]]);
red_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"red_kitchen_sink"},{id:"red_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.red_kitchen_sink, red_kitchen_sinkModel));

let red_kitchen_sinkModel = new BlockRenderer.Model();
red_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_red", 0]]);
red_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_red", 0]]);
red_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_red", 0]]);
red_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
red_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
red_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.red_kitchen_sink, 0).setModel(red_kitchen_sinkModel);

//black kitchen
IDRegistry.genBlockID("black_kitchen_sink");
Block.createBlockWithRotation("black_kitchen_sink", [
	{name: "Black Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Black Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Black Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false},
	{name: "Black Kitchen Sink", texture: [["concrete_white", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("black_kitchen_sink");
Item.createItem("black_kitchen_sink", "Black Kitchen Sink", {name: "concrete_white", meta: 0}, {stack: 64});

var black_kitchen_sinkModel = ModelAPI.newArray();
black_kitchen_sinkModel.addBoxByTextures("1", 0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBoxByTextures("2", 0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBoxByTextures("3", 0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_black", 0]]);
black_kitchen_sinkModel.addBoxByTextures("4", 0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_black", 0]]);
black_kitchen_sinkModel.addBoxByTextures("5", 0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_black", 0]]);
black_kitchen_sinkModel.addBoxByTextures("6", 0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBoxByTextures("7", 0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBoxByTextures("8", 0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBoxByTextures("9", 0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBoxByTextures("10", 0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBoxByTextures("11", 0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBoxByTextures("12", 0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBoxByTextures("13", 0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBoxByTextures("14", 0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBoxByTextures("15", 0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBoxByTextures("16", 0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
Furniture.addReplacementItem({id:"black_kitchen_sink"},{id:"black_kitchen_sink"}, Furniture.placeRotatableBlock(BlockID.black_kitchen_sink, black_kitchen_sinkModel));

let black_kitchen_sinkModel = new BlockRenderer.Model();
black_kitchen_sinkModel.addBox(0,0,0,1,0.5625,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBox(0.0625,0.5625,0,0.9375,1,0.25, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBox(0,0.8125,0.9375,1,1,1, [["hardened_clay_stained_black", 0]]);
black_kitchen_sinkModel.addBox(0,0.8125,0,0.0625,1,0.9375, [["hardened_clay_stained_black", 0]]);
black_kitchen_sinkModel.addBox(0.9375,0.8125,0,1,1,0.9375, [["hardened_clay_stained_black", 0]]);
black_kitchen_sinkModel.addBox(0.4375,1.25,0.1875,0.5625,1.375,0.4375, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBox(0.1875,1,0.0625,0.3125,1.125,0.1875, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBox(0.6875,1,0.0625,0.8125,1.125,0.1875, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBox(0.4375,1.1875,0.1875,0.5625,1.25,0.25, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBox(0.4375,1,0.0625,0.5625,1.25,0.1875, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBox(0.4375,1.25,0.125,0.5625,1.3125,0.1875, [["concrete_silver", 0]]);
black_kitchen_sinkModel.addBox(0.125,0.5625,0.875,0.875,1,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBox(0,0.5625,0,0.0625,0.8125,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBox(0.0625,0.5625,0.25,0.125,1,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBox(0.9375,0.5625,0,1,0.8125,0.9375, [["concrete_white", 0]]);
black_kitchen_sinkModel.addBox(0.875,0.5625,0.25,0.9375,1,0.9375, [["concrete_white", 0]]);
ItemModel.getForWithFallback(ItemID.black_kitchen_sink, 0).setModel(black_kitchen_sinkModel);

//translation
Translation.addTranslation("White Kitchen Sink", {ru: "Белая Кухонная Раковина"});
Translation.addTranslation("Orange Kitchen Sink", {ru: "Оранжевая Кухонная Раковина"});
Translation.addTranslation("Magenta Kitchen Sink", {ru: "Пурпурная Кухонная Раковина"});
Translation.addTranslation("Light Blue Kitchen Sink", {ru: "Голубая Кухонная Раковина"});
Translation.addTranslation("Yellow Kitchen Sink", {ru: "Жёлтая Кухонная Раковина"});
Translation.addTranslation("Lime Kitchen Sink", {ru: "Лаймовая Кухонная Раковина"});
Translation.addTranslation("Pink Kitchen Sink", {ru: "Розовая Кухонная Раковина"});
Translation.addTranslation("Gray Kitchen Sink", {ru: "Серая Кухонная Раковина"});
Translation.addTranslation("Light Gray Kitchen Sink", {ru: "Светло Серая Кухонная Раковина"});
Translation.addTranslation("Cyan Kitchen Sink", {ru: "Бирюзовая Кухонная Раковина"});
Translation.addTranslation("Purple Kitchen Sink", {ru: "Фиолетвая Кухонная Раковина"});
Translation.addTranslation("Blue Kitchen Sink", {ru: "Синяя Кухонная Раковина"});
Translation.addTranslation("Brown Kitchen Sink", {ru: "Коричневая Кухонная Раковина"});
Translation.addTranslation("Green Kitchen Sink", {ru: "Зеленая Кухонная Раковина"});
Translation.addTranslation("Red Kitchen Sink", {ru: "Красная Кухонная Раковина"});
Translation.addTranslation("Black Kitchen Sink", {ru: "Черная Кухонная Раковина"});

//recipes
Recipes.addShaped({id: ItemID.white_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 0, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.orange_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 1, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.magenta_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 2, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.light_blue_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 3, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.yellow_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 4, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.lime_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 5, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.pink_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 6, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.gray_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 7, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.light_gray_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 8, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.cyan_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 9, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.purple_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 10, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.blue_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 11, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.brown_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 12, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.green_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 13, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.red_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 14, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);
Recipes.addShaped({id: ItemID.black_kitchen_sink, count: 2, data: 0}, ["aoa", "xvx", "xxx"], ['a', 159, 15, 'x', VanillaBlockID.concrete, 0, 'v', 325, 0, 'o', 265, 0]);