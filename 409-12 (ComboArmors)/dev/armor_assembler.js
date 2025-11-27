IDRegistry.genItemID("assemblydrillbit");
Item.createItem("assemblydrillbit", "drill bit", {name: "assemblydrillbit", meta: 0}, {});

Recipes.addShaped({id:
ItemID.assemblydrillbit, count: 1, data: 0}, [
 "xx#",
 "   ",
 "   "
], ['#', ItemID.plateAlloy, 0, 'x',
ItemID.plateIron, 0]);

IDRegistry.genItemID("assemblydrill");
Item.createItem("assemblydrill", "assembly drill", {name: "assemblydrill", meta: 0}, {stack: 1, isTech: true});

ChargeItemRegistry.registerItem(ItemID.assemblydrill, "Eu", 10000, 0, "storage", true);

Item.registerNameOverrideFunction(ItemID.assemblydrill, ICore.ItemName.showItemStorage);

Recipes.addShaped({id:
ItemID.assemblydrill, count: 1, data: 0}, [
 "#xm",
 "  a",
 "  x"
], ['#', ItemID.assemblydrillbit, 0, 'x',
ItemID.plateIron, 0, 'a', ItemID.storageBattery, -1, 'm', ItemID.circuitBasic, 0],
ChargeItemRegistry.transportEnergy);

//сборщик брони

IDRegistry.genBlockID("ArmorAssembler");
Block.createBlockWithRotation("ArmorAssembler", [
	{name: "Armour Assembler", texture: [["armorAssembler_top", 0], ["armorAssembler_top", 0], ["armorAssembler_side", 0], ["armorAssembler_front", 0], ["armorAssembler_side", 0], ["armorAssembler_side", 0]], inCreative: true}
], "opaque");

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.ArmorAssembler, count: 1, data: 0}, [
		"xmx",
		"afa",
		"xdx"
	], ['x', 348, 0, 'a', BlockID.machineBlockAdvanced, 0, 'f', ItemID.storageLapotronCrystal, -1, 'd', ItemID.circuitAdvanced, 0, 'm', ItemID.assemblydrill, -1]);
});

Block.registerDropFunction("ArmorAssembler", function(coords, blockID, blockData, level){
	return ICore.Machine.getMachineDrop(coords, blockID, level, BlockID.machineBlockAdvanced);
});

var assembler_recipes = [];

function addAssemblerRecipe(result, source){
	assembler_recipes.push({source: source, result: result});
}

Callback.addCallback("PreLoaded", function(){
	addAssemblerRecipe({id: BlockID.compressor, count: 1}, [{id: 309, count: 1}, {id: 40, count: 2}]);
});

