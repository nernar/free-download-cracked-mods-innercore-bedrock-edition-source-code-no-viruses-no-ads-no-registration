Translation.addTranslation("Terminal", {
	ru: "Терминал"
});

var Terminal_texture={
	side:"block_machine_iron",
	front:"block_energy_terminal"
}

if(Options.theme){
	Terminal_texture.side="light_iron_machine";
	Terminal_texture.front="light_terminal";
}

IDRegistry.genBlockID("machineNetTerminal");
Block.createBlockWithRotation("machineNetTerminal", [
	{
		name: "Terminal",
		texture: [
			[Terminal_texture.side, 0],
			[Terminal_texture.side, 0],
			[Terminal_texture.side, 0],
			[Terminal_texture.front, 0],
			[Terminal_texture.side, 0],
			[Terminal_texture.side, 0]
		],
		inCreative: true
	}
],"opaque");

Recipes.addShaped({
	id: BlockID.machineNetTerminal, 
	count: 1, 
	data: 0
}, [
	"cbc",
	"bab",
	"cbc"
], [
	'a', BlockID.blockMachineIron,0,
	'b', 331,0,
	'c', ItemID.crystalFluix,0
]);



FactAPI.machine.registerNetTile(BlockID.machineNetTerminal,{
	getEnergyStorage:function(){
		return 60
	},
	getGuiScreen: function(){
		return null
	},
	click:function(){
		var tile = World.getContainer(this.x,this.y-1,this.z);
		var id = World.getBlockID(this.x,this.y-1,this.z);
		if(tile&&tile.tileEntity&&tile.tileEntity.isNetTile&&this.data.energy>=6){
			if(id==BlockID.machineNetEnergy){
				tile.openAs(ui_energy)
				this.data.energy-=6;
				return
			}
			
			var slot = tile.getSlot("slot");
			var c = FactAPI.disk.isItemDisk(slot.id,slot.data);
			if(c){
				c.openAs(UI_disk_item);
			}
			this.data.energy-=6;
		}
	},
	energyTick:FactAPI.machine.basicEnergyStorage
});