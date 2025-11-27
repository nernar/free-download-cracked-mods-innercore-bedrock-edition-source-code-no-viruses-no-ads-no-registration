//Reinforced Stone
IDRegistry.genBlockID("reinforced_stone");
Block.createBlock("reinforced_stone", [{
   name: "Reinforced Stone",
   texture: [["Reinforced_Stone", 0]],
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
ToolAPI.registerBlockMaterial(BlockID.reinforced_stone, "stone", 2, true);
Block.setDestroyLevel("reinforced_stone", 2);

//Reinforced Iron
IDRegistry.genBlockID("reinforced_iron");
Block.createBlock("reinforced_iron", [{
   name: "Reinforced Iron",
   texture: [["Reinforced_Iron", 0]],
   inCreative: true
}],
{
	base: 1,
	solid: true,
	destroytime: 32,
	explosionres: 150,
	lightopacity: 15,
	renderlayer: 2,
	translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.reinforced_iron, "stone", 2, true);
Block.setDestroyLevel("reinforced_iron", 3);

//Reinforced Glass
IDRegistry.genBlockID("reinforced_glass");
Block.createBlock("reinforced_glass", [{
   name: "Reinforced Glass",
   texture: [["Reinforced_Glass", 0]],
   inCreative: true
}],
{
	base: 1,
	destroytime: 16,
	explosionres: 150,
	renderlayer: 1
});
ToolAPI.registerBlockMaterial(BlockID.reinforced_glass, "stone", 2, true);
Block.setDestroyLevel("reinforced_glass", 2);

Item.addCreativeGroup("reinforced", Translation.translate("Reinforced"), [
	BlockID.reinforced_stone,
	BlockID.reinforced_iron,
	BlockID.reinforced_glass
]);