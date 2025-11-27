var bloodbon = MobRegistry.registerEntity("bloodbon");
bloodbon.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 21);
  Entity.setSkin(this.entity, "mob/bloodbone.png");
  Entity.setNameTag(this.entity, "Blood Bones: " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());
 }
});
  bloodbon.customizeAI({
 getAITypes: function(){
  return {
  "attack": {
     type: EntityAI.Attack,

     priority: 0,

     attack_damage: 1,

     attack_range: 1,

     attack_rate: 100
    },
follow: {
     type: EntityAI.Follow,

     priority: 0,

     speed: 0.2,

     rotateHead: true
    },

   player_watcher: {
     type: AdvancedAI.PlayerWatcher,

     ai: ["follow", "attack"]
    }
 };
}
});

bloodbon.customizeDescription({
getHealth: function(){
  return 7;},
getDrop: function(){
 return [ {id: ItemID.bloodbone, count: {min: 0, max: 	0}, data: 0, separate: true, chance: .6}];
 },
});


var bloodhunter = MobRegistry.registerEntity("bloodhunter");
bloodhunter.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 23);
  Entity.setSkin(this.entity, "mob/bloodhunter.png");
  Entity.setNameTag(this.entity, "Blood Hunter: " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());
 }
});
  bloodhunter.customizeAI({
 getAITypes: function(){
  return {
  "attack": {
     type: EntityAI.Attack,

     priority: 0,

     attack_damage: 3,

     attack_range: 1,

     attack_rate: 150
    },
follow: {
     type: EntityAI.Follow,

     priority: 0,

     speed: 0.3,

     rotateHead: true
    },

   player_watcher: {
     type: AdvancedAI.PlayerWatcher,

     ai: ["follow", "attack"]
    }
 };
}
});

bloodhunter.customizeDescription({
getHealth: function(){
  return 15;},
getDrop: function(){
 return [ {id: ItemID.bloodskale, count: {min: 0, max: 	0}, data: 0, separate: true, chance: .6}];
 },
});


var bloodpig = MobRegistry.registerEntity("bloodpig");
bloodpig.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 6);
  Entity.setSkin(this.entity, "images/mob/bloodpig.png");
  Entity.setNameTag(this.entity, "It's a Life! : " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());
  Entity.addEffect(Player.get(), Native.PotionEffect.poison, 100, 3, true, false);
 }
});
  bloodpig.customizeAI({
 getAITypes: function(){
  return {
  "attack": {
     type: EntityAI.Attack,

     priority: 0,

     attack_damage: 1,

     attack_range: 2,

     attack_rate: 400
    },
follow: {
     type: EntityAI.Follow,

     priority: 0,

     speed: 0.1,

     rotateHead: true
    },

   player_watcher: {
     type: AdvancedAI.PlayerWatcher,

     ai: ["follow", "attack"]
    }
 };
}
});

bloodpig.customizeDescription({
getHealth: function(){
  return 45;},
getDrop: function(){
 return [ {id: ItemID.fleshg, count: {min: 0, max: 	0}, data: 0, separate: true, chance: .6}];
 },
});