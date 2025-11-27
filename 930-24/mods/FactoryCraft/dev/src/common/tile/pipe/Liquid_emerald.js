Translation.addTranslation("Emerald Liquid Pipe", {
	ru: "Изумрудная жидкостная труба"
});

IDRegistry.genBlockID("pipeLiquidEmerald");
Block.createBlock("pipeLiquidEmerald", [
	{name: "Emerald Liquid Pipe", texture: [["pipe_liquid_emerald", 0]], inCreative: true}
]);
PAPI.registerPipe(BlockID.pipeLiquidEmerald, 2, 0.5, ["liquid-pipe"], Options.rendering)
TileEntity.registerPrototype(BlockID.pipeLiquidEmerald, PAPI.registerExtractor(BlockID.pipeLiquidEmerald, 2))
Recipes.addShaped({id: BlockID.pipeLiquidEmerald,count: 4,data: 0}, [ 
	"a",
	"b"
],[
	'a', ItemID.pipeSealant,0,
	'b', BlockID.pipeItemEmerald,0
]); 