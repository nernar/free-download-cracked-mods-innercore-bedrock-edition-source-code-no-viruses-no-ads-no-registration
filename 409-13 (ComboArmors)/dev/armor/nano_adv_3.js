IDRegistry.genItemID("nanoadv3Helmet"); IDRegistry.genItemID("nanoadv3HelmetUncharged");
IDRegistry.genItemID("nanoadv3Chestplate"); IDRegistry.genItemID("nanoadv3ChestplateUncharged");
IDRegistry.genItemID("nanoadv3Leggings"); IDRegistry.genItemID("nanoadv3LeggingsUncharged");
IDRegistry.genItemID("nanoadv3Boots"); IDRegistry.genItemID("nanoadv3BootsUncharged");

Item.createArmorItem("nanoadv3Helmet", "Nano Helmet", {name: "nanosuit_helmet"}, {type: "helmet", armor: 3, durability: 625, texture: "armor/nanosuit_1.png", isTech: true});
Item.createArmorItem("nanoadv3Chestplate", "NanoSuit BoduArmuor", {name: "nanosuit_chestplate"}, {type: "chestplate", armor: 7, durability: 625, texture: "armor/nanosuit_1.png", isTech: true});
Item.createArmorItem("nanoadv3Leggings", "NanoSuit Leggings", {name: "nanosuit_leggings"}, {type: "leggings", armor: 5, durability: 625, texture: "armor/nanosuit_2.png", isTech: true});
Item.createArmorItem("nanoadv3Boots", "NanoSuit Boots", {name: "nanosuit_boots"}, {type: "boots", armor: 3, durability: 625, texture: "armor/nanosuit_1.png", isTech: true});

Item.createArmorItem("nanoadv3HelmetUncharged", "NanoSuit Helmet", {name: "nanosuit_helmet"}, {type: "helmet", armor: 0, durability: 0, texture: "armor/nanosuit_1.png", isTech: true});
Item.createArmorItem("nanoadv3ChestplateUncharged", "NanoSuit BoduArmuor", {name: "nanosuit_chestplate"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/nanosuit_1.png", isTech: true});
Item.createArmorItem("nanoadv3LeggingsUncharged", "NanoSuit Leggings", {name: "nanosuit_leggings"}, {type: "leggings", armor: 0, durability: 0, texture: "armor/nanosuit_2.png", isTech: true});
Item.createArmorItem("nanoadv3BootsUncharged", "NanoSuit Boots", {name: "nanosuit_boots"}, {type: "boots", armor: 0, durability: 0, texture: "armor/nanosuit_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.nanoadv3Helmet, "Eu", 1000000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanoadv3HelmetUncharged, "Eu", 1000000, 3, "armor");
ChargeItemRegistry.registerItem(ItemID.nanoadv3Chestplate, "Eu", 1000000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanoadv3ChestplateUncharged, "Eu", 1000000, 3, "armor");
ChargeItemRegistry.registerItem(ItemID.nanoadv3Leggings, "Eu", 1000000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanoadv3LeggingsUncharged, "Eu", 1000000, 3, "armor");
ChargeItemRegistry.registerItem(ItemID.nanoadv3Boots, "Eu", 1000000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanoadv3BootsUncharged, "Eu", 1000000, 3, "armor");

ICore.ItemName.setRarity(ItemID.nanoadv3Helmet, 1);
ICore.ItemName.setRarity(ItemID.nanoadv3Chestplate, 1);
ICore.ItemName.setRarity(ItemID.nanoadv3Leggings, 1);
ICore.ItemName.setRarity(ItemID.nanoadv3Boots, 1);

Item.registerNameOverrideFunction(ItemID.nanoadv3Helmet, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.nanoadv3Chestplate, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.nanoadv3Leggings, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.nanoadv3Boots, ICore.ItemName.showItemStorage);

ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.nanoadv3Helmet, {charged: ItemID.nanoadv3Helmet, uncharged: ItemID.nanoadv3HelmetUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.nanoadv3HelmetUncharged, {charged: ItemID.quantsuithelmet, uncharged: ItemID.nanoadv3HelmetUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.nanoadv3Chestplate, {charged: ItemID.nanoadv3Chestplate, uncharged: ItemID.nanoadv3ChestplateUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.nanoadv3ChestplateUncharged, {charged: ItemID.nanoadv3Chestplate, uncharged: ItemID.nanoadv3ChestplateUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.nanoadv3Leggings, {charged: ItemID.nanoadv3Leggings, uncharged: ItemID.nanoadv3LeggingsUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.nanoadv3LeggingsUncharged, {charged: ItemID.nanoadv3Leggings, uncharged: ItemID.nanoadv3LeggingsUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.nanoadv3Boots, {charged: ItemID.nanoadv3Boots, uncharged: ItemID.nanoadv3BootsUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.nanoadv3BootsUncharged, {charged: ItemID.nanoadv3Boots, uncharged: ItemID.nanoadv3BootsUncharged});

ICore.UI.setArmorButton(ItemID.nanoadv3Helmet, "button_nightvision");
ICore.UI.setArmorButton(ItemID.nanoadv3Chestplate, "button_fly");
ICore.UI.setArmorButton(ItemID.nanoadv3Chestplate, "button_hover");
ICore.UI.setArmorButton(ItemID.nanoadv3Boots, "button_jump");

var QUANTUM_ARMOR_FUNCS = ICore.requireGlobal("QUANTUM_ARMOR_FUNCS");

Armor.registerFuncs("nanoadv3Helmet",QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("nanoadv3HelmetUncharged", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("nanoadv3Chestplate", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("nanoadv3ChestplateUncharged", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("nanoadv3Leggings", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("nanoadv3LeggingsUncharged", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("nanoadv3Boots", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("nanoadv3BootsUncharged", QUANTUM_ARMOR_FUNCS);