IDRegistry.genItemID("headAxeIron");
Item.createItem("headAxeIron", "Iron Axe Blade", { name: "head_iron_axe" });

IDRegistry.genItemID("headHoeIron");
Item.createItem("headHoeIron", "Iron Hoe Blade", { name: "head_iron_hoe" });

IDRegistry.genItemID("headSpearIron");
Item.createItem("headSpearIron", "Iron Spear Tip", { name: "head_iron_spear" });

IDRegistry.genItemID("headKnifeIron");
Item.createItem("headKnifeIron", "Iron Knife Blade", { name: "head_iron_knife" });

IDRegistry.genItemID("headPickaxeIron");
Item.createItem("headPickaxeIron", "Iron Pickaxe Head", { name: "head_iron_pickaxe" });

IDRegistry.genItemID("headSwordIron");
Item.createItem("headSwordIron", "Iron Sword Blade", { name: "head_iron_sword" });

IDRegistry.genItemID("headShovelIron");
Item.createItem("headShovelIron", "Iron Shovel Bayonet", { name: "head_iron_shovel" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldAxe, "iron", { id: ItemID.headAxeIron, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldHoe, "iron", { id: ItemID.headHoeIron, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldSpear, "iron", { id: ItemID.headSpearIron, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldKnife, "iron", { id: ItemID.headKnifeIron, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldPickaxe, "iron", { id: ItemID.headPickaxeIron, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldSword, "iron", { id: ItemID.headSwordIron, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldIngot, "iron", { id: 265, data: 0, count: 1 });
});