IDRegistry.genBlockID("troughfoodoak");
Block.createBlock("troughfoodoak", [
	{name: "troughfoodoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughfoodoak");
Item.createItem("troughfoodoak", "Food Trough", {name: "troughfoodoak", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Едой"});
Recipes.addShaped({id: ItemID.troughfoodoak, count: 1, data: 0}, ["aaa", "xxx"], ['a', 295,0, 'x', 5,0])

var troughfoodoakModel = ModelAPI.newArray();
troughfoodoakModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5);
troughfoodoakModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5);
troughfoodoakModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
troughfoodoakModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5);
troughfoodoakModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5);
troughfoodoakModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5);
troughfoodoakModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5);
troughfoodoakModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5);
troughfoodoakModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5);
troughfoodoakModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"troughfoodoak"},{id:"troughfoodoak"}, Furniture.placeRotatableBlock(BlockID.troughfoodoak, troughfoodoakModel));

IDRegistry.genBlockID("troughfoodspruce");
Block.createBlock("troughfoodspruce", [
	{name: "troughfoodspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodspruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughfoodspruce");
Item.createItem("troughfoodspruce", "Food Trough", {name: "troughfoodspruce", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Едой"});
Recipes.addShaped({id: ItemID.troughfoodspruce, count: 1, data: 0}, ["aaa", "xxx"], ['a', 295,0, 'x', 5,1])

var troughfoodspruceModel = ModelAPI.newArray();
troughfoodspruceModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 1);
troughfoodspruceModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 1);
troughfoodspruceModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
troughfoodspruceModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 1);
troughfoodspruceModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 1);
troughfoodspruceModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 1);
troughfoodspruceModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 1);
troughfoodspruceModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 1);
troughfoodspruceModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 1);
troughfoodspruceModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"troughfoodspruce"},{id:"troughfoodspruce"}, Furniture.placeRotatableBlock(BlockID.troughfoodspruce, troughfoodspruceModel));

IDRegistry.genBlockID("troughfoodbrich");
Block.createBlock("troughfoodbrich", [
	{name: "troughfoodbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodbrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughfoodbrich");
Item.createItem("troughfoodbrich", "Food Trough", {name: "troughfoodbrich", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Едой"});
Recipes.addShaped({id: ItemID.troughfoodbrich, count: 1, data: 0}, ["aaa", "xxx"], ['a', 295,0, 'x', 5,2])

var troughfoodbrichModel = ModelAPI.newArray();
troughfoodbrichModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 2);
troughfoodbrichModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 2);
troughfoodbrichModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
troughfoodbrichModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 2);
troughfoodbrichModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 2);
troughfoodbrichModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 2);
troughfoodbrichModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 2);
troughfoodbrichModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 2);
troughfoodbrichModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 2);
troughfoodbrichModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"troughfoodbrich"},{id:"troughfoodbrich"}, Furniture.placeRotatableBlock(BlockID.troughfoodbrich, troughfoodbrichModel));

IDRegistry.genBlockID("troughfoodjungle");
Block.createBlock("troughfoodjungle", [
	{name: "troughfoodjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodjungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughfoodjungle");
Item.createItem("troughfoodjungle", "Food Trough", {name: "troughfoodjungle", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Едой"});
Recipes.addShaped({id: ItemID.troughfoodjungle, count: 1, data: 0}, ["aaa", "xxx"], ['a', 295,0, 'x', 5,3])

var troughfoodjungleModel = ModelAPI.newArray();
troughfoodjungleModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 3);
troughfoodjungleModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 3);
troughfoodjungleModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
troughfoodjungleModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 3);
troughfoodjungleModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 3);
troughfoodjungleModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 3);
troughfoodjungleModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 3);
troughfoodjungleModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 3);
troughfoodjungleModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 3);
troughfoodjungleModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"troughfoodjungle"},{id:"troughfoodjungle"}, Furniture.placeRotatableBlock(BlockID.troughfoodjungle, troughfoodjungleModel));

IDRegistry.genBlockID("troughfoodacacia");
Block.createBlock("troughfoodacacia", [
	{name: "troughfoodacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodacacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodacacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughfoodacacia");
Item.createItem("troughfoodacacia", "Food Trough", {name: "troughfoodacacia", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Едой"});
Recipes.addShaped({id: ItemID.troughfoodacacia, count: 1, data: 0}, ["aaa", "xxx"], ['a', 295,0, 'x', 5,4])

var troughfoodacaciaModel = ModelAPI.newArray();
troughfoodacaciaModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 4);
troughfoodacaciaModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 4);
troughfoodacaciaModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
troughfoodacaciaModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 4);
troughfoodacaciaModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 4);
troughfoodacaciaModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 4);
troughfoodacaciaModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 4);
troughfoodacaciaModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 4);
troughfoodacaciaModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 4);
troughfoodacaciaModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"troughfoodacacia"},{id:"troughfoodacacia"}, Furniture.placeRotatableBlock(BlockID.troughfoodacacia, troughfoodacaciaModel));

IDRegistry.genBlockID("troughfoodbigoak");
Block.createBlock("troughfoodbigoak", [
	{name: "troughfoodbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughfoodbigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughfoodbigoak");
Item.createItem("troughfoodbigoak", "Food Trough", {name: "troughfoodbigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Едой"});
Recipes.addShaped({id: ItemID.troughfoodbigoak, count: 1, data: 0}, ["aaa", "xxx"], ['a', 295,0, 'x', 5,5])

var troughfoodbigoakModel = ModelAPI.newArray();
troughfoodbigoakModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 5);
troughfoodbigoakModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 5);
troughfoodbigoakModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 170);
troughfoodbigoakModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 5);
troughfoodbigoakModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 5);
troughfoodbigoakModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 5);
troughfoodbigoakModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 5);
troughfoodbigoakModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 5);
troughfoodbigoakModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 5);
troughfoodbigoakModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 170);
Furniture.addReplacementItem({id:"troughfoodbigoak"},{id:"troughfoodbigoak"}, Furniture.placeRotatableBlock(BlockID.troughfoodbigoak, troughfoodbigoakModel));





