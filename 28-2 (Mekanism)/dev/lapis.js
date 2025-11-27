IDRegistry.genItemID("lapisHelmet");
IDRegistry.genItemID("lapisChestplate");
IDRegistry.genItemID("lapisLeggings");
IDRegistry.genItemID("lapisBoots");
Item.createArmorItem("lapisHelmet", "\u041b\u0430\u0437\u0443\u0440\u0438\u0442\u043e\u0432\u044b\u0439 \u0448\u043b\u0435\u043c", {name: "LazuliHelmet"}, {type: "helmet", armor: 3, durability: 143, texture: "armor/lazuli_1.png"});
Item.createArmorItem("lapisChestplate", "\u041b\u0430\u0437\u0443\u0440\u0438\u0442\u043e\u0432\u0430\u044f \u043a\u0438\u0441\u0430\u0440\u0430", {name: "LazuliChestplate"}, {type: "chestplate", armor: 8, durability: 208, texture: "armor/lazuli_1.png"});
Item.createArmorItem("lapisLeggings", "\u041b\u0430\u0437\u0443\u0440\u0438\u0442\u043e\u0432\u044b\u0435 \u043f\u043e\u043d\u043e\u0436\u0438", {name: "LazuliLeggings"}, {type: "leggings", armor: 6, durability: 195, texture: "armor/lazuli_2.png"});
Item.createArmorItem("lapisBoots", "\u041b\u0430\u0437\u0443\u0440\u0438\u0442\u043e\u0432\u044b\u0435 \u0431\u043e\u0442\u0438\u043d\u043a\u0438", {name: "LazuliBoots"}, {type: "boots", armor: 3, durability: 169, texture: "armor/lazuli_1.png"});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.lapisHelmet, count: 1, data: 0}, ["ooo", "o o", "   "], ["o", 351, 4]);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.lapisChestplate, count: 1, data: 0}, ["o o", "ooo", "ooo"], ["o", 351, 4]);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.lapisLeggings, count: 1, data: 0}, ["ooo", "o o", "o o"], ["o", 351, 4]);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.lapisBoots, count: 1, data: 0}, ["   ", "o o", "o o"], ["o", 351, 4]);
});

