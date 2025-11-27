MachineRecipeRegistry = {recipeData: {}, registerRecipesFor: function (name, data) {
    this.recipeData[name] = data;
}, addRecipeFor: function (name, source, result) {
    this.requireRecipesFor(name, true).push({"source": source, "result": result});
}, requireRecipesFor: function (name, createIfNotFound) {
    if (!this.recipeData[name] && createIfNotFound) {
        this.recipeData[name] = {};
    }
    return this.recipeData[name];
}, getRecipeResult: function (name, source) {
    var data = this.requireRecipesFor(name);
    if (data) {
        if (Array.isArray(source)) {
            for (var i in data) {
                let dataSource = data[i].source;
                if (Array.isArray(dataSource) && this.compareArrays(dataSource, source)) {
                    return data[i].result;
                }
            }
        } else {
            for (var i in data) {
                let dataSource = data[i].source;
                if (!Array.isArray(dataSource) && this.compareObjects(dataSource, source)) {
                    return data[i].result;
                }
            }
        }
    }
    return false;
}, compareObjects: function (obj1, obj2) {
    return obj1.id == obj2.id && obj1.data == obj2.data;
}, compareArrays: function (arr1, arr2) {
    if (arr1.length != arr1.length) {
        return false;
    }
    for (var i in arr1) {
        if (!this.compareObjects(arr1[i], arr2[i])) {
            return false;
        }
    }
    return true;
}};

