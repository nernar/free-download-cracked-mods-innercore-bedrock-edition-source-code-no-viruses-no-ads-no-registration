IDRegistry.genItemID("RitualActivator");
Item.createItem("RitualActivator", "Ritual activator", {name: "Ritual_activator", meta: 0}, {stack: 1});
Translation.addTranslation("Ritual activator", {ru: "\u0420\u0438\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0430\u043a\u0442\u0438\u0432\u0430\u0442\u043e\u0440"});
Item.registerUseFunctionForID(ItemID.RitualActivator, function (coords, item, block, player) {
    let mana = ManaCore.get(player);
    Mp.message(player, mana.count + "/" + mana.countMax);
    let pa = new PlayerActor(player);
    let bs = BlockSource.getDefaultForActor(player);
    if (DungeonCore.isStructure("ritualUpdate", coords.x, coords.y, coords.z, bs)) {
        for (i in Ritual.arr2) {
            let te = TileEntity.getTileEntity(coords.x, coords.y, coords.z, bs);
            let obj = Ritual.arr2[i];
            if (te.data.item.id == obj.id) {
                Callback.invokeCallback("RitualDC", player, "update", coords);
                if (mana.count >= obj.mana) {
                    mana.count -= obj.mana;
                    bs.spawnDroppedItem(coords.x, coords.y + 1, coords.z, obj.result, 1, 0, null);
                    te.destroyAnimation();
                }
            }
        }
    } else {
        if (DungeonCore.isStructure("ritualEnchant", coords.x, coords.y, coords.z, bs)) {
            let keys = Object.keys(Ritual.obj3);
            for (i in keys) {
                let key = keys[i];
                let te = TileEntity.getTileEntity(coords.x, coords.y, coords.z, bs);
                if (te.data.item.id == key) {
                    if (mana.count >= Ritual.obj3[key].obj.mana) {
                        let count = Ritual.obj3[key].arr.length - 1;
                        mana.count -= Ritual.obj3[key].obj.mana;
                        Callback.invokeCallback("RitualDC", player, "enchant", coords);
                        bs.spawnDroppedItem(coords.x, coords.y + 1, coords.z, Ritual.obj3[key].arr[Math.floor(Math.random() * count)], 1, 0, null);
                        te.destroyAnimation();
                    }
                }
            }
        }
    }
    ManaCore.set(player, mana);
});
IDRegistry.genItemID("DarkSphere");
Item.createItem("DarkSphere", "Dark sphere", {name: "Dark_sphere", meta: 0}, {stack: 1});
Translation.addTranslation("Dark sphere", {ru: "\u0442\u0451\u043c\u043d\u0430\u044f \u0441\u0444\u0435\u0440\u0430"});
Item.registerUseFunctionForID(ItemID.DarkSphere, function (coords, item, block, player) {
    let mana = ManaCore.get(player);
    let random = Math.floor(Math.random() * 2000);
    mana.countMax += random;
    Mp.message(player, Translation.translate("Your maximum mana is increased by ") + random);
    delItem(player, item);
    ManaCore.set(player, mana);
});
Translation.addTranslation("Your maximum mana is increased by ", {ru: "\u0412\u0430\u0448 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u043f\u0430\u0441 \u043c\u0430\u043d\u044b \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d \u043d\u0430 "});
IDRegistry.genItemID("manysript1");
Item.createItem("manysript1", "Manuscript", {name: "manysript", meta: 0}, {stack: 1});
Translation.addTranslation("Manuscript", {ru: "\u043c\u0430\u043d\u0443\u0441\u043a\u0440\u0438\u043f\u0442"});
IDRegistry.genItemID("manysript2");
Item.createItem("manysript2", "Manuscript Knowledge: Basics", {name: "manysript", meta: 0}, {stack: 1});
Translation.addTranslation("Manuscript Knowledge: Basics", {ru: "\u043c\u0430\u043d\u0443\u0441\u043a\u0440\u0438\u043f\u0442 \u0437\u043d\u0430\u043d\u0438\u0435: \u043e\u0441\u043d\u043e\u0432\u044b"});
Item.setGlint(ItemID.manysript2, true);
IDRegistry.genItemID("Drune0");
Item.createItem("Drune0", "Empty rune", {name: "Drune", meta: 0}, {stack: 1});
Translation.addTranslation("Empty rune", {ru: "\u043f\u0443\u0441\u0442\u0430\u044f \u0440\u0443\u043d\u0430"});
IDRegistry.genItemID("Drune1");
Item.createItem("Drune1", "fire rune", {name: "Drune", meta: 1}, {stack: 1});
Translation.addTranslation("fire rune", {ru: "\u0440\u0443\u043d\u0430 \u043e\u0433\u043d\u044f"});
Item.setGlint(ItemID.Drune1, true);
IDRegistry.genItemID("Drune2");
Item.createItem("Drune2", "Earth rune", {name: "Drune", meta: 2}, {stack: 1});
Translation.addTranslation("Earth rune", {ru: "\u0440\u0443\u043d\u0430 \u0437\u0435\u043c\u043b\u0438"});
Item.setGlint(ItemID.Drune2, true);
IDRegistry.genItemID("Drune3");
Item.createItem("Drune3", "Wind rune", {name: "Drune", meta: 3}, {stack: 1});
Translation.addTranslation("Wind rune", {ru: "\u0440\u0443\u043d\u0430 \u0432\u0435\u0442\u0440\u0430"});
Item.setGlint(ItemID.Drune3, true);
IDRegistry.genItemID("Drune4");
Item.createItem("Drune4", "The rune of light", {name: "Drune", meta: 4}, {stack: 1});
Translation.addTranslation("The rune of light", {ru: "\u0440\u0443\u043d\u0430 \u0441\u0432\u0435\u0442\u0430"});
Item.setGlint(ItemID.Drune4, true);
Item.addCreativeGroup("runes", Translation.translate("Runes"), [ItemID.Drune0, ItemID.Drune1, ItemID.Drune2, ItemID.Drune3, ItemID.Drune4]);
IDRegistry.genItemID("sapling10");
Item.createItem("sapling10", "sapling", {name: "sapling", meta: 0}, {stack: 64});
Translation.addTranslation("sapling", {ru: "\u0441\u0430\u0436\u0435\u043d\u0435\u0446"});
const Idal = {arr: [], getLevel(data) {
    return Math.floor(data / 1000);
}, register(id) {
    Item.setGlint(id, true);
    Item.setMaxDamage(id, 1000);
    Item.registerNameOverrideFunction(id, function (item, name) {
        return name + "\n " + item.data + "/" + Item.getMaxDamage(item.id) + Translation.translate(" \n level: ") + Idal.getLevel(item.data);
    });
    this.arr.push(id);
}};
Translation.addTranslation(" \n level: ", {ru: " \n \u0443\u0440\u043e\u0432\u0435\u043d\u044c: "});
IDRegistry.genItemID("idal");
Item.createItem("idal", "idal", {name: "idal", meta: 0}, {stack: 1});
Translation.addTranslation("idal", {ru: "\u0438\u0434\u0430\u043b"});
IDRegistry.genItemID("idalSave");
Item.createItem("idalSave", "idal of conservation", {name: "idal", meta: 0}, {stack: 1});
Translation.addTranslation("idal of conservation", {ru: "\u0438\u0434\u0430\u043b \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f"});
Idal.register(ItemID.idalSave);
IDRegistry.genItemID("idalGifts");
Item.createItem("idalGifts", "idal gifts", {name: "idal", meta: 0}, {stack: 1});
Translation.addTranslation("idal gifts", {ru: "\u0438\u0434\u0430\u043b \u0434\u0430\u0440\u043e\u0432"});
Idal.register(ItemID.idalGifts);
function cheakItem(id, playerId) {
    let player = new PlayerActor(playerId);
    for (let i = 0; i < 9; i++) {
        let item = player.getInventorySlot(i);
        if (item.id == id) {
            return {id: item.id, data: item.data, extra: item.extra, count: item.count, slot: i};
        }
    }
}
Callback.addCallback("ServerPlayerTick", function (player, isPlayerDead) {
    let item = cheakItem(ItemID.idalGifts, player);
    if (item) {
        if (item.id == ItemID.idalGifts) {
            if (Math.random() <= 0.01) {
                let mana = ManaCore.get(player);
                mana.count += Idal.getLevel(item.data) * 10;
                manaPlayer[player] = mana;
                Network.sendToServer("dc.set", manaPlayer);
            }
        }
    }
});
Callback.addCallback("wasteMana", function (player, manaNow, manaWill) {
    let item = cheakItem(ItemID.idalSave, player);
    if (item) {
        if (item.id == ItemID.idalSave) {
            let spending = manaNow.count - manaWill.count;
            if (spending >= 11) {
                let per1 = spending / 100 * Idal.getLevel(item.data);
                per1 = Math.ceil(per1);
                manaWill.count += per1;
                manaPlayer[player] = manaWill;
                Network.sendToAllClients("dc.set", manaPlayer);
            } else {
                manaPlayer[player] = manaWill;
                Network.sendToAllClients("dc.set", manaPlayer);
            }
        } else {
            manaPlayer[player] = manaWill;
            Network.sendToAllClients("dc.set", manaPlayer);
        }
    } else {
        manaPlayer[player] = manaWill;
        Network.sendToAllClients("dc.set", manaPlayer);
    }
});
Item.addCreativeGroup("idals", Translation.translate("idals"), [ItemID.idal, ItemID.idalSave, ItemID.idalGifts]);

