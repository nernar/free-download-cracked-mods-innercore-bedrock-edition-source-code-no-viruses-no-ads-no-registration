IDRegistry.genBlockID("pottedfoliage");
Block.createBlock("pottedfoliage", [
	{name: "Potted Foliage", texture: [["concrete_brown", 0]], inCreative: true}
],BLOCK_TYPE_WOOD);

var pottedfoliageModel = ModelAPI.newArray();
pottedfoliageModel.addBoxByID("1", 0.0625,0.8125,0.0625,0.9375,0.875,0.9375, 3);
pottedfoliageModel.addBoxByID("2", 0.9375,0.8125,0,1,0.9375,1, 159, 12);
pottedfoliageModel.addBoxByID("3", 0,0.8125,0,0.0625,0.9375,1, 159, 12);
pottedfoliageModel.addBoxByID("4", 0,0.8125,0,1,0.9375,0.0625, 159, 12);
pottedfoliageModel.addBoxByID("5", 0,0.8125,0.9375,1,0.9375,1, 159, 12);
pottedfoliageModel.addBoxByID("6", 0.4375,0.875,0.5,0.5,1,0.5625, 5);
pottedfoliageModel.addBoxByID("7", 0.4375,1,0.5,0.5,1.375,0.5625, 5);
pottedfoliageModel.addBoxByID("8", 0,1.375,0,1,2,1, 161);
pottedfoliageModel.addBoxByID("9", 0,2,0,1,2.375,1, 161);
pottedfoliageModel.addBoxByID("10", 0.0625,0,0.0625,0.9375,0.8125,0.9375, 159, 12);
Furniture.placeRotatableBlock(BlockID.pottedfoliage, pottedfoliageModel);

