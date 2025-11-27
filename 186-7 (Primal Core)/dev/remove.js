Callback.addCallback("PostLoaded", function () {
    if (!__config__.getBool("enable_vannila_tools")) {
        for (let i = 267; i <= 287; i++) {
            Recipes.deleteRecipe({id: i, count: 1, data: 0});
        }
        for (let i = 290; i <= 294; i++) {
            Recipes.deleteRecipe({id: i, count: 1, data: 0});
        }
        for (let i = 306; i <= 317; i++) {
            Recipes.deleteRecipe({id: i, count: 1, data: 0});
        }
        Recipes.deleteRecipe({id: 256, count: 1, data: 0});
        Recipes.deleteRecipe({id: 257, count: 1, data: 0});
        Recipes.deleteRecipe({id: 258, count: 1, data: 0});
    }
    Recipes.deleteRecipe({id: 54, count: 1, data: 0});
    for (let i = 0; i < 5; i++) {
        Recipes.deleteRecipe({id: 5, count: 4, data: i});
    }
});

