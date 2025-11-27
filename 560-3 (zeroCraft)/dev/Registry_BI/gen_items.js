IDRegistry.genItemID("Scapolitedust");
Item.createItem("Scapolitedust", "Scapolite Dust", {name: "ore00", meta: 0}, {stack: 64});

IDRegistry.genItemID("Scapolitepart");
Item.createItem("Scapolitepart", "Part Of Scapolite", {name: "scapolite", meta: 0}, {stack: 64});

IDRegistry.genItemID("Scapolitebar");
Item.createItem("Scapolitebar", "Scapolite Ingot", {name: "scapolite_ignot", meta: 0}, {stack: 64});

IDRegistry.genItemID("Scapolitebardiam");
Item.createItem("Scapolitebardiam", "Diamond Scapolite Ingot", {name: "scapolite_ignot_diam", meta: 0}, {stack: 64});

IDRegistry.genItemID("Latunebar");
Item.createItem("Latunebar", "Latune Ingot", {name: "ore01", meta: 0}, {stack: 64});

IDRegistry.genItemID("ScapoliteHelmet");
Item.createArmorItem("ScapoliteHelmet", "Scapolite Helmet", {name: "scapolite_helmet"}, {type: "helmet", armor: 4, durability: 1300, texture: "armor/scapolite1_1.png"});

IDRegistry.genItemID("ScapoliteChestplate");
Item.createArmorItem("ScapoliteChestplate", "Scapolite Chestplate", {name: "scapolite_chestplate"}, {type: "chestplate", armor: 6, durability: 1300, texture: "armor/scapolite1_1.png"});

IDRegistry.genItemID("ScapoliteLeggings");
Item.createArmorItem("ScapoliteLeggings", "Scapolite Leggings", {name: "scapolite_leggings"}, {type: "leggings", armor: 6, durability: 1300, texture: "armor/scapolite_2.png"});

IDRegistry.genItemID("ScapoliteBoots");
Item.createArmorItem("ScapoliteBoots", "Scapolite Boots", {name: "scapolite_boots"}, {type: "boots", armor: 4, durability: 1300, texture: "armor/scapolite1_1.png"});

IDRegistry.genItemID("scapolite_pickaxe")
Item.createItem("scapolite_pickaxe", "Scapolite Pickaxe", {name: "scapolite_pickaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID["scapolite_pickaxe"], "scapolite", ToolType.pickaxe);

IDRegistry.genItemID("scapolite_axe")
Item.createItem("scapolite_axe", "Scapolite Axe", {name: "scapolite_axe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID["scapolite_axe"], "scapolite", ToolType.axe); 

IDRegistry.genItemID("scapolite_sword")
Item.createItem("scapolite_sword", "Scapolite Sword", {name: "scapolite_sword", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID["scapolite_sword"], "scapoliteswrd", ToolType.sword);

IDRegistry.genItemID("scapolite_destroy")
Item.createItem("scapolite_destroy", "Scapolite Destroyer", {name: "scapolite_destroy", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID["scapolite_destroy"], "scapolitedestroy", ToolType.pickaxe);
