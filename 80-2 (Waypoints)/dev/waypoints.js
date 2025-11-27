Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == 280 && Entity.getSneaking(Player.get()) && alertDebugValues) {
        Waypoint.alertAll();
    } else {
        if (item.id == 0 && handCanShowGui && Entity.getSneaking(Player.get())) {
            Waypoint.container.openAs(guiWaypoints);
        }
    }
});
var UIwindow;
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (screenName == "hud_screen" || screenName == "in_game_play_screen") {
        Waypoint.UIWindow.setAsGameOverlay(true);
        UIwindow = new UI.Container();
        UIwindow.openAs(Waypoint.UIWindow);
    } else {
        if (UIwindow) {
            UIwindow.close();
            UIwindow = null;
        }
    }
});

