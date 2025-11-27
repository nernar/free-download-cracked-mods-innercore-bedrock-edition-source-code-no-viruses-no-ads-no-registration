Translation.addTranslation("Quarry", {
	ru: "Автокарьер"
});

var quarry_texture={
	top:"block_machine_iron",
	bottom:"block_machine_iron",
	side:"block_machine_iron",
	back:"block_machine_iron",
	front:"block_energy_quarry"
}

if(Options.theme){
	quarry_texture.top="light_iron_machine";
	quarry_texture.bottom="light_quarry_bottom";
	quarry_texture.back="light_quarry_back";
	quarry_texture.side="light_quarry_side";
	quarry_texture.front="light_quarry_front";
}


IDRegistry.genBlockID("machineEnergyMinerQuarry");
Block.createBlockWithRotation("machineEnergyMinerQuarry", [
	{
		name:"Quarry",
		texture: [
			[quarry_texture.bottom,0],
			[quarry_texture.top, 0],
			[quarry_texture.back,0],
			[quarry_texture.front,0],
			[quarry_texture.side,0],
			[quarry_texture.side,0]
		],
		inCreative: true
	}
],"opaque");

Recipes.addShaped({
	id: BlockID.machineEnergyMinerQuarry,
	count: 1,
	data: 0
}, [
	" a ",
	"aba",
	" a "
], [
	'a', ItemID.gearDiamond, 0,
	'b', BlockID.machineEnergyMiner,0
]);

var UI_energy_quarry = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Quarry/Автокарьер"
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
	drawing: [{
			type: "bitmap",
			x: 0,
			y: 0,
			bitmap: "gui_ground",
			scale: 8
		},
		{
			type: "bitmap",
			x: 350,
			y: 50,
			bitmap: "energybar.ground",
			scale: 2.6
		},
	],
	elements: {
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
		"energyScale": {
			type: "scale",
			x: 350,
			y: 50,
			direction: 1,
			scale: 2.6,
			bitmap: "energybar.scale"
		}
	}
});

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyMinerQuarry,{
	getGuiScreen:function(){
		return UI_energy_quarry
	},
	getEnergyStorage:function(){
		return 10000
	},
	click:function(){
		this._getGuiScreen?this.getGuiScreen=this._getGuiScreen:null;
		if(ItemDictionary.isItemInCathegory(Player.getCarriedItem().id,"wrench")){
			this._getGuiScreen = this.getGuiScreen
			this.getGuiScreen=function(){return null};
			
			if(FactAPI.Marker.crd.length==4){
				var b = FactAPI.Marker.checkNearest(this.x,this.y,this.z);
				if(b){
					var c = FactAPI.Marker.getHeighMap();
					this.data.minX=c.minX;
					this.data.maxX=c.maxX;
					this.data.minZ=c.minZ;
					this.data.maxZ=c.maxZ;
					this.data.maxY=c.maxY;
					
					for(var i in FactAPI.Marker.crd)World.destroyBlock(FactAPI.Marker.crd[i].x,FactAPI.Marker.crd[i].y,FactAPI.Marker.crd[i].z,true);
					this.buildFrame();
					FactAPI.Marker.clearList();
					}
				}
			}
		},
		
		buildFrame:function(){
			var c = FactAPI.Marker.getHeighMap();
			for(var i =c.minX;i<=c.maxX;i++){
				World.setBlock(i,this.y,c.minZ,BlockID.fcFrame);
				World.setBlock(i,this.y,c.maxZ,BlockID.fcFrame);
				World.setBlock(i,Math.max(c.maxY,this.y+3),c.minZ,BlockID.fcFrame);
				World.setBlock(i,Math.max(c.maxY,this.y+3),c.maxZ,BlockID.fcFrame);
			}
			for(var i =c.minZ;i<=c.maxZ;i++){
				World.setBlock(c.minX,this.y,i,BlockID.fcFrame);
				World.setBlock(c.maxX,this.y,i,BlockID.fcFrame);
				World.setBlock(c.minX,Math.max(c.maxY,this.y+3),i,BlockID.fcFrame);
				World.setBlock(c.maxX,Math.max(c.maxY,this.y+3),i,BlockID.fcFrame);
			}
			for(var y=this.y;y<=Math.max(c.maxY,this.y+3);y++){
				World.setBlock(c.minX,y,c.minZ,BlockID.fcFrame);
				World.setBlock(c.minX,y,c.maxZ,BlockID.fcFrame);
				World.setBlock(c.maxX,y,c.maxZ,BlockID.fcFrame);
				World.setBlock(c.maxX,y,c.minZ,BlockID.fcFrame);
			}
		},
		
		getTransportSlots: function () {
			var slotOut=[];
			for(var i=1;i<29;i++){
				slotOut.push("slot"+i);
			}
			return {input: [], output:slotOut};
		},
		putChest: function(item){
			var a=FactAPI.machineContainer.addItemToContainer(this.container,item);
			if(a)World.drop(this.x+0.5, this.y+1, this.z+0.5, item.id, item.count, item.data);
		},
	tick:function(){
		if(!this.data.minX)return
		if(!this.data.digX){
			this.data.digY=this.data.maxY-1;
			this.data.digX=this.data.minX;
			this.data.digZ=this.data.minZ+1;
		
		}
		if(!this.data.complete)this.data.complete=false;
		
		
		if (this.data.energy >= 200 && World.getThreadTime() % 20 == 0) {
			this.updateDig();
			this.destroyDigBlock();
			this.data.energy -= 200;
		}
		this.container.setScale("energyScale", this.data.energy/this.getEnergyStorage());
		return
	},
	
	
	updateDig:function(){
		if(this.data.digX++>this.data.maxX-2){
			this.data.digX=this.data.minX+1;
			if(this.data.digZ++>this.data.maxZ-2){
				this.data.digZ=this.data.minZ+1;
				this.data.digX=this.data.minX+1;

				if(this.data.digY--<0){
					this.data.complete=true;
				}
			}
		}
	},
	
	
	
	destroyDigBlock:function(){
		var block = World.getBlock(this.data.digX, this.data.digY, this.data.digZ);
		if (block.id==0||block.id == 7 || block.id == 8 || block.id == 9 || block.id == 10 || block.id == 11){
			this.updateDig();
			this.destroyDigBlock();
			return
		}
		var coords={x:this.data.digX,y:this.data.digY,z:this.data.digZ};
			var drop = FactAPI.getBlockDrop(coords, block.id, block.data, 257);
			World.destroyBlock(this.data.digX,this.data.digY,this.data.digZ);
			for(var i in drop){
				this.putChest({id:drop[i][0],count:drop[i][1],data:drop[i][2]});
			}
	},
	
	
	
	energyTick:FactAPI.machine.basicEnergyStorage
	},{item:true});