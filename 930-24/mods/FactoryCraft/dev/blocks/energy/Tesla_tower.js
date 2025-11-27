Translation.addTranslation("Tesla Reel", {ru: "Катушка Теслы"});
IDRegistry.genBlockID("machineEnergyTeslaTower");
Block.createBlock("machineEnergyTeslaTower", [
	{name: "Tesla Reel", texture: [
		["block_energy_reel",0],["block_energy_reel", 0],
		["block_energy_tesla",0],["block_energy_tesla",0],
		["block_energy_tesla",0],["block_energy_tesla",0]
	], inCreative: true}
],"opaque");
ICRender.getGroup("iron-wire").add(BlockID.machineEnergyTeslaTower,-1);

let ui_tesla= new UI.StandartWindow({
	standart: {
		header: {text: {text: Translation.translate("Tesla Reel")}},
		inventory: {standart: true},
		background: {standart: true}, 
	},
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6},
	],
	elements: {
		"energyScale": {type: "scale", x: 350, y: 50, direction: 1, value: 0.5, bitmap: "energybar.scale", scale: 2.6},
	},
	params: { 
	slot: "slotFactory", 
	invSlot: "slotFactory", 	
	selectionFactoryon: "selectionFactory"
	} 
});

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyTeslaTower, {
	useNetworkItemContainer: true,
	defaultValues: {
		energy_storage:10000,
	},
	getScreenName(player, coords){
		return "main";
	},
	getScreenByName(){
		return ui_tesla;
	},
	setDefaultValues: function(){
		this.data.energy_storage = this.defaultValues.energy_storage;
	},
	checkStation:function(){
		var blocks=[
			[0,-1,0,BlockID.blockMachineIron],
			[0,-2,0,BlockID.blockMachineIron],
			[0,-3,0,BlockID.blockMachineIron],
			[1,0,0,BlockID.iron_cable],[-1,0,0,BlockID.iron_cable],
			[1,0,1,BlockID.iron_cable],[1,0,-1,BlockID.iron_cable],
			[0,0,1,BlockID.iron_cable],[0,0,-1,BlockID.iron_cable],
			[-1,0,0,BlockID.iron_cable],[-1,0,-1,BlockID.iron_cable],
			[1,-1,0,BlockID.iron_cable],[-1,-1,0,BlockID.iron_cable],
			[1,-1,1,BlockID.iron_cable],[1,-1,-1,BlockID.iron_cable],
			[0,-1,1,BlockID.iron_cable],[0,-1,-1,BlockID.iron_cable],
			[-1,-1,0,BlockID.iron_cable],[-1,-1,-1,BlockID.iron_cable],
			[1,-3,0,BlockID.energy_reel],[-1,-3,0,BlockID.energy_reel],
			[0,-3,1,BlockID.energy_reel],[0,-3,-1,BlockID.energy_reel],
			[2,-3,0,BlockID.blockMachineIron],[-2,-3,0,BlockID.blockMachineIron],
			[0,-3,2,BlockID.blockMachineIron],[0,-3,-2,BlockID.blockMachineIron],
		];
		for(let i in blocks){
			let a=blocks[i];
			if(this.blockSource.getBlockId(this.x+a[0],this.y+a[1],this.z+a[2])!=a[3])return false;
		}
		return true
	},
	MechanicDeploy(){
		this.setDefaultValues();
		if(World.getThreadTime()%20==0&&this.checkStation()){
			if(this.data.energy>=100){
				var all=Entity.getAll();
				for(var i in all){
					if(Entity.getDimension(all[i])!=this.dimension)
  				return;
					var ent={
						64:true,65:true,
						66:true,67:true,
						68:true,69:true,
						77:true,80:true,
						81:true,82:true,
						83:true,84:true,
						85:true,86:true,
						90:true,93:true,
						94:true
					};
					if(Network.getConnectedPlayers().indexOf(all[i])&&!ent[Entity.getType(all[i])]){
						if(Entity.getDistanceToCoords(all[i], {x:this.x,y:this.y,z:this.z})<10){
							crd=Entity.getPosition(all[i]);
							this.blockSource.spawnEntity(this.x,this.y+1,this.z,93);
							Entity.damageEntity(all[i], 5);
							this.blockSource.spawnEntity(crd.x,crd.y,crd.z,93);
							this.data.energy-=100;
							return
						}
					}
				}
			}
		}
		var energyStorage = this.getEnergyStorage();
		this.data.energy = Math.min(this.data.energy, energyStorage);
		this.container.sendChanges();
	},
	tick(){
		var energyStorage = this.getEnergyStorage();
		this.container.setScale("energyScale", this.data.energy / energyStorage);
	},
});