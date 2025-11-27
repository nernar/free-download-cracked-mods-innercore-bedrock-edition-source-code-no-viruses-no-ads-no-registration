function isModLoad(name){
	return FileTools.isExists(__modpack__.getModsDirectoryPath()+"/"+name);
}

let loadBuildCraft = false;
Callback.addCallback("ModsLoaded", function(){
	if(isModLoad("BuildCraft"))
		loadBuildCraft = true;
});

Callback.addCallback("PostLoaded", function(){
	if(loadBuildCraft)
		return;
Recipes.addShaped({id: ItemID.gearWooden, count: 1, data: 0 }, [
	"#a#",
	"a#a",
	"#a#"
],[
	'a', 280, 0
]);
Recipes.addShaped({id: ItemID.gearStone, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'a', 1, -1,
	'b', ItemID.gearWooden, 0
]);
Recipes.addShaped({id: ItemID.gearIron, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'a', 265, -1,
	'b', ItemID.gearStone, 0
]);
Recipes.addShaped({id: ItemID.gearGolden, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'a', 266, -1,
	'b', ItemID.gearIron, 0
]);
Recipes.addShaped({id: ItemID.gearDiamond, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'a', 264, -1,
	'b', ItemID.gearGolden, 0
]);

})


let hardRecipes = __config__.get("complex_recipes");

