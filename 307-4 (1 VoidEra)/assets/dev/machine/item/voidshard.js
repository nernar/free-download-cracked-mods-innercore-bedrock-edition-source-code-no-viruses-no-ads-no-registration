IDRegistry.genItemID("voidshard");
Item.createItem("voidshard", "voidshard", {name: "voidshard", meta: 0}, {stack: 64});

IDRegistry.genItemID("molecule");
Item.createItem("molecule", "molecule", {name: "molecule", meta: 0}, {stack: 128});


IDRegistry.genItemID("voidplate");
Item.createItem("voidplate", "voidplate", {name: "voidplate", meta: 0}, {stack: 64});

IDRegistry.genItemID("voidingot");
Item.createItem("voidingot", "voidingot", {name: "voidingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("voiddust");
Item.createItem("voiddust", "voiddust", {name: "voiddust", meta: 0}, {stack: 64});

IDRegistry.genItemID("voidstick");
Item.createItem("voidstick", "voidstick", {name: "voidstick", meta: 0}, {stack: 64});

IDRegistry.genItemID("eyse");
Item.createItem("eyse", "eyse", {name: "eyse", data: 0});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.voidstick, count: 1, data: 0}, [
		"  a",
		" a ",
		"a  "
	], ['a', BlockID.voidplank, -1]);
});

IDRegistry.genItemID("heatConductor"); 
Item.createItem("heatConductor", "heatConductor", {name: "heatConductor", meta: 0}, {stack:64});

IDRegistry.genItemID("advancedHeatConductor"); Item.createItem("advancedHeatConductor", "advancedHeatConductor", {name: "advancedHeatConductor", meta: 0}, {stack:64});

IDRegistry.genItemID("tripleCopperPlate"); 
Item.createItem("tripleCopperPlate", "tripleCopperPlate", {name: "tripleCopperPlate", meta: 0}, {stack:64});

IDRegistry.genItemID("engineBooster"); 
Item.createItem("engineBooster", "engineBooster", {name: "engineBooster", meta: 0}, {stack:64});

IDRegistry.genItemID("superConductorCover"); 
Item.createItem("superConductorCover", "superConductorCover", {name: "superConductorCover", meta: 0}, {stack:64});

IDRegistry.genItemID("superConductor"); 
Item.createItem("superConductor", "superConductor", {name: "superConductor", meta: 0}, {stack:64});

IDRegistry.genItemID("coolingCore"); 
Item.createItem("coolingCore", "coolingCore", {name: "coolingCore", meta: 0}, {stack:64});

IDRegistry.genItemID("gravitationEngine"); 
Item.createItem("gravitationEngine", "gravitationEngine", {name: "gravitationEngine", meta: 0}, {stack:64});

IDRegistry.genItemID("magnetron"); 
Item.createItem("magnetron", "magnetron", {name: "magnetron", meta: 0}, {stack:64});

IDRegistry.genItemID("vajraCore"); 
Item.createItem("vajraCore", "vajraCore", {name: "vajraCore", meta: 0}, {stack:1});

IDRegistry.genItemID("diamondPlate"); 
Item.createItem("diamondPlate", "diamondPlate", {name: "diamondPlate", meta: 0}, {stack:64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.engineBooster, count: 1, data: 0}, [
		"axa",
		"bdb",
		"xwx"
	], ['a', 348, 0, 'x', ItemID.plateAlloy, 0, 'b', ItemID.circuitAdvanced, 0, 'd', ItemID.upgradeOverclocker, 0, 'w', ItemID.diamondPlate, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.superConductorCover, count: 3, data: 0}, [
		"axa",
		"bbb",
		"axa"
	], ['a', 348, 0, 'x', ItemID.plateReinforcedIridium, 0, 'b', ItemID.carbonPlate, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.superConductor, count: 3, data: 0}, [
		"aaa",
		"bxb",
		"aaa"
	], ['x', 266, 0, 'a', ItemID.superConductorCover, 0, 'b', ItemID.cableOptic, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.coolingCore, count: 1, data: 0}, [
		"axa",
		"bdb",
		"axa"
	], ['a', ItemID.coolantCell, -1, 'x', ItemID.advancedHeatConductor, 0, 'b', ItemID.tripleCopperPlate, 0, 'd', ItemID.plateReinforcedIridium, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.heatConductor, count: 1, data: 0}, [
		"axa",
		"bab",
		"aba"
	], ['x', ItemID.circuitBasic, 0, 'b', ItemID.plateTin, 0, 'a', ItemID.plateCopper, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.advancedHeatConductor, count: 1, data: 0}, [
		"axa",
		"bdb",
		"axa"
	], ['a', ItemID.plateLapis, 0, 'b', ItemID.heatConductor, 0, 'd', ItemID.circuitBasic, 0, 'x', ItemID.plateCopper, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.tripleCopperPlate, count: 1, data: 0}, [
		"x b",
		" b ",
		"b  "
	], ['x', ItemID.craftingHammer, -1, 'b', ItemID.plateCopper, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.magnetron, count: 1, data: 0}, [
		"axa",
		"xbx",
		"axa"
	], ['x', ItemID.plateCopper, 0, 'b', ItemID.superConductor, 0, 'a', ItemID.plateIron, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.vajraCore, count: 1, data: 0}, [
		" a ",
		"bdb",
		"xwx"
	], ['a', ItemID.magnetron, 0, 'x', ItemID.superConductor, 0, 'b', ItemID.plateReinforcedIridium, 0, 'd', ItemID.storageCrystal, -1, 'w', BlockID.storageMFE, -1]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.gravitationEngine, count: 1, data: 0}, [
		"axa",
		"bdb",
		"xwx"
	], ['a', ItemID.superConductor, 0, 'x', ItemID.plateAlloy, 0, 'b', ItemID.circuitAdvanced, 0, 'd', BlockID.storageMFE, 0, 'w', ItemID.diamondPlate, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.advancedNanoChestplate, count: 1, data: 0}, [
		"axa",
		"aba",
		"xwx"
	], ['w', ItemID.advancedElectricJetpack, -1, 'b', ItemID.nanoChestplate, -1, 'a', ItemID.carbonPlate, 0, 'x', ItemID.circuitAdvanced, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.graviChestplate, count: 1, data: 0}, [
		"axa",
		"bdb",
		"awa"
	], ['a', ItemID.superConductor, 0, 'x', ItemID.quantumChestplate, -1, 'b', ItemID.gravitationEngine, 0, 'd', BlockID.storageMFE, -1, 'w', ItemID.energypack, -1]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.advancedElectricJetpack, count: 1, data: 0}, [
		"axa",
		"bdb",
		"mwm"
	], ['a', ItemID.carbonPlate, 0, 'x', ItemID.jetpack, -1, 'b', ItemID.engineBooster, 0, 'd', ItemID.energypack, -1, 'w', ItemID.circuitAdvanced, 0, 'm', ItemID.cableOptic, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.diamondPlate, count: 1, data: 0}, [
		"x  ",
		" b ",
		"   "
	], ['x', ItemID.craftingHammer, -1, 'b', 264, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.voidplate, count: 1, data: 0}, [
		"x  ",
		" b ",
		"   "
	], ['x', ItemID.craftingHammer, -1, 'b', ItemID.voidingot, 0]);
});


