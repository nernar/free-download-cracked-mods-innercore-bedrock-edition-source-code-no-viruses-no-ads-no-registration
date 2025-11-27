IDRegistry.genItemID("sapling10");
Item.createItem("sapling10", "sapling", {name: "sapling", meta: 0}, {stack: 64});
Translation.addTranslation("sapling", {ru: "\u0441\u0430\u0436\u0435\u043d\u0435\u0446"});
Callback.addCallback("ItemUse", function (coords, item) {
    if (item.id == ItemID.sapling10) {
        World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.sap, 0);
        Player.decreaseCarriedItem();
    }
});
IDRegistry.genItemID("magis_book");
Item.createItem("magis_book", "magis book", {name: "magis_book", meta: 0}, {stack: 1});
Translation.addTranslation("magis book", {ru: "\u043a\u043d\u0438\u0433\u0430 \u043c\u0430\u0433\u0438\u0438"});
Item.setGlint(ItemID.magis_book, true);
IDRegistry.genItemID("Berries");
Item.createFoodItem("Berries", "Berries", {name: "Berries", meta: 0}, {stack: 64, food: 2});
Translation.addTranslation("Berries", {ru: "\u044f\u0433\u043e\u0434\u044b"});
Callback.addCallback("ItemUse", function (coords, item) {
    if (item.id == ItemID.Berries) {
        World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.a0, 0);
        Player.decreaseCarriedItem();
    }
});
IDRegistry.genItemID("crystalfire");
Item.createItem("crystalfire", "crystal fire", {name: "crystalfire", meta: 0}, {stack: 1});
Translation.addTranslation("crystal fire", {ru: "\u043a\u0440\u0438\u0441\u0441\u0442\u0430\u043b \u043e\u0433\u043d\u044f"});
Callback.addCallback("ItemUse", function (coords, item) {
    if (item.id == ItemID.crystalfire) {
        if (Entity.getSneaking(Player.get()) == true) {
            World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kristalFire, 0);
            Player.decreaseCarriedItem();
        }
    }
});
IDRegistry.genItemID("crystalearth");
Item.createItem("crystalearth", "crystal earth", {name: "crystalearth", meta: 0}, {stack: 1});
Callback.addCallback("ItemUse", function (coords, item) {
    if (item.id == ItemID.crystalearth) {
        if (Entity.getSneaking(Player.get()) == true) {
            World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kristaldirt, 0);
            Player.decreaseCarriedItem();
        }
    }
});
Translation.addTranslation("crystal earth", {ru: "\u043a\u0440\u0438\u0441\u0441\u0442\u0430\u043b \u0437\u0435\u043c\u043b\u0438"});
IDRegistry.genItemID("crystalWind");
Item.createItem("crystalWind", "crystal Wind", {name: "crystalWind", meta: 0}, {stack: 1});
Translation.addTranslation("crystal Wind", {ru: "\u043a\u0440\u0438\u0441\u0441\u0442\u0430\u043b \u0432\u0435\u0442\u0440\u0430"});
Callback.addCallback("ItemUse", function (coords, item) {
    if (item.id == ItemID.crystalWind) {
        if (Entity.getSneaking(Player.get()) == true) {
            World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kristalwind, 0);
            Player.decreaseCarriedItem();
        }
    }
});
IDRegistry.genItemID("crystalLightning");
Item.createItem("crystalLightning", "crystal Lightning", {name: "crystalLightning", meta: 0}, {stack: 1});
Callback.addCallback("ItemUse", function (coords, item) {
    if (item.id == ItemID.crystalLightning) {
        if (Entity.getSneaking(Player.get()) == true) {
            World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kristalLight, 0);
            Player.decreaseCarriedItem();
        }
    }
});
Translation.addTranslation("crystal Lightning", {ru: "\u043a\u0440\u0438\u0441\u0441\u0442\u0430\u043b \u043c\u043e\u043b\u043d\u0438\u0438"});
IDRegistry.genItemID("ring");
Item.createItem("ring", "ring", {name: "ring", meta: 0}, {stack: 1});
Translation.addTranslation("ring", {ru: "\u043a\u043e\u043b\u044c\u0446\u043e \u0441 \u0434\u0440\u0430\u0433\u043e\u0446\u0435\u043d\u043d\u044b\u043c \u043a\u0430\u043c\u043d\u0435\u043c"});
IDRegistry.genItemID("Gem");
Item.createItem("Gem", "Gem", {name: "Gem", meta: 0}, {stack: 1});
Translation.addTranslation("Gem", {ru: "\u043a\u0430\u043c\u0435\u043d\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f"});
IDRegistry.genItemID("GemEarth");
Item.createItem("GemEarth", "Gem Earth", {name: "GemEarth", meta: 0}, {stack: 1});
Translation.addTranslation("Gem Earth", {ru: "\u043a\u0430\u043c\u0435\u043d\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f"});
IDRegistry.genItemID("Gem2");
Item.createItem("Gem2", "Gem", {name: "Gem", meta: 0}, {stack: 1});
Translation.addTranslation("Gem", {ru: "\u043a\u0430\u043c\u0435\u043d\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f"});
Item.setGlint(ItemID.Gem2, true);
IDRegistry.genItemID("GemEarth2");
Item.createItem("GemEarth2", "Gem Earth", {name: "GemEarth", meta: 0}, {stack: 1});
Translation.addTranslation("Gem Earth", {ru: "\u043a\u0430\u043c\u0435\u043d\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f"});
Item.setGlint(ItemID.GemEarth2, true);
IDRegistry.genItemID("glas");
Item.createItem("glas", "glas", {name: "glas", meta: 0}, {stack: 16});
Translation.addTranslation("glas", {ru: "\u0433\u043b\u0430\u0437 \u043d\u0435\u0436\u0438\u0442\u0438"});
IDRegistry.genItemID("poic1");
Item.createItem("poic1", "?", {name: "poic", meta: 0}, {stack: 1});
Translation.addTranslation("?", {ru: "\u043f\u043e\u044f\u0441 \u043f\u043e\u043b\u0451\u0442\u0430"});
IDRegistry.genItemID("amylet");
Item.createItem("amylet", "amylet", {name: "amylet", meta: 0}, {stack: 1});
Translation.addTranslation("amylet", {ru: "\u0430\u043c\u0443\u043b\u0435\u0442 \u0434\u044b\u0445\u0430\u043d\u0438\u044f"});
IDRegistry.genItemID("clitok");
Item.createItem("clitok", "clitok", {name: "clitok", meta: 0}, {stack: 64});
Translation.addTranslation("clitok", {ru: "\u0431\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u044b\u0439 \u0441\u043b\u0438\u0442\u043e\u043a"});
IDRegistry.genItemID("clitok1");
Item.createItem("clitok1", "clitok1", {name: "clitok", meta: 1}, {stack: 64});
Translation.addTranslation("clitok1", {ru: "\u0441\u043b\u0438\u0442\u043e\u043a \u043e\u0433\u043d\u044f"});
IDRegistry.genItemID("gotovka");
Item.createItem("gotovka", "gotovka", {name: "gotovka", meta: 0}, {stack: 1});
Translation.addTranslation("gotovka", {ru: "\u0437\u0430\u0433\u043e\u0442\u043e\u0432\u043a\u0430"});
IDRegistry.genItemID("item");
Item.createItem("item", "ritual activator", {name: "item", meta: 0}, {stack: 1});
Translation.addTranslation("ritual activator", {ru: "\u0440\u0438\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0430\u043a\u0442\u0438\u0432\u0430\u0442\u043e\u0440"});
var maxMana = 20000;
Item.registerUseFunction("item", function (coords, item, block) {
    Game.message("mana: " + mana + "/" + maxMana + ";");
});
IDRegistry.genItemID("Grenade");
Item.createItem("Grenade", "Grenade", {name: "Grenade", meta: 0}, {stack: 1});
Translation.addTranslation("Grenade", {ru: "\u0433\u0440\u0430\u043d\u0430\u0442\u0430"});
Item.registerThrowableFunction("Grenade", function (projectile, item, target) {
    if (target.entity == -1) {
    } else {
        var targetEntity = target.entity;
        var coords = Entity.getPosition(targetEntity);
        Entity.damageEntity(targetEntity, 10);
        Entity.spawn(coords.x, coords.y, coords.z, 65);
    }
});
IDRegistry.genItemID("ryneClone1");
Item.createThrowableItem("ryneClone1", "ryne Clone", {name: "ryneClone", meta: 0}, {enchant: {value: 1, type: 1}});
IDRegistry.genItemID("ryneClone2");
Item.createThrowableItem("ryneClone2", "ryne Clone", {name: "ryneClone", meta: 1}, {enchant: {value: 1, type: 1}});
IDRegistry.genItemID("ryneClone3");
Item.createThrowableItem("ryneClone3", "ryne Clone", {name: "ryneClone", meta: 2}, {enchant: {value: 1, type: 1}});
IDRegistry.genItemID("ryneClone4");
Item.createThrowableItem("ryneClone4", "ryne Clone", {name: "ryneClone", meta: 3}, {enchant: {value: 1, type: 1}});
Translation.addTranslation("ryne Clone", {ru: "\u0440\u0443\u043d\u0430 \u043a\u043b\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"});
IDRegistry.genItemID("bookxp");
Item.createItem("bookxp", "book xp", {name: "book_xp", meta: 0}, {stack: 64});
Item.registerUseFunction("bookxp", function (coords, item, block) {
    Player.decreaseCarriedItem();
    Player.addLevel(10);
});
Translation.addTranslation("book xp", {ru: "\u043a\u043d\u0438\u0433\u0430 \u043e\u043f\u044b\u0442\u0430"});
Item.setGlint(ItemID.bookxp, true);
IDRegistry.genItemID("koin_1");
Item.createItem("koin_1", "gold coin", {name: "koin", meta: 1}, {stack: 64});
Translation.addTranslation("gold coin", {ru: "\u0437\u043e\u043b\u043e\u0442\u0430\u044f \u043c\u043e\u043d\u0435\u0442\u0430"});
Item.setGlint(ItemID.koin_1, true);
IDRegistry.genItemID("koin_0");
Item.createItem("koin_0", "Silver coin", {name: "koin", meta: 0}, {stack: 64});
Translation.addTranslation("Silver coin", {ru: "\u0441\u0435\u0440\u0435\u0431\u0440\u0435\u043d\u0430\u044f \u043c\u043e\u043d\u0435\u0442\u0430"});

