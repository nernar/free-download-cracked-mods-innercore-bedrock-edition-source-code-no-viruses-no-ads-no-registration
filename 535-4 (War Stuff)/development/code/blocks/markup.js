//Keep Clear
IDRegistry.genBlockID("keep_clear");
Block.createBlock("keep_clear", [{
   name: "Keep Clear",
   texture: [["Keep_Clear", 0]],
   inCreative: true
}],
{
	base: 1,
	solid: true,
	destroytime: 24,
	explosionres: 150,
	lightopacity: 15,
	renderlayer: 2,
	translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.keep_clear, "stone", 2, true);
Block.setDestroyLevel("keep_clear", 2);

//Keep Clear Another
IDRegistry.genBlockID("keep_clear_another");
Block.createBlock("keep_clear_another", [{
   name: "Keep Clear",
   texture: [["Keep_Clear_Another", 0]],
   inCreative: true
}],
{
	base: 1,
	solid: true,
	destroytime: 24,
	explosionres: 150,
	lightopacity: 15,
	renderlayer: 2,
	translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.keep_clear_another, "stone", 2, true);
Block.setDestroyLevel("keep_clear_another", 2);

//Hazard Glass
IDRegistry.genBlockID("hazard_glass");
Block.createBlock("hazard_glass", [{
   name: "Hazard Glass",
   texture: [["Hazard_Glass", 0]],
   inCreative: true
}],
{
	base: 1,
	destroytime: 12,
	explosionres: 150,
	renderlayer: 1
});
ToolAPI.registerBlockMaterial(BlockID.hazard_glass, "stone", 2, true);
Block.setDestroyLevel("hazard_glass", 2);

Item.addCreativeGroup("markup", Translation.translate("Markup"), [
	BlockID.keep_clear,
	BlockID.keep_clear_another,
	BlockID.hazard_glass
]);