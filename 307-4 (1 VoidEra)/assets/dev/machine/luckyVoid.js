IDRegistry.genBlockID("luckyVoid"); Block.createBlock("luckyVoid", [ {name: "luckyVoid", texture: [["luckyVoid", 0]], inCreative: true} ]);

Block.registerDropFunction("luckyVoid", function(coords, blockID, blockData, level){
	var drop = getDropBlock();
	World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, drop.id, 1, drop.data);
	return [];
});

var LUCKY_VOID_RANDOM_DROP = [
	{chance: 23, id: BlockID.machineBlockBasic, data: 0},
	{chance: 11, id: BlockID.machineBlockAdvanced, data: 0},
	{chance: 34, id: BlockID.cableOptic, data: 0},
	{chance: 50, id: BlockID.blockCopper, data: 0},
	{chance: 50, id: BlockID.blockTin, data: 0},
	{chance: 50, id: BlockID.blockBronze, data: 0},
	{chance: 50, id: BlockID.blockLead, data: 0},
	{chance: 50, id: BlockID.blockSteel, data: 0},
	{chance: 70, id: BlockID.oreUranium, data: 0},
	{chance: 80, id: BlockID.oreIridium, data: 0},
	{chance: 80, id: ItemID.iridiumChunk, data: 0},
	{chance: 80, id: ItemID.Vajra, data: 0},
	];
	
function getDropBlock(){
	var total = 0;
	for (var i in LUCKY_VOID_RANDOM_DROP){
		total += LUCKY_VOID_RANDOM_DROP[i].chance;
	}
	var random = Math.random() * total * 1.4;
	var current = 0;
	for (var i in LUCKY_VOID_RANDOM_DROP){
		var drop = LUCKY_VOID_RANDOM_DROP[i];
		if (current < random && current + drop.chance > random){
			return drop;
		}
		current += drop.chance;
	}
	return {id: 0, data: 0};
}

