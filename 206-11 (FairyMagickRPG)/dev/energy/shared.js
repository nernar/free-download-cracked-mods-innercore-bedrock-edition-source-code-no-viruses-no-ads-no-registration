
var FURNACE_FUEL_MAP = {

	49: 1000,

	87: 250,

	88: 250,

	372: 300,

	122: 1000000,

	138: 150000,

	352: 175,

	367: 175,

	369: 275,

	375: 300,

	399: 100000,

};

var player;
Callback.addCallback("LevelLoaded", function(){
	player = Player.get();
});

function random(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Fe = EnergyTypeRegistry.assureEnergyType("Fe", 1);


ModAPI.registerAPI("ICore", {
	Machine: MachineRegistry,
	Recipe: MachineRecipeRegistry,
	ChargeRegistry: ChargeItemRegistry,
	UI: UIbuttons,
	
	requireGlobal: function(command){
		return eval(command);
	}
});

importLib("ToolType", "*");
importLib("energylib", "*");

Logger.Log("Industrial Core API shared with name ICore.", "API");

var GUI_BAR_STANDART_SCALE = 3.2;


var ENERGY_ITEM_NAME = function(item, name){
	var energyStorage = Item.getMaxDamage(item.id) - 1;
	var energyStored = Math.min(energyStorage - item.data + 1, energyStorage);
	if(energyStored==0){return name;}
	return name + "\n§7" + energyStored + "/" + energyStorage + " Eu";
}