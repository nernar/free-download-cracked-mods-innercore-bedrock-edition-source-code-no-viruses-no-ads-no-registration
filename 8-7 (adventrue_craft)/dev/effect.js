Callback.addCallback("PlayerAttack", function (player, victim) {
    var item = Player.getCarriedItem();
    if (item.id == ItemID.timeSword) {
        Entity.addEffect(victim, MobEffect.movementSlowdown, 10, 6000);
    }
});

