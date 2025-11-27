/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 6
*/



// file: items.js

IDRegistry.genItemID("DS");
IDRegistry.genItemID("SDSW");
IDRegistry.genItemID("SDHoe");
IDRegistry.genItemID("SDSH");
IDRegistry.genItemID("SDAX");
IDRegistry.genItemID("SDPI");



Item.createItem("DS", "§l§1Чистый Алмаз",{name: "DiamondSuper", meta:0},{isTech: false, stack:64});

Item.createItem("SDSW", "Меч из Чистого Алмаза", {name: "SDSworld", meta: 0}, {isTech: false, stack: 1});

Item.createItem("SDHoe", "Мотыга из Чистого Алмаза", {name: "SDHoe", meta: 0}, {isTech: false, stack: 1});

Item.createItem("SDSH", "Лопата из Чистого Алмаза", {name: "SDShovel", meta: 0}, {isTech: false, stack: 1});

Item.createItem("SDPI", "Кирка из Чистого Алмаза", {name: "SDPickaxe", metal: 0}, {isTech: false, stack: 1});

Item.createItem("SDAX", "Топор из Чистого алмаза", {name: "SDAxel", meta: 0}, {isTech: false, stack: 1});




// file: blocks.js

IDRegistry.genBlockID("DSBL");

Block.createBlock("DSBL", [{name: "Блок Чистого Алмаза", texture: [["SDBlockBottom", 0],["SDblockTop", 0],["SDBlock", 0]],  inCreative: true}]);

//api  блёковь
ToolAPI.registerBlockMaterial(BlockID.DSBL, "stone");




// file: armor.js

IDRegistry.genItemID("SDB");
IDRegistry.genItemID("SDC");
IDRegistry.genItemID("SDL");
IDRegistry.genItemID("SDH");

Item.createArmorItem("SDH", "Шлем из Чистого Алмаза", {name:"SDH"}, {type: "helmet", armor: 6, durability: 726, texture:"armor/iron_1.png"});

Item.createArmorItem("SDC", "Нагрудник из Чистого Алмаза", {name:"SDC"}, {type: "chestplate", armor: 16, durability: 1056, texture:"armor/iron_1.png"});

Item.createArmorItem("SDL", "Штаны из Чистого Алмаза", {name:"SDL"}, {type: "leggings", armor:12, durability: 990, texture:"armor/iron_2.png"});

Item.createArmorItem("SDB", "Ботинки из Чистого Алмаза", {name:"SDB"}, {type: "boots", armor:6, durability: 858, texture:"armor/iron_1.png"});

//uid - строковый id предмета 
//name - название предмета 
//texture_name - текстура предмета 
//armor_type - строковой тип брони 
//armor_points - количество единиц защиты 
//damage - прочность брони 
//texture_armor - путь в текстурпаке до текстуры брони на игроке
/*Даниил Збараг, сегодня в 15:09
boots

Даниил Збараг, сегодня в 15:09
leggins

Даниил Збараг, сегодня в 15:08
chestplate

Даниил Збараг, сегодня в 15:08
helmet*/




// file: crafts.js

Recipes.addShaped({id:ItemID.SDB, count:1, data:0}, ['oao', 'oao'], ['o', ItemID.DS, 0]);

Recipes.addShaped({id:ItemID.SDH, count:1, data:0}, ['ooo', 'oao'], ['o', ItemID.DS, 0]);

Recipes.addShaped({id:ItemID.SDC, count:1, data:0}, ['oao', 'ooo', 'ooo'], ['o', ItemID.DS, 0]);

Recipes.addShaped({id:ItemID.SDL, count:1, data:0}, ['ooo', 'oao', 'oao'], ['o', ItemID.DS, 0]);

Recipes.addShaped({id:ItemID.SDSW, count:1, data:0}, ['o', 'o', 'l'],['o', ItemID.DS, 0, 'l', 280, 0]);

Recipes.addShaped({id:ItemID.SDHoe, count:1, data:0}, ['oo', 'la', 'la'],['o', ItemID.DS, 0, 'l', 280, 0]);

Recipes.addShaped({id:ItemID.SDSH, count:1, data:0}, ['o', 'l', 'l'],['o', ItemID.DS, 0, 'l', 280, 0]);

Recipes.addShaped({id:ItemID.SDPI, count:1, data:0}, ['ooo', 'ala', 'ala'],['o', ItemID.DS, 0, 'l', 280, 0]);

Recipes.addShaped({id:ItemID.SDAX, count:1, data:0}, ['ooa', 'ola', 'ala'],['o', ItemID.DS, 0, 'l', 280, 0]);

Recipes.addShaped({id:ItemID.DS, count:9, data:0}, ['o'],['o', BlockID.DSBL, 0]);

Recipes.addShaped({id: BlockID.DSBL, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.DS, 0]);




// file: pechRecepty.js

//кпафты печки
Recipes.addFurnace(173, ItemID.DS, 0);




// file: toolapi.js

importLib("ToolType", "*");

ToolAPI.addToolMaterial("sworld", {durability: 3125, damage: 14});

ToolAPI.addToolMaterial("Hoe", {durability:3124});

ToolAPI.addToolMaterial("shovel", {durability:3124, efficiency: 8, damage: 8});

ToolAPI.addToolMaterial("axel", {durability:3124, efficiency:8, damage:12});

ToolAPI.addToolMaterial("pickaxe",{durability:3124, efficiency:8, damage:10, level:5});

ToolAPI.setTool(ItemID.SDSW, "sworld", ToolType.sword);

ToolAPI.setTool(ItemID.SDHoe, "Hoe", ToolType.hoe);

ToolAPI.setTool(ItemID.SDSH, "shovel", ToolType.shovel);

ToolAPI.setTool(ItemID.SDAX, "axel", ToolType.axe);

ToolAPI.setTool(ItemID.SDPI, "pickaxe", ToolType.pickaxe);




