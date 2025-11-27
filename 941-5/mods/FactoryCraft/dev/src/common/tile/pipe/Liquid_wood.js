Translation.addTranslation("Wooden Liquid Pipe", {
	ru: "Деревянная жидкостная труба"
});

IDRegistry.genBlockID("pipeLiquidWood");
Block.createBlock("pipeLiquidWood", [
	{name: "Wooden Liquid Pipe", texture: [["pipe_liquid_wood", 0]], inCreative: Options.rendering}
]);
PAPI.registerPipe(BlockID.pipeLiquidWood, 0.2, 0.5, ["liquid-pipe"], false)
TileEntity.registerPrototype(BlockID.pipeLiquidWood, PAPI.registerExtractor(BlockID.pipeLiquidWood, 0.2))

Recipes.addShaped({id: BlockID.pipeLiquidWood,count: 4,data: 0}, [ 
	"a",
	"b"
],[
	'a', ItemID.pipeSealant,0,
	'b', BlockID.pipeItemWooden,0
]); 