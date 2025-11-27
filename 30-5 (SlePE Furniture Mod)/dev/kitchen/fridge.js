IDRegistry.genBlockID("fridge");
Block.createBlock("fridge", [
	{name: "Fridge", texture: [["glass", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genBlockID("fridgeTop");
Block.createBlock("fridgeTop", [
	{name: "Fridge", texture: [["glass", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("fridge");
Item.createItem("fridge", "Fridge", {name: "fridge", meta: 0}, {stack: 64});

Translation.addTranslation("Fridge", {ru: "Холодильник"});
Recipes.addShaped({id: ItemID.fridge, count: 1, data: 0}, ["qgq", "qgq", "qqq"], ["q",155,0, "g", 20, 0]);

var fridgeModel = ModelAPI.newArray();
fridgeModel.addBoxByID("body", 0/16, 0/16, 0/16, 16/16, 16/16, 15/16, 155);
fridgeModel.addBoxByID("panel", 1/16, 1/16, 15/16, 15/16, 10/16, 16/16, 155);
fridgeModel.addBoxByID("hand", 2/16, 3/16, 16/16, 3/16, 7/16, 17/16, 159,15);
fridgeModel.addBoxByID("panel2", 1/16, 12/16, 15/16, 15/16, 16/16, 16/16, 155);
var fridgeModelTop = ModelAPI.newArray();
fridgeModelTop.addBoxByID("body", 0/16, 0/16, 0/16, 16/16, 16/16, 15/16, 155);
fridgeModelTop.addBoxByID("panel", 1/16, 0/16, 15/16, 15/16, 15/16, 16/16, 155);
fridgeModelTop.addBoxByID("hand", 2/16, 2/16, 16/16, 3/16, 6/16, 17/16, 159,15);

var a = Furniture.placeRotatableEntity(BlockID.fridge, fridgeModel);
var b = Furniture.placeRotatableEntity(BlockID.fridgeTop, fridgeModelTop);
var fridgeRender=a.render;
var fridgeTopRender=b.render;
var f = function(c,i,b){
	World.setBlock(c.x, c.y+1, c.z,BlockID.fridgeTop);
	a.f(c,i,b);
	a.f({x:c.x, y:c.y+1, z:c.z});
};
Furniture.addReplacementItem({id:"fridge"},{id:"fridge"}, f, function(c){World.setBlock(c.x, c.y+1, c.z, 0);});
TileEntity.registerPrototype(BlockID.fridge, {
	init:function(){
		BlockRenderer.mapAtCoords (this.x, this.y, this.z,fridgeRender[this.data.render]);
	},
	defaultValues: {
		render: 0
	}});
	TileEntity.registerPrototype(BlockID.fridgeTop, {
	init:function(){
		BlockRenderer.mapAtCoords (this.x, this.y, this.z,fridgeTopRender[this.data.render]);
	},
	defaultValues: {
		render: 0
	}});
	Block.registerDropFunction(BlockID.fridgeTop, function(c, id, data, diggingLevel, toolLevel){
			World.setBlock(c.x, c.y-1, c.z, 0);
			return [[ItemID.shower, 1, 0]]; 
		});
