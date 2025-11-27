/**
 * Ceramic firing system
 */
Recipe.__ceramic_recipes = {};

/**
 * Creates a recipe for kiln firing
 * @param {*} sourceItem { id, count, data } source item
 * @param {*} resultItem { id, count, data } source item
 */
Recipe.registerCeramicFurnaceRecipe = function (sourceItem, resultItem) {
    let key1 = sourceItem.id;
    let key2 = sourceItem.count ? sourceItem.count : 1;
    let key3 = sourceItem.data && sourceItem.data > 0 ? sourceItem.data : 0;
    this.__ceramic_recipes[key1 + ":" + key2 + ":" + key3] = resultItem;
};

/**
 * Returns the recipe for the original item *
 * @param {*} sourceItem { id, count, data } source item
 */
Recipe.getCeramicFurnaceRecipe = function (sourceItem) {
    let key1 = sourceItem.id;
    let key2 = sourceItem.count ? sourceItem.count : 1;
    let key3 = sourceItem.data && sourceItem.data > 0 ? sourceItem.data : 0;
    return this.__ceramic_recipes[key1 + ":" + key2 + ":" + key3] || null
};