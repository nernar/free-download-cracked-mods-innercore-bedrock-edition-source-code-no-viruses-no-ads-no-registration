var entityTypeSoules = MobRegistry.registerEntity("Soules"); 
//внешний вид... 
var Soules_model = new EntityModel(); 
entityTypeSoules.customizeEvents({ 
tick: function(){ 
var Soules_texture = new Texture("mob/Soulesegg.png"); 
Entity.setRender(this.entity, 3);
Soules_texture.setResolution(128, 64); 
Soules_texture.setPixelScale(1); 
Soules_model.setTexture(Soules_texture); 
Entity.setSkin(this.entity, "mob/Soules.png");
      var position = Entity.getPosition(this.entity); 
Particles.addParticle(position.x, position.y + .5, position.z, Native.ParticleType.flame, 0, 0.1, 0);
Entity.setMaxHealth(this.entity, 10);},
loaded: function() {Entity.setTarget(this.entity, 38, 36, 33, 43, 34, 32, 16);
}
});
//анимация и рендер
//хитбокс
entityTypeSoules.customizeDescription({ 
getHitbox: function() { 
return { 
w: 2, 
h: 4
}; 
} 
}); 


entityTypeSoules.customizeAI({ 
 getAITypes: function(){ 
 return { 
 wander: { 
 type: EntityAI.Wander, 
 
 priority: 5, 
 
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
 
 attack_damage: 2, 
 
 attack_range: 1, 
 
 attack_rate: 30 
 } 
 }; 
 } 
}); 
