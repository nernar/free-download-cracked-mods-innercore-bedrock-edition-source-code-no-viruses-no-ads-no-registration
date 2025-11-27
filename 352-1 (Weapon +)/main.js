importLib("ToolType", "*")
IDRegistry.genItemID("blazesword");
IDRegistry.genItemID("endersword");
IDRegistry.genItemID("icesword");
IDRegistry.genItemID("firesword");
Item.createItem("blazesword", "Blaze Sword \n +10 Attack", {name: "blazesword", meta: 0}, {stack: 1});
Item.createItem("endersword", "Ender Sword \n +20 Attack", {name: "endersword", meta: 0}, {stack: 1});
Item.createItem("icesword", "Beast Sword \n +76 Attack", {name: "beastsword", meta: 0}, {stack: 1});
Item.createItem("firesword", "Star Power Sword \n +76 Attack", {name: "advswo", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("swordblaze", {durability: 100, level: 3, efficiency: 4, damage: 10, enchantability: 30});
ToolAPI.addToolMaterial("swordender", {durability: 200, level: 3, efficiency: 4, damage: 20, enchantability: 30});
ToolAPI.addToolMaterial("swordice", {durability: 700, level: 3, efficiency: 4, damage: 76, enchantability: 30});
ToolAPI.addToolMaterial("swordfire", {durability: 700, level: 3, efficiency: 4, damage: 76, enchantability: 30});
ToolAPI.setTool(ItemID.blazesword, "swordblaze", ToolType.sword);
ToolAPI.setTool(ItemID.endersword, "swordender", ToolType.sword);
ToolAPI.setTool(ItemID.icesword, "swordice", ToolType.sword);
ToolAPI.setTool(ItemID.firesword, "swordfire", ToolType.sword);
Recipes.addShaped({id: ItemID.firesword, count: 1, data: 0}, 
["cac", 
 " c ",
 " b "],
["a", 399, 0, "b", 280, 0, "c", 377, 0]);
Recipes.addShaped({id: ItemID.icesword, count: 1, data: 0}, 
["cac", 
 "aaa",
 " b "],
["a", 174, 0, "b", 280, 0, "c", 332, 0]);
Recipes.addShaped({id: ItemID.endersword, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", 381, 0, "b", 280, 0]);
Recipes.addShaped({id: ItemID.blazesword, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", 369, 0, "b", 265, 0]);
Item.setToolRender("blazesword", true);