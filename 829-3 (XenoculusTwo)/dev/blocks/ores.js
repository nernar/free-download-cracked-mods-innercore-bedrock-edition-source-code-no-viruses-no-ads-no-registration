IDRegistry.genBlockID("oreIronFrone"); 
Block.createBlock("oreIronFrone", [
    {name: "Iron Frone Ore", texture:[["ironfroneore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreIronFrone, 2);
Block.registerDropFunction("oreIronFrone", function(coords, blockID, blockData, level, enchant){ 
    return [[265, randomInt(1,3), 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
UniqueGen.generateOreInDimension(BlockID.oreIronFrone, 0, chunkX, chunkZ, random, { 
 veinCounts: 26,
 minY: 32,
 maxY: 230,
 size: randomInt(2, 7),
 mode: true,
 check: [BlockID.Frone]
}); 
});


IDRegistry.genBlockID("oreRedstoneFrone"); 
Block.createBlock("oreRedstoneFrone", [
    {name: "Redstone Frone Ore", texture:[["redstonefroneore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreRedstoneFrone, 2);
Block.registerDropFunction("oreRedstoneFrone", function(coords, blockID, blockData, level, enchant){ 
    return [[331, randomInt(2,6), 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
UniqueGen.generateOreInDimension(BlockID.oreRedstoneFrone, 0, chunkX, chunkZ, random, { 
 veinCounts: 20,
 minY: 32,
 maxY: 230,
 size: randomInt(2, 7),
 mode: true,
 check: [BlockID.Frone]
}); 
});


IDRegistry.genBlockID("oreDiamondFrone"); 
Block.createBlock("oreDiamondFrone", [
    {name: "Diamond Frone Ore", texture:[["diamondfroneore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreDiamondFrone, 2);
Block.registerDropFunction("oreDiamondFrone", function(coords, blockID, blockData, level, enchant){ 
    return [[264, randomInt(1,2), 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
UniqueGen.generateOreInDimension(BlockID.oreDiamondFrone, 0, chunkX, chunkZ, random, { 
 veinCounts: 17,
 minY: 32,
 maxY: 230,
 size: randomInt(2, 7),
 mode: true,
 check: [BlockID.Frone]
}); 
});


IDRegistry.genBlockID("oreNorthositFrone"); 
Block.createBlock("oreNorthositFrone", [
    {name: "Northosit Frone Ore", texture:[["northositorefrone", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreNorthositFrone, 2);
Block.registerDropFunction("oreNorthositFrone", function(coords, blockID, blockData, level, enchant){ 
    return [[ItemID.northositLp, randomInt(1,3), 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
UniqueGen.generateOreInDimension(BlockID.oreNorthositFrone, 0, chunkX, chunkZ, random, { 
 veinCounts: 21,
 minY: 32,
 maxY: 230,
 size: randomInt(2, 7),
 mode: true,
 check: [BlockID.Frone]
}); 
});

//UNUSED
IDRegistry.genBlockID("oreFluroomiteAutumn"); 
Block.createBlock("oreFluroomiteAutumn", [
    {name: "Fluroomite Autumn Ore", texture:[["fluroomiteorenew", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreFluroomiteAutumn, 2);

/*Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
UniqueGen.generateOreInDimension(BlockID.oreFluroomiteAutumn, 0, chunkX, chunkZ, random, { 
 veinCounts: 21,
 minY: 32,
 maxY: 230,
 size: randomInt(2, 7),
 mode: true,
 check: [BlockID.Frone]
}); 
});*/