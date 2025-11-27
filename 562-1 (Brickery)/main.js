var FURNACE_FUEL_MAP = { 	5: 300, 	6: 100, 	17: 300, 	263: 1600, 	280: 100, 	268: 200, 	269: 200, 	270: 200, 	271: 200, 	85: 300, 	107: 300, 	134: 300, 	135: 300, 	158: 150, 	162: 300, 	163: 300, 	164: 300, 	184: 300, 	185: 300, 	186: 300, 	187: 300, 	53: 300, 	54: 300, 	58: 300 };



var guiBrickFurnace = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Brick Furnace"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: 3.2}
	],
	
	elements: {
     "progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
		"slotSource": {type: "slot", x: 441, y: 75},
		"slotFuel": {type: "slot", x: 441, y: 212},
		"slotResult": {type: "slot", x: 625, y: 142},
	}
});





IDRegistry.genBlockID("brickFurnace");
Block.createBlockWithRotation("brickFurnace", [
	{name: "Brick Furnace", texture: [["brick_furnace_top", 0], ["brick_furnace_top", 0], ["brick_furnace_side", 0], ["brick_furnace_front", 0], ["brick_furnace_side", 0], ["brick_furnace_side", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.brickFurnace, "stone");

Recipes.addShaped({id: BlockID.brickFurnace, count: 1, data: 0}, [
		"xxx",
		"x x",
		"xxx"
	], ['x', 45, 0]);

TileEntity.registerPrototype(BlockID.brickFurnace, {
	defaultValues: {
		progress: 0,
		burn: 0,
		burnMax: 0
	},
	
	getGuiScreen: function(){
		return guiBrickFurnace;
	},
	
	addTransportedItem: function(self, item, direction){
		var fuelSlot = this.container.getSlot("slotFuel");
		if(FURNACE_FUEL_MAP[item.id] && (fuelSlot.id==0 || fuelSlot.id==item.id && fuelSlot.data==item.data && fuelSlot.count < 64)){
			var add = Math.min(item.count, 64 - slotFuel.count);
			item.count -= add;
			fuelSlot.id = item.id;
			fuelSlot.data = item.data;
			fuelSlot.count += add;
			if(!item.count){return;}
		}
		
		var sourceSlot = this.container.getSlot("slotSource");
		if(sourceSlot.id==0 || sourceSlot.id==item.id && sourceSlot.data==item.data && sourceSlot.count < 64){
			var add = Math.min(item.count, 64 - sourceSlot.count);
			item.count -= add;
			sourceSlot.id = item.id;
			sourceSlot.data = item.data;
			sourceSlot.count += add;
			if(!item.count){return;}
		}
	},
	
	getTransportSlots: function(){
		return {input: ["slotSource", "slotFuel"], output: ["slotResult"]};
	},
	
	tick: function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
		if(result && this.data.burn > 0){
			var resultSlot = this.container.getSlot("slotResult");
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 90){
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else {
			this.data.progress = 0;
		}
		
		if(this.data.burn > 0){
			this.data.burn--;
		}
		else if(result){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
		}
		
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("progressScale", this.data.progress / 90);
	},
	
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if(fuelSlot.id > 0){
			var burn = FURNACE_FUEL_MAP[fuelSlot.id];
			if(burn){
				fuelSlot.count--;
				this.container.validateSlot(slotName);
				return burn;
			}
			if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
				var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
				fuelSlot.id = empty.id;
				fuelSlot.data = empty.data;
				return 20000;
			}
		}
		return 0;
	}
});



//fancywood

IDRegistry.genBlockID("plank_fancy_oak");
Block.createBlock("plank_fancy_oak", [
    {name: "Plank Fancy Oak", texture: [["plank_fancy_oak", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.plank_fancy_oak, count: 4, data: 0}, [
		" x ",
		"x x",
		" x "
	], ['x', 5, 0]);

IDRegistry.genBlockID("plank_fancy_spruce");
Block.createBlock("plank_fancy_spruce", [
    {name: "Plank Fancy Spruce", texture: [["plank_fancy_spruce", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.plank_fancy_spruce, count: 4, data: 0}, [
		" x ",
		"x x",
		" x "
	], ['x', 5, 1]);

IDRegistry.genBlockID("plank_fancy_birch");
Block.createBlock("plank_fancy_birch", [
    {name: "Plank Fancy Birch", texture: [["plank_fancy_birch", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.plank_fancy_birch, count: 4, data: 0}, [
		" x ",
		"x x",
		" x "
	], ['x', 5, 2]);

IDRegistry.genBlockID("plank_fancy_jungle");
Block.createBlock("plank_fancy_jungle", [
    {name: "Plank Fancy Jungle", texture: [["plank_fancy_jungle", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.plank_fancy_jungle, count: 4, data: 0}, [
		" x ",
		"x x",
		" x "
	], ['x', 5, 3]);

IDRegistry.genBlockID("plank_fancy_acacia");
Block.createBlock("plank_fancy_acacia", [
    {name: "Plank Fancy Acacia", texture: [["plank_fancy_acacia", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.plank_fancy_acacia, count: 4, data: 0}, [
		" x ",
		"x x",
		" x "
	], ['x', 5, 4]);

IDRegistry.genBlockID("plank_fancy_dark_oak");
Block.createBlock("plank_fancy_dark_oak", [
    {name: "Plank Fancy Dark Oak", texture: [["plank_fancy_dark_oak", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.plank_fancy_dark_oak, count: 4, data: 0}, [
		" x ",
		"x x",
		" x "
	], ['x', 5, 5]);



//all

IDRegistry.genBlockID("brick_path");
Block.createBlock("brick_path", [
    {name: "Brick Path", texture: [["brick_path", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.brick_path, count: 4, data: 0}, [
		" xx",
		"xx ",
		"   "
	], ['x', 45, 0]);

Recipes.addShaped({id: BlockID.brick_path, count: 1, data: 0}, [
		" xx",
		"xx ",
		"   "
	], ['x', 336, 0]);

IDRegistry.genBlockID("brick_tile");
Block.createBlock("brick_tile", [
    {name: "Brick Tile", texture: [["brick_tile", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.brick_tile, count: 4, data: 0}, [
		" x ",
		"x x",
		" x "
	], ['x', 45, 0]);

Recipes.addShaped({id: BlockID.brick_tile, count: 1, data: 0}, [
		" x ",
		"x x",
		" x "
	], ['x', 336, 0]);

IDRegistry.genBlockID("cracked_bricks");
Block.createBlock("cracked_bricks", [
    {name: "Cracked Bricks", texture: [["cracked_bricks", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.cracked_bricks, count: 4, data: 0}, [
		"xx ",
		"xx ",
		"   "
	], ['x', 45, 0]);

IDRegistry.genBlockID("dirty_bricks");
Block.createBlock("dirty_bricks", [
    {name: "Dirty Bricks", texture: [["dirty_bricks", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.dirty_bricks, count: 8, data: 0}, [
		"xxx",
		"xyx",
		"xxx"
	], ['x', 45, 0, 'y', 3, 0]);

IDRegistry.genBlockID("mixed_cobble");
Block.createBlock("mixed_cobble", [
    {name: "Mixed Cobblestone", texture: [["mixed_cobble", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.mixed_cobble, count: 4, data: 0}, [
		"xy ",
		"ab ",
		"   "
	], ['x', 4, 0, 'y', 1, 1, 'a', 1, 5, 'b', 1, 3]);

IDRegistry.genBlockID("mossy_bricks");
Block.createBlock("mossy_bricks", [
    {name: "Mossy Bricks", texture: [["mossy_bricks", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.mossy_bricks, count: 1, data: 0}, [
		"xy ",
		"   ",
		"   "
	], ['x', 45, 0, 'y', 106, 0]);



//terracotta

IDRegistry.genBlockID("black_terracotta_brick");
Block.createBlock("black_terracotta_brick", [
    {name: "Black Terracotta Brick", texture: [["black_terracotta_brick", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.black_terracotta_brick, count: 4, data: 0}, [
		"xx ",
		"xx ",
		"   "
	], ['x', 159, 15]);

IDRegistry.genBlockID("blue_terracotta_brick");
Block.createBlock("blue_terracotta_brick", [
    {name: "Blue Terracotta Brick", texture: [["blue_terracotta_brick", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.blue_terracotta_brick, count: 4, data: 0}, [
		"xx ",
		"xx ",
		"   "
	], ['x', 159, 11]);

IDRegistry.genBlockID("brown_terracotta_brick");
Block.createBlock("brown_terracotta_brick", [
    {name: "Brown Terracotta Brick", texture: [["brown_terracotta_brick", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.brown_terracotta_brick, count: 4, data: 0}, [
		"xx ",
		"xx ",
		"   "
	], ['x', 159, 12]);

IDRegistry.genBlockID("cyan_terracotta_brick");
Block.createBlock("cyan_terracotta_brick", [
    {name: "Cyan Terracotta Brick", texture: [["cyan_terracotta_brick", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.cyan_terracotta_brick, count: 4, data: 0}, [
		"xx ",
		"xx ",
		"   "
	], ['x', 159, 9]);

IDRegistry.genBlockID("gray_terracotta_brick");
Block.createBlock("gray_terracotta_brick", [
    {name: "Gray Terracotta Brick", texture: [["gray_terracotta_brick", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.gray_terracotta_brick, count: 4, data: 0}, [
		"xx ",
		"xx ",
		"   "
	], ['x', 159, 7]);

IDRegistry.genBlockID("green_terracotta_brick");
Block.createBlock("green_terracotta_brick", [
    {name: "Green Terracotta Brick", texture: [["green_terracotta_brick", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.green_terracotta_brick, count: 4, data: 0}, [
		"xx ",
		"xx ",
		"   "
	], ['x', 159, 13]);

IDRegistry.genBlockID("light_blue_terracotta_brick");
Block.createBlock("light_blue_terracotta_brick", [
    {name: "Light Blue Terracotta Brick", texture: [["light_blue_terracotta_brick", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.light_blue_terracotta_brick, count: 4, data: 0}, [
		"xx ",
		"xx ",
		"   "
	], ['x', 159, 3]);

IDRegistry.genBlockID("light_gray_terracotta_brick");
Block.createBlock("light_gray_terracotta_brick", [
    {name: "Light Gray Terracotta Brick", texture: [["light_gray_terracotta_brick", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.light_gray_terracotta_brick, count: 4, data: 0}, [
		"xx ",
		"xx ",
		"   "
	], ['x', 159, 8]);

IDRegistry.genBlockID("lime_terracotta_brick");
Block.createBlock("lime_terracotta_brick", [
    {name: "Lime Terracotta Brick", texture: [["lime_terracotta_brick", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.lime_terracotta_brick, count: 4, data: 0}, [
		"xx ",
		"xx ",
		"   "
	], ['x', 159, 5]);

IDRegistry.genBlockID("magenta_terracotta_brick");
Block.createBlock("magenta_terracotta_brick", [
    {name: "Magenta Terracotta Brick", texture: [["magenta_terracotta_brick", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.magenta_terracotta_brick, count: 4, data: 0}, [
		"xx ",
		"xx ",
		"   "
	], ['x', 159, 2]);

IDRegistry.genBlockID("orange_terracotta_brick");
Block.createBlock("orange_terracotta_brick", [
    {name: "Orange Terracotta Brick", texture: [["orange_terracotta_brick", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.orange_terracotta_brick, count: 4, data: 0}, [
		"xx ",
		"xx ",
		"   "
	], ['x', 159, 1]);

IDRegistry.genBlockID("pink_terracotta_brick");
Block.createBlock("pink_terracotta_brick", [
    {name: "Pink Terracotta Brick", texture: [["pink_terracotta_brick", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.pink_terracotta_brick, count: 4, data: 0}, [
		"xx ",
		"xx ",
		"   "
	], ['x', 159, 6]);

IDRegistry.genBlockID("purple_terracotta_brick");
Block.createBlock("purple_terracotta_brick", [
    {name: "Purple Terracotta Brick", texture: [["purple_terracotta_brick", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.purple_terracotta_brick, count: 4, data: 0}, [
		"xx ",
		"xx ",
		"   "
	], ['x', 159, 10]);

IDRegistry.genBlockID("red_terracotta_brick");
Block.createBlock("red_terracotta_brick", [
    {name: "Red Terracotta Brick", texture: [["red_terracotta_brick", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.red_terracotta_brick, count: 4, data: 0}, [
		"xx ",
		"xx ",
		"   "
	], ['x', 159, 14]);

IDRegistry.genBlockID("terracotta_tile");
Block.createBlock("terracotta_tile", [
    {name: "Terracotta Tile", texture: [["terracotta_tile", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.terracotta_tile, count: 4, data: 0}, [
		"xx ",
		"xx ",
		"   "
	], ['x', 172, 0]);

IDRegistry.genBlockID("white_terracotta_brick");
Block.createBlock("white_terracotta_brick", [
    {name: "White Terracotta Brick", texture: [["white_terracotta_brick", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.white_terracotta_brick, count: 4, data: 0}, [
		"xx ",
		"xx ",
		"   "
	], ['x', 159, 0]);

IDRegistry.genBlockID("yellow_terracotta_brick");
Block.createBlock("yellow_terracotta_brick", [
    {name: "Yellow Terracotta Brick", texture: [["yellow_terracotta_brick", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.yellow_terracotta_brick, count: 4, data: 0}, [
		"xx ",
		"xx ",
		"   "
	], ['x', 159, 4]);