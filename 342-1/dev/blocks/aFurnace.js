IDRegistry.genBlockID("aFurnace");
Block.createBlock("aFurnace", [{name: "Алхимическая печь", texture: [["aFurnacebottom", 0], ["aFurnacetop", 0], ["aFurnace", 0], ["aFurnace", 0], ["aFurnace1", 0], ["aFurnace", 0]], inCreative: true}]);


var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(0/16, 0/16, 0/16, 16/16, 16/16, 0/16, "aFurnace1", 0);

model.addBox(0/16, 0/16, 16/16, 16/16, 16/16, 16/16, "aFurnace1", 0);

model.addBox(0/16, 0/16, 0/16, 0/16, 16/16, 16/16, "aFurnace1", 0);

model.addBox(16/16, 0/16, 0/16, 16/16, 16/16, 16/16, "aFurnace", 0);




model.addBox(0/16, 0/16, 0/16, 16/16, 0.2/16, 16/16, "aFurnacebottom", 0);

model.addBox(0/16, 15.9/16, 0/16, 16/16, 16/16, 16/16, "aFurnacetop", 0);





render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.aFurnace, -1, render);
Block.setBlockShape(BlockID.aFurnace, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});

Recipes.addShaped({id: BlockID.aFurnace, count: 1, data: 0}, [ "aaa", "aba", "ccc"], ['a', ItemID.aquaturaingot, 0, 'b', 61, 0, 'c', ItemID.flisotuachewn, 0]);


var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiAF = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Алхимическая печь"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 246, bitmap: "aFsc", scale: 3.2},
        {type: "bitmap", x: 450, y: 250, bitmap: "aFire", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "aFsc1", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 250, direction: 1, value: 0.5, bitmap: "aFireSc", scale: 3.2},
        "slotSource1": {type: "slot", x: 379, y: 175},
        "slotSource2": {type: "slot", x: 503, y: 175},
        "slotSource3": {type: "slot", x: 410, y: 51},
        "slotSource4": {type: "slot", x: 472, y: 51},
        "slotSource5": {type: "slot", x: 410, y: 113},
        "slotSource6": {type: "slot", x: 472, y: 113},
        "slotFuel": {type: "slot", x: 441, y: 312},
        "slotResult": {type: "slot", x: 625, y: 242},
    }
});



    
var AF = {
    recipes: {},
  
   set: function(abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6, result){
      this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6){
     return this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6,])];
   }
};

/*RECIPES FOR MOBS FURNACE*/

//MobsRecipes.set(slot1, slot2, slot3, {id: resultat id, count: 1, data: 0});

AF.set(0, 0, ItemID.rustyingot, ItemID.rustyingot, 0, 0, {
    id: 265, count: 1, data: 0
});


AF.set(0, 0, 173, 173, 173, 173, {
    id: ItemID.graphit, count: 1, data: 0
});


AF.set(0, 0, ItemID.graphit, ItemID.graphit, ItemID.graphit, ItemID.graphit, {
    id: 264, count: 1, data: 0
});


/*THE END*/

TileEntity.registerPrototype(BlockID.aFurnace, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiAF;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        let source4 = this.container.getSlot("slotSource4");
        let source5 = this.container.getSlot("slotSource5");
        let source6 = this.container.getSlot("slotSource6");
        var resultSlot = this.container.getSlot("slotResult");
        let f = AF.get(source1.id,source2.id,source3.id, source4.id, source5.id, source6.id);
        if(this.data.burn > 0){
        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress ++ >= 150){
            source1.count--;
            source2.count--;
            source3.count--;
            source4.count--;
            source5.count--;
            source6.count--;
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