importLib("ToolType", "*");

ToolAPI.addToolMaterial("sworld", {durability: 3125, damage: 14});

ToolAPI.addToolMaterial("Hoe", {durability:3124});

ToolAPI.addToolMaterial("shovel", {durability:3124, efficiency: 8, damage: 8});

ToolAPI.addToolMaterial("axel", {durability:3124, efficiency:8, damage:12});

ToolAPI.addToolMaterial("pickaxe",{durability:3124, efficiency:8, damage:10, level:5});

ToolAPI.setTool(ItemID.SDSW, "sworld", ToolType.sword);

ToolAPI.setTool(ItemID.SDHoe, "Hoe", ToolType.hoe);

ToolAPI.setTool(ItemID.SDSH, "shovel", ToolType.shovel);

ToolAPI.setTool(ItemID.SDAX, "axel", ToolType.axe);

ToolAPI.setTool(ItemID.SDPI, "pickaxe", ToolType.pickaxe);