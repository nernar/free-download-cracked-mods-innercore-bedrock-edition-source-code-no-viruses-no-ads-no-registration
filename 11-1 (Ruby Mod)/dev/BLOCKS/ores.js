var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 2
}, "stone");



IDRegistry.genBlockID("rubyore");
Block.createBlock("rubyore", [
	{name: "Ruby Ore", texture: [["rubyore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.rubyore, "stone", 3, true);

Block.registerDropFunction("rubyore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.ruby, 1, 0]]
	}
	return [];
}, 3);



IDRegistry.genBlockID("rubyblock");
Block.createBlock("rubyblock", [
	{name: "Ruby Block", texture: [["rubyblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.rubyblock, "stone", 2, true);
Block.setDestroyLevel("rubyblock", 2);



IDRegistry.genBlockID("hardenedrubyblock");
Block.createBlock("hardenedrubyblock", [
	{name: "Hardened Ruby Block", texture: [["hardenedrubyblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.hardenedrubyblock, "stone", 2, true);
Block.setDestroyLevel("hardenedrubyblock", 2);






Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 60);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.rubyore,
   data: 0,
   size: 6,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});