//Мод создал Данил Аминев

//Предметы

IDRegistry.genItemID("ingotAmethyst");
IDRegistry.genItemID("ingotBauxite");
IDRegistry.genItemID("ingotBronze");
IDRegistry.genItemID("ingotChromate");
IDRegistry.genItemID("ingotFluorite");
IDRegistry.genItemID("ingotJade");
IDRegistry.genItemID("ingotLead");
IDRegistry.genItemID("crystalOpal");
IDRegistry.genItemID("ingotPlatinum");
IDRegistry.genItemID("ingotSilver");
IDRegistry.genItemID("dustBronze");
IDRegistry.genItemID("dustCopper");
IDRegistry.genItemID("dustTin");


Item.createItem("ingotAmethyst", "Amethyst Ingot", {name: "IAmethyst"});
Item.createItem("ingotBauxite", "Bauxite Ingot", {name: "IBauxite"});
Item.createItem("ingotBronze", "Bronze Ingot", {name: "IBronze"});
Item.createItem("ingotChromate", "Chromate Ingot", {name: "IChromate"});
Item.createItem("ingotFluorite", "Fluorite Ingot", {name: "IFluorite"});
Item.createItem("ingotJade", "Jade Ingot", {name: "IJade"});
Item.createItem("ingotLead", "Lead Ingot", {name: "ILead"});
Item.createItem("crystalOpal", "Opal Crystal", {name: "COpal"});
Item.createItem("ingotPlatinum", "Platinum Ingot", {name: "IPlatinum"});
Item.createItem("ingotSilver", "Silver Ingot", {name: "ISilver"});
Item.createItem("dustBronze", "Bronze Dust", {name: "DBronze"});
Item.createItem("dustCopper", "Copper Dust", {name: "DCopper"});
Item.createItem("dustTin", "Tin Dust", {name: "DTin"});

//vars
var bd = 1000000000000;
importLib("ToolType", "*");


//Amethyst

