Callback.addCallback("EntityDeath", function(entity){
 var count = [1, 2, 3];
 var rnd = Math.floor((Math.random()*10)+1)
 
 if(Entity.getType(entity) == 23&&rnd <= 5||Entity.getType(entity) == 24&&rnd <= 5||Entity.getType(entity) == 25&&rnd <= 5){
 
var rnd2 = Math.floor(Math.random()*(count.length));
 		var coords = Entity.getPosition(entity); 
     World.drop(coords.x, coords.y, coords.z, 363, count[rnd2]);}
});