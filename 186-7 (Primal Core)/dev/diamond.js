ToolBuilder.addMaterial("primaldiamond", 1400, 5, 6, 7);
ToolBuilder.setPickaxe("primaldiamond");
ToolBuilder.setAxe("primaldiamond");
ToolBuilder.setShovel("primaldiamond");
ToolBuilder.setWorkblade("primaldiamond");
ToolBuilder.setHoe("primaldiamond");
ToolBuilder.setSaw("primaldiamond", 400);
ToolBuilder.setGallagher("primaldiamond", 400);
Generator.setItem("diamond_flake", {name: "Diamond flake", texture: "diamond_flake", stack: 64});
Callback.addCallback("PostLoaded", function () {
    for (i in workblades) {
        Recipes.addCraftToolRecipeItem({id: ItemID.diamond_flake, count: 4, data: 0}, [{id: 264, data: 0}], workblades[i]);
    }
    Recipes.addShaped({id: ItemID.primaldiamond_saw, count: 1, data: 0}, ["f  ", " ft", " ss"], ["f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.primaldiamond_pickaxe, count: 1, data: 0}, ["ftf", "fsf", " s "], ["f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.primaldiamond_shovel, count: 1, data: 0}, [" ff", " tf", "s  "], ["f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.primaldiamond_workblade, count: 1, data: 0}, [" fh", "ftf", "sf "], ["h", 264, 0, "f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.primaldiamond_hoe, count: 1, data: 0}, ["fot", " s ", " s "], ["h", 264, 0, "f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.primaldiamond_axe, count: 1, data: 0}, ["fht", "fsf", " s "], ["h", 264, 0, "f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.primaldiamond_gallagher, count: 1, data: 0}, ["sts", "iri", " r "], ["s", 49, 0, "r", 280, 0, "t", ItemID.plant_twine, 0, "i", 264, 0]);
});

