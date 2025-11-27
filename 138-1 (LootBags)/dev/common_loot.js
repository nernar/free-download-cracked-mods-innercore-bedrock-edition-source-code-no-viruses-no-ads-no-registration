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