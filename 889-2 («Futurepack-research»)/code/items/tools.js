IDRegistry.genItemID("composite_rod");
Item.createItem("composite_rod", "Composite fishing rod", {name: "composite_rod_uncast", meta: 0}, {stack: 1});

IDRegistry.genItemID("composite_pickaxe"); Item.createItem("composite_pickaxe", "Composite Pickaxe", {name: "composite_pickaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("composite_axe"); Item.createItem("composite_axe", "Composite axe", {name: "composite_axe", meta: 0}, {stack: 1});

IDRegistry.genItemID("composite_shovel"); Item.createItem("composite_shovel", "Composite shovel", {name: "composite_spade", meta: 0}, {stack: 1});

IDRegistry.genItemID("composite_hoe"); Item.createItem("composite_hoe", "Composite hoe", {name: "composite_hoe", meta: 0}, {stack: 1});

IDRegistry.genItemID("future_scrench"); Item.createItem("future_scrench", "Scrench", {name: "scrench", meta: 0}, {stack: 1});

Item.addRepairItemIds(ItemID.composite_axe, [ItemID.verbuntmetall]);
Item.addRepairItemIds(ItemID.composite_shovel, [ItemID.verbuntmetall]);
Item.addRepairItemIds(ItemID.composite_hoe, [ItemID.verbuntmetall]);
Item.addRepairItemIds(ItemID.composite_pickaxe, [ItemID.verbuntmetall]);

Item.setEnchantType(ItemID.composite_pickaxe, Native.EnchantType.pickaxe, 14);
Item.setEnchantType(ItemID.composite_axe, Native.EnchantType.axe, 14);
Item.setEnchantType(ItemID.composite_shovel, Native.EnchantType.spade, 14);
Item.setEnchantType(ItemID.composite_hoe, Native.EnchantType.hoe, 14);

ToolAPI.addToolMaterial("composite", {
    durability: 500,
    level: 3,
    efficiency: 7,
    damage: 6,
    enchantability: 14
});
ToolAPI.setTool(ItemID.composite_pickaxe, "netherite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.composite_axe, "netherite", ToolType.axe);
ToolAPI.setTool(ItemID.composite_pickaxe, "netherite", ToolType.shovel);
ToolAPI.setTool(ItemID.composite_hoe, "netherite", ToolType.hoe);

Recipes.addShaped({id: ItemID.composite_axe, count: 1, data: 0},
	["cc", "cl", "*l"],
	['c', ItemID.verbuntmetall, 0, 'l', ItemID.iron_stick, 0]
);
Recipes.addShaped({id: ItemID.composite_axe, count: 1, data: 0},
	["cc", "lc", "l*"],
	['c', ItemID.verbuntmetall, 0, 'l', ItemID.iron_stick, 0]
);
Recipes.addShaped({id: ItemID.composite_pickaxe, count: 1, data: 0},
	["ccc", "*l*", "*l*"],
	['c', ItemID.verbuntmetall, 0, 'l', ItemID.iron_stick, 0]
);
Recipes.addShaped({id: ItemID.composite_shovel, count: 1, data: 0},
	["c", "l", "l"],
	['c', ItemID.verbuntmetall, 0, 'l', ItemID.iron_stick, 0]
);
Recipes.addShaped({id: ItemID.composite_hoe, count: 1, data: 0},
	["cc", "*l", "*l"],
	['c', ItemID.verbuntmetall, 0, 'l', ItemID.iron_stick, 0]
);
Recipes.addShaped({id: ItemID.composite_hoe, count: 1, data: 0},
	["cc", "l*", "l*"],
	['c', ItemID.verbuntmetall, 0, 'l', ItemID.iron_stick, 0]
);
Recipes.addShaped({id: ItemID.composite_rod, count: 1, data: 0},
	["**l", "*ls", "c*s"],
	['c', ItemID.verbuntmetall, 0, 'l', ItemID.iron_stick, 0, 's', VanillaItemID.string, 0]
);
Recipes.addShaped({id: ItemID.composite_rod, count: 1, data: 0},
	["l**", "sl*", "s*c"],
	['c', ItemID.verbuntmetall, 0, 'l', ItemID.iron_stick, 0, 's', VanillaItemID.string, 0]
);
