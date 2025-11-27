

IDRegistry.genItemID("ancientB_helmet");
IDRegistry.genItemID("ancientB_chestplate");
IDRegistry.genItemID("ancientB_leggings");
IDRegistry.genItemID("ancientB_boots");
IDRegistry.genItemID("ancientP_helmet");
IDRegistry.genItemID("ancientP_chestplate");
IDRegistry.genItemID("ancientP_leggings");
IDRegistry.genItemID("ancientP_boots");

Item.createArmorItem("ancientB_helmet", "Ancient Armored Helmet", {name: "ancient_helmetb", meta: 0}, {type: "helmet", armor: 3, durability: 2450, texture: "armor/ancientB_1.png"});

Item.createArmorItem("ancientB_chestplate", "Ancient Armored Chestplate", {name: "ancient_chestplateb", meta: 0}, {type: "chestplate", armor: 6, durability: 2450, texture: "armor/ancientB_1.png"});

Item.createArmorItem("ancientB_leggings", "Ancient Armored Leggings", {name: "ancient_leggingsb", meta: 0}, {type: "leggings", armor: 3, durability: 2450, texture: "armor/ancientB_2.png"});

Item.createArmorItem("ancientB_boots", "Ancient Armored Boots", {name: "ancient_bootsb", meta: 0}, {type: "boots", armor: 3, durability: 2450, texture: "armor/ancientB_1.png"});

Item.createArmorItem("ancientP_helmet", "Ancient Deadly Helmet", {name: "ancient_helmetp", meta: 0}, {type: "helmet", armor: 3, durability: 1625, texture: "armor/ancientP_1.png"});

Item.createArmorItem("ancientP_chestplate", "Ancient Deadly Chestplate", {name: "ancient_chestplatep", meta: 0}, {type: "chestplate", armor: 3, durability: 1625, texture: "armor/ancientP_1.png"});

Item.createArmorItem("ancientP_leggings", "Ancient Deadly Leggings", {name: "ancient_leggingsp", meta: 0}, {type: "leggings", armor: 3, durability: 1625, texture: "armor/ancientP_2.png"});

Item.createArmorItem("ancientP_boots", "Ancient Deadly Boots", {name: "ancient_bootsp", meta: 0}, {type: "boots", armor: 3, durability: 1625, texture: "armor/ancientP_1.png"});

UIbuttons.setButton(ItemID.ancientB_chestplate, "button_turtle");

UIbuttons.setButton(ItemID.ancientP_chestplate, "button_rage");