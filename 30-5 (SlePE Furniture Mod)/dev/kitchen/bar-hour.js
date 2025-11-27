IDRegistry.genItemID("bar_hour");
Item.createItem("bar_hour", "Bar-hour", {name: "table", meta: 6}, {stack: 64});
Translation.addTranslation("Bar-hour", {ru: "Барная стойка"});
Recipes.addShaped({id: ItemID.bar_hour, count: 1, data: 0}, ["bbb", "vbv", "vbv"], ["q",159,-1]);
var bar_hourModel = ModelAPI.newArray();
bar_hourModel.addBoxByID("body", 7/16, 0/16, 7/16, 9/16, 15/16, 9/16, 159,9);
bar_hourModel.addBoxByID("top", 0/16, 15/16, 0/16, 16/16, 16/16, 16/16, 159,9);
Furniture.placeUnifiedEntity(BlockID.stoneFurniture, ItemID.bar_hour,bar_hourModel,{});
