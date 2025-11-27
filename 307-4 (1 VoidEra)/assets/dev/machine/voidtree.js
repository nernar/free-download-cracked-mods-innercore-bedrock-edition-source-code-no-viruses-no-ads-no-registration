function destroyLeaves(x, y, z){
	var max = 0;
	while(World.getBlockID(x, y+max+1, z)==BlockID.voidleaf){max++;}
	for(var yy = y; yy <= y+max; yy++){
		for(var xx = x-2; xx <= x+2; xx++){
			for(var zz = z-2; zz <= z+2; zz++){
				if(World.getBlockID(xx, yy, zz)==BlockID.voidleaf){
					if(Math.random() < .075){
						World.drop(xx, yy, zz, ItemID.voidtree, 1, 0);
					}
					World.setBlock(xx, yy, zz, 0);
				}
			}
		}
	}
}

IDRegistry.genBlockID("voidlog");
Block.createBlock("voidlog", [
	{name: "Void Log", texture: [["voidlog", 1], ["voidlog", 1], ["voidlog", 0], ["voidlog", 0], ["voidlog", 0], ["voidlog", 0]], inCreative: true}
], "opaque");
Block.registerDropFunction("voidlog", function(coords, blockID){
	destroyLeaves(coords.x, coords.y, coords.z);
	return [[blockID, 1, 0]];
});
Block.setDestroyTime(BlockID.voidlog, 0.4);
ToolAPI.registerBlockMaterial(BlockID.voidlog, "wood");

IDRegistry.genBlockID("voidlogeyse");
Block.createBlock("voidlogeyse", [
	{name: "tile.voidlogeyse.name", texture: [["voidlog", 1], ["voidlog", 1], ["voidlog", 0], ["voidlog", 0], ["voidlog", 0], ["voidlog", 0]], inCreative: false},
	{name: "tile.voidlogeyse.name", texture: [["voidlog", 1], ["voidlog", 1], ["voidlog", 2], ["voidlog", 0], ["voidlog", 0], ["voidlog", 0]], inCreative: false},
	{name: "tile.voidlogeyse.name", texture: [["voidlog", 1], ["voidlog", 1], ["voidlog", 0], ["voidlog", 2], ["voidlog", 0], ["voidlog", 0]], inCreative: false},
	{name: "tile.voidlogeyse.name", texture: [["voidlog", 1], ["voidlog", 1], ["voidlog", 0], ["voidlog", 0], ["voidlog", 2], ["voidlog", 0]], inCreative: false},
	{name: "tile.voidlogeyse.name", texture: [["voidlog", 1], ["voidlog", 1], ["voidlog", 0], ["voidlog", 0], ["voidlog", 0], ["voidlog", 2]], inCreative: false}
], "opaque");
Block.registerDropFunction("voidlogeyse", function(coords, blockID){
	destroyLeaves(coords.x, coords.y, coords.z);
	return [[BlockID.voidlog, 1, 0], [ItemID.eyse, 1, 0]];
});
Block.setDestroyTime(BlockID.voidlogeyse, 0.4);
ToolAPI.registerBlockMaterial(BlockID.voidlogeyse, "wood");
Block.setRandomTickCallback(BlockID.voidlogeyse, function(x, y, z, id, data){
	if(data==0 && Math.random() < 0.1){
		World.setBlock(x, y, z, id, parseInt(Math.random()*4 + 1));
	}
});


IDRegistry.genBlockID("voidleaf");
Block.createBlock("voidleaf", [
	{name: "Void Leaves", texture: [["voidleaf", 0]], inCreative: false}
]);
Block.registerDropFunction("voidleaf", function(){
	if(Math.random() < .05){
		return [[ItemID.voidtree, 1, 0]]
	}
	else {
		return [];
	}
});
Block.setDestroyTime(BlockID.voidleaf, 0.2);
ToolAPI.registerBlockMaterial(BlockID.voidleaf, "plant");

Recipes.addShaped({id: BlockID.voidplank, count: 4, data: 0}, ["x"], ['x', BlockID.voidlog, -1]);



var VoidTreeGenerationHelper = {
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
		var k = 0.25;
		for(var ys = 0; ys < height; ys++){
			if(log.resin && Math.random() < k){
				World.setBlock(x, y + ys, z, log.resin, parseInt(Math.random()*4 + 1));
				k -= 0.1;
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

	generateVoidTree: function(x, y, z){
		VoidTreeGenerationHelper.generateCustomTree(x, y, z, {
			log: {
				id: BlockID.voidlog,
				data: 0,
				resin: BlockID.voidlogeyse
			},
			leaves: {
				id: BlockID.voidleaf,
				data: 0
			},
			height: {
				min: 4,
				max: 8,
				start: 2 + parseInt(Math.random() * 2)
			},
			pike: 2 + parseInt(Math.random() * 1.5),
			radius: 2
		});
	}
}


var ForestBiomeIDs = [4, 18, 27, 28];
var JungleBiomeIDs = [21, 22, 23, 149, 151];
var SwampBiomeIDs = [6, 134];

var VOID_TREE_BIOME_DATA = { };
if(__config__.access("void_tree_gen.forest_and_plains")){
	VOID_TREE_BIOME_DATA[1] = 0.005;
	for(var id in ForestBiomeIDs){
	VOID_TREE_BIOME_DATA[ForestBiomeIDs[id]] = 0.025;}
}
if(__config__.access("void_tree_gen.jungle")){
	for(var id in JungleBiomeIDs){
	VOID_TREE_BIOME_DATA[JungleBiomeIDs[id]] = 0.06;}
}
if(__config__.access("void_tree_gen.swamp")){
	for(var id in SwampBiomeIDs){
	VOID_TREE_BIOME_DATA[SwampBiomeIDs[id]] = 0.05;}
}

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < VOID_TREE_BIOME_DATA[World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)]){
		for(var i = 0; i < 1 + Math.random() * 6; i++){
			var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
			coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
			if(World.getBlockID(coords.x, coords.y, coords.z) == 2){
				coords.y++;
				VoidTreeGenerationHelper.generateVoidTree(coords.x, coords.y, coords.z);
			}
		}
	}
});
