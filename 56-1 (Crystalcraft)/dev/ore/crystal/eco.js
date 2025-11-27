IDRegistry.genBlockID("eco");
Block.createBlock("eco", [
	{name: "earth crystal ore", texture: [["eco", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.eco, "stone", 2, true);
Block.setDestroyLevel("eco", 20);

Block.registerDropFunction("eco", function(coords, blockID, blockData, level, enchant){
	if(level > 3){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.ec, 1, 0]];
		ToolAPI.dropOreExp(coords, 10, 30, enchant.experience);
		return drop;
	}
	return [];
}, 4);


Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=1;i<3;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 25);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.eco, 1, 3);
    }
}
)

IDRegistry.genItemID("ec");
Item.createItem("ec", "earth crystal", {name: "ec", meta: 0}, {stack: 10});
