IDRegistry.genBlockID("troughwateroak");
Block.createBlock("troughwateroak", [
	{name: "troughwateroak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwateroak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwateroak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwateroak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughwateroak");
Item.createItem("troughwateroak", "Food Trough", {name: "troughwateroak", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Водой"});
Recipes.addShaped({id: ItemID.troughwateroak, count: 1, data: 0}, ["aaa", "xxx"], ['a', 325,8, 'x', 5,0])

var troughwateroakModel = ModelAPI.newArray();
troughwateroakModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5);
troughwateroakModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5);
troughwateroakModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
troughwateroakModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5);
troughwateroakModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5);
troughwateroakModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5);
troughwateroakModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5);
troughwateroakModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5);
troughwateroakModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5);
troughwateroakModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"troughwateroak"},{id:"troughwateroak"}, Furniture.placeRotatableBlock(BlockID.troughwateroak, troughwateroakModel));

IDRegistry.genBlockID("troughwaterspruce");
Block.createBlock("troughwaterspruce", [
	{name: "troughwaterspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterspruce", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterspruce", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughwaterspruce");
Item.createItem("troughwaterspruce", "Food Trough", {name: "troughwaterspruce", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Водой"});
Recipes.addShaped({id: ItemID.troughwaterspruce, count: 1, data: 0}, ["aaa", "xxx"], ['a', 325,8, 'x', 5,1])

var troughwaterspruceModel = ModelAPI.newArray();
troughwaterspruceModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 1);
troughwaterspruceModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 1);
troughwaterspruceModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
troughwaterspruceModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 1);
troughwaterspruceModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 1);
troughwaterspruceModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 1);
troughwaterspruceModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 1);
troughwaterspruceModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 1);
troughwaterspruceModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 1);
troughwaterspruceModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"troughwaterspruce"},{id:"troughwaterspruce"}, Furniture.placeRotatableBlock(BlockID.troughwaterspruce, troughwaterspruceModel));

IDRegistry.genBlockID("troughwaterbrich");
Block.createBlock("troughwaterbrich", [
	{name: "troughwaterbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterbrich", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterbrich", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughwaterbrich");
Item.createItem("troughwaterbrich", "Food Trough", {name: "troughwaterbrich", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Водой"});
Recipes.addShaped({id: ItemID.troughwaterbrich, count: 1, data: 0}, ["aaa", "xxx"], ['a', 325,8, 'x', 5,2])

var troughwaterbrichModel = ModelAPI.newArray();
troughwaterbrichModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 2);
troughwaterbrichModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 2);
troughwaterbrichModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
troughwaterbrichModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 2);
troughwaterbrichModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 2);
troughwaterbrichModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 2);
troughwaterbrichModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 2);
troughwaterbrichModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 2);
troughwaterbrichModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 2);
troughwaterbrichModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"troughwaterbrich"},{id:"troughwaterbrich"}, Furniture.placeRotatableBlock(BlockID.troughwaterbrich, troughwaterbrichModel));

IDRegistry.genBlockID("troughwaterjungle");
Block.createBlock("troughwaterjungle", [
	{name: "troughwaterjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterjungle", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterjungle", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughwaterjungle");
Item.createItem("troughwaterjungle", "Food Trough", {name: "troughwaterjungle", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Водой"});
Recipes.addShaped({id: ItemID.troughwaterjungle, count: 1, data: 0}, ["aaa", "xxx"], ['a', 325,8, 'x', 5,3])

var troughwaterjungleModel = ModelAPI.newArray();
troughwaterjungleModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 3);
troughwaterjungleModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 3);
troughwaterjungleModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
troughwaterjungleModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 3);
troughwaterjungleModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 3);
troughwaterjungleModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 3);
troughwaterjungleModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 3);
troughwaterjungleModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 3);
troughwaterjungleModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 3);
troughwaterjungleModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"troughwaterjungle"},{id:"troughwaterjungle"}, Furniture.placeRotatableBlock(BlockID.troughwaterjungle, troughwaterjungleModel));

