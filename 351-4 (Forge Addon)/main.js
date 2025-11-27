importLib("ENV", "*");

IDRegistry.genItemID("sword1");
IDRegistry.genItemID("sword2");
IDRegistry.genItemID("sword3");
IDRegistry.genItemID("sword4");
IDRegistry.genItemID("sword5");
Item.createItem("sword1", "Forged Steel-Iron Sword", {name: "1Sword", meta: 0}, {stack: 1});
Item.createItem("sword2", "Forged Longsword", {name: "2Sword", meta: 0}, {stack: 1});
Item.createItem("sword3", "Forged Knife", {name: "3Sword", meta: 0}, {stack: 1});
Item.createItem("sword4", "Forged Khopesh", {name: "4Sword", meta: 0}, {stack: 1});
Item.createItem("sword5", "Forged Gladius", {name: "5Sword", meta: 0}, {stack: 1});
IDRegistry.genItemID("sword6");
IDRegistry.genItemID("sword7");
IDRegistry.genItemID("sword8");
IDRegistry.genItemID("sword9");
IDRegistry.genItemID("sword10");
IDRegistry.genItemID("sword11");
IDRegistry.genItemID("sword12");
Item.createItem("sword6", "Forged Battleaxe", {name: "6Sword", meta: 0}, {stack: 1});
Item.createItem("sword7", "Forged Spear", {name: "7Sword", meta: 0}, {stack: 1});
Item.createItem("sword8", "Forged Maul", {name: "8Sword", meta: 0}, {stack: 1});
Item.createItem("sword9", "Forged Hammer", {name: "9Sword", meta: 0}, {stack: 1});
Item.createItem("sword10", "Forged Trident", {name: "10Sword", meta: 0}, {stack: 1});
Item.createItem("sword11", "Forged Pike", {name: "11Sword", meta: 0}, {stack: 1});
Item.createItem("sword12", "Forged Harpoon", {name: "12Sword", meta: 0}, {stack: 1});


ToolAPI.addToolMaterial("fis", {durability: 300, level: 3, efficiency: 5, damage: 10, enchantability: 13});
ToolAPI.setTool(ItemID.sword1, "fis", ToolType.sword);

	Recipes.addShaped({id: ItemID.sword1, count: 1, data: 0}, [
		"xoo",
		"oxo",
		"ooy"
	], ['x', ItemID.coldsteel, 0, 'y', 280, 0]);
	
ToolAPI.addToolMaterial("fil", {durability: 200, level: 3, efficiency: 5, damage: 12, enchantability: 13});
ToolAPI.setTool(ItemID.sword2, "fil", ToolType.sword);

	Recipes.addShaped({id: ItemID.sword2, count: 1, data: 0}, [
		" x ",
		"xxx",
		" y "
	], ['x', ItemID.coldsteel, 0, 'y', 280, 0]);
	
	ToolAPI.addToolMaterial("fik", {durability: 30, level: 3, efficiency: 5, damage: 7, enchantability: 13});
ToolAPI.setTool(ItemID.sword3, "fik", ToolType.sword);

	Recipes.addShaped({id: ItemID.sword3, count: 1, data: 0}, [
		"x  ",
		"y  "
	], ['x', ItemID.coldsteel, 0, 'y', 280, 0]);
	
	ToolAPI.addToolMaterial("fikh", {durability: 250, level: 3, efficiency: 5, damage: 7, enchantability: 13});
ToolAPI.setTool(ItemID.sword4, "fikh", ToolType.sword);

	Recipes.addShaped({id: ItemID.sword4, count: 1, data: 0}, [
		" xx",
		" x ",
		" xy"
	], ['x', ItemID.coldsteel, 0, 'y', 280, 0]);
	
	
ToolAPI.addToolMaterial("fig", {durability: 400, level: 3, efficiency: 5, damage: 15, enchantability: 13});
ToolAPI.setTool(ItemID.sword5, "fig", ToolType.sword);

	Recipes.addShaped({id: ItemID.sword5, count: 1, data: 0}, [
		"xxx",
		"xyx",
		"xyx"
	], ['x', ItemID.coldsteel, 0, 'y', 280, 0]);
	

ToolAPI.addToolMaterial("fib", {durability: 100, level: 3, efficiency: 5, damage: 12, enchantability: 13});
ToolAPI.setTool(ItemID.sword6, "fib", ToolType.sword);

	Recipes.addShaped({id: ItemID.sword6, count: 1, data: 0}, [
		"xyx",
		"xyx",
		" yx"
	], ['x', ItemID.coldsteel, 0, 'y', 280, 0]);
	
ToolAPI.addToolMaterial("fisp", {durability: 70, level: 3, efficiency: 5, damage: 8, enchantability: 13});
ToolAPI.setTool(ItemID.sword7, "fisp", ToolType.sword);

	Recipes.addShaped({id: ItemID.sword7, count: 1, data: 0}, [
		" x ",
		" y ",
		"yyy"
	], ['x', ItemID.coldsteel, 0, 'y', 280, 0]);
	
	ToolAPI.addToolMaterial("fim", {durability: 300, level: 3, efficiency: 5, damage: 20, enchantability: 13});
ToolAPI.setTool(ItemID.sword8, "fim", ToolType.sword);

	Recipes.addShaped({id: ItemID.sword8, count: 1, data: 0}, [
		" x ",
		"xyx",
		"  y "
	], ['x', ItemID.coldsteel, 0, 'y', 280, 0]);
	
	ToolAPI.addToolMaterial("fih", {durability: 500, level: 3, efficiency: 5, damage: 14, enchantability: 13});
ToolAPI.setTool(ItemID.sword9, "fih", ToolType.sword);

	Recipes.addShaped({id: ItemID.sword9, count: 1, data: 0}, [
		" x ",
		"xyx",
		"xyx"
	], ['x', ItemID.coldsteel, 0, 'y', 280, 0]);
	
	
ToolAPI.addToolMaterial("fit", {durability: 400, level: 3, efficiency: 5, damage: 10, enchantability: 13});
ToolAPI.setTool(ItemID.sword10, "fit", ToolType.sword);

	Recipes.addShaped({id: ItemID.sword10, count: 1, data: 0}, [
		"xox",
		"oxo",
		"oyo"
	], ['x', ItemID.coldsteel, 0, 'y', 280, 0]);
	
	ToolAPI.addToolMaterial("fi183", {durability: 150, level: 3, efficiency: 5, damage: 10, enchantability: 13});
ToolAPI.setTool(ItemID.sword11, "fi183", ToolType.sword);

	Recipes.addShaped({id: ItemID.sword11, count: 1, data: 0}, [
		"yxy",
		"xyx",
		" y "
	], ['x', ItemID.coldsteel, 0, 'y', 280, 0]);
	
	ToolAPI.addToolMaterial("fi293", {durability: 200, level: 3, efficiency: 5, damage: 8, enchantability: 13});
ToolAPI.setTool(ItemID.sword12, "fi293", ToolType.sword);

	Recipes.addShaped({id: ItemID.sword12, count: 1, data: 0}, [
		"yxy",
		"xxx",
		" y "
	], ['x', ItemID.coldsteel, 0, 'y', 280, 0]);
	
	