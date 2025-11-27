IDRegistry.genItemID("nanosuitHelmet"); IDRegistry.genItemID("nanosuitHelmetUncharged");
IDRegistry.genItemID("nanosuitChestplate"); IDRegistry.genItemID("nanosuitChestplateUncharged");
IDRegistry.genItemID("nanosuitLeggings"); IDRegistry.genItemID("nanosuitLeggingsUncharged");
IDRegistry.genItemID("nanosuitBoots"); IDRegistry.genItemID("nanosuitBootsUncharged");

Item.createArmorItem("nanosuitHelmet", "NanoSuit Helmet", {name: "nanosuit_helmet"}, {type: "helmet", armor: 3, durability: 625, texture: "armor/nanosuit_1.png", isTech: true});
Item.createArmorItem("nanosuitChestplate", "NanoSuit BoduArmuor", {name: "nanosuit_chestplate"}, {type: "chestplate", armor: 7, durability: 625, texture: "armor/nanosuit_1.png", isTech: true});
Item.createArmorItem("nanosuitLeggings", "NanoSuit Leggings", {name: "nanosuit_leggings"}, {type: "leggings", armor: 5, durability: 625, texture: "armor/nanosuit_2.png", isTech: true});
Item.createArmorItem("nanosuitBoots", "NanoSuit Boots", {name: "nanosuit_boots"}, {type: "boots", armor: 3, durability: 625, texture: "armor/nanosuit_1.png", isTech: true});

Item.createArmorItem("nanosuitHelmetUncharged", "NanoSuit Helmet", {name: "nanosuit_helmet"}, {type: "helmet", armor: 0, durability: 0, texture: "armor/nanosuit_1.png", isTech: true});
Item.createArmorItem("nanosuitChestplateUncharged", "NanoSuit BoduArmuor", {name: "nanosuit_chestplate"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/nanosuit_1.png", isTech: true});
Item.createArmorItem("nanosuitLeggingsUncharged", "NanoSuit Leggings", {name: "nanosuit_leggings"}, {type: "leggings", armor: 0, durability: 0, texture: "armor/nanosuit_2.png", isTech: true});
Item.createArmorItem("nanosuitBootsUncharged", "NanoSuit Boots", {name: "nanosuit_boots"}, {type: "boots", armor: 0, durability: 0, texture: "armor/nanosuit_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.nanosuitHelmet, "Eu", 1000000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanosuitHelmetUncharged, "Eu", 1000000, 3, "armor");
ChargeItemRegistry.registerItem(ItemID.nanosuitChestplate, "Eu", 1000000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanosuitChestplateUncharged, "Eu", 1000000, 3, "armor");
ChargeItemRegistry.registerItem(ItemID.nanosuitLeggings, "Eu", 1000000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanosuitLeggingsUncharged, "Eu", 1000000, 3, "armor");
ChargeItemRegistry.registerItem(ItemID.nanosuitBoots, "Eu", 1000000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanosuitBootsUncharged, "Eu", 1000000, 3, "armor");

ICore.ItemName.setRarity(ItemID.nanosuitHelmet, 1);
ICore.ItemName.setRarity(ItemID.nanosuitChestplate, 1);
ICore.ItemName.setRarity(ItemID.nanosuitLeggings, 1);
ICore.ItemName.setRarity(ItemID.nanosuitBoots, 1);

Item.registerNameOverrideFunction(ItemID.nanosuitHelmet, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.nanosuitChestplate, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.nanosuitLeggings, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.nanosuitBoots, ICore.ItemName.showItemStorage);

ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitHelmet, {charged: ItemID.nanosuitHelmet, uncharged: ItemID.nanosuitHelmetUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitHelmetUncharged, {charged: ItemID.nanosuitHelmet, uncharged: ItemID.nanosuitHelmetUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitChestplate, {charged: ItemID.nanosuitChestplate, uncharged: ItemID.nanosuitChestplateUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitChestplateUncharged, {charged: ItemID.nanosuitChestplate, uncharged: ItemID.nanosuitChestplateUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitLeggings, {charged: ItemID.nanosuitLeggings, uncharged: ItemID.nanosuitLeggingsUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitLeggingsUncharged, {charged: ItemID.nanosuitLeggings, uncharged: ItemID.nanosuitLeggingsUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitBoots, {charged: ItemID.nanosuitBoots, uncharged: ItemID.nanosuitBootsUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitBootsUncharged, {charged: ItemID.nanosuitBoots, uncharged: ItemID.nanosuitBootsUncharged});

ICore.UI.setArmorButton(ItemID.nanosuitHelmet, "button_nightvision");

var NANO_ARMOR_FUNCS = ICore.requireGlobal("NANO_ARMOR_FUNCS");
	
Armor.registerFuncs("nanosuitHelmet", NANO_ARMOR_FUNCS); Armor.registerFuncs("nanosuitHelmetUncharged", NANO_ARMOR_FUNCS);
Armor.registerFuncs("nanosuitChestplate", NANO_ARMOR_FUNCS); Armor.registerFuncs("nanosuitChestplateUncharged", NANO_ARMOR_FUNCS);
Armor.registerFuncs("nanosuitLeggings", NANO_ARMOR_FUNCS); Armor.registerFuncs("nanosuitLeggingsUncharged", NANO_ARMOR_FUNCS);
Armor.registerFuncs("nanosuitBoots", NANO_ARMOR_FUNCS); Armor.registerFuncs("nanosuitBootsUncharged", NANO_ARMOR_FUNCS);

Recipes.addShaped({id: ItemID.nanosuitHelmet, count: 1, data: Item.getMaxDamage(ItemID.nanosuitHelmet)}, [
	"xxx",
	"x#x"
], ['#', ItemID.nanoHelmet, -1, 'x',
ItemID.Exo, 0], ChargeItemRegistry.transportEnergy);

Recipes.addShaped({id: ItemID.nanosuitChestplate, count: 1, data: Item.getMaxDamage(ItemID.nanosuitChestplate)}, [
	"x#x",
	"xxx",
	"xxx"
], ['#', ItemID.nanoChestplate, -1, 'x',
ItemID.Exo, 0],
ICore.ChargeRegistry.transportEnergy);

Recipes.addShaped({id: ItemID.nanosuitLeggings, count: 1, data: Item.getMaxDamage(ItemID.nanosuitLeggings)}, [
	"xxx",
	"x#x",
	"x x"
], ['#', ItemID.nanoLeggings, -1, 'x',
ItemID.Exo, 0],
ICore.ChargeRegistry.transportEnergy);

Recipes.addShaped({id: ItemID.nanosuitBoots, count: 1, data: Item.getMaxDamage(ItemID.nanosuitBoots)}, [
	"x#x",
	"x x"
], ['#', ItemID.nanoBoots, -1, 'x',
ItemID.Exo, 0],
ICore.ChargeRegistry.transportEnergy);