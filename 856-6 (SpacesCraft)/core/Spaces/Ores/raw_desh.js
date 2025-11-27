IDRegistry.genItemID("raw_desh"); 
Item.createItem("raw_desh", "Raw Desh", {name: "Raw Desh", meta: 0}, {stack: 64});
Translation.addTranslation("Raw Desh", {
ru: "Необработанный деш"
});

Recipes.addFurnace(ItemID.raw_desh, 0, ItemID.ingot_desh, 0);