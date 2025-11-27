importLib("AdvancedAI", "*");
importLib("SoundAPI","*");


//Callback.addCallback("PlayerAttack", function (player, victim) {
//Game.message("hp"+Entity.getRender (victim));
//});







IDRegistry.genItemID("MudCube");
Item.createItem("MudCube", "Spawn MudCube", {name: "MudCube", data: 0});


IDRegistry.genItemID("SpawnMudMonster");
Item.createItem("SpawnMudMonster", "Spawn Rooting Swamp", {name: "SpawnMudMonster", data: 0});


IDRegistry.genItemID("SpawnReaper");
Item.createItem("SpawnReaper", "Spawn Reaper", {name: "SpawnReaper", data: 0});

IDRegistry.genItemID("SpawnAncientGolem");
Item.createItem("SpawnAncientGolem", "Spawn Ancient Golem", {name: "SpawnAncientGolem", data: 0});
/*
IDRegistry.genItemID("SpawnMudCow");
Item.createItem("SpawnMudCow", "Spawn Mud Cow", {name: "SpawnMudCow", data: 0});

IDRegistry.genItemID("SpawnSlimePig");
Item.createItem("SpawnSlimePig", "Spawn Slime Pig", {name: "SpawnSlimePig", data: 0});

IDRegistry.genItemID("SpawnFox");
Item.createItem("SpawnFox", "Spawn Fox", {name: "SpawnFox", data: 0});

IDRegistry.genItemID("SpawnTamedFox");
Item.createItem("SpawnTamedFox", "Spawn Tamed Fox", {name: "SpawnTamedFox", data: 0});
*/










var MudCube = MobRegistry.registerEntity("MudCube");
MudCube.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 2);//render
 Entity.setSkin(this.entity, "mobs/mudcube.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
}
});

MudCube.customizeDescription({
	getHealth: function(){
  return 40;},
	
 getHitbox: function(){
 return {w: 1, h: 1}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.oltorf, count: {min: 1, max: 3}, data: 0, separate: true, chance: 1});
 
 drop.push({id: ItemID.MudMonster, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.5});

 return drop;
 
}
});
MudCube.customizeAI({
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
attack_damage: 20,
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
Item.registerUseFunction("MudCube", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("MudCube", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

 var MudCube
 
Callback.addCallback("tick", function()
{
    var pos = Player.getPosition()
    var vr = parseInt(Math.random() * 61);
    var v = parseInt(Math.random() * 61);
		pos = GenerationUtils.findSurface(pos.x-30.5+vr, pos.y, pos.z-30,5+v);
			if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.olgrass){
	if(Math.random() < .0006){
Entity.spawnCustom("MudCube", pos.x, pos.y + 1, pos.z);
}
}
});


MudCube.allowNaturalDespawn()




IDRegistry.genItemID("MudMonster");
Item.createItem("MudMonster", "Nasty slime", {name: "MudMonster", data: 0});

var MudMonster = MobRegistry.registerEntity("MudMonster");
MudMonster.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 47);//render
 Entity.setSkin(this.entity, "mobs/MudMonster.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Rooten Swamp " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 if(Math.random() < 0.5){
 	var coords = Entity.getPosition(this.entity);
 	Entity.spawnCustom("MudCube", coords.x + .5, coords.y + 1, coords.z + .5);
 }
 
}
});

MudMonster.customizeDescription({
	getHealth: function(){
  return 400;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.oltorf, count: {min: 3, max: 5}, data: 0, separate: true, chance: 1});
 drop.push({id: ItemID.orihalk, count: {min: 3, max: 5}, data: 0, separate: true, chance: 1});
 drop.push({id: ItemID.hpup7, count: {min: 1, max: 2}, data: 0, separate: true, chance: 1});
 drop.push({id: ItemID.eyeofswamp, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.9});
 drop.push({id: ItemID.monsterheart, count: {min: 1, max: 2}, data: 0, separate: true, chance: 0.9});
 drop.push({id: ItemID.voidshard, count: {min: 2, max: 5}, data: 0, separate: true, chance: 0.8});
 drop.push({id: ItemID.strangeskull, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.9});

 return drop;
 
}
});
MudMonster.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.1,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 24,
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
Item.registerUseFunction("MudMonster", function(coords, item, block){
 var coords = coords.relative;
 if (block.id === BlockID.swampaltar){
 Entity.spawnCustom("MudMonster", coords.x + .5, coords.y + 1, coords.z + .5);
 Game.message("Called up Rooten Swamp");
 PlaySoundFile("RootenSwampTheme.ogg");
 }
}); //spawn


Item.registerUseFunction("SpawnMudMonster", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("MudMonster", coords.x + .5, coords.y + 1, coords.z + .5);
 Game.message("Called up Rooten Swamp");
 PlaySoundFile("RootenSwampTheme.ogg");
}); //spawn












var Reaper = MobRegistry.registerEntity("Reaper");
Reaper.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/Reaper.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Reaper " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 if(Math.random() < 0.5){
 	var coords = Entity.getPosition(this.entity);
 //	Entity.spawnCustom("MudCube", coords.x + .5, coords.y + 1, coords.z + .5);
 Entity.spawn (coords.x + .5, coords.y + 1, coords.z + .5, 34) 
 }
 
}
});

