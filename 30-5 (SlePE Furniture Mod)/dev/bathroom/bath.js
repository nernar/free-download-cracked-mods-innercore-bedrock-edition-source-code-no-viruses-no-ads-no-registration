IDRegistry.genBlockID("bath");
Block.createBlock("bath", [
	{name: "Bath", texture: [["quartz_block", 0]], inCreative: false},
	{name: "Bath", texture: [["quartz_block", 0]], inCreative: false},
	{name: "Bath", texture: [["quartz_block", 0]], inCreative: false},
	{name: "Bath", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("bath");
Item.createItem("bath", "Bath", {name: "bath", meta: 0}, {stack: 64});

Translation.addTranslation("Bath", {ru: "Ванна"});
Recipes.addShaped({id: ItemID.bath, count: 1, data: 0}, ["qiq", "qvq", "qqq"], ["q",155,0, "i", 265,0]);

var bathModel = ModelAPI.newArray();
bathModel.addBoxByID("downPlate0", 0/16, 0/16, -16/16, 16/16, 15/16, 0/16, 155);
bathModel.addBoxByID("leftBorder0", 0/16, 15/16, -16/16, 2/16, 16/16, 0/16, 155);
bathModel.addBoxByID("rightBorder0", 14/16, 15/16, -16/16, 16/16, 16/16, 0/16, 155);
bathModel.addBoxByID("downPlate1", 0/16, 0/16, 0/16, 16/16, 15/16, 16/16, 155);
bathModel.addBoxByID("leftBorder1", 0/16, 15/16, 0/16, 2/16, 16/16, 16/16, 155);
bathModel.addBoxByID("rightBorder1", 14/16, 15/16, 0/16, 16/16, 16/16, 16/16, 155);
bathModel.addBoxByID("backBorder", 2/16, 15/16, -16/16, 14/16, 16/16, -14/16, 155);
bathModel.addBoxByID("frontBorder", 2/16, 15/16, 14/16, 14/16, 16/16, 16/16, 155);
bathModel.addBoxByID("water0", 2/16, 15/16, -14/16, 14/16, 15.1/16, 0, 8);
bathModel.addBoxByID("water1", 2/16, 15/16, 0, 14/16, 15.1/16, 14/16, 8);
bathModel.addBoxByID("redButton", 5/16, 16/16, -15.5/16, 6/16, 17/16, 1.5/16-1, 35, 14);
bathModel.addBoxByID("blueButton", 10/16, 16/16, -15.5/16, 11/16, 17/16, 1.5/16-1, 35, 11);
bathModel.addBoxByID("gate_1", 7.5/16, 16/16, -15.5/16, 8.5/16, 18/16, 1.5/16-1, 1);
bathModel.addBoxByID("gate_2", 7.5/16, 18/16, -15.5/16, 8.5/16, 19/16, 4/16-1, 1);
bathModel.addBoxByID("gate_3", 7.5/16, 17/16, -13/16, 8.5/16, 18/16, 4/16-1, 1);
Furniture.addReplacementItem({id:"bath"},{id:"bath"}, Furniture.placeRotatableBlock(BlockID.bath, bathModel));
//Block.setShape(BlockID.bath, -1, 0, 0, 1, 1, 1, 1);
//Block.setShape(BlockID.bath, 0, 0, -1, 1, 1, 1, 3);
