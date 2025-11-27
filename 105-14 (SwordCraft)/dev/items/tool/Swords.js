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
