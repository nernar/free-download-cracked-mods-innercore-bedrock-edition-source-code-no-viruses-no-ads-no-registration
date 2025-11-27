IDRegistry.genBlockID("towelsHolder");
Block.createBlock("towelsHolder", [
	{name: "Towels Holder", texture: [["stone", 0]], inCreative: false},
	{name: "Towels Holder", texture: [["stone", 0]], inCreative: false},
	{name: "Towels Holder", texture: [["stone", 0]], inCreative: false},
	{name: "Towels Holder", texture: [["stone", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("towelsHolder");
Item.createItem("towelsHolder", "Towels Holder", {name: "towelsHolder", meta: 0}, {stack: 64});
Translation.addTranslation("Towels Holder", {ru: "Держатель полотенец"});
Recipes.addShaped({id: ItemID.towelsHolder, count: 1, data: 0}, ["qvq", "vqv", "vqv"], ["q",155,0]);

var towelsHolderModel = ModelAPI.newArray();
towelsHolderModel.addBoxByID("topCrossbeam", 1/16, 13/16, 2/16, 15/16, 15/16, 4/16, 1);
towelsHolderModel.addBoxByID("middleCrossbeam", 1/16, 7/16, 2/16, 15/16, 9/16, 4/16, 1);
towelsHolderModel.addBoxByID("bottomCrossbeam", 1/16, 1/16, 2/16, 15/16, 3/16, 4/16, 1);
towelsHolderModel.addBoxByID("topCrossbar", 0/16, 9/16, 2/16, 2/16, 13/16, 4/16, 1);
towelsHolderModel.addBoxByID("bottomCrossbar", 14/16, 3/16, 2/16, 16/16, 7/16, 4/16, 1);
towelsHolderModel.addBoxByID("bottomHolder", 2/16, 1/16, 0/16, 4/16, 3/16, 2/16, 1);
towelsHolderModel.addBoxByID("topHolder", 12/16, 14/16, 0/16, 14/16, 15/16, 2/16, 1);
towelsHolderModel.addBoxByID("cork0", 0/16, 0/16, 1/16, 1/16, 4/16, 5/16, 159,9);
towelsHolderModel.addBoxByID("cork2", 15/16, 12/16, 1/16, 16/16, 16/16, 5/16, 159,9);
//TODO нормальная физическая модель+ возможность вешать полотенца

Furniture.addReplacementItem({id:"towelsHolder"},{id:"towelsHolder"}, Furniture.placeRotatableBlock(BlockID.towelsHolder, towelsHolderModel));
