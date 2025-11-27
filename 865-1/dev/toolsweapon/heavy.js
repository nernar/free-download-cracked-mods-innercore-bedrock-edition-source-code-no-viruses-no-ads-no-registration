var HeavySwords = {
	addItem: function(id, material, i1, i2, i3, i4){
IDRegistry.genItemID(id + "HeavySword");
Item.createItem(id + "HeavySword", id + " Heavy Sword" + "\n" + "dmg", {name: id + "HeavySword", meta: 0}, {stack: 1});
Item.setToolRender(ItemID[id + "HeavySword"], true);
ToolAPI.registerTool(ItemID[id + "HeavySword"], material, ["plant"], {damage: 0});

Item.setEnchantType(ItemID[id + "HeavySword"], Native.EnchantType.weapon, 15);

Item.addCreativeGroup("HeavySword", Translation.translate("HeavySword"), [
	ItemID[id + "HeavySword"]
]);

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "HeavySword"], count: 1, data: 0}, [
	" aa",
	"aaa",
	"ba "
], ['a', i1, -1, 'b', i2, -1]);});
	}
	}



ToolAPI.addToolMaterial("woodHS", {
      durability: 60, 
      level: 5, 
      efficiency: 2, 
      damage: 8, 
      enchantability: 15
});


ToolAPI.addToolMaterial("stoneHS", {
      durability: 132, 
      level: 5, 
      efficiency: 2, 
      damage: 10, 
      enchantability: 15
});

ToolAPI.addToolMaterial("ironHS", {
      durability: 251, 
      level: 5, 
      efficiency: 2, 
      damage: 12, 
      enchantability: 15
});

ToolAPI.addToolMaterial("goldHS", {

      durability: 567, 
      level: 5, 
      efficiency: 20, 
      damage: 10, 
      enchantability: 15
});

ToolAPI.addToolMaterial("diamondHS", {
      durability: 1600, 
      level: 5, 
      efficiency: 2, 
      damage: 14, 
      enchantability: 15
});

HeavySwords.addItem("Wood", "woodHS", 17, 280);
HeavySwords.addItem("Stone", "stoneHS", 4, 280);
HeavySwords.addItem("Gold", "goldHS", 266, 280);
HeavySwords.addItem("Iron", "ironHS", 265, 280);
HeavySwords.addItem("Diamond", "diamondHS", 264, 280);


Translation.addTranslation("Wood Heavy Sword"+"\n"+"dmg", {ru: "Деревянный большой меч"+"\n"+"§9урон"});

Translation.addTranslation("Stone Heavy Sword"+"\n"+"dmg", {ru: "Каменный большой меч"+"\n"+"§9урон"});

Translation.addTranslation("Iron Heavy Sword"+"\n"+"dmg", {ru: "Железный большой меч"+"\n"+"§9урон"});


Translation.addTranslation("Diamond Heavy Sword"+"\n"+"dmg", {ru: "Алмазный большой меч"+"\n"+"§9урон"});

Translation.addTranslation("Gold Heavy Sword"+"\n"+"dmg", {ru: "Золотой большой меч"+"\n"+"§9урон"});



Item.addRepairItemIds(ItemID.WoodHeavySword, [17]);
Item.addRepairItemIds(ItemID.StoneHeavySword, [4]);
Item.addRepairItemIds(ItemID.GoldHeavySword, [266]);
Item.addRepairItemIds(ItemID.IronHeavySword, [265]);
Item.addRepairItemIds(ItemID.DiamondHeavySword, [264]);


Item.registerNameOverrideFunction(ItemID.WoodHeavySword, function(item, name){
if(item.id){
return name+ " +8";}
return name;});

Item.registerNameOverrideFunction(ItemID.StoneHeavySword, function(item, name){
if(item.id){
return name+ " +10";}
return name;});

Item.registerNameOverrideFunction(ItemID.GoldHeavySword, function(item, name){
if(item.id){
return name+ " +10";}
return name;});

Item.registerNameOverrideFunction(ItemID.IronHeavySword, function(item, name){
if(item.id){
return name+ " +12";}
return name;});

Item.registerNameOverrideFunction(ItemID.DiamondHeavySword, function(item, name){
if(item.id){
return name+ " +14";}
return name;});