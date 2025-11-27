IDRegistry.genItemID("Scroll6");
Item.createItem("Scroll6", "Scroll 6", {name: "Scroll", meta: 6}, {stack: 1});
Translation.addTranslation("Scroll 6", {ru: "\u0441\u0432\u0438\u0442\u043e\u043a \u044f\u0441\u043d\u043e\u0433\u043e \u0434\u043d\u044f"});
Item.registerUseFunction("Scroll6", function (coords, item, block) {
    if (mana >= 2000) {
        mana -= 2000;
        World.setWeather(1);
        sound.play();
    }
});

