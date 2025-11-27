Translation.addTranslation("Windmill", {
	ru: "Ветряк"
});

let windmill_texture={
	side:"block_machine_iron",
	front:"block_energy_millwind"
}

if(!Options.isThemeBlack()){
	windmill_texture.front="light_millwind";
	windmill_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("machineEnergyGeneratorWind");
Block.createBlockWithRotation("machineEnergyGeneratorWind", [
	{name: "Windmill", texture: [
		[windmill_texture.side,0],[windmill_texture.side, 0],
		[windmill_texture.side,0],[windmill_texture.front,0],
		[windmill_texture.side,0],[windmill_texture.side,0]
	], inCreative: true}
],"opaque");

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorWind, {
	defaultValues: {
		output: 0
	},
	isGenerator() {
		return true;
	},
	energyTick(type, src){
		if(World.getThreadTime()%2 == 0){
			let output = 3;
			if(this.y>60)
				output+=Math.ceil(this.y/10);
			else
				output-=1;
			let wether = World.getWeather();
			if(wether.thunder)
				output *= 5;
			else if(wether.rain)
				output *= 1.5;
			let radius = 3;
			if(this.blockSource.getBlockId(
					this.x - Random.integer(-radius, radius),
					this.y - Random.integer(-radius, radius),
					this.z - Random.integer(-radius, radius)
				) == 0)
				this.data.output = Math.round(output);
			else
				this.data.output = 0;
		}
		src.add(Math.min(30,this.data.output));
	}
},{
	generator: true
});
