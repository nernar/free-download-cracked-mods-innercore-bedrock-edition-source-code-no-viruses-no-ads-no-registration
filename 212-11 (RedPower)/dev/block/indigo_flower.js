Block.createSpecialType({
	base: 59,
	destroytime: 0,
	explosionres: 0,
	opaque: false,
	lightopacity: 0,
}, "plant");

var DIRT_TILES = {
	2: true,
	3: true,
	60: true
};

IDRegistry.genItemID("indigoFlower");
Item.createItem("indigoFlower", "Indigo Flower", {name: "indigo_flower", data: 0});

Item.registerUseFunction("indigoFlower", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);
	
	if (GenerationUtils.isTransparentBlock(tile1.id) && DIRT_TILES[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.indigoFlower);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShapeless({id: ItemID.indigoDye, count: 2, data: 0}, [{id: ItemID.indigoFlower, data: 0}]);
});

IDRegistry.genBlockID("indigoFlower");
Block.createBlock("indigoFlower", [
	{name: "Indigo Flower", texture: [["indigo_flower", 0]], inCreative: false}
]);
Block.setDestroyTime(BlockID.indigoFlower, 0);
TileRenderer.setPlantModel(BlockID.indigoFlower, 0, "indigo_flower", 0);

Block.registerDropFunction("indigoFlower", function(){
	return [[ItemID.indigoFlower, 1, 0]];
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
	if(World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.indigoFlower){
		World.destroyBlock(coords.x, coords.y + 1, coords.z);
	}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < 0.05){
		for(var i = 0; i < random(2, 8); i++){
			var c = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
			c = GenerationUtils.findSurface(c.x, c.y, c.z);
			if(World.getBlockID(c.x, c.y, c.z) == 2 && World.getBlockID(c.x, c.y + 1, c.z) == 0){
				World.setBlock(c.x, c.y + 1, c.z, BlockID.indigoFlower, 0);
			}
		}
	}
});

// bone use
Callback.addCallback("ItemUse", function(coords, item, block){
	if(item.id == 351 && item.data == 15 && block.id == 2 && coords.side == 1){
		let x = coords.x + random(-3, 3), z = coords.z + random(-3, 3);
		if(World.getBlockID(x, coords.y, z) == 2 && World.getBlockID(x, coords.y + 1, z) == 0){
			World.setBlock(x, coords.y + 1, z, BlockID.indigoFlower, 0);
		}
	}
});
