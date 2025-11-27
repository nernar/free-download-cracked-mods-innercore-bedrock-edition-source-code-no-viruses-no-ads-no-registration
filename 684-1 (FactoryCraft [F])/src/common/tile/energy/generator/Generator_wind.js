Translation.addTranslation("Windmill", {
	ru: "Ветряк"
});

var windmill_texture={
	side:"block_machine_iron",
	front:"block_energy_millwind"
}

if(Options.theme){
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

Recipes.addShaped({id: BlockID.machineEnergyGeneratorWind, count: 1, data: 0}, [
	" c ",
	"cbc",
	" a ",
], [
	'a', BlockID.blockMachineIron,0,
	'b',280,0,
	'c',265,0
]);

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorWind, {
	defaultValues: {
		output: 0
	},
	
	isGenerator: function() {
		return true;
	},

	energyTick: function(type, src){
		if(World.getThreadTime()%1 == 0){
			var output = 1;
			if(this.y>60)output+=2;
			var wether = World.getWeather();
			if(wether.thunder){output *= 5;}
			else if(wether.rain){output *= 1.5;}
			var radius = 3;
			if(World.getBlockID(
					this.x - Random.integer(-radius, radius),
					this.y - Random.integer(-radius, radius),
					this.z - Random.integer(-radius, radius)
				) == 0){
				this.data.output = Math.round(output);
			}else{this.data.output = 0;}
		}
		src.add(Math.min(10,this.data.output));
	}
});