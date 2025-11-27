let PocketDimension = {
	dimensions: {},
	register(player, name, description){
		description = description || {};
		description.id = description.id || Math.floor(Math.random()*32000);
		description.name = name;
		let dimension = new Dimensions.CustomDimension(player+name, description.id);
		description.id = dimension.id;
		dimension.setGenerator(Dimensions.newGenerator({
			layers: [
				{
					minY: 0,
					maxY: 30,
					yConversion: [[0, 0]],
					material: {base: 1}
				}
			]
    }));
    this.dimensions[player] = this.dimensions[player] || {};
    this.dimensions[player][name] = description;
		return description.id
	},
	_getId(player, name){
		return this.dimensions[player][name].id;
	},
	hasDimension(player, name){
		return !!this.dimensions[player] && !!this.dimensions[player][name];
	},
	getId(player, name, description){
		description = description || {};
		if(!this.hasDimension(name, description))
			return this.register(player, name, description);
		return this._getId(player, name);
	}
};
Saver.addSavesScope("AncientWonders.PocketDimension", 
	function read(scope){
		PocketDimension.dimensions = {};
		for(let player in scope){
			let dimensions = scope[player];
			for(let name in dimensions)
				PocketDimension.register(player, name, dimensions[name]);
		}
	},
	function save(){
		return PocketDimension.dimensions;
	}
);
Callback.addCallback("LevelLeft", function(){
	PocketDimension.dimensions = {};
});