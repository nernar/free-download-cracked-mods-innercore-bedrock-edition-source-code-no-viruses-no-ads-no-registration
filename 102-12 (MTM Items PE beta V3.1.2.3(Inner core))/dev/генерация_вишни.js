//генерация
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){	if(Math.random() <0.04){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var id in vishnia ){			if(World.getBlockID(coords.x, coords.y, coords.z) == 2){//поиск биома убран
			World.setBlock(coords.x, coords.y+1, coords.z, BlockID.drevesina_vishni, 0);//да не нормальный код на генерацию структуры, а че не так?
			World.setBlock(coords.x, coords.y+2, coords.z, BlockID.drevesina_vishni, 0);
			World.setBlock(coords.x, coords.y+3, coords.z, BlockID.drevesina_vishni, 0);
			World.setBlock(coords.x, coords.y+4, coords.z, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x, coords.y+4, coords.z);
			World.setBlock(coords.x, coords.y+5, coords.z, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x, coords.y+5, coords.z);
			World.setBlock(coords.x, coords.y+4, coords.z+1, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x, coords.y+4, coords.z+1);
			World.setBlock(coords.x, coords.y+4, coords.z-1, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x, coords.y+4, coords.z-1);
			World.setBlock(coords.x+1, coords.y+4, coords.z, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x+1, coords.y+4, coords.z);
			World.setBlock(coords.x-1, coords.y+4, coords.z, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x-1, coords.y+4, coords.z);
			World.setBlock(coords.x, coords.y+3, coords.z+1, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x, coords.y+3, coords.z+1);
			World.setBlock(coords.x, coords.y+3, coords.z-1, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x, coords.y+3, coords.z-1);
			World.setBlock(coords.x+1, coords.y+3, coords.z, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x+1, coords.y+3, coords.z);
			World.setBlock(coords.x-1, coords.y+3, coords.z, BlockID.listva_vishni, 0);
			World.addTileEntity(coords.x-1, coords.y+3, coords.z);
	if(Math.random() < .5){
World.setBlock(coords.x-1, coords.y+2, coords.z, BlockID.avishnia, 0);
World.addTileEntity(coords.x-1, coords.y+2, coords.z);
}
	if(Math.random() < .5){
World.setBlock(coords.x+1, coords.y+2, coords.z, BlockID.avishnia, 0);
World.addTileEntity(coords.x+1, coords.y+2, coords.z);
}
	if(Math.random() < .5){
World.setBlock(coords.x, coords.y+2, coords.z+1, BlockID.avishnia, 0);
World.addTileEntity(coords.x, coords.y+2, coords.z+1);
}
	if(Math.random() < .5){
World.setBlock(coords.x, coords.y+2, coords.z-1, BlockID.avishnia, 0);
World.addTileEntity(coords.x, coords.y+2, coords.z-1);
}
	if(Math.random() < .5){
World.setBlock(coords.x-1, coords.y+3, coords.z+1, BlockID.listva_vishni, 0);
World.addTileEntity(coords.x-1, coords.y+3, coords.z+1);
	if(Math.random() < .5){
World.setBlock(coords.x-1, coords.y+2, coords.z+1, BlockID.avishnia, 0);
World.addTileEntity(coords.x-1, coords.y+2, coords.z+1);
}
}
	if(Math.random() < .5){
World.setBlock(coords.x+1, coords.y+3, coords.z+1, BlockID.listva_vishni, 0);
World.addTileEntity(coords.x+1, coords.y+3, coords.z+1);
	if(Math.random() < .5){
World.setBlock(coords.x+1, coords.y+2, coords.z+1, BlockID.avishnia, 0);
World.addTileEntity(coords.x+1, coords.y+2, coords.z+1);
}
}
	if(Math.random() < .5){
World.setBlock(coords.x-1, coords.y+3, coords.z-1, BlockID.listva_vishni, 0);
World.addTileEntity(coords.x-1, coords.y+3, coords.z-1);
	if(Math.random() < .5){
World.setBlock(coords.x-1, coords.y+2, coords.z-1, BlockID.avishnia, 0);
World.addTileEntity(coords.x-1, coords.y+2, coords.z-1);
}
}
	if(Math.random() < .5){
World.setBlock(coords.x+1, coords.y+3, coords.z-1, BlockID.listva_vishni, 0);
World.addTileEntity(coords.x+1, coords.y+3, coords.z-1);
	if(Math.random() < .5){
World.setBlock(coords.x+1, coords.y+2, coords.z-1, BlockID.avishnia, 0);
World.addTileEntity(coords.x+1, coords.y+2, coords.z-1);
}
}
}
}
}
});