/*var RECIPE_FUNC_TRANSPORT_ENERGY = function(api, field, result){
	var energy = 0;
	for(var i in field){
		if(!ChargeItemRegistry.isFlashStorage(field[i].id)){
			energy += ChargeItemRegistry.getEnergyFrom(field[i], 10000000, 3, true);
		}
		api.decreaseFieldSlot(i);
	}
	ChargeItemRegistry.addEnergyTo(result, energy, energy, 3);
};
*/


//??????????? 2018.10.26