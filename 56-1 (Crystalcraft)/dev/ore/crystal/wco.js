IDRegistry.genBlockID("wco");
Block.createBlock("wco", [
	{name: "water crystal ore", texture: [["wco", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.wco, "stone", 2, true);
Block.setDestroyLevel("wco", 20);

Block.registerDropFunction("wco", function(coords, blockID, blockData, level, enchant){
	if(level > 3){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.wc, 1, 0]];
		ToolAPI.dropOreExp(coords, 10, 30, enchant.experience);
		return drop;
	}
	return [];
}, 4);


Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=1;i<3;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 25);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.wco, 1, 3);
    }
}
)

IDRegistry.genItemID("wc");
Item.createItem("wc", "water crystal", {name: "wc", meta: 0}, {stack: 10});
