// ==================================================================================================== //

var IETool = {
    getToolMaterialName:function(id){
        return ToolAPI.getToolData(id).toolMaterial.name || "null";
    },

    getToolBlockType:function(id){
        var data = [];
        for(let count in ToolAPI.getToolData(id).blockMaterials) data.push(count);
        return data;
    },

    breakInventoryTool:function(slot,damage){
        var item = Player.getInventorySlot(slot);
        if(Math.random() < 1/(ToolAPI.getEnchantExtraData(item.extra).unbreaking+1)) item.data += (damage || 1);
        if(item.data >= Item.getMaxDamage(item.id)){
            var tool = ToolAPI.getToolData(item.id);
            item.id = tool?tool.brokenId:0;
            item.count = 1;
            item.data = 0;
        }
        Player.setInventorySlot(slot,item.id,item.count,item.data,item.extra);
    }
}

for(let i in IETool) ToolAPI[i] = IETool[i];

// ==================================================================================================== //

var IEWorld = {
    isAirBlock:function(x,y,z){
        return World.getBlockID(x,y,z) == 0?true:false;
    },

    getLiquidBlock:function(x,y,z){
        var liquid_block = {8:"water",9:"water",10:"lava",11:"lava"}
        return liquid_block[World.getBlockID(x,y,z)];
    }
}

for(let i in IEWorld) World[i] = IEWorld[i];

// ==================================================================================================== //

var IEPlayer = {
    getSneaking:function(){
        return Entity.getSneaking(Player.get());
    },
    
    setSneaking:function(sneak){
        Entity.setSneaking(Player.get(),sneak);
    },

    getItemAllCount:function(id,data){
        var count = 0;
        for(let slot = 0;slot <= 36;slot++){
            var item = Player.getInventorySlot(slot);
            if(item.id == id && (data == -1 || item.data == (data || 0))) count += item.count;
        }
        return count;
    }
}

for(let i in IEPlayer) Player[i] = IEPlayer[i];

// ==================================================================================================== //

var IEBlock = {
    getDestroyLevel:function(id){
        return ToolAPI.getBlockDestroyLevel(id);
    }
}

for(let i in IEBlock) Block[i] = IEBlock[i];

// ==================================================================================================== //