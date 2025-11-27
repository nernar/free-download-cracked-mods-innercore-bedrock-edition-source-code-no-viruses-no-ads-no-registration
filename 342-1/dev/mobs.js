importLib("AdvancedAI", "*");
IMPORT("SoundAPI")


Callback.addCallback("PlayerAttack", function (player, victim) {
Game.message("hp"+Entity.getRender (victim));
});

 var GolemDamage = new Sound();
GolemDamage.setSource("Damage/GolemDamage.ogg");


var GolemDeath = new Sound();
GolemDeath.setSource("Death/GolemDeath.ogg");

var BowsDamage = new Sound();
BowsDamage.setSource("Damage/BowsDamage.ogg");

var BowsDeath = new Sound();
BowsDeath.setSource("Death/BowsDeath.ogg");

var EkatebrinaTheme = new Sound();
BowsDeath.setSource("Themes/EkatebrinaTheme.ogg");

var CometEntTheme = new Sound();
BowsDeath.setSource("Themes/CometEntTheme.ogg");

var NightQweenTheme = new Sound();
BowsDeath.setSource("Themes/NightQweenTheme.ogg");

var PurgatoryTheme = new Sound();
BowsDeath.setSource("Themes/PurgatoryTheme.ogg");



IDRegistry.genItemID("spawnsuperguy");
Item.createItem("spawnsuperguy", "Призвать существо - Супер Парень", {name: "spawnsuperguy", data: 0});


var SuperGuy = MobRegistry.registerEntity("SuperGuy");
SuperGuy.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/superguy.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Супер Парень " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 

 
}
});

SuperGuy.customizeDescription({
	getHealth: function(){
  return 40;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.silvermoney, count: {min: 1, max: 2}, data: 0, separate: true, chance: 0.2});
 

 return drop;
 
}
});
SuperGuy.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.5,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 8,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("spawnsuperguy", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("SuperGuy", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn








IDRegistry.genItemID("spawnarkenian");
Item.createItem("spawnarkenian", "Призвать существо - Аркенианец", {name: "spawnarkenian", data: 0});


var Arkenian = MobRegistry.registerEntity("Arkenian");
Arkenian.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
Entity.setSkin(this.entity, "mobs/arkenian.png");//skin
 
 
 
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Аркениаенец " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 /*
 getGuiScreen: function(){ 
return guiCometTorg; 
}
 
addRecipes: function (source, result){ 
 var slotSource = this.container.getSlot("slotSource"); 
 var slotResult = this.container.getSlot("slotResult"); 
 if ((slotSource.id === source.id) && (slotSource.data === source.data)){ 
 slotSource.count--; 
   slotResult.id = result.id; 
   slotResult.count = result.count; 
   slotResult.data = result.data; 
 } 
}
 
tick: function(){ 
 this.addRecipes({id: ItemID.aeroliteingot, data: 0},{id: ItemID.cometstick, data: 0, count: 1}); 
 this.container.validateAll(); 
} 
*/
Entity.damageEntity (63, 10) 
 
}
});

