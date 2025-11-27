/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 23
*/



// file: header.js

//by temeyd
IMPORT("flags");
IMPORT("ToolLib");
IMPORT("EnergyNet");
IMPORT("ChargeItem");
IMPORT("TileRender");
IMPORT("StorageInterface");
var ENERGY_PACK_TICK = ICore.requireGlobal("ENERGY_PACK_TICK");
var QUANTUM_ARMOR_FUNCS = ICore.requireGlobal("QUANTUM_ARMOR_FUNCS");

// constants
const GUI_SCALE = 3.2;

//armor_assembler
var IC_WIRES = {};
function setupBlockAsWire(id, maxVoltage, insulationLevels){
	EU.registerWire(id, maxVoltage, wireBurnoutFunc);
	IC_WIRES[id] = insulationLevels || 0;
}




// file: translation.js

﻿Translation.addTranslation("NanoSuit Helmet", {ru: "Улучшенный нано-шлем"});
Translation.addTranslation("NanoSuit BoduArmuor", {ru: "Улучшенная нано-кираса"});
Translation.addTranslation("NanoSuit Leggings", {ru: "Улучшенные нано-поножи"});
Translation.addTranslation("NanoSuit Boots", {ru: "Улучшенные нано-ботинки"});
Translation.addTranslation("QuantumSuit Helmet", {ru: "Улучшенный квантовый-шлем"});
Translation.addTranslation("QuantumSuit BoduArmuor", {ru: "Улучшенная квантовая-кираса"});
Translation.addTranslation("QuantumSuit Leggings", {ru: "Улучшенные квантовые-поножи"});
Translation.addTranslation("QuantumSuit Boots", {ru: "Улучшенные квантовые-ботинки"});
Translation.addTranslation("Solar Helmet", {ru: "Шлем с солнечной батареей"});
Translation.addTranslation("Solar NanoSuit Helmet", {ru: "Нановолокный шлем с солнечной батареей"});
Translation.addTranslation("Solar QuantumSuit Helmet", {ru: "Квантовый шлем с солнечной батареей"});
Translation.addTranslation("NanoSuit Batpack", {ru: "Нано-кираса с аккумуляторным ранцем"});
Translation.addTranslation("NanoSuit AdvBatpack", {ru: "Нано-кираса с прод. аккумуляторным ранцем"});
Translation.addTranslation("NanoSuit Energypack", {ru: "Нано-кираса с энергетическим ранцем"});
Translation.addTranslation("NanoSuit Jetpack", {ru: "Нано-кираса с реактивным ранцем"});
Translation.addTranslation("Ultimate NanoSuit Bodyarmour", {ru: "Нано-кираса с энергетическим реактивным ранцем"});
Translation.addTranslation("QuantumSuit Batpack", {ru: "Квантовая-кираса с аккумуляторным ранцем"});
Translation.addTranslation("QuantumSuit AdvBatpack", {ru: "Квантовая-кираса с прод. аккумуляторным ранцем"});
Translation.addTranslation("QuantumSuit Energypack", {ru: "Квантовая-кираса с энергетическим ранцем"});
Translation.addTranslation("Ultimate QuantumSuit Bodyarmour", {ru: "Квантовая-кираса с энергетическим реактивным ранцем"});
Translation.addTranslation("Static Boots", {ru: "Электростатические ботики"});
Translation.addTranslation("Static NanoSuit Boots", {ru: "Электростатические нано-ботинки"});
Translation.addTranslation("Static QuantumSuit Boots", {ru: "Электростатические квантовые-ботинки"});
Translation.addTranslation("Electric Jetpack", {ru: "Улучшенный электрический реактивный ранец"});
Translation.addTranslation("Batpack", {ru: "Улучшенный аккумуляторный ранец"});
Translation.addTranslation("AdvBatpack", {ru: "Улучшенный прод. аккумуляторный ранец"});
Translation.addTranslation("Energypack", {ru: "Улучшенный энергетический ранец"});
Translation.addTranslation("Battery Jetpack", {ru: "Аккумуляторный реактивный ранец"});
Translation.addTranslation("AdvJetpack", {ru: "Продвинутый аккумуляторный реактивный ранец"});
Translation.addTranslation("EnergyJetpack", {ru: "Энергетический реактивный ранец"});
Translation.addTranslation("Solar helmet", {ru: "Улучшенный шлем с солнечной батареей"});
Translation.addTranslation("Static boots", {ru: "Улучшенные электростатические ботинки"});

Translation.addTranslation("Armour Assembler", {ru: "Сборщик брони"});
Translation.addTranslation("ExoSuit Upgrade Module Installed", {ru: "Модуль улучшения установлен"});
Translation.addTranslation("Power Tier: 1", {ru: "Напряжение: Т1"});
Translation.addTranslation("Power Tier: 2", {ru: "Напряжение: Т2"}); 
Translation.addTranslation("Power Tier: 3", {ru: "Напряжение: Т3"}); 
Translation.addTranslation("Power Tier: 4", {ru: "Напряжение: Т4"});
Translation.addTranslation("Exosuit Upgrade Module", {ru: "Модуль улучшения"});
Translation.addTranslation("drill bit", {ru: "Сверло"});
Translation.addTranslation("assembly drill", {ru: "Дрель"});
Translation.addTranslation("Hover Mode disabled", {ru: "Режим парения вылключен"});
Translation.addTranslation("Hover Mode enabled", {ru: "Режим парения включен"});




// file: upgrade/ExoSuit.js

IDRegistry.genItemID("Exo");
Item.createItem("Exo", "Exosuit Upgrade Module", {name: "Exo", meta: 0}, {});
Recipes.addShaped({id:
ItemID.Exo, count: 4, data: 0}, [
 "xxx",
 "x#x",
 "xxx"
], ['#', ItemID.circuitBasic, 0, 'x',
ItemID.plateIron, 0]);




// file: upgrade/ExoSolar1.js

IDRegistry.genItemID("ExoSolar");
Item.createItem("ExoSolar", "Модуль улучшения солнечной батареи", {name: "mv_solar_module", meta: 0}, {});
Recipes.addShaped({id:
ItemID.ExoSolar, count: 1, data: 0}, [
 "xxx",
 "c#c",
 "xxx"
], ['#', BlockID.solarPanel, 0, 'x',
ItemID.plateIron, 0, 'c', ItemID.cableCopper1, 0]);




// file: upgrade/hv_solar_module.js

IDRegistry.genItemID("ExohvSolar");
Item.createItem("ExohvSolar", "Высоковольтный модуль улучшения солнечной батареи", {name: "hv_solar_module", meta: 0}, {});
Recipes.addShaped({id:
ItemID.ExohvSolar, count: 1, data: 0}, [
 "xxx",
 "c#c",
 "xxx"
], ['#', BlockID.hvsa, 0, 'x',
ItemID.plateIron, 0, 'c', ItemID.cableOptic, 0]);




// file: upgrade/lv_solar_module.js

IDRegistry.genItemID("ExolvSolar");
Item.createItem("ExolvSolar", " Модуль улучшения солнечной батареи среднего напряжения", {name: "lv_solar_module", meta: 0}, {});
Recipes.addShaped({id:
ItemID.ExolvSolar, count: 1, data: 0}, [
 "xxx",
 "c#c",
 "xxx"
], ['#', BlockID.mvsa, 0, 'x',
ItemID.plateIron, 0, 'c', ItemID.cableGold2, 0]);




// file: armor_assembler.js

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

addAssemblerRecipe({id: ItemID.solar_nanoHelmet64, count: 1, data: Item.getMaxDamage(ItemID.solar_nanoHelmet64)}, [{id: ItemID.solar_nanoHelmet, count: 1}, {id: ItemID.solar_nanoHelmet, count: 1}]);

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




// file: armor/solarHelmet.js

IDRegistry.genItemID("solar_helmet");
Item.createArmorItem("solar_helmet", "Solar Helmet", {name: "solar_helmet"}, {type: "helmet", armor: 0, durability: 1893, texture: "armor/solar_1.png", isTech: false});

Recipes.addShaped({id: ItemID.solar_helmet, count: 1, data: Item.getMaxDamage(ItemID.solar_helmet)}, [
		"aaa",
		"axa",
		"ccc"
	], ['a', 265, 0, 'x', BlockID.solarPanel, 0, 'c', ItemID.cableCopper1, 0]);

ChargeItemRegistry.registerItem(ItemID.solar_helmet, "Eu", -1, 3);

function registerHELMET(id, level, tranfer){
 Armor.registerFuncs(id, {
  hurt: function(){
   return false;
  },
  tick: function(slot, index, maxDamage){
   return SOLAR_HELMET(slot, maxDamage, level, tranfer);
  }
 });
}

var getLightLevel = ModAPI.requireGlobal("Level.getBrightness");
 var SOLAR_HELMET = function(slot, maxDamage, level, transfer){
var pos = Player.getPosition();
var light = getLightLevel(Math.floor(pos.x), Math.floor(pos.y+1), Math.floor(pos.z));

var isSunny = World.getWeather().rain < 1 && World.getWeather().thunder < 1;
 if(World.getThreadTime()%20==0 && isSunny && canSeeSky(pos.x, pos.y, pos.z)){
     var item = 
     Player.getArmorSlot(1);
     var energyAdd = ChargeItemRegistry.addEnergyTo(item, "Eu", item.data - 1, transfer*1, level);
     if(energyAdd > 0){
         slot.data += energyAdd;

Player.setArmorSlot(1, item.id, 1, item.data, item.extra);
         return true;
  }
    }
    return false;
}

function canSeeSky(x, y, z){while(y < 127){if(World.getBlockID(x, y, z) > 0) return false; y++;
}
return true;
}
registerHELMET("solar_helmet", 3, 1);




// file: armor/staticBoots.js

IDRegistry.genItemID("staticboots");
Item.createArmorItem("staticboots", "Static Boots", {name: "rubber_boots"}, {type: "boots", armor: 4, durability: 625, texture: "armor/rubber_1.png", isTech: false});
ChargeItemRegistry.registerItem(ItemID.staticboots, "Eu", -1, 10);

Recipes.addShaped({id: ItemID.staticboots, count: 1, data: Item.getMaxDamage(ItemID.staticboots)}, [
	" a ",
	" b ",
    "xxx"
], ['a', 309, 0, 'b', 35, 0, 'x', ItemID.cableCopper1, 0],
ChargeItemRegistry.transportEnergy);

