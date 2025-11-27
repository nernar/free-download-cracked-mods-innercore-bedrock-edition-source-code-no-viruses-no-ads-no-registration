//Small Medkit
IDRegistry.genItemID("small_medkit");
Item.createItem("small_medkit", "Small Medkit", {name: "Small_Medkit"}, {stack: 1});
Item.setMaxDamage(ItemID.small_medkit, 5);

Item.registerUseFunction("small_medkit", function(coords, item, block){
   var Health = Player.getHealth();
   if(Health < 20){
     Player.setHealth(Health + 7);
     SoundAPI.playSound("Medkit.ogg");
     Player.setCarriedItem(item.id, ++item.data < 5 ? item.count : 0, item.data);
     }
});

//Medkit
IDRegistry.genItemID("medkit");
Item.createItem("medkit", "Medkit", {name: "Medkit"}, {stack: 1});
Item.setMaxDamage(ItemID.medkit, 7);

Item.registerUseFunction("medkit", function(coords, item, block){
   var Health = Player.getHealth();
   if(Health < 20){
     Player.setHealth(Health + 10);
     SoundAPI.playSound("Medkit.ogg");
     Player.setCarriedItem(item.id, ++item.data < 7 ? item.count : 0, item.data);
     }
});

//Nig Medkit
IDRegistry.genItemID("big_medkit");
Item.createItem("big_medkit", "Big Medkit", {name: "Big_Medkit"}, {stack: 1});
Item.setMaxDamage(ItemID.big_medkit, 10);

Item.registerUseFunction("big_medkit", function(coords, item, block){
   var Health = Player.getHealth();
   if(Health < 20){
     Player.setHealth(Health + 10);
     SoundAPI.playSound("Medkit.ogg");
     Player.setCarriedItem(item.id, ++item.data < 10 ? item.count : 0, item.data);
     }
});