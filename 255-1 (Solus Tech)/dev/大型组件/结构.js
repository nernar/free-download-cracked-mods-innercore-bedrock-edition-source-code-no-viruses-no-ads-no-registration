IDRegistry.genBlockID("ft_机器外壳");
Block.createBlock("ft_机器外壳", [
	{name: "Machine Shell", texture:
[["ft_机器外壳", 2], ["ft_机器外壳", 1],
["ft_机器外壳", 2], ["ft_机器外壳", 0],
["ft_机器外壳", 0], ["ft_机器外壳", 1]],
inCreative: true}
],FuE.getWireSpecialType());
setupBlockAsTube(BlockID.ft_机器外壳,"FuE");
ICRender.getGroup("ic-wire").add(BlockID.ft_机器外壳,-1);
IDRegistry.genBlockID("ft_大型机器外壳");
Block.createBlock("ft_大型机器外壳", [
	{name: "Large Machine Shell", texture:
[["ft_大型机器外壳", 2], ["ft_大型机器外壳", 1],
["ft_大型机器外壳", 1], ["ft_大型机器外壳", 0],
["ft_大型机器外壳", 0], ["ft_大型机器外壳", 2]],
inCreative: true}
]);
setupBlockAsTube(BlockID.ft_大型机器外壳,"FuE");
ICRender.getGroup("ic-wire").add(BlockID.ft_大型机器外壳,-1);
