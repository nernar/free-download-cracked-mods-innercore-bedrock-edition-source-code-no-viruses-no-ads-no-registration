IDRegistry.genItemID("kitchenVentilation");
Item.createItem("kitchenVentilation", "Kitchen ventilation", {name: "ventilation", meta: 0}, {stack: 64});

Translation.addTranslation("Kitchen ventilation", {ru: "Кухонная вентиляция"});
Recipes.addShaped({id: ItemID.kitchenVentilation, count: 1, data: 0}, ["bvv", "bib", "bvb"], ["b",159,-1, "i",265,0]);
var kitchenVentilationModel = ModelAPI.newArray();
kitchenVentilationModel.addBoxByID("body", 0/16, 0/16, 0/16, 16/16, 2/16, 16/16, 155);
kitchenVentilationModel.addBoxByID("body1", 1/16, 2/16, 0/16, 15/16, 3/16, 15/16, 159,9);
kitchenVentilationModel.addBoxByID("body2", 2/16, 3/16, 0/16, 14/16, 4/16, 14/16, 159,9);
kitchenVentilationModel.addBoxByID("body3", 3/16, 4/16, 0/16, 13/16, 5/16, 13/16, 159,9);
kitchenVentilationModel.addBoxByID("body4", 4/16, 5/16, 0/16, 12/16, 6/16, 12/16, 159,9);
kitchenVentilationModel.addBoxByID("body5", 5/16, 6/16, 0/16, 11/16, 16/16, 6/16, 159,9);

Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.kitchenVentilation,kitchenVentilationModel,{}, false);
