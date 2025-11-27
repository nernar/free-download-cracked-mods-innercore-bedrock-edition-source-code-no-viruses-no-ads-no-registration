IDRegistry.genItemID("sorcererStaff");
Item.createItem("sorcererStaff", "sorcerer staff", {name: "sorcerer_staff", meta: 0}, {stack: 1});
Translation.addTranslation("sorcerer staff", {ru: "\u043f\u043e\u0441\u043e\u0445 \u0447\u0430\u0440\u043e\u0434\u0435\u044f"});
mod_tip(ItemID.sorcererStaff);
Item.registerUseFunction("sorcererStaff", function (coords, item, block, player) {
    if (block.id == BlockID.blockmetal) {
        for (let i = 0; i <= 15; i++) {
            Mp.spawnParticle(PartType.magic, coords.x + Math.random(), coords.y + Math.random(), coords.z + Math.random(), 0, Math.random() / 10, 0);
        }
        let bs = BlockSource.getDefaultForActor(player);
        bs.setBlock(coords.x, coords.y, coords.z, BlockID.manaStorage, 0);
        World.addTileEntity(coords.x, coords.y, coords.z);
    }
});
Item.addCreativeGroup("staff", Translation.translate("staff"), [ItemID.sorcererStaff, ItemID.stick2]);
function isItem(ent) {
}
ModAPI.addAPICallback("AncientWondersAPI", function (api) {
    api.Wands.addStick({id: ItemID.sorcererStaff, time: 13, texture: {name: "sorcerer_staff"}, bonus: {necromancer: 5, magis: 5, aspects: 5}});
    IDRegistry.genItemID("srollAttack");
    Item.createItem("srollAttack", "scroll: attacks \n will hit mobs within a 5 block radius", {name: "sroll", meta: 0}, {stack: 1});
    mod_tip(ItemID.srollAttack);
    Translation.addTranslation("scroll: attacks \n will hit mobs within a 5 block radius", {ru: "\u0441\u0432\u0438\u0442\u043e\u043a: \u0430\u0442\u0430\u043a\u0438 \n \u043e\u0442\u0430\u043a\u0443\u0435\u0442 \u043c\u043e\u0431\u043e\u0432 \u0432 \u0440\u0430\u0434\u0438\u0443\u0441\u0435 5 \u0431\u043b\u043e\u043a\u043e\u0432"});
    IDRegistry.genItemID("srollRegen");
    Item.createItem("srollRegen", "Scroll: Recovery \n sucks from the nearest mobs mana", {name: "sroll", meta: 0}, {stack: 1});
    mod_tip(ItemID.srollRegen);
    Translation.addTranslation("Scroll: Recovery \n sucks from the nearest mobs mana", {ru: "\u0441\u0432\u0438\u0442\u043e\u043a: \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \n \u0432\u044b\u0441\u0430\u0441\u044b\u0432\u0430\u0435\u0442 \u0438\u0437 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u043c\u043e\u0431\u043e\u0432 \u043c\u0430\u043d\u0443"});
    Ritual.register3(ItemID.sroll3, 1000);
    Ritual.addCraft3(ItemID.sroll3, ItemID.srollAttack);
    Ritual.addCraft3(ItemID.sroll3, ItemID.srollRegen);
    api.Wands.setPrototype(ItemID.srollAttack, {type: "function", compatibility: [ItemID.sroll1], activate: {necromancer: 10, magis: 15, aspects: 20}, setFunction: function (packet) {
        let class = {};
        class.mana = ManaCore.get(packet.player);
        if (class.mana.count >= 50) {
            class.mana.count -= 50;
            ManaCore.set(packet.player, class.mana);
            let pos = Entity.getPosition(packet.entity);
            let ents = Entity.getAllInRange(pos, 5);
            Entity.damageEntity(packet.entity, 5);
            for (let i in ents) {
                if (Entity.getTypeName(ents[i]) != "minecraft:item<>") {
                    Entity.damageEntity(ents[i], 5);
                    pos = Entity.getPosition(ents[i]);
                    for (let i = 0; i <= 5; i++) {
                        Mp.spawnParticle(PartType.magic, pos.x + Math.random(), pos.y + Math.random(), pos.z + Math.random(), 0, Math.random() / 10, 0);
                    }
                }
            }
        } else {
            Mp.message(packet.player, "\u043d\u0443\u0436\u043d\u0430 \u043c\u0430\u043d\u044b 50");
        }
    }, installation: function (player, item) {
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, null);
    }});
    api.Wands.setPrototype(ItemID.srollRegen, {type: "function", compatibility: [ItemID.sroll1, ItemID.sroll3], activate: {necromancer: 15, magis: 30, aspects: 20}, setFunction: function (packet) {
        let pos = Entity.getPosition(packet.player);
        let m = ManaCore.get(packet.player);
        let ents = Entity.getAllInRange(pos, 5);
        for (let i in ents) {
            if (ents[i] != packet.player) {
                if (Player.isPlayer(ents[i])) {
                    let m2 = ManaCore.get(ents[i]);
                    let pos2 = Entity.getPosition(ents[i]);
                    if (m2.count <= 0) {
                        Entity.setHealth(ents[i], 0);
                    } else {
                        m2.count -= 5;
                        ManaCore.set(ents[i], m2);
                        Entity.damageEntity(ents[i], 5);
                    }
                    if (m.count + 5 <= m.countMax) {
                        ParticlesAPI.coords(PartType.magic, pos2.x, pos2.y, pos2.z, pos.x, pos.y, pos.z, 50);
                        m.count += 5;
                    }
                } else {
                    let pos2 = Entity.getPosition(ents[i]);
                    Entity.damageEntity(ents[i], 5);
                    if (m.count + 5 <= m.countMax) {
                        ParticlesAPI.coords(PartType.magic, pos2.x, pos2.y, pos2.z, pos.x, pos.y, pos.z, 50);
                        m.count += 5;
                    }
                }
            }
        }
        ManaCore.set(packet.player, m);
    }, installation: function (player, item) {
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, null);
    }});
});

