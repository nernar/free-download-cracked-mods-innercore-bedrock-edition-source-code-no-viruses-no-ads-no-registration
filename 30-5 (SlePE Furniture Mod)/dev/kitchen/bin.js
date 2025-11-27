IDRegistry.genBlockID("bin");
Block.createBlock("bin", [
	{name: "Bin", texture: [["iron_block", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("bin");
Item.createItem("bin", "Bin", {name: "bin", meta: 0}, {stack: 64});

Translation.addTranslation("Bin", {ru: "Ведро"});
Recipes.addShaped({id: ItemID.bin, count: 1, data: 0}, ["www", "bob", "bnb"], ["w",35,-1, "b",159, -1, "o",259,0,"n", 87,0]);

var binModel = ModelAPI.newArray();
binModel.addBoxByID("body", 3/16, 0/16, 3/16, 13/16, 14/16, 13/16, 159,5);
binModel.addBoxByID("cover", 1/16, 14/16, 1/16, 15/16, 16/16, 15/16, 159,5);
binModel.addBoxByID("hand", 7.5/16, 16/16, 6/16, 8.5/16, 17/16, 10/16, 159,9);
Furniture.addReplacementItem({id:"bin"},{id:"bin"});
var render = new ICRender.Model();
var model = BlockRenderer.createModel();
binModel.compile(model);
render.addEntry(model);
BlockRenderer.setStaticICRender (BlockID.bin, 0, render);
Callback.addCallback("ItemUse",function(coords, item, block){
	if(block.id==BlockID.bin&&!sN(Player.get())){
		if(item.id!=0){
			Game.prevent();
			Player.decreaseCarriedItem(1);
		}
	}
});