IDRegistry.genItemID("amethystSword");
IDRegistry.genItemID("amethystShovel");
IDRegistry.genItemID("amethystPickaxe");
IDRegistry.genItemID("amethystAxe");
IDRegistry.genItemID("amethystHoe");
Item.createItem("amethystSword", "Amethyst Sword", {name: "SAmethyst", meta: 0}, {stack: 1});
Item.createItem("amethystShovel", "Amethyst Shovel", {name: "ShAmethyst", meta: 0}, {stack: 1});
Item.createItem("amethystPickaxe", "Amethyst Pickaxe", {name: "PAmethyst", meta: 0}, {stack: 1});
Item.createItem("amethystAxe", "Amethyst Axe", {name: "AAmethyst", meta: 0}, {stack: 1});
Item.createItem("amethystHoe", "Amethyst Hoe", {name: "HAmethyst", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("amethyst", {durability: 1600, level: 3, efficiency: 6, damage: 9, enchantability: 13});
ToolAPI.setTool(ItemID.amethystSword, "amethyst", ToolType.sword);
ToolAPI.setTool(ItemID.amethystShovel, "amethyst", ToolType.shovel);
ToolAPI.setTool(ItemID.amethystPickaxe, "amethyst", ToolType.pickaxe);
ToolAPI.setTool(ItemID.amethystAxe, "amethyst", ToolType.axe);
ToolAPI.setTool(ItemID.amethystHoe, "amethyst", ToolType.hoe);

//Bauxite

IDRegistry.genItemID("bauxiteSword");
IDRegistry.genItemID("bauxiteShovel");
IDRegistry.genItemID("bauxitePickaxe");
IDRegistry.genItemID("bauxiteAxe");
IDRegistry.genItemID("bauxiteHoe");
Item.createItem("bauxiteSword", "Bauxite Sword", {name: "SBauxite", meta: 0}, {stack: 1});
Item.createItem("bauxiteShovel", "Bauxite Shovel", {name: "ShBauxite", meta: 0}, {stack: 1});
Item.createItem("bauxitePickaxe", "Bauxite Pickaxe", {name: "PBauxite", meta: 0}, {stack: 1});
Item.createItem("bauxiteAxe", "Bauxite Axe", {name: "ABauxite", meta: 0}, {stack: 1});
Item.createItem("bauxiteHoe", "Bauxite Hoe", {name: "HBauxite", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("bauxite", {durability: 1100, level: 2, efficiency: 4, damage: 6, enchantability: 11});
ToolAPI.setTool(ItemID.bauxiteSword, "bauxite", ToolType.sword);
ToolAPI.setTool(ItemID.bauxiteShovel, "bauxite", ToolType.shovel);
ToolAPI.setTool(ItemID.bauxitePickaxe, "bauxite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.bauxiteAxe, "bauxite", ToolType.axe);
ToolAPI.setTool(ItemID.bauxiteHoe, "bauxite", ToolType.hoe);

//Bronze

IDRegistry.genItemID("bronzeSword");
IDRegistry.genItemID("bronzeShovel");
IDRegistry.genItemID("bronzePickaxe");
IDRegistry.genItemID("bronzeAxe");
IDRegistry.genItemID("bronzeHoe");
Item.createItem("bronzeSword", "Bronze Sword", {name: "SBronze", meta: 0}, {stack: 1});
Item.createItem("bronzeShovel", "Bronze Shovel", {name: "ShBronze", meta: 0}, {stack: 1});
Item.createItem("bronzePickaxe", "Bronze Pickaxe", {name: "PBronze", meta: 0}, {stack: 1});
Item.createItem("bronzeAxe", "Bronze Axe", {name: "ABronze", meta: 0}, {stack: 1});
Item.createItem("bronzeHoe", "Bronze Hoe", {name: "HBronze", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("bronze", {durability: 400, level: 2, efficiency: 3, damage: 5, enchantability: 8});
ToolAPI.setTool(ItemID.bronzeSword, "bronze", ToolType.sword);
ToolAPI.setTool(ItemID.bronzeShovel, "bronze", ToolType.shovel);
ToolAPI.setTool(ItemID.bronzePickaxe, "bronze", ToolType.pickaxe);
ToolAPI.setTool(ItemID.bronzeAxe, "bronze", ToolType.axe);
ToolAPI.setTool(ItemID.bronzeHoe, "bronze", ToolType.hoe);

//Chromate

IDRegistry.genItemID("chromateSword");
IDRegistry.genItemID("chromateShovel");
IDRegistry.genItemID("chromatePickaxe");
IDRegistry.genItemID("chromateAxe");
IDRegistry.genItemID("chromateHoe");
Item.createItem("chromateSword", "Chromate Sword", {name: "SChromate", meta: 0}, {stack: 1});
Item.createItem("chromateShovel", "Chromate Shovel", {name: "ShChromate", meta: 0}, {stack: 1});
Item.createItem("chromatePickaxe", "Chromate Pickaxe", {name: "PChromate", meta: 0}, {stack: 1});
Item.createItem("chromateAxe", "Chromate Axe", {name: "AChromate", meta: 0}, {stack: 1});
Item.createItem("chromateHoe", "Chromate Hoe", {name: "HChromate", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("chromate", {durability: 850, level: 2, efficiency: 5, damage: 6, enchantability: 10});
ToolAPI.setTool(ItemID.chromateSword, "chromate", ToolType.sword);
ToolAPI.setTool(ItemID.chromateShovel, "chromate", ToolType.shovel);
ToolAPI.setTool(ItemID.chromatePickaxe, "chromate", ToolType.pickaxe);
ToolAPI.setTool(ItemID.chromateAxe, "chromate", ToolType.axe);
ToolAPI.setTool(ItemID.chromateHoe, "chromate", ToolType.hoe);

//Fluorite

IDRegistry.genItemID("fluoriteSword");
IDRegistry.genItemID("fluoriteShovel");
IDRegistry.genItemID("fluoritePickaxe");
IDRegistry.genItemID("fluoriteAxe");
IDRegistry.genItemID("fluoriteHoe");
Item.createItem("fluoriteSword", "Fluorite Sword", {name: "SFluorite", meta: 0}, {stack: 1});
Item.createItem("fluoriteShovel", "Fluorite Shovel", {name: "ShFluorite", meta: 0}, {stack: 1});
Item.createItem("fluoritePickaxe", "Fluorite Pickaxe", {name: "PFluorite", meta: 0}, {stack: 1});
Item.createItem("fluoriteAxe", "Fluorite Axe", {name: "AFluorite", meta: 0}, {stack: 1});
Item.createItem("fluoriteHoe", "Fluorite Hoe", {name: "HFluorite", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("fluorite", {durability: 1200, level: 3, efficiency: 6, damage: 7, enchantability: 8});
ToolAPI.setTool(ItemID.fluoriteSword, "fluorite", ToolType.sword);
ToolAPI.setTool(ItemID.fluoriteShovel, "fluorite", ToolType.shovel);
ToolAPI.setTool(ItemID.fluoritePickaxe, "fluorite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.fluoriteAxe, "fluorite", ToolType.axe);
ToolAPI.setTool(ItemID.fluoriteHoe, "fluorite", ToolType.hoe);

//Jade

IDRegistry.genItemID("jadeSword");
IDRegistry.genItemID("jadeShovel");
IDRegistry.genItemID("jadePickaxe");
IDRegistry.genItemID("jadeAxe");
IDRegistry.genItemID("jadeHoe");
Item.createItem("jadeSword", "Jade Sword", {name: "SJade", meta: 0}, {stack: 1});
Item.createItem("jadeShovel", "Jade Shovel", {name: "ShJade", meta: 0}, {stack: 1});
Item.createItem("jadePickaxe", "Jade Pickaxe", {name: "PJade", meta: 0}, {stack: 1});
Item.createItem("jadeAxe", "Jade Axe", {name: "AJade", meta: 0}, {stack: 1});
Item.createItem("jadeHoe", "Jade Hoe", {name: "HJade", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("jade", {durability: 1000, level: 2, efficiency: 7, damage: 6, enchantability: 8});
ToolAPI.setTool(ItemID.jadeSword, "jade", ToolType.sword);
ToolAPI.setTool(ItemID.jadeShovel, "jade", ToolType.shovel);
ToolAPI.setTool(ItemID.jadePickaxe, "jade", ToolType.pickaxe);
ToolAPI.setTool(ItemID.jadeAxe, "jade", ToolType.axe);
ToolAPI.setTool(ItemID.jadeHoe, "jade", ToolType.hoe);

//Lead

IDRegistry.genItemID("leadSword");
IDRegistry.genItemID("leadShovel");
IDRegistry.genItemID("leadPickaxe");
IDRegistry.genItemID("leadAxe");
IDRegistry.genItemID("leadHoe");
Item.createItem("leadSword", "Lead Sword", {name: "SLead", meta: 0}, {stack: 1});
Item.createItem("leadShovel", "Lead Shovel", {name: "ShLead", meta: 0}, {stack: 1});
Item.createItem("leadPickaxe", "Lead Pickaxe", {name: "PLead", meta: 0}, {stack: 1});
Item.createItem("leadAxe", "Lead Axe", {name: "ALead", meta: 0}, {stack: 1});
Item.createItem("leadHoe", "Lead Hoe", {name: "HLead", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("lead", {durability: 800, level: 2, efficiency: 6, damage: 5, enchantability: 8});
ToolAPI.setTool(ItemID.leadSword, "lead", ToolType.sword);
ToolAPI.setTool(ItemID.leadShovel, "lead", ToolType.shovel);
ToolAPI.setTool(ItemID.leadPickaxe, "lead", ToolType.pickaxe);
ToolAPI.setTool(ItemID.leadAxe, "lead", ToolType.axe);
ToolAPI.setTool(ItemID.leadHoe, "lead", ToolType.hoe);

//Opal

IDRegistry.genItemID("opalSword");
IDRegistry.genItemID("opalShovel");
IDRegistry.genItemID("opalPickaxe");
IDRegistry.genItemID("opalAxe");
IDRegistry.genItemID("opalHoe");
Item.createItem("opalSword", "Opal Sword", {name: "SOpal", meta: 0}, {stack: 1});
Item.createItem("opalShovel", "Opal Shovel", {name: "ShOpal", meta: 0}, {stack: 1});
Item.createItem("opalPickaxe", "Opal Pickaxe", {name: "POpal", meta: 0}, {stack: 1});
Item.createItem("opalAxe", "Opal Axe", {name: "AOpal", meta: 0}, {stack: 1});
Item.createItem("opalHoe", "Opal Hoe", {name: "HOpal", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("opal", {durability: 2000, level: 3, efficiency: 7, damage: 10, enchantability: 15});
ToolAPI.setTool(ItemID.opalSword, "opal", ToolType.sword);
ToolAPI.setTool(ItemID.opalShovel, "opal", ToolType.shovel);
ToolAPI.setTool(ItemID.opalPickaxe, "opal", ToolType.pickaxe);
ToolAPI.setTool(ItemID.opalAxe, "opal", ToolType.axe);
ToolAPI.setTool(ItemID.opalHoe, "opal", ToolType.hoe);

//Platinum

IDRegistry.genItemID("platinumSword");
IDRegistry.genItemID("platinumShovel");
IDRegistry.genItemID("platinumPickaxe");
IDRegistry.genItemID("platinumAxe");
IDRegistry.genItemID("platinumHoe");
Item.createItem("platinumSword", "Platinum Sword", {name: "SPlatinum", meta: 0}, {stack: 1});
Item.createItem("platinumShovel", "Platinum Shovel", {name: "ShPlatinum", meta: 0}, {stack: 1});
Item.createItem("platinumPickaxe", "Platinum Pickaxe", {name: "PPlatinum", meta: 0}, {stack: 1});
Item.createItem("platinumAxe", "Platinum Axe", {name: "APlatinum", meta: 0}, {stack: 1});
Item.createItem("platinumHoe", "Platinum Hoe", {name: "HPlatinum", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("platinum", {durability: 750, level: 2, efficiency: 6, damage: 7, enchantability: 10});
ToolAPI.setTool(ItemID.platinumSword, "platinum", ToolType.sword);
ToolAPI.setTool(ItemID.platinumShovel, "platinum", ToolType.shovel);
ToolAPI.setTool(ItemID.platinumPickaxe, "platinum", ToolType.pickaxe);
ToolAPI.setTool(ItemID.platinumAxe, "platinum", ToolType.axe);
ToolAPI.setTool(ItemID.platinumHoe, "platinum", ToolType.hoe);

//Silver

IDRegistry.genItemID("silverSword");
IDRegistry.genItemID("silverShovel");
IDRegistry.genItemID("silverPickaxe");
IDRegistry.genItemID("silverAxe");
IDRegistry.genItemID("silverHoe");
Item.createItem("silverSword", "Silver Sword", {name: "SSilver", meta: 0}, {stack: 1});
Item.createItem("silverShovel", "Silver Shovel", {name: "ShSilver", meta: 0}, {stack: 1});
Item.createItem ("silverPickaxe", "Silver Pickaxe", {name: "PSilver", meta: 0}, {stack: 1});
Item.createItem("silverAxe", "Silver Axe", {name: "ASilver", meta: 0}, {stack: 1});
Item.createItem("silverHoe", "Silver Hoe", {name: "HSilver", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("silver", {durability: 700, level: 2, efficiency: 6, damage: 6, enchantability: 15});
ToolAPI.setTool(ItemID.silverSword, "silver", ToolType.sword);
ToolAPI.setTool(ItemID.silverShovel, "silver", ToolType.shovel);
ToolAPI.setTool(ItemID.silverPickaxe, "silver", ToolType.pickaxe);
ToolAPI.setTool(ItemID.silverAxe, "silver", ToolType.axe);
ToolAPI.setTool(ItemID.silverHoe, "silver", ToolType.hoe);

//AmethystArm

IDRegistry.genItemID("amethystHelmet");
IDRegistry.genItemID("amethystChestplate");
IDRegistry.genItemID("amethystLeggings");
IDRegistry.genItemID("amethystBoots");

Item.createArmorItem("amethystHelmet", "Amethyst Helmet", {name: "headAmethyst"}, {type: "helmet", armor: 4, durability: 1600, texture: "armor/amethyst_1.png"});
Item.createArmorItem("amethystChestplate", "Amethyst Chestplate", {name: "bodyAmethyst"}, {type: "chestplate", armor: 4, durability: 1600, texture: "armor/amethyst_1.png"});
Item.createArmorItem("amethystLeggings", "Amethyst Leggings", {name: "legsAmethyst"}, {type: "leggings", armor: 3, durability: 1600, texture: "armor/amethyst_2.png"});
Item.createArmorItem("amethystBoots", "Amethyst Boots", {name: "bootsAmethyst"}, {type: "boots", armor: 4, durability: 1560, texture: "armor/amethyst_1.png"});

//BauxiteArm

IDRegistry.genItemID("bauxiteHelmet");
IDRegistry.genItemID("bauxiteChestplate");
IDRegistry.genItemID("bauxiteLeggings");
IDRegistry.genItemID("bauxiteBoots");

Item.createArmorItem("bauxiteHelmet", "Bauxite Helmet", {name: "headBauxite"}, {type: "helmet", armor: 2, durability: 1100, texture: "armor/bauxite_1.png"});
Item.createArmorItem("bauxiteChestplate", "Bauxite Chestplate", {name: "bodyBauxite"}, {type: "chestplate", armor: 4, durability: 1100, texture: "armor/bauxite_1.png"});
Item.createArmorItem("bauxiteLeggings", "Bauxite Leggings", {name: "legsBauxite"}, {type: "leggings", armor: 3, durability: 1100, texture: "armor/bauxite_2.png"});
Item.createArmorItem("bauxiteBoots", "Bauxite Boots", {name: "bootsBauxite"}, {type: "boots", armor: 3, durability: 1060, texture: "armor/bauxite_1.png"});

//BronzeArm

IDRegistry.genItemID("bronzeHelmet");
IDRegistry.genItemID("bronzeChestplate");
IDRegistry.genItemID("bronzeLeggings");
IDRegistry.genItemID("bronzeBoots");

Item.createArmorItem("bronzeHelmet", "Bronze Helmet", {name: "headBronze"}, {type: "helmet", armor: 1, durability: 400, texture: "armor/bronze_1.png"});
Item.createArmorItem("bronzeChestplate", "Bronze Chestplate", {name: "bodyBronze"}, {type: "chestplate", armor: 3, durability: 400, texture: "armor/bronze_1.png"});
Item.createArmorItem("bronzeLeggings", "Bronze Leggings", {name: "legsBronze"}, {type: "leggings", armor: 2, durability: 400, texture: "armor/bronze_2.png"});
Item.createArmorItem("bronzeBoots", "Bronze Boots", {name: "bootsBronze"}, {type: "boots", armor: 2, durability: 360, texture: "armor/bronze_1.png"});

//ChromateArm

IDRegistry.genItemID("chromateHelmet");
IDRegistry.genItemID("chromateChestplate");
IDRegistry.genItemID("chromateLeggings");
IDRegistry.genItemID("chromateBoots");

Item.createArmorItem("chromateHelmet", "Chromate Helmet", {name: "headChromate"}, {type: "helmet", armor: 1, durability: 850, texture: "armor/chromate_1.png"});
Item.createArmorItem("chromateChestplate", "Chromate Chestplate", {name: "bodyChromate"}, {type: "chestplate", armor: 4, durability: 850, texture: "armor/chromate_1.png"});
Item.createArmorItem("chromateLeggings", "Chromate Leggings", {name: "legsChromate"}, {type: "leggings", armor: 3, durability: 850, texture: "armor/chromate_2.png"});
Item.createArmorItem("chromateBoots", "Chromate Boots", {name: "bootsChromate"}, {type: "boots", armor: 2, durability: 760, texture: "armor/chromate_1.png"});

//FluoriteArm

IDRegistry.genItemID("fluoriteHelmet");
IDRegistry.genItemID("fluoriteChestplate");
IDRegistry.genItemID("fluoriteLeggings");
IDRegistry.genItemID("fluoriteBoots");

Item.createArmorItem("fluoriteHelmet", "Fluorite Helmet", {name: "headFluorite"}, {type: "helmet", armor: 2, durability: 1200, texture: "armor/fluorite_1.png"});
Item.createArmorItem("fluoriteChestplate", "Fluorite Chestplate", {name: "bodyFluorite"}, {type: "chestplate", armor: 3, durability: 1200, texture: "armor/fluorite_1.png"});
Item.createArmorItem("fluoriteLeggings", "Fluorite Leggings", {name: "legsFluorite"}, {type: "leggings", armor: 3, durability: 1200, texture: "armor/fluorite_2.png"});
Item.createArmorItem("fluoriteBoots", "Fluorite Boots", {name: "bootsFluorite"}, {type: "boots", armor: 3, durability: 1160, texture: "armor/fluorite_1.png"});

//JadeArm

IDRegistry.genItemID("jadeHelmet");
IDRegistry.genItemID("jadeChestplate");
IDRegistry.genItemID("jadeLeggings");
IDRegistry.genItemID("jadeBoots");

Item.createArmorItem("jadeHelmet", "Jade Helmet", {name: "headJade"}, {type: "helmet", armor: 2, durability: 1000, texture: "armor/jade_1.png"});
Item.createArmorItem("jadeChestplate", "Jade Chestplate", {name: "bodyJade"}, {type: "chestplate", armor: 3, durability: 1000, texture: "armor/jade_1.png"});
Item.createArmorItem("jadeLeggings", "Jade Leggings", {name: "legsJade"}, {type: "leggings", armor: 2, durability: 1000, texture: "armor/jade_2.png"});
Item.createArmorItem("jadeBoots", "Jade Boots", {name: "bootsJade"}, {type: "boots", armor: 2, durability: 960, texture: "armor/jade_1.png"});

//LeadArm

IDRegistry.genItemID("leadHelmet");
IDRegistry.genItemID("leadChestplate");
IDRegistry.genItemID("leadLeggings");
IDRegistry.genItemID("leadBoots");

Item.createArmorItem("leadHelmet", "Lead Helmet", {name: "headLead"}, {type: "helmet", armor: 2, durability: 800, texture: "armor/lead_1.png"});
Item.createArmorItem("leadChestplate", "Lead Chestplate", {name: "bodyLead"}, {type: "chestplate", armor: 3, durability: 800, texture: "armor/lead_1.png"});
Item.createArmorItem("leadLeggings", "Lead Leggings", {name: "legsLead"}, {type: "leggings", armor: 2, durability: 800, texture: "armor/lead_2.png"});
Item.createArmorItem("leadBoots", "Lead Boots", {name: "bootsLead"}, {type: "boots", armor: 2, durability: 760, texture: "armor/lead_1.png"});

//OpalArm

IDRegistry.genItemID("opalHelmet");
IDRegistry.genItemID("opalChestplate");
IDRegistry.genItemID("opalLeggings");
IDRegistry.genItemID("opalBoots");

Item.createArmorItem("opalHelmet", "Opal Helmet", {name: "headOpal"}, {type: "helmet", armor: 5, durability: 2000, texture: "armor/opal_1.png"});
Item.createArmorItem("opalChestplate", "Opal Chestplate", {name: "bodyOpal"}, {type: "chestplate", armor: 5, durability: 2000, texture: "armor/opal_1.png"});
Item.createArmorItem("opalLeggings", "Opal Leggings", {name: "legsOpal"}, {type: "leggings", armor: 5, durability: 2000, texture: "armor/opal_2.png"});
Item.createArmorItem("opalBoots", "Opal Boots", {name: "bootsOpal"}, {type: "boots", armor: 5, durability: 1960, texture: "armor/opal_1.png"});

//Platinum

IDRegistry.genItemID("platinumHelmet");
IDRegistry.genItemID("platinumChestplate");
IDRegistry.genItemID("platinumLeggings");
IDRegistry.genItemID("platinumBoots");

Item.createArmorItem("platinumHelmet", "Platinum Helmet", {name: "headPlatinum"}, {type: "helmet", armor: 2, durability: 750, texture: "armor/platinum_1.png"});
Item.createArmorItem("platinumChestplate", "Platinum Chestplate", {name: "bodyPlatinum"}, {type: "chestplate", armor: 3, durability: 750, texture: "armor/platinum_1.png"});
Item.createArmorItem("platinumLeggings", "Platinum Leggings", {name: "legsPlatinum"}, {type: "leggings", armor: 3, durability: 750, texture: "armor/platinum_2.png"});
Item.createArmorItem("platinumBoots", "Platinum Boots", {name: "bootsPlatinum"}, {type: "boots", armor: 2, durability: 690, texture: "armor/platinum_1.png"});

//SilverArm

IDRegistry.genItemID("silverHelmet");
IDRegistry.genItemID("silverChestplate");
IDRegistry.genItemID("silverLeggings");
IDRegistry.genItemID("silverBoots");

Item.createArmorItem("silverHelmet", "Silver Helmet", {name: "headSilver"}, {type: "helmet", armor: 2, durability: 700, texture: "armor/silver_1.png"});
Item.createArmorItem("silverChestplate", "Silver Chestplate", {name: "bodySilver"}, {type: "chestplate", armor: 3, durability: 700, texture: "armor/silver_1.png"});
Item.createArmorItem("silverLeggings", "Silver Leggings", {name: "legsSilver"}, {type: "leggings", armor: 2, durability: 700, texture: "armor/silver_2.png"});
Item.createArmorItem("silverBoots", "SilverBoots", {name: "bootsSilver"}, {type: "boots", armor: 2, durability: 660, texture: "armor/silver_1.png"});





//DustBronze

Recipes.addShaped({id: ItemID.dustBronze, count: 3, data: 0}, [
		"aa",
		"ab",
	], ['a', ItemID.dustCopper, 0, 'b', ItemID.dustTin, 0]);

//Amethyst

Recipes.addShaped({id: ItemID.amethystSword, count: 1, data: 0}, [
		"a",
		"a",
		"b"], ['a', ItemID.ingotAmethyst, -1, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.amethystShovel, count: 1, data: 0}, [
		"a",
		"b",
		"b"
	], ['a', ItemID.ingotAmethyst, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.amethystPickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.ingotAmethyst, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.amethystAxe, count: 1, data: 0}, [
		"aa",
		"ab",
		" b"
	], ['a', ItemID.ingotAmethyst, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.amethystHoe, count: 1, data: 0}, [
		"aa",
		" b",
		" b"
	], ['a', ItemID.ingotAmethyst, 0, 'b', 280, 0]);

//Bauxite

Recipes.addShaped({id: ItemID.bauxiteSword, count: 1, data: 0}, [
		"a",
		"a",
		"b"], ['a', ItemID.ingotBauxite, -1, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.bauxiteShovel, count: 1, data: 0}, [
		"a",
		"b",
		"b"
	], ['a', ItemID.ingotBauxite, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.bauxitePickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.ingotBauxite, 0, 'b', 280, 0]);
	

	Recipes.addShaped({id: ItemID.bauxiteAxe, count: 1, data: 0}, [
		"aa",
		"ab",
		" b"
	], ['a', ItemID.ingotBauxite, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.bauxiteHoe, count: 1, data: 0}, [
		"aa",
		" b",
		" b"
	], ['a', ItemID.ingotBauxite, 0, 'b', 280, 0]);

//Bronze

Recipes.addShaped({id: ItemID.bronzeSword, count: 1, data: 0}, [
		"a",
		"a",
		"b"], ['a', ItemID.ingotBronze, -1, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.bronzeShovel, count: 1, data: 0}, [
		"a",
		"b",
		"b"
	], ['a', ItemID.ingotBronze, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.bronzePickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.ingotBronze, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.bronzeAxe, count: 1, data: 0}, [
		"aa",
		"ab",
		" b"
	], ['a', ItemID.ingotBronze, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.bronzeHoe, count: 1, data: 0}, [
		"aa",
		" b",
		" b"
	], ['a', ItemID.ingotBronze, 0, 'b', 280, 0]);

//Chromate

Recipes.addShaped({id: ItemID.chromateSword, count: 1, data: 0}, [
		"a",
		"a",
		"b"], ['a', ItemID.ingotChromate, -1, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.chromateShovel, count: 1, data: 0}, [
		"a",
		"b",
		"b"
	], ['a', ItemID.ingotChromate, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.chromatePickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.ingotChromate, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.chromateAxe, count: 1, data: 0}, [
		"aa",
		"ab",
		" b"
	], ['a', ItemID.ingotChromate, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.chromateHoe, count: 1, data: 0}, [
		"aa",
		" b",
		" b"
	], ['a', ItemID.ingotChromate, 0, 'b', 280, 0]);

//Fluorite

Recipes.addShaped({id: ItemID.fluoriteSword, count: 1, data: 0}, [
		"a",
		"a",
		"b"], ['a', ItemID.ingotFluorite, -1, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.fluoriteShovel, count: 1, data: 0}, [
		"a",
		"b",
		"b"
	], ['a', ItemID.ingotFluorite, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.fluoritePickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.ingotFluorite, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.fluoriteAxe, count: 1, data: 0}, [
		"aa",
		"ab",
		" b"
	], ['a', ItemID.ingotFluorite, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.fluoriteHoe, count: 1, data: 0}, [
		"aa",
		" b",
		" b"
	], ['a', ItemID.ingotFluorite, 0, 'b', 280, 0]);

//Jade

Recipes.addShaped({id: ItemID.jadeSword, count: 1, data: 0}, [
		"a",
		"a",
		"b"], ['a', ItemID.ingotJade, -1, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.jadeShovel, count: 1, data: 0}, [
		"a",
		"b",
		"b"
	], ['a', ItemID.ingotJade, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.jadePickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.ingotJade, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.jadeAxe, count: 1, data: 0}, [
		"aa",
		"ab",
		" b"
	], ['a', ItemID.ingotJade, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.jadeHoe, count: 1, data: 0}, [
		"aa",
		" b",
		" b"
	], ['a', ItemID.ingotJade, 0, 'b', 280, 0]);

//Lead

Recipes.addShaped({id: ItemID.leadSword, count: 1, data: 0}, [
		"a",
		"a",
		"b"], ['a', ItemID.ingotLead, -1, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.leadShovel, count: 1, data: 0}, [
		"a",
		"b",
		"b"
	], ['a', ItemID.ingotLead, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.leadPickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.ingotLead, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.leadAxe, count: 1, data: 0}, [
		"aa",
		"ab",
		" b"
	], ['a', ItemID.ingotLead, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.leadHoe, count: 1, data: 0}, [
		"aa",
		" b",
		" b"
	], ['a', ItemID.ingotLead, 0, 'b', 280, 0]);

//Opal

Recipes.addShaped({id: ItemID.opalSword, count: 1, data: 0}, [
		"a",
		"a",
		"b"], ['a', ItemID.crystalOpal, -1, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.opalShovel, count: 1, data: 0}, [
		"a",
		"b",
		"b"
	], ['a', ItemID.crystalOpal, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.opalPickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.crystalOpal, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.opalAxe, count: 1, data: 0}, [
		"aa",
		"ab",
		" b"
	], ['a', ItemID.crystalOpal, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.opalHoe, count: 1, data: 0}, [
		"aa",
		" b",
		" b"
	], ['a', ItemID.crystalOpal, 0, 'b', 280, 0]);

//Platinum

Recipes.addShaped({id: ItemID.platinumSword, count: 1, data: 0}, [
		"a",
		"a",
		"b"], ['a', ItemID.ingotPlatinum, -1, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.platinumShovel, count: 1, data: 0}, [
		"a",
		"b",
		"b"
	], ['a', ItemID.ingotPlatinum, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.platinumPickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.ingotPlatinum, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.platinumAxe, count: 1, data: 0}, [
		"aa",
		"ab",
		" b"
	], ['a', ItemID.ingotPlatinum, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.platinumHoe, count: 1, data: 0}, [
		"aa",
		" b",
		" b"
	], ['a', ItemID.ingotPlatinum, 0, 'b', 280, 0]);

//Silver

Recipes.addShaped({id: ItemID.silverSword, count: 1, data: 0}, [
		"a",
		"a",
		"b"], ['a', ItemID.ingotSilver, -1, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.silverShovel, count: 1, data: 0}, [
		"a",
		"b",
		"b"
	], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.silverPickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.silverAxe, count: 1, data: 0}, [
		"aa",
		"ab",
		" b"
	], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.silverHoe, count: 1, data: 0}, [
		"aa",
		" b",
		" b"
	], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);

//Amethyst

Recipes.addShaped({id: ItemID.amethystHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.ingotAmethyst, 0]);
	
	Recipes.addShaped({id: ItemID.amethystChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotAmethyst, 0]);
	
	Recipes.addShaped({id: ItemID.amethystLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.ingotAmethyst, 0]);
	
	Recipes.addShaped({id: ItemID.amethystBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.ingotAmethyst, 0]);

//Bauxite

Recipes.addShaped({id: ItemID.bauxiteHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.ingotBauxite, 0]);
	
	Recipes.addShaped({id: ItemID.bauxiteChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotBauxite, 0]);
	
	Recipes.addShaped({id: ItemID.bauxiteLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.ingotBauxite, 0]);
	
	Recipes.addShaped({id: ItemID.bauxiteBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.ingotBauxite, 0]);

//Bronze

Recipes.addShaped({id: ItemID.bronzeHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.ingotBronze, 0]);
	
	Recipes.addShaped({id: ItemID.bronzeChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotBronze, 0]);
	
	Recipes.addShaped({id: ItemID.bronzeLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.ingotBronze, 0]);
	
	Recipes.addShaped({id: ItemID.bronzeBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.ingotBronze, 0]);

//Chromate

Recipes.addShaped({id: ItemID.chromateHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.ingotChromate, 0]);
	
	Recipes.addShaped({id: ItemID.chromateChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotChromate, 0]);
	
	Recipes.addShaped({id: ItemID.chromateLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.ingotChromate, 0]);
	
	Recipes.addShaped({id: ItemID.chromateBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.ingotChromate, 0]);

//Fluorite

Recipes.addShaped({id: ItemID.fluoriteHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.ingotFluorite, 0]);
	
	Recipes.addShaped({id: ItemID.fluoriteChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotFluorite, 0]);
	
	Recipes.addShaped({id: ItemID.fluoriteLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.ingotFluorite, 0]);
	
	Recipes.addShaped({id: ItemID.fluoriteBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.ingotFluorite, 0]);

//Jade

Recipes.addShaped({id: ItemID.jadeHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.ingotJade, 0]);
	
	Recipes.addShaped({id: ItemID.jadeChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotJade, 0]);
	
	Recipes.addShaped({id: ItemID.jadeLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.ingotJade, 0]);
	
	Recipes.addShaped({id: ItemID.jadeBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.ingotJade, 0]);

//Lead

Recipes.addShaped({id: ItemID.leadHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.ingotLead, 0]);
	
	Recipes.addShaped({id: ItemID.leadChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotLead, 0]);
	
	Recipes.addShaped({id: ItemID.leadLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.ingotLead, 0]);
	
	Recipes.addShaped({id: ItemID.leadBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.ingotLead, 0]);

//Opal

Recipes.addShaped({id: ItemID.opalHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.crystalOpal, 0]);
	
	Recipes.addShaped({id: ItemID.opalChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.crystalOpal, 0]);
	
	Recipes.addShaped({id: ItemID.opalLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.crystalOpal, 0]);
	
	Recipes.addShaped({id: ItemID.opalBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.crystalOpal, 0]);

//Platinum

Recipes.addShaped({id: ItemID.platinumHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.ingotPlatinum, 0]);
	
	Recipes.addShaped({id: ItemID.platinumChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotPlatinum, 0]);
	
	Recipes.addShaped({id: ItemID.platinumLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.ingotPlatinum, 0]);
	
	Recipes.addShaped({id: ItemID.platinumBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.ingotPlatinum, 0]);

//Silver

Recipes.addShaped({id: ItemID.silverHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.ingotSilver, 0]);
	
	Recipes.addShaped({id: ItemID.silverChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotSilver, 0]);
	
	Recipes.addShaped({id: ItemID.silverLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.ingotSilver, 0]);
	
	Recipes.addShaped({id: ItemID.silverBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.ingotSilver, 0]);



IDRegistry.genBlockID("amethystOre");
Block.createBlock("amethystOre", [
	{name: "Amethyst Ore", texture: [["oreAmethyst", 0]], inCreative: true}
], BLOCK_TYPE_ORE);
ToolAPI.registerBlockMaterial(BlockID.amethystOre, "stone");
Block.registerDropFunction("amethystOre", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.amethystOre, 1, 0]]
	}
	return [];
}, 2);


IDRegistry.genBlockID("bauxiteOre");
Block.createBlock("bauxiteOre", [
	{name: "Bauxite Ore", texture: [["oreBauxite", 0]], inCreative: true}
], BLOCK_TYPE_ORE);
ToolAPI.registerBlockMaterial(BlockID.bauxiteOre, "stone");
Block.registerDropFunction("bauxiteOre", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.bauxiteOre, 1, 0]]
	}
	return [];
}, 2);


IDRegistry.genBlockID("chromateOre");
Block.createBlock("chromateOre", [
	{name: "Chromate Ore", texture: [["oreChromate", 0]], inCreative: true}
], BLOCK_TYPE_ORE);
ToolAPI.registerBlockMaterial(BlockID.chromateOre, "stone");
Block.registerDropFunction("chromateOre", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.chromateOre, 1, 0]]
	}
	return [];
}, 2);


IDRegistry.genBlockID("copperOre");
Block.createBlock("copperOre", [
	{name: "Copper Ore", texture: [["oreCopper", 0]], inCreative: true}
], BLOCK_TYPE_ORE);
ToolAPI.registerBlockMaterial(BlockID.copperOre, "stone");
Block.registerDropFunction("copperOre", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[ItemID.dustCopper, 1, 0]]
	}
	return [];
}, 2);


IDRegistry.genBlockID("fluoriteOre");
Block.createBlock("fluoriteOre", [
	{name: "Fluorite Ore", texture: [["oreFluorite", 0]], inCreative: true}
], BLOCK_TYPE_ORE);
ToolAPI.registerBlockMaterial(BlockID.fluoriteOre, "stone");
Block.registerDropFunction("fluoriteOre", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.fluoriteOre, 1, 0]]
	}
	return [];
}, 2);


IDRegistry.genBlockID("jadeOre");
Block.createBlock("jadeOre", [
	{name: "Jade Ore", texture: [["oreJade", 0]], inCreative: true}
], BLOCK_TYPE_ORE);
ToolAPI.registerBlockMaterial(BlockID.jadeOre, "stone");
Block.registerDropFunction("jadeOre", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.jadeOre, 1, 0]]
	}
	return [];
}, 2);


