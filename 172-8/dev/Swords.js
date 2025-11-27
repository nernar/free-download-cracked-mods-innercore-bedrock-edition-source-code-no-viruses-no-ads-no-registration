importLib("ToolType", "*");
IDRegistry.genItemID("dirtsword");
Item.createItem("dirtsword", "Земляной меч", {name: "Dirt", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dirtsword", {durability: 25, level: 0, efficiency: 3, damage: 2.5, enchantability: 14});
ToolAPI.setTool(ItemID.dirtsword, "dirtsword", ToolType.sword);
Recipes.addShaped({id: ItemID.dirtsword, count: 1, data: 0}, [
" b ",
" b ",
" c "
], ['b', 3, 0, 'c', 280, 0]);


IDRegistry.genItemID("Legsword");
Item.createItem("Legsword", "Легендарный меч", {name: "LegSWo", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("Legsword", {durability: 350, level: 0, efficiency: 3, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.Legsword, "Legsword", ToolType.sword);
Recipes.addShaped({id: ItemID.Legsword, count: 1, data: 0}, [
" e ",
" e ",
" c "
], ['e', ItemID.LegendElem , 0, 'c', 280, 0]);
