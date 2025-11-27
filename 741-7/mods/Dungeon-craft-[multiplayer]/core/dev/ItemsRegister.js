Item.registerUseFunction("sapling10", function (coords, item, block, player) {
    let b = BlockSource.getDefaultForActor(player);
    if (b.getBlock(coords.x, coords.y + 1, coords.z).id == 0) {
        if (b.getBlock(coords.x, coords.y, coords.z).id != BlockID.rityal1) {
            b.setBlock(coords.x, coords.y + 1, coords.z, BlockID.sap, 0);
            delItem(player, item);
        }
    }
});
IDRegistry.genItemID("Berries");
Item.createFoodItem("Berries", "Berries", {name: "Berries", meta: 0}, {stack: 64, food: 2});
mod_tip(ItemID.Berries);
Translation.addTranslation("Berries", {ru: "\u044f\u0433\u043e\u0434\u044b"});
Item.registerUseFunction("Berries", function (coords, item, block, player) {
    let b = BlockSource.getDefaultForActor(player);
    if (b.getBlock(coords.x, coords.y + 1, coords.z).id == 0) {
        b.setBlock(coords.x, coords.y + 1, coords.z, BlockID.a0, 0);
        delItem(player, item);
    }
});
IDRegistry.genItemID("deadBerries");
Item.createFoodItem("deadBerries", "Dead Berries", {name: "deadBerries", meta: 0}, {stack: 64, food: 2});
mod_tip(ItemID.deadBerries);
Translation.addTranslation("deadBerries", {ru: "\u0437\u0430\u0440\u0430\u0436\u0451\u043d\u043d\u044b\u0435 \u044f\u0433\u043e\u0434\u044b"});
Item.registerUseFunction("deadBerries", function (coords, item, block, player) {
    let b = BlockSource.getDefaultForActor(player);
    if (b.getBlock(coords.x, coords.y + 1, coords.z).id == 0) {
        b.setBlock(coords.x, coords.y + 1, coords.z, BlockID.deada0, 0);
        delItem(player, item);
    }
});
IDRegistry.genItemID("crystalfire");
Item.createItem("crystalfire", "crystal fire", {name: "crystalfire", meta: 0}, {stack: 1});
mod_tip(ItemID.crystalfire);
Translation.addTranslation("crystal fire", {ru: "\u043a\u0440\u0438\u0441\u0441\u0442\u0430\u043b \u043e\u0433\u043d\u044f"});
Item.registerUseFunction("crystalfire", function (coords, item, block, player) {
    let b = BlockSource.getDefaultForActor(player);
    if (b.getBlock(coords.x, coords.y + 1, coords.z).id == 0) {
        if (b.getBlock(coords.x, coords.y, coords.z).id != BlockID.rityal1) {
            if (Entity.getSneaking(player) == true) {
                b.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kristalFire, 0);
                delItem(player, item);
            }
        }
    }
});
IDRegistry.genItemID("crystalearth");
Item.createItem("crystalearth", "crystal earth", {name: "crystalearth", meta: 0}, {stack: 1});
mod_tip(ItemID.crystalearth);
Item.registerUseFunction("crystalearth", function (coords, item, block, player) {
    let b = BlockSource.getDefaultForActor(player);
    if (b.getBlock(coords.x, coords.y + 1, coords.z).id == 0) {
        if (b.getBlock(coords.x, coords.y, coords.z).id != BlockID.rityal1) {
            if (Entity.getSneaking(player) == true) {
                b.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kristaldirt, 0);
                delItem(player, item);
            }
        }
    }
});
Translation.addTranslation("crystal earth", {ru: "\u043a\u0440\u0438\u0441\u0441\u0442\u0430\u043b \u0437\u0435\u043c\u043b\u0438"});
IDRegistry.genItemID("crystalWind");
Item.createItem("crystalWind", "crystal Wind", {name: "crystalWind", meta: 0}, {stack: 1});
mod_tip(ItemID.crystalWind);
Translation.addTranslation("crystal Wind", {ru: "\u043a\u0440\u0438\u0441\u0441\u0442\u0430\u043b \u0432\u0435\u0442\u0440\u0430"});
Item.registerUseFunction("crystalWind", function (coords, item, block, player) {
    let b = BlockSource.getDefaultForActor(player);
    if (Entity.getSneaking(player) == true) {
        if (b.getBlock(coords.x, coords.y + 1, coords.z).id == 0) {
            if (b.getBlock(coords.x, coords.y, coords.z).id != BlockID.rityal1) {
                b.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kristalwind, 0);
                delItem(player, item);
            }
        }
    }
});
IDRegistry.genItemID("crystalLightning");
Item.createItem("crystalLightning", "crystal Lightning", {name: "crystalLightning", meta: 0}, {stack: 1});
Item.registerUseFunction("crystalLightning", function (coords, item, block, player) {
    if (Entity.getSneaking(player) == true) {
        let b = BlockSource.getDefaultForActor(player);
        if (b.getBlock(coords.x, coords.y + 1, coords.z).id == 0) {
            if (b.getBlock(coords.x, coords.y, coords.z).id != BlockID.rityal1) {
                b.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kristalLight, 0);
                delItem(player, item);
            }
        }
    }
});
mod_tip(ItemID.crystalLightning);
Translation.addTranslation("crystal Lightning", {ru: "\u043a\u0440\u0438\u0441\u0441\u0442\u0430\u043b \u043c\u043e\u043b\u043d\u0438\u0438"});
Item.addCreativeGroup("crystal", Translation.translate("Crystal"), [ItemID.crystalfire, ItemID.crystalearth, ItemID.crystalWind, ItemID.crystalLightning]);
IDRegistry.genItemID("ring");
Item.createItem("ring", "ring", {name: "ring", meta: 0}, {stack: 1});
mod_tip(ItemID.ring);
Translation.addTranslation("ring", {ru: "\u043a\u043e\u043b\u044c\u0446\u043e \u0441 \u0434\u0440\u0430\u0433\u043e\u0446\u0435\u043d\u043d\u044b\u043c \u043a\u0430\u043c\u043d\u0435\u043c"});
IDRegistry.genItemID("Gem");
Item.createItem("Gem", "Gem", {name: "Gem", meta: 0}, {stack: 1});
mod_tip(ItemID.Gem);
Translation.addTranslation("Gem", {ru: "\u041a\u0430\u043c\u0435\u043d\u044c \u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f"});
Item.setGlint(ItemID.Gem, true);
IDRegistry.genItemID("breakGem");
Item.createItem("breakGem", "Break Gem", {name: "breakGem", meta: 0}, {stack: 1});
mod_tip(ItemID.breakGem);
Translation.addTranslation("Break Gem", {ru: "\u0421\u043b\u043e\u043c\u0430\u043d\u043d\u044b\u0439 \u041a\u0430\u043c\u0435\u043d\u044c \u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f"});
Item.setGlint(ItemID.breakGem, true);
Item.addCreativeGroup("gem", Translation.translate("Gem"), [ItemID.Gem, ItemID.breakGem]);
IDRegistry.genItemID("glas");
Item.createItem("glas", "glas", {name: "glas", meta: 0}, {stack: 16});
mod_tip(ItemID.glas);
Translation.addTranslation("glas", {ru: "\u0433\u043b\u0430\u0437 \u043d\u0435\u0436\u0438\u0442\u0438"});
IDRegistry.genItemID("amylet");
Item.createItem("amylet", "Breathing the breath", {name: "amylet", meta: 0}, {stack: 1});
mod_tip(ItemID.amylet);
Translation.addTranslation("Breathing the breath", {ru: "\u0430\u043c\u0443\u043b\u0435\u0442 \u0434\u044b\u0445\u0430\u043d\u0438\u044f"});
IDRegistry.genItemID("clitok");
Item.createItem("clitok", "Divine ingot", {name: "clitok", meta: 0}, {stack: 64});
mod_tip(ItemID.clitok);
Translation.addTranslation("Divine ingot", {ru: "\u0431\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u044b\u0439 \u0441\u043b\u0438\u0442\u043e\u043a"});
IDRegistry.genItemID("clitok1");
Item.createItem("clitok1", "Fur ingot", {name: "clitok", meta: 1}, {stack: 64});
mod_tip(ItemID.clitok1);
Item.addCreativeGroup("ingot", Translation.translate("Ingot"), [ItemID.clitok, ItemID.clitok1]);
Translation.addTranslation("Fur ingot", {ru: "\u0441\u043b\u0438\u0442\u043e\u043a \u043e\u0433\u043d\u044f"});
IDRegistry.genItemID("gotovka");
Item.createItem("gotovka", "Preparation", {name: "gotovka", meta: 0}, {stack: 1});
mod_tip(ItemID.gotovka);
Translation.addTranslation("Preparation", {ru: "\u0437\u0430\u0433\u043e\u0442\u043e\u0432\u043a\u0430"});
IDRegistry.genItemID("bookxp");
Item.createItem("bookxp", "book xp", {name: "book_xp", meta: 0}, {stack: 64});
mod_tip(ItemID.bookxp);
Item.registerUseFunction("bookxp", function (coords, item, block, player) {
    delItem(player, item);
    let ac = new PlayerActor(player);
    ac.addExperience(1000);
});
Translation.addTranslation("book xp", {ru: "\u043a\u043d\u0438\u0433\u0430 \u043e\u043f\u044b\u0442\u0430"});
Item.setGlint(ItemID.bookxp, true);
IDRegistry.genItemID("koin_1");
Item.createItem("koin_1", "gold coin", {name: "koin", meta: 1}, {stack: 64});
mod_tip(ItemID.koin_1);
Translation.addTranslation("gold coin", {ru: "\u0437\u043e\u043b\u043e\u0442\u0430\u044f \u043c\u043e\u043d\u0435\u0442\u0430"});
Item.setGlint(ItemID.koin_1, true);
IDRegistry.genItemID("koin_0");
Item.createItem("koin_0", "Silver coin", {name: "koin", meta: 0}, {stack: 64});
mod_tip(ItemID.koin_0);
Item.addCreativeGroup("koin", Translation.translate("Koin"), [ItemID.koin_0, ItemID.koin_1]);
Translation.addTranslation("Silver coin", {ru: "\u0441\u0435\u0440\u0435\u0431\u0440\u0435\u043d\u0430\u044f \u043c\u043e\u043d\u0435\u0442\u0430"});

