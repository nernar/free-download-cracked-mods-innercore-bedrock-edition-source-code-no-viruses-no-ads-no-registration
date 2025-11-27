Translation.addTranslation("Steam generator", {
	ru: "Паровая турбина"
});

IDRegistry.genBlockID("steam_generator");
Block.createBlock("steam_generator", [ {name: "Steam generator", texture: [["block_machine_iron", 0], ["block_machine_iron", 0], ["energy_heating", 0], ["block_energy_pump", 0], ["energy_heating", 1], ["block_machine_iron", 0]], inCreative: true} ]);

TileRenderer.setStandardModelWithRotation(BlockID.steam_generator, 2, [["block_machine_iron", 0], ["block_machine_iron", 0], ["block_machine_iron", 0], ["block_energy_pump", 0], ["energy_heating", 1], ["energy_heating", 0]]);
TileRenderer.setRotationFunction(BlockID.steam_generator);

for(let i = 1;i < 10;i++){
	TileRenderer.registerModelWithRotation(BlockID.steam_generator, i*4+2, [["block_machine_iron", 0], ["block_machine_iron", 0], ["block_machine_iron", 0], ["block_energy_pump", 0], ["energy_heating", i], ["energy_heating", 0]]);
}

let SteamGeneratorUI = new UI.StandartWindow({
	standart: {
		header: {text: {text: Translation.translate("Steam generator")}},
		inventory: {standart: true},
		background: {standart: true}
	},
	params: {
		slot: "slotFactory",
		invSlot: "slotFactory",
		selection: "selectionFactory"
	},
	drawing: [
		{type: "bitmap", x: 350, y: 50, bitmap: "liquid.ground", scale: 2.6},
	],
	elements: {
		"steam": {type: "scale", x: 350, y: 50, direction: 1, bitmap: "liquid.water_steam", scale: 2.6},
	}
});


FactAPI.machine.registerEnergtTileAnimation(BlockID.steam_generator, {
	useNetworkItemContainer: true,
	defaultValues: {
		energy: 0,
		energyMax: 100
	},
	getScreenByName(){
		return SteamGeneratorUI;
	},
	getAnimation(data){
		let steam = this.liquidStorage.getAmount("water_steam")||0;
		let max = 9;
		return data+Math.ceil(steam/max*10)*4;
	},
	tick(){
		this.liquidStorage.setLimit("water_steam", 9);
		this.container.setScale("steam", this.liquidStorage.getAmount("water_steam") / this.liquidStorage.getLimit("water_steam"));
		if(World.getThreadTime() % 20 == 0)
			this.updateAnimation();
		let steam = this.liquidStorage.getAmount("water_steam")||0;
		let max = 9;
		if(Math.ceil(steam/max*10) >= 10){
			this.blockSource.setBlock(this.x, this.y, this.z, 0, 0);
			this.blockSource.explode(this.x + 0.5, this.y + 0.5, this.z + 0.5, 2, true);
		}
	},
	MechanicDeploy(){
		let str = this.liquidStorage;
		let steam = str.getAmount("water_steam")||0;
		if(steam <= 0){
			this.data.energy = 0
			return;
		}
		let max = 8;
		let v = Math.ceil(steam/max*100)
		this.data.energy = v;
		this.liquidStorage.setAmount("water_steam",  steam - .0002*v);
	},
	energyTick: function(type, src){
		var output = Math.max(0, this.data.energy*4);
		this.data.energy += src.add(output) - output;
	},
}, {
	generator: true
});
StorageInterface.createInterface(BlockID.steam_generator, {
	canReceiveLiquid(name){
		return name == "water_steam";
	},
	canTransportLiquid(name){
		return false;
	}
});