IDRegistry.genBlockID("leadOre");
Block.createBlock("leadOre", [
	{name: "Lead Ore", texture: [["oreLead", 0]], inCreative: true}
], BLOCK_TYPE_ORE);
ToolAPI.registerBlockMaterial(BlockID.leadOre, "stone");
Block.registerDropFunction("leadOre", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.leadOre, 1, 0]]
	}
	return [];
}, 2);


IDRegistry.genBlockID("opalOre");
Block.createBlock("opalOre", [
	{name: "Opal Ore", texture: [["oreOpal", 0]], inCreative: true}
], BLOCK_TYPE_ORE);
ToolAPI.registerBlockMaterial(BlockID.opalOre, "stone");
Block.registerDropFunction("opalOre", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[ItemID.crystalOpal, 1, 0]]
	}
	return [];
}, 2);


IDRegistry.genBlockID("platinumOre");
Block.createBlock("platinumOre", [
	{name: "Platinum Ore", texture: [["orePlatinum", 0]], inCreative: true}
], BLOCK_TYPE_ORE);
ToolAPI.registerBlockMaterial(BlockID.platinumOre, "stone");
Block.registerDropFunction("platinumOre", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.platinumOre, 1, 0]]
	}
	return [];
}, 2);


IDRegistry.genBlockID("silverOre");
Block.createBlock("silverOre", [
	{name: "Silver Ore", texture: [["oreSilver", 0]], inCreative: true}
], BLOCK_TYPE_ORE);
ToolAPI.registerBlockMaterial(BlockID.silverOre, "stone");
Block.registerDropFunction("silverOre", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.silverOre, 1, 0]]
	}
	return [];
}, 2);


