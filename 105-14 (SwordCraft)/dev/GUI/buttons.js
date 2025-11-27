var wind = new UI.Window({
    location: {
        x:850,
        y:0,
        width:60,
        height:60
    },
    elements: {
        "btn": {type: "button", x: 0, y: 0, bitmap: "ButOn", scale: 60, clicker: {
            onClick: var dg = Entity.spawn(coords.x+1, coords.y+1, coords.z, 94); 
Entity.setVelocity(dg, 0, +0.05, 0);
     }
    }
   }
  });

Callback.addCallback("tick",function(item,block,coords){
 if(Player.getCarriedItem().id == ItemID.MechN17){
wind.enabled = true;
}
else{
wind.enabled = false;}});