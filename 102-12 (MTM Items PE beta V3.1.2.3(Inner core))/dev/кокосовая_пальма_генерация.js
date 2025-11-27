//массив
var va = [2,17,36,35,16,243];
//генерацияCallback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() <0.5){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 100);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var iu in va ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == iu)&&(World.getBlockID(coords.x, coords.y, coords.z) == 12)&&(World.getBlockData(coords.x, coords.y, coords.z) == 0)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){
for(var xx = -10; xx <= 10; xx++)
{
for(var yy = -10; yy <= 10; yy++)
{
for(var zz = -10; zz <= 10; zz++)
{
if(World.getBlockID(coords.x+xx, coords.y+yy, coords.z+zz) == 8)
{World.setBlock(coords.x, coords.y+1, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+2, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+3, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+4, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+6, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+5, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+7, coords.z, BlockID.drevesina_palmi, 0);
			World.setBlock(coords.x, coords.y+8, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+8, coords.z);
			World.setBlock(coords.x+1, coords.y+7, coords.z+1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z+1);
			World.setBlock(coords.x+1, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z);
			World.setBlock(coords.x+1, coords.y+7, coords.z-1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z-1);
			World.setBlock(coords.x-1, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-1, coords.y+7, coords.z);
			World.setBlock(coords.x-1, coords.y+7, coords.z+1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-1, coords.y+7, coords.z+1);
			World.setBlock(coords.x-1, coords.y+7, coords.z-1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-1, coords.y+7, coords.z-1);
			World.setBlock(coords.x, coords.y+7, coords.z-1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z-1);
			World.setBlock(coords.x, coords.y+7, coords.z+1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z+1);
			World.setBlock(coords.x+2, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+2, coords.y+7, coords.z);
			World.setBlock(coords.x+3, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+3, coords.y+7, coords.z);
			World.setBlock(coords.x+2, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+2, coords.y+7, coords.z+2);
			World.setBlock(coords.x+2, coords.y+7, coords.z-2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+2, coords.y+7, coords.z-2);
			World.setBlock(coords.x-2, coords.y+7, coords.z-2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-2, coords.y+7, coords.z-2);
			World.setBlock(coords.x-2, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-2, coords.y+7, coords.z+2);
			World.setBlock(coords.x-2, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-2, coords.y+7, coords.z);
			World.setBlock(coords.x-3, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-3, coords.y+7, coords.z);
			World.setBlock(coords.x, coords.y+7, coords.z-2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z-2);
			World.setBlock(coords.x, coords.y+7, coords.z-3, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z-3);
			World.setBlock(coords.x, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z+2);
			World.setBlock(coords.x, coords.y+7, coords.z+3, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z+3);
	if(Math.random() < .3){
World.setBlock(coords.x+1, coords.y+6, coords.z+1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z+1);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1, coords.y+6, coords.z-1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z-1);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1, coords.y+6, coords.z, BlockID.kokos, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z);
}
	if(Math.random() < .3){
World.setBlock(coords.x-1, coords.y+6, coords.z+1, BlockID.kokos, 0);
World.addTileEntity(coords.x-1, coords.y+6, coords.z+1);
}
	if(Math.random() < .3){
World.setBlock(coords.x-1, coords.y+6, coords.z-1, BlockID.kokos, 0);
World.addTileEntity(coords.x-1, coords.y+6, coords.z-1);
}
	if(Math.random() < .3){
World.setBlock(coords.x-1, coords.y+6, coords.z, BlockID.kokos, 0);
World.addTileEntity(coords.x-1, coords.y+6, coords.z);
}
	if(Math.random() < .3){
World.setBlock(coords.x, coords.y+6, coords.z+1, BlockID.kokos, 0);
World.addTileEntity(coords.x, coords.y+6, coords.z+1);
}
	if(Math.random() < .3){
World.setBlock(coords.x, coords.y+6, coords.z-1, BlockID.kokos, 0);
World.addTileEntity(coords.x, coords.y+6, coords.z-1);
}
	if(Math.random() < .5){
World.setBlock(coords.x+4, coords.y+6, coords.z, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+4, coords.y+6, coords.z);
}
	if(Math.random() < .5){
World.setBlock(coords.x-4, coords.y+6, coords.z, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x-4, coords.y+6, coords.z);
}
	if(Math.random() < .5){
World.setBlock(coords.x, coords.y+6, coords.z-4, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x, coords.y+6, coords.z-4);
}
	if(Math.random() < .5){
World.setBlock(coords.x, coords.y+6, coords.z+4, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x, coords.y+6, coords.z+4);
}
	if(Math.random() < .5){
World.setBlock(coords.x+3, coords.y+6, coords.z-3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+3, coords.y+6, coords.z-3);
}
	if(Math.random() < .5){
World.setBlock(coords.x-3, coords.y+6, coords.z-3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x-3, coords.y+6, coords.z-3);
}
	if(Math.random() < .5){
World.setBlock(coords.x+3, coords.y+6, coords.z+3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+3, coords.y+6, coords.z+3);
}
	if(Math.random() < .5){
World.setBlock(coords.x-3, coords.y+6, coords.z+3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x-3, coords.y+6, coords.z+3);
}
}
}
}
}
}
			}
		}	}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){	if(Math.random() <0.01){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var iu in va ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == iu)&&(World.getBlockID(coords.x, coords.y, coords.z) == 12)&&(World.getBlockData(coords.x, coords.y, coords.z) == 0)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){World.setBlock(coords.x, coords.y+1, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+2, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+3, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+4, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+6, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+5, coords.z, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x, coords.y+7, coords.z, BlockID.drevesina_palmi, 0);
			World.setBlock(coords.x, coords.y+8, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+8, coords.z);
			World.setBlock(coords.x+1, coords.y+7, coords.z+1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z+1);
			World.setBlock(coords.x+1, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z);
			World.setBlock(coords.x+1, coords.y+7, coords.z-1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z-1);
			World.setBlock(coords.x-1, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-1, coords.y+7, coords.z);
			World.setBlock(coords.x-1, coords.y+7, coords.z+1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-1, coords.y+7, coords.z+1);
			World.setBlock(coords.x-1, coords.y+7, coords.z-1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-1, coords.y+7, coords.z-1);
			World.setBlock(coords.x, coords.y+7, coords.z-1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z-1);
			World.setBlock(coords.x, coords.y+7, coords.z+1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z+1);
			World.setBlock(coords.x+2, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+2, coords.y+7, coords.z);
			World.setBlock(coords.x+3, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+3, coords.y+7, coords.z);
			World.setBlock(coords.x+2, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+2, coords.y+7, coords.z+2);
			World.setBlock(coords.x+2, coords.y+7, coords.z-2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+2, coords.y+7, coords.z-2);
			World.setBlock(coords.x-2, coords.y+7, coords.z-2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-2, coords.y+7, coords.z-2);
			World.setBlock(coords.x-2, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-2, coords.y+7, coords.z+2);
			World.setBlock(coords.x-2, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-2, coords.y+7, coords.z);
			World.setBlock(coords.x-3, coords.y+7, coords.z, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x-3, coords.y+7, coords.z);
			World.setBlock(coords.x, coords.y+7, coords.z-2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z-2);
			World.setBlock(coords.x, coords.y+7, coords.z-3, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z-3);
			World.setBlock(coords.x, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z+2);
			World.setBlock(coords.x, coords.y+7, coords.z+3, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x, coords.y+7, coords.z+3);
	if(Math.random() < .3){
World.setBlock(coords.x+1, coords.y+6, coords.z+1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z+1);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1, coords.y+6, coords.z-1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z-1);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1, coords.y+6, coords.z, BlockID.kokos, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z);
}
	if(Math.random() < .3){
World.setBlock(coords.x-1, coords.y+6, coords.z+1, BlockID.kokos, 0);
World.addTileEntity(coords.x-1, coords.y+6, coords.z+1);
}
	if(Math.random() < .3){
World.setBlock(coords.x-1, coords.y+6, coords.z-1, BlockID.kokos, 0);
World.addTileEntity(coords.x-1, coords.y+6, coords.z-1);
}
	if(Math.random() < .3){
World.setBlock(coords.x-1, coords.y+6, coords.z, BlockID.kokos, 0);
World.addTileEntity(coords.x-1, coords.y+6, coords.z);
}
	if(Math.random() < .3){
World.setBlock(coords.x, coords.y+6, coords.z+1, BlockID.kokos, 0);
World.addTileEntity(coords.x, coords.y+6, coords.z+1);
}
	if(Math.random() < .3){
World.setBlock(coords.x, coords.y+6, coords.z-1, BlockID.kokos, 0);
World.addTileEntity(coords.x, coords.y+6, coords.z-1);
}
	if(Math.random() < .5){
World.setBlock(coords.x+4, coords.y+6, coords.z, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+4, coords.y+6, coords.z);
}
	if(Math.random() < .5){
World.setBlock(coords.x-4, coords.y+6, coords.z, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x-4, coords.y+6, coords.z);
}
	if(Math.random() < .5){
World.setBlock(coords.x, coords.y+6, coords.z-4, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x, coords.y+6, coords.z-4);
}
	if(Math.random() < .5){
World.setBlock(coords.x, coords.y+6, coords.z+4, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x, coords.y+6, coords.z+4);
}
	if(Math.random() < .5){
World.setBlock(coords.x+3, coords.y+6, coords.z-3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+3, coords.y+6, coords.z-3);
}
	if(Math.random() < .5){
World.setBlock(coords.x-3, coords.y+6, coords.z-3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x-3, coords.y+6, coords.z-3);
}
	if(Math.random() < .5){
World.setBlock(coords.x+3, coords.y+6, coords.z+3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+3, coords.y+6, coords.z+3);
}
	if(Math.random() < .5){
World.setBlock(coords.x-3, coords.y+6, coords.z+3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x-3, coords.y+6, coords.z+3);
}
}
			}
		}	}});