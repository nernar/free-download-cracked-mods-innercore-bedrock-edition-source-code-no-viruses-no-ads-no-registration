ZC.addOre("ruby");
ZC.addOre("sapphire");
ZC.addOre("jade");
ZC.addOre("onyx");
ZC.addOre("nacre");
ZC.addOre("amethyst");
ZC.addMater(BlockID.rubyOre);
ZC.addMater(BlockID.sapphireOre);
ZC.addMater(BlockID.jadeOre);
ZC.addMater(BlockID.onyxOre);
ZC.addMater(BlockID.nacreOre);
ZC.addMater(BlockID.amethystOre);
Block.registerDropFunction("rubyOre", 
function(coords, blockID, blockData, level)
   {
	if(level > 3){
		return [[ItemID.ruby, 1, 0]]
	}
	return [];
}, 2);
Block.registerDropFunction("sapphireOre", 
function(coords, blockID, blockData, level)
   {
	if(level > 3){
		return [[ItemID.sapphire, 1, 0]]
	}
	return [];
}, 2);
Block.registerDropFunction("jadeOre", 
function(coords, blockID, blockData, level)
   {
	if(level > 3){
		return [[ItemID.jade, 1, 0]]
	}
	return [];
}, 2);
Block.registerDropFunction("onyxOre", 
function(coords, blockID, blockData, level)
   {
	if(level > 3){
		return [[ItemID.onyx, 1, 0]]
	}
	return [];
}, 2);
Block.registerDropFunction("nacreOre", 
function(coords, blockID, blockData, level)
   {
	if(level > 3){
		return [[ItemID.nacre, 1, 0]]
	}
	return [];
}, 2);
Block.registerDropFunction("amethystOre", 
function(coords, blockID, blockData, level)
   {
	if(level > 3){
		return [[ItemID.amethyst, 1, 0]]
	}
	return [];
}, 2);


    
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
GenerationUtils.lockInBlock(BlockID.rubyOre, 0, 1, false);
	 for(var i = 0; i < 7; i++){
	 var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 7, 15);
	 ZC.genOreTiny(coords.x, coords.y, coords.z, 3);
	}
});

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
GenerationUtils.lockInBlock(BlockID.sapphireOre, 0, 1, false);
	 for(var i = 0; i < 7; i++){
	 var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 7, 15);
	  ZC.genOreTiny(coords.x, coords.y, coords.z, 3);
	}
});

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
GenerationUtils.lockInBlock(BlockID.jadeOre, 0, 1, false);
	 for(var i = 0; i < 7; i++){
	 var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 7, 15);
	  ZC.genOreTiny(coords.x, coords.y, coords.z, 3);
	}
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
GenerationUtils.lockInBlock(BlockID.onyxOre, 0, 1, false);
	 for(var i = 0; i < 7; i++){
	 var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 7, 15);
	  ZC.genOreTiny(coords.x, coords.y, coords.z, 3);
	}
});

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
GenerationUtils.lockInBlock(BlockID.nacreOre, 0, 1, false);
	 for(var i = 0; i < 7; i++){
	 var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 7, 15);
	 ZC.genOreTiny(coords.x, coords.y, coords.z, 3);
	}
});

Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ){
GenerationUtils.lockInBlock(BlockID.amethystOre, 0, 1, false);
	 for(var i = 0; i < 7; i++){
	 var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 7, 15);
	 ZC.genOreTiny(coords.x, coords.y, coords.z, 3);
	}
});


ZC.addBlock("ruby");
ZC.addBlock("sapphire");
ZC.addBlock("jade");
ZC.addBlock("onyx");
ZC.addBlock("nacre");
ZC.addBlock("amethyst");