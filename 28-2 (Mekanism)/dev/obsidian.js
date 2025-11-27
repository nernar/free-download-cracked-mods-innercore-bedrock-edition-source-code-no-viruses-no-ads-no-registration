IDRegistry.genItemID("obsidianHelmet");
IDRegistry.genItemID("obsidianChestplate");
IDRegistry.genItemID("obsidianLeggings");
IDRegistry.genItemID("obsidianBoots");
Item.createArmorItem("obsidianHelmet", "\u041e\u0431\u0441\u0438\u0434\u0438\u0430\u043d\u043e\u0432\u044b\u0439 \u0448\u043b\u0435\u043c", {name: "ObsidianHelmet"}, {type: "helmet", armor: 3, durability: 550, texture: "armor/obsidian_1.png"});
Item.createArmorItem("obsidianChestplate", "\u041e\u0431\u0441\u0438\u0434\u0438\u0430\u043d\u043e\u0432\u0430\u044f \u043a\u0438\u0441\u0430\u0440\u0430", {name: "ObsidianChestplate"}, {type: "chestplate", armor: 8, durability: 800, texture: "armor/obsidian_1.png"});
Item.createArmorItem("obsidianLeggings", "\u041e\u0431\u0441\u0438\u0434\u0438\u0430\u043d\u043e\u0432\u044b\u0435 \u043f\u043e\u043d\u043e\u0436\u0438", {name: "ObsidianLeggings"}, {type: "leggings", armor: 6, durability: 750, texture: "armor/obsidian_2.png"});
Item.createArmorItem("obsidianBoots", "\u041e\u0431\u0441\u0438\u0434\u0438\u0430\u043d\u043e\u0432\u044b\u0435 \u0431\u043e\u0442\u0438\u043d\u043a\u0438", {name: "ObsidianBoots"}, {type: "boots", armor: 3, durability: 650, texture: "armor/obsidian_1.png"});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.obsidianHelmet, count: 1, data: 0}, ["ooo", "o o", "   "], ["o", ItemID.ObsidianIngot, 0]);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.obsidianChestplate, count: 1, data: 0}, ["o o", "ooo", "ooo"], ["o", ItemID.ObsidianIngot, 0]);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.obsidianLeggings, count: 1, data: 0}, ["ooo", "o o", "o o"], ["o", ItemID.ObsidianIngot, 0]);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.obsidianBoots, count: 1, data: 0}, ["   ", "o o", "o o"], ["o", ItemID.ObsidianIngot, 0]);
});