Arkenian.customizeDescription({
	getHealth: function(){
  return 80;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
// drop.push({id: ItemID.hpup7, count: {min: 2, max: 4}, data: 0, separate: true, chance: 1});
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
drop.push({id: ItemID.bronzemoney, count: {min: 2, max: 5}, data: 0, separate: true, chance: 0.4});
 return drop;
 
}
});
Arkenian.customizeAI({
getAITypes: function(){
return {
	
wander: {
type: EntityAI.Wander,
priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Wander,
priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

attack: {
type: EntityAI.Wander,
priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg






var Arkenian2 = MobRegistry.registerEntity("Arkenian2");
Arkenian2.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
Entity.setSkin(this.entity, "mobs/arkenian2.png");//skin
 
 
 
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Аркениаенец " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
Entity.damageEntity (63, 10) 
 
}
});

Arkenian2.customizeDescription({
	getHealth: function(){
  return 85;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
drop.push({id: ItemID.bronzemoney, count: {min: 2, max: 5}, data: 0, separate: true, chance: 0.4});
 
 return drop;
 
}
});
Arkenian2.customizeAI({
getAITypes: function(){
return {
	
wander: {
type: EntityAI.Wander,
priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Wander,
priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

attack: {
type: EntityAI.Wander,
priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("spawnarkenian", function(coords, item, block){
 var coords = coords.relative;
 
 var IR = Math.round(rand * 1);
         if(IR == 0){
		Entity.spawnCustom("Arkenian", coords.x + .5, coords.y + 1, coords.z + .5);
	}
 if(IR == 1){
 	Entity.spawnCustom("Arkenian2", coords.x + .5, coords.y + 1, coords.z + .5);
 }
}); //spawn

















IDRegistry.genItemID("SpawnFox");
Item.createItem("SpawnFox", "Призвать существо - Лис", {name: "SpawnFox", data: 0});

var Fox = MobRegistry.registerEntity("Fox");
Fox.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 11);
 Entity.setSkin(this.entity, "mobs/Fox.png");
 Entity.setNameTag(this.entity, "Лис " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
},
attackedBy: function(attacker, amount){

}
});
Fox.customizeDescription({
	getHealth: function(){
  return 40;},
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
  drop.push({id: ItemID.SpawnTamedFox, count: {min: 2, max: 3}, data: 0, separate: true, chance: 1});
  drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 return drop;
 }
});
Fox.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,
priority: 4,
speed: 0.2,
angular_speed: 0.2,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Wander,
priority: 4,
speed: 0.2,
angular_speed: 0.2,
delay_weigth: 0.2
},

attack: {
type: EntityAI.Wander,
priority: 4,
speed: 0.2,
angular_speed: 0.2,
delay_weigth: 0.2
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});
Item.registerUseFunction("SpawnFox", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Fox", coords.x + .5, coords.y + 1, coords.z + .5);
}); 





IDRegistry.genItemID("SpawnTamedFox");
Item.createItem("SpawnTamedFox", "Призвать существо - Прирученный Лис", {name: "SpawnTamedFox", data: 0});



var TamedFox = MobRegistry.registerEntity("TamedFox");
TamedFox.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 11);
 Entity.setSkin(this.entity, "mobs/Fox.png");
 Entity.setNameTag(this.entity, "Прирученный Лис " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
},
attackedBy: function(attacker, amount){

}
});
TamedFox.customizeDescription({
	getHealth: function(){
  return 40;},
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
  drop.push({id: ItemID.SpawnTamedFox, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
  drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 return drop;
 }
});
TamedFox.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,
priority: 4,
speed: 0.2,
angular_speed: 0.2,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.2,
rotateHead: true
},

attack: {
type: EntityAI.Wander,
priority: 4,
speed: 0.2,
angular_speed: 0.2,
delay_weigth: 0.2
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});
Item.registerUseFunction("SpawnTamedFox", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("TamedFox", coords.x + .5, coords.y + 1, coords.z + .5);
}); 

















IDRegistry.genItemID("spawnhalfworlder");
Item.createItem("spawnhalfworlder", "Призвать существо - Халфворлдер", {name: "spawnhalfworlder", data: 0});


var HalfWorlder = MobRegistry.registerEntity("HalfWorlder");
HalfWorlder.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/halfworlder.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Халфворлдер " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 

 
}
});

HalfWorlder.customizeDescription({
	getHealth: function(){
  return 100;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
drop.push({id: ItemID.rocketgun, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.5});
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
drop.push({id: ItemID.silvermoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.4});
 
 drop.push({id: ItemID.energybullet, count: {min: 1, max: 20}, data: 0, separate: true, chance: 0.8});
 
 return drop;
 
}
});
HalfWorlder.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("spawnhalfworlder", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("HalfWorlder", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn


















IDRegistry.genItemID("SpawnRustyGolem");
Item.createItem("SpawnRustyGolem", "Призвать существо - Ржавый Голем", {name: "SpawnRustyGolem", data: 0});


var RustyGolem = MobRegistry.registerEntity("RustyGolem");
RustyGolem.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/RustyGolem.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Ржавый Голем " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 GolemDamage.play();

 
}
});

RustyGolem.customizeDescription({
	getHealth: function(){
  return 150;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.rustyingot, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.9});
 
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.silvermoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 1, max: 4}, data: 0, separate: true, chance: 0.4});
 
 drop.push({id: ItemID.energybullet, count: {min: 1, max: 20}, data: 0, separate: true, chance: 0.8});
 
 
 
GolemDeath.play();
 return drop;
 
}
});
RustyGolem.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnRustyGolem", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("RustyGolem", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn








IDRegistry.genItemID("SpawnGoldenGolem");
Item.createItem("SpawnGoldenGolem", "Призвать существо - Золотой Голем", {name: "SpawnGoldenGolem", data: 0});


var GoldenGolem = MobRegistry.registerEntity("GoldenGolem");
GoldenGolem.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/GoldenGolem.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Золотой Голем " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 
GolemDamage.play();
 
}
});

GoldenGolem.customizeDescription({
	getHealth: function(){
  return 150;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.goldendust, count: {min: 3, max: 4}, data: 0, separate: true, chance: 0.8});
 drop.push({id: 266, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.5});
 drop.push({id: 294, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 drop.push({id: ItemID.cometbanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.silvermoney, count: {min: 1, max: 2}, data: 0, separate: true, chance: 0.15});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 3, max: 4}, data: 0, separate: true, chance: 0.41});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.energybullet, count: {min: 1, max: 20}, data: 0, separate: true, chance: 0.8});
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 
 
 
GolemDeath.play();
 return drop;
 
}
});
GoldenGolem.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnGoldenGolem", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("GoldenGolem", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn












