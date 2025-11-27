IDRegistry.genItemID("stoolOak");
Item.createItem("stoolOak", "Oak stool", {name: "stool", meta: 0}, {stack: 64});
Translation.addTranslation("Oak stool", {ru: "Дубовая табуретка"});
Recipes.addShaped({id: ItemID.stoolOak, count: 1, data: 0}, ["plp", "pvp", "pvp"], ["l",17,0, "p", 5,0]);
var stoolModel = ModelAPI.newArray();
var data = 0;
stoolModel.addBoxByID("top", 3/16, 10/16, 3/16, 13/16, 11/16, 13/16, 17,data);
stoolModel.addBoxByID("hand0", 4/16, 0/16, 4/16, 6/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand1", 10/16, 0/16, 4/16, 12/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand2", 4/16, 0/16, 10/16, 6/16, 10/16, 12/16, 5,data);
stoolModel.addBoxByID("hand3", 10/16, 0/16, 10/16, 12/16, 10/16, 12/16, 5,data);

Furniture.placeUnifiedEntity(BlockID.woodFurniture, ItemID.stoolOak,stoolModel,{}, false);


IDRegistry.genItemID("stoolBirch");
Item.createItem("stoolBirch", "Birch stool", {name: "stool", meta: 2}, {stack: 64});
Translation.addTranslation("Birch stool", {ru: "Берёзовая табуретка"});
Recipes.addShaped({id: ItemID.stoolBirch, count: 1, data: 0}, ["plp", "pvp", "pvp"], ["l",17,2, "p", 5,2]);
var stoolModel = ModelAPI.newArray();
data = 2;
stoolModel.addBoxByID("top", 3/16, 10/16, 3/16, 13/16, 11/16, 13/16, 17,data);
stoolModel.addBoxByID("hand0", 4/16, 0/16, 4/16, 6/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand1", 10/16, 0/16, 4/16, 12/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand2", 4/16, 0/16, 10/16, 6/16, 10/16, 12/16, 5,data);
stoolModel.addBoxByID("hand3", 10/16, 0/16, 10/16, 12/16, 10/16, 12/16, 5,data);

Furniture.placeUnifiedEntity(BlockID.woodFurniture, ItemID.stoolBirch,stoolModel,{}, false);


IDRegistry.genItemID("stoolPines");
Item.createItem("stoolPines", "Pines stool", {name: "stool", meta: 1}, {stack: 64});
Translation.addTranslation("Pines stool", {ru: "Сосновая табуретка"});
Recipes.addShaped({id: ItemID.stoolPines, count: 1, data: 0}, ["plp", "pvp", "pvp"], ["l",17,1, "p", 5,1]);
var stoolModel = ModelAPI.newArray();
data = 1;
stoolModel.addBoxByID("top", 3/16, 10/16, 3/16, 13/16, 11/16, 13/16, 17,data);
stoolModel.addBoxByID("hand0", 4/16, 0/16, 4/16, 6/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand1", 10/16, 0/16, 4/16, 12/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand2", 4/16, 0/16, 10/16, 6/16, 10/16, 12/16, 5,data);
stoolModel.addBoxByID("hand3", 10/16, 0/16, 10/16, 12/16, 10/16, 12/16, 5,data);

Furniture.placeUnifiedEntity(BlockID.woodFurniture, ItemID.stoolPines,stoolModel,{}, false);


IDRegistry.genItemID("stoolJungle");
Item.createItem("stoolJungle", "Jungle stool", {name: "stool", meta: 3}, {stack: 64});
Translation.addTranslation("Jungle stool", {ru: "Тропическая табуретка"});
Recipes.addShaped({id: ItemID.stoolJungle, count: 1, data: 0}, ["plp", "pvp", "pvp"], ["l",17,3, "p", 5,3]);
var stoolModel = ModelAPI.newArray();
data = 3;
stoolModel.addBoxByID("top", 3/16, 10/16, 3/16, 13/16, 11/16, 13/16, 17,data);
stoolModel.addBoxByID("hand0", 4/16, 0/16, 4/16, 6/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand1", 10/16, 0/16, 4/16, 12/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand2", 4/16, 0/16, 10/16, 6/16, 10/16, 12/16, 5,data);
stoolModel.addBoxByID("hand3", 10/16, 0/16, 10/16, 12/16, 10/16, 12/16, 5,data);

Furniture.placeUnifiedEntity(BlockID.woodFurniture, ItemID.stoolJungle,stoolModel,{}, false);


IDRegistry.genItemID("stoolAcacia");
Item.createItem("stoolAcacia", "Acacia stool", {name: "stool", meta: 4}, {stack: 64});
Translation.addTranslation("Acacia stool", {ru: "Акациевая табуретка"});
Recipes.addShaped({id: ItemID.stoolAcacia, count: 1, data: 0}, ["plp", "pvp", "pvp"], ["l",162,0, "p", 5,4]);
var stoolModel = ModelAPI.newArray();
data = 4;
stoolModel.addBoxByID("top", 3/16, 10/16, 3/16, 13/16, 11/16, 13/16, 162,0);
stoolModel.addBoxByID("hand0", 4/16, 0/16, 4/16, 6/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand1", 10/16, 0/16, 4/16, 12/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand2", 4/16, 0/16, 10/16, 6/16, 10/16, 12/16, 5,data);
stoolModel.addBoxByID("hand3", 10/16, 0/16, 10/16, 12/16, 10/16, 12/16, 5,data);

Furniture.placeUnifiedEntity(BlockID.woodFurniture, ItemID.stoolAcacia,stoolModel,{}, false);


IDRegistry.genItemID("stoolDarkOak");
Item.createItem("stoolDarkOak", "Dark oak stool", {name: "stool", meta: 5}, {stack: 64});
Translation.addTranslation("Dark oak stool", {ru: "Тёмно-дубовая табуретка"});
Recipes.addShaped({id: ItemID.stoolDarkOak, count: 1, data: 0}, ["plp", "pvp", "pvp"], ["l",162,1, "p", 5,5]);
var stoolModel = ModelAPI.newArray();
data = 5;
stoolModel.addBoxByID("top", 3/16, 10/16, 3/16, 13/16, 11/16, 13/16, 162,1);
stoolModel.addBoxByID("hand0", 4/16, 0/16, 4/16, 6/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand1", 10/16, 0/16, 4/16, 12/16, 10/16, 6/16, 5,data);
stoolModel.addBoxByID("hand2", 4/16, 0/16, 10/16, 6/16, 10/16, 12/16, 5,data);
stoolModel.addBoxByID("hand3", 10/16, 0/16, 10/16, 12/16, 10/16, 12/16, 5,data);

Furniture.placeUnifiedEntity(BlockID.woodFurniture, ItemID.stoolDarkOak,stoolModel,{}, false);
