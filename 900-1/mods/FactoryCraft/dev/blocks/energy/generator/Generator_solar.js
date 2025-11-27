Translation.addTranslation("Solar Panel", {
	ru: "Солнечная батарея"
});

let solar_texture={
	side:"block_machine_iron",
	top:"block_energy_solar"
}

if(!Options.isThemeBlack()){
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
	y: 3/16,
	z: 1
});
	
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorSolar, {
	isGenerator() {
		return true;
	},
	energyTick(type, src){
		let light=World.getLightLevel(this.x, this.y + 1, this.z);
		if(light >= 15)
			src.add(1);
	}
},{
	generator: true
});
