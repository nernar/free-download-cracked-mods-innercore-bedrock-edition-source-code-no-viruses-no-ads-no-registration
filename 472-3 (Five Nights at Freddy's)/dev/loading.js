const showHint = function (hint, color) {
    context.runOnUiThread(function () {
        try {
            log("Toast", hint);
            var text = new android.widget.TextView(context);
            text.setTextColor(color + "" != "undefined" ? color : Ui.Color.GREEN);
            typeof hint != "undefined" && text.setText("" + hint);
            text.setTextSize(Ui.getFontSize(18));
            text.setTypeface(getTypeface());
            var toast = new android.widget.Toast(context);
            toast.setView(text);
            toast.show();
        }
        catch (e) {
            reportError(e);
        }
    });
};
try {
    MCSystem.setLoadingTip("Loading Resources");
    AssetFactory.loadAsset("minecraftFont", "Minecraft 1.1.ttf");
    AssetFactory.loadAsset("headerFont", "PCPaintSmallBold.ttf");
    isDevelop && Debug.modelPlacer && Files.createFile(__dir__ + ".idea", "coords.js");
}
catch (e) {
    reportError(e);
}
try {
    if (!isCreative) {
        MCSystem.setLoadingTip("Unpacking World");
        Files.deleteDir(Dirs.external + Dirs.worlds + "/Freddy Fazbear's");
        var cache = new java.io.File(__dir__ + "assets/world.zip");
        Archives.unpack(cache, Dirs.external + Dirs.worlds);
    }
}
catch (e) {
    reportError(e);
}
try {
    MCSystem.setLoadingTip("Loading UI Resources");
    ImageFactory.loadFromFile("cameraActived", "tablet/actived.png").compress(1, 4);
    ImageFactory.loadFromFile("cameraButton", "tablet/button.png").compress(0.6, 3);
    ImageFactory.loadFromFile("cameraBackground", "tablet/background.png").compress(0.4, 1.2);
    for (var i = 0; i < 2; i++) {
        ImageFactory.loadFromFile("cameraSelected" + i, "tablet/selected_" + i + ".png").compress(1, 4);
        ImageFactory.loadFromFile("cameraContainer" + i, "tablet/container_" + i + ".png").compress(0.8, 2);
        ImageFactory.loadFromFile("creepyStart" + i, "game/creepystart_" + i + ".jpg").compress(0.4, 1.2);
    }
    for (var i = 0; i < 4; i++) {
        ImageFactory.loadFromFile("hallucination" + i, "game/hallucination_" + i + ".jpg").compress(0.4, 1.2);
    }
    for (var i = 0; i < 11; i++) {
        ImageFactory.loadFromFile("tablet" + i, "tablet/switch/tablet_" + i + ".png").compress(0.4, 1.2);
    }
    for (var i = 0; i < 8; i++) {
        ImageFactory.loadFromFile("noise" + i, "noise/noise_" + i + ".png").compress(2, 5);
    }
    for (var i = 0; i < Cameras.cameras.length; i++) {
        var camera = Cameras.cameras[i].id;
        ImageFactory.loadFromFile("camera" + camera, "tablet/names/" + camera + ".png").compress(1.2, 4);
    }
    ImageFactory.loadFromFile("gameOver", "game/failed.jpg").compress(0.4, 1.2);
    ImageFactory.loadFromFile("creepyEnd", "game/creepyend.jpg").compress(0.4, 1.2);
}
catch (e) {
    reportError(e);
}
try {
    MCSystem.setLoadingTip("Preparing Sounds");
    officeDangerSound = new Music("events/scare.mp3");
    officeDoorSound = new Music("office/bible.mp3");
    officeDisabledSound = new Music("office/error.mp3");
    officeLightningSound = new Music("office/hum.mp3");
    officeLightningSound.setLooping(true);
    officeLightningSound.setRadius(8);
    freddyNoseSound = new Music("party/nose.mp3");
    kitchenNoiseSound = new Music("events/drawe1.mp3");
    kitchenNoiseSound.randomizeSource(function () {
        var drawe = random(5) == 0 ? 3 : random(1, 4);
        return "events/drawe" + drawe + ".mp3";
    });
    kitchenNoiseSound.updateVolume(function () {
        return Robots.ai.chica.location == "kitchen" || Robots.ai.freddy.location == "kitchen" ? 100 : 0;
    });
    powerDownSound = new Music("events/power.mp3");
    musicBoxSound = new Music("party/box.mp3");
    musicBoxSound.resizeSource(6);
    musicBoxSound.setRadius(12);
    breathSound = new Music("children/breath1.mp3");
    breathSound.randomizeSource(function () {
        return "children/breath" + random(1, 4) + ".mp3";
    });
    laughSound = new Music("children/laugh.mp3");
    screamSound = new Music("robotic/scream.mp3");
    poundingSound = new Music("events/pounding.mp3");
    bassScreamSound = new Music("robotic/xscream.mp3");
    completeClockSound = new Music("events/clock.mp3");
    completeKidsSound = new Music("events/winner.mp3");
    circusSound = new Music("party/circus.mp3");
    circusSound.setVolume(5);
    whisperingSound = new Music("robotic/whis.mp3");
    bonnieGoingSound = new Music("steps/going.mp3");
    chicaGoingSound = new Music("steps/going.mp3");
    freddyGoingSound = new Music("steps/faster.mp3");
    freddyLaughSound = new Music("steps/laugh1.mp3");
    freddyLaughSound.randomizeSource(function () {
        return "steps/laugh" + random(1, 3) + ".mp3";
    });
    foxyGoingSound = new Music("steps/going.mp3");
    foxyRunningSound = new Music("steps/running.mp3");
    foxyKnockSound = new Music("steps/knock.mp3");
    foxyKnockSound.setBlock(50, 5, 8, 10);
    foxySongSound = new Music("party/pirate.mp3");
    foxySongSound.setVolume(25);
    robotVoiceSound = new Music("robotic/voice.mp3");
    robotVoiceSound.setLooping(true);
    tabletOpenSound = new Music("tablet/inject.mp3");
    tabletEjectSound = new Music("tablet/eject.mp3");
    tabletEjectSound.setLooping(true);
    blipSound = new Music("manage/choose.mp3");
    tabletCloseSound = new Music("tablet/down.mp3");
    prescBackgroundSound = new Music("background/presc.mp3");
    prescBackgroundSound.setLooping(true);
    prescBackgroundSound.setVolume(50);
    officeBackgroundSound = new Music("background/fan.mp3");
    officeBackgroundSound.setBlock(46, 6, 11, 8);
    officeBackgroundSound.setLooping(true);
    officeBackgroundSound.setVolume(35);
    powerBackgroundSound = new Music("background/power.mp3");
    powerBackgroundSound.setVolume(50);
    ambienceSound = new Music("background/ambience.mp3");
    ambienceSound.updateVolume(function () {
        var volume = 0;
        if (Robots.ai.bonnie.path || Robots.ai.bonnie.location == "door") {
            volume += 25;
        }
        if (Robots.ai.chica.path || Robots.ai.chica.location == "door") {
            volume += 25;
        }
        if (Robots.ai.freddy.location == "door" || Robots.ai.freddy.location == "office") {
            volume += 25;
        }
        if (Robots.ai.foxy.location != "cove" && Robots.ai.foxy.location != "stage") {
            volume += 25;
        }
        return volume;
    });
    phoneGuySound = new Music("phone/phone1.mp3");
    phoneGuySound.setBlock(45, 6, 11, 10);
    isDevelop && screamSound.setVolume(5);
}
catch (e) {
    reportError(e);
}
var restartRequired = false;
var restartError = null;
try {
    MCSystem.setLoadingTip("Applying Settings");
    if (Options.getValue("gfx_hidegui") != "1" || Options.getValue("audio_music") != "0" || Options.getValue("gfx_gamma") != "0.5") {
        restartRequired = true;
    }
    Options.setValue("gfx_hidegui", "1");
    Options.setValue("audio_music", "0");
    Options.setValue("gfx_gamma", "0.5");
    Preferences.load();
}
catch (e) {
    restartError = e;
    reportError(e);
}
Callback.addCallback("PostLoaded", function () {
    try {
        var file = new java.io.File(__dir__ + ".restart");
        if (restartRequired && !isCreative) {
            if (!file.exists()) {
                showHint("Restarting the app...", Ui.Color.YELLOW);
                file.createNewFile();
                handle(function () {
                    context.finish();
                }, 1500);
            } else {
                if (restartError) {
                    reportError(restartError);
                }
            }
        } else {
            !isDevelop && restoreGame();
            Files.deleteFile(file);
        }
    }
    catch (e) {
        reportError(e);
    }
});

