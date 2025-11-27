IDRegistry.genItemID("nuggetCopper");
Item.createItem("nuggetCopper", "Copper Nugget", { name: "copper_nugget" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastLiquidRecipe(ItemID.nuggetCopper, { type: "copper", count: 0.25 });
    Recipe.registerSieveRecipe(ItemID.nuggetCopper, 0.5);
});

IDRegistry.genItemID("nuggetIron");
Item.createItem("nuggetIron", "Iron Nugget", { name: "iron_nugget" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastLiquidRecipe(ItemID.nuggetIron, { type: "iron", count: 0.25 });
    Recipe.registerSieveRecipe(ItemID.nuggetIron, 0.5);
});

Callback.addCallback("PreLoaded", function () {
    Recipe.registerBlastLiquidRecipe(371, { type: "gold", count: 0.25 });
    Recipe.registerSieveRecipe(371, 0.5);
});