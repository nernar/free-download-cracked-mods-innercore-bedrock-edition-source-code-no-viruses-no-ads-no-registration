//generation
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){ 
NetherGen.generateOre(BlockID.AmethystOre, 0, chunkX, chunkZ, { 
veinCounts: 5, 
veinChance: 60, 
minY: 20, 
maxY: 75,  
size: randomInt(3, 6),  
ratio: .5, 
checkerTile: 87, 
checkerMode: false
}); 
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){ 
NetherGen.generateOre(BlockID.NethRimeOre, 0, chunkX, chunkZ, { 
veinCounts: 3, 
veinChance: 55, 
minY: 55, 
maxY: 115,  
size: randomInt(3, 5),  
ratio: .5, 
checkerTile: 87, 
checkerMode: false
}); 
});
//SAfICPE²
//normal
Callback.addCallback("GenerateChunkUndeground", function(chunkX, chunkZ){ 
NetherGen.generateOre(BlockID.oreSilver, 0, chunkX, chunkZ, { 
veinCounts: 4, 
veinChance: 55, 
minY: 2, 
maxY: 42,  
size: randomInt(2, 5),  
ratio: .5, 
checkerTile: 1, 
checkerMode: false
}); 
});
//nether
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){ 
NetherGen.generateOre(BlockID.oreSilvern, 0, chunkX, chunkZ, { 
veinCounts: 5, 
veinChance: 58, 
minY: 2, 
maxY: 70,  
size: randomInt(3, 5),  
ratio: .5, 
checkerTile: 90, 
checkerMode: false
}); 
});
//end
Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ){ 
NetherGen.generateOre(BlockID.oreSilvere, 0, chunkX, chunkZ, { 
veinCounts: 4, 
veinChance: 80, 
minY: 25, 
maxY: 95, 
size: randomInt(3, 5),  
ratio: .5, 
checkerTile: 121, 
checkerMode: false
}); 
});
//other things
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
if(Math.random() < .45){
  for(var i = 3; i < 7; i++){ 
    var coords = GenerationUtils.randomCoords(chunkX,chunkZ,30,130); 
         if(World.getBlockID(coords.x,coords.y,coords.z)== 87 && World.getBlockID(coords.x,coords.y+1,coords.z)== 0){
              World.setBlock(coords.x,coords.y + 1, coords.z,BlockID.redmoShroomSmall,0); 
                }
           }   
     }
});   
  
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){ 
if(Math.random() < .45){         
  for(var i = 1; i < 5; i++){ 
    var coords = GenerationUtils.randomCoords(chunkX,chunkZ,30,130);  
         if(World.getBlockID(coords.x,coords.y,coords.z)== 87 && World.getBlockID(coords.x,coords.y+1,coords.z)== 0){
               World.setBlock(coords.x,coords.y + 1,coords.z,BlockID.bmoShroomSmall,0); 
                }
           }  
     } 
});     

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){      
if(Math.random() < .45){             
   for(var i = 5; i < 9; i++){ 
     var coords = GenerationUtils.randomCoords(chunkX,chunkZ,18,130);  
          if(World.getBlockID(coords.x,coords.y,coords.z)== 88 && World.getBlockID(coords.x,coords.y + 1,coords.z)== 0){
                World.setBlock(coords.x,coords.y,coords.z,BlockID.ThornstalkBB,0);
                 World.setBlock(coords.x,coords.y + 1,coords.z,BlockID.ThornstalkMB,0);
                  World.setBlock(coords.x,coords.y,coords.z + 2,BlockID.ThornstalkTB,0);
                 } 
           }  
     } 
});     

var UniqueGen={ 
generateOre: function(id, data, chunkX, chunkZ, params){  
for (var i = 0; i < params.veinCounts; i++){ 
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, params.min_y, params.max_y); 
if(Math.random() < params.veinChance)GenerationUtils.genMinable(coords.x, coords.y, coords.z, { 
id: id, 
data: data, 
size: params.size, 
ratio: params.ratio, 
checkerTile: params.checkerTile, 
checkerMode: params.checkerMode 
      }); 
   }  
}
}

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){ 

UniqueGen.generateOre(BlockID.BasaltBlock, 0, chunkX, chunkZ, { 
veinCounts: 12, 
veinChance: 48, 
minY: 4, 
maxY: 45,  
size: randomInt(3, 9),  
ratio: .5, 
checkerTile: 87, 
checkerMode: false
}); 
});