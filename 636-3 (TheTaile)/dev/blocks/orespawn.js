//generation
//normal
Callback.addCallback("GenerateChunkUndeground", function(chunkX, chunkZ){ 
UniqueGen.generateOre(BlockID.orelol, 0, chunkX, chunkZ, { 
veinCounts: 4, 
veinChance: 55, 
minY: 10, 
maxY: 54,  
size: randomInt(2, 5),  
ratio: .5, 
checkerTile: 1, 
checkerMode: false
}); 
});
Callback.addCallback("GenerateChunkUndeground", function(chunkX, chunkZ){ 
UniqueGen.generateOre(BlockID.golem_ore, 0, chunkX, chunkZ, { 
veinCounts: 4, 
veinChance: 55, 
minY: 10, 
maxY: 54,  
size: randomInt(2, 5),  
ratio: .5, 
checkerTile: 1, 
checkerMode: false
}); 
});
Callback.addCallback("GenerateChunkUndeground", function(chunkX, chunkZ){ 
UniqueGen.generateOre(BlockID.oreare, 0, chunkX, chunkZ, { 
veinCounts: 4, 
veinChance: 55, 
minY: 10, 
maxY: 54,  
size: randomInt(2, 5),  
ratio: .5, 
checkerTile: 1, 
checkerMode: false
}); 
});