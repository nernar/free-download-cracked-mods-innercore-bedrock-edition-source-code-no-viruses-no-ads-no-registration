/**
 * Recipe and craft module
 */

var Recipe = {

    /**
     * Creates a recipe with a tool in a workbench slot
     * @param {object} result - native shapeless craft `result` param
     * @param {object} data - native shapeless craft `data` param
     * @param {number} tool - Tool ID
     * @param {function} - on recipe craft function callback
     */
    registerRecipeWithTool: function (result, data, tool, onCraftEvent) {
        data.push({ id: tool, data: -1 });
        Recipes.addShapeless(result, data, function (api, field, result) {
            onCraftEvent(api, data, field);
            for (var i in field) {
                if (field[i].id == tool) {
                    field[i].data++;
                    if (field[i].data >= Item.getMaxDamage(tool)) {
                        field[i].id = field[i].count = field[i].data = 0;
                    }
                }
                else {
                    api.decreaseFieldSlot(i);
                }
            }
        })
    }
};