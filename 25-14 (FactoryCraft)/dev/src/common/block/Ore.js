Translation.addTranslation("Uranium Ore", {ru: "Урановая руда"});

IDRegistry.genBlockID("oreUranium");
Block.createBlock("oreUranium", [
	{name: "Uranium Ore", texture: [["ore_uranium", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreUranium, "stone", 3, true);
Block.setDestroyTime(BlockID.oreUranium, 3);
Block.registerDropFunction(BlockID.oreUranium, function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		return [[ItemID.uranium, 1, 0]];
	}
	return [];
}, 2);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	for(var i = 0; i < 10; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 50);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreUranium, 0, 8);
	}
});