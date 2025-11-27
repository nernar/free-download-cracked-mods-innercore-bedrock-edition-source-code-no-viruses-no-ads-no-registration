Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 0.009){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==2){ 
       World.setBlock(coords.x,coords.y+30,  coords.z, BlockID.cometbricks, 0);
       World.setBlock(coords.x,coords.y+31,  coords.z, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x-1,coords.y+31,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+1,coords.y+31,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x,coords.y+31,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x,coords.y+31,  coords.z-1, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x-1,coords.y+31,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+1,coords.y+31,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+1,coords.y+31,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x-1,coords.y+31,  coords.z-1, BlockID.cometbricks, 0);
       
       
       
       World.setBlock(coords.x,coords.y+35,  coords.z, BlockID.cometbricks, 0);
       World.setBlock(coords.x,coords.y+34,  coords.z, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x-1,coords.y+34,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+1,coords.y+34,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x,coords.y+34,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x,coords.y+34,  coords.z-1, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x-1,coords.y+34,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+1,coords.y+34,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+1,coords.y+34,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x-1,coords.y+34,  coords.z-1, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x,coords.y+33,  coords.z, BlockID.cometportal, 0);
       World.setBlock(coords.x,coords.y+32,  coords.z, BlockID.cometportal, 0);
}}});











































