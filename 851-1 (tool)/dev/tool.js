importLib("ToolType", "*");
IDRegistry.genItemID("redium_Sword");
IDRegistry.genItemID("redium_Pickaxe");
IDRegistry.genItemID("redium_Axe");
IDRegistry.genItemID("redium_Hoe");
IDRegistry.genItemID("redium_Shovel");

IDRegistry.genItemID("blue_Sword");
IDRegistry.genItemID("blue_Pickaxe");
IDRegistry.genItemID("blue_Axe");
IDRegistry.genItemID("blue_Hoe");
IDRegistry.genItemID("blue_Shovel");

IDRegistry.genItemID("purp_Sword");
IDRegistry.genItemID("purp_Pickaxe");
IDRegistry.genItemID("purp_Axe");
IDRegistry.genItemID("purp_Hoe");
IDRegistry.genItemID("purp_Shovel");



Item.createItem("redium_Pickaxe", "Redium Pickaxe", {name: "redium_pickaxe", meta: 0}, {stack: 1});  //кирка
Item.createItem("redium_Sword", "Redium Sword", {name: "redium_sword", meta: 0}, {stack: 1});  //меч
Item.createItem("redium_Axe", "Redium Axe", {name: "redium_axe", meta: 0}, {stack: 1});  //топор
Item.createItem("redium_Hoe", "Redium Hoe", {name: "redium_hoe", meta: 0}, {stack: 1});  //мотыга
Item.createItem("redium_Shovel", "Redium Shovel", {name: "redium_shovel", meta: 0}, {stack: 1});  //лопата

Item.createItem("blue_Sword", "Blutonium Sword", {name: "blue_sword", meta: 0}, {stack: 1});
Item.createItem("blue_Pickaxe", "Blutonium Pickaxe", {name: "blue_pickaxe", meta: 0}, {stack: 1});
Item.createItem("blue_Axe", "Blutonium Axe", {name: "blue_axe", meta:0}, {stack: 1});
Item.createItem("blue_Hoe", "Blutonium Axe", {name: "blue_hoe", meta: 0}, {stack: 1});
Item.createItem("blue_Shovel", "Blutonium Shovel", {name: "blue_shovel", meta: 0}, {stack: 1});

Item.createItem("purp_Sword", "Ferom Sword", {name: "purp_sword", meta: 0}, {stack: 1});
Item.createItem("purp_Pickaxe", "Ferom Pickaxe", {name: "purp_pickaxe", meta: 0}, {stack: 1});
Item.createItem("purp_Axe", "Ferom Axe", {name: "purp_axe", meta: 0}, {stack: 1});
Item.createItem("purp_Hoe", "Ferom Hoe", {name: "purp_hoe", meta: 0}, {stack: 1});
Item.createItem("purp_Shovel", "Ferom Shovel", {name: "purp_shovel", meta: 0}, {stack: 1});





ToolAPI.registerSword(ItemID.redium_Sword, {level: 0, durability: 365, damage: 10}); //урон меча и тд
ToolAPI.addToolMaterial("redium", {durability: 2048, level: 4, efficiency: 8, damage: 15, enchantability: 20}); //добавление иатериала redium
ToolAPI.setTool(ItemID.redium_Pickaxe, "redium", ToolType.pickaxe);  //кирка инфа
ToolAPI.setTool(ItemID.redium_Axe, "redium", ToolType.axe);
ToolAPI.setTool(ItemID.redium_Hoe, "redium", ToolType.hoe);
ToolAPI.setTool(ItemID.redium_Shovel, "redium", ToolType.shovel);

ToolAPI.registerSword(ItemID.blue_Sword, {level: 0, durability: 565, damage: 15}); //урон меча и тд
ToolAPI.addToolMaterial("blue", {durability: 4000, level: 4, efficiency: 12, damage: 20, enchantability: 25});
ToolAPI.setTool(ItemID.blue_Pickaxe, "blue", ToolType.pickaxe);
ToolAPI.setTool(ItemID.blue_Axe, "blue", ToolType.axe);
ToolAPI.setTool(ItemID.blue_Hoe, "blue", ToolType.hoe);
ToolAPI.setTool(ItemID.blue_Shovel, "blue", ToolType.shovel);

ToolAPI.registerSword(ItemID.purp_Sword, {level: 0, durability: 1024, damage: 20});
ToolAPI.addToolMaterial("purp", {durability: 10000, level: 4, efficiency: 15, damage: 25, enchantability: 30});
ToolAPI.setTool(ItemID.purp_Pickaxe, "purp", ToolType.pickaxe);
ToolAPI.setTool(ItemID.purp_Axe, "purp", ToolType.axe);
ToolAPI.setTool(ItemID.purp_Hoe, "purp", ToolType.hoe);
ToolAPI.setTool(ItemID.purp_Shovel, "purp", ToolType.shovel);



