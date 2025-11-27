


Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==TwilightForest.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.5){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==2){
	World.setBlock(coords.x, coords.y-2, coords.z, BlockID.twCanopyLog, 0);
	World.setBlock(coords.x, coords.y-1, coords.z, BlockID.twCanopyLog, 0);
	World.setBlock(coords.x, coords.y, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+2, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+3, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+4, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+5, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+6, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+7, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+8, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+9, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+10, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+11, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+12, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+13, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+14, coords.z, BlockID.twCanopyLog, 0);
//
World.setBlock(coords.x, coords.y+11, coords.z+1, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+11, coords.z+2, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+12, coords.z+2, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+13, coords.z+2, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+14, coords.z+2, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+15, coords.z+2, BlockID.twCanopyLog, 0);
//
World.setBlock(coords.x+1, coords.y+10, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+2, coords.y+10, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+2, coords.y+11, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+2, coords.y+12, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+2, coords.y+13, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+2, coords.y+14, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+2, coords.y+13, coords.z+1, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+2, coords.y+13, coords.z+2, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+2, coords.y+14, coords.z+2, BlockID.twCanopyLog, 0);
//
World.setBlock(coords.x, coords.y+12, coords.z-1, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+12, coords.z-2, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+13, coords.z-2, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+13, coords.z-3, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+14, coords.z-3, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+15, coords.z-3, BlockID.twCanopyLog, 0);
//
World.setBlock(coords.x-1, coords.y+10, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-2, coords.y+10, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-2, coords.y+11, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-2, coords.y+12, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-3, coords.y+12, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-3, coords.y+13, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-3, coords.y+14, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-3, coords.y+15, coords.z, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-3, coords.y+14, coords.z-1, BlockID.twCanopyLog, 0);
//leaves
World.setBlock(coords.x-5, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x-4, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x-3, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x-2, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x-2, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x-1, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x+1, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x+2, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x+4, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z-6, 18, 0);

World.setBlock(coords.x+5, coords.y+13, coords.z-6, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z-5, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z-4, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z-3, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z-2, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z-1, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z+1, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z+2, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z+3, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z+4, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z+5, 18, 0);
World.setBlock(coords.x+5, coords.y+13, coords.z+6, 18, 0);

World.setBlock(coords.x+5, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x+4, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x+3, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x+2, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x+1, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x-1, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x-2, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x-3, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x-4, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x-5, coords.y+13, coords.z+6, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z+6, 18, 0);

World.setBlock(coords.x-6, coords.y+13, coords.z+5, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z+4, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z+3, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z+2, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z+1, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z-1, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z-2, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z-3, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z-4, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z-5, 18, 0);
World.setBlock(coords.x-6, coords.y+13, coords.z-6, 18, 0);

World.setBlock(coords.x-5, coords.y+14, coords.z-5, 18, 0);
World.setBlock(coords.x-4, coords.y+14, coords.z-5, 18, 0);
World.setBlock(coords.x-3, coords.y+14, coords.z-5, 18, 0);
World.setBlock(coords.x-2, coords.y+14, coords.z-5, 18, 0);
World.setBlock(coords.x-1, coords.y+14, coords.z-5, 18, 0);
World.setBlock(coords.x, coords.y+14, coords.z-5, 18, 0);
World.setBlock(coords.x+1, coords.y+14, coords.z-5, 18, 0);
World.setBlock(coords.x+2, coords.y+14, coords.z-5, 18, 0);
World.setBlock(coords.x+3, coords.y+14, coords.z-5, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z-5, 18, 0);

World.setBlock(coords.x+4, coords.y+14, coords.z-4, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z-3, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z-2, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z-1, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z+1, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z+2, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z+3, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z+4, 18, 0);
World.setBlock(coords.x+4, coords.y+14, coords.z+5, 18, 0);

World.setBlock(coords.x+3, coords.y+14, coords.z+5, 18, 0);
World.setBlock(coords.x+2, coords.y+14, coords.z+5, 18, 0);
World.setBlock(coords.x+1, coords.y+14, coords.z+5, 18, 0);
World.setBlock(coords.x, coords.y+14, coords.z+5, 18, 0);
World.setBlock(coords.x-1, coords.y+14, coords.z+5, 18, 0);
World.setBlock(coords.x-2, coords.y+14, coords.z+5, 18, 0);
World.setBlock(coords.x-3, coords.y+14, coords.z+5, 18, 0);
World.setBlock(coords.x-4, coords.y+14, coords.z+5, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z+5, 18, 0);

World.setBlock(coords.x-5, coords.y+14, coords.z+4, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z+3, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z+2, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z+1, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z-1, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z-2, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z-3, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z-4, 18, 0);
World.setBlock(coords.x-5, coords.y+14, coords.z-5, 18, 0);

World.setBlock(coords.x-4, coords.y+15, coords.z-4, 18, 0);
World.setBlock(coords.x-3, coords.y+15, coords.z-4, 18, 0);
World.setBlock(coords.x-2, coords.y+15, coords.z-4, 18, 0);
World.setBlock(coords.x-1, coords.y+15, coords.z-4, 18, 0);
World.setBlock(coords.x, coords.y+15, coords.z-4, 18, 0);
World.setBlock(coords.x+1, coords.y+15, coords.z-4, 18, 0);
World.setBlock(coords.x+2, coords.y+15, coords.z-4, 18, 0);
World.setBlock(coords.x+3, coords.y+15, coords.z-4, 18, 0);

World.setBlock(coords.x+3, coords.y+15, coords.z-3, 18, 0);
World.setBlock(coords.x+3, coords.y+15, coords.z-2, 18, 0);
World.setBlock(coords.x+3, coords.y+15, coords.z-1, 18, 0);
World.setBlock(coords.x+3, coords.y+15, coords.z, 18, 0);
World.setBlock(coords.x+3, coords.y+15, coords.z+1, 18, 0);
World.setBlock(coords.x+3, coords.y+15, coords.z+2, 18, 0);
World.setBlock(coords.x+3, coords.y+15, coords.z+3, 18, 0);
World.setBlock(coords.x+3, coords.y+15, coords.z+4, 18, 0);

World.setBlock(coords.x+2, coords.y+15, coords.z+4, 18, 0);
World.setBlock(coords.x+1, coords.y+15, coords.z+4, 18, 0);
World.setBlock(coords.x, coords.y+15, coords.z+4, 18, 0);
World.setBlock(coords.x-1, coords.y+15, coords.z+4, 18, 0);
World.setBlock(coords.x-2, coords.y+15, coords.z+4, 18, 0);
World.setBlock(coords.x-3, coords.y+15, coords.z+4, 18, 0);
World.setBlock(coords.x-4, coords.y+15, coords.z+4, 18, 0);

World.setBlock(coords.x-4, coords.y+15, coords.z+3, 18, 0);
World.setBlock(coords.x-4, coords.y+15, coords.z+2, 18, 0);
World.setBlock(coords.x-4, coords.y+15, coords.z+1, 18, 0);
World.setBlock(coords.x-4, coords.y+15, coords.z, 18, 0);
World.setBlock(coords.x-4, coords.y+15, coords.z-1, 18, 0);
World.setBlock(coords.x-4, coords.y+15, coords.z-2, 18, 0);
World.setBlock(coords.x-4, coords.y+15, coords.z-3, 18, 0);
World.setBlock(coords.x-4, coords.y+15, coords.z-4, 18, 0);
//flassh
World.setBlock(coords.x-3, coords.y+16, coords.z-3, 18, 0);
World.setBlock(coords.x-2, coords.y+16, coords.z-3, 18, 0);
World.setBlock(coords.x-1, coords.y+16, coords.z-3, 18, 0);
World.setBlock(coords.x, coords.y+16, coords.z-3, 18, 0);
World.setBlock(coords.x+1, coords.y+16, coords.z-3, 18, 0);
World.setBlock(coords.x+2, coords.y+16, coords.z-3, 18, 0);

World.setBlock(coords.x-3, coords.y+16, coords.z-2, 18, 0);
World.setBlock(coords.x-2, coords.y+16, coords.z-2, 18, 0);
World.setBlock(coords.x-1, coords.y+16, coords.z-2, 18, 0);
World.setBlock(coords.x, coords.y+16, coords.z-2, 18, 0);
World.setBlock(coords.x+1, coords.y+16, coords.z-2, 18, 0);
World.setBlock(coords.x+2, coords.y+16, coords.z-2, 18, 0);

World.setBlock(coords.x-3, coords.y+16, coords.z-1, 18, 0);
World.setBlock(coords.x-2, coords.y+16, coords.z-1, 18, 0);
World.setBlock(coords.x-1, coords.y+16, coords.z-1, 18, 0);
World.setBlock(coords.x, coords.y+16, coords.z-1, 18, 0);
World.setBlock(coords.x+1, coords.y+16, coords.z-1, 18, 0);
World.setBlock(coords.x+2, coords.y+16, coords.z-1, 18, 0);

World.setBlock(coords.x-3, coords.y+16, coords.z, 18, 0);
World.setBlock(coords.x-2, coords.y+16, coords.z, 18, 0);
World.setBlock(coords.x-1, coords.y+16, coords.z, 18, 0);
World.setBlock(coords.x, coords.y+16, coords.z, 18, 0);
World.setBlock(coords.x+1, coords.y+16, coords.z, 18, 0);
World.setBlock(coords.x+2, coords.y+16, coords.z, 18, 0);

World.setBlock(coords.x-3, coords.y+16, coords.z+1, 18, 0);
World.setBlock(coords.x-2, coords.y+16, coords.z+1, 18, 0);
World.setBlock(coords.x-1, coords.y+16, coords.z+1, 18, 0);
World.setBlock(coords.x, coords.y+16, coords.z+1, 18, 0);
World.setBlock(coords.x+1, coords.y+16, coords.z+1, 18, 0);
World.setBlock(coords.x+2, coords.y+16, coords.z+1, 18, 0);

World.setBlock(coords.x-3, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x-2, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x-1, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x+1, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x+2, coords.y+16, coords.z+2, 18, 0);

World.setBlock(coords.x-3, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x-2, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x-1, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x+1, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x+2, coords.y+16, coords.z+3, 18, 0);




//World.setBlock(coords.x+1, coords.y+16, coords.z+1, 18, 0);
/*
World.setBlock(coords.x+2, coords.y+16, coords.z-+1 18, 0);

World.setBlock(coords.x-3, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x-2, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x-1, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x+1, coords.y+16, coords.z+2, 18, 0);
World.setBlock(coords.x+2, coords.y+16, coords.z-+2 18, 0);

World.setBlock(coords.x-3, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x-2, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x-1, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x+1, coords.y+16, coords.z+3, 18, 0);
World.setBlock(coords.x+2, coords.y+16, coords.z+3 18, 0);
*/
} 
} 
}
});

