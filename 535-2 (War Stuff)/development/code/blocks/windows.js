//Desert Window
IDRegistry.genBlockID("desert_window");
Block.createBlock("desert_window", [{
   name: "Desert Window",
   texture: [["Desert_Window", 0]],
   inCreative: true
}],
{
	base: 1,
	destroytime: 4,
	explosionres: 4,
	renderlayer: 1
});
ToolAPI.registerBlockMaterial(BlockID.desert_window, "stone", 1, true);
Block.setDestroyLevel("desert_window", 2);

//Forest Window
IDRegistry.genBlockID("forest_window");
Block.createBlock("forest_window", [{
   name: "Forest Window",
   texture: [["Forest_Window", 0]],
   inCreative: true
}],
{
	base: 1,
	destroytime: 4,
	explosionres: 4,
	renderlayer: 1
});
ToolAPI.registerBlockMaterial(BlockID.forest_window, "stone", 1, true);
Block.setDestroyLevel("forest_window", 2);

//Snow Window
IDRegistry.genBlockID("snow_window");
Block.createBlock("snow_window", [{
   name: "Snow Window",
   texture: [["Snow_Window", 0]],
   inCreative: true
}],
{
	base: 1,
	destroytime: 4,
	explosionres: 4,
	renderlayer: 1
});
ToolAPI.registerBlockMaterial(BlockID.snow_window, "stone", 1, true);
Block.setDestroyLevel("snow_window", 2);

Item.addCreativeGroup("windows", Translation.translate("Windows"), [
	BlockID.desert_window,
	BlockID.forest_window,
	BlockID.snow_window
]);