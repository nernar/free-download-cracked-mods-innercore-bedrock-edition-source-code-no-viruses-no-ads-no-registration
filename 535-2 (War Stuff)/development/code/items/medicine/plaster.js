//Plaster
IDRegistry.genItemID("plaster");
Item.createItem("plaster", "Plaster", {name: "Plaster"}, {stack: 64});

Item.registerUseFunction("plaster", function(coords, item, block){
   var Health = Player.getHealth();
   if(Health < 20){
     Player.setHealth(Health + 1);
     Player.setCarriedItem(item.id,  item.count - 1, item.data);
     }
});