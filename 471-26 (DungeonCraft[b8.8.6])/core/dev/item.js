Callback.addCallback("LevelLoaded", function () {
    Recipes.addShaped({id: ItemID.stick2, count: 1, data: 0}, ["**a", "*b*", "b**"], ["a", BlockID.blockmetal, 0, "b", 280, 0]);
    Recipes.addShaped({id: ItemID.Drune0, count: 4, data: 0}, ["***", "*b*", "***"], ["b", BlockID.altar, 0]);
    Recipes.addShaped({id: ItemID.RitualActivator, count: 1, data: 0}, ["*a*", "a*a", "*a*"], ["a", ItemID.god_ingot, 0]);
    Recipes.addShaped({id: ItemID.divine_helmet, count: 1, data: 0}, ["aaa", "a*a", "***"], ["a", ItemID.god_ingot, 0]);
    Recipes.addShaped({id: ItemID.divine_chestplate, count: 1, data: 0}, ["a*a", "aaa", "aaa"], ["a", ItemID.god_ingot, 0]);
    Recipes.addShaped({id: ItemID.divine_leggings, count: 1, data: 0}, ["aaa", "a*a", "a*a"], ["a", ItemID.god_ingot, 0]);
    Recipes.addShaped({id: ItemID.divine_boots, count: 1, data: 0}, ["***", "a*a", "a*a"], ["a", ItemID.god_ingot, 0]);
    Recipes.addShaped({id: 280, count: 1, data: 0}, ["#a#", "#a#", "###"], ["a", BlockID.board, 0]);
    Recipes.addShaped({id: 270, count: 1, data: 0}, ["aaa", "#b#", "#b#"], ["a", BlockID.board, 0, "b", 280, 0]);
    Recipes.addShaped({id: 268, count: 1, data: 0}, ["#a#", "#a#", "#b#"], ["a", BlockID.board, 0, "b", 280, 0]);
    Recipes.addShaped({id: 269, count: 1, data: 0}, ["#a#", "#b#", "#b#"], ["a", BlockID.board, 0, "b", 280, 0]);
    Recipes.addShaped({id: 271, count: 1, data: 0}, ["aa#", "ab#", "#b#"], ["a", BlockID.board, 0, "b", 280, 0]);
    Recipes.addShaped({id: 290, count: 1, data: 0}, ["aa#", "#b#", "#b#"], ["a", BlockID.board, 0, "b", 280, 0]);
    Recipes.addShaped({id: ItemID.divine_sword, count: 1, data: 0}, ["*a*", "*a*", "*g*"], ["a", ItemID.god_ingot, 0, "b", 280, 0, "g", 399, 0]);
    Recipes.addShaped({id: ItemID.divine_pickaxe, count: 1, data: 0}, ["aaa", "*g*", "*b*"], ["a", ItemID.god_ingot, 0, "b", 280, 0, "g", 399, 0]);
    Recipes.addFurnace(BlockID.ore, ItemID.god_ingot, 0);
    Recipes.addFurnace(BlockID.blockmetal, BlockID.glass2, 0);
});

