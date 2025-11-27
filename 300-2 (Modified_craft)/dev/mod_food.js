Recipes.deleteRecipe({id: 297, count: 1, data: 0});

IDRegistry.genItemID("flour");
Item.createItem("flour", "Flour", {name: "flour", meta: 0}, { isTech: false });
Recipes.addShaped({id: ItemID.flour, count: 1, data: 0}, [
     "ozo",
     "yyy",
     "oxo"
], ['x', 281, 0, 'y', 296, 0, 'z', 280, 0]);

Recipes.addFurnace(ItemID.flour, 297, 0);
