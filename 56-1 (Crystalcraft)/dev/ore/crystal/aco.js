IDRegistry.genBlockID("aco");
Block.createBlock("aco", [
	{name: "air crystal ore", texture: [["aco", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.aco, "stone", 2, true);
Block.setDestroyLevel("aco", 20);

Block.registerDropFunction("aco", function(coords, blockID, blockData, level, enchant){
	if(level > 3){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.ac, 1, 0]];
		ToolAPI.dropOreExp(coords, 10, 30, enchant.experience);
		return drop;
	}
	return [];
}, 4);


Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=1;i<3;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 25);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.aco, 1, 3);
    }
}
)

IDRegistry.genItemID("ac");
Item.createItem("ac", "air crystal", {name: "ac", meta: 0}, {stack: 10});
