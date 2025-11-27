IDRegistry.genBlockID("fan");
Block.createBlock("fan", [
	{name: "fan", texture: [["quartz_block", 0]], inCreative: false},
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("fan");
Item.createItem("fan", "Fan", {name: "fan", meta: 0}, {stack: 64});

Translation.addTranslation("Fan", {ru: "Вентилятор"});
Recipes.addShaped({id: ItemID.fan, count: 1, data: 0}, [" a ", " s ", "xzx"], ["x",265,0, "a", 98,0, "s",152,0, "z",98,3]);

var fanModel = ModelAPI.newArray();
fanModel.addBoxByID("1", 0.375,0.875,0.375,0.625,1,0.625, 236, 7);
fanModel.addBoxByID("2", 0.4375,0.625,0.4375,0.5625,0.875,0.5625, 236);
fanModel.addBoxByID("3", 0.375,0.625,-0.625,0.625,0.6875,0.375, 236);
fanModel.addBoxByID("4", 0.3125,0.5625,0.3125,0.6875,0.625,0.6875, 236, 7);
fanModel.addBoxByID("5", 0.375,0.5,0.375,0.625,0.5625,0.625, 236, 8);
fanModel.addBoxByID("6", -0.625,0.625,0.375,0.375,0.6875,0.625, 236);
fanModel.addBoxByID("7", 0.375,0.625,0.625,0.625,0.6875,1.625, 236);
fanModel.addBoxByID("8", 0.625,0.625,0.375,1.625,0.6875,0.625, 236);
Furniture.addReplacementItem({id:"fan"},{id:"fan"}, Furniture.placeRotatableBlock(BlockID.fan, fanModel));