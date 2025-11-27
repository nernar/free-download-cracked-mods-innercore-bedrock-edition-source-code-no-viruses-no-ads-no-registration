ToolAPI.addToolMaterial("manasteel", {durability: 300, level: 3, efficiency: 6, damage: 3, enchantability: 20});
IDRegistry.genItemID("manasteel_sword");
IDRegistry.genItemID("manasteel_pickaxe");
IDRegistry.genItemID("manasteel_axe");
IDRegistry.genItemID("manasteel_shovel");
Item.createItem("manasteel_sword", "Manasteel Sword", {name: "manasteel_sword"}, {stack: 1});
Item.createItem("manasteel_pickaxe", "Manasteel Pickaxe", {name: "manasteel_pickaxe"}, {stack: 1});
Item.createItem("manasteel_axe", "Manasteel Axe", {name: "manasteel_axe"}, {stack: 1});
Item.createItem("manasteel_shovel", "Manasteel Shovel", {name: "manasteel_shovel"}, {stack: 1});
ToolAPI.setTool(ItemID.manasteel_sword, "manasteel", ToolType.sword);
ToolAPI.setTool(ItemID.manasteel_pickaxe, "manasteel", ToolType.pickaxe);
ToolAPI.setTool(ItemID.manasteel_axe, "manasteel", ToolType.axe);
ToolAPI.setTool(ItemID.manasteel_shovel, "manasteel", ToolType.shovel);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.manasteel_sword, count: 1, data: 0}, ["s", "s", "w"], ["s", ItemID.manasteel, 0, "w", ItemID.livingwoodStick, 0]);
    Recipes.addShaped({id: ItemID.manasteel_pickaxe, count: 1, data: 0}, ["sss", " w ", " w "], ["s", ItemID.manasteel, 0, "w", ItemID.livingwoodStick, 0]);
    Recipes.addShaped({id: ItemID.manasteel_axe, count: 1, data: 0}, ["ss", "sw", " w"], ["s", ItemID.manasteel, 0, "w", ItemID.livingwoodStick, 0]);
    Recipes.addShaped({id: ItemID.manasteel_shovel, count: 1, data: 0}, ["s", "w", "w"], ["s", ItemID.manasteel, 0, "w", ItemID.livingwoodStick, 0]);
});
IDRegistry.genItemID("manasteel_helmet");
IDRegistry.genItemID("manasteel_chestplate");
IDRegistry.genItemID("manasteel_leggings");
IDRegistry.genItemID("manasteel_boots");
Item.createArmorItem("manasteel_helmet", "Manasteel helmet", {name: "manasteel_helmet"}, {type: "helmet", armor: 2, durability: 200, texture: "armor/manasteel_1.png"});
Item.createArmorItem("manasteel_chestplate", "Manasteel chestplate", {name: "manasteel_chestplate"}, {type: "chestplate", armor: 6, durability: 275, texture: "armor/manasteel_1.png"});
Item.createArmorItem("manasteel_leggings", "Manasteel leggings", {name: "manasteel_leggings"}, {type: "leggings", armor: 5, durability: 260, texture: "armor/manasteel_2.png"});
Item.createArmorItem("manasteel_boots", "Manasteel boots", {name: "manasteel_boots"}, {type: "boots", armor: 2, durability: 230, texture: "armor/manasteel_1.png"});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.manasteel_helmet, count: 1, data: 0}, ["sss", "s s"], ["s", ItemID.manasteel, 0]);
    Recipes.addShaped({id: ItemID.manasteel_chestplate, count: 1, data: 0}, ["s s", "sss", "sss"], ["s", ItemID.manasteel, 0]);
    Recipes.addShaped({id: ItemID.manasteel_leggings, count: 1, data: 0}, ["sss", "s s", "s s"], ["s", ItemID.manasteel, 0]);
    Recipes.addShaped({id: ItemID.manasteel_boots, count: 1, data: 0}, ["s s", "s s"], ["s", ItemID.manasteel, 0]);
});

