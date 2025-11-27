IDRegistry.genItemID("OsmiumHelmet");
IDRegistry.genItemID("OsmiumChestplate");
IDRegistry.genItemID("OsmiumLeggings");
IDRegistry.genItemID("OsmiumBoots");
Item.createArmorItem("OsmiumHelmet", "\u041e\u0441\u043c\u0438\u0435\u0432\u044b\u0439 \u0448\u043b\u0435\u043c", {name: "OsmiumHelmet"}, {type: "helmet", armor: 3, durability: 330, texture: "armor/osmium_1.png"});
Item.createArmorItem("OsmiumChestplate", "\u041e\u0441\u043c\u0438\u0435\u0432\u0430\u044f \u043a\u0438\u0441\u0430\u0440\u0430", {name: "OsmiumChestplate"}, {type: "chestplate", armor: 8, durability: 480, texture: "armor/osmium_1.png"});
Item.createArmorItem("OsmiumLeggings", "\u041e\u0441\u043c\u0438\u0435\u0432\u044b\u0435 \u043f\u043e\u043d\u043e\u0436\u0438", {name: "OsmiumLeggings"}, {type: "leggings", armor: 6, durability: 450, texture: "armor/osmium_2.png"});
Item.createArmorItem("OsmiumBoots", "\u041e\u0441\u043c\u0438\u0435\u0432\u044b\u0435 \u0431\u043e\u0442\u0438\u043d\u043a\u0438", {name: "OsmiumBoots"}, {type: "boots", armor: 3, durability: 390, texture: "armor/osmium_1.png"});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.OsmiumHelmet, count: 1, data: 0}, ["ooo", "o o", "   "], ["o", ItemID.ingotosmium, 0]);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.OsmiumChestplate, count: 1, data: 0}, ["o o", "ooo", "ooo"], ["o", ItemID.ingotosmium, 0]);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.OsmiumLeggings, count: 1, data: 0}, ["ooo", "o o", "o o"], ["o", ItemID.ingotosmium, 0]);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.OsmiumBoots, count: 1, data: 0}, ["   ", "o o", "o o"], ["o", ItemID.ingotosmium, 0]);
});

