/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: paxels.js

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

      durability: 1360, 
      level: 9, 
      efficiency: 20, 
      damage: 12, 
      enchantability: 15
});

Paxels.addItem("Wood", "wood", 268, 269, 270, 271);
Item.setEnchantType(ItemID.WoodPaxel, Native.EnchantType.pickaxe, 14);

Paxels.addItem("Stone", "stone", 272, 273, 274, 275);
Item.setEnchantType(ItemID.StonePaxel, Native.EnchantType.pickaxe, 14);

Paxels.addItem("Gold", "gold", 283, 284, 285, 286);
Item.setEnchantType(ItemID.GoldPaxel, Native.EnchantType.pickaxe, 40);

Paxels.addItem("Iron", "iron", 267, 256, 257, 258);
Item.setEnchantType(ItemID.IronPaxel, Native.EnchantType.pickaxe, 14);

Paxels.addItem("Diamond", "diamond", 276, 277, 278, 279);
Item.setEnchantType(ItemID.DiamondPaxel, Native.EnchantType.pickaxe, 14);



Item.addRepairItemIds(ItemID.WoodPaxel, [17]);
Item.addRepairItemIds(ItemID.StonePaxel, [4]);
Item.addRepairItemIds(ItemID.GoldPaxel, [266]);
Item.addRepairItemIds(ItemID.IronPaxel, [265]);
Item.addRepairItemIds(ItemID.DiamondPaxel, [264]);




Item.addCreativeGroup("Paxel", Translation.translate("Paxel"), [
	ItemID.WoodPaxel,
	ItemID.StonePaxel,
	ItemID.GoldPaxel,
	ItemID.IronPaxel,
	ItemID.DiamondPaxel
]);


//Native.EnchantType.pickaxe




