ModAPI.addAPICallback("ICore", function (api) {
    for (i in craftingHammers) {
    }
    RecipePattern.withToolRecipe({id: ItemID.cableCopper0, count: 2, data: 0}, {id: ItemID.plateTin, data: 0}, ItemID.craftingCutter);
    RecipePattern.withToolRecipe({id: ItemID.cableTin0, count: 3, data: 0}, {id: ItemID.plateCopper, data: 0}, ItemID.craftingCutter);
    RecipePattern.withToolRecipe({id: ItemID.cableGold0, count: 3, data: 0}, {id: ItemID.plateGold, data: 0}, ItemID.craftingCutter);
    RecipeSystem.addRecipeToWorkbench(ItemID.cableCopper1, 1, 0, [[ItemID.cableCopper0, 0], [ItemID.rubber, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(ItemID.cableTin1, 1, 0, [[ItemID.cableCopper0, 0], [ItemID.rubber, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(ItemID.cableGold1, 1, 0, [[ItemID.cableGold0, 0], [ItemID.rubber, 0], [ItemID.rubber, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], 0);
    RecipeSystem.addRecipeToKiln(ItemID.rubber, 2, 0, [[ItemID.latex, 1, 0], [0, 0, 0]]);
    RecipeSystem.addRecipeToKiln(ItemID.ingotSteel, 1, 0, [[265, 1, 0], [ItemID.dustCoal, 2, 0]]);
    RecipeSystem.addRecipeToKiln(ItemID.ingotSteel, 1, 0, [[265, 1, 0], [ItemID.dustCharcoal, 4, 0]]);
    craftingHammers.push(ItemID.craftingHammer);
});

