/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: main.js

//Перевод

Translation.addTranslation("Hat Adidas", {ru: "Шапка Adidas"});

		
	
		
		
// ID предметов

IDRegistry.genItemID("bigwoodenshovel");
IDRegistry.genItemID("dubinka1");
IDRegistry.genItemID("dubinka2");
IDRegistry.genItemID("bita");
IDRegistry.genItemID("bita1");
IDRegistry.genItemID("bottle");
IDRegistry.genItemID("bottle2");
IDRegistry.genItemID("bottle3");
IDRegistry.genItemID("bottle4");
IDRegistry.genItemID("bottle5");
IDRegistry.genItemID("bottle6");
IDRegistry.genItemID("bottle7");
IDRegistry.genItemID("siga");
IDRegistry.genItemID("siga1");
IDRegistry.genItemID("finka");
IDRegistry.genItemID("pero");
IDRegistry.genItemID("ahelmet");//создаем новый ID для шлема
IDRegistry.genItemID("achestplate");//создаем новый ID для нагрудника
IDRegistry.genItemID("aleggings");//создаем новый ID для понож
IDRegistry.genItemID("aboots");//создаем новый ID для ботинок
IDRegistry.genItemID("nhelmet");//создаем новый ID для шлема
IDRegistry.genItemID("nchestplate");//создаем новый ID для нагрудника
IDRegistry.genItemID("nleggings");//создаем новый ID для понож
IDRegistry.genItemID("nboots");//создаем новый ID для ботинок
IDRegistry.genItemID("gboots");//создаем новый ID для ботинок
IDRegistry.genItemID("vdhelmet");//создаем новый ID для шлема
IDRegistry.genItemID("vdchestplate");//создаем новый ID для нагрудника


// Броня

Item.createArmorItem("ahelmet", "Hat Adidas", {name: "a_helmet"}, {type: "helmet", armor: 2, durability: 500, texture: "armor/adidas_0.png"});//применяем наш ID helmet, добавляем имя Helmet, задаем текстуру предмета и объект описания.
Item.createArmorItem("achestplate", "Coat Adidas", {name: "a_chestplate"}, {type: "chestplate", armor: 5, durability: 500, texture: "armor/adidas_0.png"});//применяем наш ID chestplate, добавляем имя ChestPlate, задаем текстуру предмета и объект описания.
Item.createArmorItem("aleggings", "Pants Adidas", {name: "a_leggings"}, {type: "leggings", armor: 3, durability: 500, texture: "armor/adidas_1.png"});//применяем наш ID leggins, добавляем имя Leggins, задаем текстуру предмета и объект описания.
Item.createArmorItem("aboots", "Sneakers Adidas", {name: "a_boots"}, {type: "boots", armor: 2, durability: 500, texture: "armor/adidas_0.png"});//применяем наш ID boots, добавляем имя Boots, задаем текстуру предмета и объект описания.
Item.createArmorItem("nhelmet", "Hat Nike", {name: "n_helmet"}, {type: "helmet", armor: 2, durability: 500, texture: "armor/nike_0.png"});//применяем наш ID helmet, добавляем имя Helmet, задаем текстуру предмета и объект описания.
Item.createArmorItem("nchestplate", "Coat Nike", {name: "n_chestplate"}, {type: "chestplate", armor: 5, durability: 500, texture: "armor/nike_0.png"});//применяем наш ID chestplate, добавляем имя ChestPlate, задаем текстуру предмета и объект описания.
Item.createArmorItem("nleggings", "Pants Nike", {name: "n_leggings"}, {type: "leggings", armor: 3, durability: 500, texture: "armor/nike_1.png"});//применяем наш ID leggins, добавляем имя Leggins, задаем текстуру предмета и объект описания.
Item.createArmorItem("nboots", "Sneakers Nike", {name: "n_boots"}, {type: "boots", armor: 2, durability: 500, texture: "armor/nike_0.png"});//применяем наш ID boots, добавляем имя Boots, задаем текстуру предмета и объект описания.
Item.createArmorItem("gboots", "Sneakers Gasel", {name: "g_boots"}, {type: "boots", armor: 3, durability: 500, texture: "armor/adidas_0.png"});//применяем наш ID boots, добавляем имя Boots, задаем текстуру предмета и объект описания.
Item.createArmorItem("vdhelmet", "Hat VDV", {name: "vd_helmet"}, {type: "helmet", armor: 2, durability: 5000, texture: "armor/vdv_0.png"});//применяем наш ID helmet, добавляем имя Helmet, задаем текстуру предмета и объект описания.
Item.createArmorItem("vdchestplate", "Coat VDV", {name: "vd_chestplate"}, {type: "chestplate", armor: 5, durability: 5000, texture: "armor/vdv_0.png"});//применяем наш ID chestplate, добавляем имя ChestPlate, задаем текстуру предмета и объект описания.

