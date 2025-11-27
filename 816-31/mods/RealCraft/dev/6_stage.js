Recipes.deleteRecipe({id: 310, count: 1, data: 0});

Recipes.deleteRecipe({id: 311, count: 1, data: 0});

Recipes.deleteRecipe({id: 312, count: 1, data: 0});

Recipes.deleteRecipe({id: 313, count: 1, data: 0});

Translation.addTranslation("Blank for needle", {
ru: "Заготовка для иглы"
});
IDRegistry.genItemID("needlewew");
Item.createItem("needlewew", "Blank for needle", {name: "needlewew", meta: 0}, {stack: 1});

Translation.addTranslation("Iron Needle", {
ru: "Железная игла"
});
IDRegistry.genItemID("ironNeedle");
Item.createItem("ironNeedle", "Iron Needle", {name: "iron_needle", meta: 0}, {stack: 16});

Translation.addTranslation("Iron needle with thread", {
ru: "Железная игла с нитью"
});
IDRegistry.genItemID("ironNeedlew");
Item.createItem("ironNeedlew", "Iron needle with thread", {name: "iron_needlew", meta: 0}, {stack: 16});

Translation.addTranslation("Improved armor lining", {
ru: "Улучшенная подкладка для брони"
});
IDRegistry.genItemID("armorWoolw");
Item.createItem("armorWoolw", "Improved armor lining", {name: "armor_woolw", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.needlewew, count: 1, data: 0}, 
[ "ab ", 	
  "   ", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 1, 0, ]);

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




