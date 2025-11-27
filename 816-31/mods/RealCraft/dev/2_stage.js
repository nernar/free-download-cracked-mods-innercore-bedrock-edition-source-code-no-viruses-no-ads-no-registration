Recipes.deleteRecipe({id: 272, count: 1, data: 0});

Recipes.deleteRecipe({id: 273, count: 1, data: 0});

Recipes.deleteRecipe({id: 274, count: 1, data: 0});

Recipes.deleteRecipe({id: 275, count: 1, data: 0});

Recipes.deleteRecipe({id: 291, count: 1, data: 0});

Translation.addTranslation("Stonecutter", {
ru: "Камнерез"
});
IDRegistry.genItemID("rc_stonecutter");
Item.createItem("rc_stonecutter", "Stonecutter", {name: "stonecutter", meta: 0}, {stack: 1});

Translation.addTranslation("Stone Sword Blade", {
ru: "Клинок каменного меча"
});
IDRegistry.genItemID("stoneSword");
Item.createItem("stoneSword", "Stone Sword Blade", {name: "stone_sword", meta: 0}, {stack: 1});

Translation.addTranslation("Stone Axe Blade", {
ru: "Лезвие каменного топора"
});
IDRegistry.genItemID("stoneAxe");
Item.createItem("stoneAxe", "Stone Axe Blade", {name: "stone_axe", meta: 0}, {stack: 1});

Translation.addTranslation("The top of the stone shovel", {
ru: "Лезвие каменной лопаты"
});
IDRegistry.genItemID("stoneShovel");
Item.createItem("stoneShovel", "The top of the stone shovel", {name: "stone_shovel", meta: 0}, {stack: 1});

Translation.addTranslation("Top of a stone pickaxe", {
ru: "Верх каменной кирки"
});
IDRegistry.genItemID("stonePickaxe");
Item.createItem("stonePickaxe", "Top of a stone pickaxe", {name: "stone_pickaxe", meta: 0}, {stack: 1});

Translation.addTranslation("The top of the stone hoe", {
ru: "Верх каменной мотыги"
});
IDRegistry.genItemID("stoneHoe");
Item.createItem("stoneHoe", "The top of the stone hoe", {name: "stone_hoe", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.rc_stonecutter, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  "bbb" ], ['a', 4, 0, 'b', 280, 0, ]);

Recipes.addShaped({id: ItemID.stoneSword, count: 1, data: 0}, 
[ "b  ", 	
  " a ", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 4, 0, ]);

Recipes.addShaped({id: ItemID.stoneAxe, count: 1, data: 0}, 
[ " b ", 	
  " a ", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 4, 0, ]);

Recipes.addShaped({id: ItemID.stoneShovel, count: 1, data: 0}, 
[ "  b", 	
  " a ", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 4, 0, ]);

Recipes.addShaped({id: ItemID.stonePickaxe, count: 1, data: 0}, 
[ "   ", 	
  "ba ", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 4, 0, ]);

Recipes.addShaped({id: ItemID.stoneHoe, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 4, 0, ]);

Recipes.addShaped({id: 272, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.stoneSword, 0, 'b', 287, 0, 'c', ItemID.swordHandle, 0, ]);

Recipes.addShaped({id: 273, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.stoneShovel, 0, 'b', 287, 0, 'c', ItemID.toolHandle, 0, ]);

Recipes.addShaped({id: 274, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.stonePickaxe, 0, 'b', 287, 0, 'c', ItemID.toolHandle, 0, ]);

Recipes.addShaped({id: 275, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.stoneAxe, 0, 'b', 287, 0, 'c', ItemID.toolHandle, 0, ]);

Recipes.addShaped({id: 291, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.stoneHoe, 0, 'b', 287, 0, 'c', ItemID.toolHandle, 0, ]);