IDRegistry.genBlockID("tinOre");
Block.createBlock("tinOre", [
	{name: "Tin Ore", texture: [["oreTin", 0]], inCreative: true}
], BLOCK_TYPE_ORE);
ToolAPI.registerBlockMaterial(BlockID.tinOre, "stone");
Block.registerDropFunction("tinOre", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[ItemID.dustTin, 1, 0]]
	}
	return [];
}, 2);


var BLOCK_TYPE_ORE = Block.createSpecialType({
	base: 1,
	destroytime: 2,
	opaque: true,
}, "ore");



IDRegistry.genBlockID("amethystBlock");
Block.createBlock("amethystBlock", [ 	{name: "Amethyst Block", texture: [["Amethyst", 0]], inCreative: true} ])

IDRegistry.genBlockID("bauxiteBlock");
Block.createBlock("bauxiteBlock", [ 	{name: "Bauxite Block", texture: [["Bauxite", 0]], inCreative: true} ])

IDRegistry.genBlockID("bronzeBlock");
Block.createBlock("bronzeBlock", [ 	{name: "Bronze Block", texture: [["Bronze", 0]], inCreative: true} ])

IDRegistry.genBlockID("chromateBlock");
Block.createBlock("chromateBlock", [ 	{name: "Chromate Block", texture: [["Chromate", 0]], inCreative: true} ])

