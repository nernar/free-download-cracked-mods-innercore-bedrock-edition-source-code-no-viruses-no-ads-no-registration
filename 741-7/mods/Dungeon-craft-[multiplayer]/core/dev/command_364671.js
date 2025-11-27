function getPlayer(name) {
    let arr = Network.getConnectedPlayers();
    for (let i in arr) {
        if (Entity.getNameTag(arr[i]) == name) {
            return arr[i];
        }
    }
}
if (config.debug.command && config.debug.enabled) {
    Callback.addCallback("NativeCommand", function (src) {
        let arr = src.split(" ");
        if (arr[0] == "/mana") {
            if (arr[1] == "set") {
                if (arr[2]) {
                    if (arr[3]) {
                        let player = getPlayer(arr[2]);
                        let mana = ManaCore.get(player);
                        if (mana.countMax <= parseInt(arr[3])) {
                            mana.countMax = parseInt(arr[3]);
                        }
                        mana.count = parseInt(arr[3]);
                        Mp.message(player, "\u0432\u0430\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0430\u043d\u044b - " + arr[3]);
                        ManaCore.set(player, mana);
                        Game.prevent();
                    }
                }
            }
            if (arr[1] == "setMax") {
                if (arr[2]) {
                    if (arr[3]) {
                        let player = getPlayer(arr[2]);
                        let mana = ManaCore.get(player);
                        if (mana.count >= parseInt(arr[3])) {
                            mana.count = parseInt(arr[3]);
                        }
                        mana.countMax = parseInt(arr[3]);
                        Mp.message(player, "\u0432\u0430\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0430\u043d\u044b - " + arr[3]);
                        ManaCore.set(player, mana);
                    }
                }
            }
            if (arr[1] == "delet") {
                if (arr[2]) {
                    if (arr[3]) {
                        let player = getPlayer(arr[2]);
                        ManaCore.create(player);
                        Mp.message(player, "\u0443 \u0432\u0430\u0441 \u0431\u044b\u043b\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043c\u0430\u043d\u044b");
                        ManaCore.set(player, mana);
                    }
                }
            }
        }
    });
}

