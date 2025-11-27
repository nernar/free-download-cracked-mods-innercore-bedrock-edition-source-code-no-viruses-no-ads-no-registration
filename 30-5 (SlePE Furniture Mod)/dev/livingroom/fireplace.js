var fireplaceObject={tick:function(tile){
	if(World.getThreadTime()%7==0){
		var x = Math.random()*10/16;
		var z = Math.random()*3/16;
		Particles.addFarParticle(16,tile.x+3/16+x, tile.y+7/16, tile.z+z+6/16,0,0,0,0);
	}
}};
function getFireplaceModel(i){
var fireplaceBrickModel = ModelAPI.newArray();
fireplaceBrickModel.addBoxByID("bottomPlate0", -3/16, 0/16, 0/16, 8/16, 3/16, 16/16, i);
fireplaceBrickModel.addBoxByID("bottomPlate1", 8/16, 0/16, 0/16, 19/16, 3/16, 16/16, i);
fireplaceBrickModel.addBoxByID("topPlate0", -3/16, 11/16, 0/16, 8/16, 14/16, 16/16, i);
fireplaceBrickModel.addBoxByID("topPlate1", 8/16, 11/16, 0/16, 19/16, 14/16, 16/16, i);
fireplaceBrickModel.addBoxByID("topPlate", -2/16, 14/16, 0/16, 8/16, 16/16, 16/16, i);
fireplaceBrickModel.addBoxByID("topPlate", 8/16, 14/16, 0/16, 18/16, 16/16, 16/16, i);
fireplaceBrickModel.addBoxByID("backPlate", 0/16, 3/16, 0/16, 16/16, 11/16, 3/16, i);
fireplaceBrickModel.addBoxByID("leftPlate", -3/16, 3/16, 0/16, 0/16, 11/16, 16/16, i);
fireplaceBrickModel.addBoxByID("rightPlate", 16/16, 3/16, 0/16, 19/16, 11/16, 16/16, i);
fireplaceBrickModel.addBoxByID("left", 0/16, 9/16, 2/16, 3/16, 11/16, 16/16, i);
fireplaceBrickModel.addBoxByID("right", 13/16, 9/16, 2/16, 16/16, 11/16, 16/16, i);
fireplaceBrickModel.addBoxByID("leftIron", 3/16, 3/16, 14/16, 4/16, 7/16, 15/16, 159,15);
fireplaceBrickModel.addBoxByID("rightIron", 12/16, 3/16, 14/16, 13/16, 7/16, 15/16, 159,15);
fireplaceBrickModel.addBoxByID("centerIron", 7.5/16, 3/16, 14/16, 8.5/16, 8/16, 15/16, 159,15);
fireplaceBrickModel.addBoxByID("borderIron", 0/16, 5/16, 14/16, 16/16, 6/16, 15/16, 159,15);
fireplaceBrickModel.addBoxByID("log0", 3/16, 3/16, 3/16, 13/16, 6/16, 6/16, 17,5);
fireplaceBrickModel.addBoxByID("log1", 3/16, 3/16, 8/16, 13/16, 6/16, 11/16, 17,5);
return fireplaceBrickModel;
}
IDRegistry.genItemID("fireplaceBrick");
Item.createItem("fireplaceBrick", "Brick fireplace", {name: "brick_hearth", meta: 0}, {stack: 64});
Translation.addTranslation("Brick fireplace", {ru: "Камин из кирпичей"});
Recipes.addShaped({id: ItemID.fireplaceBrick, count: 1, data: 0}, ["vbv", "brb", "bbb"], ["b",45,0, "r",101,0]);
var fireplaceBrickModel=getFireplaceModel(45);
Furniture.placeUnifiedEntity(BlockID.lightFurniture, ItemID.fireplaceBrick,fireplaceBrickModel,fireplaceObject);

IDRegistry.genItemID("fireplaceCobblestone");
Item.createItem("fireplaceCobblestone", "Cobblestone fireplace", {name: "cobblestone_hearth", meta: 0}, {stack: 64});
Translation.addTranslation("Cobblestone fireplace", {ru: "Камин из булыжников"});
Recipes.addShaped({id: ItemID.fireplaceCobblestone, count: 1, data: 0}, ["vbv", "brb", "bbb"], ["b",4,0, "r",101,0]);
var fireplaceCobblestoneModel=getFireplaceModel(4);
Furniture.placeUnifiedEntity(BlockID.lightFurniture, ItemID.fireplaceCobblestone,fireplaceCobblestoneModel,fireplaceObject);

IDRegistry.genItemID("fireplaceStoneBrick");
Item.createItem("fireplaceStoneBrick", "Stonebrick fireplace", {name: "stoneblock_hearth", meta: 0}, {stack: 64});
Translation.addTranslation("Stonebrick fireplace", {ru: "Камин из каменных кирпичей"});
Recipes.addShaped({id: ItemID.fireplaceStoneBrick, count: 1, data: 0}, ["vbv", "brb", "bbb"], ["b",98,0, "r",101,0]);
var fireplaceStonebrickModel=getFireplaceModel(98);
Furniture.placeUnifiedEntity(BlockID.lightFurniture, ItemID.fireplaceStoneBrick,fireplaceStonebrickModel,fireplaceObject);

IDRegistry.genItemID("fireplaceNetherbrick");
Item.createItem("fireplaceNetherbrick", "Netherbrick fireplace", {name: "netherbrickstone_hearth", meta: 0}, {stack: 64});
Translation.addTranslation("Netherbrick fireplace", {ru: "Камин из адских кирпичей"});
Recipes.addShaped({id: ItemID.fireplaceNetherbrick, count: 1, data: 0}, ["vbv", "brb", "bbb"], ["b",112,0, "r",101,0]);
var fireplaceNetherbrickModel=getFireplaceModel(112);
Furniture.placeUnifiedEntity(BlockID.lightFurniture, ItemID.fireplaceNetherbrick,fireplaceNetherbrickModel,fireplaceObject);
