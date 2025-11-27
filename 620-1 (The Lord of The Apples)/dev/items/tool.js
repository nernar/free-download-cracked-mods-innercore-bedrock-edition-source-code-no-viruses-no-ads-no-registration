ToolAPI.addToolMaterial("apple",{durability:165,level:2,efficiency:4,damage:2,enchantability:4});

// [果石剑]Apgem Sword
IDRegistry.genItemID("apgemSword");
Item.createItem("apgemSword","Apgem Sword",{name:"apgem_sword"},{stack:1});
ToolAPI.setTool(ItemID.apgemSword,"apple",ToolType.sword);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.apgemSword,count:1,data:0},["a","a","b"],["a",ItemID.apgem,0,"b",280,0]);
});

Callback.addCallback("EntityHurt",function(attacker){
    if(attacker == Player.get()){
        for(let slot = 0;slot <= 36;slot++){
            var inv = Player.getInventorySlot(slot);
            if(Apple.isOrb(inv.id)){
                ChargeItemRegistry.addEnergyTo(inv,"Au",10,10,1);
                Player.setInventorySlot(slot,inv.id,inv.count,inv.data,inv.extra);
                return;
            }
        }
    }
});