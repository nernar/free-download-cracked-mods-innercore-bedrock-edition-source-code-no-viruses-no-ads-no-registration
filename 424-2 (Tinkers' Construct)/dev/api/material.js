const Material = {

	melt: {},
	alloy: [],
	cast: {},
	material: {},
	shard: {},
	shape: {},

	addMeltingRecipe: function(id, data, liquid, amount){
		this.melt[~data ? id + ":" + data : id] = {liquid: liquid, amount: amount};
	},
	getMeltingRecipe: function(id, data){
		return this.melt[id] || this.melt[id + ":" + data];
	},

	addAlloyRecipe: function(liquid, amount){
		const input = [];
		for(let i = 2; i < arguments.length; i += 2){
			input.push({liquid: arguments[i], amount: arguments[i + 1] / 1000});
		}
		this.alloy.push({input: input, result: {liquid: liquid, amount: amount / 1000}});
	},

	createCast: function(type, cost, name, isMetal){
		const id = (isMetal ? "cast_" : "pattern_") + type;
		this.cast[IDRegistry.genItemID(id)] = {
			type: type,
			cost: isMetal ? cost * 144 / 1000 : cost,
			isMetal: isMetal || false
		};
		Item.createItem(id, name + (isMetal ? " Cast" : " Pattern"), {name: id});
	},
	getCast: function(id){
		return this.cast[id];
	},

	registerMaterial: function(id, data, material, cost, type, isMetal){
		this.material[~data ? id + ":" + data : id] = {
			material: material,
			cost: cost,
			type: type,
			isMetal: isMetal || false
		};
	},
	getMaterial: function(id, data){
		return this.material[id] || this.material[id + ":" + data];
	},

	registerShard: function(id, data, material){
		this.registerMaterial(id, data || -1, material, 0.5);
		this.shard[material] = {id: id, data: data};
	},
	getShard: function(material){
		return this.shard[material];
	},

	registerShape: function(shape){
		for(let i = 1; i < arguments.length; i++){
			this.shape[arguments[i]] = shape;
		}
	},
	getShape: function(id){
		return this.shape[id];
	}

};