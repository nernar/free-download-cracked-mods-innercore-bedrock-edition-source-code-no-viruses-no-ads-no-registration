IDRegistry.genItemID("emsword");

Item.createItem("emsword", "Emerald sword", {name: "emsword", meta: 0}, {stack: 1});

IDRegistry.genItemID("emshov");

Item.createItem("emshov", "Emerald shovel", {name: "emshovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("emaxe");

Item.createItem("emaxe", "Emerald axe", {name: "emaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("empick");

Item.createItem("empick", "Emerald pickaxe", {name: "empickaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("emhoe");

Item.createItem("emhoe", "Emerald hoe", {name: "emhoe", meta: 0}, {stack: 1});

importLib("ToolType", "*");

ToolAPI.addToolMaterial("emerald", {durability: 225, level: 5, efficiency: 10, damage: 30, enchantability: 15});

ToolAPI.setTool(ItemID.emsword, "emerald", ToolType.sword);

ToolAPI.setTool(ItemID.emaxe, "emerald", ToolType.axe);

ToolAPI.setTool(ItemID.emshov, "emerald", ToolType.shovel);

ToolAPI.setTool(ItemID.empick, "emerald", ToolType.pickaxe);

ToolAPI.setTool(ItemID.emhoe, "emerald", ToolType.hoe);


IDRegistry.genItemID("emerHelmet");
IDRegistry.genItemID("emerChestplate");
IDRegistry.genItemID("emerLeggings");
IDRegistry.genItemID("emerBoots");

Item.createArmorItem("emerHelmet", "Emerald Helmet", {name: "emerHelmet"}, {type: "helmet", armor: 4, durability: 300, texture: "armor/emer_1.png"});

Item.createArmorItem("emerChestplate", "Emerald Chestplate", {name: "emerChestplate"}, {type: "chestplate", armor: 8, durability: 300, texture: "armor/emer_1.png"});

Item.createArmorItem("emerLeggings", "Emerald Leggings", {name: "emerLeggings"}, {type: "leggings", armor: 4, durability: 300, texture: "armor/emer_2.png"});

Item.createArmorItem("emerBoots", "Emerald Boots", {name: "emerBoots"}, {type: "boots", armor: 2, durability: 300, texture: "armor/emer_1.png"});

Recipes.addShaped({id: ItemID.emsword, count: 1, data: 0}, [ "x", "x", "a" ], ['x', 388, 0, 'a', 280, 0]);

Recipes.addShaped({id: ItemID.empick, count: 1, data: 0}, [ "xxx", " a ", " a " ], ['x', 388, 0, 'a', 280, 0]);

Recipes.addShaped({id: ItemID.emhoe, count: 1, data: 0}, [ " xx", " a ", " a " ], ['x', 388, 0, 'a', 280, 0]);

Recipes.addShaped({id: ItemID.emshov, count: 1, data: 0}, [ " x ", " a ", " a " ], ['x', 388, 0, 'a', 280, 0]);

Recipes.addShaped({id: ItemID.emaxe, count: 1, data: 0}, [ "xx ", "xa ", " a " ], ['x', 388, 0, 'a', 280, 0]);

Recipes.addShaped({id: ItemID.emerChestplate, count: 1, data: 0}, [ "x x", "xxx", "xxx" ], ['x', 388, 0]);

Recipes.addShaped({id: ItemID.emerLeggings, count: 1, data: 0}, [ "xxx", "x x", "x x" ], ['x', 388, 0]);

Recipes.addShaped({id: ItemID.emerBoots, count: 1, data: 0}, [ "   ", "x x", "x x" ], ['x', 388, 0]);

Recipes.addShaped({id: ItemID.emerHelmet, count: 1, data: 0}, [ "xxx", "x x", "   " ], ['x', 388, 0]);
