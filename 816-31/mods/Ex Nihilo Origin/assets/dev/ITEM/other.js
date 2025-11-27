IDRegistry.genItemID("ex_ash");
Item.createItem("ex_ash", "Ash", {
	name: "enr_ash",
	meta: 0
});
IDRegistry.genItemID("ex_porcelain");
Item.createItem("ex_porcelain", "Porcelain Clay", {
	name: "enr_porcelain",
	meta: 0
});
IDRegistry.genItemID("ex_stoneSmall");
Item.createItem("ex_stoneSmall", "Small Stone", {
	name: "enr_stoneSmall",
	meta: 0
});
/*
var modelNormal = ItemModel.newStandalone();
var __itemMesh = ItemModel.getFor(ItemID.ex_dustSaw, 0).getItemRenderMesh(1, false);
__itemMesh.rotate(3.17, 0.85, 3.55);
__itemMesh.translate(0.08, 0.83, 0.15);
__itemMesh.scale(1.5, 1.5, 1.55);

modelNormal.setModel(__itemMesh, "items-opaque/Others/enr_ash_0.png");
modelNormal.setUiModel(__itemMesh, "items-opaque/Others/enr_ash_0.png");

ItemModel.getFor(351, 15).setModelOverrideCallback(function(item) {
	return modelNormal;
});
*/