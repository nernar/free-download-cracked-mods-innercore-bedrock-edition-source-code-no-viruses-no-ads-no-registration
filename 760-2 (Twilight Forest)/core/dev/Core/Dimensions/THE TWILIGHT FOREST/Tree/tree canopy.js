
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.6){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 



World.setBlock(coords.x+6, coords.y+1, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+6, coords.y+2, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+6, coords.y+3, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+6, coords.y+4, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+6, coords.y+5, coords.z+11, BlockID.twCanopyLog, 0); 
//
World.setBlock(coords.x+7, coords.y+1, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+7, coords.y+2, coords.z+11, BlockID.twCanopyLog, 0); 
//
World.setBlock(coords.x+8, coords.y+1, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+8, coords.y+1, coords.z+10, BlockID.twCanopyLog, 0); 
//
World.setBlock(coords.x+9, coords.y+1, coords.z+10, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+9, coords.y+2, coords.z+10, BlockID.twCanopyLog, 0); 
//
World.setBlock(coords.x+8, coords.y, coords.z+12, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+8, coords.y+1, coords.z+12, BlockID.twCanopyLog, 0); 
//
//
World.setBlock(coords.x+5, coords.y+8, coords.z+12, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+5, coords.y+7, coords.z+12, BlockID.twCanopyLog, 0); 
//
World.setBlock(coords.x+6, coords.y+8, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+6, coords.y+7, coords.z+11, BlockID.twCanopyLog, 0); 
//
World.setBlock(coords.x+5, coords.y+7, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+5, coords.y+6, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+5, coords.y+5, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+5, coords.y+4, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+5, coords.y+6, coords.z+10, BlockID.twCanopyLog, 0);
//
//
World.setBlock(coords.x+9, coords.y, coords.z+12, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+9, coords.y, coords.z+13, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+9, coords.y, coords.z+14, BlockID.twCanopyLog, 0); 
//
World.setBlock(coords.x+6, coords.y+1, coords.z+12, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+6, coords.y, coords.z+12, BlockID.twCanopyLog, 0); 
//
World.setBlock(coords.x+5, coords.y+1, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+5, coords.y, coords.z+11, BlockID.twCanopyLog, 0);
//
World.setBlock(coords.x+6, coords.y+1, coords.z+10, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+6, coords.y, coords.z+10, BlockID.twCanopyLog, 0); 
 World.setBlock(coords.x+6, coords.y, coords.z+9, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+4, coords.y, coords.z+12, BlockID.twCanopyLog, 0); 

//lá
World.setBlock(coords.x+5, coords.y+9, coords.z+15, 18, 0); 
World.setBlock(coords.x+5, coords.y+9, coords.z+14, 18, 0); 
//
World.setBlock(coords.x+6, coords.y+9, coords.z+14, 18, 0); 
World.setBlock(coords.x+6, coords.y+9, coords.z+13, 18, 0); 
//
World.setBlock(coords.x+7, coords.y+9, coords.z+14, 18, 0); 
World.setBlock(coords.x+7, coords.y+9, coords.z+13, 18, 0); 
World.setBlock(coords.x+7, coords.y+9, coords.z+12, 18, 0); 
World.setBlock(coords.x+7, coords.y+9, coords.z+11, 18, 0); 
World.setBlock(coords.x+7, coords.y+9, coords.z+10, 18, 0); 
//
World.setBlock(coords.x+4, coords.y+9, coords.z+9, 18, 0); 
//
World.setBlock(coords.x+8, coords.y+9, coords.z+11, 18, 0); 
World.setBlock(coords.x+8, coords.y+9, coords.z+10, 18, 0); 
//
World.setBlock(coords.x+6, coords.y+9, coords.z+12, 18, 0); 
World.setBlock(coords.x+6, coords.y+9, coords.z+11, 18, 0); 
World.setBlock(coords.x+6, coords.y+9, coords.z+10, 18, 0); 
World.setBlock(coords.x+6, coords.y+9, coords.z+9, 18, 0); 
//
World.setBlock(coords.x+5, coords.y+9, coords.z+13, 18, 0); 
World.setBlock(coords.x+5, coords.y+9, coords.z+12, 18, 0); 
World.setBlock(coords.x+5, coords.y+9, coords.z+11, 18, 0); 
World.setBlock(coords.x+5, coords.y+9, coords.z+10, 18, 0); 
World.setBlock(coords.x+5, coords.y+9, coords.z+9, 18, 0); 
World.setBlock(coords.x+5, coords.y+9, coords.z+8, 18, 0); 
//
World.setBlock(coords.x+4, coords.y+9, coords.z+13, 18, 0); 
World.setBlock(coords.x+4, coords.y+9, coords.z+12, 18, 0); 
World.setBlock(coords.x+4, coords.y+9, coords.z+11, 18, 0); 
World.setBlock(coords.x+4, coords.y+9, coords.z+10, 18, 0); 
World.setBlock(coords.x+4, coords.y+9, coords.z+9, 18, 0); 
//
World.setBlock(coords.x+3, coords.y+9, coords.z+12, 18, 0); 
World.setBlock(coords.x+3, coords.y+9, coords.z+11, 18, 0); 
World.setBlock(coords.x+3, coords.y+9, coords.z+10, 18, 0); 
World.setBlock(coords.x+3, coords.y+9, coords.z+9, 18, 0); 
//
World.setBlock(coords.x+2, coords.y+9, coords.z+11, 18, 0); 
//
//
World.setBlock(coords.x+4, coords.y+10, coords.z+9, 18, 0); 
World.setBlock(coords.x+4, coords.y+10, coords.z+10, 18, 0); 
World.setBlock(coords.x+4, coords.y+10, coords.z+11, 18, 0); 
//
World.setBlock(coords.x+5, coords.y+10, coords.z+12, 18, 0); 
World.setBlock(coords.x+5, coords.y+10, coords.z+11, 18, 0); 
World.setBlock(coords.x+5, coords.y+10, coords.z+10, 18, 0); 
//
World.setBlock(coords.x+6, coords.y+10, coords.z+13, 18, 0); 
World.setBlock(coords.x+6, coords.y+10, coords.z+12, 18, 0); 
World.setBlock(coords.x+6, coords.y+10, coords.z+11, 18, 0); 
World.setBlock(coords.x+6, coords.y+10, coords.z+10, 18, 0); 
//
World.setBlock(coords.x+7, coords.y+10, coords.z+11, 18, 0); 
//
//
World.setBlock(coords.x+4, coords.y+8, coords.z+11, 18, 0); 
World.setBlock(coords.x+6, coords.y+8, coords.z+10, 18, 0); 
World.setBlock(coords.x+5, coords.y+8, coords.z+10, 18, 0); 
//
World.setBlock(coords.x+7, coords.y+10, coords.z+11, 18, 0); 
World.setBlock(coords.x+6, coords.y+10, coords.z+12, 18, 0); 
World.setBlock(coords.x+5, coords.y+10, coords.z+13, 18, 0); 
World.setBlock(coords.x+4, coords.y+10, coords.z+12, 18, 0); 



 









} 
} 
}
});
