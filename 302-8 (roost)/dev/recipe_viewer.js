ModAPI.addAPICallback("RecipeViewer", function(api){

	api.Core.registerRecipeType("roost_product", {
		contents: {
			icon: BlockID.chicken_roost,
			drawing: [
				{type: "bitmap", x: 440, y: 220, scale: 5, bitmap: "bar_roost_1"}
			],
			elements: {
				input0: {type: "slot", x: 300, y: 200, size: 120},
				output0: {type: "slot", x:  600, y: 200, size: 120}
			}
		},
		getList: function(id, data, isUsage){
			const list = [];
			let product;
			if(isUsage){
				const chicken = ChickenRegistry.getData(id);
				if(chicken){
					product = chicken.getProduct();
					list.push({
						input: [{id: id, count: 1, data: 0}],
						output: [{id: product.id, count: 1, data: product.data || 0}]
					});
				}
				return list;
			}
			for(let key in ChickenRegistry.data){
				product = ChickenRegistry.data[key].getProduct();
				product.id == id && (!~data || (product.data || 0) == data) && list.push({
					input: [{id: key - 0, count: 1, data: 0}],
					output: [{id: product.id, count: 1, data: product.data || 0}]
			 	});
			}
			return list;
		}
	});

	api.Core.registerRecipeType("roost_mutation", {
		contents: {
			icon: BlockID.chicken_roost,
			drawing: [
				{type: "bitmap", x: 210, y: 230, scale: 6, bitmap: "roost_plus"},
				{type: "bitmap", x: 600, y: 230, scale: 6, bitmap: "bar_breeder_1"}
			],
			elements: {
				slotSeed: {type: "slot", x: 60, y: 200, size: 120, visual: true},
				input0: {type: "slot", x: 300, y: 200, size: 120},
				input1: {type: "slot", x: 420, y: 200, size: 120},
				output0: {type: "slot", x: 840, y: 200, size: 120}
			}
		},
		getList: function(id, data, isUsage){
			const list = [];
			let key = "";
			if(isUsage){
				let parent1 = parent2 = 0;
				for(key in ChickenRegistry.parentsData){
					parent1 = ItemID["chicken_" + ChickenRegistry.parentsData[key][0]];
					parent2 = ItemID["chicken_" + ChickenRegistry.parentsData[key][1]];
					(parent1 == id || parent2 == id || ValidFunc.isSeed[id]) && list.push({
						input: [
							{id: parent1, count: 1, data: 0},
							{id: parent2, count: 1, data: 0}
						],
						output: [{id: ItemID["chicken_" + key], count: 1, data: 0}]
					});
				}
				return list;
			}
			for(key in ChickenRegistry.parentsData){
				ItemID["chicken_" + key] == id && list.push({
					input: [
						{id: ItemID["chicken_" + ChickenRegistry.parentsData[key][0]], count: 1, data: 0},
						{id: ItemID["chicken_" + ChickenRegistry.parentsData[key][1]], count: 1, data: 0}
					],
					output: [{id: id, count: 1, data: 0}]
				});
			}
			return list;
		},
		onOpen: function(elements, data){
			const array = Object.keys(ValidFunc.isSeed);
			const seed = array[Math.random() * array.length | 0];
			const elem = elements.get("slotSeed");
			elem.onBindingUpdated("source", {id: seed - 0, count: 1, data: 0});
		}
	});

});