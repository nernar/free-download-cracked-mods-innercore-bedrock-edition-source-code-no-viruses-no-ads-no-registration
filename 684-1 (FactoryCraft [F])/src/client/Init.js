FactAPI.getBlockDrop = function(coords, id, data, tool) {
	var dropFunc = Block.dropFunctions[id];
	if (dropFunc) {
		return dropFunc(coords, id, data, ToolAPI.getToolLevel(tool), {});
	}
	return [[id, 1, data]];
}