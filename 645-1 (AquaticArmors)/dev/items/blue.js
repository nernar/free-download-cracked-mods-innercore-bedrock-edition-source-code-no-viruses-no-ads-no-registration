IDRegistry.genItemID("bluePrismarine");
Item.createItem("bluePrismarine", "Blue Prismarine", {name: "blue_prismarine", meta: 0});

Recipes.addShaped({id: ItemID.bluePrismarine, count: 1, data: 0}, 
[" b ", 
 "bsb",
 " b " ],
["b", 351, 4, "s", ItemID.shinyPrismarine, 0]);