IMPORT("TileRender");
function random(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

IDRegistry.genItemID("lapis_lotus");
Item.createItem("lapis_lotus", "Lapis Lotus", {name: "lapis_lotus", data: 0});

Item.registerUseFunction("lapis_lotus", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);
	
	if (GenerationUtils.isTransparentBlock(tile1.id) && DIRT_TILES[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.lapis_lotus);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});

IDRegistry.genBlockID("lapis_lotus");
Block.createBlock("lapis_lotus", [
	{name: "Lapis Lotus", texture: [["lapis_lotus", 0]], inCreative: false}
]);
Block.setDestroyTime(BlockID.lapis_lotus, 0);
TileRenderer.setPlantModel(BlockID.lapis_lotus, 0, "lapis_lotus", 0);

Block.registerDropFunction("lapis_lotus", function(){
	return [[ItemID.lapis_lotus, 1, 0]];
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
	if(World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.lapis_lotus){
		World.destroyBlock(coords.x, coords.y + 1, coords.z);
	}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < 0.05){
		for(var i = 0; i < random(2, 8); i++){
			var c = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
			c = GenerationUtils.findSurface(c.x, c.y, c.z);
			if(World.getBlockID(c.x, c.y, c.z) == 2 && World.getBlockID(c.x, c.y + 1, c.z) == 0){
				World.setBlock(c.x, c.y + 1, c.z, BlockID.lapis_lotus, 0);
			}
		}
	}
});

Callback.addCallback("ItemUse", function(coords, item, block){
	if(item.id == 351 && item.data == 15 && block.id == 2 && coords.side == 1){
		let x = coords.x + random(-3, 3), z = coords.z + random(-3, 3);
		if(World.getBlockID(x, coords.y, z) == 2 && World.getBlockID(x, coords.y + 1, z) == 0){
			World.setBlock(x, coords.y + 1, z, BlockID.lapis_lotus, 0);
		}
	}
});