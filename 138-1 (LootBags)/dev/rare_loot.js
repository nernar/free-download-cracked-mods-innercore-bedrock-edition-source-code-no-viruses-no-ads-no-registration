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