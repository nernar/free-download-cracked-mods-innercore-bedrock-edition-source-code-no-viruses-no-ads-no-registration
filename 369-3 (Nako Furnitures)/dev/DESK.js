IDRegistry.genBlockID("deskoak");
Block.createBlock("deskoak", [
	{name: "deskoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("deskoak");
Item.createItem("deskoak", "Desk", {name: "deskoak", meta: 0}, {stack: 64});

Translation.addTranslation("Desk", {ru: "Парта"});
Recipes.addShaped({id: ItemID.deskoak, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 0, 'c', 85, 0])

var deskoakModel = ModelAPI.newArray();
deskoakModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
deskoakModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5);
deskoakModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
deskoakModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
deskoakModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
deskoakModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
deskoakModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
deskoakModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
deskoakModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
deskoakModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5);
deskoakModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
deskoakModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
deskoakModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
deskoakModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
deskoakModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
deskoakModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
deskoakModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
deskoakModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"deskoak"},{id:"deskoak"}, Furniture.placeRotatableBlock(BlockID.deskoak, deskoakModel));

IDRegistry.genBlockID("deskspruce");
Block.createBlock("deskspruce", [
	{name: "deskspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskspruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("deskspruce");
Item.createItem("deskspruce", "Desk", {name: "deskspruce", meta: 0}, {stack: 64});

Translation.addTranslation("Desk", {ru: "Парта"});
Recipes.addShaped({id: ItemID.deskspruce, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 1, 'c', 85, 1])

var deskspruceModel = ModelAPI.newArray();
deskspruceModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
deskspruceModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 1);
deskspruceModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
deskspruceModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
deskspruceModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
deskspruceModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
deskspruceModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
deskspruceModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
deskspruceModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
deskspruceModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 1);
deskspruceModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
deskspruceModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
deskspruceModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
deskspruceModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
deskspruceModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
deskspruceModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
deskspruceModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
deskspruceModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"deskspruce"},{id:"deskspruce"}, Furniture.placeRotatableBlock(BlockID.deskspruce, deskspruceModel));

IDRegistry.genBlockID("deskbrich");
Block.createBlock("deskbrich", [
	{name: "deskbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskbrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("deskbrich");
Item.createItem("deskbrich", "Desk", {name: "deskbrich", meta: 0}, {stack: 64});

Translation.addTranslation("Desk", {ru: "Парта"});
Recipes.addShaped({id: ItemID.deskbrich, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 2, 'c', 85, 2])

var deskbrichModel = ModelAPI.newArray();
deskbrichModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
deskbrichModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 2);
deskbrichModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
deskbrichModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
deskbrichModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
deskbrichModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
deskbrichModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
deskbrichModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
deskbrichModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
deskbrichModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 2);
deskbrichModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
deskbrichModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
deskbrichModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
deskbrichModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
deskbrichModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
deskbrichModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
deskbrichModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
deskbrichModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"deskbrich"},{id:"deskbrich"}, Furniture.placeRotatableBlock(BlockID.deskbrich, deskbrichModel));

IDRegistry.genBlockID("deskjungle");
Block.createBlock("deskjungle", [
	{name: "deskjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskjungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("deskjungle");
Item.createItem("deskjungle", "Desk", {name: "deskjungle", meta: 0}, {stack: 64});

Translation.addTranslation("Desk", {ru: "Парта"});
Recipes.addShaped({id: ItemID.deskjungle, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 0, 'c', 85, 0])

var deskjungleModel = ModelAPI.newArray();
deskjungleModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
deskjungleModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 3);
deskjungleModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
deskjungleModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
deskjungleModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
deskjungleModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
deskjungleModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
deskjungleModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
deskjungleModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
deskjungleModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 3);
deskjungleModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
deskjungleModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
deskjungleModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
deskjungleModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
deskjungleModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
deskjungleModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
deskjungleModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
deskjungleModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"deskjungle"},{id:"deskjungle"}, Furniture.placeRotatableBlock(BlockID.deskjungle, deskjungleModel));

