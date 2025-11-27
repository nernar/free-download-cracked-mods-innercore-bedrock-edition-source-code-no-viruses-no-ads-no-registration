IDRegistry.genItemID("Exo");
Item.createItem("Exo", "Exosuit Upgrade Module", {name: "Exo", meta: 0}, {});
Recipes.addShaped({id:
ItemID.Exo, count: 4, data: 0}, [
 "xxx",
 "x#x",
 "xxx"
], ['#', ItemID.circuitBasic, 0, 'x',
ItemID.plateIron, 0]);