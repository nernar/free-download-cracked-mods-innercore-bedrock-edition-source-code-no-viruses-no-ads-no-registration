RecipeViewer.registerRecipeType("workbench", {
	contents: {
		icon: 58,
		drawing: [
			{type: "bitmap", x: 530, y: 185, scale: 2, bitmap: "_workbench_bar"}
		],
		elements: {
			input0: {type: "slot", x: 200, y: 100, size: 100},
			input1: {type: "slot", x: 300, y: 100, size: 100},
			input2: {type: "slot", x: 400, y: 100, size: 100},
			input3: {type: "slot", x: 200, y: 200, size: 100},
			input4: {type: "slot", x: 300, y: 200, size: 100},
			input5: {type: "slot", x: 400, y: 200, size: 100},
			input6: {type: "slot", x: 200, y: 300, size: 100},
			input7: {type: "slot", x: 300, y: 300, size: 100},
			input8: {type: "slot", x: 400, y: 300, size: 100},
			output0: {type: "slot", x: 680, y: 190, size: 120}
		}
	},
	getList: function(id, data, isUsage){
		const list = [];
		const recipe = isUsage ? Recipes.getWorkbenchRecipesByIngredient(id, ~data ? data : 0) : Recipes.getWorkbenchRecipesByResult(id, -1, data);
		const iterator = recipe.iterator();
		let entry, field, result, input, chargeData;
		let i = amount = 0;
		while(iterator.hasNext()){
			entry = iterator.next();
			result = entry.getResult();
			field = entry.getSortedEntries();
			input = [];
			chargeData = ChargeItemRegistry.getItemData(result.id);
			for(i = 0; i < 9; i++){
				if(!field[i]){
					break;
				}
				input[i] = {id: field[i].id, count: 1, data: field[i].data};
				amount += chargeData ? ChargeItemRegistry.getEnergyStored(field[i], chargeData.energy) : 0;
			}
			chargeData && chargeData.type != "extra" && result.count == 1 && ChargeItemRegistry.addEnergyTo(result, chargeData.energy, amount, amount, 100);
			list.push({input: input, output: [result]});
		}
		return list;
	}
});


RecipeViewer.registerRecipeType("furnace", {
	contents: {
		icon: 61,
		drawing: [
			{type: "bitmap", x: 430, y: 185, scale: 2, bitmap: "_workbench_bar"}
		],
		elements: {
			input0: {type: "slot", x: 280, y: 190, size: 120},
			output0: {type: "slot", x: 600, y: 190, size: 120}
		}
	},
	getList: function(id, data, isUsage){
		let result;
		if(isUsage){
			result = Recipes.getFurnaceRecipeResult(id, data);
			return result ? [{
				input: [{id: id, count: 1, data: data}],
				output: [result]
			}] : [];
		}
		const list = [];
		const recipe = Recipes.getFurnaceRecipesByResult();
		const iterator = recipe.iterator();
		let entry;
		while(iterator.hasNext()){
			entry = iterator.next();
			result = entry.getResult();
			id == result.id && (!~data || data == result.data) && list.push({
				input: [{id: entry.inId, count: 1, data: entry.inData}],
				output: [result]
			});
		}
		return list;
	}
});


const BrewingRecipe = {};
(function(){
	const ingredient = [289, 331, 348, 353, 370, 375, 376, 377, 378, 382, 396, 414, 437, 462];
	let i = data = 0;
	let result;
	for(i = ingredient.length; i--;){
	for(data = 36; data--;){
		result = PotionRecipe.getResult(ingredient[i], {id: 373, data: data});
		if(result){
			result.count = 1;
			BrewingRecipe[ingredient[i] + ":373:" + data] = result;
		}
		result = PotionRecipe.getResult(ingredient[i], {id: 438, data: data});
		if(result){
			result.count = 1;
			BrewingRecipe[ingredient[i] + ":438:" + data] = result;
		}
	}
	}
})();

RecipeViewer.registerRecipeType("brewing", {
	contents: {
		icon: 379,
		drawing: [
			{type: "bitmap", x: 410, y: 90, z: 1, scale: 5, bitmap: "brewing_stand_back"}
		],
		elements: {
			input0: {type: "slot", x: 470, y: 96, size: 90},
			input1: {type: "slot", x: 356, y: 240, size: 90},
			output0: {type: "slot", x: 583, y: 240, size: 90}
		}
	},
	getList: function(id, data, isUsage){
		const list = [];
		let key = "";
		let input, result;
		if(isUsage){
			for(key in BrewingRecipe){
				input = key.split(":");
				(input[0] == id || input[1] == id && input[2] == data) && list.push({
					input: [{id: input[0] - 0, count: 1, data: 0}, {id: input[1] - 0, count: 1, data: input[2] - 0}],
					output: [BrewingRecipe[key]]
				});
			}
			return list;
		}
		for(key in BrewingRecipe){
			result = BrewingRecipe[key];
			if(id == result.id && data == result.data){
				input = key.split(":");
				list.push({
					input: [{id: input[0] - 0, count: 1, data: 0}, {id: input[1] - 0, count: 1, data: input[2] - 0}],
					output: [result]
				});
			}
		}
		return list;
	}
});