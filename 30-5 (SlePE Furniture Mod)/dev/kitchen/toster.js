IDRegistry.genBlockID("toster");
Block.createBlock("toster", [
	{name: "Toster", texture: [["iron_block", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("toster");
Item.createItem("toster", "Toaster", {name: "toster", meta: 0}, {stack: 64});
//TODO физическая модель + крафт
Translation.addTranslation("Toaster", {ru: "Тостер"});
Recipes.addShaped({id: ItemID.toster, count: 1, data: 0}, ["bvb", "bvb", "bgb"], ["b",159,-1, "g",259,0]);

var tosterModel = ModelAPI.newArray();
tosterModel.addBoxByID("bodyLeft", 5.5/16, 1/16, 3/16, 7/16, 5/16, 13/16, 155);
tosterModel.addBoxByID("bodyRight", 9/16, 1/16, 3/16, 10.5/16, 5/16, 13/16, 155);
tosterModel.addBoxByID("bottom", 5.5/16, 0/16, 3/16, 10.5/16, 1/16, 13/16, 155);
tosterModel.addBoxByID("bodyBack", 7/16, 1/16, 3/16, 9/16, 5/16, 4/16, 155);
tosterModel.addBoxByID("bodyFront0", 7/16, 1/16, 12/16, 7.8/16, 5/16, 13/16, 155);
tosterModel.addBoxByID("bodyFront1", 8.2/16, 1/16, 12/16, 9/16, 5/16, 13/16, 155);
tosterModel.addBoxByID("bodyFront2", 7.8/16, 1/16, 12/16, 8.2/16, 2/16, 13/16, 155);
tosterModel.addBoxByID("separator", 7.8/16, 1/16, 4/16, 8.2/16, 5.5/16, 12/16, 159,9);
tosterModel.addBoxByID("hand", 7/16, 3.5/16, 13/16, 9/16, 4.5/16, 13.5/16, 159,9);
Furniture.addReplacementItem({id:"toster"},{id:"toster"});
var render = new ICRender.Model();
var model = BlockRenderer.createModel();
tosterModel.compile(model);
render.addEntry(model);
BlockRenderer.setStaticICRender (BlockID.toster, 0, render);
