IDRegistry.genItemID("endDust");
Item.createItem("endDust", "Ender Pearl Dust", {name: "enderPearlDust", meta: 0}, {});
Translation.addTranslation("Ender Pearl Dust", {ru: "\u041f\u044b\u043b\u044c \u0436\u0435\u043c\u0447\u0443\u0433\u0430 \u043a\u0440\u0430\u044f"});
Recipes.addFurnace(368, ItemID.endDust, 0);
IDRegistry.genItemID("minBlackWhole");
Item.createItem("minBlackWhole", "Miniature Black Hole", {name: "miniBlackHole", meta: 0}, {});
Translation.addTranslation("Miniature Black Hole", {ru: "\u041c\u0438\u043d\u0438\u0430\u0442\u044e\u0440\u043d\u0430\u044f \u0447\u0435\u0440\u043d\u0430\u044f \u0434\u044b\u0440\u0430"});
IDRegistry.genItemID("portalGun");
Item.createItem("portalGun", "Portal Gun", {name: "portalgunAtlasA", meta: 0}, {stack: 1});
Translation.addTranslation("Portal Gun", {ru: "\u041f\u0435\u0440\u0435\u043d\u043e\u0441\u043d\u043e\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u0440\u0442\u0430\u043b\u043e\u0432"});
var mes = "\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0443\u044f\u0441\u044c \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u043f\u0443\u043d\u043a\u0442\u043e\u043c \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u043c\u044b \u0440\u0430\u0434\u044b \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u0432\u0430\u043c \u0437\u0430\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0430\u043a\u0442: \u0442\u0435\u043f\u0435\u0440\u044c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0441\u0442\u043e\u0438\u0442 \u0434\u043e\u0440\u043e\u0436\u0435, \u0447\u0435\u043c \u0433\u043e\u0434\u043e\u0432\u043e\u0439 \u0434\u043e\u0445\u043e\u0434 \u0438 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u044b \u0432\u0441\u0435\u0445 \u0436\u0438\u0442\u0435\u043b\u0435\u0439 \u0432 \u0433\u043e\u0440\u043e\u0434\u0435";
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: 368, count: 1, data: 0}, ["xxx", "xxx", "xxx"], ["x", ItemID.endDust, 0]);
    Recipes.addShaped({id: ItemID.minBlackWhole, count: 1, data: 0}, ["xxx", "xsx", "xxx"], ["x", ItemID.endDust, 0, "s", 399, 0]);
    Recipes.addShaped({id: ItemID.portalGun, count: 1, data: 0}, ["xyy", "asy", "yxy"], ["y", 265, 0, "x", 49, 0, "a", 264, 0, "s", ItemID.minBlackWhole, 0], function (api, field, result) {
        Game.message(mes);
    });
});

