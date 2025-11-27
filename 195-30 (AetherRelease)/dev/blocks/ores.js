var BLOCK_TYPE_STONE = Block.createSpecialType({
    solid: true,
    renderlayer: 3,
    destroytime: 0.9,
    explosionres: 20,
    translucency: 0
});

IDRegistry.genBlockID("oreAmbrosium"); 
Block.createBlock("oreAmbrosium", [
    {name: "Ambrosium Ore", texture:[["ambrosium_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreAmbrosium, 1);
Block.registerDropFunction("oreAmbrosium", function(coords, blockID, blockData, level, enchant){ 
    return [[ItemID.Ambrosium, randomInt(1,3), 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
UniqueGen.generateOreInDimension(BlockID.oreAmbrosium, 0, chunkX, chunkZ, random, { 
 veinCounts: 34,
 minY: 26,
 maxY: 128,
 size: randomInt(5, 12),
 mode: true,
 check: [BlockID.Holystone]
}); 
});

IDRegistry.genBlockID("oreIcestone"); 
Block.createBlock("oreIcestone", [
    {name: "icestone Ore", texture:[["icestone_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreIcestone, 2); 
Block.registerDropFunction("oreIcestone", function(coords, blockID, blockData, level, enchant){
    return [[ItemID.icestone, randomInt(1,2), 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
UniqueGen.generateOreInDimension(BlockID.oreIcestone, 0, chunkX, chunkZ, random, { 
 veinCounts: 34, 
 minY: 26,
 maxY: 128,
 size: randomInt(3, 5),
 mode: true,
 check: [BlockID.Holystone]
}); 
});

IDRegistry.genBlockID("oreZanite"); 
Block.createBlock("oreZanite", [
    {name: "Zanite Ore", texture:[["zanite_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreZanite, 2);  
Block.registerDropFunction("oreZanite", function(coords, blockID, blockData, level, enchant){
    return [[ItemID.zaniteGemstone, 1, 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
UniqueGen.generateOreInDimension(BlockID.oreZanite, 0, chunkX, chunkZ, random, {  
 veinCounts: 30, 
 minY: 26,
 maxY: 128,
 size: randomInt(2, 6),
 mode: true,
 check: [BlockID.Holystone]
}); 
});

IDRegistry.genBlockID("oreArkenium"); 
Block.createBlock("oreArkenium", [
    {name: "Arkenium Ore", texture: [["arkenium_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreArkenium, 3);   
Block.registerDropFunction("oreArkenium", function(coords, blockID, blockData, level, enchant){
    return [[BlockID.oreArkenium, 1, 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
UniqueGen.generateOreInDimension(BlockID.oreArkenium, 0, chunkX, chunkZ, random, { 
 veinCounts: 26, 
 minY: 26,
 maxY: 128,
 size: randomInt(2, 5),
 mode: true,
 check: [BlockID.Holystone]
}); 
});

IDRegistry.genBlockID("oreGravitite"); 
Block.createBlock("oreGravitite", [
    {name: "Gravitite Ore", texture: 
    [["gravitite_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreGravitite, 3);    
Block.registerDropFunction("oreGravitite", function(coords, blockID, blockData, level, enchant){
    return [[BlockID.oreGravitite, 1, 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
UniqueGen.generateOreInDimension(BlockID.oreGravitite, 0, chunkX, chunkZ, random, { 
 veinCounts: 18, 
 minY: 26,
 maxY: 128,
 size: randomInt(1, 5),
 mode: true,
 check: [BlockID.Holystone]
}); 
});

IDRegistry.genBlockID("oreContinuum"); 
Block.createBlock("oreContinuum", [
    {name: "Continuum Ore", texture:[["continuum_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreGravitite, 1);     
Block.registerDropFunction("oreContinuum", function(coords, blockID, blockData, level, enchant){
    return [[ItemID.continuumOrb, randomInt(1,3), 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
UniqueGen.generateOreInDimension(BlockID.oreContinuum, 0, chunkX, chunkZ, random, { 
 veinCounts: 20, 
 minY: 26,
 maxY: 128,
 size: randomInt(1, 3),
 mode: true,
 check: [BlockID.Holystone]
}); 
});