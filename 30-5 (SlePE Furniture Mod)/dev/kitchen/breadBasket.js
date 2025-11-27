IDRegistry.genItemID("breadBasket");
Item.createItem("breadBasket", "Bread Basket", {name: "breadBasket", meta: 0}, {stack: 64});

Translation.addTranslation("Bread Basket", {ru: "Хлебница"});
Recipes.addShaped({id: ItemID.breadBasket, count: 1, data: 0}, ["vvp", "pvp", "ppp"], ["p",5,-1]);
var breadBasketModel = ModelAPI.newArray();
breadBasketModel.addBoxByID("0", 1/16, 0, 0/16, 15/16, 2/16, 10/16, 5);
breadBasketModel.addBoxByID("1", 1/16, 2/16, 0/16, 15/16, 4/16, 9/16, 5);
breadBasketModel.addBoxByID("2", 1/16, 4/16, 0/16, 15/16, 5/16, 8/16, 5);
breadBasketModel.addBoxByID("3", 1/16, 5/16, 0/16, 15/16, 6/16, 7/16, 5);
breadBasketModel.addBoxByID("4", 1/16, 6/16, 0/16, 15/16, 7/16, 6/16, 5);
breadBasketModel.addBoxByID("5", 1/16, 7/16, 0/16, 15/16, 8/16, 4/16, 5);

Furniture.placeUnifiedEntity(BlockID.woodFurniture, ItemID.breadBasket,breadBasketModel,{gui:storageGUI});
