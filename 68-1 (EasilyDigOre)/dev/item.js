Item.registerUseFunctionForID(ID.GoldPickaxe, function (Coords, Item, Block) {
    if (Block.id === ID.Goldblock && World.getBlockID(Coords.x, Coords.y + 1, Coords.z) === ID.Glowstone) {
        if (Edo.DIGGING) {
            Game.message("\u4ed6\u306e\u5834\u6240\u3067\u63a1\u6398\u304c\u884c\u308f\u308c\u3066\u3044\u307e\u3059\u3002");
        } else {
            Edo.start(Coords, 4);
            Game.message("\u63a1\u6398\u3092\u958b\u59cb\u3057\u307e\u3059\u3002");
        }
    }
});
Item.registerUseFunctionForID(ID.DiamondPickaxe, function (Coords, Item, Block) {
    if (Block.id === ID.Goldblock && World.getBlockID(Coords.x, Coords.y + 1, Coords.z) === ID.Glowstone) {
        if (Edo.DIGGING) {
            Game.message("\u4ed6\u306e\u5834\u6240\u3067\u63a1\u6398\u304c\u884c\u308f\u308c\u3066\u3044\u307e\u3059\u3002");
        } else {
            Edo.start(Coords, 8);
            Game.message("\u63a1\u6398\u3092\u958b\u59cb\u3057\u307e\u3059\u3002");
        }
    }
});

