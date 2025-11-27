Translation.addTranslation("Boiler", {
	ru: "Бойлер"
});

IDRegistry.genBlockID("steam_manufacturer");
Block.createBlock("steam_manufacturer", [ {name: "Boiler", texture: [["block_machine_iron", 0], ["block_machine_iron", 0], ["block_machine_iron", 0], ["steam_manufacturer", 0], ["block_machine_iron", 0], ["block_machine_iron", 0]], inCreative: true} ]);

TileRenderer.setStandardModelWithRotation(BlockID.steam_manufacturer, 2, [["block_machine_iron", 0], ["block_machine_iron", 0], ["block_machine_iron", 0], ["steam_manufacturer", 0], ["block_machine_iron", 0], ["block_machine_iron", 0]]);
TileRenderer.setRotationFunction(BlockID.steam_manufacturer);

TileRenderer.registerModelWithRotation(BlockID.steam_manufacturer, 2, [["block_machine_iron", 0], ["block_machine_iron", 0], ["block_machine_iron", 0], ["steam_manufacturer", 0], ["block_machine_iron", 0], ["block_machine_iron", 0]]);

TileRenderer.registerModelWithRotation(BlockID.steam_manufacturer, 6, [["block_machine_iron", 0], ["block_machine_iron", 0], ["block_machine_iron", 0], ["steam_manufacturer", 1], ["block_machine_iron", 0], ["block_machine_iron", 0]]);

Translation.addTranslation("water steam", {
	ru: "Воденной пар"
})

//steam
Block.createLiquidBlock("water_steam", {
	tickDelay: 2,
	name: "water steam",
	flowing: {texture: ["water_steam", 0]},
	still: {texture: ["water_steam", 0]},
	uiTextures: ["water_steam"],
	modelTextures: ["water_steam"],
	inCreative: false 
}, {});


let BoilerUI = new UI.StandartWindow({
	standart: {
		header: {text: {text: Translation.translate("Boiler")}},
		inventory: {standart: true},
		background: {standart: true}
	},
	params: {
		slot: "slotFactory",
		invSlot: "slotFactory",
		selection: "selectionFactory"
	},
	drawing: [
		{type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6},
		{type: "bitmap", x: 450, y: 50, bitmap: "liquid.ground", scale: 2.6},
		{type: "bitmap", x: 750, y: 50, bitmap: "liquid.ground", scale: 2.6},
	],
	elements: {
		"energyScale": {type: "scale", x: 350 , y: 50, direction: 1, bitmap: "energybar.scale", scale: 2.6},
		"water": { type: "scale", x: 450, y: 50, direction: 1, scale: 2.6, bitmap: "liquid.water"},
		"steam": {type: "scale", x: 750, y: 50, direction: 1, bitmap: "liquid.water_steam", scale: 2.6},
	}
});

FactAPI.machine.registerEnergtTileAnimation(BlockID.steam_manufacturer, {
	useNetworkItemContainer: true,
	defaultValues: {
		act: false 
	},
	getScreenByName(){
		return BoilerUI;
	},
	getAnimation(data){
		if(this.data.act)
			return data+4;
		return data;
	},
	tick(){
		let energyStorage = this.getEnergyStorage();
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		this.liquidStorage.setLimit("water", 8);
		this.liquidStorage.setLimit("water_steam", 8);
		let str = this.liquidStorage;
		this.container.setScale("water", str.getAmount("water") / str.getLimit("water"));
		this.container.setScale("steam", str.getAmount("water_steam") / str.getLimit("water_steam"));
	},
	MechanicDeploy(){
		let str = this.liquidStorage;
		let wate = str.getAmount("water")||0;
		let steam = str.getAmount("water_steam")||0;
		if(World.getThreadTime() % 20 == 0)
			this.updateAnimation();
		if(wate > 0 && steam < 8){
			this.data.act = true;
			if(this.data.energy < 3)
				return;
			this.data.energy-=3;
			this.liquidStorage.setAmount("water", wate - .001);
			this.liquidStorage.setAmount("water_steam",  steam + .002);
		}else
			this.data.act = false;
	}
});
StorageInterface.createInterface(BlockID.steam_manufacturer, {
	canReceiveLiquid(name){
		return name == "water";
	},
	canTransportLiquid(name){
		return name == "water_steam";
	}
});