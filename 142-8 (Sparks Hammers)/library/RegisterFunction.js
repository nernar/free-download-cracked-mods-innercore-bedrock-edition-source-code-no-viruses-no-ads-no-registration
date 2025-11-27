LIBRARY({
	name: "RegisterFunction",
	version: 3,
	shared: true,
	api: "CoreEngine"
});


Block.clickFuncs = {};

Block.registerClickFunctionForID = function(id, func){
	this.clickFuncs[id] = func;
};

Block.registerClickFunction = function(id, func){
	id = this.getNumericId(id);
	if(!~id){
		return false;
	}
	this.registerClickFunctionForID(id, func);
};

Block.getClickFunc = function(id){
	return this.clickFuncs[id];
};

Callback.addCallback("ItemUse", function(coords, item, block){
	if(Entity.getSneaking(Player.get())){
		return;
	}
	const func = Block.getClickFunc(block.id);
	func && func(coords, item, block);
});


Item.eatenFuncs = {};

Item.registerEatenFunctionForID = function(id, func){
	this.eatenFuncs[id] = func;
};

Item.registerEatenFunction = function(id, func){
	id = this.getNumericId(id);
	if(!~id){
		return false;
	}
	this.registerEatenFunctionForID(id, func);
};

Item.getEatenFunc = function(id){
	return this.eatenFuncs[id];
};

Callback.addCallback("FoodEaten", function(food, ratio){
	const func = Item.getEatenFunc(Player.getCarriedItem().id);
	func && func(food, ratio);
});