Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 2056, 5112);
    if(Math.random() < 0.004){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
	
       World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z, BlockID.voidblock, 0);
	   World.setBlock(coords.x+2,coords.y+1,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.voidblock, 0);
	   World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.voidglass, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.vajraMacerator, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
	   World.setBlock(coords.x,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
	   World.setBlock(coords.x,coords.y+1,  coords.z+3, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-3, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.voidblock, 0); 
	   World.setBlock(coords.x+1,coords.y,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
	   World.setBlock(coords.x-2,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z-1, BlockID.voidblock, 0);
	   World.setBlock(coords.x+1,coords.y,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
	   World.setBlock(coords.x-2,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+1, BlockID.voidblock, 0);
	   World.setBlock(coords.x+2,coords.y+1,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
	   World.setBlock(coords.x-1,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
	   World.setBlock(coords.x-1,coords.y+1,  coords.z+1, BlockID.luckyVoid, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+1, BlockID.luckyVoid, 0);
       
	  
}});
