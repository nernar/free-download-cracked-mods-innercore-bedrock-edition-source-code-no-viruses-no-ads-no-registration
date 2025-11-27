/*
／￣￣￣￣￣￣￣￣￣
|　　<求保佑无bug>
＼
　￣￣∨￣￣￣￣￣￣
　 ∧＿∧
　(　・∀・)　 
　(　 つつヾ
　 | ｜ |　吧唧吧唧
　(＿_)＿)
*/

IDRegistry.genBlockID("ft_能量管");
Block.createBlock("ft_能量管", [
	{name: "FuE Wire", texture:
[["ft_能量管", 0], ["ft_能量管", 0],
["ft_能量管", 0], ["ft_能量管", 0],
["ft_能量管", 0], ["ft_能量管", 0]],
inCreative: true}
],FuE.getWireSpecialType());

var CABLE_BLOCK_WIDTH = 0.25;

setupWireRender(BlockID.ft_能量管,0.4, "ic-wire");
setupBlockAsTube(BlockID.ft_能量管,"FuE")
