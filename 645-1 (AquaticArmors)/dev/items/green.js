IDRegistry.genItemID("greenPrismarine");
Item.createItem("greenPrismarine", "Green Prismarine", {name: "green_prismarine", meta: 0});

Recipes.addShaped({id: ItemID.greenPrismarine, count: 1, data: 0}, 
[" g ", 
 "gsg",
 " g " ],
["g", 351, 2, "s", ItemID.bluePrismarine, 0]);
