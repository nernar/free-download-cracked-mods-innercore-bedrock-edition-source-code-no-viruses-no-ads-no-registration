Translation.addTranslation("Cobblestone Transport Pipe", {
	ru: "Булыжниковая транспортная труба"
});
IDRegistry.genBlockID("pipeItemCobblestone"); 
Block.createBlock("pipeItemCobblestone", [
	{name: "Cobblestone Transport Pipe", texture: [["pipe_cobblestone",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemCobblestone,count: 4,data: 0}, [ 
	"aba"
],[
	'a', 4,-1,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemCobblestone, 0, [
	{ id: 4, data:-1, count: 2},
	{ id: 20, data: 0, count: 1}
]); */

FactAPI.render.setupWireasRender(BlockID.pipeItemCobblestone,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
		{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemCobblestone,{
	friction:0.001
});