Translation.addTranslation("Mechanic Lava Pump", {
	ru: "Механическая лавовая помпа"
});

IDRegistry.genBlockID("machineMechanicPumpLava");
Block.createBlockWithRotation("machineMechanicPumpLava", [
	{name:"Mechanic Lava Pump", texture: [
		["block_machine_wooden",0],["block_machine_wooden", 0],
		["block_machine_wooden",0],["block_mechanic_lavapump",0],
		["block_machine_wooden",0],["block_machine_wooden",0]
	], inCreative: true}
],"opaque");

var UI_mechanic_lavapump= new UI.StandartWindow({
	standart: {	
		header: {
			text: {
				text: Translation.translate("Mechanic Lava Pump")
			},
		},
		minHeight: 700,
		inventory: {
			standart: true
		},
		background: {
			standart: true
		}
	},
	drawing: [
		{ type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8 },
		{ type: "bitmap", x: 350, y: 50, bitmap: "liquid.ground", scale: 2.6 },
		{ type: "bitmap", x: 685, y: 150, bitmap: "progressbar.ground", scale: 5 },
	],
	params: {
		slot: "slotFactory",
		invSlot: "slotFactory",
		selectionFactoryon: "selectionFactory"
	},
	elements: {
		"slotSource": { type: "slot", x: 545, y: 135, size: 100 },
		"slotResult": { type: "slot", x: 835, y: 135, size: 100 },
		"progressScale": { type: "scale", x: 685, y: 150, direction: 0, scale: 5, bitmap: "progressbar.ground" },
		"waterScale": { type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "liquid.lava" }
	}
});

FactAPI.machine.registerTile(BlockID.machineMechanicPumpLava,{
	useNetworkItemContainer: true,
	defaultValues: {
		progress:0,
		active:true,
		y: -1,
		xx: -8,
		zz: -8,
		x: -8,
		xm: 8,
		z: -8,
		zm: 8
	},
	getConfig:function(){
		return {
			time: 100,
			storage: 16
		}
	},
	init:function(){
		this.liquidStorage.setLimit("lava",this.getConfig().storage);
	},
	getScreenByName(){
		return UI_mechanic_lavapump;
	},
	tick(){
		StorageInterface.checkHoppers(this);
		this.data.progress?null:this.data.progress=0;
		let cfg = this.getConfig();
		
		this.container.setScale("progressScale", this.data.progress/cfg.time);
		this.container.setScale("waterScale",this.liquidStorage.getAmount("lava")/cfg.storage);
	},
	isLava(tile){
		return (tile.id == 10 || tile.id == 11) && tile.data == 0;
	},
	pump(x, y, z){
		if (this.isLava(this.blockSource.getBlock(x, y, z)) && this.liquidStorage.getAmount("lava") <= this.getConfig().storage - 1) {
			this.blockSource.setBlock(x, y, z,0,0);
			this.liquidStorage.addLiquid("lava", 1);
		}
	},
	MechanicDeploy:function(){
		while(true){
			let pos = {
				x: this.x + this.data.xx,
				y: this.y + this.data.y,
				z: this.z + this.data.zz
			};
			if(this.isLava(this.blockSource.getBlock(pos.x, pos.y, pos.z))){
				this.pump(pos.x, pos.y, pos.z);
				break;
			}else{
				if(pos.y <= 1)
					break;
				if(this.data.xx >= this.data.xm){
					this.data.xx=this.data.x;
					this.data.zz++;
				}
				if(this.data.zz >= this.data.zm){
					this.data.zz=this.data.z;
					this.data.y--;
				}
				this.data.xx++;
			}
		}
		
		let sourceSlot = this.container.getSlot("slotSource");
		let resultSlot = this.container.getSlot("slotResult");
		if ((sourceSlot.id == 325 && sourceSlot.data == 0) && this.liquidStorage.getAmount("lava") >= 1 && ((resultSlot.id == 325 && resultSlot.data == 10 && resultSlot.count < 64) || resultSlot.id == 0)) {
			sourceSlot.count--;
			resultSlot.id=325;
			resultSlot.data=10;
			resultSlot.count++;
			this.liquidStorage.getLiquid("lava", 1);
			this.container.validateAll();
		}
	}
});
StorageInterface.createInterface(BlockID.machineMechanicPumpLava, {
	slots: {
		"slotSource": {input: true},
		"slotResult": {output: true}
	},
	canReceiveLiquid(){
		return false;
	},
	canTransportLiquid(name){
		return name == "lava";
	}
});
