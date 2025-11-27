function random(min, max){
 return Math.floor(Math.random()*(max - min) + min);
}

var AdvancedAI = {
 EnemyWatcher: new EntityAIWatcher({
  execute: function() {
   if (World.getThreadTime()%this.params.find_delay==0){
    var attackAI = this.getAI(this.params.attackAI);
    var followAI = this.getAI(this.params.followAI);
    if (Entity.getDistanceToCoords(Player.get(), Entity.getPosition(this.entity)) <= this.params.feelingModifier){
     this.setPriority(this.params.attackAI, this.params.priority_on_attack);
     this.setPriority(this.params.followAI, this.params.priority_on_attack);

     attackAI.data.target = parseInt(Player.get());
     followAI.data.target = Player.getPosition();
    }
    else{
     this.setPriority(this.params.attackAI, this.params.priority_on_idle);
     this.setPriority(this.params.followAI, this.params.priority_on_idle);
     attackAI.data.target = null;
     followAI.data.target = null;
    }
   }
  },

  params: {

   attackAI: "attack",

   followAI: "follow",
 
   find_delay: 20,
 
   priority_on_attack: 5,

   priority_on_idle: 0,

   feelingModifier: 10
  }
 }),

 Shooting: new EntityAIClass({
  execute: function(){
   if (this.params.isQueue){
    if (World.getThreadTime()%this.params.queue_delay == 0 && !this.data.timer){
     this.data.timer = this.params.queue_length;
    }
    if (World.getThreadTime()%this.shoot_speed == 0 && this.data.timer){
     this.shoot(this.entity, this.params.ammo_type);
     this.data.timer--;
    }
   }
   else{
    if (World.getThreadTime()%this.params.shoot_speed == 0){
     this.shoot(this.entity, this.params.ammo_type);
    }
   }
  },

  params: {
   ammo_type: Native.EntityType.FIREBALL,

   shoot_speed: 20,

   isQueue: false,

   queue_length: 3,

   projectile_speed: 0.2,

   queue_delay: 40
  },

  shoot: function(attacker, ammo){
   var coords = Entity.getPosition(attacker);
   Entity.moveToAngle(Entity.spawn(coords.x, coords.y + 1, coords.z, ammo), Entity.getLookAngle(attacker), {speed: this.params.projectile_speed});
  }
 }),

 PhaseWatcher: new EntityAIWatcher({
  execute: function(){
   var i = 0;
   var phases = this.params.phases;
   if (phases && !this.data.inited){
    this.data.inited = true;
    this.data.phase = 0;
    this.data.timer = phases[0].time;
   }
   if (this.data.timer > 0){
    this.data.timer--;
    for (i = 0; i < phases[this.data.phase].ai.length; i++){
      var phase = phases[this.data.phase];
      this.setPriority(phase.ai[i], phase.priority);
    }
   }
   else if (phases) {
    for (i = 0; i < phases[this.data.phase].ai.length; i++){
      let phase = phases[this.data.phase];
      this.setPriority(phase.ai[i], phase.other_priority);
    }
    if (!phases[++this.data.phase]){
     this.data.phase = 0;
    }
    this.data.timer = phases[this.data.phase].time;
   }
  },

  params: {
   phases: []
  }
 }),

 Teleporting: new EntityAIClass({
  getDefaultPriority: function(){
   return -1;
  },

  execute: function(){
   if (World.getThreadTime()%this.params.teleport_delay==0){
    var player = Player.getPosition();
    var distance = Entity.getDistanceToCoords(parseInt(this.entity), player);
    if (distance <= this.params.dist_for_teleport){
     var potentialCoords = {x: player.x + random(-(distance/2), distance/2), y: player.y + 1, z: player.z + random(-(distance/2), distance/2)};
     var blockID = World.getBlockID(potentialCoords.x, potentialCoords.y, potentialCoords.z);
     if (GenerationUtils.isTransparentBlock(blockID)) {Entity.setPosition(this.entity, potentialCoords); 
        Game.message("Teleported to " + Entity.getDistanceBetweenCoords(player, potentialCoords) + " blocks at player");
    }
    }
   }
  },

  params: {
   teleport_delay: 30,
   
   dist_for_teleport: 50
  }
 }),

 PlayerWatcher: new EntityAIWatcher({
  execute: function(){
   var ais = this.params.ai;
   if (ais){
    for (var i = 0; i < ais.length; i++){
     let ai = this.getAI(ais[i]);
     if (ais[i].search(/follow/) != -1){
      ai.data.targetEntity = parseInt(Player.get());
      }
     else {
      ai.data.target = parseInt(Player.get());
     }
    }
   }
  },

  params: {
   ai: []
  }
 }),

 Summoning: new EntityAIClass({
  execute: function(){
   if (World.getThreadTime()%this.params.summon_delay==0){
    var coords = Entity.getPosition(this.entity);
    coords = {x: coords.x + random(-3, 3), y: coords.y + random(-3, 3), z: coords.z + random(-3, 3)};
    var area = this.params.spawn_area;
    if (typeof this.params.entity == "string"){
     Entity.spawnCustom(this.params.entity, coords.x, coords.y, coords.z);
    }
    else {
     Entity.spawn(coords.x, coords.y, coords.z, this.params.entity);
    }
   }
  },

  params: {
   entity: Native.EntityType.ZOMBIE,

   spawn_area: 2,

   summon_delay: 30
  }
 }),

 Guarding: new EntityAIWatcher({
  execute: function() {
   if (World.getThreadTime()%this.params.find_delay==0){
    var coords = Entity.getPosition(this.entity);
    var attackAI = this.getAI(this.params.attackAI);
    var followAI = this.getAI(this.params.followAI);
    var target = findTarget(coords.x, coords.y, coords.z, this.params.feelingModifier);
    if (target){
     this.setPriority(this.params.attackAI, this.params.priority_on_attack);
     this.setPriority(this.params.followAI, this.params.priority_on_attack);

     attackAI.data.target = parseInt(target);
     followAI.data.target = Entity.getPosition(target);
    }
    else{
     this.setPriority(this.params.attackAI, this.params.priority_on_idle);
     this.setPriority(this.params.followAI, this.params.priority_on_idle);
     attackAI.data.target = null;
     followAI.data.target = null;
    }
   }
  },
  params: {

   attackAI: "attack",

   followAI: "follow",
 
   find_delay: 50,
 
   priority_on_attack: 5,

   priority_on_idle: 0,

   feelingModifier: 10
  }
 }),

 Lifetimer: new EntityAIClass({
  getDefaultPriority: function(){
   return -1;
  },

  execute: function(){
   if (World.getThreadTime()%this.params.damageTimer==0 && Entity.getHealth(this.entity) > 0){
    Entity.setHealth(this.entity, Entity.getHealth(this.entity) - 1);
   }
  },

  params: {
   damageTimer: 60
  }
 })
};

