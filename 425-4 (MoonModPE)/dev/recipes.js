Callback.addCallback("PreLoaded", function () {
    Recipes.addFurnace(ItemID.rawMeteorIron, ItemID.ingotMeteorIron, 0);
    Recipes.addShaped({id: ItemID.iron_gear, count: 1, data: 0}, ["i i", " i ", "i i"], ["i", 265, 0]);
    Recipes.addShaped({id: ItemID.astroHelmet, count: 1, data: 0}, ["iwi", "wpw", "   "], ["i", 265, 0, "w", 35, 0, "p", 102, 0]);
    Recipes.addShaped({id: ItemID.astroChestplate, count: 1, data: 0}, ["i i", "wiw", "iwi"], ["i", 265, 0, "w", 35, 0]);
    Recipes.addShaped({id: ItemID.astroLeggings, count: 1, data: 0}, ["iwi", "w w", "i i"], ["i", 265, 0, "w", 35, 0]);
    Recipes.addShaped({id: ItemID.astroBoots, count: 1, data: 0}, ["w w", "i i", "   "], ["i", 265, 0, "w", 35, 0]);
    Recipes.addShaped({id: BlockID.dis_oxygenGenerator, count: 1, data: 0}, ["iii", "iri", "igi"], ["i", 265, 0, "r", 331, 0, "g", ItemID.iron_gear, 0]);
    Recipes.addShaped({id: BlockID.cockpit, count: 1, data: 0}, ["gig", "iri", "igi"], ["i", 265, 0, "r", 331, 0, "g", ItemID.iron_gear, 0]);
    Recipes.addShaped({id: BlockID.ironBricks, count: 2, data: 0}, ["ii ", "ii ", "   "], ["i", 265, 0]);
    Recipes.addShaped({id: ItemID.ox_analyzer, count: 1, data: 0}, ["igi", "iri", "   "], ["i", 265, 0, "r", 331, 0, "g", ItemID.iron_gear, 0]);
});

