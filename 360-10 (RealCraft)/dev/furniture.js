Recipes.deleteRecipe({id: 54, count: 1, data: 0});

Recipes.deleteRecipe({id: 61, count: 1, data: 0});

Recipes.deleteRecipe({id: 355, count: 1, data: 0});

IDRegistry.genItemID("chestw");
Item.createItem("chestw", "Крышка сундука", {name: "chestw", meta: 0}, {stack: 1});

IDRegistry.genItemID("chw");
Item.createItem("chw", "Заготовка для дверной петли", {name: "ch", meta: 0}, {stack: 1});

IDRegistry.genItemID("ch");
Item.createItem("ch", "Дверная петля", {name: "ch", meta: 0}, {stack: 16});

IDRegistry.genItemID("chestwew");
Item.createItem("chestwew", "Низ сундука", {name: "chestwew", meta: 0}, {stack: 1});

IDRegistry.genItemID("pillowew");
Item.createItem("pillowew", "Пустая подушка", {name: "pillowew", meta: 0}, {stack: 16});

IDRegistry.genItemID("pillow");
Item.createItem("pillow", "Подушка", {name: "pillow", meta: 0}, {stack: 1});

IDRegistry.genItemID("blanket");
Item.createItem("blanket", "Одеяло", {name: "blanket", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.chestw, count: 1, data: 0}, 
[ "aaa", 	
  "a a", 	
  "   " ], ['a', ItemID.planks, 0, ]);

Recipes.addShaped({id: ItemID.chw, count: 1, data: 0}, 
[ "a b", 	
  "   ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ch, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " b " ], ['a', ItemID.hotIron, 0, 'b', ItemID.chw, 0, ]);

Recipes.addShaped({id: ItemID.chestwew, count: 1, data: 0}, 
[ "   ", 	
  "a a", 	
  "aaa" ], ['a', ItemID.planks, 0, ]);

Recipes.addShaped({id: 54, count: 1, data: 0}, 
[ " a ", 	
  "b b", 	
  " c " ], ['a', ItemID.chestw, 0, 'b', ItemID.ch, 0, 'c', ItemID.chestwew, 0, ]);

Recipes.addShaped({id: 61, count: 1, data: 0}, 
[ "aaa", 	
  "a a", 	
  "a a" ], ['a', 337, 0, ]);

Recipes.addShaped({id: ItemID.pillowew, count: 1, data: 0}, 
[ "aab", 	
  "aa ", 	
  "   " ], ['a', ItemID.armorWool, 0, 'b', ItemID.ironNeedlew, 0, ]);

Recipes.addShaped({id: ItemID.pillow, count: 1, data: 0}, 
[ "aaa", 	
  "aba", 	
  "aaa" ], ['a', 288, 0, 'b', ItemID.pillowew, 0, ]);

Recipes.addShaped({id: ItemID.blanket, count: 1, data: 0}, 
[ " a ", 	
  "bbb", 	
  "   " ], ['a', ItemID.ironNeedlew, 0, 'b', ItemID.armorWool, 0, ]);

Recipes.addShaped({id: 355, count: 1, data: 0}, 
[ "ab ", 	
  "ccc", 	
  "c c" ], ['a', ItemID.pillow, 0, 'b', ItemID.blanket, 0, 'c', ItemID.planks, 0, ]);