IDRegistry.genItemID("SpawnFakeChicken");
Item.createItem("SpawnFakeChicken", "Призвать существо - Лжекурица", {name: "SpawnFakeChicken", data: 0});


var FakeChicken = MobRegistry.registerEntity("FakeChicken");
FakeChicken.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 5);//render
 Entity.setSkin(this.entity, "mobs/FakeChicken.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();



//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 //PlaySoundFile("FakeChickenDamage.ogg");

 
}
});

FakeChicken.customizeDescription({
	getHealth: function(){
  return 20;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
// drop.push({id: ItemID.rustyingot, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.9});
drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});

var coords = Entity.getPosition(this.entity);

 Entity.spawnCustom("FakeChicken2", coords.x + .5, coords.y + 1, coords.z + .5);
//PlaySoundFile("FakeChickenDeath.ogg");
 return drop;
 
}
});
FakeChicken.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.2,
angular_speed: 0.2,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.2,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 8,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnFakeChicken", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("FakeChicken", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn






var FakeChicken2 = MobRegistry.registerEntity("FakeChicken2");
FakeChicken2.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 5);//render
 Entity.setSkin(this.entity, "mobs/FakeChicken2.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Лжекурица " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 //PlaySoundFile("FakeChickenDamage.ogg");

 
}
});

FakeChicken2.customizeDescription({
	getHealth: function(){
  return 15;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
drop.push({id: 366, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.9});

drop.push({id: ItemID.fakefeather, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.9});
 
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 2, max: 3}, data: 0, separate: true, chance: 0.2});
 
 
//PlaySoundFile("FakeChickenDeath.ogg");
 return drop;
 
}
});
FakeChicken2.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.4,
angular_speed: 0.4,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.4,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 15,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI








/*
IDRegistry.genItemID("SpawnTarantula");
Item.createItem("SpawnTarantula", "Призвать существо - Тарантул", {name: "SpawnTarantula", data: 0});


var Tarantula = MobRegistry.registerEntity("Tarantula");
Tarantula.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, Native.MobRenderType.creeper);//render
 Entity.setSkin(this.entity, "mobs/Tarantula.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Тарантул " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
//GolemDamage.play();
 
}
});

Tarantula.customizeDescription({
	getHealth: function(){
  return 50;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.jungleeye, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.8});
 drop.push({id: 287, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.7});
 drop.push({id: 375, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.7});
 
//GolemDeath.play();
 return drop;
 
}
});
Tarantula.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnTarantula", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Tarantula", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn


Callback.addCallback("tick", function()
{
    var pos = Player.getPosition()
    var vr = parseInt(rand * 61);
    var v = parseInt(rand * 61);
		pos = GenerationUtils.findSurface(pos.x-30.5+vr, pos.y, pos.z-30,5+v);
			if(World.getBlockID(pos.x, pos.y, pos.z) == 18 && World.getBlockData (pos.x, pos.y, pos.z) == 3){
	if(rand < .0006){
Entity.spawnCustom("Tarantula", pos.x+10, pos.y + 1, pos.z);
}
}
});
*/





IDRegistry.genItemID("SpawnForceZombie");
Item.createItem("SpawnForceZombie", "Призвать существо - Сильный Зомби", {name: "SpawnForceZombie", data: 0});


var ForceZombie = MobRegistry.registerEntity("ForceZombie");
ForceZombie.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/ForceZombie.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
//Entity.setNameTag(this.entity, "Тарантул " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
//GolemDamage.play();
 
}
});

ForceZombie.customizeDescription({
	getHealth: function(){
  return 50;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.DirtusSword, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 drop.push({id: 367, count: {min: 2, max: 5}, data: 0, separate: true, chance: 0.8});
 drop.push({id: 391, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.1});
 drop.push({id: 392, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.1});
 drop.push({id: 351, count: {min: 1, max: 1}, data: 14, separate: true, chance: 0.01});
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.silvermoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 2, max: 3}, data: 0, separate: true, chance: 0.4});
 
 
//GolemDeath.play();
 return drop;
 
}
});
ForceZombie.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnForceZombie", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("ForceZombie", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn








IDRegistry.genItemID("SpawnWildCreeper");
Item.createItem("SpawnWildCreeper", "Призвать существо - Дикий Крипер", {name: "SpawnWildCreeper", data: 0});


var WildCreeper = MobRegistry.registerEntity("WildCreeper");
WildCreeper.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/WildCreeper.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Дикий Крипер " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
//GolemDamage.play();
 
}
});

