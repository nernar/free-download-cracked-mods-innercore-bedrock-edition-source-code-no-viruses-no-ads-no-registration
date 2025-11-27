/*
	FactoryCraft 1.0 build 1
	©SWCorp
*/

IMPORT("energylib");
IMPORT("ItemDictionary");
IMPORT("PipesAPI");
IMPORT("Pipe");

var EU = EnergyTypeRegistry.assureEnergyType("Eu",1);			//Standart energy
var RF = EnergyTypeRegistry.assureEnergyType("RF",0.25);	//Standart energy
var BT = EnergyTypeRegistry.assureEnergyType("Bu", 2);			//Standart energy
var AE = EnergyTypeRegistry.assureEnergyType("AE", 0.5);		//ME energy

Block.setDestroyLevel = function(id, lvl){
	Block.registerDropFunction(id, function(coords, blockID, blockData, level, enchant){
		if(level >= lvl){
			return [[blockID, 1, 0]];
		}
		return [];
	}, lvl);
}