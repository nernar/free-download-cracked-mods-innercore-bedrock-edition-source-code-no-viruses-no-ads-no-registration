IDRegistry.genItemID("pistol_base");
Item.createItem("pistol_base", "Pistol Base", {name:"pistol_base"}, {stack: 16})

RecipeTE.addGridRecipe("guns_workbench", "pistol_base", ["iii", "  i"], {i:{id:265}}, GUN_COMPONENT_PRODUCTION_TIME);

IDRegistry.genItemID("rifle_base");
Item.createItem("rifle_base", "Rifle Base", {name:"rifle_base"}, {stack: 16})

RecipeTE.addGridRecipe("guns_workbench", "rifle_base", ["iiii", "  i "], {i:{id:265}}, GUN_COMPONENT_PRODUCTION_TIME);