IDRegistry.genItemID("dubin");
Item.createItem("dubin", "Деревянная Дубинка", {name: "деревянная_дубинка", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["dubin"], "ost", ToolType.sword);
ToolAPI.setTool(ItemID["kost_igla"], "ost", ToolType.sword);

Recipes.addShaped({id: ItemID.dubin, count: 1, data: 0}, 
	["x", "x", "a"], 
	['x', 5, 0, 'a', 280, 0]
);
Recipes.addShaped({id: ItemID.dubin, count: 1, data: 0}, 
	["x", "x", "a"], 
	['x', 5, 1, 'a', 280, 0]
);
Recipes.addShaped({id: ItemID.dubin, count: 1, data: 0}, 
	["x", "x", "a"], 
	['x', 5, 2, 'a', 280, 0]
);
Recipes.addShaped({id: ItemID.dubin, count: 1, data: 0}, 
	["x", "x", "a"], 
	['x', 5, 3, 'a', 280, 0]
);
Recipes.addShaped({id: ItemID.dubin, count: 1, data: 0}, 
	["x", "x", "a"], 
	['x', 5, 4, 'a', 280, 0]
);
Recipes.addShaped({id: ItemID.dubin, count: 1, data: 0}, 
	["x", "x", "a"], 
	['x', 5, 5, 'a', 280, 0]
);