function registerBOOTS(id, level, tranfer){
 Armor.registerFuncs(id, {
  hurt: function(){
   return false;
  },
  tick: function(slot, index, maxDamage){
   return STATIC_BOOTS(slot, maxDamage, level, tranfer);
  }
 });
}

 var STATIC_BOOTS = function(slot, maxDamage, level, transfer){
 if(World.getThreadTime()%20==0){
     var item = 
     Player.getArmorSlot(1);
     var energyAdd = ChargeItemRegistry.addEnergyTo(item, "Eu", item.data - 1, transfer*1, level);
     if(energyAdd > 0){
         slot.data += energyAdd;

Player.setArmorSlot(1, item.id, 1, item.data, item.extra);
         return true;
  }
    }
    return false;
}
registerBOOTS("staticboots", 3, 1);




// file: armor/nanoSuit.js

IDRegistry.genItemID("nanosuitHelmet"); IDRegistry.genItemID("nanosuitHelmetUncharged");
IDRegistry.genItemID("nanosuitChestplate"); IDRegistry.genItemID("nanosuitChestplateUncharged");
IDRegistry.genItemID("nanosuitLeggings"); IDRegistry.genItemID("nanosuitLeggingsUncharged");
IDRegistry.genItemID("nanosuitBoots"); IDRegistry.genItemID("nanosuitBootsUncharged");

Item.createArmorItem("nanosuitHelmet", "NanoSuit Helmet", {name: "nanosuit_helmet"}, {type: "helmet", armor: 3, durability: 625, texture: "armor/nanosuit_1.png", isTech: true});
Item.createArmorItem("nanosuitChestplate", "NanoSuit BoduArmuor", {name: "nanosuit_chestplate"}, {type: "chestplate", armor: 7, durability: 625, texture: "armor/nanosuit_1.png", isTech: true});
Item.createArmorItem("nanosuitLeggings", "NanoSuit Leggings", {name: "nanosuit_leggings"}, {type: "leggings", armor: 5, durability: 625, texture: "armor/nanosuit_2.png", isTech: true});
Item.createArmorItem("nanosuitBoots", "NanoSuit Boots", {name: "nanosuit_boots"}, {type: "boots", armor: 3, durability: 625, texture: "armor/nanosuit_1.png", isTech: true});

