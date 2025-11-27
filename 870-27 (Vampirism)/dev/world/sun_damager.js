Callback.addCallback("ServerPlayerTick", function(player) {
    if(World.getThreadTime() % 20 == 0){
        let gamemode = new PlayerActor(player).getGameMode();
        if (gamemode !== Native.GameMode.CREATIVE) {
            if (VM.players[player]['level']) {
                let worldtime = World.getWorldTime();
                let time = 24000 - (Math.ceil(worldtime / 24000) * 24000 - worldtime);
                if (time<=12900||time>=23450) {
                    let coords = Entity.getPosition(player);
                    let source = BlockSource.getDefaultForActor(player);
                    if (source.canSeeSky(coords.x, coords.y, coords.z)) {
                        Entity.setFire(player, 40);
                    }
                }
            }
        }
    }
});