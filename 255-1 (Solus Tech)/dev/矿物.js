var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 3,
	explosionres: 3
}, "stone");

IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper", [
	{name: "Copper Ore", texture: [["ore_copper", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
IDRegistry.genBlockID("ft_磁铁矿");
Block.createBlock("ft_磁铁矿", [
	{name: "Magnet Ore", texture: [["ft_磁铁矿", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oreCopper, "stone", 2, true);
Block.setDestroyLevel("oreCopper", 2);
ToolAPI.registerBlockMaterial(BlockID.ft_磁铁矿, "stone", 2, true);
Block.setDestroyLevel("ft_磁铁矿", 2);
function addnewore(id,data,count,max,min,heighest,lowest){
var amount=Math.floor(Math.random() * (max - min + 1)) + min;
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i = 0; i < count; i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, lowest, heighest);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, id, data, amount);
}});
};
addnewore(BlockID.oreCopper,0,25,10,4,1,52);
addnewore(BlockID.ft_磁铁矿,0,10,5,2,1,24);
