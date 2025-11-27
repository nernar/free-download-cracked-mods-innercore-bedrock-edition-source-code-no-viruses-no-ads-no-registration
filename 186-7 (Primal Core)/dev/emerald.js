ToolBuilder.addMaterial("emerald", 1900, 5, 5, 5);
ToolBuilder.setPickaxe("emerald");
ToolBuilder.setAxe("emerald");
ToolBuilder.setShovel("emerald");
ToolBuilder.setWorkblade("emerald");
ToolBuilder.setHoe("emerald");
ToolBuilder.setSaw("emerald", 700);
Generator.setItem("emerald_flake", {name: "Emerald flake", texture: "emerald_flake", stack: 64});
Callback.addCallback("PostLoaded", function () {
    for (i in workblades) {
        Recipes.addCraftToolRecipeItem({id: ItemID.emerald_flake, count: 4, data: 0}, [{id: 388, data: 0}], workblades[i]);
    }
    Recipes.addShaped({id: ItemID.emerald_saw, count: 1, data: 0}, ["f  ", " ft", " ss"], ["f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.emerald_pickaxe, count: 1, data: 0}, ["ftf", "fsf", " s "], ["f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.emerald_shovel, count: 1, data: 0}, [" ff", " tf", "s  "], ["f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.emerald_workblade, count: 1, data: 0}, [" fh", "ftf", "sf "], ["h", 388, 0, "f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.emerald_hoe, count: 1, data: 0}, ["fot", " s ", " s "], ["h", 388, 0, "f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.emerald_axe, count: 1, data: 0}, ["fht", "fsf", " s "], ["h", 388, 0, "f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
});

