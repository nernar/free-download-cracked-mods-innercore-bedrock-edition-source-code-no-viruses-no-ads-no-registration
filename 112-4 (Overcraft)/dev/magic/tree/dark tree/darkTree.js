function destroyLeaves(x, y, z){
	var max = 0;
	while(World.getBlockID(x, y+max+1, z)==BlockID.MagicLeaves){max++;}
	for(var yy = y; yy <= y+max; yy++){
		for(var xx = x-2; xx <= x+2; xx++){
			for(var zz = z-2; zz <= z+2; zz++){
				if(World.getBlockID(xx, yy, zz)==BlockID.MagicLeaves){
					if(Math.random() < .075){
						World.drop(xx, yy, zz, ItemID.magicTree, 1, 0);
					}
					World.setBlock(xx, yy, zz, 0);
				}
			}
		}
	}
}


/////////////////////////////////////////////Саплинг
IDRegistry.genItemID("magicTree");
Item.createItem("magicTree", "Magic Tree", {name: "magicWood_sapling", meta: 0}, {stack: 64});
////////////////////////////////////////////Древесина
IDRegistry.genBlockID("MagicLog");
Block.createBlock("MagicLog", [
	{name: "Dark Magic Log", texture: [["magicLog", 0], ["magicLog", 0], ["magicLog", 0], ["magicLog", 0], ["magicLog", 0], ["magicLog", 0]], inCreative: true}
]);
Block.registerDropFunction("MagicLog", function(coords, blockID){
	destroyLeaves(coords.x, coords.y, coords.z);
	return [[blockID, 1, 0]];
});
Block.setDestroyTime(BlockID.MagicLog, 2);
ToolAPI.registerBlockMaterial(BlockID.MagicLog, "wood");
////////////////////////////////////////////Листва
var BLOCK_TYPE_LEAVES = Block.createSpecialType({
	base: 18,
	destroytime: 0.2,
});
IDRegistry.genBlockID("MagicLeaves");
Block.createBlock("MagicLeaves", [
	{name: "Dark Magic Leaves", texture: [["magic_Leavs", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("MagicLeaves", function(){
	if(Math.random() < .075){
		return [[ItemID.magicTree, 1, 0]]
	}
	else {
		return [];
	}
});
ToolAPI.registerBlockMaterial(BlockID.undeadLeaves, "plant");
///////////////////////////////////////////////////////////////////////////////
var TreeGenerationHelper = {
	/*
	 params: {
		 leaves: {
			 id: 
			 data: 
		 },
		 log: {
			 id: 
			 data:
			 resin: 
		 },
		 height: {
			 min:
			 max:
			 start: 
		 },
		 pike:
		 radius: 
	 }
	*/
	generateCustomTree: function(x, y, z, params){
		var leaves = params.leaves;
		var log = params.log;
		
		var height = parseInt(Math.random() * (0.5 + params.height.max - params.height.min) + params.height.min);
		var resinHeight = -1;
		if(log.resin){
			resinHeight = parseInt(Math.random() * (height - 2)) + 1;
		}
		for(var ys = 0; ys < height; ys++){
			if(ys == resinHeight){
				World.setBlock(x, y + ys, z, log.resin, parseInt(Math.random()*4));
			}
			else{
				World.setFullBlock(x, y + ys, z, log);
			}
		}
		if(params.pike){
			for(var ys = 0; ys < params.pike; ys++){
				World.setFullBlock(x, y + ys + height, z, leaves);
			}
		}
		
		var leavesStart = params.height.start;
		var leavesEnd = height;
		var leavesMiddle = (leavesEnd + leavesStart) / 2;
		var leavesLen = leavesEnd - leavesStart;
		for(var ys = leavesStart; ys < leavesEnd; ys++){
			for(var xs = -params.radius; xs <= params.radius; xs++){
				for(var zs = -params.radius; zs <= params.radius; zs++){
					var d = Math.sqrt(xs*xs + zs*zs) + (Math.random()*0.5 + 0.5) * Math.pow(Math.abs(leavesMiddle - ys) / leavesLen, 1.5) * 1.2;
					var blockID = World.getBlockID(x + xs, y + ys, z + zs);
					if(d <= params.radius + 0.5 && (blockID==0 || blockID==106)){
						World.setFullBlock(x + xs, y + ys, z + zs, leaves);
					}
				}
			}
		}
	},

	generateTree: function(x, y, z, activateTileEntity){
		TreeGenerationHelper.generateCustomTree(x, y, z, {
			log: {
				id: BlockID.MagicLog,
				data: 0,
				resin: BlockID.MagicLog
			},
			leaves: {
				id: BlockID.MagicLeaves,
				data: 0
			},
			height: {
				min: 5,
				max: 7,
				start: 2 + parseInt(Math.random() * 2)
			},
			pike: 2 + parseInt(Math.random() * 1.5),
			radius: 2
		});
		if(activateTileEntity){
			return World.addTileEntity(x, y, z);
		}
	}
}

//////////////////////////////////////////////////////////////////////////////////
var SAPLING_GROUND_TILES = {
	2: true,
	3: true,
	60: true
};

IDRegistry.genItemID("magicTree");
Item.createItem("magicTree", "4", {name: "magicWood_sapling", data: 0});

Item.registerUseFunction("magicTree", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);
	
	if (GenerationUtils.isTransparentBlock(tile1.id) && SAPLING_GROUND_TILES[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.magicTree);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});

IDRegistry.genBlockID("magicTree");
Block.createBlock("magicTree", [
	{name: "5", texture: [["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0]], inCreative: false}
]);

Block.setBlockShape(BlockID.magicTree, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.1, z: 0.999});
Block.registerDropFunction("magicTree", function(){
	return [[ItemID.magicTree, 1, 0]];
});

TileEntity.registerPrototype(BlockID.magicTree, {
	defaultValues: {
		size: 0,
		growth: 0,
		lastGrowth: 0
	},
	
	created: function(){
		this.data.size = .85 + Math.random() * .25;
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x + .5, this.y + this.data.size / 2 - .02, this.z + .5);
		this.animation2 = new Animation.Item(this.x + .5, this.y + this.data.size / 2 - .02, this.z + .5);
		this.animation1.describeItem({
			id: ItemID.magicTree,
			count: 1,
			data: 0,
			rotation: "x",
			size: this.data.size
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: ItemID.magicTree,
			count: 1,
			data: 0,
			rotation: "z",
			size: this.data.size
		});
		this.animation2.load();
	},
	
	destroyAnimation: function(){
		if (this.animation1){
			this.animation1.destroy();
		}
		if (this.animation2){
			this.animation2.destroy();
		}
	},
	
	updateAnimation: function(){
		this.destroyAnimation();
		this.initAnimation();
	},
	
	init: function(){
		this.initAnimation();
	},
	
	destroy: function(){
		this.destroyAnimation();
	},
	
	tick: function(){
		if (World.getThreadTime() % 20 == 0){
			this.data.growth += Math.random() * 2;
			this.checkGrowth();
			if (!SAPLING_GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
				this.selfDestroy();
			}
		}
	},
	
	click: function(id, count, data){
		if (id == 351 && data == 15){
			this.data.growth += 256 + Math.random() * 128;
			this.checkGrowth();
			Player.setCarriedItem(id, count - 1, data);
		}
	},
	
	checkGrowth: function(){
		if (this.data.growth - 56 > this.data.lastGrowth){
			this.data.size += (this.data.growth - this.data.lastGrowth) / 480;
			this.data.lastGrowth = this.data.growth;
			this.updateAnimation();
		}
		if (this.data.growth > 512){
			this.selfDestroy();
     TreeGenerationHelper.generateTree(this.x, this.y, this.z, true);
		}
	}
});
//////////////////////////////////////////////////////////////////////////////////////////


