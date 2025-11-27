Translation.addTranslation("Auto clicker", {
	ru: "Авто кликер"
});

IDRegistry.genBlockID("energyAutoClick");
Block.createBlockWithRotation("energyAutoClick", [
	{
		name: "Auto clicker",
		texture: [
			["block_machine_iron",0],
			["block_machine_iron", 0],
			["block_machine_iron",0],
			["block_energy_reel",0],
			["block_machine_iron",0],
			["block_machine_iron",0]
		],
		inCreative: true
	}
],"opaque");

function getCoords(x, y, z, data){
	return [
		{x: x, y: y, z: z+1},
		{x: x, y: y, z: z-1},
		{x: x+1, y: y, z: z},
		{x: x-1, y: y, z: z}
	][data];
}

FactAPI.machine.registerEnergyTile(BlockID.energyAutoClick, {
	defaultValues: {
		energy_storage: 2000,
		player: null
	},
	MechanicDeploy(){
		if(World.getThreadTime() % 10 == 0 && this.data.energy >= 500){
			if(!this.blockSource) return;
			this.data.energy-=500;
			let pos = getCoords(this.x, this.y, this.z, this.blockSource.getBlockData(this.x, this.y, this.z));
			pos.relative = pos;
			pos.side = this.blockSource.getBlockData(this.x, this.y, this.z);
			pos.vec = pos;
			try{
				Item.invokeItemUseOn(pos, {id:0,data:0,count:0}, false, this.data.player);
			}catch(e){
				
			}
		}
	},
	click(id, count, data, pos, player){
		this.data.player = player;
		Mp.message(player, "Блок привязан к вам")
	}
});
