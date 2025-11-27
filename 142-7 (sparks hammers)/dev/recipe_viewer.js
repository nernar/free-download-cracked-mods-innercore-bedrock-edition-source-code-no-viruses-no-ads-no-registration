ModAPI.addAPICallback("RecipeViewer", function(api){

	const convertRecipe = function(id){
		for(let key in SHammer.data1){
			if(SHammer.data1[key].result == id){
				return {
					input: key.split(",").map(function(value, index){
						return {id: value - 0, count: 1, data: SHammer.data1[key]. option[index] || 0};
					}),
					output: [{id: id, count: 1, data: 0}]
				};
			}
		}
	};

	api.Core.registerRecipeType("shammer_craft", {
		contents: {
			icon: BlockID.hamCraft,
			drawing: [
				{type: "image", x: 590, y: 230, bitmap: "_workbench_bar", scale: 0.8}
			],
			elements: {
				input0: {type: "slot", x: 160, y: 40, size: 80},
				input1: {type: "slot", x: 240, y: 40, size: 80},
				input2: {type: "slot", x: 320, y: 40, size: 80},
				input3: {type: "slot", x: 400, y: 40, size: 80},
				input4: {type: "slot", x: 480, y: 40, size: 80},
				input5: {type: "slot", x: 160, y: 120, size: 80},
				input6: {type: "slot", x: 240, y: 120, size: 80},
				input7: {type: "slot", x: 320, y: 120, size: 80},
				input8: {type: "slot", x: 400, y: 120, size: 80},
				input9: {type: "slot", x: 480, y: 120, size: 80},
				input10: {type: "slot", x: 320, y: 200, size: 80},
				input11: {type: "slot", x: 320, y: 280, size: 80},
				input12: {type: "slot", x: 320, y: 360, size: 80},
				input13: {type: "slot", x: 320, y: 440, size: 80},
				output0: {type: "slot", x: 750, y: 200, size: 120}
			}
		},
		getList: function(id, data, isUsage){
			let key = "";
			if(isUsage){
				const list = [];
				for(key in SHammer.data2){
					if(SHammer.data2[key][id] || SHammer.data2[key][id + ":" + data]){
						list.push(convertRecipe(key - 0));
					}
				}
				return list;
			}
			for(key in SHammer.data1){
				if(SHammer.data1[key].result == id){
					return [convertRecipe(SHammer.data1[key].result)];
				}
			}
			return [];
		}
	});

});