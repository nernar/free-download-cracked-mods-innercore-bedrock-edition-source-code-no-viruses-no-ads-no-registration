IDRegistry.genItemID("ExoSolar");
Item.createItem("ExoSolar", "Модуль улучшения солнечной батареи", {name: "mv_solar_module", meta: 0}, {});
Recipes.addShaped({id:
ItemID.ExoSolar, count: 1, data: 0}, [
 "xxx",
 "c#c",
 "xxx"
], ['#', BlockID.solarPanel, 0, 'x',
ItemID.plateIron, 0, 'c', ItemID.cableCopper1, 0]);