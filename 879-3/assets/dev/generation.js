Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
if (Math.random()*12 <= 1){
    for(var i = 0; i < 3; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 15);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.diamondorecompact, 0, 3, false);

} 
} 
});
let biomes = [3, 36, 38, 39,131, 158, 162];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){if (Math.random()*25 <= 1){ 
for(var i = 0; i < 2; i++){ 
 
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 9, 32); 
if(biomes.indexOf(World.getBiome(coords.x, coords.z)) != -1){
    GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.emeraldorecompact, 0, 1, false);
}
} 
} 
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
if (Math.random()*6 <= 2){
    for(var i = 0; i < 6; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 115);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.coalorecompact, 0, 13, false);

} 
} 
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
if (Math.random()*8 <= 2){
    for(var i = 0; i < 5; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 60);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ironorecompact, 0, 8, false);

} 
} 
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
if (Math.random()*10 <= 1){
    for(var i = 0; i < 2; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 33);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.goldorecompact, 0, 8, false);

} 
} 
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
if (Math.random()*6 <= 2){
    for(var i = 0; i < 2; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 16);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.redstoneorecompact, 0, 4, false);

} 
} 
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
if (Math.random()*6 <= 1){
    for(var i = 0; i < 3; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 30);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.lapisorecompact, 0, 3, false);

} 
} 
});
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ, random){
if (Math.random()*4<= 3){
    for(var i = 0; i < 5; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 150);
        if(World.getBlockID(coords.x, coords.y, coords.z) == 87)
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.quartzorecompact, 0, 7, false);

} 
} 
});