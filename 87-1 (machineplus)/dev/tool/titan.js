importLib("ToolType", "*");
//id
IDRegistry.genItemID("Pickaxe1");
//item
Item.createItem("Pickaxe1", "титановая кирка", {name: "Pickaxe", meta: 0}, {stack: 1});


//tool
ToolAPI.addToolMaterial("titan", {durability: 225, level: 3, efficiency: 6, damage: 2, enchantability: 14});
ToolAPI.setTool(ItemID.Pickaxe1, "titan", ToolType.pickaxe);





