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
	useNetworkItemContainer: true,
	defaultValues: {
		progress:0,
		active:true 
	},
	getConfig:function(){
		return {
			time: 100
		}
	},
	getScreenByName(){
		return UI_mechanic_hoe;
	},
	tick(){
		let cfg = this.getConfig();
		this.container.setScale("progressScale", this.data.progress/cfg.time);
	},
	
	MechanicDeploy(){
		for(let x=0;x<9;x++)
			for(let z=0;z<9;z++)
				for(let y=10+(this.data.modY/2);y>-10-(this.data.modY/2);y--){
					if(this.blockSource.getBlockId(this.x-4+x,this.y+y,this.z-4+z)==2&&this.blockSource.getBlockId(this.x-4+x,this.y+y+1,this.z-4+z)==0){
						
					this.blockSource.setBlock(this.x-4+x,this.y+y,this.z-4+z,60);
						this.data.progress=0;
						return
					}
					if(this.blockSource.getBlockId(this.x-4+x,this.y+y,this.z-4+z)==3&&this.blockSource.getBlockId(this.x-4+x,this.y+y+1,this.z-4+z)==0){
						this.blockSource.setBlock(this.x-4+x,this.y+y,this.z-4+z,60);
						this.data.progress=0;
						return
					}
				}
	}
});