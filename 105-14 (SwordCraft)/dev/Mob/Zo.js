importLib("AdvancedAI", "*");
var Fenrir = MobRegistry.registerEntity("Fenrir"); 
 
Fenrir.customizeEvents({ 
 tick: function(){ 
 Entity.setRender(this.entity, 11);
Entity.setTarget(this.entity, 63);
 Entity.setSkin(this.entity, "mob/FenrirSK.png");

 }, 
 attackedBy: function(attacker, amount){ 
 World.playSoundAtEntity(this.entity, "mob.endermen.hit2", 1, 1); 
 } 
}); 
 
Fenrir.customizeDescription({ getHitbox: function(){ 
 return {w: 2, h: 1} 
 }});
 


IDRegistry.genItemID("SalnderSEgg"); 
Item.createItem("SalnderSEgg", "Salamander Egg", {name: "SalamanderSEgg", meta: 0},{isTech:false,stack: 64}); 
Item.registerUseFunctionForID(ItemID.SalnderSEgg, function(coords, item, block) { 
coords = coords.relative; 
Entity.spawnCustom("Fenrir", coords.x + .5, coords.y + .5, coords.z + .5); 
}); 
Fenrir.customizeAI({ 
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
 
 speed: 0.3, 
 
 rotateHead: true 
 }, 
 
 attack: { 
 type: EntityAI.Attack, 
 
 priority: 0, 
 
 attack_damage: 7, 
 
 attack_range: 1, 
 
 attack_rate: 30 
 } 
 }; 
 } 
}); 
