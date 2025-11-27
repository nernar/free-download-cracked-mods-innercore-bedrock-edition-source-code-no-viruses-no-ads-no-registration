IMPORT("MachineRender");
IDRegistry.genBlockID("aetherFurnace");
Block.createBlockWithRotation("aetherFurnace",[{name:"Holystone Furnace",texture:[["holystone_brick",0],["holystonefurnace_top",0],["holystonefurnace_side",0],["offholystonefurnace_front",0],["holystonefurnace_side",0],["holystonefurnace_side",0]],inCreative:true}], "opaque");
/*
MachineRenderer.setStandartModel(BlockID.aetherFurnace, [["holystone_brick", 0], ["holystonefurnace_top", 0], ["holystonefurnace_side", 0], ["offholystonefurnace_front", 0], ["holystonefurnace_side", 0], ["holystonefurnace_side", 0]] true);
MachineRenderer.registerRenderModel(BlockID.aetherFurnace, [["holystone_brick", 0], ["holystonefurnace_top", 0], ["holystonefurnace_side", 0], ["onholystonefurnace_front", 1], ["holystonefurnace_side", 0], ["holystonefurnace_side", 0]] true);
*/
var FURNACE_FUEL_MAP = {5: 150, 6: 50, 17: 150, 263: 800, 280: 50, 268: 100, 269: 100, 270: 100, 271: 100, 85: 150, 107: 150, 134: 150, 135: 150, 158: 75, 162: 150, 163: 150, 164: 150, 184: 150, 185: 150, 186: 150, 187: 150, 53: 150, 54: 150, 58: 150};


var aetherFurnaceGUI = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Holystone Furnace"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 146, bitmap: "progf", scale: 3.2},
        {type: "bitmap", x: 450, y: 150, bitmap: "burnf", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "progo", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "burno", scale: 3.2},
        "slotSource": {type: "slot", x: 441, y: 75},
        "slotFuel": {type: "slot", x: 441, y: 212},
        "slotResult": {type: "slot", x: 625, y: 142},
    }
});

TileEntity.registerPrototype(BlockID.aetherFurnace, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return aetherFurnaceGUI;
    },
    
    addTransportedItem: function(self, item, direction){
        var fuelSlot = this.container.getSlot("slotFuel");
        if(FURNACE_FUEL_MAP[item.id] && (fuelSlot.id==0 || fuelSlot.id==item.id && fuelSlot.data==item.data && fuelSlot.count < 64)){
            var add = Math.min(item.count, 64 - slotFuel.count);
            item.count -= add;
            fuelSlot.id = item.id;
            fuelSlot.data = item.data;
            fuelSlot.count += add;
            if(!item.count){return;}
        }
        
        var sourceSlot = this.container.getSlot("slotSource");
        if(sourceSlot.id==0 || sourceSlot.id==item.id && sourceSlot.data==item.data && sourceSlot.count < 64){
            var add = Math.min(item.count, 64 - sourceSlot.count);
            item.count -= add;
            sourceSlot.id = item.id;
            sourceSlot.data = item.data;
            sourceSlot.count += add;
            if(!item.count){return;}
        }
    },
    
    getTransportSlots: function(){
        return {input: ["slotSource", "slotFuel"], output: ["slotResult"]};
    },
    
    tick: function(){
        var sourceSlot = this.container.getSlot("slotSource");
        var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
        if(result && this.data.burn > 0){
            var resultSlot = this.container.getSlot("slotResult");
            if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 90){
                sourceSlot.count--;
                resultSlot.id = result.id;
                resultSlot.data = result.data;
                resultSlot.count++;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
        else {
            this.data.progress = 0;
        }
        
        if(this.data.burn > 0){
            this.data.burn--;
        }
        else if(result){
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