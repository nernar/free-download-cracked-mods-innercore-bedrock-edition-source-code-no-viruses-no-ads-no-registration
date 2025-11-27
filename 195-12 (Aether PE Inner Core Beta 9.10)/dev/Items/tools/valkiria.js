IDRegistry.genItemID("valkiriaSword");
Item.createItem("valkiriaSword", "Valkyrie Lance", {name: "valkyrie_lance", meta: 0}, {stack: 1});

IDRegistry.genItemID("valkiriaShovel");
Item.createItem("valkiriaShovel", "Valkyrie Shovel", {name: "valkyrie_shovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("valkiriaPickaxe");
Item.createItem("valkiriaPickaxe", "Valkyrie Pickaxe", {name: "valkyrie_pickaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("valkiriaAxe");
Item.createItem("valkiriaAxe", "Valkyrie Axe", {name: "valkyrie_axe", meta: 0}, {stack: 1});

//LOL
ToolAPI.addToolMaterial("valkyriesw", {durability: 1001, level: 4, efficiency: 3, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("valkyriesh", {durability: 1562, level: 3, efficiency: 6, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("valkyriepi", {durability: 1568, level: 3, efficiency: 6, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("valkyrieaxe", {durability: 1562, level: 3, efficiency: 6, damage: 6, enchantability: 14});


ToolAPI.setTool(ItemID.valkiriaSword, "valkyriesw", ToolType.sword);
Item.setToolRender(ItemID.valkiriaSword, true);

ToolAPI.setTool(ItemID.valkiriaShovel, "valkyriesh", ToolType.shovel);
Item.setToolRender(ItemID.valkiriaShovel, true);

ToolAPI.setTool(ItemID.valkiriaPickaxe, "valkyriepi", ToolType.pickaxe);
Item.setToolRender(ItemID.valkiriaPickaxe, true);

ToolAPI.setTool(ItemID.valkiriaAxe, "valkyrieaxe", ToolType.axe);
Item.setToolRender(ItemID.valkiriaAxe, true);