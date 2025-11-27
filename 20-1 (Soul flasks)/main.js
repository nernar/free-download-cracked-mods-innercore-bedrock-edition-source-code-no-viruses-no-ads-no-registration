/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 2
*/



// file: items.js

IDRegistry.genItemID("ectoplasm");
Item.createItem("ectoplasm", "Ectoplasm", {name: "ectoplasm"}, {stack: 64});
IDRegistry.genItemID("soulBlend");
Item.createItem("soulBlend", "Soul blend", {name: "soulBlend"}, {stack: 64});
IDRegistry.genItemID("soulFlaskEmpty");
Item.createItem("soulFlaskEmpty", "Soul flask empty", {name: "soulFlask"}, {stack: 1});

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: ItemID.soulBlend, count: 4, data: 0}, [
  "sb","de"], ['s', 88, 0, 'b', 377, 0, 'e', ItemID.ectoplasm, 0, 'd', 3, 0]);
  Recipes.addShaped({id: ItemID.soulFlaskEmpty, count: 1, data: 0}, [
  " p ","sbs"," s "], ['s', ItemID.soulBlend, 0, 'b', 374, 0, 'p', 368, 0]);});

//getting ectoplasm
Callback.addCallback("EntityDeath",function(entity){
  if(Math.floor((Math.random()*20)+0)==0){
World.drop(Entity.getPosition(entity).x,Entity.getPosition(entity).y,Entity.getPosition(entity).z,ItemID.ectoplasm,1,0);}
});




// file: flaskFilling.js

var setFlask = function(arg){
  IDRegistry.genItemID("soulFlask"+ arg.id);
Item.createItem("soulFlask"+ arg.id, "Soul flask "+ arg.id, {name: "soulFlaskFull"}, {stack: 64, isTech: true});

  Callback.addCallback("PlayerAttack",function(player,victim){
    item=Player.getCarriedItem(true);
    if(item.id==ItemID.soulFlaskEmpty&&Entity.getType(victim)==arg.mob.id){
     Entity.remove(victim);
      Player.setCarriedItem(ItemID["soulFlask"+arg.id],1,0);}});
  Callback.addCallback("ItemUse",function(coords){
    item=Player.getCarriedItem(true);
    if(item.id==ItemID["soulFlask"+arg.id]){
    Entity.spawn(coords.x+0.5, coords.y+1, coords.z+0.5, arg.mob.id) 
      Player.setCarriedItem(ItemID.soulFlaskEmpty,1,0);}});
}
setFlask({id: "Chicken", mob: {id: 10}}); 
setFlask({id: "Cow", mob: {id: 11}}); 
setFlask({id: "Pig", mob: {id: 12}}); 
setFlask({id: "Sheep", mob: {id: 13}}); 
setFlask({id: "Wolf", mob: {id: 14}}); 
setFlask({id: "Villager", mob: {id: 15}});
setFlask({id: "Moooshrom", mob: {id: 16}});
setFlask({id: "Squid", mob: {id: 17}});
setFlask({id: "Rabbit", mob: {id: 18}});
setFlask({id: "Bat", mob: {id: 19}});
setFlask({id: "Golem", mob: {id: 20}});
setFlask({id: "Snowman", mob: {id: 21}});
setFlask({id: "Ocelot", mob: {id: 22}});
setFlask({id: "Zombie", mob: {id: 32}});
setFlask({id: "Creeper", mob: {id: 33}});
setFlask({id: "Skeleton", mob: {id: 34}});
setFlask({id: "Spider", mob: {id: 35}});
setFlask({id: "Pigman", mob: {id: 36}});
setFlask({id: "Slime", mob: {id: 37}});
setFlask({id: "Enderman", mob: {id: 38}});
setFlask({id: "Silverfish", mob: {id: 39}});
setFlask({id: "CaveSpider", mob: {id: 40}});
setFlask({id: "Ghast", mob: {id: 41}});
setFlask({id: "Magmacube", mob: {id: 42}});
setFlask({id: "Blaze", mob: {id: 43}});
setFlask({id: "Zombie-villager", mob: {id: 44}});




