const WinWindow = new Window({content: {type: "frame", background: "black", childrens: [{type: "linear", gravity: "center", childrens: [{type: "text", id: "slicing", text: "4\n5\n6", size: 106, color: "white", gravity: "center", font: "minecraft"}, {type: "text", text: " AM", size: 106, color: "white", gravity: "center", font: "minecraft"}]}, {type: "linear", params: {width: "match", height: Ui.Display.HEIGHT / 2 - 52}, background: "black"}, {type: "linear", params: {width: "match", height: Ui.Display.HEIGHT / 2 - 53}, y: Ui.Display.HEIGHT / 2 + 53, background: "black"}]}, hooks: {onShow: function (scope) {
    var slicing = scope.findWidgetById("slicing").view, animate = android.view.animation.TranslateAnimation(0, 0, 0, -Ui.getY(106) - Ui.getFontMargin() * 2);
    animate.setAnimationListener({onAnimationEnd: function () {
        slicing.setY(slicing.getY() - Ui.getY(106) - Ui.getFontMargin() * 2);
        completeKidsSound.play();
    }});
    animate.setDuration(5000);
    slicing.startAnimation(animate);
}, onHide: function (scope) {
    var slicing = scope.findWidgetById("slicing").view;
    slicing.setY(slicing.getY() + Ui.getY(106) + Ui.getFontMargin() * 2);
}}});
const CompleteScene = new Scene({game: {tick: 9000}, hooks: {onRun: function (scope) {
    Robots.stop();
    ScreamScene.isRunned && ScreamScene.finish();
    if (!isDemo) {
        gameNight++;
    } else {
        if (gameNight < 3) {
            gameNight++;
        } else {
            scope.buyGame = true;
        }
    }
    saveGame();
    Entity.setMobile(Player.get(), false);
}, onTick: function (scope) {
    if (scope.tick == 1) {
        scope.handle(function () {
            Music.destroy();
            completeClockSound.play();
            TabletWindow.hide();
            WinWindow.show();
        });
    } else {
        scope.finish();
    }
}, onFinish: function (scope) {
    if (!scope.buyGame) {
        NightScene.run(function () {
            WinWindow.hide();
        });
    } else {
        delete scope.buyGame;
        DemoScene.run(function () {
            WinWindow.hide();
        });
    }
}}});

