var Apple = {
    apples:{},
    bricks:{},

    orbIDs:{},
    appleIDs:{},

    registerAppleCallback:function(id,state){
        if(!this.apples[id]) this.apples[id] = {}
        this.apples[id].callback = state;
    },

    getAppleCallback:function(id){
        var data = this.apples[id];
        if(data && data.callback) return data.callback();
    },

    getStoneBricks:function(x,y,z,level){
        var block = World.getBlock(x,y,z);
        return this.bricks[block.id + ":" + block.data] >= level?true:false;
    },

    registerStoneBricks:function(id,level,data){
        this.bricks[id + ":" + (data || 0)] = (level || 1);

        ItemName.registerTooltipAddFunction(id,function(item){
            return Translation.translate("Level: ") + Apple.bricks[item.id + ":" + item.data];
        });
    },

    isApple:function(id){
        return this.appleIDs[id];
    },

    isOrb:function(id){
        return this.orbIDs[id];
    },

    getEnergyByApple:function(id){
        return this.apples[id].energy || 0;
    },

    registerApple:function(id,energy){
        if(!this.apples[id]) this.apples[id] = {}
        
        this.appleIDs[id] = true;
        this.apples[id].energy = energy || 0;

        Item.addCreativeGroup("apple",Translation.translate("Apple"),[id]);
    },

    registerOrb:function(id,stored,limit,level){
        ChargeItemRegistry.registerExtraItem(id,"Au",stored,limit,level,"storage",true,true);

        Item.addCreativeGroup("orb",Translation.translate("Orb"),[id]);
        this.orbIDs[id] = true;
        
        ItemName.registerTooltipAddFunction(id,function(item){
            return Translation.translate("Level: ") + ChargeItemRegistry.chargeData[item.id].level;
        });
        
        ItemName.registerTooltipAddFunction(id,function(item){
            return Translation.translate("Energy: ") + ChargeItemRegistry.getEnergyStored(item,"Au") + "/" + ChargeItemRegistry.getMaxCharge(item.id,"Au") + "Au";
        });
    }
}

Callback.addCallback("FoodEaten",function(food,ratio){
    var item = Player.getCarriedItem();
    if(Apple.isApple(item.id)){
        for(let slot = 0;slot <= 36;slot++){
            var inv = Player.getInventorySlot(slot);
            if(Apple.isOrb(inv.id)){
                var apple = Apple.getEnergyByApple(item.id);
                ChargeItemRegistry.addEnergyTo(inv,"Au",apple,apple,1);
                Player.setInventorySlot(slot,inv.id,inv.count,inv.data,inv.extra);
                return;
            }
        }
    }

    Apple.getAppleCallback(item.id);
});