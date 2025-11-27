IDRegistry.genItemID("redPrismarine");
Item.createItem("redPrismarine", "Red Prismarine", {name: "red_prismarine", meta: 0});

Recipes.addShaped({id: ItemID.redPrismarine, count: 1, data: 0}, 
[" r ", 
 "rsr",
 " r " ],
["r", 351, 1, "s", ItemID.greenPrismarine, 0]);
