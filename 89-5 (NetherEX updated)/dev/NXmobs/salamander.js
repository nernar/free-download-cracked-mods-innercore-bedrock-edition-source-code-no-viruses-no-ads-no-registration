importLib("AdvancedAI", "*");
var RANDOM_DROP_SB = randomInt(0,3);
var RANDOM_DROP_SO = randomInt(0,3);
//а вот и айди саламандры
var BlackSalamander = MobRegistry.registerEntity("salamander_black");
//яйцо спавна
//внешний вид...
var black_salamander_model = new EntityModel();
BlackSalamander.customizeEvents({
tick: function(){
var black_salamander_texture = new Texture("mob/salamander/salamander_black.png");
black_salamander_texture.setResolution(128, 64);
black_salamander_texture.setPixelScale(2);
black_salamander_model.setTexture(black_salamander_texture);
Entity.setSkin(this.entity, "mob/salamander/salamander_black.png");
Entity.setNameTag(this.entity, "INCOMPLETED");
Entity.setMaxHealth(this.entity, 20);
},
death: function(){
 },
getDrop: function(){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, ItemID.HideBl, RANDOM_DROP_SB);
},
attackedBy: function(attacker, amount){
//World.playSoundAtEntity(this.entity, "mob.creeper.say1", 1, 1);//звук получения урона как у крипера
}
});
//анимация и рендер
black_salamander_model.createAnimation(16, function(frame) {
var render = new Render();
var partObj = [
{
type: "box",
coords: {
x: 0,
y: 18.5,
z: 8
},
size: {
x: 6,
y: 4,
z: 8
},
uv: {
x: 0,
y: 0
}
}, //голова
{
type: "box",
coords: {
x: 2.5,
y: 21,
z: 11.5
},
size: {
x: 1,
y: 1,
z: 1
},
uv: {
x: 0,
y: 54
}
},//правый зуб
{
type: "box",
coords: {
x: - 2.5,
y: 21,
z: 11.5
},
size: {
x: 1,
y: 1,
z: 1
},
uv: {
x: 0,
y: 54
}
},//левый зуб
{
type: "box",
coords: {
x: 0,
y: 22.5,
z: 8.5
},
size: {
x: 8,
y: 2.5,
z: 9
},
uv: {
x: 0,
y: 19
},
},//пасть
{
type: "box",
coords: {
x: 0,
y: 19.75,
z: - 3
},
size: {
x: 12,
y: 8,
z: 14
},
uv: {
x: 33,
y: 0
},
},//верхнее тело
{
type: "box",
coords: {
x: 0,
y: 19.5,
z: - 15
},
size: {
x: 10,
y: 6,
z: 10
},
uv: {
x: 0,
y: 0
},
},//нижнее тело
{
type: "box",
coords: {
x: 0,
y: 19.5,
z: - 25
},
size: {
x: 7.5,
y: 3.5,
z: 10
},
uv: {
x: 91,
y: 33
},
},//хвост
];
var position = Math.sin(frame / 16 * Math.PI * 2);
for (var i = 0; i < 1; i++) {
partObj.push({
type: "box",
size: {
x: 4,
y: 7,
z: 4 - i
},
uv: {
x: 0,
y: 37
},
coords: {
x: 8,
y: position * i + 20.65,
z: 0
}
}); //передняя правая лапка
partObj.push({
type: "box",
size: {
x: 4,
y: 7,
z: 4 - i
},
uv: {
x: 0,
y: 37
},
coords: {
x: - 8,
y: position * i + 20.65,
z: 0
}
}); //передняя левая лапка
partObj.push({
type: "box",
size: {
x: 4,
y: 7,
z: 4 - i
},
uv: {
x: 0,
y: 37
},
coords: {
x: - 7,
y: position * i + 20.65,
z: - 15
}
}); //задняя левая лапка
partObj.push({
type: "box",
size: {
x: 4,
y: 7,
z: 4 - i
},
uv: {
x: 0,
y: 37
},
coords: {
x: 7,
y: position * i + 20.65,
z: - 15
}
}); //задняя правая лапка
}
render.setPart("head", partObj, {});
return render;
}, 4);
//накладываем модель
BlackSalamander.customizeVisual({
getModels: function() {
return {
"main": black_salamander_model
};
}
});
//хитбоксentityTypeSalamander
BlackSalamander.customizeDescription({
getHitbox: function() {
return {
w: 0.5,
h: 0.5
};
}
});

BlackSalamander.customizeAI({
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

     attack_damage: 5,

     attack_range: 1,

     attack_rate: 30
    },
   enemy_watcher: {
     type: AdvancedAI.EnemyWatcher,
     
     attackAI: "attack",
     
     followAI: "follow",
     
     find_delay: 20,
     
     priority_on_attack: 5,
     
     priority_on_idle: 0,
     
     feelingModifier: 14 
    }
  }
 }
});

//спавн яйцом
Item.registerUseFunctionForID(ItemID.SalamanderBSEgg, function(coords, item, block) {
coords = coords.relative;
Entity.spawnCustom("salamander_black", coords.x + .5, coords.y + .5, coords.z + .5);
});
//спавн по миру вычеркиваем т.к проверки ещё нет
//MobSpawnRegistry.registerSpawn("salamader_black", .2);
//ORANGE

