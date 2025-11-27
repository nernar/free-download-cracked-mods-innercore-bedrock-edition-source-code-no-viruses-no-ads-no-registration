var BlockID55 = [51, 52, 122, 120, 7];
IDRegistry.genItemID("stick2");
Item.createItem("stick2", "Postability of absorption", {name: "stick2", meta: 1}, {stack: 1});
mod_tip(ItemID.stick2);
Translation.addTranslation("Postability of absorption", {ru: "\u043f\u043e\u0441\u043e\u0445 \u043f\u043e\u0433\u043b\u043e\u0449\u0435\u043d\u0438\u044f"});
Item.registerUseFunction("stick2", function (coords, item, block, player) {
    let peremen1 = ManaCore.get(player);
    let per1 = peremen1.countMax;
    per1 = peremen1.countMax / 100 * 10;
    per1 = peremen1.countMax - per1;
    if (peremen1.count + 10 <= per1) {
        let b = BlockSource.getDefaultForActor(player);
        if (b.getBlock(coords.x, coords.y, coords.z).id != BlockID55) {
            peremen1.count += 10;
            ManaCore.set(player, peremen1);
            b.setBlock(coords.x, coords.y, coords.z, 0, 0);
        }
    }
});

