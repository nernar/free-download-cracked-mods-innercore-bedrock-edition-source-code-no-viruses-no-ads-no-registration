IDRegistry.genItemID("valkiriaSword");
Item.createItem("valkiriaSword", "Valkyrie Lance", {name: "valkyrie_lance"}, {stack: 1});

IDRegistry.genItemID("valkiriaShovel");
Item.createItem("valkiriaShovel", "Valkyrie Shovel", {name: "valkyrie_shovel"}, {stack: 1});

IDRegistry.genItemID("valkiriaPickaxe");
Item.createItem("valkiriaPickaxe", "Valkyrie Pickaxe", {name: "valkyrie_pickaxe"}, {stack: 1});

IDRegistry.genItemID("valkiriaAxe");
Item.createItem("valkiriaAxe", "Valkyrie Axe", {name: "valkyrie_axe"}, {stack: 1});

//LOL
ToolAPI.addToolMaterial("valkyriesw", {durability: 1111, level: 4, efficiency: 1, damage: 6, enchantability: 9});
ToolAPI.addToolMaterial("valkyriesh", {durability: 1662, level: 3, efficiency: 6, damage: 1, enchantability: 9});
ToolAPI.addToolMaterial("valkyriepi", {durability: 1668, level: 3, efficiency: 6, damage: 2, enchantability: 9});
ToolAPI.addToolMaterial("valkyrieaxe", {durability: 1662, level: 3, efficiency: 6, damage: 6, enchantability: 9});


ToolLib.setTool(ItemID.valkiriaSword, "valkyriesw", ToolType.sword);

ToolLib.setTool(ItemID.valkiriaShovel, "valkyriesh", ToolType.shovel);

ToolLib.setTool(ItemID.valkiriaPickaxe, "valkyriepi", ToolType.pickaxe);

ToolLib.setTool(ItemID.valkiriaAxe, "valkyrieaxe", ToolType.axe);

Item.addRepairItemIds(ItemID.valkiriaSword, [ItemID.valkiriaSword]);
Item.addRepairItemIds(ItemID.valkiriaShovel, [ItemID.valkiriaShovel]);
Item.addRepairItemIds(ItemID.valkiriaPickaxe, [ItemID.valkiriaPickaxe]);
Item.addRepairItemIds(ItemID.valkiriaAxe, [ItemID.valkiriaAxe]);
