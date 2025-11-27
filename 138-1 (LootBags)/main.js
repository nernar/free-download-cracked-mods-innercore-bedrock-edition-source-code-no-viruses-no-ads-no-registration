/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 8
*/


var MobEffect = Native.PotionEffect;
Callback.addCallback("LevelLoaded", function(){
	player = Player.get();
});

// file: translation.js

Translation.addTranslation("Common bag", {ru: "Обычная сумка"});
Translation.addTranslation("Uncommon bag", {ru: "Необычная сумка"});
Translation.addTranslation("Rare bag", {ru: "Редкая сумка"});
Translation.addTranslation("Epic bag", {ru: "Эпичная сумка"});
Translation.addTranslation("Legendary bag", {ru: "Легендарная сумка"});

// file: bags.js

IDRegistry.genItemID("bag_common");
Item.createItem("bag_common", "Common bag", {name: "lootbag_common", meta: 0}, {stack: 1});

IDRegistry.genItemID("bag_uncommon");
Item.createItem("bag_uncommon", "Uncommon bag", {name: "lootbag_uncommon", meta: 0}, {stack: 1});
	Recipes.addShaped({id: ItemID.bag_uncommon, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.bag_common, 0]);

IDRegistry.genItemID("bag_rare");
Item.createItem("bag_rare", "Rare bag", {name: "lootbag_rare", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.bag_rare, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.bag_uncommon, 0]);

IDRegistry.genItemID("bag_epic");
Item.createItem("bag_epic", "Epic bag", {name: "lootbag_epic", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.bag_epic, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.bag_rare, 0]);

IDRegistry.genItemID("bag_legendary");
Item.createItem("bag_legendary", "Legendary bag", {name: "lootbag_legendary", meta: 0}, {stack: 1});

// file: common_loot.js

