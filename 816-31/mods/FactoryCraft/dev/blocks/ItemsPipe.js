Translation.addTranslation("Items port", {ru: "Предметный порт"});
Translation.addTranslation("Items pipe", {ru: "Предметная труба");

IDRegistry.genBlockID("itemsPort");
Block.createBlock("itemsPort", [
	{
		name:"Items port", 
		texture: [
			["block_energy_reel",0],
			["block_energy_disassembler", 0],
			["block_energy_disassembler",0],
			["block_energy_disassembler",0],
			["block_energy_disassembler",0],
			["block_energy_disassembler",0]
		],
		inCreative: true
	}
],"opaque");
IDRegistry.genBlockID("itemsPipe");
Block.createBlock("itemsPipe", [
	{
		name:"Items pipe", 
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

TileEntity.registerPrototype(BlockID.itemsPipe, {
	defaultValues: {
		check: false 
	},
	tick(){
		if(World.getThreadTime()%15==0)
			this.data.check = false;
	},
	click(id, count, data, coords, player){
		if(Entity.getSneaking(player) && ItemType.is(id,"wrench")){
			this.blockSource.spawnDroppedItem(this.x+.5, this.y+.5, this.z+.5, BlockID.liquid_pipe, 1, 0);
			this.blockSource.destroyBlock(this.x, this.y, this.z, false);
		}
	}
});
TileEntity.registerPrototype(BlockID.itemsPort, {
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
			}else if(block.id == BlockID.itemsPort){
				if(x+pos.x != x && y+pos.y != y && z+pos.z != 0)
					arr.push({x: x+pos.x, y: y+pos.y, z: z+pos.z});
			}
		}
		return arr;
	},
	tick(){
		let blocks = this.getBlocks(this.x, this.y, this.z, []);
		for(let i in blocks){
			let block = blocks[i];
			for(let a in blocksCheck){
				let pos = {
					x: block.x + blocksCheck[a].x,
					y: block.y + blocksCheck[a].y,
					z: block.z + blocksCheck[a].z
				};
				let tile = this.blockSource.getBlockId(pos.x, pos.y, pos.z);
				if(t)
				
			}
		}
	}
});