Item.createArmorItem("nanosuitHelmetUncharged", "NanoSuit Helmet", {name: "nanosuit_helmet"}, {type: "helmet", armor: 0, durability: 0, texture: "armor/nanosuit_1.png", isTech: true});
Item.createArmorItem("nanosuitChestplateUncharged", "NanoSuit BoduArmuor", {name: "nanosuit_chestplate"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/nanosuit_1.png", isTech: true});
Item.createArmorItem("nanosuitLeggingsUncharged", "NanoSuit Leggings", {name: "nanosuit_leggings"}, {type: "leggings", armor: 0, durability: 0, texture: "armor/nanosuit_2.png", isTech: true});
Item.createArmorItem("nanosuitBootsUncharged", "NanoSuit Boots", {name: "nanosuit_boots"}, {type: "boots", armor: 0, durability: 0, texture: "armor/nanosuit_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.nanosuitHelmet, "Eu", 1000000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanosuitHelmetUncharged, "Eu", 1000000, 3, "armor");
ChargeItemRegistry.registerItem(ItemID.nanosuitChestplate, "Eu", 1000000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanosuitChestplateUncharged, "Eu", 1000000, 3, "armor");
ChargeItemRegistry.registerItem(ItemID.nanosuitLeggings, "Eu", 1000000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanosuitLeggingsUncharged, "Eu", 1000000, 3, "armor");
ChargeItemRegistry.registerItem(ItemID.nanosuitBoots, "Eu", 1000000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanosuitBootsUncharged, "Eu", 1000000, 3, "armor");

ICore.ItemName.setRarity(ItemID.nanosuitHelmet, 1);
ICore.ItemName.setRarity(ItemID.nanosuitChestplate, 1);
ICore.ItemName.setRarity(ItemID.nanosuitLeggings, 1);
ICore.ItemName.setRarity(ItemID.nanosuitBoots, 1);

Item.registerNameOverrideFunction(ItemID.nanosuitHelmet, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.nanosuitChestplate, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.nanosuitLeggings, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.nanosuitBoots, ICore.ItemName.showItemStorage);

ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitHelmet, {charged: ItemID.nanosuitHelmet, uncharged: ItemID.nanosuitHelmetUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitHelmetUncharged, {charged: ItemID.nanosuitHelmet, uncharged: ItemID.nanosuitHelmetUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitChestplate, {charged: ItemID.nanosuitChestplate, uncharged: ItemID.nanosuitChestplateUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitChestplateUncharged, {charged: ItemID.nanosuitChestplate, uncharged: ItemID.nanosuitChestplateUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitLeggings, {charged: ItemID.nanosuitLeggings, uncharged: ItemID.nanosuitLeggingsUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitLeggingsUncharged, {charged: ItemID.nanosuitLeggings, uncharged: ItemID.nanosuitLeggingsUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitBoots, {charged: ItemID.nanosuitBoots, uncharged: ItemID.nanosuitBootsUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitBootsUncharged, {charged: ItemID.nanosuitBoots, uncharged: ItemID.nanosuitBootsUncharged});

ICore.UI.setArmorButton(ItemID.nanosuitHelmet, "button_nightvision");

var NANO_ARMOR_FUNCS = ICore.requireGlobal("NANO_ARMOR_FUNCS");
	
Armor.registerFuncs("nanosuitHelmet", NANO_ARMOR_FUNCS); Armor.registerFuncs("nanosuitHelmetUncharged", NANO_ARMOR_FUNCS);
Armor.registerFuncs("nanosuitChestplate", NANO_ARMOR_FUNCS); Armor.registerFuncs("nanosuitChestplateUncharged", NANO_ARMOR_FUNCS);
Armor.registerFuncs("nanosuitLeggings", NANO_ARMOR_FUNCS); Armor.registerFuncs("nanosuitLeggingsUncharged", NANO_ARMOR_FUNCS);
Armor.registerFuncs("nanosuitBoots", NANO_ARMOR_FUNCS); Armor.registerFuncs("nanosuitBootsUncharged", NANO_ARMOR_FUNCS);

Recipes.addShaped({id: ItemID.nanosuitHelmet, count: 1, data: Item.getMaxDamage(ItemID.nanosuitHelmet)}, [
	"xxx",
	"x#x"
], ['#', ItemID.nanoHelmet, -1, 'x',
ItemID.Exo, 0], ChargeItemRegistry.transportEnergy);

Recipes.addShaped({id: ItemID.nanosuitChestplate, count: 1, data: Item.getMaxDamage(ItemID.nanosuitChestplate)}, [
	"x#x",
	"xxx",
	"xxx"
], ['#', ItemID.nanoChestplate, -1, 'x',
ItemID.Exo, 0],
ICore.ChargeRegistry.transportEnergy);

Recipes.addShaped({id: ItemID.nanosuitLeggings, count: 1, data: Item.getMaxDamage(ItemID.nanosuitLeggings)}, [
	"xxx",
	"x#x",
	"x x"
], ['#', ItemID.nanoLeggings, -1, 'x',
ItemID.Exo, 0],
ICore.ChargeRegistry.transportEnergy);

Recipes.addShaped({id: ItemID.nanosuitBoots, count: 1, data: Item.getMaxDamage(ItemID.nanosuitBoots)}, [
	"x#x",
	"x x"
], ['#', ItemID.nanoBoots, -1, 'x',
ItemID.Exo, 0],
ICore.ChargeRegistry.transportEnergy);




// file: armor/quantumSuit.js

IDRegistry.genItemID("quantsuithelmet"); IDRegistry.genItemID("quantsuithelmetUncharged");
IDRegistry.genItemID("quantsuitchestplate"); IDRegistry.genItemID("quantsuitchestplateUncharged");
IDRegistry.genItemID("quantsuitleggings"); IDRegistry.genItemID("quantsuitleggingsUncharged");
IDRegistry.genItemID("quantsuitboots"); IDRegistry.genItemID("quantsuitbootsUncharged");

Item.createArmorItem("quantsuithelmet", "QuantumSuit Helmet", {name: "quantsuit_helmet"}, {type: "helmet", armor: 4, durability: 625, texture: "armor/quantsuit_1.png", isTech: true});
Item.createArmorItem("quantsuitchestplate", "QuantumSuit BoduArmuor", {name: "quantsuit_chestplate"}, {type: "chestplate", armor: 8, durability: 625, texture: "armor/quantsuit_1.png", isTech: true});
Item.createArmorItem("quantsuitleggings", "QuantumSuit Leggings", {name: "quantsuit_leggings"}, {type: "leggings", armor: 6, durability: 625, texture: "armor/quantsuit_2.png", isTech: true});
Item.createArmorItem("quantsuitboots", "QuantumSuit Boots", {name: "quantsuit_boots"}, {type: "boots", armor: 4, durability: 625, texture: "armor/quantsuit_1.png", isTech: true});
Item.createArmorItem("quantsuithelmetUncharged", "QuantumSuit Helmet", {name: "quantsuit_helmet"}, {type: "helmet", armor: 4, durability: 625, texture: "armor/quantsuit_1.png", isTech: true});
Item.createArmorItem("quantsuitchestplateUncharged", "QuantumSuit BoduArmuor", {name: "quantsuit_chestplate"}, {type: "chestplate", armor: 8, durability: 625, texture: "armor/quantsuit_1.png", isTech: true});
Item.createArmorItem("quantsuitleggingsUncharged", "QuantumSuit Leggings", {name: "quantsuit_leggings"}, {type: "leggings", armor: 6, durability: 625, texture: "armor/quantsuit_2.png", isTech: true});
Item.createArmorItem("quantsuitbootsUncharged", "QuantumSuit Boots", {name: "quantsuit_boots"}, {type: "boots", armor: 4, durability: 625, texture: "armor/quantsuit_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.quantsuithelmet, "Eu",10000000, 4, "storage", true); 
ChargeItemRegistry.registerItem(ItemID.quantsuithelmetUncharged, "Eu", 10000000, 4, "storage");
ChargeItemRegistry.registerItem(ItemID.quantsuitchestplate, "Eu", 10000000, 4, "storage", true);
ChargeItemRegistry.registerItem(ItemID.quantsuitchestplateUncharged, "Eu", 10000000, 4, "storage");
ChargeItemRegistry.registerItem(ItemID.quantsuitleggings, "Eu", 10000000, 4, "storage", true);
ChargeItemRegistry.registerItem(ItemID.quantsuitleggingsUncharged, "Eu", 10000000, 4, "storage");
ChargeItemRegistry.registerItem(ItemID.quantsuitboots, "Eu", 10000000, 4, "storage", true);
ChargeItemRegistry.registerItem(ItemID.quantsuitbootsUncharged, "Eu", 10000000, 4, "storage");

ICore.ItemName.setRarity(ItemID.quantsuithelmet, 2);
ICore.ItemName.setRarity(ItemID.quantsuitchestplate, 2);
ICore.ItemName.setRarity(ItemID.quantsuitleggings, 2);
ICore.ItemName.setRarity(ItemID.quantsuitboots, 2);

Item.registerNameOverrideFunction(ItemID.quantsuithelmet, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.quantsuitchestplate, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.quantsuitleggings, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.quantsuitboots, ICore.ItemName.showItemStorage);

ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantsuithelmet, {charged: ItemID.quantsuithelmet, uncharged: ItemID.quantsuithelmetUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantsuithelmetUncharged, {charged: ItemID.quantsuithelmet, uncharged: ItemID.quantsuithelmetUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantsuitchestplate, {charged: ItemID.quantsuitchestplate, uncharged: ItemID.quantsuitchestplateUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantsuitchestplateUncharged, {charged: ItemID.quantsuitchestplate, uncharged: ItemID.quantsuitchestplateUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantsuitleggings, {charged: ItemID.quantsuitleggings, uncharged: ItemID.quantsuitleggingsUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantsuitleggingsUncharged, {charged: ItemID.quantsuitleggings, uncharged: ItemID.quantsuitleggingsUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantsuitboots, {charged: ItemID.quantsuitboots, uncharged: ItemID.quantsuitbootsUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantsuitbootsUncharged, {charged: ItemID.quantsuitboots, uncharged: ItemID.quantsuitbootsUncharged});

ICore.UI.setArmorButton(ItemID.quantsuithelmet, "button_nightvision");
ICore.UI.setArmorButton(ItemID.quantsuitchestplate, "button_fly");
ICore.UI.setArmorButton(ItemID.quantsuitchestplate, "button_hover");
ICore.UI.setArmorButton(ItemID.quantsuitboots, "button_jump");

var QUANTUM_ARMOR_FUNCS = ICore.requireGlobal("QUANTUM_ARMOR_FUNCS");

Armor.registerFuncs("quantsuithelmet",QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantsuithelmetUncharged", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantsuitchestplate", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantsuitchestplateUncharged", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantsuitleggings", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantsuitleggingsUncharged", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantsuitboots", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantsuitbootsUncharged", QUANTUM_ARMOR_FUNCS);

Recipes.addShaped({id: ItemID.quantsuithelmet, count: 1, data: Item.getMaxDamage(ItemID.quantsuithelmet)}, [
	"xxx",
	"x#x"
], ['#', ItemID.quantumHelmet, -1, 'x',
ItemID.Exo, 0], ChargeItemRegistry.transportEnergy);

Recipes.addShaped({id: ItemID.quantsuitchestplate, count: 1, data: Item.getMaxDamage(ItemID.quantsuitchestplate)}, [
	"x#x",
	"xxx",
	"xxx"
], ['#', ItemID.quantumChestplate, -1, 'x',
ItemID.Exo, 0],
ChargeItemRegistry.transportEnergy);

Recipes.addShaped({id: ItemID.quantsuitleggings, count: 1, data: Item.getMaxDamage(ItemID.quantsuitleggings)}, [
	"xxx",
	"x#x",
	"x x"
], ['#', ItemID.quantumLeggings, -1, 'x',
ItemID.Exo, 0],
ChargeItemRegistry.transportEnergy);

Recipes.addShaped({id: ItemID.quantsuitboots, count: 1, data: Item.getMaxDamage(ItemID.quantsuitboots)}, [
	"x#x",
	"x x"
], ['#', ItemID.quantumBoots, -1, 'x',
ItemID.Exo, 0],
ChargeItemRegistry.transportEnergy);




// file: armor/advjetpack.js

IDRegistry.genItemID("advjetpack");
Item.createArmorItem("advjetpack", "Electric Jetpack", {name: "exojetpack"}, {type: "chestplate", armor: 3, durability: 30000, texture: "armor/exojetpack_1.png", isTech: true});
ChargeItemRegistry.registerItem(ItemID.advjetpack, "Eu", 30000, 1, "storage", true);
Item.registerNameOverrideFunction(ItemID.advjetpack, ICore.ItemName.showItemStorage);

Recipes.addShaped({id: ItemID.advjetpack, count: 1, data: Item.getMaxDamage(ItemID.advjetpack)}, [
	"bab",
	"bbb",
	"bbb"
], ['a', ItemID.jetpack, -1, 'b', ItemID.Exo, 0]);

ICore.UI.setArmorButton(ItemID.advjetpack, "button_fly");
ICore.UI.setArmorButton(ItemID.advjetpack, "button_hover");

Armor.registerFuncs("advjetpack", {
	hurt: function(params, item, index, maxDamage){
		if(params.type==5){
			var vel = Player.getVelocity().y;
			var time = vel / -0.06;
			var height = 0.06 * time*time / 2;
			if(height < 22){
				if(height < 17){
					var damage = Math.floor(height) - 3;
				}else{
					var damage = Math.ceil(height) - 3;
				}
			}
			//Game.message(height + ", "+damage+", "+params.damage)
			if(damage <= 0 && height < 22){
				Game.prevent();
			}
			else if(params.damage > damage){
				Entity.setHealth(player, Entity.getHealth(player) + params.damage - damage);
			}
		}
		return false;
	},
	tick: function(slot, index, maxDamage){
		var extra = slot.extra;
		if(extra){
			var hover = extra.getBoolean("hover");
		}
		if(hover && slot.data < maxDamage){
			var vel = Player.getVelocity();
			if(vel.y < -0.1){
				Player.setVelocity(vel.x, -0.1, vel.z);
				if(World.getThreadTime() % 5 == 0){
					Player.setArmorSlot(1, slot.id, 1, Math.min(slot.data+20, maxDamage), extra);
				}
			}
		}
		return false;
	},
});




// file: armor/energy_advpacks.js

IDRegistry.genItemID("exobatpack"); 
IDRegistry.genItemID("exoadvBatpack"); 
IDRegistry.genItemID("exoenergypack");

Item.createArmorItem("exobatpack", "Batpack", {name: "exobatpack"}, {type: "chestplate", armor: 3, durability: 60000, texture: "armor/exobatpack_1.png", isTech: true});
Item.createArmorItem("exoadvBatpack", "AdvBatpack", {name: "exoadvbatpack"}, {type: "chestplate", armor: 3, durability: 600000, texture: "armor/exoadvbatpack_1.png", isTech: true});
Item.createArmorItem("exoenergypack", "Energypack", {name: "exoenergypack"}, {type: "chestplate", armor: 3, durability: 2000000, texture: "armor/exoenergypack_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.exobatpack, "Eu",  60000, 1, "storage", true); 
ChargeItemRegistry.registerItem(ItemID.exoadvBatpack, "Eu",  600000, 2, "storage", true); 
ChargeItemRegistry.registerItem(ItemID.exoenergypack, "Eu", 2000000, 3, "storage", true);

ICore.ItemName.setRarity(ItemID.exobatpack, 1);
ICore.ItemName.setRarity(ItemID.exoadvBatpack, 1);
ICore.ItemName.setRarity(ItemID.exoenergypack, 1);

Item.registerNameOverrideFunction(ItemID.exobatpack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.exoadvBatpack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.exoenergypack, ICore.ItemName.showItemStorage);

Recipes.addShaped({id: ItemID.exobatpack, count: 1, data: Item.getMaxDamage(ItemID.exobatpack)}, ["bab","bbb","bbb"], ['a', ItemID.batpack, -1, 'b', ItemID.Exo, 0]);
Recipes.addShaped({id: ItemID.exoadvBatpack, count: 1, data: Item.getMaxDamage(ItemID.exoadvBatpack)}, ["bab","bbb","bbb"], ['a', ItemID.advBatpack, -1, 'b', ItemID.Exo, 0]);
Recipes.addShaped({id: ItemID.exoenergypack, count: 1, data: Item.getMaxDamage(ItemID.exoenergypack)}, ["bab","bbb","bbb"], ['a', ItemID.energypack, -1, 'b', ItemID.Exo, 0]);

ICore.registerEnergyPack("exobatpack", 1, 32); ICore.registerEnergyPack("exoadvBatpack", 2, 256); ICore.registerEnergyPack("exoenergypack", 3, 2048);




// file: armor/exosolarhelmet.js

IDRegistry.genItemID("exosolar_helmet");
Item.createArmorItem("exosolar_helmet", "Solar helmet", {name: "exosolar"}, {type: "helmet", armor: 0, durability: 1893, texture: "armor/exosolar_1.png", isTech: false});

Recipes.addShaped({id: ItemID.exosolar_helmet, count: 1, data: Item.getMaxDamage(ItemID.exosolar_helmet)}, [
		"bbb",
		"bab"
	], ['a', ItemID.solar_helmet, -1, 'b', ItemID.Exo, 0]);

ChargeItemRegistry.registerItem(ItemID.exosolar_helmet, "Eu", -1, 3);

function registerHELMET(id, level, tranfer){
 Armor.registerFuncs(id, {
  hurt: function(){
   return false;
  },
  tick: function(slot, index, maxDamage){
   return SOLAR_HELMET(slot, maxDamage, level, tranfer);
  }
 });
}

var getLightLevel = ModAPI.requireGlobal("Level.getBrightness");
 var SOLAR_HELMET = function(slot, maxDamage, level, transfer){
var pos = Player.getPosition();
var light = getLightLevel(Math.floor(pos.x), Math.floor(pos.y+1), Math.floor(pos.z));

var isSunny = World.getWeather().rain < 1 && World.getWeather().thunder < 1;
 if(World.getThreadTime()%20==0 && isSunny && canSeeSky(pos.x, pos.y, pos.z)){
     var item = 
     Player.getArmorSlot(1);
     var energyAdd = ChargeItemRegistry.addEnergyTo(item, "Eu", item.data - 1, transfer*1, level);
     if(energyAdd > 0){
         slot.data += energyAdd;

Player.setArmorSlot(1, item.id, 1, item.data, item.extra);
         return true;
  }
    }
    return false;
}

function canSeeSky(x, y, z){while(y < 127){if(World.getBlockID(x, y, z) > 0) return false; y++;
}
return true;
}
registerHELMET("exosolar_helmet", 3, 1);




// file: armor/exostaticBoots.js

IDRegistry.genItemID("exostaticboots");
Item.createArmorItem("exostaticboots", "Static boots", {name: "exostatic"}, {type: "boots", armor: 0, durability: 625, texture: "armor/exostatic_1.png", isTech: false});
ChargeItemRegistry.registerItem(ItemID.exostaticboots, "Eu", -1, 3);

Recipes.addShaped({id: ItemID.exostaticboots, count: 1, data: Item.getMaxDamage(ItemID.exostaticboots)}, ["bab","b b"], ['a', ItemID.staticboots, -1, 'b', ItemID.Exo, 0],ChargeItemRegistry.transportEnergy);

function registerBOOTS(id, level, tranfer){
 Armor.registerFuncs(id, {
  hurt: function(){
   return false;
  },
  tick: function(slot, index, maxDamage){
   return STATIC_BOOTS(slot, maxDamage, level, tranfer);
  }
 });
}

 var STATIC_BOOTS = function(slot, maxDamage, level, transfer){
 if(World.getThreadTime()%20==0){
     var item = 
     Player.getArmorSlot(1);
     var energyAdd = ChargeItemRegistry.addEnergyTo(item, "Eu", item.data - 1, transfer*1, level);
     if(energyAdd > 0){
         slot.data += energyAdd;

Player.setArmorSlot(1, item.id, 1, item.data, item.extra);
         return true;
  }
    }
    return false;
}
registerBOOTS("exostaticboots", 3, 1);




// file: armor/nanoSolar.js

var SPH = {
	gen_day: parseInt(__config__.access("solar_panel_helmet.gen_day")),
	output: parseInt(__config__.access("solar_panel_helmet.output")),
	energy_storage: parseInt(__config__.access("solar_panel_helmet.storage"))
}

var SPH64 = {
	gen_day: parseInt(__config__.access("solar_panel_64.gen_day")),
	output: parseInt(__config__.access("solar_panel_64.output")),
	energy_storage: parseInt(__config__.access("solar_panel_64.storage"))
}

IDRegistry.genItemID("solar_nanoHelmet"); IDRegistry.genItemID("solar_nanoHelmetUncharged");

Item.createArmorItem("solar_nanoHelmet", "Solar NanoSuit Helmet", {name: "solar_nanoHelmet"}, {type: "helmet", armor: 3, durability: 625, texture: "armor/nanoadv_1.png", isTech: true});
Item.createArmorItem("solar_nanoHelmetUncharged", "Solar NanoSuit Helmet", {name: "solar_nanoHelmet"}, {type: "helmet", armor: 0, durability: 0, texture: "armor/nanoadv_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.solar_nanoHelmet, "Eu", 1000000, 3, "storage", true); 
ChargeItemRegistry.registerItem(ItemID.solar_nanoHelmetUncharged, "Eu", 1000000, 3, "storage");

ICore.ItemName.setRarity(ItemID.solar_nanoHelmet, 1);

Item.registerNameOverrideFunction(ItemID.solar_nanoHelmet, ICore.ItemName.showItemStorage);

ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.solar_nanoHelmet, {charged: ItemID.solar_nanoHelmet, uncharged: ItemID.solar_nanoHelmetUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.solar_nanoHelmetUncharged, {charged: ItemID.solar_nanoHelmet, uncharged: ItemID.solar_nanoHelmetUncharged});

ICore.UI.setArmorButton(ItemID.solar_nanoHelmet, "button_nightvision");









IDRegistry.genItemID("solar_nanoHelmet64"); IDRegistry.genItemID("solar_nanoHelmet64Uncharged");

Item.createArmorItem("solar_nanoHelmet64", "Solar NanoSuit Helmet 64", {name: "solar_nanoHelmet"}, {type: "helmet", armor: 3, durability: 625, texture: "armor/nanoadv_1.png", isTech: true});
Item.createArmorItem("solar_nanoHelmet64Uncharged", "Solar NanoSuit Helmet 64", {name: "solar_nanoHelmet"}, {type: "helmet", armor: 0, durability: 0, texture: "armor/nanoadv_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.solar_nanoHelmet64, "Eu", 1000000, 3, "storage", true); 
ChargeItemRegistry.registerItem(ItemID.solar_nanoHelmet64Uncharged, "Eu", 1000000, 3, "storage");

ICore.ItemName.setRarity(ItemID.solar_nanoHelmet64, 1);

Item.registerNameOverrideFunction(ItemID.solar_nanoHelmet64, ICore.ItemName.showItemStorage);

ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.solar_nanoHelmet64, {charged: ItemID.solar_nanoHelmet64, uncharged: ItemID.solar_nanoHelmet64Uncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.solar_nanoHelmetUncharged64, {charged: ItemID.solar_nanoHelmet64, uncharged: ItemID.solar_nanoHelmetUncharged64});

ICore.UI.setArmorButton(ItemID.solar_nanoHelmet64, "button_nightvision");



function chargeArmor(genD){
	var time = World.getWorldTime()%24000;
	var p = Player.getPosition();
	if(GenerationUtils.canSeeSky(p.x, p.y, p.z)){
		if((time >= 23500 || time < 12550) && (!World.getWeather().rain || World.getLightLevel(this.x, this.y+1, this.z) > 14)){
			var energy = genD;
		}
		for(var i = 3; i >= 0; i--){
			var armor = Player.getArmorSlot(i);
			var energyAdd = ICore.ChargeRegistry.addEnergyTo(armor, "Eu", energy, energy, 4);
			if(energyAdd > 0){
				var armorID = Player.getArmorSlot(i).id;
				if(armorID != armor.id){
					Logger.Log("Error in getArmorSlot("+i+"): id " + armor.id + " != " + armorID, "ERROR");
					continue;
				}
				energy -= energyAdd;
				Player.setArmorSlot(i, armor.id, 1, armor.data, armor.extra);
				if(energy <= 0){
					break;
				}
			}
		}
	}
}

Callback.addCallback("tick", function(){
	if(World.getThreadTime()%20 == 0){
		var slot = Player.getArmorSlot(0);
		if(slot.id == ItemID.solar_nanoHelmet64 || slot.id == ItemID.solar_nanoHelmet64Uncharged){
			chargeArmor(SPH64.gen_day*20);
		}
	}
});







function chargeArmor(genD){
	var time = World.getWorldTime()%24000;
	var p = Player.getPosition();
	if(GenerationUtils.canSeeSky(p.x, p.y, p.z)){
		if((time >= 23500 || time < 12550) && (!World.getWeather().rain || World.getLightLevel(this.x, this.y+1, this.z) > 14)){
			var energy = genD;
		}
		for(var i = 3; i >= 0; i--){
			var armor = Player.getArmorSlot(i);
			var energyAdd = ICore.ChargeRegistry.addEnergyTo(armor, "Eu", energy, energy, 4);
			if(energyAdd > 0){
				var armorID = Player.getArmorSlot(i).id;
				if(armorID != armor.id){
					Logger.Log("Error in getArmorSlot("+i+"): id " + armor.id + " != " + armorID, "ERROR");
					continue;
				}
				energy -= energyAdd;
				Player.setArmorSlot(i, armor.id, 1, armor.data, armor.extra);
				if(energy <= 0){
					break;
				}
			}
		}
	}
}

Callback.addCallback("tick", function(){
	if(World.getThreadTime()%20 == 0){
		var slot = Player.getArmorSlot(0);
		if(slot.id == ItemID.solar_nanoHelmet || slot.id == ItemID.solar_nanoHelmetUncharged){
			chargeArmor(SPH.gen_day*20);
		}
	}
});

Armor.registerFuncs("solar_nanoHelmet", NANO_ARMOR_FUNCS);
Armor.registerFuncs("solar_nanoHelmetUncharged", NANO_ARMOR_FUNCS);
Armor.registerFuncs("solar_nanoHelmet64", NANO_ARMOR_FUNCS);
Armor.registerFuncs("solar_nanoHelmet64Uncharged", NANO_ARMOR_FUNCS);








// file: armor/quantumSolar.js

IDRegistry.genItemID("solar_quantHelmet"); 
IDRegistry.genItemID("solar_quantHelmetUncharged");
Item.createArmorItem("solar_quantHelmet", "Solar QuantumSuit Helmet", {name: "solar_quantHelmet"}, {type: "helmet", armor: 4, durability: 625, texture: "armor/solarquantum_1.png", isTech: true});
Item.createArmorItem("solar_quantHelmetUncharged", "Solar QuantumSuit Helmet", {name: "solar_quantHelmet"}, {type: "helmet", armor: 4, durability: 625, texture: "armor/solarquantum_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.solar_quantHelmet, "Eu", 10000000, 4 , "storage", true);
ChargeItemRegistry.registerItem(ItemID.solar_quantHelmetUncharged, "Eu", 10000000, 4, "storage");

ICore.ItemName.setRarity(ItemID.solar_quantHelmet, 2);

Item.registerNameOverrideFunction(ItemID.solar_quantHelmet, ICore.ItemName.showItemStorage);

ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.solar_quantHelmet, {charged: ItemID.solar_quantHelmet, uncharged: ItemID.solar_quantHelmetUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.solar_quantHelmetUncharged, {charged: ItemID.solar_quantHelmet, uncharged: ItemID.solar_quantHelmetUncharged});

ICore.UI.setArmorButton(ItemID.solar_quantHelmet, "button_nightvision");

function chargeArmor(genD){
	var time = World.getWorldTime()%24000;
	var p = Player.getPosition();
	if(GenerationUtils.canSeeSky(p.x, p.y, p.z)){
		if((time >= 23500 || time < 12550) && (!World.getWeather().rain || World.getLightLevel(this.x, this.y+1, this.z) > 14)){
			var energy = genD;
		}
		for(var i = 3; i >= 0; i--){
			var armor = Player.getArmorSlot(i);
			var energyAdd = ICore.ChargeRegistry.addEnergyTo(armor, "Eu", energy, energy, 4);
			if(energyAdd > 0){
				var armorID = Player.getArmorSlot(i).id;
				if(armorID != armor.id){
					Logger.Log("Error in getArmorSlot("+i+"): id " + armor.id + " != " + armorID, "ERROR");
					continue;
				}
				energy -= energyAdd;
				Player.setArmorSlot(i, armor.id, 1, armor.data, armor.extra);
				if(energy <= 0){
					break;
				}
			}
		}
	}
}

Callback.addCallback("tick", function(){
	if(World.getThreadTime()%20 == 0){
		var slot = Player.getArmorSlot(0);
		if(slot.id == ItemID.solar_quantHelmet || slot.id == ItemID.solar_quantHelmetUncharged){
			chargeArmor(SPH.gen_day*20);
		}
	}
});

Armor.registerFuncs("solar_quantHelmet", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("solar_quantHelmetUncharged", QUANTUM_ARMOR_FUNCS);




// file: armor/nanoSuitAdvChestplate.js

IDRegistry.genItemID("nanosuitBatpack"); IDRegistry.genItemID("nanosuitBatpackUncharged");
IDRegistry.genItemID("nanosuitAdvBatpack"); IDRegistry.genItemID("nanosuitAdvBatpackUncharged");
IDRegistry.genItemID("nanosuitEnergypack"); IDRegistry.genItemID("nanosuitEnergypackUncharged");
IDRegistry.genItemID("nanosuitJetpack"); IDRegistry.genItemID("nanosuitJetpackUncharged");
IDRegistry.genItemID("Ultimatenanosuit"); IDRegistry.genItemID("UltimatenanosuitUncharged");

Item.createArmorItem("nanosuitBatpack", "NanoSuit Batpack", {name: "nanosuitbatpack"}, {type: "chestplate", armor: 7, durability: 1000, texture: "armor/nanoadv_1.png", isTech: true});
Item.createArmorItem("nanosuitAdvBatpack", "NanoSuit AdvBatpack", {name: "nanoadvbatpack"}, {type: "chestplate", armor: 7, durability: 1100, texture: "armor/nanoadv1_1.png", isTech: true});
Item.createArmorItem("nanosuitEnergypack", "NanoSuit Energypack", {name: "nanoenergypack"}, {type: "chestplate", armor: 7, durability: 1150, texture: "armor/nanoenergy_1.png", isTech: true});
Item.createArmorItem("nanosuitJetpack", "NanoSuit Jetpack", {name: "nanojetpack"}, {type: "chestplate", armor: 7, durability: 1300, texture: "armor/nanojet_1.png", isTech: true});
Item.createArmorItem("Ultimatenanosuit", "Ultimate NanoSuit Bodyarmour", {name: "ultimatenano"}, {type: "chestplate", armor: 7, durability: 1650, texture: "armor/ultimatenano_1.png", isTech: true});
Item.createArmorItem("nanosuitBatpackUncharged", "NanoSuit Batpack", {name: "nanosuitbatpack"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/nanoadv_1.png", isTech: true});
Item.createArmorItem("nanosuitAdvBatpackUncharged", "NanoSuit AdvBatpack", {name: "nanoadvbatpack"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/nanoadv1_1.png", isTech: true});
Item.createArmorItem("nanosuitEnergypackUncharged", "NanoSuit Energypack", {name: "nanoenergypack"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/nanoenergy_1.png", isTech: true});
Item.createArmorItem("nanosuitJetpackUncharged", "NanoSuit Jetpack", {name: "nanojetpack"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/nanojet_1.png", isTech: true});
Item.createArmorItem("UltimatenanosuitUncharged", "Ultimate NanoSuit Bodyarmour", {name: "ultimatenano"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/ultimatenano_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.nanosuitBatpack, "Eu", 2000000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanosuitBatpackUncharged, "Eu", 2000000, 3, "storage");
ChargeItemRegistry.registerItem(ItemID.nanosuitAdvBatpack, "Eu", 4000000, 4, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanosuitAdvBatpackUncharged, "Eu", 4000000, 4, "storage");
ChargeItemRegistry.registerItem(ItemID.nanosuitEnergypack, "Eu", 8000000, 4, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanosuitEnergypackUncharged, "Eu", 8000000, 4, "storage");
ChargeItemRegistry.registerItem(ItemID.nanosuitJetpack, "Eu", 1500000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanosuitJetpackUncharged, "Eu", 1500000, 3, "storage");
ChargeItemRegistry.registerItem(ItemID.Ultimatenanosuit, "Eu", 10000000, 4, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.UltimatenanosuitUncharged, "Eu", 10000000, 4, "storage");

ICore.ItemName.setRarity(ItemID.nanosuitBatpack, 1);
ICore.ItemName.setRarity(ItemID.nanosuitAdvBatpack, 1);
ICore.ItemName.setRarity(ItemID.nanosuitEnergypack, 1);
ICore.ItemName.setRarity(ItemID.nanosuitJetpack, 1);
ICore.ItemName.setRarity(ItemID.Ultimatenanosuit, 2);

Item.registerNameOverrideFunction(ItemID.nanosuitBatpack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.nanosuitAdvBatpack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.nanosuitEnergypack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.nanosuitJetpack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.Ultimatenanosuit, ICore.ItemName.showItemStorage);

ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitBatpack, {charged: ItemID.nanosuitBatpack, uncharged: ItemID.nanosuitBatpackUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitBatpackUncharged, {charged: ItemID.nanosuitBatpack, uncharged: ItemID.nanosuitBatpackUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitAdvBatpack, {charged: ItemID.nanosuitAdvBatpack, uncharged: ItemID.nanosuitAdvBatpackUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitAdvBatpackUncharged, {charged: ItemID.nanosuitAdvBatpack, uncharged: ItemID.nanosuitAdvBatpackUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitEnergypack, {charged: ItemID.nanosuitEnergypack, uncharged: ItemID.nanosuitEnergypackUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitEnergypackUncharged, {charged: ItemID.nanosuitEnergypack, uncharged: ItemID.nanosuitEnergypackUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitJetpack, {charged: ItemID.nanosuitJetpack, uncharged: ItemID.nanosuitJetpackUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitJetpackUncharged, {charged: ItemID.nanosuitJetpack, uncharged: ItemID.nanosuitJetpackUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.Ultimatenanosuit, {charged: ItemID.Ultimatenanosuit, uncharged: ItemID.UltimatenanosuitUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.UltimatenanosuitUncharged, {charged: ItemID.Ultimatenanosuit, uncharged: ItemID.UltimatenanosuitUncharged});
	
Armor.registerFuncs("nanosuitBatpack", NANO_ARMOR_FUNCS); Armor.registerFuncs("nanosuitBatpackUncharged", NANO_ARMOR_FUNCS);
Armor.registerFuncs("nanosuitAdvBatpack", NANO_ARMOR_FUNCS); Armor.registerFuncs("nanosuitAdvBatpackUncharged", NANO_ARMOR_FUNCS);
Armor.registerFuncs("nanosuitEnergypack", NANO_ARMOR_FUNCS); Armor.registerFuncs("nanosuitEnergypackUncharged", NANO_ARMOR_FUNCS);
Armor.registerFuncs("nanosuitJetpack", NANO_ARMOR_FUNCS); Armor.registerFuncs("nanosuitJetpackUncharged", NANO_ARMOR_FUNCS);
Armor.registerFuncs("Ultimatenanosuit", NANO_ARMOR_FUNCS); Armor.registerFuncs("UltimatenanosuitUncharged", NANO_ARMOR_FUNCS);

ICore.registerEnergyPack("nanosuitBatpack", 3, 100000); ICore.registerEnergyPack("nanosuitAdvBatpack", 3, 100000); ICore.registerEnergyPack("nanosuitEnergypack", 3, 100000);

ICore.UI.registerButton("hover_engine", {
	y: 2000,
	type: "button",
	bitmap: "button_gravi_off",
	scale: 50,
	clicker: {
		onClick: function(){
			var armor = Player.getArmorSlot(1);
			var extra = armor.extra;
			if(extra){
				var fly = extra.getBoolean("fly");
			}
			else{
				var fly = false;
				extra = new ItemExtraData();
			}
			if(fly){
				extra.putBoolean("fly", false);
				Player.setFlyingEnabled(false);
				Player.setFlying(false);
				Game.message(Translation.translate("Hover Mode disabled"));
			}
			else if(armor.data < Item.getMaxDamage(ItemID.nanosuitJetpack || ItemID.Ultimatenanosuit || ItemID.battaryjetpack || ItemID.AdvJetpacks || ItemID.EnergyJetpack)){
				extra.putBoolean("fly", true);
				Player.setFlyingEnabled(true);
				Game.message(Translation.translate("Hover Mode enabled"));
			}
			Player.setArmorSlot(1, armor.id, 1, armor.data, extra);
		}
	}
});

ICore.UI.onButtonUpdate("hover_engine", function(element){
	var armor = Player.getArmorSlot(1);
	var extra = armor.extra;
	if(extra && extra.getBoolean("fly")){
		element.bitmap = "button_gravi_on";
	}else{
		element.bitmap = "button_gravi_off";
	}
});

ICore.UI.setArmorButton(ItemID.nanosuitJetpack, "button_fly");
ICore.UI.setArmorButton(ItemID.nanosuitJetpack, "hover_engine");
ICore.UI.setArmorButton(ItemID.nanosuitJetpackUncharged, "hover_engine");
ICore.UI.setArmorButton(ItemID.Ultimatenanosuit, "button_fly");
ICore.UI.setArmorButton(ItemID.Ultimatenanosuit, "hover_engine");
ICore.UI.setArmorButton(ItemID.UltimatenanosuitUncharged, "hover_engine");

//nanosuitjetpack
Armor.registerFuncs("nanosuitJetpack", {
	hurt: function(params, slot, index, maxDamage){
		var type = params.type;
		if(type==2 || type==3 || type==11){
			var energy = params.damage*2500;
			slot.data = Math.min(slot.data + energy, maxDamage);
		}
		Player.setArmorSlot(1, slot.id, 1, slot.data, slot.extra);
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		var extra = slot.extra;
		var fly = extra? extra.getBoolean("fly") : false;
		if(slot.data >= maxDamage){
			slot.id = ItemID.nanosuitJetpackUncharged;
			if(fly){
				Game.message(Translation.translate("Hover Mode disabled"));
			}
			Player.setArmorSlot(1, slot.id, 1, slot.data);
		}
		else{
			Entity.setFire(Player.get(), 0, true);
			if(fly && World.getThreadTime()%20 == 0){
				slot.data = Math.min(slot.data + 2500, maxDamage);
				Player.setArmorSlot(1, slot.id, 1, slot.data, extra);
			}
			ENERGY_PACK_TICK(slot, maxDamage, 3, 100000);
		}
		return false;
	}
});

Armor.registerFuncs("nanosuitJetpackUncharged", {
	hurt: function(){
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		if(slot.data < maxDamage){
			slot.id = ItemID.nanosuitJetpack;
			Player.setArmorSlot(1, slot.id, 1, slot.data);
			ENERGY_PACK_TICK(slot, maxDamage, 3, 100000);
		}
		return false;
	}
});

var canFlying = false;
Callback.addCallback("tick", function(){
	var armor = Player.getArmorSlot(1);
	var extra = armor.extra;
	var fly = extra? extra.getBoolean("fly") : false;
	if(fly){
		Player.setFlyingEnabled(true);
		canFlying = true;
	}
	else if(canFlying){
		Player.setFlyingEnabled(false);
		Player.setFlying(false);
		canFlying = false;
	}
});
//nanosuitenergypack
Armor.registerFuncs("Ultimatenanosuit", {
	hurt: function(params, slot, index, maxDamage){
		var type = params.type;
		if(type==2 || type==3 || type==11){
			var energy = params.damage*5000;
			slot.data = Math.min(slot.data + energy, maxDamage);
		}
		Player.setArmorSlot(1, slot.id, 1, slot.data, slot.extra);
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		var extra = slot.extra;
		var fly = extra? extra.getBoolean("fly") : false;
		if(slot.data >= maxDamage){
			slot.id = ItemID.UltimatenanosuitUncharged;
			if(fly){
				Game.message(Translation.translate("Hover Mode disabled"));
			}
			Player.setArmorSlot(1, slot.id, 1, slot.data);
		}
		else{
			Entity.setFire(Player.get(), 0, true);
			if(fly && World.getThreadTime()%20 == 0){
				slot.data = Math.min(slot.data + 5000, maxDamage);
				Player.setArmorSlot(1, slot.id, 1, slot.data, extra);
			}
			ENERGY_PACK_TICK(slot, maxDamage, 3, 100000);
		}
		return false;
	}
});

Armor.registerFuncs("UltimatenanosuitUncharged", {
	hurt: function(){
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		if(slot.data < maxDamage){
			slot.id = ItemID.Ultimatenanosuit;
			Player.setArmorSlot(1, slot.id, 1, slot.data);
			ENERGY_PACK_TICK(slot, maxDamage, 3, 100000);
		}
		return false;
	}
});

var canFlying = false;
Callback.addCallback("tick", function(){
	var armor = Player.getArmorSlot(1);
	var extra = armor.extra;
	var fly = extra? extra.getBoolean("fly") : false;
	if(fly){
		Player.setFlyingEnabled(true);
		canFlying = true;
	}
	else if(canFlying){
		Player.setFlyingEnabled(false);
		Player.setFlying(false);
		canFlying = false;
	}
});




// file: armor/quantumSuitAdvChestplate.js

IDRegistry.genItemID("quantumsuitbatpack"); IDRegistry.genItemID("quantumsuitbatpackUncharged");
IDRegistry.genItemID("quantumsuitAdvbatpack"); IDRegistry.genItemID("quantumsuitAdvbatpackUncharged");
IDRegistry.genItemID("quantumsuitEnergypack"); IDRegistry.genItemID("quantumsuitEnergypackUncharged");
IDRegistry.genItemID("Ultimatequantumsuit"); IDRegistry.genItemID("UltimatequantumsuitUncharged");

Item.createArmorItem("quantumsuitbatpack", "QuantumSuit Batpack", {name: "quantumsuitbatpack"}, {type: "chestplate", armor: 7, durability: 2000, texture: "armor/quantBat_1.png", isTech: true});
Item.createArmorItem("quantumsuitAdvbatpack", "QuantumSuit AdvBatpack", {name: "quantumsuitadvbatpack"}, {type: "chestplate", armor: 7, durability: 2200, texture: "armor/quantumadv_1.png", isTech: true});
Item.createArmorItem("quantumsuitEnergypack", "QuantumSuit Energypack", {name: "quantumsuitenergypack"}, {type: "chestplate", armor: 7, durability: 2250, texture: "armor/quantumenergy_1.png", isTech: true});
Item.createArmorItem("Ultimatequantumsuit", "Ultimate QuantumSuit Bodyarmour", {name: "ultimatequantum"}, {type: "chestplate", armor: 7, durability: 2650, texture: "armor/ultimatequantum_1.png", isTech: true});
Item.createArmorItem("quantumsuitbatpackUncharged", "QuantumSuit Batpack", {name: "quantumsuitbatpack"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/quantBat_1.png", isTech: true});
Item.createArmorItem("quantumsuitAdvbatpackUncharged", "QuantumSuit AdvBatpack", {name: "quantumsuitadvbatpack"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/quantumadv_1.png", isTech: true});
Item.createArmorItem("quantumsuitEnergypackUncharged", "QuantumSuit Energypack", {name: "quantumsuitenergypack"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/quantumenergy_1.png", isTech: true});
Item.createArmorItem("UltimatequantumsuitUncharged", "Ultimate QuantumSuit Bodyarmour", {name: "ultimatequantum"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/ultimatequantum_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.quantumsuitbatpack, "Eu", 11000000, 4, "storage", true); 
ChargeItemRegistry.registerItem(ItemID.quantumsuitbatpackUncharged, "Eu", 11000000, 4, "storage");
ChargeItemRegistry.registerItem(ItemID.quantumsuitAdvbatpack, "Eu", 13000000, 4, "storage", true); 
ChargeItemRegistry.registerItem(ItemID.quantumsuitAdvbatpackUncharged, "Eu", 13000000, 4, "storage");
ChargeItemRegistry.registerItem(ItemID.quantumsuitEnergypack, "Eu", 15000000, 4, "storage", true); 
ChargeItemRegistry.registerItem(ItemID.quantumsuitEnergypackUncharged, "Eu", 15000000, 4, "storage");
ChargeItemRegistry.registerItem(ItemID.Ultimatequantumsuit, "Eu", 18000000, 4, "storage", true); 
ChargeItemRegistry.registerItem(ItemID.UltimatequantumsuitUncharged, "Eu", 18000000, 4 , "storage");

ICore.ItemName.setRarity(ItemID.quantumsuitbatpack, 2);
ICore.ItemName.setRarity(ItemID.quantumsuitAdvbatpack, 2);
ICore.ItemName.setRarity(ItemID.quantumsuitEnergypack, 2);
ICore.ItemName.setRarity(ItemID.Ultimatequantumsuit, 3);

Item.registerNameOverrideFunction(ItemID.quantumsuitbatpack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.quantumsuitAdvbatpack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.quantumsuitEnergypack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.Ultimatequantumsuit, ICore.ItemName.showItemStorage);

ICore.UI.setArmorButton(ItemID.quantumsuitbatpack, "button_fly");
ICore.UI.setArmorButton(ItemID.quantumsuitAdvbatpack, "button_fly");
ICore.UI.setArmorButton(ItemID.quantumsuitEnergypack, "button_fly");
ICore.UI.setArmorButton(ItemID.Ultimatequantumsuit, "button_fly");
ICore.UI.setArmorButton(ItemID.quantumsuitbatpack, "button_hover");
ICore.UI.setArmorButton(ItemID.quantumsuitAdvbatpack, "button_hover");
ICore.UI.setArmorButton(ItemID.quantumsuitEnergypack, "button_hover");
ICore.UI.setArmorButton(ItemID.Ultimatequantumsuit, "button_hover");

ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantumsuitbatpack, {charged: ItemID.quantumsuitbatpack, uncharged: ItemID.quantumsuitbatpackUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantumsuitbatpackUncharged, {charged: ItemID.quantumsuitbatpack, uncharged: ItemID.quantumsuitbatpackUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantumsuitAdvbatpack, {charged: ItemID.quantumsuitAdvbatpack, uncharged: ItemID.quantumsuitAdvbatpackUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantumsuitAdvbatpackUncharged, {charged: ItemID.quantumsuitAdvbatpack, uncharged: ItemID.quantumsuitAdvbatpackUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantumsuitEnergypack, {charged: ItemID.quantumsuitEnergypack, uncharged: ItemID.quantumsuitEnergypackUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantumsuitEnergypackUncharged, {charged: ItemID.quantumsuitEnergypack, uncharged: ItemID.quantumsuitEnergypackUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.Ultimatequantumsuit, {charged: ItemID.Ultimatequantumsuit, uncharged: ItemID.UltimatequantumsuitUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.UltimatequantumsuitUncharged, {charged: ItemID.Ultimatequantumsuit, uncharged: ItemID.UltimatequantumsuitUncharged});

var ADV_QUANTUM_ARMOR_FUNCS = {
	hurt: function(params, slot, index, maxDamage){
		var type = params.type;
		if(type==2 || type==3 || type==11){
			var energy = params.damage * 2000;
			slot.data = Math.min(slot.data + energy, maxDamage);
		}
		if(type==5){
			var vel = Player.getVelocity().y;
			var time = vel / -0.06;
			var height = 0.06 * time*time / 2;
			if(height < 22){
				if(height < 17){
					var damage = Math.floor(height) - 3;
				}else{
					var damage = Math.ceil(height) - 3;
				}
			}
			if(damage <= 0 && height < 22){
				Game.prevent();
			}
			else if(params.damage > damage){
				var player = Player.get();
				Entity.setHealth(player, Entity.getHealth(player) + params.damage - damage);
			}
		}
		Player.setArmorSlot(1, slot.id, 1, slot.data, slot.extra);
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		var armor = ICore.Recipe.getRecipeResult("quantum-armor-charge", slot.id);
		if(slot.data >= maxDamage){
			slot.id = armor.uncharged;
			Player.setArmorSlot(1, slot.id, 1, slot.data, slot.extra);
		}
		else{
			if(slot.id != armor.charged){
				slot.id = armor.charged;
				Player.setArmorSlot(1, slot.id, 1, slot.data, slot.extra);
			}
			var extra = slot.extra;
			var hover = extra? extra.getBoolean("hover") : false;
			if(hover){
			var vel = Player.getVelocity();
				if(vel.y < -0.1){
					Player.setVelocity(vel.x, -0.1, vel.z);
					if(World.getThreadTime() % 5 == 0){
						Player.setArmorSlot(1, slot.id, 1, Math.min(slot.data+20, maxDamage), extra);
					}
				}
			}
			ENERGY_PACK_TICK(slot, maxDamage, 4, 100000);
		}
		return false;
	}
}

Armor.registerFuncs("quantumsuitbatpack", ADV_QUANTUM_ARMOR_FUNCS); 
Armor.registerFuncs("quantumsuitbatpackUncharged", ADV_QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantumsuitAdvbatpack", ADV_QUANTUM_ARMOR_FUNCS); 
Armor.registerFuncs("quantumsuitAdvbatpackUncharged", ADV_QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantumsuitEnergypack", ADV_QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantumsuitEnergypackUncharged", ADV_QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("Ultimatequantumsuit", ADV_QUANTUM_ARMOR_FUNCS); 
Armor.registerFuncs("UltimatequantumsuitUncharged", ADV_QUANTUM_ARMOR_FUNCS);




// file: armor/JetpacksAdv.js

IDRegistry.genItemID("battaryjetpack"); 
IDRegistry.genItemID("battaryjetpackUncharged");
IDRegistry.genItemID("AdvJetpacks"); 
IDRegistry.genItemID("AdvJetpacksUncharged");
IDRegistry.genItemID("EnergyJetpack"); 
IDRegistry.genItemID("EnergyJetpackUncharged");

Item.createArmorItem("battaryjetpack", "Battery Jetpack", {name: "jetpackbatpack"}, {type: "chestplate", armor: 0, durability: 800, texture: "armor/batjetpack_1.png", isTech: true});
Item.createArmorItem("AdvJetpacks", "AdvJetpack", {name: "jetpackadvpack"}, {type: "chestplate", armor: 0, durability: 800, texture: "armor/advjetpack_1.png", isTech: true});
Item.createArmorItem("EnergyJetpack", "EnergyJetpack", {name: "jetpackenergypack"}, {type: "chestplate", armor: 0, durability: 800, texture: "armor/energyjetpack_1.png", isTech: true});
Item.createArmorItem("battaryjetpackUncharged", "Battery Jetpack", {name: "jetpackbatpack"}, {type: "chestplate", armor: 0, durability: 800, texture: "armor/batjetpack_1.png", isTech: true});
Item.createArmorItem("AdvJetpacksUncharged", "AdvJetpack", {name: "jetpackadvpack"}, {type: "chestplate", armor: 0, durability: 800, texture: "armor/advjetpack_1.png", isTech: true});
Item.createArmorItem("EnergyJetpackUncharged", "EnergyJetpack", {name: "jetpackenergypack"}, {type: "chestplate", armor: 0, durability: 800, texture: "armor/energyjetpack_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.battaryjetpack, "Eu",  100000, 2, "storage", true);
ChargeItemRegistry.registerItem(ItemID.battaryjetpackUncharged, "Eu",  100000, 2, "storage");
ChargeItemRegistry.registerItem(ItemID.AdvJetpacks, "Eu", 2100000, 3, "storage", true);
ChargeItemRegistry.registerItem(ItemID.AdvJetpacksUncharged, "Eu", 2100000, 3, "storage");
ChargeItemRegistry.registerItem(ItemID.EnergyJetpack, "Eu",  650000, 4, "storage", true);
ChargeItemRegistry.registerItem(ItemID.EnergyJetpackUncharged, "Eu",  650000, 4, "storage");

ICore.UI.setArmorButton(ItemID.battaryjetpack, "button_fly");
ICore.UI.setArmorButton(ItemID.battaryjetpack, "hover_engine");
ICore.UI.setArmorButton(ItemID.AdvJetpacks, "button_fly");
ICore.UI.setArmorButton(ItemID.AdvJetpacks, "hover_engine");
ICore.UI.setArmorButton(ItemID.EnergyJetpack, "button_fly");
ICore.UI.setArmorButton(ItemID.EnergyJetpack, "hover_engine");

ICore.ItemName.setRarity(ItemID.battaryjetpack, 1);
ICore.ItemName.setRarity(ItemID.AdvJetpacks, 1);
ICore.ItemName.setRarity(ItemID.EnergyJetpack, 1);

Item.registerNameOverrideFunction(ItemID.battaryjetpack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.AdvJetpacks, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.EnergyJetpack, ICore.ItemName.showItemStorage);

Armor.registerFuncs("battaryjetpack", {
	hurt: function(params, slot, index, maxDamage){
		var type = params.type;
		if(type==2 || type==3 || type==11){
			var energy = params.damage*100;
			slot.data = Math.min(slot.data + energy, maxDamage);
		}
		Player.setArmorSlot(1, slot.id, 1, slot.data, slot.extra);
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		var extra = slot.extra;
		var fly = extra? extra.getBoolean("fly") : false;
		if(slot.data >= maxDamage){
			slot.id = ItemID.battaryjetpackUncharged;
			if(fly){
				Game.message(Translation.translate("Hover Mode disabled"));
			}
			Player.setArmorSlot(1, slot.id, 1, slot.data);
		}
		else{
			Entity.setFire(Player.get(), 0, true);
			if(fly && World.getThreadTime()%20 == 0){
				slot.data = Math.min(slot.data + 100, maxDamage);
				Player.setArmorSlot(1, slot.id, 1, slot.data, extra);
			}
			ENERGY_PACK_TICK(slot, maxDamage, 3, 100000);
		}
		return false;
	}
});

Armor.registerFuncs("battaryjetpackUncharged", {
	hurt: function(){
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		if(slot.data < maxDamage){
			slot.id = ItemID.battaryjetpack;
			Player.setArmorSlot(1, slot.id, 1, slot.data);
			ENERGY_PACK_TICK(slot, maxDamage, 3, 100000);
		}
		return false;
	}
});

var canFlying = false;
Callback.addCallback("tick", function(){
	var armor = Player.getArmorSlot(1);
	var extra = armor.extra;
	var fly = extra? extra.getBoolean("fly") : false;
	if(fly){
		Player.setFlyingEnabled(true);
		canFlying = true;
	}
	else if(canFlying){
		Player.setFlyingEnabled(false);
		Player.setFlying(false);
		canFlying = false;
	}
});

Armor.registerFuncs("AdvJetpacks", {
	hurt: function(params, slot, index, maxDamage){
		var type = params.type;
		if(type==2 || type==3 || type==11){
			var energy = params.damage*200;
			slot.data = Math.min(slot.data + energy, maxDamage);
		}
		Player.setArmorSlot(1, slot.id, 1, slot.data, slot.extra);
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		var extra = slot.extra;
		var fly = extra? extra.getBoolean("fly") : false;
		if(slot.data >= maxDamage){
			slot.id = ItemID.AdvJetpacksUncharged;
			if(fly){
				Game.message(Translation.translate("Hover Mode disabled"));
			}
			Player.setArmorSlot(1, slot.id, 1, slot.data);
		}
		else{
			Entity.setFire(Player.get(), 0, true);
			if(fly && World.getThreadTime()%20 == 0){
				slot.data = Math.min(slot.data + 200, maxDamage);
				Player.setArmorSlot(1, slot.id, 1, slot.data, extra);
			}
			ENERGY_PACK_TICK(slot, maxDamage, 3, 100000);
		}
		return false;
	}
});

Armor.registerFuncs("AdvJetpacksUncharged", {
	hurt: function(){
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		if(slot.data < maxDamage){
			slot.id = ItemID.AdvJetpacks;
			Player.setArmorSlot(1, slot.id, 1, slot.data);
			ENERGY_PACK_TICK(slot, maxDamage, 3, 100000);
		}
		return false;
	}
});

var canFlying = false;
Callback.addCallback("tick", function(){
	var armor = Player.getArmorSlot(1);
	var extra = armor.extra;
	var fly = extra? extra.getBoolean("fly") : false;
	if(fly){
		Player.setFlyingEnabled(true);
		canFlying = true;
	}
	else if(canFlying){
		Player.setFlyingEnabled(false);
		Player.setFlying(false);
		canFlying = false;
	}
});

Armor.registerFuncs("EnergyJetpack", {
	hurt: function(params, slot, index, maxDamage){
		var type = params.type;
		if(type==2 || type==3 || type==11){
			var energy = params.damage*350;
			slot.data = Math.min(slot.data + energy, maxDamage);
		}
		Player.setArmorSlot(1, slot.id, 1, slot.data, slot.extra);
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		var extra = slot.extra;
		var fly = extra? extra.getBoolean("fly") : false;
		if(slot.data >= maxDamage){
			slot.id = ItemID.EnergyJetpackUncharged;
			if(fly){
				Game.message(Translation.translate("Hover Mode disabled"));
			}
			Player.setArmorSlot(1, slot.id, 1, slot.data);
		}
		else{
			Entity.setFire(Player.get(), 0, true);
			if(fly && World.getThreadTime()%20 == 0){
				slot.data = Math.min(slot.data + 350, maxDamage);
				Player.setArmorSlot(1, slot.id, 1, slot.data, extra);
			}
			ENERGY_PACK_TICK(slot, maxDamage, 3, 100000);
		}
		return false;
	}
});

Armor.registerFuncs("EnergyJetpackUncharged", {
	hurt: function(){
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		if(slot.data < maxDamage){
			slot.id = ItemID.EnergyJetpack;
			Player.setArmorSlot(1, slot.id, 1, slot.data);
			ENERGY_PACK_TICK(slot, maxDamage, 3, 100000);
		}
		return false;
	}
});

var canFlying = false;
Callback.addCallback("tick", function(){
	var armor = Player.getArmorSlot(1);
	var extra = armor.extra;
	var fly = extra? extra.getBoolean("fly") : false;
	if(fly){
		Player.setFlyingEnabled(true);
		canFlying = true;
	}
	else if(canFlying){
		Player.setFlyingEnabled(false);
		Player.setFlying(false);
		canFlying = false;
	}
});




// file: armor/nanoStatic.js

var SPB = {
	gen_day: parseInt(__config__.access("solar_panel_boots.gen_day")),
	output: parseInt(__config__.access("solar_panel_boots.output")),
	energy_storage: parseInt(__config__.access("solar_panel_boots.storage"))
}

IDRegistry.genItemID("nanostatic"); 
IDRegistry.genItemID("nanostaticUncharged");
Item.createArmorItem("nanostatic", "Static NanoSuit Boots", {name: "nanostatic"}, {type: "boots", armor: 0, durability: 25, texture: "armor/nanoadv_1.png", isTech: true});
Item.createArmorItem("nanostaticUncharged", "Static NanoSuit Boots", {name: "nanostatic"}, {type: "boots", armor: 0, durability: 25, texture: "armor/nanoadv_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.nanostatic, "Eu", 1000000, 3, "storage", true);
ChargeItemRegistry.registerItem(ItemID.nanostaticUncharged, "Eu", 1000000, 3, "storage");

ICore.ItemName.setRarity(ItemID.nanostatic, 1);

Item.registerNameOverrideFunction(ItemID.nanostatic, ICore.ItemName.showItemStorage);

ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanostatic, {charged: ItemID.nanostatic, uncharged: ItemID.nanostaticUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanostaticUncharged, {charged: ItemID.nanostatic, uncharged: ItemID.nanostaticUncharged});

function chargeArmor(genD, genN){
	var time = World.getWorldTime()%24000;
	var p = Player.getPosition();
	if(GenerationUtils.canSeeSky(p.x, p.y, p.z)){
		if((time >= 23500 || time < 12550) && (!World.getWeather().rain || World.getLightLevel(this.x, this.y+1, this.z) > 14)){
			var energy = genD;
		}else{
			var energy = genN;
		}
		for(var i = 3; i >= 0; i--){
			var armor = Player.getArmorSlot(i);
			var energyAdd = ICore.ChargeRegistry.addEnergyTo(armor, "Eu", energy, energy, 4);
			if(energyAdd > 0){
				var armorID = Player.getArmorSlot(i).id;
				if(armorID != armor.id){
					Logger.Log("Error in getArmorSlot("+i+"): id " + armor.id + " != " + armorID, "ERROR");
					continue;
				}
				energy -= energyAdd;
				Player.setArmorSlot(i, armor.id, 1, armor.data, armor.extra);
				if(energy <= 0){
					break;
				}
			}
		}
	}
}

Callback.addCallback("tick", function(){
	if(World.getThreadTime()%20 == 0){
		var slot = Player.getArmorSlot(0);
		if(slot.id == ItemID.nanostatic || slot.id == ItemID.nanostaticUncharged){
			chargeArmor(SPB.gen_day*20, SPB.gen_night*20);
		}
	}
});
Armor.registerFuncs("nanostatic", NANO_ARMOR_FUNCS); Armor.registerFuncs("nanostaticUncharged", NANO_ARMOR_FUNCS);




// file: armor/quantumStatic.js

IDRegistry.genItemID("quantumstatic"); IDRegistry.genItemID("quantumstaticUncharged");
Item.createArmorItem("quantumstatic", "Static QuantumSuit Boots", {name: "quantumstatic"}, {type: "boots", armor: 0, durability: 25, texture: "armor/quantumadv_1.png", isTech: true});
Item.createArmorItem("quantumstaticUncharged", "Static QuantumSuit Boots", {name: "quantumstatic"}, {type: "boots", armor: 0, durability: 25, texture: "armor/quantumadv_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.quantumstatic, "Eu", 1000000, 3, "storage", true);
ChargeItemRegistry.registerItem(ItemID.quantumstaticUncharged, "Eu", 1000000, 3, "storage");

ICore.ItemName.setRarity(ItemID.quantumstatic, 2);

Item.registerNameOverrideFunction(ItemID.quantumstatic, ICore.ItemName.showItemStorage);

ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantumstatic, {charged: ItemID.quantumstatic, uncharged: ItemID.quantumstaticUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantumstaticUncharged, {charged: ItemID.quantumstatic, uncharged: ItemID.quantumstaticUncharged});

function chargeArmor(genD, genN){
	var time = World.getWorldTime()%24000;
	var p = Player.getPosition();
	if(GenerationUtils.canSeeSky(p.x, p.y, p.z)){
		if((time >= 23500 || time < 12550) && (!World.getWeather().rain || World.getLightLevel(this.x, this.y+1, this.z) > 14)){
			var energy = genD;
		}else{
			var energy = genN;
		}
		for(var i = 3; i >= 0; i--){
			var armor = Player.getArmorSlot(i);
			var energyAdd = ICore.ChargeRegistry.addEnergyTo(armor, "Eu", energy, energy, 4);
			if(energyAdd > 0){
				var armorID = Player.getArmorSlot(i).id;
				if(armorID != armor.id){
					Logger.Log("Error in getArmorSlot("+i+"): id " + armor.id + " != " + armorID, "ERROR");
					continue;
				}
				energy -= energyAdd;
				Player.setArmorSlot(i, armor.id, 1, armor.data, armor.extra);
				if(energy <= 0){
					break;
				}
			}
		}
	}
}

Callback.addCallback("tick", function(){
	if(World.getThreadTime()%20 == 0){
		var slot = Player.getArmorSlot(0);
		if(slot.id == ItemID.quantumstatic || slot.id == ItemID.quantumstaticUncharged){
			chargeArmor(SPB.gen_day*20, SPB.gen_night*20);
		}
	}
});
Armor.registerFuncs("quantumstatic", QUANTUM_ARMOR_FUNCS); Armor.registerFuncs("quantumstaticUncharged", QUANTUM_ARMOR_FUNCS);




// file: armor/nano_adv_3.js

IDRegistry.genItemID("nanoadv3Helmet"); IDRegistry.genItemID("nanoadv3HelmetUncharged");
IDRegistry.genItemID("nanoadv3Chestplate"); IDRegistry.genItemID("nanoadv3ChestplateUncharged");
IDRegistry.genItemID("nanoadv3Leggings"); IDRegistry.genItemID("nanoadv3LeggingsUncharged");
IDRegistry.genItemID("nanoadv3Boots"); IDRegistry.genItemID("nanoadv3BootsUncharged");

Item.createArmorItem("nanoadv3Helmet", "Nano Helmet", {name: "nanosuit_helmet"}, {type: "helmet", armor: 3, durability: 625, texture: "armor/nanosuit_1.png", isTech: true});
Item.createArmorItem("nanoadv3Chestplate", "NanoSuit BoduArmuor", {name: "nanosuit_chestplate"}, {type: "chestplate", armor: 7, durability: 625, texture: "armor/nanosuit_1.png", isTech: true});
Item.createArmorItem("nanoadv3Leggings", "NanoSuit Leggings", {name: "nanosuit_leggings"}, {type: "leggings", armor: 5, durability: 625, texture: "armor/nanosuit_2.png", isTech: true});
Item.createArmorItem("nanoadv3Boots", "NanoSuit Boots", {name: "nanosuit_boots"}, {type: "boots", armor: 3, durability: 625, texture: "armor/nanosuit_1.png", isTech: true});

Item.createArmorItem("nanoadv3HelmetUncharged", "NanoSuit Helmet", {name: "nanosuit_helmet"}, {type: "helmet", armor: 0, durability: 0, texture: "armor/nanosuit_1.png", isTech: true});
Item.createArmorItem("nanoadv3ChestplateUncharged", "NanoSuit BoduArmuor", {name: "nanosuit_chestplate"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/nanosuit_1.png", isTech: true});
Item.createArmorItem("nanoadv3LeggingsUncharged", "NanoSuit Leggings", {name: "nanosuit_leggings"}, {type: "leggings", armor: 0, durability: 0, texture: "armor/nanosuit_2.png", isTech: true});
Item.createArmorItem("nanoadv3BootsUncharged", "NanoSuit Boots", {name: "nanosuit_boots"}, {type: "boots", armor: 0, durability: 0, texture: "armor/nanosuit_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.nanoadv3Helmet, "Eu", 1000000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanoadv3HelmetUncharged, "Eu", 1000000, 3, "armor");
ChargeItemRegistry.registerItem(ItemID.nanoadv3Chestplate, "Eu", 1000000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanoadv3ChestplateUncharged, "Eu", 1000000, 3, "armor");
ChargeItemRegistry.registerItem(ItemID.nanoadv3Leggings, "Eu", 1000000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanoadv3LeggingsUncharged, "Eu", 1000000, 3, "armor");
ChargeItemRegistry.registerItem(ItemID.nanoadv3Boots, "Eu", 1000000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanoadv3BootsUncharged, "Eu", 1000000, 3, "armor");

ICore.ItemName.setRarity(ItemID.nanoadv3Helmet, 1);
ICore.ItemName.setRarity(ItemID.nanoadv3Chestplate, 1);
ICore.ItemName.setRarity(ItemID.nanoadv3Leggings, 1);
ICore.ItemName.setRarity(ItemID.nanoadv3Boots, 1);

Item.registerNameOverrideFunction(ItemID.nanoadv3Helmet, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.nanoadv3Chestplate, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.nanoadv3Leggings, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.nanoadv3Boots, ICore.ItemName.showItemStorage);

ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.nanoadv3Helmet, {charged: ItemID.nanoadv3Helmet, uncharged: ItemID.nanoadv3HelmetUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.nanoadv3HelmetUncharged, {charged: ItemID.quantsuithelmet, uncharged: ItemID.nanoadv3HelmetUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.nanoadv3Chestplate, {charged: ItemID.nanoadv3Chestplate, uncharged: ItemID.nanoadv3ChestplateUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.nanoadv3ChestplateUncharged, {charged: ItemID.nanoadv3Chestplate, uncharged: ItemID.nanoadv3ChestplateUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.nanoadv3Leggings, {charged: ItemID.nanoadv3Leggings, uncharged: ItemID.nanoadv3LeggingsUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.nanoadv3LeggingsUncharged, {charged: ItemID.nanoadv3Leggings, uncharged: ItemID.nanoadv3LeggingsUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.nanoadv3Boots, {charged: ItemID.nanoadv3Boots, uncharged: ItemID.nanoadv3BootsUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.nanoadv3BootsUncharged, {charged: ItemID.nanoadv3Boots, uncharged: ItemID.nanoadv3BootsUncharged});

ICore.UI.setArmorButton(ItemID.nanoadv3Helmet, "button_nightvision");
ICore.UI.setArmorButton(ItemID.nanoadv3Chestplate, "button_fly");
ICore.UI.setArmorButton(ItemID.nanoadv3Chestplate, "button_hover");
ICore.UI.setArmorButton(ItemID.nanoadv3Boots, "button_jump");

var QUANTUM_ARMOR_FUNCS = ICore.requireGlobal("QUANTUM_ARMOR_FUNCS");

Armor.registerFuncs("nanoadv3Helmet",QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("nanoadv3HelmetUncharged", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("nanoadv3Chestplate", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("nanoadv3ChestplateUncharged", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("nanoadv3Leggings", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("nanoadv3LeggingsUncharged", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("nanoadv3Boots", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("nanoadv3BootsUncharged", QUANTUM_ARMOR_FUNCS);




