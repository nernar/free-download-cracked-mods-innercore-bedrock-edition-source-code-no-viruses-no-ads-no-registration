IDRegistry.genItemID("ingotosmium");
Item.createItem("ingotosmium", "ingot osmium", {name: "OsmiumIngot", meta: 0});
IDRegistry.genItemID("copperingot");
Item.createItem("copperingot", "copper ingot", {name: "CopperIngot", meta: 0});
IDRegistry.genItemID("tiningot");
Item.createItem("tiningot", "tin ingot", {name: "TinIngot", meta: 0});
Callback.addCallback("PostLoaded", function () {
    Recipes.addFurnace(BlockID.TinOre, ItemID.tiningot, 0);
    Recipes.addFurnace(BlockID.CopperOre, ItemID.copperingot, 0);
    Recipes.addFurnace(BlockID.OsmiumOre, ItemID.ingotosmium, 0);
    Recipes.addFurnace(ItemID.SteelDust, ItemID.SteelIngot, 0);
});
IDRegistry.genItemID("EnrichedIron");
Item.createItem("EnrichedIron", "Enriched Iron", {name: "EnrichedIron", meta: 0});
IDRegistry.genItemID("SteelDust");
Item.createItem("SteelDust", "Steel Dust", {name: "SteelDust", meta: 0});
IDRegistry.genItemID("SteelIngot");
Item.createItem("SteelIngot", "Steel Ingot", {name: "SteelIngot", meta: 0});
IDRegistry.genItemID("BasicControlCircuit");
Item.createItem("BasicControlCircuit", "BasicControl Circuit", {name: "BasicControlCircuit", meta: 0});
IDRegistry.genItemID("CopperDust");
Item.createItem("CopperDust", "Copper Dust", {name: "CopperDust", meta: 0});
IDRegistry.genItemID("BioFuel");
Item.createItem("BioFuel", "Bio Fuel", {name: "BioFuel", meta: 0});
IDRegistry.genItemID("DiamondDust");
Item.createItem("DiamondDust", "Diamond Dust", {name: "DiamondDust", meta: 0});
IDRegistry.genItemID("DiamondDust");
Item.createItem("DiamondDust", "Diamond Dust", {name: "DiamondDust", meta: 0});
IDRegistry.genItemID("GoldDust");
Item.createItem("GoldDust", "Gold Dust", {name: "GoldDust", meta: 0});
Callback.addCallback("PostLoaded", function () {
    Recipes.addFurnace(ItemID.GoldDust, 266, 0);
});
IDRegistry.genItemID("IronDust");
Item.createItem("IronDust", "Iron Dust", {name: "IronDust", meta: 0});
Callback.addCallback("PostLoaded", function () {
    Recipes.addFurnace(ItemID.IronDust, 265, 0);
});
IDRegistry.genItemID("ObsidianDust");
Item.createItem("ObsidianDust", "Obsidian Dust", {name: "ObsidianDust", meta: 0});
IDRegistry.genItemID("TinDust");
Item.createItem("TinDust", "Tin Dust", {name: "TinDust", meta: 0});
Callback.addCallback("PostLoaded", function () {
    Recipes.addFurnace(ItemID.TinDust, ItemID.tiningot, 0);
});
IDRegistry.genItemID("SolarPanel");
Item.createItem("SolarPanel", "Solar Panel", {name: "SolarPanel", meta: 0});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.SolarPanel, count: 1, data: 0}, ["ggg", "rsr", "ooo"], ["g", 20, 0, "r", 331, 0, "o", ItemID.ingotosmium, 0, "s", ItemID.EnrichedAlloy, 0]);
});
IDRegistry.genItemID("EnrichedAlloy");
Item.createItem("EnrichedAlloy", "Enriched Alloy", {name: "EnrichedAlloy", meta: 0});
IDRegistry.genItemID("OsmiumDust");
Item.createItem("OsmiumDust", "Osmium Dust", {name: "OsmiumDust", meta: 0});
Callback.addCallback("PostLoaded", function () {
    Recipes.addFurnace(ItemID.OsmiumDust, ItemID.ingotosmium, 0);
});
IDRegistry.genItemID("EnergyTablet");
Item.createItem("EnergyTablet", "Energy Tablet", {name: "EnergyTablet", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.EnergyTablet, 1000000, 2);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.EnergyTablet, count: 1, data: Item.getMaxDamage(ItemID.EnergyTablet)}, ["rgr", "sgs", "rgr"], ["s", ItemID.EnrichedAlloy, 0, "g", 266, 0, "r", 331, 0]);
});
IDRegistry.genItemID("AdvancedControlCircuit");
Item.createItem("AdvancedControlCircuit", "AdvancedControl Circuit", {name: "AdvancedControlCircuit", meta: 0});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.AdvancedControlCircuit, count: 1, data: 0}, ["gbg"], ["g", ItemID.EnrichedAlloy, 0, "b", ItemID.BasicControlCircuit, 0]);
});
IDRegistry.genItemID("RefinedObsidianDust");
Item.createItem("RefinedObsidianDust", "RefinedObsidian Dust", {name: "RefinedObsidianDust", meta: 0});
IDRegistry.genItemID("ObsidianIngot");
Item.createItem("ObsidianIngot", "Obsidian Ingot", {name: "ObsidianIngot", meta: 0});
IDRegistry.genItemID("GlowstoneIngot");
Item.createItem("GlowstoneIngot", "Glowstone Ingot", {name: "GlowstoneIngot", meta: 0});
IDRegistry.genItemID("ElectrolyticCore");
Item.createItem("ElectrolyticCore", "Electrolytic Core", {name: "ElectrolyticCore", meta: 0});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.ElectrolyticCore, count: 1, data: 0}, ["sos", "isg", "sos"], ["s", ItemID.EnrichedAlloy, 0, "o", ItemID.OsmiumDust, 0, "i", ItemID.IronDust, 0, "g", ItemID.GoldDust, 0]);
});
IDRegistry.genItemID("Substrate");
Item.createItem("Substrate", "\u0421\u0443\u0431\u0441\u0442\u0440\u0430\u0442", {name: "Substrate", meta: 0});
IDRegistry.genItemID("HDPEPellet");
Item.createItem("HDPEPellet", "\u0428\u0430\u0440\u0438\u043a \u043f\u043e\u043b\u0438\u044d\u0442\u0438\u043b\u0435\u043d\u0430 \u041d\u0414", {name: "HDPEPellet", meta: 0});
IDRegistry.genItemID("HDPESheet");
Item.createItem("HDPESheet", "\u041b\u0438\u0441\u0442 \u043f\u043e\u043b\u0438\u044d\u0442\u0438\u043b\u0435\u043d\u0430 \u041d\u0414", {name: "HDPESheet", meta: 0});
IDRegistry.genItemID("ReinforcedAlloy");
Item.createItem("ReinforcedAlloy", "\u0423\u043a\u0440\u0435\u043f\u043b\u0451\u043d\u043d\u044b\u0439 \u0441\u043f\u043b\u0430\u0432", {name: "ReinforcedAlloy", meta: 0});
IDRegistry.genItemID("BronzeIngot");
Item.createItem("BronzeIngot", "\u0411\u0440\u043e\u043d\u0437\u043e\u0432\u044b\u0439 \u0441\u043b\u0438\u0442\u043e\u043a", {name: "BronzeIngot", meta: 0});
IDRegistry.genItemID("AtomicAlloy");
Item.createItem("AtomicAlloy", "\u0410\u0442\u043e\u043c\u043d\u044b\u0439 \u0441\u043f\u043b\u0430\u0432", {name: "AtomicAlloy", meta: 0});
IDRegistry.genItemID("TeleportationCore");
Item.createItem("TeleportationCore", "\u042f\u0434\u0440\u043e \u0442\u0435\u043b\u0435\u043f\u043e\u0440\u0442\u0430\u0446\u0438\u0438", {name: "TeleportationCore", meta: 0});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.TeleportationCore, count: 1, data: 0}, ["lal", "gdg", "lal"], ["l", 351, 3, "a", ItemID.AtomicAlloy, 0, "g", 266, 0, "d", 264, 0]);
});
IDRegistry.genItemID("EliteControlCircuit");
Item.createItem("EliteControlCircuit", "\u042d\u043b\u0438\u0442\u043d\u0430\u044f \u0441\u0445\u0435\u043c\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f", {name: "EliteControlCircuit", meta: 0});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.EliteControlCircuit, count: 1, data: 0}, ["sas"], ["s", ItemID.ReinforcedAlloy, 0, "a", ItemID.AdvancedControlCircuit, 0]);
});
IDRegistry.genItemID("UltimateControlCircuit");
Item.createItem("UltimateControlCircuit", "\u0421\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u0430\u044f \u0441\u0445\u0435\u043c\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f", {name: "UltimateControlCircuit", meta: 0});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.UltimateControlCircuit, count: 1, data: 0}, ["sas"], ["s", ItemID.AtomicAlloy, 0, "a", ItemID.EliteControlCircuit, 0]);
});

