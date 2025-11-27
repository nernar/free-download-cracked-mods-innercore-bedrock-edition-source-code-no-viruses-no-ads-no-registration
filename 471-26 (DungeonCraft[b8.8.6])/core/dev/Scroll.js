IDRegistry.genItemID("Scroll6");
Item.createItem("Scroll6", "Svic of the clear day", {name: "Scroll", meta: 6}, {stack: 1});
Translation.addTranslation("Svic of the clear day", {ru: "\u0441\u0432\u0438\u0442\u043e\u043a \u044f\u0441\u043d\u043e\u0433\u043e \u0434\u043d\u044f"});
Item.registerUseFunction("Scroll6", function (coords, item, block, player) {
    let mana = ManaCore.get(player);
    if (mana.count >= 1000) {
        mana.count -= 1000;
        World.setWeather(1);
        ManaCore.set(player, mana);
    }
});
Recipes.addShaped({id: ItemID.Scroll6, count: 1, data: 0}, ["**b", "*a*", "b**"], ["a", 340, 0, "b", 264, 0]);

