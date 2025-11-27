IDRegistry.genItemID("commonChest");
Item.createItem("commonChest", "Common Chest", {name: "commonChest", meta: 0}, {stack: 1});

Item.registerUseFunction("commonChest", function(coords, item, block){
         var IR = Math.round(Math.random() * 9);
         if(IR == 0){
   Player.addItemToInventory (367, 5, 0);
   Player.addItemToInventory (375, 5, 0);
   Game.message("Фууу Выкинь:)");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(IR == 1){
          
Player.addItemToInventory (357, 3, 0);
   Game.message("Это типо орео ^^");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
       if(IR == 2){
          
Player.addItemToInventory (298, 1, 0);
Player.addItemToInventory (299, 1, 0);
Player.addItemToInventory (300, 1, 0);
Player.addItemToInventory (301, 1, 0);
Player.addItemToInventory (267, 1, 0);
Player.addItemToInventory (274, 1, 0);
Player.addItemToInventory (297, 3, 0);
   Game.message("Кит Старт");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(IR == 3){
          
Player.addItemToInventory (261, 1, 0);
Player.addItemToInventory (262, 16, 0);
   Game.message("Для защиты");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
      if(IR == 4){
          
Player.addItemToInventory (346, 1, 0);
   Game.message("Чё поцаны рыбалка?");
 item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
} 
     if(IR == 5){
          
Player.addItemToInventory (32, 1, 0);
Game.message("Ти нююююбиииик");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 6){
    
    Player.addItemToInventory (46, 16, 0);
    Player.addItemToInventory (259, 1, 0);
Game.message("Взорви здесь всё к чертям");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 7){
    
    Player.addItemToInventory (17, 32, 0);
    Player.addItemToInventory (5, 16, 0);
Game.message("Дерево Надо?");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 8){
    
    Player.addItemToInventory (3, 64, 0);
   Game.message("На блоков");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
});
          
          

IDRegistry.genItemID("alienChest");
Item.createItem("alienChest", "Alien Chest", {name: "alienChest", meta: 0}, {stack: 1});
    
    Item.registerUseFunction("alienChest", function(coords, item, block){
         var IR = Math.round(Math.random() * 9);
         if(IR == 0){
   Player.addItemToInventory (331, 16, 0);
    Game.message("Сделай автоматический механизм а это поможет:)");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(IR == 1){
          
Player.addItemToInventory (264, 1, 0);
   Game.message("Алмазик хмммм а не жирно тебе?");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
       if(IR == 2){
          
Player.addItemToInventory (52, 1, 0);
Player.addItemToInventory (383, 1, 34);
Game.message("Сделай ферму опыта и костей");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(IR == 3){
          
Player.addItemToInventory (41, 3, 0);
Player.addItemToInventory (42, 3, 0);
   Game.message("Теперь ты король");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
      if(IR == 4){
          
Player.addItemToInventory (400, 1, 0);
   Game.message("Сосед, а у тя пирог есть? да есть на");
 item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
} 
     if(IR == 5){
          
Player.addItemToInventory (32, 64, 0);
Player.addItemToInventory (3, 64, 0);
Game.message("Ты огромный нуб");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 6){
    
    Player.addItemToInventory (325, 1, 8);
    Player.addItemToInventory (325, 1, 10);
Game.message("Получи достижение Две Стихии");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 7){
    
    Player.addItemToInventory (307, 1, 0);
Game.message("Теперь ты железный человек тока с одним нагрудником");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 8){
    
    Player.addItemToInventory (154, 3, 0);
   Game.message("Просто Воронки");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
});
  
	
	IDRegistry.genItemID("epicChest");
Item.createItem("epicChest", "Epic Chest", {name: "epicChest", meta: 0}, {stack: 1});

Item.registerUseFunction("epicChest", function(coords, item, block){
         var IR = Math.round(Math.random() * 9);
         if(IR == 0){
   Player.addItemToInventory (264, 6, 0);
   Player.addItemToInventory (388, 6, 0);
    Game.message("Теперь ты красава");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(IR == 1){
          
Player.addItemToInventory (311, 1, 0);
   Game.message("Достижение Осыпь Меня алмазами");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
       if(IR == 2){
          
Player.addItemToInventory (348, 32, 0);
Game.message("Засветись");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(IR == 3){
          
Player.addItemToInventory (368, 16, 0);
Game.message("Хотябы искать их не надо");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
      if(IR == 4){
          
Player.addItemToInventory (347, 1, 0);
   Game.message("Сколько щас время, ага время достать часы из инвентаря");
 item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
} 
     if(IR == 5){
          
Player.addItemToInventory (419, 1, 0);
Player.addItemToInventory (420, 1, 0);
Player.addItemToInventory (421, 1, 0);
Game.message("Приручи лошадь");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 6){
    
    Player.addItemToInventory (57, 1, 0);
Game.message("Афигеть");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 7){
    
    Player.addItemToInventory (322, 5, 0);
Game.message("Это ялблаки psss это не ошибка");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 8){
    
    Player.addItemToInventory (19, 16, 0);
   Game.message("Губка боб квадратные штаны");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
});
 

IDRegistry.genItemID("mythicalChest");
Item.createItem("mythicalChest", "Mythical Chest", {name: "mythicalChest", meta: 0}, {stack: 1});
 
 
Item.registerUseFunction("mythicalChest", function(coords, item, block){
         var IR = Math.round(Math.random() * 9);
         if(IR == 0){
 Player.addItemToInventory (310, 1, 0);
 Player.addItemToInventory (311, 1, 0);
 Player.addItemToInventory (312, 1, 0);
 Player.addItemToInventory (313, 1, 0); Game.message("К бою готов!!!");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(IR == 1){
          
Player.addItemToInventory (120, 12, 0);
   Game.message("Го на дракона?");
   item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
       if(IR == 2){
          
Player.addItemToInventory (263, 64, 0);
Player.addItemToInventory (265, 64, 0);
Player.addItemToInventory (266, 32, 0); Player.addItemToInventory (264, 16, 0);
Game.message("Бонус набор");
  item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
     if(IR == 3){
          
Player.addItemToInventory (466, 16, 0);
Game.message("Теперь ты готов на дракона!");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
      if(IR == 4){
          
Player.addItemToInventory (397, 3, 0);
   Game.message("Чтобы с этим сделать хммм?");
 item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
} 
     if(IR == 5){
          
Player.addItemToInventory (276, 1, 0);
Game.message("Вооружился и вперёд");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 6){
    
    Player.addItemToInventory (396, 64, 0);
Game.message("тебе на долго хватит");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 7){
    
    Player.addItemToInventory (138, 1, 0);
Game.message("Маяк?");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
    if(IR == 8){
    
    Player.addItemToInventory (32, 1, 0);
   Game.message("не повезло, увы(");
    item.count--;
	if(!item.count){item.id = 0;}
	Player.setCarriedItem(item.id, item.count, 0);
}
});

Callback.addCallback("EntityDeath", function(entity){
var E = Entity.getType(entity);
var coords = Entity.getPosition(entity);
var R = Math.round(Math.random() * 10);
 if(E == 34 || E == 32 || E == 47 || E == 38 || E == 33 || E == 35 || E == 40 || E == 44 ){
   if(R == 4){
      World.drop(coords.x, coords.y, coords.z, ItemID.commonChest, 1, 0);
}
    if(R == 1 || R == 2 || R == 3){
            World.drop(coords.x, coords.y, coords.z, ItemID.commonChest, 1, 0);
}
}
});

Callback.addCallback("EntityDeath", function(entity){
var E = Entity.getType(entity);
var coords = Entity.getPosition(entity);
var R = Math.round(Math.random() * 40);
 if(E == 34 || E == 32 || E == 47 || E == 38 || E == 33 || E == 35 || E == 40 || E == 44 ){
   if(R == 4){
      World.drop(coords.x, coords.y, coords.z, ItemID.alienChest, 1, 0);
}
    if(R == 1 || R == 2 || R == 3){
            World.drop(coords.x, coords.y, coords.z, ItemID.alienChest, 1, 0);
}
}
});

Callback.addCallback("EntityDeath", function(entity){
var E = Entity.getType(entity);
var coords = Entity.getPosition(entity);
var R = Math.round(Math.random() * 70);
 if(E == 34 || E == 32 || E == 47 || E == 38 || E == 33 || E == 35 || E == 40 || E == 44 ){
   if(R == 4){
      World.drop(coords.x, coords.y, coords.z, ItemID.epicChest, 1, 0);
}
    if(R == 1 || R == 2 || R == 3){
            World.drop(coords.x, coords.y, coords.z, ItemID.epicChest, 1, 0);
}
}
});

Callback.addCallback("EntityDeath", function(entity){
var E = Entity.getType(entity);
var coords = Entity.getPosition(entity);
var Q = Math.round(Math.random() * 99);
 if(E == 34 || E == 32 || E == 47 || E == 38 || E == 33 || E == 35 || E == 40 || E == 44 ){
   if(Q == 50){
      World.drop(coords.x, coords.y, coords.z, ItemID.mythicalChest, 1, 0);
}
}
});

Translation.addTranslation("Common Chest", {ru: "Обычный Сундук"});
Translation.addTranslation("Alien Chest", {ru: "Инопланитянский Сундук"});
Translation.addTranslation("Epic Chest", {ru: "Эпичиский Сундук"});
Translation.addTranslation("Mythical Chest", {ru: "Мифичиский Сундук"});
