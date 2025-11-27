IDRegistry.genItemID("ExolvSolar");
Item.createItem("ExolvSolar", " Модуль улучшения солнечной батареи среднего напряжения", {name: "lv_solar_module", meta: 0}, {});
Recipes.addShaped({id:
ItemID.ExolvSolar, count: 1, data: 0}, [
 "xxx",
 "c#c",
 "xxx"
], ['#', BlockID.mvsa, 0, 'x',
ItemID.plateIron, 0, 'c', ItemID.cableGold2, 0]);