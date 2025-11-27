var katanas = {
	addItem: function(id, material, i1, i2, i3, i4){
IDRegistry.genItemID(id + "katana");

Item.createItem(id + "katana", id + " katana", {name: id + "katana", meta: 0}, {stack: 1});

Item.setToolRender(ItemID[id + "katana"], true);

ToolAPI.registerTool(ItemID[id + "katana"], material, ["plant"], {damage: 0});

Item.setEnchantType(ItemID[id + "katana"], Native.EnchantType.weapon, 15);

Item.addCreativeGroup("katana", Translation.translate("katana"), [
	ItemID[id + "katana"]
]);


Item.addRepairItemIds(ItemID[id + "katana"], [ItemID[id + "katana"],i1,i2]);

Item.setAllowedInOffhand(ItemID[id + "katana"], true);

Item.setGlint(ItemID[id + "katana"], false);


Callback.addCallback("tick", function () { 
item=Player.getCarriedItem(true);
if(item.id==ItemID[id + "katana"]){
Entity.addEffect(Player.get(), 1, 1, 2*20, true);
}});





Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "katana"], count: 1, data: 0}, [
	"  a",
	" a ",
	"b  "
], ['a', i1, -1, 'b', i2, -1]);});
	}
	}



ToolAPI.addToolMaterial("woodKT", {
      durability: 90, 
      level: 5, 
      efficiency: 2, 
      damage: 6, 
      enchantability: 15
});


ToolAPI.addToolMaterial("stoneKT", {
      durability: 213, 
      level: 5, 
      efficiency: 2, 
      damage: 7, 
      enchantability: 15
});

ToolAPI.addToolMaterial("ironKT", {
      durability: 310, 
      level: 5, 
      efficiency: 2, 
      damage: 8, 
      enchantability: 15
});

ToolAPI.addToolMaterial("goldKT", {

      durability: 570, 
      level: 5, 
      efficiency: 20, 
      damage: 9, 
      enchantability: 15
});

ToolAPI.addToolMaterial("diamondKT", {
      durability: 1900, 
      level: 5, 
      efficiency: 2, 
      damage: 10, 
      enchantability: 15
});

katanas.addItem("Wood", "woodKT", 17, 268);
katanas.addItem("Stone", "stoneKT", 4, 272);
katanas.addItem("Gold", "goldKT", 266, 283);
katanas.addItem("Iron", "ironKT", 265, 267);
katanas.addItem("Diamond", "diamondKT", 276, 280);






Translation.addTranslation("Wood katana", {ru: "Деревянная катана"+"\n"+"§9урон +6"});

Translation.addTranslation("Stone katana", {ru: "Каменная катана"+"\n"+"§9урон +7"});

Translation.addTranslation("Iron katana", {ru: "Железная катана"+"\n"+"§9урон +8"});


Translation.addTranslation("Diamond katana", {ru: "Алмазная катана"+"\n"+"§9урон +10"});

Translation.addTranslation("Gold katana", {ru: "Золотая катана"+"\n"+"§9урон +9"});







