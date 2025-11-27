



Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
if (Math.random()*5 <= 3){
    for(var i = 0; i < 2; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 20);
        GenerationUtils.generateOre(coords.x, coords.y+25, coords.z, 16, 0, 10, true);

} 
} 
}
});



Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
if (Math.random()*5 <= 2){
    for(var i = 0; i < 2; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 20);
        GenerationUtils.generateOre(coords.x, coords.y+21, coords.z, 15, 0, 10, true);

} 
} 
}
});



Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
if (Math.random()*5 <= 2){
    for(var i = 0; i < 2; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 20);
        GenerationUtils.generateOre(coords.x, coords.y+23, coords.z, 14, 0, 10, true);

} 
} 
}
});


Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
if (Math.random()*5 <= 1){
    for(var i = 0; i < 2; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 20);
        GenerationUtils.generateOre(coords.x, coords.y+11, coords.z, 56, 0, 10, true);

} 
} 
}
});
