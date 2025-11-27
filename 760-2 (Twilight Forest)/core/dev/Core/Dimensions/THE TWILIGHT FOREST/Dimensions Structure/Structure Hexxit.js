Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.05){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
	World.setBlock(coords.x,coords.y,  coords.z, 2, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.hexibiscus, 0);
	} 
} 
}
});




Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.008){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
	 World.setBlock(coords.x,coords.y,  coords.z+1, 4, 0);
World.setBlock(coords.x+1,coords.y,  coords.z+1, 4, 0);  
World.setBlock(coords.x-1,coords.y,  coords.z+1, 4, 0);   
World.setBlock(coords.x,coords.y,  coords.z+2, 4, 0);   
World.setBlock(coords.x+1,coords.y,  coords.z+2, 4, 0);   
World.setBlock(coords.x-1,coords.y,  coords.z+2, 4, 0);   
World.setBlock(coords.x,coords.y,  coords.z+3, 4, 0);   
World.setBlock(coords.x+1,coords.y,  coords.z+3, 4, 0);   
World.setBlock(coords.x-1,coords.y,  coords.z+3, 4, 0);

World.setBlock(coords.x,coords.y+1, coords.z, 4, 0);
World.setBlock(coords.x,coords.y+2, coords.z, 71, 0);
World.setBlock(coords.x,coords.y+3, coords.z, 71, 0);
World.setBlock(coords.x,coords.y+4, coords.z, 97, 3);
World.setBlock(coords.x,coords.y+5, coords.z, 97, 5);
World.setBlock(coords.x,coords.y+5, coords.z-1, 50, 0);
World.setBlock(coords.x,coords.y+6, coords.z, 101, 0);
World.setBlock(coords.x,coords.y+7, coords.z, 101, 0);
World.setBlock(coords.x,coords.y+8, coords.z, 97, 5);
World.setBlock(coords.x,coords.y+9, coords.z, 97, 5);
World.setBlock(coords.x,coords.y+9, coords.z-1, 50, 0);
World.setBlock(coords.x,coords.y+10, coords.z, 101, 0);
World.setBlock(coords.x,coords.y+11, coords.z, 97, 2);
World.setBlock(coords.x,coords.y+12, coords.z, 97, 2);

World.setBlock(coords.x-1,coords.y+1,  coords.z, 4, 0);  
World.setBlock(coords.x-1,coords.y+2,  coords.z, 97, 4);  
World.setBlock(coords.x-1,coords.y+3,  coords.z, 97, 4);  
World.setBlock(coords.x-1,coords.y+4,  coords.z, 97, 3);  
World.setBlock(coords.x-1,coords.y+5,  coords.z, 97, 4);  
World.setBlock(coords.x-1,coords.y+6,  coords.z, 97, 4);  
World.setBlock(coords.x-1,coords.y+7,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+8,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+9,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+10,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+11,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+12,  coords.z, 101, 0);  

World.setBlock(coords.x+1,coords.y+1,  coords.z, 4, 0);  
World.setBlock(coords.x+1,coords.y+2,  coords.z, 4, 0);  
World.setBlock(coords.x+1,coords.y+3,  coords.z, 97, 3);  
World.setBlock(coords.x+1,coords.y+4,  coords.z, 97, 3);  
World.setBlock(coords.x+1,coords.y+5,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+6,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+7,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+8,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+9,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+10,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+11,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+12,  coords.z, 101, 0);  

World.setBlock(coords.x+2,coords.y+1,  coords.z+1, 4, 0);  
World.setBlock(coords.x+2,coords.y+2,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+3,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+4,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+5,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+6,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+7,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+8,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+9,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+10,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+11,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+12,  coords.z+1, 101, 0);  

World.setBlock(coords.x+2,coords.y+1,  coords.z+2, 4, 0);  
World.setBlock(coords.x+2,coords.y+2,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+3,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+4,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+5,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+6,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+7,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+8,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+9,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+10,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+11,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+12,  coords.z+2, 97, 2);  

World.setBlock(coords.x+2,coords.y+1,  coords.z+3, 4, 0);  
World.setBlock(coords.x+2,coords.y+2,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+3,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+4,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+5,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+6,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+7,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+8,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+9,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+10,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+11,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+12,  coords.z+3, 101, 0);  

World.setBlock(coords.x-2,coords.y+1,  coords.z+1, 4, 0);  
World.setBlock(coords.x-2,coords.y+2,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+3,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+4,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+5,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+6,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+7,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+8,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+9,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+10,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+11,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z+1, 101, 0);  

World.setBlock(coords.x-2,coords.y+1,  coords.z+2, 4, 0);  
World.setBlock(coords.x-2,coords.y+2,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+3,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+4,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+5,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+6,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+7,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+8,  coords.z+2, 101, 2);  
World.setBlock(coords.x-2,coords.y+9,  coords.z+2, 101, 2);  
World.setBlock(coords.x-2,coords.y+10,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+11,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z+2, 97, 2);  

World.setBlock(coords.x-2,coords.y+1,  coords.z+3, 4, 0);  
World.setBlock(coords.x-2,coords.y+2,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+3,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+4,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+5,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+6,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+7,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+8,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+9,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+10,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+11,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z+3, 101, 0);  

World.setBlock(coords.x,coords.y+1,  coords.z+4, 4, 0);  
World.setBlock(coords.x,coords.y+2,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+3,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+4,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+5,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+6,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+7,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+8,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+9,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+10,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+12,  coords.z+4, 97, 2);  

World.setBlock(coords.x+1,coords.y+1,  coords.z+4, 4, 0);  
World.setBlock(coords.x+1,coords.y+2,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+3,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+4,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+6,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+7,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+8,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+9,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+10,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+12,  coords.z+4, 101, 0);  

World.setBlock(coords.x-1,coords.y+1,  coords.z+4, 4, 0);  
World.setBlock(coords.x-1,coords.y+2,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+3,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+4,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+5,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+6,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+7,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+8,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+9,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+10,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+12,  coords.z+4, 101, 0);  
//СОНГЫ ЭТАЖ
World.setBlock(coords.x+2,coords.y+11,  coords.z, 48, 0);  
World.setBlock(coords.x+2,coords.y+12,  coords.z, 48, 0);  

World.setBlock(coords.x-2,coords.y+11,  coords.z, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z, 97, 2);  

World.setBlock(coords.x+2,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x+2,coords.y+12,  coords.z+4, 97, 2);  

World.setBlock(coords.x-2,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z+4, 97, 2);  

World.setBlock(coords.x-1,coords.y+10,  coords.z+1, 4, 0);   
World.setBlock(coords.x,coords.y+10,  coords.z+2, 4, 0);   
World.setBlock(coords.x-1,coords.y+10,  coords.z+2, 4, 0);   
World.setBlock(coords.x,coords.y+10,  coords.z+3, 4, 0);   
World.setBlock(coords.x-1,coords.y+10,  coords.z+3, 4, 0);

//лестница
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 4, 0);
World.setBlock(coords.x-1,coords.y+2,  coords.z+2, 4, 0);
World.setBlock(coords.x,coords.y+3,  coords.z+3, 4, 0);
World.setBlock(coords.x+1,coords.y+3,  coords.z+3, 4, 0);
World.setBlock(coords.x+1,coords.y+4,  coords.z+2, 4, 0);
World.setBlock(coords.x-1,coords.y+5,  coords.z+1, 4, 0);
World.setBlock(coords.x,coords.y+6,  coords.z+3, 4, 0);
World.setBlock(coords.x+1,coords.y+7,  coords.z+3, 4, 0);
World.setBlock(coords.x+1,coords.y+8,  coords.z+1, 4, 0);
World.setBlock(coords.x,coords.y+9,  coords.z+1, 4, 0);
	} 
} 
}
});

