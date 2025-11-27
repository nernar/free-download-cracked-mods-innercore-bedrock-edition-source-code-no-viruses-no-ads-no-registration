var Recipe = {
    recipes:{},

    addRecipe:function(name,input,output,extra){
		var recipe = this.getRecipeData(name);
        recipe.push({input:input,output:output,extra:extra || {}});
    },

    getRecipeData:function(name){
        if(!this.recipes[name]) this.recipes[name] = [];
        return this.recipes[name];
    },

    parseInput:function(input){        
        var item = {}
        for(let i in input){
            var source = input[i];
            if(source.id > 0){
                if(!item[source.id]) item[source.id] = 0;
                item[source.id] += source.count;

                if(!item[source.id + ":" + source.data]) item[source.id + ":" + source.data] = 0;
                item[source.id + ":" + source.data] += source.count;
            }
        }
        return item;
    },

    getRecipe:function(name,items){
		var recipe = this.getRecipeData(name);
        for(let i in recipe){
            var valid = true;
            for(let n in recipe[i].input){
                var source = recipe[i].input[n];
                var count = this.parseInput(items)[source.id + ((source.data == -1)?"":":" + source.data)];
                if(!count || count < source.count){
                    valid = false;
                    break;
                }
            }

            if(valid) return recipe[i];
        }
    }
}