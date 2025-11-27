Callback.addCallback("ModsLoaded", function () {
    Ritual.register3(ItemID.manysript1, 1000);
    Ritual.addCraft3(ItemID.manysript1, ItemID.manysript2);
    Ritual.register3(ItemID.Drune0, 1000);
    Ritual.addCraft3(ItemID.Drune0, ItemID.Drune1);
    Ritual.addCraft3(ItemID.Drune0, ItemID.Drune2);
    Ritual.addCraft3(ItemID.Drune0, ItemID.Drune3);
    Ritual.addCraft3(ItemID.Drune0, ItemID.Drune4);
    Ritual.register3(ItemID.idal, 5000);
    Ritual.addCraft3(ItemID.idal, ItemID.idalSave);
    Ritual.addCraft3(ItemID.idal, ItemID.idalGifts);
    Ritual.addCraft2(ItemID.divine_helmet, ItemID.fire_helmet, 40000);
    Ritual.addCraft2(ItemID.divine_chestplate, ItemID.fire_chestplate, 40000);
    Ritual.addCraft2(ItemID.divine_leggings, ItemID.fire_leggings, 40000);
    Ritual.addCraft2(ItemID.divine_boots, ItemID.fire_boots, 40000);
    Ritual.addCraft2(ItemID.divine_sword, ItemID.fire_sword, 30000);
    Ritual.addCraft2(ItemID.divine_pickaxe, ItemID.fire_pickaxe, 30000);
    Ritual.addCraft2(ItemID.god_ingot, ItemID.fire_ingot, 20000);
    Ritual.addCraft2(ItemID.keyDungeon, ItemID.keyDungeon2, 10000);
    AngelTrade.add(ItemID.crystalLightning, ItemID.ring);
    AngelTrade.add(ItemID.koin_0, ItemID.fire_ingot);
    AngelTrade.add(ItemID.koin_1, ItemID.DarkSphere);
    AngelTrade.add(ItemID.Drune2, ItemID.keyDungeon);
    AngelTrade.add([VanillaItemID.gold_ingot, 8, 0], ItemID.gotovka);
    Ritual.addCraft1(0, {xp: ItemID.Gem2, xm: ItemID.Gem2, zp: ItemID.Gem2, zm: ItemID.Gem2, mana: 0}, function (player, x, y, z) {
        let mana = ManaCore.get(player);
        if (mana.count + 4000 <= mana.countMax) {
            mana.count += 4000;
        } else {
            mana.count = mana.countMax;
        }
        ManaCore.set(player, mana);
    });
    Ritual.addCraft1(0, {xp: ItemID.Gem, xm: ItemID.Gem, zp: ItemID.Gem, zm: ItemID.Gem, mana: 0}, function (player, x, y, z) {
        let mana = ManaCore.get(player);
        if (mana.count + 1000 <= mana.countMax) {
            mana.count += 1000;
        } else {
            mana.count = mana.countMax;
        }
        ManaCore.set(player, mana);
    });
    Ritual.addCraft1(ItemID.god_ingot, {zp: ItemID.crystalearth, zm: ItemID.crystalearth, xp: ItemID.crystalLightning, xm: ItemID.crystalLightning, mana: 1000}, function (player, x, y, z) {
    });
    Ritual.addCraft1(ItemID.god_ingot, {xp: ItemID.crystalearth, xm: ItemID.crystalearth, zp: ItemID.crystalLightning, zm: ItemID.crystalLightning, mana: 1000}, function (player, x, y, z) {
    });
    Ritual.addCraft1(ItemID.fire_ingot, {zp: ItemID.crystalearth, zm: ItemID.crystalearth, xp: ItemID.crystalfire, xm: ItemID.crystalfire, mana: 15000}, function (player, x, y, z) {
    });
    Ritual.addCraft1(ItemID.fire_ingot, {xp: ItemID.crystalearth, xm: ItemID.crystalearth, zp: ItemID.crystalfire, zm: ItemID.crystalfire, mana: 15000}, function (player, x, y, z) {
    });
    Ritual.addCraft1(ItemID.Gem, {xp: ItemID.god_ingot, xm: ItemID.god_ingot, zp: ItemID.god_ingot, zm: ItemID.god_ingot, mana: 5000}, function (player, x, y, z) {
    });
    Ritual.addGrowth(BlockID.kristalFire);
    Ritual.addGrowth(BlockID.kristaldirt);
    Ritual.addGrowth(BlockID.kristalwind);
    Ritual.addGrowth(BlockID.kristalLight);
});

