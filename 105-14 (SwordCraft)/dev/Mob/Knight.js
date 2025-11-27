var entityTypeDKnight = MobRegistry.registerEntity("DKnight"); 
//яйцо спавна 
IDRegistry.genItemID("SalamanderSEgg"); 
Item.createItem("SalamanderSEgg", "Salamander Egg", {name: "SalamanderSEgg", meta: 0},{isTech:false,stack: 64}); 
//внешний вид... 
var DKnight_model = new EntityModel(); 
entityTypeDKnight.customizeEvents({ 
tick: function(){ 
var DKnight_texture = new Texture("mob/DKnight.png"); 
Entity.setRender(this.entity, 16);
DKnight_texture.setResolution(180, 180); 
DKnight_texture.setPixelScale(4); 
DKnight_model.setTexture(DKnight_texture); 
Entity.setSkin(this.entity, "mob/DKnight.png");
 }
});
//анимация и рендер
//хитбокс
entityTypeDKnight.customizeDescription({ 
getHitbox: function() { 
return { 
w: 2, 
h: 4
}; 
} 
}); 

//спавн яйцом 
Item.registerUseFunctionForID(ItemID.SalamanderSEgg, function(coords, item, block) { 
coords = coords.relative; 
Entity.spawnCustom("DKnight", coords.x + .5, coords.y + .5, coords.z + .5); 
}); 

entityTypeDKnight.customizeAI({ 
 getAITypes: function(){ 
 return { 
 wander: { 
 type: EntityAI.Wander, 
 
 priority: 4, 
 
 speed: 0.078, 
 
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
 
 attack_damage: 4, 
 
 attack_range: 1, 
 
 attack_rate: 30 
 } 
 }; 
 } 
}); 
