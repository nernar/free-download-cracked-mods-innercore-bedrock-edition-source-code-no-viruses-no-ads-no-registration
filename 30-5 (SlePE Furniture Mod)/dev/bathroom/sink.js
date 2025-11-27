IDRegistry.genItemID("sink");
Item.createItem("sink", "Sink", {name: "sink", meta: 0}, {stack: 64});

Translation.addTranslation("Sink", {ru: "Раковина"});
Recipes.addShaped({id: ItemID.sink, count: 1, data: 0}, ["qiq", "vqv", "vqv"], ["q",406,0, "i", 265,0]);

var sinkModel = ModelAPI.newArray();
sinkModel.addBoxByID("downPlate", 3/16, 0, 0/16, 13/16, 12/16, 8/16, 155);
sinkModel.addBoxByID("backBorder", 1/16, 12/16, 0/16, 15/16, 16/16, 2/16, 155);
sinkModel.addBoxByID("frontBorder", 1/16, 12/16, 8/16, 15/16, 16/16, 10/16, 155);
sinkModel.addBoxByID("leftBorder", 1/16, 12/16, 2/16, 3/16, 16/16, 8/16, 155);
sinkModel.addBoxByID("rightBorder", 13/16, 12/16, 2/16, 15/16, 16/16, 8/16, 155);
sinkModel.addBoxByID("water", 3/16, 12/16, 1/16, 13/16, 13.5/16, 8/16, 8);
sinkModel.addBoxByID("redButton", 5/16, 16/16, 0.5/16, 6/16, 17/16, 1.5/16, 35, 14);
sinkModel.addBoxByID("blueButton", 10/16, 16/16, 0.5/16, 11/16, 17/16, 1.5/16, 35, 11);
sinkModel.addBoxByID("gate_1", 7.5/16, 16/16, 0.5/16, 8.5/16, 18/16, 1.5/16, 1);
sinkModel.addBoxByID("gate_2", 7.5/16, 18/16, 0.5/16, 8.5/16, 19/16, 4/16, 1);
sinkModel.addBoxByID("gate_3", 7.5/16, 17/16, 3/16, 8.5/16, 18/16, 4/16, 1);

Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.sink,sinkModel,{});
