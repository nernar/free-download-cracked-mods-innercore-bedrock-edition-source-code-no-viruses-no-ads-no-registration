/**
 * Barrel system
 */
Recipe.__barrel_recipes = {};

/**
 * Creates a recipe for barrel
 * @param {object} sourceItem { id, data } source item
 * @param {object} resultItem { id, data } result item
 */
Recipe.registerBarrelRecipe = function (resultItem, sourceItem) {
    let key1 = sourceItem.id;
    let key3 = sourceItem.data;
    this.__barrel_recipes[key1 + ":" + key3] = resultItem;
};

/**
 * Returns the recipe for the original item
 * @param {object} sourceItem { id, data } source item
 */
Recipe.getBarrelRecipe = function (sourceItem) {
    let key1 = sourceItem.id;
    let key3 = sourceItem.data;
    return this.__barrel_recipes[key1 + ":" + key3] || null
};