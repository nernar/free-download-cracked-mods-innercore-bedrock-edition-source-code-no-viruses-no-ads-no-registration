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