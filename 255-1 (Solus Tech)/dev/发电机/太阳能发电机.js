IDRegistry.genBlockID("ft_太阳能发电机");
Block.createBlock("ft_太阳能发电机", [
	{name: "Solar Generators", texture:
[["ft_不锈钢外壳", 0], ["ft_太阳能发电机", 1],
["ft_太阳能发电机", 0], ["ft_太阳能发电机", 0],
["ft_太阳能发电机", 0], ["ft_太阳能发电机", 0]],
inCreative: true}
]);

Block.setBlockShape(BlockID.ft_太阳能发电机, 
{x: 0.5 - 0.5, y: 1 - 1 ,z: 0.5 - 0.5}, 
{x: 0.5 + 0.5, y: 1 -0.5, z: 0.5 + 0.5});

TileEntity.registerPrototype(BlockID.ft_太阳能发电机,{
isGenerator: function() {
		return true;
	},
	
	energyTick: function(type, src){
		if(World.getWorldTime()>1000&&
			World.getWorldTime()<12000){
			src.add(1);
		}
	}
	
});
ICRender.getGroup("ic-wire").add(BlockID.ft_太阳能发电机, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_太阳能发电机,FuE);