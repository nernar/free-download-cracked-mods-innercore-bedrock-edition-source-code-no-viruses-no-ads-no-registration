ModAPI.addAPICallback("ENR", function(api){
Translation.addTranslation("Auto sieve", {
	ru: "Автоматическое сито"
});

IDRegistry.genBlockID("energyAutoSieve");
Block.createBlockWithRotation("energyAutoSieve", [
	{name:"Auto sieve", texture: [
			["auto_sieve", 1],
			["auto_sieve", 0],
			["auto_sieve", 2],
			["auto_sieve", 2],
			["auto_sieve", 2],
			["auto_sieve", 2]
		 ], inCreative: true}
],"opaque");

auto_sieve(null, BlockID.energyAutoSieve).setBlockModel(BlockID.energyAutoSieve, 0);

let AutoSieve = new UI.StandartWindow({
	standart: {	
		header: {
			text: {
				text: Translation.translate("Auto sieve")
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
		selectionFactoryon: "selectionFactory"
	},
	drawing: [
		{type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6},
		{type: "bitmap", x: 560, y: 40, bitmap: "progressbar.ground", scale: 4.5}
	],
	elements: {
		"input": {type: "slot", x: 470, y: 10+30, size: 70},
		"energyScale": {type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "energybar.scale"},
		"progressScale": {type: "scale", x: 560, y: 40, direction: 0, scale: 4.5, bitmap: "progressbar.scale"},
		
		"slot1": {type: "slot", x: 470, y: 60+60, size: 70},
		"slot2": {type: "slot", x: 540, y: 60+60, size: 70},
		"slot3": {type: "slot", x: 610, y: 60+60, size: 70},
		"slot4": {type: "slot", x: 680, y: 60+60, size: 70},
		"slot5": {type: "slot", x: 750, y: 60+60, size: 70},
		"slot6": {type: "slot", x: 820, y: 60+60, size: 70},
		"slot7": {type: "slot", x: 890, y: 60+60, size: 70},
		"slot8": {type: "slot", x: 470, y: 130+60, size: 70},
		"slot9": {type: "slot", x: 540, y: 130+60, size: 70},
		"slot10": {type: "slot", x: 610, y: 130+60, size: 70},
		"slot11": {type: "slot", x: 680, y: 130+60, size: 70},
		"slot12": {type: "slot", x: 750, y: 130+60, size: 70},
		"slot13": {type: "slot", x: 820, y: 130+60, size: 70},
		"slot14": {type: "slot", x: 890, y: 130+60, size: 70},
		"slot15": {type: "slot", x: 470, y: 200+60, size: 70},
		"slot16": {type: "slot", x: 540, y: 200+60, size: 70},
		"slot17": {type: "slot", x: 610, y: 200+60, size: 70},
		"slot18": {type: "slot", x: 680, y: 200+60, size: 70},
		"slot19": {type: "slot", x: 750, y: 200+60, size: 70},
		"slot20": {type: "slot", x: 820, y: 200+60, size: 70},
		"slot21": {type: "slot", x: 890, y: 200+60, size: 70},
		"slot22": {type: "slot", x: 470, y: 270+60, size: 70},
		"slot23": {type: "slot", x: 540, y: 270+60, size: 70},
		"slot24": {type: "slot", x: 610, y: 270+60, size: 70},
		"slot25": {type: "slot", x: 680, y: 270+60, size: 70},
		"slot26": {type: "slot", x: 750, y: 270+60, size: 70},
		"slot27": {type: "slot", x: 820, y: 270+60, size: 70},
		"slot28": {type: "slot", x: 890, y: 270+60, size: 70},
	}
});

let Sieve = api.Sieve;

FactAPI.machine.registerEnergyTile(BlockID.energyAutoSieve,{
	useNetworkItemContainer: true,
	defaultValues: {
		progress: 0
	},
	getScreenByName(){
		return AutoSieve;
	},
	getConfig(){
		return {
			time: 50
		};
	},
	putChest(item){
		let a = FactAPI.machineContainer.addItemToContainer(this.container, item);
		if(a)
			this.blockSource.spawnDroppedItem(this.x+0.5, this.y+1, this.z+0.5, item.id, a, item.data);
	},
	addDrops(block){
		let drops = Sieve[block.id];
		let keys = Object.keys(drops);
		for(let i in keys){
			try{
				let drop = drops[keys[i]];
				if(Math.random() * 100 <= drop.chance+5){
					this.putChest({
						id: parseInt(keys[i]),
						count: Random.integer(drop.dropmin+1, drop.dropmax+1),
						data: drop.data,
					});
				}
			}catch(e){
				
			}
		}
	},
	tick(){
		let cfg = this.getConfig();
		this.container.setScale("energyScale",this.data.energy/this.getEnergyStorage());
		this.container.setScale("progressScale",this.data.progress/cfg.time);
	},
	MechanicDeploy(){
		StorageInterface.checkHoppers(this);
		
		let cfg = this.getConfig();
		let input = this.container.getSlot("input");
		
		let result = Sieve.sieve[input.id];
		if(result && this.data.energy >= 13){
			this.data.energy-=13;
			this.data.progress++;
			if(this.data.progress >= cfg.time){
				this.addDrops(input);
				this.data.progress = 0;
				this.container.setSlot("input", input.id, input.count-1, input.data);
				this.container.validateAll();
			}
		}else if(this.data.progress > 0){
			this.data.progress-=5;
		}
	}
});
StorageInterface.createInterface(BlockID.energyAutoSieve, {
	slots: {
		"input": {output: false, input: true},
		"slot^1-28": {output: true, input: false}
	},
});
});
