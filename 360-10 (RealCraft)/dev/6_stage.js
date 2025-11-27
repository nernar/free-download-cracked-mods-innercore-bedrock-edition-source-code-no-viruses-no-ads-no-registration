Recipes.deleteRecipe({id: 310, count: 1, data: 0});

Recipes.deleteRecipe({id: 311, count: 1, data: 0});

Recipes.deleteRecipe({id: 312, count: 1, data: 0});

Recipes.deleteRecipe({id: 313, count: 1, data: 0});

IDRegistry.genItemID("needlewew");
Item.createItem("needlewew", "Заготовка для иглы", {name: "needlewew", meta: 0}, {stack: 1});

IDRegistry.genItemID("ironNeedle");
Item.createItem("ironNeedle", "Железная игла", {name: "iron_needle", meta: 0}, {stack: 16});

IDRegistry.genItemID("ironNeedlew");
Item.createItem("ironNeedlew", "Железная игла с нитью", {name: "iron_needlew", meta: 0}, {stack: 16});

IDRegistry.genItemID("armorWoolw");
Item.createItem("armorWoolw", "Улучшенная подкладка для брони", {name: "armor_woolw", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.needlewew, count: 1, data: 0}, 
[ "ab ", 	
  "   ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.ironNeedle, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " b " ], ['a', ItemID.hotIron, 0, 'b', ItemID.needlewew, 0, ]);

Recipes.addShaped({id: ItemID.ironNeedlew, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.ironNeedle, 0, 'b', 287, 0, ]);

Recipes.addShaped({id: ItemID.armorWoolw, count: 1, data: 0}, 
[ "   ", 	
  "aaa", 	
  " b " ], ['a', ItemID.armorWool, 0, 'b', ItemID.ironNeedlew, 0, ]);

Recipes.addShaped({id: 310, count: 1, data: 0}, 
[ "aaa", 	
  "aba", 	
  "   " ], ['a', 264, 0, 'b', ItemID.armorWoolw, 0, ]);

Recipes.addShaped({id: 311, count: 1, data: 0}, 
[ "aba", 	
  "aaa", 	
  "aaa" ], ['a', 264, 0, 'b', ItemID.armorWoolw, 0, ]);

Recipes.addShaped({id: 312, count: 1, data: 0}, 
[ "aaa", 	
  "aba", 	
  "a a" ], ['a', 264, 0, 'b', ItemID.armorWoolw, 0, ]);

Recipes.addShaped({id: 313, count: 1, data: 0}, 
[ "b b", 	
  "a a", 	
  "a a" ], ['a', 264, 0, 'b', ItemID.armorWoolw, 0, ]);