ModAPI.addAPICallback("ICore", function(api){
	//NANOSOLAR
	addAssemblerRecipe({id: ItemID.solar_nanoHelmet, count: 1, data: Item.getMaxDamage(ItemID.solar_nanoHelmet)}, [{id: ItemID.solar_helmet, count: 1}, {id: ItemID.nanosuitHelmet, count: 1}]);
	addAssemblerRecipe({id: ItemID.solar_nanoHelmet, count: 1, data: Item.getMaxDamage(ItemID.solar_nanoHelmet)}, [{id: ItemID.nanosuitHelmet, count: 1}, {id: ItemID.solar_helmet, count: 1}]);
	addAssemblerRecipe({id: ItemID.solar_nanoHelmet, count: 1, data: Item.getMaxDamage(ItemID.solar_nanoHelmet)}, [{id: ItemID.advSolarHelmet, count: 1}, {id: ItemID.Exo, count: 1}]);
	addAssemblerRecipe({id: ItemID.solar_nanoHelmet, count: 1, data: Item.getMaxDamage(ItemID.solar_nanoHelmet)}, [{id: ItemID.Exo, count: 1}, {id: ItemID.advSolarHelmet, count: 1}]);
	addAssemblerRecipe({id: ItemID.solar_nanoHelmet, count: 1, data: Item.getMaxDamage(ItemID.solar_nanoHelmet)}, [{id: ItemID.exosolar_helmet, count: 1}, {id: ItemID.nanoHelmet, count: 1}]);
	addAssemblerRecipe({id: ItemID.solar_nanoHelmet, count: 1, data: Item.getMaxDamage(ItemID.solar_nanoHelmet)}, [{id: ItemID.nanoHelmet, count: 1}, {id: ItemID.exosolar_helmet, count: 1}]);
	//NANOBAT
	addAssemblerRecipe({id: ItemID.nanosuitBatpack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitBatpack)}, [{id: ItemID.nanosuitChestplate, count: 1}, {id: ItemID.batpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.nanosuitBatpack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitBatpack)}, [{id: ItemID.batpack, count: 1}, {id: ItemID.nanosuitChestplate, count: 1}]);
	addAssemblerRecipe({id: ItemID.nanosuitBatpack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitBatpack)}, [{id: ItemID.exobatpack, count: 1}, {id: ItemID.nanoChestplate, count: 1}]);
    addAssemblerRecipe({id: ItemID.nanosuitBatpack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitBatpack)}, [{id: ItemID.nanoChestplate, count: 1}, {id: ItemID.exobatpack, count: 1}]);
        //NANOSUITADVBAT
    addAssemblerRecipe({id: ItemID.nanosuitAdvBatpack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitAdvBatpack)}, [{id: ItemID.exoadvBatpack, count: 1}, {id: ItemID.nanoChestplate, count: 1}]);
	addAssemblerRecipe({id: ItemID.nanosuitAdvBatpack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitAdvBatpack)}, [{id: ItemID.nanoChestplate, count: 1}, {id: ItemID.exoadvBatpack, count: 1}]);
    addAssemblerRecipe({id: ItemID.nanosuitAdvBatpack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitAdvBatpack)}, [{id: ItemID.nanosuitChestplate, count: 1}, {id: ItemID.advBatpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.nanosuitAdvBatpack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitAdvBatpack)}, [{id: ItemID.advBatpack, count: 1}, {id: ItemID.nanosuitChestplate, count: 1}]);
	addAssemblerRecipe({id: ItemID.nanosuitAdvBatpack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitAdvBatpack)}, [{id: ItemID.nanosuitBatpack, count: 1}, {id: ItemID.advBatpack, count: 1}]);
    addAssemblerRecipe({id: ItemID.nanosuitAdvBatpack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitAdvBatpack)}, [{id: ItemID.advBatpack, count: 1}, {id: ItemID.nanosuitBatpack, count: 1}]);
    //nanoenergypack
    addAssemblerRecipe({id: ItemID.nanosuitEnergypack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitEnergypack)}, [{id: ItemID.nanosuitChestplate, count: 1}, {id: ItemID.energypack, count: 1}]);
	addAssemblerRecipe({id: ItemID.nanosuitEnergypack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitEnergypack)}, [{id: ItemID.energypack, count: 1}, {id: ItemID.nanosuitChestplate, count: 1}]);
	addAssemblerRecipe({id: ItemID.nanosuitEnergypack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitEnergypack)}, [{id: ItemID.energypack, count: 1}, {id: ItemID.nanosuitAdvBatpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.nanosuitEnergypack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitEnergypack)}, [{id: ItemID.nanosuitAdvBatpack, count: 1}, {id: ItemID.energypack, count: 1}]);
	addAssemblerRecipe({id: ItemID.nanosuitEnergypack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitEnergypack)}, [{id: ItemID.exoenergypack, count: 1}, {id: ItemID.nanoChestplate, count: 1}]);
	addAssemblerRecipe({id: ItemID.nanosuitEnergypack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitEnergypack)}, [{id: ItemID.nanoChestplate, count: 1}, {id: ItemID.exoenergypack, count: 1}]);
	//nanojet
	addAssemblerRecipe({id: ItemID.nanosuitJetpack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitJetpack)}, [{id: ItemID.nanosuitChestplate, count: 1}, {id: ItemID.jetpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.nanosuitJetpack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitJetpack)}, [{id: ItemID.jetpack, count: 1}, {id: ItemID.nanosuitChestplate, count: 1}]);
	addAssemblerRecipe({id: ItemID.nanosuitJetpack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitJetpack)}, [{id: ItemID.nanoChestplate, count: 1}, {id: ItemID.advjetpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.nanosuitJetpack, count: 1, data: Item.getMaxDamage(ItemID.nanosuitJetpack)}, [{id: ItemID.advjetpack, count: 1}, {id: ItemID.nanoChestplate, count: 1}]);
	//ultimatenano
	addAssemblerRecipe({id: ItemID.Ultimatenanosuit, count: 1, data: Item.getMaxDamage(ItemID.Ultimatenanosuit)}, [{id: ItemID.nanosuitEnergypack, count: 1}, {id: ItemID.jetpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.Ultimatenanosuit, count: 1, data: Item.getMaxDamage(ItemID.Ultimatenanosuit)}, [{id: ItemID.jetpack, count: 1}, {id: ItemID.nanosuitEnergypack, count: 1}]);
	addAssemblerRecipe({id: ItemID.Ultimatenanosuit, count: 1, data: Item.getMaxDamage(ItemID.Ultimatenanosuit)}, [{id: ItemID.nanosuitJetpack, count: 1}, {id: ItemID.jetpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.Ultimatenanosuit, count: 1, data: Item.getMaxDamage(ItemID.Ultimatenanosuit)}, [{id: ItemID.jetpack, count: 1}, {id: ItemID.nanosuitJetpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.Ultimatenanosuit, count: 1, data: Item.getMaxDamage(ItemID.Ultimatenanosuit)}, [{id: ItemID.EnergyJetpack, count: 1}, {id: ItemID.nanoChestplate, count: 1}]);
	addAssemblerRecipe({id: ItemID.Ultimatenanosuit, count: 1, data: Item.getMaxDamage(ItemID.Ultimatenanosuit)}, [{id: ItemID.nanoChestplate, count: 1}, {id: ItemID.EnergyJetpack, count: 1}]);
    //nanostatic
    addAssemblerRecipe({id: ItemID.nanostatic, count: 1, data: Item.getMaxDamage(ItemID.nanostatic)}, [{id: ItemID.staticboots, count: 1}, {id: ItemID.nanosuitBoots, count: 1}]);
	addAssemblerRecipe({id: ItemID.nanostatic, count: 1, data: Item.getMaxDamage(ItemID.nanostatic)}, [{id: ItemID.nanosuitBoots, count: 1}, {id: ItemID.staticboots, count: 1}]);
	addAssemblerRecipe({id: ItemID.nanostatic, count: 1, data: Item.getMaxDamage(ItemID.nanostatic)}, [{id: ItemID.exostaticboots, count: 1}, {id: ItemID.nanoBoots, count: 1}]);
	addAssemblerRecipe({id: ItemID.nanostatic, count: 1, data: Item.getMaxDamage(ItemID.nanostatic)}, [{id: ItemID.nanoBoots, count: 1}, {id: ItemID.exostaticboots, count: 1}]);
	//QUANTUMSOLAR
	addAssemblerRecipe({id: ItemID.solar_quantHelmet, count: 1, data: Item.getMaxDamage(ItemID.solar_quantHelmet)}, [{id: ItemID.solar_helmet, count: 1}, {id: ItemID.quantsuithelmet, count: 1}]);
	addAssemblerRecipe({id: ItemID.solar_quantHelmet, count: 1, data: Item.getMaxDamage(ItemID.solar_quantHelmet)}, [{id: ItemID.quantsuithelmet, count: 1}, {id: ItemID.solar_helmet, count: 1}]);
	addAssemblerRecipe({id: ItemID.solar_quantHelmet, count: 1, data: Item.getMaxDamage(ItemID.solar_quantHelmet)}, [{id: ItemID.hybridSolarHelmet, count: 1}, {id: ItemID.Exo, count: 1}]);
	addAssemblerRecipe({id: ItemID.solar_quantHelmet, count: 1, data: Item.getMaxDamage(ItemID.solar_quantHelmet)}, [{id: ItemID.Exo, count: 1}, {id: ItemID.hybridSolarHelmet, count: 1}]);
	addAssemblerRecipe({id: ItemID.solar_quantHelmet, count: 1, data: Item.getMaxDamage(ItemID.solar_quantHelmet)}, [{id: ItemID.solar_nanoHelmet, count: 1}, {id: ItemID.quantumHelmet, count: 1}]);
	addAssemblerRecipe({id: ItemID.solar_quantHelmet, count: 1, data: Item.getMaxDamage(ItemID.solar_quantHelmet)}, [{id: ItemID.quantumHelmet, count: 1}, {id: ItemID.solar_nanoHelmet, count: 1}]);
	addAssemblerRecipe({id: ItemID.solar_quantHelmet, count: 1, data: Item.getMaxDamage(ItemID.solar_quantHelmet)}, [{id: ItemID.ultimateSolarHelmet, count: 1}, {id: ItemID.Exo, count: 1}]);
	addAssemblerRecipe({id: ItemID.solar_quantHelmet, count: 1, data: Item.getMaxDamage(ItemID.solar_quantHelmet)}, [{id: ItemID.Exo, count: 1}, {id: ItemID.ultimateSolarHelmet, count: 1}]);
	addAssemblerRecipe({id: ItemID.solar_quantHelmet, count: 1, data: Item.getMaxDamage(ItemID.solar_quantHelmet)}, [{id: ItemID.quantumHelmet, count: 1}, {id: ItemID.exosolar_helmet, count: 1}]);
	addAssemblerRecipe({id: ItemID.solar_quantHelmet, count: 1, data: Item.getMaxDamage(ItemID.solar_quantHelmet)}, [{id: ItemID.exosolar_helmet, count: 1}, {id: ItemID.quantumHelmet, count: 1}]);
	//quantumbat
	addAssemblerRecipe({id: ItemID.quantumsuitbatpack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitbatpack)}, [{id: ItemID.quantsuitchestplate, count: 1}, {id: ItemID.batpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumsuitbatpack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitbatpack)}, [{id: ItemID.batpack, count: 1}, {id: ItemID.quantsuitchestplate, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumsuitbatpack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitbatpack)}, [{id: ItemID.nanosuitBatpack, count: 1}, {id: ItemID.quantumChestplate, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumsuitbatpack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitbatpack)}, [{id: ItemID.quantumChestplate, count: 1}, {id: ItemID.nanosuitBatpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumsuitbatpack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitbatpack)}, [{id: ItemID.exobatpack, count: 1}, {id: ItemID.quantumChestplate, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumsuitbatpack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitbatpack)}, [{id: ItemID.quantumChestplate, count: 1}, {id: ItemID.exobatpack, count: 1}]);
	//quantumadvbat
	addAssemblerRecipe({id: ItemID.quantumsuitAdvbatpack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitAdvbatpack)}, [{id: ItemID.quantsuitchestplate, count: 1}, {id: ItemID.advBatpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumsuitAdvbatpack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitAdvbatpack)}, [{id: ItemID.advBatpack, count: 1}, {id: ItemID.quantsuitchestplate, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumsuitAdvbatpack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitAdvbatpack)}, [{id: ItemID.nanosuitAdvBatpack, count: 1}, {id: ItemID.quantumChestplate, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumsuitAdvbatpack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitAdvbatpack)}, [{id: ItemID.quantumChestplate, count: 1}, {id: ItemID.nanosuitAdvBatpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumsuitAdvbatpack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitAdvbatpack)}, [{id: ItemID.exoadvBatpack, count: 1}, {id: ItemID.quantumChestplate, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumsuitAdvbatpack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitAdvbatpack)}, [{id: ItemID.quantumChestplate, count: 1}, {id: ItemID.exoadvBatpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumsuitAdvbatpack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitAdvbatpack)}, [{id: ItemID.quantumsuitbatpack, count: 1}, {id: ItemID.advBatpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumsuitAdvbatpack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitAdvbatpack)}, [{id: ItemID.advBatpack, count: 1}, {id: ItemID.quantumsuitbatpack, count: 1}]);
	//quantumenergy
	addAssemblerRecipe({id: ItemID.quantumsuitEnergypack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitEnergypack)}, [{id: ItemID.quantsuitchestplate, count: 1}, {id: ItemID.energypack, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumsuitEnergypack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitEnergypack)}, [{id: ItemID.energypack, count: 1}, {id: ItemID.quantsuitchestplate, count: 1}]);
    addAssemblerRecipe({id: ItemID.quantumsuitEnergypack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitEnergypack)}, [{id: ItemID.quantumChestplate, count: 1}, {id: ItemID.exoenergypack, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumsuitEnergypack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitEnergypack)}, [{id: ItemID.exoenergypack, count: 1}, {id: ItemID.quantumChestplate, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumsuitEnergypack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitEnergypack)}, [{id: ItemID.quantumChestplate, count: 1}, {id: ItemID.nanosuitEnergypack, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumsuitEnergypack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitEnergypack)}, [{id: ItemID.nanosuitEnergypack, count: 1}, {id: ItemID.quantumChestplate, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumsuitEnergypack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitEnergypack)}, [{id: ItemID.quantumsuitAdvbatpack, count: 1}, {id: ItemID.energypack, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumsuitEnergypack, count: 1, data: Item.getMaxDamage(ItemID.quantumsuitEnergypack)}, [{id: ItemID.energypack, count: 1}, {id: ItemID.quantumsuitAdvbatpack, count: 1}]);
	//ULTIMATEQUANT
    addAssemblerRecipe({id: ItemID.Ultimatequantumsuit, count: 1, data: Item.getMaxDamage(ItemID.Ultimatequantumsuit)}, [{id: ItemID.quantumChestplate, count: 1}, {id: ItemID.Ultimatenanosuit, count: 1}]);
	addAssemblerRecipe({id: ItemID.Ultimatequantumsuit, count: 1, data: Item.getMaxDamage(ItemID.Ultimatequantumsuit)}, [{id: ItemID.Ultimatenanosuit, count: 1}, {id: ItemID.quantumChestplate, count: 1}]);
	addAssemblerRecipe({id: ItemID.Ultimatequantumsuit, count: 1, data: Item.getMaxDamage(ItemID.Ultimatequantumsuit)}, [{id: ItemID.jetpack, count: 1}, {id: ItemID.quantumsuitEnergypack, count: 1}]);
	addAssemblerRecipe({id: ItemID.Ultimatequantumsuit, count: 1, data: Item.getMaxDamage(ItemID.Ultimatequantumsuit)}, [{id: ItemID.quantumsuitEnergypack, count: 1}, {id: ItemID.jetpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.Ultimatequantumsuit, count: 1, data: Item.getMaxDamage(ItemID.Ultimatequantumsuit)}, [{id: ItemID.quantumChestplate, count: 1}, {id: ItemID.EnergyJetpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.Ultimatequantumsuit, count: 1, data: Item.getMaxDamage(ItemID.Ultimatequantumsuit)}, [{id: ItemID.EnergyJetpack, count: 1}, {id: ItemID.quantumChestplate, count: 1}]);
	//quantum static
	addAssemblerRecipe({id: ItemID.quantumstatic, count: 1, data: Item.getMaxDamage(ItemID.quantumstatic)}, [{id: ItemID.staticboots, count: 1}, {id: ItemID.quantsuitboots, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumstatic, count: 1, data: Item.getMaxDamage(ItemID.quantumstatic)}, [{id: ItemID.quantsuitboots, count: 1}, {id: ItemID.staticboots, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumstatic, count: 1, data: Item.getMaxDamage(ItemID.quantumstatic)}, [{id: ItemID.nanostatic, count: 1}, {id: ItemID.quantumBoots, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumstatic, count: 1, data: Item.getMaxDamage(ItemID.quantumstatic)}, [{id: ItemID.quantumBoots, count: 1}, {id: ItemID.nanostatic, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumstatic, count: 1, data: Item.getMaxDamage(ItemID.quantumstatic)}, [{id: ItemID.exostaticboots, count: 1}, {id: ItemID.quantumBoots, count: 1}]);
	addAssemblerRecipe({id: ItemID.quantumstatic, count: 1, data: Item.getMaxDamage(ItemID.quantumstatic)}, [{id: ItemID.quantumBoots, count: 1}, {id: ItemID.exostaticboots, count: 1}]);
	//battaryjetpack
	addAssemblerRecipe({id: ItemID.battaryjetpack, count: 1, data: Item.getMaxDamage(ItemID.battaryjetpack)}, [{id: ItemID.advjetpack, count: 1}, {id: ItemID.batpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.battaryjetpack, count: 1, data: Item.getMaxDamage(ItemID.battaryjetpack)}, [{id: ItemID.batpack, count: 1}, {id: ItemID.advjetpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.battaryjetpack, count: 1, data: Item.getMaxDamage(ItemID.battaryjetpack)}, [{id: ItemID.advBatpack, count: 1}, {id: ItemID.jetpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.battaryjetpack, count: 1, data: Item.getMaxDamage(ItemID.battaryjetpack)}, [{id: ItemID.jetpack, count: 1}, {id: ItemID.advBatpack, count: 1}]);
	//AdvJetpacks
	addAssemblerRecipe({id: ItemID.AdvJetpacks, count: 1, data: Item.getMaxDamage(ItemID.AdvJetpacks)}, [{id: ItemID.advjetpack, count: 1}, {id: ItemID.advBatpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.AdvJetpacks, count: 1, data: Item.getMaxDamage(ItemID.AdvJetpacks)}, [{id: ItemID.advBatpack, count: 1}, {id: ItemID.advjetpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.AdvJetpacks, count: 1, data: Item.getMaxDamage(ItemID.AdvJetpacks)}, [{id: ItemID.exoadvBatpack, count: 1}, {id: ItemID.jetpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.AdvJetpacks, count: 1, data: Item.getMaxDamage(ItemID.AdvJetpacks)}, [{id: ItemID.jetpack, count: 1}, {id: ItemID.exoadvBatpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.AdvJetpacks, count: 1, data: Item.getMaxDamage(ItemID.AdvJetpacks)}, [{id: ItemID.advBatpack, count: 1}, {id: ItemID.battaryjetpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.AdvJetpacks, count: 1, data: Item.getMaxDamage(ItemID.AdvJetpacks)}, [{id: ItemID.battaryjetpack, count: 1}, {id: ItemID.advBatpack, count: 1}]);
	//EnergyJetpack
	addAssemblerRecipe({id: ItemID.EnergyJetpack, count: 1, data: Item.getMaxDamage(ItemID.EnergyJetpack)}, [{id: ItemID.advjetpack, count: 1}, {id: ItemID.energypack, count: 1}]);
	addAssemblerRecipe({id: ItemID.EnergyJetpack, count: 1, data: Item.getMaxDamage(ItemID.EnergyJetpack)}, [{id: ItemID.energypack, count: 1}, {id: ItemID.advjetpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.EnergyJetpack, count: 1, data: Item.getMaxDamage(ItemID.EnergyJetpack)}, [{id: ItemID.exoenergypack, count: 1}, {id: ItemID.jetpack, count: 1}]);
	addAssemblerRecipe({id: ItemID.EnergyJetpack, count: 1, data: Item.getMaxDamage(ItemID.EnergyJetpack)}, [{id: ItemID.jetpack, count: 1}, {id: ItemID.exoenergypack, count: 1}]);
	addAssemblerRecipe({id: ItemID.EnergyJetpack, count: 1, data: Item.getMaxDamage(ItemID.EnergyJetpack)}, [{id: ItemID.energypack, count: 1}, {id: ItemID.AdvJetpacks, count: 1}]);
	addAssemblerRecipe({id: ItemID.EnergyJetpack, count: 1, data: Item.getMaxDamage(ItemID.EnergyJetpack)}, [{id: ItemID.AdvJetpacks, count: 1}, {id: ItemID.energypack, count: 1}]);
});

 guiArmorAssembler = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Armour Assembler"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	params: {       
		slot: "default_slot",
		invSlot: "default_slot"              
	},
	
	drawing: [
		{type: "background", color: android.graphics.Color.rgb(180, 180, 180)},
		{type: "bitmap", x: 630, y: 146, bitmap: "arrow_bar_background", scale: GUI_SCALE},
		{type: "bitmap", x: 550, y: 150, bitmap: "energy_small_background", scale: GUI_SCALE}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 630, y: 146, direction: 0, value: 0.5, bitmap: "arrow_bar_scale", scale: GUI_SCALE},
		"energyScale": {type: "scale", x: 550, y: 150, direction: 1, value: 0.5, bitmap: "energy_small_scale", scale: GUI_SCALE},
		"slotSource1": {type: "slot", x: 501, y: 75},
		"slotSource2": {type: "slot", x: 581, y: 75},
		"slotEnergy": {type: "slot", x: 541, y: 212, isValid: ICore.Machine.isValidEUStorage},
		"slotResult": {type: "slot", x: 790, y: 142},
		"slotUpgrade": {type: "slot", x: 900, y: 142, isValid: ICore.Upgrade.isUpgrade},
		"textInfo": {type: "text", x: 493, y: 164, width: 100, height: 30, text: "0%"},
		"textInfo1": {type: "text", x: 800, y: 470, width: 100, height: 30, text: "00:00:00"},
		"textInfo2": {type: "text", x: 765, y: 470, width: 100, height: 30, text: "00:"},
		"textInfo3": {type: "text", x: 960, y: 447, width: 100, height: 30, text: "100%"},
		"textInfo4": {type: "text", x: 880, y: 470, width: 100, height: 30, text: "Remaining"},
    }
});


ICore.Machine.registerElectricMachine(BlockID.ArmorAssembler, {
	defaultValues: {
		power_tier: 0,
		energy_storage: 10000,
		energy_consumption: 2,
		work_time: 72000,
		progress: 0,
		isActive: false
	},
	
	getGuiScreen: function(){
		return guiArmorAssembler;
	},
	
	getTransportSlots: function(){
		return {input: ["slotSource", "slotSource1", "slotResult"], output: ["slotEnergy"]};
	},
setDefaultValues: function(){
		this.data.power_tier = this.defaultValues.power_tier;
		this.data.energy_storage = this.defaultValues.energy_storage;
		this.data.energy_consumption = this.defaultValues.energy_consumption;
		this.data.work_time = this.defaultValues.work_time;
	},
	
	tick: function(){
		var sourceItems = {};
		var source;
		var result;
		for(var i = 1; i <= 2; i++){
			var slot = this.container.getSlot("slotSource" + i);
			if(slot.id > 0){
				sourceItems[slot.id] = sourceItems[slot.id] || 0;
				sourceItems[slot.id] += slot.count;
			}
		}
		for(var i in assembler_recipes){
			var recipe = assembler_recipes[i];
			source = recipe.source;
			var valid = true;
			for(var s in source){
				var count = sourceItems[source[s].id];
				if(!count || count < source[s].count){
					valid = false;
					break;
				}
			}
			if(valid){
				result = recipe.result;
				break;
			}
		}
		
		
		var resultSlot = this.container.getSlot("slotResult");
		if(result && (resultSlot.id == result.id && resultSlot.count + result.count <= 1 || resultSlot.id == 0)){
			if(this.data.energy >= 1){
				this.data.energy -= 1.9;
				this.data.progress++;
				this.activate();
			}
			else{
				this.deactivate();
			}
			if(this.data.progress >= 72000){
				for(var s in source){
					var count = source[s].count;
					for(var i = 1; i <= 2; i++){
						var slot = this.container.getSlot("slotSource" + i);
						if(slot.id == source[s].id){
							var c = Math.min(count, slot.count);
							slot.count -= c;
							count -= c;
						}
					}
				}
					resultSlot.id = result.id;
					resultSlot.data = result.data;
					resultSlot.count += result.count;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else{
			this.data.progress = 0;
			this.deactivate();
		}

        var transferByTier = {1: 32}
		var tier = this.getTier();
		var energyStorage = this.getEnergyStorage();
		this.data.energy = Math.min(this.data.energy, energyStorage);
		this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), "Eu", energyStorage - this.data.energy, transferByTier[tier], tier);
		this.container.setScale("progressScale", this.data.progress/72000);
		this.container.setScale("energyScale", this.data.energy / energyStorage);
        this.container.setText("textInfo", parseInt(this.data.energy / 100) + "%");
        this.container.setText("textInfo3", parseInt(this.data.progress / 725) + "%");
		this.container.setScale("energyScale", this.data.energy / energyStorage);

var time = 72000 - this.data.progress;
var min = parseInt(time/1200)
var sec = parseInt((time%1200) / 20);
var text = (min < 10 ? "0"+min : min) + ":" + (sec < 10 ? "0"+sec : sec);
this.container.setText("textInfo1",
text);
	},
	
	getEnergyStorage: function(){
		return this.data.energy_storage;
	},
	init: ICore.Machine.updateMachine,
	energyReceive: ICore.Machine.basicEnergyReceiveFunc
});