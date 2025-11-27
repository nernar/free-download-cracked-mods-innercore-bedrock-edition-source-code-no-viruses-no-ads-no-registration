Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 5,
	explosionres: 30,
	opaque: false,
	lightopacity: 0,
	renderlayer: 3,
}, "reinforced_block");

Translation.addTranslation("Reinforced Stone", {ru: "Укреплённый камень"});

IDRegistry.genBlockID("reinforcedStone");
Block.createBlock("reinforcedStone", [
	{name: "Reinforced Stone", texture: [["reinforced_block", 0]], inCreative: true}
], "reinforced_block");
ToolAPI.registerBlockMaterial(BlockID.reinforcedStone, "stone", 2, true);
Block.setDestroyLevel("reinforcedStone", 2);

Recipes.addShaped({id: BlockID.reinforcedStone, count: 1, data: 0}, [
	"bab",
	"aba",
	"bab"
],[
	'a',1,0,
	'b',265,0
]);