IDRegistry.genItemID("BronzeHelmet");
IDRegistry.genItemID("BronzeChestplate");
IDRegistry.genItemID("BronzeLeggings");
IDRegistry.genItemID("BronzeBoots");
Item.createArmorItem("BronzeHelmet", "\u0411\u0440\u043e\u043d\u0437\u043e\u0432\u044b\u0439 \u0448\u043b\u0435\u043c", {name: "BronzeHelmet"}, {type: "helmet", armor: 3, durability: 385, texture: "armor/bronze_1.png"});
Item.createArmorItem("BronzeChestplate", "\u0411\u0440\u043e\u043d\u0437\u043e\u0432\u0430\u044f \u043a\u0438\u0441\u0430\u0440\u0430", {name: "BronzeChestplate"}, {type: "chestplate", armor: 8, durability: 560, texture: "armor/bronze_1.png"});
Item.createArmorItem("BronzeLeggings", "\u0411\u0440\u043e\u043d\u0437\u043e\u0432\u044b\u0435 \u043f\u043e\u043d\u043e\u0436\u0438", {name: "BronzeLeggings"}, {type: "leggings", armor: 6, durability: 525, texture: "armor/bronze_2.png"});
Item.createArmorItem("BronzeBoots", "\u0411\u0440\u043e\u043d\u0437\u043e\u0432\u044b\u0435 \u0431\u043e\u0442\u0438\u043d\u043a\u0438", {name: "BronzeBoots"}, {type: "boots", armor: 3, durability: 455, texture: "armor/bronze_1.png"});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.BronzeHelmet, count: 1, data: 0}, ["ooo", "o o", "   "], ["o", ItemID.BronzeIngot, 0]);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.BronzeChestplate, count: 1, data: 0}, ["o o", "ooo", "ooo"], ["o", ItemID.BronzeIngot, 0]);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.BronzeLeggings, count: 1, data: 0}, ["ooo", "o o", "o o"], ["o", ItemID.BronzeIngot, 0]);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.BronzeBoots, count: 1, data: 0}, ["   ", "o o", "o o"], ["o", ItemID.BronzeIngot, 0]);
});
IDRegistry.genItemID("GlowstoneHelmet");
IDRegistry.genItemID("GlowstoneChestplate");
IDRegistry.genItemID("GlowstoneLeggings");
IDRegistry.genItemID("GlowstoneBoots");
Item.createArmorItem("GlowstoneHelmet", "\u0428\u043b\u0435\u043c \u0438\u0437 \u0441\u0432\u0435\u0442\u044f\u0449\u0435\u0433\u043e\u0441\u044f \u043a\u0430\u043c\u043d\u044f", {name: "GlowstoneHelmet"}, {type: "helmet", armor: 3, durability: 198, texture: "armor/glowstone_1.png"});
Item.createArmorItem("GlowstoneChestplate", "\u041a\u0438\u0441\u0430\u0440\u0430  \u0438\u0437 \u0441\u0432\u0435\u0442\u044f\u0449\u0435\u0433\u043e\u0441\u044f \u043a\u0430\u043c\u043d\u044f", {name: "GlowstoneChestplate"}, {type: "chestplate", armor: 8, durability: 288, texture: "armor/glowstone_1.png"});
Item.createArmorItem("GlowstoneLeggings", "\u041f\u043e\u043d\u043e\u0436\u0438  \u0438\u0437 \u0441\u0432\u0435\u0442\u044f\u0449\u0435\u0433\u043e\u0441\u044f \u043a\u0430\u043c\u043d\u044f", {name: "GlowstoneLeggings"}, {type: "leggings", armor: 6, durability: 270, texture: "armor/glowstone_2.png"});
Item.createArmorItem("GlowstoneBoots", "\u0411\u043e\u0442\u0438\u043d\u043a\u0438  \u0438\u0437 \u0441\u0432\u0435\u0442\u044f\u0449\u0435\u0433\u043e\u0441\u044f \u043a\u0430\u043c\u043d\u044f", {name: "GlowstoneBoots"}, {type: "boots", armor: 3, durability: 234, texture: "armor/glowstone_1.png"});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.GlowstoneHelmet, count: 1, data: 0}, ["ooo", "o o", "   "], ["o", ItemID.GlowstoneIngot, 0]);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.GlowstoneChestplate, count: 1, data: 0}, ["o o", "ooo", "ooo"], ["o", ItemID.GlowstoneIngot, 0]);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.GlowstoneLeggings, count: 1, data: 0}, ["ooo", "o o", "o o"], ["o", ItemID.GlowstoneIngot, 0]);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.GlowstoneBoots, count: 1, data: 0}, ["   ", "o o", "o o"], ["o", ItemID.GlowstoneIngot, 0]);
});
IDRegistry.genItemID("SteelHelmet");
IDRegistry.genItemID("SteelChestplate");
IDRegistry.genItemID("SteelLeggings");
IDRegistry.genItemID("SteelBoots");
Item.createArmorItem("SteelHelmet", "\u0421\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0448\u043b\u0435\u043c", {name: "SteelHelmet"}, {type: "helmet", armor: 3, durability: 440, texture: "armor/steel_1.png"});
Item.createArmorItem("SteelChestplate", "\u0421\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u043a\u0438\u0441\u0430\u0440\u0430", {name: "SteelChestplate"}, {type: "chestplate", armor: 8, durability: 640, texture: "armor/steel_1.png"});
Item.createArmorItem("SteelLeggings", "\u0421\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043d\u043e\u0436\u0438", {name: "SteelLeggings"}, {type: "leggings", armor: 6, durability: 600, texture: "armor/steel_2.png"});
Item.createArmorItem("SteelBoots", "\u0421\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0431\u043e\u0442\u0438\u043d\u043a\u0438", {name: "SteelBoots"}, {type: "boots", armor: 3, durability: 520, texture: "armor/steel_1.png"});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.SteelHelmet, count: 1, data: 0}, ["ooo", "i i", "   "], ["o", ItemID.SteelIngot, 0, "i", 265, 0]);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.SteelChestplate, count: 1, data: 0}, ["i i", "ooo", "ooo"], ["o", ItemID.SteelIngot, 0, "i", 265, 0]);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.SteelLeggings, count: 1, data: 0}, ["ioi", "o o", "o o"], ["o", ItemID.SteelIngot, 0, "i", 265, 0]);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.SteelBoots, count: 1, data: 0}, ["   ", "i o", "o i"], ["o", ItemID.SteelIngot, 0, "i", 265, 0]);
});

