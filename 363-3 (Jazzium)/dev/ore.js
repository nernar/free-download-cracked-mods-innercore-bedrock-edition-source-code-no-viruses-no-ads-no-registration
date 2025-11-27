var BLOCK_TYPE_LOW_LIGHT = Block.createSpecialType({ // блок этого типа будет абсолютно прозрачен для света и сам будет слабо светиться
   lightlevel: 15,
   destroytime: 1
 });
 
 IDRegistry.genBlockID("jazzium_ore");
Block.createBlock("jazzium_ore", [
	{name: "Jazzium Ore", texture: [["jazzium_ore", 0], ["jazzium_ore", 0], ["jazzium_ore", 0], ["jazzium_ore", 0], ["jazzium_ore", 0], ["jazzium_ore", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jazzium_ore, "stone", 3, true);

Block.registerDropFunction("jazzium_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.jazzium_ore, 1, 0]]
	}
	return [];
}, 3);