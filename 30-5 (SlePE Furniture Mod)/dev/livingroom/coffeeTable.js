function createCoffeeTableRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();

model.addBox (0, 0, 0, 2/16, 0.4, 2/16,  idMaterial, dataMaterial);
model.addBox (14/16, 0, 0, 1, 0.4, 2/16,  idMaterial, dataMaterial);
model.addBox (0, 0, 14/16, 2/16, 0.4, 1,  idMaterial, dataMaterial);
model.addBox (14/16, 0, 14/16, 1, 0.4, 1,  idMaterial, dataMaterial);

model.addBox (0, 6/16, 0, 2/16, 1/2, 1,  idMaterial, dataMaterial);
model.addBox (14/16, 6/16, 0, 1, 1/2, 1,  idMaterial, dataMaterial);
model.addBox (2/16, 6/16, 0, 14/16, 1/2, 2/16,  idMaterial, dataMaterial);
model.addBox (2/16, 6/16, 14/16, 14/16, 1/2, 1,  idMaterial, dataMaterial);

model.addBox (2/16, 7/16, 2/16, 14/16, 1/2, 14/16,  20,0);
//model.addBox (2/16, 6/16, 2/16, 14/16, 7/16, 14/16,  idMaterial, dataMaterial);

render.addEntry(model);
}
createFurnitureWood("oakCoffeeTable","cofeetable","planks",0, "Oak Coffe Table", ItemID.oakCoffeeTable, BlockID.oakCoffeeTable,0);
Translation.addTranslation("Oak Coffe Table", {ru: "Дубовый Кофейный Стол"});
Recipes.addShaped({id: IDData.item.oakCoffeeTable, count: 1, data: 0}, ["vvv", "www", "wvw"], ["w",5,0]);
createCoffeeTableRender(BlockID.oakCoffeeTable, 5, 0);
Block.setShape(BlockID.oakCoffeeTable,0,0,0,1,1/2,1);

createFurnitureWood("spruceCoffeeTable","cofeetable","planks",1, "Spruce Coffe Table", ItemID.spruceCoffeeTable, BlockID.spruceCoffeeTable,1);
Translation.addTranslation("Spruce Coffe Table", {ru: "Еловый Кофейный Стол"});
Recipes.addShaped({id: IDData.item.spruceCoffeeTable, count: 1, data: 0}, ["vvv", "www", "wvw"], ["w",5,1]);
createCoffeeTableRender(BlockID.spruceCoffeeTable, 5, 1);
Block.setShape(BlockID.spruceCoffeeTable,0,0,0,1,1/2,1);

createFurnitureWood("birchCoffeeTable","cofeetable","planks",2, "Birch Coffe Table", ItemID.birchCoffeeTable, BlockID.birchCoffeeTable,2);
Translation.addTranslation("Birch Coffe Table", {ru: "Берёзовый Кофейный Стол"});
Recipes.addShaped({id: IDData.item.birchCoffeeTable, count: 1, data: 0}, ["vvv", "www", "wvw"], ["w",5,2]);
createCoffeeTableRender(BlockID.birchCoffeeTable, 5, 2);
Block.setShape(BlockID.birchCoffeeTable,0,0,0,1,1/2,1);

createFurnitureWood("jungleCoffeeTable","cofeetable","planks",3, "Jungle Coffe Table", ItemID.jungleCoffeeTable, BlockID.jungleCoffeeTable,3);
Translation.addTranslation("Jungle Coffe Table", {ru: "Кофейный Стол из Тропической Древесины"});
Recipes.addShaped({id: IDData.item.jungleCoffeeTable, count: 1, data: 0}, ["vvv", "www", "wvw"], ["w",5,3]);
createCoffeeTableRender(BlockID.jungleCoffeeTable, 5, 3);
Block.setShape(BlockID.jungleCoffeeTable,0,0,0,1,1/2,1);

createFurnitureWood("acaciaCoffeeTable","cofeetable","planks",4, "Oak Coffe Table", ItemID.acaciaCoffeeTable, BlockID.acaciaCoffeeTable,4);
Translation.addTranslation("Acacia Coffe Table", {ru: "Кофейный Стол из Акации"});
Recipes.addShaped({id: IDData.item.acaciaCoffeeTable, count: 1, data: 0}, ["vvv", "www", "wvw"], ["w",5,4]);
createCoffeeTableRender(BlockID.acaciaCoffeeTable, 5, 4);
Block.setShape(BlockID.acaciaCoffeeTable,0,0,0,1,1/2,1);

createFurnitureWood("darkOakCoffeeTable","cofeetable","planks",0, "Dark Oak Coffe Table", ItemID.darkOakCoffeeTable, BlockID.darkOakCoffeeTable,5);
Translation.addTranslation("Dark Oak Coffe Table", {ru: "Кофейный Стол из Тёмного Дуба"});
Recipes.addShaped({id: IDData.item.darkOakCoffeeTable, count: 1, data: 0}, ["vvv", "www", "wvw"], ["w",5,5]);
createCoffeeTableRender(BlockID.darkOakCoffeeTable, 5, 5);
Block.setShape(BlockID.darkOakCoffeeTable,0,0,0,1,1/2,1);

createFurnitureStone("cobblestoneCoffeeTable","cofeetable","cobblestone",0, "Cobblestone Coffe Table", ItemID.cobblestoneCoffeeTable, BlockID.cobblestoneCoffeeTable,6);
Translation.addTranslation("Cobblestone Coffe Table", {ru: "Каменный Кофейный Стол"});
Recipes.addShaped({id: IDData.item.cobblestoneCoffeeTable, count: 1, data: 0}, ["vvv", "www", "wvw"], ["w",4,0]);
createCoffeeTableRender(BlockID.cobblestoneCoffeeTable, 4, 0);
Block.setShape(BlockID.cobblestoneCoffeeTable,0,0,0,1,1/2,1);

createFurnitureStone("stoneBrickCoffeeTable","cofeetable","stonebrick",0, "Stone Brick Coffe Table", ItemID.stoneBrickCoffeeTable, BlockID.stoneBrickCoffeeTable,7);
Translation.addTranslation("Stone Brick Coffe Table", {ru: "Кофейный Стол из Каменных Кирпичей"});
Recipes.addShaped({id: IDData.item.stoneBrickCoffeeTable, count: 1, data: 0}, ["vvv", "www", "wvw"], ["w",98,0]);
createCoffeeTableRender(BlockID.stoneBrickCoffeeTable, 98, 0);
Block.setShape(BlockID.stoneBrickCoffeeTable,0,0,0,1,1/2,1);

createFurnitureStone("quartzCoffeeTable","cofeetable","quartz_block",0, "Quartz Coffe Table", ItemID.quartzCoffeeTable, BlockID.quartzCoffeeTable,8);
Translation.addTranslation("Quartz Coffe Table", {ru: "Кварцевый Кофейный Стол"});
Recipes.addShaped({id: IDData.item.quartzCoffeeTable, count: 1, data: 0}, ["vvv", "www", "wvw"], ["w",155,0]);
createCoffeeTableRender(BlockID.quartzCoffeeTable, 155, 0);
Block.setShape(BlockID.quartzCoffeeTable,0,0,0,1,1/2,1);
