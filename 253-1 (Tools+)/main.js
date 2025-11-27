/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 4
*/



// file: items.js

IDRegistry.genItemID("psword");
IDRegistry.genItemID("ppickaxe");
IDRegistry.genItemID("paxe");
IDRegistry.genItemID("pshovel");



Item.createItem("psword", "Sword+", {name: "Sword+", meta: 0}, {isTech: false, stack: 1});

Item.createItem("ppickaxe", "Pickaxe+", {name: "Pickaxe+", meta: 0}, {isTech: false, stack: 1});

Item.createItem("paxe", "Axe+", {name: "Axe+", meta: 0}, {isTech: false, stack: 1});

Item.createItem("pshovel","Shovel+", {name: "Shovel+", meta:0}, {isTech: false, stack:1});

//Отображение

Item.setToolRender(ItemID.psword, true);

Item.setToolRender(ItemID.ppickaxe, true);

Item.setToolRender(ItemID.paxe, true);

Item.setToolRender(ItemID.pshovel, true);




// file: armor.js

IDRegistry.genItemID("pChestplate");
IDRegistry.genItemID("pLeggins");
IDRegistry.genItemID("pBoots");
IDRegistry.genItemID("pHelmet");

Item.createArmorItem("pChestplate", "Chestplate+", {name: "Chestplate+"}, {type: "chestplate", armor: 30, durability: 500, texture:"armor/Armor+.png"});

Item.createArmorItem("pLeggins", "Leggings+", {name: "Leggings+"}, {type: "leggings", armor: 25, durability: 500, texture:"armor/Bootss+.png"});

Item.createArmorItem("pBoots", "Boots+", {name: "Boots+"}, {type: "boots", armor: 20, durability: 500, texture:"armor/Armor+.png"});

Item.createArmorItem("pHelmet", "Helmet+", {name: "Helmet+"}, {type: "helmet", armor: 20, durability: 500, texture:"armor/Armor+.png"});




// file: crafts.js

Recipes.addShaped({id:ItemID.psword, count: 1, data: 0}, [ 'aba' ,  'bcb' , 'aba'], ['c', 276, 0, 'a', 152, 0, 'b', 264, 0]);

Recipes.addShaped({id:ItemID.ppickaxe, count: 1, data: 0}, [ 'aba' ,  'bcb' , 'aba'], ['c', 278, 0, 'a', 152, 0, 'b', 264, 0]);

Recipes.addShaped({id:ItemID.paxe, count: 1, data: 0}, [ 'aba' ,  'bcb' , 'aba'], ['c', 279, 0, 'a', 152, 0, 'b', 264, 0]);

Recipes.addShaped({id:ItemID.pshovel, count: 1, data: 0}, [ 'aba' ,  'bcb' , 'aba'], ['c', 277, 0, 'a', 152, 0, 'b', 264, 0]);

Recipes.addShaped({id:ItemID.pChestplate, count: 1, data: 0}, [ 'aba' ,  'bcb' , 'aba'], ['c', 311, 0, 'a', 152, 0, 'b', 264, 0]);

Recipes.addShaped({id:ItemID.pHelmet, count: 1, data: 0}, [ 'aba' ,  'bcb' , 'aba'], ['c', 310, 0, 'a', 152, 0, 'b', 264, 0]);

Recipes.addShaped({id:ItemID.pLeggins, count: 1, data: 0}, [ 'aba' ,  'bcb' , 'aba'], ['c', 312, 0, 'a', 152, 0, 'b', 264, 0]);

Recipes.addShaped({id:ItemID.pBoots, count: 1, data: 0}, [ 'aba' ,  'bcb' , 'aba'], ['c', 313, 0, 'a', 152, 0, 'b', 264, 0]);




// file: toolapi.js

importLib("ToolType", "*");
//Материал
ToolAPI.addToolMaterial("sword", {durability: 5000, damage: 30});

ToolAPI.addToolMaterial("pickaxe", {durability:5000, efficiency:50, damage:15, level:5});

ToolAPI.addToolMaterial("axe", {durability:5000, efficiency:50, damage:20, level:5});

ToolAPI.addToolMaterial("shovel", {durability:5000, efficiency:50, damage:15, level:5});

//Тип
ToolAPI.setTool(ItemID.psword, "sword", ToolType.sword);

ToolAPI.setTool(ItemID.ppickaxe, "pickaxe", ToolType.pickaxe);

ToolAPI.setTool(ItemID.paxe, "axe", ToolType.axe);

ToolAPI.setTool(ItemID.pshovel, "shovel", ToolType.shovel);




