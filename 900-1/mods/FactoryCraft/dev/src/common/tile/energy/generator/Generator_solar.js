Translation.addTranslation("Solar Panel", {
	ru: "Солнечная батарея"
});

var solar_texture={
	side:"block_machine_iron",
	top:"block_energy_solar"
}

if(Options.theme){
	solar_texture.top="light_solar";
	solar_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("machineEnergyGeneratorSolar");
Block.createBlock("machineEnergyGeneratorSolar", [
	{
		name: "Solar Panel", texture: [
			[solar_texture.side, 0],[solar_texture.top, 0],
			[solar_texture.side, 0], [solar_texture.side, 0],
			[solar_texture.side, 0], [solar_texture.side, 0]
		],
		inCreative: true
	}
]);

Block.setBlockShape(BlockID.machineEnergyGeneratorSolar, {
	x: 0,
	y: 0,
	z: 0
},{
	x: 1,
	y: 0.2,
	z: 1
});

Recipes.addShaped({id: BlockID.machineEnergyGeneratorSolar, count: 1, data: 0}, [
	"aaa",
	"bbb",
	" c "
],[
	'a',20,0,
	'b',263,-1,
	'c',BlockID.blockMachineIron,0
]);

	
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorSolar, {
	isGenerator: function() {
		return true;
	},
	energyTick: function(type, src){
		var light=World.getLightLevel(this.x, this.y + 1, this.z);
		if (light >= 15) {
			src.add(1);
		}
		//TODO: Nuclear sun 10B
	}
});