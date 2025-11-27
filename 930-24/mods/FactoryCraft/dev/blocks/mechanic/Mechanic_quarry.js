Translation.addTranslation("Mechanic Quarry", {
	ru: "Механический карьер"
});

IDRegistry.genBlockID("machineMechanicQuarry");
Block.createBlockWithRotation("machineMechanicQuarry", [
    {name:"Mechanic Quarry", texture: [
	["block_machine_wooden",0],["block_machine_wooden", 0],
    ["block_machine_wooden",0],["block_mechanic_quarry",0],
	["block_machine_wooden",0],["block_machine_wooden",0]
		 ], inCreative: true}
],"opaque");

var UI_mechanic_quarry = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text:Translation.translate("Mechanic Quarry")
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


FactAPI.machine.registerTile(BlockID.machineMechanicQuarry,{
	useNetworkItemContainer: true,
	defaultValues: {
		progress:0,
		active:true
	},
	getConfig(){
		return {
			time: 100
		}
	},
	getScreenByName(){
		return UI_mechanic_quarry;
	},
	putChest: function(item){
		let a = FactAPI.machineContainer.addItemToContainer(this.container,item);
		if(a)
			this.blockSource.spawnDroppedItem(this.x+0.5, this.y+1, this.z+0.5, item.id, a, item.data);
	},
	tick(){
		let cfg = this.getConfig();
			
		this.container.setScale("progressScale", this.data.progress/cfg.time);
	},
	MechanicDeploy: function(){
		if(!this.data.digX){
			this.data.digY=this.y-1;
			this.data.digX=this.x-5;
			this.data.digZ=this.z-4;
		}
		if(!this.data.complete){
			let range=4;
			if(this.data.digX++>this.x+range-1){
				this.data.digX=this.x-range;
				if(this.data.digZ++>this.z+range-1){
					this.data.digZ=this.z-range;
					this.data.digX=this.x-range;
					if(this.data.digY--<this.y-31-this.data.modY)
						this.data.complete=true;
				}
			}
			let block = this.blockSource.getBlock(this.data.digX,this.data.digY,this.data.digZ);
			if(block.id==7||block.id==8||block.id==9||block.id==10||block.id==11)
				return;

			let coords = {x:this.data.digX,y:this.data.digY,z:this.data.digZ};

			let drop = FactAPI.getBlockDrop(coords,block.id,block.data,274);
			this.blockSource.destroyBlock(this.data.digX,this.data.digY,this.data.digZ);

			for(let i in drop)
				this.putChest({id:drop[i][0],count:drop[i][1],data:drop[i][2]});
		}
		this.container.sendChanges(); 
	}
},{item:true});
