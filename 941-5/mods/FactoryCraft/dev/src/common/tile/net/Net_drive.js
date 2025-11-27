Translation.addTranslation("Disk Drive", {
	ru: "Дисковод"
});

var IO_texture={
	side:"block_machine_iron",
	front:"block_energy_IO"
}

if(Options.theme){
	IO_texture.side="light_iron_machine";
	IO_texture.front="light_IO";
}

IDRegistry.genBlockID("machineNetIO");
Block.createBlockWithRotation("machineNetIO", [
	{
		name: "Disk Drive",
		texture: [
			[IO_texture.side, 0],
			[IO_texture.side, 0],
			[IO_texture.side, 0],
			[IO_texture.front, 0],
			[IO_texture.side, 0],
			[IO_texture.side, 0]
		],
		inCreative: true
	}
],"opaque");

Recipes.addShaped({
	id: BlockID.machineNetIO, 
	count: 1, 
	data: 0
}, [
	"bcb",
	"c#c",
	"bab"
], [
	'a', BlockID.blockMachineIron,0,
	'b', 331,0,
	'c', ItemID.crystalFluix,0
]);

var UI_net_io = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Disk Drive/Дисковод"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	params: { 
	slot: "slotFactory", 
	invSlot: "slotFactory", 	
	selection: "selectionFactory"
	},
	
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
	],
	
	elements: {
		"slot": {type: "slot", x: 600, y: 210},
	}
});

FactAPI.machine.registerNetTile(BlockID.machineNetIO,{
	getGuiScreen: function(){
		return UI_net_io
	},
	tick: function(){
		var slot = this.container.getSlot("slot");
		if(slot.id==ItemID.diskItem&&slot.data==0){
			slot.data = FactAPI.disk.createItemDisk(slot.id,slot.data);
			this.container.validateAll();
		}
	}
});