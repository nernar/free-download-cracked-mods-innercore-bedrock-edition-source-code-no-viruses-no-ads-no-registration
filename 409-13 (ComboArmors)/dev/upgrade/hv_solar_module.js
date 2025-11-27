IDRegistry.genItemID("ExohvSolar");
Item.createItem("ExohvSolar", "Высоковольтный модуль улучшения солнечной батареи", {name: "hv_solar_module", meta: 0}, {});
Recipes.addShaped({id:
ItemID.ExohvSolar, count: 1, data: 0}, [
 "xxx",
 "c#c",
 "xxx"
], ['#', BlockID.hvsa, 0, 'x',
ItemID.plateIron, 0, 'c', ItemID.cableOptic, 0]);