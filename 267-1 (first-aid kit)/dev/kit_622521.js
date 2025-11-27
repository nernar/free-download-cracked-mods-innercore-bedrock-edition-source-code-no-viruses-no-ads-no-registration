IDRegistry.genItemID("kit");
Item.createItem("kit", "\u043c\u0430\u043b\u0430\u044f \u0430\u043f\u0442\u0435\u0447\u043a\u0430", {name: "kit", meta: 0}, {});
IDRegistry.genItemID("kit1");
Item.createItem("kit1", "\u0441\u0440\u0435\u0434\u043d\u044f\u044f \u0430\u043f\u0442\u0435\u0447\u043a\u0430", {name: "kit", meta: 1}, {});
IDRegistry.genItemID("kit2");
Item.createItem("kit2", "\u0431\u043e\u043b\u044c\u0448\u0430\u044f \u0430\u043f\u0442\u0435\u0447\u043a\u0430", {name: "kit", meta: 2}, {});
IDRegistry.genItemID("syringe");
Item.createItem("syringe", "\u0448\u043f\u0440\u0438\u0446", {name: "syringe", meta: 0}, {});
IDRegistry.genItemID("vaccine");
Item.createItem("vaccine", "\u0441\u043b\u0430\u0431\u0430\u044f \u0432\u0430\u043a\u0446\u0438\u043d\u0430", {name: "vaccine", meta: 0}, {});
IDRegistry.genItemID("vaccine1");
Item.createItem("vaccine1", "\u0441\u0440\u0435\u0434\u043d\u044f\u044f \u0432\u0430\u043a\u0446\u0438\u043d\u0430", {name: "vaccine", meta: 1}, {});
IDRegistry.genItemID("vaccine2");
Item.createItem("vaccine2", "\u0441\u0438\u043b\u044c\u043d\u0430\u044f \u0432\u0430\u043a\u0446\u0438\u043d\u0430", {name: "vaccine", meta: 2}, {});
IDRegistry.genItemID("tablet");
Item.createItem("tablet", "\u0442\u0430\u0431\u043b\u0435\u0442\u043a\u0430 \u043f\u0443\u0441\u0442\u044b\u0448\u043a\u0430", {name: "tablet", meta: 0}, {});
IDRegistry.genItemID("tablet1");
Item.createItem("tablet1", "\u0441\u043b\u0430\u0431\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0430\u044f \u0442\u0430\u0431\u043b\u0435\u0442\u043a\u0430", {name: "tablet", meta: 1}, {});
IDRegistry.genItemID("tablet2");
Item.createItem("tablet2", "\u0441\u0440\u0435\u0434\u043d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0430\u044f \u0442\u0430\u0431\u043b\u0435\u0442\u043a\u0430", {name: "tablet", meta: 2}, {});
IDRegistry.genItemID("tablet3");
Item.createItem("tablet3", "\u0441\u0438\u043b\u044c\u043d\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0430\u044f \u0442\u0430\u0431\u043b\u0435\u0442\u043a\u0430", {name: "tablet", meta: 3}, {});
IDRegistry.genItemID("tablet4");
Item.createItem("tablet4", "\u0442\u0430\u0431\u043b\u0435\u0442\u043a\u0430 \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043b\u0435\u0447\u0435\u043d\u0438\u044f", {name: "tablet", meta: 4}, {});
Recipes.addShaped({id: ItemID.kit, count: 1, data: 0}, [" x ", " a ", " b "], ["x", 339, 0, "a", 331, 0, "b", 351, 15]);
Recipes.addShaped({id: ItemID.kit1, count: 1, data: 0}, [" x ", " a ", " b "], ["x", 339, 0, "a", ItemID.kit, 0, "b", 331, 0]);
Recipes.addShaped({id: ItemID.kit2, count: 1, data: 0}, [" x ", " a ", " b "], ["x", 371, 0, "a", ItemID.kit1, 0, "b", 331, 0]);
Recipes.addShaped({id: ItemID.syringe, count: 16, data: 0}, [" x ", " a ", "   "], ["x", 20, 0, "a", 265, 0]);
Recipes.addShaped({id: ItemID.vaccine, count: 1, data: 0}, [" x ", " a ", " b "], ["x", 331, 0, "a", 351, 15, "b", ItemID.syringe, 0]);
Recipes.addShaped({id: ItemID.vaccine1, count: 1, data: 0}, [" x ", " a ", " b "], ["x", 331, 0, "a", 371, 0, "b", ItemID.vaccine, 0]);
Recipes.addShaped({id: ItemID.vaccine2, count: 1, data: 0}, [" x ", " x ", " b "], ["x", 371, 0, "b", ItemID.vaccine1, 0]);
Recipes.addShaped({id: ItemID.tablet, count: 1, data: 0}, [" x ", " a ", " b "], ["x", 371, 0, "a", 331, 0, "b", 353, 0]);
Recipes.addShaped({id: ItemID.tablet1, count: 1, data: 0}, [" x ", " a ", " b "], ["x", 371, 0, "a", 331, 0, "b", ItemID.tablet, 0]);
Recipes.addShaped({id: ItemID.tablet2, count: 1, data: 0}, [" x ", " a ", " b "], ["x", 371, 0, "a", 331, 0, "b", ItemID.tablet1, 0]);
Recipes.addShaped({id: ItemID.tablet3, count: 1, data: 0}, [" x ", " a ", " b "], ["x", 371, 0, "a", 331, 0, "b", ItemID.tablet2, 0]);
Recipes.addShaped({id: ItemID.tablet4, count: 1, data: 0}, [" x ", " a ", "   "], ["x", 264, 0, "a", ItemID.tablet, 0]);
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.kit) {
        Entity.healEntity(Player.get(), Math.min(Entity.getMaxHealth(Player.get()), 5));
        Player.decreaseCarriedItem(1);
    }
});
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.kit1) {
        Entity.healEntity(Player.get(), Math.min(Entity.getMaxHealth(Player.get()), 9));
        Player.decreaseCarriedItem(1);
    }
});
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.kit2) {
        Entity.healEntity(Player.get(), Math.min(Entity.getMaxHealth(Player.get()), 13));
        Player.decreaseCarriedItem(1);
    }
});
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.vaccine) {
        Entity.healEntity(Player.get(), Math.min(Entity.getMaxHealth(Player.get()), 6));
        Player.decreaseCarriedItem(1);
    }
});
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.vaccine1) {
        Entity.healEntity(Player.get(), Math.min(Entity.getMaxHealth(Player.get()), 8));
        Player.decreaseCarriedItem(1);
    }
});
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.vaccine2) {
        Entity.healEntity(Player.get(), Math.min(Entity.getMaxHealth(Player.get()), 10));
        Player.decreaseCarriedItem(1);
    }
});
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.tablet1) {
        Entity.healEntity(Player.get(), Math.min(Entity.getMaxHealth(Player.get()), 6));
        Player.decreaseCarriedItem(1);
    }
});
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.tablet2) {
        Entity.healEntity(Player.get(), Math.min(Entity.getMaxHealth(Player.get()), 10));
        Player.decreaseCarriedItem(1);
    }
});
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.tablet3) {
        Entity.healEntity(Player.get(), Math.min(Entity.getMaxHealth(Player.get()), 14));
        Player.decreaseCarriedItem(1);
    }
});
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.tablet4) {
        Entity.healEntity(Player.get(), Math.min(Entity.getMaxHealth(Player.get()), 20));
        Player.decreaseCarriedItem(1);
    }
});

