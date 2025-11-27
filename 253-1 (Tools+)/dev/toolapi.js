importLib("ToolType", "*");
//Материал
ToolAPI.addToolMaterial("sword", {durability: 5000, damage: 30});

ToolAPI.addToolMaterial("pickaxe", {durability:5000, efficiency:50, damage:15, level:5});

ToolAPI.addToolMaterial("axe", {durability:5000, efficiency:50, damage:20, level:5});

ToolAPI.addToolMaterial("shovel", {durability:5000, efficiency:50, damage:15, level:5});

//Тип
ToolAPI.setTool(ItemID.psword, "sword", ToolType.sword);

ToolAPI.setTool(ItemID.ppickaxe, "pickaxe", ToolType.pickaxe);

ToolAPI.setTool(ItemID.paxe, "axe", ToolType.axe);

ToolAPI.setTool(ItemID.pshovel, "shovel", ToolType.shovel);