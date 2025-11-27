Translation.addTranslation("Upgrade Template", {
	ru: "Шаблон улучшения"
});

IDRegistry.genItemID("upgrade_template"); 
Item.createItem("upgrade_template", "Upgrade Template", {name: "upgrade_template", meta: 0}, {stack: 16});

Translation.addTranslation("Storage Upgrade (I)", {
	ru: "Улучшение Хранилища (I)"
});

IDRegistry.genItemID("upgrade_obsidian"); 
Item.createItem("upgrade_obsidian", "Storage Upgrade (I)", {name: "upgrade_obsidian", meta: 0}, {stack: 16});

DrawerAPI.setConfig(ItemID.upgrade_obsidian, {
	max: 2
});


Translation.addTranslation("Storage Upgrade (II)", {
	ru: "Улучшение Хранилища (II)"
});
IDRegistry.genItemID("upgrade_iron"); 
Item.createItem("upgrade_iron", "Storage Upgrade (II)", {name: "upgrade_iron", meta: 0}, {stack: 16});

DrawerAPI.setConfig(ItemID.upgrade_iron, {
	max: 4
});

Translation.addTranslation("Storage Upgrade (III)", {
	ru: "Улучшение Хранилища (III)"
});
IDRegistry.genItemID("upgrade_gold"); 
Item.createItem("upgrade_gold", "Storage Upgrade (III)", {name: "upgrade_gold", meta: 0}, {stack: 16});

DrawerAPI.setConfig(ItemID.upgrade_gold, {
	max: 6
});

Translation.addTranslation("Storage Upgrade (IV)", {
	ru: "Улучшение Хранилища (IV)"
});
IDRegistry.genItemID("upgrade_diamond"); 
Item.createItem("upgrade_diamond", "Storage Upgrade (IV)", {name: "upgrade_diamond", meta: 0}, {stack: 16});

DrawerAPI.setConfig(ItemID.upgrade_diamond, {
	max: 8
});

Translation.addTranslation("Storage Upgrade (IV)", {
	ru: "Улучшение Хранилища (V)"
});
IDRegistry.genItemID("upgrade_emerald"); 
Item.createItem("upgrade_emerald", "Storage Upgrade (V)", {name: "upgrade_emerald", meta: 0}, {stack: 16});

DrawerAPI.setConfig(ItemID.upgrade_emerald, {
	max: 10
});

Item.addCreativeGroup("drawer_upgrade", "Upgrade", [
	ItemID.upgrade_obsidian,
	ItemID.upgrade_iron,
	ItemID.upgrade_gold,
	ItemID.upgrade_diamond,
 ItemID.upgrade_emerald
]);
