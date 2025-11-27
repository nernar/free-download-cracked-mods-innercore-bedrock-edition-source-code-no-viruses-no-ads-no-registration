var Recipe = {
    recipe_achemical_crucible: {},
    recipe_rune_enchanter: {},
    recipe_staff_enchanter: {},

    addAlchemicalCrucibleRecipe: function (sourceItem, resultItem) {
        let recipeKey = sourceItem.id + ":" + sourceItem.data;
        this.recipe_achemical_crucible[recipeKey] = resultItem;
    },
    getAlchemicalCrucibleRecipe: function (sourceItem) {
        let recipeKey = sourceItem.id + ":" + sourceItem.data;
        return this.recipe_achemical_crucible[recipeKey] || null;
    },
    deleteAlchemicalCrucibleRecipe: function (sourceItem) {
        let recipeKey = sourceItem.id + ":" + sourceItem.data;
        this.recipe_achemical_crucible[recipeKey] ? delete this.recipe_achemical_crucible[recipeKey] : null;
    },

    addRuneEnchanterRecipe: function (sourceItem, resultItem, effectRune) {
        let key = sourceItem.id + ":" + sourceItem.data + ":[rune=" + effectRune + "]";
        this.recipe_rune_enchanter[key] = resultItem;
    },
    getRuneEnchanterRecipe: function (sourceItem, effectRune) {
        let key = sourceItem.id + ":" + sourceItem.data + ":[rune=" + effectRune + "]";
        return this.recipe_rune_enchanter[key] || null;
    },
    deleteRuneEnchanterRecipe: function (sourceItem, effectRune) {
        let recipeKey = sourceItem.id + ":" + sourceItem.data + ":[rune=" + effectRune + "]";
        this.recipe_rune_enchanter[recipeKey] ? delete this.recipe_rune_enchanter[recipeKey] : null;
    },
    
    addStaffEnchanterRecipe: function (sourceItem, resultItem, effectRune) {
        let key = sourceItem.id + ":" + sourceItem.data + ":[rune=" + effectRune + "]";
        this.recipe_staff_enchanter[key] = resultItem;
    },
    getStaffEnchanterRecipe: function (sourceItem, effectRune) {
        let key = sourceItem.id + ":" + sourceItem.data + ":[rune=" + effectRune + "]";
        return this.recipe_staff_enchanter[key] || null;
    },
    deleteStaffEnchanterRecipe: function (sourceItem, effectRune) {
        let recipeKey = sourceItem.id + ":" + sourceItem.data + ":[rune=" + effectRune + "]";
        this.recipe_staff_enchanter[recipeKey] ? delete this.recipe_staff_enchanter[recipeKey] : null;
    }
};