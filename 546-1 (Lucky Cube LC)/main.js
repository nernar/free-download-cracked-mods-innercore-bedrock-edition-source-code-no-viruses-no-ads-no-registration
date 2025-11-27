var BLOCK_TYPE_LOW_LIGHT = Block.createSpecialType({
lightlevel: 3,
lightopacity: 15 });

IDRegistry.genBlockID("luckyCubeLC"); Block.createBlock("luckyCubeLC", [ {name: "Lucky Cube LC", texture: [["LuckyCubeLC", 0], ["LuckyCubeLC", 0], ["LuckyCubeLC", 0], ["LuckyCubeLC", 0], ["LuckyCubeLC", 0], ["LuckyCubeLC", 0]], inCreative: true} ], BLOCK_TYPE_LOW_LIGHT);

Recipes.addShaped({id: BlockID.luckyCubeLC, count: 1, data: 0}, [ "aaa", "aba", "aca" ], ['a', ItemID.leafGreen, 0, 'b', 264, 0, 'c', 54, 0]);

Block.registerDropFunction("luckyCubeLC", function(coords, blockID, blockData, level){
	var drop = getDropBlock();
	World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, drop.id, 1, drop.data);
	return [];
});

var LUCKY_LC_RANDOM_DROP = [
	{chance: 40, id: ItemID.leafGreen, data: 0},
	{chance: 30, id: ItemID.leafStone, data: 0},
		{chance:20, id: ItemID.leafIron, data: 0},
	{chance: 20, id: ItemID.leafGold, data: 0},
	{chance: 10, id: ItemID.leafDiamond},	{chance: 15, id: ItemID.leafDry, data: 0},
	{chance: 15, id: ItemID.leafMystery, data: 0},
	
	];
	
function getDropBlock(){
	var total = 0;
	for (var i in LUCKY_LC_RANDOM_DROP){
		total += LUCKY_LC_RANDOM_DROP[i].chance;
	}
	var random = Math.random() * total * 1.4;
	var current = 0;
	for (var i in LUCKY_LC_RANDOM_DROP){
		var drop = LUCKY_LC_RANDOM_DROP[i];
		if (current < random && current + drop.chance > random){
			return drop;
		}
		current += drop.chance;
	}
	return {id: 0, data: 0};
}

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.2){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
        World.setBlock(coords.x,coords.y,  coords.z, BlockID.luckyCubeLC, 0);
        }}});