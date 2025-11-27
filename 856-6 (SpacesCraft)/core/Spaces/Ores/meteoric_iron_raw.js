IDRegistry.genItemID("meteoric_iron_raw"); 
Item.createItem("meteoric_iron_raw", "Meteoric Iron Raw", {name: "Meteoric Iron Raw", meta: 0}, {stack: 64});
Translation.addTranslation("Meteoric Iron Raw", {
ru: "Метеоритное железо"
});
Recipes.addFurnace(ItemID.meteoric_iron_raw, 0, ItemID.meteoric_iron_ingot, 0);