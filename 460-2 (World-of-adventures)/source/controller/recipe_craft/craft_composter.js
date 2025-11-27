/**
 * Compost system
 */
Recipe.__compost_recipes = {};

/**
 * Creates an operation in the composter
 * @param { number } id item ID
 * @param { number } chance chance to increase filling level
 */
Recipe.registerComposterRecipe = function (id, chance) {
    this.__compost_recipes[id] = chance;
};

/**
 * Returns the chance of operation in the composter
 * @param { number } id item ID
 */
Recipe.getComposterRecipe = function (id) {
    return this.__compost_recipes[id] || null;
};

Callback.addCallback("PreLoaded", function () {
    Recipe.registerComposterRecipe(18, 30);
    Recipe.registerComposterRecipe(6, 30);
    Recipe.registerComposterRecipe(295, 30);
    Recipe.registerComposterRecipe(361, 30);
    Recipe.registerComposterRecipe(362, 30);
    Recipe.registerComposterRecipe(458, 30);

    Recipe.registerComposterRecipe(175, 50);
    Recipe.registerComposterRecipe(106, 50);
    Recipe.registerComposterRecipe(31, 50);
    Recipe.registerComposterRecipe(338, 50);
    Recipe.registerComposterRecipe(360, 50);
    Recipe.registerComposterRecipe(81, 50);

    Recipe.registerComposterRecipe(103, 65);
    Recipe.registerComposterRecipe(86, 65);
    Recipe.registerComposterRecipe(91, 65);
    Recipe.registerComposterRecipe(39, 65);
    Recipe.registerComposterRecipe(40, 65);
    Recipe.registerComposterRecipe(392, 65);
    Recipe.registerComposterRecipe(391, 65);
    Recipe.registerComposterRecipe(111, 65);
    Recipe.registerComposterRecipe(296, 65);
    Recipe.registerComposterRecipe(457, 65);
    Recipe.registerComposterRecipe(260, 65);
    Recipe.registerComposterRecipe(37, 65);
    Recipe.registerComposterRecipe(38, 65);
    Recipe.registerComposterRecipe(ItemID.plantStraw, 65);
    Recipe.registerComposterRecipe(ItemID.fiberPlant, 65);
    Recipe.registerComposterRecipe(ItemID.cordagePlant, 65);

    Recipe.registerComposterRecipe(393, 85);
    Recipe.registerComposterRecipe(357, 85);
    Recipe.registerComposterRecipe(297, 85);
    Recipe.registerComposterRecipe(170, 85);
    Recipe.registerComposterRecipe(BlockID.plantStrawBlock, 85);
    Recipe.registerComposterRecipe(BlockID.plantStrawBlockDense, 85);

    Recipe.registerComposterRecipe(354, 100);
    Recipe.registerComposterRecipe(400, 100);
});