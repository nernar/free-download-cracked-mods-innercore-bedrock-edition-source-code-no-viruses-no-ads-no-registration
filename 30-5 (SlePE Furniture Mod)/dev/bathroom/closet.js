IDRegistry.genBlockID("closet");
Block.createBlock("closet", [
	{name: "Closet", texture: [["quartz_block", 0]], inCreative: false},
	{name: "Closet", texture: [["quartz_block", 0]], inCreative: false},
	{name: "Closet", texture: [["quartz_block", 0]], inCreative: false},
	{name: "Closet", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("closet");
Item.createItem("closet", "Closet", {name: "closet", meta: 0}, {stack: 64});

Translation.addTranslation("Closet", {ru: "Шкафчик"});
Recipes.addShaped({id: ItemID.closet, count: 1, data: 0}, ["qvq", "qqq", "qvq"], ["q",406,0]);

var closetModel = ModelAPI.newArray();
closetModel.addBoxByID("body", 3/16, 2/16, 0/16, 13/16, 14/16, 5/16, 155);
closetModel.addBoxByID("hand0", 4/16, 10/16, 5/16, 7/16, 11/16, 6/16, 1);
closetModel.addBoxByID("hand1", 4/16, 6/16, 5/16, 5/16, 10/16, 6/16, 1);
closetModel.addBoxByID("hand2", 4/16, 5/16, 5/16, 7/16, 6/16, 6/16, 1);

Furniture.addReplacementItem({id:"closet"},{id:"closet"}, Furniture.placeRotatableBlock(BlockID.closet, closetModel));
