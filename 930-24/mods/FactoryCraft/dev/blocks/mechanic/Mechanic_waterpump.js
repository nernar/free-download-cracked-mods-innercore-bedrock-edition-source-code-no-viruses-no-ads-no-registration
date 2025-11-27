Translation.addTranslation("Mechanic Water Pump", {
	ru: "Механическая водяная помпа"
});

IDRegistry.genBlockID("machineMechanicPumpWater");
Block.createBlockWithRotation("machineMechanicPumpWater", [
	{name:"Mechanic Water Pump", texture: [
		["block_machine_wooden",0],["block_machine_wooden", 0],
		["block_machine_wooden",0],["block_mechanic_waterpump",0],
		["block_machine_wooden",0],["block_machine_wooden",0]
	], inCreative: true}
],"opaque");


var UI_mechanic_waterpump= new UI.StandartWindow({
	standart: {	
		header: {
			text: {
				text: Translation.translate("Mechanic Water Pump")
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
		"waterScale": { type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "liquid.water" }
	}
});

FactAPI.machine.registerTile(BlockID.machineMechanicPumpWater,{
	useNetworkItemContainer: true,
	defaultValues: {
		progress:0,
		active:true
	},
	getConfig(){
		return {
			time: 100,
			storage: 16
		}
	},
	init:function(){
		this.liquidStorage.setLimit("water",this.getConfig().storage);
	},
	getScreenByName(){
		return UI_mechanic_waterpump;
	},
	tick(){
StorageInterface.checkHoppers(this);
		this.data.progress?null:this.data.progress=0;
		let cfg = this.getConfig();
		
		this.container.setScale("progressScale", this.data.progress/cfg.time);
		this.container.setScale("waterScale",this.liquidStorage.getAmount("water")/cfg.storage);
	},
	
	MechanicDeploy:function(){
		let tile = this.blockSource.getBlock(this.x,this.y-1,this.z);
		if((tile.id==8||tile.id==9)&&tile.data==0&&this.liquidStorage.getAmount("water")<=this.getConfig().storage-1){
			this.blockSource.setBlock(this.x,this.y-1,this.z,0,0);
			this.liquidStorage.addLiquid("water",1);
		}
		let liqStor = World.getTileEntity(this.x,this.y-1,this.z, this.blockSource);
		if(liqStor&&this.liquidStorage.getAmount("water")<=this.getConfig().storage-1){
			if(liqStor.liquidStorage.getAmount("water")>=1){
				let got = liqStor.liquidStorage.getLiquid("water",1);
				this.liquidStorage.addLiquid("water",1);
			}
		}
		let sourceSlot = this.container.getSlot("slotSource");
		let resultSlot = this.container.getSlot("slotResult");
		if((sourceSlot.id==325&&sourceSlot.data==0)&&this.liquidStorage.getAmount("water")>=1&&((resultSlot.id==325&&resultSlot.data==8&&resultSlot.count<64)||resultSlot.id==0)){
			sourceSlot.count--;
			resultSlot.id=325;
			resultSlot.data=8;
			resultSlot.count++;
			this.liquidStorage.getLiquid("water",1);
			this.container.validateAll();
		}
	}
},{item:true,liquid:true});
StorageInterface.createInterface(BlockID.machineMechanicPumpWater, {
	slots: {
		"slotSource": {input: true},
		"slotResult": {output: true}
	},
	canReceiveLiquid(){
		return false;
	},
	canTransportLiquid(name){
		return name == "water";
	}
});
