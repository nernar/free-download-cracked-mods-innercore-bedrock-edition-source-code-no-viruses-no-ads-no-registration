//spawn firefly 

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId <= twilightforest1.id){
        if(Math.random()<=0.3){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
           let bs = BlockSource.getDefaultForDimension(dimensionId);
bs = BlockSource.getCurrentWorldGenRegion();
bs.spawnEntity(coords.x, coords.y+3, coords.z, "hexxit:firefly");
} 
} 
});
//bò
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId <= twilightforest1.id){
        if(Math.random()<=0.06){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
           let bs = BlockSource.getDefaultForDimension(dimensionId);
bs = BlockSource.getCurrentWorldGenRegion();
bs.spawnEntity(coords.x, coords.y+1, coords.z, "hexxit:minotaur");
} 
} 
});
//golem
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId <= twilightforest1.id){
        if(Math.random()<=0.06){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
           let bs = BlockSource.getDefaultForDimension(dimensionId);
bs = BlockSource.getCurrentWorldGenRegion();
bs.spawnEntity(coords.x, coords.y+1, coords.z, "hexxit:tower_golem");
} 
} 
});