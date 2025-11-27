IDRegistry.genItemID("Scroll1");
Item.createItem("Scroll1", "Scroll 1", {name: "Scroll", meta: 1}, {stack: 1});
Translation.addTranslation("Scroll 1", {ru: "\u0441\u0432\u0438\u0442\u043e\u043a \u0434\u043d\u044f"});
Item.registerUseFunction("Scroll1", function (coords, item, block) {
    if (mana >= 2000) {
        mana -= 2000;
        World.setWorldTime(13000);
        sound.play();
    }
});

