IDRegistry.genBlockID("refirusore");
Block.createBlock("refirusore", [
	{name: "Refirus Ore", texture: [["refirusore", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.refirusore, "stone", 3, true);
Block.setDestroyTime(BlockID.refirusore, 3);
Block.registerDropFunction(BlockID.refirusore, function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		return [[ItemID.refirus, 8, 0]];
	}
	return [];
}, 5);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	for(var i = 0; i < 10; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 50);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.refirusore, 0, 8);
	}
});