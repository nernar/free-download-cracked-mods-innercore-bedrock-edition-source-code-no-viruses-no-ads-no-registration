importLib("ToolType", "*");
ToolAPI.addToolMaterial("plastic", {durability: 100, level: 3, efficiency: 6, damage: 2, enchantability: 3});
ToolAPI.setTool(ItemID.plasticSword, "plastic", ToolType.sword);
ToolAPI.setTool(ItemID.plasticPickaxe, "plastic", ToolType.pickaxe);

