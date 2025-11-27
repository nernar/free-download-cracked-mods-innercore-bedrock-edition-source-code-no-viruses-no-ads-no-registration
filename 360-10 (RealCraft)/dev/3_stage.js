IDRegistry.genItemID("planks");
Item.createItem("planks", "Доска", {name: "planks", meta: 0}, {stack: 64});

IDRegistry.genItemID("swordHandlew");
Item.createItem("swordHandlew", "Улучшеная ручка меча", {name: "sword_handlew", meta: 0}, {stack: 1});

IDRegistry.genItemID("toolHandlew");
Item.createItem("toolHandlew", "Улучшеная ручка для инструментов", {name: "tool_handlew", meta: 0}, {stack: 1});

IDRegistry.genItemID("sword");
Item.createItem("sword", "Заготовка для меча", {name: "harvesting", meta: 0}, {stack: 1});

IDRegistry.genItemID("hotIron");
Item.createItem("hotIron", "Раскаленный железный слиток", {name: "hot_iron", meta: 0}, {stack: 64});

IDRegistry.genItemID("axe");
Item.createItem("axe", "Заготовка для топора", {name: "harvestingq", meta: 0}, {stack: 1});

IDRegistry.genItemID("shovel");
Item.createItem("shovel", "Заготовка для лопаты", {name: "harvestingw", meta: 0}, {stack: 1});

IDRegistry.genItemID("pickaxe");
Item.createItem("pickaxe", "Заготовка для кирки", {name: "harvestinge", meta: 0}, {stack: 1});

IDRegistry.genItemID("hoe");
Item.createItem("hoe", "Заготовка для мотыги", {name: "harvestingr", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 0, ]);

Recipes.addShaped({id: ItemID.planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 1, ]);

Recipes.addShaped({id: ItemID.planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 2, ]);

Recipes.addShaped({id: ItemID.planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 3, ]);

Recipes.addShaped({id: ItemID.planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 4, ]);

Recipes.addShaped({id: ItemID.planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 5, ]);

Recipes.addShaped({id: ItemID.swordHandlew, count: 1, data: 0}, 
[ " b ", 	
  "aba", 	
  " a " ], ['a', ItemID.planks, 0, 'b', 287, 0, ]);

Recipes.addShaped({id: ItemID.toolHandlew, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " a " ], ['a', ItemID.planks, 0, ]);

Recipes.addFurnace(265, 0, ItemID.hotIron, 0);

Recipes.deleteRecipe({id: 267, count: 1, data: 0});

Recipes.deleteRecipe({id: 256, count: 1, data: 0});

Recipes.deleteRecipe({id: 257, count: 1, data: 0});

Recipes.deleteRecipe({id: 258, count: 1, data: 0});

Recipes.deleteRecipe({id: 292, count: 1, data: 0});

Recipes.addShaped({id: ItemID.sword, count: 1, data: 0}, 
[ "b  ", 	
  " a ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.axe, count: 1, data: 0}, 
[ " b ", 	
  " a ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.shovel, count: 1, data: 0}, 
[ "  b", 	
  " a ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.pickaxe, count: 1, data: 0}, 
[ "   ", 	
  "ba ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.hoe, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 1, 0, ]);

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