/*Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
			var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
			coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
			if(World.getBlockID(coords.x, coords.y, coords.z) == 2){
				
				World.setBlock(coords.x+1, coords.y, coords.z, BlockID.DarkDirt, 0);
				World.setBlock(coords.x-1, coords.y, coords.z, BlockID.DarkDirt, 0);
				
				World.setBlock(coords.x+1, coords.y, coords.z-1, BlockID.DarkDirt, 0);
				World.setBlock(coords.x+1, coords.y, coords.z+1, BlockID.DarkDirt, 0);
				
				World.setBlock(coords.x-1, coords.y, coords.z+1, BlockID.DarkDirt, 0);
				World.setBlock(coords.x-1, coords.y, coords.z-1, BlockID.DarkDirt, 0);
				
				World.setBlock(coords.x, coords.y, coords.z+1, BlockID.DarkDirt, 0);
				World.setBlock(coords.x, coords.y, coords.z-1, BlockID.DarkDirt, 0);
				
				World.setBlock(coords.x, coords.y, coords.z+2, BlockID.DarkDirt, 0);
				World.setBlock(coords.x, coords.y, coords.z-2, BlockID.DarkDirt, 0);
				
				World.setBlock(coords.x+2, coords.y, coords.z, BlockID.DarkDirt, 0);
				World.setBlock(coords.x-2, coords.y, coords.z, BlockID.DarkDirt, 0);
				
				//Stone
				
				World.setBlock(coords.x+1, coords.y-1, coords.z, BlockID.DarkStone, 0);
				World.setBlock(coords.x-1, coords.y-1, coords.z, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x+1, coords.y-1, coords.z-1, BlockID.DarkStone, 0);
				World.setBlock(coords.x+1, coords.y-1, coords.z+1, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x-1, coords.y-1, coords.z+1, BlockID.DarkStone, 0);
				World.setBlock(coords.x-1, coords.y-1, coords.z-1, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x, coords.y-1, coords.z+1, BlockID.DarkStone, 0);
				World.setBlock(coords.x, coords.y-1, coords.z-1, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x, coords.y-1, coords.z+2, BlockID.DarkStone, 0);
				World.setBlock(coords.x, coords.y-1, coords.z-2, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x+2, coords.y, coords.z, BlockID.DarkStone, 0);
				World.setBlock(coords.x-2, coords.y-1, coords.z, BlockID.DarkStone, 0);
				
					World.setBlock(coords.x+1, coords.y-2, coords.z, BlockID.DarkStone, 0);
				World.setBlock(coords.x-1, coords.y-2, coords.z, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x+1, coords.y-2, coords.z-1, BlockID.DarkStone, 0);
				World.setBlock(coords.x+1, coords.y-2, coords.z+1, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x-1, coords.y-2, coords.z+1, BlockID.DarkStone, 0);
				World.setBlock(coords.x-1, coords.y-2, coords.z-1, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x, coords.y-2, coords.z+1, BlockID.DarkStone, 0);
				World.setBlock(coords.x, coords.y-2, coords.z-1, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x, coords.y-2, coords.z+2, BlockID.DarkStone, 0);
				World.setBlock(coords.x, coords.y-2, coords.z-2, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x+2, coords.y-2, coords.z, BlockID.DarkStone, 0);
				World.setBlock(coords.x-2, coords.y-2, coords.z, BlockID.DarkStone, 0);
				
				
				World.setBlock(coords.x+1, coords.y-3, coords.z, BlockID.DarkStone, 0);
				World.setBlock(coords.x-1, coords.y-3, coords.z, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x+1, coords.y-3, coords.z-1, BlockID.DarkStone, 0);
				World.setBlock(coords.x+1, coords.y-3, coords.z+1, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x-1, coords.y-3, coords.z+1, BlockID.DarkStone, 0);
				World.setBlock(coords.x-1, coords.y-3, coords.z-1, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x, coords.y-3, coords.z+1, BlockID.DarkStone, 0);
				World.setBlock(coords.x, coords.y-3, coords.z-1, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x, coords.y-3, coords.z+2, BlockID.DarkStone, 0);
				World.setBlock(coords.x, coords.y-3, coords.z-2, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x+2, coords.y-3, coords.z, BlockID.DarkStone, 0);
				World.setBlock(coords.x-2, coords.y-3, coords.z, BlockID.DarkStone, 0);
				
				 TreeGenerationHelper.generateTree(coords.x, coords.y+1, coords.z, false);
											
											}								
});*/


var ForestBiomeIDs = [4, 18, 27, 28];
var JungleBiomeIDs = [21, 22, 23, 149, 151];
var SwampBiomeIDs = [6, 134];

