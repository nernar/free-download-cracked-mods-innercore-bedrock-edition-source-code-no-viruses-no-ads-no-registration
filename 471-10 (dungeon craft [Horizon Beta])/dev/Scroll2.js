IDRegistry.genItemID("Scroll2");
Item.createItem("Scroll2", "Scroll 2", {name: "Scroll", meta: 2}, {stack: 1});
Translation.addTranslation("Scroll 2", {ru: "\u0441\u0432\u0438\u0442\u043e\u043a \u043c\u0440\u0430\u043a\u0430"});
Item.registerUseFunction("Scroll2", function (coords, item, block) {
    if (mana >= 2000) {
        mana -= 2000;
        World.setWorldTime(1000);
        sound.play();
    }
});

