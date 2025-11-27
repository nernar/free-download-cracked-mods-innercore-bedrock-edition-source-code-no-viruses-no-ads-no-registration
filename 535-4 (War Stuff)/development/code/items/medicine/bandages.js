//Bandage
IDRegistry.genItemID("bandage");
Item.createItem("bandage", "Bandage", {name: "Bandage"}, {stack: 16});

Item.registerUseFunction("bandage", function(coords, item, block){
   var Health = Player.getHealth();
   if(Health < 20){
     Player.setHealth(Health + 3);
     SoundAPI.playSound("Bandage.ogg");
     Player.setCarriedItem(item.id,  item.count - 1, item.data);
     }
});

//Emergency Bandage
IDRegistry.genItemID("emergency_bandage");
Item.createItem("emergency_bandage", "Emergency Bandage", {name: "Emergency_Bandage"}, {stack: 16});

Item.registerUseFunction("emergency_bandage", function(coords, item, block){
   var Health = Player.getHealth();
   if(Health < 20){
     Player.setHealth(Health + 5);
     SoundAPI.playSound("Bandage.ogg");
     Player.setCarriedItem(item.id,  item.count - 1, item.data);
     }
});