var Bloodmag = MobRegistry.registerEntity("Bloodmag");
 
   Bloodmag.customizeAI({
 getAITypes: function(){
  return {
"summonhunter": {
  type: AdvancedAI.Summoning,
    entity: "bloodhunter",
    spawn_area: 2,
    summon_delay: 100
 },
   "summonbone": {
    type: AdvancedAI.Summoning,
    entity: "bloodbon",
    spawn_area: 2,
    summon_delay: 100
    },
    
  "attack_s": {
     type: EntityAI.Attack,

     priority: 0,

     attack_damage: 2,

     attack_range: 10,

     attack_rate: 200
    },

   player_watcher: {
     type: AdvancedAI.PlayerWatcher,

     ai: ["attack_s"]
    },

 phase_watcher: {
     type: AdvancedAI.PhaseWatcher,
     phases: [
  
      {ai: ["summonbone, summonhunter"], priority: 5, other_priority: 0, time: 700}
   ]
  }
 };
}
});

Bloodmag.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 3);
  Entity.setSkin(this.entity, "mob/bloodmag.png");
 }
});

Bloodmag.customizeDescription({
getHealth: function(){
  return 450;},

 getDrop: function(){
  var drop = [
  {id: ItemID.bloodsword, count: 1, data: 0, separate: true, chance: 1},
  {id: ItemID.bloodknife, count: 32, data: 0, separate: true, chance: 1},
  {id: ItemID.bonesword, count: 1, data: 0, separate: true, chance: 1},
  {id: ItemID.bloodpickaxe, count: 1, data: 0, separate: true, chance: 1}];
  return [drop[Math.floor(Math.random()*(drop.length))], {id: ItemID.bloodskale, count: {min: 1, max: 7}, data: 0, separate: true, chance: 1}];
 },

 getHitbox: function(){
  return {w: 1, h: 2}
 }
});

IDRegistry.genItemID("amulet_o");
Item.createItem("amulet_o", "Blood Amulet", {name: "amulet_blood", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.amulet_o, count: 1, data: 0}, [
 "ctc",
 "tbt",
 "ctc"
], ["b", ItemID.skull, 0, "c", 49, 0, "t", ItemID.darkshard, 0]);

Item.registerUseFunctionForID(ItemID.amulet_o, function(coords, item, block){ 
Game.message(Native.Color.DARK_RED + "It belongs to me!");

 Player.decreaseCarriedItem(1);
 coords = coords.relative;
 Entity.spawnCustom("Bloodmag", coords.x + 1, coords.y + .5, coords.z + .5);
});

