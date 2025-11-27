IDRegistry.genItemID("imperialSword");
Item.createItem("imperialSword", "Imperial sword", {name: "imperialSword", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.imperialSword, true);
ToolAPI.addToolMaterial("imperialSword", {durability: 700, level: 3, efficiency: 2, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.imperialSword, "imperialSword", ToolType.sword);
IDRegistry.genItemID("imperialShield");
Item.createItem("imperialShield", "Imperial shield", {name: "imperialShield", meta: 0}, {stack: 64});

