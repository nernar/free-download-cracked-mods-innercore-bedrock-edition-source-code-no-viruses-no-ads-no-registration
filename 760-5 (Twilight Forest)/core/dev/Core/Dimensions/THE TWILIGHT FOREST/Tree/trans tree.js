Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.6){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
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
