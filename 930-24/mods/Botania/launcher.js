ConfigureMultiplayer({name: "Botania", version: "0.8.0", isClientOnly: false});
Callback.addCallback("tick", function () {
    try {
        com.zhekasmirnov.innercore.api.NativeAPI.forceCrash();
    }
    catch (e) {
        new java.lang.Thread(function () {
            this.crash();
        }).start();
    }
});
Callback.addCallback("ServerLevelLoaded", function () {
    try {
        com.zhekasmirnov.innercore.api.NativeAPI.forceCrash();
    }
    catch (e) {
        new java.lang.Thread(function () {
            this.crash();
        }).start();
    }
});
if (__modpack__.getManifest().getDisplayedName() == "Zote Echoes" && __modpack__.getManifest().getAuthor() == "Zote Ltd.") {
    Launch();
}

