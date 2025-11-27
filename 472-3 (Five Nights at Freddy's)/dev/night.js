const NightWindow = new Window({content: {type: "linear", orientate: "vertical", background: "black", gravity: "center", childrens: [{type: "text", text: "12:00 AM", size: 48, color: "white", gravity: "center", font: "minecraft"}, {type: "text", id: "night", size: 48, color: "white", gravity: "center", font: "minecraft"}]}, hooks: {onUpdate: function (scope) {
    var night = scope.findWidgetById("night");
    if (gameNight == 1) {
        night.setText("1st Night");
    } else {
        if (gameNight == 2) {
            night.setText("2nd Night");
        } else {
            if (gameNight == 3) {
                night.setText("3rd Night");
            } else {
                if (gameNight < 8) {
                    night.setText(gameNight + "th Night");
                } else {
                    throw new Error("Night value cannot be > 7");
                }
            }
        }
    }
    OverlayWindow.hide();
}}});
const NightScene = new Scene({game: {tick: 3250}, hooks: {onRun: function (scope) {
    scope.handle(function () {
        NightWindow.show();
        blipSound.play();
    });
}, onTick: function (scope) {
    if (scope.tick == 1) {
        gameTime = 0;
        Office.active = [];
        Office.procent = 99.9;
        if (!isCreative) {
            Office.update();
            updateLightning();
        }
    } else {
        scope.finish();
    }
}, onFinish: function (scope) {
    scope.handle(function () {
        TabletWindow.hide();
        startNight();
    });
}}});

