/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 14
*/



// file: items/tool/Start.js

importLib("ToolType", "*");

IDRegistry.genItemID("arming");
Item.createItem("arming", "Рукоять", {name: "MechArm", meta: 0}, {stack: 64});
Item.setMaxDamage(ItemID.arming, 0);
Recipes.addShaped({id: ItemID.arming, count: 1, data: 0}, [
" a ",
"aba",
" a "
], ['a', 334, 0, 'b', 280, 0]);

IDRegistry.genItemID("Blade");
Item.createItem("Blade", "Лезвие", {name: "MechBlade", meta: 0}, {stack: 64});
Item.setMaxDamage(ItemID.Blade, 0);
Recipes.addShaped({id: ItemID.Blade, count: 1, data: 0}, [
" a ",
" a ",
" a "
], ['a', 265, 0]);

IDRegistry.genItemID("Blade1");
Item.createItem("Blade1", "Верхушка лезвия", {name: "MechBlade", meta: 1}, {stack: 64});
Item.setMaxDamage(ItemID.Blade1, 0);
Recipes.addShaped({id: ItemID.Blade1, count: 1, data: 0}, [
"   ",
" a ",
"аaа"
], ['a', 265, 0]);

IDRegistry.genItemID("Blade2");
Item.createItem("Blade2", "Верхушка лезвия", {name: "MechBlade", meta: 2}, {stack: 64});
Item.setMaxDamage(ItemID.Blade2, 0);
Recipes.addShaped({id: ItemID.Blade2, count: 1, data: 0}, [
"a  ",
"aa ",
"aaа"
], ['a', 265, 0]);

IDRegistry.genItemID("Knight-spawn");
Item.createItem("Knight-spawn", "создать существо Падший Рыцарь", {name: "spawnKnight"});
Item.registerUseFunction("Knight-spawn", function(coords, item, block){
Entity.spawnCustom("Knight", coords.relative.x + .5, coords.relative.y + .5, coords.relative.z + .5); 
});

IDRegistry.genItemID("DarkEss");
Item.createItem("DarkEss", "Эссенция тьмы", {name: "DarkEst", meta: 0}, {stack: 64});

IDRegistry.genItemID("Darkillo");
Item.createItem("Darkillo", "Сильная эссенция тьмы", {name: "Darkillor", meta: 0}, {stack: 64});
Item.setMaxDamage(ItemID.Darkillo, 0);
Recipes.addShaped({id: ItemID.Darkillo, count: 1, data: 0}, [
"aaa",
"aba",
"aaa"
], ['b', 264, 0, 'a', ItemID.DarkEss, 0]);

