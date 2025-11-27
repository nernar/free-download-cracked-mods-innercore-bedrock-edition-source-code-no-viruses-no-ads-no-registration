var Paxels = {
	addItem: function(id, material, i1, i2, i3, i4){
	
IDRegistry.genItemID(id + "Paxel");

Item.createItem(id + "Paxel", id + " Paxel", {name: id + "Paxel", meta: 0}, {stack: 1});

Item.setToolRender(ItemID[id + "Paxel"], true);

ToolAPI.registerTool(ItemID[id + "Paxel"], material, ["stone", "dirt", "wood"], {damage: 0});

Item.setEnchantType(ItemID[id + "Paxel"], Native.EnchantType.axe, 15);

Item.addCreativeGroup("Paxel", "Paxel",[
	ItemID[id + "Paxel"]
]);

Item.addRepairItemIds(ItemID[id + "Paxel"], [ItemID[id + "Paxel"],i1,i2,i3]);

Item.setAllowedInOffhand(ItemID[id + "Paxel"], true);

Item.setGlint(ItemID[id + "Paxel"], false);



Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "Paxel"], count: 1, data: 0}, [
	"abc",
	" d ",
	" d "
], ['a', i1, -1, 'b', i2, -1, 'c', i3,-1,'d', i4,-1]);});}}

ToolAPI.addToolMaterial("paxel1", {
      durability: 120, 
      level: 1, 
      efficiency: 4, 
      damage: 3, 
      enchantability: 15
});

ToolAPI.addToolMaterial("paxel2", {
      durability: 264, 
      level: 2, 
      efficiency: 6, 
      damage: 4, 
      enchantability: 15
});

ToolAPI.addToolMaterial("paxel3", {
      durability: 500, 
      level: 3, 
      efficiency: 8, 
      damage: 5, 
      enchantability: 15
});

ToolAPI.addToolMaterial("paxel4", {
      durability: 3030, 
      level: 4, 
      efficiency: 10, 
      damage: 6, 
      enchantability: 15
});

ToolAPI.addToolMaterial("paxel5", {
      durability: 2565, 
      level: 5, 
      efficiency: 12, 
      damage: 7, 
      enchantability: 15
});

Paxels.addItem("Wood", "paxel1", 269, 270, 271, 280);
Paxels.addItem("Stone", "paxel2", 273, 274, 275, 280);
Paxels.addItem("Iron", "paxel3", 256, 257, 258, 280);
Paxels.addItem("Diamond", "paxel4", 277, 278, 279, 280);
Paxels.addItem("Gold", "paxel5", 284, 285, 286, 280);

Translation.addTranslation("Wood Paxel", {ru: "Деревянный паксель"}, {en: "Wood Paxel"});
Translation.addTranslation("Stone Paxel", {ru: "Каменный паксель"}, {en: "Stone Paxel"});
Translation.addTranslation("Iron Paxel", {ru: "Железный паксель"}, {en: "Iron Paxel"});
Translation.addTranslation("Diamond Paxel", {ru: "Алмазный паксель"}, {en: "Diamond Paxel"});
Translation.addTranslation("Gold Paxel", {ru: "Золотой паксель"}, {en: "Gold Paxel"});



