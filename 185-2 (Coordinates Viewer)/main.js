Callback.addCallback("tick", function () {
    var pos = Player.getPosition();
    if (Player.getCarriedItem().id == 345) {
        Game.tipMessage("\xa74X: " + Math.round(pos.x) + "   " + "\xa73Y: " + Math.round(pos.y) + "   " + "\xa72Z: " + Math.round(pos.z));
    }
});
Callback.addCallback("tick", function () {
    var time = World.getWorldTime();
    var a = "NIGHT";
    var b = "DAY";
    var c = "MORNING";
    var d = "MIDNIGHT";
    if (Player.getCarriedItem().id == 347) {
        if (World.getWorldTime() > 14000) {
            Game.tipMessage("\xa76TIME: " + Math.round(time) + " " + "(" + a + ")");
        } else {
            if (World.getWorldTime() > 12500) {
                Game.tipMessage("\xa76TIME: " + Math.round(time) + " " + "(" + d + ")");
            } else {
                if (World.getWorldTime() > 1000) {
                    Game.tipMessage("\xa76TIME: " + Math.round(time) + " " + "(" + b + ")");
                } else {
                    if (World.getWorldTime() > 1) {
                        Game.tipMessage("\xa76TIME: " + Math.round(time) + " " + "(" + c + ")");
                    }
                }
            }
        }
    }
    if (World.getWorldTime() >= 24000) {
        World.setWorldTime(1);
    }
});

