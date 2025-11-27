Translation.addTranslation("Miner", {
	ru: "Автобур"
});

var miner_texture={
	top:"block_machine_iron",
	bottom:"block_machine_iron",
	side:"block_machine_iron",
	back:"block_machine_iron",
	front:"block_energy_miner"
}

if(Options.theme){
	miner_texture.top="light_iron_machine";
	miner_texture.bottom="light_miner_bottom";
	miner_texture.back="light_miner_back";
	miner_texture.side="light_miner_side";
	miner_texture.front="light_miner_front";
}

IDRegistry.genBlockID("machineEnergyMiner");
Block.createBlockWithRotation("machineEnergyMiner", [{
	name: "Miner",
	texture: [
		[miner_texture.bottom,0],
		[miner_texture.top, 0],
		[miner_texture.back,0],
		[miner_texture.front,0],
		[miner_texture.side,0],
		[miner_texture.side,0]
	],
	inCreative: true
}], "opaque");


Recipes.addShaped({
	id: BlockID.machineEnergyMiner,
	count: 1,
	data: 0
}, [
	" a ", 
	"aba", 
	" a "
], [
	'b', BlockID.machineEnergyMinerDestroyer, 0,
	'a', ItemID.gearIron, 0
]);

var UI_energy_miner = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Miner/Автобур"
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
		"slot1": { type: "slot", x: 435, y: 110, size: 80},
		"slot2": { type: "slot", x: 515, y: 110, size: 80},
		"slot3": { type: "slot", x: 595, y: 110, size: 80},
		"slot4": { type: "slot", x: 435, y: 190, size: 80},
		"slot5": { type: "slot", x: 515, y: 190, size: 80},
		"slot6": { type: "slot", x: 595, y: 190, size: 80},
		"slot7": { type: "slot", x: 435, y: 270, size: 80},
		"slot8": { type: "slot", x: 515, y: 270, size: 80},
		"slot9": { type: "slot", x: 595, y: 270, size: 80},
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

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyMiner, {
	getGuiScreen: function () {
		return UI_energy_miner
	},
	getEnergyStorage: function () {
		return 1000
	},
	getTransportSlots: function () {
		slotOut = [];
		for (var i = 1; i < 10; i++) {
			slotOut.push("slot" + i);
		}
		return {
			input: [],
			output: slotOut
		};
	},
	putChest: function (item) {
		a = FactAPI.machineContainer.addItemToContainer(this.container, item, 10);
		if (a) World.drop(this.x + 0.5, this.y + 1, this.z + 0.5, item.id, item.count, item.data);
	},
	tick: function () {
		if (this.data.energy >= (10) && World.getThreadTime() % (20) == 0) {
			for (var y = 1; y < this.y; y++) {
				block = World.getBlock(this.x, this.y - y, this.z);
				if (!(block.id == 7 || block.id == 0 || block.id == 8 || block.id == 9 || block.id == 10 || block.id == 11)) {
					coords = {
						x: this.x,
						y: this.y - y,
						z: this.z
					};
					var drop = FactAPI.getBlockDrop(coords, block.id, block.data, 257);
					World.destroyBlock(this.x, this.y - y, this.z);
					for (var i in drop) {
						this.putChest({
							id: drop[i][0],
							count: drop[i][1],
							data: drop[i][2]
						});
					}
					this.data.energy -= (10);
					return
				}
			}
		}
		this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
		return
	},
	energyTick: FactAPI.machine.basicEnergyStorage
}, {
	item: true
});