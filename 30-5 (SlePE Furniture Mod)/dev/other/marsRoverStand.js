IDRegistry.genItemID("marsRoverStand");
Item.createItem("marsRoverStand", "Bar-marsRoverStand", {name: "stick", meta: 0}, {stack: 64});
Translation.addTranslation("marsRoverStand", {ru: "Барная стойка"});
Recipes.addShaped({id: ItemID.marsRoverStand, count: 1, data: 0}, ["bbb", "vbv", "vbv"], ["q",159,-1]);
var marsRoverStandModel = ModelAPI.newArray();
//bar_hourModel.addBoxByID("body", 7/16, 0/16, 7/16, 9/16, 15/16, 9/16, 159,9);
var mesh = new RenderMesh();
mesh.setBlockTexture("base", 0);
mesh.importFromFile(__dir__ + "models/KSR-29.obj", "obj", {scale:[1/12, 1/12, 1/12],translate: [0.5, 0, 0.5]});
marsRoverStandModel.addMesh(mesh);

Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.marsRoverStand,marsRoverStandModel,{});
