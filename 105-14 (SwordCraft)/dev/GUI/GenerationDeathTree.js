//массив
var DeathTree = [1,2,35,37,4,18,27,28,13,243];
//генерация
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() <0.05){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in DeathTree){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 1)){
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.DWwood, 0);
			World.setBlock(coords.x, coords.y+2, coords.z, BlockID.DWwood, 0);
			World.setBlock(coords.x, coords.y+3, coords.z, BlockID.DWwood, 0);
			World.setBlock(coords.x, coords.y+4, coords.z, BlockID.DWwood, 0);
			World.setBlock(coords.x, coords.y+5, coords.z, BlockID.DWwood, 0);
			World.setBlock(coords.x, coords.y+4, coords.z+1, BlockID.DWwood, 0);
			World.setBlock(coords.x, coords.y+4, coords.z-1, BlockID.DWwood, 0);
			World.setBlock(coords.x+1, coords.y+4, coords.z, BlockID.DWwood, 0);
			World.setBlock(coords.x-1, coords.y+4, coords.z, BlockID.DWwood, 0);
			World.setBlock(coords.x, coords.y+3, coords.z+1, BlockID.DWwood, 0);
			World.setBlock(coords.x, coords.y+3, coords.z-1, BlockID.DWwood, 0);
			World.setBlock(coords.x+1, coords.y+3, coords.z, BlockID.DWwood, 0);
			World.setBlock(coords.x-1, coords.y+3, coords.z, BlockID.DWwood, 0);
}
}
			}
		});