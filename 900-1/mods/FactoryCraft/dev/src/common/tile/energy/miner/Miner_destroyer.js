/*
	Block Destroyer
	- added in 1.0
*/

Translation.addTranslation("Block Destroyer", {
	ru: "Разрушитель блоков"
});

var destroyer_texture={
	top:"block_energy_destroyer",
	side:"block_machine_iron"
}

if(Options.theme){
	destroyer_texture.top="light_destroyer";
	destroyer_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("machineEnergyMinerDestroyer");
Block.createBlock("machineEnergyMinerDestroyer", [{
	name: "Block Destroyer",
	texture: [
		[destroyer_texture.side, 0],
		[destroyer_texture.top, 0],
		[destroyer_texture.side, 0],
		[destroyer_texture.side, 0],
		[destroyer_texture.side, 0],
		[destroyer_texture.side, 0]
	],
	inCreative: true
}], "opaque");


Recipes.addShaped({
	id: BlockID.machineEnergyMinerDestroyer,
	count: 1,
	data: 0
}, [
	"c",
	"a",
	"b",
], [
	'a', BlockID.blockMachineIron, 0,
	'b', 257, 0,
	'c', ItemID.factoryBattery,0
]);


var UI_energy_destroyer = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Block Destroyer/Разрушитель блоков"
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

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyMinerDestroyer, {
	getGuiScreen: function () {
		return UI_energy_destroyer;
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
		var a = FactAPI.machineContainer.addItemToContainer(this.container, item, 10);
		if (a) World.drop(this.x + 0.5, this.y + 1, this.z + 0.5, item.id, item.count, item.data);
	},
	tick: function () {
		if (this.data.energy >= (5) && World.getThreadTime() % (20) == 0) {
			block = World.getBlock(this.x, this.y - 1, this.z);
			if (!(block.id == 7 || block.id == 0 || block.id == 8 || block.id == 9 || block.id == 10 || block.id == 11)) {
				coords = {
					x: this.x,
					y: this.y - 1,
					z: this.z
				};
				var drop = FactAPI.getBlockDrop(coords, block.id, block.data, 257);
				World.destroyBlock(this.x, this.y - 1, this.z);
				for (var i in drop) {
					this.putChest({
						id: drop[i][0],
						count: drop[i][1],
						data: drop[i][2]
					});
				}
				this.data.energy -= (5);
				return
			}
		}
		this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
		return
	},
	energyTick: FactAPI.machine.basicEnergyStorage
}, {
	item: true
});