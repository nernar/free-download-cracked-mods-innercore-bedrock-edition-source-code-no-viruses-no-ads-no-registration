Translation.addTranslation("Stone Transport Pipe", {
	ru: "Каменая транспортная труба"
});
IDRegistry.genBlockID("pipeItemStone"); 
Block.createBlock("pipeItemStone", [
	{name: "Stone Transport Pipe", texture: [["pipe_stone",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemStone,count: 1,data: 0}, [ 
	"aba"
],[
	'a', 1,0,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemStone, 0, [
	{ id: 1, data:0, count: 2},
	{ id: 20, data: 0, count: 1}
]); 
*/
FactAPI.render.setupWireasRender(BlockID.pipeItemStone,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
	{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemStone,{
	friction:0.0005
});