IDRegistry.genItemID("bookCover"); 
IDRegistry.genItemID("woodGrinder"); 
IDRegistry.genItemID("woodPulp"); 

Item.createItem("bookCover", "Book Cover", {name: "bookCover", meta: 0}, {}); 

Item.createItem("woodGrinder", "Wood Grinder", {name: "woodGrinder", meta: 0}, {}); 

Item.createItem("woodPulp", "Wood Pulp", {name: "woodPulp", meta: 0}, {}); 


Recipes.addShaped({id:ItemID.woodGrinder, count: 1, data: 0}, [ "aaa", "axa", "aaa" ], ['a', 4, 0, 'x', 318, 0]);

Recipes.addShaped({id:ItemID.bookCover, count: 2, data: 0}, [ "aa", "x"], ['a', 5, 0, 'x', 318, 0]);

Recipes.addShaped({id:ItemID.woodPulp, count: 16, data: 0}, [ "a", "x"], ['a', 17, 0, 'x', ItemID.woodGrinder, 0]);

Recipes.addShaped({id:339, count: 16, data: 0}, [ "aa", "aa"], ['a', ItemID.woodPulp, 0]);

Recipes.addShaped({id:340, count: 1, data: 0}, [ "aaa", "xx"], ['a', 339, 0, 'x', ItemID.bookCover, 0]);




