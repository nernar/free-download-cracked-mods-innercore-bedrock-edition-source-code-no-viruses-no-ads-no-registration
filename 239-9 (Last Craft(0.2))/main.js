IDRegistry.genItemID("uran"); Item.createItem("uran", "Уран", {name: "uran", meta: 0}, {});
IDRegistry.genItemID("Med"); Item.createItem("Med", "Медный слиток", {name: "ingot_med", meta: 0}, {});
IDRegistry.genItemID("Tin"); Item.createItem("Tin", "Оловянный слиток", {name: "ingot_tin", meta: 0}, {});
IDRegistry.genItemID("bronza"); Item.createItem("bronza", "Бронзовый слиток", {name: "bronza", meta: 0}, {});
IDRegistry.genItemID("stal"); Item.createItem("stal", "Сталь", {name: "stal", meta: 0}, {});
IDRegistry.genItemID("Fleshka"); Item.createItem("Fleshka", "Карта памяти на 32 GB", {name: "sdcard", meta: 0}, {});
IDRegistry.genItemID("Empty_banka"); Item.createItem("Empty_banka", "Пустая банка", {name: "empty_banka", meta: 0}, {});
IDRegistry.genItemID("Gribnoy_sup"); Item.createFoodItem("Gribnoy_sup", "Банка с грибным супом", {name: "gribnoy_sup", meta: 0}, {food: 4});
IDRegistry.genItemID("Wrench"); Item.createItem("Wrench", "Гаечный ключ", {name: "wrench", meta: 0}, {});
IDRegistry.genItemID("Molot"); Item.createItem("Molot", "Молот", {name: "crafting_molot", meta: 0}, {});
IDRegistry.genItemID("Kysachki"); Item.createItem("Kysachki", "Кусачки", {name: "crafting_kysachki", meta: 0}, {});
       //РУДЫ
IDRegistry.genBlockID("rydastali");
Block.createBlock("rydastali", [{name: "Руда стали", texture: [["рудастали", 0], ["рудастали", 0], ["рудастали", 0], ["рудастали", 0], ["рудастали", 0], ["рудастали", 0]], inCreative: true}]);
IDRegistry.genBlockID("uranruda");
Block.createBlock("uranruda", [{name: "Урановая руда", texture: [["урановая_руда", 0], ["урановая_руда", 0], ["урановая_руда", 0], ["урановая_руда", 0], ["урановая_руда", 0], ["урановая_руда", 0]], inCreative: true}]);
//генерация
//ИНСТРУМЕНТЫ
IMPORT ("ToolType");
IDRegistry.genItemID("bronze_kirka");
Item.createItem("bronze_kirka", "Бронзовая кирка", {name: "bronze_kirka", meta: 0}, {});
ToolAPI.addToolMaterial("bronze_kirka", {durability: 300, level: 1, efficiency: 4, damage: 1, enchantability: 14});
ToolAPI.setTool(ItemID.bronze_kirka, "bronze_kirka", ToolType.pickaxe);
IDRegistry.genItemID("bronze_sword");
Item.createItem("bronze_sword", "Бронзовый меч", {name: "bronze_sword", meta: 0}, {});
ToolAPI.addToolMaterial("bronze_sword", {durability: 300, level: 1, efficiency: 4, damage: 4, enchantability: 14});
ToolAPI.setTool(ItemID.bronze_sword, "bronze_sword", ToolType.sword);
IDRegistry.genItemID("fireman_topor");
Item.createItem("fireman_topor", "Пожарный топор", {name: "fireman_topor", meta: 0}, {});
ToolAPI.addToolMaterial("fireman_topor", {durability: 300, level: 1, efficiency: 4, damage: 1, enchantability: 10});
ToolAPI.setTool(ItemID.fireman_topor, "fireman_topor", ToolType.axe);
//БЛОКИ

//КРАФТЫ НА ВЕРСТАКЕ
Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: ItemID.Molot, count: 1, data: 0},[
        "aaa",
        "bba",
        "aaa",
    ], ['a',265, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.Wrench, count: 1, data: 0}, [
        "a a",
        " a ",
        " a ",
    ], ['a',265, 0]);
Recipes.addShaped({id: ItemID.Kysachki, count: 1, data: 0},[
        "a a",
        " a ",
        "b b",
    ], ['a',265, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.bronze_sword, count: 1, data: 0},[
        " a ",
        " a ",
        " b ",
    ], ['a',ItemID.bronza, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.bronze_kirka, count: 1, data: 0},[
        "aaa",
        " b ",
        " b ",
    ], ['a',ItemID.bronza, 0, 'b', 280, 0]);
