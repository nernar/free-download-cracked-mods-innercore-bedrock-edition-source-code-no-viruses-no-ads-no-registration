ToolBuilder.addMaterial("obsidian", 5000, 2, 3, 4);
ToolBuilder.setPickaxe("obsidian");
ToolBuilder.setAxe("obsidian");
ToolBuilder.setShovel("obsidian");
ToolBuilder.setWorkblade("obsidian");
ToolBuilder.setHoe("obsidian");
Generator.setItem("obsidian_flake", {name: "Obsidian flake", texture: "obsidian_flake", stack: 64});
Callback.addCallback("PostLoaded", function () {
    for (i in workblades) {
        Recipes.addCraftToolRecipeItem({id: ItemID.obsidian_flake, count: 4, data: 0}, [{id: 49, data: 0}], workblades[i]);
    }
    Recipes.addShaped({id: ItemID.obsidian_pickaxe, count: 1, data: 0}, ["ftf", "fsf", " s "], ["f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.obsidian_shovel, count: 1, data: 0}, [" ff", " tf", "s  "], ["f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.obsidian_workblade, count: 1, data: 0}, [" fh", "ftf", "sf "], ["h", 49, 0, "f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.obsidian_hoe, count: 1, data: 0}, ["fot", " s ", " s "], ["h", 49, 0, "f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.obsidian_axe, count: 1, data: 0}, ["fht", "fsf", " s "], ["h", 49, 0, "f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
});