IDRegistry.genItemID("BSword1");
Item.createItem("BSword1", "Меч", {name: "Swordation", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("BSword1", {durability: 250, level: 0, efficiency: 3, damage: 6.5, enchantability: 14});
ToolAPI.setTool(ItemID.BSword1, "BSword1", ToolType.sword);
Recipes.addShaped({id: ItemID.BSword1, count: 1, data: 0}, [
" a ",
" b ",
" c "
], ['b', ItemID.Blade, 0, 'a', ItemID.Blade1, 0, 'c', ItemID.arming, 0], function () {

    AchievementAPI.give("SW", "one");
});

IDRegistry.genItemID("IKatanaI");
Item.createItem("IKatanaI", "Катана", {name: "IKatanaI", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("IKatanaI", {durability: 195, level: 0, efficiency: 35, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.IKatanaI, "IKatanaI", ToolType.sword);
Recipes.addShaped({id: ItemID.IKatanaI, count: 1, data: 0}, [
" a ",
" b ",
" c "
], ['b', ItemID.Blade, 0, 'a', ItemID.Blade2, 0, 'c', ItemID.arming, 0]);





// file: items/tool/Items.js

importLib("ToolType", "*");
IDRegistry.genItemID("Rukoyat");
Item.createItem("Rukoyat", "Железная рукоять", {name: "Rukoyat", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.Rukoyat, count: 1, data: 0}, [
"aaa",
" b ",
" b "
], ['a', 265, 0, 'b', ItemID.Trubka, 0]);

IDRegistry.genItemID("Trubka");
Item.createItem("Trubka", "Железная палка", {name: "Trubka", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.Trubka, count: 4, data: 0}, [
"a  ",
" a ",
"   "
], ['a', 42, 0]);

IDRegistry.genItemID("RukoyatD");
Item.createItem("RukoyatD", "Рукоять с алмазом", {name: "RukoyatD", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.RukoyatD, count: 1, data: 0}, [
"   ",
" b ",
" a "
], ['b', 264, 0, 'a', ItemID.Rukoyat, 0]);

IDRegistry.genItemID("RukoyatE");
Item.createItem("RukoyatE", "Рукоять с изумрудом", {name: "RukoyatE", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.RukoyatE, count: 1, data: 0}, [
"   ",
" b ",
" a "
], ['b', 388, 0, 'a', ItemID.Rukoyat, 0]);

IDRegistry.genItemID("MechN2");
Item.createItem("MechN2", "Мачете", {name: "MechN2", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("MechN2", {durability: 230, level: 0, efficiency: 10, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.MechN2, "MechN2", ToolType.sword);
Recipes.addShaped({id: ItemID.MechN2, count: 1, data: 0}, [
" a ",
" b ",
" cg"
], ['b', ItemID.Blade, 0, 'a', ItemID.Blade2, 0, 'c', ItemID.arming, 0, 'g', 265, 0]);

IDRegistry.genItemID("MechN3");
Item.createItem("MechN3", "Надзиратель", {name: "MechN3", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("MechN3", {durability: 200, level: 2, efficiency: 5, damage: 8, enchantability: 9});
ToolAPI.setTool(ItemID.MechN3, "MechN3", ToolType.sword);
Recipes.addShaped({id: ItemID.MechN3, count: 1, data: 0}, [
" a ",
" bg",
" cg"
], ['b', ItemID.Blade, 0, 'a', ItemID.Blade2, 0, 'c', ItemID.arming, 0, 'g', 381, 0]);

IDRegistry.genItemID("MechN4");
Item.createItem("MechN4", "Костяной меч", {name: "MechN4", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("MechN4", {durability: 120, level: 0, efficiency: 10, damage: 5.5, enchantability: 14});
ToolAPI.setTool(ItemID.MechN4, "MechN4", ToolType.sword);
Recipes.addShaped({id: ItemID.MechN4, count: 1, data: 0}, [
" a ",
" a ",
" c "
], ['c', ItemID.arming, 0, 'a', 352, 0]);

IDRegistry.genItemID("MechN5");
Item.createItem("MechN5", "Стекляшка", {name: "MechN5", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("MechN5", {durability: 2, level: 0, efficiency: 10, damage: 3, enchantability: 14});
ToolAPI.setTool(ItemID.MechN5, "MechN5", ToolType.sword);
Recipes.addShaped({id: ItemID.MechN5, count: 1, data: 0}, [
" a ",
" a ",
" c "
], ['c', ItemID.arming, 0, 'a', 102, 0]);

IDRegistry.genItemID("MechN6");
Item.createItem("MechN6", "Жало", {name: "MechN6", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("MechN6", {durability: 170, level: 0, efficiency: 10, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.MechN6, "MechN6", ToolType.sword);
Recipes.addShaped({id: ItemID.MechN6, count: 1, data: 0}, [
"kbk",
"kak",
"kck"
], ['c', ItemID.RukoyatE, 0, 'k', 106, 0, 'a', ItemID.Blade, 0, 'b', ItemID.Blade1, 0]);
Callback.addCallback("PlayerAttack", function(player, entity){
 if(Player.getCarriedItem().id == ItemID.MechN6){
Entity.addEffect(entity, Native.PotionEffect.Poison, 200, 2, false, false)
 }
});

IDRegistry.genItemID("TmetallT");
Item.createItem("TmetallT", "Темный металл", {name: "TmetallT", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.TmetallT, count: 1, data: 0}, [
"cac",
"aba",
"cac"
], ['a', ItemID.Darkillo, 0, 'b', 265, 0, 'c', ItemID.DarkEss, 0]);

IDRegistry.genItemID("Iskra");
Item.createItem("Iskra", "Искра", {name: "Iskra", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.Iskra, count: 3, data: 0}, [
"   ",
" c ",
"c  "
], ['c', 318, 0]);

IDRegistry.genItemID("OgonKu");
Item.createItem("OgonKu", "Кусочек пламени", {name: "OgonKu", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.OgonKu, count: 3, data: 0}, [
"aaa",
"aca",
"aaa"
], ['c', 263, 0, 'a', ItemID.Iskra, 0]);

IDRegistry.genItemID("RaskFerr");
Item.createItem("RaskFerr", "Раскаленное железо", {name: "RaskFerr", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.RaskFerr, count: 1, data: 0}, [
"aaa",
"aca",
"aaa"
], ['c', 265, 0, 'a', ItemID.OgonKu, 0]);

IDRegistry.genItemID("RTYTI");
Item.createItem("RTYTI", "Ртуть", {name: "RTYTI", meta: 0}, {stack: 64});
Recipes.addFurnace(ItemID.RaskFerr, ItemID.RTYTI, 0);

IDRegistry.genItemID("ORTYTI");
Item.createItem("ORTYTI", "Освященная ртуть", {name: "RTYTI", meta: 1}, {stack: 64});
Recipes.addShaped({id: ItemID.ORTYTI, count: 1, data: 0}, [
"aba",
"bcb",
"aba"
], ['c', ItemID.RTYTI, 0, 'a', 377, 0, 'b', 348, 0]);

IDRegistry.genItemID("OMetaLL");
Item.createItem("OMetaLL", "Освященный металл", {name: "OMetaLL", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.OMetaLL, count: 1, data: 0}, [
"   ",
" c ",
"   "
], ['c', ItemID.ORTYTI, 0]);





// file: items/tool/Swords.js

importLib("ToolType", "*");
IDRegistry.genItemID("MechN8");
Item.createItem("MechN8", "Улучшенный меч", {name: "MechN8", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("MechN8", {durability: 220, level: 0, efficiency: 10, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.MechN8, "MechN8", ToolType.sword);
Recipes.addShaped({id: ItemID.MechN8, count: 1, data: 0}, [
" b ",
" a ",
" c "
], ['c', ItemID.Rukoyat, 0, 'a', ItemID.Blade, 0, 'b', ItemID.Blade1, 0]);

IDRegistry.genItemID("MechN9");
Item.createItem("MechN9", "Пожиратель душ", {name: "MechN9", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("MechN9", {durability: 250, level: 0, efficiency: 15, damage: 6, enchantability: 15});
ToolAPI.setTool(ItemID.MechN9, "MechN9", ToolType.sword);
Recipes.addShaped({id: ItemID.MechN9
, count: 1, data: 0}, [
"bcb",
"cac",
"dcd"
], ['c', 88, 0, 'a', ItemID.MechN8, 0, 'b', 352, 0, 'd', 87, 0]);
Callback.addCallback("PlayerAttack", function(player, entity){
 if(Player.getCarriedItem().id == ItemID.MechN9){
Entity.addEffect(entity, 20, 200, 1, false, false)
 }
});


IDRegistry.genItemID("MechN10");
Item.createItem("MechN10", "Обсидиановый меч", {name: "MechN10", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("MechN10", {durability: 400, level: 0, efficiency: 10, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.MechN10, "MechN10", ToolType.sword);
Recipes.addShaped({id: ItemID.MechN10, count: 1, data: 0}, [
" a ",
" a ",
" c "
], ['c', ItemID.arming, 0, 'a', 49, 0]);

IDRegistry.genItemID("MechN11");
Item.createItem("MechN11", "Поглотитель", {name: "MechN11", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("MechN11", {durability: 150, level: 0, efficiency: 10, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.MechN11, "MechN11", ToolType.sword);
Recipes.addShaped({id: ItemID.MechN11, count: 1, data: 0}, [
" a ",
" a ",
" c "
], ['c', ItemID.Rukoyat, 0, 'a', ItemID.LBY, 0]);
Callback.addCallback("PlayerAttack", function(player, entity){
 if(Player.getCarriedItem().id == ItemID.MechN11){
Entity.addEffect(Player.get(), 7, 1, 1, false, false)
 }
});

IDRegistry.genItemID("MechN12");
Item.createItem("MechN12", "Ледяной меч", {name: "Mech12", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("MechN12", {durability: 301, level: 0, efficiency: 15, damage: 6.5, enchantability: 15});
ToolAPI.setTool(ItemID.MechN12, "MechN12", ToolType.sword);
Recipes.addShaped({id: ItemID.MechN12
, count: 1, data: 0}, [
" a ",
" a ",
" b "
], ['b', ItemID.Rukoyat, 0, 'a', 79, 0]);
Callback.addCallback("PlayerAttack", function(player, entity){
 if(Player.getCarriedItem().id == ItemID.MechN12){
Entity.addEffect(entity, Native.PotionEffect.Slowness, 200, 2, false, false)
 }
});

IDRegistry.genItemID("MechN13");
Item.createItem("MechN13", "Кастет", {name: "MechN13", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("MechN13", {durability: 100, level: 0, efficiency: 10, damage: 3, enchantability: 14});
ToolAPI.setTool(ItemID.MechN13, "MechN13", ToolType.sword);
Recipes.addShaped({id: ItemID.MechN13, count: 1, data: 0}, [
" a ",
" a ",
" a "
], ['a', 265, 0]);


IDRegistry.genItemID("MechN14");
Item.createItem("MechN14", "Когти", {name: "MechN14", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("MechN14", {durability: 100, level: 0, efficiency: 10, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.MechN14, "MechN14", ToolType.sword);
Recipes.addShaped({id: ItemID.MechN14, count: 1, data: 0}, [
" ka",
" kc",
" ka"
], ['a', 265, 0, 'c', ItemID.MechN13, 0, 'k', ItemID.Blade2, 0]);

IDRegistry.genItemID("MechN15");
Item.createItem("MechN15", "Повелитель душ", {name: "MechN15", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("MechN15", {durability: 10, level: 0, efficiency: 10, damage: 0, enchantability: 14});
ToolAPI.setTool(ItemID.MechN15, "MechN15", ToolType.sword);
Recipes.addShaped({id: ItemID.MechN15, count: 1, data: 0}, [
"bcb",
"cec",
"bcb"
], ['e', ItemID.MechN9, 0, 'c', 348, 0, 'b', 377, 0]);
Item.registerUseFunctionForID(ItemID.MechN15, function(coords, item, block) { 
coords = coords.relative; 
Entity.spawnCustom("Soules", coords.x + .5, coords.y + .5, coords.z + .5); 
}); 
 


IDRegistry.genItemID("MechN16");
Item.createItem("MechN16", "Двуручный меч", {name: "MechN16", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("MechN16", {durability: 222, level: 0, efficiency: 10, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.MechN16, "MechN16", ToolType.sword);
Recipes.addShaped({id: ItemID.MechN16, count: 1, data: 0}, [
" c ",
" e ",
" r "
], ['e', ItemID.Blade, 0, 'c', ItemID.Blade1, 0, 'r', ItemID.RukoyatD, 0]);


IDRegistry.genItemID("MechN17");
Item.createItem("MechN17", "Темный меч", {name: "MechN17", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("MechN17", {durability: 350, level: 0, efficiency: 10, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.MechN17, "MechN17", ToolType.sword);
Recipes.addShaped({id: ItemID.MechN17, count: 1, data: 0}, [
" c ",
" c ",
" r "
], ['c', ItemID.TmetallT, 0, 'r', ItemID.RukoyatD, 0]);



IDRegistry.genItemID("MechN18");
Item.createItem("MechN18", " Король Слизней", {name: "MechN18", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("MechN18", {durability: 85, level: 0, efficiency: 1, damage: 4, enchantability: 1});
ToolAPI.setTool(ItemID.MechN18, "MechN18", ToolType.sword);
Recipes.addShaped({id: ItemID.MechN18, count: 1, data: 0}, [
"mcm",
"mem",
" r "
], ['e', ItemID.Blade, 0, 'c', ItemID.Blade1, 0, 'r', ItemID.Rukoyat, 0, 'm', 341, 0]);

Item.registerUseFunctionForID(ItemID.MechN18, function(coords, item, block) { 
coords = coords.relative; 
Entity.spawn(coords.x + .5, coords.y + .5, coords.z + .5, 37); 
});

IDRegistry.genItemID("PhSw");
Item.createItem("PhSw", "Пламя Феникса", {stack: 1});
ToolAPI.addToolMaterial("PhSw", {durability: 386, level: 21, efficiency: 21, damage: 4, enchantability: 21});
ToolAPI.setTool(ItemID.PhSw, "PhSw", ToolType.sword);

var anim = 0;
Item.registerIconOverrideFunction(ItemID.PhSw, function(item, name){
 return {
    name: "PlamaPhoen",
    meta: anim%26
}
});

Callback.addCallback("tick", function(){
anim++;
});




// file: items/tool/Soul.js

var entityTypeDarksoul = MobRegistry.registerEntity("Soul");

MobSpawnRegistry.registerSpawn("Soul", 0.009);

IDRegistry.genItemID("Soul-spawn");
Item.createItem("Soul-spawn", "создать существо Эссенция тьмы", {name: "spawnSoul", meta: 0}, {stack: 64});
Item.registerUseFunction("Soul-spawn", function(coords, item, block){
Entity.spawnCustom("Soul", coords.relative.x + .5, coords.relative.y + .5, coords.relative.z + .5); 
});

//внешний вид... 
var Darksoul_model = new EntityModel(); 
entityTypeDarksoul.customizeEvents({ 
tick: function(){ 
var Darksoul_texture = new Texture("mob/DarkSoul.png"); 
Darksoul_texture.setResolution(31, 15); 
Darksoul_texture.setPixelScale(1); 
Darksoul_model.setTexture(Darksoul_texture); 
Entity.setSkin(this.entity, "mob/DarkSoul.png");
    }
   }); 

entityTypeDarksoul.customizeDescription({
   getDrop: function() {
      return [{
         id: ItemID.DarkEss,
         count: {min: 1, max: 1},
         separate: true, chance: 0.5
       }]
}
});




// file: items/tool/Other.js

importLib("ToolType", "*");
IDRegistry.genItemID("KomOFsneg");
Item.createThrowableItem("KomOFsneg", "Комок снега", {name: "KomOFsneg", meta: 0}, {stack: 16});
Recipes.addShaped({id: ItemID.KomOFsneg, count: 1, data: 0}, [
"bab",
"aca",
"bab"
], ['c', 91, 0, 'a', 80, 0, 'b', 332, 0]);
Item.registerThrowableFunction("KomOFsneg", function(coords, projectile, item, target){
Entity.spawn(coords.x, coords.y, coords.z, 21);});


IDRegistry.genItemID("PechFerr");
Item.createThrowableItem("PechFerr", "Железная печать", {name: "PechFerr", meta: 0}, {stack: 16});
Recipes.addShaped({id: ItemID.PechFerr, count: 1, data: 0}, [
"z z",
"hah",
"z z"
], ['z', 377, 0, 'a', ItemID.OMetaLL, 0, 'h', 348, 0]);

Item.registerThrowableFunction("PechFerr", function(coords, projectile, item, target){
Entity.spawn(coords.x, coords.y, coords.z, 20);});



IDRegistry.genItemID("LBY");
Item.createThrowableItem("LBY", "Молния", {name: "LBY", meta: 0}, {stack: 1});
Item.registerThrowableFunction("LBY", function(coords, projectile, item, target){
Entity.spawn(coords.x, coords.y, coords.z, 97);});

Recipes.addShaped({id: ItemID.LBY, count: 1, data: 0}, [
" c ",
" a ",
" c "
], ['c', 368, 0, 'a', ItemID.OgonKu, 0]);





// file: items/tool/Armor.js

IDRegistry.genItemID("PhoenixK");
Item.createArmorItem("PhoenixK", "Нагрудник Феникс", {name: "PhoenixK"}, {type: "chestplate", armor: 7, durability: 300, texture: "armor/PhoenixArmor_0.png"});
Recipes.addShaped({id: ItemID.PhoenixK, count: 1, data: 0}, [
"xxx",
"xox",
"xxx"
], ['x', ItemID.OgonKu, 0, 'o', 315, 0]);

IDRegistry.genItemID("PhoenixH");
Item.createArmorItem("PhoenixH", "Шлем Феникс", {name: "PhoenixH"}, {type: "helmet", armor: 3, durability: 230, texture: "armor/PhoenixArmor_0.png"});
Recipes.addShaped({id: ItemID.PhoenixH, count: 1, data: 0}, [
"xxx",
"xox",
"xxx"
], ['x', ItemID.OgonKu, 0, 'o', 314, 0]);

IDRegistry.genItemID("PhoenixL");
Item.createArmorItem("PhoenixL", "Штаны Феникс", {name: "PhoenixL"}, {type: "leggings", armor: 4, durability: 275, texture: "armor/PhoenixArmor_1.png"});
Recipes.addShaped({id: ItemID.PhoenixL, count: 1, data: 0}, [
"xxx",
"xox",
"xxx"
], ['x', ItemID.OgonKu, 0, 'o', 317, 0]);

IDRegistry.genItemID("PhoenixB");
Item.createArmorItem("PhoenixB", "Ботинки Феникс", {name: "PhoenixB"}, {type: "boots", armor: 2, durability: 210, texture: "armor/PhoenixArmor_0.png"});
Recipes.addShaped({id: ItemID.PhoenixB, count: 1, data: 0}, [
"xxx",
"xox",
"xxx"
], ['x', ItemID.OgonKu, 0, 'o', 317, 0]);

Callback.addCallback("tick", function()
{
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.PhoenixH && chest.id == ItemID.PhoenixK && legs.id == ItemID.PhoenixL && boots.id == ItemID.PhoenixB){
    Entity.addEffect(Player.get(), 12, 25, 3, false, false);
   }
});

Callback.addCallback("tick", function() {	
var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.PhoenixH && chest.id == ItemID.PhoenixK && legs.id == ItemID.PhoenixL && boots.id == ItemID.PhoenixB){	World.setBlock(Player.getPosition().x, Player.getPosition().y-1, Player.getPosition().z, 51, 0)
	} 
});

Callback.addCallback("tick", function() {	
var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.PhoenixH && chest.id == ItemID.PhoenixK && legs.id == ItemID.PhoenixL && boots.id == ItemID.PhoenixB && World.getBlock(Player.getPosition().x, Player.getPosition().y-1, Player.getPosition().z, 51, 0)){
Entity.addEffect(Player.get(), 10, 1, 1, false, false);
	} 
});



IDRegistry.genItemID("RukaZelez");
Item.createArmorItem("RukaZelez", "Железная рука", {name: "RukaZelez"}, {type: "chestplate", armor: 5, durability: 220, texture: "armor/RukaZelez_0.png"});
Recipes.addShaped({id: ItemID.RukaZelez, count: 1, data: 0}, [
"zxz",
"z z",
"a a"
], ['x', 307, 0, 'z', 265, 0, 'a', 42, 0]);
Callback.addCallback("tick", function() {
    var chest = Player.getArmorSlot(1);
var pos = Player.getPosition();
if (chest.id == ItemID.RukaZelez){
    Entity.addEffect(Player.get(), 5, 25, 3, false, false);
   }
});





// file: GUI/DeathTree.js

IDRegistry.genItemID("SWdeaSap");
Item.createItem("SWdeaSap", "Сажанец мёртвого дерева", {name: "Dsap", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.SWdeaSap){ World.setBlock(coords.x,coords.y+1, coords.z, BlockID.sapDea, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genBlockID("DWwood");
Block.createBlock("DWwood", [ {name: "Древесина Мертвого Дерева", texture: [["DWwood", 1], ["DWwood", 1], ["DWwood", 0], ["DWwood", 0], ["DWwood", 0], ["DWwood", 0]], inCreative: true} ]);

IDRegistry.genItemID("DeathHeart");
Item.createItem("DeathHeart", "Сердце", {name: "DeathHeart", meta: 0});
Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.DeathHeart&&block.id !==0&&hp <=70){
Player.setCarriedItem(item.id, item.count - 1, 0);
Entity.setMaxHealth(Player.get(), hp+1)}}); 

Recipes.addShaped({id:ItemID.DeathHeart, data:0, count:1}, ["ooo", "oxo", "ooo"], ['x', BlockID.Heart, 0,]);




IDRegistry.genBlockID("Heart"); 
Block.createBlock("Heart", [{name: "Сердце", texture: [["HeartonTree", 0]], inCreative: false}]);
function createHeartRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (0, 0, 0, 0.6, 0.6, 0.6,  35, 14);
model.addBox (0, 0, 0, 0.4, 0.8, 0.4,  35, 14);
model.addBox (0, 0, 0, 0.4, 0.8, 0.4,  35, 14);

render.addEntry(model);
}
createHeartRender(BlockID.Heart, 35, 12);
Block.setBlockShape(BlockID.Heart, {x: 0, y: 0, z: 0}, {x: 0.6, y: 0.6, z: 0.6});
Block.registerDropFunction(BlockID.Heart, function(coords, blockID, blockData, level){
 if (level > 0){
  return [[DeathHeart, 1]]
 }
 return [];
});



IDRegistry.genBlockID("sapDea"); 
Block.createBlock("sapDea", [{name: "Сажанец мёртвого дерева", texture: [["stone", 0]], inCreative: false}]);

var renderSapDea = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.sapDea, 0, renderSapDea); 

var modelSapDea = BlockRenderer.createModel();



modelSapDea.addBox(0/16, 0/16, 8/16, 16/16, 16/16,8/16, "DeaSap", 0);//полено1

modelSapDea.addBox(8/16, 0/16, 0/16, 8/16, 16/16,16/16, "DeaSap", 0);//полено2

renderSapDea.addEntry(modelSapDea);

Block.setBlockShape(BlockID.sapDea, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});
var timer
Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.SWdeaSap){
    timer=30
}});
Callback.addCallback("tick",function(item,block,coords){

if(timer==15){
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.DWwood, 0);
}
});
Callback.addCallback("tick",function(item,block,coords){
if(timer==2){
World.setBlock(coords.x, coords.y+2, coords.z, BlockID.DWwood, 0);
}});




// file: items/tool/DeathHeart.js

IDRegistry.genItemID("DeathHeart");
Item.createItem("DeathHeart", "Сердце", {name: "DeathHeart", meta: 0});
Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.DeathHeart&&block.id !==0&&hp <=70){
Player.setCarriedItem(item.id, item.count - 1, 0);
Entity.setMaxHealth(Player.get(), hp+1)}}); 




// file: items/tool/RadioMech.js

importLib("ToolType", "*");
IDRegistry.genItemID("RadioMech");
Item.createItem("RadioMech", "Радиоактивный меч", {name: "RadioMech", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("RadioMech", {durability: 130, level: 0, efficiency: 20, damage: 9, enchantability: 30});
ToolAPI.setTool(ItemID.RadioMech, "RadioMech", ToolType.sword);
Callback.addCallback("tick", function()
{
if(Player.getCarriedItem().id == ItemID.RadioMech){
Entity.addEffect(Player.get(), 19, 60, 1, false, false)}
});




// file: rit/FR.js

IDRegistry.genItemID("firain");
Item.createItem("firain", "Огненный дождь", {name: "fir", meta: 0}, {stack: 1});

IDRegistry.genItemID("mystbum");
Item.createItem("mystbum", "Странная бумага", {name: "Bum", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.mystbum, count: 1, data: 0}, [
"b b",
" a ",
"b b"
], ['a', 339, 0, 'b', 377, 0]);
Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.mystbum&&block.id==BlockID.per){ World.setBlock(coords.x,coords.y, coords.z, BlockID.bumAga, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.firain){
Player.decreaseCarriedItem(1);

var ent = Entity.spawn(coords.x+2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(ent, 0, -0.09, 0);

var et = Entity.spawn(coords.x-2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(et, 0, -0.09, 0);

var en = Entity.spawn(coords.x+2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(en, 0, -0.09, 0);

var egh = Entity.spawn(coords.x-2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(egh, 0, -0.09, 0);

var n = Entity.spawn(coords.x, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(n, 0, -0.09, 0);
var er = Entity.spawn(coords.x, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(er, 0, -0.09, 0);

var em = Entity.spawn(coords.x+3, coords.y+10, coords.z, 94); 
Entity.setVelocity(em, 0, -0.09, 0);

var ep = Entity.spawn(coords.x-3, coords.y+10, coords.z, 94); 
Entity.setVelocity(ep, 0, -0.09, 0);

var emi = Entity.spawn(coords.x+4, coords.y+10, coords.z, 94); 
Entity.setVelocity(emi, 0, -0.09, 0);
var epo = Entity.spawn(coords.x-4, coords.y+10, coords.z, 94); 
Entity.setVelocity(epo, 0, -0.09, 0);

var ezi = Entity.spawn(coords.x-3, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(ezi, 0, -0.09, 0);
var elj = Entity.spawn(coords.x+3, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(elj, 0, -0.09, 0);
var etk = Entity.spawn(coords.x+4, coords.y+10, coords.z+4, 94); 
Entity.setVelocity(etk, 0, -0.09, 0);
var esk = Entity.spawn(coords.x+
-4, coords.y+10, coords.z-4, 94); 
Entity.setVelocity(esk, 0, -0.09, 0);

}});





IDRegistry.genBlockID("bumAga"); 
Block.createBlock("bumAga", [{name: "буГаГа", texture: [["stone", 0]], inCreative: false}]);
Block.registerDropFunction("bumAga", function(coords, id, data, diggingLevel, toolLevel){ 
(coords.x,coords.y, coords.z, 0);  [0, 0, 0];});

function getBumModel() { var model = BlockRenderer.createModel();
model.addBox (0, 0, 0, 0.9, 0.1, 0.9, "Pura", 0);
model.addBox (0, 0.11, 0, 1, 0.12, 1, "Bum", 0);
return model;
}
var Bum = new ICRender.Model(); 
var model = getBumModel()
Bum.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.bumAga, -1, Bum);


Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.OgonKu&&block.id==BlockID.bumAga){
Player.decreaseCarriedItem(1);

var en = Entity.spawn(coords.x, coords.y, coords.z, 93);

var n = Entity.spawn(coords.x, coords.y, coords.z, 93); 

var e = Entity.spawn(coords.x, coords.y, coords.z, 93);
Player.addItemToInventory (ItemID.firain, 1, 0);


World.setBlock(coords.x,coords.y, coords.z, BlockID.per, 0);
}});








// file: rit/rit.js

IDRegistry.genItemID("pur");
Item.createItem("pur", "Пергамент", {name: "Pur", meta: 0}, {stack: 10});

IDRegistry.genBlockID("per"); 
Block.createBlock("per", [{name: "Пергамент со знаком", texture: [["Pura", 0]], inCreative: true}]);
function createPerRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (0, 0.01, 0, 1, 0.03, 1);
render.addEntry(model);
}
Block.setBlockShape(BlockID.per, {x: 0, y: 0, z: 0}, {x: 1, y: 0.03, z: 1});



Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.RukoyatE&&block.id==BlockID.per){ World.setBlock(coords.x,coords.y, coords.z, BlockID.ruk, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});




// file: Mob/Zo.js

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




// file: rit/K.js

IDRegistry.genBlockID("ruk"); 
Block.createBlock("ruk", [{name: "Рукоять", texture: [["stone", 0]], inCreative: false}]);
Block.registerDropFunction("ruk", function(coords, id, data, diggingLevel, toolLevel){ 
(coords.x,coords.y, coords.z, 0);  [0, 0, 0];});

function getRpModel() { var model = BlockRenderer.createModel();
model.addBox (0, 0, 0, 0.9, 0.1, 0.9, "Pura", 0);
model.addBox (0, 0.11, 0, 1, 0.12, 1, "ruk", 0);
return model;
}
var Rp = new ICRender.Model(); 
var model = getRpModel()
Rp.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.ruk, -1, Rp);


Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.OgonKu&&block.id==BlockID.ruk){
Player.decreaseCarriedItem(1);

var ent = Entity.spawn(coords.x+1, coords.y+10, coords.z-1, 94); 
Entity.setVelocity(ent, 0, -0.09, 0);

var et = Entity.spawn(coords.x-1, coords.y+10, coords.z-1, 94); 
Entity.setVelocity(et, 0, -0.09, 0);

var en = Entity.spawn(coords.x+1, coords.y+10, coords.z+1, 94); 
Entity.setVelocity(en, 0, -0.09, 0);

var en = Entity.spawn(coords.x-1, coords.y+10, coords.z+1, 94); 
Entity.setVelocity(en, 0, -0.09, 0);

var n = Entity.spawn(coords.x, coords.y+20, coords.z-3, 85); 
Entity.setVelocity(n, 0, -0.09, 0);

Player.addItemToInventory (ItemID.PhSw, 1, 0);
World.setBlock(coords.x,coords.y, coords.z, BlockID.per, 0);
}});








// file: rit/Stol.js

IDRegistry.genBlockID("stoli"); 
Block.createBlock("stoli", [{name: "Стол", texture: [["stoli", 0]], inCreative: false}]);
function getStolModel() { var model = BlockRenderer.createModel();
model.addBox (0.1, 0, 0.1, 0.8, 0.3, 0.8,  "stone", 0);
model.addBox (0.3, 0.3, 0.3, 0.6, 0.7, 0.6,  "stone", 0);
model.addBox (0, 0.7, 0, 1, 1, 1,  "stone", 0);
return model;
}
var Stol = new ICRender.Model(); 
var model = getStolModel()
Stol.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.stoli, -1, Stol);

IDRegistry.genItemID("St");
Item.createItem("St", "Стол", {name: "St", meta: 0}, {stack: 1});
Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.St){ World.setBlock(coords.x,coords.y+1, coords.z, BlockID.stoli, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});