//БРОНЯ
IDRegistry.genItemID("stalHelmet");
IDRegistry.genItemID("stalChestplate");
IDRegistry.genItemID("stalLeggings");
IDRegistry.genItemID("stalBoots");
Item.createArmorItem("stalHelmet", "Стальной шлем", {name: "stal1"}, {type: "helmet", armor: 2, durability: 149, texture: "armor/steel1_0.png"});
Item.createArmorItem("stalChestplate", "Стальной нагрудник", {name: "stal2"}, {type: "chestplate", armor: 5, durability: 216, texture: "armor/steel1_0.png"});
Item.createArmorItem("stalLeggings", "Стальные паножи", {name: "stal3"}, {type: "leggings", armor: 4, durability: 203, texture: "armor/steel2_0.png"});
Item.createArmorItem("stalBoots", "Стальные ботинки", {name: "stal4"}, {type: "boots", armor: 3, durability: 176, texture: "armor/steel1_0.png"});
//ванильные предметы
Recipes.addFurnaceFuel(427, 0, 100);
Recipes.addFurnaceFuel(359, 0, 50);
Recipes.addFurnaceFuel(444, 0, 200);
Recipes.addFurnaceFuel(428, 0, 100);
Recipes.addFurnaceFuel(429, 0, 100);
Recipes.addFurnaceFuel(430, 0, 100);
Recipes.addFurnaceFuel(431, 0, 100);
Recipes.addFurnaceFuel(324, 0, 100);
Recipes.addFurnaceFuel(323, 0, 100);
Recipes.addFurnaceFuel(72, 0, 50);
Recipes.addFurnaceFuel(131, 0, 50);
Recipes.addFurnaceFuel(143, 0, 50);
Recipes.addFurnaceFuel(170, 0, 200);
Recipes.addFurnaceFuel(146, 0, 200);
Recipes.addFurnaceFuel(96, 0, 200);
Recipes.addFurnaceFuel(395, 0, 100);
Recipes.addFurnaceFuel(395, 2, 100);
Recipes.addFurnaceFuel(339, 0, 100);
Recipes.addFurnaceFuel(340, 0, 150);
Recipes.addFurnaceFuel(346, 0, 100);
Recipes.addFurnaceFuel(287, 0, 50);
Recipes.addFurnaceFuel(288, 0, 50);
Recipes.addFurnaceFuel(420, 0, 100);
Recipes.addFurnaceFuel(421, 0, 50);
Recipes.addFurnaceFuel(296, 0, 100);
Recipes.addFurnaceFuel(389, 0, 100);
Recipes.addFurnaceFuel(358, 0, 100);
Recipes.addFurnaceFuel(358, 3, 100);
Recipes.addFurnaceFuel(358, 4, 100);
Recipes.addFurnaceFuel(338, 0, 100);
Recipes.addFurnaceFuel(321, 0, 100);
Recipes.addFurnaceFuel(47, 0, 200);
Recipes.addFurnaceFuel(18, 0, 100);
Recipes.addFurnaceFuel(106, 0, 100);
Recipes.addFurnaceFuel(18, 1, 100);
Recipes.addFurnaceFuel(18, 2, 100);
Recipes.addFurnaceFuel(18, 3, 100);
Recipes.addFurnaceFuel(161, 0, 100);
Recipes.addFurnaceFuel(161, 1, 100);
Recipes.addFurnaceFuel(111, 0, 50);
Recipes.addFurnaceFuel(35, 0, 150);
Recipes.addFurnaceFuel(35, 1, 150);
Recipes.addFurnaceFuel(35, 2, 150);
Recipes.addFurnaceFuel(35, 3, 150);
Recipes.addFurnaceFuel(35, 4, 150);
Recipes.addFurnaceFuel(35, 5, 150);
Recipes.addFurnaceFuel(35, 6, 150);
Recipes.addFurnaceFuel(35, 7, 150);
Recipes.addFurnaceFuel(37, 0, 50);
Recipes.addFurnaceFuel(38, 0, 50);
Recipes.addFurnaceFuel(38, 1, 50);
Recipes.addFurnaceFuel(38, 2, 50);
Recipes.addFurnaceFuel(38, 3, 50);
Recipes.addFurnaceFuel(38, 4, 50);
Recipes.addFurnaceFuel(38, 5, 50);
Recipes.addFurnaceFuel(38, 6, 50);
Recipes.addFurnaceFuel(38, 7, 50);
Recipes.addFurnaceFuel(38, 8, 50);
Recipes.addFurnaceFuel(175, 0, 50);
Recipes.addFurnaceFuel(175, 1, 50);
Recipes.addFurnaceFuel(175, 2, 50);
Recipes.addFurnaceFuel(175, 3, 50);
Recipes.addFurnaceFuel(175, 4, 50);
Recipes.addFurnaceFuel(175, 5, 50);
Recipes.addFurnaceFuel(35, 8, 150);
Recipes.addFurnaceFuel(35, 9, 150);
Recipes.addFurnaceFuel(35, 10, 150);
Recipes.addFurnaceFuel(35, 11, 150);
Recipes.addFurnaceFuel(35, 12, 150);
Recipes.addFurnaceFuel(35, 13, 150);
Recipes.addFurnaceFuel(35, 14, 150);
Recipes.addFurnaceFuel(65, 0, 100);
Recipes.addFurnaceFuel(346, 0, 100);
Recipes.addFurnaceFuel(35, 15, 100);
Recipes.addFurnaceFuel(171, 0, 50);
Recipes.addFurnaceFuel(171, 1, 50);
Recipes.addFurnaceFuel(171, 2, 50);
Recipes.addFurnaceFuel(171, 3, 50);
Recipes.addFurnaceFuel(171, 4, 50);
Recipes.addFurnaceFuel(171, 5, 50);
Recipes.addFurnaceFuel(171, 6, 50);
Recipes.addFurnaceFuel(171, 7, 50);
Recipes.addFurnaceFuel(171, 8, 50);
Recipes.addFurnaceFuel(171, 9, 50);
Recipes.addFurnaceFuel(171, 10, 50);
Recipes.addFurnaceFuel(171, 11, 50);
Recipes.addFurnaceFuel(171, 12, 50);
Recipes.addFurnaceFuel(171, 13, 50);
Recipes.addFurnaceFuel(171, 14, 50);
Recipes.addFurnaceFuel(171, 15, 50);
Recipes.addFurnaceFuel(32, 0, 50);
Recipes.addFurnaceFuel(31, 0, 50);
Recipes.addFurnaceFuel(31, 1, 50);
//новые премдеты
})
Recipes.addFurnaceFuel(ItemID.uran, 0, 500);