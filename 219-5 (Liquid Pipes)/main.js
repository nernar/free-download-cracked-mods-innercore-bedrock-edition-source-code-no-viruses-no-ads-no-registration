IMPORT("PipesAPI", "*")

let Config = {
	enableMapping: __config__.getBool("enableMapping")
}

IDRegistry.genItemID("pipeSealant");
Item.createItem("pipeSealant", "Pipe Sealant", {name:"pipe_sealant"})

IDRegistry.genBlockID("pipeLiquidWood");
Block.createBlock("pipeLiquidWood", [
	{name: "Wood Liquid Pipe", texture: [["pipe_fluid_wood", 0]], inCreative: true}
]);
IDRegistry.genBlockID("pipeLiquidEmerald");
Block.createBlock("pipeLiquidEmerald", [
	{name: "Emerald Liquid Pipe", texture: [["pipe_fluid_emerald", 0]], inCreative: true}
]);

IDRegistry.genBlockID("pipeLiquidStone");
Block.createBlock("pipeLiquidStone", [
	{name: "Stone Liquid Pipe", texture: [["pipe_fluid_stone", 0]], inCreative: true}
]);
IDRegistry.genBlockID("pipeLiquidCobblestone");
Block.createBlock("pipeLiquidCobblestone", [
	{name: "Cobblestone Liquid Pipe", texture: [["pipe_fluid_cobble", 0]], inCreative: true}
]);
IDRegistry.genBlockID("pipeLiquidSandstone");
Block.createBlock("pipeLiquidSandstone", [
	{name: "Sandstone Liquid Pipe", texture: [["pipe_fluid_sandstone", 0]], inCreative: true}
]);
IDRegistry.genBlockID("pipeLiquidGold");
Block.createBlock("pipeLiquidGold", [
	{name: "Gold Liquid Pipe", texture: [["pipe_fluid_gold", 0]], inCreative: true}
]);
IDRegistry.genBlockID("pipeLiquidIron");
Block.createBlock("pipeLiquidIron", [
	{name: "Iron Liquid Pipe", texture: [["pipe_fluid_iron", 0]], inCreative: true}
]);
//IDRegistry.genBlockID("pipeLiquidCreative");
//Block.createBlock("pipeLiquidCreative", [
//    {name: "Creative Liquid Pipe", texture: [["empty", 0]], inCreative: true}
//]);

Recipes.addShapeless({id:ItemID.pipeSealant, count:3, data:0}, [{id:351, data:2}])

Recipes.addShaped({id: BlockID.pipeLiquidStone, count: 6, data: 0}, ["bgb", " s "], ['b', 1, 0, 'g', 20, 0, "s", ItemID.pipeSealant, 0])
Recipes.addShaped({id: BlockID.pipeLiquidCobblestone, count: 6, data: 0}, ["bgb", " s "], ['b', 4, 0, 'g', 20, 0, "s", ItemID.pipeSealant, 0])
Recipes.addShaped({id: BlockID.pipeLiquidSandstone, count: 6, data: 0}, ["bgb", " s "], ['b', 24, 0, 'g', 20, 0, "s", ItemID.pipeSealant, 0])
Recipes.addShaped({id: BlockID.pipeLiquidGold, count: 3, data: 0}, ["bgb", " s "], ['b', 266, 0, 'g', 20, 0, "s", ItemID.pipeSealant, 0])
Recipes.addShaped({id: BlockID.pipeLiquidIron, count: 3, data: 0}, ["bgb", " s "], ['b', 265, 0, 'g', 20, 0, "s", ItemID.pipeSealant, 0])
Recipes.addShaped({id: BlockID.pipeLiquidEmerald, count: 3, data: 0}, ["bgb", " s "], ['b', 388, 0, 'g', 20, 0, "s", ItemID.pipeSealant, 0])
Recipes.addShaped({id: BlockID.pipeLiquidWood, count: 6, data: 0}, ["bgb", " s "], ['b', 5, -1, 'g', 20, 0, "s", ItemID.pipeSealant, 0])

PAPI.registerPipe(BlockID.pipeLiquidStone, 0.4, 0.5, ["stone-pipe"], Config.enableMapping)
PAPI.registerPipe(BlockID.pipeLiquidCobblestone, 0.2, 0.5, ["stone-pipe"], Config.enableMapping)
PAPI.registerPipe(BlockID.pipeLiquidSandstone, 0.3, 0.5, ["sandstone-pipe"], Config.enableMapping, -1, true, 0.3, {"lava":true})
PAPI.registerPipe(BlockID.pipeLiquidGold, 4, 0.5, ["gold-pipe"], Config.enableMapping, -1, true, 4, {"lava":true})
PAPI.registerPipe(BlockID.pipeLiquidIron, 2, 0.5, ["iron-pipe"], Config.enableMapping)

PAPI.registerPipe(BlockID.pipeLiquidWood, 0.2, 0.5, PAPI.groups, Config.enableMapping, {"water":true}, true, 0.2, {"lava":true})
TileEntity.registerPrototype(BlockID.pipeLiquidWood, PAPI.registerExtractor(BlockID.pipeLiquidWood, 1))
PAPI.registerPipe(BlockID.pipeLiquidEmerald, 2, 0.5, PAPI.groups, Config.enableMapping)
TileEntity.registerPrototype(BlockID.pipeLiquidEmerald, PAPI.registerExtractor(BlockID.pipeLiquidEmerald, 2))
