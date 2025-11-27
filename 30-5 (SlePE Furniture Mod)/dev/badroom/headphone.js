IDRegistry.genItemID("headphone");
Item.createItem("headphone", "Headphone", {name: "stick", meta: 0}, {stack: 64});
Translation.addTranslation("Headphone", {ru: "Наушники"});
Recipes.addShaped({id: ItemID.itemShelf, count: 1, data: 0}, ["qvq", "vqv", "vqv"], ["q",155,0]);
var headphoneModel = ModelAPI.newArray();
headphoneModel.addBoxByID("0", 3/16, 1.5/16, 6.5/16, 4/16, 2/16, 9.5/16, 35,15);
headphoneModel.addBoxByID("1", 3/16, 5/16, 6.5/16, 4/16, 5.5/16, 9.5/16, 35,15);
headphoneModel.addBoxByID("2", 3/16, 2/16, 6/16, 4/16, 5/16, 6.5/16, 35,15);
headphoneModel.addBoxByID("3", 3/16, 2/16, 9.5/16, 4/16, 5/16, 10/16, 35,15);
headphoneModel.addBoxByID("4", 3.1/16, 2/16, 6.5/16, 3.2/16, 5/16, 9.5/16, 152,0);
headphoneModel.addBoxByID("5", 3.3/16, 2/16, 6.5/16, 3.6/16, 5/16, 9.5/16, 35,7);
headphoneModel.addBoxByID("6", 2.5/16, 2.25/16, 6.75/16, 3.1/16, 4.75/16, 9.25/16, 35,7);

headphoneModel.addBoxByID("7", 2.57/16, 4.25/16, 7.5/16, 2.925/16, 10/16, 8.5/16, 35,15);
headphoneModel.addBoxByID("8", 2.3/16, 5.5/16, 7.5/16, 2.57/16, 10/16, 8.5/16, 35,15);
headphoneModel.addBoxByID("9", 2.57/16, 4.25/16, 7.4/16, 2.925/16, 10/16, 7.53/16, 152,0);
headphoneModel.addBoxByID("10", 2.57/16, 4.25/16, 8.48/16, 2.925/16, 10/16, 8.6/16, 152,0);
for(var i = 0; i<3;i++){
	x=i*0.75/16;
	if(i==2){
		headphoneModel.addBoxByID("7", 2.57/16+x*2, 10/16+x, 7.5/16, 8/16, 11/16+x, 8.5/16, 35,15);
		headphoneModel.addBoxByID("7", 2.57/16+x*2, 10/16+x, 7.4/16, 8/16, 10.25/16+x, 7.53/16, 152,0);
		headphoneModel.addBoxByID("7", 2.57/16+x*2, 10/16+x, 8.48/16, 8/16, 10.25/16+x, 8.6/16, 152,0);
		break;
	}
	headphoneModel.addBoxByID("7", 2.57/16+x*2, 10/16+x, 7.5/16, 4.1/16+x*2, 11/16+x, 8.5/16, 35,15);
	headphoneModel.addBoxByID("7", 2.57/16+x*2, 10/16+x, 7.4/16, 4.1/16+x*2, 10.25/16+x, 7.53/16, 152,0);
	headphoneModel.addBoxByID("7", 2.57/16+x*2, 10/16+x, 8.48/16, 4.1/16+x*2, 10.25/16+x, 8.6/16, 152,0);
	//headphoneModel.addBoxByID("7", 4.1/16+x*2, 10/16+x, 7.4/16, 4.2/16+x*2, 10.25/16+x, 8.6/16, 152,0);
	headphoneModel.addBoxByID("7", 4.1/16+x*2, 10/16+x, 7.4/16, 4.2/16+x*2, 11/16+x, 7.5/16, 152,0);
	headphoneModel.addBoxByID("7", 4.1/16+x*2, 10/16+x, 8.5/16, 4.2/16+x*2, 11/16+x, 8.6/16, 152,0);
}
headphoneModel.copyBox(["0","1","2","3","4","5","6","7","8","9","10"]);
headphoneModel.mirrorX(["0","1","2","3","4","5","6","7","8","9","10"],{x:.5,y:.5,z:.5});
headphoneModel.addBoxByID("17", 7/16, 11.5/16, 5/16, 9/16, 14/16, 5.5/16, 155,0);
headphoneModel.addBoxByID("15", 7/16, 11/16, 5/16, 9/16, 11.5/16, 9/16, 155,0);
headphoneModel.addBoxByID("5", 3/16, 3.25/16, 7.25/16, 3.25/16, 3.5/16, 12/16, 35,15);
headphoneModel.addBoxByID("5", 3/16, 3.25/16, 12/16, (7-1)/16, 3.5/16, 12.25/16, 35,15);
headphoneModel.addBoxByID("5", (6-1)/16, 3/16, 11.75/16, (7.5-1)/16, 3.75/16, 12.5/16, 35,15);
headphoneModel.addBoxByID("5", (7.5-1)/16, 3/16, 11.75/16, (8-1)/16, 3.75/16, 12.5/16, 152,0);
headphoneModel.transform("all",{z:-5/16,y:0,x:0});

//headphoneModel.addBoxByID("0", 0/16, 0/16, 0/16, 0/16, 0/16, 0/16, 35,0);
Furniture.placeUnifiedEntity(BlockID.woodFurniture, ItemID.headphone,headphoneModel,{});
