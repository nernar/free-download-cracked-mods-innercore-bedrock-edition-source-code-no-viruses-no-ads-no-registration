Translation.addTranslation("Energy Acceptor", {
	ru: "Приемщик энергии"
});

var Acceptor_texture={
	side:"block_machine_iron",
	front:"block_net_acceptor"
}

if(Options.theme){
	Acceptor_texture.side="light_iron_machine";
	Acceptor_texture.front="light_acceptor";
}

IDRegistry.genBlockID("machineNetAcceptor");
Block.createBlock("machineNetAcceptor", [
	{
		name: "Energy Acceptor",
		texture: [
			[Acceptor_texture.side, 0],
			[Acceptor_texture.side, 0],
			[Acceptor_texture.front, 0],
			[Acceptor_texture.front, 0],
			[Acceptor_texture.front, 0],
			[Acceptor_texture.front, 0]
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
	"cac",
	"bcb"
], [
	'a', BlockID.machineEnergyConvertor,0,
	'b', 331,0,
	'c', ItemID.crystalFluix,0
]);

FactAPI.machine.registerEnergyTile(BlockID.machineNetAcceptor,{
	getEnergyStorage: function(){
		return 1000
	},
	energyTick:function(type,src){
		if(type!="AE") {
			var energyNeed = this.getEnergyStorage() - this.data.energy;
			this.data.energy += src.getAll(energyNeed);
			return
		}
		var e =0;
		e=src.add(this.data.energy);
		e>0?this.data.energy=e:this.data.energy=0
		return
	}
});

EnergyTileRegistry.addEnergyTypeForId(BlockID.machineNetAcceptor, AE);
ICRender.getGroup("me-wire").add(BlockID.machineNetAcceptor, -1);