//Эффекты брони

Callback.addCallback("tick", function(){		if (World.getThreadTime() % 20 == 0){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (boots.id == ItemID.gboots){
    Entity.addEffect(Player.get(), 1, 0, 1810)
} 
} 
});

// Предметы
Item.createItem("dubinka1","Dubinka", {name: "dubinka1", meta:0},{stack:1});
Item.createItem("dubinka2","Heavy Dubinka", {name: "dubinka2", meta:0},{stack:1});
Item.createItem("bita","Bita", {name: "bita", meta:0},{stack:1});
Item.createItem("bita1","Bita with Ships", {name: "bita1", meta:0},{stack:1});
Item.createItem("bottle","Bottle", {name: "bottle1", meta:0},{stack:1});
Item.createItem("bottle2","Bottle from Vodka", {name: "bottle2", meta:0},{stack:1});

Item.createThrowableItem("bottle3", "Molotov", { name: "bottle3", meta: 0}, {})


Item.createItem("bottle4","Bottle rose", {name: "bottle4", meta:0},{stack:1});
Item.createFoodItem("bottle5", "Bottle of Kvas", {name: "bottle5", meta: 0}, {food: 16});
Item.createFoodItem("bottle6", "Bottle of Vodka", {name: "bottle6", meta: 1}, {food: 1});
Item.createItem("bottle7", "Bottle from Kvas (empty)", {name: "bottle7", meta: 0});
Item.createItem("siga","Siga", {name: "siga", meta:0},{stack:1});
Item.createItem("siga1","Siga lite", {name: "siga", meta:1},{stack:1});
Item.createThrowableItem("finka","Finka", {name: "finka", meta:0},{stack:1});
Item.registerThrowableFunction("finka", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 3);
if(Math.random() < .2){
World.drop(coords.x, coords.y, coords.z, ItemID.finka, 1);
}
}
});

Item.createItem("bigwoodenshovel","Big wooden shovel", {name: "ws", meta:0},{stack:1});
Item.createItem("pero","Pero", {name: "pero", meta:0},{stack:1});
    
    
    //Функции еды
    
Callback.addCallback("FoodFunction",function(heal, satRatio)
   {
    var helmet = Player.getArmorSlot(0);
    var chestplate = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var position = Player.getPosition();

if(Player.getCarriedItem().id==ItemID.bottle6)
{
Player.addItemToInventory (ItemID.bottle2, 1, 0);
}
if(Player.getCarriedItem().id==ItemID.bottle5)
{
Player.addItemToInventory (ItemID.bottle7, 1, 0);
}
});
    
        //Молотов
Item.registerThrowableFunction("bottle3", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 1);
var soul = parseInt(Math.random() * 2);
World.explode(coords.x, coords.y, coords.z, 1, soul);
}
});




// Блоки


IDRegistry.genBlockID("testW"); // регистрациа id
Block.createBlockWithRotation("testW", [
     {name: "test W", texture: [["w5", 0], ["w10", 0], ["w8", 0], ["w1", 0], ["w5", 0], ["w9", 0]], inCreative: true}]); 
     
IDRegistry.genBlockID("beton"); // регистрациа id
Block.createBlockWithRotation("beton", [
     {name: "test W", texture: [["w5", 0], ["w5", 0], ["w5", 0], ["w5", 0], ["w5", 0], ["w5", 0]], inCreative: true}]); 
     
