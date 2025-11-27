let requireGlobal = null;
let Drawers = null;

ModAPI.addAPICallback("ENR", function(api){
	requireGlobal = api.requireGlobal;
});

ModAPI.addAPICallback("DrawerAPI", function(api){
	Drawers = api.DrawerAPI.drawers;
});

Callback.addCallback("PostLoaded", function(){
	let gravels = requireGlobal("BlocksTypes.gravel");
	let sands = requireGlobal("BlocksTypes.sand");
	let dusts = requireGlobal("BlocksTypes.dust");
		
	RecipesScrutiny.reg("gl", "ingots", gravels);
	RecipesScrutiny.reg("gl", "ingots", sands);
	RecipesScrutiny.reg("gl", "ingots", dusts);
	
	RecipesScrutiny.reg("gl", "drawers", Drawers||[]);
	
	RecipesScrutiny.reg("gl", "furnace", [VanillaBlockID.furnace]);
	RecipesScrutiny.reg("gl", "wood_tools", [VanillaItemID.wooden_axe, VanillaItemID.wooden_hoe, VanillaItemID.wooden_pickaxe, VanillaItemID.wooden_shovel, VanillaItemID.wooden_sword]);
	RecipesScrutiny.reg("gl", "stone_tools", [VanillaItemID.stone_axe, VanillaItemID.stone_hoe, VanillaItemID.stone_pickaxe, VanillaItemID.stone_shovel, VanillaItemID.stone_sword]);
	RecipesScrutiny.reg("gl", "boiler", [BlockID.ex_crucibleRaw]);
	let chests = ["ironChest", "silverChest", "goldChest", "diamondChest", "crystalChest"];
	for(let i in chests)
		RecipesScrutiny.reg("gl", chests[i], [BlockID[chests[i]]]);
	
	RecipesScrutiny.reg("auto", "fuel_generator", [BlockID.machineEnergyGeneratorFuel]);
	RecipesScrutiny.reg("auto", "sawmill", [BlockID.machineMechanicSawmill]);
	RecipesScrutiny.reg("auto", "pump", [BlockID.machineMechanicPumpWater, BlockID.machineMechanicPumpLava]);
	RecipesScrutiny.reg("auto", "auto_click", [BlockID.energyAutoClick]);
	RecipesScrutiny.reg("auto", "auto_hammer", [BlockID.energyAutoHammer]);
	RecipesScrutiny.reg("auto", "iron_key", [ItemID.factoryWrench]);
	RecipesScrutiny.reg("auto", "liquid_crucible", [BlockID.machineEnergyLiquidCrucible]);
	RecipesScrutiny.reg("auto", "energyCollector", [BlockID.energyCollector1]);
	RecipesScrutiny.reg("auto", "machine_block", [BlockID.blockMachineWooden, BlockID.blockMachineStone, BlockID.blockMachineIron]);
	RecipesScrutiny.reg("auto", "tower", [BlockID.machineMechanicTowerSword, BlockID.machineMechanicTowerCrossbow, BlockID.machineMechanicTowerFlame]);
	RecipesScrutiny.reg("auto", "quarry", [BlockID.machineMechanicQuarry]);
	RecipesScrutiny.reg("auto", "auto_sieve", [BlockID.energyAutoSieve]);
	RecipesScrutiny.reg("auto", "energyCondenser", [BlockID.energyCondenser1]);
	RecipesScrutiny.reg("auto", "pipe", [BlockID.utilsWire]);
	RecipesScrutiny.reg("auto", "plumber", [BlockID.machineEnergyLiquidLoader, BlockID.liquid_pipe, BlockID.machineEnergyLiquidPump]);
	RecipesScrutiny.reg("auto", "rp_block_breaker", [BlockID.rp_block_breaker]);
	
	RecipesScrutiny.reg("industrial", "primalGenerator", [BlockID.primalGenerator]);
	RecipesScrutiny.reg("industrial", "geothermalGenerator", [BlockID.geothermalGenerator]);
	RecipesScrutiny.reg("industrial", "extractor", [BlockID.extractor]);
	RecipesScrutiny.reg("industrial", "reactor", [BlockID.nuclearReactor]);
	RecipesScrutiny.reg("industrial", "ASP", [BlockID.ASP]);
	RecipesScrutiny.reg("industrial", "HSP", [BlockID.HSP]);
	RecipesScrutiny.reg("industrial", "QSP", [BlockID.QSP]);
	RecipesScrutiny.reg("industrial", "molecularTransformer", [BlockID.molecularTransformer]);
	RecipesScrutiny.reg("industrial", "miner", [BlockID.miner]);
	RecipesScrutiny.reg("industrial", "ironFurnace", [BlockID.ironFurnace]);
	
	RecipesScrutiny.reg("storage", "diskDrive", [BlockID.diskDrive]);
	RecipesScrutiny.reg("storage", "RSmachine_casing", [BlockID.RSmachine_casing]);
	RecipesScrutiny.reg("storage", "RS_controller", [BlockID.RS_controller]);
	RecipesScrutiny.reg("storage", "RS_grid", [BlockID.RS_grid]);
	RecipesScrutiny.reg("storage", "RS_crafting_grid", [BlockID.RS_crafting_grid]);
	
	DestroyBlocks.reg("gl", "woods", ["17:0", "17:1", "17:2", "17:3", "162:0", "162:1"]);
	DestroyBlocks.reg("gl", "wood", ["17:0"]);
});

Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
	if(item.id == ItemID.quest_book)
		ScrutinyAPI.openServer(player, "skyblock");
});
