Translation.addTranslation("Mechanic Farm", {
	ru: "Механическая ферма"
});

IDRegistry.genBlockID("machineMechanicFarm");
Block.createBlockWithRotation("machineMechanicFarm", [
	{name:"Mechanic Farm", texture: [
		["block_machine_wooden",0],["block_machine_wooden", 0],
		["block_machine_wooden",0],["block_mechanic_farm",0],
		["block_machine_wooden",0],["block_machine_wooden",0]
	], inCreative: true}
],"opaque");

Recipes.addShaped({id: BlockID.machineMechanicFarm, count: 1, data: 0}, [
		"#a#",
		"bob",
		"#x#"
],[
	'a',359,0,
	'b',ItemID.gearWooden,0,
	'o', BlockID.machineMechanicHoe, 0,
	'x', BlockID.machineMechanicPumpWater, 0
]);
	
var UI_mechanic_farm= new UI.StandartWindow({
	standart: {	
		header: {
			text: {
				text: "Mechanic Farm/Механическая ферма"
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
		{type: "bitmap", x: 655, y: 350, bitmap: "progressbar.ground", scale: 5},
		{type: "bitmap", x: 560, y: 345, bitmap: "gear", scale: 5}
	],
	params: {
		slot: "slotFactory",
		invSlot: "slotFactory",
		selectionFactoryon: "selectionFactory"
	},
	elements: {
		"progressScale": {type: "scale", x: 655, y: 350, direction: 0, scale: 5, bitmap: "progressbar.scale"},
		"waterScale": { type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "liquid.water" },
		
		"slot1": {type: "slot", x: 470, y: 60, size: 70},
		"slot2": {type: "slot", x: 540, y: 60, size: 70},
		"slot3": {type: "slot", x: 610, y: 60, size: 70},
		"slot4": {type: "slot", x: 680, y: 60, size: 70},
		"slot5": {type: "slot", x: 750, y: 60, size: 70},
		"slot6": {type: "slot", x: 820, y: 60, size: 70},
		"slot7": {type: "slot", x: 890, y: 60, size: 70},
		"slot8": {type: "slot", x: 470, y: 130, size: 70},
		"slot9": {type: "slot", x: 540, y: 130, size: 70},
		"slot10": {type: "slot", x: 610, y: 130, size: 70},
		"slot11": {type: "slot", x: 680, y: 130, size: 70},
		"slot12": {type: "slot", x: 750, y: 130, size: 70},
		"slot13": {type: "slot", x: 820, y: 130, size: 70},
		"slot14": {type: "slot", x: 890, y: 130, size: 70},
		"slot15": {type: "slot", x: 470, y: 200, size: 70},
		"slot16": {type: "slot", x: 540, y: 200, size: 70},
		"slot17": {type: "slot", x: 610, y: 200, size: 70},
		"slot18": {type: "slot", x: 680, y: 200, size: 70},
		"slot19": {type: "slot", x: 750, y: 200, size: 70},
		"slot20": {type: "slot", x: 820, y: 200, size: 70},
		"slot21": {type: "slot", x: 890, y: 200, size: 70},
		"slot22": {type: "slot", x: 470, y: 270, size: 70},
		"slot23": {type: "slot", x: 540, y: 270, size: 70},
		"slot24": {type: "slot", x: 610, y: 270, size: 70},
		"slot25": {type: "slot", x: 680, y: 270, size: 70},
		"slot26": {type: "slot", x: 750, y: 270, size: 70},
		"slot27": {type: "slot", x: 820, y: 270, size: 70},
		"slot28": {type: "slot", x: 890, y: 270, size: 70},
		"slotU1": {type: "slot", x: 470, y: 430, size: 70},
		"slotU2": {type: "slot", x: 540, y: 430, size: 70},
		"slotU3": {type: "slot", x: 610, y: 430, size: 70},
		"slotU4": {type: "slot", x: 680, y: 430, size: 70},
		"slotU5": {type: "slot", x: 750, y: 430, size: 70},
		"slotU6": {type: "slot", x: 820, y: 430, size: 70},
		"slotU7": {type: "slot", x: 890, y: 430, size: 70},
	}
});

FactAPI.machine.registerTile(BlockID.machineMechanicFarm,{
	defaultValues: {
		progress:0,
		index:0,
		active:false
	},
	getConfig:function(){
		return {
			time: 100
		}
	},
	getGuiScreen: function(){
		return UI_mechanic_farm;
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
		if(!this.data.act){this.liquidStorage.setLimit("water",16,0000001);this.liquidStorage.addLiquid("water", 0.000001);this.data.act=1;}
		var cfg = this.getConfig();
		if(!this.data.index)this.data.index=0;
		
		if(!this.data.active)return
		
		this.container.setScale("progressScale", this.data.progress/cfg.time);
		this.container.setScale("waterScale", (this.liquidStorage.getAmount("water")||0)/16);
		
		this.data.modY=0;
		this.data.modTime=0;
		
		var updates={
			359:{timer:0.5}
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
		this.makeFarmlands();
		this.waterFarmlands();
		this.growPlants();
		var block = World.getBlock(this.x,this.y-1,this.z);
		if((block.id==8||block.id==9)&&block.data==0&&this.liquidStorage.getAmount("water")<16){
			World.destroyBlock(this.x,this.y-1,this.z);
			this.liquidStorage.addLiquid("water",1);
		}
		var container = World.getContainer(this.x,this.y+1,this.z);
		if(container&&container.tileEntity&&container.tileEntity.isFactoryTank){
			var storage = container.tileEntity.liquidStorage;
			var amount = storage.getAmount("water");
			if(this.liquidStorage.getAmount("water")<16&&amount>=1){
				this.liquidStorage.addLiquid("water",1);
				storage.getLiquid("water",1);
			}
		}
	},
	
	makeFarmlands: function(){
		for(var x=0;x<9;x++){
			for(var z=0;z<9;z++){
				for(var y=10+(this.data.modY/2);y>-10-(this.data.modY/2);y--){
					var id = World.getBlockID(this.x-4+x,this.y+y,this.z-4+z);
					if((id==3||id==2)&&World.getBlockID(this.x-4+x,this.y+y+1,this.z-4+z)==0){
						World.setBlock(this.x-4+x,this.y+y,this.z-4+z,60,0);
						return
					}
				}
			}
		}
	},
	
	waterFarmlands: function(){
		for(var x=0;x<9;x++){
			for(var z=0;z<9;z++){
				for(var y=10+(this.data.modY/2);y>-10-(this.data.modY/2);y--){
					if(this.liquidStorage.getAmount("water")>=1){
						var block = World.getBlock(this.x-4+x,this.y+y,this.z-4+z);
						if(block.id==60&&block.data==0){
							World.setBlock(this.x-4+x,this.y+y,this.z-4+z,World.getBlockID(this.x-4+x,this.y+y,this.z-4+z),7);
							this.liquidStorage.getLiquid("water",1);
							return
						}
					}
				}
			}
		}
	},
	
	findFarmland: function(){
		var RANGE = 9;
		var pos = this.data.index % (RANGE * RANGE);
		var x = this.x - parseInt(RANGE / 2) + pos % RANGE;
		var z = this.z - parseInt(RANGE / 2) + parseInt(pos / RANGE);
		this.data.index++;
		for (var y = this.y - 3; y < this.y + 4; y++){
			if (World.getBlockID(x, y, z)==60){
				return {
					x: x,
					y: y,
					z: z
				};
			}
		}
		return null;
	},
	
	growPlants: function(){
		var CROPS = FactAPI.farm.crops;
		var SEEDS = FactAPI.farm.seeds;
		var DATAS = FactAPI.farm.datas;
		var farmlandCoords = this.findFarmland();
		if (farmlandCoords){
			var block = World.getBlock(farmlandCoords.x, farmlandCoords.y + 1, farmlandCoords.z);
			if(CROPS[block.id]){
				if(block.data>=DATAS[block.id]){
					var drop=CROPS[block.id];
					World.destroyBlock(farmlandCoords.x,farmlandCoords.y+1,farmlandCoords.z);
					for(var i in drop){
						var a=this.putChest({id:drop[i][0],count:drop[i][1],data:drop[i][2]});
					}
					return
				}
				if(block.data<DATAS[block.id]){
					if(FactAPI.machineContainer.isItemInContainer(this.container,{id:351,count:1,data:15})){
						FactAPI.machineContainer.giveItemFromContainer(this.container,{id:351,count:1,data:15});
						World.setBlock(farmlandCoords.x,farmlandCoords.y+1,farmlandCoords.z,block.id,7);
						return
					}
					if(this.liquidStorage.getAmount("water")>1){
						this.liquidStorage.getLiquid("water",1);
						World.setBlock(farmlandCoords.x,farmlandCoords.y+1,farmlandCoords.z,block.id,block.data+1);
						return
					}
				}
			}
			if(block.id==0){
				for(var i in SEEDS){
					if(FactAPI.machineContainer.isItemInContainer(this.container,{id:i,count:1,data:0})){
							FactAPI.machineContainer.giveItemFromContainer(this.container,{id:i,count:1,data:0});
							World.setBlock(farmlandCoords.x,farmlandCoords.y+1,farmlandCoords.z,SEEDS[i],0);
							this.data.progress=0;
							return
					}
				}
			}
		}
	},
	
	canFill:{water:true}
},{item:true,liquid:true});