WildCreeper.customizeDescription({
	getHealth: function(){
  return 40;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.DirtusSword, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 drop.push({id: 397, count: {min: 1, max: 1}, data: 4, separate: true, chance: 0.15});
 drop.push({id: 289, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.8});
 drop.push({id: 263, count: {min: 1, max: 3}, data: 1, separate: true, chance: 0.5});
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.silvermoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 2, max: 3}, data: 0, separate: true, chance: 0.4});
 
 
//GolemDeath.play();
 return drop;
 
}
});
WildCreeper.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnWildCreeper", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("WildCreeper", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn













IDRegistry.genItemID("SpawnBows");
Item.createItem("SpawnBows", "Призвать существо - Бовс", {name: "SpawnBows", data: 0});


var Bows = MobRegistry.registerEntity("Bows");
Bows.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 8);//render
 Entity.setSkin(this.entity, "mobs/Bows.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Бовс " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
BowsDamage.play();
 
}
});

Bows.customizeDescription({
	getHealth: function(){
  return 40;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.icecrystal, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.5});
 drop.push({id: 79, count: {min: 2, max: 5}, data: 0, separate: true, chance: 0.8});
 drop.push({id: 332, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.1});
 
 drop.push({id: ItemID.SpawnEkatebrina, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.silvermoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 2, max: 3}, data: 0, separate: true, chance: 0.4});
 
BowsDeath.play();
 return drop;
 
}
});
Bows.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.5,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.5,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnBows", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Bows", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn









IDRegistry.genItemID("SpawnHotSavanna");
Item.createItem("SpawnHotSavanna", "Призвать существо - Горячий Савахха", {name: "SpawnHotSavanna", data: 0});


var HotSavanna = MobRegistry.registerEntity("HotSavanna");
HotSavanna.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 47);//render
 Entity.setSkin(this.entity, "mobs/HotSavanna.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Горячий Савахха " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
GolemDamage.play();
 
}
});

HotSavanna.customizeDescription({
	getHealth: function(){
  return 80;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.RyusukeSword, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 drop.push({id: 49, count: {min: 2, max: 5}, data: 0, separate: true, chance: 0.8});
 
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.silvermoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 2, max: 3}, data: 0, separate: true, chance: 0.4});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});
 
 
 
//GolemDeath.play();
 return drop;
 
}
});
HotSavanna.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.5,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.5,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnHotSavanna", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("HotSavanna", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn












IDRegistry.genItemID("SpawnEkatebrina");
Item.createItem("SpawnEkatebrina", "Призвать существо - Екатебрина", {name: "SpawnEkatebrina", data: 0});


var Ekatebrina = MobRegistry.registerEntity("Ekatebrina");
Ekatebrina.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/Ekatebrina.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Екатебрина " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 var pos = Entity.getPosition(this.entity);
 
 if(Math.random=0.4){
 	Entity.spawnCustom("Bows", pos.x, pos.y, pos.z);
 }
//GolemDamage.play();
 
}
});

Ekatebrina.customizeDescription({
	getHealth: function(){
  return 450;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.forceicecrystal, count: {min: 4, max: 5}, data: 0, separate: true, chance: 1});
 drop.push({id: ItemID.SpawnBows, count: {min: 1, max: 5}, data: 4, separate: true, chance: 1});
 
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.silvermoney, count: {min: 2, max: 3}, data: 0, separate: true, chance: 0.3});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 4, max: 6}, data: 0, separate: true, chance: 0.7});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 
 
 
//GolemDeath.play();
 return drop;
 
}
});
Ekatebrina.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnEkatebrina", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Ekatebrina", coords.x + .5, coords.y + 1, coords.z + .5);
 EkatebrinaTheme.play();
}); //spawn





IDRegistry.genItemID("SpawnMonsterWithWhiteEyes");
Item.createItem("SpawnMonsterWithWhiteEyes", "Призвать существо - Монстр с Белыми Глазами", {name: "SpawnMwWE", data: 0});


var MonsterWithWhiteEyes = MobRegistry.registerEntity("MonsterWithWhiteEyes");
MonsterWithWhiteEyes.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/MwWE.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Монстр с Белыми Глазами " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 

 
}
});

MonsterWithWhiteEyes.customizeDescription({
	getHealth: function(){
  return 300;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
drop.push({id: ItemID.brinathor, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});

drop.push({id: ItemID.silvermoney, count: {min: 4, max: 5}, data: 0, separate: true, chance: 1});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 6, max: 8}, data: 0, separate: true, chance: 1});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 
 

 return drop;
 
}
});
MonsterWithWhiteEyes.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.5,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 15,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnMonsterWithWhiteEyes", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("MonsterWithWhiteEyes", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn



















IDRegistry.genItemID("SpawnDarker");
Item.createItem("SpawnDarker", "Призвать существо - Потёмник", {name: "SpawnDarker", data: 0});


var Darker = MobRegistry.registerEntity("Darker");
Darker.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/Darker.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Потёмник " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 

 
}
});

