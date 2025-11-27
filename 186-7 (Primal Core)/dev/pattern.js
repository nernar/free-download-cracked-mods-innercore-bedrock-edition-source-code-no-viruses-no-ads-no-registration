Recipes.addCraftToolRecipeItem = function (result, data, tool) {
    data.push({id: tool, data: -1});
    Recipes.addShapeless(result, data, function (api, field, result) {
        for (var i in field) {
            if (field[i].id == tool) {
                field[i].data++;
                if (field[i].data >= Item.getMaxDamage(tool)) {
                    field[i].id = field[i].count = field[i].data = 0;
                }
            } else {
                api.decreaseFieldSlot(i);
            }
        }
    });
};

