var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 10,
	explosionres: 3
}, "stone");

IDRegistry.genBlockID("ogo");
Block.createBlock("ogo", [
	{name: "Obsidian gold ore", texture: [["ogo", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.ogo, "stone", 2, true);
Block.setDestroyLevel("ogo", 20);

Block.registerDropFunction("ogo", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[BlockID.ogo, 1, 0]];
		ToolAPI.dropOreExp(coords, 5, 15, enchant.experience);
		return drop;
	}
	return [];
}, 4);


Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=1;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 35);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ogo, 1, 4);
    }
}
)

IDRegistry.genItemID("og");
Item.createItem("og", "Obsidian gold", {name: "og", meta: 0}, {stack: 10});

Recipes.addFurnace(BlockID.ogo, ItemID.og, 0);