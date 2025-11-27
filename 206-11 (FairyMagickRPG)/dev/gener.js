IDRegistry.genBlockID("gener");
Block.createBlockWithRotation("gener", [
	{name: "Weak generator", texture: [["gener_bottom", 1], ["gener_bottom", 1], ["gener_side", 1], ["gener_front", 1], ["gener_side", 1], ["gener_side", 1]], inCreative: true}
]);

var guiFairyAltar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Weak Generator"}},
		inventory: {standart: true},
		background: {standart: true}
	},

	drawing: [
		{type: "bitmap", x: 600, y: 200, bitmap: "energy_bar_background", scale: GUI_BAR_STANDART_SCALE},
		{type: "bitmap", x: 597, y: 75, bitmap: "rune_energy_background", scale: GUI_BAR_STANDART_SCALE},
	],


	elements: {
		"energyScale": {type: "scale", x: 600 + GUI_BAR_STANDART_SCALE * 4, y: 200, direction: 0, value: 0.5, bitmap: "energy_bar_scale", scale: GUI_BAR_STANDART_SCALE},
		"burningScale": {type: "scale", x: 597, y: 75, direction: 1, value: 0.5, bitmap: "rune_energy", scale: GUI_BAR_STANDART_SCALE},
		"slotSource": {type: "slot", x: 772, y: 197},
		"slotFuel": {type: "slot", x: 475, y: 197},
		
	}
});

MachineRegistry.registerPrototype(BlockID.gener, {
	defaultValues: {
		burn: 0,
		burnMax: 0
	},
	
	getGuiScreen: function(){
		return guiFairyAltar;
	},
	
	getTransportSlots: function(){
		return {input: ["slotFuel"]};
	},
	
	tick: function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var energyStorage = this.getEnergyStorage();
		
		if(this.data.burn > 0){
			if(this.data.energy < energyStorage){
				this.data.energy = Math.min(this.data.energy + 10, energyStorage);
				this.data.burn--;
			}
		}
		else {
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel") / 4;
		}
		
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), this.data.energy, 32, 0);
		
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("energyScale", this.data.energy / energyStorage);
    var TRANSFER = 32;
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotSource"), this.data.energy, TRANSFER, 0);
	},

	getFuel: function(slotName){

		var fuelSlot = this.container.getSlot(slotName);

		if (fuelSlot.id > 0){

			var burn = FURNACE_FUEL_MAP[fuelSlot.id];

			if (burn){

				fuelSlot.count--;

				this.container.validateSlot(slotName);

				return burn;

			}

			if (LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){

				var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);

				fuelSlot.id = empty.id;

				fuelSlot.data = empty.data;

				return 20000;

			}

		}

		return 0;

	},
	
	isGenerator: function() {
		return true;
	},
	

	getEnergyStorage: function(){
		return 20000;
	},
	
	energyTick: function(type, src){
		var TRANSFER = 32;
		this.data.energy += src.storage(Math.min(TRANSFER*4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
	}
});
