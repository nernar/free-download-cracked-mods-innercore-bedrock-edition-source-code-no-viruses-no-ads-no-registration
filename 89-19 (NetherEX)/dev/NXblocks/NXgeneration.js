//generation
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){ 
UniqueGen.generateOre(BlockID.AmethystOre, 0, chunkX, chunkZ, { 
veinCounts: 5, 
veinChance: 60, 
minY: 13, 
maxY: 89,  
size: randomInt(3, 6),  
ratio: .5, 
checkerTile: 87, 
checkerMode: false
}); 
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){ 
UniqueGen.generateOre(BlockID.NethRimeOre, 0, chunkX, chunkZ, { 
veinCounts: 3, 
veinChance: 55, 
minY: 41, 
maxY: 98,  
size: randomInt(3, 5),  
ratio: .5, 
checkerTile: 87, 
checkerMode: false
}); 
});
//SAfICPE²
//normal
Callback.addCallback("GenerateChunkUndeground", function(chunkX, chunkZ){ 
UniqueGen.generateOre(BlockID.oreSilver, 0, chunkX, chunkZ, { 
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
//nether
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){ 
UniqueGen.generateOre(BlockID.oreSilvern, 0, chunkX, chunkZ, { 
veinCounts: 5, 
veinChance: 58, 
minY: 14, 
maxY: 73,  
size: randomInt(3, 5),  
ratio: .5, 
checkerTile: 90, 
checkerMode: false
}); 
});
//end
Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ){ 
UniqueGen.generateOre(BlockID.oreSilvere, 0, chunkX, chunkZ, { 
veinCounts: 4, 
veinChance: 80, 
minY: 10, 
maxY: 54, 
size: randomInt(3, 5),  
ratio: .5, 
checkerTile: 121, 
checkerMode: false
}); 
});
//other things
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
  for(var i = 0; i < 11; i++){ 
    var coords = GenerationUtils.randomCoords(chunkX,chunkZ,30,245); 
         if(World.getBlockID(coords.x,coords.y,coords.z)== 87 && World.getBlockID(coords.x,coords.y+1,coords.z)== 0){
              World.setBlock(coords.x,coords.y + 1, coords.z,BlockID.redmoShroomSmall,0); 
           }   
     }
});   
  
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){          
  for(var i = 0; i < 9; i++){ 
    var coords = GenerationUtils.randomCoords(chunkX,chunkZ,30,245);  
         if(World.getBlockID(coords.x,coords.y,coords.z)== 87 && World.getBlockID(coords.x,coords.y+1,coords.z)== 0){
               World.setBlock(coords.x,coords.y + 1,coords.z,BlockID.bmoShroomSmall,0); 
           }  
     } 
});     

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){          
   for(var i = 0; i < 14; i++){ 
     var coords = GenerationUtils.randomCoords(chunkX,chunkZ,23,240);  
          if(World.getBlockID(coords.x,coords.y,coords.z)== 88 && World.getBlockID(coords.x,coords.y + 1,coords.z)== 0){
                World.setBlock(coords.x,coords.y,coords.z,BlockID.ThornstalkBB,0);
                 World.setBlock(coords.x,coords.y + 1,coords.z,BlockID.ThornstalkMB,0);
                  World.setBlock(coords.x,coords.y,coords.z + 2,BlockID.ThornstalkTB,0);
           }  
     } 
});     


Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){ 
UniqueGen.generateOre(BlockID.BasaltBlock, 0, chunkX, chunkZ, { 
veinCounts: 12, 
veinChance: 48, 
minY: 10, 
maxY: 50,  
size: randomInt(3, 9),  
ratio: .5, 
checkerTile: 87, 
checkerMode: false
}); 
});