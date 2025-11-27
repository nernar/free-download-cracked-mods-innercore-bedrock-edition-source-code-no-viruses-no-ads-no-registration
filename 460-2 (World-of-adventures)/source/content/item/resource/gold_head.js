IDRegistry.genItemID("headAxeGold");
Item.createItem("headAxeGold", "Gold Axe Blade", { name: "head_gold_axe" });

IDRegistry.genItemID("headHoeGold");
Item.createItem("headHoeGold", "Gold Hoe Blade", { name: "head_gold_hoe" });

IDRegistry.genItemID("headSpearGold");
Item.createItem("headSpearGold", "Gold Spear Tip", { name: "head_gold_spear" });

IDRegistry.genItemID("headKnifeGold");
Item.createItem("headKnifeGold", "Gold Knife Blade", { name: "head_gold_knife" });

IDRegistry.genItemID("headPickaxeGold");
Item.createItem("headPickaxeGold", "Gold Pickaxe Head", { name: "head_gold_pickaxe" });

IDRegistry.genItemID("headSwordGold");
Item.createItem("headSwordGold", "Gold Sword Blade", { name: "head_gold_sword" });

IDRegistry.genItemID("headShovelGold");
Item.createItem("headShovelGold", "Gold Shovel Bayonet", { name: "head_gold_shovel" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldAxe, "gold", { id: ItemID.headAxeGold, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldHoe, "gold", { id: ItemID.headHoeGold, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldSpear, "gold", { id: ItemID.headSpearGold, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldKnife, "gold", { id: ItemID.headKnifeGold, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldPickaxe, "gold", { id: ItemID.headPickaxeGold, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldSword, "gold", { id: ItemID.headSwordGold, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldIngot, "gold", { id: 266, data: 0, count: 1 });
});