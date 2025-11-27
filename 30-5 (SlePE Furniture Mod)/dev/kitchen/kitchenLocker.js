IDRegistry.genItemID("kitchenLocker");
Item.createItem("kitchenLocker", "Kitchen locker", {name: "kitchenPanel", meta: 1}, {stack: 64});

Translation.addTranslation("Kitchen locker", {ru: "Кухонный шкафчик"});

//TODO физ модаль+крафт
var kitchenLockerModel = ModelAPI.newArray();
kitchenLockerModel.addBoxByID("body", 0/16, 0/16, 0/16, 16/16, 15/16, 14/16, 155);
kitchenLockerModel.addBoxByID("top", 0/16, 15/16, 0/16, 16/16, 16/16, 16/16, 159,9);
kitchenLockerModel.addBoxByID("box", 1/16, 1/16, 14/16, 15/16, 14/16, 15/16, 155);
kitchenLockerModel.addBoxByID("hand", 2/16, 7/16, 15/16, 3/16, 10/16, 16/16, 159,9);

Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.kitchenLocker,kitchenLockerModel,{gui:storageGUI});

IDRegistry.genItemID("kitchenLocker2");
Item.createItem("kitchenLocker2", "Kitchen locker with 2 box", {name: "kitchenPanel", meta: 2}, {stack: 64});

Translation.addTranslation("Kitchen locker with 2 box", {ru: "Кухонный шкафчик с 2 ящиками"});

//TODO физ модаль+крафт
var kitchenLockerModel2 = ModelAPI.newArray();
kitchenLockerModel2.addBoxByID("body", 0/16, 0/16, 0/16, 16/16, 15/16, 14/16, 155);
kitchenLockerModel2.addBoxByID("top", 0/16, 15/16, 0/16, 16/16, 16/16, 16/16, 159,9);
kitchenLockerModel2.addBoxByID("downBox", 1/16, 2/16, 14/16, 15/16, 7/16, 15/16, 155);
kitchenLockerModel2.addBoxByID("upBox", 1/16, 9/16, 14/16, 15/16, 14/16, 15/16, 155);
kitchenLockerModel2.addBoxByID("downHand", 7/16, 4/16, 15/16, 9/16, 5/16, 16/16, 159,9);
kitchenLockerModel2.addBoxByID("upHand", 7/16, 11/16, 15/16, 9/16, 12/16, 16/16, 159,9);

Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.kitchenLocker2,kitchenLockerModel2,{gui:storageGUI});


IDRegistry.genItemID("kitchenPanel");
Item.createItem("kitchenPanel", "Kitchen panel", {name: "kitchenPanel", meta: 0}, {stack: 64});
Translation.addTranslation("Kitchen panel", {ru: "Кухонная панель"});
Recipes.addShaped({id: ItemID.kitchenPanel, count: 1, data: 0}, ["bbb", "qvq", "qqq"], ["q",155,0,"b",159,0]);
Recipes.addShaped({id: ItemID.kitchenLocker, count: 1, data: 0}, ["vvv", "cpv", "vvv"], ["p",ItemID.kitchenPanel,0, "c",54,0]);
Recipes.addShaped({id: ItemID.kitchenLocker2, count: 1, data: 0}, ["vcv", "vpv", "vcv"], ["p",ItemID.kitchenPanel,0, "c",54,0]);
var kitchenPanelWithoutBoxesModel = ModelAPI.newArray();
kitchenPanelWithoutBoxesModel.addBoxByID("body", 0/16, 0/16, 0/16, 16/16, 15/16, 14/16, 155);
kitchenPanelWithoutBoxesModel.addBoxByID("top", 0/16, 15/16, 0/16, 16/16, 16/16, 16/16, 159,9);
Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.kitchenPanel,kitchenPanelWithoutBoxesModel,{gui:storageGUI});

IDRegistry.genItemID("cornerKitchenPanel1");
Item.createItem("cornerKitchenPanel1", "Corner kitchen panel 1", {name: "kitchenPanel", meta: 3}, {stack: 64});
Translation.addTranslation("Corner kitchen panel 1", {ru: "Угловая кухонная панель 1"});
Recipes.addShaped({id: ItemID.cornerKitchenPanel1, count: 1, data: 0}, ["vvv", "vpv", "vvv"], ["p",ItemID.kitchenPanel,0]);

var cornerKitchenPanel = ModelAPI.newArray();
cornerKitchenPanel.addBoxByID("body", 0/16, 0/16, 0/16, 16/16, 15/16, 14/16, 155);
cornerKitchenPanel.addBoxByID("body2", 0/16, 0/16, 14/16, 14/16, 15/16, 16/16, 155);
cornerKitchenPanel.addBoxByID("top", 0/16, 15/16, 0/16, 16/16, 16/16, 16/16, 159,9);
Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.cornerKitchenPanel1,cornerKitchenPanel,{gui:storageGUI});

IDRegistry.genItemID("cornerKitchenPanel2");
Item.createItem("cornerKitchenPanel2", "Corner kitchen panel 2", {name: "kitchenPanel", meta: 4}, {stack: 64});
Translation.addTranslation("Corner kitchen panel 2", {ru: "Угловая кухонная панель 2"});
Recipes.addShaped({id: ItemID.cornerKitchenPanel2, count: 1, data: 0}, ["vvv", "vpv", "vvv"], ["p",ItemID.kitchenPanel,0]);
Recipes.addShaped({id: ItemID.cornerKitchenPanel1, count: 1, data: 0}, ["vvv", "vpv", "vvv"], ["p",ItemID.cornerKitchenPanel2,0]);
Recipes.addShaped({id: ItemID.cornerKitchenPanel2, count: 1, data: 0}, ["vvv", "vpv", "vvv"], ["p",ItemID.cornerKitchenPanel1,0]);
var cornerKitchenPanel2 = ModelAPI.newArray();
cornerKitchenPanel2.addBoxByID("body", 0/16, 0/16, 0/16, 16/16, 15/16, 14/16, 155);
cornerKitchenPanel2.addBoxByID("body2", 2/16, 0/16, 14/16, 16/16, 15/16, 16/16, 155);
cornerKitchenPanel2.addBoxByID("top", 0/16, 15/16, 0/16, 16/16, 16/16, 16/16, 159,9);
Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.cornerKitchenPanel2,cornerKitchenPanel2,{gui:storageGUI});
