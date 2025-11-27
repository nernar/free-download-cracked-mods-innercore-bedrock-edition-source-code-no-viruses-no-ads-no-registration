Translation.addTranslation("Iridium Armor", {ru: "Ирумидиевая Броня"});
Translation.addTranslation("Iridium Blocks", {ru: "Ирумидиевые Блоки"});
Translation.addTranslation("Iridium Tool", {ru: "Ирумидиевые Инструменты"});
Translation.addTranslation("Iridium Items", {ru: "Слитки и тд."});

//Ирумидиевая Броня



Callback.addCallback("PostLoaded", function () { 
Item.addCreativeGroup("Armor_Iridium", Translation.translate("Iridium Armor"), [
		ItemID.boots,
		ItemID.leggings,
		ItemID.chestplate,
		ItemID.helmet
	]);
});

//Ирумидиевые Блоки


Callback.addCallback("PostLoaded", function () { 
Item.addCreativeGroup("Iridium_Blocks", Translation.translate("Iridium Blocks"), [
		BlockID.Block,
		BlockID.Block_upgr
	]);
});


Callback.addCallback("PostLoaded", function () { 
Item.addCreativeGroup("Iridium_tool", Translation.translate("Iridium Tool"), [
		ItemID.sword,
		ItemID.pickaxe,
		ItemID.axe,
		ItemID.hoe, 
		ItemID.shovel
	]);
});



Callback.addCallback("PostLoaded", function () { 
Item.addCreativeGroup("Iridium_Items", Translation.translate("Iridium Items"), [
		ItemID.ingot,
		ItemID.ingot_upgr,
		ItemID.nagetts,
		ItemID.powder
	]);
});