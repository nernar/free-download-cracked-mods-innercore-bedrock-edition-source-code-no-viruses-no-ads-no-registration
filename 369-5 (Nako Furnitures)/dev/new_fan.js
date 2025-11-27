IDRegistry.genBlockID("ceiling_fan");
Block.createBlock("ceiling_fan", [
	{name: "Ceiling Fan", texture: [["concrete_white", 0]], inCreative: false},
],BLOCK_TYPE_STONE);
IDRegistry.genItemID("ceiling_fan");
Item.createItem("ceiling_fan", "Ceiling Fan", {name: "ceiling_fan", meta: 0}, {stack: 64});

var ceiling_fanModel = ModelAPI.newArray();
ceiling_fanModel.addBoxByID("1", 0.375,0.875,0.375,0.625,1,0.625, 236, 7);
ceiling_fanModel.addBoxByID("2", 0.4375,0.625,0.4375,0.5625,0.875,0.5625, 236);
ceiling_fanModel.addBoxByID("3", 0.375,0.625,-0.625,0.625,0.6875,0.375, 236);
ceiling_fanModel.addBoxByID("4", 0.3125,0.5625,0.3125,0.6875,0.625,0.6875, 236, 7);
ceiling_fanModel.addBoxByID("5", 0.375,0.5,0.375,0.625,0.5625,0.625, 236, 8);
ceiling_fanModel.addBoxByID("6", -0.625,0.625,0.375,0.375,0.6875,0.625, 236);
ceiling_fanModel.addBoxByID("7", 0.375,0.625,0.625,0.625,0.6875,1.625, 236);
ceiling_fanModel.addBoxByID("8", 0.625,0.625,0.375,1.625,0.6875,0.625, 236);
Furniture.addReplacementItem({id:"ceiling_fan"},{id:"ceiling_fan"}, Furniture.placeRotatableBlock(BlockID.ceiling_fan, ceiling_fanModel));

Translation.addTranslation("Ceiling Fan", {ru: "Потолочный вентилятор"});
Recipes.addShaped({id: ItemID.ceiling_fan, count: 1, data: 0}, [" a ", " s ", "xzx"], ["x",265,0, "a", 98,0, "s",152,0, "z",98,3]);