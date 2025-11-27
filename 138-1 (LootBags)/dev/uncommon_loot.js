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
});("bag_uncommon", function(coords, item, block){
         var IR = Math.round(Math.random() * 9);
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
          
Player.addItemToInventory (383, 1, 22);
   Game.message("Да тебе повезло, выпал милый котик (^u^)");
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
