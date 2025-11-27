Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 5,
	explosionres: 15,
	lightopacity: 15,
	renderlayer: 2,
   translucency: 0
}, "sandbag");

//Desert Sandbags
IDRegistry.genBlockID("desert_sandbags");
Block.createBlock("desert_sandbags", [{
   name: "Desert Sandbags",
   texture: [["Desert_Sandbags", 0]],
   inCreative: true
}], "sandbag");
Block.registerDropFunction("desert_sandbags",
   function(coords, blockID){
	  return [[blockID, 1, 0]];
});
ToolAPI.registerBlockMaterial(BlockID.desert_sandbags, "stone");

//Forest Sandbags
IDRegistry.genBlockID("forest_sandbags");
Block.createBlock("forest_sandbags", [{
   name: "Forest Sandbags",
   texture: [["Forest_Sandbags", 0]],
   inCreative: true
}], "sandbag");
Block.registerDropFunction("forest_sandbags",
   function(coords, blockID){
	  return [[blockID, 1, 0]];
});
ToolAPI.registerBlockMaterial(BlockID.forest_sandbags, "stone");

//Snow Sandbags
IDRegistry.genBlockID("snow_sandbags");
Block.createBlock("snow_sandbags", [{
   name: "Snow Sandbags",
   texture: [["Snow_Sandbags", 0]],
   inCreative: true
}], "sandbag");
Block.registerDropFunction("snow_sandbags",
   function(coords, blockID){
	  return [[blockID, 1, 0]];
});
ToolAPI.registerBlockMaterial(BlockID.snow_sandbags, "stone");

Item.addCreativeGroup("sandbags", Translation.translate("Sandbags"), [
	BlockID.desert_sandbags,
	BlockID.forest_sandbags,
	BlockID.snow_sandbags
]);