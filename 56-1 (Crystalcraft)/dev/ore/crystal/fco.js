IDRegistry.genBlockID("fco");
Block.createBlock("fco", [
	{name: "fire crystal ore", texture: [["fco", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.fco, "stone", 2, true);
Block.setDestroyLevel("fco", 20);

Block.registerDropFunction("fco", function(coords, blockID, blockData, level, enchant){
	if(level > 3){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.fc, 1, 0]];
		ToolAPI.dropOreExp(coords, 10, 30, enchant.experience);
		return drop;
	}
	return [];
}, 4);


Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=1;i<3;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 25);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.fco, 1, 3);
    }
}
)

IDRegistry.genItemID("fc");
Item.createItem("fc", "fire crystal", {name: "fc", meta: 0}, {stack: 10});
