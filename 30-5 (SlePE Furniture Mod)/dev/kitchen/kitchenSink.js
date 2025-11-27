IDRegistry.genItemID("kitchenSink");
Item.createItem("kitchenSink", "Kitchen sink", {name: "kitchenSink", meta: 0}, {stack: 64});

Translation.addTranslation("Kitchen sink", {ru: "Кухонная раковина"});
Recipes.addShaped({id: ItemID.kitchenSink, count: 1, data: 0}, ["vsv", "vpv", "vvv"], ["p",ItemID.kitchenPanel,0, "s", ItemID.sink,0]);

var kitchenSinkModel = ModelAPI.newArray();
kitchenSinkModel.addBoxByID("backBorder", 1/16, 12/16, 0.5/16, 15/16, 16/16, 2/16, 155);
kitchenSinkModel.addBoxByID("frontBorder", 1/16, 12/16, 8/16, 15/16, 16/16, 10/16, 155);
kitchenSinkModel.addBoxByID("leftBorder", 1/16, 12/16, 2/16, 3/16, 16/16, 8/16, 155);
kitchenSinkModel.addBoxByID("rightBorder", 13/16, 12/16, 2/16, 15/16, 16/16, 8/16, 155);
kitchenSinkModel.addBoxByID("water", 3/16, 12/16, 1/16, 13/16, 13.5/16, 8/16, 8);
kitchenSinkModel.addBoxByID("redButton", 5/16, 16/16, 0.5/16, 6/16, 17/16, 1.5/16, 35, 14);
kitchenSinkModel.addBoxByID("blueButton", 10/16, 16/16, 0.5/16, 11/16, 17/16, 1.5/16, 35, 11);
kitchenSinkModel.addBoxByID("gate_1", 7.5/16, 16/16, 0.5/16, 8.5/16, 18/16, 1.5/16, 1);
kitchenSinkModel.addBoxByID("gate_2", 7.5/16, 18/16, 0.5/16, 8.5/16, 19/16, 4/16, 1);
kitchenSinkModel.addBoxByID("gate_3", 7.5/16, 17/16, 3/16, 8.5/16, 18/16, 4/16, 1);
kitchenSinkModel.addBoxByID("frontPanel", 0/16, 0/16, 13/16, 16/16, 15/16, 14/16, 155);
kitchenSinkModel.addBoxByID("backPanel", 0/16, 0/16, 0/16, 16/16, 15/16, 1/16, 155);
kitchenSinkModel.addBoxByID("leftPanel", 0/16, 0/16, 1/16, 1/16, 15/16, 13/16, 155);
kitchenSinkModel.addBoxByID("rightPanel", 15/16, 0/16, 1/16, 16/16, 15/16, 13/16, 155);
kitchenSinkModel.addBoxByID("upPanel0", 0/16, 15/16, 10/16, 16/16, 16/16, 16/16, 159,9);
kitchenSinkModel.addBoxByID("upPanel1", 0/16, 15/16, 0/16, 16/16, 16/16, 0.5/16, 159,9);
kitchenSinkModel.addBoxByID("upPanel2", 0/16, 15/16, .5/16, 1/16, 16/16, 10/16, 159,9);
kitchenSinkModel.addBoxByID("upPanel3", 15/16, 15/16, .5/16, 16/16, 16/16, 10/16, 159,9);
kitchenSinkModel.addBoxByID("box", 1/16, 1/16, 14/16, 15/16, 14/16, 15/16, 155);
kitchenSinkModel.addBoxByID("hand", 2/16, 7/16, 15/16, 3/16, 10/16, 16/16, 159,9);
/*var a = Furniture.placeRotatableEntity(BlockID.kitchenSink, kitchenSinkModel);
var kitchenSinkRender=a.render;
var f = a.f;
Furniture.addReplacementItem({id:"kitchenSink"},{id:"kitchenSink"}, f);
TileEntity.registerPrototype(BlockID.kitchenSink, {
	init:function(){
		BlockRenderer.mapAtCoords (this.x, this.y, this.z,kitchenSinkRender[this.data.render]);
	},
	defaultValues: {
		render: 0
	}});*/
	
	Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.kitchenSink,kitchenSinkModel,{});
