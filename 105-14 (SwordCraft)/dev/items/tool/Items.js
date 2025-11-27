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