var MAGIC_TREE_BIOME = { };
	MAGIC_TREE_BIOME[1] = 0.005;
	for(var id in ForestBiomeIDs){
	MAGIC_TREE_BIOME[ForestBiomeIDs[id]] = 0.025;}
	for(var id in JungleBiomeIDs){
	MAGIC_TREE_BIOME[JungleBiomeIDs[id]] = 0.06;}
	for(var id in SwampBiomeIDs){
	MAGIC_TREE_BIOME[SwampBiomeIDs[id]] = 0.05;}

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < MAGIC_TREE_BIOME[World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)]){
		for(var i = 0; i < 1 + Math.random() * 6; i++){
			var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
			coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
			if(World.getBlockID(coords.x, coords.y, coords.z) == 2){
				 TreeGenerationHelper.generateTree(coords.x, coords.y+1, coords.z, false);
				 
				 World.setBlock(coords.x+1, coords.y, coords.z, BlockID.DarkDirt, 0);
				World.setBlock(coords.x-1, coords.y, coords.z, BlockID.DarkDirt, 0);
				
				World.setBlock(coords.x+1, coords.y, coords.z-1, BlockID.DarkDirt, 0);
				World.setBlock(coords.x+1, coords.y, coords.z+1, BlockID.DarkDirt, 0);
				
				World.setBlock(coords.x-1, coords.y, coords.z+1, BlockID.DarkDirt, 0);
				World.setBlock(coords.x-1, coords.y, coords.z-1, BlockID.DarkDirt, 0);
				
				World.setBlock(coords.x, coords.y, coords.z+1, BlockID.DarkDirt, 0);
				World.setBlock(coords.x, coords.y, coords.z-1, BlockID.DarkDirt, 0);
				
				World.setBlock(coords.x, coords.y, coords.z+2, BlockID.DarkDirt, 0);
				World.setBlock(coords.x, coords.y, coords.z-2, BlockID.DarkDirt, 0);
				
				World.setBlock(coords.x+2, coords.y, coords.z, BlockID.DarkDirt, 0);
				World.setBlock(coords.x-2, coords.y, coords.z, BlockID.DarkDirt, 0);
				
				//Stone
				
				World.setBlock(coords.x+1, coords.y-1, coords.z, BlockID.DarkStone, 0);
				World.setBlock(coords.x-1, coords.y-1, coords.z, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x+1, coords.y-1, coords.z-1, BlockID.DarkStone, 0);
				World.setBlock(coords.x+1, coords.y-1, coords.z+1, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x-1, coords.y-1, coords.z+1, BlockID.DarkStone, 0);
				World.setBlock(coords.x-1, coords.y-1, coords.z-1, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x, coords.y-1, coords.z+1, BlockID.DarkStone, 0);
				World.setBlock(coords.x, coords.y-1, coords.z-1, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x, coords.y-1, coords.z+2, BlockID.DarkStone, 0);
				World.setBlock(coords.x, coords.y-1, coords.z-2, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x+2, coords.y, coords.z, BlockID.DarkStone, 0);
				World.setBlock(coords.x-2, coords.y-1, coords.z, BlockID.DarkStone, 0);
				
					World.setBlock(coords.x+1, coords.y-2, coords.z, BlockID.DarkStone, 0);
				World.setBlock(coords.x-1, coords.y-2, coords.z, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x+1, coords.y-2, coords.z-1, BlockID.DarkStone, 0);
				World.setBlock(coords.x+1, coords.y-2, coords.z+1, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x-1, coords.y-2, coords.z+1, BlockID.DarkStone, 0);
				World.setBlock(coords.x-1, coords.y-2, coords.z-1, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x, coords.y-2, coords.z+1, BlockID.DarkStone, 0);
				World.setBlock(coords.x, coords.y-2, coords.z-1, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x, coords.y-2, coords.z+2, BlockID.DarkStone, 0);
				World.setBlock(coords.x, coords.y-2, coords.z-2, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x+2, coords.y-2, coords.z, BlockID.DarkStone, 0);
				World.setBlock(coords.x-2, coords.y-2, coords.z, BlockID.DarkStone, 0);
				
				
				World.setBlock(coords.x+1, coords.y-3, coords.z, BlockID.DarkStone, 0);
				World.setBlock(coords.x-1, coords.y-3, coords.z, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x+1, coords.y-3, coords.z-1, BlockID.DarkStone, 0);
				World.setBlock(coords.x+1, coords.y-3, coords.z+1, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x-1, coords.y-3, coords.z+1, BlockID.DarkStone, 0);
				World.setBlock(coords.x-1, coords.y-3, coords.z-1, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x, coords.y-3, coords.z+1, BlockID.DarkStone, 0);
				World.setBlock(coords.x, coords.y-3, coords.z-1, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x, coords.y-3, coords.z+2, BlockID.DarkStone, 0);
				World.setBlock(coords.x, coords.y-3, coords.z-2, BlockID.DarkStone, 0);
				
				World.setBlock(coords.x+2, coords.y-3, coords.z, BlockID.DarkStone, 0);
				World.setBlock(coords.x-2, coords.y-3, coords.z, BlockID.DarkStone, 0);
			}
		}
	}
});