Reaper.customizeDescription({
	getHealth: function(){
  return 600;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.hpup7, count: {min: 2, max: 4}, data: 0, separate: true, chance: 1});
 drop.push({id: ItemID.voidshard, count: {min: 4, max: 10}, data: 0, separate: true, chance: 0.8});
 drop.push({id: ItemID.reapersword, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 drop.push({id: ItemID.reaperchestplate, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 drop.push({id: BlockID.keyblock, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});

 return drop;
 
}
});
Reaper.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.1,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 28,
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


Item.registerUseFunction("SpawnReaper", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Reaper", coords.x + .5, coords.y + 1, coords.z + .5);
 Game.message("The Reaper has come for you soul!");
 PlaySoundFile("ReaperTheme.ogg");
}); //spawn



TileEntity.registerPrototype(BlockID.skullblock, {
 
 tick: function(){
  var wgd = World.getBlock;
  
        var wgd1 = wgd(this.x,this.y-2,this.z);
        var wgd2 = wgd(this.x,this.y-1,this.z);
var blc1 = wgd1.id== BlockID.olobsidian;
var blc2 = wgd2.id== BlockID.olobsidian;

 if(blc1 && blc2){
  World.setBlock(this.x, this.y, this.z, 0);
  World.setBlock(this.x, this.y-1, this.z, 0);
  World.setBlock(this.x, this.y-2, this.z, 0);
  Entity.spawnCustom("Reaper", this.x + .5, this.y + 1, this.z + .5);
  Game.message("The Reaper has come for you soul!");
 PlaySoundFile("ReaperTheme.ogg");
  }
 }
});







var AncientGolem = MobRegistry.registerEntity("AncientGolem");
AncientGolem.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/AncientGolem.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "AncientGolem " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 if(Math.random() < 0.5){
 	var coords = Entity.getPosition(this.entity);
 //	Entity.spawnCustom("MudCube", coords.x + .5, coords.y + 1, coords.z + .5);
 Entity.spawn (coords.x + .5, coords.y + 1, coords.z + .5, 34) 
 }
 
}
});

AncientGolem.customizeDescription({
	getHealth: function(){
  return 800;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.lat, count: {min: 5, max: 20}, data: 0, separate: true, chance: 1});
 drop.push({id: ItemID.voidshard, count: {min: 4, max: 10}, data: 0, separate: true, chance: 0.8});
 drop.push({id: ItemID.ancientsword, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});

 return drop;
 
}
});
AncientGolem.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.1,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 30,
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


Item.registerUseFunction("SpawnAncientGolem", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("AncientGolem", coords.x + .5, coords.y + 1, coords.z + .5);
 Game.message("The Ancient Golem has awakened!");
 PlaySoundFile("AncientGolemTheme.ogg");
}); //spawn


Item.registerUseFunction("swampkey", function(coords, item, block){
 var coords = coords.relative;
 if (block.id === BlockID.ancientaltar){
 Entity.spawnCustom("AncientGolem", coords.x + .5, coords.y + 1, coords.z + .5);
 Game.message("The Ancient Golem has awakened!");
PlaySoundFile("AncientGolemTheme.ogg");
 }
}); //spawn


/*
var MudCow = MobRegistry.registerEntity("MudCow");
MudCow.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 6);
 Entity.setSkin(this.entity, "mobs/MudCow.png");
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
},
attackedBy: function(attacker, amount){

}
});
MudCow.customizeDescription({
	getHealth: function(){
  return 20;},
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
  drop.push({id: ItemID.oltorf, count: {min: 2, max: 3}, data: 0, separate: true, chance: 1});
 return drop;
 }
});
MudCow.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.1,
delay_weigth: 0.2
},
enemy_watcher: {
type: AdvancedAI.EnemyWatcher,
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});
Item.registerUseFunction("SpawnMudCow", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("MudCow", coords.x + .5, coords.y + 1, coords.z + .5);
}); 




var SlimePig = MobRegistry.registerEntity("SlimePig");
SlimePig.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 6);
 Entity.setSkin(this.entity, "mobs/SlimePig.png");
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
},
attackedBy: function(attacker, amount){

}
});
SlimePig.customizeDescription({
	getHealth: function(){
  return 18;},
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
  drop.push({id: ItemID.oltorf, count: {min: 2, max: 3}, data: 0, separate: true, chance: 1});
 return drop;
 }
});
SlimePig.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.1,
delay_weigth: 0.2
},
enemy_watcher: {
type: AdvancedAI.EnemyWatcher,
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});
Item.registerUseFunction("SpawnSlimePig", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("SlimePig", coords.x + .5, coords.y + 1, coords.z + .5);
}); 




var Fox = MobRegistry.registerEntity("Fox");
Fox.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 6);
 Entity.setSkin(this.entity, "mobs/Fox.png");
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
 return drop;
 }
});
Fox.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.1,
delay_weigth: 0.2
},
enemy_watcher: {
type: AdvancedAI.EnemyWatcher,
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




var TamedFox = MobRegistry.registerEntity("TamedFox");
TamedFox.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 6);
 Entity.setSkin(this.entity, "mobs/Fox.png");
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
  drop.push({id: ItemID.SpawnTamedFox, count: {min: 2, max: 3}, data: 0, separate: true, chance: 1});
 return drop;
 }
});
TamedFox.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.1,
rotateHead: true
},


priority: 4,
speed: 0.1,
angular_speed: 0.1,
delay_weigth: 0.2
},


enemy_watcher: {
type: AdvancedAI.EnemyWatcher,
followAI:"follow",
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
*/



/*
var MudCow = MobRegistry.registerEntity("MudCow");
MudCow.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 6);
 Entity.setSkin(this.entity, "mobs/MudCow.png");
 });
MudCow.customizeDescription({
{
   getHitbox: function() {
      return {
         w: 1,
         h: 1
      }; 
   },
   getHealth: function() { return 40; 
   },
//  getDrop: function(attacker) { return dropArray; 
//   }
}
});
*/


































