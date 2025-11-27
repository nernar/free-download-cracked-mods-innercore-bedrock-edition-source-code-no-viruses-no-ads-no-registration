Translation.addTranslation("Battery", {
	ru: "Батарея"
});
IDRegistry.genItemID("factoryBattery");
Item.createItem("factoryBattery", "Battery", {name: "battery"});

Translation.addTranslation("Basic improvement", {
	ru: "Базовое улучшение"
});

Translation.addTranslation("Level 1 improvement", {
	ru: "Улучшение 1 уровня"
});

Translation.addTranslation("Level 2 improvement", {
	ru: "Улучшение 2 уровня"
});

IDRegistry.genItemID("factory_update_base");
Item.createItem("factory_update_base", "Basic improvement", {name: "Level_improvement", meta: 0});

IDRegistry.genItemID("factory_update_1");
Item.createItem("factory_update_1", "Level 1 improvement", {name: "Level_improvement", meta: 1});

IDRegistry.genItemID("factory_update_2");
Item.createItem("factory_update_2", "Level 2 improvement", {name: "Level_improvement", meta: 2});

Translation.addTranslation("Wooden Gear", {
	ru: "Деревянная шестерня"
});
Translation.addTranslation("Stone Gear", {
	ru: "Каменная шестерня"
});
Translation.addTranslation("Iron Gear", {
	ru: "Железная шестерня"
});
Translation.addTranslation("Golden Gear", {
	ru: "Золотая шестерня"
});
Translation.addTranslation("Diamond Gear", {
	ru: "Алмазная шестерня"
});

IDRegistry.genItemID("gear_wood");
IDRegistry.genItemID("gear_stone");
IDRegistry.genItemID("gear_iron");
IDRegistry.genItemID("gear_gold");
IDRegistry.genItemID("gear_diamond");

Item.createItem("gear_wood", "Wooden Gear", {name: "gear_wood", meta: 0});
Item.createItem("gear_stone", "Stone Gear", {name: "gear_stone", meta: 0});
Item.createItem("gear_iron", "Iron Gear", {name: "gear_iron", meta: 0});
Item.createItem("gear_gold", "Golden Gear", {name: "gear_gold", meta: 0});
Item.createItem("gear_diamond", "Diamond Gear", {name: "gear_diamond", meta: 0});

ItemID.gearWooden = ItemID.gear_wood
ItemID.gearStone = ItemID.gear_stone
ItemID.gearIron = ItemID.gear_iron
ItemID.gearGolden = ItemID.gear_gold
ItemID.gearDiamond = ItemID.gear_diamond
Translation.addTranslation("Iron Wrench", {
    ru: "Железный ключ"
});

IDRegistry.genItemID("factoryWrench");
Item.createItem("factoryWrench", "Iron Wrench", { name: "factory_wrench", meta: 0 });

ItemType.set(ItemID.factoryWrench, "wrench");

Callback.addCallback("PostLoaded", function(){
	ItemType.set(ItemID.bronzeWrench, "wrench");
	ItemType.set(ItemID.bc_wrench, "wrench");
	ItemType.set(ItemID.utilsWrench, "wrench");
	ItemType.set(ItemID.rp_screwdriver, "wrench");
});
