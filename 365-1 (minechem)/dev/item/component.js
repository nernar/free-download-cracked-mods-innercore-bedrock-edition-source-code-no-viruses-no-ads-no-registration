IDRegistry.genItemID("lens_concave");
Item.createItem("lens_concave", "Concave Lens", {name: "chem_lens", meta: 0});
Recipes.addShaped({id: ItemID.lens_concave}, ["aoa", "aaa", "aoa"], ["a", 20, 0]);

IDRegistry.genItemID("lens_convex");
Item.createItem("lens_convex", "Convex Lens", {name: "chem_lens", meta: 1});
Recipes.addShaped({id: ItemID.lens_convex}, ["oao", "aaa", "oao"], ["a", 20, 0]);

IDRegistry.genItemID("lens_microscope");
Item.createItem("lens_microscope", "Microscope Lens", {name: "chem_lens", meta: 2});
Recipes.addShaped({id: ItemID.lens_microscope}, ["a", "b", "a"], ["a", ItemID.lens_convex, 0, "b", ItemID.lens_concave, 0]);

IDRegistry.genItemID("lens_projector");
Item.createItem("lens_projector", "Projector Lens", {name: "chem_lens", meta: 3});
Recipes.addShaped({id: ItemID.lens_projector}, ["aba"], ["a", ItemID.lens_concave, 0, "b", ItemID.lens_convex, 0]);

IDRegistry.genItemID("atomic_manipulator");
Item.createItem("atomic_manipulator", "Atomic Manipulator", {name: "atomic_manipulator"});
Recipes.addShaped({id: ItemID.atomic_manipulator}, ["aaa", "aba", "aaa"], ["a", 33, -1, "b", 42, 0]);


Recipes.addShaped({id: ItemID.decomposer}, ["aaa", "aba", "aca"], ["a", 265, 0, "b", ItemID.atomic_manipulator, 0, "c", 331, 0]);
Recipes.addShaped({id: ItemID.synthesiser}, ["aba", "aca", "ada"], ["a", 265, 0, "b", 331, 0, "c", ItemID.atomic_manipulator, 0, "d", 264, 0]);
Recipes.addShaped({id: ItemID.microscope}, ["oab", "ocb", "bbb"], ["a", ItemID.lens_microscope, 0, "b", 265, 0, "c", 102, 0]);
//Recipes.addShaped({id: ItemID.projector}, ["oao", "bcd", "oao"], ["a", 265, 0, "b", 123, 0, "c", 102, 0, "d", ItemID.lens_projector, 0]);
Recipes.addShapeless({id: ItemID.chemist_journal}, [{id: 340}, {id: 20}]);