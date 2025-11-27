Translation.addTranslation("Cookie Planks", {ru: "Печенюшные "});
IDRegistry.genBlockID("cookie_planks");
Block.createBlock("cookie_planks", [{
name: "Cookie Planks",
	texture: [
	["cookie_planks",0]
	], 
	inCreative: true
}],"opaque");
Recipes.addShapeless({id: BlockID.cookie_planks, count: 4, data: 0}, [{id: BlockID.cookie_oak, data: 0}]);