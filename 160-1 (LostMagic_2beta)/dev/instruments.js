IDRegistry.genItemID("hellite_Sword");
IDRegistry.genItemID("hellite_Shovel");
IDRegistry.genItemID("hellite_Pickaxe");
IDRegistry.genItemID("hellite_Axe");
Item.createItem("hellite_Sword", "Хеллитовый меч", {name: "hellite_Sword", meta: 0}, {stack: 1});
Item.createItem("hellite_Shovel", "Хеллитовая лопата", {name: "hellite_Shovel", meta: 0}, {stack: 1});
Item.createItem("hellite_Pickaxe", "Хеллитовая кирка", {name: "hellite_Pickaxe", meta: 0}, {stack: 1});
Item.createItem("hellite_Axe", "Хеллитовый топор", {name: "hellite_Axe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("hellite", {durability: 820, level: 4, efficiency: 8, damage: 9, enchantability: 14});
ToolAPI.setTool(ItemID.hellite_Sword, "hellite", ToolType.sword);
ToolAPI.setTool(ItemID.hellite_Shovel, "hellite", ToolType.shovel);
ToolAPI.setTool(ItemID.hellite_Pickaxe, "hellite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.hellite_Axe, "hellite", ToolType.axe);
Recipes.addShaped({id: ItemID.hellite_Pickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " a "
], ['a', ItemID.hellite_ingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.hellite_Shovel, count: 1, data: 0}, [
    " a ",
    " b ",
    " a "
], ['a', ItemID.hellite_ingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.hellite_Sword, count: 1, data: 0}, [
    " a ",
    " a ",
    " b "
], ['a', ItemID.hellite_ingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.hellite_Axe, count: 1, data: 0}, [
    "aa",
    "ab ",
    " a "
], ['a', ItemID.hellite_ingot, 0, 'b', 280, 0]);
IDRegistry.genItemID("respherite_Sword");
IDRegistry.genItemID("respherite_Shovel");
IDRegistry.genItemID("respherite_Pickaxe");
IDRegistry.genItemID("respherite_Axe");
Item.createItem("respherite_Sword", "Респеритовый меч", {name: "respherite_Sword", meta: 0}, {stack: 1});
Item.createItem("respherite_Shovel", "Респепитовая лопата", {name: "respherite_Shovel", meta: 0}, {stack: 1});
Item.createItem("respherite_Pickaxe", "Респеритовая кирка", {name: "respherite_Pickaxe", meta: 0}, {stack: 1});
Item.createItem("respherite_Axe", "Респеритовый топор", {name: "respherite_Axe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("respherite", {durability: 805, level: 4, efficiency: 9, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.respherite_Sword, "respherite", ToolType.sword);
ToolAPI.setTool(ItemID.respherite_Shovel, "respherite", ToolType.shovel);
ToolAPI.setTool(ItemID.respherite_Pickaxe,"respherite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.respherite_Axe, "respherite", ToolType.axe);
Recipes.addShaped({id: ItemID.respherite_Pickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " a "
], ['a', ItemID.respherite_ingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.respherite_Shovel, count: 1, data: 0}, [
    " a ",
    " b ",
    " a "
], ['a', ItemID.respherite_ingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.respherite_Sword, count: 1, data: 0}, [
    " a ",
    " a ",
    " b "
], ['a', ItemID.respherite_ingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.respherite_Axe, count: 1, data: 0}, [
    "aa",
    "ab ",
    " a "
], ['a', ItemID.respherite_ingot, 0, 'b', 280, 0]);
IDRegistry.genItemID("mishril_Pickaxe");
Item.createItem("mishril_Pickaxe", "Мишриловая кирка", {name: "mishril_Pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("mishril", {durability: 1200, level: 6, efficiency: 10, damage: 9.5, enchantability: 14});
ToolAPI.setTool(ItemID.mishril_Pickaxe, "mishril", ToolType.pickaxe);
Recipes.addShaped({id: ItemID.mishril_Pickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.mishril, 0, 'b', 280, 0]);