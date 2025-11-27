IDRegistry.genItemID("industrialLamp");
Item.createItem("industrialLamp", "Indastrial lamp", {name: "industrialLamp", meta: 0}, {stack: 64});

Translation.addTranslation("Indastrial lamp", {ru: "Индустриальная лампа"});
Recipes.addShaped({id: ItemID.industrialLamp, count: 1, data: 0}, ["qqq", "qgq", "vbv"], ["b",155,0,"q", 406,0, "g",89,0]);

var indLampModel = ModelAPI.newArray();
indLampModel.addBoxByID("leg", 6/16, 0, 6/16, 10/16, 4/16, 10/16, 155);
indLampModel.addBoxByID("bottom", 4/16, 4/16, 4/16, 12/16, 6/16, 12/16, 155);
indLampModel.addBoxByID("leg0", 4/16, 6/16, 4/16, 6/16, 12/16, 6/16, 155);
indLampModel.addBoxByID("leg1", 4/16, 6/16, 10/16, 6/16, 12/16, 12/16, 155);
indLampModel.addBoxByID("leg2", 10/16, 6/16, 4/16, 12/16, 12/16, 6/16, 155);
indLampModel.addBoxByID("leg3", 10/16, 6/16, 10/16, 12/16, 12/16, 12/16, 155);
indLampModel.addBoxByID("top", 3/16, 12/16, 3/16, 13/16, 14/16, 13/16, 155);
indLampModel.addBoxByID("top2", 6/16, 14/16, 6/16, 10/16, 15/16, 10/16, 155);
indLampModel.addBoxByID("lamp", 7/16, 6/16, 7/16, 9/16, 8/16, 9/16, 41);

Furniture.placeUnifiedEntity(BlockID.lightFurniture, ItemID.industrialLamp,indLampModel,{}, false);
