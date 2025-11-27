Recipes.deleteRecipe({id: 272, count: 1, data: 0});

Recipes.deleteRecipe({id: 273, count: 1, data: 0});

Recipes.deleteRecipe({id: 274, count: 1, data: 0});

Recipes.deleteRecipe({id: 275, count: 1, data: 0});

Recipes.deleteRecipe({id: 291, count: 1, data: 0});

IDRegistry.genItemID("stonecutter");
Item.createItem("stonecutter", "Камнерез", {name: "stonecutter", meta: 0}, {stack: 1});

IDRegistry.genItemID("stoneSword");
Item.createItem("stoneSword", "Клинок каменного меча", {name: "stone_sword", meta: 0}, {stack: 1});

IDRegistry.genItemID("stoneAxe");
Item.createItem("stoneAxe", "Лезвие каменного топора", {name: "stone_axe", meta: 0}, {stack: 1});

IDRegistry.genItemID("stoneShovel");
Item.createItem("stoneShovel", "Верх каменной лопаты", {name: "stone_shovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("stonePickaxe");
Item.createItem("stonePickaxe", "Верх каменной кирки", {name: "stone_pickaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("stoneHoe");
Item.createItem("stoneHoe", "Верх каменной мотыги", {name: "stone_hoe", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.stonecutter, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  "bbb" ], ['a', 4, 0, 'b', 280, 0, ]);

Recipes.addShaped({id: ItemID.stoneSword, count: 1, data: 0}, 
[ "b  ", 	
  " a ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 4, 0, ]);

Recipes.addShaped({id: ItemID.stoneAxe, count: 1, data: 0}, 
[ " b ", 	
  " a ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 4, 0, ]);

Recipes.addShaped({id: ItemID.stoneShovel, count: 1, data: 0}, 
[ "  b", 	
  " a ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 4, 0, ]);

Recipes.addShaped({id: ItemID.stonePickaxe, count: 1, data: 0}, 
[ "   ", 	
  "ba ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 4, 0, ]);

Recipes.addShaped({id: ItemID.stoneHoe, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 4, 0, ]);

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