ModAPI.addAPICallback("ProjectE", function(){
Translation.addTranslation("Cobblestone generator", {
	ru: "Генератор булыжника"
});

IDRegistry.genBlockID("cobblestone_generator");
Block.createBlockWithRotation("cobblestone_generator", [
	{name:"Cobblestone generator", texture: [
		["cobblestone_generator", 0],
			["cobblestone_generator", 0],
			["cobblestone_generator", 0],
			["cobblestone_generator_front", 0],
			["cobblestone_generator", 0],
			["cobblestone_generator", 0]
		 ], inCreative: true}
],"opaque");
IDRegistry.genBlockID("cobblestone_generator1");
Block.createBlockWithRotation("cobblestone_generator1", [
	{name:"Cobblestone generator", texture: [
		["cobblestone_generator", 1],
			["cobblestone_generator", 1],
			["cobblestone_generator", 1],
			["cobblestone_generator_front", 1],
			["cobblestone_generator", 1],
			["cobblestone_generator", 1]
		 ], inCreative: true}
],"opaque");
IDRegistry.genBlockID("cobblestone_generator2");
Block.createBlockWithRotation("cobblestone_generator2", [
	{name:"Cobblestone generator", texture: [
		["cobblestone_generator", 2],
			["cobblestone_generator", 2],
			["cobblestone_generator", 2],
			["cobblestone_generator_front", 2],
			["cobblestone_generator", 2],
			["cobblestone_generator", 2]
		 ], inCreative: true}
],"opaque");

let UI_cobblestone_generator = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: Translation.translate("Cobblestone generator")
			},
		},
		inventory: {
			standart: true
		},
		background: {
			standart: true 
		}
	},
	params: {
		slot: "slotFactory", 
		invSlot: "slotFactory",
		selection: "selectionFactory"
	},
	drawing: [
		{type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6},
	],
	elements: {
		"energyScale": {type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "energybar.scale"},
		"slotResult": {type: "slot", x: 700, y: 170, size: 70},
	}
});
FactAPI.machine.registerEnergyTile(BlockID.cobblestone_generator,{
	useNetworkItemContainer: true,
	defaultValues: {
		progress:0
	},
	getConfig:function(){
		return {
			time: 30/this.getTierBlock()
		}
	},
	getScreenByName(){
		return UI_cobblestone_generator;
	},
	tick(){
		StorageInterface.checkHoppers(this);
		this.container.setScale("energyScale",this.data.energy/this.getEnergyStorage());
	},
	MechanicDeploy(){
		let cfg = this.getConfig();
		if(World.getThreadTime() % cfg.time == 0 && this.data.energy >= 10){
			this.data.energy-=10;
			let slot = this.container.getSlot("slotResult");
			if(slot.count+1 <= Item.getMaxStack(VanillaBlockID.cobblestone && (slot.id == 0 || slot.id == VanillaBlockID.cobblestone))){
				this.container.setSlot("slotResult", VanillaBlockID.cobblestone, slot.count+1, 0);
			}
		}
	}
}, {
	updates: [BlockID.cobblestone_generator, BlockID.cobblestone_generator1, BlockID.cobblestone_generator2],
 update_items: [ItemID.factory_update_1, ItemID.factory_update_2]
});
StorageInterface.createInterface(BlockID.cobblestone_generator, {
	slots: {
		"slotResult": {output: true, input: false}
	},
});
StorageInterface.createInterface(BlockID.cobblestone_generator1, {
	slots: {
		"slotResult": {output: true, input: false}
	},
});
StorageInterface.createInterface(BlockID.cobblestone_generator2, {
	slots: {
		"slotResult": {output: true, input: false}
	},
});
});
