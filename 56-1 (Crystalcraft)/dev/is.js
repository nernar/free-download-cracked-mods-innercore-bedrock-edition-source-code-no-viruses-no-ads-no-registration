importLib("ENV", "*");

IDRegistry.genItemID("is");
Item.createItem("is", "infusion stick", {name: "is", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("is", {durability: 15000, level: 5, efficiency: 20, damage: 50, enchantability: 10});

ToolAPI.setTool(ItemID.is, "is", ToolType.sword);

