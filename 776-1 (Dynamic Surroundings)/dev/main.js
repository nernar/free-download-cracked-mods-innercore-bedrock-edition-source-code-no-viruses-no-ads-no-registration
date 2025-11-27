alert("Dynamic Surrounding");
var media = new android.media.MediaPlayer();
Callback.addCallback("PlayerAttack", function (player) {
    var item = Player.getCarriedItem();
    if (item.id == 268) {
        media.reset();
        media.setDataSource(__dir__ + "Support/minecraft/Tools/sword_wooden.ogg");
        media.prepare();
        media.start();
    }
});
Callback.addCallback("PlayerAttack", function (player) {
    var item = Player.getCarriedItem();
    if (item.id == 272) {
        media.reset();
        media.setDataSource(__dir__ + "Support/minecraft/Tools/sword.ogg");
        media.prepare();
        media.start();
    }
});
Callback.addCallback("PlayerAttack", function (player) {
    var item = Player.getCarriedItem();
    if (item.id == 267) {
        media.reset();
        media.setDataSource(__dir__ + "Support/minecraft/Tools/sword.ogg");
        media.prepare();
        media.start();
    }
});
Callback.addCallback("PlayerAttack", function (player) {
    var item = Player.getCarriedItem();
    if (item.id == 283) {
        media.reset();
        media.setDataSource(__dir__ + "Support/minecraft/Tools/sword.ogg");
        media.prepare();
        media.start();
    }
});
Callback.addCallback("PlayerAttack", function (player) {
    var item = Player.getCarriedItem();
    if (item.id == 276) {
        media.reset();
        media.setDataSource(__dir__ + "Support/minecraft/Tools/sword.ogg");
        media.prepare();
        media.start();
    }
});
Callback.addCallback("PlayerAttack", function (player) {
    var item = Player.getCarriedItem();
    if (item.id == VanillaItemID.trident) {
        media.reset();
        media.setDataSource(__dir__ + "Support/minecraft/Tools/sword.ogg");
        media.prepare();
        media.start();
    }
});
Callback.addCallback("PlayerAttack", function (player) {
    var item = Player.getCarriedItem();
    if (item.id == VanillaItemID.netherite_sword) {
        media.reset();
        media.setDataSource(__dir__ + "Support/minecraft/Tools/sword.ogg");
        media.prepare();
        media.start();
    }
});

