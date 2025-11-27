//а вот и айди саламандры 
var entityTypeSalamander = MobRegistry.registerEntity("salamander_black"); 
//яйцо спавна 
IDRegistry.genItemID("SalamanderSEgg"); 
Item.createItem("SalamanderSEgg", "Salamander Egg", {name: "SalamanderSEgg", meta: 0},{isTech:false,stack: 64}); 
//внешний вид... 
var black_salamander_model = new EntityModel(); 
entityTypeSalamander.customizeEvents({ 
tick: function(){ 
var black_salamander_texture = new Texture("mob/salamander/salamander_black.png"); 
black_salamander_texture.setResolution(128, 64); 
black_salamander_texture.setPixelScale(2); 
black_salamander_model.setTexture(black_salamander_texture); 
Entity.setSkin(this.entity, "mob/salamander/salamander_black.png"); 
Entity.setNameTag(this.entity, "INCOMPLETED");//ник над энтити позже будет счётчик хп правда хз как 
}, 
 
attackedBy: function(attacker, amount){ 
World.playSoundAtEntity(this.entity, "mob.creeper.say1", 1, 1);//звук получения урона как у крипера 
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
entityTypeSalamander.customizeVisual({ 
getModels: function() { 
return { 
"main": black_salamander_model 
}; 
} 
}); 
//хитбоксentityTypeSalamander 
entityTypeSalamander.customizeDescription({ 
getHitbox: function() { 
return { 
w: 0.5, 
h: 0.5 
}; 
} 
}); 
 
entityTypeSalamander.customizeAI({ 
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
 } 
 }; 
 } 
}); 
 
//спавн яйцом 
Item.registerUseFunctionForID(ItemID.SalamanderSEgg, function(coords, item, block) { 
coords = coords.relative; 
Entity.spawnCustom("salamander_black", coords.x + .5, coords.y + .5, coords.z + .5); 
}); 
//спавн по миру вычеркиваем т.к проверки ещё нет 
//MobSpawnRegistry.registerSpawn("salamader_black", .2); 
Entity.setHealth("salamander_black", 20);

DKnight_model.createAnimation(16, function(frame) { 
var render = new Render(); 
var partObj = [ 
{ 
type: "box", 
coords: { 
x: 0, 
y: -10, 
z: 0 
}, 
size: { 
x: 8, 
y: 8, 
z: 8 
}, 
uv: { 
x: 0, 
y: 0 
} 
},
{ 
type: "box", 
coords: { 
x: 0, 
y: 0, 
z: 0 
}, 
size: { 
x: 8, 
y: 12, 
z: 4 
}, 
uv: { 
x: 0, 
y: 0 
} 
},
{ 
type: "box", 
coords: { 
x: -5, 
y: -4, 
z: -4
}, 
size: { 
x: 4, 
y: 4, 
z: 12
}, 
uv: { 
x: 0, 
y: 0 
}
},
{ 
type: "box", 
coords: { 
x: 5, 
y: -4, 
z: -4 
}, 
size: { 
x: 4, 
y: 4, 
z: 12
}, 
uv: { 
x: 0, 
y: 0 
} 
},
{ 
type: "box", 
coords: { 
x: -2, 
y: 12, 
z: 0
}, 
size: { 
x: 4, 
y: 12, 
z: 4
}, 
uv: { 
x: 0, 
y: 0 
} 
},
{ 
type: "box", 
coords: { 
x: 2, 
y: 12, 
z: 0
}, 
size: { 
x: 4, 
y: 12, 
z: 4
}, 
uv: { 
x: 0, 
y: 0 
} 
},
];

render.setPart("head", partObj, {}); 
return render; 
}, 4); 
//накладываем модель 
entityTypeDKnight.customizeVisual({ 
getModels: function() { 
return { 
"main": DKnight_model 
}; 
} 
}); 
