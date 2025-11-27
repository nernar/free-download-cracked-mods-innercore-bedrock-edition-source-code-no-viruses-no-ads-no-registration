Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.Tai_oan, 0);
World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.Tai_oan, 0);  
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.Tai_oan, 0);   
World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.Tai_oan, 0);   
World.setBlock(coords.x,coords.y+5,  coords.z, BlockID.Tai_oan, 0);   //бревна тай-юанья

World.setBlock(coords.x+1,coords.y+4,  coords.z, 18, 3);   
World.setBlock(coords.x-1,coords.y+4,  coords.z, 18, 3);   
World.setBlock(coords.x+2,coords.y+4,  coords.z, 18, 3);   
World.setBlock(coords.x-2,coords.y+4,  coords.z, 18, 3);   
World.setBlock(coords.x,coords.y+4,  coords.z+1, 18, 3);   
World.setBlock(coords.x,coords.y+4,  coords.z-1, 18, 3);   
World.setBlock(coords.x,coords.y+4,  coords.z+2, 18, 3);   
World.setBlock(coords.x,coords.y+4,  coords.z-2, 18, 3);   

World.setBlock(coords.x+1,coords.y+4,  coords.z+1, 18, 3);   
World.setBlock(coords.x-1,coords.y+4,  coords.z+1, 18, 3);   
World.setBlock(coords.x+1,coords.y+4,  coords.z-1, 18, 3);   
World.setBlock(coords.x-1,coords.y+4,  coords.z-1, 18, 3);   

World.setBlock(coords.x+2,coords.y+4,  coords.z+2, 18, 3);   
World.setBlock(coords.x-2,coords.y+4,  coords.z+2, 18, 3);   
World.setBlock(coords.x+2,coords.y+4,  coords.z-2, 18, 3);   
World.setBlock(coords.x-2,coords.y+4,  coords.z-2, 18, 3);   

World.setBlock(coords.x+1,coords.y+5,  coords.z, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z, 18, 3);   
World.setBlock(coords.x,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x,coords.y+5,  coords.z-1, 18, 3);   
World.setBlock(coords.x+1,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x+1,coords.y+5,  coords.z-1, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z-1, 18, 3);   

World.setBlock(coords.x,coords.y+6,  coords.z, 18, 3);   
}}});


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.Moss_log, 0);
World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.Moss_log, 0);  
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.Moss_log, 0);   
World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.Moss_log, 0);   
World.setBlock(coords.x,coords.y+5,  coords.z, BlockID.Moss_log, 0);   //бревно мус_луг

World.setBlock(coords.x+1,coords.y+4,  coords.z, 18, 3);   
World.setBlock(coords.x-1,coords.y+4,  coords.z, 18, 3);   
World.setBlock(coords.x+2,coords.y+4,  coords.z, 18, 3);   
World.setBlock(coords.x-2,coords.y+4,  coords.z, 18, 3);   
World.setBlock(coords.x,coords.y+4,  coords.z+1, 18, 3);   
World.setBlock(coords.x,coords.y+4,  coords.z-1, 18, 3);   
World.setBlock(coords.x,coords.y+4,  coords.z+2, 18, 3);   
World.setBlock(coords.x,coords.y+4,  coords.z-2, 18, 3);   

World.setBlock(coords.x+1,coords.y+4,  coords.z+1, 18, 3);   
World.setBlock(coords.x-1,coords.y+4,  coords.z+1, 18, 3);   
World.setBlock(coords.x+1,coords.y+4,  coords.z-1, 18, 3);   
World.setBlock(coords.x-1,coords.y+4,  coords.z-1, 18, 3);   

World.setBlock(coords.x+2,coords.y+4,  coords.z+2, 18, 3);   
World.setBlock(coords.x-2,coords.y+4,  coords.z+2, 18, 3);   
World.setBlock(coords.x+2,coords.y+4,  coords.z-2, 18, 3);   
World.setBlock(coords.x-2,coords.y+4,  coords.z-2, 18, 3);   

