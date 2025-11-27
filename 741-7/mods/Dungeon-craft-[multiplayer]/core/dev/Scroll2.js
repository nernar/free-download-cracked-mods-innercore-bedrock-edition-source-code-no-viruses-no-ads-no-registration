IDRegistry.genItemID("Scroll2");
Item.createItem("Scroll2", "Milk scroll", {name: "Scroll", meta: 2}, {stack: 1});
mod_tip(ItemID.Scroll2);
Translation.addTranslation("Milk scroll", {ru: "\u0441\u0432\u0438\u0442\u043e\u043a \u043c\u0440\u0430\u043a\u0430"});
Item.registerUseFunction("Scroll2", function (coords, item, block, player) {
    let mana = ManaCore.get(player);
    if (mana.count >= 2000) {
        mana.count -= 2000;
        World.setWorldTime(15000);
        ManaCore.set(player, mana);
    }
});
Recipes.addShaped({id: ItemID.Scroll2, count: 1, data: 0}, ["**b", "*a*", "b**"], ["a", 340, 0, "b", 405, 0]);

