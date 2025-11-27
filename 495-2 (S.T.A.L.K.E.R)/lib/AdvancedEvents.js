LIBRARY({name: "AdvancedEvents", version: 1.1, shared: true, api: "CoreEngine"});
var oldItem = {id: 0}, oldSlot = 0, currentScreen = "null", levelLoaded = false;
Callback.addCallback("LevelLoaded", function () {
    levelLoaded = true;
});
Callback.addCallback("LevelLeft", function () {
    levelLoaded = false;
});
Callback.addCallback("NativeGuiChanged", function (a) {
    switch (a) {
      case "play_screen - worlds":
        currentScreen = "not_in_game";
        break;
      case "hud_screen":
      case "in_game_play_screen":
        if (currentScreen != "not_in_game" && currentScreen != "hud_screen") {
            oldItem = {id: 0};
        }
        currentScreen = "hud_screen";
        break;
      default:
        currentScreen = a;
        break;
    }
});
Callback.addCallback("tick", function () {
    let newItem = Player.getCarriedItem();
    let newSlot = Player.getSelectedSlotId();
    if (currentScreen == "hud_screen" || currentScreen == "null" && levelLoaded == true) {
        if (newItem.id != oldItem.id) {
            Callback.invokeCallback("ChangeCarriedItem", newItem, oldItem, newSlot, oldSlot);
        } else {
            if (newSlot != oldSlot) {
                Callback.invokeCallback("ChangeCarriedItem", newItem, oldItem, newSlot, oldSlot);
            }
        }
        oldItem = newItem;
        oldSlot = newSlot;
    }
});
var inventory = [];
Callback.addCallback("LevelLoaded", function () {
    for (var i = 0; i < 36; i++) {
        var slot = i + 9;
        inventory[i] = Player.getInventorySlot(slot);
    }
});
Callback.addCallback("LevelLeft", function () {
    inventory = [];
});
Callback.addCallback("tick", function () {
    thread(function () {
        for (var i = 0; i < 36; i++) {
            var slot = i + 9;
            var inv = Player.getInventorySlot(slot);
            var _inv = inventory[i];
            if (inv.id != _inv.id || inv.count != _inv.count || inv.data != _inv.data) {
                Callback.invokeCallback("ChangeItemInInventory", slot, inv, _inv);
            }
            inventory[i] = inv;
        }
    }, "ChangeItemInInventory");
});
function thread(call, name) {
    if (!name) {
        name = "";
    } else {
        name = "_" + name;
    }
    name = "InnerCore_AdvancedEvents" + name;
    new java.lang.Thread(new java.lang.Runnable({run: function () {
        call();
    }}), name).start();
}

