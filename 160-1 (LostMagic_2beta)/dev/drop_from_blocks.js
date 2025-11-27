Block.registerDropFunction(BlockID.yellow_stone, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.YellowStoneShard, 1, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.ruby_ore, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.rubin, 1, 0]);
	return drop;
});
Block.registerDropFunction(BlockID.mishril_ore, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.mishril, 1, 0]);
	return drop;
});