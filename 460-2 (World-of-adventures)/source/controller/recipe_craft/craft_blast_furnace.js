/**
 * Blast Furnace craft controller
 */

Recipe.__blast_recipes_liquid = {};
Recipe.__blast_recipes_form = {};

/**
 * Creates a liquid recipe for a blast furnace
 * @param {number} sourceItem - ID of the source item
 * @param {object} resultLiquid - Result liquid
 */
Recipe.registerBlastLiquidRecipe = function (sourceItem, resultLiquid) {
    this.__blast_recipes_liquid[sourceItem] = resultLiquid;
};

/**
 * Creates a recipe for a blast furnace
 * @param {number} sourceForm - ID of the source item
 * @param {string} sourceLiquid - ID of the source liquid
 * @param {object} resultItem - Result item
 */
Recipe.registerBlastFormRecipe = function (sourceForm, sourceLiquid, resultItem) {
    let key = sourceForm + ":" + sourceLiquid;
    this.__blast_recipes_form[key] = resultItem;
};

/**
 * Returns the liquid recipe for a blast furnace
 * @param {number} sourceItem - ID of the source item
 */
Recipe.getBlastLiquidRecipe = function (sourceItem) {
    return this.__blast_recipes_liquid[sourceItem] || null;
};

/**
 * Returns the recipe for a blast furnace
 * @param {number} sourceItem - ID of the source item
 * @param {string} sourceLiquid - ID of the source liquid
 */
Recipe.getBlastFormRecipe = function (sourceItem, sourceLiquid) {
    let key = sourceItem + ":" + sourceLiquid;
    return this.__blast_recipes_form[key] || null;
};

/**
 * Remove the liquid recipe for a blast furnace
 * @param {number} sourceItem - ID of the source item
 */
Recipe.removeBlastLiquidRecipe = function (sourceItem) {
    if (this.__blast_recipes_liquid[sourceItem])
        delete this.__blast_recipes_liquid[sourceItem];
};

/**
 * Remove the recipe for a blast furnace
 * @param {number} sourceItem - ID of the source item
 * @param {string} sourceLiquid - ID of the source liquid
 */
Recipe.removeBlastFormRecipe = function (sourceItem, sourceLiquid) {
    let key = sourceItem + ":" + sourceLiquid;
    if (this.__blast_recipes_form[key])
        delete this.__blast_recipes_form[key];
};

Recipe.registerBlastLiquidRecipe(265, { type: "iron", count: 1 });
Recipe.registerBlastLiquidRecipe(15, { type: "iron", count: 1 });
Recipe.registerBlastLiquidRecipe(42, { type: "iron", count: 9 });

Recipe.registerBlastLiquidRecipe(266, { type: "gold", count: 1 });
Recipe.registerBlastLiquidRecipe(14, { type: "gold", count: 1 });
Recipe.registerBlastLiquidRecipe(41, { type: "gold", count: 9 });