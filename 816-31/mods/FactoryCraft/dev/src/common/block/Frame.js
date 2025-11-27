IDRegistry.genBlockID("fcFrame");
Block.createBlock("fcFrame", [
	{
		name:"Frame",
		texture: [
			["frame",0]
		],
		inCreative: false
	}
]);

FactAPI.render.setupWireasRender(BlockID.fcFrame,0.5,[{name:"frame",add:true}])
Block.registerDropFunction("fcFrame", function(){
	return [];
});
