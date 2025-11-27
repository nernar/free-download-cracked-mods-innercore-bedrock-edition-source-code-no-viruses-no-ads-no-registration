var KAKTYS_GROUND_TILS = {
	2: true,
	3: true,
	12: true,
	60: true
};
IDRegistry.genItemID("mini_kaktys");
Item.createItem("mini_kaktys", "Мини кактус", {name: "мини-кактус", data: 0});
Item.registerUseFunction("mini_kaktys", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);
	
	if (GenerationUtils.isTransparentBlock(tile1.id) && KAKTYS_GROUND_TILS[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.kak);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});
IDRegistry.genBlockID("kak");
Block.createBlock("kak", [
	{name: "Cherry Tree Saplin", texture: [["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0]], inCreative: false}
], BLOCK_TYPE_SAZHENETC);
IDRegistry.genBlockID("kakty");
Block.createBlock("kakty", [
	{name: "Cherry Tree Saplin", texture: [["мини-кактус", 0], ["мини-кактус", 0], ["мини-кактус", 0], ["мини-кактус", 0], ["мини-кактус", 0], ["мини-кактус", 0]], inCreative: false}
]);
function createKakRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (0, 0, 0.5, 1, 1, 0.5,  BlockID.kakty, 0);
model.addBox (0.5, 0, 0, 0.5, 1, 1,  BlockID.kakty, 0);
render.addEntry(model);
}
createKakRender(BlockID.kak, BlockID.kak, 0);
Block.setBlockShape(BlockID.kak, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.1, z: 0.999});
Block.registerDropFunction("kak", function(){
	return [[ItemID.mini_kaktys, 1, 0]];
});
TileEntity.registerPrototype(BlockID.kak, {
	defaultValues: {
	
	},
	
	tick: function(){
		if (World.getThreadTime() % 2 == 0){
			if (!KAKTYS_GROUND_TILS[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
			}
		}
	},
	
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){	if(Math.random() <0.05){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var iu in va ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == iu)&&(World.getBlockID(coords.x, coords.y, coords.z) == 12)&&(World.getBlockData(coords.x, coords.y, coords.z) == 0)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){World.setBlock(coords.x, coords.y+1, coords.z, BlockID.kak, 0);
			World.addTileEntity(coords.x, coords.y+1, coords.z);

}
			}
		}	}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){	if(Math.random() <0.05){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var iu in va ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == iu)&&(World.getBlockID(coords.x, coords.y, coords.z) == 12)&&(World.getBlockData(coords.x, coords.y, coords.z) == 0)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){World.setBlock(coords.x, coords.y+1, coords.z, 32, 0);
			World.addTileEntity(coords.x, coords.y+1, coords.z);

}
			}
		}	}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){	if(Math.random() <0.002){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var iu in va ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == iu)&&(World.getBlockID(coords.x, coords.y, coords.z) == 12)&&(World.getBlockData(coords.x, coords.y, coords.z) == 0)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){World.setBlock(coords.x, coords.y, coords.z, 8, 0);
World.setBlock(coords.x, coords.y-1, coords.z, 8, 0);
World.setBlock(coords.x, coords.y, coords.z+1, 8, 0);
World.setBlock(coords.x, coords.y, coords.z-1, 8, 0);
World.setBlock(coords.x+1, coords.y, coords.z+1, 8, 0);
World.setBlock(coords.x+1, coords.y, coords.z, 8, 0);
World.setBlock(coords.x, coords.y, coords.z+2, 2, 0);
World.setBlock(coords.x, coords.y, coords.z+3, 2, 0);
World.setBlock(coords.x, coords.y, coords.z-2, 2, 0);
World.setBlock(coords.x-2, coords.y, coords.z, 2, 0);
World.setBlock(coords.x+2, coords.y, coords.z, 2, 0);
World.setBlock(coords.x-1, coords.y, coords.z, 2, 0);
World.setBlock(coords.x+1, coords.y, coords.z+2, 2, 0);
World.setBlock(coords.x-1, coords.y, coords.z+1, 2, 0);
World.setBlock(coords.x-1, coords.y, coords.z+2, 2, 0);
World.setBlock(coords.x+2, coords.y, coords.z+1, 2, 0);
World.setBlock(coords.x+3, coords.y, coords.z+1, 2, 0);
World.setBlock(coords.x-1, coords.y, coords.z-1, 2, 0);
World.setBlock(coords.x+1, coords.y, coords.z-1, 2, 0);
World.setBlock(coords.x+2, coords.y, coords.z-1, 2, 0);
World.setBlock(coords.x+1, coords.y, coords.z-2, 2, 0);
World.setBlock(coords.x+1, coords.y+1, coords.z-2, 31, 1);
World.setBlock(coords.x+2, coords.y+1, coords.z+1, 31, 1);
World.setBlock(coords.x, coords.y+1, coords.z+2, 31, 1);
World.setBlock(coords.x, coords.y+1, coords.z+3, 31, 1);
World.setBlock(coords.x-1, coords.y+1, coords.z+1, 31, 1);
World.setBlock(coords.x+2, coords.y+1, coords.z-1, BlockID.kak, 0);
World.addTileEntity(coords.x+2, coords.y+1, coords.z-1);
World.setBlock(coords.x-1, coords.y+1, coords.z, BlockID.kak, 0);
World.addTileEntity(coords.x-1, coords.y+1, coords.z);
World.setBlock(coords.x+1, coords.y+1, coords.z+2, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x+1, coords.y+2, coords.z+2, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x+1, coords.y+3, coords.z+2, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x+1, coords.y+4, coords.z+2, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x+1, coords.y+6, coords.z+2, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x+1, coords.y+5, coords.z+2, BlockID.drevesina_palmi, 0);
World.setBlock(coords.x+1, coords.y+7, coords.z+2, BlockID.drevesina_palmi, 0);
			World.setBlock(coords.x+1, coords.y+8, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+8, coords.z+2);
			World.setBlock(coords.x+1+1, coords.y+7, coords.z+2+1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1+1, coords.y+7, coords.z+2+1);
			World.setBlock(coords.x+1+1, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1+1, coords.y+7, coords.z+2);
			World.setBlock(coords.x+1+1, coords.y+7, coords.z+2-1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1+1, coords.y+7, coords.z+2-1);
			World.setBlock(coords.x+1-1, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1-1, coords.y+7, coords.z+2);
			World.setBlock(coords.x+1-1, coords.y+7, coords.z+2+1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1-1, coords.y+7, coords.z+2+1);
			World.setBlock(coords.x+1-1, coords.y+7, coords.z+2-1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1-1, coords.y+7, coords.z+2-1);
			World.setBlock(coords.x+1, coords.y+7, coords.z+2-1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z+2-1);
			World.setBlock(coords.x+1, coords.y+7, coords.z+2+1, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z+2+1);
			World.setBlock(coords.x+1+2, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1+2, coords.y+7, coords.z+2);
			World.setBlock(coords.x+1+3, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1+3, coords.y+7, coords.z+2);
			World.setBlock(coords.x+1+2, coords.y+7, coords.z+2+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1+2, coords.y+7, coords.z+2+2);
			World.setBlock(coords.x+1+2, coords.y+7, coords.z+2-2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1+2, coords.y+7, coords.z+2-2);
			World.setBlock(coords.x+1-2, coords.y+7, coords.z+2-2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1-2, coords.y+7, coords.z+2-2);
			World.setBlock(coords.x+1-2, coords.y+7, coords.z+2+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1-2, coords.y+7, coords.z+2+2);
			World.setBlock(coords.x+1-2, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1-2, coords.y+7, coords.z+2);
			World.setBlock(coords.x+1-3, coords.y+7, coords.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1-3, coords.y+7, coords.z+2);
			World.setBlock(coords.x+1, coords.y+7, coords.z+2-2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z+2-2);
			World.setBlock(coords.x+1, coords.y+7, coords.z+2-3, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z+2-3);
			World.setBlock(coords.x+1, coords.y+7, coords.z+2+2, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z+2+2);
			World.setBlock(coords.x+1, coords.y+7, coords.z+2+3, BlockID.listva_palmi, 0);
			World.addTileEntity(coords.x+1, coords.y+7, coords.z+2+3);
	if(Math.random() < .3){
World.setBlock(coords.x+1+1, coords.y+6, coords.z+2+1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1+1, coords.y+6, coords.z+2+1);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1+1, coords.y+6, coords.z+2-1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1+1, coords.y+6, coords.z+2-1);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1+1, coords.y+6, coords.z+2, BlockID.kokos, 0);
World.addTileEntity(coords.x+1+1, coords.y+6, coords.z+2);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1-1, coords.y+6, coords.z+2+1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1-1, coords.y+6, coords.z+2+1);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1-1, coords.y+6, coords.z+2-1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1-1, coords.y+6, coords.z+2-1);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1-1, coords.y+6, coords.z+2, BlockID.kokos, 0);
World.addTileEntity(coords.x+1-1, coords.y+6, coords.z+2);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1, coords.y+6, coords.z+2+1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z+2+1);
}
	if(Math.random() < .3){
World.setBlock(coords.x+1, coords.y+6, coords.z+2-1, BlockID.kokos, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z+2-1);
}
	if(Math.random() < .5){
World.setBlock(coords.x+1+4, coords.y+6, coords.z+2, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+1+4, coords.y+6, coords.z+2);
}
	if(Math.random() < .5){
World.setBlock(coords.x+1-4, coords.y+6, coords.z+2, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+1-4, coords.y+6, coords.z+2);
}
	if(Math.random() < .5){
World.setBlock(coords.x+1, coords.y+6, coords.z+2-4, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z+2-4);
}
	if(Math.random() < .5){
World.setBlock(coords.x+1, coords.y+6, coords.z+2+4, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+1, coords.y+6, coords.z+2+4);
}
	if(Math.random() < .5){
World.setBlock(coords.x+1+3, coords.y+6, coords.z+2-3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+1+3, coords.y+6, coords.z+2-3);
}
	if(Math.random() < .5){
World.setBlock(coords.x+1-3, coords.y+6, coords.z+2-3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+1-3, coords.y+6, coords.z+2-3);
}
	if(Math.random() < .5){
World.setBlock(coords.x+1+3, coords.y+6, coords.z+2+3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+1+3, coords.y+6, coords.z+2+3);
}
	if(Math.random() < .5){
World.setBlock(coords.x+1-3, coords.y+6, coords.z+2+3, BlockID.listva_palmi, 0);
World.addTileEntity(coords.x+1-3, coords.y+6, coords.z+2+3);
}
}
			}
		}	}});