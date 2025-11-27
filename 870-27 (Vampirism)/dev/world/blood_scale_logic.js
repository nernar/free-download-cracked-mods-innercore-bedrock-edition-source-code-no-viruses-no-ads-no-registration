const BLOOD_SCALE_DOWN = 120; // sec
const HUNGER_SATURATION_INTERVAL = 5; // sec

Callback.addCallback("ServerPlayerTick", function(player) {
    let thirstDamageStart = false;
    let time = World.getThreadTime();
    let actor = new PlayerActor(player);
    let infectionStart = false;
    let scale = Scales.getScaleByPlayer(player, "BLOOD");
    if (time % (BLOOD_SCALE_DOWN*20) == 0) {
        if (actor.getGameMode() !== Native.GameMode.CREATIVE) {
            if (VM.players[player]['level']) {
                if (scale.getValue() > 0) {
                    VM.BM.bloodLvlDown(1, player);
                }
            }
        }
    }
    if (scale.getValue() == 0) {
        thirstDamageStart = true;
    } else {
        thirstDamageStart = false;
    }
    if (time % 40 == 0 && thirstDamageStart) {
        Entity.damageEntity(player, 2);
    }
    if (Object.keys(VM.players).length) {
        // Не логика шкалы, ну и што, удобно разместить тут
        if (VM.players[player]['infected'] && !VM.players[player]['level'] && !infectionStart) {
            infectionStart = true;
        }
        if (VM.players[player]['level']) {
            VM.BM.setScaleVisible(player, true);
        } else {
            VM.BM.setScaleVisible(player, false);
        }
        if (time % (HUNGER_SATURATION_INTERVAL*20) == 0 && __config__.getBool('hunger_scale_disabled') && VM.players[player]['level']) {
            actor.setHunger(20);
        }
    }
    // тоже не шкала, ну и штоо
    if (time % 6000 == 0 && infectionStart) {
        infectionStart = false;
        VM.playerUpgradeLvL(player);
    }
});

Callback.addCallback("EntityDeath", function(entity) {
    if (Network.getConnectedPlayers().indexOf(entity) != -1) {
        VM.BM.bloodLvlSet(20, entity);
    }
});