Darker.customizeDescription({
	getHealth: function(){
  return 450;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
drop.push({id: ItemID.darkupgradekit, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
drop.push({id: ItemID.silvermoney, count: {min: 4, max: 5}, data: 0, separate: true, chance: 1});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 6, max: 8}, data: 0, separate: true, chance: 1});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});

 return drop;
 
}
});
Darker.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.5,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 15,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnDarker", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Darker", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn



















IDRegistry.genItemID("SpawnNightQween");
Item.createItem("SpawnNightQween", "Призвать существо - Королева Ночи", {name: "SpawnNightQween", data: 0});


var NightQween = MobRegistry.registerEntity("NightQween");
NightQween.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/NightQween.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Королева Ночи " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 
 var coords = Entity.getPosition(this.entity);
 
 if (Math.random > 0.4){
 Entity.spawnCustom("NightKnight", coords.x + .5, coords.y + 1, coords.z + .5);
 }
 if (Math.random > 0.4){
 Entity.spawnCustom("NightMage", coords.x + .5, coords.y + 1, coords.z + .5);
 }

 
}
});

NightQween.customizeDescription({
	getHealth: function(){
  return 500;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
drop.push({id: ItemID.nightmare, count: {min: 10, max: 23}, data: 0, separate: true, chance: 0.5});

drop.push({id: ItemID.SpawnNightQween, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.4});


drop.push({id: ItemID.silvermoney, count: {min: 3, max: 4}, data: 0, separate: true, chance: 0.4});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.7});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});

  var coords = Entity.getPosition(this.entity);
 World.setBlock(coords.x,coords.y,  coords.z, BlockID.blackbricks, 0);
 
 World.setBlock(coords.x-1, coords.y,  coords.z, BlockID.blackbricks, 0);
 World.setBlock(coords.x+1, coords.y,  coords.z, BlockID.blackbricks, 0);
 World.setBlock(coords.x,coords.y,  coords.z-1, BlockID.blackbricks, 0);
 World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.blackbricks, 0);
 
 World.setBlock(coords.x-1, coords.y,  coords.z-1, BlockID.redbricks, 0);
 World.setBlock(coords.x+1, coords.y,  coords.z+1, BlockID.redbricks, 0);
 World.setBlock(coords.x+1,coords.y,  coords.z-1, BlockID.redbricks, 0);
 World.setBlock(coords.x-1,coords.y,  coords.z+1, BlockID.redbricks, 0);
 
 
 
 World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.blackbricks, 0);
 
 World.setBlock(coords.x-1, coords.y+3,  coords.z, BlockID.blackbricks, 0);
 World.setBlock(coords.x+1, coords.y+3,  coords.z, BlockID.blackbricks, 0);
 World.setBlock(coords.x,coords.y+3,  coords.z-1, BlockID.blackbricks, 0);
 World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.blackbricks, 0);
 
 World.setBlock(coords.x-1, coords.y+3,  coords.z-1, BlockID.redbricks, 0);
 World.setBlock(coords.x+1, coords.y+3,  coords.z+1, BlockID.redbricks, 0);
 World.setBlock(coords.x+1,coords.y+3,  coords.z-1, BlockID.redbricks, 0);
 World.setBlock(coords.x-1,coords.y+3,  coords.z+1, BlockID.redbricks, 0);
 
 World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.purgatoriumportal, 0);
 World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.purgatoriumportal, 0);
 
 

 return drop;
 
}
});
NightQween.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.5,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 15,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnNightQween", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("NightQween", coords.x + .5, coords.y + 1, coords.z + .5);
 NightQweenTheme.play();
}); //spawn








IDRegistry.genItemID("SpawnNightMage");
Item.createItem("SpawnNightMage", "Призвать существо - Маг Ночи", {name: "SpawnNightMage", data: 0});


var NightMage = MobRegistry.registerEntity("NightMage");
NightMage.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 14);//render
 Entity.setSkin(this.entity, "mobs/NightMage.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Маг Ночи " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //soun
 
}
});

NightMage.customizeDescription({
	getHealth: function(){
  return 15;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
drop.push({id: ItemID.nightmare, count: {min: 2, max: 3}, data: 0, separate: true, chance: 0.3});


 drop.push({id: ItemID.silvermoney, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.2});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 2, max: 3}, data: 0, separate: true, chance: 0.4});
 
 

 return drop;
 
}
});
NightMage.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

shoot: {
     type: AdvancedAI.Shooting,//стрельба
   ammo_type: Native.EntityType.FIREBALL,//ентити которым стрелять
   shoot_speed: 35,//время в тиках через которое стрелять
   projectile_speed: 20,//скорость снаряда
   priority: 0
    },

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "shoot",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnNightMage", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("NightMage", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn








IDRegistry.genItemID("SpawnNightKnight");
Item.createItem("SpawnNightKnight", "Призвать существо - Рыцарь Ночи", {name: "SpawnNightKnight", data: 0});


