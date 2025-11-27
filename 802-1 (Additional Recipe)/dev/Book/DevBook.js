IDRegistry.genItemID("devbook");
Item.createItem(
    "devbook", 
    "§1Dev Book§r\n§4can't craft§r", {
        name: "devbook", meta: 0
    }, {stack: 1}
);
//

ToolAPI.addToolMaterial(
    "devbook", {
        durability: 999999, 
        level: 4, 
        efficiency: 50, 
        damage: 999999, 
        enchantability: 30
    }
);
//
ToolAPI.setTool(
    ItemID.devbook, 
    "devbook", 
    ToolType.sword
);
//
ToolAPI.setTool(
    ItemID.devbook, 
    "devbook", 
    ToolType.pickaxe
);
//
ToolAPI.setTool(
    ItemID.devbook, 
    "devbook", 
    ToolType.shovel
);
//
ToolAPI.setTool(
    ItemID.devbook, 
    "devbook", 
    ToolType.axe
);