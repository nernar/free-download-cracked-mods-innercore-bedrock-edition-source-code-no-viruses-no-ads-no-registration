IDRegistry.genBlockID("yellow_stone");
Block.createBlock("yellow_stone", [{name: "Камень созвездии", texture: [["yellow_stone", 0], ["yellow_stone", 0], ["yellow_stone", 0], ["yellow_stone", 0], ["yellow_stone", 0], ["yellow_stone", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.yellow_stone, {x: 1/16, y: 0, z: 2/16}, {x: 6/16, y: 1/16, z: 7/16})
var YellowStoneShard = [1,2,35,37,4,18,27,28,13,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var id in YellowStoneShard ){			if((World.getBiome((chunkX + 0.5) * 20, (chunkZ + 0.5) * 20)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2 && 243)){				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.yellow_stone, 0);				World.addTileEntity(coords.x, coords.y + 1, coords.z);								}	}});
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.yellow_stone) 
{
Game.prevent();
}});