IDRegistry.genBlockID("deskacacia");
Block.createBlock("deskacacia", [
	{name: "deskacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("deskacacia");
Item.createItem("deskacacia", "Desk", {name: "deskacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Desk", {ru: "Парта"});
Recipes.addShaped({id: ItemID.deskacacia, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 0, 'c', 85, 0])

var deskacaciaModel = ModelAPI.newArray();
deskacaciaModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
deskacaciaModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 4);
deskacaciaModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
deskacaciaModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
deskacaciaModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
deskacaciaModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
deskacaciaModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
deskacaciaModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
deskacaciaModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
deskacaciaModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 4);
deskacaciaModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
deskacaciaModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
deskacaciaModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
deskacaciaModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
deskacaciaModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
deskacaciaModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
deskacaciaModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
deskacaciaModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"deskacacia"},{id:"deskacacia"}, Furniture.placeRotatableBlock(BlockID.deskacacia, deskacaciaModel));

IDRegistry.genBlockID("deskbigoak");
Block.createBlock("deskbigoak", [
	{name: "deskbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "deskbigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("deskbigoak");
Item.createItem("deskbigoak", "Desk", {name: "deskbigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Desk", {ru: "Парта"});
Recipes.addShaped({id: ItemID.deskbigoak, count: 1, data: 0}, ["aa ", "xxx", "c c"], ['a', 340, 0, 'x', 158, 0, 'c', 85, 0])

var deskbigoakModel = ModelAPI.newArray();
deskbigoakModel.addBoxByID("1", 0.0625,0.0625,0.25,0.125,0.9375,0.3125, 173);
deskbigoakModel.addBoxByID("2", 1,0.9375,0,2,1,1, 5, 5);
deskbigoakModel.addBoxByID("3", 1.875,0,0,1.9375,0.0625,1, 173);
deskbigoakModel.addBoxByID("4", 1.875,0.0625,0.25,1.9375,0.9375,0.3125, 173);
deskbigoakModel.addBoxByID("5", 1.875,0.0625,0.5,1.9375,0.9375,0.5625, 173);
deskbigoakModel.addBoxByID("6", 0.0625,0.0625,0.5,0.125,0.9375,0.5625, 173);
deskbigoakModel.addBoxByID("7", 0.0625,0,0,0.125,0.0625,1, 173);
deskbigoakModel.addBoxByID("8", 1.625,1,0.25,1.65625,1.03125,0.3125, 35, 4);
deskbigoakModel.addBoxByID("9", 1.0625,1,0.3125,1.5,1.0625,0.8125, 35, 14);
deskbigoakModel.addBoxByID("10", 0,0.9375,0,1,1,1, 5, 5);
deskbigoakModel.addBoxByID("11", 0.0625,1,0.0625,0.5,1.125,0.6875, 35, 3);
deskbigoakModel.addBoxByID("12", 0.0625,1.125,0.25,0.4375,1.1875,0.625, 159, 5);
deskbigoakModel.addBoxByID("13", 1.625,1,0.3125,1.65625,1.03125,0.8125, 22);
deskbigoakModel.addBoxByID("14", 0.625,1.0625,0.375,1.03125,1.09375,0.78125, 35);
deskbigoakModel.addBoxByID("15", 0.5625,1,0.3125,1.0625,1.0625,0.8125, 35, 14);
deskbigoakModel.addBoxByID("16", 1.0625,1.0625,0.375,1.46875,1.09375,0.78125, 35);
deskbigoakModel.addBoxByID("17", 0.0625,1.125,0.1875,0.4375,1.1875,0.25, 35);
deskbigoakModel.addBoxByID("18", 0.0625,1.125,0.0625,0.4375,1.1875,0.1875, 159, 5);
Furniture.addReplacementItem({id:"deskbigoak"},{id:"deskbigoak"}, Furniture.placeRotatableBlock(BlockID.deskbigoak, deskbigoakModel));