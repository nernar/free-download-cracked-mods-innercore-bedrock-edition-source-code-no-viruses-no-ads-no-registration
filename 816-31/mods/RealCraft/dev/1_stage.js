
Recipes.deleteRecipe({id: 298, count: 1, data: 0});

Recipes.deleteRecipe({id: 299, count: 1, data: 0});

Recipes.deleteRecipe({id: 300, count: 1, data: 0});

Recipes.deleteRecipe({id: 301, count: 1, data: 0});

Translation.addTranslation("Spine", {
ru: "Игла"
});
IDRegistry.genItemID("needle");
Item.createItem("needle", "Spine", {name: "needle", meta: 0}, {stack: 16});

Translation.addTranslation("Needle and thread", {
ru: "Игла с нитью"
});
IDRegistry.genItemID("needlew");
Item.createItem("needlew", "Needle and thread", {name: "needlew", meta: 0}, {stack: 16});

Recipes.addShaped({id: 35, count: 1, data: 0}, 
[ "bbb", 	
  "bab", 	
  "bbb" ], ['a', ItemID.needlew, 0, 'b', 287, 0]);

Translation.addTranslation("Needle and thread", {
ru: "Высушенная кожа"
});
IDRegistry.genItemID("lead");
Item.createItem("lead", "Dried skin", {name: "lead", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.needle, count: 2, data: 0}, 
[ "   ", 	
  " a ", 	
  "   " ], ['a', 280, 0, ]);

Recipes.addShaped({id: ItemID.needlew, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.needle, 0, 'b', 287, 0, ]);

Recipes.addFurnace(334, 0, ItemID.lead, 0);

Recipes.addShaped({id: 298, count: 1, data: 0}, 
[ " b ", 	
  " a ", 	
  "   " ], ['a', ItemID.needlew, 0, 'b', ItemID.lead, 0, ]);

Recipes.addShaped({id: 299, count: 1, data: 0}, 
[ "bbb", 	
  " a ", 	
  "   " ], ['a', ItemID.needlew, 0, 'b', ItemID.lead, 0, ]);

Recipes.addShaped({id: 300, count: 1, data: 0}, 
[ "   ", 	
  "bab", 	
  "   " ], ['a', ItemID.needlew, 0, 'b', ItemID.lead, 0, ]);

Recipes.addShaped({id: 301, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  "b b" ], ['a', ItemID.needlew, 0, 'b', ItemID.lead, 0, ]);
