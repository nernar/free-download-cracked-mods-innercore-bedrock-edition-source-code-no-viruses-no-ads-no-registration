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
	if(Math.random() < MAGIC_TREE_BIOME[World.getBiome((chunkX + 0.4) * 15, (chunkZ + 0.4) * 15)]){
		for(var i = 0; i < 1 + Math.random() * 5; i++){
			var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 63, 127);
			coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
			if(World.getBlockID(coords.x, coords.y, coords.z) == 2){
				 LightTreeGenerationHelper.generateTree(coords.x, coords.y, coords.z, false);
				 
				 World.setBlock(coords.x+1, coords.y, coords.z, BlockID.LightDarkDirt, 0);
				World.setBlock(coords.x-1, coords.y, coords.z, BlockID.LightDarkDirt, 0);
				
				World.setBlock(coords.x+1, coords.y, coords.z-1, BlockID.LightDarkDirt, 0);
				World.setBlock(coords.x+1, coords.y, coords.z+1, BlockID.LightDarkDirt, 0);
				
				World.setBlock(coords.x-1, coords.y, coords.z+1, BlockID.LightDarkDirt, 0);
				World.setBlock(coords.x-1, coords.y, coords.z-1, BlockID.LightDarkDirt, 0);
				
				World.setBlock(coords.x, coords.y, coords.z+1, BlockID.LightDarkDirt, 0);
				World.setBlock(coords.x, coords.y, coords.z-1, BlockID.LightDarkDirt, 0);
				
				World.setBlock(coords.x, coords.y, coords.z+2, BlockID.LightDarkDirt, 0);
				World.setBlock(coords.x, coords.y, coords.z-2, BlockID.LightDarkDirt, 0);
				
				World.setBlock(coords.x+2, coords.y, coords.z, BlockID.LightDarkDirt, 0);
				World.setBlock(coords.x-2, coords.y, coords.z, BlockID.LightDarkDirt, 0);
				
				//Stone
				
				World.setBlock(coords.x+1, coords.y-1, coords.z, BlockID.LightDarkStone, 0);
				World.setBlock(coords.x-1, coords.y-1, coords.z, BlockID.LightDarkStone, 0);
				
				World.setBlock(coords.x+1, coords.y-1, coords.z-1, BlockID.LightDarkStone, 0);
				World.setBlock(coords.x+1, coords.y-1, coords.z+1, BlockID.LightDarkStone, 0);
				
				World.setBlock(coords.x-1, coords.y-1, coords.z+1, BlockID.LightDarkStone, 0);
				World.setBlock(coords.x-1, coords.y-1, coords.z-1, BlockID.LightDarkStone, 0);
				
				World.setBlock(coords.x, coords.y-1, coords.z+1, BlockID.LightDarkStone, 0);
				World.setBlock(coords.x, coords.y-1, coords.z-1, BlockID.LightDarkStone, 0);
				
				World.setBlock(coords.x, coords.y-1, coords.z+2, BlockID.LightDarkStone, 0);
				World.setBlock(coords.x, coords.y-1, coords.z-2, BlockID.LightDarkStone, 0);
				
				World.setBlock(coords.x+2, coords.y, coords.z, BlockID.LightDarkStone, 0);
				World.setBlock(coords.x-2, coords.y-1, coords.z, BlockID.LightDarkStone, 0);
				
					World.setBlock(coords.x+1, coords.y-2, coords.z, BlockID.LightDarkStone, 0);
				World.setBlock(coords.x-1, coords.y-2, coords.z, BlockID.LightDarkStone, 0);
				
				World.setBlock(coords.x+1, coords.y-2, coords.z-1, BlockID.LightDarkStone, 0);
				World.setBlock(coords.x+1, coords.y-2, coords.z+1, BlockID.LightDarkStone, 0);
				
				World.setBlock(coords.x-1, coords.y-2, coords.z+1, BlockID.LightDarkStone, 0);
				World.setBlock(coords.x-1, coords.y-2, coords.z-1, BlockID.LightDarkStone, 0);
				
				World.setBlock(coords.x, coords.y-2, coords.z+1, BlockID.LightDarkStone, 0);
				World.setBlock(coords.x, coords.y-2, coords.z-1, BlockID.LightDarkStone, 0);
				
				World.setBlock(coords.x, coords.y-2, coords.z+2, BlockID.LightDarkStone, 0);
				World.setBlock(coords.x, coords.y-2, coords.z-2, BlockID.LightDarkStone, 0);
				
				World.setBlock(coords.x+2, coords.y-2, coords.z, BlockID.LightDarkStone, 0);
				World.setBlock(coords.x-2, coords.y-2, coords.z, BlockID.LightDarkStone, 0);
				
				
				World.setBlock(coords.x+1, coords.y-3, coords.z, BlockID.LightDarkStone, 0);
				World.setBlock(coords.x-1, coords.y-3, coords.z, BlockID.LightDarkStone, 0);
				
				World.setBlock(coords.x+1, coords.y-3, coords.z-1, BlockID.LightDarkStone, 0);
				World.setBlock(coords.x+1, coords.y-3, coords.z+1, BlockID.LightDarkStone, 0);
				
				World.setBlock(coords.x-1, coords.y-3, coords.z+1, BlockID.LightDarkStone, 0);
				World.setBlock(coords.x-1, coords.y-3, coords.z-1, BlockID.LightDarkStone, 0);
				
				World.setBlock(coords.x, coords.y-3, coords.z+1, BlockID.LightDarkStone, 0);
				World.setBlock(coords.x, coords.y-3, coords.z-1, BlockID.LightDarkStone, 0);
				
				World.setBlock(coords.x, coords.y-3, coords.z+2, BlockID.LightDarkStone, 0);
				World.setBlock(coords.x, coords.y-3, coords.z-2, BlockID.LightDarkStone, 0);

				World.setBlock(coords.x+2, coords.y-3, coords.z, BlockID.LightDarkStone, 0);
				World.setBlock(coords.x-2, coords.y-3, coords.z, BlockID.LightDarkStone, 0);
			}
		}
	}
});




