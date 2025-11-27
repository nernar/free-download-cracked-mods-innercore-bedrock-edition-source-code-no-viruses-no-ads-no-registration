IDRegistry.genBlockID("hell_furnace");

Block.createBlockWithRotation("hell_furnace", [

	{name: "Hell furnace", texture: [["fur_bottom", 0], ["fur_bottom", 0], ["fur_side", 0], ["fure_side", 0], ["fur_side", 0], ["fur_side", 0]], inCreative: true}

]);
Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.hell_furnace, count: 1, data: 0}, [
		"xcx",
		"cac",
		"xcx"
	], ['x', 369, 0, 'a', ItemID.burncor, 0, 'c', ItemID.burnplate, 0]);

});
var guiHelFer = new UI.StandartWindow({

	standart: {

		header: {text: {text: "Hell furnace"}},

		inventory: {standart: true},

		background: {standart: true}

	},


	drawing: [

		{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: GUI_BAR_STANDART_SCALE},

		{type: "bitmap", x: 530, y: 144, bitmap: "energy_bar_background", scale: GUI_BAR_STANDART_SCALE},

		//{type: "bitmap", x: 530, y: 144, bitmap: "energy_small_scale", scale: GUI_BAR_STANDART_SCALE}

	],


	elements: {

		"progressScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: GUI_BAR_STANDART_SCALE},

		"energyScale": {type: "scale", x: 530 + GUI_BAR_STANDART_SCALE * 4, y: 144, direction: 0, value: 1, bitmap: "energy_small_scale", scale: GUI_BAR_STANDART_SCALE},

		"slotSource": {type: "slot", x: 441, y: 202},

       "slotEnergy": {type: "slot", x: 1500, y: 1500},

		"slotResult": {type: "slot", x: 441, y: 82}

	}

});



Callback.addCallback("PreLoaded", function(){

	MachineRecipeRegistry.registerRecipesFor("hell_furnace", {

		"ItemID.hellbar": {id: ItemID.hellstonebar, count: 1, data: 0},

	}, true);

});


MachineRegistry.registerPrototype(BlockID.hell_furnace, {

	defaultValues: {

		progress: 0

	},


	getGuiScreen: function(){

		return guiHelFer;

	},


	tick: function(){

		var sourceSlot = this.container.getSlot("slotSource");

		var result = MachineRecipeRegistry.getRecipeResult("hell_furnace", sourceSlot.id);

		if (result && (sourceSlot.count >= result.ingredientCount || !result.ingredientCount)){

			if (this.data.energy > 2){

				this.data.energy -= 3;

				this.data.progress++;

			}

			if (this.data.progress >= 400){

				var resultSlot = this.container.getSlot("slotResult");

				if (resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count <= Item.getMaxStack(result.id) - result.count || resultSlot.id == 0){

					sourceSlot.count -= result.ingredientCount || 1;

					resultSlot.id = result.id;

					resultSlot.data = result.data;

					resultSlot.count += result.count;

					this.container.validateAll();

					this.data.progress = 0;

				}

			}

		}

		else {

			this.data.progress = 0;

		}

		var energyStorage = this.getEnergyStorage();

		this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), Math.min(32, energyStorage - this.data.energy), 0);

		this.container.setScale("progressScale", this.data.progress / 400);

		this.container.setScale("energyScale", this.data.energy / energyStorage);

	},


	getEnergyStorage: function(){

		return 2000;

	},


	energyTick: MachineRegistry.basicEnergyReceiveFunc

});

