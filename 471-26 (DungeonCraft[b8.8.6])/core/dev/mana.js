var manaPlayer = {};
const manaDefult = {count: 0, countMax: 10000};
Network.addClientPacket("dc.read", function (packetData) {
    manaPlayer = packetData;
});
Callback.addCallback("PlayerChangedDimension", function (player, currentId, lastId) {
    ManaCore.read(player);
});
Saver.addSavesScope("mana", function read(scope) {
    manaPlayer = scope.manaPlayer || {};
}, function save() {
    return {manaPlayer: manaPlayer};
});
function delItem(player, item) {
    let pa = new PlayerActor(player);
    if (pa.getGameMode() == 0) {
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    }
}
var ManaCore = {create: function (player) {
    manaPlayer[player] = manaDefult;
}, read: function (player) {
    if (manaPlayer[player]) {
        let client = Network.getClientForPlayer(player);
        if (client != null) {
            client.send("dc.read", manaPlayer);
        }
    } else {
        this.create(player);
        let client = Network.getClientForPlayer(player);
        if (client != null) {
            client.send("dc.read", manaPlayer);
        }
    }
}, get: function (player) {
    if (manaPlayer[player]) {
        return {count: manaPlayer[player].count, countMax: manaPlayer[player].countMax};
    } else {
        this.create(player);
        return {count: manaPlayer[player].count, countMax: manaPlayer[player].countMax};
    }
}, set: function (player, obj) {
    if (manaPlayer[player]) {
        Callback.invokeCallback("wasteMana", player, {count: manaPlayer[player].count, countMax: manaPlayer[player].countMax}, obj);
    }
}};
Network.addServerPacket("dc.set", function (client, data) {
    manaPlayer = data;
});

