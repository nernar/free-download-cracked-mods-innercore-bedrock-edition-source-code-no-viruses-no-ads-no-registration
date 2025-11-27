IDRegistry.genItemID("quantsuithelmet"); IDRegistry.genItemID("quantsuithelmetUncharged");
IDRegistry.genItemID("quantsuitchestplate"); IDRegistry.genItemID("quantsuitchestplateUncharged");
IDRegistry.genItemID("quantsuitleggings"); IDRegistry.genItemID("quantsuitleggingsUncharged");
IDRegistry.genItemID("quantsuitboots"); IDRegistry.genItemID("quantsuitbootsUncharged");

Item.createArmorItem("quantsuithelmet", "QuantumSuit Helmet", {name: "quantsuit_helmet"}, {type: "helmet", armor: 4, durability: 625, texture: "armor/quantsuit_1.png", isTech: true});
Item.createArmorItem("quantsuitchestplate", "QuantumSuit BoduArmuor", {name: "quantsuit_chestplate"}, {type: "chestplate", armor: 8, durability: 625, texture: "armor/quantsuit_1.png", isTech: true});
Item.createArmorItem("quantsuitleggings", "QuantumSuit Leggings", {name: "quantsuit_leggings"}, {type: "leggings", armor: 6, durability: 625, texture: "armor/quantsuit_2.png", isTech: true});
Item.createArmorItem("quantsuitboots", "QuantumSuit Boots", {name: "quantsuit_boots"}, {type: "boots", armor: 4, durability: 625, texture: "armor/quantsuit_1.png", isTech: true});
Item.createArmorItem("quantsuithelmetUncharged", "QuantumSuit Helmet", {name: "quantsuit_helmet"}, {type: "helmet", armor: 4, durability: 625, texture: "armor/quantsuit_1.png", isTech: true});
Item.createArmorItem("quantsuitchestplateUncharged", "QuantumSuit BoduArmuor", {name: "quantsuit_chestplate"}, {type: "chestplate", armor: 8, durability: 625, texture: "armor/quantsuit_1.png", isTech: true});
Item.createArmorItem("quantsuitleggingsUncharged", "QuantumSuit Leggings", {name: "quantsuit_leggings"}, {type: "leggings", armor: 6, durability: 625, texture: "armor/quantsuit_2.png", isTech: true});
Item.createArmorItem("quantsuitbootsUncharged", "QuantumSuit Boots", {name: "quantsuit_boots"}, {type: "boots", armor: 4, durability: 625, texture: "armor/quantsuit_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.quantsuithelmet, "Eu",10000000, 4, "storage", true); 
ChargeItemRegistry.registerItem(ItemID.quantsuithelmetUncharged, "Eu", 10000000, 4, "storage");
ChargeItemRegistry.registerItem(ItemID.quantsuitchestplate, "Eu", 10000000, 4, "storage", true);
ChargeItemRegistry.registerItem(ItemID.quantsuitchestplateUncharged, "Eu", 10000000, 4, "storage");
ChargeItemRegistry.registerItem(ItemID.quantsuitleggings, "Eu", 10000000, 4, "storage", true);
ChargeItemRegistry.registerItem(ItemID.quantsuitleggingsUncharged, "Eu", 10000000, 4, "storage");
ChargeItemRegistry.registerItem(ItemID.quantsuitboots, "Eu", 10000000, 4, "storage", true);
ChargeItemRegistry.registerItem(ItemID.quantsuitbootsUncharged, "Eu", 10000000, 4, "storage");

ICore.ItemName.setRarity(ItemID.quantsuithelmet, 2);
ICore.ItemName.setRarity(ItemID.quantsuitchestplate, 2);
ICore.ItemName.setRarity(ItemID.quantsuitleggings, 2);
ICore.ItemName.setRarity(ItemID.quantsuitboots, 2);

Item.registerNameOverrideFunction(ItemID.quantsuithelmet, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.quantsuitchestplate, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.quantsuitleggings, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.quantsuitboots, ICore.ItemName.showItemStorage);

ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantsuithelmet, {charged: ItemID.quantsuithelmet, uncharged: ItemID.quantsuithelmetUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantsuithelmetUncharged, {charged: ItemID.quantsuithelmet, uncharged: ItemID.quantsuithelmetUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantsuitchestplate, {charged: ItemID.quantsuitchestplate, uncharged: ItemID.quantsuitchestplateUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantsuitchestplateUncharged, {charged: ItemID.quantsuitchestplate, uncharged: ItemID.quantsuitchestplateUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantsuitleggings, {charged: ItemID.quantsuitleggings, uncharged: ItemID.quantsuitleggingsUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantsuitleggingsUncharged, {charged: ItemID.quantsuitleggings, uncharged: ItemID.quantsuitleggingsUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantsuitboots, {charged: ItemID.quantsuitboots, uncharged: ItemID.quantsuitbootsUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantsuitbootsUncharged, {charged: ItemID.quantsuitboots, uncharged: ItemID.quantsuitbootsUncharged});

ICore.UI.setArmorButton(ItemID.quantsuithelmet, "button_nightvision");
ICore.UI.setArmorButton(ItemID.quantsuitchestplate, "button_fly");
ICore.UI.setArmorButton(ItemID.quantsuitchestplate, "button_hover");
ICore.UI.setArmorButton(ItemID.quantsuitboots, "button_jump");

var QUANTUM_ARMOR_FUNCS = ICore.requireGlobal("QUANTUM_ARMOR_FUNCS");

Armor.registerFuncs("quantsuithelmet",QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantsuithelmetUncharged", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantsuitchestplate", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantsuitchestplateUncharged", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantsuitleggings", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantsuitleggingsUncharged", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantsuitboots", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantsuitbootsUncharged", QUANTUM_ARMOR_FUNCS);

Recipes.addShaped({id: ItemID.quantsuithelmet, count: 1, data: Item.getMaxDamage(ItemID.quantsuithelmet)}, [
	"xxx",
	"x#x"
], ['#', ItemID.quantumHelmet, -1, 'x',
ItemID.Exo, 0], ChargeItemRegistry.transportEnergy);

Recipes.addShaped({id: ItemID.quantsuitchestplate, count: 1, data: Item.getMaxDamage(ItemID.quantsuitchestplate)}, [
	"x#x",
	"xxx",
	"xxx"
], ['#', ItemID.quantumChestplate, -1, 'x',
ItemID.Exo, 0],
ChargeItemRegistry.transportEnergy);

Recipes.addShaped({id: ItemID.quantsuitleggings, count: 1, data: Item.getMaxDamage(ItemID.quantsuitleggings)}, [
	"xxx",
	"x#x",
	"x x"
], ['#', ItemID.quantumLeggings, -1, 'x',
ItemID.Exo, 0],
ChargeItemRegistry.transportEnergy);

Recipes.addShaped({id: ItemID.quantsuitboots, count: 1, data: Item.getMaxDamage(ItemID.quantsuitboots)}, [
	"x#x",
	"x x"
], ['#', ItemID.quantumBoots, -1, 'x',
ItemID.Exo, 0],
ChargeItemRegistry.transportEnergy);