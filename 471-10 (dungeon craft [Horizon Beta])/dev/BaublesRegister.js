const searchItem = function (id, data) {
    var dat = data || -1;
    var od = id || -1;
    for (var i = 0; i < 9; i++) {
        var item = Player.getInventorySlot(i);
        if ((item.id == od || (od == -1 && item.id != 0)) && (item.data == dat || dat == -1)) {
            return {id: item.id, data: item.data, extra: item.extra, count: item.count, slot: i};
        }
    }
};
Callback.addCallback("tick", function () {
    if (searchItem(ItemID.poic1)) {
        let flying = Player.getFlying();
        let velocity = Player.getVelocity();
        if (mana >= 1) {
            Player.setFlyingEnabled(true);
        }
        if (mana >= 1) {
            mana--;
        }
        if (mana < 1) {
            Player.setFlyingEnabled(false);
            Player.setVelocity(velocity.x, -0.1, velocity.z);
        }
    }
    if (!searchItem(ItemID.poic1)) {
        if (Game.getGameMode() == 0) {
            Player.setFlyingEnabled(false);
        }
        if (Game.getGameMode() == 1) {
            Player.setFlyingEnabled(true);
        }
    }
});
Callback.addCallback("tick", function () {
    if (searchItem(ItemID.amylet)) {
        if (mana >= 1) {
            Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 20, 20, false, false);
            mana -= 1;
        }
    }
    if (!searchItem(ItemID.amylet)) {
        Entity.clearEffect(Player.get(), 13);
    }
});