IDRegistry.genBlockID("testW2"); // регистрациа id
Block.createBlockWithRotation("testW2", [
     {name: "test W", texture: [["w5", 0], ["w11", 0], ["w12", 0], ["w2", 0], ["w9", 0], ["w5", 0]], inCreative: true}]); 
     
IDRegistry.genBlockID("testW3"); // регистрациа id
Block.createBlockWithRotation("testW3", [
     {name: "test W", texture: [["w10", 0], ["w5", 0], ["w13", 0], ["w4", 0], ["w5", 0], ["w9", 0]], inCreative: true}]); 
     
IDRegistry.genBlockID("testW4"); // регистрациа id
Block.createBlockWithRotation("testW4", [
     {name: "test W", texture: [["w11", 0], ["w5", 0], ["w14", 0], ["w3", 0], ["w9", 0], ["w5", 0]], inCreative: true}]); 
     



// Рецепты
Recipes.addFurnace(352, 263, 0); // переплавка кости в уголь
Recipes.addFurnace(336, 405, 0); // переплавка кирпича в кирпич нижнего мира
Recipes.addFurnace(378, 385, 0); // переплавка сгустка магмы в огненный шар
Recipes.addFurnace(371, 348, 0); // переплавка золотого самородка в светопыль
Recipes.addFurnace(24, 121, 0); // переплавка песчанника в камень края

Recipes.addShaped({id: ItemID.ahelmet, count: 1, data: 0}, [ 
"xxx", 
"x*x", 
"" 
], ['x', 35, 15]);

Recipes.addShaped({id: ItemID.achestplate, count: 1, data: 0}, [ 
"x*x", 
"xxx", 
"xxx" 
], ['x', 35, 15]);

Recipes.addShaped({id: ItemID.aleggings, count: 1, data: 0}, [ 
"xxx", 
"x*x", 
"x*x" 
], ['x', 35, 15]);

Recipes.addShaped({id: ItemID.aboots, count: 1, data: 0}, [ 
"", 
"x*x", 
"x*x" 
], ['x', 35, 15]);

Recipes.addShaped({id: ItemID.nhelmet, count: 1, data: 0}, [ 
"xxx", 
"x*x", 
"" 
], ['x', 35, 11]);

Recipes.addShaped({id: ItemID.nchestplate, count: 1, data: 0}, [ 
"x*x", 
"xxx", 
"xxx" 
], ['x', 35, 11]);

Recipes.addShaped({id: ItemID.nleggings, count: 1, data: 0}, [ 
"xxx", 
"x*x", 
"x*x" 
], ['x', 35, 11]);

Recipes.addShaped({id: ItemID.nboots, count: 1, data: 0}, [ 
"", 
"x*x", 
"x*x" 
], ['x', 35, 11]);

Recipes.addShaped({id: ItemID.bita, count: 1, data: 0}, [ 
"*x*", 
"*x*", 
"*a*" 
], ['x', 17, 0, 'a', 280, 0]);

Recipes.addShaped({id: ItemID.bigwoodenshovel, count: 1, data: 0}, [ 
"*x*", 
"*a*", 
"*a*" 
], ['x', 17, 0, 'a', 280, 0]);

Recipes.addShaped({id: ItemID.bottle4, count: 1, data: 0}, [ 
"", 
"*x*", 
"" 
], ['x', ItemID.bottle, 0]);

 Recipes.addShaped({id: ItemID.gboots, count: 1, data: 0}, [ 
"", 
"xax", 
"x*x" 
], ['x', 334, 0, 'a', 351, 0]);

Recipes.addShaped({id: ItemID.vdhelmet, count: 1, data: 0}, [ 
"xxx", 
"xax", 
"" 
], ['x', 35, 9, 'a', 371, 0]);

Recipes.addShaped({id: ItemID.vdchestplate, count: 1, data: 0}, [ 
"x*a", 
"xxx", 
"aaa" 
], ['x', 35, 0, 'a', 35, 9]);
 
 Recipes.addShaped({id: ItemID.bigwoodenshovel, count: 1, data: 0}, [ 
"*x*", 
"*a*", 
"*a*" 
], ['x', 17, 0, 'a', 280, 0]);

