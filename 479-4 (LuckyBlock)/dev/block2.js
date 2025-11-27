var LUCKY_BLOCK = Block.createSpecialType({lightlevel: 5, destroytime: 0.1, explosionres: 30});
IDRegistry.genBlockID("luckyBlock2");
Block.createBlock("luckyBlock2", [{name: "Lucky Block", texture: [["Lucky_Block", 2], ["Lucky_Block", 2], ["Lucky_Block", 2], ["Lucky_Block", 2], ["Lucky_Block", 2], ["Lucky_Block", 2]], inCreative: true}], LUCKY_BLOCK);
Recipes.addShaped({id: BlockID.luckyBlock2, count: 1, data: 0}, ["aba", "bcb", "aba"], ["a", 367, 0, "b", 352, 0, "c", 125, 3]);
Block.registerDropFunction("luckyBlock2", function (coords, blockID, data, diggingLevel, toolLevel) {
    var badloot = [2, 3, 4, 7, 13, 14, 15, 16, 20, 21, 25, 27, 28, 29, 30, 32, 33, 37, 39, 40, 45, 46, 47, 4849, 50, 52, 5354, 56, 58, 61, 65, 66, 67, 69, 70, 72, 73, 77, 78, 79, 80, 81, 82, 86, 87, 88, 89, 91, 96, 99, 100, 101, 102, 103, 106, 107, 108, 109, 110, 111, 112, 113, 114, 120, 121, 123, 125, 126, 128, 129, 130, 131, 134, 135, 136, 139, 143, 146, 147, 148, 151, 153, 156, 163, 164, 165, 167169, 170, 172, 173, 174, 180, 183, 184, 185, 186, 187, 198, 200, 203, 206, 208, 203, 256, 259, 560, 261, 262, 264, 265, 266, 268, 269, 270, 271, 272, 273, 274, 275, 280, 281, 282, 287, 288, 289, 290, 291, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 318, 319, 320, 321, 323, 324, 328, 329, 330, 331, 332, 334, 336, 337, 338, 339, 340, 341, 342, 344, 345, 346, 347, 348, 349, 350, 352, 353, 354, 355, 356, 357, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 384, 385, 388, 389, 390, 391392, 393, 394, 395, 396, 398, 400, 403, 405, 406, 407408, 409, 411, 412, 413, 414, 415, 416, 417, 420, 421, 422, 423, 424, 425, 427, 428, 429, 430, 431, 432, 433, 457, 458, 459, 460, 461, 462, 463];
    var dnr = [1, 2, 3];
    var mob = [23, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50, 54, 55, 65];
    var rnd = Math.floor((Math.random() * 1) + 1);
    for (var i = 0; i < 4; i++) {
        if (rnd == 1) {
            var rnd2 = Math.floor(Math.random() * (badloot.length));
            var rnd3 = Math.floor(Math.random() * (badloot.length));
            var rnd4 = Math.floor(Math.random() * (badloot.length));
            var rnd5 = Math.floor(Math.random() * (mob.length));
            var rnd6 = Math.floor(Math.random() * (mob.length));
            Entity.spawn(coords.x + 0.5, coords.y, coords.z + 0.5, mob[rnd5]);
            Entity.spawn(coords.x + 0.5, coords.y, coords.z + 0.5, mob[rnd6]);
            return [[badloot[rnd2], 1, data], [badloot[rnd3], 1, data], [badloot[rnd4], 1, data]];
        }
    }
});

