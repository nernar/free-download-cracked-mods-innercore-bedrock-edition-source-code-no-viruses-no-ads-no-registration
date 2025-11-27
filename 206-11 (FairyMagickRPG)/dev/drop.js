
IDRegistry.genItemID("soul_vita");
Item.createItem("soul_vita", "Soul of Vita", {name: "soul"}, {stack: 1});

Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 10 && Math.random() < 1/20){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.soul_vita, random(1, 1), 0);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 11 && Math.random() < 1/20){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.soul_vita, random(1, 1), 0);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 12 && Math.random() < 1/20){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.soul_vita, random(1, 1), 0);
 }
});


Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 13 && Math.random() < 1/20){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.soul_vita, random(1, 1), 0);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 50){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.ocean, random(1, 1), 0);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 49 && Math.random() < 1/3){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.otear, random(1, 1, 1, 1, 1, 1, 2, 2, 3), 0);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 43 && Math.random() < 1/30){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.burncr, random(1, 1), 0);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 45 && Math.random() < 1/4){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.ocharm, random(1, 1), 0);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 37 && Math.random() < 1/15){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.ocharm, random(1, 1), 0);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 42 && Math.random() < 1/30){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.burncr, random(1, 1), 0);
 }
});
