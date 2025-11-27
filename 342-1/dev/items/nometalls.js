IDRegistry.genItemID("flisotuachewn");
Item.createItem("flisotuachewn", "Флисотуачеун", {name: "flisotuachewn", meta: 0}, {stack: 64});

Recipes.addFurnace(BlockID.flisotuachewnore, ItemID.flisotuachewn, 1);



Recipes.addShaped({id: 35, count: 1, data: 6}, [ "   ", "ab ", "   "], ['a', ItemID.flisotuachewn, 0, 'b', 35, 0]);

Recipes.addShaped({id: 351, count: 2, data: 13}, [ "   ", "ab ", "   "], ['a', ItemID.flisotuachewn, 0, 'b', 351, 5]);

Recipes.addShaped({id: 351, count: 3, data: 13}, [ "   ", "abc", "   "], ['a', ItemID.flisotuachewn, 0, 'b', 351, 4, 'c', 351, 1]);

Recipes.addShaped({id: 159, count: 1, data: 6}, [ "bbb", "bab", "bbb"], ['a', ItemID.flisotuachewn, 0, 'b', 172, 0]);



IDRegistry.genItemID("graphit");
Item.createItem("graphit", "Графит", {name: "graphit", meta: 0}, {stack: 64});


IDRegistry.genItemID("icecrystal");
Item.createItem("icecrystal", "Ледяной кристалл", {name: "icecrystal", meta: 0}, {stack: 64});

IDRegistry.genItemID("forceicecrystal");
Item.createItem("forceicecrystal", "Кристалл Арктики", {name: "forceicecrystal", meta: 0}, {stack: 64});


IDRegistry.genItemID("nightmare");
Item.createItem("nightmare", "Ночной Кошмар", {name: "nightmare", meta: 0}, {stack: 64});

IDRegistry.genItemID("bloodstone");
Item.createItem("bloodstone", "Кровавый камень", {name: "bloodstone", meta: 0}, {stack: 64});

IDRegistry.genItemID("agat");
Item.createItem("agat", "Агат", {name: "agat", meta: 0}, {stack: 64});

















































