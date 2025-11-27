Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<7;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 70);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, 82, 7, 6);
    }
}
);




Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
        World.setBlock(coords.x,coords.y,  coords.z, 17, 3);
World.setBlock(coords.x,coords.y+2,  coords.z, 17, 3);        
 World.setBlock(coords.x,coords.y+1,  coords.z, 17, 3);       
World.setBlock(coords.x,coords.y+3,  coords.z, 18, 3); 
World.setBlock(coords.x+1,coords.y+2,  coords.z, 18, 3);        
World.setBlock(coords.x-1,coords.y+2,  coords.z, 18, 3); 
World.setBlock(coords.x,coords.y+2,  coords.z+1, 18, 3); 
World.setBlock(coords.x,coords.y+2,  coords.z-1, 18, 3);
World.setBlock(coords.x,coords.y+1,  coords.z-1, 127, 0);          
        }}});