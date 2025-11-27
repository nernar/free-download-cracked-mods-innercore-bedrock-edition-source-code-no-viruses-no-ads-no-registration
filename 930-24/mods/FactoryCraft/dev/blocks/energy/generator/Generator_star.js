Translation.addTranslation("Star Panel", {
	ru: "Звездная батарея"
});

let star_texture={
	side:"block_machine_iron",
	top:"block_energy_star"
}

if(!Options.isThemeBlack()){
	star_texture.top="light_star";
	star_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("machineEnergyGeneratorStar");
Block.createBlock("machineEnergyGeneratorStar", [
	{
		name: "Star Panel", texture: [
			[star_texture.side, 0], [star_texture.top, 0],
			[star_texture.side, 0], [star_texture.side, 0],
			[star_texture.side, 0], [star_texture.side, 0]
		],
		inCreative: true
	}
]);

Block.setBlockShape(BlockID.machineEnergyGeneratorStar,{
	x: 0,
	y: 0,
	z: 0
},{
	x: 1,
	y: 3/16,
	z: 1
});

	
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorStar, {
	isGenerator() {
		return true;
	},
	energyTick(type, src){
		let light=World.getLightLevel(this.x, this.y + 1, this.z);
		if(light>=0)
			src.add(1);
	}
});
