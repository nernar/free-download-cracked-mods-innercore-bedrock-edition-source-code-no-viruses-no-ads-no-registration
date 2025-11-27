IDRegistry.genItemID("headAxeCopper");
Item.createItem("headAxeCopper", "Copper Axe Blade", { name: "head_copper_axe" });

IDRegistry.genItemID("headHoeCopper");
Item.createItem("headHoeCopper", "Copper Hoe Blade", { name: "head_copper_hoe" });

IDRegistry.genItemID("headSpearCopper");
Item.createItem("headSpearCopper", "Copper Spear Tip", { name: "head_copper_spear" });

IDRegistry.genItemID("headKnifeCopper");
Item.createItem("headKnifeCopper", "Copper Knife Blade", { name: "head_copper_knife" });

IDRegistry.genItemID("headPickaxeCopper");
Item.createItem("headPickaxeCopper", "Copper Pickaxe Head", { name: "head_copper_pickaxe" });

IDRegistry.genItemID("headSwordCopper");
Item.createItem("headSwordCopper", "Copper Sword Blade", { name: "head_copper_sword" });

IDRegistry.genItemID("headShovelCopper");
Item.createItem("headShovelCopper", "Copper Shovel Bayonet", { name: "head_copper_shovel" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldAxe, "copper", { id: ItemID.headAxeCopper, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldHoe, "copper", { id: ItemID.headHoeCopper, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldSpear, "copper", { id: ItemID.headSpearCopper, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldKnife, "copper", { id: ItemID.headKnifeCopper, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldPickaxe, "copper", { id: ItemID.headPickaxeCopper, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldSword, "copper", { id: ItemID.headSwordCopper, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldIngot, "copper", { id: ItemID.ingotCopper, data: 0, count: 1 });
});