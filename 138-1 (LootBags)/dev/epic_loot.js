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