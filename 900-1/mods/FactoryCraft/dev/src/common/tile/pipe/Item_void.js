Translation.addTranslation("Void Transport Pipe", {
	ru: "Пустотная транспортная труба"
});
IDRegistry.genBlockID("pipeItemVoid"); 
Block.createBlock("pipeItemVoid", [
	{name: "Void Transport Pipe", texture: [["pipe_void",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemVoid,count: 4,data: 0}, [ 
	"aba"
],[
	'a', 263,-1,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemVoid, 0, [
	{ id: 263, data:-1, count: 2},
	{ id: 20, data: 0, count: 1}
]); 
*/
FactAPI.render.setupWireasRender(BlockID.pipeItemVoid,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
		{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemVoid,{
	friction:-0.0005
});

TileEntity.registerPrototype(BlockID.pipeItemVoid,{
	setPipeFunctions:function(item){
		item.destroySelf();
	}
});