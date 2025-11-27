IDRegistry.genItemID("taegoreHelmet");
Item.createArmorItem("taegoreHelmet", "Taegore Helmet", {name: "taegore_hide_helmet"}, {type: "helmet", armor: 3, durability: 132, texture: "armor/taegore_hide_layerb_1.png"});

IDRegistry.genItemID("taegoreChestplate");
Item.createArmorItem("taegoreChestplate", "Taegore Chestplate", {name: "taegore_hide_chestplate"}, {type: "chestplate", armor: 4, durability: 178, texture: "armor/taegore_hide_layerb_1.png"});

IDRegistry.genItemID("taegoreLeggings");
Item.createArmorItem("taegoreLeggings", "Taegore Leggings", {name: "taegore_hide_leggings"}, {type: "leggings", armor: 3, durability: 162, texture: "armor/taegore_hide_layer_2.png"});

IDRegistry.genItemID("taegoreBoots");
Item.createArmorItem("taegoreBoots", "Taegore Boots", {name: "taegore_hide_boots"}, {type: "boots", armor: 2, durability: 123, texture: "armor/taegore_hide_layerb_1.png"});

Item.addRepairItemIds(ItemID.taegoreHelmet, [ItemID.taegoreSkin, ItemID.taegoreHelmet]);
Item.addRepairItemIds(ItemID.taegoreChestplate, [ItemID.taegoreSkin, ItemID.taegoreChestplate]);
Item.addRepairItemIds(ItemID.taegoreLeggings, [ItemID.taegoreSkin, ItemID.taegoreLeggings]);
Item.addRepairItemIds(ItemID.taegoreBoots, [ItemID.taegoreSkin, ItemID.taegoreBoots]);

Recipes.addShaped({id: ItemID.taegoreHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.taegoreSkin, 0]);

Recipes.addShaped({id: ItemID.taegoreChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.taegoreSkin, 0]);

Recipes.addShaped({id: ItemID.taegoreLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.taegoreSkin, 0]);

Recipes.addShaped({id: ItemID.taegoreBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.taegoreSkin, 0]);


IDRegistry.genItemID("zaniteHelmet");
Item.createArmorItem("zaniteHelmet", "Zanite Helmet", {name: "zanite_helmet"}, {type: "helmet", armor: 2, durability: 149, texture: "armor/zanite_layerb_1.png"});

IDRegistry.genItemID("zaniteChestplate");
Item.createArmorItem("zaniteChestplate", "Zanite Chestplate", {name: "zanite_chestplate"}, {type: "chestplate", armor: 6, durability: 216, texture: "armor/zanite_layerb_1.png"});

IDRegistry.genItemID("zaniteLeggings");
Item.createArmorItem("zaniteLeggings", "Zanite Leggings", {name: "zanite_leggings"}, {type: "leggings", armor: 5, durability: 203, texture: "armor/zanite_layer_2.png"});

IDRegistry.genItemID("zaniteBoots");
Item.createArmorItem("zaniteBoots", "Zanite Boots", {name: "zanite_boots"}, {type: "boots", armor: 2, durability: 176, texture: "armor/zanite_layerb_1.png"});

Item.addRepairItemIds(ItemID.zaniteHelmet, [ItemID.zaniteGemstone, ItemID.zaniteHelmet]);
Item.addRepairItemIds(ItemID.zaniteChestplate, [ItemID.zaniteGemstone, ItemID.zaniteChestplate]);
Item.addRepairItemIds(ItemID.zaniteLeggings, [ItemID.zaniteGemstone, ItemID.zaniteLeggings]);
Item.addRepairItemIds(ItemID.zaniteBoots, [ItemID.zaniteGemstone, ItemID.zaniteBoots]);


Recipes.addShaped({id: ItemID.zaniteHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.zaniteGemstone, 0]);

Recipes.addShaped({id: ItemID.zaniteChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.zaniteGemstone, 0]);

Recipes.addShaped({id: ItemID.zaniteLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.zaniteGemstone, 0]);

Recipes.addShaped({id: ItemID.zaniteBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.zaniteGemstone, 0]);

