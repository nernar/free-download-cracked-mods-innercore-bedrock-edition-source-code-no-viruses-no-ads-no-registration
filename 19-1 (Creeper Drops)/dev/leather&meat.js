IDRegistry.genItemID("creeperLeather");
IDRegistry.genItemID("creeperMeat");
Item.createItem("creeperLeather", "Creeper Leather", {name:"creeperLeather"}, {stack:64});
Item.createItem("creeperMeat", "Creeper Meat", {name:"creeperMeat"}, {stack:64});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 33){
 		var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 1 + parseInt(Math.random() * 2);
      World.drop(coords.x, coords.y, coords.z, ItemID.creeperLeather, leth);
      World.drop(coords.x, coords.y, coords.z, ItemID.creeperMeat, mea);
 }
});