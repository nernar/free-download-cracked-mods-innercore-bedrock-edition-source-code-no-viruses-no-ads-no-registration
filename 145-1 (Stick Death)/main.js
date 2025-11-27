/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: items/tool/gg.js


importLib("ToolType", "*");


IDRegistry.genItemID("death_stick");
Item.createItem("death_stick", "Смертельная палка", {name:"stick"}, {stack:1});

ToolAPI.addToolMaterial("death_stick", {durability: 10000, level: 0, efficiency: 0, damage: 9000, enchantability: 14});
ToolAPI.setTool(ItemID.death_stick, "death_stick", ToolType.sword);


Recipes.addShaped({id:ItemID.death_stick, data:0, count:1}, ["oad", "ybs", "xbk"], ['x', 280, 0, 'o', 152 , 0, 'b', 399,0, 'a',133 , 0, 'd', 22, 0, 'y', 57, 0, 's', 41, 0, 'k', 42, 0]);











