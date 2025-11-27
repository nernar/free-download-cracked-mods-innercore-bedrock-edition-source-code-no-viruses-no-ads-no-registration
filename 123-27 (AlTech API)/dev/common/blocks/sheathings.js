IDRegistry.genBlockID("IronSheathing");
Block.createBlock("IronSheathing", [
	{name: "Standard Machine Casing", texture: [["iron_sheathing", 0]], inCreative: true}], "opaque" );
ToolAPI.registerBlockMaterial(BlockID.IronSheathing, "stone");
Block.setDestroyLevel(BlockID.IronSheathing, 3);
ToolAPI.registerBlockMaterial(BlockID.IronSheathing, "stone", 4, true);

IDRegistry.genBlockID("SteelSheathing");
Block.createBlock("SteelSheathing", [
	{name: "Reinforced Machine Casing", texture: [["steel_sheathing", 0]], inCreative: true}], "opaque" );
ToolAPI.registerBlockMaterial(BlockID.SteelSheathing, "stone");
Block.setDestroyLevel(BlockID.SteelSheathing, 3);
ToolAPI.registerBlockMaterial(BlockID.SteelSheathing, "stone", 4, true)

IDRegistry.genBlockID("ChromeSheathing");
Block.createBlock("ChromeSheathing", [
	{name: "Advanced Machine Casing", texture: [["chrome_sheathing", 0]], inCreative: true}], "opaque" );
ToolAPI.registerBlockMaterial(BlockID.ChromeSheathing, "stone");
Block.setDestroyLevel(BlockID.ChromeSheathing, 3);
ToolAPI.registerBlockMaterial(BlockID.ChromeSheathing, "stone", 4, true)

var irsh = BlockID.IronSheathing
var chsh = BlockID.ChromeSheathing
var stsh = BlockID.SteelSheathing