Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, dimensionId){
//чем больше число тем реже спавнится, к примеру 
if (random.nextInt(5)<= 1){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 35, 50);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z,8582, 1, 5, true);
}
});