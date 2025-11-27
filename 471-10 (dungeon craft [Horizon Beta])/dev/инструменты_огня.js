IDRegistry.genItemID("sword_1");
Item.createItem("sword_1", "sword_1", {name: "sword_1", meta: 0}, {stack: 1});
Translation.addTranslation("sword_1", {ru: "\u043c\u0435\u0447 \u043e\u0433\u043d\u044f"});
IDRegistry.genItemID("pickaxe_1");
Item.createItem("pickaxe_1", "pickaxe_1", {name: "pickaxe_1", meta: 0}, {stack: 1});
Translation.addTranslation("pickaxe_1", {ru: "\u043a\u0438\u0440\u043a\u0430 \u043e\u0433\u043d\u044f"});
IDRegistry.genItemID("sword_2");
Item.createItem("sword_2", "sword_2", {name: "sword2", meta: 0}, {stack: 1});
Translation.addTranslation("sword_2", {ru: "\u043c\u0435\u0447 \u0431\u043e\u0433\u0430"});
IDRegistry.genItemID("pickaxe_2");
Item.createItem("pickaxe_2", "pickaxe_2", {name: "kirka", meta: 0}, {stack: 1});
Translation.addTranslation("pickaxe_2", {ru: "\u041a\u0438\u0440\u043a\u0430 \u0431\u043e\u0433\u0430"});
ToolAPI.addToolMaterial("pickaxe_1", {durability: 2220, level: 4, efficiency: 5, damage: 8, enchantability: 14});
ToolAPI.addToolMaterial("sword_1", {drability: 2220, level: 0, efficiency: 0, damage: 15, enchantability: 14});
ToolAPI.addToolMaterial("pickaxe_2", {durability: 1110, level: 5, efficiency: 4, damage: 0, enchantability: 14});
ToolAPI.addToolMaterial("sword_2", {drability: 1110, level: 0, efficiency: 0, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID["sword_1"], "sword_1", ToolType.sword);
ToolAPI.setTool(ItemID["sword_2"], "sword_2", ToolType.sword);
ToolAPI.setTool(ItemID["pickaxe_1"], "pickaxe_1", ToolType.pickaxe);
ToolAPI.setTool(ItemID["pickaxe_2"], "pickaxe_2", ToolType.pickaxe);
Item.registerUseFunction("sword_1", function (coords, item, block) {
    if (World.getBlockID(coords.x, coords.y + 1, coords.z) == 0) {
        World.setBlock(coords.x, coords.y + 1, coords.z, 51, 0);
    }
});

