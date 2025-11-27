IDRegistry.genBlockID("mixed_ore");
Block.createBlock("mixed_ore", [
	{name: "Смешенная Руда", texture: [["mixed_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.mixed_ore, "stone", 3, true);

Block.registerDropFunction("mixed_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[14, 1, 0]]
}
	return [];
}, 3);

Block.registerDropFunctionForID(BlockID.mixed_ore, function(coords, id, data, diggingLevel, toolLevel){
     return [[15, 1, 0], [16, 1, 0], [14, 1, 0], [56, 1, 0]]; 
});