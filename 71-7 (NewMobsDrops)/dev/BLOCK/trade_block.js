IDRegistry.genBlockID("TradeRED");
Block.createBlock("TradeRED", [
	{name: "TradeRED", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeRED", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeRED", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeRED", texture: [["quartz_block", 0]], inCreative: false}
], BLOCK_TYPE_WOOD);
IDRegistry.genItemID("TradeRED");
Item.createItem("TradeRED", "Trade Block", {name: "tradeRED", meta: 0}, {stack: 64});

var TradeREDModel = ModelAPI.newArray();
TradeREDModel.addBoxByTextures("1", 0.125,0.125,0.875,0.875,1,1, [['planks_oak',0],['planks_oak',0],['plank_cake',0],['plank_cake',0],['planks_oak',0],['planks_oak',0]]);
TradeREDModel.addBoxByTextures("2", 0,0.125,0,0.125,1,1, [['planks_oak',0],['planks_oak',0],['plank_cake',0],['plank_cake',0],['planks_oak',0],['planks_oak',0]]);
TradeREDModel.addBoxByID("3", 0.125,0.5625,0.375,0.875,0.625,0.875, 5, 0);
TradeREDModel.addBoxByTextures("4", 0.875,0.125,0,1,1,1, [['planks_oak',0],['planks_oak',0],['plank_cake',0],['plank_cake',0],['planks_oak',0],['planks_oak',0]]);
TradeREDModel.addBoxByID("5", 0.125,0.875,0.375,0.875,0.9375,0.875, 5, 0);
TradeREDModel.addBoxByID("6", 0.125,0.125,0.375,0.875,0.1875,0.875, 5, 0);
TradeREDModel.addBoxByID("7", 0.875,1,0.5,1,2,0.625, 17, 0);
TradeREDModel.addBoxByID("8", 0.0625,0,0.8125,0.1875,0.125,0.9375, 17, 0);
TradeREDModel.addBoxByID("9", 0,1,0.5,0.125,2,0.625, 17, 0);
TradeREDModel.addBoxByID("10", 0.8125,0,0.8125,0.9375,0.125,0.9375, 17, 0);
TradeREDModel.addBoxByID("11", 0.0625,0,0.375,0.1875,0.125,0.5, 17, 0);
TradeREDModel.addBoxByID("12", 0.8125,0,0.375,0.9375,0.125,0.5, 17, 0);
TradeREDModel.addBoxByID("13", 0.3125,2,0,0.6875,2.125,0.625, 35, 0);
TradeREDModel.addBoxByID("14", 0,2,0,0.3125,2.125,0.625, 35, 14);
TradeREDModel.addBoxByID("15", 0.6875,2,0,1,2.125,0.625, 35, 14);
TradeREDModel.addBoxByID("16", 0.6875,1.875,0.625,1,2,1, 35, 14);
TradeREDModel.addBoxByID("17", 0,1.875,0.625,0.3125,2,1, 35, 14);
TradeREDModel.addBoxByID("18", 0.3125,1.875,0.625,0.6875,2,1, 35, 0);
TradeREDModel.addBoxByID("19", 0.6875,1,0.6875,0.75,1.0625,0.75, 41);
TradeREDModel.addBoxByID("20", 0.625,0.9375,0.625,0.8125,1,0.8125, 41);
TradeREDModel.addBoxByID("21", 0.1875,0.625,0.5,0.8125,0.6875,0.875, 35, 1);
TradeREDModel.addBoxByID("22", 0.125,0.1875,0.5,0.375,0.3125,0.875, 35, 3);
TradeREDModel.addBoxByID("23", 0.625,0.1875,0.5,0.875,0.3125,0.875, 35, 5);
Furniture.addReplacementItem({id:"TradeRED"},{id:"TradeRED"}, Furniture.placeRotatableBlock(BlockID.TradeRED, TradeREDModel));

var guiTiyTradeRED = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Red Trade"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 550, y: 75, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 155, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 215, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 275, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 335, bitmap: "furnace_bar_background", scale: 3.2},
       
        {type: "bitmap", x: 450, y: 155, bitmap: "red_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 155, bitmap: "bread", scale: 1.6},
       
        {type: "bitmap", x: 450, y: 215, bitmap: "green_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 215, bitmap: "beef_cooked", scale: 1.6},
       
        {type: "bitmap", x: 450, y: 285, bitmap: "blue_bumaga", scale: 3.2},
        {type: "bitmap", x: 650 , y: 285, bitmap: "cake", scale: 3.2},
      
        {type: "bitmap", x: 450, y: 335, bitmap: "yellow_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 335, bitmap: "beetroot_soup", scale: 1.6},
       
        {type: "bitmap", x: 750, y: 155, bitmap: "tradeRED", scale: 12.8},
],
    
    elements: {
        "slotSource1": {type: "slot", x: 450, y: 75},
        "slotResult1": {type: "slot", x: 650, y: 75},
    }
});


IDRegistry.genBlockID("TradeGREEN");
Block.createBlock("TradeGREEN", [
	{name: "TradeGREEN", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeGREEN", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeGREEN", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeGREEN", texture: [["quartz_block", 0]], inCreative: false}
], BLOCK_TYPE_WOOD);
IDRegistry.genItemID("TradeGREEN");
Item.createItem("TradeGREEN", "Trade Block", {name: "tradeGREEN", meta: 0}, {stack: 64});

var TradeGREENModel = ModelAPI.newArray();
TradeGREENModel.addBoxByTextures("1", 0.125,0.125,0.875,0.875,1,1,[['planks_oak',0],['planks_oak',0],['plank_bamboo',0],['plank_bamboo',0],['planks_oak',0],['planks_oak',0]]);
TradeGREENModel.addBoxByTextures("2", 0,0.125,0,0.125,1,1,[['planks_oak',0],['planks_oak',0],['plank_bamboo',0],['plank_bamboo',0],['planks_oak',0],['planks_oak',0]]);
TradeGREENModel.addBoxByID("3", 0.125,0.5625,0.375,0.875,0.625,0.875, 5, 0);
TradeGREENModel.addBoxByTextures("4", 0.875,0.125,0,1,1,1,[['planks_oak',0],['planks_oak',0],['plank_bamboo',0],['plank_bamboo',0],['planks_oak',0],['planks_oak',0]]);
TradeGREENModel.addBoxByID("5", 0.125,0.875,0.375,0.875,0.9375,0.875, 5, 0);
TradeGREENModel.addBoxByID("6", 0.125,0.125,0.375,0.875,0.1875,0.875, 5, 0);
TradeGREENModel.addBoxByID("7", 0.875,1,0.5,1,2,0.625, 17, 0);
TradeGREENModel.addBoxByID("8", 0.0625,0,0.8125,0.1875,0.125,0.9375, 17, 0);
TradeGREENModel.addBoxByID("9", 0,1,0.5,0.125,2,0.625, 17, 0);
TradeGREENModel.addBoxByID("10", 0.8125,0,0.8125,0.9375,0.125,0.9375, 17, 0);
TradeGREENModel.addBoxByID("11", 0.0625,0,0.375,0.1875,0.125,0.5, 17, 0);
TradeGREENModel.addBoxByID("12", 0.8125,0,0.375,0.9375,0.125,0.5, 17, 0);
TradeGREENModel.addBoxByID("13", 0.3125,2,0,0.6875,2.125,0.625, 35, 0);
TradeGREENModel.addBoxByID("14", 0,2,0,0.3125,2.125,0.625, 35, 5);
TradeGREENModel.addBoxByID("15", 0.6875,2,0,1,2.125,0.625, 35, 5);
TradeGREENModel.addBoxByID("16", 0.6875,1.875,0.625,1,2,1, 35, 5);
TradeGREENModel.addBoxByID("17", 0,1.875,0.625,0.3125,2,1, 35, 5);
TradeGREENModel.addBoxByID("18", 0.3125,1.875,0.625,0.6875,2,1, 35, 0);
TradeGREENModel.addBoxByID("19", 0.6875,1,0.6875,0.75,1.0625,0.75, 41);
TradeGREENModel.addBoxByID("20", 0.625,0.9375,0.625,0.8125,1,0.8125, 41);
TradeGREENModel.addBoxByID("21", 0.1875,0.625,0.5,0.8125,0.6875,0.875, 35, 1);
TradeGREENModel.addBoxByID("22", 0.125,0.1875,0.5,0.375,0.3125,0.875, 35, 3);
TradeGREENModel.addBoxByID("23", 0.625,0.1875,0.5,0.875,0.3125,0.875, 35, 5);
Furniture.addReplacementItem({id:"TradeGREEN"},{id:"TradeGREEN"}, Furniture.placeRotatableBlock(BlockID.TradeGREEN, TradeGREENModel));

var guiTiyTradeGREEN = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Green Trade"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 550, y: 75, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 155, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 215, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 275, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 335, bitmap: "furnace_bar_background", scale: 3.2},
       
        {type: "bitmap", x: 450, y: 155, bitmap: "red_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 155, bitmap: "sapling", scale: 1.6},
       
        {type: "bitmap", x: 450, y: 215, bitmap: "green_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 215, bitmap: "cactus", scale: 1.6},
       
        {type: "bitmap", x: 450, y: 285, bitmap: "blue_bumaga", scale: 3.2},
        {type: "bitmap", x: 650 , y: 285, bitmap: "bamboo", scale: 1.6},
      
        {type: "bitmap", x: 450, y: 335, bitmap: "yellow_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 335, bitmap: "trosnik", scale: 1.6},
       
        {type: "bitmap", x: 750, y: 155, bitmap: "tradeGREEN", scale: 12.8},
],
    
    elements: {
        "slotSource1": {type: "slot", x: 450, y: 75},
        "slotResult1": {type: "slot", x: 650, y: 75},
    }
});


IDRegistry.genBlockID("TradeBLUE");
Block.createBlock("TradeBLUE", [
	{name: "TradeBLUE", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeBLUE", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeBLUE", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeBLUE", texture: [["quartz_block", 0]], inCreative: false}
], BLOCK_TYPE_WOOD);
IDRegistry.genItemID("TradeBLUE");
Item.createItem("TradeBLUE", "Trade Block", {name: "tradeBLUE", meta: 0}, {stack: 64});

var TradeBLUEModel = ModelAPI.newArray();
TradeBLUEModel.addBoxByTextures("1", 0.125,0.125,0.875,0.875,1,1,[['planks_oak',0],['planks_oak',0],['plank_sword',0],['plank_sword',0],['planks_oak',0],['planks_oak',0]]);
TradeBLUEModel.addBoxByTextures("2", 0,0.125,0,0.125,1,1,[['planks_oak',0],['planks_oak',0],['plank_sword',0],['plank_sword',0],['planks_oak',0],['planks_oak',0]]);
TradeBLUEModel.addBoxByID("3", 0.125,0.5625,0.375,0.875,0.625,0.875, 5, 0);
TradeBLUEModel.addBoxByTextures("4", 0.875,0.125,0,1,1,1,[['planks_oak',0],['planks_oak',0],['plank_sword',0],['plank_sword',0],['planks_oak',0],['planks_oak',0]]);
TradeBLUEModel.addBoxByID("5", 0.125,0.875,0.375,0.875,0.9375,0.875, 5, 0);
TradeBLUEModel.addBoxByID("6", 0.125,0.125,0.375,0.875,0.1875,0.875, 5, 0);
TradeBLUEModel.addBoxByID("7", 0.875,1,0.5,1,2,0.625, 17, 0);
TradeBLUEModel.addBoxByID("8", 0.0625,0,0.8125,0.1875,0.125,0.9375, 17, 0);
TradeBLUEModel.addBoxByID("9", 0,1,0.5,0.125,2,0.625, 17, 0);
TradeBLUEModel.addBoxByID("10", 0.8125,0,0.8125,0.9375,0.125,0.9375, 17, 0);
TradeBLUEModel.addBoxByID("11", 0.0625,0,0.375,0.1875,0.125,0.5, 17, 0);
TradeBLUEModel.addBoxByID("12", 0.8125,0,0.375,0.9375,0.125,0.5, 17, 0);
TradeBLUEModel.addBoxByID("13", 0.3125,2,0,0.6875,2.125,0.625, 35, 0);
TradeBLUEModel.addBoxByID("14", 0,2,0,0.3125,2.125,0.625, 35, 11);
TradeBLUEModel.addBoxByID("15", 0.6875,2,0,1,2.125,0.625, 35, 11);
TradeBLUEModel.addBoxByID("16", 0.6875,1.875,0.625,1,2,1, 35, 11);
TradeBLUEModel.addBoxByID("17", 0,1.875,0.625,0.3125,2,1, 35, 11);
TradeBLUEModel.addBoxByID("18", 0.3125,1.875,0.625,0.6875,2,1, 35, 0);
TradeBLUEModel.addBoxByID("19", 0.6875,1,0.6875,0.75,1.0625,0.75, 41);
TradeBLUEModel.addBoxByID("20", 0.625,0.9375,0.625,0.8125,1,0.8125, 41);
TradeBLUEModel.addBoxByID("21", 0.1875,0.625,0.5,0.8125,0.6875,0.875, 35, 1);
TradeBLUEModel.addBoxByID("22", 0.125,0.1875,0.5,0.375,0.3125,0.875, 35, 3);
TradeBLUEModel.addBoxByID("23", 0.625,0.1875,0.5,0.875,0.3125,0.875, 35, 5);
Furniture.addReplacementItem({id:"TradeBLUE"},{id:"TradeBLUE"}, Furniture.placeRotatableBlock(BlockID.TradeBLUE, TradeBLUEModel));

var guiTiyTradeBLUE = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Blue Trade"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 550, y: 75, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 155, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 215, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 275, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 335, bitmap: "furnace_bar_background", scale: 3.2},
       
        {type: "bitmap", x: 450, y: 155, bitmap: "red_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 155, bitmap: "iron_sword", scale: 3.2},
       
        {type: "bitmap", x: 450, y: 215, bitmap: "green_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 215, bitmap: "diamond_shovel", scale: 3.2},
       
        {type: "bitmap", x: 450, y: 285, bitmap: "blue_bumaga", scale: 3.2},
        {type: "bitmap", x: 650 , y: 285, bitmap: "gold_chestplate", scale: 3.2},
      
        {type: "bitmap", x: 450, y: 335, bitmap: "yellow_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 335, bitmap: "iron_leggings", scale: 3.2},
       
        {type: "bitmap", x: 750, y: 155, bitmap: "tradeBLUE", scale: 12.8},
],
    
    elements: {
        "slotSource1": {type: "slot", x: 450, y: 75},
        "slotResult1": {type: "slot", x: 650, y: 75},
    }
});


IDRegistry.genBlockID("TradeYELLOW");
Block.createBlock("TradeYELLOW", [
	{name: "TradeYELLOW", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeYELLOW", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeYELLOW", texture: [["quartz_block", 0]], inCreative: false},
	{name: "TradeYELLOW", texture: [["quartz_block", 0]], inCreative: false}
], BLOCK_TYPE_WOOD);
IDRegistry.genItemID("TradeYELLOW");
Item.createItem("TradeYELLOW", "Trade Block", {name: "tradeYELLOW", meta: 0}, {stack: 64});

var TradeYELLOWModel = ModelAPI.newArray();
TradeYELLOWModel.addBoxByTextures("1", 0.125,0.125,0.875,0.875,1,1,[['planks_oak',0],['planks_oak',0],['plank_bed',0],['plank_bed',0],['planks_oak',0],['planks_oak',0]]);
TradeYELLOWModel.addBoxByTextures("2", 0,0.125,0,0.125,1,1,[['planks_oak',0],['planks_oak',0],['plank_bed',0],['plank_bed',0],['planks_oak',0],['planks_oak',0]]);
TradeYELLOWModel.addBoxByID("3", 0.125,0.5625,0.375,0.875,0.625,0.875, 5, 0);
TradeYELLOWModel.addBoxByTextures("4", 0.875,0.125,0,1,1,1,[['planks_oak',0],['planks_oak',0],['plank_bed',0],['plank_bed',0],['planks_oak',0],['planks_oak',0]]);
TradeYELLOWModel.addBoxByID("5", 0.125,0.875,0.375,0.875,0.9375,0.875, 5, 0);
TradeYELLOWModel.addBoxByID("6", 0.125,0.125,0.375,0.875,0.1875,0.875, 5, 0);
TradeYELLOWModel.addBoxByID("7", 0.875,1,0.5,1,2,0.625, 17, 0);
TradeYELLOWModel.addBoxByID("8", 0.0625,0,0.8125,0.1875,0.125,0.9375, 17, 0);
TradeYELLOWModel.addBoxByID("9", 0,1,0.5,0.125,2,0.625, 17, 0);
TradeYELLOWModel.addBoxByID("10", 0.8125,0,0.8125,0.9375,0.125,0.9375, 17, 0);
TradeYELLOWModel.addBoxByID("11", 0.0625,0,0.375,0.1875,0.125,0.5, 17, 0);
TradeYELLOWModel.addBoxByID("12", 0.8125,0,0.375,0.9375,0.125,0.5, 17, 0);
TradeYELLOWModel.addBoxByID("13", 0.3125,2,0,0.6875,2.125,0.625, 35, 0);
TradeYELLOWModel.addBoxByID("14", 0,2,0,0.3125,2.125,0.625, 35, 4);
TradeYELLOWModel.addBoxByID("15", 0.6875,2,0,1,2.125,0.625, 35, 4);
TradeYELLOWModel.addBoxByID("16", 0.6875,1.875,0.625,1,2,1, 35, 4);
TradeYELLOWModel.addBoxByID("17", 0,1.875,0.625,0.3125,2,1, 35, 4);
TradeYELLOWModel.addBoxByID("18", 0.3125,1.875,0.625,0.6875,2,1, 35, 0);
TradeYELLOWModel.addBoxByID("19", 0.6875,1,0.6875,0.75,1.0625,0.75, 41);
TradeYELLOWModel.addBoxByID("20", 0.625,0.9375,0.625,0.8125,1,0.8125, 41);
TradeYELLOWModel.addBoxByID("21", 0.1875,0.625,0.5,0.8125,0.6875,0.875, 35, 1);
TradeYELLOWModel.addBoxByID("22", 0.125,0.1875,0.5,0.375,0.3125,0.875, 35, 3);
TradeYELLOWModel.addBoxByID("23", 0.625,0.1875,0.5,0.875,0.3125,0.875, 35, 5);
Furniture.addReplacementItem({id:"TradeYELLOW"},{id:"TradeYELLOW"}, Furniture.placeRotatableBlock(BlockID.TradeYELLOW, TradeYELLOWModel));

var guiTiyTradeYELLOW = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Yellow Trade"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 550, y: 75, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 155, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 215, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 275, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 550, y: 335, bitmap: "furnace_bar_background", scale: 3.2},
       
        {type: "bitmap", x: 450, y: 155, bitmap: "red_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 155, bitmap: "furnace_front_off", scale: 3.2},
       
        {type: "bitmap", x: 450, y: 215, bitmap: "green_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 215, bitmap: "chest_front", scale: 3.2},
       
        {type: "bitmap", x: 450, y: 285, bitmap: "blue_bumaga", scale: 3.2},
        {type: "bitmap", x: 650 , y: 285, bitmap: "crafting_table_front", scale: 3.2},
      
        {type: "bitmap", x: 450, y: 335, bitmap: "yellow_bumaga", scale: 3.2},
        {type: "bitmap", x: 650, y: 335, bitmap: "bed_white", scale: 3.2},
       
        {type: "bitmap", x: 750, y: 155, bitmap: "tradeYELLOW", scale: 12.8},
],
    
    elements: {
        "slotSource1": {type: "slot", x: 450, y: 75},
        "slotResult1": {type: "slot", x: 650, y: 75},
    }
});

Block.setShape(BlockID.TradeRED,0,0,0.5,1,1,1);
Block.setShape(BlockID.TradeGREEN,0,0,0.5,1,1,1);
Block.setShape(BlockID.TradeBLUE,0,0,0.5,1,1,1);
Block.setShape(BlockID.TradeYELLOW,0,0,0.5,1,1,1);