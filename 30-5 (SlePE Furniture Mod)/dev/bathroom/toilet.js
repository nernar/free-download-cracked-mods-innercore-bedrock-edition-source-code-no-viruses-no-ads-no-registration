IDRegistry.genItemID("toilet");
Item.createItem("toilet", "Toilet", {name: "toilet", meta: 0}, {stack: 64});

Translation.addTranslation("Toilet", {ru: "Унитаз"});
Recipes.addShaped({id: ItemID.toilet, count: 1, data: 0}, ["iib", "qvq", "vqq"], ["q",155,0,"b", 77,0, "i",406,0]);

var toiletModel = ModelAPI.newArray();
toiletModel.addBoxByID("downPlate", 3/16, 0, 3/16, 13/16, 6/16, 13/16, 155);
toiletModel.addBoxByID("backPlate", 1/16, 6/16, 1/16, 15/16, 18/16, 6/16, 155);
toiletModel.addBoxByID("upPlate", 0/16, 18/16, 0/16, 16/16, 20/16, 7/16, 155);
toiletModel.addBoxByID("button", 6/16, 20/16, 2/16, 10/16, 20.5/16, 4/16, 1);
toiletModel.addBoxByID("leftSideBorder", 1/16, 6/16, 6/16, 3/16, 11/16, 15/16, 155);
toiletModel.addBoxByID("rightSideBorder", 13/16, 6/16, 6/16, 15/16, 11/16, 15/16, 155);
toiletModel.addBoxByID("frontSideBorder", 3/16, 6/16, 13/16, 13/16, 11/16, 15/16, 155);
toiletModel.addBoxByID("waterPlate", 3/16, 6/16, 3/16, 13/16, 6.1/16, 13/16, 8);
Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.toilet,toiletModel,{});
