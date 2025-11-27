IDRegistry.genItemID("xeonHelmet");
IDRegistry.genItemID("xeonChestplate");
IDRegistry.genItemID("xeonLeggings");
IDRegistry.genItemID("xeonBoots");
Item.createArmorItem("xeonHelmet", "Xeon Helmet", {name: "xeon_helmet"}, {type: "helmet", armor: 3, durability: 330, texture: "armor/xeon_0.png"});
Item.createArmorItem("xeonChestplate", "Xeon Chestplate", {name: "xeon_chestplate"}, {type: "chestplate", armor: 8, durability: 480, texture: "armor/xeon_0.png"});
Item.createArmorItem("xeonLeggings", "Xeon Leggings", {name: "xeon_leggins"}, {type: "leggings", armor: 6, durability: 450, texture: "armor/xeon_1.png"});
Item.createArmorItem("xeonBoots", "Xeon Boots", {name: "xeon_boots"}, {type: "boots", armor: 3, durability: 390, texture: "armor/xeon_0.png"});
Recipes.addShaped({id: ItemID.xeonHelmet, count: 1, data: 0}, ["xxx", "x x"], ["x", ItemID.xeonIngot, 0]);
Recipes.addShaped({id: ItemID.xeonChestplate, count: 1, data: 0}, ["x x", "xxx", "xxx"], ["x", ItemID.xeonIngot, 0]);
Recipes.addShaped({id: ItemID.xeonLeggings, count: 1, data: 0}, ["xxx", "x x", "x x"], ["x", ItemID.xeonIngot, 0]);
Recipes.addShaped({id: ItemID.xeonBoots, count: 1, data: 0}, ["x x", "x x"], ["x", ItemID.xeonIngot, 0]);

