Callback.addCallback("PostLoaded", function () {
    Recipes.removeFurnaceRecipe({id: 162, data: 0});
    Recipes.removeFurnaceRecipe({id: 162, data: 1});
    Recipes.removeFurnaceRecipe({id: 263, data: 1});
    Recipes.addFurnace(17, 17, 0);
    for (i in saws) {
        for (d = 0; d < 4; d++) {
            Recipes.addCraftToolRecipeItem({id: 5, count: 2, data: d}, [{id: 17, data: d}], saws[i]);
        }
        Recipes.addCraftToolRecipeItem({id: 5, count: 2, data: 4}, [{id: 162, data: 0}], saws[i]);
        Recipes.addCraftToolRecipeItem({id: 5, count: 2, data: 5}, [{id: 162, data: 1}], saws[i]);
    }
    Recipes.addShaped({id: 54, count: 1, data: 0}, ["sss", "pip", "ppp"], ["p", 5, -1, "i", 265, 0, "s", 158, -1]);
    Recipes.addShaped({id: 306, count: 1, data: 0}, ["sss", "shs"], ["s", ItemID.plateIron, 0, "h", 298, 0]);
    Recipes.addShaped({id: 307, count: 1, data: 0}, ["shs", "sss", "sss"], ["s", ItemID.plateIron, 0, "h", 299, 0]);
    Recipes.addShaped({id: 308, count: 1, data: 0}, ["sss", "shs", "s s"], ["s", ItemID.plateIron, 0, "h", 300, 0]);
    Recipes.addShaped({id: 309, count: 1, data: 0}, ["shs", "s s"], ["s", ItemID.plateIron, 0, "h", 301, 0]);
    Recipes.addShaped({id: 310, count: 1, data: 0}, ["sss", "s s"], ["s", 264, 0]);
    Recipes.addShaped({id: 311, count: 1, data: 0}, ["s s", "sss", "sss"], ["s", 264, 0]);
    Recipes.addShaped({id: 312, count: 1, data: 0}, ["sss", "s s", "s s"], ["s", 264, 0]);
    Recipes.addShaped({id: 313, count: 1, data: 0}, ["s s", "s s"], ["s", 264, 0]);
});

