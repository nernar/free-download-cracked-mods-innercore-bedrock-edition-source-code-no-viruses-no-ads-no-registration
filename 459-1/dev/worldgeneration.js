//Generation on surface

var rock = [1,2,35,37,4,18,27,28,13,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
    if(Math.random() < .2){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        for(var id in rock ){
            if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
                World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.rockblock, 0);
                World.addTileEntity(coords.x, coords.y + 1, coords.z);
                        
        }
    }
}
});

var stick = [1,2,35,37,4,18,27,28,13,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
    if(Math.random() < .2){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        for(var id in stick ){
            if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
                World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.stickblock, 0);
                World.addTileEntity(coords.x, coords.y + 1, coords.z);
                        
        }
    }
}
});

var coppernug = [1,2,35,37,4,18,27,28,13,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
    if(Math.random() < .2){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        for(var id in stick ){
            if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
                World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.coppernug, 0);
                World.addTileEntity(coords.x, coords.y + 1, coords.z);
                        
        }
    }
}
});

//Generation UNDERGROUND

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<7;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 40);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.copperore, 50, 6);
    }
});