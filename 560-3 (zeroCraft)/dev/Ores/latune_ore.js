Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ)
{ 
 var coordsl = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 26); 
 for (var v = 0; v < 15;v++)
{ 
 if (Math.random() < 7/10)
 GenerationUtils.genMinable(coordsl.x, coordsl.y, coordsl.z, 
{ 
id: BlockID.Latuneore, 
data: 0, 
size: 5, 
ratio: .3, 
checkerTile: 1, 
checkerMode: false 
}); 
} 
});
