Translation.addTranslation("Quartz Transport Pipe", {
	ru: "Кварцевая транспортная труба"
});
IDRegistry.genBlockID("pipeItemQuartz"); 
Block.createBlock("pipeItemQuartz", [
	{name: "Quartz Transport Pipe", texture: [["pipe_quartz",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemQuartz,count: 1,data: 0}, [ 
	"aba"
],[
	'a', 406,0,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemQuartz, 0, [
	{ id: 406, data:0, count: 2},
	{ id: 20, data: 0, count: 1}
]); */

FactAPI.render.setupWireasRender(BlockID.pipeItemQuartz,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
		{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemQuartz,{
	friction:0
});