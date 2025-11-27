Translation.addTranslation("Moon Panel", {
	ru: "Лунная батарея"
});

var moon_texture={
	side:"block_machine_iron",
	top:"block_energy_moon"
}

if(Options.theme){
	moon_texture.top="light_moon";
	moon_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("machineEnergyGeneratorMoon");
Block.createBlock("machineEnergyGeneratorMoon", [
	{
		name: "Moon Panel", texture: [
			[moon_texture.side, 0], [moon_texture.top, 0],
			[moon_texture.side, 0], [moon_texture.side, 0],
			[moon_texture.side, 0], [moon_texture.side, 0]
		],
		inCreative: true
	}
]);

Block.setBlockShape(BlockID.machineEnergyGeneratorMoon, {
	x: 0,
	y: 0,
	z: 0
},{
	x: 1,
	y: 0.2,
	z: 1
});

Recipes.addShaped({
	id: BlockID.machineEnergyGeneratorMoon,
	count: 1,
	data: 0
}, [
	"aaa",
	"bbb",
	" c "
],[
	'a',20,0,
	'b',263,-1,
	'c',BlockID.blockMachineIron,0
]);

	
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorMoon, {
	isGenerator: function() {
		return true;
	},
	energyTick: function(type, src){
		var light=World.getLightLevel(this.x, this.y + 1, this.z);
		if (light <= 10&&light>=0) {
			src.add(1);
		}
		//TODO: Nuclear sun 10B
	}
});