IDRegistry.genBlockID("fluoriteBlock");
Block.createBlock("fluoriteBlock", [ 	{name: "Fluorite Block", texture: [["Fluorite", 0]], inCreative: true} ])

IDRegistry.genBlockID("jadeBlock");
Block.createBlock("jadeBlock", [ 	{name: "Jade Block", texture: [["Jade", 0]], inCreative: true} ])

IDRegistry.genBlockID("leadBlock");
Block.createBlock("leadBlock", [ 	{name: "Lead Block", texture: [["Lead", 0]], inCreative: true} ])

IDRegistry.genBlockID("opalBlock");
Block.createBlock("opalBlock", [ 	{name: "Opal Block", texture: [["Opal", 0]], inCreative: true} ])

IDRegistry.genBlockID("platinumBlock");
Block.createBlock("platinumBlock", [ 	{name: "Platinum Block", texture: [["Platinum", 0]], inCreative: true} ])

IDRegistry.genBlockID("silverBlock");
Block.createBlock("silverBlock", [ 	{name: "Silver Block", texture: [["Silver", 0]], inCreative: true} ])




/*var modTick = ModAPI.requireGlobal("function modTick");



var genTick;
var genOreTick;
var dimension;

modTick(){
//World generation
	genTick++;
	if(genTick==49){
		genTick = 0
	}
	if(genTick==0){
		XX1 = Math.floor(Player.getX()/16)*16
		ZZ1 = Math.floor(Player.getZ()/16)*16
	}
	var x = XX1+16*(genTick%7-3)
	var z = ZZ1+16*(Math.floor(genTick/7)%7-3)
	if(Level.getData(x+2, 0, z)!==1){
		setTile(x+2, 0, z, getTile(x+2,0,z), 1);
		if(dimension==0){
		call("worldGeneration", x, z);}
		if(dimension==1){
		call("netherGeneration", x, z);}
		if(dimension==2){
		call("endGeneration", x, z);}
	}
}*/

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){

 for (var i = 0; i < 9; i++){

  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 20);

  GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
  id: BlockID.amethystOre,data: 0,
  size: 2,
  ratio: .3,
  checkerTile: 1, 
  checkerMode: false
  });
 }
 for (var i = 0; i < 7; i++){

  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 35);

  GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
  id: BlockID.bauxiteOre,
  data: 0,
  size: 2,
  ratio: .3,
  checkerTile: 1,
  checkerMode: false

  });
 }
 for (var g = 0; g < 5; g++){

  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 30, 50);

GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
  id: BlockID.chromateOre,
  data: 0,
  size: 3,
  ratio: .3,
  checkerTile: 1,
  checkerMode: false

  });
 }
 for (var w = 0; w < 5; w++){

  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 40, 64);

GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
  id: BlockID.copperOre,
  data: 0,
  size: 3,
  ratio: .3,
  checkerTile: 1,
  checkerMode: false

  });
 }
 for (var g = 0; g < 5; g++){

  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 8, 40);
  GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
  id: BlockID.fluoriteOre,
  data: 0,
  size: 2,
  ratio: .3,
  checkerTile: 1,
  checkerMode: false

  });
 }
 for (var z = 0; z < 5; z++){

  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 9, 37);

  GenerationUtils.genMinable(coords.x, coords.y, coords.z,{
  id: BlockID.jadeOre,
  data: 0,
  size: 2,
  ratio: .3,
  checkerTile: 1,
  checkerMode: false

  });
 }
 for (var g = 0; g < 5; g++){

  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 33, 55);

  GenerationUtils.genMinable(coords.x, coords.y, coords.z,{
  id: BlockID.leadOre,
  data: 0,
  size: 3,
  ratio: .3,
  checkerTile: 1,
  checkerMode: false

  });
 }
 for (var g = 0; g < 5; g++){

var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 25);

  GenerationUtils.genMinable(coords.x, coords.y, coords.z,{
  id: BlockID.opalOre,
  data: 0,
  size: 1,
  ratio: .3,
  checkerTile: 1,
  checkerMode: false

  });
 }
 for (var g = 0; g < 5; g++){

var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 35, 58);

  GenerationUtils.genMinable(coords.x, coords.y, coords.z,{
  id: BlockID.platinumOre,
  data: 0,
  size: 3,
  ratio: .3,
  checkerTile: 1,
  checkerMode: false

  });
 }
 for (var g = 0; g < 5; g++){

var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 37, 59);

  GenerationUtils.genMinable(coords.x, coords.y, coords.z,{
  id: BlockID.silverOre,
  data: 0,
  size: 3,
  ratio: .3,
  checkerTile: 1,
  checkerMode: false

  });
 }
 for (var g = 0; g < 5; g++){

var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 40, 64);

  GenerationUtils.genMinable(coords.x, coords.y, coords.z,{
  id: BlockID.tinOre,
  data: 0,
  size: 3,
  ratio: .3,
  checkerTile: 1,
  checkerMode: false

  });
 }
});