var NightKnight = MobRegistry.registerEntity("NightKnight");
NightKnight.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/NightKnight.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Рыцарь Ночи " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 
 
 

 
}
});

NightKnight.customizeDescription({
	getHealth: function(){
  return 30;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
drop.push({id: ItemID.nightsword, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});


drop.push({id: ItemID.silvermoney, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.2});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 2, max: 3}, data: 0, separate: true, chance: 0.4});


 

 return drop;
 
}
});
NightKnight.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 5,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnNightKnight", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("NightKnight", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn















IDRegistry.genItemID("SpawnCometUnicorn");
Item.createItem("SpawnCometUnicorn", "Призвать существо - Единорог Комет", {name: "SpawnComet", data: 0});


var CometUnicorn = MobRegistry.registerEntity("CometUnicorn");
CometUnicorn.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 6);//render
 Entity.setSkin(this.entity, "mobs/CometUnicorn.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Единорог Комет " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

CometUnicorn.customizeDescription({
	getHealth: function(){
  return 100;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.dudlik, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.4});
 drop.push({id: ItemID.rainbowgun, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.3});
 

drop.push({id: ItemID.silvermoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.35});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 5, max: 8}, data: 0, separate: true, chance: 0.66});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 
 return drop;
 
}
});
CometUnicorn.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnCometUnicorn", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("CometUnicorn", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn


IDRegistry.genItemID("SpawnCometSlime");
Item.createItem("SpawnCometSlime", "Призвать существо - Небесный Слизень", {name: "SpawnComet", data: 0});


var CometSlime = MobRegistry.registerEntity("CometSlime");
CometSlime.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 2);//render
 Entity.setSkin(this.entity, "mobs/CometSlime.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Небесный Слизень " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

CometSlime.customizeDescription({
	getHealth: function(){
  return 140;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.minigun, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.3});
 drop.push({id: ItemID.aeroliteingot, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.7});
 
 drop.push({id: ItemID.silvermoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.35});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 5, max: 8}, data: 0, separate: true, chance: 0.66});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});

drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});

 return drop;
 
}
});
CometSlime.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnCometSlime", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("CometSlime", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn




IDRegistry.genItemID("SpawnCometBeetle");
Item.createItem("SpawnCometBeetle", "Призвать существо - Жук Комет", {name: "SpawnComet", data: 0});


var CometBeetle = MobRegistry.registerEntity("CometBeetle");
CometBeetle.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 10);//render
 Entity.setSkin(this.entity, "mobs/CometBeetle.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Жук Комет " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

CometBeetle.customizeDescription({
	getHealth: function(){
  return 170;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.rocketlauncher, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.25});
 
 drop.push({id: ItemID.silvermoney, count: {min: 2, max: 5}, data: 0, separate: true, chance: 0.3});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 4, max: 7}, data: 0, separate: true, chance: 0.6});
 
 drop.push({id: ItemID.evildust, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.6});

drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});

 return drop;
 
}
});
CometBeetle.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 15,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnCometBeetle", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("CometBeetle", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn







IDRegistry.genItemID("SpawnCometEnt");
Item.createItem("SpawnCometEnt", "Призвать существо - Энт Комет", {name: "SpawnCometEnt", data: 0});


var CometEnt = MobRegistry.registerEntity("CometEnt");
CometEnt.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/CometEnt.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Энт Комет " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 var pos = Entity.getPosition(this.entity);
 
 if(Math.random=0.4){
 	Entity.spawnCustom("CometBeetle", pos.x, pos.y, pos.z);
 }
 
 

 
}
});

CometEnt.customizeDescription({
	getHealth: function(){
  return 1616;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 
 drop.push({id: ItemID.silvermoney, count: {min: 4, max: 8}, data: 0, separate: true, chance: 0.3});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 6, max: 12}, data: 0, separate: true, chance: 0.6});
 
 drop.push({id: ItemID.evildust, count: {min: 5, max: 9}, data: 0, separate: true, chance: 1});
 
 drop.push({id: ItemID.gigathor, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});
 
 drop.push({id: ItemID.guardiansword, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.43});
 
 drop.push({id: ItemID.firegun, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.43});
 
 drop.push({id: ItemID.RedDrobovik, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.43});
 
 drop.push({id: ItemID.luxtarrbullet, count: {min: 32, max: 64}, data: 0, separate: true, chance: 0.9});
 
 drop.push({id: ItemID.energybullet, count: {min: 4, max: 32}, data: 0, separate: true, chance: 0.8});

drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});

 return drop;
 
}
});
CometEnt.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 15,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnCometEnt", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("CometEnt", coords.x + .5, coords.y + 1, coords.z + .5);
 CometEntTheme.play();
}); //spawn



