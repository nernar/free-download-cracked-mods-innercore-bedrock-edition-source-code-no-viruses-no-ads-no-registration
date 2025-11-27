const searchItem = function (id, data, playeru) {
    var dat = data || -1;
    var od = id || -1;
    for (var i = 0; i < 9; i++) {
        var player = new PlayerActor(playeru);
        var item = player.getInventorySlot(i);
        if ((item.id == od || (od == -1 && item.id != 0)) && (item.data == dat || dat == -1)) {
            return {id: item.id, data: item.data, extra: item.extra, count: item.count, slot: i};
        }
    }
};
Callback.addCallback("ServerPlayerTick", function (player, isPlayerDead) {
    if (World.getThreadTime() % 20 == 0) {
        let mana = ManaCore.get(player);
        if (searchItem(ItemID.amylet, 0, player)) {
            if (mana.count >= 20) {
                Entity.addEffect(player, Native.PotionEffect.waterBreathing, 20, 20, false, false);
                mana.count -= 20;
            }
        } else {
            Entity.clearEffect(player, 13);
        }
    }
});

