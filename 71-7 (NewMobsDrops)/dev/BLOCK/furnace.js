var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiTiyFurnace = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Mobs Furnace"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 450, y: 250, bitmap: "fire_background", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 250, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
        "slotSource1": {type: "slot", x: 379, y: 175},
        "slotSource2": {type: "slot", x: 441, y: 175},
        "slotSource3": {type: "slot", x: 503, y: 175},
        "slotFuel": {type: "slot", x: 441, y: 312},
        "slotResult": {type: "slot", x: 625, y: 242},
    }
});

IDRegistry.genBlockID("MobsFurnace");
Block.createBlock("MobsFurnace", [
	{name: "MobsFurnace", texture: [["quartz_block", 0]], inCreative: false},
	{name: "MobsFurnace", texture: [["quartz_block", 0]], inCreative: false},
	{name: "MobsFurnace", texture: [["quartz_block", 0]], inCreative: false},
	{name: "MobsFurnace", texture: [["quartz_block", 0]], inCreative: false}
], BLOCK_TYPE_LIGHT);
IDRegistry.genItemID("MobsFurnace");
Item.createItem("MobsFurnace", "MobsFurnace", {name: "MobsFurnace", meta: 0}, {stack: 64});

var MobsFurnaceModel = ModelAPI.newArray();
MobsFurnaceModel.addBoxByID ("1", 0.3125,0.0625,0.3125,0.6875,0.5625,0.6875, 51);
MobsFurnaceModel.addBoxByID ("2", 0.5625,0.375,0.6875,0.75,0.4375,0.75, 216);
MobsFurnaceModel.addBoxByID ("3", 0.375,0.25,0.6875,0.625,0.375,0.75, 216);
MobsFurnaceModel.addBoxByID ("4", 0.6875,0.4375,0.6875,0.75,0.5625,0.75, 216);
MobsFurnaceModel.addBoxByID ("5", 0.25,0.3125,0.25,0.3125,0.375,0.5625, 216);
MobsFurnaceModel.addBoxByID ("6", 0.4375,0.4375,0.6875,0.5625,0.5625,0.75, 216);
MobsFurnaceModel.addBoxByID ("7", 0.25,0.5625,0.6875,0.75,0.8125,0.75, 216);
MobsFurnaceModel.addBoxByID ("8", 0.6875,0.0625,0.6875,0.75,0.1875,0.75, 216);
MobsFurnaceModel.addBoxByID ("9", 0.3125,0.0625,0.25,0.6875,0.8125,0.3125, 216);
MobsFurnaceModel.addBoxByID ("10", 0.6875,0.0625,0.25,0.75,0.3125,0.6875, 216);
MobsFurnaceModel.addBoxByID ("11", 0.3125,0,0.3125,0.6875,0.0625,0.6875, 216);
MobsFurnaceModel.addBoxByID ("12", 0.3125,0.8125,0.3125,0.6875,0.875,0.6875, 216);
MobsFurnaceModel.addBoxByID ("13", 0.6875,0.375,0.25,0.75,0.8125,0.6875, 216);
MobsFurnaceModel.addBoxByID ("14", 0.25,0.4375,0.6875,0.3125,0.5625,0.75, 216);
MobsFurnaceModel.addBoxByID ("15", 0.25,0.0625,0.6875,0.3125,0.1875,0.75, 216);
MobsFurnaceModel.addBoxByID ("16", 0.375,0.0625,0.6875,0.4375,0.1875,0.75, 216);
MobsFurnaceModel.addBoxByID ("17", 0.5625,0.0625,0.6875,0.625,0.1875,0.75, 216);
MobsFurnaceModel.addBoxByID ("18", 0.25,0.375,0.25,0.3125,0.8125,0.6875, 216);
MobsFurnaceModel.addBoxByID ("19", 0.25,0.0625,0.25,0.3125,0.3125,0.6875, 216);
MobsFurnaceModel.addBoxByID ("20", 0.25,0.375,0.6875,0.4375,0.4375,0.75, 216);
MobsFurnaceModel.addBoxByID ("21", 0.6875,0.3125,0.25,0.75,0.375,0.5625, 216);
Furniture.addReplacementItem({id:"MobsFurnace"},{id:"MobsFurnace"}, Furniture.placeRotatableBlock(BlockID.MobsFurnace, MobsFurnaceModel));

var MobsRecipes = {
    recipes: {},
  
   set: function(abdulla1, abdulla2, abdulla3, result){
      this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla1, abdulla2, abdulla3){
     return this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])];
   }
};

/*RECIPES FOR MOBS FURNACE*/

//MobsRecipes.set(slot1, slot2, slot3, {id: resultat id, count: 1, data: 0});

MobsRecipes.set(ItemID.spider, ItemID.spider, ItemID.spider, {
    id: ItemID.spider_ingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.zombie, ItemID.zombie, ItemID.zombie, {
    id: ItemID.zombie_ingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.skelet, ItemID.skelet, ItemID.skelet, {
    id: ItemID.skelet_ingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.creeper, ItemID.creeper, ItemID.creeper, {
    id: ItemID.creeper_ingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.ocelota, ItemID.ocelota, ItemID.ocelota, {
    id: ItemID.ocelot_ingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.blaze, ItemID.blaze, ItemID.blaze, {
    id: ItemID.blaze_ingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.enderman, ItemID.enderman, ItemID.enderman, {
    id: ItemID.end_ingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.sprut, ItemID.sprut, ItemID.sprut, {
    id: ItemID.sprut_ingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.slime_crystal, ItemID.slime_crystal, ItemID.slime_crystal, {
    id: ItemID.slime_ingot, count: 1, data: 0
});

/*THE END*/

TileEntity.registerPrototype(BlockID.MobsFurnace, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiTiyFurnace;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        var resultSlot = this.container.getSlot("slotResult");
        let f = MobsRecipes.get(source1.id,source2.id,source3.id);
        if(this.data.burn > 0){
        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress ++ >= 150){
            source1.count--;
            source2.count--;
            source3.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        else {
            this.data.progress = 0;
        }
        if(this.data.burn > 0){
            this.data.burn--;
        }
        else if(f){
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 90);
    },
    
    getFuel: function(slotName){
        var fuelSlot = this.container.getSlot(slotName);
        if(fuelSlot.id > 0){
            var burn = FURNACE_FUEL_MAP[fuelSlot.id];
            if(burn){
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
            if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return 20000;
            }
        }
        return 0;
    }
});