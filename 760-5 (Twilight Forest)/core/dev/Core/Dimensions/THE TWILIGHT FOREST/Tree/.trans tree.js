Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.6){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x+6, coords.y+1, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+6, coords.y+2, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+6, coords.y+3, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+6, coords.y+4, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+6, coords.y+5, coords.z+11, BlockID.twTransformationLog, 0); 
//
World.setBlock(coords.x+7, coords.y+1, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+7, coords.y+2, coords.z+11, BlockID.twTransformationLog, 0); 
//
World.setBlock(coords.x+8, coords.y+1, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+8, coords.y+1, coords.z+10, BlockID.twTransformationLog, 0); 
//
World.setBlock(coords.x+9, coords.y+1, coords.z+10, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+9, coords.y+2, coords.z+10, BlockID.twTransformationLog, 0); 
//
World.setBlock(coords.x+8, coords.y, coords.z+12, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+8, coords.y+1, coords.z+12, BlockID.twTransformationLog, 0); 
//
//
World.setBlock(coords.x+5, coords.y+8, coords.z+12, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+5, coords.y+7, coords.z+12, BlockID.twTransformationLog, 0); 
//
World.setBlock(coords.x+6, coords.y+8, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+6, coords.y+7, coords.z+11, BlockID.twTransformationLog, 0); 
//
World.setBlock(coords.x+5, coords.y+7, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+5, coords.y+6, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+5, coords.y+5, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+5, coords.y+4, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+5, coords.y+6, coords.z+10, BlockID.twTransformationLog, 0);
//
//
World.setBlock(coords.x+9, coords.y, coords.z+12, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+9, coords.y, coords.z+13, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+9, coords.y, coords.z+14, BlockID.twTransformationLog, 0); 
//
World.setBlock(coords.x+6, coords.y+1, coords.z+12, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+6, coords.y, coords.z+12, BlockID.twTransformationLog, 0); 
//
World.setBlock(coords.x+5, coords.y+1, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+5, coords.y, coords.z+11, BlockID.twTransformationLog, 0);
//
World.setBlock(coords.x+6, coords.y+1, coords.z+10, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+6, coords.y, coords.z+10, BlockID.twTransformationLog, 0); 
 World.setBlock(coords.x+6, coords.y, coords.z+9, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+4, coords.y, coords.z+12, BlockID.twTransformationLog, 0); 

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

World.setBlock(coords.x+30, coords.y+1, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+30, coords.y+2, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+30, coords.y+3, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+30, coords.y+4, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+30, coords.y+5, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+30, coords.y+6, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+30, coords.y+7, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+30, coords.y+8, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+30, coords.y+9, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+30, coords.y+10, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+30, coords.y+11, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+30, coords.y+12, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+30, coords.y+12, coords.z+29, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+30, coords.y+13, coords.z+29, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+31, coords.y+11, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+32, coords.y+12, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+32, coords.y+13, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+30, coords.y+12, coords.z+29, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+30, coords.y+13, coords.z+29, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+30, coords.y+13, coords.z+31, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+30, coords.y+14, coords.z+32, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+28, coords.y+14, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+28, coords.y+13, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+28, coords.y+12, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+28, coords.y+11, coords.z+30, BlockID.twCanopyLog, 0);
World.setBlock(coords.x+29, coords.y+10, coords.z+30, BlockID.twCanopyLog, 0);
} 
} 
}
});
