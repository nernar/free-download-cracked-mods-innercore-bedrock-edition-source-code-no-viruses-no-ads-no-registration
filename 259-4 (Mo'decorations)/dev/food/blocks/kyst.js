IDRegistry.genBlockID("kyst");
Block.createBlock("kyst", [
 {name: "куст вишни", texture: [["kyst", 0], ["kyst", 0], ["kyst", 0], ["kyst", 0], ["kyst", 0], ["kyst", 0]], inCreative: true}
])

Block.registerDropFunction("kyst", function(coords, id, data, diggingLevel, toolLevel){      return [[ItemID.yag, 5, data]]; });

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
 var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
 coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
 if(Math.random()<.10){
   for(var idd in Biomes ){
   var id = Biomes[idd];
   if((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)==id)){
    World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kyst, 0);
    if (Math.random() < .0005){
    }  
     }
      }
       }
});

var Biomes = [1,4, 18, 27, 28,13];


IDRegistry.genBlockID("kyst1");
Block.createBlock("kyst1", [
 {name: "куст смородины", texture: [["kyst", 1], ["kyst", 1], ["kyst", 1], ["kyst", 1], ["kyst", 1], ["kyst", 1]], inCreative: true}
])

Block.registerDropFunction("kyst1", function(coords, id, data, diggingLevel, toolLevel){      return [[ItemID.yag1, 5, data]]; });

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
 var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
 coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
 if(Math.random()<.10){
   for(var idd in Biomes ){
   var id = Biomes[idd];
   if((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)==id)){
    World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kyst1, 0);
    if (Math.random() < .0005){
    }  
     }
      }
       }
});

var Biomes = [1,4, 18, 27, 28,13];



IDRegistry.genBlockID("kyst2");
Block.createBlock("kyst2", [
 {name: "куст черники", texture: [["kyst", 2], ["kyst", 2], ["kyst", 2], ["kyst", 2], ["kyst", 2], ["kyst", 2]], inCreative: true}
])

Block.registerDropFunction("kyst2", function(coords, id, data, diggingLevel, toolLevel){      return [[ItemID.yag2, 5, data]]; });

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
 var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
 coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
 if(Math.random()<.10){
   for(var idd in Biomes ){
   var id = Biomes[idd];
   if((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)==id)){
    World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kyst2, 0);
    if (Math.random() < .0005){
    }  
     }
      }
       }
});

var Biomes = [1,4, 18, 27, 28,13];

IDRegistry.genBlockID("kyst3");
Block.createBlock("kyst3", [
 {name: "лимонный куст", texture: [["kyst", 3], ["kyst", 3], ["kyst", 3], ["kyst", 3], ["kyst", 3], ["kyst", 3]], inCreative: true}
])

Block.registerDropFunction("kyst3", function(coords, id, data, diggingLevel, toolLevel){      return [[ItemID.limon, 2, data]]; });

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
 var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
 coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
 if(Math.random()<.5){
   for(var idd in Biomes ){
   var id = Biomes[idd];
   if((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)==id)){
    World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kyst3, 0);
    if (Math.random() < .0005){
    }  
     }
      }
       }
});

var Biomes = [1,4, 18, 27, 28,13];