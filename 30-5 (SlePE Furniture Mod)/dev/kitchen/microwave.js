IDRegistry.genItemID("microwave");
Item.createItem("microwave", "Microwave", {name: "microwawe", meta: 1}, {stack: 64});

Translation.addTranslation("Microwave", {ru: "Микроволновая печь"});
Recipes.addShaped({id: ItemID.microwave, count: 1, data: 0}, ["qqq", "bgg", "bqq"], ["q",406,0, "b", 77,0,"g",20,0]);

var microwaveModel = ModelAPI.newArray();
microwaveModel.addBoxByID("backPlate", 0/16, 1/16, 0/16, 16/16, 9/16, 1/16, 155);
microwaveModel.addBoxByID("leftPlate", 0/16, 1/16, 1/16, 1/16, 9/16, 10/16, 155);
microwaveModel.addBoxByID("rightPlate", 10/16, 1/16, 1/16, 16/16, 9/16, 10/16, 155);
microwaveModel.addBoxByID("topPlate", 0/16, 9/16, 0/16, 16/16, 10/16, 10/16, 155);
microwaveModel.addBoxByID("bottomPlate", 0/16, 0/16, 0/16, 16/16, 1/16, 10/16, 155);
microwaveModel.addBoxByID("leftBorder", 1/16, 1/16, 10/16, 2/16, 9/16, 11/16, 159,9);
microwaveModel.addBoxByID("rightBorder", 9/16, 1/16, 10/16, 10/16, 9/16, 11/16, 159,9);
microwaveModel.addBoxByID("bottomBorder", 1/16, 1/16, 10/16, 10/16, 2/16, 11/16, 159,9);
microwaveModel.addBoxByID("topBorder", 1/16, 9/16, 10/16, 10/16, 10/16, 11/16, 159,9);
microwaveModel.addBoxByID("glass", 2/16, 2/16, 10/16, 9/16, 9/16, 11/16, 20);
for(var i = 0; i<2; i++){
	var y = 3+2*i;
	microwaveModel.addBoxByID("button0"+i,11/16, y/16, 10/16, 12/16, (y+1)/16, 10.5/16, 1);
	microwaveModel.addBoxByID("button1"+i,12.5/16, y/16, 10/16, 13.5/16, (y+1)/16, 10.5/16, 1);
	microwaveModel.addBoxByID("button2"+i,14/16, y/16, 10/16, 15/16, (y+1)/16, 10.5/16, 1);
}
microwaveModel.addBoxByID("button110",11/16, 1/16, 10/16, 12/16, 2/16, 10.5/16, 35,5);
microwaveModel.addBoxByID("button111",12.5/16, 1/16, 10/16, 13.5/16, 2/16, 10.5/16, 1);
microwaveModel.addBoxByID("button112",14/16, 1/16, 10/16, 15/16, 2/16, 10.5/16, 35,14);
microwaveModel.addBoxByID("display",11/16, 7/16, 10/16, 15/16, 9/16, 10.2/16, 159,15);

Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.microwave,microwaveModel,{});
