Translation.addTranslation("Stone Liquid Pipe", {
	ru: "Каменная жидкостная труба"
});

IDRegistry.genBlockID("pipeLiquidStone");
Block.createBlock("pipeLiquidStone", [
	{name: "Stone Liquid Pipe", texture: [["pipe_liquid_stone", 0]], inCreative: true}
]);

PAPI.registerPipe(BlockID.pipeLiquidStone, 0.4, 0.5, ["liquid-pipe"], Options.rendering)

Recipes.addShaped({id: BlockID.pipeLiquidStone,count: 4,data: 0}, [ 
	"a",
	"b"
],[
	'a', ItemID.pipeSealant,0,
	'b', BlockID.pipeItemStone,0
]); 