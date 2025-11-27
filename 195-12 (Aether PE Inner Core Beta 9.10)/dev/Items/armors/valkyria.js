IDRegistry.genItemID("valkyriaHelmet");
Item.createArmorItem("valkyriaHelmet", "Valkyrie Helmet", {name: "valkyrie_helmet"}, {type: "helmet", armor: 5, durability: 1025, texture: "armor/Valkyrie_1.png"});

IDRegistry.genItemID("valkyriaChestplate");
Item.createArmorItem("valkyriaChestplate", "Valkyrie Chestplate", {name: "valkyrie_chestplate"}, {type: "chestplate", armor: 7, durability: 1596, texture: "armor/Valkyrie_1.png"});

IDRegistry.genItemID("valkyriaLeggings");
Item.createArmorItem("valkyriaLeggings", "Valkyrie Leggings", {name: "valkyrie_leggings"}, {type: "leggings", armor: 6, durability: 1541, texture: "armor/Valkyrie_2.png"});

IDRegistry.genItemID("valkyriaBoots");
Item.createArmorItem("valkyriaBoots", "Valkyrie Boots", {name: "valkyrie_boots"}, {type: "boots", armor: 5, durability: 1355, texture: "armor/Valkyrie_1.png"});

//PHEONIX
IDRegistry.genItemID("phoenixHelmet");
Item.createArmorItem("phoenixHelmet", "Phoenix Helmet", {name: "phoenix_helmet"}, {type: "helmet", armor: 2, durability: 1001, texture: "armor/Phoenix_1.png"});

IDRegistry.genItemID("phoenixChestplate");
Item.createArmorItem("phoenixChestplate", "Phoenix Chestplate", {name: "phoenix_chestplate"}, {type: "chestplate", armor: 5, durability: 1562, texture: "armor/Phoenix_1.png"});

IDRegistry.genItemID("phoenixLeggings");
Item.createArmorItem("phoenixLeggings", "Phoenix Leggings", {name: "phoenix_leggings"}, {type: "leggings", armor: 4, durability: 1520, texture: "armor/Phoenix_2.png"});

IDRegistry.genItemID("phoenixBoots");
Item.createArmorItem("phoenixBoots", "Phoenix Boots", {name: "phoenix_boots"}, {type: "boots", armor: 2, durability: 1342, texture: "armor/Phoenix_1.png"});

//OBSIDIAN
IDRegistry.genItemID("obsidianHelmet");
Item.createArmorItem("obsidianHelmet", "Obsidian Helmet", {name: "obsidian_helmet"}, {type: "helmet", armor: 2, durability: 1234, texture: "armor/Obsidian_1.png"});

IDRegistry.genItemID("obsidianChestplate");
Item.createArmorItem("obsidianChestplate", "Obsidian Chestplate", {name: "obsidian_chestplate"}, {type: "chestplate", armor: 6, durability: 1666, texture: "armor/Obsidian_1.png"});

IDRegistry.genItemID("obsidianLeggings");
Item.createArmorItem("obsidianLeggings", "Obsidian Leggings", {name: "obsidian_leggings"}, {type: "leggings", armor: 5, durability: 1524, texture: "armor/Obsidian_2.png"});

IDRegistry.genItemID("obsidianBoots");
Item.createArmorItem("obsidianBoots", "Obsidian Boots", {name: "obsidian_boots"}, {type: "boots", armor: 2, durability: 1353, texture: "armor/Obsidian_1.png"});

Recipes.addShaped({id: ItemID.obsidianHelmet, count: 1, data: 0}, [
    "xxx",
    "xcx",
    "xxx"
], ['x', ItemID.icestone, 0, 'c', ItemID.phoenixHelmet, 0]);

Recipes.addShaped({id: ItemID.obsidianChestplate, count: 1, data: 0}, [
    "xxx",
    "xcx",
    "xxx"
], ['x', ItemID.icestone, 0, 'c', ItemID.phoenixChestplate, 0]);

Recipes.addShaped({id: ItemID.obsidianLeggings, count: 1, data: 0}, [
    "xxx",
    "xcx",
    "xxx"
], ['x', ItemID.icestone, 0, 'c', ItemID.phoenixLeggings, 0]);

Recipes.addShaped({id: ItemID.obsidianBoots, count: 1, data: 0}, [
    "xxx",
    "xcx",
    "xxx"
], ['x', ItemID.icestone, 0, 'c', ItemID.phoenixBoots, 0]);

//Neptune
IDRegistry.genItemID("neptuneHelmet");
Item.createArmorItem("neptuneHelmet", "Neptune Helmet", {name: "neptune_helmet"}, {type: "helmet", armor: 3, durability: 4334, texture: "armor/Neptune_1.png"});

IDRegistry.genItemID("neptuneChestplate");
Item.createArmorItem("neptuneChestplate", "Neptune Chestplate", {name: "neptune_chestplate"}, {type: "chestplate", armor: 8, durability: 4777, texture: "armor/Neptune_1.png"});

IDRegistry.genItemID("neptuneLeggings");
Item.createArmorItem("neptuneLeggings", "Neptune Leggings", {name: "neptune_leggings"}, {type: "leggings", armor: 6, durability: 4625, texture: "armor/Neptune_2.png"});

IDRegistry.genItemID("neptuneBoots");
Item.createArmorItem("neptuneBoots", "Neptune Boots", {name: "neptune_boots"}, {type: "boots", armor: 3, durability: 4400, texture: "armor/Neptune_1.png"});