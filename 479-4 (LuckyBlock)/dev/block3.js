var LUCKY_BLOCK = Block.createSpecialType({lightlevel: 5, destroytime: 0.1, explosionres: 30});
IDRegistry.genBlockID("luckyBlock3");
Block.createBlock("luckyBlock3", [{name: "Lucky Block", texture: [["Lucky_Block", 3]], inCreative: true}], LUCKY_BLOCK);
ToolAPI.registerBlockMaterial(BlockID.luckyBlock3, "dirt");
Recipes.addShaped({id: BlockID.luckyBlock3, count: 1, data: 0}, ["ccc", "aba", "ccc"], ["a", 264, 0, "b", BlockID.luckyBlock1, 0, "c", 266, 0]);
Block.registerDropFunction("luckyBlock3", function (coords, blockID, blockData, level) {
    var IR = Math.round(Math.random() * 62);
    var pos = Player.getPosition();
    if (IR == 0) {
        return [[344, Math.round(Math.random() * 16), 0]];
    }
    if (IR == 1) {
        return [[388, Math.round(Math.random() * 18), 0]];
    }
    if (IR == 2) {
        return [[322, Math.round(Math.random() * 10), 0]];
    }
    if (IR == 3) {
        return [[396, Math.round(Math.random() * 16), 0]];
    }
    if (IR == 4) {
        return [[466, Math.round(Math.random() * 5), 0]];
    }
    if (IR == 5) {
        return [[399, 1, 0]];
    }
    if (IR == 6) {
        World.setBlock(pos.x, pos.y - 1, pos.z, 10, 0);
        return [[0, 0, 0]];
    }
    if (IR == 7) {
        return [[276, 1, 0], [277, 1, 0], [278, 1, 0], [279, 1, 0]];
    }
    if (IR == 8) {
        return [[283, 1, 0], [284, 1, 0], [285, 1, 0], [286, 1, 0]];
    }
    if (IR == 9) {
        return [[368, Math.round(Math.random() * 16), 0]];
    }
    if (IR == 10) {
        return [[20, Math.round(Math.random() * 32), 0]];
    }
    if (IR == 11) {
        return [[367, Math.round(Math.random() * 16), 0]];
    }
    if (IR == 12) {
        return [[444, 1, 0]];
    }
    if (IR == 13) {
        return [[264, Math.round(Math.random() * 18), 0]];
    }
    if (IR == 14) {
        return [[382, Math.round(Math.random() * 16), 0]];
    }
    if (IR == 15) {
        return [[346, 1, 0]];
    }
    if (IR == 16) {
        return [[400, Math.round(Math.random() * 16), 0]];
    }
    if (IR == 17) {
        return [[268, 1, 0], [269, 1, 0], [270, 1, 0], [271, 1, 0]];
    }
    if (IR == 18) {
        return [[46, Math.round(Math.random() * 24), 0]];
    }
    if (IR == 19) {
        return [[290, 1, 0], [291, 1, 0], [292, 1, 0], [293, 1, 0], [294, 1, 0]];
    }
    if (IR == 20) {
        return [[315, 1, 0], [317, 1, 0]];
    }
    if (IR == 21) {
        return [[307, 1, 0], [309, 1, 0]];
    }
    if (IR == 22) {
        return [[311, 1, 0], [313, 1, 0]];
    }
    if (IR == 23) {
        return [[298, 1, 0], [299, 1, 0], [300, 1, 0], [301, 1, 0]];
    }
    if (IR == 24) {
        return [[306, 1, 0], [307, 1, 0], [308, 1, 0], [309, 1, 0]];
    }
    if (IR == 25) {
        return [[314, 1, 0], [315, 1, 0], [316, 1, 0], [317, 1, 0]];
    }
    if (IR == 26) {
        return [[310, 1, 0], [311, 1, 0], [312, 1, 0], [313, 1, 0]];
    }
    if (IR == 27) {
        return [[BlockID.luckyBlock1, Math.round(Math.random() * 16), 0]];
    }
    if (IR == 28) {
        return [[BlockID.luckyBlock2, Math.round(Math.random() * 16), 0]];
    }
    if (IR == 29) {
        return [[261, 1, 0], [262, 64, 0]];
    }
    if (IR == 30) {
        return [[42, 4, 0], [86, 1, 0]];
    }
    if (IR == 31) {
        return [[416, 1, 0], [417, 1, 0], [418, 1, 0], [419, 1, 0]];
    }
    if (IR == 32) {
        return [[325, 1, 0], [325, 1, 1], [325, 1, 8], [325, 1, 10]];
    }
    if (IR == 33) {
        World.setBlock(coords.x - 1, coords.y, coords.z, 173, 0);
        return [[0, 0, 0]];
    }
    if (IR == 34) {
        World.setBlock(coords.x - 1, coords.y, coords.z, 42, 0);
        return [[0, 0, 0]];
    }
    if (IR == 35) {
        World.setBlock(coords.x - 1, coords.y, coords.z, 152, 0);
        return [[0, 0, 0]];
    }
    if (IR == 36) {
        World.setBlock(coords.x - 1, coords.y, coords.z, 22, 0);
        return [[0, 0, 0]];
    }
    if (IR == 37) {
        World.setBlock(coords.x - 1, coords.y, coords.z, 57, 0);
        return [[0, 0, 0]];
    }
    if (IR == 38) {
        World.setBlock(coords.x - 1, coords.y, coords.z, 133, 0);
        return [[0, 0, 0]];
    }
    if (IR == 39) {
        World.setBlock(coords.x - 1, coords.y, coords.z, 7, 0);
        return [[0, 0, 0]];
    }
    if (IR == 40) {
        World.setBlock(coords.x - 1, coords.y, coords.z, 92, 0);
        return [[0, 0, 0]];
    }
    if (IR == 41) {
        World.setBlock(coords.x - 1, coords.y, coords.z, 122, 0);
        return [[0, 0, 0]];
    }
    if (IR == 42) {
        return [[14, Math.round(Math.random() * 10), 0], [15, Math.round(Math.random() * 10), 0], [16, Math.round(Math.random() * 10), 0], [21, Math.round(Math.random() * 10), 0], [56, Math.round(Math.random() * 8), 0], [73, Math.round(Math.random() * 10), 0], [129, Math.round(Math.random() * 5), 0], [153, Math.round(Math.random() * 5), 0]];
    }
    if (IR == 43) {
        World.explode(pos.x, pos.y - 1, pos.z, 5, true);
        Game.message("boom!");
        return [[0, 0, 0]];
    }
    if (IR == 44) {
        Entity.spawn(coords.x, coords.y, coords.z, 52);
        return [[0, 0, 0]];
    }
    if (IR == 45) {
        Entity.spawn(coords.x, coords.y, coords.z, 14);
        return [[352, 16, 0]];
    }
    if (IR == 46) {
        Entity.spawn(coords.x, coords.y, coords.z, 23);
        Entity.spawn(coords.x, coords.y, coords.z, 23);
        Entity.spawn(coords.x, coords.y, coords.z, 23);
        return [[329, 1, 0]];
    }
    if (IR == 47) {
        Entity.spawn(coords.x, coords.y, coords.z, 21);
        Entity.spawn(coords.x, coords.y, coords.z, 21);
        Entity.spawn(coords.x, coords.y, coords.z, 21);
        return [[0, 0, 0]];
    }
    if (IR == 48) {
        Entity.spawn(coords.x, coords.y, coords.z, 12);
        Entity.spawn(coords.x, coords.y, coords.z, 12);
        Entity.spawn(coords.x, coords.y, coords.z, 12);
        Entity.spawn(coords.x, coords.y + 1, coords.z, 93);
        return [[0, 0, 0]];
    }
    if (IR == 49) {
        Entity.spawn(coords.x, coords.y, coords.z, 33);
        Entity.spawn(coords.x, coords.y, coords.z, 33);
        Entity.spawn(coords.x, coords.y, coords.z, 33);
        Entity.spawn(coords.x, coords.y + 1, coords.z, 93);
        return [[0, 0, 0]];
    }
    if (IR == 50) {
        Entity.spawn(pos.x, pos.y + 15, pos.z + 4, 65);
        Entity.spawn(pos.x - 3, pos.y + 15, pos.z + 3, 65);
        Entity.spawn(pos.x + 3, pos.y + 15, pos.z + 3, 65);
        Entity.spawn(pos.x + 4, pos.y + 15, pos.z, 65);
        Entity.spawn(pos.x - 4, pos.y + 15, pos.z, 65);
        Entity.spawn(pos.x, pos.y + 15, pos.z - 4, 65);
        Entity.spawn(pos.x + 3, pos.y + 15, pos.z - 3, 65);
        Entity.spawn(pos.x - 3, pos.y + 15, pos.z - 3, 65);
        Game.message("boom!");
        return [[0, 0, 0]];
    }
    if (IR == 51) {
        World.setBlock(coords.x - 1, coords.y, coords.z, 117, 0);
        World.setBlock(coords.x - 2, coords.y, coords.z, 118, 0);
        return [[0, 0, 0]];
    }
    if (IR == 52) {
        World.setBlock(coords.x - 1, coords.y, coords.z, 49, 0);
        World.setBlock(coords.x, coords.y + 1, coords.z, 49, 0);
        World.setBlock(coords.x - 1, coords.y + 1, coords.z, 133, 0);
        World.setBlock(coords.x - 2, coords.y + 1, coords.z, 49, 0);
        World.setBlock(coords.x - 1, coords.y + 1, coords.z + 1, 49, 0);
        World.setBlock(coords.x - 1, coords.y + 1, coords.z - 1, 49, 0);
        World.setBlock(coords.x - 1, coords.y + 2, coords.z, 49, 0);
        return [[0, 0, 0]];
    }
    if (IR == 53) {
        World.setBlock(coords.x - 1, coords.y, coords.z, 47, 0);
        World.setBlock(coords.x - 2, coords.y, coords.z, 47, 0);
        World.setBlock(coords.x - 4, coords.y, coords.z, 47, 0);
        World.setBlock(coords.x - 5, coords.y, coords.z, 47, 0);
        World.setBlock(coords.x - 1, coords.y, coords.z - 1, 47, 0);
        World.setBlock(coords.x - 5, coords.y, coords.z - 1, 47, 0);
        World.setBlock(coords.x - 3, coords.y, coords.z - 2, 116, 0);
        World.setBlock(coords.x - 1, coords.y, coords.z - 3, 47, 0);
        World.setBlock(coords.x - 5, coords.y, coords.z - 3, 47, 0);
        World.setBlock(coords.x - 1, coords.y, coords.z - 4, 47, 0);
        World.setBlock(coords.x - 2, coords.y, coords.z - 4, 47, 0);
        World.setBlock(coords.x - 4, coords.y, coords.z - 4, 47, 0);
        World.setBlock(coords.x - 5, coords.y, coords.z - 4, 47, 0);
        World.setBlock(coords.x - 1, coords.y + 1, coords.z, 47, 0);
        World.setBlock(coords.x - 5, coords.y + 1, coords.z, 47, 0);
        World.setBlock(coords.x - 1, coords.y + 1, coords.z - 4, 47, 0);
        World.setBlock(coords.x - 5, coords.y + 1, coords.z - 4, 47, 0);
        return [[0, 0, 0]];
    }
    if (IR == 54) {
        World.setBlock(pos.x - 1, pos.y - 1, pos.z, 101, 0);
        World.setBlock(pos.x + 1, pos.y - 1, pos.z, 101, 0);
        World.setBlock(pos.x, pos.y - 1, pos.z - 1, 101, 0);
        World.setBlock(pos.x - 1, pos.y - 1, pos.z - 1, 101, 0);
        World.setBlock(pos.x + 1, pos.y - 1, pos.z - 1, 101, 0);
        World.setBlock(pos.x, pos.y - 1, pos.z + 1, 101, 0);
        World.setBlock(pos.x - 1, pos.y - 1, pos.z + 1, 101, 0);
        World.setBlock(pos.x + 1, pos.y - 1, pos.z + 1, 101, 0);
        World.setBlock(pos.x - 1, pos.y, pos.z, 101, 0);
        World.setBlock(pos.x + 1, pos.y, pos.z, 101, 0);
        World.setBlock(pos.x, pos.y, pos.z - 1, 101, 0);
        World.setBlock(pos.x - 1, pos.y, pos.z - 1, 101, 0);
        World.setBlock(pos.x + 1, pos.y, pos.z - 1, 101, 0);
        World.setBlock(pos.x, pos.y, pos.z + 1, 101, 0);
        World.setBlock(pos.x - 1, pos.y, pos.z + 1, 101, 0);
        World.setBlock(pos.x + 1, pos.y, pos.z + 1, 101, 0);
        World.setBlock(pos.x - 1, pos.y + 1, pos.z, 101, 0);
        World.setBlock(pos.x + 1, pos.y + 1, pos.z, 101, 0);
        World.setBlock(pos.x, pos.y + 1, pos.z - 1, 101, 0);
        World.setBlock(pos.x - 1, pos.y + 1, pos.z - 1, 101, 0);
        World.setBlock(pos.x + 1, pos.y + 1, pos.z - 1, 101, 0);
        World.setBlock(pos.x, pos.y + 1, pos.z + 1, 101, 0);
        World.setBlock(pos.x - 1, pos.y + 1, pos.z + 1, 101, 0);
        World.setBlock(pos.x + 1, pos.y + 1, pos.z + 1, 101, 0);
        World.setBlock(pos.x, pos.y + 15, pos.z, 145, 0);
        return [[0, 0, 0]];
    }
    if (IR == 55) {
        World.setBlock(pos.x - 1, pos.y - 1, pos.z, 101, 0);
        World.setBlock(pos.x + 1, pos.y - 1, pos.z, 101, 0);
        World.setBlock(pos.x, pos.y - 1, pos.z - 1, 101, 0);
        World.setBlock(pos.x - 1, pos.y - 1, pos.z - 1, 101, 0);
        World.setBlock(pos.x + 1, pos.y - 1, pos.z - 1, 101, 0);
        World.setBlock(pos.x, pos.y - 1, pos.z + 1, 101, 0);
        World.setBlock(pos.x - 1, pos.y - 1, pos.z + 1, 101, 0);
        World.setBlock(pos.x + 1, pos.y - 1, pos.z + 1, 101, 0);
        World.setBlock(pos.x - 1, pos.y, pos.z, 101, 0);
        World.setBlock(pos.x + 1, pos.y, pos.z, 101, 0);
        World.setBlock(pos.x, pos.y, pos.z - 1, 101, 0);
        World.setBlock(pos.x - 1, pos.y, pos.z - 1, 101, 0);
        World.setBlock(pos.x + 1, pos.y, pos.z - 1, 101, 0);
        World.setBlock(pos.x, pos.y, pos.z + 1, 101, 0);
        World.setBlock(pos.x - 1, pos.y, pos.z + 1, 101, 0);
        World.setBlock(pos.x + 1, pos.y, pos.z + 1, 101, 0);
        World.setBlock(pos.x - 1, pos.y + 1, pos.z, 101, 0);
        World.setBlock(pos.x + 1, pos.y + 1, pos.z, 101, 0);
        World.setBlock(pos.x, pos.y + 1, pos.z - 1, 101, 0);
        World.setBlock(pos.x - 1, pos.y + 1, pos.z - 1, 101, 0);
        World.setBlock(pos.x + 1, pos.y + 1, pos.z - 1, 101, 0);
        World.setBlock(pos.x, pos.y + 1, pos.z + 1, 101, 0);
        World.setBlock(pos.x - 1, pos.y + 1, pos.z + 1, 101, 0);
        World.setBlock(pos.x + 1, pos.y + 1, pos.z + 1, 101, 0);
        World.setBlock(pos.x, pos.y + 1, pos.z, 10, 0);
        return [[0, 0, 0]];
    }
    if (IR == 56) {
        World.setBlock(pos.x, pos.y - 2, pos.z, 49, 0);
        World.setBlock(pos.x - 1, pos.y - 2, pos.z, 49, 0);
        World.setBlock(pos.x + 1, pos.y - 2, pos.z, 49, 0);
        World.setBlock(pos.x, pos.y - 2, pos.z - 1, 49, 0);
        World.setBlock(pos.x - 1, pos.y - 2, pos.z - 1, 49, 0);
        World.setBlock(pos.x + 1, pos.y - 2, pos.z - 1, 49, 0);
        World.setBlock(pos.x, pos.y - 2, pos.z + 1, 49, 0);
        World.setBlock(pos.x - 1, pos.y - 2, pos.z + 1, 49, 0);
        World.setBlock(pos.x + 1, pos.y - 2, pos.z + 1, 49, 0);
        World.setBlock(pos.x, pos.y - 1, pos.z, 8, 0);
        World.setBlock(pos.x - 1, pos.y - 1, pos.z, 49, 0);
        World.setBlock(pos.x + 1, pos.y - 1, pos.z, 49, 0);
        World.setBlock(pos.x, pos.y - 1, pos.z - 1, 49, 0);
        World.setBlock(pos.x - 1, pos.y - 1, pos.z - 1, 49, 0);
        World.setBlock(pos.x + 1, pos.y - 1, pos.z - 1, 49, 0);
        World.setBlock(pos.x, pos.y - 1, pos.z + 1, 49, 0);
        World.setBlock(pos.x - 1, pos.y - 1, pos.z + 1, 49, 0);
        World.setBlock(pos.x + 1, pos.y - 1, pos.z + 1, 49, 0);
        World.setBlock(pos.x, pos.y, pos.z, 8, 0);
        World.setBlock(pos.x - 1, pos.y, pos.z, 20, 0);
        World.setBlock(pos.x + 1, pos.y, pos.z, 20, 0);
        World.setBlock(pos.x, pos.y, pos.z - 1, 20, 0);
        World.setBlock(pos.x - 1, pos.y, pos.z - 1, 49, 0);
        World.setBlock(pos.x + 1, pos.y, pos.z - 1, 49, 0);
        World.setBlock(pos.x, pos.y, pos.z + 1, 20, 0);
        World.setBlock(pos.x - 1, pos.y, pos.z + 1, 49, 0);
        World.setBlock(pos.x + 1, pos.y, pos.z + 1, 49, 0);
        World.setBlock(pos.x, pos.y + 1, pos.z, 49, 0);
        World.setBlock(pos.x - 1, pos.y + 1, pos.z, 49, 0);
        World.setBlock(pos.x + 1, pos.y + 1, pos.z, 49, 0);
        World.setBlock(pos.x, pos.y + 1, pos.z - 1, 49, 0);
        World.setBlock(pos.x - 1, pos.y + 1, pos.z - 1, 49, 0);
        World.setBlock(pos.x + 1, pos.y + 1, pos.z - 1, 49, 0);
        World.setBlock(pos.x, pos.y + 1, pos.z + 1, 49, 0);
        World.setBlock(pos.x - 1, pos.y + 1, pos.z + 1, 49, 0);
        World.setBlock(pos.x + 1, pos.y + 1, pos.z + 1, 49, 0);
        return [[0, 0, 0]];
    }
    if (IR == 57) {
        World.setBlock(pos.x, pos.y - 2, pos.z, 30, 0);
        World.setBlock(pos.x - 1, pos.y - 2, pos.z, 30, 0);
        World.setBlock(pos.x + 1, pos.y - 2, pos.z, 30, 0);
        World.setBlock(pos.x, pos.y - 2, pos.z - 1, 30, 0);
        World.setBlock(pos.x - 1, pos.y - 2, pos.z - 1, 30, 0);
        World.setBlock(pos.x + 1, pos.y - 2, pos.z - 1, 30, 0);
        World.setBlock(pos.x, pos.y - 2, pos.z + 1, 30, 0);
        World.setBlock(pos.x - 1, pos.y - 2, pos.z + 1, 30, 0);
        World.setBlock(pos.x + 1, pos.y - 2, pos.z + 1, 30, 0);
        World.setBlock(pos.x, pos.y - 3, pos.z, 10, 0);
        World.setBlock(pos.x - 1, pos.y - 3, pos.z, 10, 0);
        World.setBlock(pos.x + 1, pos.y - 3, pos.z, 10, 0);
        World.setBlock(pos.x, pos.y - 3, pos.z - 1, 10, 0);
        World.setBlock(pos.x - 1, pos.y - 3, pos.z - 1, 10, 0);
        World.setBlock(pos.x + 1, pos.y - 3, pos.z - 1, 10, 0);
        World.setBlock(pos.x, pos.y - 3, pos.z + 1, 10, 0);
        World.setBlock(pos.x - 1, pos.y - 3, pos.z + 1, 10, 0);
        World.setBlock(pos.x + 1, pos.y - 3, pos.z + 1, 10, 0);
        return [[0, 0, 0]];
    }
    if (IR == 58) {
        World.setBlock(coords.x - 1, coords.y, coords.z, 15, 0);
        World.setBlock(coords.x - 1, coords.y + 1, coords.z, 73, 0);
        World.setBlock(coords.x - 1, coords.y + 2, coords.z, 21, 0);
        World.setBlock(coords.x - 1, coords.y + 3, coords.z, 56, 0);
        World.setBlock(coords.x - 1, coords.y + 4, coords.z, 16, 0);
        World.setBlock(coords.x - 1, coords.y + 5, coords.z, 14, 0);
        World.setBlock(coords.x - 1, coords.y + 6, coords.z, 153, 0);
        World.setBlock(coords.x - 1, coords.y + 7, coords.z, 129, 0);
        World.setBlock(coords.x - 1, coords.y + 8, coords.z, 15, 0);
        World.setBlock(coords.x - 1, coords.y + 9, coords.z, 73, 0);
        World.setBlock(coords.x - 1, coords.y + 10, coords.z, 21, 0);
        World.setBlock(coords.x - 1, coords.y + 11, coords.z, 56, 0);
        World.setBlock(coords.x - 1, coords.y + 12, coords.z, 16, 0);
        World.setBlock(coords.x - 1, coords.y + 13, coords.z, 14, 0);
        World.setBlock(coords.x - 1, coords.y + 14, coords.z, 153, 0);
        World.setBlock(coords.x - 1, coords.y + 15, coords.z, 129, 0);
        World.setBlock(coords.x - 1, coords.y + 16, coords.z, 15, 0);
        World.setBlock(coords.x - 1, coords.y + 17, coords.z, 73, 0);
        World.setBlock(coords.x - 1, coords.y + 18, coords.z, 21, 0);
        World.setBlock(coords.x - 1, coords.y + 19, coords.z, 56, 0);
        World.setBlock(coords.x - 1, coords.y + 20, coords.z, 16, 0);
        World.setBlock(coords.x - 1, coords.y + 21, coords.z, 14, 0);
        World.setBlock(coords.x - 1, coords.y + 22, coords.z, 153, 0);
        World.setBlock(coords.x - 1, coords.y + 23, coords.z, 129, 0);
        return [[0, 0, 0]];
    }
    if (IR == 59) {
        World.setBlock(coords.x - 1, coords.y - 1, coords.z, 42, 0);
        World.setBlock(coords.x - 2, coords.y - 1, coords.z, 41, 0);
        World.setBlock(coords.x - 3, coords.y - 1, coords.z, 42, 0);
        World.setBlock(coords.x - 1, coords.y - 1, coords.z - 1, 41, 0);
        World.setBlock(coords.x - 2, coords.y - 1, coords.z - 1, 57, 0);
        World.setBlock(coords.x - 3, coords.y - 1, coords.z - 1, 41, 0);
        World.setBlock(coords.x - 1, coords.y - 1, coords.z - 2, 42, 0);
        World.setBlock(coords.x - 2, coords.y - 1, coords.z - 2, 41, 0);
        World.setBlock(coords.x - 3, coords.y - 1, coords.z - 2, 42, 0);
        World.setBlock(coords.x - 2, coords.y, coords.z - 1, 138, 0);
        return [[0, 0, 0]];
    }
    if (IR == 60) {
        World.setBlock(pos.x, pos.y - 2, pos.z, 24, 0);
        World.setBlock(pos.x - 1, pos.y - 2, pos.z, 24, 0);
        World.setBlock(pos.x - 2, pos.y - 2, pos.z, 24, 0);
        World.setBlock(pos.x + 1, pos.y - 2, pos.z, 24, 0);
        World.setBlock(pos.x + 2, pos.y - 2, pos.z, 24, 0);
        World.setBlock(pos.x, pos.y - 2, pos.z - 1, 24, 0);
        World.setBlock(pos.x - 1, pos.y - 2, pos.z - 1, 24, 0);
        World.setBlock(pos.x - 2, pos.y - 2, pos.z - 1, 24, 0);
        World.setBlock(pos.x + 1, pos.y - 2, pos.z - 1, 24, 0);
        World.setBlock(pos.x + 2, pos.y - 2, pos.z - 1, 24, 0);
        World.setBlock(pos.x, pos.y - 2, pos.z - 2, 24, 0);
        World.setBlock(pos.x - 1, pos.y - 2, pos.z - 2, 24, 0);
        World.setBlock(pos.x - 2, pos.y - 2, pos.z - 2, 24, 0);
        World.setBlock(pos.x + 1, pos.y - 2, pos.z - 2, 24, 0);
        World.setBlock(pos.x + 2, pos.y - 2, pos.z - 2, 24, 0);
        World.setBlock(pos.x, pos.y - 2, pos.z + 1, 24, 0);
        World.setBlock(pos.x - 1, pos.y - 2, pos.z + 1, 24, 0);
        World.setBlock(pos.x - 2, pos.y - 2, pos.z + 1, 24, 0);
        World.setBlock(pos.x + 1, pos.y - 2, pos.z + 1, 24, 0);
        World.setBlock(pos.x + 2, pos.y - 2, pos.z + 1, 24, 0);
        World.setBlock(pos.x, pos.y - 2, pos.z + 2, 24, 0);
        World.setBlock(pos.x - 1, pos.y - 2, pos.z + 2, 24, 0);
        World.setBlock(pos.x - 2, pos.y - 2, pos.z + 2, 24, 0);
        World.setBlock(pos.x + 1, pos.y - 2, pos.z + 2, 24, 0);
        World.setBlock(pos.x + 2, pos.y - 2, pos.z + 2, 24, 0);
        World.setBlock(pos.x, pos.y - 1, pos.z - 2, 24, 0);
        World.setBlock(pos.x - 1, pos.y - 1, pos.z - 2, 24, 0);
        World.setBlock(pos.x - 2, pos.y - 1, pos.z - 2, 24, 0);
        World.setBlock(pos.x + 1, pos.y - 1, pos.z - 2, 24, 0);
        World.setBlock(pos.x + 2, pos.y - 1, pos.z - 2, 24, 0);
        World.setBlock(pos.x, pos.y - 1, pos.z + 2, 24, 0);
        World.setBlock(pos.x - 1, pos.y - 1, pos.z + 2, 24, 0);
        World.setBlock(pos.x - 2, pos.y - 1, pos.z + 2, 24, 0);
        World.setBlock(pos.x + 1, pos.y - 1, pos.z + 2, 24, 0);
        World.setBlock(pos.x + 2, pos.y - 1, pos.z + 2, 24, 0);
        World.setBlock(pos.x + 2, pos.y - 1, pos.z - 1, 24, 0);
        World.setBlock(pos.x + 2, pos.y - 1, pos.z, 24, 0);
        World.setBlock(pos.x + 2, pos.y - 1, pos.z + 1, 24, 0);
        World.setBlock(pos.x - 2, pos.y - 1, pos.z - 1, 24, 0);
        World.setBlock(pos.x - 2, pos.y - 1, pos.z, 24, 0);
        World.setBlock(pos.x - 2, pos.y - 1, pos.z + 1, 24, 0);
        World.setBlock(pos.x + 1, pos.y - 1, pos.z - 1, BlockID.luckyBlock3, 0);
        World.setBlock(pos.x + 1, pos.y - 1, pos.z + 1, BlockID.luckyBlock3, 0);
        World.setBlock(pos.x - 1, pos.y - 1, pos.z + 1, BlockID.luckyBlock3, 0);
        World.setBlock(pos.x - 1, pos.y - 1, pos.z - 1, BlockID.luckyBlock3, 0);
        World.setBlock(pos.x, pos.y, pos.z - 2, 24, 0);
        World.setBlock(pos.x - 1, pos.y, pos.z - 2, 24, 0);
        World.setBlock(pos.x - 2, pos.y, pos.z - 2, 24, 0);
        World.setBlock(pos.x + 1, pos.y, pos.z - 2, 24, 0);
        World.setBlock(pos.x + 2, pos.y, pos.z - 2, 24, 0);
        World.setBlock(pos.x, pos.y, pos.z + 2, 24, 0);
        World.setBlock(pos.x - 1, pos.y, pos.z + 2, 24, 0);
        World.setBlock(pos.x - 2, pos.y, pos.z + 2, 24, 0);
        World.setBlock(pos.x + 1, pos.y, pos.z + 2, 24, 0);
        World.setBlock(pos.x + 2, pos.y, pos.z + 2, 24, 0);
        World.setBlock(pos.x + 2, pos.y, pos.z - 1, 24, 0);
        World.setBlock(pos.x + 2, pos.y, pos.z, 24, 0);
        World.setBlock(pos.x + 2, pos.y, pos.z + 1, 24, 0);
        World.setBlock(pos.x - 2, pos.y, pos.z - 1, 24, 0);
        World.setBlock(pos.x - 2, pos.y, pos.z, 24, 0);
        World.setBlock(pos.x - 2, pos.y, pos.z + 1, 24, 0);
        World.setBlock(pos.x + 2, pos.y + 1, pos.z - 2, 41, 0);
        World.setBlock(pos.x + 2, pos.y + 1, pos.z + 2, 41, 0);
        World.setBlock(pos.x - 2, pos.y + 1, pos.z + 2, 41, 0);
        World.setBlock(pos.x - 2, pos.y + 1, pos.z - 2, 41, 0);
        return [[0, 0, 0]];
    }
    if (IR == 61) {
        return [[264, Math.round(Math.random() * 8), 0], [265, Math.round(Math.random() * 10), 0], [266, Math.round(Math.random() * 10), 0], [331, Math.round(Math.random() * 10), 0], [351, Math.round(Math.random() * 10), 4], [388, Math.round(Math.random() * 5), 0]];
    }
    if (IR == 62) {
        return [[BlockID.luckyBlock3, Math.round(Math.random() * 16), 0]];
    }
});

