IDRegistry.genBlockID("shower");
Block.createBlock("shower", [
	{name: "Shower", texture: [["glass", 0]], inCreative: false},
	{name: "Shower", texture: [["glass", 0]], inCreative: false},
	{name: "Shower", texture: [["glass", 0]], inCreative: false},
	{name: "Shower", texture: [["glass", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
Block.setShape(BlockID.shower, 0, 0, 0, 1, 1/16, 1);
IDRegistry.genBlockID("showerTop");
Block.createBlock("showerTop", [
	{name: "Shower", texture: [["glass", 0]], inCreative: false},
	{name: "Shower", texture: [["glass", 0]], inCreative: false},
	{name: "Shower", texture: [["glass", 0]], inCreative: false},
	{name: "Shower", texture: [["glass", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
Block.setShape(BlockID.showerTop, 0, 15/16, 0, 1, 1, 1);
IDRegistry.genItemID("shower");
Item.createItem("shower", "Shower", {name: "shower", meta: 0}, {stack: 64});

Translation.addTranslation("Shower", {ru: "Душ"});
Recipes.addShaped({id: ItemID.shower, count: 1, data: 0}, ["qiq", "qgq", "qqq"], ["q",155,0, "g", 20, 0, "i",265,0]);

var showerModel = ModelAPI.newArray();
showerModel.addBoxByID("downPlate", 0/16, 0/16, 0/16, 16/16, 1/16, 16/16, 155);
showerModel.addBoxByID("bottomPlastic0", 0/16, 1/16, 0/16, 1/16, 16/16, 1/16, 155);
showerModel.addBoxByID("bottomPlastic1", 15/16, 1/16, 0/16, 16/16, 16/16, 1/16, 155);
showerModel.addBoxByID("bottomPlastic2", 0/16, 1/16, 15/16, 1/16, 16/16, 16/16, 155);
showerModel.addBoxByID("bottomPlastic3", 15/16, 1/16, 15/16, 16/16, 16/16, 16/16, 155);
showerModel.addBoxByID("leftBottomBorder", 0/16, 15/16, 1/16, 1/16, 16/16, 15/16, 155);
showerModel.addBoxByID("rightBottomTopBorder", 15/16, 15/16, 1/16, 16/16, 16/16, 15/16, 155);
showerModel.addBoxByID("backBottomBorder", 1/16, 15/16, 0/16, 15/16, 16/16, 1/16, 155);
showerModel.addBoxByID("glassPanelLeft", 0/16, 1/16, 1/16, 1/16, 15/16, 15/16, 20);
showerModel.addBoxByID("glassPanelRight", 15/16, 1/16, 1/16, 16/16, 15/16, 15/16, 20);
showerModel.addBoxByID("glassPanelBack", 1/16, 1/16, 0/16, 15/16, 15/16, 1/16, 20);
var showerModelTop = ModelAPI.newArray();
showerModelTop.addBoxByID("topPlastic0", 0/16, 16/16-1, 0/16, 1/16, 31/16-1, 1/16, 155);
showerModelTop.addBoxByID("topPlastic1", 15/16, 16/16-1, 0/16, 16/16, 31/16-1, 1/16, 155);
showerModelTop.addBoxByID("topPlastic2", 0/16, 16/16-1, 15/16, 1/16, 31/16-1, 16/16, 155);
showerModelTop.addBoxByID("topPlastic3", 15/16, 16/16-1, 15/16, 16/16, 31/16-1, 16/16, 155);
showerModelTop.addBoxByID("leftTopBorder", 0/16, 31/16-1, 0/16, 1/16, 32/16-1, 16/16, 155);
showerModelTop.addBoxByID("rightTopBorder", 15/16, 31/16-1, 0/16, 16/16, 32/16-1, 16/16, 155);
showerModelTop.addBoxByID("backTopBorder", 1/16, 31/16-1, 0/16, 15/16, 32/16-1, 1/16, 155);
showerModelTop.addBoxByID("frontTopBorder", 1/16, 31/16-1, 15/16, 15/16, 32/16-1, 16/16, 155);
showerModelTop.addBoxByID("glassPanelLeftTop", 0/16, 16/16-1, 1/16, 1/16, 31/16-1, 15/16, 20);
showerModelTop.addBoxByID("glassPanelRightTop", 15/16, 16/16-1, 1/16, 16/16, 31/16-1, 15/16, 20);
showerModelTop.addBoxByID("glassPanelBackTop", 1/16, 16/16-1, 0/16, 15/16, 31/16-1, 1/16, 20);
showerModelTop.addBoxByID("gate_1", 7.5/16, 16/16, 0/16, 8.5/16, 18/16, 1/16, 1);
showerModelTop.addBoxByID("gate_2", 7.5/16, 18/16, 0/16, 8.5/16, 19/16, 8/16, 1);
showerModelTop.addBoxByID("gate_3", 6/16, 17/16, 6/16, 10/16, 18/16, 10/16, 1);
var fshower = Furniture.placeRotatableBlock(BlockID.shower, showerModel);
var f2shower = Furniture.placeRotatableBlock(BlockID.showerTop, showerModelTop);
Furniture.addReplacementItem({id:"shower"},{id:"shower"}, function(c,i,b){
	fshower(c,i,b);
	f2shower({x:c.x, y:c.y+1, z:c.z});
}, function(c){World.setBlock(c.x, c.y+1, c.z, 0);});
Block.registerDropFunction(BlockID.showerTop, function(c, id, data, diggingLevel, toolLevel){
			World.setBlock(c.x, c.y-1, c.z, 0);
			return [[ItemID.shower, 1, 0]]; 
		});
