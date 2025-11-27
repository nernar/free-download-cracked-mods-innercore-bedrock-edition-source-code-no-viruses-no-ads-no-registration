Translation.addTranslation("Liquid pump", {ru: "Жидкостный насос"});
Translation.addTranslation("Liquid Loader", {ru: "Жидкостный загрузчик"});

IDRegistry.genBlockID("machineEnergyLiquidPump");
Block.createBlock("machineEnergyLiquidPump", [
	{
		name:"Liquid pump", 
		texture: [
			["block_energy_reel",0],
			["block_energy_disassembler", 0],
			["block_energy_disassembler",0],
			["block_energy_disassembler",0],
			["block_energy_disassembler",0],
			["block_energy_disassembler",0]
		 ],
		 inCreative: true}
],"opaque");
IDRegistry.genBlockID("machineEnergyLiquidLoader");
Block.createBlock("machineEnergyLiquidLoader", [
	{
		name:"Liquid Loader", 
		texture: [
			["block_energy_reel",0],
			["block_net_energy", 0],
			["block_net_energy",0],
			["block_net_energy",0],
			["block_net_energy",0],
			["block_net_energy",0]
		 ],
		 inCreative: true}
],"opaque");

let blocksCheck = [
	{x: 0, y: -1, z: 0},
	{x: 0, y: 1, z: 0},
	{x: -1, y: 0, z: 0},
	{x: 1, y: 0, z: 0},
	{x: 0, y: 0, z: -1},
	{x: 0, y: 0, z: 1},
];

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyLiquidLoader, {
	defaultValues: {
		energy_storage: 100
	},
	useNetworkItemContainer: true,
	getScreenName(){return;},
	MechanicDeploy(){
		
	}
}, {liquid: true});

TileEntity.registerPrototype(BlockID.liquid_pipe, {
	defaultValues: {
		check: false 
	},
	tick(){
		if(World.getThreadTime()%6==0)
			this.data.check = false;
	},
	click(id, count, data, coords, player){
		if(Entity.getSneaking(player) && ItemType.is(id,"wrench")){
			this.blockSource.spawnDroppedItem(this.x+.5, this.y+.5, this.z+.5, BlockID.liquid_pipe, 1, 0);
			this.blockSource.destroyBlock(this.x, this.y, this.z, false);
		}
	}
});

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyLiquidPump, {
	defaultValues: {
		energy_storage: 100
	},
	useNetworkItemContainer: true,
	getScreenName(){return;},
	getBlocks(x, y, z, arr){ 
		for(let i in blocksCheck){
			let pos = blocksCheck[i];
			let block = this.blockSource.getBlock(x+pos.x, y+pos.y, z+pos.z);
			if(block.id == BlockID.liquid_pipe){
				let tile = TileEntity.getTileEntity(x+pos.x, y+pos.y, z+pos.z, this.blockSource);
				if(tile && !tile.data.check){
					tile.data.check = true;
					this.getBlocks(x+pos.x, y+pos.y, z+pos.z, arr);
				}
			}else if(block.id ==  BlockID.machineEnergyLiquidLoader){
				arr.push({x: x+pos.x, y: y+pos.y, z: z+pos.z});
			}
		}
		return arr;
	},
	input(tile, output, pos){
		let block = TileEntity.getTileEntity(pos.x, pos.y, pos.z, this.blockSource);
		for(let w in blocksCheck){
			let ip = blocksCheck[w];
			if(block.data.active && block.data.energy >= 5){
				let input = TileEntity.getTileEntity(pos.x+ip.x, pos.y+ip.y, pos.z+ip.z, this.blockSource);
				if(input){
					block.data.energy-=5;
					this.data.energy-=5;
					try{
						let liquids = Object.keys(tile.liquidStorage.liquidAmounts);
						for(let i in liquids)
							if(output.canTransportLiquid(liquids[i], 0))
								StorageInterface.transportLiquid(liquids[i], 200, output, StorageInterface.getLiquidStorage(this.blockSource, pos.x+ip.x, pos.y+ip.y, pos.z+ip.z), 0);
					}catch(e){
						StorageInterface.extractLiquid(null, 200, StorageInterface.getLiquidStorage(this.blockSource, pos.x+ip.x, pos.y+ip.y, pos.z+ip.z), output, 0);
					}
				}
			}
		}
	},
	pump(){
		let blocks = this.getBlocks(this.x, this.y, this.z, []);
		for(let q in blocksCheck){
			let op = blocksCheck[q];
			let tile = TileEntity.getTileEntity(this.x+op.x, this.y+op.y, this.z+op.z, this.blockSource);
			if(tile){
				let output = StorageInterface.getLiquidStorage(this.blockSource, this.x+op.x, this.y+op.y, this.z+op.z);
				for(let a in blocks)
					this.input(tile, output, blocks[a]);
			}
		}
	},
	MechanicDeploy(){
		try{
			if(World.getThreadTime()%20==0&&this.data.energy >= 5){
				this.pump();
			}
		}catch(e){
			Game.message(e)
		}
	}
}, {
	liquid: true
});