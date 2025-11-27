IDRegistry.genItemID("creeperSteak");
Item.createFoodItem("creeperSteak", "Creeper Steak", {name:"creeperSteak"}, {food:4});
Recipes.addFurnace(ItemID.creeperMeat, ItemID.creeperSteak, 0);
