IDRegistry.genBlockID("mco");
Block.createBlock("mco", [
	{name: "magic crystal ore", texture: [["mco", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.mco, "stone", 2, true);
Block.setDestroyLevel("mco", 20);

Block.registerDropFunction("mco", function(coords, blockID, blockData, level, enchant){
	if(level > 3){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.mc, 1, 0]];
		ToolAPI.dropOreExp(coords, 10, 30, enchant.experience);
		return drop;
	}
	return [];
}, 4);


Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=1;i<3;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 25);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.mco, 1, 3);
    }
}
)

IDRegistry.genItemID("mc");
Item.createItem("mc", "magic crystal", {name: "mc", meta: 0}, {stack: 10});
