ModAPI.addAPICallback("RecipeViewer", function (api) {
    const convertRecipe = function (recipe) {
        return {input: recipe.source.map(function (item) {
            return {id: item.id, count: item.count, data: 0};
        }), output: [{id: recipe.result.id, count: recipe.result.count, data: 0}]};
    };
    const getListFunction = function (recipes) {
        return function (id, data, isUsage) {
            const list = [];
            let i = j = 0;
            if (isUsage) {
                for (i = recipes.length; i--; ) {
                    for (j = recipes[i].source.length; j--; ) {
                        if (recipes[i].source[j].id == id) {
                            list.push(convertRecipe(recipes[i]));
                            break;
                        }
                    }
                }
                return list;
            }
            for (i = recipes.length; i--; ) {
                if (recipes[i].result.id == id) {
                    list.push(convertRecipe(recipes[i]));
                }
            }
            return list;
        };
    };
    api.Core.registerRecipeType({contents: {icon: BlockID.alloyer, elements: {back: {type: "image", x: 300, y: 92, bitmap: "alloyer_art", scale: 4}, fuel: {type: "image", x: 300, y: 284, bitmap: "alloyer_fuel", scale: 4}, heat: {type: "image", x: 300, y: 92, bitmap: "alloyer_heat", scale: 4}, bar: {type: "image", x: 300, y: 92, bitmap: "alloyer_bar", scale: 4}, input0: {type: "slot", x: 573, y: 135, needClean: true, bitmap: "default_slot"}, input1: {type: "slot", x: 658, y: 135, needClean: true, bitmap: "default_slot"}, output0: {type: "slot", x: 394, y: 335, needClean: true, bitmap: "default_slot"}}}, getList: getListFunction(smelting_recipes)});
    api.Core.registerRecipeType({contents: {icon: BlockID.crusher, elements: {back: {type: "image", x: 300, y: 92, bitmap: "crusher_art", scale: 4}, fuel: {type: "image", x: 300, y: 255, bitmap: "crusher_fuel", scale: 4}, heat: {type: "image", x: 300, y: 276, bitmap: "crusher_heat", scale: 4}, work: {type: "image", x: 300, y: 92, bitmap: "crusher_bar", scale: 4}, input0: {type: "slot", x: 449, y: 120, needClean: true, bitmap: "default_slot"}, output0: {type: "slot", x: 474, y: 282, needClean: true, bitmap: "default_slot"}}}, getList: getListFunction(crusher_recipes)});
});

