/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 5
*/



// file: beer.js

IDRegistry.genItemID("wpivo");
IDRegistry.genItemID("cpivo");
IDRegistry.genItemID("ppivo");
IDRegistry.genItemID("spivo");
IDRegistry.genItemID("megapivo");
Item.createFoodItem("wpivo", "beer", {name: "pivo", meta: 0}, {
isTech: false,
stack: 64,
food: 2
});
Item.createFoodItem("cpivo", "carrots beer", {name: "cpivo", meta: 0}, {
isTech: false,
stack: 64,
food: 4
});
Item.createFoodItem("ppivo", "potatoes beer", {name: "ppivo", meta: 0}, {
isTech: false,
stack: 64,
food: 4
});
Item.createFoodItem("spivo", "beetroot beer", {name: "spivo", meta: 0}, {
isTech: false,
stack: 64,
food: 4
});
Item.createFoodItem("megapivo", "mixed beer", {name: "megapivo", meta: 0}, {
isTech: false,
stack: 64,
food: 12
});




// file: more.js

//коробка
IDRegistry.genBlockID("box");
Block.createBlock("box", [
     {name: "box", texture: [["box", 0], ["box", 0], ["box", 0], ["box", 0], ["box", 0], ["box", 0]], inCreative: true}]);
//бутылка
IDRegistry.genItemID("bottle");
Item.createItem("bottle", "bottle", {name: "bottle", meta: 0}, {});
//пыльца
IDRegistry.genItemID("pollen");
Item.createFoodItem("pollen", "pollen", {name: "vat", meta: 0}, {
isTech: false,
stack: 64,
food: 8
});
IDRegistry.genItemID("sigara");
Item.createFoodItem("sigara", "sigareta", {name: "sigareta", meta: 0}, {
isTech: false,
stack: 64,
food: 4
});
var narkos = new CustomBiome("organic_blue")
 // цвет неба
 .setSkyColor(0xFF00FF)
 // цвет травы
 .setGrassColor(0xFF00FF)
 // цвет листвы
 .setFoliageColor(0xFF00FF)
 // поверхностный блок
 // .setCoverBlock(2, 0)
 // слой блоков под поверхностью
 .setSurfaceBlock(3, 0)
 // блок заливки под поверхностным слоем
 .setFillingBlock(1, 0);

Callback.addCallback("GenerateBiomeMap", function(x, z, rand, dimensionId, chunkSeed, worldSeed) {
 (x *= 16, z *= 16);
 // проходка по блокам чанка
 for (var xs = x; xs < x + 16; xs++)
     for (var zs = z; zs < z + 16; zs++)
      // генерация случайного шума на основе сида и текущих координат
      if (GenerationUtils.getPerlinNoise(xs, 0, zs, worldSeed, 0.025, 3) < 0.3)
    // установка биома (любого) на координаты
    World.setBiomeMap(xs, zs, narkos.id);
});




// file: translator.js

//перевод
Translation.addTranslation("box", {ru: "коробка", es: "caja"});
Translation.addTranslation("bottle", {ru: "бутылка", es: "una botella"});
Translation.addTranslation("pollen", {ru: "пыльца", es: "polen"});
Translation.addTranslation("beer", {ru: "пиво", es: "cerveza"});
Translation.addTranslation("carrots beer", {ru: "морковное пиво", es: "cerveza de zanahoria"});
Translation.addTranslation("potatoes beer", {ru: "картофельное пиво", es: "cerveza de papa"});
Translation.addTranslation("beetroot beer", {ru: "свекольное пиво", es: "cerveza de remolacha"});
Translation.addTranslation("mixed beer", {ru: "мега пиво", es: "mega cerveza"});
Translation.addTranslation("sigareta", {ru: "сигарета", es: "un cigarrillo"});




// file: callback.js

Callback.addCallback("FoodEaten",function(heal, satRatio, player){ 
let item = Entity.getCarriedItem(player);
if(item.id==ItemID.wpivo){ 
Entity.addEffect(player, 10, 2, 1200, false,false); 
}});

Callback.addCallback("FoodEaten",function(heal, satRatio, player){ 
let item = Entity.getCarriedItem(player);
if(item.id==ItemID.ppivo){ 
Entity.addEffect(player, 13, 0, 1200, false,false); 
}});

