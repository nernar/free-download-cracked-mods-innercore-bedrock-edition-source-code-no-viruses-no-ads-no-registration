IDRegistry.genItemID("ingotCopper");
Item.createItem("ingotCopper", "Copper Ingot", { name: "ingot_copper" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastLiquidRecipe(ItemID.ingotCopper, { type: "copper", count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldIngot, "copper", { id: ItemID.ingotCopper, data: 0, count: 1 });
});

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldIngot, "iron", { id: ItemID.ingotIron, data: 0, count: 1 });
    Recipe.registerBlastFormRecipe(ItemID.ceramicMoldIngot, "gold", { id: ItemID.ingotGold, data: 0, count: 1 });
});