//Workbench

Recipes.addShaped({id: BlockID.amethystBlock, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx",
	], ['x', ItemID.ingotAmethyst, 0]);

Recipes.addShaped({id: ItemID.ingotAmethyst, count: 9, data: 0}, [
		"x"
	], ['x', BlockID.amethystBlock, 0]);


Recipes.addShaped({id: BlockID.bauxiteBlock, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx",
	], ['x', ItemID.ingotBauxite, 0]);

Recipes.addShaped({id: ItemID.ingotBauxite, count: 9, data: 0}, [
		"x"
	], ['x', BlockID.bauxiteBlock, 0]);


Recipes.addShaped({id: BlockID.bronzeBlock, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx",
	], ['x', ItemID.ingotBronze, 0]);

Recipes.addShaped({id: ItemID.ingotBronze, count: 9, data: 0}, [
		"x"
	], ['x', BlockID.bronzeBlock, 0]);


Recipes.addShaped({id: BlockID.chromateBlock, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx",
	], ['x', ItemID.ingotChromate, 0]);

Recipes.addShaped({id: ItemID.ingotChromate, count: 9, data: 0}, [
		"x"
	], ['x', BlockID.chromateBlock, 0]);


Recipes.addShaped({id: BlockID.fluoriteBlock, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx",
	], ['x', ItemID.ingotFluorite, 0]);

