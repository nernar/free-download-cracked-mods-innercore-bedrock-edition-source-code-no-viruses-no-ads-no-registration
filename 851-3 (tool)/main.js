/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: armor.js

Recipes.addShaped({id: ItemID.redium_Sword, count: 1, data: 0}, [" a ", " a ", " d "], ['a', ItemID.redium_Ingot, 0, 'd', 280, 0]); 

Recipes.addShaped({id: ItemID.redium_Pickaxe, count: 1, data: 0}, 
   ["aaa",
    " d ",
    " d "], ['a', ItemID.redium_Ingot, 0, 'd', 280, 0]);
Recipes.addShaped({id: ItemID.redium_Axe, count: 1, data: 0}, ["aa ", "ad ", " d "], ['a', ItemID.redium_Ingot, 0, 'd', 280, 0]);
Recipes.addShaped ({id: ItemID.redium_Hoe, count: 1, data: 0}, ["aa ", " d ", " d "], ['a', ItemID.redium_Ingot, 0, 'd', 280, 0]);
Recipes.addShaped({id: ItemID.redium_Shovel, count: 1, data: 0}, [" a ", " d ", " d "], ['a', ItemID.redium_Ingot, 0, 'd', 280, 0]);
                 
Recipes.addShaped({id: ItemID.blue_Sword, count: 1, data: 0}, [" a ", " a ", " d "], ['a', ItemID.blue_ingot, 0, 'd', 280, 0]);    
Recipes.addShaped({id: ItemID.blue_Pickaxe, count: 1, data: 0}, ["aaa", " d ", " d "], ['a', ItemID.blue_ingot, 0, 'd', 280, 0]);  
Recipes.addShaped({id: ItemID.blue_Axe, count: 1, data: 0}, ["aa ", "ad ", " d "], ['a', ItemID.blue_ingot, 0, 'd', 280, 0]);  
Recipes.addShaped({id: ItemID.blue_Hoe, count: 1, data: 0}, ["aa ", " d ", " d "], ['a', ItemID.blue_ingot, 0, 'd', 280, 0]); 
Recipes.addShaped({id: ItemID.blue_Shovel, count: 1, data: 0}, [" a ", " d ", " d "], ['a', ItemID.blue_ingot, 0, 'd', 280, 0]);  
  
  
Recipes.addShaped({id: ItemID.purp_Sword, count: 1, data: 0}, [" a ", [ " a " ], " d "], ['a', ItemID.purp_ingot, 0, 'd', 280, 0]);  
Recipes.addShaped({id: ItemID.purp_Pickaxe, count: 1, data: 0}, ["aaa", [ " d " ], " d "], ['a', ItemID.purp_ingot, 0, 'd', 280, 0]); 
Recipes.addShaped({id: ItemID.purp_Axe, count: 1, data: 0}, ["aa ", [ "ad " ], " d "], ['a', ItemID.purp_ingot, 0, 'd', 280, 0]); 
Recipes.addShaped({id: ItemID.purp_Hoe, count: 1, data: 0}, ["aa ", [ " d " ], " d "], ['a', ItemID.purp_ingot, 0, 'd', 280, 0]); 
Recipes.addShaped({id: ItemID.purp_Shovel, count: 1, data: 0}, [" a ", [ " d " ], " d "], ['a', ItemID.purp_ingot, 0, 'd', 280, 0]);  



Recipes.addFurnace(BlockID.rediumOre, 0, ItemID.redium_Ingot, 0);
Recipes.addFurnace(BlockID.blueOre, 0, ItemID.blue_ingot, 0);
Recipes.addFurnace(BlockID.purpOre, 0, ItemID.purp_ingot, 0);


IDRegistry.genItemID("redium_Ingot");
IDRegistry.genItemID("blue_ingot");
IDRegistry.genItemID("purp_ingot");

Item.createItem("redium_Ingot", "Redium Ingot", {name: "redium_ingot", meta: 0}, {stack: 64}); //слиток 1 уровень
Item.createItem("blue_ingot", "Blutonium Ingot", {name: "blue_ingot", meta: 0}, {stack: 64});  //слиток 2 уровень
Item.createItem("purp_ingot", "Ferom Ingot", {name: "purp_ingot", meta: 0}, {stack: 64});


IDRegistry.genBlockID("rediumOre");
Block.createBlock("rediumOre", [
    {name: "Redium Ore", texture: [["redium_ore", 0]], inCreative: true}]); 
IDRegistry.genBlockID("blueOre");
Block.createBlock("blueOre", [
{name: "Blutonium Ore", texture: [["blue_ore", 0]], inCreative: true}]);    
IDRegistry.genBlockID("purpOre");
Block.createBlock("purpOre", [
{name: "Ferom Ore", texture: [["purp_ore", 0]], inCreative: true}]);   
    
    
    
    
    
    
 Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 20);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.rediumOre ,
   data: 0,
   size: 6,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});


Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 15);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.blueOre ,
   data: 0,
   size: 4,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});



Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 10);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.purpOre ,
   data: 0,
   size: 2,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});