Callback.addCallback("DestroyBlock", function (coords, block, player) {
var pos = Player.getPosition();
var item = Player.getCarriedItem();
if (block.id == BlockID.cometwood /*&& Math.random() == 0.5*/&& item.id == ItemID.evilaxe){
	Entity.spawnCustom("CometEnt", pos.x, pos.y, pos.z);
	CometEntTheme.play();
	}
});

















IDRegistry.genItemID("SpawnFat");
Item.createItem("SpawnFat", "Призвать существо - Толстый", {name: "SpawnPurgatory", data: 0});


var Fat = MobRegistry.registerEntity("Fat");
Fat.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 47);//render
 Entity.setSkin(this.entity, "mobs/Fat.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Толстый " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

Fat.customizeDescription({
	getHealth: function(){
  return 112;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.glitchspear, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.5});
 
 drop.push({id: ItemID.thornhelmet, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.124});
 drop.push({id: ItemID.thornchestplate, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.124});
 drop.push({id: ItemID.thornleggings, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.124});
 drop.push({id: ItemID.thornboots, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.124});
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 

drop.push({id: ItemID.silvermoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.35});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 5, max: 8}, data: 0, separate: true, chance: 0.66});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});
 
 return drop;
 
}
});
Fat.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 12,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnFat", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Fat", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn





IDRegistry.genItemID("SpawnTwoFaces");
Item.createItem("SpawnTwoFaces", "Призвать существо - Двуликий", {name: "SpawnPurgatory", data: 0});


var TwoFaces = MobRegistry.registerEntity("TwoFaces");
TwoFaces.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/TwoFaces.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Двуликий " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

TwoFaces.customizeDescription({
	getHealth: function(){
  return 112;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.skullcrossbow, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.5});
 
 
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});

drop.push({id: ItemID.silvermoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.35});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 5, max: 8}, data: 0, separate: true, chance: 0.66});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});
 
 return drop;
 
}
});
TwoFaces.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 6,
attack_range: 0.5,
attack_rate: 0.5
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnTwoFaces", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("TwoFaces", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn









IDRegistry.genItemID("SpawnThin");
Item.createItem("SpawnThin", "Призвать существо - Худой", {name: "SpawnPurgatory", data: 0});


var Thin = MobRegistry.registerEntity("Thin");
Thin.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 21);//render
 Entity.setSkin(this.entity, "mobs/Thin.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Худой " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

Thin.customizeDescription({
	getHealth: function(){
  return 112;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.beastupgradekit, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.5});
 
 
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 

drop.push({id: ItemID.silvermoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.35});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 5, max: 8}, data: 0, separate: true, chance: 0.66});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});
 
 return drop;
 
}
});
Thin.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 12,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnThin", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Thin", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn








IDRegistry.genItemID("SpawnPurgatoryBeast");
Item.createItem("SpawnPurgatoryBeast", "Призвать существо - Зверь Чистилища", {name: "SpawnPurgatory", data: 0});


var PurgatoryBeast = MobRegistry.registerEntity("PurgatoryBeast");
PurgatoryBeast.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 6);//render
 Entity.setSkin(this.entity, "mobs/PurgatoryBeast.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Зверь Чистилища " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

PurgatoryBeast.customizeDescription({
	getHealth: function(){
  return 130;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.beastupgradekit, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.5});
 
 
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 

drop.push({id: ItemID.silvermoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.35});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 5, max: 8}, data: 0, separate: true, chance: 0.66});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});
 
 return drop;
 
}
});
PurgatoryBeast.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.5,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.5,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 12,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnPurgatoryBeast", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("PurgatoryBeast", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn








IDRegistry.genItemID("SpawnPurgatoryWatcher");
Item.createItem("SpawnPurgatoryWatcher", "Призвать существо - Надзиратель", {name: "SpawnPurgatory", data: 0});


var PurgatoryWatcher = MobRegistry.registerEntity("PurgatoryWatcher");
PurgatoryWatcher.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 2);//render
 Entity.setSkin(this.entity, "mobs/PurgatoryWatcher.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Надзиратель " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

PurgatoryWatcher.customizeDescription({
	getHealth: function(){
  return 100;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.bloodstone, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.9});
 
 
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 

drop.push({id: ItemID.silvermoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.35});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 5, max: 8}, data: 0, separate: true, chance: 0.66});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});
 
 return drop;
 
}
});
PurgatoryWatcher.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

shoot: {
     type: AdvancedAI.Shooting,//стрельба
   ammo_type: Native.EntityType.FIREBALL,//ентити которым стрелять
   shoot_speed: 35,//время в тиках через которое стрелять
   projectile_speed: 20,//скорость снаряда
   priority: 0
    },

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "shoot",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnPurgatoryWatcher", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("PurgatoryWatcher", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn








IDRegistry.genItemID("SpawnPurgatoryPhantom");
Item.createItem("SpawnPurgatoryPhantom", "Призвать существо - Измученный Фантом", {name: "SpawnPurgatory", data: 0});


