IDRegistry.genBlockID("machineBlockBasic");
Block.createBlock("machineBlockBasic", [{name: "Machine casing", texture: [["primitiveGenerator", 1]], inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.machineBlockBasic, 3.5);
ToolAPI.registerBlockMaterial(BlockID.machineBlockBasic, "stone", 2, true);
Callback.addCallback("PostLoaded", function () {
    RecipeSystem.addRecipeToWorkbench(BlockID.machineBlockBasic, 1, 0, [[265, 0], [ItemID.plateIron, 0], [265, 0], [ItemID.plateIron, 0], [0, 0], [ItemID.plateIron, 0], [265, 0], [ItemID.plateIron, 0], [265, 0]], craftingHammers[i]);
});
IDRegistry.genBlockID("machineBlockDowniron");
Block.createBlock("machineBlockDowniron", [{name: "Downiron machine casing", texture: [["downiron_casing", 1], ["downiron_casing", 1], ["downiron_casing", 0]], inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.machineBlockDowniron, 3.5);
ToolAPI.registerBlockMaterial(BlockID.machineBlockDowniron, "stone", 2, true);
Callback.addCallback("PostLoaded", function () {
    RecipeSystem.addRecipeToWorkbench(BlockID.machineBlockDowniron, 1, 0, [[ItemID.plateDowniron, 0], [ItemID.plateIron, 0], [ItemID.plateDowniron, 0], [ItemID.plateIron, 0], [0, 0], [ItemID.plateIron, 0], [ItemID.plateDowniron, 0], [ItemID.plateIron, 0], [ItemID.plateDowniron, 0]], craftingHammers[i]);
});

