Translation.addTranslation("Magma Generator", {
	ru: "Магмовый генератор"
});

var genmagma_texture={
	side:"block_machine_iron",
	front:"block_energy_magma"
}

if(Options.theme){
	genmagma_texture.front="light_magma";
	genmagma_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("machineEnergyGeneratorMagma");
Block.createBlockWithRotation("machineEnergyGeneratorMagma", [
	{name: "Magma Generator", texture: [
		[genmagma_texture.side,0],[genmagma_texture.side, 0],
		[genmagma_texture.side,0],[genmagma_texture.front,0],
		[genmagma_texture.side,0],[genmagma_texture.side,0]
	], inCreative: true}
],"opaque");

Recipes.addShaped({
	id: BlockID.machineEnergyGeneratorMagma,
	count: 1,
	data: 0
}, [
	"eee",
	"ece",
	"eae"
], [
	'a', BlockID.blockMachineIron,0,
	'c',378,0,
	'e',49,0
]);

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorMagma, {
	isGenerator: function() {
		return true;
	},
	isBuild:function(){
		var struct=[
			[-1,0,-1],[-1,0,1],[1,0,-1],[1,0,1],
			[-1,-1,-1],[-1,-1,1],[1,-1,-1],[1,-1,1]
		];
		for(var i in struct){
			var a=World.getBlockID(this.x+struct[i][0],this.y+struct[i][1],this.z+struct[i][2]);
			if(a!=10&&a!=11)return false;
		}
		return true
	},
	energyTick:function(type,src){
		var a=this.isBuild();
		if(a){
			src.add(5);
		}
	}
});