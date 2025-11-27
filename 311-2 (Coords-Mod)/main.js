var container = new UI.Container();
var CoordsUI = new UI.Window({location: {x: 820, y: 80, width: 180, height: 35}, drawing: [{type: "color", color: android.graphics.Color.argb(1, 1, 1, 1)}], elements: {"CoordsTxt": {type: "text", x: 1, y: 1, width: 0, height: 0, size: 70, color: android.graphics.Color.rgb(255, 255, 255)}}});
CoordsUI.setAsGameOverlay(true);
Callback.addCallback("tick", function () {
    container.setText("CoordsTxt", "Position: " + Math.floor(Player.getPosition().x) + ", " + Math.floor(Player.getPosition().y) + ", " + Math.floor(Player.getPosition().z));
});
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (screenName == "hud_screen" || screenName === "in_game_play_screen") {
        container.openAs(CoordsUI);
    } else {
        container.close();
    }
});

