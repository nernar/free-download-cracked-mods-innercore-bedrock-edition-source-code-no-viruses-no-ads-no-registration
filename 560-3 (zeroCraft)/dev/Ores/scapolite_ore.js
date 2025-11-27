Block.registerDropFunction("Scapoliteore", function(coords, blockID, blockData, level, enchant){ 	
 if(level > 2){ 		
  if(enchant.silk){ 			
   return [[blockID, 1, 0]]; 		} 		ToolAPI.dropOreExp(coords, 1, 3, enchant.experience); 		
  return [[ItemID.Scapolitedust, ((Math.random() * 3) +1), 0]] 	
} 	
return []; 
}, 3);

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ)
{ 
 var coordsd = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 16); 
 for (var q = 0; q < 15;q++)
{ 
 if (Math.random() < 7/10)
 GenerationUtils.genMinable(coordsd.x, coordsd.y, coordsd.z, 
{ 
id: BlockID.Scapoliteore, 
data: 0, 
size: 5, 
ratio: .3, 
checkerTile: 1, 
checkerMode: false 
}); 
} 
});
