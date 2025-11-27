ToolBuilder.addMaterial("flint", 70, 2, 2, 3);
Generator.setItem("flint_hatchet", {name: "flint hatchet", texture: "flint_hatchet", stack: 1});
ToolAPI.setTool(ItemID.flint_hatchet, "flint", ToolType.hatchet);
ToolBuilder.setPickaxe("flint");
ToolBuilder.setAxe("flint");
ToolBuilder.setShovel("flint");
ToolBuilder.setWorkblade("flint");
ToolBuilder.setHoe("flint");
ToolBuilder.setShears("flint", 70);
ToolBuilder.setSaw("flint", 75);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: 318, count: 1, data: 0}, [" g", "g"], ["g", 13, 0]);
    Recipes.addShaped({id: ItemID.flint_saw, count: 1, data: 0}, ["f  ", " ft", " ss"], ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.flint_hatchet, count: 1, data: 0}, ["ft", " s"], ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.flint_pickaxe, count: 1, data: 0}, ["ftf", "fsf", " s "], ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.flint_shovel, count: 1, data: 0}, [" ff", " tf", "s  "], ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.flint_workblade, count: 1, data: 0}, [" fh", "ftf", "sf "], ["h", 318, 0, "f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.flint_hoe, count: 1, data: 0}, ["fot", " s ", " s "], ["h", 318, 0, "f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.flint_axe, count: 1, data: 0}, ["fht", "fsf", " s "], ["h", 318, 0, "f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.flint_shears, count: 1, data: 0}, ["f ", "tf"], ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
});

