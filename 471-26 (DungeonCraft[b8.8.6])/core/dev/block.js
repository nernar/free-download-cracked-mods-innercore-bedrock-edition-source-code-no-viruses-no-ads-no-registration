Callback.addCallback("LevelLoaded", function () {
    Recipes.addFurnace(BlockID.board, BlockID.paradise_board, 0);
    Recipes.addFurnace(BlockID.brick2, BlockID.paradise_stone, 0);
    Recipes.addFurnace(BlockID.stone2, BlockID.paradise_cobblestone, 0);
    Recipes.addShaped({id: BlockID.blockmetal, count: 1, data: 0}, ["aaa", "aaa", "aaa"], ["a", ItemID.god_ingot, 0]);
    Recipes.addShaped({id: BlockID.board, count: 4, data: 0}, ["###", "#a#", "###"], ["a", BlockID.Breastya, 0]);
    Recipes.addShaped({id: 58, count: 1, data: 0}, ["aa#", "aa#", "###"], ["a", BlockID.board, 0]);
    Recipes.addShaped({id: 54, count: 1, data: 0}, ["aaa", "a*a", "aaa"], ["a", BlockID.board, 0]);
    Recipes.addShaped({id: BlockID.rityal1, count: 1, data: 0}, ["aga", "aba", "aba"], ["a", ItemID.god_ingot, 0, "b", 1, 0, "g", 264, 0]);
    Recipes.addShaped({id: BlockID.brick2, count: 8, data: 0}, ["bbb", "bab", "bbb"], ["a", ItemID.god_ingot, 0, "b", BlockID.stone2, 0]);
    Recipes.addShaped({id: BlockID.ritualGL, count: 1, data: 0}, ["gag", "bab", "bab"], ["b", ItemID.god_ingot, 0, "a", 1, 0, "g", ItemID.fire_ingot, 0]);
    Recipes.addShaped({id: BlockID.MagicStorage, count: 1, data: 0}, ["gbg", "bab", "gbg"], ["b", ItemID.god_ingot, 0, "a", 1, 0, "g", ItemID.fire_ingot, 0]);
    Recipes.addShaped({id: BlockID.gubok1, count: 1, data: 0}, ["aaa", "aga", "aga"], ["a", ItemID.god_ingot, 0, "g", 1, 0]);
    Recipes.addShaped({id: BlockID.gubok2, count: 1, data: 0}, ["aga", "aga", "aga"], ["a", ItemID.god_ingot, 0, "g", 1, 0]);
    Recipes.addShaped({id: BlockID.altar, count: 1, data: 0}, ["aba", "bgb", "aba"], ["a", 265, 0, "b", 1, 0, "g", ItemID.melted_stone, 0]);
    Recipes.addShaped({id: BlockID.altar1, count: 1, data: 0}, ["aba", "bgb", "aba"], ["a", ItemID.god_ingot, 0, "b", 1, 0, "g", ItemID.melted_stone, 0]);
});

