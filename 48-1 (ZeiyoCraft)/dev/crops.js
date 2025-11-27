var BLOCKTYPE_PLANT = Block.createSpecialType({ 
	base: 59,
});

IDRegistry.genItemID("tomato_seed");
Item.createFoodItem("tomato_seed", "Tomato Seed", {name: "tomatoSeeds", meta: 0});

IDRegistry.genItemID("tomato");
Item.createFoodItem("tomato", "Tomato", {name: "tomato", meta: 0}, {food: 4});

IDRegistry.genBlockID("tomatocrop"); 
Block.createBlock("tomatocrop", [
	{name: "tomatocrop", texture: [["empty", 0], ["empty", 0], ["tomatoCrops_stage", 0]], inCreative: false},
	{name: "tomatocrop", texture: [["empty", 0], ["empty", 0], ["tomatoCrops_stage", 1]], inCreative: false},
	{name: "tomatocrop", texture: [["empty", 0], ["empty", 0], ["tomatoCrops_stage", 2]], inCreative: false}
],  BLOCKTYPE_PLANT)

Block.setBlockShape(BlockID.tomatocrop, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 0.05, z: 0.9});

TileEntity.registerPrototype(BlockID.tomatocrop, {
	
	defaultValues: {
		age: 0
	},
	
	tick: function(){
		if (Math.random() < .125){
			this.data.age += 1;
			World.setBlock(this.x, this.y, this.z, BlockID.tomatocrop, this.data.age)
		}
	},
	
	click: function(id, count, data, coords){
		if(id == 351, data == 15){
			Player.setCarriedItem(351, count - 1, 15);
			this.data.age += 1;
			World.setBlock(this.x, this.y, this.z, BlockID.tomatocrop, this.data.age)
		}
		return false;
	},

});

Item.registerUseFunctionForID(ItemID.tomato_seed, function(coords, item, block){
	if(World.getBlockID(coords.relative.x, coords.relative.y - 1, coords.relative.z) == 60){
		World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.tomatocrop, 0);
		Player.setCarriedItem(ItemID.tomato_seed, item.count - 1, 0);
	}
});

Block.registerDropFunction("tomatocrop", function(coords, blockID, blockData, level){
	if(blockData == 2){
		return [[ItemID.tomato, 1 + parseInt(Math.random() * 3), 0]]
	}
	else{
		return [[ItemID.tomato_seed, 1, 0]]
	}
});

IDRegistry.genItemID("grape_seed");
Item.createFoodItem("grape_seed", "Grape Seed", {name: "grapeSeeds", meta: 0});

IDRegistry.genItemID("grape");
Item.createFoodItem("grape", "Grape", {name: "grape", meta: 0}, {food: 5});

IDRegistry.genBlockID("grapecrop"); 
Block.createBlock("grapecrop", [
	{name: "tile.grapecrop.name", texture: [["empty", 0], ["empty", 0], ["grapeCrops_stage", 0]], inCreative: false},
	{name: "grapecrop", texture: [["empty", 0], ["empty", 0], ["grapeCrops_stage", 1]], inCreative: false},
	{name: "grapecrop", texture: [["empty", 0], ["empty", 0], ["grapeCrops_stage", 2]], inCreative: false}
],  BLOCKTYPE_PLANT)

Block.setBlockShape(BlockID.grapecrop, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 0.05, z: 0.9});

TileEntity.registerPrototype(BlockID.grapecrop, {
	
	defaultValues: {
		age: 0
	},
	
	tick: function(){
		if (Math.random() < .125){
			this.data.age += 1;
			World.setBlock(this.x, this.y, this.z, BlockID.grapecrop, this.data.age)
		}
	},
	
	click: function(id, count, data, coords){
		if(id == 351, data == 15){
			Player.setCarriedItem(351, count - 1, 15);
			this.data.age += 1;
			World.setBlock(this.x, this.y, this.z, BlockID.grapecrop, this.data.age)
		}
		return false;
	},

});

Item.registerUseFunctionForID(ItemID.grape_seed, function(coords, item, block){
	if(World.getBlockID(coords.relative.x, coords.relative.y - 1, coords.relative.z) == 60){
		World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.grapecrop, 0);
		Player.setCarriedItem(ItemID.grape_seed, item.count - 1, 0);
	}
});

Block.registerDropFunction("grapecrop", function(coords, blockID, blockData, level){
	if(blockData == 2){
		return [[ItemID.grape, 1 + parseInt(Math.random() * 3), 0]]
	}
	else{
		return [[ItemID.grape_seed, 1, 0]]
	}
});






BlockRenderer.addRenderCallback(BlockID.tomatocrop, function(api, coords, block) {

var box = BlockID.tomatocrop;

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.10, 0.10, .507, 0.90, .90, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.10, .10, .497, .90, 0.90, .507, box, 0);
                 
});
BlockRenderer.enableCustomRender(BlockID.tomatocrop);

BlockRenderer.addRenderCallback(BlockID.grapecrop, function(api, coords, block) {

var box = BlockID.grapecrop;

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.10, 0.10, .507, 0.90, .90, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.10, .10, .497, .90, 0.90, .507, box, 0);
                 
});
BlockRenderer.enableCustomRender(BlockID.grapecrop);