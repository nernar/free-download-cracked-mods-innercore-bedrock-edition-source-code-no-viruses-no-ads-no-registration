importLib("TOOLType", "*");

IDRegistry.genItemID("nethersword");
IDRegistry.genItemID("nethershovel");
IDRegistry.genItemID("netherpik");
IDRegistry.genItemID("netherax");
IDRegistry.genItemID("netherscythe");
Item.createItem("nethersword", "Netherack Sword", {name: "nethersword", meta:  0}, {stack: 1});
Item.createItem("nethershovel", "Netherack Shovel", {name: "nethershovel", meta: 0}, {stack: 1});
Item.createItem("netherpik", "Netherack Pickaxe", {name: "netherpick", meta: 0}, {stack: 1});
Item.createItem("netherax", "Netherack Axe", {name: "netherax", meta: 0}, {stack: 1});
Item.createItem("netherscythe", "Netherack Hoe", {name: "netherscythe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("nethersword", {durability: 1000, level: 3, efficiency: 35, damage: 6, enchantability: 1});
ToolAPI.addToolMaterial("nethershovel", {durability: 1000, level: 3, efficiency: 35, damage: 4.5, enchantability: 1});
ToolAPI.addToolMaterial("netherpik", {durability: 1000, level: 3, efficiency: 35, damage: 4, enchantability: 1});
ToolAPI.addToolMaterial("netherax", {durability: 1000, level: 3, efficiency: 35, damage: 8, enchantability: 1});
ToolAPI.addToolMaterial("netherscythe", {durability: 1000, level: 3, efficiency: 35, damage: 1, enchantability: 1});

ToolAPI.setTool(ItemID.nethersword, "nethersword", ToolType.sword);
ToolAPI.setTool(ItemID.nethershovel, "nethershovel", ToolType.shovel);
ToolAPI.setTool(ItemID.netherpik, "netherpik", ToolType.pickaxe);
ToolAPI.setTool(ItemID.netherax, "netherax", ToolType.axe);
ToolAPI.setTool(ItemID.netherscythe, "netherscythe", ToolType.hoe);

IDRegistry.genItemID("reinforcedsword");
IDRegistry.genItemID("reinforcedshovel");
IDRegistry.genItemID("reinforcedpickaxe");
IDRegistry.genItemID("reinforcedaxe");
IDRegistry.genItemID("reinforcedhoe");
Item.createItem("reinforcedsword", "Blaze Reinforced Sword", {name: "nethersword", meta:  2}, {stack: 1});
Item.createItem("reinforcedshovel", "Blaze Reinforced Shovel", {name: "nethershovel", meta: 2}, {stack: 1});
Item.createItem("reinforcedpickaxe", "Blaze Reinforced Pickaxe", {name: "netherpick", meta: 2}, {stack: 1});
Item.createItem("reinforcedaxe", "Blaze Reinforced Axe", {name: "netherax", meta: 2}, {stack: 1});
Item.createItem("reinforcedhoe", "Blaze Reinforced Hoe", {name: "netherscythe", meta: 2}, {stack: 1});

ToolAPI.addToolMaterial("reinforcedsword", {durability: 2000, level: 4, efficiency: 40, damage: 7, enchantability: 3});
ToolAPI.addToolMaterial("reinforcedshovel", {durability: 2000, level: 4, efficiency: 40, damage: 5.5, enchantability: 3});
ToolAPI.addToolMaterial("reinforcedpickaxe", {durability: 2000, level: 4, efficiency: 40, damage: 4, enchantability: 3});
ToolAPI.addToolMaterial("reinforcedaxe", {durability: 2000, level: 4, efficiency: 40, damage: 8, enchantability: 3});
ToolAPI.addToolMaterial("reinforcedhoe", {durability: 2000, level: 4, efficiency: 40, damage: 1, enchantability: 3});

ToolAPI.setTool(ItemID.reinforcedsword, "reinforcedsword", ToolType.sword);
ToolAPI.setTool(ItemID.reinforcedshovel, "reinforcedshovel", ToolType.shovel);
ToolAPI.setTool(ItemID.reinforcedpickaxe, "reinforcedpickaxe", ToolType.pickaxe);
ToolAPI.setTool(ItemID.reinforcedaxe, "reinforcedaxe", ToolType.axe);
ToolAPI.setTool(ItemID.reinforcedhoe, "reinforcedhoe", ToolType.hoe);