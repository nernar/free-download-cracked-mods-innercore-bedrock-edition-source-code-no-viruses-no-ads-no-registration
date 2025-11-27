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


	Recipes.addShaped({id: BlockID.machineMechanicPumpWater, count: 1, data: 0}, [
		"a","x","a"
	],[
		'a', 325, 0,
		'x', BlockID.blockMachineWooden, 0
	]);

	

var UI_mechanic_waterpump= new UI.StandartWindow({
	standart: {	
		header: {
			text: {
				text: "Mechanic Water Pump/Механическая водяная помпа"
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
		this.liquidStorage.setLimit("water",this.getConfig().storage);
	},
	getGuiScreen: function(){
		return UI_mechanic_waterpump;
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
		this.container.setScale("waterScale",this.liquidStorage.getAmount("water")/cfg.storage);
		
		if(World.getThreadTime()%cfg.time==0){
			this.MechanicDeploy();
		}
	},
	
	MechanicDeploy:function(){
		var tile=World.getBlock(this.x,this.y-1,this.z);
		if((tile.id==8||tile.id==9)&&tile.data==0&&this.liquidStorage.getAmount("water")<=this.getConfig().storage-1){
			World.setBlock(this.x,this.y-1,this.z,0,0);
			this.liquidStorage.addLiquid("water",1);
		}
		var liqStor=World.getTileEntity(this.x,this.y-1,this.z);
		if(liqStor&&this.liquidStorage.getAmount("water")<=this.getConfig().storage-1){
			if(liqStor.liquidStorage.getAmount("water")>=1){
				var got=liqStor.liquidStorage.getLiquid("water",1);
				this.liquidStorage.addLiquid("water",1);
			}
		}
		var sourceSlot=this.container.getSlot("slotSource");
		var resultSlot=this.container.getSlot("slotResult");
		if((sourceSlot.id==325&&sourceSlot.data==0)&&this.liquidStorage.getAmount("water")>=1&&((resultSlot.id==325&&resultSlot.data==8&&resultSlot.count<64)||resultSlot.id==0)){
			sourceSlot.count--;
			resultSlot.id=325;
			resultSlot.data=8;
			resultSlot.count++;
			this.liquidStorage.getLiquid("water",1);
			this.container.validateAll();
		}
	},
	
	canExtract:{water:true}
},{item:true,liquid:true});