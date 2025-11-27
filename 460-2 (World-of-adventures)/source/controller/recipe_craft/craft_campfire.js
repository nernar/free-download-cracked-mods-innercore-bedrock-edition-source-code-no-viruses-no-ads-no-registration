/**
 * Campfire craft controller
 */

Recipe.__campfire_recipes = {};

/**
 * Creates a recipe for roasting in a bonfire
 * @param {object} sourceItem { id, count, data } source item
 * @param {object} resultItem { id, count, data } source item
 */
Recipe.registerCampfireRecipe = function (sourceItem, resultItem) {
    let key1 = sourceItem.id;
    let key2 = sourceItem.count ? sourceItem.count : 1;
    let key3 = sourceItem.data ? sourceItem.data : 0;
    this.__campfire_recipes[key1 + ":" + key2 + ":" + key3] = resultItem;
};

/**
 * Returns the recipe for the original item *
 * @param {object} sourceItem { id, count, data } source item
 */
Recipe.getCampfireRecipe = function (sourceItem) {
    let key1 = sourceItem.id;
    let key2 = sourceItem.count ? sourceItem.count : 1;
    let key3 = sourceItem.data || sourceItem.data > 0 ? sourceItem.data : 0;
    return this.__campfire_recipes[key1 + ":" + key2 + ":" + key3] || null
};

Callback.addCallback("PreLoaded", function () {
    for (var i in ItemDictionary.getCategory("minecraft:wooden_log")) {
        Recipe.registerCampfireRecipe({ id: i }, { id: 263, data: 1 });
    }
    Recipe.registerCampfireRecipe({ id: 319, data: 0 }, { id: 320, data: 0 });
    Recipe.registerCampfireRecipe({ id: 349, data: 0 }, { id: 350, data: 0 });
    Recipe.registerCampfireRecipe({ id: 349, data: 1 }, { id: 350, data: 1 });
    Recipe.registerCampfireRecipe({ id: 365, data: 0 }, { id: 366, data: 0 });
    Recipe.registerCampfireRecipe({ id: 363, data: 0 }, { id: 364, data: 0 });
    Recipe.registerCampfireRecipe({ id: 280, data: 0 }, { id: 50, data: 0 });
});