Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.005){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
 World.setBlock(coords.x-1,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+1, 98, 1);
       //
       //
       World.setBlock(coords.x+2,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z, 98, 1); 
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.na1, 0);// boss
       
       World.setBlock(coords.x-1,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z, 98, 1);
       //
       World.setBlock(coords.x+2,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-1, 98, 1);
       //
       World.setBlock(coords.x-1,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-2, 98, 1);
       //
       //cột
       World.setBlock(coords.x+2,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-2, 98, 1);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-2, 98, 1);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-2, 98, 1);
       //
       World.setBlock(coords.x-2,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-2, 98, 1);
       //
       World.setBlock(coords.x-2,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+2, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+2, 98, 1);
       //
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+2, 98, 1);
       //
       //
       World.setBlock(coords.x+4,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+4,coords.y-1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+4,coords.y-2,  coords.z+2, 98, 1);
       //
       World.setBlock(coords.x-1,coords.y+4,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-1, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+1, 98, 1);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+2, 98, 1);
       //
       World.setBlock(coords.x-1,coords.y+5,  coords.z, 98, 1);
       World.setBlock(coords.x,coords.y+5,  coords.z-1, 98, 1);
       World.setBlock(coords.x+1,coords.y+5,  coords.z, 98, 1);
       World.setBlock(coords.x,coords.y+5,  coords.z+1, 98, 1);
       

} 
} 
}
});
