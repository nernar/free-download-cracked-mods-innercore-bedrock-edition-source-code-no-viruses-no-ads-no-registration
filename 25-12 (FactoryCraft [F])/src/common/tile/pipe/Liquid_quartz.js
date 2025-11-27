Translation.addTranslation("Quartz Liquid Pipe", {
	ru: "Кварцевая жидкостная труба"
});
IDRegistry.genBlockID("pipeLiquidQuartz");
Block.createBlock("pipeLiquidQuartz", [
	{name: "Quartz Liquid Pipe", texture: [["pipe_liquid_quartz", 0]], inCreative: true}
]);
PAPI.registerPipe(BlockID.pipeLiquidQuartz, 4, 0.5, ["liquid-pipe"], Options.rendering)
Recipes.addShaped({id: BlockID.pipeLiquidQuartz,count: 4,data: 0}, [ 
	"a",
	"b"
],[
	'a', ItemID.pipeSealant,0,
	'b', BlockID.pipeItemQuartz,0
]); 