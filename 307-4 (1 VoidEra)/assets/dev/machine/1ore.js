IDRegistry.genBlockID("disoreedore");
Block.createBlock("disoreedore", [
	{name: "Disoreed Ore", texture: [["disoreedore", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.disoreedore, "stone", 3, true);
Block.setDestroyTime(BlockID.disoreedore, 3);
Block.registerDropFunction(BlockID.disoreedore, function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		return [[ItemID.disoreed, 4, 0]];
	}
	return [];
}, 2);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	for(var i = 0; i < 10; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 50);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.disoreedore, 0, 8);
	}
});