var PurgatoryPhantom = MobRegistry.registerEntity("PurgatoryPhantom");
PurgatoryPhantom.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 20);//render
 Entity.setSkin(this.entity, "mobs/PurgatoryPhantom.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Измученный Фантом " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

PurgatoryWatcher.customizeDescription({
	getHealth: function(){
  return 120;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.phantomsoul, count: {min: 2, max: 4}, data: 0, separate: true, chance: 1});
 
 
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 

drop.push({id: ItemID.silvermoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.35});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 5, max: 8}, data: 0, separate: true, chance: 0.66});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});
 
 return drop;
 
}
});
PurgatoryPhantom.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 12,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnPurgatoryPhantom", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("PurgatoryPhantom", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn








IDRegistry.genItemID("SpawnPurgatoryBeetle");
Item.createItem("SpawnPurgatoryBeetle", "Призвать существо - Жужжащее Создание", {name: "SpawnPurgatory", data: 0});


var PurgatoryBeetle = MobRegistry.registerEntity("PurgatoryBeetle");
PurgatoryBeetle.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 10);//render
 Entity.setSkin(this.entity, "mobs/PurgatoryBeetle.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Жужжащее Создание " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

PurgatoryBeetle.customizeDescription({
	getHealth: function(){
  return 112;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.agat, count: {min: 2, max: 4}, data: 0, separate: true, chance: 1});
 
 
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 

drop.push({id: ItemID.silvermoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.35});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 5, max: 8}, data: 0, separate: true, chance: 0.66});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});
 
 return drop;
 
}
});
PurgatoryBeetle.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 12,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnPurgatoryBeetle", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("PurgatoryBeetle", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn









IDRegistry.genItemID("SpawnFallenTitan");
Item.createItem("SpawnFallenTitan", "Призвать существо - Падший Титан", {name: "SpawnFallenTitan", data: 0});


var FallenTitan = MobRegistry.registerEntity("FallenTitan");
FallenTitan.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 47);//render
 Entity.setSkin(this.entity, "mobs/FallenTitan.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Падший Титан " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 var pos = Entity.getPosition(this.entity);
 
 if(Math.random=0.4){
 	Entity.spawnCustom("PurgatoryWatcher", pos.x, pos.y, pos.z);
 }
 if(Math.random=0.4){
 	Entity.spawnCustom("PurgatoryPhantom", pos.x, pos.y, pos.z);
 }
 
 if(Math.random=0.4){
 	Entity.spawnCustom("PurgatoryBeetle", pos.x, pos.y, pos.z);
 }
 
 
 

 
}
});

FallenTitan.customizeDescription({
	getHealth: function(){
  return 1666;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.undergroundsword, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.7});
 
 drop.push({id: ItemID.stonerifle, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.7});
 
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 

drop.push({id: ItemID.silvermoney, count: {min: 5, max: 10}, data: 0, separate: true, chance: 0.8});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 10, max: 15}, data: 0, separate: true, chance: 0.8});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 
 return drop;
 
}
});
FallenTitan.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 12,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnFallenTitan", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("FallenTitan", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

Item.registerUseFunction("ancientartephact", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("FallenTitan", coords.x + .5, coords.y + 1, coords.z + .5);
 PurgatoryTheme.play();
}); //spawn







IDRegistry.genItemID("SpawnSmooce");
Item.createItem("SpawnSmooce", "Призвать существо - Смуц", {name: "SpawnSmooce", data: 0});


var Smooce = MobRegistry.registerEntity("Smooce");
Smooce.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/Smooce.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Смуц " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 var pos = Entity.getPosition(this.entity);
 
 if(Math.random=0.4){
 	Entity.spawnCustom("PurgatoryPhantom", pos.x, pos.y, pos.z);
 }
 
 if(Math.random=0.4){
 	Entity.spawnCustom("PurgatoryBeetle", pos.x, pos.y, pos.z);
 }
 
 
 

 
}
});

Smooce.customizeDescription({
	getHealth: function(){
  return 850;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.arkenslansuroken, count: {min: 50, max: 64}, data: 0, separate: true, chance: 0.7});
 
 
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 

drop.push({id: ItemID.silvermoney, count: {min: 5, max: 10}, data: 0, separate: true, chance: 0.8});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 10, max: 15}, data: 0, separate: true, chance: 0.8});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 
 return drop;
 
}
});
Smooce.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.5,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.5,
rotateHead: true
},

shoot: {
     type: AdvancedAI.Shooting,//стрельба
   ammo_type: Native.EntityType.FIREBALL,//ентити которым стрелять
   shoot_speed: 35,//время в тиках через которое стрелять
   projectile_speed: 20,//скорость снаряда
   priority: 0//приоритет (??‽)
    },

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "shoot",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnSmooce", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Smooce", coords.x + .5, coords.y + 1, coords.z + .5);
 PurgatoryTheme.play();
}); //spawn








