//а вот и айди саламандры
var OrangeSalamander = MobRegistry.registerEntity("salamander_orange");
//яйцо спавна
//внешний вид...
var orange_salamander_model = new EntityModel();
OrangeSalamander.customizeEvents({
tick: function(){
var orange_salamander_texture = new Texture("mob/salamander/salamander_orange.png");
orange_salamander_texture.setResolution(128, 64);
orange_salamander_texture.setPixelScale(2);
orange_salamander_model.setTexture(orange_salamander_texture);
Entity.setSkin(this.entity, "mob/salamander/salamander_orange.png");
Entity.setNameTag(this.entity, "INCOMPLETED2");
Entity.setMaxHealth(this.entity, 15);
},
death: function(){
 },
getDrop: function(){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, ItemID.HideSo, RANDOM_DROP_SO);
},
attackedBy: function(attacker, amount){
//World.playSoundAtEntity(this.entity, "mob.creeper.say1", 1, 1);//звук получения урона как у крипера
}
});
//анимация и рендер
orange_salamander_model.createAnimation(16, function(frame) {
var render = new Render();
var partObj = [
{
type: "box",
coords: {
x: 0,
y: 18.5,
z: 8
},
size: {
x: 6,
y: 6,
z: 5
},
uv: {
x: 0,
y: 0
}
}, //голова
{
type: "box",
coords: {
x: 2.5,
y: 21,
z: 11.5
},
size: {
x: 1,
y: 1,
z: 1
},
uv: {
x: 0,
y: 54
}
},//правый зуб
{
type: "box",
coords: {
x: - 2.5,
y: 21,
z: 11.5
},
size: {
x: 1,
y: 1,
z: 1
},
uv: {
x: 0,
y: 54
}
},//левый зуб
{
type: "box",
coords: {
x: 0,
y: 22.5,
z: 8.5
},
size: {
x: 7,
y: 3,
z: 6
},
uv: {
x: 0,
y: 19
},
},//пасть
{
type: "box",
coords: {
x: 0,
y: 19.75,
z: - 3
},
size: {
x: 10,
y: 6,
z: 9
},
uv: {
x: 33,
y: 0
},
},//верхнее тело
{
type: "box",
coords: {
x: 0,
y: 19.5,
z: - 15
},
size: {
x: 7,
y: 5,
z: 7
},
uv: {
x: 0,
y: 0
},
},//нижнее тело
{
type: "box",
coords: {
x: 0,
y: 19.5,
z: - 25
},
size: {
x: 7,
y: 3,
z: 5
},
uv: {
x: 91,
y: 33
},
},//хвост
];
var position = Math.sin(frame / 16 * Math.PI * 2);
for (var i = 0; i < 1; i++) {
partObj.push({
type: "box",
size: {
x: 3,
y: 6,
z: 3 - i
},
uv: {
x: 0,
y: 37
},
coords: {
x: 8,
y: position * i + 20.65,
z: 0
}
}); //передняя правая лапка
partObj.push({
type: "box",
size: {
x: 3,
y: 6,
z: 3 - i
},
uv: {
x: 0,
y: 37
},
coords: {
x: - 8,
y: position * i + 20.65,
z: 0
}
}); //передняя левая лапка
partObj.push({
type: "box",
size: {
x: 3,
y: 6,
z: 3 - i
},
uv: {
x: 0,
y: 37
},
coords: {
x: - 7,
y: position * i + 20.65,
z: - 15
}
}); //задняя левая лапка
partObj.push({
type: "box",
size: {
x: 3,
y: 6,
z: 3 - i
},
uv: {
x: 0,
y: 37
},
coords: {
x: 7,
y: position * i + 20.65,
z: - 15
}
}); //задняя правая лапка
}
render.setPart("head", partObj, {});
return render;
}, 4);
//накладываем модель
OrangeSalamander.customizeVisual({
getModels: function() {
return {
"main": orange_salamander_model
};
}
});
//хитбоксentityTypeSalamander
OrangeSalamander.customizeDescription({
getHitbox: function() {
return {
w: 1.3,
h: 0.4
};
}
});

OrangeSalamander.customizeAI({
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

     attack_damage: 3,

     attack_range: 1,

     attack_rate: 30
    },
    
    enemy_watcher: {
     type: AdvancedAI.EnemyWatcher,
     
     attackAI: "attack",
     
     followAI: "follow",
     
     find_delay: 20,
     
     priority_on_attack: 5,
     
     priority_on_idle: 0,
     
     feelingModifier: 12 
   }
  }
 }
});

//спавн яйцом
Item.registerUseFunctionForID(ItemID.SalamanderOSEgg, function(coords, item, block) {
coords = coords.relative;
Entity.spawnCustom("salamander_orange", coords.x + .5, coords.y + .5, coords.z + .5);
});
//спавн по миру вычеркиваем т.к проверки ещё нет
//MobSpawnRegistry.registerSpawn("salamader_black", .2);