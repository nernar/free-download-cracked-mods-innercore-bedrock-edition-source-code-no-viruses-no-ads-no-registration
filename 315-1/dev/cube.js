importLib("AdvancedAI", "*");

IDRegistry.genItemID("cubeportal");
Item.createItem("cubeportal", "Standart cube", {name: "cubeportal", data: 0});
var cubeportal = MobRegistry.registerEntity("cubeportal");
cubeportal.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 2);
 Entity.setSkin(this.entity, "mobs/cubeportal.png");
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
},
attackedBy: function(attacker, amount){
}
});
cubeportal.customizeDescription({
	getHealth: function(){
  return 1;},
 getHitbox: function(){
 return {w: 1, h: 1}
},
getDrop: function(){
 var drop = [];
 drop.push({id: ItemID.cubeportal, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 return drop;
}
});
cubeportal.customizeAI({
getAITypes: function(){
return {
};
}
});
Item.registerUseFunction("cubeportal", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("cubeportal", coords.x + .5, coords.y + 1, coords.z + .5);
}); 



IDRegistry.genItemID("cubeportal2");
Item.createItem("cubeportal2", "Standart cube 2", {name: "cubeportal2", data: 0});
var cubeportal2 = MobRegistry.registerEntity("cubeportal2");
cubeportal2.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 2);
 Entity.setSkin(this.entity, "mobs/cubeportal2.png");
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
},
attackedBy: function(attacker, amount){
}
});
cubeportal2.customizeDescription({
	getHealth: function(){
  return 1;},
 getHitbox: function(){
 return {w: 1, h: 1}
},
getDrop: function(){
 var drop = [];
 drop.push({id: ItemID.cubeportal2, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 return drop;
}
});
cubeportal2.customizeAI({
getAITypes: function(){
return {
};
}
});
Item.registerUseFunction("cubeportal2", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("cubeportal2", coords.x + .5, coords.y + 1, coords.z + .5);
}); 



IDRegistry.genItemID("heartcubeportal");
Item.createItem("heartcubeportal",  "Cube companion", {name: "heartcubeportal", data: 0});
var heartcubeportal = MobRegistry.registerEntity("heartcubeportal");
heartcubeportal.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 2);
 Entity.setSkin(this.entity, "mobs/heartcubeportal.png");
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
},
attackedBy: function(attacker, amount){
}
});
heartcubeportal.customizeDescription({
	getHealth: function(){
  return 1;},
 getHitbox: function(){
 return {w: 1, h: 1}
},
getDrop: function(){
 var drop = [];
 drop.push({id: ItemID.heartcubeportal, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 return drop;
}
});
heartcubeportal.customizeAI({
getAITypes: function(){
return {
};
}
});
Item.registerUseFunction("heartcubeportal", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("heartcubeportal", coords.x + .5, coords.y + 1, coords.z + .5);
}); 



IDRegistry.genItemID("heartcubeportal2");
Item.createItem("heartcubeportal2", "Cube companion 2", {name: "heartcubeportal2", data: 0});
var heartcubeportal2 = MobRegistry.registerEntity("heartcubeportal2");
heartcubeportal2.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 2);
 Entity.setSkin(this.entity, "mobs/heartcubeportal2.png");
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
},
attackedBy: function(attacker, amount){
}
});
heartcubeportal2.customizeDescription({
	getHealth: function(){
  return 1;},
 getHitbox: function(){
 return {w: 1, h: 1}
},
getDrop: function(){
 var drop = [];
 drop.push({id: ItemID.heartcubeportal2, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 return drop;
}
});
heartcubeportal2.customizeAI({
getAITypes: function(){
return {
};
}
});
Item.registerUseFunction("heartcubeportal2", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("heartcubeportal2", coords.x + .5, coords.y + 1, coords.z + .5);
}); 



IDRegistry.genItemID("lasercubeportal2");
Item.createItem("lasercubeportal2", "Laser cube", {name: "lasercubeportal2", data: 0});
var lasercubeportal2 = MobRegistry.registerEntity("lasercubeportal2");
lasercubeportal2.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 2);
 Entity.setSkin(this.entity, "mobs/lasercubeportal2.png");
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
},
attackedBy: function(attacker, amount){
}
});
lasercubeportal2.customizeDescription({
	getHealth: function(){
  return 1;},
 getHitbox: function(){
 return {w: 1, h: 1}
},
getDrop: function(){
 var drop = [];
 drop.push({id: ItemID.lasercubeportal2, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 return drop;
}
});
lasercubeportal2.customizeAI({
getAITypes: function(){
return {
};
}
});
Item.registerUseFunction("lasercubeportal2", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("lasercubeportal2", coords.x + .5, coords.y + 1, coords.z + .5);
}); 



IDRegistry.genItemID("aperturecube");
Item.createItem("aperturecube", "Old cube", {name: "aperturecube", data: 0});
var aperturecube = MobRegistry.registerEntity("aperturecube");
aperturecube.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 2);
 Entity.setSkin(this.entity, "mobs/aperturecube.png");
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
},
attackedBy: function(attacker, amount){
}
});
aperturecube.customizeDescription({
	getHealth: function(){
  return 1;},
 getHitbox: function(){
 return {w: 1, h: 1}
},
getDrop: function(){
 var drop = [];
 drop.push({id: ItemID.aperturecube, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 return drop;
}
});
aperturecube.customizeAI({
getAITypes: function(){
return {
};
}
});
Item.registerUseFunction("aperturecube", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("aperturecube", coords.x + .5, coords.y + 1, coords.z + .5);
});




Recipes.addShaped({id: ItemID.cubeportal, count: 1, data: 0}, [ " ab", "   ", "   "], ['a', 265, 0, 'b', 351, 12]);
Recipes.addShaped({id: ItemID.cubeportal2, count: 1, data: 0}, [ " ba", "   ", "   "], ['a', 265, 0, 'b', 351, 12]);
Recipes.addShaped({id: ItemID.heartcubeportal, count: 1, data: 0}, [ " ab", "   ", "   "], ['a', 265, 0, 'b', 351, 9]);
Recipes.addShaped({id: ItemID.heartcubeportal2, count: 1, data: 0}, [ " ba", "   ", "   "], ['a', 265, 0, 'b', 351, 9]);
Recipes.addShaped({id: ItemID.lasercubeportal2, count: 1, data: 0}, [ " ab", "   ", "   "], ['a', 265, 0, 'b', 102, 0]);
Recipes.addShaped({id: ItemID.aperturecube, count: 1, data: 0}, [ " ab", "   ", "   "], ['a', 265, 0, 'b', 318, 0]);


 