Recipes.addShaped({id: ItemID.pero, count: 1, data: 0}, [ 
"*x*", 
"*x*", 
"*a*" 
], ['x', 265, 0, 'a', 339, 0]);

Recipes.addShaped({id: ItemID.finka, count: 1, data: 0}, [ 
"*x*", 
"xxx", 
"bab" 
], ['x', 265, 0, 'a', 280, 0, 'b', 351, 8]);



// Инструменты
IMPORT("ToolType");

ToolAPI.addToolMaterial("police", {durability: 2500,//Долговечность(Сколько блоков можно сломать)
level: 5,//Уровень инструмента, влияет на блоки которые инструмент может ломать. 
efficiency: 50,//Эффективность, чем больше эффективность, тем быстрее ломается нужный блок
damage: 3,//Урон наносимый инструментами данного материала
enchantability: 14
});
ToolAPI.setTool(ItemID["dubinka1"], "police", ToolType.sword);

ToolAPI.addToolMaterial("rpolice", {durability: 2500,//Долговечность(Сколько блоков можно сломать)
level: 5,//Уровень инструмента, влияет на блоки которые инструмент может ломать. 
efficiency: 50,//Эффективность, чем больше эффективность, тем быстрее ломается нужный блок
damage: 3,//Урон наносимый инструментами данного материала
enchantability: 14
});
ToolAPI.setTool(ItemID["dubinka2"], "rpolice", ToolType.sword);

ToolAPI.addToolMaterial("awood", {durability: 250,//Долговечность(Сколько блоков можно сломать)
level: 5,//Уровень инструмента, влияет на блоки которые инструмент может ломать. 
efficiency: 50,//Эффективность, чем больше эффективность, тем быстрее ломается нужный блок
damage: 3,//Урон наносимый инструментами данного материала
enchantability: 14
});
ToolAPI.setTool(ItemID["bita"], "awood", ToolType.sword);
ToolAPI.setTool(ItemID["bigwoodenshovel"], "awood", ToolType.shovel);

ToolAPI.addToolMaterial("finka", {durability: 2500,//Долговечность(Сколько блоков можно сломать)
level: 5,//Уровень инструмента, влияет на блоки которые инструмент может ломать. 
efficiency: 50,//Эффективность, чем больше эффективность, тем быстрее ломается нужный блок
damage: 7,//Урон наносимый инструментами данного материала
enchantability: 14
});
ToolAPI.setTool(ItemID["finka"], "finka", ToolType.sword);

ToolAPI.addToolMaterial("awood2", {durability: 250,//Долговечность(Сколько блоков можно сломать)
level: 5,//Уровень инструмента, влияет на блоки которые инструмент может ломать. 
efficiency: 50,//Эффективность, чем больше эффективность, тем быстрее ломается нужный блок
damage: 5,//Урон наносимый инструментами данного материала
enchantability: 14
});
ToolAPI.setTool(ItemID["bita1"], "awood2", ToolType.sword);

ToolAPI.addToolMaterial("br", {durability: 50,//Долговечность(Сколько блоков можно сломать)
level: 5,//Уровень инструмента, влияет на блоки которые инструмент может ломать. 
efficiency: 50,//Эффективность, чем больше эффективность, тем быстрее ломается нужный блок
damage: 5,//Урон наносимый инструментами данного материала
enchantability: 14
});
ToolAPI.setTool(ItemID["bottle4"], "br", ToolType.sword);

ToolAPI.addToolMaterial("pero", {durability: 1500,//Долговечность(Сколько блоков можно сломать)
level: 5,//Уровень инструмента, влияет на блоки которые инструмент может ломать. 
efficiency: 50,//Эффективность, чем больше эффективность, тем быстрее ломается нужный блок
damage: 4,//Урон наносимый инструментами данного материала
enchantability: 14
});
ToolAPI.setTool(ItemID["pero"], "pero", ToolType.sword);