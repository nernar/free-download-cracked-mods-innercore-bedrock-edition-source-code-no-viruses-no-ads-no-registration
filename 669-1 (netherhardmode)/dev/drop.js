Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 43){
   var coords = Entity.getPosition(entity);
      var rad  = parseInt(Math.random() * 4);
      World.drop(coords.x, coords.y, coords.z, ItemID.blazeSpine, rad);
 }
});

