IDRegistry.genBlockID("nightstandoak");
Block.createBlockWithRotation("nightstandoak", [
	{name: "nightstandoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("nightstandoak");
Item.createItem("nightstandoak", "Oak Bedside Table", {name: "nightstandoak", meta: 0}, {stack: 64});

var nightstandoakModel = ModelAPI.newArray();
nightstandoakModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5);
nightstandoakModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
nightstandoakModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
nightstandoakModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5);
nightstandoakModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
nightstandoakModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
nightstandoakModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5);
nightstandoakModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5);
nightstandoakModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5);
nightstandoakModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5);
nightstandoakModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5);
nightstandoakModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
nightstandoakModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
nightstandoakModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
nightstandoakModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
nightstandoakModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"nightstandoak"},{id:"nightstandoak"}, Furniture.placeRotatableBlock(BlockID.nightstandoak, nightstandoakModel));

IDRegistry.genBlockID("nightstandspruce");
Block.createBlock("nightstandspruce", [
	{name: "nightstandspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandspruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("nightstandspruce");
Item.createItem("nightstandspruce", "Spruce Bedside Table", {name: "nightstandspruce", meta: 0}, {stack: 64});

var nightstandspruceModel = ModelAPI.newArray();
nightstandspruceModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 1);
nightstandspruceModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
nightstandspruceModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
nightstandspruceModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 1);
nightstandspruceModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
nightstandspruceModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
nightstandspruceModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 1);
nightstandspruceModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 1);
nightstandspruceModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 1);
nightstandspruceModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 1);
nightstandspruceModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 1);
nightstandspruceModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
nightstandspruceModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
nightstandspruceModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
nightstandspruceModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
nightstandspruceModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"nightstandspruce"},{id:"nightstandspruce"}, Furniture.placeRotatableBlock(BlockID.nightstandspruce, nightstandspruceModel));

IDRegistry.genBlockID("nightstandbrich");
Block.createBlock("nightstandbrich", [
	{name: "nightstandbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandbrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("nightstandbrich");
Item.createItem("nightstandbrich", "Birch Bedside Table", {name: "nightstandbrich", meta: 0}, {stack: 64});

var nightstandbrichModel = ModelAPI.newArray();
nightstandbrichModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 2);
nightstandbrichModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
nightstandbrichModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
nightstandbrichModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 2);
nightstandbrichModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
nightstandbrichModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
nightstandbrichModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 2);
nightstandbrichModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 2);
nightstandbrichModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 2);
nightstandbrichModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 2);
nightstandbrichModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 2);
nightstandbrichModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
nightstandbrichModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
nightstandbrichModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
nightstandbrichModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
nightstandbrichModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"nightstandbrich"},{id:"nightstandbrich"}, Furniture.placeRotatableBlock(BlockID.nightstandbrich, nightstandbrichModel));

IDRegistry.genBlockID("nightstandjungle");
Block.createBlock("nightstandjungle", [
	{name: "nightstandjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandjungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("nightstandjungle");
Item.createItem("nightstandjungle", "Jungle Bedside Table", {name: "nightstandjungle", meta: 0}, {stack: 64});

var nightstandjungleModel = ModelAPI.newArray();
nightstandjungleModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 3);
nightstandjungleModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
nightstandjungleModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
nightstandjungleModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 3);
nightstandjungleModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
nightstandjungleModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
nightstandjungleModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 3);
nightstandjungleModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 3);
nightstandjungleModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 3);
nightstandjungleModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 3);
nightstandjungleModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 3);
nightstandjungleModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
nightstandjungleModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
nightstandjungleModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
nightstandjungleModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
nightstandjungleModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"nightstandjungle"},{id:"nightstandjungle"}, Furniture.placeRotatableBlock(BlockID.nightstandjungle, nightstandjungleModel));

IDRegistry.genBlockID("nightstandacacia");
Block.createBlock("nightstandacacia", [
	{name: "nightstandacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("nightstandacacia");
Item.createItem("nightstandacacia", "Acacia Bedside Table", {name: "nightstandacacia", meta: 0}, {stack: 64});

var nightstandacaciaModel = ModelAPI.newArray();
nightstandacaciaModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 4);
nightstandacaciaModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
nightstandacaciaModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
nightstandacaciaModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 4);
nightstandacaciaModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
nightstandacaciaModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
nightstandacaciaModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 4);
nightstandacaciaModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 4);
nightstandacaciaModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 4);
nightstandacaciaModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 4);
nightstandacaciaModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 4);
nightstandacaciaModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
nightstandacaciaModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
nightstandacaciaModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
nightstandacaciaModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
nightstandacaciaModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"nightstandacacia"},{id:"nightstandacacia"}, Furniture.placeRotatableBlock(BlockID.nightstandacacia, nightstandacaciaModel));

