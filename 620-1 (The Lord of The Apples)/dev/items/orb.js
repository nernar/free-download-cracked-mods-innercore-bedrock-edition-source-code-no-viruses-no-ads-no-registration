// [虚弱果珠]Weak Apple Orb
IDRegistry.genItemID("aporbWeak");
Item.createItem("aporbWeak","Weak Aporb",{name:"aporb_weak"},{stack:1,isTech:true});
Apple.registerOrb(ItemID.aporbWeak,500,32,0);

Callback.addCallback("EntityDeath",function(entity,attacker){
    if(attacker == Player.get() && entity == 45 && Math.random() < 0.5){
        World.drop(coords.x + 0.5,coords.y + 0.5,coords.z + 0.5,ItemID.aporbWeak,27);
    }
});

// [基础果珠]Base Apple Orb
IDRegistry.genItemID("aporb");
Item.createItem("aporb","Base Aporb",{name:"aporb"},{stack:1,isTech:true});
Apple.registerOrb(ItemID.aporb,1000,128,1);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.aporb,count:1,data:0},[
        " a ",
        "aba",
        " a "
    ],["a",ItemID.apgem,0,"b",ItemID.aporbWeak,-1],ChargeItemRegistry.transferEnergy);
});