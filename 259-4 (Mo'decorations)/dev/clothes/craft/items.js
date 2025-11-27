//ткань

Recipes.addShaped({id: ItemID.tk, count: 8, data: 0}, [ 
"", 
"xa", 
"" 
], ['x', 35, 0, 'a', ItemID.igla, 0]);

Recipes.addShaped({id: ItemID.tk1, count: 1, data: 0}, [ 
"", 
"xab", 
"" 
], ['x', ItemID.tk, 0, 'a', 351, 7, 'b',351, 15]);

Recipes.addShaped({id: ItemID.tk2, count: 1, data: 0}, [ 
"", 
"xa", 
"" 
], ['x', ItemID.tk, 0, 'a', 351, 7]);

Recipes.addShaped({id: ItemID.tk3, count: 1, data: 0}, [ 
"", 
"xa", 
"" 
], ['x', ItemID.tk, 0, 'a', 351, 8]);

Recipes.addShaped({id: ItemID.tk4, count: 1, data: 0}, [ 
"", 
"xa", 
"" 
], ['x', ItemID.tk, 0, 'a', 351, 1]);

Recipes.addShaped({id: ItemID.tk5, count: 1, data: 0}, [ 
"", 
"xa", 
"" 
], ['x', ItemID.tk, 0, 'a', 351, 10]);

Recipes.addShaped({id: ItemID.tk6, count: 1, data: 0}, [ 
"", 
"xa", 
"" 
], ['x', ItemID.tk, 0, 'a', 351, 2]);

Recipes.addShaped({id: ItemID.tk7, count: 1, data: 0}, [ 
"", 
"xa", 
"" 
], ['x', ItemID.tk, 0, 'a', 351, 4]);

Recipes.addShaped({id: ItemID.tk8, count: 1, data: 0}, [ 
"", 
"xa", 
"" 
], ['x', ItemID.tk, 0, 'a', 351, 11]);

Recipes.addShaped({id: ItemID.tk9, count: 1, data: 0}, [ 
"", 
"xa", 
"" 
], ['x', ItemID.tk, 0, 'a', 351, 9]);

Recipes.addShaped({id: ItemID.tk10, count: 1, data: 0}, [ 
"", 
"xa", 
"" 
], ['x', ItemID.tk, 0, 'a', 351, 5]);

Recipes.addShaped({id: ItemID.tk11, count: 1, data: 0}, [ 
"", 
"xa", 
"" 
], ['x', ItemID.tk, 0, 'a', 351, 12]);

Recipes.addShaped({id: ItemID.tk12, count: 1, data: 0}, [ 
"", 
"xa", 
"" 
], ['x', ItemID.tk, 0, 'a', 351, 0]);

//для пошива

Recipes.addShaped({id: ItemID.g, count: 1, data: 0}, [ 
"", 
"x", 
"" 
], ['x', ItemID.tk7, 0]);

Recipes.addShaped({id: ItemID.nit, count: 16, data: 0}, [ 
"", 
"x", 
"" 
], ['x', 35, 0]);

Recipes.addShaped({id: ItemID.igla, count: 16, data: 0}, [ 
"", 
"x", 
"" 
], ['x', 265, 0]);

Recipes.addShaped({id: ItemID.sh, count: 1, data: 0}, [ 
"", 
"xx", 
"" 
], ['x', ItemID.nit, 0]);

//все что касается резины

Recipes.addShaped({id: ItemID.kra, count: 4, data: 0}, [ 
" x ", 
"xxx", 
"x  " 
], ['x', 5, 0]);

Recipes.addShaped({id: ItemID.boot, count: 4, data: 0}, [ 
" a ", 
" x ", 
"" 
], ['x', 20, 0, 'a', 5, 0]);

Recipes.addShaped({id: ItemID.extract, count: 4, data: 0}, [ 
"a", 
"x", 
"b" 
], ['x', 17, 0, 'a', ItemID.kra, 0, 'b',ItemID.boot ,0]);

Recipes.addShaped({id: ItemID.ruber, count: 4, data: 0}, [ 
"", 
"ax", 
"" 
], ['x', 259, 0, 'a', ItemID.extract, 0]);

Recipes.addShaped({id: ItemID.pod, count: 1, data: 0}, [ 
"", 
"xxx", 
"" 
], ['x', ItemID.ruber, 0]);

//ремень

Recipes.addShaped({id: ItemID.rem, count: 2, data: 0}, [ 
"", 
"axa", 
"" 
], ['x', 265, 0, 'a', ItemID.tk8, 0]);