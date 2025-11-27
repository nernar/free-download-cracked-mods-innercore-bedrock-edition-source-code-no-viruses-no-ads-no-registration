IDRegistry.genItemID("Scroll4");
Item.createItem("Scroll4", "Scroll 4", {name: "Scroll", meta: 3}, {stack: 1});
Translation.addTranslation("Scroll 4", {ru: "\u0441\u0432\u0438\u0442\u043e\u043a \u043e\u0433\u043d\u044f"});
Item.registerUseFunction("Scroll4", function (coords, item, block) {
    if (mana >= 50) {
        mana -= 50;
        Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 1, 36000);
        World.setBlock(coords.x, coords.y + 1, coords.z, 51, 0);
        World.setBlock(coords.x + 1, coords.y + 1, coords.z, 51, 0);
        World.setBlock(coords.x - 1, coords.y + 1, coords.z, 51, 0);
        World.setBlock(coords.x, coords.y + 1, coords.z + 1, 51, 0);
        World.setBlock(coords.x + 1, coords.y + 1, coords.z + 1, 51, 0);
        World.setBlock(coords.x - 1, coords.y + 1, coords.z + 1, 51, 0);
        World.setBlock(coords.x, coords.y + 1, coords.z - 1, 51, 0);
        World.setBlock(coords.x + 1, coords.y + 1, coords.z - 1, 51, 0);
        World.setBlock(coords.x - 1, coords.y + 1, coords.z - 1, 51, 0);
        sound.play();
    }
});

