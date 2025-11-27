IDRegistry.genItemID("shard_iron"); 
Item.createItem("shard_iron", "Shard Iron", {name: "Shard Iron", meta: 0}, {stack: 64});
Translation.addTranslation("Shard Iron", {
ru: "Осколок железа"
});

Recipes.addFurnace(ItemID.shard_iron, 0, ItemID.ingot_copper_sc, 0);