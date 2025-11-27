Callback.addCallback("LevelLoaded", function () {
    if (Options.DEBUG_MODE) {
        let currentColor = ChatColor.GREEN;
        let lasttime = -1;
        let frame = 0;

        Callback.addCallback("tick", function () {
            if (Options.DEBUG_MODE) {
                let t = java.lang.System.currentTimeMillis();
                if (frame++ % 20 == 0) {
                    if (lasttime != -1) {
                        tps = 1000 / (t - lasttime) * 20;
                        let currentTps = Math.round(tps * 10) / 10;
                        currentColor = currentTps < 10 ? ChatColor.RED : currentTps < 15 ? ChatColor.YELLOW : ChatColor.GREEN;
                        Game.tipMessage(currentColor + currentTps + " tps");
                    }
                    lasttime = t;
                }
            }
        });
    }
});