/**
 * Sieve craft controller
 */

Recipe.__sieve_recipes = {};

/**
 * Creates a recipe for a sieve
 * @param {number} sourceItem - ID of the source item
 * @param {number} randomChance - Random chance
 */
Recipe.registerSieveRecipe = function (sourceItem, randomChance) {
    this.__sieve_recipes[sourceItem] = function (randomValue) {
        if (randomValue < randomChance && Random.randomDouble(0, 10) < randomChance) {
            return sourceItem;
        }
        return null;
    };
};

/**
 * Returns the recipe for a sieve
 * @param {number} randomChance - Random chance
 */
Recipe.getSieveRecipe = function (randomChance) {
    let result = [];
    for (var i in this.__sieve_recipes) {
        if (this.__sieve_recipes[i]) {
            let resultItem = this.__sieve_recipes[i](randomChance);
            if (resultItem) {
                result.push(resultItem);
            }
        }
    }
    let randomIndex = Random.randomInteger(0, result.length);
    return result[randomIndex];
};

/**
 * Remove the recipe for a sieve
 * @param {number} sourceItem - ID of the source item
 */
Recipe.removeSieveRecipe = function (sourceItem) {
    if (this.__sieve_recipes[sourceItem])
        delete this.__sieve_recipes[sourceItem];
};

ItemDictionary.setItemCategory(12, "minecraft:rock.flushed");
ItemDictionary.setItemCategory(13, "minecraft:rock.flushed");