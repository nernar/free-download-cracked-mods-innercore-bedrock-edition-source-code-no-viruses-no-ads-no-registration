Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, dimensionId){
UniqueGen.generateOre(BlockID.ore_copper_sc, 0, chunkX, chunkZ, random, 
{
veinCounts:4,
minY:2,
maxY:60,
size:randomInt(3,7,5,8)
});
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, dimensionId){
UniqueGen.generateOre(BlockID.ore_tin_sc, 0, chunkX, chunkZ, random, 
{
veinCounts:4,
minY:2,
maxY:60,
size:randomInt(3,7,5,8)
});
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, dimensionId){
UniqueGen.generateOre(BlockID.ore_aluminum_sc, 0, chunkX, chunkZ, random, 
{
veinCounts:4,
minY:2,
maxY:60,
size:randomInt(3,7,5,8)
});
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, dimensionId){
UniqueGen.generateOre(BlockID.spacescraft_oil_still, 0, chunkX, chunkZ, random, 
{
veinCounts:1,
minY:2,
maxY:20,
size:randomInt(5,7,6,8,9,10)
});
});

