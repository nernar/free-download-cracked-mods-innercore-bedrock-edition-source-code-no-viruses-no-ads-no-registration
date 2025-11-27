importLib("ToolType", "*");
IDRegistry.genItemID("LegendElem");
Item.createItem("LegendElem", "Легендарный элемент", {name: "LegendElem", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.LegendElem, count: 1, data: 0}, [
"abc",
"dex",
"ict"
], ['b', 326, 0, 'c', 327, 0, 'a', 265, 0, 'c', 266, 0, 'd', 264, 0, 'e', 263, 0, 'x', 388, 0, 'i', 351, 4, 't', 331, 0]);

