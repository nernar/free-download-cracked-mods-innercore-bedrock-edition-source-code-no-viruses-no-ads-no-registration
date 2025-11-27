IDRegistry.genItemID("helmet");
IDRegistry.genItemID("chest");
IDRegistry.genItemID("legs");
IDRegistry.genItemID("boots");

Item.createArmorItem("helmet", "Железный шлем (1 уровень)", {name: "helmet"}, {type: "helmet", armor: 2, durability: 405, texture: "armor/Halou_1.png"});
Item.createArmorItem("chest", "Железная кираса (1 уровень)", {name: "chest"}, {type: "chestplate", armor: 7, durability: 575, texture: "armor/Halou_1.png"});
Item.createArmorItem("legs", "Железные поножи (1 уровень)", {name: "legs"}, {type: "leggings", armor: 5, durability: 550, texture: "armor/Halou_2.png"});
Item.createArmorItem("boots", "Железные ботинки (1 уровень)", {name: "boots"}, {type: "boots", armor: 2, durability: 480, texture: "armor/Halou_1.png"});

Callback.addCallback("PostLoaded", function(){ Recipes.addShaped({id: ItemID.helmet, count: 1, data: 0}, [
     "ooo",
     "o o",
     "   "
     ], ['o', ItemID.plate, 0]);});
Callback.addCallback("PostLoaded", function(){ Recipes.addShaped({id: ItemID.chest, count: 1, data: 0}, [
     "o o",
     "ooo",
     "ooo"
     ], ['o', ItemID.plate, 0]);});
Callback.addCallback("PostLoaded", function(){ Recipes.addShaped({id: ItemID.legs, count: 1, data: 0}, [
     "ooo",
     "o o",
     "o o"
     ], ['o', ItemID.plate, 0]);});
Callback.addCallback("PostLoaded", function(){ Recipes.addShaped({id: ItemID.boots, count: 1, data: 0}, [
     "   ",
     "o o",
     "o o"
     ], ['o', ItemID.plate, 0]);});



IDRegistry.genItemID("helmet1");
IDRegistry.genItemID("chest1");
IDRegistry.genItemID("legs1");
IDRegistry.genItemID("boots1");

Item.createArmorItem("helmet1", "Железный шлем (2 уровень)", {name: "helmet1"}, {type: "helmet", armor: 3, durability: 405, texture: "armor/Halou_3.png"});
Item.createArmorItem("chest1", "Железная кираса (2 уровень)", {name: "chest1"}, {type: "chestplate", armor: 8, durability: 575, texture: "armor/Halou_3.png"});
Item.createArmorItem("legs1", "Железные поножи (2 уровень)", {name: "legs1"}, {type: "leggings", armor: 6, durability: 550, texture: "armor/Halou_4.png"});
Item.createArmorItem("boots1", "Железные ботинки (2 уровень)", {name: "boots1"}, {type: "boots", armor: 3, durability: 480, texture: "armor/Halou_3.png"});

Callback.addCallback("PostLoaded", function(){ Recipes.addShaped({id: ItemID.helmet1, count: 1, data: 0}, [
     "ooo",
     "o o",
     "   "
     ], ['o', ItemID.plate1, 0]);});
Callback.addCallback("PostLoaded", function(){ Recipes.addShaped({id: ItemID.chest1, count: 1, data: 0}, [
     "o o",
     "ooo",
     "ooo"
     ], ['o', ItemID.plate1, 0]);});
Callback.addCallback("PostLoaded", function(){ Recipes.addShaped({id: ItemID.legs1, count: 1, data: 0}, [
     "ooo",
     "o o",
     "o o"
     ], ['o', ItemID.plate1, 0]);});
Callback.addCallback("PostLoaded", function(){ Recipes.addShaped({id: ItemID.boots1, count: 1, data: 0}, [
     "   ",
     "o o",
     "o o"
     ], ['o', ItemID.plate1, 0]);});


IDRegistry.genItemID("plate");
Item.createItem("plate", "Пластина", {name: "plate", meta: 0}, {});

Callback.addCallback("PostLoaded", function(){ Recipes.addShaped({id: ItemID.plate, count: 1, data: 0}, [

     "ooo",

     " o",

     "o o"

     ], ['o', 265, 0]);});

IDRegistry.genItemID("plate1");
Item.createItem("plate1", "Усиленная пластина", {name: "plate1", meta: 0}, {});

Callback.addCallback("PostLoaded", function(){ Recipes.addShaped({id: ItemID.plate1, count: 1, data: 0}, [

     "oo ",

     "   ",

     "   "

     ], ['o', ItemID.plate, 0]);});