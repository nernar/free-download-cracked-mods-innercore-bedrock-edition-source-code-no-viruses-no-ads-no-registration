IDRegistry.genItemID("burrukaiHelmet");
Item.createArmorItem("burrukaiHelmet", "Burrukai Helmet", {name: "burrukai_pelt_helmet"}, {type: "helmet", armor: 3, durability: 132, texture: "armor/burrukai_pelt_layer_1.png"});

IDRegistry.genItemID("burrukaiChestplate");
Item.createArmorItem("burrukaiChestplate", "Burrukai Chestplate", {name: "burrukai_pelt_chestplate"}, {type: "chestplate", armor: 5, durability: 178, texture: "armor/burrukai_pelt_layer_1.png"});

IDRegistry.genItemID("burrukaiLeggings");
Item.createArmorItem("burrukaiLeggings", "Burrukai Leggings", {name: "burrukai_pelt_leggings"}, {type: "leggings", armor: 3, durability: 162, texture: "armor/burrukai_pelt_layer_2.png"});

IDRegistry.genItemID("burrukaiBoots");
Item.createArmorItem("burrukaiBoots", "Burrukai Boots", {name: "burrukai_pelt_boots"}, {type: "boots", armor: 2, durability: 123, texture: "armor/burrukai_pelt_layer_1.png"});

Item.addRepairItemIds(ItemID.burrukaiHelmet, [ItemID.burrukaiSkin, ItemID.burrukaiHelmet]);
Item.addRepairItemIds(ItemID.burrukaiChestplate, [ItemID.burrukaiSkin, ItemID.burrukaiChestplate]);
Item.addRepairItemIds(ItemID.burrukaiLeggings, [ItemID.burrukaiSkin, ItemID.burrukaiLeggings]);
Item.addRepairItemIds(ItemID.burrukaiBoots, [ItemID.burrukaiSkin, ItemID.burrukaiBoots]);

Recipes.addShaped({id: ItemID.burrukaiHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.burrukaiSkin, 0]);

Recipes.addShaped({id: ItemID.burrukaiChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.burrukaiSkin, 0]);

Recipes.addShaped({id: ItemID.burrukaiLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.burrukaiSkin, 0]);

Recipes.addShaped({id: ItemID.burrukaiBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.burrukaiSkin, 0]);