//Pain Killer
IDRegistry.genItemID("pain_killer");
Item.createItem("pain_killer", "Pain Killer", {name: "Pain_Killer"}, {stack: 64});

Item.registerUseFunction("pain_killer", function(coords, item, block){
   var Health = Player.getHealth();
   if(Health < 20){
     Player.setHealth(Health + 7);
     Player.setCarriedItem(item.id,  item.count - 1, item.data);
     }
});