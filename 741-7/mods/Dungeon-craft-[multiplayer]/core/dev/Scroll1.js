IDRegistry.genItemID("Scroll1");
Item.createItem("Scroll1", "Scroll of the day", {name: "Scroll", meta: 1}, {stack: 1});
mod_tip(ItemID.Scroll1);
Translation.addTranslation("Scroll of the day", {ru: "\u0441\u0432\u0438\u0442\u043e\u043a \u0434\u043d\u044f"});
Item.registerUseFunction("Scroll1", function (coords, item, block, player) {
    let mana = ManaCore.get(player);
    if (mana.count >= 2000) {
        mana.count -= 2000;
        World.setWorldTime(1000);
        ManaCore.set(player, mana);
    }
});
Recipes.addShaped({id: ItemID.Scroll1, count: 1, data: 0}, ["**b", "*a*", "b**"], ["a", 340, 0, "b", 348, 0]);

