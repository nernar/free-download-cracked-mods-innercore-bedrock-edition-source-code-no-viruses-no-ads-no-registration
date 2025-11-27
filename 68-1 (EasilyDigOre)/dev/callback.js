Callback.addCallback("tick", function () {
    if (Edo.gen != null) {
        try {
            Edo.gen.next();
        }
        catch (Error) {
            Edo.gen = null;
            Edo.finish();
            Game.message("\u63a1\u6398\u304c\u7d42\u4e86\u3057\u307e\u3057\u305f\u3002");
        }
    }
});
Callback.addCallback("DestroyBlock", function (Coords, Block, Player) {
    if (Edo.DIGGING && Coords.x == Edo.coords.x && Coords.y == Edo.coords.y && Coords.z == Edo.coords.z) {
        Edo.finish();
    }
});

