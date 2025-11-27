/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 4
*/



// file: armores.js

IDRegistry.genItemID("PlanksHelmet");
Item.createArmorItem("PlanksHelmet", "Деревянный Шлем", {name: "plankshelmet"}, {type: "helmet", armor: 1, durability: 55, texture: "armor/planks_0.png"});

IDRegistry.genItemID("PlanksChestPlate");
Item.createArmorItem("PlanksChestPlate", "Деревянный Нагрудник", {name: "plankschestplate"}, {type: "chestplate", armor: 2, durability: 60, texture: "armor/planks_0.png"});

IDRegistry.genItemID("PlanksLeggings");
Item.createArmorItem("PlanksLeggings", "Деревянные Поножи", {name: "planksleggings"}, {type: "leggings", armor: 2, durability: 55, texture: "armor/planks_1.png"});

IDRegistry.genItemID("PlanksBoots");
Item.createArmorItem("PlanksBoots", "Деревянные Ботинки", {name: "planksboots"}, {type: "boots", armor: 1, durability: 53, texture: "armor/planks_0.png"});

Recipes.addShaped({id: ItemID.PlanksHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', 17, 0]);

Recipes.addShaped({id: ItemID.PlanksChestPlate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', 17, 0]);

Recipes.addShaped({id: ItemID.PlanksLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', 17, 0]);

Recipes.addShaped({id: ItemID.PlanksBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', 17, 0]);




// file: Swords.js

importLib("ToolType", "*");
IDRegistry.genItemID("dirtsword");
Item.createItem("dirtsword", "Земляной меч", {name: "Dirt", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dirtsword", {durability: 25, level: 0, efficiency: 3, damage: 2.5, enchantability: 14});
ToolAPI.setTool(ItemID.dirtsword, "dirtsword", ToolType.sword);
Recipes.addShaped({id: ItemID.dirtsword, count: 1, data: 0}, [
" b ",
" b ",
" c "
], ['b', 3, 0, 'c', 280, 0]);


IDRegistry.genItemID("Legsword");
Item.createItem("Legsword", "Легендарный меч", {name: "LegSWo", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("Legsword", {durability: 350, level: 0, efficiency: 3, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.Legsword, "Legsword", ToolType.sword);
Recipes.addShaped({id: ItemID.Legsword, count: 1, data: 0}, [
" e ",
" e ",
" c "
], ['e', ItemID.LegendElem , 0, 'c', 280, 0]);




// file: armoLres.js

IDRegistry.genItemID("LegHelmet");
Item.createArmorItem("LegHelmet", "Легендарный Шлем", {name: "leghelmet"}, {type: "helmet", armor: 5, durability: 500, texture: "armor/LegendA_0.png"});

IDRegistry.genItemID("LegChestPlate");
Item.createArmorItem("LegChestPlate", "Легендарный Нарудник", {name: "legchestplate"}, {type: "chestplate", armor: 8, durability: 555, texture: "armor/LegendA_0.png"});

IDRegistry.genItemID("LegLeggings");
Item.createArmorItem("LegLeggings", "Легендарные Поножи", {name: "legleggings"}, {type: "leggings", armor: 8, durability: 550, texture: "armor/LegendA_1.png"});

IDRegistry.genItemID("LegBoots");
Item.createArmorItem("LegBoots", "Легендарные Ботинки", {name: "legboots"}, {type: "boots", armor: 5, durability: 530, texture: "armor/LegendA_0.png"});

Recipes.addShaped({id: ItemID.LegHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.LegendElem, 0]);

Recipes.addShaped({id: ItemID.LegChestPlate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.LegendElem, 0]);

Recipes.addShaped({id: ItemID.LegLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.LegendElem, 0]);

Recipes.addShaped({id: ItemID.LegBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.LegendElem, 0]);




// file: Item.js

importLib("ToolType", "*");
IDRegistry.genItemID("LegendElem");
Item.createItem("LegendElem", "Легендарный элемент", {name: "LegendElem", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.LegendElem, count: 1, data: 0}, [
"abc",
"dex",
"ict"
], ['b', 326, 0, 'c', 327, 0, 'a', 265, 0, 'c', 266, 0, 'd', 264, 0, 'e', 263, 0, 'x', 388, 0, 'i', 351, 4, 't', 331, 0]);





