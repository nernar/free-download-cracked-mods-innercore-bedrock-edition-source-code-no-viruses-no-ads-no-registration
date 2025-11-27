LIBRARY({
	name: "EnhancedRecipes",
	version: 2,
	shared: false,
	api: "CoreEngine"
});


let Recipes2 = {

	list: [],

	addShaped: function(result, mask, source, func){
		const array = [];
		for(let key in source){
			typeof source[key] == "object" ?
				array.push(key, source[key].id, "data" in source[key] ? source[key].data : -1):
				array.push(key, source[key], -1);
		}
		this.list.push({
			result: typeof result == "object" ? result : {id: result},
			mask: mask.split(":"),
			source: array,
			func: func
		});
	},

	addShapeless: function(result, source, func){
		const array = [];
		let type = "";
		let j = 0;
		for(let i = 0; i < source.length; i++){
			type = typeof source[i];
			if(type == "number" || type == "string"){
				array.push({id: source[i], data: -1});
				continue;
			}
			if(!("data" in source[i])){
				source[i].data = -1;
			}
			if(!source[i].count || source[i].count == 1){
				array.push({id: source[i].id, data: source[i].data});
				continue;
			}
			for(j = source[i].count; j--;){
				array.push({id: source[i].id, data: source[i].data});
			}
		}
		this.list.push({
			result: typeof result == "object" ? result : {id: result},
			source: array,
			func: func
		});
	},

	getID: function(val){
		const type = typeof val;
		if(type == "number"){
			return val;
		}
		if(type == "string"){
			const array = val.split(".");
			if(array[0] == "BlockID"){
				return BlockID[array[1]];
			}
			if(array[0] == "ItemID"){
				return ItemID[array[1]];
			}
		}
		return 0;
	},

	setup: function(){
		let j = 0;
		for(let i = this.list.length; i--;){
			this.list[i].result.id = this.getID(this.list[i].result.id);
			if(this.list[i].mask){
				for(j = 1; j < this.list[i].source.length; j += 3){
					this.list[i].source[j] = this.getID(this.list[i].source[j]);
				}
				Recipes.addShaped(this.list[i].result, this.list[i].mask, this.list[i].source, this.list[i].func);
			}
			else{
				for(j = 0; j < this.list[i].source.length; j++){
					this.list[i].source[j].id = this.getID(this.list[i].source[j].id);
				}
				Recipes.addShapeless(this.list[i].result, this.list[i].source, this.list[i].func);
			}
		}
		delete this.list;
	},

	bucketFunc: function(api){
		let slot;
		for(let i = 9; i--;){
			slot = api.getFieldSlot(i);
			if(slot.id == 325){
				slot.data = 0;
				continue;
			}
			api.decreaseFieldSlot(i);
		}
	}

};


Callback.addCallback("PreLoaded", function(){
	Recipes2.setup();
});


EXPORT("Recipes2", Recipes2);