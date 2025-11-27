Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();

if (helmet.id == ItemID.zombie_helmet && chest.id == ItemID.zombie_chestplate && legs.id == ItemID.zombie_leggings && boots.id == ItemID.zombie_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 5, 3);
   }

if (helmet.id == ItemID.skelet_helmet && chest.id == ItemID.skelet_chestplate && legs.id == ItemID.skelet_leggings && boots.id == ItemID.skelet_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.slow_falling, 5, 3);
   }

if (helmet.id == ItemID.spider_helmet && chest.id == ItemID.spider_chestplate && legs.id == ItemID.spider_leggings && boots.id == ItemID.spider_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.nightVision, 5, 3);
    Entity.addEffect(Player.get(), Native.PotionEffect.slow_falling, 5, 3);
   }

if (helmet.id == ItemID.creeper_helmet && chest.id == ItemID.creeper_chestplate && legs.id == ItemID.creeper_leggings && boots.id == ItemID.creeper_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 25, 3);
 Entity.addEffect(Player.get(), Native.PotionEffect.heal, 10, 3);
  }

if (helmet.id == ItemID.sprut_helmet && chest.id == ItemID.sprut_chestplate && legs.id == ItemID.sprut_leggings && boots.id == ItemID.sprut_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 10, 3);
 Entity.addEffect(Player.get(), Native.PotionEffect.heal, 10, 3);
Entity.addEffect(Player.get(), Native.PotionEffect.conduit_power, 10, 3);
  }

if (helmet.id == ItemID.slime_helmet && chest.id == ItemID.slime_chestplate && legs.id == ItemID.slime_leggings && boots.id == ItemID.slime_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 5, 3);
 Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 5, 3);
Entity.addEffect(Player.get(), Native.PotionEffect.slow_falling, 5, 3);
  }

if (helmet.id == ItemID.ocelot_helmet && chest.id == ItemID.ocelot_chestplate && legs.id == ItemID.ocelot_leggings && boots.id == ItemID.ocelot_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 10, 3);
 Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 10, 3);
Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 10, 3);
  }

if (helmet.id == ItemID.blaze_helmet && chest.id == ItemID.blaze_chestplate && legs.id == ItemID.blaze_leggings && boots.id == ItemID.blaze_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 25, 3);
    Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 25, 3);
Entity.addEffect(Player.get(), Native.PotionEffect.healthBoost, 25, 3);
Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 25, 3);
   }
   
if (helmet.id == ItemID.end_helmet && chest.id == ItemID.end_chestplate && legs.id == ItemID.end_leggings && boots.id == ItemID.end_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.invisibility, 3, 3);
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 15, 3);
    Entity.addEffect(Player.get(), Native.PotionEffect.healthBoost, 25, 3);
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 25, 3);
   }
});