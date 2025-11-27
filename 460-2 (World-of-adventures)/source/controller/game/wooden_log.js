Block.registerDropFunctionForID(162, function (coords, blockID, blockData, lvl, enchant) {
    if ((blockData == 0 || blockData == 4 || blockData == 8) && lvl >= 1) {
        return [[blockID, 1, 0]];
    }
    else if ((blockData == 1 || blockData == 5 || blockData == 9) && lvl >= 1) {
        return [[blockID, 1, 0]];
    }
    return [];
});

Block.registerDropFunctionForID(17, function (coords, blockID, blockData, lvl, enchant) {
    if ((blockData == 0 || blockData == 4 || blockData == 8) && lvl >= 1) {
        return [[blockID, 1, 0]];
    }
    else if ((blockData == 1 || blockData == 5 || blockData == 9) && lvl >= 1) {
        return [[blockID, 1, 0]];
    }
    else if ((blockData == 2 || blockData == 6 || blockData == 10) && lvl >= 1) {
        return [[blockID, 1, 0]];
    }
    else if ((blockData == 3 || blockData == 7 || blockData == 11) && lvl >= 1) {
        return [[blockID, 1, 0]];
    }
    return [];
});