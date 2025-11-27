IDRegistry.genBlockID("ft_上帝的发电机");
Block.createBlock("ft_上帝的发电机", [
	{name: "God's Generators", texture:
[["ft_机器外壳", 0], ["ft_排热口", 0],
["ft_机器外壳", 1], ["ft_机器外壳", 0],
["ft_机器外壳", 0], ["ft_机器外壳", 1]],
inCreative: true}
]);


TileEntity.registerPrototype(BlockID.ft_上帝的发电机,{
isGenerator:function(){
return true;
},
energyTick:function(type,src){
src.add(100); //生成每刻钟产生10个RF
}
});
//绑定到这个瓦片实体我们的能量类型
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_上帝的发电机,FuE);
ICRender.getGroup("ic-wire").add(BlockID.ft_上帝的发电机, -1);