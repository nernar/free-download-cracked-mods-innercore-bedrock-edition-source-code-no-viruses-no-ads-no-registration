IDRegistry.genBlockID("rediantore");
Block.createBlock("rediantore", [
	{name: "Rediant Ore", texture: [["rediantore", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.rediantore, "stone", 3, true);
Block.setDestroyTime(BlockID.rediantore, 3);
Block.registerDropFunction(BlockID.rediantore, function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		return [[ItemID.rediant, 5, 0]];
	}
	return [];
}, 3);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	for(var i = 0; i < 10; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 50);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.rediantore, 0, 8);
	}
});
