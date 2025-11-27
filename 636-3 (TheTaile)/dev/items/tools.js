IMPORT("ToolLib");
ToolAPI.addToolMaterial("Lol", {durability: 6180, level: 20, efficiency: 4, damage: 13, enchantability: 76});
IDRegistry.genItemID("LolSword");
Item.createItem("LolSword", "Коса души", {name: "lolsword", meta: 0}, {stack: 1});
ToolLib.setTool(ItemID.LolSword, "Lol", ToolType.sword);

ToolAPI.addToolMaterial("Golem", {durability: 10000, level: 20, efficiency: 4, damage: 16, enchantability: 1});
IDRegistry.genItemID("GolemSword");
Item.createItem("GolemSword", "Меч голема", {name: "golem_sword", meta: 0}, {stack: 1});
ToolLib.setTool(ItemID.GolemSword, "Golem", ToolType.sword);

ToolAPI.addToolMaterial("Hook", {durability: 6600, level: 20, efficiency: 5, damage: 16, enchantability: 12});
IDRegistry.genItemID("grapple_hook");
Item.createItem("grapple_hook", "Захватный крюк", {name: "grapple_hook", meta: 0}, {stack: 1});
ToolLib.setTool(ItemID.grapple_hook, "Hook", ToolType.pickaxe);

ToolAPI.addToolMaterial("Lol2", {durability: 2000, level: 20, efficiency: 4, damage: 4, enchantability: 76});
IDRegistry.genItemID("LolSword2");
Item.createItem("LolSword2", "Коса", {name: "lolsword", meta: 1}, {stack: 1});
ToolLib.setTool(ItemID.LolSword2, "Lol2", ToolType.sword);
ToolLib.setTool(ItemID.LolSword2, "Lol2", ToolType.hoe);

ToolAPI.addToolMaterial("Raiden", {durability: 6000, level: 20, efficiency: 4, damage: 20, enchantability: 76});
IDRegistry.genItemID("raider_axe");
Item.createItem("raider_axe", "Топор охотника", {name: "raider_axe", meta: 0}, {stack: 1});
ToolLib.setTool(ItemID.raider_axe, "Raiden", ToolType.sword);
ToolLib.setTool(ItemID.raider_axe, "Raiden", ToolType.axe);

ToolAPI.addToolMaterial("Purple", {durability: 6000, level: 20, efficiency: 4, damage: 10, enchantability: 76});
IDRegistry.genItemID("purple_sword");
Item.createItem("purple_sword", "Пурпурный меч", {name: "purple_sword", meta: 0}, {stack: 1});
ToolLib.setTool(ItemID.purple_sword, "Purple", ToolType.sword);

ToolAPI.addToolMaterial("Ender", {durability: 12000, level: 20, efficiency: 40, damage: 24, enchantability: 76});
IDRegistry.genItemID("EndSword");
Item.createItem("EndSword", "Клинок края", {name: "Endsword", meta: 0}, {stack: 1});
ToolLib.setTool(ItemID.EndSword, "Ender", ToolType.sword);

ToolAPI.addToolMaterial("Enders", {durability: 14000, level: 20, efficiency: 40, damage: 29, enchantability: 76});
IDRegistry.genItemID("EndSwords");
Item.createItem("EndSwords", "Пробуждённый клинок края", {name: "Endsword", meta: 1}, {stack: 1});
ToolLib.setTool(ItemID.EndSwords, "Enders", ToolType.sword);

ToolAPI.addToolMaterial("Ende", {durability: 19000, level: 20, efficiency: 40, damage: 34, enchantability: 120});
IDRegistry.genItemID("EndSwor");
Item.createItem("EndSwor", "Боевой клинок края", {name: "Endsword", meta: 1}, {stack: 1});
ToolLib.setTool(ItemID.EndSwor, "Ende", ToolType.sword);