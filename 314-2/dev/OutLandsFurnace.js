var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiOLF = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Outlands furnace"}},
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



    
var OLF = {
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

OLF.set(BlockID.oldirt, 0, 0, {
    id: BlockID.olglass, count: 1, data: 0
});

/*THE END*/

TileEntity.registerPrototype(BlockID.olfurnace, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiOLF;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        var resultSlot = this.container.getSlot("slotResult");
        let f = OLF.get(source1.id,source2.id,source3.id);
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











//STAR ALTAR ??????????????????????????????????????????????


var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiSA = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Star Altar"}},
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



    
var SA = {
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

SA.set(ItemID.orihalksword, ItemID.orihalk, ItemID.olruby, {
    id: ItemID.rubysword, count: 1, data: 0
});

SA.set(ItemID.orihalkpickaxe, ItemID.orihalk, ItemID.olruby, {
    id: ItemID.rubypickaxe, count: 1, data: 0
});

SA.set(ItemID.orihalkaxe, ItemID.orihalk, ItemID.olruby, {
    id: ItemID.rubyaxe, count: 1, data: 0
});

SA.set(ItemID.orihalkshovel, ItemID.orihalk, ItemID.olruby, {
    id: ItemID.rubyshovel, count: 1, data: 0
});

SA.set(ItemID.orihalkhelmet, ItemID.orihalk, ItemID.olruby, {
    id: ItemID.rubyhelmet, count: 1, data: 0
});

SA.set(ItemID.orihalkchestplate, ItemID.orihalk, ItemID.olruby, {
    id: ItemID.rubychestplate, count: 1, data: 0
});

SA.set(ItemID.orihalkleggings, ItemID.orihalk, ItemID.olruby, {
    id: ItemID.rubyleggings, count: 1, data: 0
});

SA.set(ItemID.orihalkboots, ItemID.orihalk, ItemID.olruby, {
    id: ItemID.rubyboots, count: 1, data: 0
});


SA.set(ItemID.hpup3, ItemID.honey, ItemID.orihalk, {
    id: ItemID.hpup5, count: 1, data: 0
});

SA.set(ItemID.orihalk, 41, 57, {
    id: ItemID.starmaterial, count: 1, data: 0
});

SA.set(ItemID.goldenapplepotion, ItemID.starmaterial, 0, {
    id: ItemID.starpotion, count: 1, data: 0
});


SA.set(322, ItemID.starmaterial, 41, {
    id: ItemID.starapple, count: 1, data: 0
});





SA.set(ItemID.rubysword, ItemID.starmaterial, 0, {
    id: ItemID.starsword, count: 1, data: 0
});

SA.set(ItemID.rubypickaxe, ItemID.starmaterial, 0, {
    id: ItemID.starpickaxe, count: 1, data: 0
});

SA.set(ItemID.rubyaxe, ItemID.starmaterial, 0, {
    id: ItemID.staraxe, count: 1, data: 0
});

SA.set(ItemID.rubyshovel, ItemID.starmaterial, 0, {
    id: ItemID.starshovel, count: 1, data: 0
});

SA.set(ItemID.rubyhelmet, ItemID.starmaterial, 0, {
    id: ItemID.starhelmet, count: 1, data: 0
});

SA.set(ItemID.rubychestplate, ItemID.starmaterial, 0, {
    id: ItemID.starchestplate, count: 1, data: 0
});

SA.set(ItemID.rubyleggings, ItemID.starmaterial, 0, {
    id: ItemID.starleggings, count: 1, data: 0
});

SA.set(ItemID.rubyboots, ItemID.starmaterial, 0, {
    id: ItemID.starboots, count: 1, data: 0
});

/*THE END*/

TileEntity.registerPrototype(BlockID.staraltar, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiSA;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        var resultSlot = this.container.getSlot("slotResult");
        let f = SA.get(source1.id,source2.id,source3.id);
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




