IDRegistry.genBlockID("nightstandbigoak");
Block.createBlock("nightstandbigoak", [
	{name: "nightstandbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "nightstandbigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("nightstandbigoak");
Item.createItem("nightstandbigoak", "Dark oak Bedside Table", {name: "nightstandbigoak", meta: 0}, {stack: 64});

var nightstandbigoakModel = ModelAPI.newArray();
nightstandbigoakModel.addBoxByID("1", 0,0,0.0625,0.0625,0.9375,1, 5, 5);
nightstandbigoakModel.addBoxByID("2", 1,0.9375,0,1.0625,1,1, 159, 9);
nightstandbigoakModel.addBoxByID("3", 0,0.9375,-0.0625,1,1,0, 159, 9);
nightstandbigoakModel.addBoxByID("4", 0.0625,0.625,0.0625,0.9375,0.6875,1, 5, 5);
nightstandbigoakModel.addBoxByID("5", 0,0.9375,1,1,1,1.0625, 159, 9);
nightstandbigoakModel.addBoxByID("6", -0.0625,0.9375,0,0,1,1, 159, 9);
nightstandbigoakModel.addBoxByID("7", 0,0.9375,0,1,1,1, 5, 5);
nightstandbigoakModel.addBoxByID("8", 0.0625,0.3125,0,0.9375,0.9375,0.0625, 5, 5);
nightstandbigoakModel.addBoxByID("9", 0.9375,0,0,1,0.9375,1, 5, 5);
nightstandbigoakModel.addBoxByID("10", 0.125,0.375,1,0.875,0.5625,1.0625, 5, 5);
nightstandbigoakModel.addBoxByID("11", 0.0625,0.25,0.0625,0.9375,0.3125,1, 5, 5);
nightstandbigoakModel.addBoxByID("12", 0.4375,0.4375,1.0625,0.5625,0.5,1.125, 159, 9);
nightstandbigoakModel.addBoxByID("13", 0.875,0.375,1,0.9375,0.5625,1.0625, 159, 9);
nightstandbigoakModel.addBoxByID("14", 0.0625,0.5625,1,0.9375,0.625,1.0625, 159, 9);
nightstandbigoakModel.addBoxByID("15", 0.0625,0.3125,1,0.9375,0.375,1.0625, 159, 9);
nightstandbigoakModel.addBoxByID("16", 0.0625,0.375,1,0.125,0.5625,1.0625, 159, 9);
Furniture.addReplacementItem({id:"nightstandbigoak"},{id:"nightstandbigoak"}, Furniture.placeRotatableBlock(BlockID.nightstandbigoak, nightstandbigoakModel));

//translation night stands
Translation.addTranslation("Oak Bedside Table", {ru: "Дубовая Прикроватная тумбочка"});
Translation.addTranslation("Spruce Bedside Table", {ru: "Еловая Прикроватная тумбочка"});
Translation.addTranslation("Birch Bedside Table", {ru: "Берёзовая Прикроватная тумбочка "});
Translation.addTranslation("Jungle Bedside Table", {ru: "Джунглевая Прикроватная тумбочка"});
Translation.addTranslation("Acacia Bedside Table", {ru: "Акациевая Прикроватная тумбочка"});
Translation.addTranslation("Dark oak Bedside Table", {ru: "Тёмно дубовая Прикроватная тумбочка"});

//recipes night stands
Recipes.addShaped({id: ItemID.nightstandoak, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,0, 'x', 85,0, 'c', 54,0])
Recipes.addShaped({id: ItemID.nightstandspruce, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,1, 'x', 85,1, 'c', 54,0])
Recipes.addShaped({id: ItemID.nightstandbrich, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,2, 'x', 85,2, 'c', 54,0])
Recipes.addShaped({id: ItemID.nightstandjungle, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,3, 'x', 85,3, 'c', 54,0])
Recipes.addShaped({id: ItemID.nightstandacacia, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,4, 'x', 85,4, 'c', 54,0])
Recipes.addShaped({id: ItemID.nightstandbigoak, count: 1, data: 0}, ["aaa", "xcx"], ['a', 158,5, 'x', 85,5, 'c', 54,0])