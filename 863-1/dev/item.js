IDRegistry.genItemID("pili_soul");
Item.createItem("pili_soul", "soul invader", {name: "pili_soul", meta: 0}); 

IDRegistry.genItemID("spawnerchunk");
Item.createItem("spawnerchunk", "spawner scrap", {name: "spawnerscrab", meta: 0},{stack: 64});


IDRegistry.genItemID("bedbre");
Item.createItem("bedbre", "Bedrock breaker", {name: "bedbre", meta: 0}, {stack: 1});
Item.setGlint(ItemID.bedbre, true);



IDRegistry.genItemID("soulHelmet");
Item.createArmorItem("soulHelmet", "soul Helmet", {name: "soul_helmet"}, {type: "helmet", armor: 3, durability: 1530, texture: "armor/soul_1.png"});

IDRegistry.genItemID("soulChestplate");
Item.createArmorItem("soulChestplate", "soul Chestplate", {name: "soul_chestplate"}, {type: "chestplate", armor: 8, durability: 1780, texture: "armor/soul_1.png"});

IDRegistry.genItemID("soulLeggings");
Item.createArmorItem("soulLeggings", "soul Leggings", {name: "soul_leggings"}, {type: "leggings", armor: 6, durability: 1650, texture: "armor/soul_2.png"});

IDRegistry.genItemID("soulBoots");
Item.createArmorItem("soulBoots", "soul Boots", {name: "soul_boots"}, {type: "boots", armor: 3, durability: 1590, texture: "armor/soul_1.png"});


ToolAPI.addToolMaterial("headKT", {
      durability: 462, 
      level: 5, 
      efficiency: 2, 
      damage: 7, 
      enchantability: 15
});



rippers.addItem("heaD", "headKT", ItemID.pili_soul, ItemID.spawnerchunk);


IDRegistry.genItemID("wither_staff");
Item.createItem("wither_staff", "Wither staff",{name: "wither_staff", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.wither_staff, 234);

IDRegistry.genItemID("dragon_staff");
Item.createItem("dragon_staff", "Dragon staff",{name: "dragon_staff", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.dragon_staff, 234);

IDRegistry.genItemID("ghast_staff");
Item.createItem("ghast_staff", "Ghast staff",{name: "ghast_staff", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.ghast_staff, 234);

IDRegistry.genItemID("ifrit_staff");
Item.createItem("ifrit_staff", "Ifrit staff",{name: "ifrit_staff", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.ghast_staff, 234);

IDRegistry.genItemID("ender_staff");
Item.createItem("ender_staff", "Ender staff",{name: "ender_staff", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.ender_staff, 234);

IDRegistry.genItemID("tnt_staff");
Item.createItem("tnt_staff", "Tnt staff",{name: "tnt_staff", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.tnt_staff, 234);

IDRegistry.genItemID("phantom_staff");
Item.createItem("phantom_staff", "phantom staff",{name: "phantom_staff", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.phantom_staff, 234);





