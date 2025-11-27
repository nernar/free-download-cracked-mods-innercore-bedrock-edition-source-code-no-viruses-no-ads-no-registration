IDRegistry.genItemID("knifeHolder");
Item.createItem("knifeHolder", "Knife holder", {name: "stick", meta: 0}, {stack: 64});
Translation.addTranslation("Knife holder", {ru: "Держатель ножей"});
Recipes.addShaped({id: ItemID.knifeHolder, count: 1, data: 0}, ["qvq", "vqv", "vqv"], ["q",155,0]);
var model = ModelAPI.newArray();
model.addBoxByID("body", 2/16, 7/16, 0/16, 14/16, 9/16, 1/16, 159,9);
model.addBoxByID("knife0h", 2/16, 2/16, 1/16, 14/16, 6/16, 1.1/16, 159,15);

Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.knifeHolder,model,{});
