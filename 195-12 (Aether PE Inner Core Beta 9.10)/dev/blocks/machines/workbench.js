IDRegistry.genBlockID("skyrootWorkbench"); 
Block.createBlock("skyrootWorkbench", [
    {name: "Skyroot Workbench", texture: 
    [["skyroot_plank", 0], ["skyroot_workbench", 1], ["skyroot_workbench", 0],["skyroot_workbench", 0], ["skyroot_workbench", 2],["skyroot_workbench", 2]],inCreative: true}], "opaque");

IDRegistry.genBlockID("blightwillowWorkbench"); 
Block.createBlock("blightwillowWorkbench", [
    {name: "Blightwillow Workbench", texture: 
    [["blightwillow_planks", 0], ["blightwillow_craftingtabletop", 0], ["blightwillow_craftingtableside", 0],["blightwillow_craftingtablefront", 0], ["blightwillow_craftingtableside", 0],["blightwillow_craftingtableside", 0]],inCreative: true}], "opaque");

IDRegistry.genBlockID("frostpineWorkbench"); 
Block.createBlock("frostpineWorkbench", [
    {name: "Frostpine Workbench", texture: 
    [["frostpine_planks", 0], ["frostpine_crafting_tabletop", 0], ["frostpine_crafting_tableside", 0],["frostpine_crafting_tablefront", 0], ["frostpine_crafting_tableside", 0],["frostpine_crafting_tableside", 0]],inCreative: true}], "opaque");
Callback.addCallback("PostLoaded", function (){    
Recipes.addShaped({id: BlockID.skyrootWorkbench, count: 1, data: 0}, [
    " xx",
    " xx",

], ['x', BlockID.plankSkyroot, 0]);

Recipes.addShaped({id: BlockID.blightwillowWorkbench, count: 1, data: 0}, [
    " xx",
    " xx",

], ['x', BlockID.blightwillowSkyroot, 0]);

Recipes.addShaped({id: BlockID.frostpineWorkbench, count: 1, data: 0}, [
    " xx",
    " xx",

], ['x', BlockID.plankFrostpine, 0]);
});