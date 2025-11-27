Translation.addTranslation("Mechanic Fish Farm", {
	ru: "Механическая ферма рыбы"
});

IDRegistry.genBlockID("machineMechanicFarmFish");
Block.createBlockWithRotation("machineMechanicFarmFish", [
	{name:"Mechanic Fish Farm", texture: [
	["block_machine_wooden",0],["block_machine_wooden", 0],
	["block_machine_wooden",0],["block_mechanic_fishfarm",0],
	["block_machine_wooden",0],["block_machine_wooden",0]
		 ], inCreative: true}
],"opaque");

Recipes.addShaped({id: BlockID.machineMechanicFarmFish, count: 1, data: 0}, [
	"a","x","b"
],[
	'a', 346, 0,
	'x', BlockID.blockMachineWooden, 0,
	'b', BlockID.fishingnet,0
]);

var UI_mechanic_fishfarm = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text:"Mechanic Fish Farm/Механическая ферма рыбы"
			}
		},
		minHeight: 700,
		inventory: {standart: true},
		background: {standart: true}
	},		
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 585, y: 350, bitmap: "progressbar.ground", scale: 5},
		{type: "bitmap", x: 490, y: 345, bitmap: "gear", scale: 5}
	],
	params: { 
		slot: "slotFactory", 
		invSlot: "slotFactory", 	
		selection: "selectionFactory"
	},
	elements: {
		"slot1": {type: "slot", x: 400, y: 60, size: 70},
		"slot2": {type: "slot", x: 470, y: 60, size: 70},
		"slot3": {type: "slot", x: 540, y: 60, size: 70},
		"slot4": {type: "slot", x: 610, y: 60, size: 70},
		"slot5": {type: "slot", x: 680, y: 60, size: 70},
		"slot6": {type: "slot", x: 750, y: 60, size: 70},
		"slot7": {type: "slot", x: 820, y: 60, size: 70},
		"slot8": {type: "slot", x: 400, y: 130, size: 70},
		"slot9": {type: "slot", x: 470, y: 130, size: 70},
		"slot10": {type: "slot", x: 540, y: 130, size: 70},
		"slot11": {type: "slot", x: 610, y: 130, size: 70},
		"slot12": {type: "slot", x: 680, y: 130, size: 70},
		"slot13": {type: "slot", x: 750, y: 130, size: 70},
		"slot14": {type: "slot", x: 820, y: 130, size: 70},
		"slot15": {type: "slot", x: 400, y: 200, size: 70},
		"slot16": {type: "slot", x: 470, y: 200, size: 70},
		"slot17": {type: "slot", x: 540, y: 200, size: 70},
		"slot18": {type: "slot", x: 610, y: 200, size: 70},
		"slot19": {type: "slot", x: 680, y: 200, size: 70},
		"slot20": {type: "slot", x: 750, y: 200, size: 70},
		"slot21": {type: "slot", x: 820, y: 200, size: 70},
		"slot22": {type: "slot", x: 400, y: 270, size: 70},
		"slot23": {type: "slot", x: 470, y: 270, size: 70},
		"slot24": {type: "slot", x: 540, y: 270, size: 70},
		"slot25": {type: "slot", x: 610, y: 270, size: 70},
		"slot26": {type: "slot", x: 680, y: 270, size: 70},
		"slot27": {type: "slot", x: 750, y: 270, size: 70},
		"slot28": {type: "slot", x: 820, y: 270, size: 70},
		"progressScale": {type: "scale", x: 585, y: 350, direction: 0, scale: 5, bitmap: "progressbar.scale"},
		"slotU1": {type: "slot", x: 400, y: 430, size: 70},
		"slotU2": {type: "slot", x: 470, y: 430, size: 70},
		"slotU3": {type: "slot", x: 540, y: 430, size: 70},
		"slotU4": {type: "slot", x: 610, y: 430, size: 70},
		"slotU5": {type: "slot", x: 680, y: 430, size: 70},
		"slotU6": {type: "slot", x: 750, y: 430, size: 70},
		"slotU7": {type: "slot", x: 820, y: 430, size: 70},
	}
});

FactAPI.machine.registerTile(BlockID.machineMechanicFarmFish,{
	defaultValues: {
		progress:0,
		active:false
	},
	getConfig:function(){
		return {
			time: 1000
		}
	},
	getGuiScreen: function(){
		return UI_mechanic_fishfarm;
	},
	putChest: function(item){
		var a=FactAPI.machineContainer.addItemToContainer(this.container,item);
		if(a)World.drop(this.x+0.5, this.y+1, this.z+0.5, item.id, a, item.data);
	},
	getTransportSlots: function () {
		var slotOut=[];
		for(var i=1;i<=28;i++){
			slotOut.push("slot"+i);
		}
		return {input: [], output:slotOut};
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
			346:{timer:0.5}
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
		var count=0;
		for(var x=0;x<9;x++){
			for(var z=0;z<9;z++){
				if(World.getBlockID(this.x-4+x,this.y,this.z-4+z)==BlockID.fishingnet){
					if(Math.random()<0.03)count++;
				}
			}
		}
		if(count>0){
			this.putChest({id: 349, count: count, data:0});
		}
	}
},{item:true});