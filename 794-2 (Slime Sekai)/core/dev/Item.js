IDRegistry.genItemID("beelzebub_skills");
Item.createThrowableItem("beelzebub_skills", "Beelzebub", {name: "beelzebub_skills", meta: 0}, {stack: 16});
IDRegistry.genItemID("hat_giong_ma_vuong");
Item.createItem("hat_giong_ma_vuong", "Demon King Seed \n Clicker", {name: "hat_giong_ma_vuong", meta: 0}, {isTech: false, stack: 1});
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.hat_giong_ma_vuong) {
        var player_pos = Player.getPosition();
        var emitter = new Particles.ParticleEmitter(player_pos.x, player_pos.y - 2.5, player_pos.z);
        emitter.setEmitRelatively(true);
        emitter.emit(particle_air, 0, 0, 0, 0, 0, 0.18, 0, 0, 0, 0);
        Player.setCarriedItem(item.id, item.count - 1, 0);
        le_hoi_thu_hoach.play();
        Entity.addEffect(Player.get(), Native.PotionEffect.blindness, 1, 20 * 15);
        Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 5, 20 * 25);
        Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 10, 20 * 25);
        Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 5, 20 * 25);
        Game.message("\xa7d Unlock Ultimate Skills");
        Game.message("\xa7d Ultimate Skills:...........");
        Game.message("Race: \xa7c Demon Slime");
        Game.tipMessage("\xa7a\xabUnLock Ultimate Skills\xbb");
    }
});

