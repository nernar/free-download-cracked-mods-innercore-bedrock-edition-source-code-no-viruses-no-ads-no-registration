IDRegistry.genBlockID("locker");
Block.createBlock("locker", [
	{name: "Locker", texture: [["quartz_block", 0]], inCreative: false},
	{name: "Locker", texture: [["quartz_block", 0]], inCreative: false},
	{name: "Locker", texture: [["quartz_block", 0]], inCreative: false},
	{name: "Locker", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("locker");
Item.createItem("locker", "Locker", {name: "stick", meta: 0}, {stack: 64});

Translation.addTranslation("Locker", {ru: "Шкафчик"});
Recipes.addShaped({id: ItemID.locker, count: 1, data: 0}, ["qvq", "vqv", "vqv"], ["q",155,0]);
//TODO физ модаль+крафт
var lockerModel = ModelAPI.newArray();
lockerModel.addBoxByID("body", 0/16, 1/16, 0/16, 16/16, 15/16, 15/16, 5);
lockerModel.addBoxByID("top", 0/16, 15/16, 0/16, 16/16, 16/16, 16/16, 5);
lockerModel.addBoxByID("downBox", 1/16, 2/16, 15/16, 15/16, 7/16, 16/16, 5);
lockerModel.addBoxByID("upBox", 1/16, 9/16, 15/16, 15/16, 14/16, 16/16, 5);
lockerModel.addBoxByID("downHand", 7/16, 4/16, 16/16, 9/16, 5/16, 17/16, 159,9);
lockerModel.addBoxByID("upHand", 7/16, 11/16, 16/16, 9/16, 12/16, 17/16, 159,9);
lockerModel.addBoxByID("leg0", 0/16, 0/16, 0/16, 1/16, 1/16, 1/16, 5);
lockerModel.addBoxByID("leg1", 15/16, 0/16, 0/16, 16/16, 1/16, 1/16, 5);
lockerModel.addBoxByID("leg2", 0/16, 0/16, 14/16, 1/16, 1/16, 15/16, 5);
lockerModel.addBoxByID("leg3", 15/16, 0/16, 14/16, 16/16, 1/16, 15/16, 5);

Furniture.addReplacementItem({id:"locker"},{id:"locker"}, Furniture.placeRotatableBlock(BlockID.locker, lockerModel));
