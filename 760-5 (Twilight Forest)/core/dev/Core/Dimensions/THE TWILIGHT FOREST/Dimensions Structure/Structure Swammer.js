
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId== TwilightForest.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.008){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==2){
	World.setBlock(coords.x+5, coords.y, coords.z+3, 4, 0);
World.setBlock(coords.x+5, coords.y, coords.z+2, 4, 0);
World.setBlock(coords.x+5, coords.y, coords.z+1, 4, 0);
World.setBlock(coords.x+5, coords.y, coords.z, 4, 0);
World.setBlock(coords.x+5, coords.y, coords.z-1, 4, 0);
World.setBlock(coords.x+5, coords.y, coords.z-2, 4, 0);
World.setBlock(coords.x+5, coords.y, coords.z-3, 4, 0);
World.setBlock(coords.x+5, coords.y, coords.z+4, 4, 0);
//
World.setBlock(coords.x+4, coords.y, coords.z-4, 4, 0);
World.setBlock(coords.x+2, coords.y, coords.z-4, 4, 0);
World.setBlock(coords.x+1, coords.y, coords.z-4, 4, 0);
World.setBlock(coords.x, coords.y, coords.z-4, 4, 0);
World.setBlock(coords.x-1, coords.y, coords.z-4, 4, 0);
World.setBlock(coords.x-2, coords.y, coords.z-4, 4, 0);
World.setBlock(coords.x-3, coords.y, coords.z-4, 4, 0);
World.setBlock(coords.x-4, coords.y, coords.z-4, 4, 0);
World.setBlock(coords.x-5, coords.y, coords.z-4, 4, 0);
//
World.setBlock(coords.x-5, coords.y, coords.z-3, 4, 0);
World.setBlock(coords.x-5, coords.y, coords.z-2, 4, 0);
World.setBlock(coords.x-5, coords.y, coords.z-1, 4, 0);
World.setBlock(coords.x-5, coords.y, coords.z, 4, 0);
World.setBlock(coords.x-5, coords.y, coords.z+1, 4, 0);
World.setBlock(coords.x-5, coords.y, coords.z+2, 4, 0);
World.setBlock(coords.x-5, coords.y, coords.z+3, 4, 0);
World.setBlock(coords.x-5, coords.y, coords.z+4, 4, 0);
//
World.setBlock(coords.x-4, coords.y, coords.z+4, 4, 0);
World.setBlock(coords.x-3, coords.y, coords.z+4, 4, 0);
World.setBlock(coords.x-2, coords.y, coords.z+4, 4, 0);
World.setBlock(coords.x-1, coords.y, coords.z+4, 4, 0);
World.setBlock(coords.x, coords.y, coords.z+4, 4, 0);
World.setBlock(coords.x+1, coords.y, coords.z+4, 4, 0);
World.setBlock(coords.x+2, coords.y, coords.z+4, 4, 0);
World.setBlock(coords.x+3, coords.y, coords.z+4, 4, 0);
World.setBlock(coords.x+4, coords.y, coords.z+4, 4, 0);
//
World.setBlock(coords.x, coords.y, coords.z-2, 4, 0);
World.setBlock(coords.x, coords.y, coords.z-1, 4, 0);
World.setBlock(coords.x, coords.y, coords.z, 4, 0);
World.setBlock(coords.x, coords.y, coords.z+1, 4, 0);
World.setBlock(coords.x, coords.y, coords.z+2, 4, 0);
World.setBlock(coords.x, coords.y, coords.z+3, 4, 0);




	
	
	
	World.setBlock(coords.x+5, coords.y+1, coords.z+4, 4, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z+3, 4, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z+2, 4, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z+1, 4, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z, 4, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z-1, 4, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z-2, 4, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z-3, 4, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z+4, 4, 0);
//
World.setBlock(coords.x+4, coords.y+1, coords.z-4, 4, 0);
World.setBlock(coords.x+2, coords.y+1, coords.z-4, 4, 0);
World.setBlock(coords.x+1, coords.y+1, coords.z-4, 4, 0);
World.setBlock(coords.x, coords.y+1, coords.z-4, 4, 0);
World.setBlock(coords.x-1, coords.y+1, coords.z-4, 4, 0);
World.setBlock(coords.x-2, coords.y+1, coords.z-4, 4, 0);
World.setBlock(coords.x-3, coords.y+1, coords.z-4, 4, 0);
World.setBlock(coords.x-4, coords.y+1, coords.z-4, 4, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z-4, 4, 0);
//
World.setBlock(coords.x-5, coords.y+1, coords.z-3, 4, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z-2, 4, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z-1, 4, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z, 4, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z+1, 4, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z+2, 4, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z+3, 4, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z+4, 4, 0);
//
World.setBlock(coords.x-4, coords.y+1, coords.z+4, 4, 0);
World.setBlock(coords.x-3, coords.y+1, coords.z+4, 4, 0);
World.setBlock(coords.x-2, coords.y+1, coords.z+4, 4, 0);
World.setBlock(coords.x-1, coords.y+1, coords.z+4, 4, 0);
World.setBlock(coords.x, coords.y+1, coords.z+4, 4, 0);
World.setBlock(coords.x+1, coords.y+1, coords.z+4, 4, 0);
World.setBlock(coords.x+2, coords.y+1, coords.z+4, 4, 0);
World.setBlock(coords.x+3, coords.y+1, coords.z+4, 4, 0);
World.setBlock(coords.x+4, coords.y+1, coords.z+4, 4, 0);
//
World.setBlock(coords.x, coords.y+1, coords.z-2, 4, 0);
World.setBlock(coords.x, coords.y+1, coords.z-1, 4, 0);
World.setBlock(coords.x, coords.y+1, coords.z, 4, 0);
World.setBlock(coords.x, coords.y+1, coords.z+1, 4, 0);
World.setBlock(coords.x, coords.y+1, coords.z+2, 4, 0);
World.setBlock(coords.x, coords.y+1, coords.z+3, 4, 0)





;
//log
World.setBlock(coords.x+5, coords.y, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+5, coords.y+2, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+5, coords.y+3, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+5, coords.y+4, coords.z-4, BlockID.twCanopyLog, 0);

World.setBlock(coords.x, coords.y, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+1, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+2, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+3, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+4, coords.z-4, BlockID.twCanopyLog, 0);

World.setBlock(coords.x-5, coords.y, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-5, coords.y+2, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-5, coords.y+3, coords.z-4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-5, coords.y+4, coords.z-4, BlockID.twCanopyLog, 0);

World.setBlock(coords.x-5, coords.y, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-5, coords.y+1, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-5, coords.y+2, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-5, coords.y+3, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x-5, coords.y+4, coords.z+4, BlockID.twCanopyLog, 0);

World.setBlock(coords.x, coords.y, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+1, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+2, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+3, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x, coords.y+4, coords.z+4, BlockID.twCanopyLog, 0);

World.setBlock(coords.x+5, coords.y, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+5, coords.y+1, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+5, coords.y+2, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+5, coords.y+3, coords.z+4, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+5, coords.y+4, coords.z+4, BlockID.twCanopyLog, 0);
//
//
World.setBlock(coords.x+5, coords.y+4, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+2, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+4, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+3, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+2, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+3, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+2, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+2, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+4, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+4, coords.z-3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+3, coords.z-3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+5, coords.y+2, coords.z-3, BlockID.tw_planks_canopy, 0);
//
World.setBlock(coords.x+4, coords.y+2, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+2, coords.y+2, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+1, coords.y+2, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x, coords.y+3, coords.z-3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x, coords.y+3, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x, coords.y+2, coords.z-2, BlockID.tw_planks_canopy, 0);
	World.setBlock(coords.x, coords.y+4, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x, coords.y+2, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x, coords.y+4, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x, coords.y+4, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x, coords.y+4, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x, coords.y+2, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x, coords.y+2, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y+3, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y+2, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-2, coords.y+2, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-3, coords.y+3, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-3, coords.y+2, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y+4, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y+3, coords.z-4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y+2, coords.z-4, BlockID.tw_planks_canopy, 0);
//
World.setBlock(coords.x-5, coords.y+3, coords.z-3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+2, coords.z-3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+3, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+2, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+2, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+4, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+2, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+4, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+3, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+2, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+2, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+4, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+3, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-5, coords.y+2, coords.z+3, BlockID.tw_planks_canopy, 0);
//
World.setBlock(coords.x-4, coords.y+3, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y+2, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-3, coords.y+2, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-2, coords.y+3, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y+4, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y+3, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y+2, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+1, coords.y+2, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+2, coords.y+4, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+2, coords.y+2, coords.z+4, BlockID.tw_planks_canopy, 0);
	World.setBlock(coords.x+3, coords.y+4, coords.z+4, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+3, coords.y+2, coords.z+4, BlockID.tw_planks_canopy, 0);
	World.setBlock(coords.x+4, coords.y+4, coords.z+4, BlockID.tw_planks_canopy, 0);
//flash
World.setBlock(coords.x+1, coords.y, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+1, coords.y, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+1, coords.y, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+1, coords.y, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+1, coords.y, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+1, coords.y, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+1, coords.y, coords.z-3, BlockID.tw_planks_canopy, 0);

World.setBlock(coords.x+2, coords.y, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+2, coords.y, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+2, coords.y, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+2, coords.y, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+2, coords.y, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+2, coords.y, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+2, coords.y, coords.z-3, BlockID.tw_planks_canopy, 0);

World.setBlock(coords.x+3, coords.y, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+3, coords.y, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+3, coords.y, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+3, coords.y, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+3, coords.y, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+3, coords.y, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+3, coords.y, coords.z-3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+3, coords.y, coords.z-4, BlockID.tw_planks_canopy, 0);

World.setBlock(coords.x+4, coords.y, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+4, coords.y, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+4, coords.y, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+4, coords.y, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+4, coords.y, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+4, coords.y, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x+4, coords.y, coords.z-3, BlockID.tw_planks_canopy, 0);
//
World.setBlock(coords.x, coords.y, coords.z-3, BlockID.tw_planks_canopy, 0);
//
World.setBlock(coords.x-1, coords.y, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-1, coords.y, coords.z-3, BlockID.tw_planks_canopy, 0);

World.setBlock(coords.x-2, coords.y, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-2, coords.y, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-2, coords.y, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-2, coords.y, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-2, coords.y, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-2, coords.y, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-2, coords.y, coords.z-3, BlockID.tw_planks_canopy, 0);

World.setBlock(coords.x-3, coords.y, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-3, coords.y, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-3, coords.y, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-3, coords.y, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-3, coords.y, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-3, coords.y, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-3, coords.y, coords.z-3, BlockID.tw_planks_canopy, 0);

World.setBlock(coords.x-4, coords.y, coords.z+3, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y, coords.z+2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y, coords.z+1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y, coords.z, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y, coords.z-1, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y, coords.z-2, BlockID.tw_planks_canopy, 0);
World.setBlock(coords.x-4, coords.y, coords.z-3, BlockID.tw_planks_canopy, 0);


World.setBlock(coords.x+1, coords.y+1, coords.z, 54, 0);
World.setBlock(coords.x-4, coords.y+1, coords.z+3, 54, 0);






	
	
	
	
} 
} 
}
});
