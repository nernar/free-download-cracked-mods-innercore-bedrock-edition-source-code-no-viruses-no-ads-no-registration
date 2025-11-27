Translation.addTranslation("Fuel Generator", {
	ru: "Топливный генератор"
});



var genfuel_texture={
	side:"block_machine_iron",
	front:"block_energy_genfuel"
}

if(!Options.isThemeBlack()){
	genfuel_texture.front="light_genfuel";
	genfuel_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("machineEnergyGeneratorFuel");
Block.createBlock("machineEnergyGeneratorFuel", [
	{
		name: "Fuel Generator",
		texture: [
			[genfuel_texture.side,0],
			[genfuel_texture.side, 0],
			[genfuel_texture.side,0],
			[genfuel_texture.front,0],
			[genfuel_texture.side,0],
			[genfuel_texture.side,0]
		],
		inCreative: true
	}
],"opaque");

TileRenderer.setStandardModelWithRotation(BlockID.machineEnergyGeneratorFuel, 2, [[genfuel_texture.side, 0], [genfuel_texture.side, 0], [genfuel_texture.side, 0], [genfuel_texture.front, 0], [genfuel_texture.side, 0], [genfuel_texture.side, 0]]);
TileRenderer.setRotationFunction(BlockID.machineEnergyGeneratorFuel);

TileRenderer.registerModelWithRotation(BlockID.machineEnergyGeneratorFuel, 2, [[genfuel_texture.side, 0], [genfuel_texture.side, 0], [genfuel_texture.side, 0], [genfuel_texture.front, 0], [genfuel_texture.side, 0], [genfuel_texture.side, 0]]);

TileRenderer.registerModelWithRotation(BlockID.machineEnergyGeneratorFuel, 6, [[genfuel_texture.side, 0], [genfuel_texture.side, 0], [genfuel_texture.side, 0], [genfuel_texture.front, 1], [genfuel_texture.side, 0], [genfuel_texture.side, 0]]);

var ui_generatorfuel = new UI.StandartWindow({
	standart: {
		header: {text: {text: Translation.translate("Fuel Generator")}},
		inventory: {standart: true},
		background: {standart: true}
	},
	params: {
		slot: "slotFactory",
		invSlot: "slotFactory",
		selection: "selectionFactory"
	},
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire.ground", scale: 4.5},
	],
	elements: {
		"energyScale": {type: "scale", x: 350 , y: 50, direction: 1, bitmap: "energybar.scale", scale: 2.6},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, bitmap: "fire.scale", scale: 4.5},
		"slotFuel": {type: "slot", x: 450, y: 210},
	}
});

FactAPI.machine.registerEnergtTileAnimation(BlockID.machineEnergyGeneratorFuel, {
	useNetworkItemContainer: true,
	defaultValues: {
		burn: 0,
		burnMax: 0
	},
	getScreenByName(){
		return ui_generatorfuel;
	},
	getFuel(slotName){
		let fuelSlot = this.container.getSlot(slotName);
		if (fuelSlot.id > 0){
			let burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
			if (burn && !LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)){
				fuelSlot.count--;
				this.container.validateSlot(slotName);
				return burn;
			}
		}
		return 0;
	},
	tick(){
		StorageInterface.checkHoppers(this);
		let energyStorage = this.getEnergyStorage();
		if(this.data.burn <= 0){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel") / 4;
		}
		if(this.data.burn > 0 && this.data.energy < energyStorage){
			this.data.energy = Math.min(this.data.energy + 2, energyStorage);
			this.data.burn-=0.5;
		}
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		this.container.sendChanges();
		if(World.getThreadTime() % 20 == 0)
			this.updateAnimation();
	},
	getAnimation(data){
		if(this.data.burn > 0)
			return data+4;
		return data;
	},
	isGenerator: function() {
		return true;
	},
	getEnergyStorage: function(){
		return 1000;
	},
	energyTick: function(type, src){
		var output = Math.min(2, this.data.energy);
		this.data.energy += src.add(output) - output;
	},
},{
	generator: true
});
StorageInterface.createInterface(BlockID.machineEnergyGeneratorFuel, {
	slots: {
		"slotFuel": {input: true}
	}
});
