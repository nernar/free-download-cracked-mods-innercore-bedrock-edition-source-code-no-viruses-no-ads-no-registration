LIBRARY({name: "AdvancedEvents", version: 1, shared: true, api: "CoreEngine"});
var oldItem = {id: 0}, oldSlot = 0, currentScreen = "null";
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
    if (currentScreen == "hud_screen" || currentScreen == "null") {
        if (Player.getCarriedItem().id != oldItem.id) {
            Callback.invokeCallback("ChangeCarriedItem", Player.getCarriedItem(), oldItem);
        } else {
            if (Player.getSelectedSlotId() != oldSlot) {
                Callback.invokeCallback("ChangeCarriedItem", Player.getCarriedItem(), oldItem);
            }
        }
        oldItem = Player.getCarriedItem();
        oldSlot = Player.getSelectedSlotId();
    }
});

