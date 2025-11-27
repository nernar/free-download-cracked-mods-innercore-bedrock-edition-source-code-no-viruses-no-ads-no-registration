//generation
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 40; i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 150);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.AmethystOre, 0, randomInt(1, 6));
}});
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 38; i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 150);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.NethRimeOre, 0, randomInt(1, 6));
}});
//SAfICPE²
//normal
Callback.addCallback("GenerateChunkUndeground", function(chunkX, chunkZ){
for(var i = 0; i < 26; i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 6, 82);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreSilver, 0, randomInt(1, 6));
}});
//nether
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 36; i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 122);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreSilvern, 0, randomInt(1, 6));
}});
//end
Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ){
for(var i = 0; i < 32; i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 90);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreSilvere, 0, randomInt(1, 6));
}});
//other things
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
   for(var i = 0; i < 23; i++){ 
              var coords=GenerationUtils.randomCoords(chunkX,chunkZ,3,123); 
               for(var k=2;k<130;k++){ 
                                           if(World.getBlockID(coords.x,k,coords.z)==88){return                World.setBlock(coords.x,k+1,coords.z,BlockID.redmoShroomSmall,0); 
           } 
        } 
     }
});   
  
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){          
            for(var i = 1; i < 21; i++){ 
              var coords=GenerationUtils.randomCoords(chunkX,chunkZ,5,123); 
               for(var k=2;k<130;k++){ 
                                             if(World.getBlockID(coords.x,k,coords.z)==88){return              World.setBlock(coords.x,k+1,coords.z,BlockID.bmoShroomSmall,0); 
           }
        } 
     } 
});     

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){          
            for(var i = 0; i < 23; i++){ 
              var coords=GenerationUtils.randomCoords(chunkX,chunkZ,23,168); 
               for(var k=2;k<130;k++){ 
                                             if(World.getBlockID(coords.x,k+1,coords.z)!=0){return              World.setBlock(coords.x,k+1,coords.z,BlockID.ThornstalkTB,0); 
           }
        } 
     } 
});     

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){          
            for(var i = 0; i < 21; i++){ 
              var coords=GenerationUtils.randomCoords(chunkX,chunkZ,23,168); 
               for(var k=2;k<130;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==88){                            
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return              structureGenerationHelper.setGrass({x: coords.x, y: k+1, z: coords.z, setInRadiuse:false, radiuse:3});
 
           }
        } 
     } 
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){          
            for(var i = 0; i < 18; i++){ 
              var coords=GenerationUtils.randomCoords(chunkX,chunkZ,20,172); 
               for(var k=2;k<130;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==88){                            
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return              structureGenerationHelper.generateBrownMoshroom({x: coords.x, y: k+1, z: coords.z});
 
           }
        } 
     } 
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){          
            for(var i = 0; i < 15; i++){ 
              var coords=GenerationUtils.randomCoords(chunkX,chunkZ,20,172); 
               for(var k=2;k<130;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==88){                            
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return              structureGenerationHelper.generateRedMoshroom({x: coords.x, y: k+1, z: coords.z});
 
           }
        } 
     } 
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 23; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 2, 182);
     GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.BasaltBlock, 0, randomInt(3, 9));
          } 
});