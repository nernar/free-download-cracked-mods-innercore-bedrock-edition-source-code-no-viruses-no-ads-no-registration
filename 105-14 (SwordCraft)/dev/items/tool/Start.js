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

