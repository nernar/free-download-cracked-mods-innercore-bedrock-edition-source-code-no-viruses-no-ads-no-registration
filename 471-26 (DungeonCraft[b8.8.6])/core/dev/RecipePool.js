function RecipePool() {
    let recipes = [];
    function getItem(value) {
        let type = typeof value;
        if (type == "number") {
            return {id: value, count: 1, data: 0};
        } else {
            if (type == "string") {
                let item = value.split(":");
                if (item.length > 2) {
                    return {id: Number(item[0]), count: Number(item[3]), data: Number(item[2])};
                } else {
                    return {id: Number(item[0]), count: 1, data: Number(item[1])};
                }
            } else {
                if (Array.isArray(value)) {
                    return {id: value[0], count: value[1] || 1, data: value[2] || 0};
                } else {
                    value.count = value.count || 1;
                    value.data = value.data || 0;
                    return value;
                }
            }
        }
    }
    function getItems(array) {
        if (!Array.isArray(array)) {
            return [getItem(array)];
        }
        let result = [];
        for (let i in array) {
            result.push(getItem(array[i]));
        }
        return result;
    }
    this.add = function (inputs, outputs) {
        recipes.push({input: getItems(inputs), output: getItems(outputs)});
        return this;
    };
    function indexOf(check, item, black) {
        for (let i in check) {
            let _item = check[i];
            if (black.indexOf(i) != -1) {
                continue;
            }
            if (_item.id == item.id && (_item.data == item.data || item.data == -1) && (_item.count >= item.count || item.count == -1)) {
                black.push(i);
                return Number(i);
            }
        }
        return -1;
    }
    this.get = function (input) {
        for (let i in recipes) {
            let recipe = recipes[i];
            let result = true;
            let black = [];
            for (let a in recipe.input) {
                if (indexOf(input, recipe.input[a], black) == -1) {
                    result = false;
                }
            }
            if (result && recipe.input.length == input.length) {
                return recipe;
            }
        }
        return null;
    };
}

