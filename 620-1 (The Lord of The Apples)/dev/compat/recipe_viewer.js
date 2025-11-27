ModAPI.addAPICallback("RecipeViewer",function(api){
    api.Core.registerRecipeType("LoA-Altar",{
        contents:{
            icon:BlockID.apgemAltar,
            
            drawing:[
                {type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"}
            ],

            elements:{
                "input0":{type:"slot",x:280,y:200,size:120},
                "output0":{type:"slot",x:600,y:200,size:120},
                "textEnergy":{type:"text",x:280,y:400,size:30}
            }
        },

        getList:function(id,data,isUsage){
            var list = [],recipe = Recipe.getRecipeData("ApgemAltar");
            if(isUsage){
                for(let i in recipe){
                    for(let ii in recipe[i].input){
                        var input = recipe[i].input[ii];
                        if(input.id == id && input.data == data) list.push(recipe[i]);
                    }
                }
            } else {
                for(let i in recipe){
                    for(let ii in recipe[i].output){
                        var output = recipe[i].output[ii];
                        if(output.id == id && output.data == data) list.push(recipe[i]);
                    }
                }
            }
            return list;
        },

		onOpen:function(elements,data){
			var energy = elements.get("textEnergy");
			energy.onBindingUpdated("text",Translation.translate("Energy: ") + (data.extra.energy?data.extra.energy:0) + "Au");
		}
    });
});