IDRegistry.genBlockID("shardore");
Block.createBlock("shardore", [
	{name: "Shard Ore", texture: [["shardore", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.shardore, "stone", 3, true);
Block.setDestroyTime(BlockID.shardore, 3);
Block.registerDropFunction(BlockID.shardore, function(coords, blockID, blockData, level, enchant){
	if(level > 3){
		return [[ItemID.voidshard, 3, 0]];
	}
	return [];
}, 3);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	for(var i = 0; i < 10; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 50);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.shardore, 0, 8);
	}
});