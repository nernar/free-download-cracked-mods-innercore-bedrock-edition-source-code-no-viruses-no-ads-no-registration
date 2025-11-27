/*TileEntity.registerPrototype(BlockID.RFstorage, {
	defaultValues: {
		energy: 0
	},
	canReceiveEnergy(side, type) {
		return side != 0;
	},
	canExtractEnergy(side, type) {
		return side == 0;
	},
	getCapacity(){
		return 2e6;
	},
	energyReceive(type, amount, voltage) {
		amount = Math.min(amount, 1000);
		var add = Math.min(amount, this.getCapacity() - this.data.energy);
		this.data.energy += add;
		return add;
	},
	energyTick(type, src){
		var output = Math.min(1000, this.data.energy);
		this.data.energy += src.add(output) - output;
	},
});
EnergyTileRegistry.addEnergyTypeForId(BlockID.RFstorage, energyRF);*/
Translation.addTranslation("Storage Controller", {
	ru: "Контроллер хранилища"
});
Translation.addTranslation("Energy port", {
	ru: "Энергитический порт"
});
IDRegistry.genBlockID("machineBatteryController");
Block.createBlockWithRotation("machineBatteryController", [
	{
		name: "Storage Controller",
		texture: [
			["block_machine_iron",0],
			["block_machine_iron", 0],
			["block_machine_iron",0],
			["energyBatteryController",0],
			["block_machine_iron",0],
			["block_machine_iron", 0]
		],
		inCreative: true
	}
],"opaque");
IDRegistry.genBlockID("machineBatteryPort");
Block.createBlock("machineBatteryPort", [
	{
		name: "Energy port",
		texture: [
			["block_energy_convertor",0],
			["block_energy_convertor", 0],
			["block_energy_convertor",0],
			["block_energy_convertor",0],
			["block_energy_convertor",0],
			["block_energy_convertor", 0]
		],
		inCreative: true
	}
],"opaque");
TileEntity.registerPrototype(BlockID.machineBatteryPort, {
	getCapacity(){
		if(this.controller === undefined)
			return 0;
		return this.controller.getCapacity();
	},
	energyReceive(type, amount, voltage) {
		if(this.controller === undefined || !this.controller.is) 
			return 0;
		amount = Math.min(amount, 1000);
		let add = Math.min(amount, this.getCapacity() - this.controller.data.energy);
		this.controller.data.energy += add;
		return add;
	},
	energyTick(type, src){
		if(this.controller === undefined || !this.controller.is) 
			return;
		let output = Math.min(1000, this.controller.data.energy);
		this.controller.data.energy += src.add(output) - output;
	}
});
FactAPI.machine.addBlock(BlockID.machineBatteryPort);
TileEntity.registerPrototype(BlockID.machineBatteryController, {
	defaultValues: {
		energy: 0
	},
	getCapacity(){
		if(this.is)
			return this.capacity;
		return 0;
	},
	tick(){
		if(World.getThreadTime() % 30 == 0){
			this.is = MultiBlock.can("battery", this);
			let capacity = this.getCapacity();
			if(this.is && this.data.energy > capacity)
				this.data.energy = capacity;
		}
	}
});
MultiBlock.register("battery", [
	BlockID.blockMachineIron,
	BlockID.machineBatteryController,
	BlockID.machineBatteryPort
], [
	VanillaBlockID.redstone_block
], {
	start(tile, min, max, blocks){
		tile.min = min;
		tile.max = max;
		tile.countController = 0;
		tile.arr = [];
		tile.capacity = blocks.length * 1e6;
	},
	isSide(tile, x, y, z, id){
		tile.arr.push({p: machine_particle, x: x+Math.random()*1.1-.1, y: y+Math.random()*1.1-.1, z: z+Math.random()*1.1-.1, vx: 0, vy: .0003, vz: 0});
		switch(id){
			case BlockID.machineBatteryPort:
				let _tile = TileEntity.getTileEntity(x, y, z, tile.blocksource);
				if(!_tile) _tile = TileEntity.addTileEntity(x, y, z, tile.blocksource);
				if(_tile)
					_tile.controller = tile;
				return true;
			break;
			case BlockID.blockMachineIron:
				return true
		}
		tile.countController++;
		return tile.countController == 1;
	},
	end(tile, min, max, blocks, result){
		if(result && __config__.getBool("machine_particle"))
			Mp.spawnParticles(tile.arr, tile.dimension);
	}
}, {
	x: 3,
	y: 3, 
	z: 3
})