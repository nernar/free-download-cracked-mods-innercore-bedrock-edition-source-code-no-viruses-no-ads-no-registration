importLib("bakeModel", "*");
IDRegistry.genBlockID("fusedGlass");
Block.createBlock("fusedGlass", [{name: "Fused glass", texture: [["fusedGlassItem", 0]], inCreative: true}]);
bakeModel(BlockID.fusedGlass, 0, "fusedGlassItem");
IDRegistry.genBlockID("fusedQuartz");
Block.createBlock("fusedQuartz", [{name: "Fused quartz", texture: [["fusedQuartzItem", 0]], inCreative: true}]);
bakeModel(BlockID.fusedQuartz, 0, "fusedQuartzItem");
Callback.addCallback("PostLoaded", function () {
    MachineRecipe.addSmelter([12, 12, 12], {id: BlockID.fusedGlass, data: 0, count: 3, time: 800});
    MachineRecipe.addSmelter([406, 406, 406], {id: BlockID.fusedQuartz, data: 0, count: 3, time: 800});
});

