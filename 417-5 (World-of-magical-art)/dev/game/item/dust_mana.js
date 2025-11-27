IDRegistry.genItemID("dustMana");
Item.createItem("dustMana", "Mana Dust", { name: "dust_mana" });

Callback.addCallback("PostLoaded", function () {
    Recipe.addAlchemicalCrucibleRecipe({ id: 331, data: 0 }, { id: ItemID.dustMana, count: 2, data: 0 });
    manastorage.registerItem(ItemID.dustMana, 1000);
});