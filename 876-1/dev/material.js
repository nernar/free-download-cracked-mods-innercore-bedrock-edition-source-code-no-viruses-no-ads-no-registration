IDRegistry.genBlockID("basic_machine_block");
Block.createBlock("basic_machine_block", [
{name: "basic machine block", texture: [["pili_block", 0]], inCreative: true}]);    ToolAPI.registerBlockMaterial(BlockID.basic_machine_block, "stone", 1, true);    
Recipes.addShaped({id: BlockID.basic_machine_block, count: 1, data: 0}, [
	"aba",
	"bcb",
	"aba"
], ['a', 5, -1, 'b', 1, 5, 'c',61, -1]);

Translation.addTranslation("basic machine block", {ru: "базовый машинный блок"});

IDRegistry.genItemID("raw_gold");
Item.createItem("raw_gold", "raw gold", {name: "raw_gold", meta: 0}); 
Translation.addTranslation("raw gold", {ru: "необработанное золото"});


Recipes.addFurnace(ItemID.raw_gold, 266, 0);


IDRegistry.genItemID("raw_iron");
Item.createItem("raw_iron", "raw iron", {name: "raw_iron", meta: 0}); 
Translation.addTranslation("raw iron", {ru: "необработанное железо"});

Recipes.addFurnace(ItemID.raw_iron, 265, 0);
