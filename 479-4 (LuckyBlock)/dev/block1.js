var LUCKY_BLOCK = Block.createSpecialType({lightlevel: 5, destroytime: 0.1, explosionres: 30});
IDRegistry.genBlockID("luckyBlock1");
Block.createBlock("luckyBlock1", [{name: "Lucky Block", texture: [["Lucky_Block", 1], ["Lucky_Block", 1], ["Lucky_Block", 1], ["Lucky_Block", 1], ["Lucky_Block", 1], ["Lucky_Block", 1]], inCreative: true}], LUCKY_BLOCK);
Recipes.addShaped({id: BlockID.luckyBlock1, count: 1, data: 0}, ["aaa", "aba", "aaa"], ["a", 371, 0, "b", 125, 3]);
Block.registerDropFunction("luckyBlock1", function (coords, blockID, blockData, level) {
    var drop = getDropBlock();
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, drop.id, 1, drop.data);
    return [];
});
var LUCKY_CUBE_RANDOM_DROP = [{chance: 80, id: 1, data: 0}, {chance: 79, id: 2, data: 0}, {chance: 16, id: 14, data: 0}, {chance: 21, id: 15, data: 0}, {chance: 25, id: 16, data: 0}, {chance: 28, id: 21, data: 0}, {chance: 20, id: 22, data: 0}, {chance: 22, id: 25, data: 0}, {chance: 20, id: 33, data: 0}, {chance: 5, id: 41, data: 0}, {chance: 6, id: 42, data: 0}, {chance: 31, id: 47, data: 0}, {chance: 9, id: 52, data: 0}, {chance: 8, id: 56, data: 0}, {chance: 2, id: 57, data: 0}, {chance: 19, id: 73, data: 0}, {chance: 45, id: 81, data: 0}, {chance: 36, id: 103, data: 0}, {chance: 30, id: 110, data: 0}, {chance: 14, id: 116, data: 0}, {chance: 38, id: 89, data: 0}, {chance: 13, id: 117, data: 0}, {chance: 3, id: 133, data: 0}, {chance: 17, id: 129, data: 0}, {chance: 32, id: 268, data: 0}, {chance: 33, id: 269, data: 0}, {chance: 31, id: 270, data: 0}, {chance: 33, id: 271, data: 0}, {chance: 29, id: 272, data: 0}, {chance: 30, id: 273, data: 0}, {chance: 28, id: 274, data: 0}, {chance: 28, id: 275, data: 0}, {chance: 23, id: 267, data: 0}, {chance: 26, id: 256, data: 0}, {chance: 24, id: 257, data: 0}, {chance: 25, id: 258, data: 0}, {chance: 9, id: 276, data: 0}, {chance: 10, id: 277, data: 0}, {chance: 8, id: 278, data: 0}, {chance: 10, id: 279, data: 0}, {chance: 61, id: 280, data: 0}, {chance: 30, id: 261, data: 0}, {chance: 39, id: 263, data: 0}, {chance: 17, id: 264, data: 0}, {chance: 20, id: 265, data: 0}, {chance: 18, id: 266, data: 0}, {chance: 37, id: 283, data: 0}, {chance: 39, id: 284, data: 0}, {chance: 36, id: 285, data: 0}, {chance: 37, id: 286, data: 0}, {chance: 39, id: 298, data: 0}, {chance: 38, id: 299, data: 0}, {chance: 38, id: 300, data: 0}, {chance: 39, id: 301, data: 0}, {chance: 9, id: 302, data: 0}, {chance: 8, id: 303, data: 0}, {chance: 8, id: 304, data: 0}, {chance: 9, id: 305, data: 0}, {chance: 9, id: 306, data: 0}, {chance: 8, id: 307, data: 0}, {chance: 8, id: 308, data: 0}, {chance: 9, id: 309, data: 0}, {chance: 7, id: 310, data: 0}, {chance: 6, id: 311, data: 0}, {chance: 6, id: 312, data: 0}, {chance: 7, id: 313, data: 0}, {chance: 14, id: 314, data: 0}, {chance: 13, id: 315, data: 0}, {chance: 13, id: 316, data: 0}, {chance: 14, id: 317, data: 0}, {chance: 35, id: 320, data: 0}, {chance: 37, id: 355, data: 0}, {chance: 40, id: 346, data: 0}, {chance: 33, id: 348, data: 0}, {chance: 31, id: 329, data: 0}, {chance: 32, id: 340, data: 0}, {chance: 33, id: 372, data: 0}, {chance: 21, id: 145, data: 0}, {chance: 39, id: 384, data: 0}, {chance: 80, id: BlockID.luckyBlock2, data: 0}, {chance: 30, id: BlockID.luckyBlock3, data: 0}];
function getDropBlock() {
    var total = 0;
    for (var i in LUCKY_CUBE_RANDOM_DROP) {
        total += LUCKY_CUBE_RANDOM_DROP[i].chance;
    }
    var random = Math.random() * total * 1.4;
    var current = 0;
    for (var i in LUCKY_CUBE_RANDOM_DROP) {
        var drop = LUCKY_CUBE_RANDOM_DROP[i];
        if (current < random && current + drop.chance > random) {
            return drop;
        }
        current += drop.chance;
    }
    return {id: 0, data: 0};
}