if(!hardRecipes){

Recipes.addShaped({id: BlockID.blockMachineWooden, count: 1, data: 0}, [
	"xax",
	"aba",
	"xax"
],[
	'a',ItemID.gearWooden,0,
	'b',280,0,
	'x',5,-1

]);
Recipes.addShaped({id: BlockID.blockMachineStone, count: 1, data: 0}, [
	"xax",
	"aba",
	"xax"
],[
	'a',ItemID.gearStone,0,
	'b',331,0,
	'x',4,0
]);

Recipes.addShaped({id: BlockID.blockMachineIron, count: 1, data: 0}, [
	"xax",
	"aba",
	"xax"
],[
	'a',ItemID.gearIron,0,
	'b',331,0,
	'x',265,0
]);

Recipes.addShaped({ id: ItemID.factoryBattery, count: 1, data: 0 }, [
	" b ",
	" a "
],[
	'a', 265, 0,
	'b', 331, 0
]);


Recipes.addShaped({
	id: BlockID.machineEnergyGeneratorFuel, 
	count: 1, 
	data: 0
}, [
	" b ",
	" a ",
	" c "
], [
	'a', BlockID.blockMachineIron,0,
	'b', 61,0,
	'c', ItemID.factoryBattery,0
]);
Recipes.addShaped({
	id: BlockID.machineEnergyGeneratorMoon,
	count: 1,
	data: 0
}, [
	"aaa",
	"bbb",
	" c "
],[
	'a',20,0,
	'b',263,-1,
	'c',BlockID.blockMachineIron,0
]);
Recipes.addShaped({id: BlockID.machineEnergyGeneratorSolar, count: 1, data: 0}, [
	"aaa",
	"bbb",
	" c "
],[
	'a',20,0,
	'b',263,-1,
	'c',BlockID.blockMachineIron,0
]);
Recipes.addShaped({
	id: BlockID.machineEnergyGeneratorStar,
	count: 1,
	data: 0
}, [
	"a",
	"b"
],[
	'a',BlockID.machineEnergyGeneratorSolar,0,
	'b',BlockID.machineEnergyGeneratorMoon,0
]);
Recipes.addShaped({id: BlockID.machineEnergyGeneratorWind, count: 1, data: 0}, [
	" c ",
	"cbc",
	" a ",
], [
	'a', BlockID.blockMachineIron,0,
	'b',280,0,
	'c',265,0
]);
Recipes.addShaped({id: BlockID.machineMechanicFarm, count: 1, data: 0}, [
		"#a#",
		"bob",
		"#x#"
],[
	'a',359,0,
	'b',ItemID.gearWooden,0,
	'o', BlockID.machineMechanicHoe, 0,
	'x', BlockID.machineMechanicPumpWater, 0
]);
Recipes.addShaped({id: BlockID.fishingnet, count: 1, data: 0}, [
	"a a",
	" a ",
	"a a"
], ['a', 287,0]);
Recipes.addShaped({id: BlockID.machineMechanicFarmFish, count: 1, data: 0}, [
	"a","x","b"
],[
	'a', 346, 0,
	'x', BlockID.blockMachineWooden, 0,
	'b', BlockID.fishingnet,0
]);
Recipes.addShaped({
	id: BlockID.machineMechanicHoe,
	count: 1,
	data: 0
}, [
	"a",
	"x",
	""
], [
	'a', 294, 0,
	'x', BlockID.blockMachineWooden, 0
]);
Recipes.addShaped({ id: BlockID.machineMechanicPumpLava, count: 1, data: 0 }, [
	"a","x","a"
],[
	'a', 49, 0,
	'x', BlockID.machineMechanicPumpWater, 0
]);
Recipes.addShaped({id: BlockID.machineMechanicPumpWater, count: 1, data: 0}, [
	"a","x","a"
],[
	'a', 325, 0,
	'x', BlockID.blockMachineWooden, 0
]);
Recipes.addShaped({id: BlockID.machineMechanicQuarry, count: 1, data: 0}, [
	"a","x"
],[
	'a', 274, 0,
	'x', BlockID.blockMachineWooden, 0
]);
Recipes.addShaped({id: BlockID.machineMechanicFarmReed, count: 1, data: 0}, [
	"a","b","x"
],[
	'a', 338, 0,
	'b', 359,0,
	'x', BlockID.blockMachineWooden, 0
]);
Recipes.addShaped({id: BlockID.machineMechanicSawmill, count: 1, data: 0}, [
	"a","x"
],[
	'a', 275, 0,
	'x', BlockID.blockMachineWooden, 0
]);
Recipes.addShaped({ id: BlockID.machineMechanicTowerCrossbow, count: 1, data: 0 }, [
	"a", "x"
], [
	'a', 261, 0,
	'x', BlockID.blockMachineWooden, 0
]);
Recipes.addShaped({ id: BlockID.machineMechanicTowerFlame, count: 1, data: 0 }, [
	"c",
	"a",
	"x"
], [
	'a', 261, 0,
	'c', 377, 0,
	'x', BlockID.blockMachineWooden, 0
]);
Recipes.addShaped({ id: BlockID.machineMechanicTowerSword, count: 1, data: 0 }, [
	"a", "x"
], [
	'a', 272, 0,
	'x', BlockID.blockMachineWooden, 0
]);
Recipes.addShaped({id: BlockID.energy_cable, count: 2, data: 0}, [
	"aba"
], ['a',331,0,'b',265,0]);
Recipes.addShaped({id: BlockID.iron_cable, count: 2, data: 0}, [
	"aba"
], ['a',265,0,'b',331,0]);
Recipes.addShaped({id: BlockID.machineEnergyTeslaTower, count: 1, data: 0}, [
	"bbb",
	"cac",
	"bbb"
], ['a', BlockID.blockMachineIron,0,'b',265,0,'c',331,0]);
Recipes.addShaped({
    id: BlockID.machineEnergyStationAssembler, 
    count: 1, 
    data: 0
}, [
    "#e#",
    "cbc",
    "#a#"
], [
    'a', BlockID.blockMachineIron,0,
    'b', 58,0,
    'c', ItemID.gearDiamond,0,
    'e', ItemID.factoryBattery,0
]);
Recipes.addShaped({
	id: BlockID.machineEnergyStationRepair, 
	count: 1, 
	data: 0
}, [
	"c",
	"a"
], [
	'a', BlockID.blockMachineIron,0,
	'c', 145,0,
	'e', ItemID.factoryBattery,0
]);
Recipes.addShaped({id: BlockID.machineEnergyLiquidCrucible, count: 1, data: 0}, [
	"cec",
	"cbc",
	"cac"
], [
	'a', BlockID.blockMachineIron,0,
	'b',61,0,
	'c',49,0,
	'e',ItemID.factoryBattery,0
]);
Recipes.addShaped({id: BlockID.energyAutoClick, count: 1, data: 0}, [
	"beb",
	"bab",
	"cac"
], [
	'a', BlockID.blockMachineIron,0,
	'b',61,0,
	'c',265,0,
	'e',ItemID.factoryBattery,0
]);
Recipes.addShaped({ id: ItemID.factoryWrench, count: 1, data: 0 }, [
    "a a",
    " a ",
    " a "
],[
    'a', 265, 0
    ]);
    
    
    
    
    
    
    
    
    
    
    
    
    
}else{
//complex recipes






Recipes.addShaped({ id: ItemID.factoryWrench, count: 1, data: 0 }, [
    "a a",
    " a ",
    " a "
],[
    'a', 265, 0
    ]);

Recipes.addShaped({id: BlockID.blockMachineWooden, count: 1, data: 0}, [
	"xax",
	"ici",
	"xax"
],[
	'a',ItemID.gearWooden,0,
	'i', ItemID.gearStone, 0,
	'c',264,0,
	'x',5,-1

]);
Recipes.addShaped({id: BlockID.blockMachineStone, count: 1, data: 0}, [
	"xax",
	"aba",
	"xax"
],[
	'a',ItemID.gearStone,0,
	'b',BlockID.blockMachineWooden,0,
	'x',4,0
]);

Recipes.addShaped({id: BlockID.blockMachineIron, count: 1, data: 0}, [
	"xax",
	"dbd",
	"xbx"
],[
	'a',ItemID.gearGolden,0,
	'd',ItemID.factoryBattery,0,
	'b',BlockID.blockMachineStone,0,
	'x',265,0
]);

Recipes.addShaped({ id: ItemID.factoryBattery, count: 1, data: 0 }, [
	" b ",
	"cac",
	" d "
],[
	'a', 265, 0,
	'b', 331, 0,
	'c', 265, 0,
	'd', 264, 0
]);


Recipes.addShaped({
	id: BlockID.machineEnergyGeneratorFuel, 
	count: 1, 
	data: 0
}, [
	"ibi",
	"iai",
	"ici"
], [
	'a', BlockID.blockMachineIron,0,
	'b', 61,0,
	'c', ItemID.factoryBattery,0,
	'i', 265, 0
]);
Recipes.addShaped({
	id: BlockID.machineEnergyGeneratorMoon,
	count: 1,
	data: 0
}, [
	"aaa",
	"bbb",
	" c "
],[
	'a',20,0,
	'b',263,-1,
	'c',BlockID.machineEnergyGeneratorFuel,0
]);
Recipes.addShaped({id: BlockID.machineEnergyGeneratorSolar, count: 1, data: 0}, [
	"aaa",
	"bbb",
	" c "
],[
	'a',20,0,
	'b',263,-1,
	'c',BlockID.machineEnergyGeneratorFuel,0
]);
Recipes.addShaped({
	id: BlockID.machineEnergyGeneratorStar,
	count: 1,
	data: 0
}, [
	"a",
	"b"
],[
	'a',BlockID.machineEnergyGeneratorSolar,0,
	'b',BlockID.machineEnergyGeneratorMoon,0
]);
Recipes.addShaped({id: BlockID.machineEnergyGeneratorWind, count: 1, data: 0}, [
	" e ",
	"cbc",
	"dad",
], [
	'a', BlockID.machineEnergyGeneratorFuel,0,
	'b',280,0,
	'c',265,0,
	'e',ItemID.factoryBattery,0,
	'd',ItemID.gearDiamond,0
]);
Recipes.addShaped({id: BlockID.machineMechanicFarm, count: 1, data: 0}, [
		"iai",
		"bob",
		"ixi"
],[
	'a',359,0,
	'b',ItemID.gearWooden,0,
	'o', BlockID.machineMechanicHoe, 0,
	'x', BlockID.machineMechanicPumpWater, 0,
	'i', ItemID.gearIron,0
]);
Recipes.addShaped({id: BlockID.fishingnet, count: 1, data: 0}, [
	"aba",
	"aaa",
	"aba"
], ['a', 287,0 , 'b', 280, 0]);
Recipes.addShaped({id: BlockID.machineMechanicFarmFish, count: 1, data: 0}, [
	" a ",
	"gxg",
	"bbb"
],[
	'a', 346, 0,
	'x', BlockID.blockMachineWooden, 0,
	'b', BlockID.fishingnet,0,
	'g', ItemID.gearStone,0
]);
Recipes.addShaped({
	id: BlockID.machineMechanicHoe,
	count: 1,
	data: 0
}, [
	" a ",
	"gxg",
	" g "
], [
	'a', VanillaItemID.iron_hoe, 0,
	'x', BlockID.blockMachineWooden, 0,
	'g', ItemID.gearStone,0
]);
Recipes.addShaped({ id: BlockID.machineMechanicPumpLava, count: 1, data: 0 }, [
	"a",
	"ixi",
	"d"
],[
	'a', 49, 0,
	'x', BlockID.machineMechanicPumpWater, 0,
	'i', ItemID.gearIron,0,
	'd', ItemID.gearDiamond,0
]);
Recipes.addShaped({id: BlockID.machineMechanicPumpWater, count: 1, data: 0}, [
	" a ",
	"fxf",
	" a "
],[
	'a', 325, 0,
	'x', BlockID.blockMachineWooden, 0,
	'f',ItemID.gearIron,0
]);
Recipes.addShaped({id: BlockID.machineMechanicQuarry, count: 1, data: 0}, [
	"a","gxg", " d "
],[
	'a', VanillaItemID.iron_pickaxe, 0,
	'x', BlockID.blockMachineWooden, 0,
	'g', ItemID.gearGolden, 0,
	"d", ItemID.gearDiamond, 0
]);
Recipes.addShaped({id: BlockID.machineMechanicFarmReed, count: 1, data: 0}, [
	"a","b","x"
],[
	'a', ItemID.gearStone, 0,
	'b', 359,0,
	'x', BlockID.blockMachineWooden, 0
]);
Recipes.addShaped({id: BlockID.machineMechanicSawmill, count: 1, data: 0}, [
	" a ",
	"ixi",
	"ggg"
],[
	'a', VanillaItemID.iron_axe, 0,
	'x', BlockID.blockMachineWooden, 0,
	"i", ItemID.gearStone, 0,
	"g", ItemID.gearGolden, 0
]);
Recipes.addShaped({ id: BlockID.machineMechanicTowerCrossbow, count: 1, data: 0 }, [
	"a", "dxd"
], [
	'a', 261, 0,
	'd', ItemID.gearGolden, 0,
	'x', BlockID.blockMachineWooden, 0
]);
Recipes.addShaped({ id: BlockID.machineMechanicTowerFlame, count: 1, data: 0 }, [
	"c",
	"dad",
	" x "
], [
	'a', 261, 0,
	'c', 377, 0,
	'd', ItemID.gearGolden, 0,
	'x', BlockID.blockMachineWooden, 0
]);
Recipes.addShaped({ id: BlockID.machineMechanicTowerSword, count: 1, data: 0 }, [
	"a", "dxd"
], [
	'a', 272, 0,
	'd', ItemID.gearGolden, 0,
	'x', BlockID.blockMachineWooden, 0
]);
Recipes.addShaped({id: BlockID.energy_cable, count: 2, data: 0}, [
	"aba"
], [
	'a',331,0,
	'b',265,0
]);
Recipes.addShaped({id: BlockID.iron_cable, count: 2, data: 0}, [
	"aba"
], ['a',265,0,'b',331,0]);
Recipes.addShaped({id: BlockID.machineEnergyTeslaTower, count: 1, data: 0}, [
	"bbb",
	"cac",
	"bbb"
], ['a', BlockID.blockMachineIron,0,'b',265,0,'c',ItemID.gearDiamond,0]);
Recipes.addShaped({
    id: BlockID.machineEnergyStationAssembler, 
    count: 1, 
    data: 0
}, [
    "#e#",
    "cbc",
    "#a#"
], [
    'a', BlockID.blockMachineIron,0,
    'b', 58,0,
    'c', ItemID.gearDiamond,0,
    'e', ItemID.factoryBattery,0
]);
Recipes.addShaped({
	id: BlockID.machineEnergyStationRepair, 
	count: 1, 
	data: 0
}, [
	"c",
	"a"
], [
	'a', BlockID.blockMachineIron,0,
	'c', 145,0,
	'e', ItemID.factoryBattery,0
]);
Recipes.addShaped({id: BlockID.machineEnergyLiquidCrucible, count: 1, data: 0}, [
	"cec",
	"dad",
	"cac"
], [
	'a', BlockID.blockMachineIron,0,
	'b',61,0,
	'c',49,0,
	"d", ItemID.gearDiamond, 0,
	'e',ItemID.factoryBattery,0
]);
Recipes.addShaped({id: BlockID.energyAutoClick, count: 1, data: 0}, [
	"beb",
	"bab",
	"cac"
], [
	'a', BlockID.blockMachineIron,0,
	'b',61,0,
	'c',265,0,
	'e',ItemID.factoryBattery,0
]);
ModAPI.addAPICallback("ENR", function(api){
Recipes.addShaped({id: BlockID.energyAutoHammer, count: 1, data: 0}, [
	"eee",
	"bab",
	"cac"
], [
	'a', BlockID.blockMachineIron,0,
	'b',265,0,
	'c',ItemID.gearIron,0,
	'e',ItemID.factoryBattery,0
]);

Recipes.addShaped({id: BlockID.energyAutoSieve, count: 1, data: 0}, [
	"beb",
	"cac",
	"gbg"
], [
	'a', BlockID.blockMachineIron,0,
	'b',265,0,
	'c',ItemID.gearIron,0,
	'e',ItemID.factoryBattery,0,
	'g',ItemID.gearGolden,0
]);

});

ModAPI.addAPICallback("ProjectE", function(){
	Recipes.addShaped({id: BlockID.cobblestone_generator, count: 1, data: 0}, [
	" e",
	"bab",
	"ckc"
], [
	'a', BlockID.blockMachineIron,0,
	'b',265,0,
	"k",BlockID.energyCollector1,0,
	'c',ItemID.gearIron,0,
	'e',ItemID.factoryBattery,0
]);

});

Recipes.addShaped({id: ItemID.factory_update_base, count: 2, data: 0}, [
	"bbb",
	"bcb",
	"bbb"
], [
	'b',265,0,
	'c',ItemID.gearStone,0,
]);

Recipes.addShaped({id: ItemID.factory_update_1, count: 1, data: 0}, [
	"bcb",
	"cec",
	"bcb"
], [
	'b',265,0,
	'c',ItemID.gearStone,0,
	"e",ItemID.factory_update_base,0
]);

Recipes.addShaped({id: ItemID.factory_update_2, count: 1, data: 0}, [
	" c ",
	"beb",
	" c "
], [
	'b',728,0,
	'c',ItemID.gearIron,0,
	"e",ItemID.factory_update_1,0
]);

Recipes.addShaped({id: BlockID.liquid_pipe, count: 3, data: 0}, [
	"bbb",
	"c c",
	"bbb"
], [
	'b',265,0,
	'c',ItemID.gearStone,0,
]);

Recipes.addShaped({id: BlockID.machineEnergyLiquidLoader, count: 1, data: 0}, [
	" c ",
	"bab",
	" c "
], [
	'a', BlockID.blockMachineStone,0,
	'b',265,0,
	'c',ItemID.gearStone,0,
]);
Recipes.addShaped({id: BlockID.machineEnergyLiquidPump, count: 1, data: 0}, [
	" e ",
	"bab",
	" c "
], [
	'a', BlockID.blockMachineStone,0,
	'b',265,0,
	'c',ItemID.gearStone,0,
	'e',ItemID.factoryBattery,0,
]);

Recipes.addShaped({id: BlockID.steam_generator, count: 1, data: 0}, [
	" e ",
	"bab",
	"bcb"
], [
	'a', BlockID.blockMachineIron,0,
	'b',265,0,
	'c',ItemID.gearIron,0,
	'e',ItemID.factoryBattery,0,
]);

Recipes.addShaped({id: BlockID.steam_manufacturer, count: 1, data: 0}, [
	"bcb",
	"bab",
	"bcb"
], [
	'a', BlockID.blockMachineIron,0,
	'b',265,0,
	'c',ItemID.gearIron,0,
]);


Recipes.addShaped({id: BlockID.machineBatteryController, count: 1, data: 0}, [
	"bcb",
	"cac",
	"beb"
], [
	'a', BlockID.blockMachineIron,0,
	'b',264,0,
	'c',ItemID.factoryBattery,0,
	'e',BlockID.machineEnergyTeslaTower,0
]);

Recipes.addShaped({id: BlockID.machineBatteryPort, count: 1, data: 0}, [
	" c ",
	" a ",
	" e "
], [
	'a', VanillaBlockID.redstone_block,0,
	'c',ItemID.gearIron,0,
	'e', BlockID.blockMachineIron,0,
]);
}
