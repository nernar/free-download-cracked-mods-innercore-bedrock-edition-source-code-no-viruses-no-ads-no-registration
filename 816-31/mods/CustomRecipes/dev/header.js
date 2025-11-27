IMPORT("CustomRecipes");

RecipesRegister.createType("furnace", {
	addedRecipe(json){
		Recipes.addFurnace(eval(json.input), eval(json.output), 0);
	},
	deleteRecipe(json){
		Recipes.removeFurnaceRecipe(eval(json.input), 0);
	},
	getJsonByUiConfig(config, type){
		if(type == "addedRecipe")
			return {
				"type": "furnace",
				"function": "addedRecipe",
				"description": {
					"input": config.input.fullId,
					"output": config.output.fullId
				}
			};
		return {
			"type": "furnace",
			"function": "deleteRecipe",
			"description": {
				"input": config.input.fullId
			}
		};
	},
	getTypes(){
		return [
			{name: "Added", type: "addedRecipe"},
			{name: "Delete", type: "deleteRecipe"}
		];
	},
	getUiSetting(type){
		if(type == "addedRecipe")
			return [
				{type: "text", text: "input:", newLine: true},
				{type: "slot", jsonName: "input", newLine: false},
				{type: "text", text: "output:", newLine: true},
				{type: "slot", jsonName: "output", newLine: false}
			];
		return [
			{type: "text", text: "input:", newLine: true},
			{type: "slot", jsonName: "input", newLine: false}
		];
	}
});
RecipesRegister.createType("workbench", {
	addedRecipe(json){
		json.result.id = eval(json.result.id);
		let arr = [];
		for(let key in json.items)
			arr.push(key, eval(json.items[key].id), json.items[key].data);
		Recipes.addShaped(json.result, json.shell, arr);
	},
	deleteRecipe(json){
		Recipes.removeWorkbenchRecipe(eval(json.result.id), json.result.count, json.result.data);
	},
	getJsonByUiConfig(config, type){
		if(type == "addedRecipe"){
			let items = {};
			let symbols = ["a", "b", "c", "d", "e", "r", "u", "i", "o"];
			for(let i in symbols){
				let symbol = symbols[i];
				if(config[symbol].fullId != "0")
					items[symbol] = {id: config[symbol].fullId, data: -1};
			}
			return {
				"type": "workbench",
				"function": "addedRecipe",
				"description": {
					"result": {"id": config.result.fullId, "count": 1, "data": 0},
					"shell": [
						"abc",
						"der",
						"uio"
					],
					"items": items
				}
			};
		}
		return {
			"type": "workbench",
			"function": "deleteRecipe",
			"description": {
				"result": {"id": config.result.fullId, "count": 1, "data": 0},
			}
		};
	},
	getTypes(){
		return [
			{name: "Added", type: "addedRecipe"},
			{name: "Delete", type: "deleteRecipe"}
		];
	},
	getUiSetting(type){
		if(type == "addedRecipe")
			return [
				{type: "text", text: "shell:", newLine: false},
				
				{type: "slot", jsonName: "a", newLine: true},
				{type: "slot", jsonName: "b", newLine: true},
				{type: "slot", jsonName: "c", newLine: false},
				
				{type: "slot", jsonName: "d", newLine: true},
				{type: "slot", jsonName: "e", newLine: true},
				{type: "slot", jsonName: "r", newLine: false},
				
				{type: "slot", jsonName: "u", newLine: true},
				{type: "slot", jsonName: "i", newLine: true},
				{type: "slot", jsonName: "o", newLine: false},
				
				{type: "text", text: "result:", newLine: false},
				{type: "slot", jsonName: "result", newLine: false}
			];
		return [
			{type: "text", text: "result:", newLine: true},
			{type: "slot",jsonName: "result", newLine: false}
		];
	}
});

Callback.addCallback("PostLoaded", function(){
	RecipesRegister.readJson(__dir__+"test.json");
}, -2);
/*Callback.addCallback("ItemUse", function(coords, item){
	if(item.id == 280)
		RecipesRegister.openListType(__dir__+"test.json");
});*/