IDRegistry.genBlockID("lamp");
Block.createBlock("lamp", [
	{name: "Lamp", texture: [["concrete_gray", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var lampModel = ModelAPI.newArray();
lampModel.addBoxByID("1", 0.25,0.625,0.25,0.75,0.6875,0.75, 159, 9);
lampModel.addBoxByID("2", 0.1875,0.5625,0.1875,0.8125,0.625,0.8125, 159, 9);
lampModel.addBoxByID("3", 0.3125,0.125,0.25,0.6875,0.625,0.3125, 20);
lampModel.addBoxByID("4", 0.25,0.125,0.25,0.3125,0.625,0.75, 20);
lampModel.addBoxByID("5", 0.6875,0.125,0.25,0.75,0.625,0.75, 20);
lampModel.addBoxByID("6", 0.3125,0.125,0.6875,0.6875,0.625,0.75, 20);
lampModel.addBoxByID("7", 0.3125,0.125,0.3125,0.6875,0.625,0.6875, 10);
lampModel.addBoxByID("8", 0.25,0.0625,0.25,0.75,0.125,0.75, 159, 9);
lampModel.addBoxByID("9", 0.1875,0,0.1875,0.8125,0.0625,0.8125, 159, 9);
lampModel.addBoxByID("10", 0.625,0.6875,0.5,0.6875,0.875,0.5625, 159, 9);
lampModel.addBoxByID("11", 0.3125,0.875,0.5,0.6875,0.9375,0.5625, 159, 9);
lampModel.addBoxByID("12", 0.3125,0.6875,0.5,0.375,0.875,0.5625, 159, 9);
Furniture.placeRotatableBlock(BlockID.lamp, lampModel);

IDRegistry.genBlockID("tv");
Block.createBlock("tv", [
	{name: "tv", texture: [["concrete_black", 0]], inCreative: false},
	{name: "tv", texture: [["concrete_black", 0]], inCreative: false},
	{name: "tv", texture: [["concrete_black", 0]], inCreative: false},
	{name: "tv", texture: [["concrete_black", 0]], inCreative: false}
],BLOCK_TYPE_WOOD);
IDRegistry.genItemID("tv");
Item.createItem("tv", "TV", {name: "tv", meta: 0}, {stack: 64});

var tvModel = ModelAPI.newArray();
tvModel.addBoxByID("1", 1,0.375,0.4375,1.375,1.125,0.5, 159, 9);
tvModel.addBoxByID("2", 0.125,0,0.3125,0.875,0.0625,0.6875, 173);
tvModel.addBoxByID("3", 0.25,0.0625,0.375,0.75,0.125,0.625, 173);
tvModel.addBoxByID("4", 0.4375,0.125,0.4375,0.5625,0.3125,0.5, 173);
tvModel.addBoxByID("5", -0.5,0.25,0.4375,-0.375,1.25,0.5, 173);
tvModel.addBoxByID("6", 1.375,0.25,0.4375,1.5,1.25,0.5, 173);
tvModel.addBoxByID("7", 1,0.25,0.4375,1.375,0.375,0.5, 173);
tvModel.addBoxByID("8", 1,0.375,0.375,1.375,1.125,0.4375, 173);
tvModel.addBoxByID("9", 0,0.375,0.4375,1,1.125,0.5, 159, 9);
tvModel.addBoxByID("10", -0.375,0.375,0.4375,0,1.125,0.5, 159, 9);
tvModel.addBoxByID("11", 0,1.125,0.4375,1,1.25,0.5, 173);
tvModel.addBoxByID("12", 1,1.125,0.4375,1.375,1.25,0.5, 173);
tvModel.addBoxByID("13", 0,0.25,0.4375,1,0.375,0.5, 173);
tvModel.addBoxByID("14", -0.375,0.25,0.4375,0,0.375,0.5, 173);
tvModel.addBoxByID("15", -0.375,1.125,0.4375,0,1.25,0.5, 173);
tvModel.addBoxByID("16", 0,0.375,0.375,1,1.125,0.4375, 173);
tvModel.addBoxByID("17", -0.375,0.375,0.375,0,1.125,0.4375, 173);
Furniture.addReplacementItem({id:"tv"},{id:"tv"}, Furniture.placeRotatableBlock(BlockID.tv, tvModel));

IDRegistry.genBlockID("happycake");
Block.createBlock("happycake", [
	{name: "Big Cake", texture: [["concrete_white", 0]], inCreative: true}
],BLOCK_TYPE_LIGHT);

var happycakeModel = ModelAPI.newArray();
happycakeModel.addBoxByID("1", 0.125,0.8125,0.125,0.875,0.875,0.875, 100, 14);
happycakeModel.addBoxByID("2", 0.125,0.4375,0.125,0.875,0.8125,0.875, 80);
happycakeModel.addBoxByID("3", 0.0625,0,0.0625,0.9375,0.375,0.9375, 80);
happycakeModel.addBoxByID("4", 0.0625,0.375,0.0625,0.9375,0.4375,0.9375, 100, 14);
happycakeModel.addBoxByID("5", 0.25,0.875,0.6875,0.3125,0.9375,0.75, 5);
happycakeModel.addBoxByID("6", 0.25,0.9375,0.6875,0.3125,1,0.75, 35, 4);
happycakeModel.addBoxByID("7", 0.25,0.875,0.25,0.3125,0.9375,0.3125, 5);
happycakeModel.addBoxByID("8", 0.5,0.875,0.5,0.5625,0.9375,0.5625, 5);
happycakeModel.addBoxByID("9", 0.6875,0.875,0.6875,0.75,0.9375,0.75, 5);
happycakeModel.addBoxByID("10", 0.6875,0.9375,0.6875,0.75,1,0.75, 35, 4);
happycakeModel.addBoxByID("11", 0.6875,0.9375,0.25,0.75,1,0.3125, 35, 4);
happycakeModel.addBoxByID("12", 0.5,0.9375,0.5,0.5625,1,0.5625, 35, 4);
happycakeModel.addBoxByID("13", 0.6875,0.875,0.25,0.75,0.9375,0.3125, 5);
happycakeModel.addBoxByID("14", 0.25,0.9375,0.25,0.3125,1,0.3125, 35, 4);
Furniture.placeRotatableBlock(BlockID.happycake, happycakeModel);

//translation various
Translation.addTranslation("Potted Foliage", {ru: "Листва на Горшке"});
Translation.addTranslation("Lamp", {ru: "Светильник"});
Translation.addTranslation("Big Cake", {ru: "Большая Торт"});

//recipes various
Recipes.addShaped({id: BlockID.pottedfoliage, count: 1, data: 0}, [" x ", " c ", " a "], ['a', 390,0, 'x', 85,0, 'x', 161,0]);
Recipes.addShaped({id: ItemID.tv, count: 1, data: 0}, ["aaa", "axa", "aaa"], ['a', 35,15, 'x', 49,0])
Recipes.addShaped({id: BlockID.happycake, count: 1, data: 0}, ["aaa", "aaa", "x x"], ["x",5,0, "a", 35,0]);
Recipes.addShapeless(
	{id: BlockID.lamp, count: 1, data: 0},
	[{id: 4, data: 0}, {id: 4, data: 0}, {id: 325, data: 10},
	 {id: 4, data: 0}, {id: 4, data: 0}, {id: 4, data: 0}, {id: 4, data: 0}],
function(api, field){
 Player.addItemToInventory(325, 1)
 for (var i in field){ 
 api.decreaseFieldSlot(i); 
 }
});