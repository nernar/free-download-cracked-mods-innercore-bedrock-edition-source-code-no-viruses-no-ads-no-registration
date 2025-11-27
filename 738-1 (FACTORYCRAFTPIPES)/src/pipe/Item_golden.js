Translation.addTranslation("Golden Transport Pipe", {
	ru: "Золотая транспортная труба"
});
IDRegistry.genBlockID("pipeItemGolden"); 
Block.createBlock("pipeItemGolden", [
	{name: "Golden Transport Pipe", texture: [["pipe_gold",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemGolden,count: 1,data: 0}, [ 
	"aba"
],[
	'a', 266,0,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemGolden, 0, [
	{ id: 266, data:0, count: 2},
	{ id: 20, data: 0, count: 1}
]); */

FactAPI.render.setupWireasRender(BlockID.pipeItemGolden,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
		{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemGolden,{
	friction:-0.005
});