var Spore_Creeper = MobRegistry.registerEntity("spore_creeper");

Spore_Creeper.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 24);
  Entity.setSkin(this.entity, "mob/spore_creeper.png");
  Entity.setNameTag(this.entity, "Spore Creeper");
  Entity.setMaxHealth(this.entity, 20);
 },
death: function(){
//AdvancedAI.addExpAtEntity(this.entity, 6);
 },
getDrop: function(){
var RANDOM_DROP_SC = randomInt(0,4);
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, ItemID.HideBl, RANDOM_DROP_SC);
 },
 attackedBy: function(attacker, amount){
//World.playSoundAtEntity(this.entity, "mob.creeper.say1", 1, 1);
 }
});

Spore_Creeper.customizeDescription({
  getHitbox: function(){
  return {w: 1, h: 2}
 }
});

Spore_Creeper.customizeAI({
 getAITypes: function(){
  return {
    wander: {
     type: EntityAI.Wander,

     priority: 4,

     speed: 0.080,

     angular_speed: 0.1,

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

     attack_rate: 32
    },
    enemy_watcher: {
     type: AdvancedAI.EnemyWatcher,
     
     attackAI: "attack",
     
     followAI: "follow",
     
     find_delay: 20,
     
     priority_on_attack: 5,
     
     priority_on_idle: 0,
     
     feelingModifier: 18 
    }
  }
 }
});

//spawn from egg
Item.registerUseFunctionForID(ItemID.SporeCreeperEgg, function(coords, item, block) {
coords = coords.relative;
Entity.spawnCustom("spore_creeper", coords.x + .5, coords.y + .5, coords.z + .5);
});


IDRegistry.genItemID("BowmanEgg");
Item.createItem("BowmanEgg", "Bowman Egg", {name: "SporeCreeperEgg", meta: 0},{isTech:false,stack: 64});

var SurvivedBowman = MobRegistry.registerEntity("survivorbow");
SurvivedBowman.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 3);//render
  Entity.setSkin(this.entity, "mob/survivor/survived.png");//skin
  Entity.setNameTag(this.entity,"Bowman");//name
  Entity.setCarriedItem(this.entity, 261, 1, 0);//лук в руках
  Entity.setArmorSlot(this.entity, 0, 306, 1, 0);//шлем железный
 },
death: function(){
//AdvancedAI.addExpAtEntity(this.entity, 5);
 },
getDrop: function(){
var r = randomInt(0,1);
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 261, r);
},
attackedBy: function(attacker, amount){
//World.playSoundAtEntity(this.entity, "mob.creeper.say1", 1, 1); ne rabotaet
 }
});

SurvivedBowman.customizeDescription({
  getHitbox: function(){
  return {w: 1, h: 2}
 }
});//hitbox

SurvivedBowman.customizeAI({
getAITypes: function(){ 
return { 
wander: { 
type: EntityAI.Wander, 

priority: 4,
 
speed: 0.09,
 
angular_speed: 0.1, 

delay_weigth: 0.2 
}, 

follow: { 
type: EntityAI.Follow,
 
priority: 0, 

speed: 0.05,
 
rotateHead: true 
}, 

shoot: {
     type: AdvancedAI.Shooting,//стрельба
     
   ammo_type: Native.EntityType.ARROW,//ентити которым стрелять
   
   shoot_speed: 35,//время в тиках через которое стрелять
   
   projectile_speed: 0.2,//скорость снаряда
   priority: 0
    },/*
swim: { 
type: EntityAI.Swim,//собственно плавание 
}*/   
    enemy_watcher: {
     type: AdvancedAI.EnemyWatcher,
     
     attackAI: "shoot",//название атаки поменялось на стрельбу
     
     followAI: "follow",
     
     find_delay: 20,
     
     priority_on_attack: 5,
     
     priority_on_idle: 0,
     
     feelingModifier: 18 
   } 
} 
} 
});//AI

Item.registerUseFunctionForID(ItemID.BowmanEgg, function(coords, item, block) {
coords = coords.relative;
Entity.spawnCustom("survivorbow", coords.x + .5, coords.y + .5, coords.z + .5);//спавн лучника
});