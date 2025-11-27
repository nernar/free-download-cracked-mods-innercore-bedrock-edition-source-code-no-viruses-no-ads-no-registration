var HeavySwords = {
	addItem: function(id, material, i1, i2, i3, i4){
IDRegistry.genItemID(id + "HeavySword");

Item.createItem(id + "HeavySword", id + " Heavy Sword", {name: id + "HeavySword", meta: 0}, {stack: 1});

Item.setToolRender(ItemID[id + "HeavySword"], true);

ToolAPI.registerTool(ItemID[id + "HeavySword"], material, ["plant"], {damage: 0});

Item.setEnchantType(ItemID[id + "HeavySword"], Native.EnchantType.weapon, 15);

Item.addCreativeGroup("HeavySword", Translation.translate("HeavySword"), [
	ItemID[id + "HeavySword"]
]);


Item.addRepairItemIds(ItemID[id + "HeavySword"], [ItemID[id + "HeavySword"],i1,i2]);

Item.setAllowedInOffhand(ItemID[id + "HeavySword"], true);

Item.setGlint(ItemID[id + "HeavySword"], false);


Callback.addCallback("tick", function () { 
item=Player.getCarriedItem(true);
if(item.id==ItemID[id + "HeavySword"]){
Entity.addEffect(Player.get(), 2, 1, 2*20, true);
}});










Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "HeavySword"], count: 1, data: 0}, [
	" aa",
	"aaa",
	"ba "
], ['a', i1, -1, 'b', i2, -1]);});
	}
	}




ToolAPI.addToolMaterial("woodHS", {
      durability: 120, 
      level: 5, 
      efficiency: 2, 
      damage: 10, 
      enchantability: 15
});


ToolAPI.addToolMaterial("stoneHS", {
      durability: 262, 
      level: 5, 
      efficiency: 2, 
      damage: 12, 
      enchantability: 15
});

ToolAPI.addToolMaterial("ironHS", {
      durability: 510, 
      level: 5, 
      efficiency: 2, 
      damage: 14, 
      enchantability: 15
});

ToolAPI.addToolMaterial("goldHS", {

      durability: 5670, 
      level: 5, 
      efficiency: 20, 
      damage: 16, 
      enchantability: 15
});

ToolAPI.addToolMaterial("diamondHS", {
      durability: 3000, 
      level: 5, 
      efficiency: 2, 
      damage: 18, 
      enchantability: 15
});

HeavySwords.addItem("Wood", "woodHS", 17, 280);
HeavySwords.addItem("Stone", "stoneHS", 4, 280);
HeavySwords.addItem("Gold", "goldHS", 266, 280);
HeavySwords.addItem("Iron", "ironHS", 265, 280);
HeavySwords.addItem("Diamond", "diamondHS", 264, 280);


Translation.addTranslation("Wood Heavy Sword", {ru: "Деревянный большой меч"+"\n"+"§9урон +10"});

Translation.addTranslation("Stone Heavy Sword", {ru: "Каменный большой меч"+"\n"+"§9урон +12"});

Translation.addTranslation("Iron Heavy Sword", {ru: "Железный большой меч"+"\n"+"§9урон +14"});

Translation.addTranslation("Diamond Heavy Sword", {ru: "Алмазный большой меч"+"\n"+"§9урон +18"});

Translation.addTranslation("Gold Heavy Sword", {ru: "Золотой большой меч"+"\n"+"§9урон +16"});









