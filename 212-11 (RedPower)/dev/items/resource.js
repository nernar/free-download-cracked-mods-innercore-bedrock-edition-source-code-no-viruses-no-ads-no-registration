IDRegistry.genItemID("ingotRed");
Item.createItem("ingotRed", "Red Alloy Ingot", {name: "ingot_red"});

IDRegistry.genItemID("ingotBlue");
Item.createItem("ingotBlue", "Blue Alloy Ingot", {name: "ingot_blue"});

IDRegistry.genItemID("ingotBronze");
Item.createItem("ingotBronze", "Bronze Ingot", {name: "ingot_bronze"});

IDRegistry.genItemID("ingotSilver");
Item.createItem("ingotSilver", "Silver Ingot", {name: "ingot_silver"});

IDRegistry.genItemID("ingotTin");
Item.createItem("ingotTin", "Tin Ingot", {name: "ingot_tin"});

IDRegistry.genItemID("ingotCopper");
Item.createItem("ingotCopper", "Copper Ingot", {name: "ingot_copper"});

//IDRegistry.genItemID("ingotTungsten");
//Item.createItem("ingotTungsten", "Tungsten Ingot", {name: "ingot_tungsten"});

IDRegistry.genItemID("nikolite");
Item.createItem("nikolite", "Nikolite", {name: "nikolite"});

IDRegistry.genItemID("gemRuby");
Item.createItem("gemRuby", "Ruby", {name: "ruby"});

IDRegistry.genItemID("gemSapphire");
Item.createItem("gemSapphire", "Sapphire", {name: "sapphire"});

IDRegistry.genItemID("gemGreenSapphire");
Item.createItem("gemGreenSapphire", "Green Sapphire", {name: "green_sapphire"});

IDRegistry.genItemID("indigoDye");
Item.createItem("indigoDye", "Indigo Dye", {name: "indigo_dye"});

Callback.addCallback("PreLoaded", function(){
	Recipes.addFurnace(BlockID.oreCopper, ItemID.ingotCopper, 0);
	Recipes.addFurnace(BlockID.oreTin, ItemID.ingotTin, 0);
	Recipes.addFurnace(BlockID.oreSilver, ItemID.ingotSilver, 0);
	Recipes.addShapeless({id: 35, count: 1, data: 11}, [{id: ItemID.indigoDye, data: 0}, {id: 35, data: 0}]);
	Recipes.addShapeless({id: 351, count: 1, data: 5}, [{id: ItemID.indigoDye, data: 0}, {id: 351, data: 1}]);
	Recipes.addShapeless({id: 351, count: 1, data: 6}, [{id: ItemID.indigoDye, data: 0}, {id: 351, data: 2}]);
	Recipes.addShapeless({id: 351, count: 1, data: 12}, [{id: ItemID.indigoDye, data: 0}, {id: 351, data: 15}]);
	Recipes.addShaped({id: 159, count: 8, data: 11}, [
		"aaa",
		"axa",
		"aaa"
	], ['x', ItemID.indigoDye, 0, 'a', 172, 0]);
});