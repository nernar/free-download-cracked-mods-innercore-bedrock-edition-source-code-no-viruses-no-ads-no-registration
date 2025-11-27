ToolBuilder.addMaterial("primaliron", 290, 3, 4, 5);
ToolBuilder.setPickaxe("primaliron");
ToolBuilder.setAxe("primaliron");
ToolBuilder.setShovel("primaliron");
ToolBuilder.setWorkblade("primaliron");
ToolBuilder.setHoe("primaliron");
ToolBuilder.setSaw("primaliron", 125);
ToolBuilder.setGallagher("primaliron", 125);
Generator.setItem("iron_flake", {name: "Iron flake", texture: "iron_flake", stack: 64});
Callback.addCallback("PostLoaded", function () {
    for (i in workblades) {
        Recipes.addCraftToolRecipeItem({id: ItemID.iron_flake, count: 4, data: 0}, [{id: 265, data: 0}], workblades[i]);
    }
    Recipes.addShaped({id: ItemID.primaliron_saw, count: 1, data: 0}, ["f  ", " ft", " ss"], ["f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.primaliron_pickaxe, count: 1, data: 0}, ["ftf", "fsf", " s "], ["f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.primaliron_shovel, count: 1, data: 0}, [" ff", " tf", "s  "], ["f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.primaliron_workblade, count: 1, data: 0}, [" fh", "ftf", "sf "], ["h", 265, 0, "f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.primaliron_hoe, count: 1, data: 0}, ["fot", " s ", " s "], ["h", 265, 0, "f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.primaliron_axe, count: 1, data: 0}, ["fht", "fsf", " s "], ["h", 265, 0, "f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.primaliron_gallagher, count: 1, data: 0}, ["iti", "iri", " r "], ["r", 280, 0, "t", ItemID.plant_twine, 0, "i", 265, 0]);
});

