Translation.addTranslation("Board", {
ru: "Доска"
});
IDRegistry.genItemID("rc_planks");
Item.createItem("rc_planks", "Board", {name: "planks", meta: 0}, {stack: 64});

Translation.addTranslation("Improved Sword handle", {
ru: "Улучшеная ручка меча"
});
IDRegistry.genItemID("swordHandlew");
Item.createItem("swordHandlew", "Improved Sword handle", {name: "sword_handlew", meta: 0}, {stack: 1});

Translation.addTranslation("Improved tool handle", {
ru: "Улучшеная ручка для инструментов"
});
IDRegistry.genItemID("toolHandlew");
Item.createItem("toolHandlew", "Improved tool handle", {name: "tool_handlew", meta: 0}, {stack: 1});

Translation.addTranslation("Blank for the sword", {
ru: "Заготовка для меча"
});
IDRegistry.genItemID("sword");
Item.createItem("sword", "Blank for the sword", {name: "harvesting", meta: 0}, {stack: 1});

Translation.addTranslation("Red-hot iron ingot", {
ru: "Раскаленный железный слиток"
});
IDRegistry.genItemID("hotIron");
Item.createItem("hotIron", "Red-hot iron ingot", {name: "hot_iron", meta: 0}, {stack: 64});

Translation.addTranslation("Blank for an axe", {
ru: "Заготовка для топора"
});
IDRegistry.genItemID("axe");
Item.createItem("axe", "Blank for an axe", {name: "harvestingq", meta: 0}, {stack: 1});

Translation.addTranslation("Blank for a shovel", {
ru: "Заготовка для лопаты"
});
IDRegistry.genItemID("shovel");
Item.createItem("shovel", "Blank for a shovel", {name: "harvestingw", meta: 0}, {stack: 1});

Translation.addTranslation("Blank for a pickaxe", {
ru: "Заготовка для кирки"
});
IDRegistry.genItemID("pickaxe");
Item.createItem("pickaxe", "Blank for a pickaxe", {name: "harvestinge", meta: 0}, {stack: 1});

Translation.addTranslation("Preparation for a hoe", {
ru: "Заготовка для мотыги"
});
IDRegistry.genItemID("hoe");
Item.createItem("hoe", "Preparation for a hoe", {name: "harvestingr", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.rc_planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 0, ]);

Recipes.addShaped({id: ItemID.rc_planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 1, ]);

Recipes.addShaped({id: ItemID.rc_planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 2, ]);

Recipes.addShaped({id: ItemID.rc_planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 3, ]);

Recipes.addShaped({id: ItemID.rc_planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 4, ]);

Recipes.addShaped({id: ItemID.rc_planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 5, ]);

Recipes.addShaped({id: ItemID.swordHandlew, count: 1, data: 0}, 
[ " b ", 	
  "aba", 	
  " a " ], ['a', ItemID.rc_planks, 0, 'b', 287, 0, ]);

Recipes.addShaped({id: ItemID.toolHandlew, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " a " ], ['a', ItemID.rc_planks, 0, ]);

Recipes.addFurnace(265, 0, ItemID.hotIron, 0);

Recipes.deleteRecipe({id: 267, count: 1, data: 0});

Recipes.deleteRecipe({id: 256, count: 1, data: 0});

Recipes.deleteRecipe({id: 257, count: 1, data: 0});

Recipes.deleteRecipe({id: 258, count: 1, data: 0});

Recipes.deleteRecipe({id: 292, count: 1, data: 0});

Recipes.addShaped({id: ItemID.sword, count: 1, data: 0}, 
[ "b  ", 	
  " a ", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.axe, count: 1, data: 0}, 
[ " b ", 	
  " a ", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.shovel, count: 1, data: 0}, 
[ "  b", 	
  " a ", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.pickaxe, count: 1, data: 0}, 
[ "   ", 	
  "ba ", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.hoe, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: 267, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.hotIron, 0, 'b', ItemID.swordHandlew, 0, 'c', ItemID.sword, 0, ]);

Recipes.addShaped({id: 258, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.hotIron, 0, 'b', ItemID.toolHandlew, 0, 'c', ItemID.axe, 0, ]);

Recipes.addShaped({id: 256, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.hotIron, 0, 'b', ItemID.toolHandlew, 0, 'c', ItemID.shovel, 0, ]);

Recipes.addShaped({id: 257, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.hotIron, 0, 'b', ItemID.toolHandlew, 0, 'c', ItemID.pickaxe, 0, ]);

Recipes.addShaped({id: 292, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.hotIron, 0, 'b', ItemID.toolHandlew, 0, 'c', ItemID.hoe, 0, ]);