importLib("ToolType", "*");
IDRegistry.genItemID("redium_Sword");
IDRegistry.genItemID("redium_Pickaxe");
IDRegistry.genItemID("redium_Axe");
IDRegistry.genItemID("redium_Hoe");
IDRegistry.genItemID("redium_Shovel");

IDRegistry.genItemID("blue_Sword");
IDRegistry.genItemID("blue_Pickaxe");
IDRegistry.genItemID("blue_Axe");
IDRegistry.genItemID("blue_Hoe");
IDRegistry.genItemID("blue_Shovel");

IDRegistry.genItemID("purp_Sword");
IDRegistry.genItemID("purp_Pickaxe");
IDRegistry.genItemID("purp_Axe");
IDRegistry.genItemID("purp_Hoe");
IDRegistry.genItemID("purp_Shovel");



Item.createItem("redium_Pickaxe", "Redium Pickaxe", {name: "redium_pickaxe", meta: 0}, {stack: 1});  //кирка
Item.createItem("redium_Sword", "Redium Sword", {name: "redium_sword", meta: 0}, {stack: 1});  //меч
Item.createItem("redium_Axe", "Redium Axe", {name: "redium_axe", meta: 0}, {stack: 1});  //топор
Item.createItem("redium_Hoe", "Redium Hoe", {name: "redium_hoe", meta: 0}, {stack: 1});  //мотыга
Item.createItem("redium_Shovel", "Redium Shovel", {name: "redium_shovel", meta: 0}, {stack: 1});  //лопата

Item.createItem("blue_Sword", "Blutonium Sword", {name: "blue_sword", meta: 0}, {stack: 1});
Item.createItem("blue_Pickaxe", "Blutonium Pickaxe", {name: "blue_pickaxe", meta: 0}, {stack: 1});
Item.createItem("blue_Axe", "Blutonium Axe", {name: "blue_axe", meta:0}, {stack: 1});
Item.createItem("blue_Hoe", "Blutonium Axe", {name: "blue_hoe", meta: 0}, {stack: 1});
Item.createItem("blue_Shovel", "Blutonium Shovel", {name: "blue_shovel", meta: 0}, {stack: 1});

Item.createItem("purp_Sword", "Ferom Sword", {name: "purp_sword", meta: 0}, {stack: 1});
Item.createItem("purp_Pickaxe", "Ferom Pickaxe", {name: "purp_pickaxe", meta: 0}, {stack: 1});
Item.createItem("purp_Axe", "Ferom Axe", {name: "purp_axe", meta: 0}, {stack: 1});
Item.createItem("purp_Hoe", "Ferom Hoe", {name: "purp_hoe", meta: 0}, {stack: 1});
Item.createItem("purp_Shovel", "Ferom Shovel", {name: "purp_shovel", meta: 0}, {stack: 1});





ToolAPI.registerSword(ItemID.redium_Sword, {level: 0, durability: 365, damage: 10}); //урон меча и тд
ToolAPI.addToolMaterial("redium", {durability: 2048, level: 4, efficiency: 8, damage: 15, enchantability: 20}); //добавление иатериала redium
ToolAPI.setTool(ItemID.redium_Pickaxe, "redium", ToolType.pickaxe);  //кирка инфа
ToolAPI.setTool(ItemID.redium_Axe, "redium", ToolType.axe);
ToolAPI.setTool(ItemID.redium_Hoe, "redium", ToolType.hoe);
ToolAPI.setTool(ItemID.redium_Shovel, "redium", ToolType.shovel);

ToolAPI.registerSword(ItemID.blue_Sword, {level: 0, durability: 565, damage: 15}); //урон меча и тд
ToolAPI.addToolMaterial("blue", {durability: 4000, level: 4, efficiency: 12, damage: 20, enchantability: 25});
ToolAPI.setTool(ItemID.blue_Pickaxe, "blue", ToolType.pickaxe);
ToolAPI.setTool(ItemID.blue_Axe, "blue", ToolType.axe);
ToolAPI.setTool(ItemID.blue_Hoe, "blue", ToolType.hoe);
ToolAPI.setTool(ItemID.blue_Shovel, "blue", ToolType.shovel);

ToolAPI.registerSword(ItemID.purp_Sword, {level: 0, durability: 1024, damage: 20});
ToolAPI.addToolMaterial("purp", {durability: 10000, level: 4, efficiency: 15, damage: 25, enchantability: 30});
ToolAPI.setTool(ItemID.purp_Pickaxe, "purp", ToolType.pickaxe);
ToolAPI.setTool(ItemID.purp_Axe, "purp", ToolType.axe);
ToolAPI.setTool(ItemID.purp_Hoe, "purp", ToolType.hoe);
ToolAPI.setTool(ItemID.purp_Shovel, "purp", ToolType.shovel);














