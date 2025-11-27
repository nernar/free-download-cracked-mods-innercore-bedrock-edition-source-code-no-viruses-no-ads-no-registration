IDRegistry.genItemID("souleateroff");
Item.createItem("souleateroff", "souleateroff", {name: "souleateroff"}, {stack: 1});

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: ItemID.souleateroff, count: 1, data: 0}, ["apa","aga","dfh"], ['a', ItemID.voidplate, 0, 'p', ItemID.voidshard, 0, 'g', ItemID.hbrcore, -1, 'd', ItemID.voidingot, 0, 'f', ItemID.voidcristall, -1, 'h', 20, 0]);
  });


var setEater = function(arg){
  IDRegistry.genItemID("soulEater"+ arg.id);
Item.createItem("soulEater"+ arg.id, "soulEater"+ arg.id, {name: "soulEaterOn"}, {stack: 1, isTech: true});

  Callback.addCallback("PlayerAttack",function(player,victim){
    item=Player.getCarriedItem(true);
    if(item.id==ItemID.souleateroff&&Entity.getType(victim)==arg.mob.id){
     Entity.remove(victim);
      Player.setCarriedItem(ItemID["soulEater"+arg.id],1,0);}});
  Callback.addCallback("ItemUse",function(coords){
    item=Player.getCarriedItem(true);
    if(item.id==ItemID["soulEater"+arg.id]){
    Entity.spawn(coords.x+0.5, coords.y+1, coords.z+0.5, arg.mob.id) 
      Player.setCarriedItem(ItemID.souleateroff,1,0);}});
}
setEater({id: "Chicken", mob: {id: 10}}); 
setEater({id: "Cow", mob: {id: 11}}); 
setEater({id: "Pig", mob: {id: 12}}); 
setEater({id: "Sheep", mob: {id: 13}}); 
setEater({id: "Wolf", mob: {id: 14}}); 
setEater({id: "Villager", mob: {id: 15}});
setEater({id: "Moooshrom", mob: {id: 16}});
setEater({id: "Squid", mob: {id: 17}});
setEater({id: "Rabbit", mob: {id: 18}});
setEater({id: "Bat", mob: {id: 19}});
setEater({id: "Golem", mob: {id: 20}});
setEater({id: "Snowman", mob: {id: 21}});
setEater({id: "Ocelot", mob: {id: 22}});
setEater({id: "Zombie", mob: {id: 32}});
setEater({id: "Creeper", mob: {id: 33}});
setEater({id: "Skeleton", mob: {id: 34}});
setEater({id: "Spider", mob: {id: 35}});
setEater({id: "Pigman", mob: {id: 36}});
setEater({id: "Slime", mob: {id: 37}});
setEater({id: "Enderman", mob: {id: 38}});
setEater({id: "Silverfish", mob: {id: 39}});
setEater({id: "CaveSpider", mob: {id: 40}});
setEater({id: "Ghast", mob: {id: 41}});
setEater({id: "Magmacube", mob: {id: 42}});
setEater({id: "Blaze", mob: {id: 43}});
setEater({id: "Zombie-villager", mob: {id: 44}});




