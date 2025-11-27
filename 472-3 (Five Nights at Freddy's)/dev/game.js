const startNight = function () {
    try {
        TabletWindow.updateContainer();
        Entity.setPosition(Player.get(), 47.5, 7, 6.5);
        Entity.setLookAngle(Player.get(), 0, 0);
        Entity.setMobile(Player.get(), true);
        Player.setCameraEntity(Player.get());
        ambienceSound.play();
        officeBackgroundSound.play();
        prescBackgroundSound.play();
        Music.Source.updateVolume();
        if (Debug.logicEnabled) {
            Robots.update();
            Robots.continue();
            Cameras.update();
            TabletButton.show();
            var next = Cameras.findCameraById("1A");
            TabletWindow.setLocation(next.id);
            Cameras.current = "1A";
            Robots.create("bonnie");
            bonnieGoingSound.setEntity(Robots.property.bonnie.entity, 15);
            Robots.ai.bonnie.scream.setEnabled(false);
            Robots.create("chica");
            chicaGoingSound.setEntity(Robots.property.chica.entity, 15);
            Robots.ai.chica.scream.setEnabled(false);
            Robots.create("freddy");
            freddyLaughSound.setEntity(Robots.property.freddy.entity, 30);
            freddyGoingSound.setEntity(Robots.property.freddy.entity, 15);
            whisperingSound.setEntity(Robots.property.freddy.entity, 10);
            Robots.ai.freddy.scream.setEnabled(false);
            Robots.create("foxy");
            foxySongSound.setEntity(Robots.property.foxy.entity, 8);
            foxyGoingSound.setEntity(Robots.property.foxy.entity, 12);
            foxyRunningSound.setEntity(Robots.property.foxy.entity, 15);
            Robots.ai.foxy.scream.setEnabled(false);
            Robots.ai.foxy.attempts = 0;
            switch (gameNight) {
              case 1:
                Robots.ai.bonnie.active = Robots.ai.chica.active = Robots.ai.foxy.active = Robots.ai.freddy.active = 0;
                break;
              case 2:
                Robots.ai.bonnie.active = 3;
                Robots.ai.chica.active = Robots.ai.foxy.active = 1;
                Robots.ai.freddy.active = 0;
                break;
              case 3:
                Robots.ai.bonnie.active = 0;
                Robots.ai.chica.active = 5;
                Robots.ai.foxy.active = 2;
                Robots.ai.freddy.active = 1;
                break;
            }
            if (gameNight < 6) {
                var suffix = Options.getValue("game_language") == "ru_RU" ? "_ru" : "";
                phoneGuySound.setSource("phone/phone" + gameNight + suffix + ".mp3");
                phoneGuySound.play();
            }
            GameScene.run();
        } else {
            NightWindow.hide();
        }
    }
    catch (e) {
        reportError(e);
    }
};
const releaseAll = function () {
    try {
        Window.dismiss();
        Music.destroy();
        Scene.destroy();
        if (isDevelop) {
            removeMenu();
            removeButton();
        }
    }
    catch (e) {
        reportError(e);
    }
};
const buildAll = function () {
    try {
        TabletWindow.create();
        TabletButton.create();
        TabletSwitch.create();
        HallucinationWindow.create();
        OverlayWindow.create();
        NightWindow.create();
        WinWindow.create();
        DemoWindow.create();
        FailedWindow.create();
        CreepyStartWindow.create();
        CreepyEndWindow.create();
        Scene.prepare();
        Action.prepare();
        isDevelop && createButton();
        if (isDevelop || isDebug) {
            LogWindow.create();
        }
        Debug.showLog && LogWindow.show();
    }
    catch (e) {
        reportError(e);
    }
};
var isCorrectWorld = null;
Callback.addCallback("LevelSelected", function (nameWorld, dirWorld) {
    context.runOnUiThread(function () {
        try {
            if (nameWorld == "\xa7lFreddy Fazbear's") {
                isCorrectWorld = true;
                handle(function () {
                    buildAll();
                }, 2000);
                Debug.showButton = !java.lang.Boolean.parseBoolean(__config__.access("interface.hide_tablet_button") || true);
                if (isDebug) {
                    Debug.showLog = java.lang.Boolean.parseBoolean(__config__.access("interface.show_debug_log_window") || false);
                }
                WarningWindow.create();
                WarningWindow.show();
            } else {
                isCorrectWorld = false;
            }
        }
        catch (e) {
            reportError(e);
        }
    });
});
Callback.addCallback("LevelLoaded", function () {
    context.runOnUiThread(function () {
        try {
            if (isCorrectWorld) {
                if (!isCreative) {
                    if (random(1, 1000) == 1) {
                        CreepyStartScene.run();
                    } else {
                        EnterScene.run();
                    }
                    World.setNightMode(false);
                    setupBlocks();
                }
                WarningWindow.dismiss();
            }
        }
        catch (e) {
            reportError(e);
        }
    });
});
Callback.addCallback("LevelLeft", function () {
    context.runOnUiThread(function () {
        try {
            isCorrectWorld && releaseAll();
            isCorrectWorld = null;
        }
        catch (e) {
            reportError(e);
        }
    });
});
Callback.addCallback("DestroyBlockStart", function (coords, block, player) {
    isCorrectWorld && !isDevelop && !isCreative && Game.prevent();
});
Callback.addCallback("EntityHurt", function (attacker, victim, damage) {
    isCorrectWorld && !isDevelop && !isCreative && Game.prevent();
});

