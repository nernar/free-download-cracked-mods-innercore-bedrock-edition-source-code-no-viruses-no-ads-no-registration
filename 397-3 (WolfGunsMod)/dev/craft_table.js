var CraftTableWindow = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Guns Workbench"}},
        inventory: {standart:true},
        background: {standart: true}
    },
    drawing: [{ type: "bitmap", bitmap: "gun_workbanch_bg", x: 600, y: 170, scale: 4 }],
    elements:{
        "inputSlot0":{x:350, y:80, type:"slot"},
        "inputSlot1":{x:410, y:80, type:"slot"},
        "inputSlot2":{x:470, y:80, type:"slot"},
        "inputSlot3":{x:530, y:80, type:"slot"},
        
        "inputSlot4":{x:350, y:140, type:"slot"},
        "inputSlot5":{x:410, y:140, type:"slot"},
        "inputSlot6":{x:470, y:140, type:"slot"},
        "inputSlot7":{x:530, y:140, type:"slot"},
        
        "inputSlot8":{x:350, y:200, type:"slot"},
        "inputSlot9":{x:410, y:200, type:"slot"},
        "inputSlot10":{x:470, y:200, type:"slot"},
        "inputSlot11":{x:530, y:200, type:"slot"},
        
        "inputSlot12":{x:350, y:260, type:"slot"},
        "inputSlot13":{x:410, y:260, type:"slot"},
        "inputSlot14":{x:470, y:260, type:"slot"},
        "inputSlot15":{x:530, y:260, type:"slot"},
        
        "outputSlot":{x:698, y:170, type:"slot", isValid:RecipeTE.outputSlotValid},
        
        "progressScale":{x: 600, y: 170, type:"scale",  bitmap: "gun_workbanch_scale", scale:4}
    }
});

IDRegistry.genBlockID("gun_craft_table");
Block.createBlock("gun_craft_table", [{
    name: "Guns Workbench", 
    texture: [
        ["work_table_bottom", 0], // bottom
        ["work_table_top", 0], // top
        ["work_table_side", 0], // back
        ["work_table_side", 1], // front
        ["work_table_side", 0], // left
        ["work_table_side", 0]  // right
    ], 
    inCreative: true 
}]) 

RecipeTE.registerGridCraftTable({
    name:"guns_workbench",
    rows:4,
    cols:4,
    timer:TICKS_IN_SECOND
});

TileEntity.registerPrototype(BlockID["gun_craft_table"], {
    defaultValues:{
        power:false
    },
    
    getGuiScreen: function(){
        return CraftTableWindow;
    },
    
    tick:function(){
        RecipeTE.getTickRecipes("guns_workbench", this, function(TE){
            return TE.data.power;
        });
    },
    
    redstone: function(params){
        if(supportEnergy == true) return;
        
        if(params.power < 10)
            this.data.power = false;
        else
            this.data.power = true;
    },
    
    /* For EnergyNet */
    energyReceive:function(energy, amount){
        if(amount >= ENERGY_CONSUMPTION){
            this.data.power = true;
            return ENERGY_CONSUMPTION;
        }else{
            this.data.power = false;
            return amount;
        }
    },
    
    canReceiveEnergy:function(s,t){
        return s != 1 && s != 0;
    }
});

Callback.addCallback("PostLoaded", function(){
    Recipes.addShaped({id: BlockID["gun_craft_table"], count: 1, data: 0}, [
        "sis",
        "ibi",
        "sis"
    ], ['s', 287, 0,'i', 265, 0, 'b', 42, 0]); 
    
    if(supportEnergy){
        ICRender.getGroup("ic-wire").add(BlockID["gun_craft_table"], -1);
        EnergyTileRegistry.addEnergyTypeForId(BlockID["gun_craft_table"], energyEU);
    }
});