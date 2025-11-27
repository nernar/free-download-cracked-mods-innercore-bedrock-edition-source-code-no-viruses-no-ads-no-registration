Callback.addCallback("EntityDeath", function(entity){
var E = Entity.getType(entity);
var coords = Entity.getPosition(entity);
var R = Math.round(Math.random() * 9);
 if(E == 34 || E == 32 || E == 47 || E == 38 || E == 33 || E == 35 || E == 40 || E == 44 ){
   if(R == 4){
      World.drop(coords.x, coords.y, coords.z, ItemID.bag_uncommon, 1, 0);
}
    if(R == 1 || R == 2 || R == 3){
            World.drop(coords.x, coords.y, coords.z, ItemID.bag_common, 1, 0);
}
}
});

Callback.addCallback("EntityDeath", function(entity){
var E = Entity.getType(entity);
var coords = Entity.getPosition(entity);
var Q = Math.round(Math.random() * 99);
 if(E == 34 || E == 32 || E == 47 || E == 38 || E == 33 || E == 35 || E == 40 || E == 44 ){
   if(Q == 50){
      World.drop(coords.x, coords.y, coords.z, ItemID.bag_legendary, 1, 0);
}
}
});