Callback.addCallback("FoodEaten",function(heal, satRatio, player){ 
let item = Entity.getCarriedItem(player);
if(item.id==ItemID.cpivo){ 
Entity.addEffect(player, 16, 0, 1200, false,false); 
}});

Callback.addCallback("FoodEaten",function(heal, satRatio, player){ 
let item = Entity.getCarriedItem(player);
if(item.id==ItemID.spivo){ 
Entity.addEffect(player, 12, 0, 1200, false,false); 
}});

Callback.addCallback("FoodEaten",function(heal, satRatio, player){ 
let item = Entity.getCarriedItem(player);
if(item.id==ItemID.megapivo){ 
Entity.addEffect(Player, 10, 2, 1200, false,false); 
Entity.addEffect(Player, 13, 0, 1200, false,false); 
Entity.addEffect(Player, 16, 0, 1200, false,false); 
Entity.addEffect(Player, 22, 4, 1200, false,false); 
Entity.addEffect(Player, 12, 0, 1200, false,false); 
}});

Callback.addCallback("FoodEaten",function(heal, satRatio, player){ 
let item = Entity.getCarriedItem(player);
if(item.id==ItemID.pollen){ 
Entity.addEffect(Player, 22, 4, 300, false,false); 
}});




// file: crafts.js

Recipes.addShaped({id:ItemID.pollen, count: 1, data: 0}, [ 
"aa ", 
"   ", 
"   " 
], ['a', 37, 0]);
Recipes.addShaped({id:ItemID.pollen, count: 1, data: 0}, [ 
"aa ", 
"   ", 
"   " 
], ['a', 38, 0]);
Recipes.addShaped({id:BlockID.box, count: 1, data: 0}, [ 
"aaa", 
"aba", 
"aaa" 
], ['a', 5, 0, 'b', 265, 0]);
Recipes.addShaped({id:BlockID.box, count: 1, data: 0}, [ 
"aaa", 
"aba", 
"aaa" 
], ['a', 5, 1, 'b', 265, 0]);
Recipes.addShaped({id:BlockID.box, count: 1, data: 0}, [ 
"aaa", 
"aba", 
"aaa" 
], ['a', 5, 2, 'b', 265, 0]);
Recipes.addShaped({id:BlockID.box, count: 1, data: 0}, [ 
"aaa", 
"aba", 
"aaa" 
], ['a', 5, 3, 'b', 265, 0]);
Recipes.addShaped({id:BlockID.box, count: 1, data: 0}, [ 
"aaa", 
"aba", 
"aaa" 
], ['a', 5, 4, 'b', 265, 0]);
Recipes.addShaped({id:BlockID.box, count: 1, data: 0}, [ 
"aaa", 
"aba", 
"aaa" 
], ['a', 5, 5, 'b', 265, 0]);
Recipes.addShaped({id:ItemID.bottle, count: 1, data: 0}, [ 
" a ", 
"aba", 
"aaa" 
], ['a', 20, 0, 'b', 351, 2]);
Recipes.addShaped({id:ItemID.wpivo, count: 1, data: 0}, [ 
"ab ", 
"   ", 
"   " 
], ['a', ItemID.bottle, 0, 'b', 295, 0]);
Recipes.addShaped({id:ItemID.cpivo, count: 1, data: 0}, [ 
"ab ", 
"   ", 
"   " 
], ['a', ItemID.wpivo, 0, 'b', 391, 0]);
Recipes.addShaped({id:ItemID.ppivo, count: 1, data: 0}, [ 
"ab ", 
"   ", 
"   " 
], ['a', ItemID.wpivo, 0, 'b', 392, 0]);
Recipes.addShaped({id:ItemID.spivo, count: 1, data: 0}, [ 
"ab ", 
"   ", 
"   " 
], ['a', ItemID.wpivo, 0, 'b', 457, 0]);
Recipes.addShaped({id:ItemID.megapivo, count: 1, data: 0}, [ 
"abc", 
"   ", 
"   " 
], ['a', ItemID.cpivo, 0, 'b', ItemID.ppivo, 0, 'c', ItemID.spivo, 0]);
Recipes.addShaped({id:ItemID.sigara, count: 1, data: 0}, [ 
"aba", 
"   ", 
"   " 
], ['a', 339, 0, 'b', 289, 0]);