Recipes.addShaped({id: ItemID.ingotFluorite, count: 9, data: 0}, [
		"x"
	], ['x', BlockID.fluoriteBlock, 0]);


Recipes.addShaped({id: BlockID.jadeBlock, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx",
	], ['x', ItemID.ingotJade, 0]);

Recipes.addShaped({id: ItemID.ingotJade, count: 9, data: 0}, [
		"x"
	], ['x', BlockID.jadeBlock, 0]);


Recipes.addShaped({id: BlockID.leadBlock, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx",
	], ['x', ItemID.ingotLead, 0]);

Recipes.addShaped({id: ItemID.ingotLead, count: 9, data: 0}, [
		"x"
	], ['x', BlockID.leadBlock, 0]);


Recipes.addShaped({id: BlockID.opalBlock, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx",
	], ['x', ItemID.crystalOpal, 0]);

Recipes.addShaped({id: ItemID.crystalOpal, count: 9, data: 0}, [
		"x"
	], ['x', BlockID.opalBlock, 0]);


Recipes.addShaped({id: BlockID.platinumBlock, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx",
	], ['x', ItemID.ingotPlatinum, 0]);

Recipes.addShaped({id: ItemID.ingotPlatinum, count: 9, data: 0}, [
		"x"
	], ['x', BlockID.platinumBlock, 0]);


Recipes.addShaped({id: BlockID.silverBlock, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx",
	], ['x', ItemID.ingotSilver, 0]);

Recipes.addShaped({id: ItemID.ingotSilver, count: 9, data: 0}, [
		"x"
	], ['x', BlockID.silverBlock, 0]);



Recipes.addFurnace(BlockID.amethystOre, ItemID.ingotAmethyst, 0);
Recipes.addFurnace(BlockID.bauxiteOre, ItemID.ingotBauxite, 0);
Recipes.addFurnace(BlockID.chromateOre, ItemID.ingotChromate, 0);
Recipes.addFurnace(BlockID.fluoriteOre, ItemID.ingotFluorite, 0);
Recipes.addFurnace(BlockID.jadeOre, ItemID.ingotJade, 0);
Recipes.addFurnace(BlockID.leadOre, ItemID.ingotLead, 0);
Recipes.addFurnace(BlockID.platinumOre, ItemID.ingotPlatinum, 0);
Recipes.addFurnace(BlockID.silverOre, ItemID.ingotSilver, 0);
Recipes.addFurnace(ItemID.dustBronze, ItemID.ingotBronze, 0)