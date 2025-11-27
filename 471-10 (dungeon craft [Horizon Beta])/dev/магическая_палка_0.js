var peremen1 = 18990;
IDRegistry.genItemID("stick2");
Item.createItem("stick2", "stick2", {name: "stick2", meta: 1}, {stack: 1});
Translation.addTranslation("stick2", {ru: "\u043f\u043e\u0441\u043e\u0445 \u043f\u043e\u0433\u043b\u043e\u0449\u0435\u043d\u0438\u044f"});
Item.registerUseFunction("stick2", function (coords, item, block) {
    if (mana <= peremen1) {
        mana += 10;
        World.setBlock(coords.x, coords.y, coords.z, 0, 0);
        sound.play();
    }
});

