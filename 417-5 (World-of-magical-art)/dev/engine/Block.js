Block.getBlockDrop = function (coords, id, data, tool) {
    var dropFunc = Block.dropFunctions[id];
    if (dropFunc) {
        return dropFunc(coords, id, data, ToolAPI.getToolLevel(tool), {});
    }
    return [[id, 1, data]];
};

Block.setDestroyLevel = function (id, lvl) {
    Block.registerDropFunction(id, function (coords, blockID, blockData, level, enchant) {
        if (level >= lvl) {
            return [[blockID, 1, 0]];
        }
        return [];
    }, lvl);
};