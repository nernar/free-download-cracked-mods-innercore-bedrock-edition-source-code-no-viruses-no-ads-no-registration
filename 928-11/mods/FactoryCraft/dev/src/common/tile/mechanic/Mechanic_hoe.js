Translation.addTranslation("Mechanic Hoe", {
	ru: "Механический плуг"
});

IDRegistry.genBlockID("machineMechanicHoe");

Block.createBlockWithRotation("machineMechanicHoe", [{
	name: "Mechanic Hoe",
	texture: [
		["block_machine_wooden", 0],
		["block_machine_wooden", 0],
		["block_machine_wooden", 0],
		["block_mechanic_hoe", 0],
		["block_machine_wooden", 0],
		["block_machine_wooden", 0]
	],
	inCreative: true
}], "opaque");

Recipes.addShaped({
	id: BlockID.machineMechanicHoe,
	count: 1,
	data: 0
}, [
	"a",
	"x"
	], [
		'a', 294, 0,
		'x', BlockID.blockMachineWooden, 0
]);

var UI_mechanic_hoe = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Mechanic Hoe/Механический плуг"
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
	params: {
		slot: "slotFactory",
		invSlot: "slotFactory",
		selection: "selectionFactory"
	},
	drawing: [
		{
			type: "bitmap",
			x: 0,
			y: 0,
			bitmap: "gui_ground",
			scale: 8
		},
		{
			type: "bitmap",
			x: 585,
			y: 130,
			bitmap: "progressbar.ground",
			scale: 5
		},
		{
			type: "bitmap",
			x: 490,
			y: 130,
			bitmap: "gear",
			scale: 5
		}
	],
	elements: {
		"progressScale": {
			type: "scale",
			x: 585,
			y: 130,
			direction: 0,
			scale: 5,
			bitmap: "progressbar.scale"
		},
		"slotU1": {	type: "slot", x: 400, y: 250, size: 70},
		"slotU2": { type: "slot", x: 470, y: 250, size: 70},
		"slotU3": { type: "slot", x: 540, y: 250, size: 70},
		"slotU4": {	type: "slot", x: 610, y: 250, size: 70},
		"slotU5": {	type: "slot", x: 680, y: 250, size: 70},
		"slotU6": {	type: "slot", x: 750, y: 250, size: 70},
		"slotU7": { type: "slot", x: 820, y: 250, size: 70},
	}
});

FactAPI.machine.registerTile(BlockID.machineMechanicHoe,{
	defaultValues: {
		progress:0,
		active:false
	},
	getConfig:function(){
		return {
			time: 100
		}
	},
	getGuiScreen: function(){
		return UI_mechanic_hoe;
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
		var cfg = this.getConfig();
		
		if(!this.data.active)return
		
		this.container.setScale("progressScale", this.data.progress/cfg.time);
		
		this.data.modY=0;
		this.data.modTime=0;
		
		var updates={
			293:{timer:0.5}
		};
		updates[ItemID.gearIron]={timer:0.1}
		updates[ItemID.gearGolden]={timer:0.2,height:2}
		updates[ItemID.gearDiamond]={timer:0.4,height:4}
		
		for(var i=1;i<=7;i++){
			slotU=this.container.getSlot("slotU"+i);
			if(updates[slotU.id]){
				if(updates[slotU.id].timer){
					this.data.modTime+=updates[slotU.id].timer;
				}
				if(updates[slotU.id].height){
					this.data.modY+=updates[slotU.id].height;
				}
			}
		}
		
		var add = 1+this.data.modTime;
		this.data.progress+=add;
		
		if(this.data.progress>=cfg.time){
			this.MechanicDeploy();
			this.data.progress=0;
		}
	},
	
	MechanicDeploy: function(){
		for(var x=0;x<9;x++){
			for(var z=0;z<9;z++){
				for(var y=10+(this.data.modY/2);y>-10-(this.data.modY/2);y--){
					if(World.getBlockID(this.x-4+x,this.y+y,this.z-4+z)==2&&World.getBlockID(this.x-4+x,this.y+y+1,this.z-4+z)==0){
						World.setBlock(this.x-4+x,this.y+y,this.z-4+z,60);
						this.data.progress=0;
						return
					}
					if(World.getBlockID(this.x-4+x,this.y+y,this.z-4+z)==3&&World.getBlockID(this.x-4+x,this.y+y+1,this.z-4+z)==0){
						World.setBlock(this.x-4+x,this.y+y,this.z-4+z,60);
						this.data.progress=0;
						return
					}
				}
			}
		}
	}
});