IDRegistry.genBlockID("troughwateracacia");
Block.createBlock("troughwateracacia", [
	{name: "troughwateracacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwateracacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwateracacia", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwateracacia", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughwateracacia");
Item.createItem("troughwateracacia", "Food Trough", {name: "troughwateracacia", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Водой"});
Recipes.addShaped({id: ItemID.troughwateracacia, count: 1, data: 0}, ["aaa", "xxx"], ['a', 325,8, 'x', 5,4])

var troughwateracaciaModel = ModelAPI.newArray();
troughwateracaciaModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 4);
troughwateracaciaModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 4);
troughwateracaciaModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
troughwateracaciaModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 4);
troughwateracaciaModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 4);
troughwateracaciaModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 4);
troughwateracaciaModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 4);
troughwateracaciaModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 4);
troughwateracaciaModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 4);
troughwateracaciaModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"troughwateracacia"},{id:"troughwateracacia"}, Furniture.placeRotatableBlock(BlockID.troughwateracacia, troughwateracaciaModel));

IDRegistry.genBlockID("troughwaterbigoak");
Block.createBlock("troughwaterbigoak", [
	{name: "troughwaterbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterbigoak", texture: [["quartz_block", 0]], inCreative: false},
	{name: "troughwaterbigoak", texture: [["quartz_block", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("troughwaterbigoak");
Item.createItem("troughwaterbigoak", "Food Trough", {name: "troughwaterbigoak", meta: 0}, {stack: 64});

Translation.addTranslation("Food Trough", {ru: "Корыта с Водой"});

var troughwaterbigoakModel = ModelAPI.newArray();
troughwaterbigoakModel.addBoxByID("1", 1,0,0.0625,1.9375,0.0625,0.9375, 5, 5);
troughwaterbigoakModel.addBoxByID("2", 1.9375,0.0625,0.0625,2,0.4375,0.9375, 5, 5);
troughwaterbigoakModel.addBoxByID("3", 1,0.0625,0.0625,1.9375,0.3125,0.9375, 8);
troughwaterbigoakModel.addBoxByID("4", 0.0625,0.0625,0,1,0.4375,0.0625, 5, 5);
troughwaterbigoakModel.addBoxByID("5", 0,0.0625,0.0625,0.0625,0.4375,0.9375, 5, 5);
troughwaterbigoakModel.addBoxByID("6", 0.0625,0.0625,0.9375,1,0.4375,1, 5, 5);
troughwaterbigoakModel.addBoxByID("7", 1,0.0625,0.9375,1.9375,0.4375,1, 5, 5);
troughwaterbigoakModel.addBoxByID("8", 1,0.0625,0,1.9375,0.4375,0.0625, 5, 5);
troughwaterbigoakModel.addBoxByID("9", 0.0625,0,0.0625,1,0.0625,0.9375, 5, 5);
troughwaterbigoakModel.addBoxByID("10", 0.0625,0.0625,0.0625,1,0.3125,0.9375, 8);
Furniture.addReplacementItem({id:"troughwaterbigoak"},{id:"troughwaterbigoak"}, Furniture.placeRotatableBlock(BlockID.troughwaterbigoak, troughwaterbigoakModel));

Recipes.addShapeless(
	{id: ItemID.troughwateroak, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 0}, {id: 5, data: 0}, {id: 5, data: 0}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.troughwaterspruce, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 1}, {id: 5, data: 1}, {id: 5, data: 1}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.troughwaterbrich, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 2}, {id: 5, data: 2}, {id: 5, data: 2}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.troughwaterjungle, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 3}, {id: 5, data: 3}, {id: 5, data: 3}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.troughwateracacia, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 4}, {id: 5, data: 4}, {id: 5, data: 4}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Recipes.addShapeless(
	{id: ItemID.troughwaterbigoak, count: 1, data: 0},
	[{id: 325, data: 8}, {id: 325, data: 8}, {id: 325, data: 8},
	 {id: 5, data: 5}, {id: 5, data: 5}, {id: 5, data: 5}],
function(api, field){
 Player.addItemToInventory(325, 3)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});

Block.setShape(BlockID.troughwateroak,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughwaterspruce,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughwaterbrich,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughwaterjungle,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughwateracacia,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughwaterbigoak,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughfoodoak,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughfoodspruce,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughfoodbrich,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughfoodjungle,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughfoodacacia,0,0,0,1,1/2,1);
Block.setShape(BlockID.troughfoodbigoak,0,0,0,1,1/2,1);