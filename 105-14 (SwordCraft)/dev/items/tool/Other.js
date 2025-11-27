importLib("ToolType", "*");
IDRegistry.genItemID("KomOFsneg");
Item.createThrowableItem("KomOFsneg", "Комок снега", {name: "KomOFsneg", meta: 0}, {stack: 16});
Recipes.addShaped({id: ItemID.KomOFsneg, count: 1, data: 0}, [
"bab",
"aca",
"bab"
], ['c', 91, 0, 'a', 80, 0, 'b', 332, 0]);
Item.registerThrowableFunction("KomOFsneg", function(coords, projectile, item, target){
Entity.spawn(coords.x, coords.y, coords.z, 21);});


IDRegistry.genItemID("PechFerr");
Item.createThrowableItem("PechFerr", "Железная печать", {name: "PechFerr", meta: 0}, {stack: 16});
Recipes.addShaped({id: ItemID.PechFerr, count: 1, data: 0}, [
"z z",
"hah",
"z z"
], ['z', 377, 0, 'a', ItemID.OMetaLL, 0, 'h', 348, 0]);

Item.registerThrowableFunction("PechFerr", function(coords, projectile, item, target){
Entity.spawn(coords.x, coords.y, coords.z, 20);});



IDRegistry.genItemID("LBY");
Item.createThrowableItem("LBY", "Молния", {name: "LBY", meta: 0}, {stack: 1});
Item.registerThrowableFunction("LBY", function(coords, projectile, item, target){
Entity.spawn(coords.x, coords.y, coords.z, 97);});

Recipes.addShaped({id: ItemID.LBY, count: 1, data: 0}, [
" c ",
" a ",
" c "
], ['c', 368, 0, 'a', ItemID.OgonKu, 0]);