World.setBlock(coords.x+1,coords.y+5,  coords.z, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z, 18, 3);   
World.setBlock(coords.x,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x,coords.y+5,  coords.z-1, 18, 3);   
World.setBlock(coords.x+1,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x+1,coords.y+5,  coords.z-1, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z-1, 18, 3);   

World.setBlock(coords.x,coords.y+6,  coords.z, 18, 3);   
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.log_peach, 0);
World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.log_peach, 0);  
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.log_peach, 0);   
World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.log_peach, 0);   
World.setBlock(coords.x,coords.y+5,  coords.z, BlockID.log_peach, 0);   
World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.log_peach, 0);  
  //бревно лог-пейч

World.setBlock(coords.x+1,coords.y+5,  coords.z, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z, 18, 3);   
World.setBlock(coords.x+2,coords.y+5,  coords.z, 18, 3);   
World.setBlock(coords.x-2,coords.y+5,  coords.z, 18, 3);   
World.setBlock(coords.x,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x,coords.y+5,  coords.z-1, 18, 3);   
World.setBlock(coords.x,coords.y+5,  coords.z+2, 18, 3);   
World.setBlock(coords.x,coords.y+5,  coords.z-2, 18, 3);   

World.setBlock(coords.x+1,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x+1,coords.y+5,  coords.z-1, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z-1, 18, 3);   

World.setBlock(coords.x+1,coords.y+5,  coords.z+2, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z+2, 18, 3);   
World.setBlock(coords.x+1,coords.y+5,  coords.z-2, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z-2, 18, 3);   

World.setBlock(coords.x+2,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x-2,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x+2,coords.y+5,  coords.z-1, 18, 3);   
World.setBlock(coords.x-2,coords.y+5,  coords.z-1, 18, 3);   


World.setBlock(coords.x+1,coords.y+6,  coords.z, 18, 3);   
World.setBlock(coords.x-1,coords.y+6,  coords.z, 18, 3);   
World.setBlock(coords.x+2,coords.y+6,  coords.z, 18, 3);   
World.setBlock(coords.x-2,coords.y+6,  coords.z, 18, 3);   
World.setBlock(coords.x,coords.y+6,  coords.z+1, 18, 3);   
World.setBlock(coords.x,coords.y+6,  coords.z-1, 18, 3);   
World.setBlock(coords.x,coords.y+6,  coords.z+2, 18, 3);   
World.setBlock(coords.x,coords.y+6,  coords.z-2, 18, 3);   

World.setBlock(coords.x+1,coords.y+6,  coords.z+1, 18, 3);   
World.setBlock(coords.x-1,coords.y+6,  coords.z+1, 18, 3);   
World.setBlock(coords.x+1,coords.y+6,  coords.z-1, 18, 3);   
World.setBlock(coords.x-1,coords.y+6,  coords.z-1, 18, 3);   

World.setBlock(coords.x+1,coords.y+6,  coords.z+2, 18, 3);   
World.setBlock(coords.x-1,coords.y+6,  coords.z+2, 18, 3);   
World.setBlock(coords.x+1,coords.y+6,  coords.z-2, 18, 3);   
World.setBlock(coords.x-1,coords.y+6,  coords.z-2, 18, 3);   

World.setBlock(coords.x+2,coords.y+6,  coords.z+1, 18, 3);   
World.setBlock(coords.x-2,coords.y+6,  coords.z+1, 18, 3);   
World.setBlock(coords.x+2,coords.y+6,  coords.z-1, 18, 3);   
World.setBlock(coords.x-2,coords.y+6,  coords.z-1, 18, 3);   

World.setBlock(coords.x+1,coords.y+7,  coords.z, 18, 3);   
World.setBlock(coords.x-1,coords.y+7,  coords.z, 18, 3);   
World.setBlock(coords.x,coords.y+7,  coords.z+1, 18, 3);   
World.setBlock(coords.x,coords.y+7,  coords.z-1, 18, 3);   

World.setBlock(coords.x,coords.y+8,  coords.z, 18, 3);   
}}});