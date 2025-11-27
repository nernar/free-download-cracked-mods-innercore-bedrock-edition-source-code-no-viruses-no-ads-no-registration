var battleaxes = {
	addItem: function(id, material, i1, i2, i3, i4){
IDRegistry.genItemID(id + "battleaxe");

Item.createItem(id + "battleaxe", id + " battle axe", {name: id + "battleaxe", meta: 0}, {stack: 1});

Item.setToolRender(ItemID[id + "battleaxe"], true);

ToolAPI.registerTool(ItemID[id + "battleaxe"], material, ["wood"], {damage: 0});

Item.setEnchantType(ItemID[id + "battleaxe"], Native.EnchantType.axe, 15);

Item.addCreativeGroup("battleaxe", Translation.translate("battleaxe"), [
	ItemID[id + "battleaxe"]
]);


Item.addRepairItemIds(ItemID[id + "battleaxe"], [ItemID[id + "battleaxe"],i1,i2]);

Item.setAllowedInOffhand(ItemID[id + "battleaxe"], true);

Item.setGlint(ItemID[id + "battleaxe"], false);







Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "battleaxe"], count: 1, data: 0}, [
	"aba",
	" b ",
	" b "
], ['a', i1, -1, 'b', i2, -1]);});
	}
	}



ToolAPI.addToolMaterial("woodBA", {
      durability: 60, 
      level: 5, 
      efficiency: 2, 
      damage: 6, 
      enchantability: 15
});


ToolAPI.addToolMaterial("stoneBA", {
      durability: 132, 
      level: 5, 
      efficiency: 4, 
      damage: 7, 
      enchantability: 15
});

ToolAPI.addToolMaterial("ironBA", {
      durability: 251, 
      level: 5, 
      efficiency: 6, 
      damage: 8, 
      enchantability: 15
});

ToolAPI.addToolMaterial("goldBA", {

      durability: 33, 
      level: 5, 
      efficiency: 18, 
      damage: 9, 
      enchantability: 15
});

ToolAPI.addToolMaterial("diamondBA", {
      durability: 1562, 
      level: 5, 
      efficiency: 10, 
      damage: 10, 
      enchantability: 15
});

battleaxes.addItem("wood", "woodBA", 271, 280);
battleaxes.addItem("stone", "stoneBA", 275, 280);
battleaxes.addItem("gold", "goldBA", 286, 280);
battleaxes.addItem("iron", "ironBA", 258, 280);
battleaxes.addItem("diamond", "diamondBA", 279, 280);




Translation.addTranslation("wood battle axe", {ru: "Деревянный боевой топор"+"\n"+"§9урон +6"});

Translation.addTranslation("stone battle axe", {ru: "Каменный боевой топор"+"\n"+"§9урон +7"});

Translation.addTranslation("iron battle axe", {ru: "Железный боевой топор"+"\n"+"§9урон +8"});


Translation.addTranslation("diamond battle axe", {ru: "Алмазный боевой топор"+"\n"+"§9урон +10"});

Translation.addTranslation("gold battle axe", {ru: "Золотой боевой топор"+"\n"+"§9урон +9"});







