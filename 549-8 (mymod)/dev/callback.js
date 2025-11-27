Callback.addCallback("FoodEaten",function(heal, satRatio, player){ 
let item = Entity.getCarriedItem(player);
if(item.id==ItemID.wpivo){ 
Entity.addEffect(player, 10, 2, 1200, false,false); 
}});

Callback.addCallback("FoodEaten",function(heal, satRatio, player){ 
let item = Entity.getCarriedItem(player);
if(item.id==ItemID.ppivo){ 
Entity.addEffect(player, 13, 0, 1200, false,false); 
}});

Callback.addCallback("FoodEaten",function(heal, satRatio, player){ 
let item = Entity.getCarriedItem(player);
if(item.id==ItemID.cpivo){ 
Entity.addEffect(player, 16, 0, 1200, false,false); 
}});

Callback.addCallback("FoodEaten",function(heal, satRatio, player){ 
let item = Entity.getCarriedItem(player);
if(item.id==ItemID.spivo){ 
Entity.addEffect(player, 12, 0, 1200, false,false); 
}});

Callback.addCallback("FoodEaten",function(heal, satRatio, player){ 
let item = Entity.getCarriedItem(player);
if(item.id==ItemID.megapivo){ 
Entity.addEffect(Player, 10, 2, 1200, false,false); 
Entity.addEffect(Player, 13, 0, 1200, false,false); 
Entity.addEffect(Player, 16, 0, 1200, false,false); 
Entity.addEffect(Player, 22, 4, 1200, false,false); 
Entity.addEffect(Player, 12, 0, 1200, false,false); 
}});

Callback.addCallback("FoodEaten",function(heal, satRatio, player){ 
let item = Entity.getCarriedItem(player);
if(item.id==ItemID.pollen){ 
Entity.addEffect(Player, 22, 4, 300, false,false); 
}});
