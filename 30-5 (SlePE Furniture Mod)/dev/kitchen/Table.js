function createTableRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();

model.addBox (6/16, 0, 6/16, 10/16, 0.95, 10/16,  idMaterial, dataMaterial);
model.addBox (0, 14/16, 0, 1, 1, 1,  idMaterial, dataMaterial);
model.addBox (4/16, 0, 1/4, 3/4, 1/32, 3/4,  idMaterial, dataMaterial);

render.addEntry(model);
}
createFurnitureWood("oakTable","table","planks",0, "Oak Table", ItemID.oakTable, BlockID.oakTable,0);
Translation.addTranslation("Oak Table", {ru: "Дубовый Стол"});
Recipes.addShaped({id: IDData.item.oakTable, count: 1, data: 0}, ["www", "vwv", "vwv"], ["w",5,0]);
createTableRender(BlockID.oakTable, 5, 0);

createFurnitureWood("birchTable","table","planks",2, "Birch Table", ItemID.birchTable, BlockID.birchTable,1);
Translation.addTranslation("Birch Table", {ru: "Берёзовый Стол"});
Recipes.addShaped({id: IDData.item.birchTable, count: 1, data: 2}, ["www", "vwv", "vwv"], ["w",5,2]);
createTableRender(BlockID.birchTable, 5, 2);

createFurnitureWood("spruceTable","table","planks",1, "Spruce Table", ItemID.spruceTable, BlockID.spruceTable,2);
Translation.addTranslation("Spruce Table", {ru: "Еловый Стол"});
Recipes.addShaped({id: IDData.item.spruceTable, count: 1, data: 1}, ["www", "vwv", "vwv"], ["w",5,1]);
createTableRender(BlockID.spruceTable, 5, 1);

createFurnitureWood("jungleTable","table","planks",3, "Jungle Table", ItemID.jungleTable, BlockID.jungleTable,3);
Translation.addTranslation("Jungle Table", {ru: "Стол из Тропической Древесины"});
Recipes.addShaped({id: IDData.item.spruceTable, count: 1, data: 3}, ["www", "vwv", "vwv"], ["w",5,3]);
createTableRender(BlockID.jungleTable, 5, 3);

createFurnitureWood("acaciaTable","table","planks",4, "Acacia Table", ItemID.acaciaTable, BlockID.acaciaTable,4);
Translation.addTranslation("Acacia Table", {ru: "Стол из Акации"});
Recipes.addShaped({id: IDData.item.acaciaTable, count: 1, data: 4}, ["www", "vwv", "vwv"], ["w",5,4]);
createTableRender(BlockID.acaciaTable, 5, 4);

createFurnitureWood("darkOakTable","table","planks",5, "Dark Oak Table", ItemID.darkOakTable, BlockID.darkOakTable,5);
Translation.addTranslation("Dark Oak Table", {ru: "Стол из Тёмного Дуба"});
Recipes.addShaped({id: IDData.item.darkOakTable, count: 1, data: 5}, ["www", "vwv", "vwv"], ["w",5,5]);
createTableRender(BlockID.darkOakTable, 5, 5);

createFurnitureStone("cobblestoneTable","table","cobblestone",0, "Cobblestone Table", ItemID.cobblestoneTable, BlockID.cobblestoneTable,6);
Translation.addTranslation("Cobblestone Table", {ru: "Стол из Булыжника"});
Recipes.addShaped({id: IDData.item.cobblestoneTable, count: 1, data: 0}, ["www", "vwv", "vwv"], ["w",4,0]);
createTableRender(BlockID.cobblestoneTable, 4, 0);

createFurnitureStone("stoneBrickTable","table","stonebrick",0, "Stone Brick Table", ItemID.stoneBrickTable, BlockID.stoneBrickTable,7);
Translation.addTranslation("Stone Brick Table", {ru: "Стол из Каменного Кирпича"});
Recipes.addShaped({id: IDData.item.stoneBrickTable, count: 1, data: 0}, ["www", "vwv", "vwv"], ["w",98,0]);
createTableRender(BlockID.stoneBrickTable, 98, 0);

createFurnitureStone("quartzTable","table","quartz_block",0, "Quartz Table", ItemID.quartzTable, BlockID.quartzTable,8);
Translation.addTranslation("Quartz Table", {ru: "Кварцевый Стол"});
Recipes.addShaped({id: IDData.item.quartzTable, count: 1, data: 0}, ["www", "vwv", "vwv"], ["w",155,0]);
createTableRender(BlockID.quartzTable, 155, 0);
