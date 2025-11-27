SBworkbench.addShapeRecipe({id: 4, count: 1}, ["pp", "pp"], {p: {id: ItemID.stonePebble}});
SBworkbench.addShapeRecipe({id: BlockID.craftingTable, count: 1}, ["cc", "cc"], {c: {id: 4}});
SBworkbench.addShapeRecipe({id: ItemID.stoneStick, count: 1}, ["c", "c"], {c: {id: 4}});
SBworkbench.addShapeRecipe({id: ItemID.stoneHook, count: 1}, ["ss ", "s  ", "s  "], {s: {id: ItemID.stoneStick}});
SBworkbench.addShapeRecipe({id: ItemID.stoneHammer, count: 1}, [" c ", " sc", "s  "], {s: {id: ItemID.stoneStick}, c: {id: 4}});
Recipes.addShapeless({id: ItemID.stonePebble, count: 4, data: 0}, [{id: 4, data: 0}]);
Recipes.addShaped({id: 4, count: 1, data: 0}, ["pp", "pp"], ["p", ItemID.stonePebble, 0]);
Recipes.addShaped({id: BlockID.craftingTable, count: 1, data: 0}, ["cc", "cc"], ["c", 4, 0]);
Recipes.addShaped({id: ItemID.stoneStick, count: 1, data: 0}, ["c", "c"], ["c", 4, 0]);
Recipes.addShaped({id: ItemID.stoneHook, count: 1, data: 0}, ["ss ", "s  ", "s  "], ["s", ItemID.stonestick, 0]);
Recipes.addShaped({id: ItemID.stoneHammer, count: 1, data: 0}, [" c ", " sc", "s  "], ["c", 4, 0, "s", ItemID.stoneStick, 0]);

