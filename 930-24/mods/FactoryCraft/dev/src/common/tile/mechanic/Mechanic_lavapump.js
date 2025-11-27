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

Recipes.addShaped({ id: BlockID.machineMechanicPumpLava, count: 1, data: 0 }, [
	"a","x","a"
],[
	'a', 49, 0,
	'x', BlockID.machineMechanicPumpWater, 0
]);

var UI_mechanic_lavapump= new UI.StandartWindow({
	standart: {	
		header: {
			text: {
				text: "Mechanic Lava Pump/Механическая лавовая помпа"
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
	defaultValues: {
		progress:0,
		active:false
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
	getGuiScreen: function(){
		return UI_mechanic_lavapump;
	},
	getTransportSlots:function(){
		return {input:["slotSource"],output:["slotResult"]}
	},
	click:function(){
		var item = Player.getCarriedItem();
		this._getGuiScreen?this.getGuiScreen=this._getGuiScreen:null;
		
		if(ItemDictionary.isItemInCathegory(item.id,"wrench")){
			this.data.active=!this.data.active;
			this._getGuiScreen = this.getGuiScreen
			this.getGuiScreen=function(){return null};
			return 
		}
	},
	tick:function(){
		this.data.progress?null:this.data.progress=0;
		var cfg = this.getConfig();
		
		if(!this.data.active)return
		
		this.container.setScale("progressScale", this.data.progress/cfg.time);
		this.container.setScale("waterScale",this.liquidStorage.getAmount("lava")/cfg.storage);
		
		if(World.getThreadTime()%cfg.time==0){
			this.MechanicDeploy();
		}
	},
	
	MechanicDeploy:function(){
		var tile=World.getBlock(this.x,this.y-1,this.z);
		if ((tile.id == 10 || tile.id == 11) && tile.data == 0 && this.liquidStorage.getAmount("lava") <= this.getConfig().storage - 1) {
			World.setBlock(this.x,this.y-1,this.z,0,0);
			this.liquidStorage.addLiquid("lava", 1);
		}
		var liqStor=World.getTileEntity(this.x,this.y-1,this.z);
		if (liqStor && this.liquidStorage.getAmount("lava") <= this.getConfig().storage - 1) {
		    if (liqStor.liquidStorage.getAmount("lava") >= 1) {
		        var got = liqStor.liquidStorage.getLiquid("lava", 1);
		        this.liquidStorage.addLiquid("lava", 1);
			}
		}
		var sourceSlot=this.container.getSlot("slotSource");
		var resultSlot=this.container.getSlot("slotResult");
		if ((sourceSlot.id == 325 && sourceSlot.data == 0) && this.liquidStorage.getAmount("lava") >= 1 && ((resultSlot.id == 325 && resultSlot.data == 10 && resultSlot.count < 64) || resultSlot.id == 0)) {
			sourceSlot.count--;
			resultSlot.id=325;
			resultSlot.data=10;
			resultSlot.count++;
			this.liquidStorage.getLiquid("lava", 1);
			this.container.validateAll();
		}
	},
	
	canExtract:{lava:true}
},{item:true,liquid:true});