Item.registerUseFunction("bag_common", function(coords, item, block){
         var IR = Math.round(Math.random() * 9);
         if(IR == 0){
   Player.addItemToInventory (352, 2, 0);
   Game.message("2 кости, норм:)");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(IR == 1){
          
Player.addItemToInventory (357, 2, 0);
   Game.message("Уиии, печеньки ( ^^)");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
       if(IR == 2){
          
Player.addItemToInventory (333, 1, 0);
   Game.message("На лодку, а теперь плыви:)");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(IR == 3){
          
Player.addItemToInventory (262, 3, 0);
   Game.message("Немного стрел для атаки, генерал!");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
      if(IR == 4){
          
Player.addItemToInventory (322, 1, 0);
   Game.message("А тебе повезло, золотое яблоко!");
 item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
} 
     if(IR == 5){
          
Player.addItemToInventory (331, 3, 0);
           Player.addItemToInventory (404, 2, 0);
           Player.addItemToInventory (356, 1, 0);
   Game.message("Набор начинающего редстоунера");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 6){
          
Player.addItemToInventory (355, 1, 0);
   Game.message("Поспи немного");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 7){
          
Player.addItemToInventory (338, 3, 0);
   Game.message("Тебе пригодиться сахарный тростник");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 8){
          
Player.addItemToInventory (321, 1, 0);
   Game.message("Красивая картина не помешает стене");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 9){
          
Player.addItemToInventory (457, 3, 0);
   Game.message("Немного свёклы для перекуса");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
});

// file: drop.js

Callback.addCallback("EntityDeath", function(entity){
var E = Entity.getType(entity);
var coords = Entity.getPosition(entity);
var R = Math.round(Math.random() * 9);
 if(E == 34 || E == 32 || E == 47 || E == 38 || E == 33 || E == 35 || E == 40 || E == 44 ){
   if(R == 4){
      World.drop(coords.x, coords.y, coords.z, ItemID.bag_uncommon, 1, 0);
}
    if(R == 1 || R == 2 || R == 3){
            World.drop(coords.x, coords.y, coords.z, ItemID.bag_common, 1, 0);
}
}
});

Callback.addCallback("EntityDeath", function(entity){
var E = Entity.getType(entity);
var coords = Entity.getPosition(entity);
var Q = Math.round(Math.random() * 99);
 if(E == 34 || E == 32 || E == 47 || E == 38 || E == 33 || E == 35 || E == 40 || E == 44 ){
   if(Q == 50){
      World.drop(coords.x, coords.y, coords.z, ItemID.bag_legendary, 1, 0);
}
}
});

//file: uncommon_loot.js

Item.registerUseFunction("bag_uncommon", function(coords, item, block){
         var IG = Math.round(Math.random() * 19);
         var IR = Math.round(Math.random() * 9);
         if(IG == 1){
    Player.addItemToInventory (397, 1, 3);
   Game.message("Тебе для коллекции...");
}
         if(IR == 0){
   Player.addItemToInventory (287, 2, 0);
   Game.message("2 ниточки:)");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(IR == 1){
          
Player.addItemToInventory (396, 3, 0);
   Game.message("3 золотых морковки, перекуси немного)");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
       if(IR == 2){
          
Player.addItemToInventory (372, 5, 0);
   Game.message("Адский нарост;)");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(IR == 3){
          
Player.addItemToInventory (384, 8, 0);
   Game.message("Немного опыта не помешает колдуну:)");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
      if(IR == 4){
          
Player.addItemToInventory (322, 2, 0);
   Game.message("А тебе повезло, золотые яблоки!");
 item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
} 
     if(IR == 5){
          
Player.addItemToInventory (46, 3, 0);
   Game.message("Самое время взорвать здесь все");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 6){
          
Player.addItemToInventory (264, 2, 0);
   Game.message("Воу, 2 алмаза, да ты везунчик");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 7){
          
Player.addItemToInventory (368, 1, 0);
   Game.message("Жемчуг эндера");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 8){
          
Player.addItemToInventory (397, 1, 5);
   Game.message("Голова дракона, прикинь)");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 9){
          
Player.addItemToInventory (417, 1, 0);
   Game.message("Броня для твоего доблестного коня");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
});


// file: rare_loot.js

Item.registerUseFunction("bag_rare", function(coords, item, block){
         var IF = Math.round(Math.random() * 19);
         var IR = Math.round(Math.random() * 9);
         if(IF == 1){
 Player.addItemToInventory (397, 1, 4);
   Game.message("Кое-что для коллекции...");
}
         if(IR == 0){
Player.addItemToInventory(42, 4, 0);
Player.addItemToInventory(86, 1, 0);
   Game.message("+голем:)");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(IR == 1){
          
Player.addItemToInventory(370, 1, 0);
   Game.message("Слеза гаста. Ты знаешь, что делать...");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
       if(IR == 2){
          
Player.addItemToInventory(414, 1, 0);
   Game.message("Кроличья лапка. Помнишь, что из нее можно сделать?");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(IR == 3){
          
Player.addItemToInventory(420, 1, 0);
   Game.message("Гибкое лассо");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
      if(IR == 4){
          
Player.addItemToInventory(393, 1, 98);
   Game.message("Милый котик (^u^)!");
 item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
} 
     if(IR == 5){
          
Player.addItemToInventory(421, 1, 0);
   Game.message("Бирка:)");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 6){
          
Player.addItemToInventory(264, 5, 0);
   Game.message("Воу, 5 алмазов, да ты везунчик");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 7){
          
Player.addItemToInventory(341, 10, 0);
   Game.message("Немного соп... Кхм, слизи:)");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 8){
          
Player.addItemToInventory(384, 64, 0);
   Game.message("Опыт заказывали?))");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 9){
          
Player.addItemToInventory(397, 1, 1);
   Game.message("Треть иссушителя");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
});


// file: epic_loot.js

Item.registerUseFunction("bag_epic", function(coords, item, block){
         var IR = Math.round(Math.random() * 9);
         if(IR == 0){
Entity.addEffect(player, MobEffect.jump, 1, 22500);
   Game.message("Попрыгали!;)");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(IR == 1){
          
Entity.addEffect(player, MobEffect.healthBoost, 2, 22500);
   Game.message("Больше здоровья:)");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
       if(IR == 2){
          
Entity.addEffect(player, MobEffect.damageBoost, 1, 22500);
   Game.message("Ты сильный");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(IR == 3){
          
Entity.addEffect(player, MobEffect.movementSpeed, 1, 22500);
   Game.message("Ну ты быстрый...");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
      if(IR == 4){
          
Entity.addEffect(player, MobEffect.regeneration, 1, 22500);
   Game.message("Регенирируй!");
 item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
} 
     if(IR == 5){
          
Entity.addEffect(player, MobEffect.digSpeed, 1, 22500);
   Game.message("Вперед в шахту!");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 6){
          
Entity.addEffect(player, MobEffect.damageResistance, 1, 22500);
   Game.message("Бонус к защите;)");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 7){
          
Entity.addEffect(player, MobEffect.fireResistance, 1, 22500);
   Game.message("Огонь — не беда:)");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 8){
          
Entity.addEffect(player, MobEffect.waterBreathing, 1, 22500);
   Game.message("Можешь плавать без факела...");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 9){
          
Entity.addEffect(player, MobEffect.nightVision, 1, 22500);
   Game.message("Теперь светло и ночью");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
});


// file: legendary_loot.js


Item.registerUseFunction("bag_legendary", function(coords, item, block){
         var IR = Math.round(Math.random() * 9);
         if(IR == 0){
Player.addItemToInventory(397, 3, 1);
Player.addItemToInventory(88, 4, 0);
   Game.message("Погнали на иссушителя, еее");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(IR == 1){

Entity.addEffect(player, MobEffect.damageBoost, 2, 100000);
Entity.addEffect(player, MobEffect.damageResistance, 2, 100000);
          
Entity.addEffect(player, MobEffect.healthBoost, 3, 100000);
   Game.message("Много хорошего...");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
       if(IR == 2){
          
Player.addItemToInventory(138, 1, 0);
   Game.message("Маяк выпал, ты прикинь?");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(IR == 3){
          
Player.addItemToInventory(7, 5, 0);
   Game.message("Осторожнее с этой штукой в выживании...");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
      if(IR == 4){
          
Player.addItemToInventory(46, 32, 0);
   Game.message("Взорви все это, надоело...");
 item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
} 
     if(IR == 5){
          
Player.addItemToInventory(397, 1, 2);
   Game.message("Голова в твою коллекцию");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 6){
          
Player.addItemToInventory(397, 1, 0);
   Game.message("Голова для коллекции:)");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 7){
          
Player.addItemToInventory(444, 1, 0);
   Game.message("Полетели...");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 8){
  
pos = Player.getPosition();        
World.setBlock(pos.x, pos.y, pos.z, 10);
   Game.message("Сорян, не повезло...");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 9){
          
Player.addItemToInventory(466, 5, 0);
   Game.message("Хмм, аппетитно...");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
});