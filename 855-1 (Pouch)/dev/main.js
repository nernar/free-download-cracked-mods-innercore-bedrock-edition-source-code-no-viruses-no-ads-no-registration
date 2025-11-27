IMPORT("BackpackAPI");

//create
IDRegistry.genItemID("pouch");

Item.createItem("pouch", "Pouch", {name : "pouch", meta : 0}, {stack : 1});

IDRegistry.genItemID("pouchiron");

Item.createItem("pouchiron", "Iron Pouch", {name : "pouchiron", meta : 0}, {stack : 1});

IDRegistry.genItemID("pouchgold");

Item.createItem("pouchgold", "Gold Pouch", {name : "pouchgold", meta : 0}, {stack : 1});

IDRegistry.genItemID("pouchdiamond");

Item.createItem("pouchdiamond", "Diamond Pouch", {name : "pouchdiamond", meta : 0}, {stack : 1});

//register
BackpackRegistry.register(ItemID.pouch, {
    slots: 10,
    inRow: 5});

BackpackRegistry.register(ItemID.pouchiron, {
    slots: 15,
    inRow: 5});

BackpackRegistry.register(ItemID.pouchgold, {
    slots: 20,
    inRow: 5});

BackpackRegistry.register(ItemID.pouchdiamond, {
    slots: 25,
    inRow: 5});

//recipes        
Recipes.addShaped({id: ItemID.pouch, count: 1, data: 0}, 
["bab", 
 "a a",
 "aaa"],
["a", 334	, 0, "b", 287, 0]);

Recipes.addShaped({id: ItemID.pouchiron, count: 1, data: 0}, 
["cac", 
 "aba",
 "aaa"],
["a", 265	, 0, "b", ItemID.pouch, 0, "c", 287, 0]);

Recipes.addShaped({id: ItemID.pouchgold, count: 1, data: 0}, 
["cac", 
 "aba",
 "aaa"],
["a", 266, 0, "b", ItemID.pouchiron, 0, "c", 287, 0]);

Recipes.addShaped({id: ItemID.pouchdiamond, count: 1, data: 0}, 
["cac", 
 "aba",
 "aaa"],
["a", 264, 0, "b", ItemID.pouchgold, 0, "c", 287, 0]);




