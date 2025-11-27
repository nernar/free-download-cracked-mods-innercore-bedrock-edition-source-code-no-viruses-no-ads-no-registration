Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.luhsamhelmet && chest.id == ItemID.luhsamchestplate && legs.id == ItemID.luhsamleggings && boots.id == ItemID.luhsamboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 1, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 1, 100)
    }
    
    
    
    if (boots.id == ItemID.DirtusBoots) {
    	World.setBlock(pos.x, pos.y-2, pos.z, 2);
    World.setBlock(pos.x, pos.y-2, pos.z-1, 2);
    World.setBlock(pos.x, pos.y-2, pos.z+1, 2);
    World.setBlock(pos.x+1, pos.y-2, pos.z, 2);
    World.setBlock(pos.x-1, pos.y-2, pos.z, 2);
    World.setBlock(pos.x-1, pos.y-2, pos.z-1, 2);
    World.setBlock(pos.x+1, pos.y-2, pos.z+1, 2);
    World.setBlock(pos.x+1, pos.y-2, pos.z-1, 2);
    World.setBlock(pos.x-1, pos.y-2, pos.z+1, 2);
    }
    
    
    if (helmet.id == ItemID.bloodhelmet && chest.id == ItemID.bloodchestplate && legs.id == ItemID.bloodleggings && boots.id == ItemID.bloodboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 10, 100)
    }
    
    
    if (helmet.id == ItemID.birdhelmet && chest.id == ItemID.birdchestplate && legs.id == ItemID.birdleggings && boots.id == ItemID.birdboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 10, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 10, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 10, 100)
    }
    
    	
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});