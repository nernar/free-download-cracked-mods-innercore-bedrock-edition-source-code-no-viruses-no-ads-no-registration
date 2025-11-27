Callback.addCallback("PostLoaded", function () {
    let cobble = [4, BlockID.cobbleAndesite, BlockID.cobbleDiorite, BlockID.cobbleGranite];
    for (let r in cobble) {
        let cobb = cobble[r];
        RecipeSystem.addRecipeToWorkbench(ItemID.pickaxeStone, 1, 0, [[cobb, 0], [cobb, 0], [cobb, 0], [0, 0], [280, 0], [287, 0], [0, 0], [280, 0], [0, 0]], 0);
        RecipeSystem.addRecipeToWorkbench(ItemID.axeStone, 1, 0, [[cobb, 0], [cobb, 0], [287, 0], [cobb, 0], [280, 0], [cobb, 0], [0, 0], [280, 0], [0, 0]], 0);
        RecipeSystem.addRecipeToWorkbench(69, 1, 0, [[280, 0], [0, 0], [0, 0], [cobble[r], 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], 0);
        RecipeSystem.addRecipeToWorkbench(44, 3, 3, [[0, 0], [0, 0], [0, 0], [cobble[r], 0], [cobble[r], 0], [cobble[r], 0], [0, 0], [0, 0], [0, 0]], 0);
        RecipeSystem.addRecipeToWorkbench(139, 3, 0, [[0, 0], [0, 0], [0, 0], [cobble[r], 0], [cobble[r], 0], [cobble[r], 0], [cobble[r], 0], [cobble[r], 0], [cobble[r], 0]], 0);
        RecipeSystem.addRecipeToWorkbench(67, 3, 0, [[cobble[r], 0], [0, 0], [0, 0], [cobble[r], 0], [cobble[r], 0], [0, 0], [cobble[r], 0], [cobble[r], 0], [cobble[r], 0]], 0);
        RecipeSystem.addRecipeToWorkbench(67, 3, 0, [[0, 0], [0, 0], [cobble[r], 0], [0, 0], [cobble[r], 0], [cobble[r], 0], [cobble[r], 0], [cobble[r], 0], [cobble[r], 0]], 0);
    }
    for (i in craftingHammers) {
        RecipeSystem.addRecipeToWorkbench(325, 1, 0, [[ItemID.plateIron, 0], [0, 0], [ItemID.plateIron, 0], [0, 0], [ItemID.plateIron, 0], [0, 0], [0, 0], [0, 0], [0, 0]], craftingHammers[i]);
        RecipeSystem.addRecipeToWorkbench(ItemID.bindingIron, 1, 0, [[ItemID.plateIron, 0], [0, 0], [ItemID.plateIron, 0], [0, 0], [ItemID.plateIron, 0], [0, 0], [ItemID.plateIron, 0], [0, 0], [ItemID.plateIron, 0]], craftingHammers[i]);
        RecipeSystem.addRecipeToWorkbench(ItemID.bindingCobalt, 1, 0, [[ItemID.plateCobalt, 0], [0, 0], [ItemID.plateCobalt, 0], [0, 0], [ItemID.plateCobalt, 0], [0, 0], [ItemID.plateCobalt, 0], [0, 0], [ItemID.plateCobalt, 0]], craftingHammers[i]);
        RecipeSystem.addRecipeToWorkbench(ItemID.bindingDirium, 1, 0, [[ItemID.plateDirium, 0], [0, 0], [ItemID.plateDirium, 0], [0, 0], [ItemID.plateDirium, 0], [0, 0], [ItemID.plateDirium, 0], [0, 0], [ItemID.plateDirium, 0]], craftingHammers[i]);
    }
    RecipePattern.smallRecipe({id: 35, data: 0}, {id: 287, data: 0});
    RecipeSystem.addRecipeToWorkbench(102, 16, 0, [[20, 0], [20, 0], [20, 0], [20, 0], [20, 0], [20, 0], [0, 0], [0, 0], [0, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(65, 2, 0, [[280, 0], [0, 0], [280, 0], [280, 0], [280, 0], [280, 0], [280, 0], [0, 0], [280, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(355, 1, 0, [[35, 0], [35, 0], [35, 0], [5, 0], [5, 0], [5, 0], [280, 0], [0, 0], [280, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(116, 1, 0, [[0, 0], [340, 0], [0, 0], [264, 0], [49, 0], [264, 0], [49, 0], [49, 0], [49, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(154, 1, 0, [[ItemID.plateIron, 0], [331, 0], [ItemID.plateIron, 0], [ItemID.plateIron, 0], [54, 0], [ItemID.plateIron, 0], [0, 0], [ItemID.plateIron, 0], [0, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(158, 1, 0, [[4, 0], [4, 0], [4, 0], [4, 0], [54, 0], [4, 0], [4, 0], [331, 0], [4, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(356, 1, 0, [[0, 0], [0, 0], [0, 0], [76, 0], [331, 0], [76, 0], [1, 0], [1, 0], [1, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(359, 1, 0, [[0, 0], [ItemID.plateIron, 0], [0, 0], [ItemID.plateIron, 0], [0, 0], [ItemID.plateIron, 0], [265, 0], [ItemID.plateIron, 0], [0, 0]], 0);
});
ModAPI.addAPICallback("EquivalentAPI", function (mod) {
    System = mod.System;
    System.setValue(BlockID.cobbleAndesite, 0, 1);
    System.setValue(BlockID.cobbleDiorite, 0, 1);
    System.setValue(BlockID.cobbleGranite, 0, 1);
    System.setValue(ItemID.flakedFlint, 0, 4);
    System.setValue(ItemID.ingotDirium, 0, 4096);
    System.setValue(ItemID.ingotDowniron, 0, 512);
    System.setValue(ItemID.plantFiber, 0, 1);
    System.setValue(ItemID.plantRope, 0, 4);
    RecipeSystem.addRecipeToWorkbench(ItemID.alch, 1, 0, [[263, 0], [263, 0], [263, 0], [263, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], ItemID.philo, false);
    RecipeSystem.addRecipeToWorkbench(ItemID.mobius, 1, 0, [[ItemID.alch, 0], [ItemID.alch, 0], [ItemID.alch, 0], [ItemID.alch, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], ItemID.philo, false);
    RecipeSystem.addRecipeToWorkbench(ItemID.aeternal, 1, 0, [[ItemID.mobius, 0], [ItemID.mobius, 0], [ItemID.mobius, 0], [ItemID.mobius, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], ItemID.philo, false);
    RecipePattern.metalBlock({id: BlockID.fuel0, data: 0}, {id: ItemID.alch, data: 0});
    RecipePattern.metalBlock({id: BlockID.fuel1, data: 0}, {id: ItemID.mobius, data: 0});
    RecipePattern.metalBlock({id: BlockID.fuel2, data: 0}, {id: ItemID.aeternal, data: 0});
    RecipeSystem.addRecipeToWorkbench(ItemID.darkMatter, 1, 0, [[ItemID.aeternal, 0], [ItemID.aeternal, 0], [ItemID.aeternal, 0], [ItemID.aeternal, 0], [57, 0], [ItemID.aeternal, 0], [ItemID.aeternal, 0], [ItemID.aeternal, 0], [ItemID.aeternal, 0]], ItemID.philo, false);
    RecipeSystem.addRecipeToWorkbench(ItemID.redMatter, 1, 0, [[ItemID.aeternal, 0], [ItemID.aeternal, 0], [ItemID.aeternal, 0], [0, 0], [ItemID.darkMatter], [0, 0], [ItemID.aeternal, 0], [ItemID.aeternal, 0], [ItemID.aeternal, 0]], ItemID.philo, false);
});
const BLOCK_TYPE_STONE = "opaque";

