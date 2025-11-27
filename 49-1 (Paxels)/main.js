/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: api.js

var Paxels = {
	addItem: function(id, material, i1, i2, i3, i4){
IDRegistry.genItemID(id + "Paxel");
Item.createItem(id + "Paxel", id + " Paxel", {name: id + "Paxel", meta: 0}, {stack: 1});
Item.setToolRender(ItemID[id + "Paxel"], true);
ToolAPI.registerTool(ItemID[id + "Paxel"], material, ["stone", "dirt", "wood"], {damage: 5});
Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "Paxel"], count: 1, data: 0}, [
	"ab",
	"cd"
], ['a', i1, -1, 'b', i2, -1, 'c', i3,-1,'d', i4,-1]);});
	}
}

ToolAPI.addToolMaterial("gold", {
      durability: 36, 
      level: 2, 
      efficiency: 20, 
      damage: 0, 
      enchantability: 15
});

Paxels.addItem("Wood", "wood", 268, 269, 270, 271);
Paxels.addItem("Stone", "stone", 272, 273, 274, 275);
Paxels.addItem("Gold", "gold", 283, 284, 285, 286);
Paxels.addItem("Iron", "iron", 267, 256, 257, 258);
Paxels.addItem("Diamond", "diamond", 276, 277, 278, 279);




