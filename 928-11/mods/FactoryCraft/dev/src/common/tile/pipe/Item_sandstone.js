Translation.addTranslation("Sandstone Transport Pipe", {
	ru: "Песчаниковая транспортная труба"
});
IDRegistry.genBlockID("pipeItemSandstone"); 
Block.createBlock("pipeItemSandstone", [
	{name: "Sandstone Transport Pipe", texture: [["pipe_sandstone",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemSandstone,count: 4,data: 0}, [ 
	"aba"
],[
	'a', 24,-1,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemSandstone, 0, [
	{ id: 24, data:-1, count: 2},
	{ id: 20, data: 0, count: 1}
]); */

FactAPI.render.setupWireasRender(BlockID.pipeItemSandstone,0.5,[
	{name:"item-wood-pipe",add:false},
	{name:"item-item-pipe",add:false},
	{name:"item-sandstone-pipe",add:true}
]);

Pipe.registerTile(BlockID.pipeItemSandstone,{
	friction:0.005,
	stopContainerAdding:true,
	getTransportingDirections: function(item){
		var pos = item.position;
		var dir = item.direction;
		var list = Pipe.findDirections(pos.x, pos.y, pos.z,true);
		var res = Pipe.filterDirections(list, dir);
		return res
	}
});